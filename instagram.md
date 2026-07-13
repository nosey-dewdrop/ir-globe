# instagram reels malzemesi — kim kime ne satıyor? (ir-globe)

her giriş bir reels: HOOK (ilk 2 saniye) + 30-60 saniyelik anlatım iskeleti + ekranda ne göster.
iskeletler senaryo değil, damla kendi ağzıyla anlatır. hepsi gerçek, kanıtı repo'da.

---

## r1 — hook: "arkadaşıma hediye yazdım, elimde istihbarat ürünü var"
anlatım: hediye olarak başladı → 3d küre, kim kime silah satıyor → sonra durduramadım →
bugün 13 katman, 198 ülke, 6 saatte bir kendini yenileyen canlı sistem.
ekran: küre dönüşü + katman geçişleri.

## r2 — hook: "ilk versiyonum çöptü ve bunu size göstereceğim"
anlatım: ilk hali elle veri + 18 bin satırlık tek dosya, slopware → tek karar her şeyi değiştirdi:
uydurma veri asla, her bağın kaynağı olacak → şimdi her ok bir dataset'e gidiyor.
ekran: eski commit diff'i (18k satır kırmızı) + yeni veri sayfası.

## r3 — hook: "llm çağında llm'siz bilgi çıkarım motoru yazdım"
anlatım: haber başlığından "kim kime ne yaptı"yı çıkarmak lazımdı → kolay yol api'ye para vermek →
yapabiliyorsak biz yapalım dedik → aktör tanıma + olay kodlama + skor, yüzde yüz deterministik →
maliyet: sıfır. hız: 4500 başlık saniyeler.
ekran: terminalde extract-relations koşusu, akan çıktı.

## r4 — hook: "sitem aşırı yavaştı, suçlu 240 kere aynı hatayı yapan bendim"
anlatım: profilledim → layout 240 forced reflow → okuma/yazma fazlarını ayırdım → 1 reflow →
ders: his değil ölçüm; profiler açmadan optimizasyon yapılmaz.
ekran: devtools performance kaydı önce/sonra.

## r5 — hook: "2.8 megabayt html'i sildim, google hâlâ beni seviyor"
anlatım: 211 seo sayfası bake ediliyordu → "çok html var" → hepsi 3kb kabuk oldu, gövde canlı
veriden çiziliyor → %90 küçüldü, sıralama kaybı yok.
ekran: repo dil grafiği (html'den js'e dönüş) + bir ülke sayfası açılışı.

## r6 — hook: "haber başlığı yalan söyler: 'ukraine hit by russian strikes' kim saldırıyor?"
anlatım: motorun ilk hali özneyi yanlış alıyordu → pasif çatıyı çevirmeyi öğrettim →
"attack drones" saldırı değil ürün adı → her düzeltme ayrı commit, hepsi ölçüldü.
ekran: aynı başlığın önce/sonra kodlaması.

## r7 — hook: "makaleleri kimse okumuyor, ben de 4500 başlığı 3 bine indirdim"
anlatım: aynı hikayeyi 9 kaynak yazıyor → kümeleme + merkezilik, yine api'siz →
9 haber 1 satır → "×9 kaynak" rozeti güven veriyor.
ekran: akış sayfasında ×N kaynak rozetleri.

## r8 — hook: "modelim asla cümle kurmayacak, buna yemin ettim"
anlatım: uydurma yasağı → ml var ama üretmiyor, sadece seçiyor ve grupluyor →
eğitim verisini kim etiketliyor? kendi motorum. ilk gün 404 örnek, her 6 saatte artıyor.
ekran: train.jsonl'dan akan satırlar.

## r9 — hook: "yapay zekam kendi kodumun hatasını buldu"
anlatım: encoder'ı ölçtüm, eşik 0.75, yanlış birleştirme %0.35 → "yanlış" görünenlere baktım →
çoğu motorun aynı hikayeyi ikiye bölmesiydi → ml motoru onarıyor → 145 satır katlandı.
ekran: eval tablosu + birleşen başlık çiftleri.

