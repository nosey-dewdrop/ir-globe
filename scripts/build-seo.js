/* build-seo.js — generate real, crawlable static pages from the live data.
   NO fabrication: every fact comes from js/data.js (SIPRI), js/layers.js (verified
   notes) and js/articles.js (real Google-News headlines). Names/labels are the
   working set; the friend renames them, the structure and data stay real.

   run:  node scripts/build-seo.js
   out:  /konu/<layer>/index.html  ·  /ulke/<country>/index.html  ·  sitemap.xml */

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE = "https://damlahelloworld.github.io/ir-globe";

/* ── load the live data by evaluating the browser files in a sandbox ── */
const ctx = {};
vm.createContext(ctx);
// concat the browser files into one script so their top-level consts share scope,
// then hand the globals back out through the context object
const bundle = ["js/layers.js", "js/data.js", "js/articles.js"]
  .map((f) => fs.readFileSync(path.join(ROOT, f), "utf8"))
  .join("\n;\n") +
  "\n;this._x = { COORDS, SUPPLIERS, RECIPIENTS, LAYER_TIES, ARTICLES, SOURCES };";
vm.runInContext(bundle, ctx, { filename: "bundle" });
const { COORDS, SUPPLIERS, RECIPIENTS, LAYER_TIES, ARTICLES, SOURCES } = ctx._x;

/* rebuild the directed ties exactly as js/main.js does at runtime (that logic lives
   in main.js alongside DOM/globe code we can't run headless — so mirror it here) */
const _ties = {};
const _tie = (s, r) => (_ties[s + "→" + r] ||= { s, r, exp: null, imp: null });
SUPPLIERS.forEach((sup) => sup.to.forEach(([r, pct]) => { _tie(sup.c, r).exp = pct; }));
RECIPIENTS.forEach((rec) => rec.from.forEach(([s, pct]) => { _tie(s, rec.c).imp = pct; }));
const TIES = Object.values(_ties).filter((t) => COORDS[t.s] && COORDS[t.r]);
TIES.forEach((t) => { t.type = "silah"; });
Object.entries(LAYER_TIES).forEach(([layer, arr]) => {
  arr.forEach((c) => {
    if (COORDS[c.s] && COORDS[c.r]) TIES.push({ s: c.s, r: c.r, type: layer, note: c.note || "", exp: null, imp: null });
  });
});
const NAMES = [...new Set(TIES.flatMap((t) => [t.s, t.r]))].sort();
const supShare = Object.fromEntries(SUPPLIERS.map((x) => [x.c, x.share]));

/* ── layer identity: working label + a real, factual one-liner (what the layer shows) ── */
const LAYERS = [
  { key: "silah", label: "silah", live: true,
    blurb: "Kim kime silah satıyor. Yüzdeler SIPRI'nin 2021-25 dönemine ait uluslararası silah transferi verisinden birebir alındı." },
  { key: "ticaret", label: "ticaret",
    blurb: "Ülkeler arası mal ticaretinin en büyük ikili hatları — kimin ihracatı kime dayanıyor." },
  { key: "enerji", label: "enerji",
    blurb: "Petrol, doğalgaz ve LNG akışları: hangi ülke enerjisini kime satıyor, kim kime bağımlı." },
  { key: "tahil", label: "tahıl & gıda",
    blurb: "Buğday, mısır ve temel gıdanın ihracat hatları — dünyanın gıda güvenliği kimlere bağlı." },
  { key: "ittifak", label: "ittifaklar",
    blurb: "Savunma ve güvenlik ittifakları: kim kiminle aynı masada, hangi taahhüt kimi bağlıyor." },
  { key: "yaptirim", label: "yaptırımlar",
    blurb: "Kim kime yaptırım uyguluyor — ekonomik baskının yönlü haritası." },
  { key: "goc", label: "göç & mülteci",
    blurb: "Büyük göç ve mülteci hareketleri: insanlar hangi ülkeden hangisine akıyor." },
  { key: "borc", label: "borç & kredi",
    blurb: "Devletlerarası kredi ve borç ilişkileri — kim kimin alacaklısı, kim kime borçlu." },
  { key: "diplomasi", label: "diplomasi",
    blurb: "Stratejik ortaklıklar ve diplomatik hizalanmalar: kim kime yakın duruyor." },
  { key: "teknoloji", label: "teknoloji & çip",
    blurb: "Yarı iletken, çip ve kritik teknoloji tedariki — kim kimin üretim zincirinde." },
  { key: "us", label: "askeri üsler",
    blurb: "Yabancı askeri üsler: hangi ülke nerede asker konuşlandırıyor." },
  { key: "yardim", label: "dış yardım",
    blurb: "Kalkınma ve insani yardım akışları — kim kime yardım gönderiyor." },
];
const LAYER_BY_KEY = Object.fromEntries(LAYERS.map((l) => [l.key, l]));

