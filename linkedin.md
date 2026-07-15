# linkedin — damla essay'leri (ir-globe)

300-500 kelimelik yazı/blog paylaşımları. format bizim 1-2-3-4: ne yapıyordum, ne hissettim,
neden şunu ekledim, hangi karar yatıyor. taslaklar damla'nın elinden geçer, ton onun.
hepsi gerçek, kanıtı repo'da. instagram malzemesi devlog.md'de.

---

## essay — kendi ürünüme bir jüri ordusu kurdum, sonra beni yerden yere vurdular

1. Bir gece ir-globe için tek başıma oturmak yerine, ürünüme karşı bir denetçi ordusu kurdum.
Önce dört rol: bir CTO kodun doğruluğunu, bir CMO anlatının dürüstlüğünü, bir ürün yöneticisi
kullanıcı yolculuğunu, bir de sıradan kullanıcı "beş saniyede anlıyor muyum" diye baktı. Sonra
işi ağırlaştırdım: uluslararası ilişkiler ve hukuk alanında kıdemli bir akademisyen ile bir
bilgisayar mühendisliği dekanı çağırdım. Biri ülke ilişkilerini bir oka indirgememin nerede
yalan söylediğini, diğeri "2026'da regex yığınıyla ilişki çıkarımı" yaklaşımımın tavanını
gösterecekti. En sonunda da en acımasızları: yatırım vermemek için ellerinden geleni yapan
düşman girişim sermayedarları.

2. İtiraf: acıttı. Ama her tur bana tek bir başlık üzerinden kanıt getirdi, ve kanıt tartışılmaz.
En sert olanı bir kesme işaretiydi. Motorum "Almanya İsrail'e silah SATMAYACAK" cümlesini
"satıyor" diye okuyordu; çünkü metni temizlerken kesme işaretini siliyor, "won't" bir anlam
ifade etmez hale geliyordu. Bir istihbarat aracında olumsuzu olumlu göstermek, ürünün kalbine
saplanan bir bıçaktır.

3. O yüzden her eleştiriyi bir kurala çevirdim. Olumsuzluğu kesme işaretini koruyan ayrı bir
kontrole taşıdım. "Rusya'nın işgalinden bu yana" gibi arka-plan cümlelerini gerçek işgalden
ayırdım. Yardımın yönünü düzelttim: parayı veren kaynaktır, isteyen değil. Mekân ülkesini taraf
sanmayı, soru başlıklarını olgu sanmayı, çift sayılan makale sayısını tek tek kestim. En önemlisi:
motorun asla "kesinim" demesine izin vermedim ve sadece güven eşiğini geçen okları çizdim.

4. Altta yatan karar tek cümle: yüksek güvenle söylenen bir yalan, hiç konuşmamaktan beterdir.
Bir gecede motor 918 bağdan ~340'a indi — üçte ikisi eleme, hepsi bir gürültü ya da yalan. Gösterilen
okların ölçülen doğruluğu yükseldi ve bu sefer sayıyı ben uydurmadım, örnekleyip elle saydım,
çıkan aralığı olduğu gibi siteye yazdım. Bir ürünü tek başına yaparken en zor şey, kendi eserini
bir düşman gibi sorgulayabilmek. Ben bunu dışarıdan bir orduya yaptırdım, ve sabaha daha dürüst,
daha sağlam bir küreyle çıktım. Kanıt repoda: her eleştiri bir commit.

---

## essay — ürünüm bir gece boyunca yalan söyledi, kanıtla susturdum

1. Bir gece küreme dört ayrı gözle baktım: mühendis, ürün yöneticisi, pazarlamacı ve
sıradan bir kullanıcı gibi. Amacım övgü değildi, kusur bulmaktı. Çünkü bu bir aile demosu
değil; yatırımcının, gazetecinin, sokaktaki yabancının göreceği gerçek bir ürün.

2. Bulduğum şey içimi acıttı ama tam da beklediğim türdendi. Motorum bir başlıkta geçen her
ülkeyi birbirine bağlıyordu. "İran destekli Husiler Riyad'a füze attı" cümlesini okuyunca,
küreye "İran, Suudi Arabistan'a DESTEK veriyor" diye yeşil bir ok çiziyordu — çünkü
"Iranian-backed" içindeki "backed" kelimesini "destek" fiili sanıyordu. Bir saldırı,
haritada dostluk olarak parlıyordu. Bir kullanıcı bunu bir kez görse, ürüne olan güveni bir
daha geri gelmez.

