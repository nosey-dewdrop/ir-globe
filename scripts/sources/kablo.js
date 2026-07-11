/* sources/kablo.js — denizaltı kabloları layer from TeleGeography's Submarine
   Cable Map public API (CC BY-NC-SA 4.0). UNDIRECTED: a tie means the two
   countries share landing points on the same cable(s); v = number of shared
   cables. Stored once per pair (alphabetical s<r), the arc reads both ways.
   LICENSE NOTE: BY-NC-SA — fine while the site is free to view; revisit if a
   paid tier ever covers this layer (tracked in PROJECT.md). */

const { keyOfName } = require("../lib/countries");
const { shapeTies } = require("../lib/normalize");

const BASE = "https://www.submarinecablemap.com/api/v3/cable/";
const UA = { "User-Agent": "Mozilla/5.0" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function build() {
  const listRes = await fetch(BASE + "all.json", { headers: UA });
  if (!listRes.ok) throw new Error(`cable list HTTP ${listRes.status}`);
  const cables = await listRes.json();
  if (!Array.isArray(cables) || cables.length < 300) throw new Error(`cable list suspiciously small: ${cables.length}`);
  console.log(`  kablo: ${cables.length} kablo taranıyor…`);

  const pairs = {}; // "s|r" (s<r) -> {s, r, v, names[]}
  let unresolved = 0, done = 0;
  for (const c of cables) {
    let detail;
    try {
      const res = await fetch(`${BASE}${c.id}.json`, { headers: UA });
      if (!res.ok) continue;
      detail = await res.json();
    } catch (e) { continue; }
    const keys = new Set();
    (detail.landing_points || []).forEach((lp) => {
      const k = keyOfName(lp.country);
      if (k) keys.add(k); else unresolved++;
    });
    const arr = [...keys].sort();
    for (let i = 0; i < arr.length; i++) for (let j = i + 1; j < arr.length; j++) {
      const p = (pairs[arr[i] + "|" + arr[j]] ||= { s: arr[i], r: arr[j], v: 0, names: [] });
      p.v++;
      if (p.names.length < 2) p.names.push(detail.name);
    }
    done++;
    if (done % 100 === 0) process.stdout.write(`\r  kablo: ${done}/${cables.length}`);
    await sleep(120);
  }
  console.log(`\n  kablo: ${Object.keys(pairs).length} ülke çifti (${unresolved} çözümsüz iniş noktası)`);

  const nameOf = {};
  Object.values(pairs).forEach((p) => { nameOf[p.s + "|" + p.r] = p.names; });

  const ties = shapeTies(Object.values(pairs), {
    topPerDirection: 6,
    minV: 1, // at least 2 shared cables = a real corridor
    maxTies: 900,
    noteFn: (t) => {
      const names = nameOf[t.s + "|" + t.r] || [];
      return `Aralarında ${t.v} ortak denizaltı kablosu${names.length ? ` (örn. ${names.join(", ")})` : ""} — iki yönlü bağlantı (TeleGeography).`;
    },
  });

  return {
    key: "kablo",
    label: "denizaltı kabloları",
    source: {
      name: "TeleGeography Submarine Cable Map",
      url: "https://www.submarinecablemap.com/",
      year: String(new Date().getFullYear()),
      license: "CC BY-NC-SA 4.0",
    },
    updated: new Date().toISOString().slice(0, 10),
    unit: "ortak kablo sayısı (yönsüz)",
    ties,
  };
}

module.exports = { build };
