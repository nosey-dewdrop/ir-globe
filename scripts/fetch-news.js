/* Fetch real, current news per connection for EVERY layer from Google News RSS
   (server-side, no CORS, no key). Writes js/articles.js as ARTICLES[layer]["s→r"].
   Run locally or by the GitHub Action. No fabrication: titles/urls come from Google News. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const load = (f, keys) => new Function(fs.readFileSync(path.join(ROOT, f), "utf8") + `; return {${keys}};`)();
const { SUPPLIERS, RECIPIENTS } = load("js/data.js", "SUPPLIERS,RECIPIENTS");
const { LAYER_TIES } = load("js/layers.js", "LAYER_TIES");

// silah connections come from the SIPRI tables; the rest from layers.js
const silah = {};
SUPPLIERS.forEach((s) => s.to.forEach(([r]) => { silah[s.c + "→" + r] = { s: s.c, r }; }));
RECIPIENTS.forEach((rc) => rc.from.forEach(([s]) => { silah[s + "→" + rc.c] = { s, r: rc.c }; }));

const LAYER_CONNS = { silah: Object.values(silah) };
Object.entries(LAYER_TIES).forEach(([k, arr]) => { LAYER_CONNS[k] = arr; });

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
    const arts = await fetchConn(j.s, j.r, QUERY[j.layer], PER[j.layer] || 7);
    if (arts.length) { (out[j.layer] = out[j.layer] || {})[j.s + "→" + j.r] = arts; total += arts.length; }
    done++;
    process.stdout.write(`\r${done}/${jobs.length}  ${total} makale`);
    await sleep(220);
  }
  const body = "/* real, current news per connection, per layer — Google News RSS, refreshed by the\n" +
    "   news GitHub Action. no fabrication: every title/url comes from Google News. */\n" +
    "const ARTICLES = " + JSON.stringify(out, null, 2) + ";\n";
  fs.writeFileSync(path.join(ROOT, "js/articles.js"), body);
  console.log(`\nyazıldı: ${Object.keys(out).length} katman, ${total} makale`);
})();
