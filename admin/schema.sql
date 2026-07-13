-- ir-globe — Supabase şeması (ORTAK damlahelloworld projesi, gerçek backend, localStorage YOK)
-- Supabase → SQL Editor'e yapıştır, Run. Tekrar çalıştırmak güvenlidir (if not exists / or replace).
--
-- ORTAK PROJE KURALI (13 Tem, Damla: ileride birçok proje aynı kasaya bağlanacak):
--   • profiles + handle_new_user + is_admin = ORTAK TABAN (tek hesap tüm app'lerde). Bunları
--     ir-globe kuruyor çünkü ilk auth app'i o; sonraki app'ler bunları YENİDEN TANIMLAMAZ, kullanır.
--   • ir-globe'a özel her tablo `irglobe_` önekli (irglobe_layers/connections/follows/email_prefs)
--     ki gelecekteki app'lerin generic-isimli tablolarıyla (follows, subscribers...) ÇAKIŞMASIN.
--   • Başka app'in tablolarına DOKUNULMAZ; hiçbir `drop table` başka app'i ezmez.
--
-- Küre statik JSON'dan okur; irglobe_connections SADECE Bera'nın editoryal bindirme katmanıdır
-- (not ezme / gizleme / editoryal ekleme). Üyeler takip (irglobe_follows) + e-posta tercihleri tutar.

-- ══ ORTAK TABAN (tüm damlahelloworld app'leri paylaşır) ══

-- ── üye profilleri (herkes kayıt olabilir; rol admin/member) ──
create table if not exists profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text,
  role       text not null default 'member',   -- 'admin' (Bera) yazabilir; 'member' sadece okur
  created_at timestamptz not null default now()
);
-- additive: profiles başka bir app tarafından önceden açıldıysa eksik kolonları TAMAMLA (ezme yok)
alter table profiles add column if not exists email      text;
alter table profiles add column if not exists role       text not null default 'member';
alter table profiles add column if not exists created_at timestamptz not null default now();

-- yeni kullanıcı auth.users'a düştüğünde otomatik profil aç (ortak taban — app-agnostik)
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, email) values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users for each row execute function public.handle_new_user();

-- "bu kullanıcı admin mi" — politikalarda kullanılır (ortak taban)
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

alter table profiles enable row level security;
drop policy if exists "own profile" on profiles;
drop policy if exists "admin profiles" on profiles;
create policy "own profile"   on profiles for select using (id = auth.uid() or public.is_admin());
create policy "admin profiles" on profiles for update using (public.is_admin()) with check (public.is_admin());

-- ══ ir-globe'A ÖZEL (irglobe_ önekli — ortak projede çakışmasın) ══

-- ── kategoriler (katmanlar) ──
create table if not exists irglobe_layers (
  key   text primary key,          -- ör. 'silah'
  label text not null,             -- ör. 'silah'
  ord   int  not null default 0
);

-- ── yönlü bağlantılar: Bera'nın EDİTORYAL BİNDİRME katmanı ──
-- statik JSON'daki bağın üstüne biner: aynı (layer,s,r) varsa notu ezer / hidden=true gizler;
-- statikte olmayan satır = editoryal ekleme.
create table if not exists irglobe_connections (
  id         uuid primary key default gen_random_uuid(),
  layer      text not null references irglobe_layers(key) on delete cascade,
  s          text not null,        -- kaynak ülke (küçük harf, data/countries.json key'i)
  r          text not null,        -- hedef ülke (küçük harf)
  note       text not null default '',
  hidden     boolean not null default false,      -- true = statik bağı küreden gizle
  source     text not null default 'editorial',   -- bindirme satırının kökeni
  created_at timestamptz not null default now()
);
create index if not exists irglobe_connections_layer_idx on irglobe_connections(layer);

-- ── takipler: kişisel akışın temeli (kind: 'country' | 'layer' | 'pair') ──
create table if not exists irglobe_follows (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  kind       text not null check (kind in ('country', 'layer', 'pair')),
  key        text not null,        -- 'türkiye' | 'enerji' | 'russia→türkiye'
  created_at timestamptz not null default now(),
  unique (user_id, kind, key)
);
create index if not exists irglobe_follows_user_idx on irglobe_follows(user_id);

-- ── e-posta tercihleri (haftalık brifing + gelişme uyarıları) ──
create table if not exists irglobe_email_prefs (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  briefing   boolean not null default true,
  alerts     boolean not null default true,
  updated_at timestamptz not null default now()
);
-- e-postadaki TEK TIK kapatma linki için giriş istemeyen token
alter table irglobe_email_prefs add column if not exists unsub_token uuid not null default gen_random_uuid();

-- tek tık kapatma: token eşleşirse ilgili tercihi kapatır (login gerekmez)
create or replace function public.irglobe_email_unsubscribe(token uuid, what text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if what = 'briefing' then
    update irglobe_email_prefs set briefing = false, updated_at = now() where unsub_token = token;
  elsif what = 'alerts' then
    update irglobe_email_prefs set alerts = false, updated_at = now() where unsub_token = token;
  else
    return false;
  end if;
  return found;
end; $$;
grant execute on function public.irglobe_email_unsubscribe(uuid, text) to anon;

-- ── güvenlik (RLS) ──
alter table irglobe_layers      enable row level security;
alter table irglobe_connections enable row level security;
alter table irglobe_follows     enable row level security;
alter table irglobe_email_prefs enable row level security;

-- layers / connections: küre için herkes okur, sadece admin (Bera) yazar
drop policy if exists "layers read"  on irglobe_layers;
drop policy if exists "conns read"   on irglobe_connections;
drop policy if exists "layers write" on irglobe_layers;
drop policy if exists "conns write"  on irglobe_connections;
create policy "layers read"  on irglobe_layers      for select using (true);
create policy "conns read"   on irglobe_connections for select using (true);
create policy "layers write" on irglobe_layers      for all using (public.is_admin()) with check (public.is_admin());
create policy "conns write"  on irglobe_connections for all using (public.is_admin()) with check (public.is_admin());

-- takipler + e-posta tercihleri: herkes SADECE kendininkini görür/yönetir
drop policy if exists "follows own" on irglobe_follows;
drop policy if exists "prefs own"   on irglobe_email_prefs;
create policy "follows own" on irglobe_follows for all
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "prefs own" on irglobe_email_prefs for all
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ── Bera'yı admin yap ──
-- 1) Authentication → Users → "Add user" ile Bera'nın e-postasını ekle.
-- 2) Sonra buradan rolünü admin'e çek (e-postayı değiştir):
--    update public.profiles set role = 'admin' where email = 'bera@example.com';