3. Yüzeysel yamamadım. Motora cümlenin nasıl çalıştığını öğrettim: "-backed" bir sıfattır,
fiil değil; "end support" desteğin bitmesidir, başlaması değil; "A, B'den silah alır" cümlesinde
satıcı kaynaktır; "X'in Venezuela'ya yatırımını memnuniyetle karşıladı" üçüncü bir ülke hakkındadır,
iki taraf arasında bir bağ değil. Sonra güven skorunu dürüst yaptım: deterministik bir
regex asla "kesinim" diyemez, o yüzden tavanı yüzde 75'e çektim — eskiden ürettiği bağların
yarısı "kesin" etiketliydi, hepsi yalandı.

4. Altta yatan karar şu: yüksek güvenle söylenen bir yalan, hiç konuşmamaktan beterdir. Bir
gecede motor 918 bağdan 775'e indi — 143 uydurma, ters ya da bayat ok elendi. Ürün küçüldü ama
gerçekleşti. Bir istihbarat aracının tek sermayesi güvenilirliğidir; onu ancak kendi ürününü
bir düşman gibi sorgulayarak kazanırsın. O gece kendi ürünümün en sert eleştirmeni oldum, ve
sabaha daha dürüst bir küreyle çıktım.

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

## essay 7 — "kimse buna para vermez" cümlesi en iyi ürün kararımdı

1. Küre bitmişti, güzeldi, herkes bir kez bakıp gidiyordu. Kendime en acımasız soruyu sordum:
buna kim ikinci kez gelir? Cevap netti: kimse. Statik bir vitrin, ne kadar güzel olursa olsun,
ziyaret edilir ama yaşanmaz.

2. O gün ürünü iki bacak üstüne oturtmaya karar verdim. Birinci bacak içerik motoru: veri benim
elimle değil, resmi kaynaklardan otomatik akacak. İkinci bacak kişiselleştirme: kullanıcı ülke
ve konu takip edecek, ana akışı ona göre kurulacak, haftada bir kendi brifingi mailine gelecek.

3. Çünkü geri gelme sebebi olmayan ürün, ürün değil poster. İnsan kendi seçtiği üç ülkenin
haberini görmek için döner; dünyanın tamamı için dönmez. Kişiselleştirme süs değil, dönüş
biletinin ta kendisi.

4. Bir günde sekiz fazlık bir sprint yaptım: veri pipeline'ı, üyelik, takip sistemi, kişisel
akış sayfası, brifing ve uyarı mailleri, tek tık abonelik iptali. Gece bittiğinde site aynı
görünüyordu ama artık başka bir şeydi: içine girilebilen bir sistem.

5. Bu karar zinciri bana ürünle proje arasındaki farkı öğretti. Proje "ne yapabilirim"in
cevabı, ürün "neden dönsünler"in cevabı. İkinci soruyu sormadan yazılan her satır, ne kadar
zekice olursa olsun, dekora yazılıyor.

Bugün hâlâ her özelliği o cümleyle test ediyorum: bu, birini geri getirir mi? Getirmiyorsa
güzel olması umurumda değil. Getiriyorsa çirkin doğmasına razıyım, güzelleştiririz.

## essay 8 — motorumun hatalarını tek tek avladım, en komiği kanada'ydı

1. Bilgi çıkarım motorum çalışıyordu ama dil, kural tanımayan bir hasım. "Ukraine and Estonia
sign drone deal" cümlesinde motor, cümlenin başka yerindeki Kanada'yı özne sanıp anlaşmayı
Kanada'ya yazdı. Kanada masumdu.

2. Bu tip hataları tek tek avlamaya başladım ve her birini ayrı bir kurala çevirdim. Fiile
bitişik grup öznedir: Kanada aklandı. "Talks between A and B in Washington" cümlesinde
Washington taraf değil mekandır: şehirler aklandı. "Attack drones" bir saldırı değil ürün
adıdır: yanlış alarm bitti. Çöken ateşkes normalleşme değil kötüleşmedir: skor düzeldi.

3. Neden bu kadar uğraştım? Çünkü motorun tek bir yanlış oku, iki gerçek devlet hakkında
yanlış bir iddia demek. Bir eğlence uygulamasında bug can sıkar; bir haber-veri ürününde bug
iftiradır. Hassasiyet bu yüzden kapsamdan önce gelir: motorun emin olmadığını kodlamaması,
yanlış kodlamasından bin kat iyidir.

4. Her düzeltmeyi ayrı commit yaptım ve her birinden sonra aynı örneklemi yeniden ölçtüm.
Kapsam yüzde 22'den 30'a çıkarken şüpheli kodlama oranı yüzde kırklardan yüzde bire indi.

