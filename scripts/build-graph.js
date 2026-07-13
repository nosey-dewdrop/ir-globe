/* build-graph.js — knowledge-graph analytics over the consolidated event store
   (data/events/index.json). 100% deterministic, no API, no deps.

   Three products, one file (data/events/graph.json):
   1. centrality  — per country: degree (distinct partners), weighted degree
                    (event count), PageRank over the undirected pair graph
                    (edge weight = event count), tone (mean Goldstein).
   2. communities — greedy single-level modularity clustering (Louvain phase-1
                    with a fixed, sorted visit order so runs are reproducible).
   3. spikes      — per pair: latest ISO week's event count vs that pair's own
                    trailing history (z-score over the previous 12 weeks,
                    zero-padded). Flagged when z >= 2 and n >= 3.

     node scripts/build-graph.js
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const IDX = JSON.parse(fs.readFileSync(path.join(ROOT, "data/events/index.json"), "utf8"));
const r3 = (x) => Number(x.toFixed(3));

/* ── build the undirected weighted graph from pairs ── */
const nodes = new Set();
const edges = []; // {a, b, w, gold}
for (const [pair, p] of Object.entries(IDX.pairs)) {
  const [a, b] = pair.split("|");
  nodes.add(a); nodes.add(b);
  edges.push({ a, b, w: p.n, gold: p.avg });
}
const NODES = [...nodes].sort();
const adj = new Map(NODES.map((n) => [n, []]));
for (const e of edges) {
  adj.get(e.a).push({ to: e.b, w: e.w });
  adj.get(e.b).push({ to: e.a, w: e.w });
}

/* ── centrality ── */
const deg = {}, wdeg = {}, toneSum = {}, toneN = {};
for (const n of NODES) { deg[n] = adj.get(n).length; wdeg[n] = adj.get(n).reduce((s, x) => s + x.w, 0); }
for (const e of edges) {
  for (const k of [e.a, e.b]) { toneSum[k] = (toneSum[k] || 0) + e.gold * e.w; toneN[k] = (toneN[k] || 0) + e.w; }
}

/* PageRank, damping 0.85, weighted, 50 iterations (converges well before) */
function pagerank() {
  const d = 0.85, N = NODES.length;
  let pr = Object.fromEntries(NODES.map((n) => [n, 1 / N]));
  for (let it = 0; it < 50; it++) {
    const next = {};
    let dangling = 0;
    for (const n of NODES) if (!wdeg[n]) dangling += pr[n];
    for (const n of NODES) next[n] = (1 - d) / N + (d * dangling) / N;
    for (const n of NODES) {
      if (!wdeg[n]) continue;
      const share = (d * pr[n]) / wdeg[n];
      for (const { to, w } of adj.get(n)) next[to] += share * w;
    }
    pr = next;
  }
  return pr;
}
const PR = pagerank();

/* ── communities: greedy modularity, deterministic (sorted visit order) ── */
function communities() {
  const m2 = edges.reduce((s, e) => s + e.w, 0) * 2; // sum of all degrees
  const com = Object.fromEntries(NODES.map((n) => [n, n]));
  const comWdeg = Object.fromEntries(NODES.map((n) => [n, wdeg[n]])); // total degree per community
  let moved = true, rounds = 0;
  while (moved && rounds < 20) {
    moved = false; rounds++;
    for (const n of NODES) {
      const cur = com[n];
      // weight from n to each neighboring community
      const toCom = {};
      for (const { to, w } of adj.get(n)) toCom[com[to]] = (toCom[com[to]] || 0) + w;
      comWdeg[cur] -= wdeg[n]; // take n out
      let best = cur, bestGain = 0;
      for (const c of Object.keys(toCom).sort()) {
        const gain = toCom[c] / m2 - (comWdeg[c] * wdeg[n]) / (m2 * m2 / 2);
        const curGain = (toCom[cur] || 0) / m2 - (comWdeg[cur] * wdeg[n]) / (m2 * m2 / 2);
        if (gain - curGain > bestGain + 1e-12) { bestGain = gain - curGain; best = c; }
      }
      comWdeg[best] += wdeg[n];
      if (best !== cur) { com[n] = best; moved = true; }
    }
  }
  const groups = {};
  for (const n of NODES) (groups[com[n]] ||= []).push(n);
  return Object.values(groups)
    .filter((g) => g.length >= 3)
    .map((g) => g.sort((a, b) => (PR[b] || 0) - (PR[a] || 0)))
    .sort((a, b) => b.length - a.length);
}

/* ── spikes: latest active week per pair vs its trailing 12 weeks ── */
function weekSeq(from, to) {
  // enumerate ISO weeks between two "YYYY-Www" labels using the sorted global list
  const all = IDX.weeks;
  return all.slice(all.indexOf(from), all.indexOf(to) + 1);
}
const spikes = [];
const lastWeek = IDX.weeks[IDX.weeks.length - 1];
for (const [pair, p] of Object.entries(IDX.pairs)) {
  const weeks = Object.keys(p.weekly);
  const latest = weeks[weeks.length - 1];
  // only score pairs active in the CURRENT (latest global) week — a spike is news, not history
  if (latest !== lastWeek) continue;
  const n = p.weekly[latest].n;
  if (n < 3) continue;
  const windowWeeks = weekSeq(IDX.weeks[Math.max(0, IDX.weeks.indexOf(latest) - 12)], latest).slice(0, -1);
  if (windowWeeks.length < 4) continue; // not enough history to call anything a spike
  const hist = windowWeeks.map((w) => (p.weekly[w] ? p.weekly[w].n : 0));
  const mean = hist.reduce((s, x) => s + x, 0) / hist.length;
  const sd = Math.sqrt(hist.reduce((s, x) => s + (x - mean) ** 2, 0) / hist.length) || 0.5;
  const z = (n - mean) / sd;
  if (z >= 2) spikes.push({ pair, week: latest, n, mean: r3(mean), z: r3(z), avg: p.weekly[latest].avg });
}
spikes.sort((a, b) => b.z - a.z);

/* ── write ── */
const centrality = {};
for (const n of NODES) {
  centrality[n] = {
    deg: deg[n], wdeg: wdeg[n],
    pr: r3(PR[n] * 1000), // per-mille for readability
    tone: toneN[n] ? r3(toneSum[n] / toneN[n]) : 0,
  };
}
const top = NODES.slice().sort((a, b) => centrality[b].pr - centrality[a].pr).slice(0, 20);
const coms = communities();

const out = {
  generated: new Date().toISOString().slice(0, 10),
  week: lastWeek,
  nodes: NODES.length, edges: edges.length,
  top: top.map((n) => ({ key: n, ...centrality[n] })),
  centrality,
  communities: coms,
  spikes: spikes.slice(0, 40),
};
fs.writeFileSync(path.join(ROOT, "data/events/graph.json"), JSON.stringify(out, null, 1));
console.log(`nodes ${NODES.length} · edges ${edges.length}`);
console.log(`top pagerank: ${top.slice(0, 6).map((n) => `${n} ${centrality[n].pr}`).join(", ")}`);
console.log(`communities (>=3): ${coms.length} — sizes ${coms.map((c) => c.length).join(",")}`);
console.log(`spikes this week: ${spikes.length}${spikes[0] ? ` — top: ${spikes[0].pair} n=${spikes[0].n} z=${spikes[0].z}` : ""}`);
console.log("wrote data/events/graph.json");
