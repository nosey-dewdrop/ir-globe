/* sources/goc.js — göç & mülteci layer from the UNHCR Refugee Population
   Statistics API (CC BY 4.0, no key). Directed: country of origin (coo) →
   country of asylum (coa), end-year refugee stock, latest available year. */

const { keyOfIso3, disp } = require("../lib/countries");
const { fmt, shapeTies } = require("../lib/normalize");

const BASE = "https://api.unhcr.org/population/v1/population/";

async function fetchYear(year) {
  const rows = [];
  let page = 1, maxPages = 1;
  do {
    const url = `${BASE}?year=${year}&coo_all=true&coa_all=true&limit=10000&page=${page}`;
    const res = await fetch(url, { headers: { accept: "application/json" } });
    if (!res.ok) throw new Error(`UNHCR HTTP ${res.status}`);
    const body = await res.json();
    maxPages = body.maxPages || 1;
    (body.items || []).forEach((it) => rows.push(it));
    page++;
  } while (page <= maxPages);
  return rows;
}

async function build() {
  // latest year with data: probe backwards from last year
  const thisYear = new Date().getFullYear();
  let year, items = [];
  for (year = thisYear - 1; year >= thisYear - 3; year--) {
    items = await fetchYear(year);
    if (items.length > 100) break;
  }
  if (!items.length) throw new Error("UNHCR returned no data for recent years");

  const rows = [];
  items.forEach((it) => {
    const s = keyOfIso3(it.coo_iso);
    const r = keyOfIso3(it.coa_iso);
    const v = Number(it.refugees) || 0;
    if (s && r && s !== r && v > 0) rows.push({ s, r, v });
  });

  const ties = shapeTies(rows, {
    topPerDirection: 10,
    minV: 5000, // keep flows of at least 5.000 registered refugees
    maxTies: 1200,
    noteFn: (t) => `UNHCR ${year} sonu: ${disp(t.s)} kökenli ${fmt(t.v)} kayıtlı mülteci ${disp(t.r)}'de sığınmada.`,
  });

  return {
    key: "goc",
    label: "göç & mülteci",
    source: {
      name: "UNHCR Refugee Population Statistics Database",
      url: "https://www.unhcr.org/refugee-statistics/",
      year: String(year),
      license: "CC BY 4.0",
    },
    updated: new Date().toISOString().slice(0, 10),
    unit: "kayıtlı mülteci (yıl sonu stok)",
    ties,
  };
}

module.exports = { build };
