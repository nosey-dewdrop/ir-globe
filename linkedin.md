# linkedin yazı malzemesi — kim kime ne satıyor? (ir-globe)

linkedin = yazı. her giriş bir post taslağı: bizim 1-2-3-4 formatı (ne yaptım → neden →
hangi karar). taslaklar damla'nın elinden geçer, ton onun. hepsi gerçek, kanıtı repo'da.
reels malzemesi instagram.md'de.

---

## p1 — hediyeden ürüne
1. arkadaşım uluslararası ilişkiler okuyor; ona hediye olarak "kim kime silah satıyor"u
   gösteren bir 3d küre yazdım.
2. ilk versiyon bana slopware hissi verdi: elle girilmiş veri, tek dev dosya, statik vitrin.
3. o yüzden tek bir kural koydum: uydurma veri asla. her bağlantı ya gerçek bir veri setine
   dayanacak ya da hiç olmayacak.
4. bugün: 13 katman, 198 ülke, unhcr/oecd/faostat gibi kaynaklardan haftalık otomatik veri,
   6 saatte bir kendini yenileyen haber akışı. hâlâ tek kişiyim, aylık maliyet sıfıra yakın.
kapanış: hediye diye başlayan şey ürün oldu çünkü ilk versiyonu beğenmedim ve durmadım.

## p2 — llm çağında llm'siz motor
1. haber başlığından "kim kime ne yaptı"yı çıkarmam gerekiyordu; kolay yol bir llm api'sine
   para vermekti.
2. yapabiliyorsak kendimiz yapalım dedim: aktör tanıma + olay kodlama (cameo) + skorlama,
   yüzde yüz deterministik bir bilgi çıkarım motoru yazdım. api yok, maliyet sıfır.
3. ilk kapsam %22'ydi; pasif çatı, bağlaç grupları, lider→ülke eşlemesi derken %30'a çıktı.
   kuralım: kapsam yavaş büyür, yanlış kodlama güveni hızlı öldürür.
4. hata payını da saklamıyorum: örneklem doğruluğu ölçülü ve açık.
kapanış: ai kullanmak marifet değil; neyi kendin yazacağını bilmek marifet.

## p3 — yapay zekam kendi kodumun hatasını buldu
1. özetleyicime öğrenen bir eşleyici ekledim; eğitim verisini kim etiketledi? kendi motorum.
   ilk gün 404 örnek, her 6 saatte otomatik büyüyor.
2. encoder'ı kendi verimde ölçtüm: seçtiğim eşikte yanlış birleştirme %0.35.
3. asıl sürpriz: "yanlış" görünen birleştirmelerin çoğu aslında motorun aynı hikayeyi ikiye
   bölmesiydi. ml, klasik motorun hatasını onarıyor.
4. tek yeminim var: model asla cümle üretmeyecek. sadece gerçek başlıkları seçer ve gruplar.
kapanış: ölçmeden eşik seçseydim bunların hiçbirini görmeyecektim.

## p4 — sitem yavaştı, suçlu bendim
1. landing "aşırı yavaş"tı ve nedenini bilmiyordum.
2. profiler açtım: layout kodum 240 kez forced reflow tetikliyormuş. okuma ve yazmayı
   ayırdım, 240 → 1.
3. sonra 500kb'lık webgl küreyi açılıştan çıkarıp ilk kullanıcı niyetine erteledim.
4. en zoru: 18 bin satırlık eski dosyayı silmek. 1.4mb ölü kod gitti.
kapanış: performans his işi değil ölçüm işi; profiler açmadan dokunma.

## p5 — kullanıcıyı izlemeden saymak
1. kaç okurum var bilmek istedim ama takip sistemi kurmak istemedim.
2. çerezsiz, birinci taraf bir sayaç yazdım: ip yok, kimlik yok, tarayıcı parmak izi yok.
3. "günün ilk ziyareti" bilgisi kullanıcının cihazında duruyor; bana sadece anonim bir
   sayı geliyor.
4. gizlilik sayfasına aynı gün, açık türkçeyle yazdım. kvkk bir yük değil, tasarım kısıtı.
kapanış: analytics ile mahremiyet arasında seçim yapmak zorunda değilsin, mühendislik burada.

## p6 — kırmızı test, veri güncellemesini durdurur
1. sistemim 6 saatte bir dünya haberlerini çekip işliyor, ben uyurken de.
2. bir gece pipeline çöktü: yeni eklediğim dosya motoru şaşırtmış. logu okudum, tek satır.
3. düzeltmekle kalmadım: o hatayı bir daha imkansız kılan testler yazdım ve pipeline'ın
   EN BAŞINA koydum. test kırmızıysa güncelleme yok.
4. üretim verisini koruyan şey umut değil disiplin.
kapanış: otomasyonun bedeli, otomasyonu koruyacak testleri de yazmak.

## p7 — 2.8 megabayt html'i sildim
1. seo için 211 sayfa statik html bake ediyordum; repo "html projesi" gibi görünüyordu.
2. hepsini ~3kb'lık ince kabuklara indirdim: başlık ve meta statik kaldı (google mutlu),
   gövde canlı veriden çiziliyor (kullanıcı mutlu).
3. %90 küçülme, sıfır sıralama kaybı.
4. karar basitti: aynı veriyi iki yerde tutma; tek kaynak, iki tüketici.
kapanış: seo ile modern mimari düşman değil, tembellik düşman.

## p8 — lisans okuyan mühendis
1. ürünüm başkalarının açık verisi üstünde duruyor; hepsi kaynaklı.
2. bir katmanın lisansı non-commercial çıktı. çoğu kişi görmezden gelir.
3. ben kayda yazdım: satış günü gelirse o katman ürün dışı kalır ya da yenisiyle değişir.
4. hukuk sonradan hatırlanınca ürün gömer; baştan okununca sadece bir satır nottur.
kapanış: gerçek ürün ile demo arasındaki fark özelliklerde değil, bu satırlarda.

## p9 — bir haftada nelere karar verdim (seri: karar günlüğü)
1. statik vitrine kimse para vermez → kişiselleştirme: hesap, takip, haftalık kişisel brifing.
2. api'ye para vermek yerine kendi motorunu yaz → yazdım, çalışıyor, ölçülü.
3. kullanıcı verisi toplamaya başladığın an gizlilik + silme hakkı aynı gün gelir → geldi:
   tek tık hesap silme, tek tık unsubscribe.
4. her deploy'da görünür sürüm etiketi, her 6 saatte testli pipeline.
kapanış: ürün, verilen kararların toplamıdır; kod sadece kararların kanıtı.
