/* build-seo.js — generate THIN crawlable shells for konu/ and ulke/ pages.
   Each shell carries the full SEO surface (title, description, canonical,
   og, JSON-LD — all computed from the live data, no fabrication) plus the
   h1/lede prerendered for crawlers; the visible directory body is drawn
   client-side by js/dizin.js from the same data/ files the globe uses.
   This keeps ~210 pages of URL surface at ~1.5 KB each instead of baking
   megabytes of HTML that duplicate data/.

   run:  node scripts/build-seo.js
   out:  /konu/<layer>/index.html  ·  /ulke/<country>/index.html  ·  sitemap.xml */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE = "https://damlahelloworld.github.io/ir-globe";
const readJSON = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));

/* ── load the live data (single source of truth) — only for meta + LD ── */
const COUNTRIES = readJSON("data/countries.json");
const LAYERS = readJSON("data/layers/index.json"); // [{key,label,blurb}]

/* başlıklar soru cümlesi — marka sesi ("kim kime ne satıyor?") */
const SORU = {
  silah: "kim kime silah satıyor?",
  ticaret: "kim kime ne satıyor?",
  enerji: "kim kime enerji satıyor?",
  tahil: "kim kimi doyuruyor?",
  ittifak: "kim kiminle ittifak kurdu?",
  yaptirim: "kim kime yaptırım uyguluyor?",
  goc: "kim nereye sığınıyor?",
  borc: "kim kime borç veriyor?",
  diplomasi: "kim kiminle yakın duruyor?",
  teknoloji: "kim kime çip satıyor?",
  us: "kim nerede üs kuruyor?",
  yardim: "kim kime yardım ediyor?",
  kablo: "kim kiminle aynı kabloya bağlı?",
  siber: "kim kime siber saldırıyor?",
};
const soru = (key, fallback) => SORU[key] || fallback;

const TIES = [];
for (const l of LAYERS) {
  const lay = readJSON(`data/layers/${l.key}.json`);
  (lay.ties || []).forEach((c) => {
    if (COUNTRIES[c.s] && COUNTRIES[c.r]) TIES.push({ s: c.s, r: c.r, type: l.key });
  });
}
const NAMES = [...new Set(TIES.flatMap((t) => [t.s, t.r]))].sort();

/* ── helpers ── */
const esc = (s) =>
  String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* slug + display come from the registry (built by scripts/build-countries.js) */
const slug = (name) => (COUNTRIES[name] ? COUNTRIES[name].slug : name.replace(/[^a-z0-9]+/g, "-"));
const disp = (name) => (COUNTRIES[name] ? COUNTRIES[name].disp : name);

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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="ROOT/css/site.css?v=9">
</head>
<body class="doc" data-root="ROOT/">`;
}
function nav() {
  return `<header class="topbar">
  <a class="brand" href="ROOT/index.html">kim kime ne satıyor?</a>
  <nav class="topnav">
    <a href="ROOT/index.html">küre</a>
    <a href="ROOT/akis.html">akış</a>
    <a href="ROOT/konu/index.html">konular</a>
    <a href="ROOT/ulke/index.html">ülkeler</a>
    <a href="ROOT/app.html#uye">üyelik</a>
  </nav>
</header>`;
}
function foot() {
  return `<footer class="docfoot">
  <p>veri: <a href="https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-international-arms-transfers-2025" rel="noopener">SIPRI</a> (silah) · diğer katmanlar açık kaynak + google news · uydurma veri yok.</p>
  <p>bağımsız · açık · kaynaklı · bir <span class="sig">damlahelloworld</span> yayını · <a href="ROOT/gizlilik.html">gizlilik</a></p>
</footer>`;
}
/* thin shell body: crawlers get h1 + lede; js/dizin.js draws the rest live */
function shell({ view, key, crumbMid, crumbLeaf, h1, lede }) {
  return `${nav()}
