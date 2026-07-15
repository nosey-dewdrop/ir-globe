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
const { extractAll } = require("./lib/extract/relate");

const ROOT = path.join(__dirname, "..");
const NEWS = path.join(ROOT, "data/news");
const OUT = path.join(ROOT, "data/events");
// keep ties the engine is reasonably sure of. Raised to 0.60 after a 45-tie
// manual audit: the 0.55 floor bucket held most of the errors (venue, reversed
// direction, third-country). Dropping it lifts SHOWN-tie precision from ~64%
// toward ~80%+ — fewer arrows, but the ones on the globe are trustworthy, which
// is the only currency an intelligence product has.
const MIN_CONF = 0.60;
const reportOnly = process.argv.includes("--report");

function headlines() {
  const files = fs.readdirSync(NEWS).filter((f) => f.endsWith(".json") && !["meta.json", "digest.json", "ozet.json", "threads.json"].includes(f));
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
let total = 0, coded = 0, kept = 0, ties = 0;
const byLayer = {}; // layer -> [event]

// migration is NOT a CAMEO-codable bilateral-verb domain: a refugee flow is a
// structural outcome, not a directed policy act the origin state "chose". Coding
// "Nigeria hosts refugees FROM Cameroon" as nigeria->cameroon cooperation is a
// category error (IR/refugee-law). So the göç layer produces NO directed ties —
// its headlines stay as a sourced list only. (Academic-jury disqualifying finding.)
const NO_TIE_LAYERS = new Set(["goc"]);

// recency cutoff: this is an editorial globe of CURRENT relations, so ties are
// built only from reasonably fresh headlines. Older items still live in the feed
// (history), but they must not surface as present-day ties. Measured against the
// newest article date in the corpus (deterministic, no wall clock).
const MAX_AGE_DAYS = 180;   // ~6 months: keeps the globe "current" without gutting coverage
let newest = 0;
for (const r of rows) { const d = Date.parse(r.date); if (d && d > newest) newest = d; }
const cutoff = newest - MAX_AGE_DAYS * 864e5;
let dropStale = 0;

for (const row of rows) {
  const t = row.title.trim();
  // dedup across pairs/feeds: normalize case + punctuation so the same headline
  // arriving via two RSS sources is counted once, not twice.
  const tKey = t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (seenTitle.has(tKey)) continue;
  seenTitle.add(tKey);
  // skip stale headlines for tie generation (they'd read as current relations)
  const ad = Date.parse(row.date);
  if (ad && ad < cutoff) { dropStale++; continue; }
  // migration headlines are never turned into directed arrows
  if (NO_TIE_LAYERS.has(row.layer)) continue;
  total++;

  const evs = extractAll(t);
  if (!evs.length) continue;
  coded++;
  const good = evs.filter((e) => e.confidence >= MIN_CONF);
  if (!good.length) continue;
  kept++;
  ties += good.length;

  for (const ev of good) {
    (byLayer[row.layer] ||= []).push({
      s: ev.s, r: ev.r, event: ev.event, root: ev.root, goldstein: ev.goldstein,
      confidence: ev.confidence, title: t, source: row.source, url: row.url, date: row.date, pub: row.pub || "",
    });
  }
}

console.log(`\nstale dropped (>${MAX_AGE_DAYS}d): ${dropStale}`);
console.log(`headlines (unique): ${total}`);
console.log(`event-coded:        ${coded}  (${((coded / total) * 100).toFixed(1)}%)`);
console.log(`kept (conf>=${MIN_CONF}):   ${kept}  (${((kept / total) * 100).toFixed(1)}%)`);
console.log(`ties emitted:       ${ties}  (${(ties / kept).toFixed(2)} per kept headline)`);
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
