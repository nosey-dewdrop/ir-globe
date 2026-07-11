/* Fetch real, current news per connection for EVERY layer from Google News RSS
   (server-side, no CORS, no key). Reads connections from data/layers/*.json and
   writes data/news/<layer>.json + digest.json + meta.json.
   Run locally or by the GitHub Action. No fabrication: titles/urls come from Google News. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const readJSON = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
const writeJSON = (rel, obj) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 1) + "\n");
};

const INDEX = readJSON("data/layers/index.json");
const LAYER_CONNS = {};
for (const l of INDEX) {
  const lay = readJSON(`data/layers/${l.key}.json`);
  LAYER_CONNS[l.key] = (lay.ties || []).map((t) => ({ s: t.s, r: t.r }));
}

// layer-appropriate search terms so results are on-topic
const QUERY = {
  silah: "arms OR weapons OR defense deal",
  ticaret: "trade",
  enerji: "oil OR gas OR energy",
  tahil: "wheat OR grain OR food exports",
  ittifak: "alliance OR defense treaty OR military",
  yaptirim: "sanctions",
  goc: "migration OR refugees",
  borc: "loan OR debt OR investment",
  diplomasi: "diplomatic relations OR summit",
  teknoloji: "semiconductor OR chip OR technology",
  us: "military base OR troops",
  yardim: "aid OR development assistance",
};

const PER = { silah: 10 };           // articles per connection (silah 10, others 7) — richer flow
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (s) => s.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "")
  .replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();

function parseItems(xml) {
  const items = [];
  for (const b of xml.split("<item>").slice(1)) {
    const body = b.split("</item>")[0];
    const t = body.match(/<title>([\s\S]*?)<\/title>/);
    const l = body.match(/<link>([\s\S]*?)<\/link>/);
    const d = body.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const src = body.match(/<source[^>]*>([\s\S]*?)<\/source>/);
    if (!t || !l) continue;
    let title = strip(t[1]);
    let source = src ? strip(src[1]) : "";
    if (source) {
      for (const sep of [" - ", " | "]) {
        if (title.endsWith(sep + source)) { title = title.slice(0, title.length - (sep + source).length); break; }
      }
    }
    let date = "";
    if (d) { const dt = new Date(strip(d[1])); if (!isNaN(dt)) date = dt.toISOString().slice(0, 10); }
    items.push({ title, source, url: strip(l[1]), date });
  }
  return items;
}

async function fetchConn(s, r, terms, n) {
  const q = encodeURIComponent(`"${s}" "${r}" ${terms}`);
  const url = `https://news.google.com/rss/search?q=${q}&hl=en-US&gl=US&ceid=US:en`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return [];
    return parseItems(await res.text()).slice(0, n);
  } catch (e) { return []; }
}

(async () => {
  const out = {};
  let total = 0, done = 0;
  const jobs = [];
  Object.entries(LAYER_CONNS).forEach(([layer, conns]) =>
    conns.forEach((c) => jobs.push({ layer, s: c.s, r: c.r })));
  for (const j of jobs) {
    const arts = await fetchConn(j.s, j.r, QUERY[j.layer] || "", PER[j.layer] || 7);
    if (arts.length) { (out[j.layer] = out[j.layer] || {})[j.s + "→" + j.r] = arts; total += arts.length; }
    done++;
    process.stdout.write(`\r${done}/${jobs.length}  ${total} makale`);
    await sleep(220);
  }

  /* per-layer files */
  const perLayer = {};
  for (const l of INDEX) {
    const bag = out[l.key] || {};
    let n = 0;
    Object.values(bag).forEach((arr) => { n += arr.length; });
    perLayer[l.key] = n;
    writeJSON(`data/news/${l.key}.json`, bag);
  }

  /* digest: newest 30 across all layers, deduped by title */
  const all = [];
  Object.entries(out).forEach(([layer, edges]) =>
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
  writeJSON("data/news/digest.json", digest);
  writeJSON("data/news/meta.json", { updated: new Date().toISOString(), total, perLayer });

  console.log(`\nyazıldı: data/news/ — ${Object.keys(out).length} katman, ${total} makale`);
})();
