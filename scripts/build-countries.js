/* build-countries.js — generate data/countries.json, the single country registry.
   Sources: data/countries.geojson (Natural Earth, 177 features) + the hand-tuned
   coordinates that used to live in js/data.js COORDS (kept verbatim — they were
   placed for good arc endpoints) + the alias/display maps that used to be
   duplicated across js/main.js and scripts/build-seo.js.

   Entry: { key, iso3, coords:[lat,lng], slug, disp, aliases[] }
   - key    = our canonical lowercase name (existing data keys preserved)
   - aliases = every lowercase name that should resolve to this key
                (geojson ADMIN/NAME/NAME_LONG/FORMAL_EN, used by the globe's
                polygon lookup and later by the news feed matcher)

   run: node scripts/build-countries.js  (deterministic, safe to rerun) */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

/* hand-tuned arc endpoints from the original js/data.js — DO NOT recompute these,
   they were adjusted so arcs land nicely (e.g. US on the lower 48, not Alaska). */
const HAND_COORDS = (() => {
  const load = (f, keys) => new Function(fs.readFileSync(path.join(ROOT, f), "utf8") + `; return {${keys}};`)();
  try { return load("js/data.js", "COORDS").COORDS; } catch (e) { return {}; }
})();

/* geojson name → our key (was ALIAS in js/main.js) */
const KEY_OVERRIDE = {
  "united states of america": "united states",
  "turkey": "türkiye", "turkiye": "türkiye",
  "czech republic": "czechia",
  "republic of korea": "south korea",
  "dem. rep. korea": "north korea", "democratic people's republic of korea": "north korea",
  "united arab emirates": "uae",
  "democratic republic of the congo": "drc",
  "republic of serbia": "serbia",
  "russian federation": "russia",
  "united republic of tanzania": "tanzania",
  "ivory coast": "ivory coast",
  "the bahamas": "bahamas",
  "east timor": "timor-leste",
  "republic of the congo": "congo",
  "guinea bissau": "guinea-bissau",
  "swaziland": "eswatini",
  "macedonia": "north macedonia",
};

/* display names (was DISP_OVERRIDE in scripts/build-seo.js) */
const DISP_OVERRIDE = {
  uae: "BAE", drc: "DR Kongo", "united states": "ABD", "united kingdom": "Birleşik Krallık",
  "houthi rebels (yemen)": "Husiler (Yemen)", "north korea": "Kuzey Kore", "south korea": "Güney Kore",
};

/* ascii slug (same logic as build-seo.js so existing /ulke/ URLs stay stable) */
function slug(name) {
  return name
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/\(.*?\)/g, "").trim()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
/* Unicode-aware title case (the old \b regex produced "TÜRkiye" — ü broke the
   ASCII word boundary). Uppercase only the first letter of each word. */
