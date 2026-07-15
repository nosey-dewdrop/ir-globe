# ir-globe 🌍

what countries do to each other. who sells weapons to whom, who buys grain from whom, who sanctions whom. all of it on a rotating 3d globe, all of it sourced, not a single made-up number. for anyone who follows the news, does analysis, or wants to see "what is going on between these two countries?" at a glance.

live: https://ir-globe.noseydewdrop.com (dev: nosey-dewdrop.github.io/ir-globe/)

## how it works and what i used for it

- i draw 13 layers of relations as arcs on the globe: arms, trade, energy, grain, alliances, sanctions, migration, debt, diplomacy, technology, bases, aid, cables. 3,882 ties across 198 countries. every tie carries its source name, url, year and license.
- every 6 hours i pull ~4,500 real news headlines (google news rss plus bbc, al jazeera, guardian, dw, france24, un news, politico eu, fp) and match them to country pairs and topics.
- i run my own extraction engine over every headline: country and leader recognition, cameo event coding, goldstein −10..+10 conflict/cooperation weighting, direction and negation. 100% deterministic, no api, no internet. a rule engine i wrote myself.
- headlines telling the same story get folded together by a neural encoder (all-minilm-l6-v2, local onnx). i picked the threshold by measuring, not by feel. the model never generates text, it only selects and groups real headlines.
- personal layer: create an account, follow countries and topics, see your own feed, get a weekly email briefing.
- trust layer: a methodology page showing measured error rates plus an auto-generated data sources page.

## measurement and accuracy, benchmark not claims 📏

all numbers come from the repo's own methodology page and pipeline reports, nothing invented:

- **accuracy of shown ties: ~80-85%** (hand-audited samples. the two most recent independent samples of 52 and 40 ties scored 71% and 85%, ~85% after fixes). only ties above the confidence threshold get drawn. the engine confidently codes ~30% of processed english headlines and leaves the rest uncoded. the radar can be incomplete but it never makes things up. **the migration layer draws no directed arcs** (a refugee flow is not an action a country chose), it stays a sourced list.
- **ml folding false-merge rate: 0.35%** (measured at threshold 0.75). positive pairs at median 0.69 cosine, hard negatives at 0.29. the first prod run folded 140 digest rows and raised multi-source stories from 387 to 442.
- **training data feeds itself**: the engine's codings accumulate in `data/ml/train.jsonl` (838 threads, growing every 6 hours). no hand labels, no external service.
- **initial js payload ~1.2 mb → ~30-60 kb** (lazy-loading refactor): the client boots with just the country registry and one layer.
- **9 node tests** run at the top of every 6-hour pipeline (xss, empty states, stale windows). a red test stops the refresh.
- relation pages chart at least 3 weeks of tone trend for 126 country pairs.

## tech

- frontend: plain javascript plus globe.gl (cdn), no framework, no build step. newsreader serif plus inter, white and navy editorial style.
- hosting: github pages, fully static.
- pipeline: node scripts on github actions. news every 6 hours (news.yml), official datasets weekly (data.yml: unhcr, oecd, wikidata, faostat, telegeography, sipri), briefing mail weekly (briefing.yml).
- ml: @xenova/transformers running all-minilm-l6-v2 as local onnx inside the action. no inference api, no keys. if the encoder is missing, the classic digest ships and the run still exits 0.
- accounts, follows and admin: supabase (rls protected, anon key intentionally public), email via resend with one-click tokenized unsubscribe.
- seo: generated konu/ (layer) and ulke/ (country) pages, sitemap, robots. scripts/build-seo.js regenerates on every data change.

## why i built it 💐

following the news i kept hitting the same wall: the answer to "what is going on between these two countries?" is scattered across hundreds of articles and nobody collects it in one place. the ones who do either cite nothing or just write "relations are tense" from the top of their head. i wanted something measurable, with clickable sources, that does not lie. so nothing enters this project by feel. either it has a source or it does not exist.

## repo map

- `data/layers/` static tie data per layer, `data/news/` pulled headlines, `data/events/` engine output, `data/ml/` training corpus
- `scripts/` all pipelines (pull, extract, digest, fold, seo, mail), `scripts/lib/extract/` the engine itself (gazetteer, cameo, relate)
- `js/` client modules (lazy store, globe, feed, auth, follows, counter)
- `admin/` editorial panel plus schema.sql

architecture detail and design rationale: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). living project file: PROJECT.md.
