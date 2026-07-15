# ir-globe — PROJECT.md (living doc)

Working name: "kim kime ne satıyor?" (real name = Bera's call). Live: https://ir-globe.noseydewdrop.com (dev: nosey-dewdrop.github.io/ir-globe/)
A 3D editorial globe of country-to-country relations (12 layers, all real sourced data) with an
auto-refreshing news flow. Built by nosey-dewdrop for Bera (founder & editor). Future sessions:
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
- `scripts/extract-relations.js` — **relation-extraction engine** (started 2026-07-12). Reads every
  headline in `data/news/*.json` and DERIVES a directed, event-coded, Goldstein-scored tie FROM THE
  TEXT (not from which RSS query fetched it). 100% deterministic, no API, no network — Damla's call.
  Writes `data/events/<layer>.json`. Run: `node scripts/extract-relations.js [--report]`.
  Engine libs in `scripts/lib/extract/`: `gazetteer.js` (actor NER: country aliases + curated
  demonyms + leader→country), `cameo.js` (CAMEO event coding + Goldstein −10..+10 conflict/coop
  weights, same scheme as GDELT/TABARI), `relate.js` (fuse actors+event → directed tie, negation
  filter, subject-before-verb direction, self-scored confidence, keep ≥0.8).
  Coverage 2026-07-12: 3181 unique headlines → 789 confident ties (24.8%), 220 conflict / 569 coop.
  NEXT: expand verb dict for recall; conjunction handling ("X and Y" as co-targets); then graph
  analytics (centrality/community/spike) over the event store; then extractive per-cluster summaries
  (also API-less — cluster + representative-sentence pick, NOT LLM).
- `scripts/build-ozet.js` — API-less extractive summarizer (`data/news/ozet.json` + `threads.json`
  sidecar). Since 2026-07-13 it ALSO accumulates `data/ml/train.jsonl`: every multi-source thread
  (member titles + chosen representative + how it was keyed) as self-supervised training data for
  the **ML summarizer phase** (plan: ~/.claude/plans/ir-globe-ml-ozetleyici.md — learned extractive
  matching/ranking, never generative; engine-keyed threads are zero-overlap paraphrase positives).
  Deduped by member-set hash, grows every 6h run, committed by news.yml.
- `js/sayac.js` + `irglobe_hits`/`irglobe_hit` (schema.sql) — **cookieless first-party counter**
  (2026-07-13). Every page fires one anonymous RPC (path + daily-unique boolean from a device-local
  flag; no IP/UA/cookie stored, localhost skipped). Read is admin-only (RLS `is_admin()`); admin
  panel "ziyaret" tab shows last-14-days views/uniques + top pages. gizlilik.html discloses it.
  NEEDS: rerun admin/schema.sql in the shared Supabase (idempotent) or hits 404 silently — site
  unaffected either way.
- `scripts/test-motor.js` — persisted node tests (Motor render helpers + Ilgi interest model,
  9 checks incl. XSS + empty-state + stale-window). Runs FIRST in news.yml; red test blocks refresh.
- `scripts/ml/` — **ML summarizer step 2 (2026-07-13 night)**: `eval-encoder.js` measures
  all-MiniLM-L6-v2 (via @xenova/transformers, local ONNX, no API) against the engine-labeled corpus:
  positives median cosine 0.69 vs hard negatives 0.29; at threshold 0.75 diff-pair false-merge is
  0.35% and the same-pair "false" hits are mostly ENGINE fragmentation (same story coded under two
  cameo roots) — i.e. correct merges. `merge-ozet.js` applies that: within one layer+pair, story
  lines whose titles score ≥0.75 fold together (rep = biggest/newest thread, shape unchanged,
  threads.json rebuilt, train.jsonl NEVER touched — no feedback loop). First real run: 3265 → 3125
  lines, 140 folded, multi-source stories 387 → 442. Runs in news.yml after build-ozet with npm ci
  + cached model; exits 0 (classical summary ships) if the encoder is unavailable. Pure render helpers
  (`radarTie`/`radarCountry`/`akisRadar`), no fetch, node-tested, esc'd/XSS-safe, null-safe
  (returns "" when a pair is uncoded or a file is missing → no empty box). Consumers each load the
  two engine files themselves: globe (`js/main.js`) lazy-loads `events/index.json`+`graph.json` on
  the FIRST tie/country selection only (no boot cost; index 401 KB → 30 KB gzip) and shows an "olay
  radarı" (tie → last coded events + this-week spike; country → PageRank rank/partners/tone/recent
  events); `akis.js` renders this-week spikes as a radar callout; `dizin.js` ulke view adds a "haber
  ağında" section. Country keys match the globe registry 119/119 (verified). NOT built: "×N kaynak"
  badges from `ozet.json` (137 KB gzip for ~13% multi-source coverage — would need a small title→n
  build artifact first; deferred as a bad trade).

