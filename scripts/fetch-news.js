/* Fetch real, current news per arms relationship from Google News RSS (server-side, no CORS,
   no key). Writes js/articles.js. Run locally or by the GitHub Action on a schedule.
   No fabrication: every title/url comes straight from Google News. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const dataTxt = fs.readFileSync(path.join(ROOT, "js/data.js"), "utf8");
const { SUPPLIERS, RECIPIENTS } = new Function(dataTxt + "; return {SUPPLIERS, RECIPIENTS};")();

// unique directed ties from the SIPRI tables
const ties = {};
SUPPLIERS.forEach((s) => s.to.forEach(([r]) => { ties[s.c + "→" + r] = { s: s.c, r }; }));
RECIPIENTS.forEach((rc) => rc.from.forEach(([s]) => { ties[s + "→" + rc.c] = { s, r: rc.c }; }));
const TIES = Object.values(ties);

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const strip = (s) => s.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "")
  .replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();

function parseItems(xml) {
  const items = [];
  const blocks = xml.split("<item>").slice(1);
  for (const b of blocks) {
    const body = b.split("</item>")[0];
    const t = body.match(/<title>([\s\S]*?)<\/title>/);
    const l = body.match(/<link>([\s\S]*?)<\/link>/);
    const d = body.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const src = body.match(/<source[^>]*>([\s\S]*?)<\/source>/);
    if (!t || !l) continue;
    let title = strip(t[1]);
    let source = src ? strip(src[1]) : "";
    // Google titles end with " - Source" (sometimes " | Source"); drop the redundant tail
    if (source) {
      for (const sep of [" - ", " | "]) {
        if (title.endsWith(sep + source)) { title = title.slice(0, title.length - (sep + source).length); break; }
      }
    } else {
      const dash = title.lastIndexOf(" - ");
      if (dash > 0) { source = title.slice(dash + 3); title = title.slice(0, dash); }
    }
    let date = "";
    if (d) { const dt = new Date(strip(d[1])); if (!isNaN(dt)) date = dt.toISOString().slice(0, 10); }
    items.push({ title, source, url: strip(l[1]), date });
  }
  return items;
}

async function fetchTie(t) {
  const q = encodeURIComponent(`"${t.s}" "${t.r}" arms OR weapons OR defense`);
  const url = `https://news.google.com/rss/search?q=${q}&hl=en-US&gl=US&ceid=US:en`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseItems(xml).slice(0, 8);
  } catch (e) {
    return [];
  }
}

(async () => {
  const out = {};
  let hit = 0;
  for (let i = 0; i < TIES.length; i++) {
    const t = TIES[i];
    const arts = await fetchTie(t);
    if (arts.length) { out[t.s + "→" + t.r] = arts; hit++; }
    process.stdout.write(`\r${i + 1}/${TIES.length}  ${hit} ilişkide haber`);
    await sleep(250);
  }
  const body = "/* real, current news per arms relationship — Google News RSS, refreshed by the\n" +
    "   news GitHub Action. no fabrication: every title/url comes from Google News. */\n" +
    "const ARTICLES = " + JSON.stringify(out, null, 2) + ";\n";
  fs.writeFileSync(path.join(ROOT, "js/articles.js"), body);
  console.log(`\nyazıldı: ${Object.keys(out).length} ilişki, ${Object.values(out).reduce((a, v) => a + v.length, 0)} makale`);
})();
