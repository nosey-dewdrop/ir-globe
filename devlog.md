# devlog — instagram build-in-public malzemesi (ir-globe)

gelistirme sureci instagram'da paylasilir: reels, post, carousel. olabildigince MINIK parca,
cok icerik. anlatim bicimi HEP numarali zincir, gunluk konusma tonunda:
"bugun sunu degistirdim arkadaslar, cunku soyle bir sorun vardi!"
iskelet: 1. sorun neydi → 2. ne degistirdim → 3. cunku (karar) → 4. sonuc. + ekranda ne goster.
reels 30-60 saniye, hook sart. sinir yok. linkedin essay'leri ayri dosyada: linkedin.md.

# REELS

## r_gece1 — hook: "ürünüm 'İran ABD'ye silah satıyor' diyordu, gece boyu düzelttim"
1. sorun: motor bir başlıkta geçen HER ülkeyi bağlıyordu. "İran destekli Husiler Riyad'a füze attı" → küreye "İran → Suudi DESTEK" oku (çünkü 'Iranian-backed' içindeki 'backed'i 'destek' sandı). saldırı, haritada dostluk gibi.
2. ne değiştirdim: motora cümle-yapısı öğrettim — '-backed' sıfattır fiil değil; 'end support' desteğin bitmesi; 'A buys from B' → satıcı kaynak.
3. çünkü bu oyuncak değil; yatırımcının, gazetecinin göreceği ürün. yüksek-güvenli bir yalan, sessizlikten beterdir.
4. sonuç: 918 → 775 bağ. 143 uydurma/ters/bayat ok elendi. güven artık asla "kesin" demiyor.
ekran: aynı başlık, önce yanlış yeşil ok → sonra kaybolur.

