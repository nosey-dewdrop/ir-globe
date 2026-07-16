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
const SITE = "https://ir-globe.noseydewdrop.com";
const readJSON = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));

/* ── load the live data (single source of truth) — only for meta + LD ── */
const COUNTRIES = readJSON("data/countries.json");
const LAYERS = readJSON("data/layers/index.json"); // [{key,label,blurb}]

/* başlıklar soru cümlesi — marka sesi ("kim kime ne satıyor?") */
const SORU = {
  silah: "Kim kime silah satıyor?",
  ticaret: "Kim kime ne satıyor?",
  enerji: "Kim kime enerji satıyor?",
  tahil: "Kim kimi doyuruyor?",
  ittifak: "Kim kiminle ittifak kurdu?",
  yaptirim: "Kim kime yaptırım uyguluyor?",
  goc: "Kim nereye sığınıyor?",
  borc: "Kim kime borç veriyor?",
  diplomasi: "Kim kiminle yakın duruyor?",
  teknoloji: "Kim kime çip satıyor?",
  us: "Kim nerede üs kuruyor?",
  yardim: "Kim kime yardım ediyor?",
  kablo: "Kim kiminle aynı kabloya bağlı?",
  siber: "Kim kime siber saldırıyor?",
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

/* coded events (with source urls) so we can BAKE the latest dated, sourced
   headlines into each country shell — the page is useful on first paint and
   indexable, instead of a bare "canlı veri yükleniyor…" placeholder. */
let EVENTS = [], PAIRS = {}, EWINDOW = null, EGEN = null;
try {
  const EIDX = readJSON("data/events/index.json");
  EVENTS = EIDX.events || [];
  PAIRS = EIDX.pairs || {};
  EWINDOW = EIDX.window || null;
  EGEN = EIDX.generated || null;
} catch (e) {}
const trMonth = ["oca", "şub", "mar", "nis", "may", "haz", "tem", "ağu", "eyl", "eki", "kas", "ara"];
const shortD = (d) => { const p = String(d).split("-"); return p.length === 3 ? (parseInt(p[2], 10) + " " + (trMonth[parseInt(p[1], 10) - 1] || "")) : d; };
function bakedFor(name) {
  const today = new Date("2026-07-15"); // stamped at build; page JS re-renders live
  const mine = EVENTS
    .filter((e) => (e.s === name || e.r === name) && e.title && e.date)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const seen = {}, top = [];
  for (const e of mine) { const k = (e.title || "").slice(0, 40).toLowerCase(); if (!seen[k]) { seen[k] = 1; top.push(e); } if (top.length >= 6) break; }
  if (!top.length) return "";
  const rows = top.map((e) => {
    const other = e.s === name ? e.r : e.s;
    const arrow = `${esc(disp(e.s === name ? name : other))} → ${esc(disp(e.s === name ? other : name))}`;
    const lnk = e.pub && e.title ? `https://www.google.com/search?q=${encodeURIComponent('site:' + e.pub + ' "' + e.title + '"')}` : (e.url || "#");
    return `<li><a href="${esc(lnk)}" rel="noopener">${esc(e.title)}</a> <span class="baked-m">${arrow} · ${esc(e.event || "")}${e.pub ? " · " + esc(e.pub) : ""} · ${esc(shortD(e.date))}</span></li>`;
  }).join("");
  return `<section class="baked"><h2>Son gelişmeler</h2><ul class="baked-list">${rows}</ul></section>`;
}

/* pair leaves: only event pairs with >=2 recorded events get a page —
   one-event pairs stay on the live iliski.html view (no thin doorway pages). */
const PAIR_KEYS = Object.keys(PAIRS).filter((k) => {
  const [a, b] = k.split("|");
  return PAIRS[k].n >= 2 && COUNTRIES[a] && COUNTRIES[b];
}).sort();

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
    isPartOf: { "@type": "WebSite", name: "Kim kime ne satıyor?", url: SITE + "/" },
    publisher: { "@type": "Organization", name: "nosey-dewdrop", url: "https://noseydewdrop.com" },
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
<meta property="og:site_name" content="Kim kime ne satıyor?">
<meta name="twitter:card" content="summary">
<meta name="robots" content="index,follow">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="ROOT/css/site.css?v=13">
</head>
<body class="doc" data-root="ROOT/">`;
}
function nav() {
  return `<header class="topbar">
  <a class="brand" href="ROOT/index.html">Kim kime ne satıyor?</a>
  <nav class="topnav">
    <a href="ROOT/index.html">Küre</a>
    <a href="ROOT/akis.html">Akış</a>
    <a href="ROOT/konu/index.html">Konular</a>
    <a href="ROOT/ulke/index.html">Ülkeler</a>
    <a href="ROOT/app.html#uye">Üyelik</a>
  </nav>
</header>`;
}
function foot() {
  return `<footer class="docfoot">
  <p>Veri: <a href="https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-international-arms-transfers-2025" rel="noopener">SIPRI</a> (silah) · diğer katmanlar açık kaynak + Google News · uydurma veri yok.</p>
  <p>Bağımsız · açık · kaynaklı · bir <span class="sig">nosey-dewdrop</span> yayını · <a href="ROOT/metodoloji.html">Metodoloji</a> · <a href="ROOT/veri.html">Veri</a> · <a href="ROOT/gizlilik.html">Gizlilik</a> · <a href="ROOT/kosullar.html">Koşullar</a></p>
</footer>`;
}
/* thin shell body: crawlers get h1 + lede; js/dizin.js draws the rest live */
function shell({ view, key, crumbMid, crumbLeaf, h1, lede, baked }) {
  return `${nav()}
<main class="wrap" id="dizin" data-view="${view}"${key ? ` data-key="${esc(key)}"` : ""}>
  <nav class="crumb"><a href="ROOT/index.html">Ana sayfa</a> › ${crumbMid}${esc(crumbLeaf)}</nav>
  <h1>${esc(h1)}</h1>
  <p class="lede">${esc(lede)}</p>
  ${baked || ""}
  <p class="dg-load">Güncel liste yükleniyor…</p>
  <noscript><p class="note">Bu dizin canlı veriden çizilir. <a href="ROOT/index.html">Küreden devam et →</a></p></noscript>
</main>
${foot()}
<script src="ROOT/js/i18n.js?v=119" defer></script>
<script src="ROOT/js/motor.js?v=125" defer></script>
<script src="ROOT/js/dizin.js?v=125" defer></script>
<script src="ROOT/admin/config.js" defer></script>
<script src="ROOT/js/sayac.js?v=1" defer></script>
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
  const title = `${soru(key, layer.label + " ağı")} · Kim kime ne satıyor?`;
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
    crumbMid: `<a href="ROOT/konu/index.html">Konular</a> › `, crumbLeaf: layer.label,
    h1: soru(key, layer.label), lede: desc,
  });
  return fix(head(title, desc, `${SITE}/konu/${key}/`, ld) + body, 2);
}