<main class="wrap" id="dizin" data-view="${view}"${key ? ` data-key="${esc(key)}"` : ""}>
  <nav class="crumb"><a href="ROOT/index.html">ana sayfa</a> › ${crumbMid}${esc(crumbLeaf)}</nav>
  <h1>${esc(h1)}</h1>
  <p class="lede">${esc(lede)}</p>
  <p class="dg-load">canlı veri yükleniyor…</p>
  <noscript><p class="note">Bu dizin canlı veriden çizilir — <a href="ROOT/index.html">küreden devam et →</a></p></noscript>
</main>
${foot()}
<script src="ROOT/js/dizin.js?v=1" defer></script>
</body></html>`;
}
// rewrite the ROOT token to the right relative depth (ROOT/ -> ../.., ROOT -> ..)
function fix(html, depth) {
  const r = "../".repeat(depth);
  return html.replace(/ROOT\//g, r).replace(/data-root="ROOT"/g, `data-root="${r}"`);
}

/* ── page: one layer ── */
function layerPage(layer) {
  const key = layer.key;
  const all = TIES.filter((t) => t.type === key);
  const title = `${soru(key, layer.label + " ağı")} — kim kime ne satıyor?`;
  const desc = layer.blurb;
  const ld = {
    "@type": "CollectionPage",
    about: layer.label,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: Math.min(all.length, 100),
      itemListElement: all.slice(0, 50).map((t, i) => ({
        "@type": "ListItem", position: i + 1, name: `${disp(t.s)} → ${disp(t.r)}`,
      })),
    },
  };
  const body = shell({
    view: "konu", key,
    crumbMid: `<a href="ROOT/konu/index.html">konular</a> › `, crumbLeaf: layer.label,
    h1: soru(key, layer.label), lede: desc,
  });
  return fix(head(title, desc, `${SITE}/konu/${key}/`, ld) + body, 2);
}

/* ── page: one country ── */
function countryPage(name) {
  const ties = TIES.filter((t) => t.s === name || t.r === name);
  const outgoing = ties.filter((t) => t.s === name).length;
  const incoming = ties.filter((t) => t.r === name).length;
  const layerKeys = [...new Set(ties.map((t) => t.type))];
  const dn = disp(name);
  const title = `${dn} — dış ilişki ağı`;
  const desc = `${dn} hangi ülkelerle silah, ticaret, enerji ve daha fazlasında bağlı: ${outgoing} çıkan, ${incoming} gelen bağ. Gerçek veri.`;
  const body = shell({
    view: "ulke", key: name,
    crumbMid: `<a href="ROOT/ulke/index.html">ülkeler</a> › `, crumbLeaf: dn,
    h1: dn, lede: `${dn}, ${layerKeys.length} katmanda ${ties.length} ülke bağıyla haritada. Aşağıda kimden alıp kime verdiği.`,
  });
  return fix(head(title, desc, `${SITE}/ulke/${slug(name)}/`, { "@type": "Place", name: dn, description: desc }) + body, 2);
}

/* ── index pages: konu/ and ulke/ ── */
function konuIndex() {
  const title = "konular — kim kime ne satıyor?";
  const desc = "Silahtan tahıla, enerjiden yaptırıma: dünyanın ilişki ağını katman katman gez.";
  const body = shell({ view: "konu-index", crumbMid: "", crumbLeaf: "konular", h1: "konular", lede: desc });
  return fix(head(title, desc, `${SITE}/konu/`, { "@type": "CollectionPage" }) + body, 1);
}
function ulkeIndex() {
  const title = "ülkeler — kim kime ne satıyor?";
  const desc = `Her ülkenin dünyayla kurduğu silah, ticaret, enerji ve diğer bağların tam listesi. (${NAMES.length} ülke)`;
  const body = shell({ view: "ulke-index", crumbMid: "", crumbLeaf: "ülkeler", h1: "ülkeler", lede: desc });
  return fix(head(title, desc, `${SITE}/ulke/`, { "@type": "CollectionPage" }) + body, 1);
}

/* ── write everything ── */
function writeFile(rel, html) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
}

let count = 0;
const urls = [`${SITE}/`, `${SITE}/akis.html`, `${SITE}/bulten.html`, `${SITE}/konu/`, `${SITE}/ulke/`];

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

console.log(`built ${count} thin shells + 2 index + sitemap (${urls.length} urls)`);
