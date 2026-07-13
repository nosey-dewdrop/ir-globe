# linkedin — damla essay'leri (ir-globe)

300-500 kelimelik yazı/blog paylaşımları. format bizim 1-2-3-4: ne yapıyordum, ne hissettim,
neden şunu ekledim, hangi karar yatıyor. taslaklar damla'nın elinden geçer, ton onun.
hepsi gerçek, kanıtı repo'da. instagram malzemesi devlog.md'de.

---

## essay 1 — hediye diye başladı, elimde istihbarat ürünü var

1. Temmuz başında arkadaşıma bir hediye yazıyordum. Uluslararası ilişkiler okuyor; ona ülkeler
arasındaki ilişkileri gösteren bir 3D küre yapmak istedim. Kim kime silah satıyor, kim kimden
borç alıyor, tek bakışta görünsün.

2. İlk versiyon çalıştı ama bana slopware hissi verdi. Elle derlediğim bağlantılar, on sekiz bin
satırlık tek bir JavaScript dosyası, güzel görünen ama yaşamayan bir vitrin. Bu hissi
seviyorum aslında; çünkü ne zaman bir projem bana böyle hissettirse, orada gerçek bir ürüne
giden yol başlıyor demektir.

3. O yüzden kendime tek bir kural koydum: uydurma veri asla. Her bağlantı ya gerçek, kaynaklı
bir veri setine dayanacak ya da hiç var olmayacak. Bu kural her şeyi değiştirdi. Elle veri
girmek yerine BM Mülteci Örgütü, OECD, FAO gibi kurumların açık verilerini otomatik çeken bir
pipeline yazdım. Artık göç katmanındaki her ok gerçek bir mülteci istatistiği, silah
katmanındaki her ok SIPRI kaydı.

4. Sonra ikinci gerçekle yüzleştim: statik bir vitrine kimse dönüp ikinci kez bakmaz. Site
kendini yenilemeliydi. Şimdi sistem altı saatte bir dünya basınını tarıyor, başlıkları işliyor
ve kendini güncelliyor. Ben uyurken dört koşu tamamlanıyor; sabah kalktığımda site benden
daha güncel oluyor.

5. Bugün geldiği yer: 13 katman, 198 ülke, binlerce kaynaklı bağlantı, her altı saatte tazelenen
haber akışı, üyelik ve kişisel brifing altyapısı. Aylık sunucu maliyeti sıfıra yakın, çünkü
mimariyi baştan öyle kurdum: statik site, ücretsiz pipeline, hesaplama kullanıcının
tarayıcısında.

Hediye olarak başlayan şey ürüne dönüştü; ama dönüştüren şey yetenek değildi. İlk versiyonu
beğenmeme cesareti ve "uydurma veri asla" gibi basit, taviz kabul etmeyen kurallardı. Ürün
dediğimiz şey, verdiğin kararların toplamı. Kod sadece o kararların kanıtı.

## essay 2 — llm çağında llm'siz motor yazmak

1. Projemin bir sorunu vardı: haber başlığından "kim kime ne yaptı"yı çıkarmam gerekiyordu.
"Ukraine hit by Russian strikes" başlığında saldıran kim, hedef kim? Bunu binlerce başlık
için, her altı saatte bir, otomatik yapmam lazımdı.

2. Kolay yol belliydi: bir LLM API'sine bağlan, parayı öde, cevabı al. 2026'da herkesin
yaptığı bu. Ama ben öğrenciyim, bütçem sınırlı; ve daha önemlisi, yapabiliyorsam kendim
yapmak istiyorum. Karar verdim: API yok, model kiralamak yok, yüzde yüz deterministik kendi
motorum.

3. Klasik hesaplamalı dilbilime döndüm. Aktör tanıma için ülke adları, başkentler, liderler ve
halk adlarından bir sözlük kurdum; Beijing gördüğünde Çin'i, Kremlin gördüğünde Rusya'yı
anlıyor. Olay kodlama için siyaset biliminin kırk yıllık CAMEO şemasını kullandım: her olay
tipi eksi ondan artı ona bir işbirliği-çatışma skoru taşıyor. Üstüne yön çözümü: özne fiilden
önce mi, cümle pasif mi, "attacked by critics" içeride mi dışarıda mı.

4. İlk sürüm başlıkların yüzde 22'sini güvenle kodlayabiliyordu. Bağlaç gruplarını çözünce,
pasif çatıyı çevirmeyi öğretince, liderleri ülkelere bağlayınca yüzde 30'a çıktı. Bu arada
bir şeyi hiç bozmadım: emin olmadığı başlığı kodlamıyor. Çünkü kapsam yavaş büyür ama tek
bir yanlış kodlama, iki gerçek devlet hakkında yanlış bir iddia demek. Güven bir kere gider.

