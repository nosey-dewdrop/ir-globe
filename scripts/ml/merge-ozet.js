/* merge-ozet.js — ML summarizer step 2b: embedding candidate-merge pass OVER
   the classical summary. build-ozet.js (Jaccard + engine keys) runs first and
   stays untouched; this pass then merges, WITHIN one layer+country-pair only,
   story lines whose titles a sentence encoder scores as the same story.

   Threshold 0.75 chosen from scripts/ml/eval-encoder.js on the engine-labeled
   corpus (2026-07-13: diff-pair false-merge 0.35%; the same-pair "false" hits
   at this level are mostly engine fragmentation, i.e. correct merges).

   Rewrites data/news/ozet.json + threads.json IN THE SAME SHAPE. Never touches
   data/ml/train.jsonl (training data stays engine-labeled only — no feedback
   loop). If the encoder is unavailable this exits 0 and the site ships the
   classical summary unchanged.

     node scripts/ml/merge-ozet.js
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../..");
const NEWS = path.join(ROOT, "data/news");
const THRESHOLD = 0.75;

(async () => {
  let fe;
  try {
    process.env.TRANSFORMERS_CACHE = process.env.TRANSFORMERS_CACHE || path.join(process.env.HOME || ".", ".hf-cache");
    const { pipeline } = await import("@xenova/transformers");
    fe = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  } catch (e) {
    console.log("ml merge: encoder unavailable, skipped (" + e.message + ")");
    process.exit(0);
  }

  const ozet = JSON.parse(fs.readFileSync(path.join(NEWS, "ozet.json"), "utf8"));

  /* collect: only pairs with >=2 lines can merge */
  const jobs = [];
  const titleSet = new Set();
  for (const layer of Object.keys(ozet).sort())
    for (const pairKey of Object.keys(ozet[layer]).sort()) {
      const lines = ozet[layer][pairKey];
      if (lines.length < 2) continue;
      jobs.push({ layer, pairKey, lines });
      lines.forEach((l) => titleSet.add(l.t));
    }

  /* embed each distinct title once, in batches */
  const titles = [...titleSet];
  const vec = new Map();
  const B = 64;
  for (let i = 0; i < titles.length; i += B) {
    const batch = titles.slice(i, i + B);
    const out = await fe(batch, { pooling: "mean", normalize: true });
    batch.forEach((t, k) => vec.set(t, out[k].data));
  }
  const cos = (a, b) => { let s = 0; const x = vec.get(a), y = vec.get(b); for (let i = 0; i < x.length; i++) s += x[i] * y[i]; return s; };

  let before = 0, after = 0, mergedPairs = 0;
  const examples = [];
  for (const { layer, pairKey, lines } of jobs) {
    before += lines.length;
    /* union-find over lines, deterministic order */
    const parent = lines.map((_, i) => i);
    const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
    for (let i = 0; i < lines.length; i++)
      for (let j = i + 1; j < lines.length; j++)
        if (cos(lines[i].t, lines[j].t) >= THRESHOLD) parent[find(j)] = find(i);
    const groups = {};
    lines.forEach((l, i) => { (groups[find(i)] = groups[find(i)] || []).push(l); });
    const merged = Object.keys(groups).sort((a, b) => a - b).map((g) => {
      const ms = groups[g];
      if (ms.length === 1) return ms[0];
      /* rep = biggest thread, tie -> newest; keep exact output shape */
      const rep = ms.slice().sort((a, b) => b.n - a.n || String(b.d).localeCompare(String(a.d)))[0];
      if (examples.length < 6 && ms.length === 2) examples.push(`${layer} ${pairKey}: "${ms[0].t}" + "${ms[1].t}"`);
      return {
        t: rep.t,
        n: ms.reduce((s, x) => s + x.n, 0),
        s: rep.s,
        d: ms.reduce((m, x) => (String(x.d) > m ? x.d : m), String(rep.d)),
        e: rep.e || ms.map((x) => x.e).find(Boolean) || null,
      };
    });
    merged.sort((a, b) => b.n - a.n || String(b.d).localeCompare(String(a.d)));
    if (merged.length < lines.length) mergedPairs++;
    after += merged.length;
    ozet[layer][pairKey] = merged;
  }

  fs.writeFileSync(path.join(NEWS, "ozet.json"), JSON.stringify(ozet));

  /* rebuild the ×N kaynak sidecar exactly like build-ozet does */
  const threads = {};
  for (const layer of Object.keys(ozet))
    for (const pairKey of Object.keys(ozet[layer]))
      for (const t of ozet[layer][pairKey])
        if (t.n > 1 && t.t) threads[t.t] = t.n;
  fs.writeFileSync(path.join(NEWS, "threads.json"), JSON.stringify(threads));

  console.log(`ml merge: ${before} -> ${after} story lines in multi-line pairs (${before - after} folded, ${mergedPairs} pairs affected, threshold ${THRESHOLD})`);
  console.log(`multi-source stories now: ${Object.keys(threads).length}`);
  examples.forEach((x) => console.log("  merged: " + x));
})().catch((e) => { console.log("ml merge: failed, summary left classical (" + e.message + ")"); process.exit(0); });
