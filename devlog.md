# devlog — instagram build-in-public malzemesi (ir-globe)

gelistirme sureci instagram'da paylasilir: reels, post, carousel. her giris hook'lu,
reels'ler 30-60 saniye. iskeletler senaryo degil, damla kendi agziyla anlatir.
sinir yok. linkedin essay'leri ayri: linkedin.md.

# REELS (30-60 sn, hook + anlatim iskeleti + ekranda ne goster)

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

# CAROUSEL / POST HAMMADDESI — kronolojik karar zinciri
(her gun/asama bir carousel olabilir: 1 slayt = 1 karar. yeni gelistirmede buraya ANINDA madde eklenir.)

## 10 tem — doğuş
1. arkadaşıma (IR okuyor) hediye olarak ülkeler arası ilişkileri gösteren bir 3d küre yazıyordum.
   amaç "kim kime silah satıyor"u tek bakışta göstermekti.
2. ilk versiyon slopware hissi verdi: elle derlenmiş bağlar, 18 bin satırlık tek js dosyası,
   statik vitrin. karar: uydurma veri asla — her bağın kaynağı olacak ya da bağ olmayacak.
3. tasarımda çok tur attık; sonunda gazete çizgisi oturdu (serif başlık + beyaz kağıt + lacivert).
   karar: economist/nyt'den desen alınır, görünüm kopyalanmaz.

## 11 tem — "kimse buna para vermez"
4. statik vitrin kimseye lazım değildi. karar: iki bacak — veri kendi kendine tazelenecek
   (içerik motoru) + kullanıcı kendi akışını kuracak (kişiselleştirme).
5. bir günde 8 faz: unhcr/oecd/wikidata/faostat/telegeography'den GERÇEK veri çeken haftalık
   pipeline, 13 katman 3882 bağ, 6 saatte bir haber tazeleyen workflow, üyelik + takip +
   haftalık kişisel brifing maili + tek tık unsubscribe.
6. neden supabase: rls ile güvenlik, sıfır sunucu maliyeti. kişisel akış istemcide hesaplanır,
   ölçek bedava.

## 12 tem — performans savaşı + büyük temizlik
7. site "aşırı yavaştı". profilledim: masonry layout 240 kez forced reflow yapıyormuş.
   yazma/okuma fazlarını ayırdım → 1 reflow. karar: tasarımdan ödün yok, ölçüp düzelt.
8. webgl küre açılışta 480kb geojson'la ana sayfayla yarışıyordu. karar: küre tembelleşti,
   ilk niyette (scroll/tık) ya da boşta kurulur. açılış uçtu.
9. 18 bin satırlık articles.js + iki legacy dosyayı komple sildim (1.4mb ölü kod).
   karar: geriye dönüş bir release beklenir, sonra acımadan silinir.
10. "çok html var" dedi damla: 2.8mb bake edilmiş seo sayfası vardı. hepsini ~3kb'lık ince
    kabuklara indirdim, gövdeyi istemci canlı veriden çizer. %90 html gitti, seo kaldı.

## 12-13 tem — motor: projenin ruhu
11. haber başlıklarını rss sorgusuna göre değil METNE göre eşlemek istedim. kolay yol: llm api.
    damla'nın kararı: "api çekmicem, biz yapabiliyorsak yapalım." yüzde yüz deterministik,
    llm'siz bilgi çıkarım motoru yazıldı: aktör tanıma (gazetteer) + cameo olay kodlama +
    goldstein skoru. başlıktan yönlü, skorlu bağ çıkarır.
