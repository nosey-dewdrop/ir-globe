# kim kime ne satıyor? — teslim rehberi (Bera'ya)

Bu, dünyanın ilişki ağını gösteren gerçek bir web sitesi: kendini haftalık güncelleyen veri, 6 saatte bir tazelenen haberler, kişisel akış kuran üyelik ve haftalık kişisel e-posta brifingi. Sen **kurucu & editörsün** — isim, konu düzeni ve editoryal çizgi senin.

Canlı: https://ir-globe.noseydewdrop.com · Kod: github.com/nosey-dewdrop/ir-globe

## Sitenin yapısı
- `index.html` — 3 partlı ana sayfa: en taze manşetler (üstte "son güncelleme" damgası) → dönen küre → "kendi akışını kur" çağrısı (altta sonraki veri güncellemesine gün sayacı).
- `akis.html` — tüm katmanların manşetleri, kronolojik, günlere gruplu, katman filtreli.
- `benim.html` — üyenin kişisel akışı: takip ettiği ülke/konulara göre süzülmüş manşetler + takip yönetimi + e-posta tercihleri.
- `uye.html` — kayıt/giriş + "neyi takip ediyorsun?" kurulumu.
- `bulten.html` — haftanın bağı (otomatik yazılır).
- `konu/<katman>/`, `ulke/<ülke>/` — SEO sayfaları (otomatik üretilir).
- `admin/` — senin panon: **editoryal bindirme** (aşağıda), üye listesi.

## Veri nereden geliyor (hepsi gerçek, uydurma yasak)
- silah: SIPRI 2021-25 (yüzdeler rapordan aynen)
- göç: UNHCR API · dış yardım: OECD · diplomasi: Wikidata elçilik veritabanı · tahıl: FAOSTAT · denizaltı kabloları: TeleGeography
- ticaret/enerji/teknoloji/yaptırım/borç/ittifak/üsler: doğrulanmış derleme (sırada resmi veri setleri var, KAYNAKLAR.md'de tarifleri)
- Haberler: Google News + BBC/Al Jazeera/Guardian/DW gibi feed'ler — hepsi gerçek başlık + gerçek link.

## Kendiliğinden güncellenir — senin hiçbir şey yapman gerekmez
- Haberler: 6 saatte bir (`news.yml`).
- Veri katmanları: her pazartesi (`data.yml`), konu/ülke sayfaları da otomatik yeniden basılır.
- Üyelere haftalık kişisel brifing pazartesi sabahı, gelişme uyarıları akşam koşusunda gider.

## Editörlüğün: bindirme paneli (`admin/`)
Statik veri setlerini panelden DEĞİŞTİRMEZSİN (onlar haftalık pipeline'dan gelir). Panelde yaptığın her satır verinin ÜSTÜNE biner:
- Aynı (katman, kaynak→hedef) bağa **not** yazarsan senin notun görünür.
- **Gizle** işaretlersen o bağ küreden kalkar (yanlış/eskimiş bulduğunda).
- Statikte olmayan bir bağ eklersen **editoryal ekleme** olarak küreye girer.
İlk girişte "kategoriler" sekmesinden "sitedeki katmanları içe aktar" düğmesine bir kez bas.

## İsimlendirme
İsim ("kim kime ne satıyor?" çalışma adı), katman etiketleri ve gruplama senin kararın. Katman etiketleri `data/layers/index.json`'da.

## Kendine taşımak istersen
Repoyu fork'la, kendi alan adına bağla. Alt köşedeki "nosey-dewdrop" imzası kalır — yapımcı nosey-dewdrop.