## Last session (2026-07-15 gece, v120)

Juri turlari (motor %64->%87 audited, 62 CI testi) sonra 8 turlu MUSTERI DONGUSU: her tur gercek
musteri (analist/gazeteci/IR ogr/vatandas) gercek gorev deniyor, en yuksek etkili UX/deger duzeltmesi
uygulaniyor. ~38 degisiklik. **Yapilanlar:** olaylar artik kaynak URL tasiyor (build-event-index title/
url/pub); pair sayfasi gercek-baslik highlights + tarihli tirmanma ozeti + tam EN (js/i18n.js: 57 olay
+ katman + UI ceviri, ?lang=en, TR/EN toggle); ulke sayfasi "son gelismeler" (tarihli kaynakli) + SEO
BAKE (ilk boya dolu); landing value-first ("bu hafta hareketlenenler" + carpici gercek) + iki-ulke
arama; alinti-kopyala butonu; kaynak-turu rozetleri; tazelik gruplari; 404 TR-slug redirect; sosyal-
repost filtresi; SIPRI birim/yil inline; CSV export (pair+ulke); yayinci-site linkleri.

**Gelir yonu (Damla "para kazanan CRUD" istedi):** kisisel bulten gercek ALGORITMA (onem skoru:
tazelik+goldstein+guven+spike), alarm esik-farkinda (|g|>=6, %18 selektif) — scripts/lib/mail.js +
send-alerts.js. NOT: bu paywall pivotuyla celisiyor (para hedefi YOK karari, 13 Tem).

**Damla karar bekleyen (rapor bolum 0/3/4/4.5):** fiyat/paket+Resend (paywall celiskisi), tam /en
site (landing+akis hala TR), hero/his son rotuslar, mimari (regex tavani ~%87 -> hibrit? IO aktorler
eklendi). Gotcha: Google News URL DECODE EDILEMEZ (Google blokluyor) -> site-search+cite ile bypass.

## Roadmap status (approved 8-phase plan — plan file: ~/.claude/plans/merhaba-kanka-ir-globe-humble-haven.md)

1. ✅ Payload refactor (Data layout section above) — 2026-07-11
2. ✅ (core) Weekly data pipeline — `scripts/fetch-data.js` + `scripts/sources/{goc,yardim,diplomasi,tahil,kablo}.js`,
   `data.yml` weekly cron (monday 03:00 UTC). LIVE with real data 2026-07-11:
   goc 297 ties (UNHCR 2025), yardim 1193 (OECD 2024), diplomasi 686 (Wikidata),
   tahil 900 (FAOSTAT 2024), kablo 527 (TeleGeography). Totals: 13 layers, 3882 ties,
   198 countries, ~3800 articles. Globe caps: default top 50 arcs, "tümünü göster" ≤300.
   News: top 60 connections/layer (silah uncapped). STILL OPEN in phase 2:
   - enerji: needs free UN Comtrade key → Damla registers at comtradeplus.un.org, adds
     `COMTRADE_KEY` repo secret, then `scripts/sources/enerji.js` gets written.
   - manual converters (silah SIPRI update, ticaret+teknoloji BACI, yaptirim GSDB,
     borc AidData): each needs a locally downloaded file; current curated ties stay
     until then (they are real, just thin). ittifak stays curated on purpose
     (COW dataset is frozen at 2012 — our 2026 curated set is BETTER).
3. ✅ News diversification — `scripts/lib/feeds.js` (Al Jazeera, BBC, Guardian, DW,
   France24, UN News, Politico EU, FP), country-pair + topic matching, URL/title dedupe,
   feed items carry `via:"feed"`. Google News stays primary.