/* ── helpers ── */
const esc = (s) =>
  String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// stable ascii slug for country dirs (türkiye→turkiye, drops parens/spaces)
function slug(name) {
  return name
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/\(.*?\)/g, "").trim()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const SLUG_TO_NAME = {};
NAMES.forEach((n) => { SLUG_TO_NAME[slug(n)] = n; });

// title-case a country name for display (with overrides for acronyms/short forms)
const DISP_OVERRIDE = {
  uae: "BAE", drc: "DR Kongo", "united states": "ABD", "united kingdom": "Birleşik Krallık",
  "houthi rebels (yemen)": "Husiler (Yemen)",
};
function disp(name) {
  if (DISP_OVERRIDE[name]) return DISP_OVERRIDE[name];
  return name.replace(/\b([a-zçğıöşü])/g, (m) => m.toUpperCase());
}

// all ties touching a country, grouped by layer
function tiesFor(country) {
  return TIES.filter((t) => t.s === country || t.r === country);
}
// articles for a "s→r" edge in a layer
function edgeArticles(layerKey, s, r) {
  const bag = ARTICLES[layerKey];
  if (!bag) return [];
  return bag[`${s}→${r}`] || [];
}

/* ── shared chrome ── */
function head(title, desc, canonical, extraLd) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: desc,
    isPartOf: { "@type": "WebSite", name: "kim kime ne satıyor?", url: SITE + "/" },
    publisher: { "@type": "Organization", name: "damlahelloworld", url: "https://damlahelloworld.com" },
    ...extraLd,
  };
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="kim kime ne satıyor?">
<meta name="twitter:card" content="summary">
<meta name="robots" content="index,follow">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<link rel="stylesheet" href="ROOT/css/site.css?v=3">
</head>
<body class="doc">`;
}
function nav(depth) {
  const r = "../".repeat(depth);
  return `<header class="topbar">
  <a class="brand" href="${r}index.html">kim kime ne satıyor?</a>
  <nav class="topnav">
    <a href="${r}kure.html">küre</a>
    <a href="${r}konu/index.html">konular</a>
    <a href="${r}ulke/index.html">ülkeler</a>
    <a href="${r}uye.html">üyelik</a>
  </nav>
</header>`;
}
function foot(depth) {
  const r = "../".repeat(depth);
  return `<footer class="docfoot">
  <p>veri: <a href="https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-international-arms-transfers-2025" rel="noopener">SIPRI</a> (silah) · diğer katmanlar açık kaynak + google news · uydurma veri yok.</p>
  <p>bağımsız · açık · kaynaklı · bir <span class="sig">damlahelloworld</span> yayını · <a href="${r}gizlilik.html">gizlilik</a></p>
