# kim kime ne satıyor? — teslim rehberi

Bu, dünyanın ilişki ağını gösteren interaktif bir küre. Bir hediye: adını, kategorilerini, düzenini sen belirlersin — artık senin.

Canlı: https://damlahelloworld.github.io/ir-globe/ · Kod: github.com/damlahelloworld/ir-globe

## Ne yapıyor
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

## Nasıl düzenlenir (kod bilmeden de yapılabilir)
- **İsim:** `index.html` içindeki `<h1>` metnini değiştir.
- **Kategori ekle/çıkar/yeniden adlandır:** `js/main.js` içindeki `LAYERS` listesi + `js/layers.js` içindeki `LAYER_TIES`.
- **Bağlantı ekle/çıkar:** ilgili katmanın `js/layers.js` içindeki dizisine `{s, r, note}` ekle (ülke adları küçük harf, listedeki 55 ülkeden biri).
- **Kategorileri gruplama / çok kategori olunca üst menü:** senin tasarım kararın (aile başlıkları, dropdown vb.).
- **Yeni katmana gerçek veri:** `KAYNAKLAR.md` her katman için hangi açık veri setinin kullanılacağını yazıyor (Comtrade, IEA, FAO, COW...).

## Kendine taşımak istersen
Repoyu fork'la, kendi alan adına bağla (Vercel / GitHub Pages). Alt köşedeki "@damlahelloworld" imzası kalır — yapımcı damlahelloworld.
