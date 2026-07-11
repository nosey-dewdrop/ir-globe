/* lib/feeds.js — curated world-news RSS feeds merged into the per-connection
   news flow. Google News stays primary; these add source diversity (Reuters/AP
   have no public RSS anymore — their stories arrive via Google News anyway).

   Matching: an article attaches to a connection (s→r) of a layer when BOTH
   countries appear in its title+description AND the layer's topic keywords hit.
   Feed-sourced articles carry via:"feed" for debuggability. */

const FEEDS = [
  { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml" },
  { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "The Guardian", url: "https://www.theguardian.com/world/rss" },
  { name: "DW", url: "https://rss.dw.com/rdf/rss-en-all" },
  { name: "France 24", url: "https://www.france24.com/en/rss" },
  { name: "UN News", url: "https://news.un.org/feed/subscribe/en/news/all/rss.xml" },
  { name: "Politico EU", url: "https://www.politico.eu/feed/" },
  { name: "Foreign Policy", url: "https://foreignpolicy.com/feed/" },
];

/* topic keywords per layer — an article must hit these to join that layer */
const TOPIC = {
  silah: /\b(arms|weapons?|defen[cs]e deal|military aid|missiles?|fighter jets?|drones?)\b/i,
  ticaret: /\b(trade|exports?|imports?|tariffs?)\b/i,
  enerji: /\b(oil|gas|lng|energy|pipelines?|petroleum)\b/i,
  tahil: /\b(wheat|grain|corn|maize|rice|food exports?)\b/i,
  ittifak: /\b(alliance|pact|nato|treaty)\b/i,
  yaptirim: /\b(sanctions?|embargo)\b/i,
  goc: /\b(migra\w*|refugees?|asylum|deport\w*)\b/i,
  borc: /\b(loans?|debt|credit|lending|belt and road|investment)\b/i,
  diplomasi: /\b(diploma\w*|embassy|ambassador|summit|bilateral|foreign minister)\b/i,
  teknoloji: /\b(semiconductors?|chips?|technology)\b/i,
  us: /\b(military base|troops|garrison|deployment)\b/i,
  yardim: /\b(aid|humanitarian|development assistance|donor)\b/i,
  kablo: /\b(submarine cable|undersea cable|internet cable)\b/i,
  siber: /\b(cyber\w*|hack\w*|ransomware)\b/i,
};

const strip = (s) => String(s || "").replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&").replace(/&#0?39;/g, "'").replace(/&apos;/g, "'")
  .replace(/&#821[67];/g, "'").replace(/&#822[01];/g, '"').replace(/&quot;/g, '"')
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
  .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n))
  .replace(/\s+/g, " ").trim();

function parseFeed(xml, sourceName) {
  const items = [];
  for (const b of xml.split(/<item[ >]/).slice(1)) {
    const body = b.split("</item>")[0];
    const t = body.match(/<title>([\s\S]*?)<\/title>/);
    const l = body.match(/<link>([\s\S]*?)<\/link>/);
    const d = body.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || body.match(/<dc:date>([\s\S]*?)<\/dc:date>/);
    const desc = body.match(/<description>([\s\S]*?)<\/description>/);
    if (!t || !l) continue;
    let date = "";
    if (d) { const dt = new Date(strip(d[1])); if (!isNaN(dt)) date = dt.toISOString().slice(0, 10); }
    items.push({
      title: strip(t[1]),
      source: sourceName,
      url: strip(l[1]),
      date,
      desc: desc ? strip(desc[1]).slice(0, 400) : "",
    });
  }
  return items;
}

async function fetchAllFeeds() {
  const all = [];
  for (const f of FEEDS) {
    try {
      const res = await fetch(f.url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) { console.warn(`  feed ${f.name}: HTTP ${res.status}`); continue; }
      const items = parseFeed(await res.text(), f.name);
      all.push(...items);
    } catch (e) {
      console.warn(`  feed ${f.name}: ${e.message}`);
    }
  }
  return all;
}

/* build a matcher from data/countries.json: lowercase name → key.
   Names shorter than 4 chars (or too ambiguous) are skipped to avoid false hits. */
function buildNameIndex(registry) {
  const AMBIGUOUS = new Set(["georgia", "jordan", "chad", "guinea", "turkey"]); // turkey the bird; georgia the US state…
  const idx = [];
  Object.values(registry).forEach((c) => {
    const names = new Set([c.key, (c.disp || "").toLowerCase(), ...(c.aliases || [])]);
    names.forEach((n) => {
      if (!n || n.length < 4) return;
      idx.push({ re: new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i"), key: c.key, weak: AMBIGUOUS.has(n) });
    });
  });
  return idx;
}

/* returns { layer: { "s→r": [article…] } } for the given connection sets */
function matchToConnections(articles, layerConns, nameIndex) {
  const pairSets = {};
  Object.entries(layerConns).forEach(([layer, conns]) => {
    pairSets[layer] = new Set(conns.map((c) => c.s + "→" + c.r));
  });
  const out = {};
  for (const a of articles) {
    const text = a.title + " " + a.desc;
    const hits = new Set();
    for (const n of nameIndex) {
      if (hits.has(n.key)) continue;
      if (n.re.test(text)) hits.add(n.key);
    }
    if (hits.size < 2) continue;
    const keys = [...hits];
    for (const [layer, re] of Object.entries(TOPIC)) {
      if (!pairSets[layer] || !re.test(text)) continue;
      for (const s of keys) for (const r of keys) {
        if (s === r) continue;
        if (!pairSets[layer].has(s + "→" + r)) continue;
        ((out[layer] ||= {})[s + "→" + r] ||= []).push({
          title: a.title, source: a.source, url: a.url, date: a.date, via: "feed",
        });
      }
    }
  }
  return out;
}

module.exports = { FEEDS, fetchAllFeeds, buildNameIndex, matchToConnections };
