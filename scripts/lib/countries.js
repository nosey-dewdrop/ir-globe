/* lib/countries.js — resolve external dataset country identifiers (ISO3 codes,
   free-text names) to our canonical keys via data/countries.json. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const REG = JSON.parse(fs.readFileSync(path.join(ROOT, "data/countries.json"), "utf8"));

const BY_ISO3 = {};
const BY_NAME = {};
Object.values(REG).forEach((c) => {
  if (c.iso3) BY_ISO3[c.iso3] = c.key;
  BY_NAME[c.key] = c.key;
  (c.aliases || []).forEach((a) => { BY_NAME[a] = c.key; });
});

/* common dataset spellings that aren't in the geojson alias set */
const EXTRA_NAMES = {
  "korea": "south korea", "korea, rep.": "south korea", "republic of korea": "south korea",
  "korea, dem. people's rep.": "north korea", "dem. people's rep. of korea": "north korea",
  "viet nam": "vietnam", "syrian arab republic": "syria", "iran (islamic republic of)": "iran",
  "islamic republic of iran": "iran", "russian federation": "russia",
  "venezuela (bolivarian republic of)": "venezuela", "bolivarian republic of venezuela": "venezuela",
  "bolivia (plurinational state of)": "bolivia", "lao people's democratic republic": "laos",
  "lao pdr": "laos", "cote d'ivoire": "ivory coast", "côte d'ivoire": "ivory coast",
  "turkiye": "türkiye", "turkey": "türkiye", "czech republic": "czechia",
  "democratic republic of the congo": "drc", "dem. rep. of the congo": "drc",
  "congo, dem. rep.": "drc", "congo, rep.": "congo",
  "united states of america": "united states", "usa": "united states",
  "united arab emirates": "uae", "china, hong kong sar": null, "china, macao sar": null,
  "state of palestine": "palestine", "west bank and gaza strip": "palestine",
  "republic of moldova": "moldova", "north macedonia": "north macedonia",
  "the former yugoslav republic of macedonia": "north macedonia",
  "brunei darussalam": "brunei", "cape verde": "cabo verde",
  "united republic of tanzania": "tanzania", "tanzania (united republic of)": "tanzania",
  "myanmar (burma)": "myanmar", "burma": "myanmar", "eswatini (swaziland)": "eswatini",
  "swaziland": "eswatini", "timor leste": "timor-leste", "east timor": "timor-leste",
};
Object.entries(EXTRA_NAMES).forEach(([n, k]) => { if (k && REG[k]) BY_NAME[n] = k; });

function keyOfIso3(code) {
  return BY_ISO3[String(code || "").toUpperCase().trim()] || null;
}
function keyOfName(name) {
  const n = String(name || "").toLowerCase().trim();
  if (EXTRA_NAMES[n] === null) return null; // deliberately skipped (e.g. SAR territories)
  return BY_NAME[n] || null; // EXTRA_NAMES already merged into BY_NAME when the key exists
}
function disp(key) {
  return REG[key] ? REG[key].disp : key;
}

module.exports = { REG, keyOfIso3, keyOfName, disp };
