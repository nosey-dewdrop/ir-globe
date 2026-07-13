/* build-event-index.js — consolidate data/events/<layer>.json into ONE
   data/events/index.json: cross-source event dedupe + weekly per-pair time
   series. Deterministic, no API. Run right after extract-relations.js.

   Dedupe: the same real-world event reaches us via several outlets, often in
   mirrored direction ("Morocco, France sign treaty" / "France-Morocco treaty
   details"). Merge key = layer + unordered pair + cameo root + ISO week. The
   merged event keeps the direction most articles agree on (tie -> highest
   confidence article wins), the earliest date, and every distinct source.

   index.json is the input for the graph analytics (A3) and the UI (A5):
     pairs["a|b"]   -> { n, avg, last, layers, weekly: { "2026-W23": {n, avg} } }
     countries[key] -> { n, partners, avg }

     node scripts/build-event-index.js
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const EVDIR = path.join(ROOT, "data/events");

/* ISO-8601 week ("2026-W23") from a YYYY-MM-DD string, UTC, deterministic. */
function isoWeek(dateStr) {
  const d = new Date(String(dateStr || "") + "T00:00:00Z");
  if (isNaN(d)) return null;
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7) + 3); // thursday decides the week-year
  const jan4 = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const week = 1 + Math.round(((d - jan4) / 86400000 - 3 + ((jan4.getUTCDay() + 6) % 7)) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

const files = fs.readdirSync(EVDIR).filter((f) => f.endsWith(".json") && !["index.json", "graph.json"].includes(f));
let raw = 0, undated = 0;
const merged = new Map(); // mergeKey -> consolidated event

for (const f of files) {
  const layer = f.replace(/\.json$/, "");
  const { events = [] } = JSON.parse(fs.readFileSync(path.join(EVDIR, f), "utf8"));
  for (const e of events) {
    raw++;
    const week = isoWeek(e.date);
    if (!week) { undated++; continue; }
    const [a, b] = [e.s, e.r].sort();
    const key = `${layer}|${a}|${b}|${e.root}|${week}`;
    let m = merged.get(key);
    if (!m) {
      m = { layer, pair: `${a}|${b}`, root: e.root, event: e.event, goldstein: e.goldstein,
            week, date: e.date, votes: new Map(), best: e, sources: new Set() };
      merged.set(key, m);
    }
    const dir = `${e.s}>${e.r}`;
    m.votes.set(dir, (m.votes.get(dir) || 0) + 1);
    if (e.date < m.date) m.date = e.date;
    if (e.confidence > m.best.confidence) m.best = e;
    if (e.source) m.sources.add(e.source);
  }
}

/* resolve each merged event's direction: majority vote, tie -> best article */
const events = [...merged.values()].map((m) => {
  let dir = null, top = -1;
  for (const [d, n] of m.votes) if (n > top) { top = n; dir = d; }
  const tie = [...m.votes.values()].filter((n) => n === top).length > 1;
  const [s, r] = (tie ? `${m.best.s}>${m.best.r}` : dir).split(">");
  return { s, r, pair: m.pair, layer: m.layer, root: m.root, event: m.event,
           goldstein: m.goldstein, week: m.week, date: m.date,
           articles: [...m.votes.values()].reduce((x, y) => x + y, 0),
           sources: m.sources.size };
});

/* per-pair weekly series + per-country degree stats */
const pairs = {}, countries = {};
const r2 = (x) => Number(x.toFixed(2));
for (const e of events) {
  const p = (pairs[e.pair] ||= { n: 0, sum: 0, last: e.date, layers: {}, weekly: {} });
  p.n++; p.sum += e.goldstein;
  if (e.date > p.last) p.last = e.date;
  p.layers[e.layer] = (p.layers[e.layer] || 0) + 1;
  const w = (p.weekly[e.week] ||= { n: 0, sum: 0 });
  w.n++; w.sum += e.goldstein;
  for (const k of [e.s, e.r]) {
    const c = (countries[k] ||= { n: 0, sum: 0, partners: new Set() });
    c.n++; c.sum += e.goldstein;
    c.partners.add(k === e.s ? e.r : e.s);
  }
}
for (const p of Object.values(pairs)) {
  p.avg = r2(p.sum / p.n); delete p.sum;
  for (const w of Object.values(p.weekly)) { w.avg = r2(w.sum / w.n); delete w.sum; }
  p.weekly = Object.fromEntries(Object.entries(p.weekly).sort(([a], [b]) => a.localeCompare(b)));
}
const countriesOut = {};
for (const [k, c] of Object.entries(countries).sort(([a], [b]) => a.localeCompare(b))) {
  countriesOut[k] = { n: c.n, partners: c.partners.size, avg: r2(c.sum / c.n) };
}

const weeks = [...new Set(events.map((e) => e.week))].sort();
const dates = events.map((e) => e.date).sort();
const index = {
  generated: new Date().toISOString().slice(0, 10),
  window: { from: dates[0] || null, to: dates[dates.length - 1] || null },
  raw, merged: events.length, duplicatesRemoved: raw - undated - events.length, undated,
  weeks,
  pairs: Object.fromEntries(Object.entries(pairs).sort(([a], [b]) => a.localeCompare(b))),
  countries: countriesOut,
  events: events.sort((a, b) => a.date.localeCompare(b.date) || a.pair.localeCompare(b.pair)),
};

fs.writeFileSync(path.join(EVDIR, "index.json"), JSON.stringify(index, null, 1));
console.log(`raw ties:            ${raw}`);
console.log(`undated (skipped):   ${undated}`);
console.log(`merged events:       ${events.length}  (${raw - undated - events.length} duplicates folded)`);
console.log(`pairs:               ${Object.keys(pairs).length}`);
console.log(`countries:           ${Object.keys(countriesOut).length}`);
console.log(`weeks:               ${weeks[0]} .. ${weeks[weeks.length - 1]} (${weeks.length})`);
console.log(`wrote data/events/index.json`);
