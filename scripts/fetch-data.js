/* fetch-data.js — layer data orchestrator. Runs the per-source fetchers under
   scripts/sources/, validates, and writes data/layers/<key>.json + data/meta.json.
   A source failure NEVER touches that layer's existing JSON (fail-isolated,
   no partial writes). Run weekly by .github/workflows/data.yml or by hand:

     node scripts/fetch-data.js --only goc,yardim,diplomasi   (default: all automated)
*/

const fs = require("fs");
const path = require("path");
const { validateLayer } = require("./lib/validate");
const { writeLayer } = require("./lib/normalize");

const ROOT = path.join(__dirname, "..");

/* automated sources — safe to run unattended. Manual/one-time converters
   (sipri, baci, gsdb, aiddata) are separate scripts run locally with --input. */
const AUTOMATED = ["goc", "yardim", "diplomasi", "tahil", "kablo"]; // + enerji (needs COMTRADE_KEY); siber deferred (EuRepoC has no open endpoint)

const onlyArg = process.argv.find((a) => a.startsWith("--only"));
const wanted = onlyArg
  ? (onlyArg.includes("=") ? onlyArg.split("=")[1] : process.argv[process.argv.indexOf(onlyArg) + 1]).split(",")
  : AUTOMATED;

(async () => {
  const results = [];
  let failed = 0;
  for (const key of wanted) {
    try {
      const mod = require(`./sources/${key}.js`);
      process.stdout.write(`▸ ${key}…\n`);
      const layer = await mod.build();
      validateLayer(layer);
      const w = writeLayer(layer);
      results.push(w);
      console.log(`  ✓ ${w.rel}: ${w.ties} ties, ${(w.bytes / 1024).toFixed(0)}KB`);
    } catch (e) {
      failed++;
      console.error(`  ✗ ${key} FAILED (existing JSON untouched): ${e.message}`);
    }
  }

  /* recompute site meta from ALL layer files (changed or not) */
  const index = JSON.parse(fs.readFileSync(path.join(ROOT, "data/layers/index.json"), "utf8"));
  let ties = 0;
  const countries = new Set();
  for (const l of index) {
    let lay;
    try { lay = JSON.parse(fs.readFileSync(path.join(ROOT, `data/layers/${l.key}.json`), "utf8")); }
    catch (e) { console.warn(`  meta: ${l.key}.json okunamadı, atlandı (${e.code || e.message})`); continue; }
    ties += (lay.ties || []).length;
    (lay.ties || []).forEach((t) => { countries.add(t.s); countries.add(t.r); });
  }
  fs.writeFileSync(path.join(ROOT, "data/meta.json"),
    JSON.stringify({ updated: new Date().toISOString().slice(0, 10), ties, countries: countries.size, layers: index.length }, null, 1) + "\n");
  console.log(`meta: ${index.length} layers, ${ties} ties, ${countries.size} countries`);

  if (failed && failed === wanted.length) process.exit(1); // all failed = real problem
})();