/* baked links from a country page down to its iliski leaves (silo interlink) */
function pairLinksFor(name) {
  const mine = PAIR_KEYS
    .filter((k) => { const [a, b] = k.split("|"); return a === name || b === name; })
    .sort((x, y) => PAIRS[y].n - PAIRS[x].n)
    .slice(0, 10);
  if (!mine.length) return "";
  const links = mine.map((k) => {
    const [a, b] = k.split("|");
    const other = a === name ? b : a;
    return `<a href="ROOT/iliski/${esc(pairSlug(k))}/">${esc(disp(name))} ↔ ${esc(disp(other))}</a>`;
  }).join(" · ");
  return `<p class="meta">İlişki sayfaları: ${links}</p>`;
}

/* ── page: one country ── */
function countryPage(name) {
  const ties = TIES.filter((t) => t.s === name || t.r === name);
  const outgoing = ties.filter((t) => t.s === name).length;
  const incoming = ties.filter((t) => t.r === name).length;
  const layerKeys = [...new Set(ties.map((t) => t.type))];
  const dn = disp(name);
  const title = `${dn} · Dış ilişki ağı`;
  const desc = `${dn} hangi ülkelerle silah, ticaret, enerji ve daha fazlasında bağlı: ${outgoing} çıkan, ${incoming} gelen bağ. Gerçek veri.`;
  const body = shell({
    view: "ulke", key: name,
    crumbMid: `<a href="ROOT/ulke/index.html">Ülkeler</a> › `, crumbLeaf: dn,
    h1: dn, lede: `${dn}, ${layerKeys.length} katmanda ${ties.length} ülke bağıyla haritada. Aşağıda kimden alıp kime verdiği.`,
    baked: bakedFor(name) + pairLinksFor(name),
  });
  return fix(head(title, desc, `${SITE}/ulke/${slug(name)}/`, { "@type": "Place", name: dn, description: desc }) + body, 2);
}

