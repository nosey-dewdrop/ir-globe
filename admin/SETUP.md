# yönetim panosu — kurulum (5 dakika, tek seferlik)

Gerçek backend Supabase. Bağlamak için:

1. **Proje aç:** supabase.com → yeni proje (Frankfurt bölgesi iyi). Şifreyi bir yere kaydet.
2. **Şemayı çalıştır:** Supabase → SQL Editor → `schema.sql` içeriğini yapıştır → Run. (layers, connections, subscribers tabloları + güvenlik kuralları kurulur.)
3. **Anahtarları gir:** Project Settings → API. "Project URL" ve "anon public" key'i kopyala, `admin/config.js` içine yaz:
   ```js
   window.SUPABASE_URL  = "https://xxxx.supabase.co";
   window.SUPABASE_ANON = "eyJhbGci...";
   ```
4. **Yönetici ekle:** Authentication → Users → "Add user" → arkadaşının e-postası + bir şifre (email confirm kapalıysa direkt girer). Panele bununla giriş yapar.
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

## Not (globe'un Supabase'den okuması)
Şu an globe verisini `js/layers.js`'ten okuyor. Panel Supabase'e yazıyor. İkisini bağlamak (globe'un doğrudan Supabase'den okuması) bir sonraki adım — Damla/Claude bir fonksiyonla halleder. Şimdilik panel + abone toplama canlı; bağlantı senkronu istenince eklenir.
