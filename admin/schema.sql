-- ir-globe yönetim paneli — Supabase şeması
-- Supabase → SQL Editor'e yapıştır, çalıştır. Gerçek backend: veriler burada tutulur,
-- globe bunları okur, panel bunları yönetir. (localStorage YOK.)

-- kategoriler (katmanlar)
create table if not exists layers (
  key   text primary key,          -- ör. 'silah'
  label text not null,             -- ör. 'silah'
  ord   int  not null default 0    -- üstteki sıra
);

-- yönlü bağlantılar (her ok)
create table if not exists connections (
  id         uuid primary key default gen_random_uuid(),
  layer      text not null references layers(key) on delete cascade,
  s          text not null,        -- kaynak ülke (küçük harf)
  r          text not null,        -- hedef ülke (küçük harf)
  note       text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists connections_layer_idx on connections(layer);

-- bülten aboneleri (globe'daki "bültene katıl" kutusundan gelir)
create table if not exists subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz not null default now()
);

-- herkes okuyabilir (globe için), sadece giriş yapan yönetici yazabilir
alter table layers      enable row level security;
alter table connections enable row level security;
alter table subscribers enable row level security;

create policy "layers read"  on layers      for select using (true);
create policy "conns read"   on connections for select using (true);

create policy "layers write"  on layers      for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "conns write"   on connections for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ziyaretçi mail bırakabilir (insert), ama listeyi sadece yönetici görebilir/siler
create policy "subs join"   on subscribers for insert with check (true);
create policy "subs manage" on subscribers for select using (auth.role() = 'authenticated');
create policy "subs delete" on subscribers for delete using (auth.role() = 'authenticated');
