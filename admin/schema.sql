-- ir-globe — Supabase şeması (gerçek backend, localStorage YOK)
-- Supabase → SQL Editor'e yapıştır, Run. Tekrar çalıştırmak güvenlidir (if not exists / or replace).
-- Küre statik JSON'dan okur; buradaki connections SADECE Bera'nın editoryal bindirme katmanıdır
-- (not ezme / gizleme / editoryal ekleme). Üyeler takip (follows) + e-posta tercihleri tutar.

-- ── üye profilleri (herkes kayıt olabilir; rol admin/member) ──
create table if not exists profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text,
  role       text not null default 'member',   -- 'admin' (Bera) yazabilir; 'member' sadece okur
  created_at timestamptz not null default now()
);

-- yeni kullanıcı auth.users'a düştüğünde otomatik profil aç
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

-- "bu kullanıcı admin mi" — politikalarda kullanılır
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- ── kategoriler (katmanlar) ──
create table if not exists layers (
  key   text primary key,          -- ör. 'silah'
  label text not null,             -- ör. 'silah'
  ord   int  not null default 0
);

-- ── yönlü bağlantılar: Bera'nın EDİTORYAL BİNDİRME katmanı ──
-- statik JSON'daki bağın üstüne biner: aynı (layer,s,r) varsa notu ezer / hidden=true gizler;
-- statikte olmayan satır = editoryal ekleme.
create table if not exists connections (
  id         uuid primary key default gen_random_uuid(),
  layer      text not null references layers(key) on delete cascade,
  s          text not null,        -- kaynak ülke (küçük harf, data/countries.json key'i)
  r          text not null,        -- hedef ülke (küçük harf)
  note       text not null default '',
  hidden     boolean not null default false,      -- true = statik bağı küreden gizle
  source     text not null default 'editorial',   -- bindirme satırının kökeni
  created_at timestamptz not null default now()
);
create index if not exists connections_layer_idx on connections(layer);

-- ── takipler: kişisel akışın temeli (kind: 'country' | 'layer' | 'pair') ──
create table if not exists follows (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  kind       text not null check (kind in ('country', 'layer', 'pair')),
  key        text not null,        -- 'türkiye' | 'enerji' | 'russia→türkiye'
  created_at timestamptz not null default now(),
  unique (user_id, kind, key)
);
create index if not exists follows_user_idx on follows(user_id);

-- ── e-posta tercihleri (haftalık brifing + gelişme uyarıları) ──
create table if not exists email_prefs (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  briefing   boolean not null default true,
  alerts     boolean not null default true,
  updated_at timestamptz not null default now()
);

-- ── güvenlik (RLS) ──
alter table profiles    enable row level security;
alter table layers      enable row level security;
alter table connections enable row level security;
alter table follows     enable row level security;
alter table email_prefs enable row level security;

-- profil: kişi kendi profilini görür; admin hepsini görür
drop policy if exists "own profile" on profiles;
drop policy if exists "admin profiles" on profiles;
create policy "own profile"   on profiles for select using (id = auth.uid() or public.is_admin());
create policy "admin profiles" on profiles for update using (public.is_admin()) with check (public.is_admin());

-- layers / connections: küre için herkes okur, sadece admin (Bera) yazar
drop policy if exists "layers read" on layers;
drop policy if exists "conns read" on connections;
drop policy if exists "layers write" on layers;
drop policy if exists "conns write" on connections;
create policy "layers read"  on layers      for select using (true);
create policy "conns read"   on connections for select using (true);
create policy "layers write" on layers      for all using (public.is_admin()) with check (public.is_admin());
create policy "conns write"  on connections for all using (public.is_admin()) with check (public.is_admin());

-- takipler + e-posta tercihleri: herkes SADECE kendininkini görür/yönetir
drop policy if exists "follows own" on follows;
drop policy if exists "prefs own" on email_prefs;
create policy "follows own" on follows for all
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "prefs own" on email_prefs for all
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- eski bülten abone tablosu kalktı (üyelik + takip modeli geldi) — varsa temizle
drop table if exists subscribers;

-- ── Bera'yı admin yap ──
-- 1) Authentication → Users → "Add user" ile Bera'nın e-postasını ekle.
-- 2) Sonra buradan rolünü admin'e çek (e-postayı değiştir):
--    update public.profiles set role = 'admin' where email = 'bera@example.com';