## r_gece3 — hook: "tek bir kesme işareti yüzünden ürünüm haberlerin TERSİNİ söylüyordu"
1. sorun: motor "Almanya İsrail'e tank SATMAYACAK" başlığını "Almanya İsrail'e tank satıyor" diye okuyordu. "Rusya ve Çin İran'a yardım ETMİYOR" → "yardım ediyor".
2. neden: metni temizlerken kesme işaretini (') boşluğa çeviriyordum. "won't" → "won t" oluyordu, "olumsuzluk" kuralı hiç eşleşmiyordu. Her "won't/doesn't/aren't" başlığı tam tersine dönüyordu.
3. ne değiştirdim: olumsuzluk kontrolünü kesme işaretini KORUYAN ayrı bir temizlemeye taşıdım.
4. çünkü bir istihbarat ürününde "X, Y'ye silah satmayacak" ile "satıyor" arasındaki fark her şeydir. Bir jüri turu bunu yakaladı, tek satırlık bir bug felaketti.
ekran: aynı başlık, ok önce yanlış yönde parlıyor → düzelince kayboluyor.

## r_gece2 — hook: "kendi ürünüme 4 kişilik jüri kurdum, beni ben eleştirdim"
1. sorun: kendi ürününe âşıksın, kusuru göremiyorsun.
2. ne yaptım: mühendis + ürün yöneticisi + pazarlamacı + sıradan kullanıcı gözüyle didik didik eleştirdim. her tur yeni kusur, düzelt, tekrar eleştir.
3. çünkü övgü değil kusur lazımdı; bu YC/yatırım seviyesi ürün olacak.
4. sonuç: mekan-ülkesi sahte okları, bayat 2006 haberleri, ters yönler — hepsi turlarca temizlendi.
ekran: jüri bulgu listesi akıyor, her satır bir düzeltme.

## r1 — hook: "arkadaşıma hediye yazdım, elimde istihbarat ürünü var"
1. arkadaşım IR okuyor, hediye olarak "kim kime silah satıyor" küresi yapıyordum.
2. bugün geldiği yer: 13 katman, 198 ülke, 6 saatte bir kendini yenileyen sistem.
3. çünkü ilk versiyonu beğenmedim ve durmadım; her beğenmediğim şey bir sonraki fazı doğurdu.
4. sonuç: hediye ürüne evrildi, hâlâ tek kişiyim.
ekran: küre dönüşü + katman geçişleri.

## r2 — hook: "ilk versiyonum çöptü ve bunu size göstereceğim"
1. sorun: elle girilmiş veri + 18 bin satırlık tek dosya. slopware hissi.
2. hepsini attım, kural koydum: uydurma veri asla, her bağın kaynağı olacak.
3. çünkü güzel görünen ama yaşamayan vitrin, ürün değil dekor.
4. sonuç: artık her ok gerçek bir veri setine gidiyor (unhcr, oecd, sipri, fao).
ekran: eski commit diff'i (18k satır kırmızı) + veri kaynakları.

## r3 — hook: "llm çağında llm'siz bilgi çıkarım motoru yazdım"
1. sorun: başlıktan "kim kime ne yaptı"yı çıkarmam lazım, kolay yol api'ye para vermek.
2. kendi motorumu yazdım: aktör tanıma + olay kodlama + skor, yüzde yüz deterministik.
3. çünkü yapabiliyorsak biz yaparız; maliyet sıfır, dışa bağımlılık sıfır.
4. sonuç: 4500 başlık saniyeler içinde işleniyor, her 6 saatte.
ekran: terminalde motor koşusu, akan çıktı.

## r4 — hook: "sitem aşırı yavaştı, suçlu 240 kere aynı hatayı yapan bendim"
1. sorun: açılışta yarım saniye donma, sebebini bilmiyorum.
2. bugün layout kodumu üç faza ayırdım: yaz, oku, yaz.
3. çünkü profiler gösterdi: kendi kodum 240 kez forced reflow tetikliyormuş.
4. sonuç: 240 → 1. aynı görünüm, akıcı site.
ekran: devtools kaydı önce/sonra.

## r5 — hook: "2.8 megabayt html'i sildim, google hâlâ beni seviyor"
1. sorun: seo için 211 sayfa bake ediyordum, repo html çöplüğü gibiydi.
2. bugün hepsini 3kb'lık kabuklara indirdim, gövdeyi canlı veri çiziyor.
3. çünkü aynı veriyi iki yerde tutuyordum; tek kaynak, iki tüketici olmalı.
4. sonuç: %90 küçülme, sıralama kaybı yok.
ekran: repo dil çubuğu + ülke sayfası açılışı.

## r6 — hook: "haber başlığı yalan söyler: 'ukraine hit by russian strikes' kim saldırıyor?"
1. sorun: motorum özneyi yanlış alıyordu, saldıran ukrayna sanıyordu.
2. bugün pasif çatı çevirmeyi öğrettim: participle + by görünce yön döner.
3. çünkü tek yanlış ok, iki gerçek devlet hakkında yanlış iddia demek.
4. sonuç: aynı başlık artık doğru kodlanıyor.
ekran: önce/sonra kodlama.

## r7 — hook: "makaleleri kimse okumuyor, ben de 4500 başlığı 3 bine indirdim"
1. sorun: aynı hikayeyi 9 kaynak yazıyor, akış tekrar dolu.
2. bugün özetleyici ekledim: kümeleme + merkezilik, yine api'siz.
3. çünkü okuyucuya 9 tekrar değil "9 kaynak doğruladı" güveni lazım.
4. sonuç: en büyük thread 9 haber → 1 satır, "×9 kaynak" rozeti.
ekran: akıştaki rozetler.

## r8 — hook: "modelim asla cümle kurmayacak, buna yemin ettim"
1. sorun: ml istiyorum ama üretken model uydurma riski demek.
2. karar: model sadece seçer ve gruplar, metni hep gerçek gazeteci yazar.
3. eğitim verisini kendi motorum etiketliyor: ilk gün 404 örnek, 6 saatte bir büyüyor.
4. sonuç: kendi kendini besleyen, uydurmayan ml hattı.
ekran: train.jsonl akışı.

## r9 — hook: "yapay zekam kendi kodumun hatasını buldu"
1. sorun: encoder'ın "yanlış birleştirmeleri" vardı, oranı ölçtüm: binde 3.5.
2. bugün o yanlışlara tek tek baktım.
3. çünkü tabloya güvenirim ama örneklem okumadan eşik seçilmez.
4. sonuç: çoğu yanlış değilmiş; motor aynı hikayeyi ikiye bölmüş, ml onarmış. 145 satır katlandı.
ekran: eval tablosu + birleşen çiftler.

## r10 — hook: "kullanıcılarımı sayıyorum ama kim olduklarını bilmiyorum, bilerek"
1. sorun: kaç okurum var bilmiyorum ama izleme scripti de istemiyorum.
2. bugün çerezsiz sayaç yazdım: 25 satır, ip yok, kimlik yok.
3. çünkü gizlilik sayfamda "takip yok" yazıyor ve o cümle bozulmaz.
4. sonuç: sayı bende, mahremiyet kullanıcıda, kvkk temiz.
ekran: gizlilik sayfası + admin ziyaret sekmesi.

## r11 — hook: "bu haftanın dünya gerginlik haritasını 0 liraya çıkarıyorum"
1. her olay skorlanıyor: -10 çatışma, +10 işbirliği.
2. haftalık serilerden z-score ile anormallik yakalıyorum.
3. çünkü "bu hafta bu hatta kırılma var" cümlesi ürünün kancası.
4. sonuç: bloomberg terminali değil, öğrenci + github actions.
ekran: "bu hafta hareketlenenler" radarı.

## r12 — hook: "aylık sunucu masrafım: 0 tl"
1. sorun: öğrenciyim, sunucu kirası yok.
2. mimari karar: statik site + actions cron + supabase free + hesaplama tarayıcıda.
3. çünkü ölçek bedava olsun istedim, kullanıcı arttıkça maliyet artmasın.
4. sonuç: sıfır lira, sınırsız okur.
ekran: mimari çizim.

## r13 — hook: "kırmızı test görürsem dünya haberlerini güncellemiyorum"
1. sorun: sistem ben uyurken çalışıyor, ben uyurken de bozulabilir.
2. bugün 9 testi pipeline'ın EN BAŞINA koydum.
3. çünkü bozuk kod taze veriye dokunmamalı; en kötü ihtimal 6 saat eski veri.
4. sonuç: kırmızı test = güncelleme iptal. veriyi disiplin koruyor.
ekran: actions yeşil akış.

## r14 — hook: "kullanıcıya 'hesabını sil' butonu koydum, kimse koymuyor"
1. sorun: kvkk silme hakkı çoğu sitede "bize mail atın"da bitiyor.
2. bugün tek tık silme ekledim: onay + rpc + cascade.
3. çünkü her aksiyonun tersi olmalı; kayıt olabilen, silebilmeli.
4. sonuç: mail fallback'li, gerçek in-app silme.
ekran: silme akışı.

## r15 — hook: "gece 3'te pipeline'ım çöktü"
1. sorun: gece 03:16 koşusu kırmızı; yeni eklediğim dosya motoru şaşırtmış.
2. sabah logu okudum, tek satır suçlu, düzelttim.
3. ama asıl iş: o hatayı bir daha imkansız kılan testleri yazdım.
4. sonuç: hata olur, tekrarı olmaz.
ekran: kırmızı koşu → yeşil koşu.

## r16 — hook: "tasarımım 10 kere reddedildi, 11.'de gazete çıktı"
1. sorun: küre süslü dursun istedim, hepsi ucuz göründü.
2. gazete çizgisine döndük: serif başlık, beyaz kağıt, tek lacivert.
3. çünkü desen economist'ten alınır, görünüm kopyalanmaz.
4. sonuç: stil yasası; o gün bugündür değişmedi.
ekran: manşet duvarı + küre.

## r17 — hook: "hangi ülke haber ağının merkezinde? pagerank'e sordum"
1. google'ın algoritmasını ülkelere uyguladım.
2. olaylardan ağ kurdum, sıralama + topluluklar çıktı.
3. çünkü "kim önemli" sorusuna his değil grafik cevap vermeli.
4. sonuç: yaptırım bloğu kendiliğinden belirdi.
ekran: ülke paneli "haber ağında".

## r18 — hook: "6 saatte bir dünyayı tarayan bir robotum var"
1. github actions cron: haber çek, motoru koştur, özetle, commit'le.
2. ben uyurken 4 koşu tamamlanıyor.
3. çünkü canlılık elle beslemeyle olmaz.
4. sonuç: sabah site benden güncel.
ekran: gece commit listesi.

## r19 — hook: "başkasının verisiyle ürün kuranın lisans okuması şart"
1. sorun: bir katmanın verisi non-commercial lisanslı çıktı.
2. bugün kayda yazdım: satış günü gelirse o katman çıkar ya da değişir.
3. çünkü hukuk sonradan hatırlanınca ürün gömer.
4. sonuç: bir satır not, sıfır gelecek riski.
ekran: kaynak/lisans tablosu.

## r20 — hook: "motorumun hata payını herkese açık yayınlıyorum"
1. sorun: motor bazen yanlış kodluyor, saklamak kolaydı.
2. kararım: kapsam %30, doğruluk ölçümleri, ml eşiği; hepsi açık.
3. çünkü ft/economist seviyesinin sırrı mükemmellik değil şeffaflık.
4. sonuç: güven, pazarlamadan daha hızlı birikiyor.
ekran: eval çıktısı / metodoloji.

# MIKRO REELS (tek bug / tek karar / tek sayı)

## r21 — hook: "sitem 'TÜRkiye' yazıyordu, utandım"
1. title-case kodu TÜRkiye üretti. 2. gösterim adlarını tek kayıt defterine taşıdım.
3. çünkü isim kodla üretilmez, kayıttan okunur. 4. bug sınıfı komple öldü.
ekran: bug görüntüsü + commit.

## r22 — hook: "saatlerce 'site güncellenmiyor' diye debug yaptım, site çoktan güncellenmişti"
1. custom domain cache'i eski sürümü gösteriyordu. 2. her deploy'a görünür sürüm etiketi koydum.
3. çünkü hangi sürümün canlıda olduğu tartışılmaz olmalı. 4. o debug seansı bir daha yaşanmadı.
ekran: footer v72.

## r23 — hook: "duvarım kolon gibi görünüyordu, sorun matematikti"
1. eşit genişlik blokları kolon illüzyonu yaratıyor. 2. 1-2 kolonluk değişken blok yaptım.
3. çünkü mozaik hissi kırılımdan gelir. 4. duvar canlandı.
ekran: önce/sonra.

## r24 — hook: "mac trackpad'i sayfa geçişimi deli ediyordu"
1. momentum kuyruğu yeni swipe sanılıyordu. 2. sönen delta = aynı jest kuralı ekledim.
3. çünkü niyet ile atalet ayrılmalı. 4. geçişler yumuşadı.
ekran: akıcı geçiş.

## r25 — hook: "retina'da %44 daha az piksel çiziyorum, kimse fark etmedi"
1. küre her pikseli çiziyordu. 2. pixel ratio'yu 1.5'e sabitledim.
3. çünkü göz farkı görmüyor, gpu görüyor. 4. kare hızı arttı.
ekran: fps önce/sonra.

## r26 — hook: "'russia backs plan' ile 'hit by russia' zıt anlam, aynı kelime"
1. pasif tespiti "backs plan by" tuzağına düşüyordu. 2. lookahead ekledim.
3. çünkü dil kural değil istisna yumağı. 4. iki başlık da doğru kodlanıyor.
ekran: iki kodlama.

## r27 — hook: "motorum kanada'yı suçladı, kanada masumdu"
1. cümledeki ilk ülke grubunu alıyordu. 2. fiile bitişik grubu seçtirdim.
3. çünkü özne fiilin yanındadır. 4. kanada aklandı.
ekran: ok animasyonu.

## r28 — hook: "washington'da görüşme yapıldıysa washington taraf değildir"
1. mekan adı taraf sanılıyordu. 2. between-grubu içi bağ kuralı ekledim.
3. çünkü "A ile B, C'de görüştü"de C seyirci. 4. mekanlar aklandı.
ekran: üçlü örnek.

## r29 — hook: "kremlin dedi = rusya dedi, bunu bilgisayara öğretmek zor"
1. metonimler kaçıyordu. 2. beijing/moscow/kremlin + lider sözlüğü ekledim.
3. çünkü basın ülke adıyla konuşmaz. 4. kapsam sıçradı.
ekran: gazetteer satırları.

## r30 — hook: "2006'dan kalma tek haber bütün radarımı bayatlatıyordu"
1. eski bir rss kaydı en üste çıkıyordu. 2. pencereyi veri saatine bağladım: en yeni olaydan
geriye 90 gün. 3. çünkü duvar saati yalan söyler, veri saati söylemez. 4. radar hep taze.
ekran: radar.

## r31 — hook: "aynı olayı 3 kaynak 3 farklı yönle yazdı, kim haklı?"
1. tekilleştirmede yön çelişiyordu. 2. çoğunluk oyu + eşitlikte en güvenilir makale.
3. çünkü kural belirsizse çıktı belirsiz. 4. 1266 ham olay 1128 temiz olaya indi.
ekran: index satırı.

## r32 — hook: "grafiğe sordum: dünya kaç kampa bölünmüş? 16 dedi"
1. toplulukları elle sayamazdım. 2. modülerlik algoritması koştum.
3. çünkü blokları veri bulmalı. 4. yaptırım bloğu kendiliğinden çıktı.
ekran: topluluk listesi.

## r33 — hook: "bu hafta hiç spike yok ve bunu göstermiyorum"
1. boş bölüm "site bozuk" okunur. 2. veri yoksa bölüm hiç yok kuralı.
3. çünkü boş kutu, boş vaattir. 4. arayüz hep dolu görünür.
ekran: radarlı/radarsız akış.

## r34 — hook: "mail listemden çıkmak için login isteyen siteden nefret ederim"
1. unsubscribe login istiyordu (tasarım hatam). 2. token'lı tek tık rpc yaptım.
3. çünkü ayrılmak kayıt olmaktan kolay olmalı. 4. tek tık, giriş yok.
ekran: mail alt linki.

## r35 — hook: "iki uygulamam aynı veritabanında ve birbirini göremiyorlar"
1. ikinci app aynı kasaya gelecekti, çakışma riski. 2. ortak taban + app önekli tablolar.
3. çünkü hiçbir drop komşuyu ezmemeli. 4. çok-app şema hazır.
ekran: şema diyagramı.

## r36 — hook: "api anahtarım github'da herkese açık ve bu hata değil"
1. "anahtar sızdı!" sanılır. 2. anon key tasarım gereği public; kilit rls'te.
3. çünkü güvenlik gizlilikten değil kurallardan gelir. 4. satır bazlı güvenlik her şeyi kapatıyor.
ekran: config + policy.

## r37 — hook: "excel bir saldırı yüzeyidir"
1. csv export'una =HYPERLINK enjekte edilebilir. 2. formül başlatan hücreleri tırnakladım.
3. çünkü admin'in excel'i de üründür. 4. formül enjeksiyonu kapandı.
ekran: kod satırı.

## r38 — hook: "github repom 'html projesi' görünüyordu, kimliğimi geri aldım"
1. üretilen sayfalar dili domine ediyordu. 2. linguist-generated işaretledim.
3. çünkü repo motoru anlatmalı, çıktıyı değil. 4. repo şimdi javascript.
ekran: dil çubuğu.

## r39 — hook: "supabase free projeni 7 gün unutursan uyur, benimki uyumuyor"
1. free tier hareketsizlikte duraklıyor. 2. 6 saatlik workflow'a ping bindirdim.
3. çünkü altyapı bakım istemeden yaşamalı. 4. proje hep uyanık.
ekran: workflow adımı.

## r40 — hook: "cron için sunucu mu kiralanır? bedava robotum var"
1. zamanlanmış işler için sunucu gerekirdi. 2. hepsi github actions'ta.
3. çünkü public repo'da actions bedava. 4. haber 6 saatte, veri haftalık, brifing pazartesi.
ekran: workflow listesi.

## r41 — hook: "sayfalar arası geçişim tek satır css ile sinema oldu"
1. sayfa geçişleri sert kesmeydi. 2. cross-document view transitions ekledim.
3. çünkü mpa, spa gibi hissettirebilir. 4. 0.28 saniye crossfade.
ekran: geçiş kaydı.

## r42 — hook: "açılışta 1.2 megabayt yüklüyordum, şimdi 30 kilobayt"
1. tüm katman verisi boot'ta iniyordu. 2. tembel yükleme: ilk tıkta o katman gelir.
3. çünkü kullanıcının %90'ı tek katman geziyor. 4. 40 kat küçülme.
ekran: network tab.

## r43 — hook: "modelimin çıktısını asla eğitim verisine geri koymuyorum"
1. birleştirme sonuçlarını eğitime katmak cazipti. 2. eğitim seti motor etiketli kaldı.
3. çünkü feedback döngüsü modeli kendi hatasıyla besler. 4. veri hattı temiz.
ekran: akış şeması.

## r44 — hook: "negatif test setim kirliydi, az kalsın yanlış eşik seçiyordum"
1. "farklı çift" sanılan örnekler aynı haberin iki çiftte görünmesiymiş. 2. operasyonel
negatif seti kurdum: aynı çift, farklı hikaye. 3. çünkü ölçüm yanlışsa karar yanlış.
4. eşik tablodan seçildi.
ekran: eval tablosu.

## r46 — hook: "landing'imdeki 240 parçalık manşet duvarını bugün çöpe attım"
1. sorun: ana sayfamın arka planı 240 bloklu gerçek manşet mozaiğiydi. havalı sanıyordum; göz yoruyordu ve ürünün ne yaptığını anlatmıyordu.
2. ne değiştirdim: duvarı ve tekerlek-kilitli sayfa geçişini tamamen sildim. yerine sakin beyaz bir sayfa: en üstte kanıtlı bir olgu + bu haftanın hareketleri, altında "nasıl çalışıyor" üç adım ve "söz değil, ölçüm" bloğu (%87 denetlenmiş doğruluk, 62 test).
3. çünkü başka projemin landing'ine bakıp duygulandım: o sayfa bir dünya kuruyordu, bu sayfa dekor gösteriyordu. motorun kendisi — LLM'siz, kaynaklı, ölçülmüş — sayfada hiç yoktu.
4. sonuç: dekor gitti, motor anlatılıyor; mobilde native kaydırma, daha hafif sayfa.
ekran: eski gürültülü duvar → yeni sakin sayfa, yan yana.

# CAROUSEL FIKIRLERI (1 slayt = 1 madde, ayni numarali anlatimla)

## c1 — "motorumun 5 aptal hatası" (attack drones / kanada masum / washington taraf değil /
TÜRkiye / ateşkes çöküşü pozitif)
## c2 — "0 liralık mimari, 6 slayt" (statik / actions / supabase free / istemci hesap /
tembel yükleme / cdn)
## c3 — "bir günde 8 faz" (11 tem sprinti, faz başına slayt)
## c4 — "kvkk'yı tasarım kısıtı yap" (çerezsiz sayaç / tek tık sil / tek tık unsub / açık metin)
## c5 — "yanlış birleştirme sanılan 5 doğru" (rafale, lng, drone, pipeline, kazakistan)
## c6 — "ürün = karar zinciri" (karar başına slayt)