5. Bu süreçte en çok şuna şaşırdım: hataların hiçbiri egzotik değildi. Pasif cümle, bağlaç,
mekan adı, ürün adı. Dilin en sıradan halleri, en sinsi tuzaklar.

Ders basit: kural tabanlı sistem yazıyorsan hata avı işin cilası değil, işin kendisi. Ve her
avlanan hata, bir daha giremesin diye teste dönüşmeli. Benim motorumda artık Kanada'yı kimse
suçlayamıyor; test var.

## essay 9 — google'ın algoritmasını ülkelere uyguladım

1. Elimde binlerce kodlanmış olay birikmişti: kim kime ne yaptı, hangi tonda. Ama "bu hafta
dünyada asıl ne oluyor" sorusuna hâlâ elle bakıyordum. Veri vardı, bakış yoktu.

2. Olayları bir ağa çevirdim: ülkeler düğüm, olaylar bağlantı. Sonra üç klasik algoritma
koştum. PageRank ile "haber ağının merkezinde kim var" sorusuna sayısal cevap aldım.
Topluluk tespitiyle ağın kaç kampa bölündüğünü buldum: on altı grup çıktı ve yaptırım bloğu
kendiliğinden belirdi, ben söylemeden. Z-score ile de haftalık anormallik yakaladım: hangi
ülke çifti bu hafta tarihsel ortalamasının belirgin üstünde haber üretiyor.

3. Çünkü "kim önemli" ve "ne değişti" sorularına his değil, hesap cevap vermeli. Ben İran ile
Venezuela'nın aynı blokta çıkacağını tahmin etmezdim; veri gösterdi.

4. Bu üçlü şimdi ürünün radar katmanı: bağ seçince son olaylar ve haftalık kırılma, ülke
seçince ağdaki sırası ve genel tonu, akışın tepesinde de haftanın hareketlenen hatları.
Hepsi kaynaklı, hepsi "haberlerden otomatik çıkarıldı" etiketiyle.

5. En sevdiğim yanı maliyeti: bu analizlerin hepsi altı saatte bir, bedava bir pipeline'da
koşuyor. Kurumsal istihbarat platformlarının abonelik sattığı görünümlerin iskeletini,
klasik algoritmalar ve açık veri taşıyor.

Kırk yıllık algoritmaları küçümseme. PageRank 1998'de web'i sıraladı; 2026'da benim
küremde dünyayı sıralıyor. Yenilik bazen yeni model değil, eski aleti yeni yere taşımak.

## essay 10 — bir haberin tarihi hangisidir? duvar saatim yalan söyledi

1. Radar bölümüm hazırdı: her ülke çiftinin son olayları. Ama bazı çiftlerde "son olay" diye
2006'dan kalma bir haber görünüyordu. Feed'lerden biri arşiv sayfası veriyordu ve tek bir
bayat kayıt, koca radarı eskitiyordu.

2. İlk refleksim "bugünden doksan gün geriye" filtresiydi. Sonra fark ettim: bu da yalan
söylerdi. Veri güncellenemediği bir hafta boyunca site "taze" pencereyi boş gösterecekti,
sanki dünya durmuş gibi.

3. Pencereyi duvar saatine değil veri saatine bağladım: en yeni olayın tarihinden doksan gün
geriye. Çünkü kullanıcıya verdiğim söz "en güncel bildiğimi gösteriyorum", "bugün her şeyi
biliyorum" değil. Veri saati bu sözü her koşulda tutuyor; duvar saati sadece her şey
yolundayken tutuyor.

4. Aynı gün ikinci bir kural daha çıktı: veri yoksa bölüm hiç yok. Boş kutu kullanıcıya
"site bozuk" der; hiç görünmeyen bölüm hiçbir şey demez. Kodlanamayan çiftte radar sessizce
kaybolur, yarım veriyle görünmez.

5. Bu iki küçük karar, ürünün "dürüstlük katmanı" oldu. İkisinin de kullanıcı yüzü yok;
kimse "vay, veri-göreli pencere" demeyecek. Ama ikisi de yanlış izlenim vermeyi imkansız
kılıyor ve güven tam olarak böyle, görünmeyen yerlerde birikiyor.

Zamanla ilgili her gösterimde kendime sorduğum soru artık şu: bu tarih neye göre? Duvar
saatine göre taze olan, veriye göre bayat olabilir. Kullanıcı ikisinin farkını bilmez;
senin bilmen gerekir.

## essay 11 — sıfır liralık mimari nasıl kurulur

1. Ben öğrenciyim; kullanıcı sayısı arttıkça faturası artan hiçbir şey kuramam. Bu bir
kısıt ve ben kısıtları severim: mimariyi baştan netleştirdi.

