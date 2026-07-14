# yönetim panosu — kurulum (5 dakika, tek seferlik)

Gerçek backend Supabase — **ORTAK nosey-dewdrop projesi** (ir-globe'a ayrı proje AÇMA;
ileride tüm auth'lı app'ler aynı kasayı paylaşacak). Bağlamak için:

1. **Proje HAZIR:** ortak proje `https://xjtmqncfhuidctxgthhv.supabase.co`. Yeni proje açma.
2. **Şemayı çalıştır:** Supabase → SQL Editor → `schema.sql` içeriğini yapıştır → Run. Ortak taban
   (`profiles` + kayıt trigger'ı + `is_admin`) + ir-globe'a özel `irglobe_layers` /
   `irglobe_connections` / `irglobe_follows` / `irglobe_email_prefs` tabloları + güvenlik kuralları
   kurulur. ir-globe ilk auth app'i olduğu için ortak tabanı O kuruyor; sonraki app'ler yeniden
   tanımlamaz, kullanır. Şema hiçbir başka app'in tablosunu ezmez (irglobe_ öneki + additive).
3. **Anahtarlar GİRİLİ:** `admin/config.js` ortak projenin URL + anon key'iyle zaten dolu — dokunma.
4. **Bera'yı yönetici yap:** Authentication → Users → "Add user" → Bera'nın e-postası + bir şifre (email confirm kapalıysa direkt girer). Sonra SQL Editor'de rolünü admin'e çek:
   ```sql
   update public.profiles set role = 'admin' where email = 'bera@example.com';
   ```
   Artık SADECE Bera bağlantı/kategori yazabilir; sıradan üyeler yalnızca okur. Üyelik `uye.html`'den herkese açık (kayıt/giriş), üyeler otomatik bülten listesine düşer.
5. **İlk kategorileri ekle** (opsiyonel, panelden de yapılır): SQL Editor'de mevcut 12 katmanı seed'lemek için:
   ```sql
   insert into irglobe_layers(key,label,ord) values
   ('silah','silah',0),('ticaret','ticaret',1),('enerji','enerji',2),
   ('tahil','tahıl & gıda',3),('ittifak','ittifaklar',4),('yaptirim','yaptırımlar',5),
   ('goc','göç & mülteci',6),('borc','borç & kredi',7),('diplomasi','diplomasi',8),
   ('teknoloji','teknoloji & çip',9),('us','askeri üsler',10),('yardim','dış yardım',11)
   on conflict (key) do nothing;
   ```

## Panel
- Adres: `<site>/admin/` → giriş → bağlantılar / kategoriler / aboneler.
- **Bağlantılar:** yeni ok ekle (kaynak → hedef + not), sil.
- **Kategoriler:** katman ekle/sil, sıra ver.
- **Aboneler:** globe'daki "bültene katıl" kutusundan gelen mailler; CSV indir, bültenini onlara at.

## Globe artık Supabase'den okuyor ✅
Bağlandı: `admin/config.js` doldurulur dolmaz küre, bağlantıları **doğrudan Supabase'den** okur
(`js/main.js` → `hydrateFromSupabase()`). Bera panelden bir ok ekler/siler → sayfa yenilenince küreye
yansır, kod/deploy gerekmez.

Nasıl çalışıyor (kullanılan API = Supabase REST / PostgREST):
- `GET {SUPABASE_URL}/rest/v1/irglobe_layers?select=key,label,ord&order=ord` → katman menüsü
- `GET {SUPABASE_URL}/rest/v1/irglobe_connections?select=layer,s,r,note` → oklar
- Header: `apikey: <anon>` + `Authorization: Bearer <anon>`. RLS'de "herkes okur" olduğu için anon key yeter.
- **silah** katmanı istisna: yüzdeleriyle birlikte SIPRI verisinde (`js/data.js`) kalır, DB'yi ezmez.
- **Config boşsa** küre eskisi gibi `js/layers.js` + SIPRI ile statik çalışır (hiçbir şey bozulmaz).
- Bir bağlantının ülkeleri küre koordinat listesinde (`js/data.js`) yoksa o ok sessizce atlanır
  (konsola uyarı düşer) — Bera ülke adını küçük harf ve mevcut anahtarla girmeli.
