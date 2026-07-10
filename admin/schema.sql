-- ir-globe — Supabase şeması (gerçek backend, localStorage YOK)
-- Supabase → SQL Editor'e yapıştır, Run. Küre bunları okur, panel yönetir, üyeler giriş yapar.

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

-- ── yönlü bağlantılar (her ok) ──
create table if not exists connections (
  id         uuid primary key default gen_random_uuid(),
  layer      text not null references layers(key) on delete cascade,
  s          text not null,        -- kaynak ülke (küçük harf)
  r          text not null,        -- hedef ülke (küçük harf)
  note       text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists connections_layer_idx on connections(layer);

-- ── bülten aboneleri ──
create table if not exists subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz not null default now()
);

-- ── güvenlik (RLS): herkes okur, SADECE admin yazar ──
alter table profiles    enable row level security;
alter table layers      enable row level security;
alter table connections enable row level security;
alter table subscribers enable row level security;

-- profil: kişi kendi profilini görür; admin hepsini görür
create policy "own profile"   on profiles for select using (id = auth.uid() or public.is_admin());
create policy "admin profiles" on profiles for update using (public.is_admin()) with check (public.is_admin());

-- layers / connections: küre için herkes okur, sadece admin (Bera) yazar
create policy "layers read"  on layers      for select using (true);
create policy "conns read"   on connections for select using (true);
create policy "layers write" on layers      for all using (public.is_admin()) with check (public.is_admin());
create policy "conns write"  on connections for all using (public.is_admin()) with check (public.is_admin());

-- aboneler: ziyaretçi mail bırakır (insert), listeyi sadece admin görür/siler
create policy "subs join"   on subscribers for insert with check (true);
create policy "subs manage" on subscribers for select using (public.is_admin());
create policy "subs delete" on subscribers for delete using (public.is_admin());

-- ── Bera'yı admin yap ──
-- 1) Authentication → Users → "Add user" ile Bera'nın e-postasını ekle.
-- 2) Sonra buradan rolünü admin'e çek (e-postayı değiştir):
--    update public.profiles set role = 'admin' where email = 'bera@example.com';