2. Kurallar şöyle oturdu. Site statik: HTML, CSS, JavaScript, o kadar. Sunucu tarafı hesap
yok; kişisel akış dahil her şey kullanıcının tarayıcısında hesaplanıyor. Zamanlanmış işler
GitHub Actions'ta: haber altı saatte bir, resmi veriler haftada bir, brifing pazartesi.
Veritabanı ve kimlik Supabase'in ücretsiz katmanında, güvenlik satır bazlı kurallarda.

3. Çünkü ölçeğin bedava olduğu tek yer istemci. Bin okur da gelse yüz bin de, statik dosyayı
CDN dağıtıyor ve hesabı herkesin kendi cihazı yapıyor. Benim maliyetim değişmiyor: sıfır.

4. Bu mimarinin küçük tuzakları da var ve onları da çözmek gerekti. Ücretsiz veritabanı yedi
gün hareketsizlikte uyuyor; altı saatlik workflow'a bir uyandırma pingi bindirdim. Açılışta
her şeyi yüklemek statik sitede bile siteyi boğuyor; katmanları tembel yüklemeye çevirdim,
açılış 1.2 megabayttan 30 kilobayta indi.

5. En güzel yan etkisi şu oldu: para bittiğinde ölmeyen ürün. Yatırım, gelir, sponsor;
hiçbirine muhtaç değil. Beş yıl sonra da bu site kendi kendini güncelliyor olacak, ben
unutsam bile.

Bütçesizlik çoğu öğrenci için bahane; doğru mimariyle süper güç. "Sunucum yok" cümlesi
"ölçeğim bedava" cümlesinin kötü söylenmiş hali. Fatura yerine tasarımla ödersin, o kadar.

## essay 12 — iki uygulamam aynı veritabanında yaşıyor ve birbirini göremiyor

1. İkinci ürünüme kullanıcı hesabı gerekince bir karar anı geldi: her uygulamaya ayrı
veritabanı mı, hepsine tek ortak kasa mı? Ayrı proje temiz ama israf; ortak kasa verimli
ama tehlikeli. Yanlış kurarsan bir uygulamanın migration'ı diğerinin tablosunu ezer.

2. Ortak kasayı seçtim ve tehlikeyi kurallarla kestim. Kimlik ve profil tabloları ortak
taban: ilk uygulama kurar, sonrakiler aynen kullanır. Uygulamaya özel her tablo kendi
önekiyle yaşar. Ve demir kural: hiçbir uygulamanın şeması, komşusunun tablosuna dokunan
tek bir satır içeremez.

3. Çünkü çok uygulamalı tek kasa, disiplinle cennettir, disiplinsiz kabus. Tek kayıt sistemi
demek: kullanıcı bir kez hesap açar, benim bütün ürünlerimde geçer. Ama bunun bedeli, her
şema dosyasını "komşuya zarar verir mi" gözüyle okumak.

4. Güvenlik de aynı felsefeyle: API anahtarım GitHub'da herkese açık ve bu bir sızıntı
değil, tasarım. Anon anahtar sadece kapı zili; kimin neyi görebileceğini satır bazlı
güvenlik kuralları söylüyor. Takip listeni sadece sen okursun, sayaç tablosunu sadece
yönetici, yazma işlemleri sadece kontrollü fonksiyonlardan.

5. Bu kurulumun sınavı ikinci uygulama bağlandığında geçildi: sıfır çakışma, sıfır yeniden
yazım.

Öğrendiğim şu: paylaşılan altyapı bir teknoloji kararı değil, sözleşme kararı. Teknoloji
zaten izin veriyor; yaşatan şey, kimin neye dokunamayacağını en baştan yazıya dökmek.
Kod gider gelir, sözleşme kalır.

## essay 13 — tasarımım on kere reddedildi ve bu en iyi haberdi

1. Kürenin ilk arayüzleri süslüydü: gradyanlar, renkli etiketler, parlak kartlar. Hepsi
birer birer reddedildi. On tur. Her turda "daha iyi" sandığım şey, aslında internetin
geri kalanına daha çok benziyordu.

2. On birinci turda süsü tamamen bıraktık ve bir gazeteye baktık: serif başlık, beyaz
kağıt, tek lacivert vurgu, keskin köşeler. Oturdu. O gün bir de yasa çıkardık: bu stil
artık değişmez; Economist'ten, NYT'den desen alınabilir ama görünüm asla kopyalanmaz.

3. Çünkü veri ürününde süs, güvenden çalar. Renkli baloncuklarla dolu bir ekran oyun gibi
durur; oyun gibi duran şeye kimse jeopolitik analiz için güvenmez. Gazete estetiği yüz
yıldır aynı işi yapıyor: "burada yazılana güvenebilirsin" duygusunu taşımak.