# TEK POST FIKIRLERI (gorsel + kisa metin)

## tp1 — gece commit'leri: "ben uyurken 4 koşu"
## tp2 — eval tablosu: "eşiği his değil tablo seçti"
## tp3 — dil çubuğu: "html slopware'den javascript motoruna"
## tp4 — footer v72: "'bende çalışıyor' tartışması yok"
## tp5 — küre + radar: "poster küre, ürün radar"

# KRONOLOJIK KARAR ZINCIRI (hammadde — yeni gelistirmede buraya ANINDA madde eklenir)

## 10 tem — doğuş
1. arkadaşıma hediye 3d küre yazıyordum, amaç "kim kime silah satıyor"u göstermek.
2. ilk versiyon slopware hissi verdi: elle veri, 18k satırlık dosya, statik vitrin.
3. karar: uydurma veri asla. tasarımda gazete çizgisi (desen alınır, görünüm kopyalanmaz).

## 11 tem — "kimse buna para vermez"
4. karar: içerik motoru (kendi kendine tazelenen veri) + kişiselleştirme (hesap/takip/brifing).
5. bir günde 8 faz: gerçek dataset pipeline'ı, 13 katman, üyelik, mailler, unsubscribe.
6. supabase: rls + sıfır maliyet; kişisel akış istemcide.