/* ── page: one country pair (iliski leaf) ── */
const LAYER_BY_KEY = {};
LAYERS.forEach((l) => { LAYER_BY_KEY[l.key] = l; });
const pairSlug = (k) => { const [a, b] = k.split("|"); return `${slug(a)}-${slug(b)}`; };
const srcLink = (e) => (e.pub && e.title
  ? `https://www.google.com/search?q=${encodeURIComponent('site:' + e.pub + ' "' + e.title + '"')}`
  : (e.url || "#"));
const clip = (s, max) => (s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, "") + "…");
/* .trend rules mirror the live pair page (iliski.html inline styles) */
const TREND_CSS = `<style>.trend{margin:8px 0 4px}.trend svg{display:block;width:100%;max-width:560px;height:auto}.trend .tl{font:11px var(--sans);fill:var(--faint)}</style>`;

/* weekly tone SVG — same drawing the live pair page (js/iliski.js) bakes */
function trendSvg(weekly) {
  const weeks = Object.keys(weekly).sort();
  if (weeks.length < 3) return "";
  const W = 560, H = 120, P = 18;
  const xs = (i) => P + (i * (W - 2 * P)) / (weeks.length - 1);
  const ys = (v) => { const c = Math.max(-10, Math.min(10, v)); return H - P - ((c + 10) / 20) * (H - 2 * P); };
  const pts = weeks.map((w, i) => xs(i).toFixed(1) + "," + ys(weekly[w].avg).toFixed(1)).join(" ");
  return `<section class="trend"><h2>İlişki haftadan haftaya <span class="cnt">Yukarı = yakınlaşma · aşağı = gerginlik</span></h2>
<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Haftalık ilişki tonu çizgisi">
<line x1="${P}" y1="${ys(0).toFixed(1)}" x2="${W - P}" y2="${ys(0).toFixed(1)}" stroke="#d9d9d9" stroke-dasharray="3 4"/>
<polyline points="${pts}" fill="none" stroke="#0a2a5e" stroke-width="1.6"/>
${weeks.map((w, i) => `<circle cx="${xs(i).toFixed(1)}" cy="${ys(weekly[w].avg).toFixed(1)}" r="2" fill="#0a2a5e"/>`).join("")}
<text class="tl" x="${P}" y="${H - 3}">${esc(weeks[0])}</text>
<text class="tl" x="${W - P}" y="${H - 3}" text-anchor="end">${esc(weeks[weeks.length - 1])}</text>
</svg><p class="meta">Haberlerden otomatik çıkarıldı · hafta başına ortalama</p></section>`;
}

