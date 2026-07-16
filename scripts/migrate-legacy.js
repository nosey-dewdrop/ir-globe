/* migrate-legacy.js — one-time converter: js/data.js + js/layers.js + js/articles.js
   → the new data/ layout (per-layer JSON, per-layer news, digest, meta files).
   After this, the site reads data/*.json and the legacy js data files are retired.

   out:
     data/layers/index.json     [{key,label,blurb}]
     data/layers/<key>.json     {key,label,source,updated,ties:[{s,r,exp?,imp?,note?}],shares?}
     data/news/<key>.json       { "s→r": [{title,source,url,date}] }
     data/news/digest.json      [{t,s,d,u,l}] newest 30, deduped by title
     data/news/meta.json        {updated,total,perLayer}
     data/meta.json             {updated,ties,countries,layers}

   run: node scripts/migrate-legacy.js */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const load = (f, keys) => new Function(fs.readFileSync(path.join(ROOT, f), "utf8") + `; return {${keys}};`)();
const { SOURCES, SUPPLIERS, RECIPIENTS } = load("js/data.js", "SOURCES,SUPPLIERS,RECIPIENTS");
const { LAYER_TIES } = load("js/layers.js", "LAYER_TIES");
const { ARTICLES } = load("js/articles.js", "ARTICLES");

const TODAY = new Date().toISOString().slice(0, 10);

/* layer identity — labels from js/main.js, blurbs from scripts/build-seo.js (now canonical here) */
const LAYERS = [
  { key: "silah", label: "Silah", blurb: "Kim kime silah satıyor. Yüzdeler SIPRI'nin 2021-25 dönemine ait uluslararası silah transferi verisinden birebir alındı." },
  { key: "ticaret", label: "Ticaret", blurb: "Ülkeler arası mal ticaretinin en büyük ikili hatları: kimin ihracatı kime dayanıyor." },
  { key: "enerji", label: "Enerji", blurb: "Petrol, doğalgaz ve LNG akışları: hangi ülke enerjisini kime satıyor, kim kime bağımlı." },
  { key: "tahil", label: "Tahıl & gıda", blurb: "Buğday, mısır ve temel gıdanın ihracat hatları: dünyanın gıda güvenliği kimlere bağlı." },
  { key: "ittifak", label: "İttifaklar", blurb: "Savunma ve güvenlik ittifakları: kim kiminle aynı masada, hangi taahhüt kimi bağlıyor." },
  { key: "yaptirim", label: "Yaptırımlar", blurb: "Kim kime yaptırım uyguluyor? Ekonomik baskının yönlü haritası." },
  { key: "goc", label: "Göç & mülteci", blurb: "Büyük göç ve mülteci hareketleri: insanlar hangi ülkeden hangisine akıyor." },
  { key: "borc", label: "Borç & kredi", blurb: "Devletlerarası kredi ve borç ilişkileri: kim kimin alacaklısı, kim kime borçlu." },
  { key: "diplomasi", label: "Diplomasi", blurb: "Stratejik ortaklıklar ve diplomatik hizalanmalar: kim kime yakın duruyor." },
  { key: "teknoloji", label: "Teknoloji & çip", blurb: "Yarı iletken, çip ve kritik teknoloji tedariki: kim kimin üretim zincirinde." },
  { key: "us", label: "Askeri üsler", blurb: "Yabancı askeri üsler: hangi ülke nerede asker konuşlandırıyor." },
  { key: "yardim", label: "Dış yardım", blurb: "Kalkınma ve insani yardım akışları: kim kime yardım gönderiyor." },
];

function write(rel, obj) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 1) + "\n");
}

/* ── data/layers/index.json ── */
write("data/layers/index.json", LAYERS);

/* ── silah: merge SIPRI supplier/recipient tables into directed ties (as main.js did) ── */
const merged = {};
const tie = (s, r) => (merged[s + "→" + r] ||= { s, r });
SUPPLIERS.forEach((sup) => sup.to.forEach(([r, pct]) => { tie(sup.c, r).exp = pct; }));
RECIPIENTS.forEach((rec) => rec.from.forEach(([s, pct]) => { tie(s, rec.c).imp = pct; }));
write("data/layers/silah.json", {
  key: "silah",
  label: "Silah",
  source: { name: "SIPRI arms transfers database", url: SOURCES.silah.url, year: "2021–25", license: "SIPRI fact sheet, March 2026" },
  updated: TODAY,
  shares: {
    sup: Object.fromEntries(SUPPLIERS.map((x) => [x.c, x.share])),
    rec: Object.fromEntries(RECIPIENTS.map((x) => [x.c, x.share])),
  },
  ties: Object.values(merged),
});

/* ── the 11 note-based layers ── */
for (const l of LAYERS) {
  if (l.key === "silah") continue;
  const ties = (LAYER_TIES[l.key] || []).map((t) => ({ s: t.s, r: t.r, note: t.note || "" }));
  write(`data/layers/${l.key}.json`, {
    key: l.key,
    label: l.label,
    source: { name: "açık kaynak derlemesi (doğrulanmış)", url: "", year: "2026", license: "" },
    updated: TODAY,
    ties,
  });
}

/* ── news: split ARTICLES per layer + digest + meta ── */
let total = 0;
const perLayer = {};
for (const l of LAYERS) {
  const bag = ARTICLES[l.key] || {};
  let n = 0;
  Object.values(bag).forEach((arr) => { n += arr.length; });
  perLayer[l.key] = n;
  total += n;
  write(`data/news/${l.key}.json`, bag);
}
const all = [];
Object.entries(ARTICLES).forEach(([layer, edges]) =>
  Object.values(edges).forEach((arr) =>
    arr.forEach((a) => { if (a && a.title && a.url) all.push({ t: a.title, s: a.source, d: a.date || "", u: a.url, l: layer }); })));
all.sort((a, b) => b.d.localeCompare(a.d));
const seen = new Set(), digest = [];
for (const a of all) {
  if (seen.has(a.t)) continue;
  seen.add(a.t);
  digest.push(a);
  if (digest.length >= 30) break;
}
write("data/news/digest.json", digest);
write("data/news/meta.json", { updated: new Date().toISOString(), total, perLayer });

/* ── site-wide meta (stats + the countdown read this) ── */
const countries = new Set();
Object.values(merged).forEach((t) => { countries.add(t.s); countries.add(t.r); });
Object.values(LAYER_TIES).forEach((arr) => arr.forEach((t) => { countries.add(t.s); countries.add(t.r); }));
const tieCount = Object.keys(merged).length + Object.values(LAYER_TIES).reduce((n, a) => n + a.length, 0);
write("data/meta.json", { updated: TODAY, ties: tieCount, countries: countries.size, layers: LAYERS.length });

console.log(`migrated: ${LAYERS.length} layers, ${tieCount} ties, ${total} articles, ${countries.size} countries`);
