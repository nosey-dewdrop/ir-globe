/* sources/tahil.js — tahıl & gıda layer from the FAOSTAT Detailed Trade Matrix
   (CC BY 4.0, free bulk ZIP ~420MB — downloaded to a temp dir, stream-filtered,
   deleted; never committed). Directed: reporter (exporter) → partner (importer),
   export value of staple grains (wheat, maize, rice, barley, soya), latest year. */

const fs = require("fs");
const os = require("os");
const path = require("path");
const readline = require("readline");
const { spawn, execFileSync } = require("child_process");
const { keyOfName, disp } = require("../lib/countries");
const { fmt, shapeTies } = require("../lib/normalize");

const ZIP_URL = "https://bulks-faostat.fao.org/production/Trade_DetailedTradeMatrix_E_All_Data_(Normalized).zip";
const ITEM_RE = /^(wheat|maize|rice|barley|soya beans)/i;
const ELEMENT = "export value"; // unit: 1000 US$

/* minimal CSV line splitter (FAOSTAT quotes fields containing commas) */
function splitCSV(line) {
  const out = [];
  let field = "", inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQ) {
      if (c === '"') { if (line[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += c;
    } else if (c === '"') inQ = true;
    else if (c === ",") { out.push(field); field = ""; }
    else field += c;
  }
  out.push(field);
  return out;
}

async function build() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "faostat-"));
  const zipPath = path.join(tmp, "tm.zip");
  try {
    console.log("  tahil: FAOSTAT zip indiriliyor (~420MB)…");
    execFileSync("curl", ["-sL", "--fail", "-o", zipPath, ZIP_URL], { stdio: ["ignore", "inherit", "inherit"] });

    /* stream the CSV out of the zip without extracting it to disk */
    const unzip = spawn("unzip", ["-p", zipPath]);
    const rl = readline.createInterface({ input: unzip.stdout, crlfDelay: Infinity });

    let header = null, iRep = -1, iPar = -1, iItem = -1, iElem = -1, iYear = -1, iVal = -1;
    const byYear = {}; // year -> { "s|r": v }
    for await (const line of rl) {
      if (!header) {
        header = splitCSV(line).map((h) => h.replace(/^﻿/, "").trim());
        iRep = header.indexOf("Reporter Countries");
        iPar = header.indexOf("Partner Countries");
        iItem = header.indexOf("Item");
        iElem = header.indexOf("Element");
        iYear = header.indexOf("Year");
        iVal = header.indexOf("Value");
        if (iRep < 0 || iPar < 0 || iVal < 0) throw new Error("FAOSTAT header changed: " + header.join(","));
        continue;
      }
      // cheap prefilter before the (costly) full CSV split — case varies ("Export Value"/"Export value")
      if (!line.includes("xport")) continue;
      const cols = splitCSV(line);
      if ((cols[iElem] || "").toLowerCase() !== ELEMENT) continue;
      if (!ITEM_RE.test(cols[iItem] || "")) continue;
      const v = parseFloat(cols[iVal]);
      if (!isFinite(v) || v <= 0) continue;
      const s = keyOfName(cols[iRep]);
      const r = keyOfName(cols[iPar]);
      if (!s || !r || s === r) continue;
      const year = cols[iYear];
      ((byYear[year] ||= {})[s + "|" + r] = (byYear[year][s + "|" + r] || 0) + v * 1000); // 1000 US$ → US$
    }
    const years = Object.keys(byYear).sort();
    if (!years.length) {
      console.error("  tahil DEBUG header:", header.join("|"));
      throw new Error("FAOSTAT yielded no grain export rows");
    }
    const year = years[years.length - 1];
    const rows = Object.entries(byYear[year]).map(([k, v]) => {
      const [s, r] = k.split("|");
      return { s, r, v };
    });
    console.log(`  tahil: ${rows.length} exporter→importer pairs, year ${year}`);

    const ties = shapeTies(rows, {
      topPerDirection: 8,
      minV: 10e6, // at least 10M USD of staple grain trade
      maxTies: 900,
      noteFn: (t) => `${disp(t.s)}, ${disp(t.r)}'ye ${year}'te ${fmt(t.v)} $ değerinde temel tahıl (buğday/mısır/pirinç/arpa/soya) ihraç etti (FAOSTAT).`,
    });

    return {
      key: "tahil",
      label: "tahıl & gıda",
      source: {
        name: "FAOSTAT Detailed Trade Matrix",
        url: "https://www.fao.org/faostat/en/#data/TM",
        year: String(year),
        license: "CC BY 4.0",
      },
      updated: new Date().toISOString().slice(0, 10),
      unit: "tahıl ihracat değeri (USD)",
      ties,
    };
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

module.exports = { build };
