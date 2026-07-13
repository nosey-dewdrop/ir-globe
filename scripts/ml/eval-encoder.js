/* eval-encoder.js — can a sentence encoder redo, ON ITS OWN, the story-matching
   our deterministic engine produced? Positives = title pairs the ENGINE put in
   the same thread (data/ml/train.jsonl, how=engine — includes zero-token-overlap
   paraphrases). Negatives = titles from DIFFERENT country-pairs in the SAME
   layer (hard negatives: same domain vocabulary, different story).

   Reports the cosine distributions and a threshold sweep, so the merge pass
   threshold is chosen from measured numbers, not vibes.

     node scripts/ml/eval-encoder.js
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../..");
process.env.TRANSFORMERS_CACHE = process.env.TRANSFORMERS_CACHE || path.join(process.env.HOME || ".", ".hf-cache");

/* deterministic PRNG — eval must print the same numbers every run */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

(async () => {
  const rows = fs.readFileSync(path.join(ROOT, "data/ml/train.jsonl"), "utf8")
    .split("\n").filter(Boolean).map((l) => JSON.parse(l));

  /* positive pairs: engine-keyed threads only (the trustworthy labels) */
  const positives = [];
  for (const r of rows) {
    if (r.how !== "engine") continue;
    for (let i = 0; i < r.m.length; i++)
      for (let j = i + 1; j < r.m.length; j++)
        positives.push([r.m[i], r.m[j]]);
  }

  /* hard negatives: same layer, different country-pair, deterministic sample */
  const rnd = mulberry32(42);
  const byLayer = {};
  for (const r of rows) (byLayer[r.layer] = byLayer[r.layer] || []).push(r);
  const negatives = [];
  const layers = Object.keys(byLayer).sort();
  while (negatives.length < positives.length * 2) {
    const layer = layers[Math.floor(rnd() * layers.length)];
    const list = byLayer[layer];
    if (list.length < 2) continue;
    const a = list[Math.floor(rnd() * list.length)];
    const b = list[Math.floor(rnd() * list.length)];
    if (a.pair === b.pair) continue;
    negatives.push([a.m[Math.floor(rnd() * a.m.length)], b.m[Math.floor(rnd() * b.m.length)]]);
  }

  /* OPERATIVE negatives: the merge pass only ever merges WITHIN one country
     pair, so the risk that matters is "same pair, different story threads".
     Rows sharing layer+pair are exactly that. */
  const byPair = {};
  for (const r of rows) (byPair[r.layer + "|" + r.pair] = byPair[r.layer + "|" + r.pair] || []).push(r);
  const opNeg = [];
  for (const k of Object.keys(byPair).sort()) {
    const list = byPair[k];
    for (let i = 0; i < list.length; i++)
      for (let j = i + 1; j < list.length; j++)
        opNeg.push([list[i].rep, list[j].rep]);
  }

  /* embed every distinct title once */
  const titles = [...new Set([...positives.flat(), ...negatives.flat(), ...opNeg.flat()])];
  const { pipeline } = await import("@xenova/transformers");
  const fe = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  const vec = new Map();
  const B = 64;
  for (let i = 0; i < titles.length; i += B) {
    const batch = titles.slice(i, i + B);
    const out = await fe(batch, { pooling: "mean", normalize: true });
    batch.forEach((t, k) => vec.set(t, out[k].data));
  }

  const dot = (x, y) => { let s = 0; for (let i = 0; i < x.length; i++) s += x[i] * y[i]; return s; };
  const cos = (pairs) => pairs.map(([a, b]) => dot(vec.get(a), vec.get(b)));
  const pc = cos(positives), nc = cos(negatives), oc = cos(opNeg);
  const stats = (xs) => {
    const s = xs.slice().sort((a, b) => a - b);
    const q = (p) => s[Math.floor(p * (s.length - 1))];
    return `min ${s[0].toFixed(2)} p25 ${q(0.25).toFixed(2)} median ${q(0.5).toFixed(2)} p75 ${q(0.75).toFixed(2)} max ${s[s.length - 1].toFixed(2)}`;
  };

  console.log(`titles embedded: ${titles.length}`);
  console.log(`positives (engine-thread pairs): ${pc.length} -> ${stats(pc)}`);
  console.log(`negatives (same layer, diff pair): ${nc.length} -> ${stats(nc)}`);
  console.log(`OPERATIVE neg (same pair, diff thread): ${oc.length} -> ${stats(oc)}`);
  console.log("\nthreshold  catch(pos>=t)  false(diff-pair)  false(SAME-pair)");
  for (let t = 0.4; t <= 0.86; t += 0.05) {
    const tpr = pc.filter((x) => x >= t).length / pc.length;
    const fpr = nc.filter((x) => x >= t).length / nc.length;
    const opr = oc.filter((x) => x >= t).length / oc.length;
    console.log(`   ${t.toFixed(2)}        ${(tpr * 100).toFixed(1)}%          ${(fpr * 100).toFixed(2)}%            ${(opr * 100).toFixed(2)}%`);
  }
  /* show the worst would-be false merges at 0.65 so the risk is inspectable */
  const bad = opNeg.map(([a, b]) => ({ a, b, c: dot(vec.get(a), vec.get(b)) }))
    .filter((x) => x.c >= 0.65).sort((x, y) => y.c - x.c).slice(0, 5);
  if (bad.length) { console.log("\nsame-pair pairs that WOULD merge at 0.65:"); bad.forEach((x) => console.log(`  ${x.c.toFixed(2)}  "${x.a}"  ×  "${x.b}"`)); }
})().catch((e) => { console.error("eval failed:", e.message); process.exit(1); });
