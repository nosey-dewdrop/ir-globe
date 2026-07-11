# ir-globe — PROJECT.md (living doc)

Working name: "kim kime ne satıyor?" (real name = Bera's call). Live: https://damlahelloworld.github.io/ir-globe/
A 3D editorial globe of country-to-country relations (12 layers, all real sourced data) with an
auto-refreshing news flow. Built by damlahelloworld for Bera (founder & editor). Future sessions:
READ THIS FILE INSTEAD OF THE CODE — it is kept accurate on purpose.

## Product direction (decided 2026-07-11 with Damla)

The site as a static showcase is not something people pay for. The goal is a REAL product with a
reason to pay, in two legs:
1. **Content engine** — connection data flows automatically from official datasets (weekly), news
   from Google News + curated feeds (6-hourly). Depth makes the site a reference on its own.
2. **Personalization** — accounts + follows (country/topic), a personal page as rich as the public
   feed, weekly personal e-mail briefing, alerts. FREE at first (audience first); the paywall line
   is drawn over the personal features later.

**Style law:** the current editorial style (Newsreader serif + Inter, white paper, sharp corners,
navy accent) is APPROVED by Damla and does not change without a better proposal she approves.
New pages copy PATTERNS from Economist/DW/NYT, translated into this style — never their look.

## Architecture

```
official APIs/datasets ──(scripts/sources/*, weekly Action)──► data/layers/*.json   (static, Pages)
Google News + curated RSS ──(scripts/fetch-news.js, 6h Action)► data/news/*.json    (static, Pages)
data/*.json ──(scripts/build-seo.js)──────────────────────────► konu/, ulke/, sitemap.xml
Supabase (separate free project) ─────────────────────────────► auth + profiles + follows + Bera's editorial overlay
GitHub Actions + Resend API ──────────────────────────────────► personal briefing + alert e-mails
```

Personal feeds are computed CLIENT-SIDE: the logged-in user's follows come from Supabase, the data
comes from the static JSON — no server compute, scale is free.

- Hosting: GitHub Pages (`.github/workflows/pages.yml`), no build step, vanilla JS + globe.gl CDN.
- News refresh: `.github/workflows/news.yml`, every 6 hours, commits `data/news/`.
- Supabase project: https://gwvlvqgpksinmstsevth.supabase.co (created 2026-07-11 by Damla;
  separate from the meyvetabagi shared project on purpose — this product may be handed to Bera).

## Data layout (since 2026-07-11 refactor)

| File | What | Written by |
|---|---|---|
| `data/countries.json` | country registry: key, iso3, coords, slug, disp, aliases (179 entries) | `scripts/build-countries.js` |
| `data/layers/index.json` | layer registry: key, label, blurb — ADDING A LAYER = new JSON + entry here, zero JS edits | `scripts/migrate-legacy.js` (later: fetch-data) |
| `data/layers/<key>.json` | one layer: source{name,url,year,license}, updated, ties[{s,r,exp?,imp?,note?}], shares? (silah only) | migrate (later: `scripts/sources/*`) |
| `data/news/<key>.json` | articles per connection: {"s→r":[{title,source,url,date}]} | `scripts/fetch-news.js` |
| `data/news/digest.json` | newest 30 headlines, deduped — landing digest reads this | `scripts/fetch-news.js` |
| `data/news/meta.json` | {updated, total, perLayer} — stats + freshness stamp read this | `scripts/fetch-news.js` |
| `data/meta.json` | {updated, ties, countries, layers} — stats + the countdown read this | migrate (later: fetch-data) |

Client loading: `js/store.js` = lazy fetch + cache. `js/main.js` boots with countries + layer index +
the default layer only; every other layer (and its news) loads on first click. Initial JS payload
dropped from ~1.2 MB to ~30-60 KB. Legacy `js/data.js`, `js/layers.js`, `js/articles.js` are no
longer loaded by any page — kept one release for rollback, then delete.

Country name rules: keys are lowercase english ("united states", "türkiye" is the one Turkish key);
display names and slugs come ONLY from the registry (fixes the old "TÜRkiye" title-case bug).

