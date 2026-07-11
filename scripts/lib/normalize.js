/* lib/normalize.js — shared shaping for dataset layers:
   threshold to top-N per direction, rank globally, generate factual notes,
   emit the data/layers/<key>.json shape. Never writes partial output —
   callers build in memory and write only on success. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");

/* Turkish-friendly compact numbers for notes: 3,2 milyon · 124 milyon · 1,2 milyar */
function fmt(n) {
  n = Number(n) || 0;
  const f = (x) => x.toFixed(x % 1 === 0 || x >= 100 ? 0 : 1).replace(".", ",");
  if (n >= 1e9) return f(n / 1e9) + " milyar";
  if (n >= 1e6) return f(n / 1e6) + " milyon";
  if (n >= 1e3) return f(n / 1e3) + " bin";
  return String(Math.round(n));
}

/* rows: [{s, r, v}] with canonical keys, one row per pair, v > 0.
   Keeps a tie if it ranks ≤ topPerDirection among its source's outflows OR its
   recipient's inflows; sorts by v desc; caps at maxTies; g = global rank. */
function shapeTies(rows, { topPerDirection = 10, minV = 0, maxTies = 1500, noteFn = null } = {}) {
  const clean = rows.filter((t) => t.s && t.r && t.s !== t.r && t.v > minV);
  const bySrc = {}, byRec = {};
  clean.forEach((t) => { (bySrc[t.s] ||= []).push(t); (byRec[t.r] ||= []).push(t); });
  const rankIn = (m) => Object.values(m).forEach((arr) => {
    arr.sort((a, b) => b.v - a.v);
  });
  rankIn(bySrc); rankIn(byRec);
  const rankS = new Map(), rankR = new Map();
  Object.values(bySrc).forEach((arr) => arr.forEach((t, i) => rankS.set(t, i + 1)));
  Object.values(byRec).forEach((arr) => arr.forEach((t, i) => rankR.set(t, i + 1)));
  const kept = clean.filter((t) => rankS.get(t) <= topPerDirection || rankR.get(t) <= topPerDirection);
  kept.sort((a, b) => b.v - a.v);
  const top = kept.slice(0, maxTies);
  return top.map((t, i) => {
    const tie = { s: t.s, r: t.r, v: t.v, g: i + 1 };
    if (noteFn) tie.note = noteFn(t);
    return tie;
  });
}

function writeLayer(layer) {
  const rel = `data/layers/${layer.key}.json`;
  const p = path.join(ROOT, rel);
  const body = JSON.stringify(layer, null, 1) + "\n";
  if (Buffer.byteLength(body) > 250 * 1024)
    throw new Error(`${rel} exceeds the 250KB payload budget (${Buffer.byteLength(body)} bytes) — raise thresholds`);
  fs.writeFileSync(p, body);
  return { rel, ties: layer.ties.length, bytes: Buffer.byteLength(body) };
}

module.exports = { fmt, shapeTies, writeLayer };
