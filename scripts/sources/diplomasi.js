/* sources/diplomasi.js — diplomasi layer from the Database of Embassies
   (Wikidata, CC0, single raw CSV, no key). Directed: operator (sending
   country) → country (host). v = number of missions (embassy + consulate +
   high commission etc.) the operator runs in the host country. */

const { keyOfName, disp } = require("../lib/countries");
const { shapeTies } = require("../lib/normalize");

const URL = "https://raw.githubusercontent.com/database-of-embassies/database-of-embassies/master/database_of_embassies.csv";

async function build() {
  const res = await fetch(URL);
  if (!res.ok) throw new Error(`embassies CSV HTTP ${res.status}`);
  const text = await res.text();
  const lines = text.split("\n");
  const header = lines[0].split(";");
  const iOp = header.indexOf("operator");
  const iHost = header.indexOf("country");
  const iType = header.indexOf("type");
  if (iOp < 0 || iHost < 0) throw new Error("embassies CSV header changed");

  const counts = {}; // "s|r" -> {s,r,v,emb}
  let unresolved = 0;
  for (let li = 1; li < lines.length; li++) {
    const cols = lines[li].split(";");
    if (cols.length < 3) continue;
    const s = keyOfName(cols[iOp]);
    const r = keyOfName(cols[iHost]);
    if (!s || !r) { unresolved++; continue; }
    if (s === r) continue;
    const k = s + "|" + r;
    const c = (counts[k] ||= { s, r, v: 0, emb: 0 });
    c.v++;
    if (/embassy|high commission/i.test(cols[iType] || "")) c.emb++;
  }
  const rows = Object.values(counts);
  if (rows.length < 500) throw new Error(`embassies parse suspiciously small: ${rows.length} pairs`);
  console.log(`  diplomasi: ${rows.length} pairs (${unresolved} rows with unresolvable names skipped)`);

  const embOf = {};
  rows.forEach((t) => { embOf[t.s + "|" + t.r] = t.emb; });

  const ties = shapeTies(rows, {
    topPerDirection: 8,
    minV: 1, // at least 2 missions = a real diplomatic footprint
    maxTies: 1200,
    noteFn: (t) => {
      const emb = embOf[t.s + "|" + t.r] || 0;
      const kons = t.v - emb;
      const parts = [];
      if (emb) parts.push(`${emb} büyükelçilik`);
      if (kons) parts.push(`${kons} konsolosluk/temsilcilik`);
      return `${disp(t.s)}, ${disp(t.r)}'de ${parts.join(" + ")} işletiyor (Wikidata).`;
    },
  });

  return {
    key: "diplomasi",
    label: "diplomasi",
    source: {
      name: "Database of Embassies (Wikidata)",
      url: "https://database-of-embassies.github.io/",
      year: String(new Date().getFullYear()),
      license: "CC0",
    },
    updated: new Date().toISOString().slice(0, 10),
    unit: "diplomatik temsilcilik sayısı",
    ties,
  };
}

module.exports = { build };