## 12 tem — performans savaşı + temizlik
7. 240 forced reflow → 1 (yaz/oku/yaz fazları). 8. küre tembel kuruluma alındı.
9. 1.4mb ölü kod silindi. 10. 2.8mb bake html → 3kb kabuklar (%90 kesinti).

## 12-13 tem — motor
11. "api çekmicem, biz yapalım" → deterministik bilgi çıkarım motoru (gazetteer+cameo+goldstein).
12. kapsam %22.6 → %30.4 (conjunction, pasif çatı, lider→ülke). hassasiyet önce.
13. yanlış avı: attack drones, bloklanan anlaşma, çöken ateşkes. her düzeltme ayrı commit.
14. tekilleştirme (1266→1128) + haftalık seriler + pagerank + topluluklar + z-score spike.
15. motor ekrana: olay radarı (tembel, 30kb gzip), boş kutu asla.

## 13 tem — ml fazı + güven
16. özetleyici: 4500 başlık → 3265 satır, api'siz.
17. motor kendi eğitim verisini etiketliyor: 404 thread, 6 saatte büyüyor. model asla üretmez.
18. minilm ölçüldü (eşik 0.75, gerçek yanlış %0.35), birleştirme prod'da: 145 satır katlandı.
19. çerezsiz sayaç + gizlilik aynı gün. 20. in-app hesap silme. 21. 9 test pipeline'ın önünde.