4. ✅ Liveliness — "son güncelleme" stamp (landing top), weekly countdown (under exit
   section, data/meta.json updated+7d), akis.html feed (day groups, layer filters,
   chunked "daha eskiyi göster"), Turkish dates everywhere (TRDate in js/store.js),
   "yeni" markers on today's items.
5. ✅ kablo layer live (527 corridors; CC BY-NC-SA — revisit license if a paid tier
   ever covers this layer). siber DEFERRED: EuRepoC has no open endpoint (API key by
   request); revisit. Water = SKIP (fabrication risk). Space = deferred.
6. ✅ (code) Accounts + personalization — js/takip.js (follows+prefs), uye.html
   onboarding ("neyi takip ediyorsun?" chips), benim.html personal feed (follows-filtered,
   day-grouped, follow management, email pref toggles), password reset flow in js/auth.js,
   overlay-mode hydrate in js/main.js (OVERLAY applied per lazily-loaded layer), admin
   panel reworked (editorial overlay semantics, hidden toggle, members tab, layer seeding).
   Old newsletter form + js/subscribe.js REMOVED. gizlilik.html covers follows + emails.
   WAITING ON DAMLA: run admin/schema.sql in Supabase SQL Editor (v2 idempotent).
7. ✅ (code) Emails — scripts/send-briefing.js (weekly cron briefing.yml, monday 06:00),
   scripts/send-alerts.js (rides news.yml, real send only at the 18:00 UTC run, max 1
   mail/user/day), shared scripts/lib/mail.js, one-click unsubscribe via unsub_token +
   email_unsubscribe RPC (handled by benim.html?unsub=…). All steps skip silently
   without secrets. WAITING ON DAMLA (see Setup checklist).
8. ✅ Docs (this file + CLAUDE.md + HANDOFF.md).

## Setup checklist (Damla's manual steps — everything else is automated)

1. ~~Supabase SQL Editor → run `admin/schema.sql`~~ DONE 2026-07-13 (delete_me + irglobe_hit
   verified live with real HTTP calls). Still optional: add Bera →
   `update public.profiles set role='admin' where email='…';`
