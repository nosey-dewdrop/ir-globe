/* sources/yardim.js — dış yardım layer from OECD DAC2A (CC BY 4.0, free SDMX
   REST, no key). Directed: donor → recipient, ODA disbursements, constant USD,
   latest year with data per pair. Aggregate donors/recipients (regions, income
   groups, "DAC countries") drop out naturally because their labels don't
   resolve to countries in our registry. */

const { keyOfName, disp } = require("../lib/countries");
const { fmt, shapeTies } = require("../lib/normalize");

/* startPeriod=2022 makes the server 500 (payload too big) — 2023+ is ~9.6MB and fine */
const URL = "https://sdmx.oecd.org/public/rest/data/OECD.DCD.FSD,DSD_DAC2@DF_DAC2A,/..206.USD.Q?startPeriod=2023&format=csvfilewithlabels";

/* minimal CSV parser that survives quoted fields with commas */
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += c;
    } else if (c === '"') inQ = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); field = ""; if (row.length > 1 || row[0] !== "") rows.push(row); row = []; }
    else if (c !== "\r") field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

async function build() {
  // NOTE: an "accept: text/csv" header makes the SDMX gateway 500 — format is already in the query
  const res = await fetch(URL, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`OECD SDMX HTTP ${res.status}`);
  const rows = parseCSV(await res.text());
  const header = rows[0];
  const col = (n) => header.indexOf(n);
  const iDonor = col("Donor"), iRec = col("Recipient"), iYear = col("TIME_PERIOD"),
    iVal = col("OBS_VALUE"), iMult = col("UNIT_MULT");
  if (iDonor < 0 || iRec < 0 || iVal < 0) throw new Error("OECD CSV header changed");

  // latest year with a value per donor→recipient pair
  const latest = {}; // "s|r" -> {s,r,v,year}
  let unresolved = 0;
  for (let li = 1; li < rows.length; li++) {
    const r0 = rows[li];
    const val = parseFloat(r0[iVal]);
    if (!isFinite(val) || val <= 0) continue;
    const s = keyOfName(r0[iDonor]);
    const r = keyOfName(r0[iRec]);
    if (!s || !r) { unresolved++; continue; }
    const year = r0[iYear];
    const mult = Math.pow(10, parseInt(r0[iMult], 10) || 6);
    const k = s + "|" + r;
    if (!latest[k] || year > latest[k].year) latest[k] = { s, r, v: val * mult, year };
  }
  const pairs = Object.values(latest);
  if (pairs.length < 300) throw new Error(`OECD parse suspiciously small: ${pairs.length} pairs`);
  const years = [...new Set(pairs.map((p) => p.year))].sort();
  console.log(`  yardim: ${pairs.length} donor→recipient pairs, years ${years[0]}–${years[years.length - 1]}`);

  const yearOf = {};
  pairs.forEach((p) => { yearOf[p.s + "|" + p.r] = p.year; });

  const ties = shapeTies(pairs, {
    topPerDirection: 10,
    minV: 1e6, // at least 1M USD
    maxTies: 1200,
    noteFn: (t) => `${disp(t.s)}, ${disp(t.r)}'ye ${yearOf[t.s + "|" + t.r]}'te ${fmt(t.v)} $ resmi kalkınma yardımı (ODA) aktardı (OECD, sabit fiyat).`,
  });

  return {
    key: "yardim",
    label: "dış yardım",
    source: {
      name: "OECD DAC2A · ODA disbursements",
      url: "https://data-explorer.oecd.org/vis?df[id]=DSD_DAC2%40DF_DAC2A&df[ag]=OECD.DCD.FSD",
      year: years[years.length - 1],
      license: "CC BY 4.0",
    },
    updated: new Date().toISOString().slice(0, 10),
    unit: "ODA harcaması (USD, sabit fiyat)",
    ties,
  };
}

module.exports = { build };
