/* build-ozet.js — API-less extractive summarizer over data/news/*.json.
   "makaleleri kimse okumaz" -> compress each country-pair's headline pile into
   a few STORY lines: near-duplicate headlines are clustered (token Jaccard),
   the most central headline represents the cluster (degree centrality — the
   deterministic core of TextRank), and where the relation-extraction engine
   can code the story, a compact structured line rides along.

   No API, no LLM, no network. Output stays lean on purpose (no URLs — views
   already load the per-layer news files and can look a title up):

     data/news/ozet.json = { layer: { pairKey: [
       { t: representative title, n: cluster size, s: source, d: latest date,
         e: {s, r, root, event, goldstein} | null } ] } }

     node scripts/build-ozet.js
*/

const fs = require("fs");
const path = require("path");
const { extractAll } = require("./lib/extract/relate");

const ROOT = path.join(__dirname, "..");
const NEWS = path.join(ROOT, "data/news");
const SIM = 0.5;          // Jaccard threshold: same story
const MAX_CLUSTERS = 6;   // per pair, biggest/newest first

const STOP = new Set(("a an and are as at be but by for from has have in into is it its of on or over " +
  "s says said that the their they this to under was were will with after amid new says say").split(" "));

function tokens(title) {
  return new Set(
    String(title).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
      .filter((w) => w.length >= 3 && !STOP.has(w))
  );
}

/* jaccard OR containment — containment catches a short headline nested in a
   long one ("Morocco France treaty" vs the same + a trailing subclause) */
function sim(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return Math.max(inter / (a.size + b.size - inter), inter / Math.min(a.size, b.size));
}

/* cluster one pair's articles, newest first so reps skew current.
   Primary grouping = the extraction engine's own coding: same unordered pair +
   same cameo root = the same story thread, however differently two outlets
   word it. Token similarity only mops up the uncoded leftovers. */
function clusterPair(arts) {
  const items = arts
    .filter((x) => x && x.title)
    .map((x) => ({ ...x, tok: tokens(x.title), ev: extractAll(x.title)[0] || null }))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const clusters = [];
  const threads = new Map(); // "a|b|root" -> cluster
  for (const it of items) {
    let home = null;
    if (it.ev) {
      const tkey = [it.ev.s, it.ev.r].sort().join("|") + "|" + it.ev.root;
      home = threads.get(tkey);
      if (!home) { home = { items: [] }; threads.set(tkey, home); clusters.push(home); }
    } else {
      for (const c of clusters) {
        if (c.items.some((m) => sim(it.tok, m.tok) >= SIM)) { home = c; break; }
      }
      if (!home) { home = { items: [] }; clusters.push(home); }
    }
    home.items.push(it);
  }
  for (const c of clusters) {
    // representative = highest total similarity to the rest (degree centrality)
    let best = c.items[0], bestScore = -1;
    for (const i of c.items) {
      let score = 0;
      for (const j of c.items) if (i !== j) score += sim(i.tok, j.tok);
      if (score > bestScore) { bestScore = score; best = i; }
    }
    c.rep = best;
    c.latest = c.items.reduce((m, x) => (String(x.date || "") > m ? x.date : m), String(c.rep.date || ""));
  }
  clusters.sort((a, b) => b.items.length - a.items.length || String(b.latest).localeCompare(String(a.latest)));
  return clusters.slice(0, MAX_CLUSTERS).map((c) => {
    const ev = c.rep.ev;
    return {
      t: c.rep.title, n: c.items.length, s: c.rep.source || "", d: c.latest,
      e: ev ? { s: ev.s, r: ev.r, root: ev.root, event: ev.event, goldstein: ev.goldstein } : null,
      m: c.items.map((i) => i.title), how: c.items[0].ev ? "engine" : "token",
    };
  });
}

const files = fs.readdirSync(NEWS).filter((f) => f.endsWith(".json") && !["meta.json", "digest.json", "ozet.json", "threads.json"].includes(f));
const out = {};
const mlRows = []; // multi-source threads -> training corpus for the learned summarizer
let arts = 0, stories = 0;
for (const f of files) {
  const layer = f.replace(/\.json$/, "");
  const data = JSON.parse(fs.readFileSync(path.join(NEWS, f), "utf8"));
  out[layer] = {};
  for (const pairKey of Object.keys(data)) {
    const list = data[pairKey] || [];
    arts += list.length;
    const cl = clusterPair(list);
    if (cl.length) {
      out[layer][pairKey] = cl.map(({ t, n, s, d, e }) => ({ t, n, s, d, e }));
      stories += cl.length;
      for (const c of cl) if (c.n >= 2) mlRows.push({ layer, pair: pairKey, rep: c.t, m: c.m, how: c.how, d: c.d });
    }
  }
}

fs.writeFileSync(path.join(NEWS, "ozet.json"), JSON.stringify(out));

/* data/ml/train.jsonl — self-supervised corpus for the ML summarizer phase:
   every multi-source thread is a labeled example (members = same-story titles,
   rep = the pick). Engine-keyed threads ("how":"engine") pair paraphrases even
   with zero token overlap — those are the gold positives a learned encoder
   trains on. Accumulates across runs, deduped by member-set hash. */
const crypto = require("crypto");
const ML = path.join(ROOT, "data/ml");
fs.mkdirSync(ML, { recursive: true });
const trainPath = path.join(ML, "train.jsonl");
const rowKey = (m) => crypto.createHash("md5").update(m.slice().sort().join("\n")).digest("hex").slice(0, 16);
const seen = new Set();
const lines = [];
if (fs.existsSync(trainPath)) {
  for (const line of fs.readFileSync(trainPath, "utf8").split("\n")) {
    if (!line.trim()) continue;
    lines.push(line);
    try { seen.add(JSON.parse(line).k); } catch {}
  }
}
let freshRows = 0;
for (const r of mlRows) {
  const k = rowKey(r.m);
  if (seen.has(k)) continue;
  seen.add(k);
  lines.push(JSON.stringify({ k, ...r }));
  freshRows++;
}
fs.writeFileSync(trainPath, lines.join("\n") + "\n");
console.log(`wrote data/ml/train.jsonl (+${freshRows} new, ${lines.length} threads total)`);

/* tiny sidecar for the akış "×N kaynak" badge: representative title → source
   count, ONLY for multi-source threads (n>1). ~12 KB gzip vs 137 KB for the
   full ozet, so akış can show corroboration without loading the summaries. */
const threads = {};
for (const layer of Object.keys(out))
  for (const pairKey of Object.keys(out[layer]))
    for (const t of out[layer][pairKey])
      if (t.n > 1 && t.t) threads[t.t] = t.n;
fs.writeFileSync(path.join(NEWS, "threads.json"), JSON.stringify(threads));
console.log(`wrote data/news/threads.json (${Object.keys(threads).length} multi-source stories)`);

const kb = Math.round(fs.statSync(path.join(NEWS, "ozet.json")).size / 1024);
console.log(`articles in:   ${arts}`);
console.log(`story lines:   ${stories}  (${(arts / stories).toFixed(1)}x compression)`);
console.log(`coded lines:   ${Object.values(out).flatMap((l) => Object.values(l)).flat().filter((c) => c.e).length}`);
console.log(`wrote data/news/ozet.json (${kb} KB)`);