4. Stil yasasının asıl faydası sonra çıktı: karar yorgunluğunu bitirdi. Yeni bir sayfa mı
gerekiyor? Font belli, renk belli, köşe belli. Tasarım tartışması sıfır dakika; bütün enerji
içeriğe gidiyor. Radar bölümü, dizin sayfaları, üyelik ekranı; hepsi ilk seferde aynı aileden
doğdu.

5. Reddedilen on turun hiçbiri boşa gitmedi. Her red, neyin İĞRETİ durduğunu öğretti; yasa
o derslerin damıtılmış hali.

Şimdi kural olarak söylüyorum: tasarımda referanssız iterasyon, karanlıkta dart. Önce neye
benzemek istediğini bir örnekle sabitle, sonra tek bir görsel yasa çıkar, sonra o yasaya
sadık kal. Özgünlük kaostan değil, kısıttan çıkar.

## essay 14 — ayrılmayı kolaylaştırdım, güven kazandım

1. Mail bültenim hazırdı ama bir detay beni rahatsız etti: abonelikten çıkmak için siteye
girip hesapla uğraşmak gerekiyordu. Ben de dahil herkes böyle sitelerden nefret eder;
çıkışı zorlaştırmak, kapıyı kilitleyip misafirperverlik taslamak.

2. Tek tık iptali kurdum: mailin altındaki bağlantı, giriş istemeden, token'la aboneliği
kapatıyor. Aynı felsefeyle hesap silmeyi de uygulamanın içine koydum: onay ver, bir tık,
hesap ve bütün veri zincirleme silinir. Mail atmak, form doldurmak, beklemek yok.

3. Çünkü her aksiyonun tersi olmalı. Kayıt olabilen silebilmeli, abone olan çıkabilmeli,
takip eden bırakabilmeli. Tersi olmayan aksiyon tuzaktır ve kullanıcı tuzağı kokusundan
tanır.

4. İşin hukuk tarafı da aynı yere çıkıyor: KVKK zaten silme hakkı diyor. Çoğu ürün bunu
"bize e-posta atın" diye geçiştiriyor; yasal olarak idare eder, ürün olarak zayıftır. Ben
KVKK'yı yük değil tasarım kısıtı olarak okuyorum: hak neyse, arayüzde buton olarak dursun.

5. Paradoks şurada: çıkışı kolaylaştırmak, kalmayı artırır. Kapının açık olduğunu gören
misafir rahat oturur. "İstediğim an tek tıkla giderim" duygusu, kalma kararını her gün
yeniden ve gönüllü verdirir.

Ürününe güveniyorsan çıkışı büyüt, gizleme. Gizliyorsan zaten ürünle değil kilitle
tutuyorsun demektir ve kilitle tutulan kullanıcı, ilk fırsatta kapıyı kırarak çıkar.

## essay 15 — seo ile modern mimari kavga etmek zorunda değil

1. Küre muhteşem ama Google küreyi göremiyor; arama motoru JavaScript dünyasında kördür.
Bu yüzden her ülke ve her konu için statik sayfalar üretiyordum: iki yüz on bir sayfa,
toplam 2.8 megabayt bake edilmiş HTML. Repo bir motor projesi değil, HTML çöplüğü gibi
görünüyordu.

2. Damla'nın tek cümlesi ameliyatı başlattı: "çok html var." Sayfaları üçer kilobaytlık
ince kabuklara indirdim. Kabukta Google'ın istediği her şey duruyor: başlık, açıklama,
yapısal veri, ilk paragraf. Gövdeyi ise kullanıcının tarayıcısı, kürenin kullandığı aynı
canlı veriden çiziyor.

3. Çünkü asıl hata aynı veriyi iki yerde tutmaktı. Bake edilmiş sayfa, verinin donmuş
fotoğrafı; canlı veri değişince fotoğraf yalan söylüyor. Tek kaynak, iki tüketici kuralına
dönünce hem tekrar hem bayatlama sorunu kökten bitti.

4. Sonuç: yüzde doksan küçülme, sıfır sıralama kaybı, ve her sayfa artık küreyle aynı
tazelikte. Bonus olarak repo kimliğine kavuştu; üretilen dosyaları "makine yaptı" diye
işaretleyince GitHub projeyi nihayet JavaScript motoru olarak tanıdı.

5. Bu iş bana eski bir önyargıyı bozdurdu: "SEO istiyorsan her şeyi sunucuda bas" ezberi,
çoğu durumda tembelliğin teorisi. Arama motoru senin mimarini değil, vaadini denetliyor:
başlık doğru mu, içerik var mı, hızlı mı.

