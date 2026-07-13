# devlog — kim kime ne satıyor? (ir-globe)

inşa sürecinin karar zinciri. format: ne yaptım → neden → altındaki karar.
her madde reels adayı; paketlenmiş halleri linkedin.md'de.

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