</footer>`;
}
// rewrite the ROOT/ token to the right relative depth
function fix(html, depth) {
  return html.replace(/ROOT\//g, "../".repeat(depth));
}

/* ── page: one layer ── */
function layerPage(layer) {
  const key = layer.key;
  const ties = TIES.filter((t) => t.type === key);
  const title = `${layer.label} ağı — kim kime ${layer.label.split(" ")[0]} veriyor`;
  const desc = layer.blurb;
  const canonical = `${SITE}/konu/${key}/`;

  const rows = ties.map((t) => {
    const arts = edgeArticles(key, t.s, t.r);
    const num = t.exp != null ? ` <span class="pct">${t.s} ihracatının %${t.exp}'i</span>` : "";
    const note = t.note ? `<span class="note">${esc(t.note)}</span>` : "";
    const news = arts.slice(0, 2).map((a) =>
      `<a class="hl" href="${esc(a.url)}" rel="noopener">${esc(a.title)}</a> <span class="hl-src">${esc(a.source)}</span>`).join("");
    return `<article class="edge">
      <h3><a href="ROOT/ulke/${slug(t.s)}/">${esc(disp(t.s))}</a> → <a href="ROOT/ulke/${slug(t.r)}/">${esc(disp(t.r))}</a>${num}</h3>
      ${note}
      ${news ? `<div class="edge-news">${news}</div>` : ""}
    </article>`;
  }).join("\n");

  const ld = {
    "@type": "CollectionPage",
    about: layer.label,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: ties.length,
      itemListElement: ties.slice(0, 50).map((t, i) => ({
        "@type": "ListItem", position: i + 1, name: `${disp(t.s)} → ${disp(t.r)}`,
      })),
    },
  };

  const body = `${nav(2)}
<main class="wrap">
  <nav class="crumb"><a href="ROOT/index.html">ana sayfa</a> › <a href="ROOT/konu/index.html">konular</a> › ${esc(layer.label)}</nav>
  <h1>${esc(layer.label)}</h1>
  <p class="lede">${esc(desc)}</p>
  <p class="meta">${ties.length} yönlü bağ · <a href="ROOT/kure.html">küre üstünde gör →</a></p>
  <section class="edges">
    ${rows || "<p>bu katman için bağ derleniyor.</p>"}
  </section>
</main>
${foot(2)}
</body></html>`;
  return fix(head(title, desc, canonical, ld) + body, 2);
}

/* ── page: one country ── */
function countryPage(name) {
  const ties = tiesFor(name);
  const outgoing = ties.filter((t) => t.s === name);
  const incoming = ties.filter((t) => t.r === name);
  const layerKeys = [...new Set(ties.map((t) => t.type))];
  const dn = disp(name);
  const title = `${dn} — dış ilişki ağı`;
  const desc = `${dn} hangi ülkelerle silah, ticaret, enerji ve daha fazlasında bağlı: ${outgoing.length} çıkan, ${incoming.length} gelen bağ. Gerçek veri.`;
  const canonical = `${SITE}/ulke/${slug(name)}/`;

  function block(list, dir) {
    if (!list.length) return "";
    const byLayer = {};
    list.forEach((t) => { (byLayer[t.type] ||= []).push(t); });
    return Object.entries(byLayer).map(([lk, arr]) => {
      const lab = LAYER_BY_KEY[lk] ? LAYER_BY_KEY[lk].label : lk;
      const items = arr.map((t) => {
        const other = dir === "out" ? t.r : t.s;
        const num = t.exp != null ? ` <span class="pct">%${t.exp}</span>` : "";
        const note = t.note ? ` — <span class="note">${esc(t.note)}</span>` : "";
        return `<li><a href="ROOT/ulke/${slug(other)}/">${esc(disp(other))}</a>${num}${note}</li>`;
      }).join("");
      return `<div class="cgroup"><h3><a href="ROOT/konu/${lk}/">${esc(lab)}</a></h3><ul class="clist">${items}</ul></div>`;
    }).join("");
  }

  const ld = {
    "@type": "Place",
    name: dn,
    description: desc,
  };

  const body = `${nav(2)}
<main class="wrap">
  <nav class="crumb"><a href="ROOT/index.html">ana sayfa</a> › <a href="ROOT/ulke/index.html">ülkeler</a> › ${esc(dn)}</nav>
  <h1>${esc(dn)}</h1>
  <p class="lede">${esc(dn)}, ${layerKeys.length} katmanda ${ties.length} ülke bağıyla haritada. Aşağıda kimden alıp kime verdiği.</p>
  <p class="meta"><a href="ROOT/kure.html">${esc(dn)}'i küre üstünde gör →</a></p>
  ${outgoing.length ? `<h2>${esc(dn)} → dünya <span class="cnt">(veren / satan)</span></h2>${block(outgoing, "out")}` : ""}
  ${incoming.length ? `<h2>dünya → ${esc(dn)} <span class="cnt">(alan)</span></h2>${block(incoming, "in")}` : ""}
</main>
${foot(2)}
</body></html>`;
  return fix(head(title, desc, canonical, ld) + body, 2);
}

