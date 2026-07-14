# chiquitita (ir-globe)

A 3D editorial globe of country-to-country relations: 13 layers of real sourced ties, an auto-refreshing news flow, and a deterministic relation-extraction engine with an ML merge pass on top — all served as a static site with zero server compute.

Live: https://nosey-dewdrop.github.io/ir-globe/ (target domain: chiquitita.noseydewdrop.com, DNS pending)

## What it does

- Draws directed country ties (arms, trade, energy, grain, alliances, sanctions, migration, debt, diplomacy, technology, bases, aid, cables) as arcs on a rotating globe. 13 layers, 3,882 ties, 198 countries — every tie carries a source name, URL, year and license. No fabricated data, ever.
- Refreshes ~4,500 real news headlines every 6 hours from Google News RSS plus curated feeds (BBC, Al Jazeera, Guardian, DW, France24, UN News, Politico EU, FP), matched per country pair and topic.
- Runs its own relation-extraction engine over every headline: actor NER (country aliases, demonyms, leader-to-country), CAMEO event coding with Goldstein −10..+10 conflict/cooperation weights, direction and negation handling. 100% deterministic, no API, no network.
- Folds same-story headlines with a neural encoder (all-MiniLM-L6-v2, local ONNX): threshold picked by measurement, not feel. The model never generates text — it only selects and groups real headlines.
- Personal layer: accounts, country/topic follows, a personal feed, weekly e-mail briefing and alerts. Follows live in Supabase; the feed is computed client-side against the static JSON, so scale costs nothing.
- Trust layer: a public methodology page with measured error rates (metodoloji.html) and an auto-baked data provenance page (veri.html). A cookieless first-party visit counter — no IP, no user agent, no cookies stored.

## Measured, not claimed

Numbers below come from the repo's own methodology page and pipeline reports:

- Extraction engine converts ~30% of processed English headlines into confidently coded events; sampled manual check puts coded-event accuracy at ~87% (13/15). Uncoded headlines stay uncoded — the radar can be incomplete, never invented.
- ML merge pass: on the engine-labeled corpus, positive pairs score median cosine 0.69 vs 0.29 for hard negatives; at threshold 0.75 the measured false-merge rate is 0.35%. First production run folded 140 summary lines and raised multi-source stories from 387 to 442.
- Training data is self-supervised: the engine's own thread codings accumulate in data/ml/train.jsonl (838 threads and growing every 6h run). No hand labels, no external service, and the merge output never feeds back into the training file.
- Initial JS payload dropped from ~1.2 MB to ~30-60 KB after the lazy-loading refactor: the client boots with the country registry, the layer index and one layer; everything else loads on first click.
- 9 node tests (XSS, empty states, stale windows) run first in the 6-hour pipeline; a red test blocks the refresh.
- Pair pages (iliski.html?a=&b=) render ties, an event radar and a weekly tone SVG; 126 country pairs have at least 3 weeks of trend data.

## Stack

- Frontend: vanilla JavaScript + globe.gl (CDN), no framework, no build step. Newsreader serif + Inter, editorial white/navy style.
- Hosting: GitHub Pages, fully static.
- Pipelines: Node scripts on GitHub Actions — news every 6h (news.yml), official datasets weekly (data.yml: UNHCR, OECD, Wikidata, FAOSTAT, TeleGeography, SIPRI), briefing mail weekly (briefing.yml).
- ML: @xenova/transformers running all-MiniLM-L6-v2 as local ONNX inside the Action — no inference API, no key. If the encoder is unavailable the classical summary ships and the run still exits 0.
- Auth + follows + admin: Supabase (RLS-gated, anon key public by design), e-mail via Resend with one-click token unsubscribe.
- SEO: generated konu/ (layer) and ulke/ (country) pages, sitemap, robots — rebuilt by scripts/build-seo.js after every data change.

## Repo map

- `data/layers/` static tie data per layer, `data/news/` fetched headlines, `data/events/` engine output, `data/ml/` training corpus
- `scripts/` all pipelines (fetch, extract, summarize, merge, SEO, mail), `scripts/lib/extract/` the engine (gazetteer, cameo, relate)
- `js/` client modules (lazy store, globe, feed, auth, follows, counter)
- `admin/` editorial panel + schema.sql

Architecture details and design rationale: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Living project doc: PROJECT.md.
