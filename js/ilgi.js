/* js/ilgi.js — ON-DEVICE ilgi motoru. "Site seni okudukça tanır" ama gizliliği
   bozmadan: neyi açtığın/seçtiğin YALNIZCA tarayıcının localStorage'ında tutulur,
   sunucuya ASLA gönderilmez. Böylece "seni izlemiyoruz" sözü bozulmaz — sinyaller
   cihazdan çıkmaz, kişiselleştirme burada, yerelde hesaplanır.

   Model: ülke + katman için recency-ağırlıklı skor. Her etkileşim skoru artırır;
   eski ilgiler yarı-ömürle (14 gün) sönümlenir → "son zamanlarda neye bakıyorsun"
   öne çıkar. Okuma (haber açma) en güçlü sinyal, tık/seçim daha zayıf.

     Ilgi.note({countries:['russia'], layers:['enerji'], w:2})  // sinyal ekle
     Ilgi.top('country', 5)  -> [{key, score}, ...]   // en çok ilgilendiklerin
     Ilgi.has()              -> yeterli sinyal biriktimi (>=3)
     Ilgi.forget()           -> her şeyi sil (kullanıcı isterse) */

const Ilgi = (() => {
  const KEY = "irglobe.ilgi.v1";
  const HALF_LIFE = 14 * 24 * 3600 * 1000; // 14 gün: ilgiler bu sürede yarıya iner
  const now = () => Date.now();
  const decay = (dt) => Math.pow(0.5, Math.max(0, dt) / HALF_LIFE);

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { c: {}, l: {}, seen: 0 }; }
    catch (e) { return { c: {}, l: {}, seen: 0 }; }
  }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* quota/private mode: sessizce vazgeç */ } }

  function bump(map, key, w) {
    if (!key) return;
    const e = map[key] || { s: 0, t: now() };
    e.s = e.s * decay(now() - e.t) + (w || 1); // önce eskisini sönümle, sonra ekle
    e.t = now();
    map[key] = e;
  }

  /* sig: {countries:[...], layers:[...], w:number} — hepsi opsiyonel */
  function note(sig) {
    if (!sig) return;
    const d = load();
    (sig.countries || []).forEach((c) => bump(d.c, c, sig.w));
    (sig.layers || []).forEach((l) => bump(d.l, l, sig.w));
    d.seen = (d.seen || 0) + 1;
    save(d);
  }

  function ranked(map) {
    const t = now();
    return Object.keys(map)
      .map((k) => ({ key: k, score: map[k].s * decay(t - map[k].t) }))
      .filter((x) => x.score > 0.15) // gürültüyü at
      .sort((a, b) => b.score - a.score);
  }
  function top(kind, n) {
    const d = load();
    return ranked(kind === "layer" ? d.l : d.c).slice(0, n || 5);
  }
  function scoreOf(kind, key) {
    const d = load();
    const map = kind === "layer" ? d.l : d.c;
    const e = map[key];
    return e ? e.s * decay(now() - e.t) : 0;
  }
  function has() { return (load().seen || 0) >= 3; }
  function forget() { try { localStorage.removeItem(KEY); } catch (e) {} }

  return { note, top, scoreOf, has, forget };
})();