5. Motorun hata payını da saklamıyorum: örneklem doğruluğu ölçülü ve herkese açık. Bir sonraki
yazıda anlatacağım şey daha da garip: bu motorun üstüne kurduğum yapay zeka, motorun kendi
hatalarını bulmaya başladı.

Maliyet tablosu şöyle kapandı: motor sıfır lira, işlem süresi saniyeler, dışa bağımlılık yok.
AI kullanmak marifet değil. Neyi kendin yazman gerektiğini bilmek marifet.

## essay 3 — yapay zekam kendi kodumun hatasını buldu

1. Motorum haber başlıklarını olaylara çeviriyor ama aynı hikayeyi dokuz ayrı kaynak dokuz
farklı cümleyle yazıyor. "Italy suspends defense agreement with Israel" ile "Rome halts arms
pact" aynı haber; kelime kesişimi sıfır. Klasik benzerlik ölçüleri bunu yakalayamıyor.

2. Burada öğrenen bir modele ihtiyacım vardı ama bir yeminim var: modelim asla cümle
üretmeyecek. Bu üründe uydurma yasağı mutlak; üretken model, gerçek devletler hakkında
uydurma cümle riski demek. O yüzden model sadece seçer ve gruplar. Metni yazan hep gerçek
gazeteciler.

3. Peki eğitim verisini kim etiketleyecek? Ben değil. Motorun kendisi. Motor iki farklı
başlığı aynı olaya kodladıysa, o ikili benim için doğrulanmış bir eş anlamlı çift. Sistem
her altı saatte kendi eğitim verisini üretiyor; ilk gün 404 örnek birikti, her koşuda
büyüyor. Kendi kendini etiketleyen bir veri seti.

4. Sonra hazır bir cümle kodlayıcıyı bu veri üstünde ölçtüm. Eşik seçimini his ile değil
tabloyla yaptım: seçtiğim seviyede yanlış birleştirme oranı binde üç buçuk. Ama asıl bulgu
başkaydı. "Yanlış birleştirme" diye işaretlenen örneklere tek tek baktım; çoğu yanlış
değildi. Motor aynı hikayeyi iki farklı fiil üstünden iki ayrı olaya bölmüştü ve model,
bunların aynı hikaye olduğunu görüyordu. Yani yapay zeka, klasik motorun hatasını onarıyordu.

5. Birleştirme pası şimdi üretimde: ilk koşuda 145 mükerrer hikaye satırı katlandı,
çok kaynaklı hikaye sayısı yükseldi. Okuyucu artık "bu haberi 9 kaynak yazdı" güvenini
görüyor.

Ders şu: ölçmeden eşik seçseydim bunların hiçbirini görmeyecektim. Modelin çıktısına değil,
ölçtüğün tabloya güven. Ve bazen en iyi kod denetçisi, kendi verinle eğittiğin modelin ta
kendisi.

## essay 4 — sitem yavaştı ve suçlu bendim

1. Landing sayfam görsel olarak tam istediğim gibiydi: gerçek manşetlerden örülmüş bir duvar,
ortada dönen dünya. Tek sorun vardı: aşırı yavaştı. Açılışta yarım saniye donuyordu ve ben
nedenini bilmiyordum.

2. İçgüdüm "kütüphane ağırdır, küre ağırdır" diyordu. İçgüdüme değil profiler'a sordum.
Cevap utandırıcıydı: duvarı yerleştiren kendi kodum, her bloğun boyunu okuyup ardından stil
yazıyordu. Oku, yaz, oku, yaz. Tarayıcı her seferinde sayfayı baştan hesaplıyordu. İki yüz
kırk kez.

3. Çözüm mimariydi: önce bütün genişlikleri yaz, sonra bütün yükseklikleri tek seferde oku,
sonra bütün konumları tek seferde yaz. İki yüz kırk yeniden hesaplama bire indi. Aynı
görünüm, ama akıcı.

4. Sıra küredeydi: yarım megabaytlık WebGL kütüphanesi ve dünya haritası, açılışta ana
sayfayla yarışıyordu. Kürenin açılışta hazır olmasına gerek yoktu ki; kullanıcı ilk
scroll'unu yapana kadar kimse onu görmüyor. Kuruluşunu ilk kullanıcı niyetine erteledim.
Açılış uçtu, küre hiçbir şey kaybetmedi.

5. En zor kısım silmekti. On sekiz bin satırlık eski veri dosyası, artık hiçbir sayfanın
yüklemediği iki legacy modül: toplam 1.4 megabayt ölü kod. Bir release boyunca geri dönüş
için bekletip acımadan sildim.

