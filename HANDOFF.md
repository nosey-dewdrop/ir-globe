# kim kime ne satıyor? — teslim rehberi (Bera'ya)

Bu, dünyanın ilişki ağını gösteren gerçek bir web sitesi: landing sayfası, dönen küre, üyelik, her ülke ve her konu için ayrı sayfalar. Sen **kurucu & editörsün** — isimleri, konuları, düzeni ve editoryal çizgiyi sen belirlersin.

Canlı: https://damlahelloworld.github.io/ir-globe/ · Kod: github.com/damlahelloworld/ir-globe

## Sitenin yapısı
- `index.html` — ana sayfa (landing): ne olduğu, 12 konu, ekip, bültene katıl.
- `kure.html` — dönen interaktif küre (asıl deneyim).
- `konu/<katman>/` — her katman için ayrı, aranabilir (SEO) sayfa: o katmandaki tüm bağlar + haberler.
- `ulke/<ülke>/` — her ülke için ayrı sayfa: kimden alıp kime verdiği, katman katman.
- `uye.html` — üyelik (kayıt/giriş). Üyeler bültene otomatik katılır.
- `admin/` — senin yönetim panon (giriş → bağlantı/kategori/abone yönetimi).

## Konu ve ülke sayfaları nasıl güncellenir
Bu sayfalar **canlı veriden otomatik üretilir** — elle düzenlemezsin. Veriyi (js/layers.js, js/data.js) değiştir, sonra şunu çalıştır:
```
node scripts/build-seo.js
```
Bu, tüm konu/ülke sayfalarını + `sitemap.xml`'i yeniden basar. (Google'ın bulması için sitemap ve robots.txt hazır.)

## Ne yapıyor (küre)
- Üstte katmanlar (silah, ticaret, enerji, ittifak, yaptırım, göç, borç, diplomasi, teknoloji, üsler, yardım). Bir katman seç.
- Küre üstünde her ok bir ülkeden bir ülkeye yönlü bir bağı gösterir.
- Bir **oka** tıkla → o ilişkinin sayıları/yazısı + gerçek haberleri (kürenin sağ yayında).
- Bir **ülkeye** tıkla → o ülkenin tüm ağı + toplu haberleri.

## Gerçeklik (önemli)
- Silah verisi: SIPRI (2021-25), yüzdeler rapordan aynen.
- Diğer katmanların bağlantıları: iyi bilinen açık kaynaklardan derlendi (uydurma yok).
- Haberler: Google News'ten çekiliyor, hepsi gerçek başlık + gerçek link.

## Haberler kendiliğinden güncellenir
`.github/workflows/news.yml` her gün çalışıp `scripts/fetch-news.js` ile taze haber çeker ve siteye işler. Sen hiçbir şey yapmadan haberler güncel kalır. (İlk otomatik çalışma için repo Ayarlar → Actions → "read and write permissions" açık olmalı.)

## Üyelik & yönetim (senin hesabın)
Site gerçek bir backend'e (Supabase) bağlanır. Damla bir kez kurar; sonra:
- **Üyelik:** ziyaretçiler `uye.html`'den kayıt olur, sen `admin/`'den girersin. Sadece **sen** (admin) bağlantı/kategori düzenleyebilirsin; üyeler yalnızca okur.
- **Aboneler:** bültene katılan mailler panelde; CSV indir, bültenini at.
- Kurulum adımları: `admin/SETUP.md`.

## Nasıl düzenlenir (kod bilmeden de yapılabilir)
- **İsim:** `index.html` içindeki `<h1>` metnini değiştir.
- **Kategori ekle/çıkar/yeniden adlandır:** `js/main.js` içindeki `LAYERS` listesi + `js/layers.js` içindeki `LAYER_TIES`.
- **Bağlantı ekle/çıkar:** ilgili katmanın `js/layers.js` içindeki dizisine `{s, r, note}` ekle (ülke adları küçük harf, listedeki 55 ülkeden biri).
- **Kategorileri gruplama / çok kategori olunca üst menü:** senin tasarım kararın (aile başlıkları, dropdown vb.).
- **Yeni katmana gerçek veri:** `KAYNAKLAR.md` her katman için hangi açık veri setinin kullanılacağını yazıyor (Comtrade, IEA, FAO, COW...).

## Kendine taşımak istersen
Repoyu fork'la, kendi alan adına bağla (Vercel / GitHub Pages). Alt köşedeki "@damlahelloworld" imzası kalır — yapımcı damlahelloworld.