function pairPage(key) {
  const [a, b] = key.split("|");
  const p = PAIRS[key];
  const da = disp(a), db = disp(b);
  const weeks = Object.keys(p.weekly || {}).length;

  /* real events of this pair, newest first, deduped by title */
  const mine = EVENTS.filter((e) => e.pair === key && e.title && e.date)
    .sort((x, y) => String(y.date).localeCompare(String(x.date)));
  const seen = {}, evs = [];
  for (const e of mine) { const k = e.title.slice(0, 40).toLowerCase(); if (!seen[k]) { seen[k] = 1; evs.push(e); } if (evs.length >= 12) break; }

  /* structural ties between the two, from the layer files */
  const struct = TIES.filter((t) => (t.s === a && t.r === b) || (t.s === b && t.r === a));
  const evLayers = Object.keys(p.layers || {});

  let title = `${da} ↔ ${db} ilişkisi · Kim kime ne satıyor?`;
  if (title.length > 60) title = `${da} ↔ ${db} ilişkisi`;
  if (title.length > 60) title = `${da} ↔ ${db}`;
  const layerNames = evLayers.map((k) => (LAYER_BY_KEY[k] ? LAYER_BY_KEY[k].label : k)).join(", ");
  const descBase = `${da} ile ${db} arasında ${p.n} kayıtlı olay (${layerNames}), son olay ${shortD(p.last)}${weeks >= 3 ? `, ${weeks} haftalık ton eğrisi` : ""}.`;
  const descFull = `${descBase} Gerçek, kaynaklı manşetlerden.`;
  const desc = descFull.length <= 155 ? descFull : clip(descBase, 155);
  const lede = `${EWINDOW ? `${shortD(EWINDOW.from)} – ${shortD(EWINDOW.to)} aralığında ` : ""}${da} ile ${db} arasında ${p.n} olay kaydedildi (${layerNames}). Aşağıda yapısal bağlar, olay geçmişi ve kaynaklı manşetler.`;

  const structRows = struct.map((t) => {
    const l = LAYER_BY_KEY[t.type];
    const lbl = l ? l.label : t.type;
    const lnk = l ? `<a href="ROOT/konu/${esc(t.type)}/">${esc(lbl)}</a>` : esc(lbl);
    return `      <li>${esc(disp(t.s))} → ${esc(disp(t.r))} · ${lnk}</li>`;
  }).join("\n");
  const structHtml = struct.length
    ? `<section class="cgroup"><h2>Yapısal bağlar <span class="cnt">${struct.length}</span></h2><ul class="clist">\n${structRows}\n    </ul></section>` : "";

  const evRows = evs.map((e) => {
    const l = LAYER_BY_KEY[e.layer];
    const konu = l ? `<a href="ROOT/konu/${esc(e.layer)}/">${esc(l.label)}</a>` : esc(e.layer || "");
    return `<li><a href="${esc(srcLink(e))}" rel="noopener">${esc(e.title)}</a> <span class="baked-m">${esc(disp(e.s))} → ${esc(disp(e.r))} · ${esc(e.event || "")} · ${konu}${e.pub ? " · " + esc(e.pub) : ""} · ${esc(shortD(e.date))}</span></li>`;
  }).join("");
  const evHtml = evs.length
    ? `<section class="baked"><h2>Olay geçmişi <span class="cnt">${evs.length}</span></h2><ul class="baked-list">${evRows}</ul></section>` : "";

  const ld = {
    "@type": "WebPage",
    about: [{ "@type": "Place", name: da }, { "@type": "Place", name: db }],
    ...(EGEN ? { dateModified: EGEN } : {}),
  };
  const body = `${nav()}
<main class="wrap">
  <nav class="crumb"><a href="ROOT/index.html">Ana sayfa</a> › <a href="ROOT/iliski/index.html">ilişkiler</a> › ${esc(da)} ↔ ${esc(db)}</nav>
  <h1>${esc(da)} ↔ ${esc(db)}</h1>
  <p class="lede">${esc(lede)}</p>
  ${structHtml}
  ${trendSvg(p.weekly || {})}
  ${evHtml}
  <p class="meta">ülke sayfaları: <a href="ROOT/ulke/${esc(slug(a))}/">${esc(da)}</a> · <a href="ROOT/ulke/${esc(slug(b))}/">${esc(db)}</a> · <a href="ROOT/iliski.html?a=${encodeURIComponent(a)}&amp;b=${encodeURIComponent(b)}">canlı görünüm →</a></p>
</main>
${foot()}
<script src="ROOT/admin/config.js" defer></script>
<script src="ROOT/js/sayac.js?v=1" defer></script>
</body></html>`;
  const html = head(title, desc, `${SITE}/iliski/${pairSlug(key)}/`, ld).replace("</head>", TREND_CSS + "\n</head>") + body;
  return fix(html, 2);
}

