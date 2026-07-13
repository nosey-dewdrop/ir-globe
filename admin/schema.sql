-- ir-globe schema for the SHARED damlahelloworld Supabase project.
-- Paste into Supabase SQL Editor and Run. Safe to re-run (if not exists / or replace).
-- Comments are ASCII only on purpose: fancy quotes / box chars broke the paste before.
--
-- Shared-project rule (13 Jul, Damla: many apps will share this one project):
--   profiles + handle_new_user + is_admin = SHARED BASE (one account across all apps).
--   ir-globe is the first auth app so it sets these up; later apps reuse, never redefine.
--   Every ir-globe table is irglobe_ prefixed so future generic tables never collide.
--   No drop table touches another app; profiles creation is additive.

-- shared base (all damlahelloworld apps share these)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'member',
  created_at timestamptz not null default now()
);
alter table profiles add column if not exists email text;
alter table profiles add column if not exists role text not null default 'member';
alter table profiles add column if not exists created_at timestamptz not null default now();

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

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

alter table profiles enable row level security;
drop policy if exists "own profile" on profiles;
drop policy if exists "admin profiles" on profiles;
create policy "own profile"   on profiles for select using (id = auth.uid() or public.is_admin());
create policy "admin profiles" on profiles for update using (public.is_admin()) with check (public.is_admin());

-- ir-globe specific (irglobe_ prefixed)
create table if not exists irglobe_layers (
  key text primary key, label text not null, ord int not null default 0
);
create table if not exists irglobe_connections (
  id uuid primary key default gen_random_uuid(),
  layer text not null references irglobe_layers(key) on delete cascade,
  s text not null, r text not null,
  note text not null default '', hidden boolean not null default false,
  source text not null default 'editorial', created_at timestamptz not null default now()
);
create index if not exists irglobe_connections_layer_idx on irglobe_connections(layer);

create table if not exists irglobe_follows (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('country','layer','pair')),
  key text not null, created_at timestamptz not null default now(),
  unique (user_id, kind, key)
);
create index if not exists irglobe_follows_user_idx on irglobe_follows(user_id);

create table if not exists irglobe_email_prefs (
  user_id uuid primary key references auth.users(id) on delete cascade,
  briefing boolean not null default true, alerts boolean not null default true,
  updated_at timestamptz not null default now()
);
alter table irglobe_email_prefs add column if not exists unsub_token uuid not null default gen_random_uuid();

create or replace function public.irglobe_email_unsubscribe(token uuid, what text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if what = 'briefing' then
    update irglobe_email_prefs set briefing = false, updated_at = now() where unsub_token = token;
  elsif what = 'alerts' then
    update irglobe_email_prefs set alerts = false, updated_at = now() where unsub_token = token;
  else return false;
  end if;
  return found;
end; $$;
grant execute on function public.irglobe_email_unsubscribe(uuid, text) to anon;

alter table irglobe_layers enable row level security;
alter table irglobe_connections enable row level security;
alter table irglobe_follows enable row level security;
alter table irglobe_email_prefs enable row level security;
drop policy if exists "layers read" on irglobe_layers;
drop policy if exists "conns read" on irglobe_connections;
drop policy if exists "layers write" on irglobe_layers;
drop policy if exists "conns write" on irglobe_connections;
create policy "layers read"  on irglobe_layers for select using (true);
create policy "conns read"   on irglobe_connections for select using (true);
create policy "layers write" on irglobe_layers for all using (public.is_admin()) with check (public.is_admin());
create policy "conns write"  on irglobe_connections for all using (public.is_admin()) with check (public.is_admin());
drop policy if exists "follows own" on irglobe_follows;
drop policy if exists "prefs own" on irglobe_email_prefs;
create policy "follows own" on irglobe_follows for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "prefs own"   on irglobe_email_prefs for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- seed the 12 layers (ascii labels; real labels come from data/layers/index.json in the app)
insert into irglobe_layers(key,label,ord) values
('silah','silah',0),('ticaret','ticaret',1),('enerji','enerji',2),
('tahil','tahil & gida',3),('ittifak','ittifaklar',4),('yaptirim','yaptirimlar',5),
('goc','goc & multeci',6),('borc','borc & kredi',7),('diplomasi','diplomasi',8),
('teknoloji','teknoloji & cip',9),('us','askeri usler',10),('yardim','dis yardim',11)
on conflict (key) do nothing;

-- OPTIONAL, do later: make Bera admin (skip for now; site works without it).
-- 1) Authentication > Users > Add user with Bera's email.
-- 2) update public.profiles set role = 'admin' where email = 'BERA_EMAIL';