function disp(key) {
  if (DISP_OVERRIDE[key]) return DISP_OVERRIDE[key];
  return key.replace(/(^|[\s(\-])([a-zçğıöşü])/g, (m, pre, ch) => pre + ch.toUpperCase());
}

/* centroid of the largest ring (shoelace area), good enough for arc endpoints */
function centroid(geom) {
  const polys = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;
  let best = null, bestArea = -1;
  for (const poly of polys) {
    const ring = poly[0];
    let area = 0;
    for (let i = 0; i < ring.length - 1; i++)
      area += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
    area = Math.abs(area / 2);
    if (area > bestArea) { bestArea = area; best = ring; }
  }
  let lat = 0, lng = 0;
  best.forEach(([x, y]) => { lng += x; lat += y; });
  const n = best.length;
  return [+(lat / n).toFixed(1), +(lng / n).toFixed(1)];
}

const geo = JSON.parse(fs.readFileSync(path.join(ROOT, "data/countries.geojson"), "utf8"));
const out = {};

for (const f of geo.features) {
  const p = f.properties;
  if (p.ISO_A2 === "AQ") continue; // antarctica never renders
  const rawNames = [p.ADMIN, p.NAME, p.NAME_LONG, p.FORMAL_EN, p.NAME_CIAWF, p.NAME_SORT]
    .filter(Boolean).map((s) => String(s).toLowerCase().trim());
  /* base the key on ADMIN (full name) — NAME is often abbreviated ("bosnia and herz.") */
  const admin = String(p.ADMIN).toLowerCase().trim();
  const key = KEY_OVERRIDE[admin] || admin;
  const iso3 = (p.ISO_A3 && p.ISO_A3 !== "-99") ? p.ISO_A3 : (p.ADM0_A3 || null);
  const aliases = [...new Set([...rawNames, key])].filter((a) => a && a !== key);
  out[key] = {
    key,
    iso3,
    coords: HAND_COORDS[key] || centroid(f.geometry),
    slug: slug(key),
    disp: disp(key),
    aliases,
  };
}

/* small states missing from the 1:110m Natural Earth geojson (no polygon on the
   globe, but they appear in real aid/migration/trade data — arcs use coords).
   Coordinates are plain geographic centroids. */
const MICRO = {
  "cabo verde":            { iso3: "CPV", coords: [16.0, -24.0], aliases: ["cape verde"] },
  "malta":                 { iso3: "MLT", coords: [35.9, 14.4] },
  "singapore":             { iso3: "SGP", coords: [1.35, 103.8] },
  "bahrain":               { iso3: "BHR", coords: [26.0, 50.5] },
  "mauritius":             { iso3: "MUS", coords: [-20.3, 57.6] },
  "comoros":               { iso3: "COM", coords: [-11.6, 43.3] },
  "seychelles":            { iso3: "SYC", coords: [-4.7, 55.5] },
  "sao tome and principe": { iso3: "STP", coords: [0.2, 6.6], aliases: ["são tomé and príncipe"] },
  "maldives":              { iso3: "MDV", coords: [3.2, 73.2] },
  "samoa":                 { iso3: "WSM", coords: [-13.6, -172.4] },
  "tonga":                 { iso3: "TON", coords: [-21.2, -175.2] },
  "kiribati":              { iso3: "KIR", coords: [1.4, 173.0] },
  "micronesia":            { iso3: "FSM", coords: [6.9, 158.2], aliases: ["federated states of micronesia", "micronesia (federated states of)"] },
  "palau":                 { iso3: "PLW", coords: [7.5, 134.6] },
  "marshall islands":      { iso3: "MHL", coords: [7.1, 171.1] },
  "tuvalu":                { iso3: "TUV", coords: [-8.5, 179.1] },
  "nauru":                 { iso3: "NRU", coords: [-0.5, 166.9] },
  "barbados":              { iso3: "BRB", coords: [13.2, -59.5] },
  "saint lucia":           { iso3: "LCA", coords: [13.9, -61.0] },
  "grenada":               { iso3: "GRD", coords: [12.1, -61.7] },
  "antigua and barbuda":   { iso3: "ATG", coords: [17.1, -61.8] },
  "dominica":              { iso3: "DMA", coords: [15.4, -61.4] },
  "saint vincent and the grenadines": { iso3: "VCT", coords: [13.2, -61.2] },
  "saint kitts and nevis": { iso3: "KNA", coords: [17.3, -62.7] },
  "monaco":                { iso3: "MCO", coords: [43.7, 7.4] },
  "liechtenstein":         { iso3: "LIE", coords: [47.15, 9.55] },
  "andorra":               { iso3: "AND", coords: [42.5, 1.5] },
  "san marino":            { iso3: "SMR", coords: [43.9, 12.45] },
};
for (const [key, m] of Object.entries(MICRO)) {
  if (!out[key]) out[key] = { key, iso3: m.iso3, coords: m.coords, slug: slug(key), disp: disp(key), aliases: m.aliases || [] };
}

/* non-state actors present in the data but not in the geojson */
for (const [key, coords] of Object.entries(HAND_COORDS)) {
  if (!out[key]) out[key] = { key, iso3: null, coords, slug: slug(key), disp: disp(key), aliases: [] };
}

const keys = Object.keys(out).sort();
const sorted = {};
keys.forEach((k) => { sorted[k] = out[k]; });
fs.writeFileSync(path.join(ROOT, "data/countries.json"), JSON.stringify(sorted, null, 1) + "\n");
console.log(`data/countries.json: ${keys.length} countries (${Object.keys(HAND_COORDS).length} hand-tuned coords kept)`);