## Pipelines

- `scripts/build-countries.js` — regenerates the country registry from `data/countries.geojson` +
  hand-tuned coords. Rerun only if the geojson or alias/display rules change.
- `scripts/fetch-news.js` — Google News RSS per connection (silah 10/conn, others 7/conn), writes
  `data/news/`. ~347 connections ≈ 2 min + 6 s/conn politeness delay. No key needed.
- `scripts/build-seo.js` — regenerates `konu/` (12 layer pages), `ulke/` (~67 country pages),
  `sitemap.xml`, `robots.txt` from `data/`. Run after any data change.
- `scripts/migrate-legacy.js` — ONE-TIME converter (already run 2026-07-11); harmless to rerun,
  but the data/ files are the source of truth now.

## Roadmap (approved plan, 8 phases — plan file: ~/.claude/plans/merhaba-kanka-ir-globe-humble-haven.md)

1. ✅ Payload refactor (this doc's Data layout section) — 2026-07-11
2. Weekly data pipeline from official APIs (`scripts/fetch-data.js` + `scripts/sources/*` +
   `data.yml` weekly cron). Per-layer sources and modes — see KAYNAKLAR.md for recipes:
   auto = enerji (UN Comtrade, key), goc (UNHCR), yardim (OECD), diplomasi (embassies CSV),
   tahil (FAOSTAT bulk in runner); manual local = silah (SIPRI), ticaret+teknoloji (BACI),
   yaptirim (GSDB), borc (AidData); frozen one-time = ittifak (COW 2012), us (HKU 2020).
   Globe caps: default top ~50 arcs, "show all" ≤300. News: top ~60 connections per layer.
3. News source diversification (curated feeds: Al Jazeera, BBC, Guardian, DW, France24, UN News,
   Politico EU, FP — matched by country-pair aliases, deduped, `matchedBy` field).
4. Liveliness face: "son güncelleme" stamp at top of landing, days-to-next-update counter under
   the exit section (reads data/meta.json updated + 7d), akis.html chronological feed page with
   layer/country filters + today/yesterday grouping, Turkish dates everywhere, "new" markers.
5. New layers: kablo (TeleGeography submarine cables, undirected) + siber (EuRepoC attributed
   incidents). Water = SKIP (no clean directed dataset = fabrication risk). Space = deferred.
6. Accounts + follows + benim.html (personal twin of the feed page), uye.html onboarding
   ("neyi takip ediyorsun?"), Supabase overlay-mode hydrate (DB rows overlay static JSON, never
   replace), old newsletter form removed. KVKK text updated same session.
7. Personal weekly briefing + alerts via Resend free tier, sent from Actions with the Supabase
   service key. Unsubscribe link in every mail. Per-user max 1 alert mail/day.
8. Docs finalization (this file + CLAUDE.md + HANDOFF.md refresh).

Money ideas parked (not in scope yet): paywall over personal features once there's an audience,
premium depth (trends, CSV, API), embeddable globe widget, IR-department licences, PDF country
reports, Bera revenue split (Damla's call).

## Decisions log

- 2026-07-10: gift for Bera; signature travels; editorial design approved after much thrash.
- 2026-07-11: "nobody pays for it as-is" → personalization direction (see Product direction).
  Weekly data cadence + last-updated stamp + countdown counter = Damla's explicit asks.
  Separate Supabase project (not the shared one) — may be handed to Bera; keep-alive ping will
  ride the 6-hourly news workflow. Personal features launch FREE. Plans are written in Turkish now.
- 2026-07-11: payload refactor shipped; "TÜRkiye" display bug fixed via registry.

## Verification playbook

- After data changes: `node scripts/build-seo.js` must run clean; spot-check a konu/ and ulke/ page.
- After client changes: serve locally (`python3 -m http.server`), check the globe boots, layer
  buttons lazy-load (network tab: one layers/<k>.json + one news/<k>.json per first click),
  digest + stats render on the landing page.
- Data honesty: every layer JSON must carry non-empty source name+url+year; NEVER invent a tie.
- News counts: `node -e "..."` against data/news/meta.json (total ≈ 2200+).
