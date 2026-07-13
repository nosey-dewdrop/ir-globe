/* store.js — lazy JSON loader with an in-memory cache. The globe boots with the
   country registry + the default layer only; every other layer (and its news)
   is fetched on first click. GitHub Pages serves ETags, so the browser cache
   revalidates on its own — no version query strings needed. */

const Store = (() => {
  const cache = {};
  function j(url, fallback) {
    if (cache[url]) return cache[url];
    return (cache[url] = fetch(url)
      .then((r) => { if (!r.ok) throw new Error(url + " " + r.status); return r.json(); })
      .catch((e) => {
        delete cache[url]; // don't cache failures — a retry may succeed
        if (fallback !== undefined) return fallback;
        throw e;
      }));
  }
  return {
    countries: () => j("data/countries.json"),
    layerIndex: () => j("data/layers/index.json"),
    layer: (k) => j("data/layers/" + k + ".json"),
    news: (k) => j("data/news/" + k + ".json", {}),
    newsMeta: () => j("data/news/meta.json", null),
    digest: () => j("data/news/digest.json", []),
    meta: () => j("data/meta.json", null),
    /* v2 motor çıktıları: özet iplikleri, olay deposu, graf analitiği */
    ozet: () => j("data/news/ozet.json", {}),
    events: () => j("data/events/index.json", null),
    graph: () => j("data/events/graph.json", null),
  };
})();

/* Turkish dates — the raw ISO strings never reach the visitor */
const TRDate = (() => {
  const AY = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran",
    "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
  const KISA = ["oca", "şub", "mar", "nis", "may", "haz", "tem", "ağu", "eyl", "eki", "kas", "ara"];
  const parse = (s) => { const d = new Date(s); return isNaN(d) ? null : d; };
  return {
    /* "2026-07-11" → "11 temmuz 2026" */
    full(s) { const d = parse(s); return d ? `${d.getDate()} ${AY[d.getMonth()]} ${d.getFullYear()}` : ""; },
    /* "2026-07-11" → "11 tem" (bu yıl) / "11 tem 25" (geçmiş yıl) */
    short(s) {
      const d = parse(s);
      if (!d) return "";
      const yr = d.getFullYear() === new Date().getFullYear() ? "" : " " + String(d.getFullYear()).slice(2);
      return `${d.getDate()} ${KISA[d.getMonth()]}${yr}`;
    },
    /* ISO datetime → "az önce" / "N dk önce" / "N saat önce" / "N gün önce" */
    rel(s) {
      const d = parse(s);
      if (!d) return "";
      const min = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000));
      if (min < 2) return "az önce";
      if (min < 60) return `${min} dk önce`;
      const h = Math.round(min / 60);
      if (h < 48) return `${h} saat önce`;
      return `${Math.round(h / 24)} gün önce`;
    },
    /* is this date today? (for the "yeni" marker) */
    isToday(s) { const d = parse(s); return !!d && d.toDateString() === new Date().toDateString(); },
    isYesterday(s) {
      const d = parse(s);
      if (!d) return false;
      const y = new Date(); y.setDate(y.getDate() - 1);
      return d.toDateString() === y.toDateString();
    },
  };
})();
