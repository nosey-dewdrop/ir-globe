/* lib/validate.js — schema guard for layer JSON before it is written/committed.
   Data honesty rule: every layer must carry a real source (name+url+year). */

const { REG } = require("./countries");

function validateLayer(layer) {
  const errs = [];
  if (!layer.key) errs.push("key missing");
  if (!layer.label) errs.push("label missing");
  const s = layer.source || {};
  if (!s.name) errs.push("source.name missing");
  if (!s.url) errs.push("source.url missing");
  if (!s.year && s.year !== 0) errs.push("source.year missing");
  if (!layer.updated) errs.push("updated missing");
  if (!Array.isArray(layer.ties) || !layer.ties.length) errs.push("ties empty");
  (layer.ties || []).forEach((t, i) => {
    if (!REG[t.s]) errs.push(`tie[${i}].s unknown country: ${t.s}`);
    if (!REG[t.r]) errs.push(`tie[${i}].r unknown country: ${t.r}`);
    if (t.s === t.r) errs.push(`tie[${i}] self-loop: ${t.s}`);
  });
  if (errs.length) throw new Error(`layer ${layer.key || "?"} invalid:\n  ` + errs.slice(0, 10).join("\n  "));
  return true;
}

module.exports = { validateLayer };