## r46 — hook: "hata payımı ana sayfama yazdım, pazarlamacım ağlıyor"
1. sorun: motor tahminleri resmi veri gibi okunabilirdi. 2. bugün metodoloji sayfası açtım:
kapsam %30, doğruluk %87, ml eşiği ölçümle. 3. çünkü ft/economist güveni şeffaflıktan gelir.
4. sonuç: hata payı artık ürün özelliği.
ekran: metodoloji sayfası.

## r47 — hook: "kaynak sayfam elle yazılmıyor, yalan söyleyemiyor"
1. sorun: kaynak listeleri hep bayatlar. 2. veri sayfası artık veri dosyalarından otomatik
basılıyor: kaynak, yıl, lisans, güncelleme, bağ sayısı. 3. çünkü elle yazılan liste veriyle
çelişebilir, üretilen liste çelişemez. 4. sonuç: soyağacı sayfası hep taze.
ekran: veri.html.

## r48 — hook: "sitene gelen insan sana soru soramıyorsa kaybettin"
1. sorun: "iran israil'de ne oluyor" diye gelen biri küreyi gezmek zorundaydı, arama yoktu.
2. bugün akışa ülke araması, ülke dizinine canlı filtre ekledim.
3. çünkü cevap hızı ürünün ilk sözü; 3 tık, 1 kutuya indi.
4. sonuç: yaz, seç, akış o ülkeye süzülsün. × ile geri.
ekran: akışta "russia" yazıp süzme.