/* ── index pages: konu/ and ulke/ ── */
function konuIndex() {
  const title = "konular — kim kime ne satıyor?";
  const desc = "Silahtan tahıla, enerjiden yaptırıma: dünyanın ilişki ağını katman katman gez.";
  const cards = LAYERS.map((l) => {
    const n = TIES.filter((t) => t.type === l.key).length;
    return `<a class="tcard" href="ROOT/konu/${l.key}/">
      <h2>${esc(l.label)}</h2>
      <p>${esc(l.blurb)}</p>
      <span class="tcount">${n} bağ →</span>
    </a>`;
  }).join("\n");
  const body = `${nav(1)}
<main class="wrap">
  <nav class="crumb"><a href="ROOT/index.html">ana sayfa</a> › konular</nav>
  <h1>konular</h1>
  <p class="lede">${esc(desc)}</p>
  <section class="tgrid">${cards}</section>
</main>
${foot(1)}
</body></html>`;
  return fix(head(title, desc, `${SITE}/konu/`, { "@type": "CollectionPage" }) + body, 1);
}
function ulkeIndex() {
  const title = "ülkeler — kim kime ne satıyor?";
  const desc = "Her ülkenin dünyayla kurduğu silah, ticaret, enerji ve diğer bağların tam listesi.";
  const sorted = NAMES.slice().sort((a, b) => (supShare[b] || 0) - (supShare[a] || 0) || a.localeCompare(b));
  const links = sorted.map((n) => {
    const c = tiesFor(n).length;
    return `<a class="ulink" href="ROOT/ulke/${slug(n)}/">${esc(disp(n))} <span class="cnt">${c}</span></a>`;
  }).join("\n");
  const body = `${nav(1)}
<main class="wrap">
  <nav class="crumb"><a href="ROOT/index.html">ana sayfa</a> › ülkeler</nav>
  <h1>ülkeler</h1>
  <p class="lede">${esc(desc)} <span class="meta">(${NAMES.length} ülke)</span></p>
  <section class="uwall">${links}</section>
</main>
${foot(1)}
</body></html>`;
  return fix(head(title, desc, `${SITE}/ulke/`, { "@type": "CollectionPage" }) + body, 1);
}

/* ── write everything ── */
function writeFile(rel, html) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
}

let count = 0;
const urls = [`${SITE}/`, `${SITE}/kure.html`, `${SITE}/uye.html`, `${SITE}/konu/`, `${SITE}/ulke/`];

writeFile("konu/index.html", konuIndex());
writeFile("ulke/index.html", ulkeIndex());

for (const l of LAYERS) {
  writeFile(`konu/${l.key}/index.html`, layerPage(l));
  urls.push(`${SITE}/konu/${l.key}/`);
  count++;
}
for (const n of NAMES) {
  writeFile(`ulke/${slug(n)}/index.html`, countryPage(n));
  urls.push(`${SITE}/ulke/${slug(n)}/`);
  count++;
}

/* sitemap + robots */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
writeFile("sitemap.xml", sitemap);
writeFile("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`built ${count} pages + 2 index + sitemap (${urls.length} urls)`);