İkisini de istiyorsan al: iskelet statik, et canlı. Google iskeleti okur, insan eti yer,
kimse aç kalmaz.

## essay 16 — %87 gurur duyduğum sayıydı, gerçek F1'im 0.39 çıkınca sustum

1. Aylarca motorumun doğruluğunu "%87" diye anlattım. Küreye çizdiğim okların elle
denetlenen örneklemde yüzde seksen yedisi doğruydu, bu gerçekti. Ama bir gece motoru
kendi workflow'umla, gerçek bir F1 metriğiyle ölçtüm ve sayı yüzüme çarptı: 0.39.
Precision 0.53, recall 0.31.

2. Fark şurada gizliydi: ben sadece GÖSTERDİĞİM okların doğruluğunu sayıyordum. Motor
zaten emin olmadığı her şeyi reddediyordu, o yüzden gösterdikleri temizdi. Ama bir
başlıkta olması gereken üç ilişkiden ikisini sessizce kaçırıyordu. Yani ürünüm dürüst
görünüyordu çünkü konuşmaktan korkuyordu.

3. Bu, ölçtüğün sayının seni nasıl kandırabileceğinin ders kitabı örneği. Precision'ı
yükseltmek kolay: hiçbir şey söyleme, hiç yanılmazsın. Recall seni zorlar çünkü
kaçırdığını görmen için kaçırdığını önceden bilmen gerekir. Ben yanlış metriğe âşık
olmuşum; övündüğüm sayı aslında korkaklığımın karnesiymiş.

4. Karar: precision-first kalır ama recall'ı kovalarım. Kaçırılan başlıkları tek tek
okudum ve motorun bilmediği fiilleri ekledim — "ilişkileri onarmak", "yardımı
kesmek", "elçi göndermek", tireli ülke isimleri (US-Japan tek aktör bile sayılmıyordu,
sıfır ülke bulup bağı gizliyordu). Kaçırılanların onda yedisi geri geldi, gösterilen ok
sayısı arttı, doğruluk düşmedi.

5. En sağlıklı an, en çok gurur duyduğun sayının aslında ne ölçtüğünü sorduğun andır.
"%87 doğru" cümlem yanlış değildi ama eksikti; yanına "gördüğün okların" yazmadan
söylemek kendini kandırmaktı. Şimdi ikisini de yayınlıyorum: gösterilenin doğruluğu
ayrı, kapsama ayrı. Tek bir sayıyla övünen herkese şunu soruyorum artık: o sayı neyi
saymıyor?

## essay 17 — bütün bir katmanın oklarını sildim çünkü kavramsal olarak yanlıştı

1. Bir IR akademisyeni ürünümü gezdi ve en değerli cümleyi kurdu: göç katmanım alanının
kardinal günahını işliyordu. "Nijerya, Kamerun'dan gelen mültecilere ev sahipliği yapıyor"
başlığını motor "Nijerya → Kamerun, girişim +3.2" diye kodluyordu. Yani bir ülkenin
mülteci kabul etmesini, karşı ülkeye yönelttiği bir eylem gibi çiziyordum.

2. Bu teknik bir bug değil, kategori hatasıydı. Mülteci akışı bir ülkenin "seçtiği ikili
eylem" değil; 1951 Sözleşmesi, non-refoulement, uluslararası hukukun konusu. Bir okun
ucuna insan koyup "bu ülke şunu yaptı" demek burada yanlış çerçeveydi. Motorum teknik
olarak çalışıyor ama dünyayı yanlış modelliyordu.

3. Daha kötüsü, metodoloji sayfamda göç'ü "resmi/yapısal veri" diye listelemiştim, oysa
aynı regex tahminiydi. Yani hem yanlış çiziyordum hem de yanlış olduğunu doğru gibi
sunuyordum. İkinci kısım birincisinden ağırdı; bir istihbarat ürününde dürüstlük ihlali,
hata payından beter.

4. Karar sert oldu: göç katmanı artık yönlü ok üretmiyor. Sadece kaynaklı bir liste
kalıyor, "kim kimden geliyor" — ok yok, suç yok. Metodolojiden de "yapısal" etiketini
çıkardım, ayrı ve dürüstçe açıkladım. Bir özelliği geliştirmek yerine kaldırmak canımı
yaktı ama doğru olan buydu.

5. Ders: her veriyi aynı şekle sokmak kolaylıktır, doğruluk değil. Motorum ok çizmeyi
biliyor, ama her ilişki ok değil. Bir mühendis olarak öğrendiğim en zor şey, aracının
en iyi yaptığı şeyi bazı yerlerde YAPMAMAYA karar vermek. Her şeye çekiç muamelesi
yapan alet, çivi olmayan yeri de parçalar.