## r49 — hook: "siteme üye olan kişiye hâlâ 'hesap aç' diyordum"
1. sorun: üye olup takip kuran kullanıcı ana sayfada hâlâ 'hesap aç' görüyordu.
2. bugün hero, takipli kullanıcıda "akışın →"a dönüyor.
3. çünkü bunu sunucudan sormak ana sayfayı yavaşlatırdı; localStorage'a yazılan minik bir
   sayıyı okumak bedava. çıkışta ve hesap silmede temizlenir.
4. sonuç: ana sayfa seni tanıyor ama sunucu kim olduğunu bilmiyor.
ekran: iki hâlin yan yana kaydı.

## r50 — hook: "iki ülke yaz, aralarındaki her şeyi tek sayfada gör"
1. sorun: "iran-israil'de ne var" sorusunun tek adresi yoktu; küre + dizin + akış gezmek gerekiyordu.
2. bugün ilişki sayfasını kurdum: kayıtlı bağlar + olay radarı + haftalık ton çizgisi + tüm manşetler, tek URL.
3. çünkü kurumsal kullanıcının sorusu hep çift bazlı; cevabın adresi olmalı. ton çizgisi kütüphanesiz saf SVG.
4. sonuç: 126 çiftte hazır trend, ülke sayfalarından ↔ ile tek tık.
ekran: iliski.html?a=iran&b=israel açılışı.