/* ── index page: iliski/ (leaf directory, fully baked) ── */
function iliskiIndex() {
  const title = "İlişkiler · Kim kime ne satıyor?";
  const desc = clip(`İki ülke arasındaki her şey tek sayfada: ${PAIR_KEYS.length} ülke çifti, olay geçmişi, haftalık ton ve kaynaklı manşetlerle.`, 155);
  const rows = PAIR_KEYS
    .slice()
    .sort((x, y) => PAIRS[y].n - PAIRS[x].n)
    .map((k) => {
      const [a, b] = k.split("|");
      return `      <li><a href="ROOT/iliski/${esc(pairSlug(k))}/">${esc(disp(a))} ↔ ${esc(disp(b))}</a> <span class="cnt">${PAIRS[k].n} olay</span></li>`;
    }).join("\n");
  const body = `${nav()}
<main class="wrap">
  <nav class="crumb"><a href="ROOT/index.html">Ana sayfa</a> › İlişkiler</nav>
  <h1>İlişkiler</h1>
  <p class="lede">${esc(desc)}</p>
  <div class="cgroup"><ul class="clist">
${rows}
  </ul></div>
  <p class="meta">Listedeki her çiftin en az iki kayıtlı olayı var; diğer tüm çiftler <a href="ROOT/ulke/index.html">ülke sayfalarındaki</a> ↔ bağlantılarından canlı görünümde açılır.</p>
</main>
${foot()}
<script src="ROOT/admin/config.js" defer></script>
<script src="ROOT/js/sayac.js?v=1" defer></script>
</body></html>`;
  return fix(head(title, desc, `${SITE}/iliski/`, { "@type": "CollectionPage" }) + body, 1);
}

/* ── index pages: konu/ and ulke/ ── */
function konuIndex() {
  const title = "Konular · Kim kime ne satıyor?";
  const desc = "Silahtan tahıla, enerjiden yaptırıma: dünyanın ilişki ağını katman katman gez.";
  const body = shell({ view: "konu-index", crumbMid: "", crumbLeaf: "konular", h1: "konular", lede: desc });
  return fix(head(title, desc, `${SITE}/konu/`, { "@type": "CollectionPage" }) + body, 1);
}
function ulkeIndex() {
  const title = "Ülkeler · Kim kime ne satıyor?";
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
/* ── veri.html: layer × source × year × license × updated, baked from the live
   layer files so the provenance page can never drift from the data ── */
const veriRows = LAYERS.map((l) => {
  const lay = readJSON(`data/layers/${l.key}.json`);
  const s = lay.source || {};
  const parts = [
    s.url ? `<a href="${esc(s.url)}" rel="noopener">${esc(s.name || l.key)}</a>` : esc(s.name || "açık kaynak"),
    s.year ? esc(String(s.year)) : "",
    s.license ? esc(s.license) : "",
    lay.updated ? `güncelleme: ${esc(String(lay.updated).slice(0, 10))}` : "",
    `${(lay.ties || []).length} bağ`,
  ].filter(Boolean).join(" · ");
  return `      <li><strong>${esc(l.label)}</strong>: ${parts}</li>`;
}).join("\n");
const veriHtml = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Veri ve kaynaklar · Kim kime ne satıyor?</title>
<meta name="description" content="Her katmanın veri kaynağı, yılı, lisansı ve son güncelleme tarihi. Uydurma veri yok; kaynağı olmayan bağ yayınlanmaz.">
<link rel="canonical" href="${SITE}/veri.html">
<meta property="og:type" content="article">
<meta property="og:title" content="Veri ve kaynaklar · Kim kime ne satıyor?">
<meta property="og:description" content="Her katmanın veri kaynağı, yılı, lisansı ve son güncelleme tarihi. Kaynağı olmayan bağ yayınlanmaz.">
<meta property="og:url" content="${SITE}/veri.html">
<meta property="og:site_name" content="Kim kime ne satıyor?">
<meta name="twitter:card" content="summary">
<meta name="robots" content="index,follow">
<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Kim kime ne satıyor? Ülke ilişkileri veri katmanları",
  description: `Ülkeler arası ${LAYERS.map((l) => l.label).join(", ")} bağları; her katman kaynaklı ve tarihli.`,
  url: `${SITE}/veri.html`,
  isAccessibleForFree: true,
  creator: { "@type": "Organization", name: "nosey-dewdrop", url: "https://noseydewdrop.com" },
})}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/site.css?v=13">
</head>
<body>
<header class="topbar">
  <a class="brand" href="index.html">Kim kime ne satıyor?</a>
  <nav class="topnav">
    <a href="index.html">Küre</a>
    <a href="akis.html">Akış</a>
    <a href="konu/index.html">Konular</a>
    <a href="ulke/index.html">Ülkeler</a>
    <a href="app.html#uye">Üyelik</a>
  </nav>