## essay 18 — dünya ikili değil, ben ikili çiziyordum

1. Küremdeki her ok iki ülke arasındaydı: A, B'ye. Temiz, okunur, tıklanır. Ama IR
akademisyeni haklı bir yerden vurdu: dünyanın en önemli ilişkileri ikili değil.
"ABD ve müttefikleri yaptırım koydu" başlığında NATO yok, BM yok, AB yok — hepsini tek
bir ikili oka indirgiyor ya da tamamen düşürüyordum. En büyük aktörler haritamda
görünmüyordu.

2. Bu, kolay veri modelinin dünyaya dayattığı bir yalandı. İki sütunlu bir tablo (kaynak,
hedef) yapması kolay olduğu için dünyayı iki sütuna sıkıştırmıştım. Oysa NATO'nun
Ukrayna'ya desteği, AB'nin Çin'e tavrı, BM'nin Kuzey Kore yaptırımı — bunlar tek bir
ülkenin eylemi değil, kolektif aktörlerin.

3. İki yönlü çözdüm. Kısa vadede dürüst oldum: metodolojiye "dünya ikili değildir, biz
ikili çiziyoruz, bu bir basitleştirmedir" sınırını açıkça yazdım. Kullanıcı neyi
göremediğini bilsin. Uzun vadede asıl işi yaptım: NATO, BM, AB, G7, ASEAN, OPEC artık
motorda first-class aktör. Önceden sıfır olan yerde bugün 22 çok-taraflı ok var —
NATO→Ukrayna, AB→Çin, BM→Kuzey Kore.

4. Karar şuydu: bir sınırlamayı gizlemek yerine önce ilan et, sonra kapat. Çoğu ürün
sınırlamasını dipnotta saklar ya da hiç söylemez. Ben tam tersini yaptım çünkü bir
istihbarat aracının sattığı tek şey güven; "şunu göremiyorsun" diyen bir araç, her
şeyi gösterdiğini iddia eden araçtan daha güvenilir.

5. Bu iş bana veri modelinin masum olmadığını öğretti. Seçtiğin tablo şekli, dünyaya
dair bir iddia. İki sütun seçince "her ilişki ikilidir" demiş oluyorsun ve farkında bile
değilsin. En iyi eleştiri, kodundaki bir hatayı değil, varsayımındaki bir hatayı
gösterendir. Akademisyen bana bug değil, körlük gösterdi.

## essay 19 — pazarlamam "%82 doğru" demek istedi, ben "%71-85" yazdım

1. Motorumun doğruluğunu tek bir güzel sayıya indirmek çok cazipti. Bir örneklemde %82.5
çıktı, sitenin her yerine "%82" yazmak istedim. Sonra daha büyük bir örneklem aldım:
%71.2. Sonra en çok düzeltmeden sonraki tur: %84.6. Aynı motor, üç farklı sayı. Hangisi
doğru?

2. Cevap: hepsi ve hiçbiri. Doğruluk örnekleme bağlı; küçük örneklem iyimser, büyük
örneklem gerçekçi. Tek bir sayı yazmak, ölçümün gürültüsünü kesinlik gibi satmak olurdu.
Eski sitede "%87, 15'te 13 doğru" yazıyordu — savunulamaz bir küçük örneklemdi ve ilk
ciddi soruda çökerdi.

3. Bir istihbarat ürününde bu ölümcül. Analist senin sayına güvenip brief'ine koyar; sen
tek örneklemlik bir şansı "kesin doğruluk" diye sattıysan, onu da seni de yakarsın.
Kesinlik taklidi, dürüst bir aralıktan çok daha kırılgandır çünkü tek karşı örnek onu
yıkar.

4. Karar: siteye dürüst aralığı yazdım — "örnekleme göre ~%80-85", "sample-dependent ve
yükseliyor" notuyla. Pazarlama açısından çirkin; "%87 doğru" pankart gibi durur, "%71-85
arası, örnekleme bağlı" özür gibi. Ama ikincisi doğru, birincisi reklam. Ben reklamı
değil ürünü satıyorum.

5. Öğrendiğim: güven, yuvarlak tek bir sayıyla değil, o sayının etrafındaki dürüstlükle
kazanılır. Hata payını gizleyen değil, ilan eden araç ciddiye alınır. Bir mühendis olarak
en zor disiplin, elimdeki en satılabilir cümleyi ("%87 doğru!") daha az satılabilir ama
daha doğru olanla değiştirmekti. Kullanıcı aptal değil; abartılı kesinliğin kokusunu
alır ve o an bütün ürüne güvenini keser.

