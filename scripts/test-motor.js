/* test-motor.js — persisted checks for the pure render/scoring helpers.
   Runs in CI (news.yml) before the pipeline: a red test blocks the refresh.

     node scripts/test-motor.js
*/

const assert = require("assert");

/* browser shims BEFORE requiring the modules */
const mem = {};
global.localStorage = {
  getItem: (k) => (k in mem ? mem[k] : null),
  setItem: (k, v) => { mem[k] = String(v); },
  removeItem: (k) => { delete mem[k]; },
};

const Motor = require("../js/motor.js");
const fs = require("fs");
const path = require("path");

let n = 0;
function t(name, fn) { fn(); n++; console.log("ok " + n + " " + name); }

/* ── fixtures ── */
const EV = (over) => Object.assign(
  { pair: "iran|israel", s: "israel", r: "iran", date: "2026-07-10", event: "saldırı", goldstein: -9, layer: "silah" }, over);
const events = { events: [EV(), EV({ date: "2026-07-08" }), EV({ date: "2019-01-01" })], countries: { israel: { partners: 12, avg: -3.1 } } };
const graph = {
  week: "2026-W28",
  spikes: [{ pair: "iran|israel", n: 14, z: 3.2 }],
  centrality: { israel: { pr: 0.09, deg: 12, tone: -3.1 }, iran: { pr: 0.08, deg: 9, tone: -2.5 } },
};

/* ── Motor ── */
t("pairKey is unordered", () => {
  assert.equal(Motor.pairKey("b", "a"), "a|b");
  assert.equal(Motor.pairKey("a", "b"), Motor.pairKey("b", "a"));
});

t("toneWord bounds", () => {
  assert.equal(Motor.toneWord(5), "işbirliği");
  assert.equal(Motor.toneWord(-5), "çatışma");
  assert.equal(Motor.toneWord(null), "");
  assert.equal(Motor.toneWord(NaN), "");
});

t("radarTie renders spike + recent events, filters stale", () => {
  const html = Motor.radarTie(events, graph, "iran", "israel");
  assert.ok(html.includes("olay radarı"));
  assert.ok(html.includes("bu hafta hareketlendi"));
  assert.ok(html.includes("2026-07-10".slice(5)) || html.includes("07-10"));
  assert.ok(!html.includes("2019"), "90d window must drop stale events");
});

t("radarTie empty -> empty string, never an empty box", () => {
  assert.equal(Motor.radarTie(null, null, "x", "y"), "");
  assert.equal(Motor.radarTie({ events: [] }, { spikes: [] }, "x", "y"), "");
});

t("radarCountry shows rank/partners/tone; unknown -> empty", () => {
  const html = Motor.radarCountry(events, graph, "israel");
  assert.ok(html.includes("haber ağında") && html.includes("#1"));
  assert.equal(Motor.radarCountry({ events: [] }, { centrality: {} }, "atlantis"), "");
});

t("akisRadar lists spikes; no spikes -> empty", () => {
  assert.ok(Motor.akisRadar(graph).includes("hareketlenenler"));
  assert.equal(Motor.akisRadar({ spikes: [] }), "");
  assert.equal(Motor.akisRadar(null), "");
});

t("XSS: hostile display names and events are escaped", () => {
  const disp = () => '<script>alert(1)</script>';
  const html = Motor.radarTie(events, graph, "iran", "israel", disp) + Motor.radarCountry(events, graph, "israel", disp);
  assert.ok(!html.includes("<script>"), "must escape injected markup");
  assert.ok(html.includes("&lt;script&gt;"));
});

/* ── Ilgi (on-device interest model) ── */
const ilgiSrc = fs.readFileSync(path.join(__dirname, "../js/ilgi.js"), "utf8");
const Ilgi = new Function(ilgiSrc + "; return Ilgi;")();

t("ilgi: note accumulates, top ranks, has() gates at 3", () => {
  Ilgi.forget();
  assert.equal(Ilgi.has(), false);
  Ilgi.note({ countries: ["russia"], layers: ["enerji"], w: 2 });
  Ilgi.note({ countries: ["russia", "ukraine"], w: 2 });
  assert.equal(Ilgi.has(), false, "needs >=3 signals");
  Ilgi.note({ countries: ["russia"], w: 1 });
  assert.equal(Ilgi.has(), true);
  const top = Ilgi.top("country", 2);
  assert.equal(top[0].key, "russia");
  assert.ok(top[0].score > (top[1] ? top[1].score : 0));
});

t("ilgi: forget wipes, corrupt storage does not throw", () => {
  Ilgi.forget();
  assert.equal(Ilgi.has(), false);
  localStorage.setItem("irglobe.ilgi.v1", "{bozuk json");
  assert.doesNotThrow(() => Ilgi.note({ countries: ["france"] }));
});

console.log("\n" + n + " tests passed");