## r51 — hook: "hocalarım 'güzel ama ne işe yarıyor' dedi, cevabım arama kutusu oldu"
1. sorun: küreyi ilk kez görenler (bilkent hocalarım dahil) ürünün ne sunduğunu çözemiyordu; bir bağa tıklayınca onlarca başlık kavise saçılıyordu, kaç haber var, içinde ne var belli değildi.
2. bugün küre kartlarına gerçek bir arama motoru yazdım: ekranda ilk 10 makale, sağ üstte "bu konuda N makale bulundu" ve kelimeyle arama kutusu.
3. çünkü hazır kütüphane taşımak istemedim; kendi motorum türkçe harf katlama (misir→mısır) + yazım hatası toleransı yapıyor — damerau-levenshtein mesafesiyle "yaptirin" yazsan da yaptırım'ı bulur, harf takasını tek hata sayar. 9 node testi 6 saatlik haber pipeline'ının önünde kapı.
4. sonuç: sayı ürünün derinliğini söylüyor, kutu istediğini buldurtuyor; kırmızı test varsa haber tazelenmesi bile durur.
ekran: rusya bağına tıkla, "yaptirin" yaz, doğru makalelerin süzülüşü.

## r52 — hook: "yüzde 87'yle övünüyordum, gerçek notum 0.39 çıktı"
1. sorun: motorumun doğruluğunu "%87" diye anlatıyordum. bir gece gerçek F1'i ölçtüm: 0.39. precision 0.53, recall 0.31.
2. neden: ben sadece GÖSTERDİĞİM okların doğruluğunu sayıyordum. motor emin olmadığını reddediyordu, o yüzden gösterdikleri temizdi — ama bir başlıktaki üç ilişkiden ikisini sessizce kaçırıyordu.
3. ne değiştirdim: kaçırılan başlıkları tek tek okuyup eksik fiilleri ekledim (ilişki onarmak, elçi göndermek, tireli ülke isimleri). kaçırılanların 7/10'u geri geldi.
4. sonuç: gösterilen doğruluk düşmedi, ok sayısı arttı. artık iki sayı da yayında: gösterilenin doğruluğu ayrı, kapsama ayrı.
ekran: workflow çıktısı "F1 0.39" büyük → sonra fiiller ekleniyor, kaçan oklar beliriyor.

## r53 — hook: "koca bir katmanın oklarını sildim, çünkü kavramsal olarak yanlıştı"
1. sorun: "nijerya kamerun'dan mültecilere ev sahipliği yapıyor" → motor "nijerya → kamerun girişim +3.2" çiziyordu. mülteci kabulünü karşı ülkeye eylem gibi gösteriyordum.
2. neden: bu bug değil kategori hatası. mülteci akışı ülkenin seçtiği ikili eylem değil, uluslararası hukukun konusu (1951 sözleşmesi, non-refoulement). bir IR akademisyeni yakaladı.
3. ne değiştirdim: göç katmanı artık YÖNLÜ OK üretmiyor, sadece kaynaklı liste. metodolojiden "yapısal veri" etiketini de çıkardım — aynı regex tahminiydi, öyle sunmak dürüstlük ihlaliydi.
4. sonuç: bir özelliği geliştirmek yerine kaldırdım. canım yandı ama doğrusu buydu.
ekran: göç katmanında oklar tek tek kayboluyor, yerine liste geliyor.

## r54 — hook: "haritamda NATO, BM, AB hiç yoktu — dünyayı ikiye sıkıştırmışım"
1. sorun: her okum iki ülke arasındaydı. "ABD ve müttefikleri yaptırım koydu" → NATO yok, BM yok, tek ikili oka iniyor ya da düşüyordu.
2. neden: iki sütunlu tablo (kaynak, hedef) yapması kolay olduğu için dünyayı iki sütuna sıkıştırmışım. en büyük aktörler haritada görünmüyordu.
3. ne değiştirdim: NATO, BM, AB, G7, ASEAN, OPEC artık first-class aktör. + metodolojiye "dünya ikili değil, biz ikili çiziyoruz" sınırını açıkça yazdım.
4. sonuç: önceden sıfır olan yerde 22 çok-taraflı ok. NATO→ukrayna, AB→çin, BM→kuzey kore.
ekran: küre önce ülke-ülke oklar → sonra NATO/BM düğümleri parlıyor.

