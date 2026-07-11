# ir-globe — reels çekim metni (statikten dinamiğe)

Her aşama üç satır: **Sorun → Çözdüm → Şu yüzden.** Sağdaki not ekranda ne göstereceğin.

---

**1 — veriyi ayırdım**
- Sorun: Bütün veri kodun içine gömülüydü, site açılırken 1.5 MB'ı birden yüklüyordu, yavaştı.
- Çözdüm: Veriyi ayrı dosyalara çıkardım, site sadece o an lazım olanı çekiyor.
- Şu yüzden: Açılış 40 KB'a düştü, şıp diye açılıyor.
- _Ekran: sayfa hızlı açılışı + önce/sonra rakamı._

**2 — veriyi kaynağa bağladım**
- Sorun: 347 bağlantıyı elimle yazmıştım, güncellemek için yine elle uğraşmam gerekiyordu.
- Çözdüm: Bir robota BM, OECD, FAO gibi resmi kaynakları bağladım, her pazartesi kendisi çekiyor.
- Şu yüzden: 3.882 gerçek bağlantı oldu, ben hiç dokunmadan güncelleniyor.
- _Ekran: küredeki ok kalabalığı._

**3 — haberi çeşitlendirdim**
- Sorun: Haber tek kaynaktan (Google News) geliyordu, sınırlıydı.
- Çözdüm: BBC, Al Jazeera, Guardian, DW gibi kaynakları da bağladım.
- Şu yüzden: Haber 2.204'ten 3.796'ya çıktı, 6 saatte bir taze.

**4 — canlı olduğunu gösterttim**
- Sorun: Site canlıydı ama donmuş gibi duruyordu, güncellendiğini kullanıcı hissetmiyordu.
- Çözdüm: "Son güncelleme 3 saat önce" damgası, "sonraki güncellemeye N gün" sayacı, bir de akış sayfası koydum.
- Şu yüzden: Artık giren anında "bu site yaşıyor" diyor.
- _Ekran: damga + sayaç + akış sayfası._

**5 — yeni konu, sıfır emek**
- Sorun: Yeni konu eklemek bir sürü elle veri girmek demekti.
- Çözdüm: Denizaltı kabloları konusunu 695 kabloyu otomatik tarayarak ekledim.
- Şu yüzden: Sıfır elle veriyle yeni katman (Endonezya-Singapur arası 23 kablo geçiyor mesela).

**6 — herkese aynı sayfayı öldürdüm**
- Sorun: Herkes aynı sayfayı görüyordu, bu siteye kimse para vermezdi.
- Çözdüm: Üyelik ekledim — ülke/konu seç, akış sayfan sadece senin takiplerinle kurulsun.
- Şu yüzden: "Herkese aynı"dan "sana özel"e geçti, para verme sebebi doğdu.
- _Ekran: üye ol → onboarding → benim akışım._

**7 — site sana gelsin**
- Sorun: Site kullanıcıyı bekliyordu, geri gelme sebebi yoktu.
- Çözdüm: Haftalık kişisel brifing maili + takibinde gelişme olunca uyarı ekledim.
- Şu yüzden: Site artık seni bekleyen değil, sana gelen bir şey oldu.

**8 — mail sorunu**
- Sorun: Üye olunca mail onayı isteniyordu, insan anında giremiyordu; üstelik sistemin maili saatte 2 taneyle sınırlıydı, çoğu zaman hiç gitmiyordu.
- Çözdüm: Onay zorunluluğunu kapattım, kayıt anında oturum açacak şekilde ayarladım.
- Şu yüzden: "Üye ol → anında akışını kur" pürüzsüz oldu. (Lansmanda onayı geri açıp maili gerçek servise bağlayacağız, limit kalkacak.)
- _Ekran: üye ol → anında giriş._

**Kapanış**
- Sorun: Bunların hepsi normalde pahalı bir sunucu ister.
- Çözdüm: Hiç sunucu kullanmadan, GitHub'ın ücretsiz araçlarıyla kurdum.
- Şu yüzden: Sıfır hosting parasıyla dinamik bir ürün — bir günde.
- _Ekran: istatistikler (3.796 / 3.882 / 198 / 13)._
