/* test-ara.js — persisted checks for the article search engine (js/ara.js).
   Runs in CI (news.yml) next to test-motor.js: a red test blocks the refresh.

     node scripts/test-ara.js
*/

const assert = require("assert");
const Ara = require("../js/ara.js");

let n = 0;
function t(name, fn) { fn(); n++; console.log("ok " + n + " " + name); }

/* ── fixtures: shaped like real articles.js entries ── */
const A = (title, source, date) => ({ title, source: source || "reuters", date: date || "2026-07-01" });
const ARTS = [
  A("Rusya Ukrayna'ya yeni yaptırım paketi açıkladı", "bbc", "2026-07-10"),
  A("Mısır tahıl ithalatında rekor kırdı", "aljazeera", "2026-07-08"),
  A("Türkiye ile Almanya arasında enerji anlaşması", "dw", "2026-07-09"),
  A("China expands chip export controls", "reuters", "2026-07-07"),
  A("Fransa silah ihracatını artırıyor", "guardian", "2026-07-05"),
];

t("türkçe katlama: aksansız sorgu aksanlı başlığı bulur", () => {
  const r = Ara.search(ARTS, "misir tahil");
  assert.strictEqual(r[0].title, ARTS[1].title);
  assert.strictEqual(r.length, 1);
});

t("yazım hatası: tek harf yanlış kelime yine eşleşir", () => {
  const r = Ara.search(ARTS, "yaptirin");         // yaptırım'da m→n
  assert.strictEqual(r[0].title, ARTS[0].title);
});

t("harf takası (transpozisyon) tek hata sayılır", () => {
  assert.strictEqual(Ara._dl("enerji", "enreji", 1), 1);
  const r = Ara.search(ARTS, "enreji");
  assert.strictEqual(r[0].title, ARTS[2].title);
});

t("önek: yarım yazılmış kelime eşleşir", () => {
  const r = Ara.search(ARTS, "yaptır");
  assert.strictEqual(r[0].title, ARTS[0].title);
});

t("tam eşleşme yazım hatalı eşleşmeden önde sıralanır", () => {
  const arts = [A("silah ihracatı raporu"), A("siyah liste güncellendi")]; // silah↔siyah mesafe 1
  const r = Ara.search(arts, "silah");
  assert.strictEqual(r[0].title, "silah ihracatı raporu");
  assert.strictEqual(r.length, 2);
});

t("çok kelime = VE: karşılıksız kelime makaleyi eler", () => {
  assert.strictEqual(Ara.search(ARTS, "enerji uzay").length, 0);
});

t("kısa kelimede yazım toleransı yok (gürültü kapısı)", () => {
  assert.strictEqual(Ara._tokenScore("cin", "can"), 0);   // 3 harf, mesafe kabul yok
  assert.ok(Ara._tokenScore("chip", "chip") > 0);
});

t("boş sorgu listeyi aynen döndürür (kırpma çağıranın işi)", () => {
  assert.strictEqual(Ara.search(ARTS, "  ").length, ARTS.length);
});

t("kaynak adıyla arama çalışır ama başlıktan zayıf puanlanır", () => {
  const r = Ara.search(ARTS, "guardian");
  assert.strictEqual(r.length, 1);
  assert.strictEqual(r[0].source, "guardian");
});

console.log("test-ara: " + n + " tests green");