## r10 — hook: "kullanıcılarımı sayıyorum ama kim olduklarını bilmiyorum, bilerek"
anlatım: analytics lazımdı ama izleme istemedim → çerezsiz sayaç: ip yok, kimlik yok,
tekillik cihazda kalan bayrak → kvkk'ya uygun, gizlilik sayfasında açık açık yazıyor.
ekran: gizlilik sayfası + admin ziyaret sekmesi.

## r11 — hook: "bu haftanın dünya gerginlik haritasını 0 liraya çıkarıyorum"
anlatım: her olay skorlanıyor (-10 çatışma, +10 işbirliği) → haftalık seriler → z-score →
"bu hafta bu hatta anormallik var" → bloomberg terminali değil, öğrenci yurdu + github actions.
ekran: akıştaki "bu hafta hareketlenenler" radarı.

## r12 — hook: "aylık sunucu masrafım: 0 tl. nasıl?"
anlatım: statik site + github actions + supabase free → kişisel akış istemcide hesaplanıyor →
ölçek bedava → mühendislik kararı en baştan buydu.
ekran: mimari çizim (actions → json → tarayıcı).

## r13 — hook: "kırmızı test görürsem dünya haberlerini güncellemiyorum"
anlatım: 6 saatte bir veri güncelleniyor → önce 9 test koşar → biri kırmızıysa güncelleme yok →
üretim verisini koruyan şey disiplin.
ekran: actions'ta yeşil pipeline akışı.

## r14 — hook: "kullanıcıya 'hesabını sil' butonu koydum, kimse koymuyor"
anlatım: kvkk silme hakkı → çoğu site mail atmanı ister → bizde tek tık: onay, rpc, cascade →
her aksiyonun tersi olacak kuralı.
ekran: hesap silme akışı.

## r15 — hook: "gece 3'te pipeline'ım çöktü, sabah 6'da kendi kendine düzelmedi, ben düzelttim"
anlatım: yeni eklediğim dosya motoru şaşırttı, typeerror, koşu kırmızı → log okudum, tek satır
suçlu → düzeltme + o hatayı bir daha imkansız kılan test → hata olur, tekrarı olmaz.
ekran: actions'ta kırmızı koşu → yeşil koşu.

## r16 — hook: "tasarımı 10 kere reddedildi, 11.'de gazete çıktı"
anlatım: küre süslü olabilirdi → gazete çizgisi seçtik: serif, beyaz, lacivert →
desen economist'ten, görünüm bizim → tasarım kural: referans olmadan redesign yok.
ekran: landing'in manşet duvarı + küre geçişi.

## r17 — hook: "hangi ülke haber ağının merkezinde? pagerank'e sordum"
anlatım: google'ın algoritması ülkelere uygulandı → olaylardan ağ → sıralama + topluluklar
(yaptırım bloğu kendiliğinden çıktı) → veri konuşunca harita değişiyor.
ekran: ülke panelindeki "haber ağında" bölümü.

## r18 — hook: "6 saatte bir dünyayı tarayan bir robotum var"
anlatım: github actions cron → haber çek, motoru koştur, özetle, indeksle, commit'le →
ben uyurken 4 koşu → sabah taze veri.
ekran: gece commit'lerinin listesi ("refresh news articles" 03:00, 09:00...).

## r19 — hook: "başkasının verisiyle ürün kuranın lisans okuması şart, ben okudum"
anlatım: bir katmanın verisi non-commercial lisanslı → satış günü gelirse o katman çıkar,
kayıtlara yazdım → hukuku sonradan hatırlayan ürün gömer.
ekran: veri kaynakları ve lisans tablosu.

## r20 — hook: "motorumun hata payını herkese açık yayınlıyorum, pazarlamaya ters, güvene doğru"
anlatım: kapsam %30, örneklem doğruluğu ölçülü, ml eşiği ölçümle seçildi → hepsi açık →
ft/economist seviyesinin sırrı mükemmellik değil şeffaflık.
ekran: metodoloji sayfası (yakında) / eval çıktısı.