## essay 20 — kullanıcım kaynağı tıklayamıyordu, google'a rağmen çözdüm

1. Ürünüm bir analistin işini bitirmeliydi: "İran-ABD bu hafta ne oldu, kaynaklı brief'e
yaz." Yedi tur boyunca aynı duvara çarptım. Her haberin altında Google News linki vardı
ama tıklayınca boş sayfa açılıyordu — Google, kendi RSS linklerini şifreliyor ve
decode edilmesini blokluyor. Yani kaynağım vardı ama kullanıcı ona ulaşamıyordu.

2. Bir istihbarat ürününde kaynağa ulaşamamak deal-breaker. Analist "Reuters böyle demiş"
diyemiyorsa, benim küreme güvenip brief yazamaz. Aracın ne kadar doğru olduğu, o
doğruluğu KANITLAYAMADIĞIN anda değersiz. Yedi müşteri turu bu tek sorunda direndi.

3. Google'la savaşmayı bıraktım, etrafından dolaştım. İki yol: yayıncı domain'i bilinen
haberlerde link artık Google'a değil, doğrudan aramaya gidiyor — `site:jpost.com
"başlık"` — tek tıkla gerçek makale. İkincisi, her manşetin yanına "alıntıla" butonu
koydum: "Reuters, 'başlık', tarih" panoya kopyalanıyor. Alıntı için URL şart değil;
gazeteci kaynağı adıyla, tarihiyle gösterir.

4. Karar şuydu: çözemediğin engelin etrafından dolaş, kullanıcının asıl işini bitir.
Google'ın URL'sini decode etmek için haftalar harcayabilirdim ve muhtemelen kaybederdim.
Onun yerine "kullanıcı ne yapmak istiyor?" diye sordum — kaynağı bulmak ve alıntılamak.
İkisini de URL olmadan çözdüm.

5. Ders: bazen doğru mühendislik, sorunu çözmek değil, sorunun etrafından kullanıcının
hedefine ulaşmaktır. Ben "linki nasıl açtırırım" diye takılıp kalmıştım; asıl soru
"kaynağı nasıl gösteririm"di. Engeli aşmaya çalışırken çoğu zaman engeli GEREKSİZ
kılan bir yol vardır. Onu bulmak, duvarı yıkmaktan zariftir.

## essay 21 — dönen küre yıldız değildi, kimse bunu bana söylemedi

1. Aylarca ürünümün kahramanı dönen 3D küreydi. Açılışta ekranı dolduran, tıkladıkça ok
çizen güzel bir dünya. Gurur duyuyordum. Sonra bir müşteri gözüyle baktım: siteye
girdiğinde ilk gördüğün şey güzel bir oyuncak, ama "bu benim işime ne yarıyor?"
sorusunun cevabı hiçbir yerde yoktu.

2. Sorun buydu: küre bir gösteriydi, ürün değil. Analist açılışta "bu hafta dünyada ne
oldu"yu görmek ister, dönen bir top değil. Ben en emek verdiğim şeyi (küre) sahneye
koymuştum, en değerli şeyi (bu haftanın hareketleri) ise kullanıcının tıklaya tıklaya
bulmasını bekliyordum. Emeğimle değerimi karıştırmıştım.

3. Landing'i baştan kurdum. Artık hero'da "bu hafta en çok hareketlenen çiftler"
duruyor — Fransa↔Rusya sertleşti, İran↔ABD gerildi — her satır o iki ülkenin sayfasına
tıklanır. Ürünün asıl işi ilk ekranda, on saniyede. Küre hâlâ orada ama artık ikinci
sayfada, yıldız değil oyuncu.

4. Karar acı vericiydi çünkü en çok sevdiğim şeyi geri plana attım. Ama kural netti:
kullanıcı ilk ekranda değeri görmezse, ikinci ekrana geçmez. "Güzel" ile "yararlı"
çatışınca yararlı kazanır. Küreye harcadığım ay, onu ana sayfada tutmam için bir sebep
değil — bu "batık maliyet" tuzağının ta kendisi.

5. Öğrendiğim en pahalı ders: bir ürünün kahramanı, senin en çok emek verdiğin parça
değil, kullanıcının işini bitiren parçadır. İkisi aynı olabilir ama olmak zorunda değil.
Ben aylarca yanlış şeyi cilalamışım; onu silmedim ama sahneden indirdim. Sahneyi
kullanıcının işine verdim. Ürün, sen neyi seviyorsun diye değil, kullanıcı ne yapmak
istiyor diye kurulur.