## r55 — hook: "pazarlamam '%82 doğru' istedi, ben '%71-85' yazdım"
1. sorun: aynı motor, üç örneklemde üç sayı: %82.5, %71.2, %84.6. hangisini yazayım?
2. neden: doğruluk örnekleme bağlı — küçük örneklem iyimser, büyük gerçekçi. tek güzel sayı yazmak ölçümün gürültüsünü kesinlik gibi satmaktı. eski "%87, 15'te 13" ilk ciddi soruda çökerdi.
3. ne değiştirdim: siteye dürüst aralığı yazdım — "~%80-85, örnekleme bağlı, yükseliyor".
4. sonuç: pankart gibi değil özür gibi duruyor ama doğru. kullanıcı abartılı kesinliğin kokusunu alır ve o an bütün ürüne güvenini keser.
ekran: "%87" siliniyor, yerine "~%71-85" + "sample-dependent".

## r56 — hook: "google linkimi tıklayınca boş sayfa açıyordu, 7 tur uğraştım"
1. sorun: her haberin altında google news linki vardı ama tıklayınca boş sayfa. google kendi RSS linklerini şifreliyor, decode edilmesini blokluyor. kaynağım vardı, kullanıcı ulaşamıyordu.
2. neden: istihbarat ürününde kaynağa ulaşamamak deal-breaker. analist "reuters böyle demiş" diyemiyorsa küreme güvenip brief yazamaz.
3. ne değiştirdim: google'la savaşmayı bıraktım, etrafından dolaştım. (a) link artık `site:jpost.com "başlık"` aramasına gidiyor → tek tık gerçek makale. (b) "alıntıla" butonu → "reuters, başlık, tarih" panoya.
4. sonuç: alıntı için URL şart değil. gazetecinin işi bitiyor.
ekran: boş google sayfası → sonra site-search açılıyor, doğru makale.

## r57 — hook: "en sevdiğim şeyi ana sayfamdan attım"
1. sorun: açılışta ekranı dolduran dönen küre. gurur duyuyordum ama "bu benim işime ne yarıyor" cevabı hiçbir yerde yoktu.
2. neden: küre bir gösteriydi, ürün değil. en emek verdiğim şeyi sahneye koymuştum, en değerli şeyi (bu haftanın hareketleri) kullanıcının bulmasını bekliyordum. emeğimle değerimi karıştırmışım.
3. ne değiştirdim: hero'ya "bu hafta en çok hareketlenen çiftler" koydum — fransa↔rusya, iran↔abd — her satır tıklanır. küre ikinci sayfaya indi.
4. sonuç: değer ilk ekranda, 10 saniyede. batık maliyet tuzağına düşmedim.
ekran: dönen küre landing'den → yerine "bu hafta" listesi geliyor.

## r58 — hook: "motorum 'anlaşma imzaladılar'ı 'saldırı' sandı"
1. sorun: "strike a landmark deal", "strike 10 billion frigate deal" → motor 'strike' gördü, askeri saldırı g-9.2 kodladı. birden çok ticaret anlaşması haritada saldırı gibi görünüyordu.
2. neden: 'strike' hem 'saldırmak' hem 'anlaşma imzalamak'. araya sıfat girince (strike LANDMARK deal) basit filtre kaçırıyordu.
3. ne değiştirdim: daha geniş lookahead ile 'strike ... deal' kalıbını dışladım, gerçek saldırıları tuttum.
4. sonuç: ticaret anlaşmaları artık ok değil savaş sanılmıyor. test-extract.js'e pinledim.
ekran: "strikes landmark deal" başlığı, kırmızı saldırı oku → yeşil anlaşmaya dönüyor.

## r59 — hook: "US-Japan yazınca motorum SIFIR ülke buluyordu"
1. sorun: "US-Japan defense pact", "Russia-China drills", "India/Pakistan tension" → tireli/eğik çizgili ülke isimleri hiç tanınmıyordu, bağ tamamen gizleniyordu.
2. neden: aktör tanıyıcı "US-Japan"ı tek token sanıp hiçbir ülkeye eşleyemiyordu. en görünür ilişkiler kayboluyordu.
3. ne değiştirdim: tire/eğik çizgi bileşik aktörleri ayırdım — ama guinea-bissau gibi gerçek tireli isimler alias'la korunuyor, S-400 ürün kodu bozulmuyor.
4. sonuç: gizlenen gerçek bağlar geri geldi. recall pass'in en tatmin edici parçası.
ekran: "US-Japan" başlığı, 0 ok → sonra abd ve japonya ayrı beliriyor.
