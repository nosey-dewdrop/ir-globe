/* extract-relations.js — run the deterministic relation-extraction engine over
   every headline in data/news/*.json and emit data/events/<layer>.json:
   directed, event-coded, Goldstein-scored ties derived FROM THE TEXT (not from
   which RSS query fetched the article).

   No API, no network. Prints an honest coverage report (how many headlines the
   engine could confidently code) so we can watch precision/recall improve.

     node scripts/extract-relations.js            (all layers)
     node scripts/extract-relations.js --report   (coverage only, no writes)
*/

const fs = require("fs");
const path = require("path");
const { extract } = require("./lib/extract/relate");

const ROOT = path.join(__dirname, "..");
const NEWS = path.join(ROOT, "data/news");
const OUT = path.join(ROOT, "data/events");
const MIN_CONF = 0.8;
const reportOnly = process.argv.includes("--report");

function headlines() {
  const files = fs.readdirSync(NEWS).filter((f) => f.endsWith(".json") && !["meta.json", "digest.json"].includes(f));
  const rows = [];
  for (const f of files) {
    const layer = f.replace(/\.json$/, "");
    const data = JSON.parse(fs.readFileSync(path.join(NEWS, f), "utf8"));
    for (const pairKey of Object.keys(data)) {
      for (const art of data[pairKey] || []) {
        if (art && art.title) rows.push({ layer, pairKey, ...art });
      }
    }
  }
  return rows;
}

const rows = headlines();
const seenTitle = new Set();
let total = 0, coded = 0, kept = 0;
const byLayer = {}; // layer -> [event]

for (const row of rows) {
  const t = row.title.trim();
  if (seenTitle.has(t)) continue; // dedup identical headlines across pairs
  seenTitle.add(t);
  total++;

  const ev = extract(t);
  if (!ev) continue;
  coded++;
  if (ev.confidence < MIN_CONF) continue;
  kept++;

  (byLayer[row.layer] ||= []).push({
    s: ev.s, r: ev.r, event: ev.event, root: ev.root, goldstein: ev.goldstein,
    confidence: ev.confidence, title: t, source: row.source, url: row.url, date: row.date,
  });
}

console.log(`\nheadlines (unique): ${total}`);
console.log(`event-coded:        ${coded}  (${((coded / total) * 100).toFixed(1)}%)`);
console.log(`kept (conf>=${MIN_CONF}):   ${kept}  (${((kept / total) * 100).toFixed(1)}%)`);
console.log(`layers with ties:   ${Object.keys(byLayer).length}`);
const sample = Object.values(byLayer).flat().slice(0, 8);
console.log("\nsample coded ties:");
for (const e of sample) console.log(`  ${e.s} →(${e.event} ${e.goldstein}) ${e.r}   « ${e.title.slice(0, 70)} »`);

if (!reportOnly) {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [layer, events] of Object.entries(byLayer)) {
    fs.writeFileSync(path.join(OUT, `${layer}.json`), JSON.stringify({ layer, generated: new Date().toISOString().slice(0, 10), count: events.length, events }, null, 1));
  }
  console.log(`\nwrote ${Object.keys(byLayer).length} files to data/events/`);
}