2. GitHub repo → Settings → Secrets and variables → Actions → add:
   `SUPABASE_URL`, `SUPABASE_ANON` (keep-alive), `SUPABASE_SERVICE` (service_role key,
   Project Settings → API), `RESEND_KEY` (resend.com account), `BRIEFING_FROM`
   (e.g. `kim kime ne satıyor? <bulten@noseydewdrop.com>` — requires verifying the
   domain in Resend; without it Resend only delivers to the account owner's address).
3. UN Comtrade: register free at comtradeplus.un.org → `COMTRADE_KEY` secret → ping
   Claude to write `scripts/sources/enerji.js`.
4. Vercel DNS → add CNAME record: name `chiquitita`, value `nosey-dewdrop.github.io`.
   Tell Claude when added; Pages binding + canonical migration happens AFTER (never before —
   github.io 301s immediately and the site would drop on dead DNS).

Money ideas parked (not in scope yet): paywall over personal features once there's an audience,
premium depth (trends, CSV, API), embeddable globe widget, IR-department licences, PDF country
reports, Bera revenue split (Damla's call).

## Decisions log

- 2026-07-13/14 (mega session): ship-check warnings CLOSED (cookieless first-party counter live +
  verified with real RPC calls, admin "ziyaret" tab, a11y pass, kosullar page, in-app account
  deletion, 9 tests gate news.yml). ML summarizer steps 1+2 SHIPPED (self-supervised train corpus
  in data/ml, MiniLM eval → threshold 0.75 at 0.35% false-merge, merge pass in prod pipeline:
  first cloud run folded 145 lines, multi-source 456). B1 trust layer: metodoloji.html (public
  error rates) + veri.html auto-baked from layer files. Product: akış country search, ulke index
  live filter, C1 hero swap via localStorage, PAIR PAGE (iliski.html: ties + radar + weekly tone
  SVG + merged headlines; entry via ↔ links on ulke pages). Analysis: PM/customer/VC report +
  league verdict (reports/2026-07-13-ir-globe-pm-vc-analizi.md). NAME DECIDED:
  chiquitita.noseydewdrop.com (Damla adds Vercel CNAME → then Pages binding + canonical flip;
  do NOT bind before DNS). Content system: devlog.md (50 reels + carousels, instagram build in
  public) + linkedin.md (15 essays 300-500 words). Paywall rule removed globally 13 Tem; B2B plan
  lives at ~/.claude/plans/ir-globe-b2b-plani.md.

- 2026-07-10: gift for Bera; signature travels; editorial design approved after much thrash.
- 2026-07-11: "nobody pays for it as-is" → personalization direction (see Product direction).
  Weekly data cadence + last-updated stamp + countdown counter = Damla's explicit asks.
  Separate Supabase project (not the shared one) — may be handed to Bera; keep-alive ping will
  ride the 6-hourly news workflow. Personal features launch FREE. Plans are written in Turkish now.
- 2026-07-11: payload refactor shipped; "TÜRkiye" display bug fixed via registry.
- 2026-07-12: long LANDING (index.html page 1) design iteration with Damla → build v58.
  Hero background = JS variable-width masonry of faint real headlines (1-2 col blocks → mosaic, not
  columns), varied fonts 11-26px. Foreground = text left-aligned, "hesap aç" right-aligned, white
  hugs characters per line (.hl + box-decoration-break, not a card), counters back on hero, wall
  hover grows + pushes overlapping blocks below. Visible build tag in page-3 footer (bump each deploy).
  OPEN (Damla, not done): homepage personalize-when-logged-in, globe cards on left + story panel curve,
  globe pinch-zoom→cards move, smooth page transitions. TOP PRIORITY next: PERF ("aşırı yavaş") — profile
  masonry relayout + full-page wheel hijack + globe render. ALWAYS test on github.io (custom domain lags).
- 2026-07-11 (late): phases 2-7 shipped in one run. Dataset layers replaced curated ties for
  goc/yardim/diplomasi/tahil (+ new kablo); ittifak deliberately stays curated (COW frozen 2012);
  siber deferred (no open endpoint). Emails one-click-unsubscribe via token RPC (no login).
  Alerts throttled to the 18:00 UTC news run. Config.js pushed with anon key (public by design);
  site degrades gracefully until schema runs.

- 2026-07-12 (night): PERF + cleanup + security pass (v59, Damla asleep, "ilerlet" order).
  Perf: masonry layout batched (240 forced reflows → 1), globe init made lazy (idle/intent
  instead of at load — WebGL + 480 KB geojson no longer fight the hero), wheel hijack got
  momentum-tail rejection (cooldown + decaying-delta), arc hover refreshes color accessors
  instead of rebuilding arcsData, majorTies() memoized. Dead code deleted: js/articles.js
  (1.4 MB) + js/layers.js + js/data.js (legacy trio, loaded by nothing), renderList/NAMES,
  dead CSS (#countries, .subscribe, .ed-in, .below*, .cwall, dupes). bulten.html footer's
  dead index.html#subscribe link → uye.html. Security review: RLS schema solid, no tracked
  secrets, all innerHTML sinks escape; hardened: news pipeline drops non-http(s) URLs,
  admin CSV export quotes formula-leading cells. Report: reports/2026-07-12-ir-globe-temizlik-guvenlik.md
  Later same night (v60-v62): lazy-init hardening (try/catch, CDN retry), globe.gl script
  deferred, geojson prefetch, wall density scales with viewport, hover delta cache, renderer
  pixel ratio capped 1.5 on retina, and "sayfalar ilişik değil" SOLVED with cross-document
  View Transitions (0.28s crossfade in style.css + site.css, site.css bumped to v9 across
  all generated pages via build-seo).

## Verification playbook

- After data changes: `node scripts/build-seo.js` must run clean; spot-check a konu/ and ulke/ page.
- After client changes: serve locally (`python3 -m http.server`), check the globe boots, layer
  buttons lazy-load (network tab: one layers/<k>.json + one news/<k>.json per first click),
  digest + stats render on the landing page.
- Data honesty: every layer JSON must carry non-empty source name+url+year; NEVER invent a tie.
- News counts: `node -e "..."` against data/news/meta.json (total ≈ 2200+).
