# ir-globe

ülkeler birbirine ne yapıyor — kim kime silah satıyor, kim kimden tahıl alıyor, kim kime yaptırım koyuyor. hepsi dönen bir 3d küre üstünde, gerçek kaynaklı, uydurma tek veri yok. haberi takip eden, analiz yapan, "şu iki ülke arasında ne dönüyor"u tek bakışta görmek isteyen herkes için.

canlı: https://ir-globe.noseydewdrop.com (geliştirme: nosey-dewdrop.github.io/ir-globe/)

## nasıl çalışıyor — bunun için neler kullandım

- 13 katman ilişkiyi küre üstünde ok olarak çiziyorum: silah, ticaret, enerji, tahıl, ittifak, yaptırım, göç, borç, diplomasi, teknoloji, üsler, yardım, kablo. 3.882 bağ, 198 ülke. her bağın kaynak adı, url'si, yılı ve lisansı var.
- 6 saatte bir ~4.500 gerçek haber başlığını çekiyorum (google news rss + bbc, al jazeera, guardian, dw, france24, un news, politico eu, fp), ülke çiftine ve konuya göre eşliyorum.
- kendi çıkarım motorumu her başlığın üstünde çalıştırıyorum: ülke/lider tanıma, cameo olay kodlaması, goldstein −10..+10 çatışma/işbirliği ağırlığı, yön ve olumsuzluk. %100 deterministik, api yok, internet yok — tamamen benim yazdığım kural motoru.
- aynı olayı anlatan başlıkları bir sinir ağıyla katlıyorum (all-minilm-l6-v2, lokal onnx). eşik değerini hisle değil ölçerek seçtim. model asla metin üretmiyor, sadece gerçek başlıkları seçip gruplayor.
- kişisel katman: hesap aç, ülke/konu takip et, kendi akışını gör, haftalık e-posta brifingi al.
- güven katmanı: ölçülmüş hata oranlarını gösteren metodoloji sayfası + otomatik üretilen veri kaynağı sayfası.

## ölçüm / accuracy — iddia değil, benchmark

bütün sayılar repo'nun kendi metodoloji sayfasından ve pipeline raporlarından geliyor, uydurma yok:

- **çıkarım motoru doğruluğu: ~%87** (elle örneklem, 13/15). motor işlenen ingilizce başlıkların ~%30'unu güvenle kodlanmış olaya çeviriyor; kodlanamayan başlık kodlanmadan kalıyor — radar eksik olabilir ama asla uydurma olmaz.
- **ml katlama yanlış-eşleşme oranı: %0.35** (eşik 0.75'te ölçüldü). pozitif çiftler medyan 0.69 kosinüs, zor negatifler 0.29. ilk prod koşusu 140 özet satırını katladı, çok-kaynaklı hikayeleri 387'den 442'ye çıkardı.
- **eğitim verisi kendi kendini besliyor**: motorun kodlamaları `data/ml/train.jsonl`'a birikiyor (838 thread, her 6 saatte artıyor). elle etiket yok, dış servis yok.
- **ilk js yükü ~1.2 mb → ~30-60 kb** (lazy-loading refactorü): istemci sadece ülke kaydı + tek katmanla açılıyor.
- **9 node testi** her 6 saatlik pipeline'ın en başında koşuyor (xss, boş durumlar, bayat pencereler); kırmızı test yenilemeyi durduruyor.
- ilişki sayfaları 126 ülke çiftinin en az 3 haftalık ton trendini çiziyor.

## teknolojiler

- ön yüz: sade javascript + globe.gl (cdn), framework yok, build adımı yok. newsreader serif + inter, beyaz/lacivert editöryel stil.
- barındırma: github pages, tamamen statik.
- pipeline: github actions üstünde node scriptleri — haber 6 saatte (news.yml), resmi veri setleri haftalık (data.yml: unhcr, oecd, wikidata, faostat, telegeography, sipri), brifing maili haftalık (briefing.yml).
- ml: @xenova/transformers, all-minilm-l6-v2'yi action içinde lokal onnx olarak koşuyor — inference api yok, key yok. encoder yoksa klasik özet gidiyor ve koşu yine 0 ile çıkıyor.
- hesap + takip + admin: supabase (rls korumalı, anon key bilerek public), e-posta resend ile tek tık token'lı abonelikten çıkma.
- seo: üretilmiş konu/ (katman) ve ulke/ (ülke) sayfaları, sitemap, robots — scripts/build-seo.js her veri değişiminde yeniden üretiyor.

## neden yaptım

haberleri takip ederken hep aynı duvara çarpıyordum: "bu iki ülke arasında ne dönüyor" sorusunun cevabı yüzlerce habere dağılmış oluyor, kimse tek yerde toplamıyor. toplayanlar da ya kaynak koymuyor ya da adam kafasından "ilişkiler gergin" diye yazıyor. ben ölçülebilir, kaynağı tıklanabilir, yalan söylemeyen bir şey istedim. o yüzden buraya hiçbir veri "hissederek" girmiyor — ya kaynağı var ya da hiç yok.

## repo haritası

- `data/layers/` katman başına statik bağ verisi, `data/news/` çekilen başlıklar, `data/events/` motor çıktısı, `data/ml/` eğitim korpusu
- `scripts/` tüm pipeline'lar (çek, çıkar, özetle, katla, seo, mail), `scripts/lib/extract/` motorun kendisi (gazetteer, cameo, relate)
- `js/` istemci modülleri (lazy store, küre, akış, auth, takip, sayaç)
- `admin/` editöryel panel + schema.sql

mimari detayı ve tasarım gerekçesi: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). yaşayan proje dosyası: PROJECT.md.
