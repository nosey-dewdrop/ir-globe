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
  };
})();
