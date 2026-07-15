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