12. ilk kapsam %22.6. conjunction gruplama, pasif çatı çevirme ("ukraine hit by russian
    strikes" → rusya→ukrayna), lider→ülke eşleme derken %30.4. karar: kapsam yavaş büyür,
    yanlış kodlama hızlı öldürür — hassasiyet önce.
13. yanlışları tek tek avladım: "attack drones" saldırı değil ürün adı; bloklanmış anlaşma
    işbirliği değil engelleme; çöken ateşkes normalleşme değil. her düzeltme ayrı commit.
14. olaylar tekilleşti (1266→1128), haftalık seriler + pagerank + topluluk tespiti + z-score
    spike'lar çıktı. artık "bu hafta bu hatta anormallik var" diyebiliyoruz.
15. motor ekrana bağlandı: bağ seçince "olay radarı", ülke seçince ağ sıralaması. tembel
    yüklenir (30kb gzip), kodlanamayan çift boş kutu değil hiç görünmez.

## 13 tem — ml fazı: motor kendi öğretmenini besliyor
16. özetleyici: "makaleleri kimse okumaz." 4500 başlık 3265 hikaye satırına indi —
    yine api'siz: kümeleme + merkezilik. en büyük thread 9 haber → 1 satır.
17. karar: kendi ml modelimiz olacak ama asla metin ÜRETMEYECEK (uydurma yasağı), sadece
    seçecek ve gruplayacak. motorun kendi kodladığı thread'ler eğitim verisi oldu —
    ilk gün 404 örnek, her 6 saatte büyüyor. etiketleyen: kendi motorumuz.
18. minilm encoder'ı bu korpusta ÖLÇTÜM: eşik 0.75'te yanlış birleştirme %0.35. asıl sürpriz:
    "yanlış" görünenlerin çoğu motorun aynı hikayeyi ikiye bölmesiydi — ml, motorun hatasını
    onarıyor. birleştirme pası prod'a girdi: 145 satır katlandı, çok-kaynaklı hikaye 456'ya çıktı.

## 13 tem — güven ve ölçüm
19. analytics istedim ama kullanıcıyı izlemeden. karar: çerezsiz birinci taraf sayaç —
    ip yok, kimlik yok, "tekil" bilgisi cihazda kalan bir bayrak. supabase'e tek anonim rpc.
    gizlilik sayfasına aynı oturumda yazıldı.
20. hesap silme in-app oldu (kvkk): tek tık, onay, rpc, cascade. mail fallback'li.
21. testler pipeline'ın önüne geçti: 9 test kırmızıysa 6 saatlik veri güncellemesi bloklanır.
    karar: üretim verisini koruyan şey disiplin, dua değil.

# MIKRO REELS (tek karar / tek bug / tek sayi = tek icerik)

## r21 — hook: "sitem 'TÜRkiye' yaziyordu, utandim"
title-case kodu TÜRkiye üretiyordu. çözüm: gösterim adları asla kodla üretilmez, tek kayıt
defterinden gelir. ekran: bug'lı ekran görüntüsü + düzeltme commit'i.

## r22 — hook: "saatlerce 'site güncellenmiyor' diye debug yaptım, site çoktan güncellenmişti"
suçlu custom domain cache'i. ders: her deploy'a görünür sürüm etiketi + tek doğruluk kaynağı
adres. ekran: footer'daki v72 etiketi.

## r23 — hook: "duvarım kolon gibi görünüyordu, sorun matematikti"
eşit genişlikte bloklar kolon illüzyonu yaratıyor. 1-2 kolonluk değişken bloklar = mozaik.
ekran: önce/sonra duvar.

## r24 — hook: "mac trackpad'i sayfa geçişimi deli ediyordu"
momentum kuyruğu yeni swipe sanılıyordu. çözüm: sönen delta = aynı jest, yükselen delta =
yeni niyet. ekran: sayfa geçişi akıcı hali.

## r25 — hook: "retina ekranda %44 daha az piksel çiziyorum, kimse fark etmedi"
pixel ratio 1.5'e sabitlendi, kare hızı arttı. ekran: fps sayacı önce/sonra.

## r26 — hook: "'russia backs plan' ile 'hit by russia' aynı kelimeyle başlıyor, anlamı zıt"
pasif çatı tespiti: participle + by. "backs plan by Russia" tuzağına düşmeyen lookahead.
ekran: iki başlığın kodlanışı.

## r27 — hook: "motorum kanada'yı suçladı, kanada masumdu"
"...as Ukraine and Estonia sign drone deal" cümlesinde fiile bitişik grubu seçme kuralı
geldi. ekran: yanlış/doğru ok animasyonu.

## r28 — hook: "washington'da görüşme = washington taraf değil"
"talks between A and B in Washington": bağ between-grubunun içinde, mekan yok sayılır.
ekran: üçlü örnek.

## r29 — hook: "kremlin dedi = rusya dedi. bunu bilgisayara öğretmek zor"
beijing/moscow/kremlin metonimleri + lider→ülke sözlüğü. ekran: gazetteer satırları.

## r30 — hook: "2006'dan kalma bir haber bütün radarımı bayatlatıyordu"
tek eski rss kaydı yüzünden pencere kararı: en yeni olaydan geriye 90 gün, duvar saati değil
veri saati. ekran: radar taze hali.

## r31 — hook: "aynı olayı 3 kaynak 3 yönle yazdı, kim haklı?"
tekilleştirmede yön çoğunluk oyuyla, eşitlikte en güvenilir makale. ekran: index.json satırı.

## r32 — hook: "grafiğe sordum: dünya kaç kampa bölünmüş? 16 dedi"
topluluk tespiti kendiliğinden yaptırım bloğunu buldu. ekran: topluluk listesi.

## r33 — hook: "bu hafta hiç spike yok ve bunu göstermiyorum"
boş kutu kuralı: veri yoksa bölüm hiç yok. boş kutu 'bozuk' okunur. ekran: akış radarlı/radarsız.

## r34 — hook: "mail listemden çıkmak için login isteyen siteden nefret ederim, benimki istemiyor"
tek tık unsubscribe: token'lı rpc, giriş yok. ekran: mailin altındaki link.

## r35 — hook: "iki app'im aynı veritabanını paylaşıyor ve birbirini göremiyorlar"
çok-app şema: ortak profiles tabanı + app önekli tablolar + hiçbir drop başkasını ezmez.
ekran: şema diyagramı.

## r36 — hook: "api anahtarım github'da herkese açık ve bu bir hata değil"
anon key tasarım gereği public; asıl kilit satır bazlı güvenlik (rls). ekran: config.js + policy.

## r37 — hook: "csv export'una formül enjeksiyonu koruması koydum, çünkü excel bir saldırı yüzeyi"
=HYPERLINK ile başlayan hücre tırnaklanır. ekran: kod satırı.

## r38 — hook: "github repom 'html projesi' görünüyordu, kimliğimi geri aldım"
üretilen sayfalar linguist-generated işaretlendi; repo şimdi javascript. ekran: dil çubuğu.

## r39 — hook: "supabase free projeni 7 gün unutursan uyuyor, benimki uyumuyor"
6 saatlik workflow'a keep-alive ping'i bindirildi. ekran: workflow adımı.

## r40 — hook: "cron için sunucu mu kiralanır? github actions bedava"
zamanlanmış her iş actions'ta: haber 6 saatte, veri haftalık, brifing pazartesi.
ekran: workflow listesi.

## r41 — hook: "sayfalar arası geçişim tek satır css ile sinema oldu"
cross-document view transitions: 0.28s crossfade, mpa spa gibi. ekran: geçiş kaydı.

## r42 — hook: "açılışta 1.2 megabayt js yüklüyordum, şimdi 30 kilobayt"
tembel katman yükleme: ilk tıkta o katmanın verisi gelir. ekran: network tab.

## r43 — hook: "modelimin çıktısını asla eğitim verisine geri koymuyorum"
feedback döngüsü modeli kendi hatalarıyla besler. eğitim seti sadece motor etiketli kalır.
ekran: veri akış şeması.

## r44 — hook: "negatif test setim kirliydi, fark etmesem eşiği yanlış seçecektim"
"farklı çift" sanılan bazı örnekler aynı haberin iki çiftte görünmesiydi. ekran: eval tablosu.

## r45 — hook: "hesap silme butonumu bilerek herkesin gözüne koydum"
kvkk silme hakkı: onay + rpc + cascade, mail fallback. ekran: silme akışı.

# CAROUSEL FIKIRLERI (1 slayt = 1 madde)

## c1 — "motorumun 5 aptal hatası" (attack drones / kanada masum / washington taraf değil /
TÜRkiye / ateşkes çöküşü pozitif kodlanıyordu)
## c2 — "0 liralık mimari, 6 slayt" (statik site / actions cron / supabase free / istemci
hesaplama / tembel yükleme / cdn)
## c3 — "bir günde 8 faz" (11 tem sprintinin fazları, faz başına slayt)
## c4 — "kvkk'yı tasarım kısıtı yap" (çerezsiz sayaç / tek tık sil / tek tık unsub / açık metin)
## c5 — "yanlış birleştirme sanılan 5 doğru" (rafale, lng, drone, pipeline, kazakistan örnekleri)
## c6 — "ürün = karar zinciri" (devlog'un 1-2-3-4'ü, karar başına slayt)

# TEK POST FIKIRLERI (görsel + kısa metin)

## tp1 — gece commit'leri ekran görüntüsü: "ben uyurken 4 koşu"
## tp2 — eval tablosu: "eşiği his değil tablo seçti"
## tp3 — dil çubuğu değişimi: "html slopware'den javascript motoruna"
## tp4 — footer v72: "her deploy görünür, 'bende çalışıyor' yok"
## tp5 — küre + radar tek kare: "poster küre, ürün radar"