Buradan çıkardığım üç kural var. Performans his işi değil ölçüm işi; profiler açmadan koda
dokunmak fal bakmaktır. En pahalı kod, kimsenin çalıştırmadığı ama herkesin indirdiği koddur.
Ve güzellikle hız düşman değildir; kötü sıralanmış işlemler düşmandır. Tasarımdan tek piksel
ödün vermeden kırk kat hızlanabilirsin. Ben hızlandım.

## essay 5 — kullanıcılarımı izlemeden sayıyorum

1. Ürünüm yayında ama temel bir soruyu cevaplayamıyordum: kaç kişi geliyor? Analytics lazımdı.
Standart cevap belli: hazır bir izleme scripti yapıştır, çerez bandosu ekle, veriyi üçüncü
tarafa akıt.

2. Bunu istemedim. Gizlilik sayfamda "davranış takibi yapmıyoruz" yazıyor ve o cümleyi
bozmayacaktım. Ama kör uçmak da mühendislik değil. İkisinin arasında bir yol olmalıydı.

3. Kendi sayacımı yazdım: çerezsiz, birinci taraf, yirmi beş satır. Sayfa açılınca sunucuya
tek bir anonim çağrı gidiyor: hangi sayfa, o kadar. IP saklanmıyor, tarayıcı kimliği yok,
parmak izi yok. "Günün ilk ziyareti" bilgisi kullanıcının kendi cihazında duruyor; bana
sadece bir evet/hayır geliyor. Kim olduğunu bilmiyorum, bilemem, bilmek de istemiyorum.

4. Veritabanı tarafında da aynı disiplin: sayaç tablosunu sadece yönetici okuyabiliyor,
yazma tek bir kontrollü fonksiyondan. Ve en önemlisi, bunu gizlilik sayfasına aynı gün,
açık Türkçeyle yazdım: neyi sayıyoruz, neyi saymıyoruz, hangi bilgi cihazında kalıyor.

5. KVKK'yı çoğu kişi yük olarak görüyor. Ben tasarım kısıtı olarak görüyorum ve kısıtlar
iyi mühendisliği doğurur. "İzleme scripti yapıştıramazsın" kısıtı bana şunu kazandırdı:
sıfır bağımlılık, sıfır çerez bandosu, sıfır üçüncü taraf riski ve kullanıcıya söylediğim
sözle kodum arasında tam tutarlılık.

Analytics ile mahremiyet arasında seçim yapmak zorunda değilsin. O ikilem, hazır script
yapıştırmanın konforundan çıkıyor. Yirmi beş satır kod yazmayı göze alırsan ikisini de
alırsın. Mühendislik tam olarak burada başlıyor.

## essay 6 — kırmızı test dünya haberlerini durdurur

1. Sistemim altı saatte bir dünya basınını tarayıp veriyi güncelliyor. Ben derste, ben
uykuda, o çalışıyor. Otomasyonun güzel tarafı bu. Korkunç tarafı da aynı şey: ben yokken
bozulabilir.

2. Bir gece tam bunu yaşadım. Gündüz eklediğim yeni bir çıktı dosyası, gece 03:16 koşusunda
motorun girdi klasörüne düşmüş; motor onu haber dosyası sanıp okumaya kalkmış ve pipeline
çökmüş. Sabah loga baktım: tek satırlık bir hata, tek satırlık bir düzeltme.

3. Ama tek satırlık düzeltmeyle bırakmak, aynı filmi tekrar izlemeyi kabul etmek olurdu.
Bunun yerine motorun ve yardımcı modüllerin etrafına dokuz kalıcı test yazdım: boş veri,
bozuk veri, eski tarihli veri, kötü niyetli girdi. Sonra en önemli kararı verdim: testleri
pipeline'ın en başına koydum. Sıralama artık şöyle: önce testler koşar, biri bile kırmızıysa
veri güncellemesi hiç başlamaz.

4. Yani kırmızı bir test, kelimenin tam anlamıyla dünya haberlerini durduruyor. Bozuk kod
asla taze veriye dokunamıyor. Site en kötü ihtimalle altı saat eski kalıyor; yanlış veri
göstermek diye bir ihtimal kalmıyor.

5. Aynı mantığı sürümlere de uyguladım: her deploy'da sayfanın altında görünür bir sürüm
etiketi var. "Bende çalışıyor" tartışması yok; hangi sürümün canlıda olduğu herkesin
gözünün önünde.

Otomasyon hakkında öğrendiğim en net şey şu: robotun kendisi değil, robotu koruyan çit
değerli. Testsiz otomasyon, uyurken evi gezen ama düştüğünde kimsenin duymadığı bir robot
süpürge. Benimki düşerse alarm çalıyor ve ev turu iptal oluyor. Üretim verisini koruyan
şey umut değil, disiplin.
