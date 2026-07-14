# Architecture

chiquitita (ir-globe) is a static-first system: all heavy work happens in scheduled GitHub Actions
that commit JSON into the repo; the browser only reads static files plus one small Supabase
surface for auth/follows. There is no application server anywhere.

## Layers

```
1. SOURCES
   official APIs/datasets (UNHCR, OECD, Wikidata, FAOSTAT, TeleGeography, SIPRI, ...)
   Google News RSS per connection + curated feeds (BBC, Al Jazeera, Guardian, DW,
   France24, UN News, Politico EU, FP)

2. PIPELINES (Node scripts, GitHub Actions, commit results into data/)
   scripts/fetch-data.js + scripts/sources/*   weekly  -> data/layers/*.json
   scripts/fetch-news.js                       every 6h -> data/news/*.json, digest.json, meta.json
   scripts/extract-relations.js                every 6h -> data/events/<layer>.json
   scripts/build-ozet.js                       every 6h -> data/news/ozet.json + threads.json
                                               also appends data/ml/train.jsonl (self-supervised corpus)
   scripts/ml/merge-ozet.js                    every 6h -> folds same-story lines in ozet.json
   scripts/build-graph.js / build-event-index.js        -> data/events/graph.json, index.json
   scripts/build-seo.js                        after data changes -> konu/, ulke/, sitemap.xml
   scripts/send-briefing.js / send-alerts.js   weekly / daily-throttled e-mails (Resend)
   scripts/test-motor.js + test-ara.js         run FIRST in news.yml; a red test blocks the refresh

3. PRESENTATION (vanilla JS, GitHub Pages, no build step)
   js/store.js lazy fetch+cache; js/main.js globe; js/akis.js feed; js/iliski.js pair page;
   js/dizin.js country/topic index; js/motor.js render helpers for engine output;
   js/auth.js + js/takip.js + js/benim.js personal layer; js/sayac.js counter

4. ACCOUNTS (Supabase, separate free project)
   auth + profiles + follows + editorial overlay + cookieless hit counter (RLS-gated)
```

## Data flow

- The client boots with only `data/countries.json` (179-entry registry: key, iso3, coords, slug,
  display name, aliases), `data/layers/index.json` and the default layer. Every other layer and its
  news load on first click. This refactor took the initial JS payload from ~1.2 MB to ~30-60 KB.
- Engine output is heavier, so the globe lazy-loads `events/index.json` + `graph.json` only on the
  first tie/country selection (index is ~401 KB raw, ~30 KB gzip) — zero boot cost.
- Personal feeds are computed client-side: follows come from Supabase, content from the static
  JSON. No server compute, so personalization scales for free.
- Adding a data layer = one new JSON file + one entry in `data/layers/index.json`. Zero JS edits.

## The extraction engine (deterministic, no API)

`scripts/extract-relations.js` reads every headline and derives a directed, event-coded,
Goldstein-scored tie FROM THE TEXT — not from which RSS query fetched it. Parts in
`scripts/lib/extract/`:

- `gazetteer.js` — actor NER: country aliases, curated demonyms, leader-to-country mapping.
- `cameo.js` — CAMEO event coding + Goldstein −10..+10 conflict/cooperation weights (the same
  scheme GDELT/TABARI use).
- `relate.js` — fuses actors + event into a directed tie: negation filter,
  subject-before-verb direction, self-scored confidence, keep >= 0.8.

Measured (published on metodoloji.html): ~30% of processed English headlines become confidently
coded events; sampled accuracy of coded events ~87% (13/15 by hand check). Uncoded headlines stay
uncoded — incompleteness over fabrication.

## The ML merge pass (learned, never generative)

`scripts/build-ozet.js` produces an API-less extractive summary (cluster + pick a representative
real headline) and, as a side effect, accumulates every multi-source thread into
`data/ml/train.jsonl` — self-supervised training data labeled by the engine itself (838 threads,
grows each 6h run, deduped by member-set hash).

`scripts/ml/eval-encoder.js` measured all-MiniLM-L6-v2 (@xenova/transformers, local ONNX, no API)
against that corpus: positives median cosine 0.69 vs hard negatives 0.29. At threshold 0.75 the
diff-pair false-merge rate is 0.35%, and most "false" same-pair misses turned out to be engine
fragmentation (one story coded under two CAMEO roots) — i.e. correct merges.

`scripts/ml/merge-ozet.js` applies it in production: within one layer+pair, story lines whose
titles score >= 0.75 fold together. First real run: 3,265 -> 3,125 lines, 140 folded, multi-source
stories 387 -> 442. The merge output NEVER touches train.jsonl (no feedback loop). If the encoder
is unavailable in CI, the classical summary ships and the run exits 0.

## Key design decisions and why

- **Static-first, no server.** Hosting is free, nothing to operate, and the failure mode of every
  optional piece (Supabase down, encoder missing, secrets absent) is graceful degradation, not an
  outage. Mail/alert steps skip silently without secrets.
- **Deterministic extraction before ML, and ML never generates text.** Damla's explicit call: the
  model only selects and groups real headlines. No hallucination surface exists; every rendered
  string is a real sourced headline or a real dataset number.
- **Self-supervised training data.** Engine-keyed threads are zero-overlap paraphrase positives,
  so the corpus needs no hand labels and no external service, and it grows for free with the
  pipeline.
- **Data honesty as a hard rule.** Every layer JSON must carry non-empty source name+url+year;
  never invent a tie. The ittifak (alliances) layer deliberately stays hand-curated because the
  COW dataset is frozen at 2012; a water layer was skipped entirely as a fabrication risk.
- **Trust as a feature.** metodoloji.html publishes the measured error rates (30% coverage, 87%
  sampled accuracy, 0.35% false-merge) and veri.html is auto-baked from the layer files. Engine
  output always ships with an "extracted automatically from news" label.
- **Cookieless counter.** One anonymous RPC per pageview (path + a daily-unique boolean from a
  device-local flag). No IP, UA or cookie stored; reads are admin-only via RLS.
- **Separate Supabase project.** The product may be handed over (built for Bera), so it does not
  share the common damlahelloworld Supabase.
- **Domain binding order.** Pages must NOT bind chiquitita.noseydewdrop.com before the DNS CNAME
  exists — github.io 301s immediately and the site would drop on dead DNS.

## Known limits

- Extraction coverage is ~30%: the radar can miss events (it never invents them). Roughly 1 in 7-8
  coded event lines can carry a wrong direction, missing context or a bad match (~87% accuracy).
- enerji layer waits on a free UN Comtrade key; silah/ticaret/teknoloji/yaptirim/borc still use
  thinner curated ties until their manual dataset converters land. siber is deferred (no open
  endpoint at EuRepoC).
- The kablo layer's source (TeleGeography) is CC BY-NC-SA — license must be revisited if a paid
  tier ever covers that layer.
- "xN sources" badges on headlines were deliberately not built: they would cost ~137 KB gzip for
  ~13% multi-source coverage — a bad trade until a small title-to-count artifact exists.
- English UI (/en/ tree + hreflang) and the API/embed widget are planned but not built; they wait
  on the domain binding.
- E-mails are code-complete but dark until the Resend secrets and domain verification are set.