</header>
<main class="wrap">
  <nav class="crumb"><a href="index.html">Ana sayfa</a> › Veri ve kaynaklar</nav>
  <h1>Veri ve kaynaklar</h1>
  <p class="lede">Her katmanın verisi nereden geliyor, hangi yıldan, hangi lisansla ve en son ne zaman güncellendi. Bu sayfa elle yazılmıyor; her veri güncellemesinde doğrudan veri dosyalarından yeniden üretiliyor, bu yüzden veriyle çelişemez.</p>
  <h2>Yapısal katmanlar</h2>
  <div class="cgroup">
    <ul class="clist">
${veriRows}
    </ul>
  </div>
  <h2>Haberler ve olaylar</h2>
  <p class="lede" style="font-size:15px">Haber başlıkları Google News ve seçili yayınların (BBC, Al Jazeera, Guardian, DW, France24, UN News ve diğerleri) açık RSS akışlarından 6 saatte bir çekilir; her başlık kaynağına link verir. Olaylar, ton skorları ve radar bu başlıklardan <strong>otomatik çıkarılır</strong> ve hata payı taşır: nasıl çalıştığı ve ölçülmüş doğruluğu <a href="metodoloji.html">metodoloji sayfasında</a> açıktır.</p>
  <p class="meta" style="margin-top:30px">Bu ürün bir <span class="sig">nosey-dewdrop</span> yayınıdır. Kaynağı olmayan bağ yayınlanmaz.</p>
</main>
<footer class="docfoot">
  <p>Bağımsız · açık · kaynaklı · bir <span class="sig">nosey-dewdrop</span> yayını · <a href="metodoloji.html">Metodoloji</a> · <a href="gizlilik.html">Gizlilik</a> · <a href="kosullar.html">Koşullar</a></p>
</footer>
<script src="admin/config.js"></script>
<script src="js/sayac.js?v=1"></script>
</body>
</html>
`;
writeFile("veri.html", veriHtml);

const urls = [`${SITE}/`, `${SITE}/akis.html`, `${SITE}/bulten.html`, `${SITE}/metodoloji.html`, `${SITE}/veri.html`, `${SITE}/gizlilik.html`, `${SITE}/kosullar.html`, `${SITE}/konu/`, `${SITE}/ulke/`, `${SITE}/iliski/`];

writeFile("konu/index.html", konuIndex());
writeFile("ulke/index.html", ulkeIndex());
writeFile("iliski/index.html", iliskiIndex());

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
/* iliski leaves are rebuilt from scratch each run so pairs that drop below
   the 2-event bar (rolling news window) don't linger as stale pages */
const iliskiDir = path.join(ROOT, "iliski");
if (fs.existsSync(iliskiDir)) {
  for (const d of fs.readdirSync(iliskiDir)) {
    const p = path.join(iliskiDir, d);
    if (fs.statSync(p).isDirectory()) fs.rmSync(p, { recursive: true });
  }
}
for (const k of PAIR_KEYS) {
  writeFile(`iliski/${pairSlug(k)}/index.html`, pairPage(k));
  urls.push(`${SITE}/iliski/${pairSlug(k)}/`);
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
