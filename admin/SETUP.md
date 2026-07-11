# yönetim panosu — kurulum (5 dakika, tek seferlik)

Gerçek backend Supabase. Bağlamak için:

1. **Proje aç:** supabase.com → yeni proje (Frankfurt bölgesi iyi). Şifreyi bir yere kaydet.
2. **Şemayı çalıştır:** Supabase → SQL Editor → `schema.sql` içeriğini yapıştır → Run. (layers, connections, subscribers tabloları + güvenlik kuralları kurulur.)
3. **Anahtarları gir:** Project Settings → API. "Project URL" ve "anon public" key'i kopyala, `admin/config.js` içine yaz:
   ```js
   window.SUPABASE_URL  = "https://xxxx.supabase.co";
   window.SUPABASE_ANON = "eyJhbGci...";
   ```
4. **Bera'yı yönetici yap:** Authentication → Users → "Add user" → Bera'nın e-postası + bir şifre (email confirm kapalıysa direkt girer). Sonra SQL Editor'de rolünü admin'e çek:
   ```sql
   update public.profiles set role = 'admin' where email = 'bera@example.com';
   ```
   Artık SADECE Bera bağlantı/kategori yazabilir; sıradan üyeler yalnızca okur. Üyelik `uye.html`'den herkese açık (kayıt/giriş), üyeler otomatik bülten listesine düşer.
5. **İlk kategorileri ekle** (opsiyonel, panelden de yapılır): SQL Editor'de mevcut 12 katmanı seed'lemek için:
   ```sql
   insert into layers(key,label,ord) values
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
- `GET {SUPABASE_URL}/rest/v1/layers?select=key,label,ord&order=ord` → katman menüsü
- `GET {SUPABASE_URL}/rest/v1/connections?select=layer,s,r,note` → oklar
- Header: `apikey: <anon>` + `Authorization: Bearer <anon>`. RLS'de "herkes okur" olduğu için anon key yeter.
- **silah** katmanı istisna: yüzdeleriyle birlikte SIPRI verisinde (`js/data.js`) kalır, DB'yi ezmez.
- **Config boşsa** küre eskisi gibi `js/layers.js` + SIPRI ile statik çalışır (hiçbir şey bozulmaz).
- Bir bağlantının ülkeleri küre koordinat listesinde (`js/data.js`) yoksa o ok sessizce atlanır
  (konsola uyarı düşer) — Bera ülke adını küçük harf ve mevcut anahtarla girmeli.
