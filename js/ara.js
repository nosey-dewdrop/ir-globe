/* js/ara.js — makale arama motoru (küre kart bölümü). SAF modül: fetch yok,
   DOM yok; main.js makale listesini verir, sıralı eşleşme listesi geri alır.
   Motor.js deseniyle node-testable (scripts/test-ara.js).

   "Gerçek arama motoru" davranışı, uydurmasız:
   - Türkçe harf katlama (ı→i, ş→s, ç→c, ö→o, ü→u, ğ→g) → "misir" mısır'ı bulur
   - kelime puanı: tam > önek > alt dize > yazım hatası (Damerau-Levenshtein,
     harf ekleme/silme/değiştirme/yer değiştirme ≤1-2 mesafe, kelime boyuna göre)
   - çok kelimeli sorgu = VE: her sorgu kelimesi makalede bir karşılık bulmalı
   - sonuçlar puana, eşit puanda tarihe göre sıralı */

const Ara = (() => {
  const FOLD = { "ı": "i", "ş": "s", "ç": "c", "ö": "o", "ü": "u", "ğ": "g", "â": "a", "î": "i", "û": "u" };

  function fold(s) {
    return String(s == null ? "" : s)
      .toLocaleLowerCase("tr")
      .replace(/[ışçöüğâîû]/g, (c) => FOLD[c] || c);
  }

  /* harf + rakam dışını ayraç say; 2 harften kısa kelimeler gürültü, atla */
  function tokens(s) {
    return fold(s).split(/[^a-z0-9]+/).filter((w) => w.length >= 2);
  }

  /* Damerau-Levenshtein, `max` mesafeyi aşınca erken çıkar (bant optimizasyonu).
     Kelime boyları zaten kısa (başlık kelimeleri) — tam matris yeterince ucuz. */
  function dl(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const m = a.length, n = b.length;
    const d = [];
    for (let i = 0; i <= m; i++) d[i] = [i];
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
      let rowMin = Infinity;
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1); // komşu harf takası tek hata
        if (d[i][j] < rowMin) rowMin = d[i][j];
      }
      if (rowMin > max) return max + 1; // bu satırda umut kalmadı
    }
    return d[m][n];
  }

  /* kelime toleransı: kısa kelimede yazım hatası kabul etmek her şeyi eşleştirir */
  function tol(q) { return q.length >= 7 ? 2 : q.length >= 4 ? 1 : 0; }

  /* tek sorgu kelimesinin tek makale kelimesine puanı; 0 = eşleşme yok */
  function tokenScore(q, w) {
    if (w === q) return 3;
    if (w.startsWith(q) && q.length >= 2) return 2.2;
    if (q.length >= 3 && w.includes(q)) return 1.6;
    const t = tol(q);
    if (!t) return 0;
    const d = dl(q, w, t);                     // yazım hatalı tam kelime
    if (d <= t) return 1.5 - d * 0.35;
    if (w.length > q.length) {                 // yazım hatalı ÖNEK (yarım yazılmış kelime)
      const dp = dl(q, w.slice(0, q.length), t);
      if (dp <= t) return 1.2 - dp * 0.35;
    }
    return 0;
  }

  /* makale dizini: başlık + kaynak kelimeleri bir kez çıkarılır, üstüne yazılır */
  function index(article) {
    if (!article._ara)
      article._ara = { t: tokens(article.title), s: tokens(article.source) };
    return article._ara;
  }

  /* sorguyu makale listesinde ara → puana göre sıralı YENİ liste.
     Boş/gürültü sorgu → listenin kendisi (çağıranın "ilk 10" kuralı değişmez). */
  function search(articles, query) {
    const qs = tokens(query);
    if (!qs.length) return articles.slice();
    const hits = [];
    for (const a of articles) {
      const ix = index(a);
      let total = 0, all = true;
      for (const q of qs) {
        let best = 0;
        for (const w of ix.t) { const s = tokenScore(q, w); if (s > best) best = s; }
        for (const w of ix.s) { const s = tokenScore(q, w) * 0.6; if (s > best) best = s; }
        if (!best) { all = false; break; }     // VE: her kelime karşılık bulmalı
        total += best;
      }
      if (all) hits.push({ a, score: total });
    }
    hits.sort((x, y) => y.score - x.score ||
      String(y.a.date || "").localeCompare(String(x.a.date || "")));
    return hits.map((h) => h.a);
  }

  return { search, fold, tokens, _dl: dl, _tokenScore: tokenScore };
})();

/* node test harness picks this up; browser ignores it */
if (typeof module !== "undefined" && module.exports) module.exports = Ara;
