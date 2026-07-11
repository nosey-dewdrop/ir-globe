# ir-globe (working name "kim kime ne satıyor?" — real name is Bera/Damla's to give)

## Commit rules (READ THIS — mobile/web sessions too)
Commit messages: lowercase english, no emojis, no dashes. Author is Damla ONLY. NEVER add a `Co-authored-by: Claude` / `Claude-Session` trailer or any "Generated with Claude" line — Claude must not appear as a contributor on this repo. (These rules live in Damla's global config on her Mac, which cloud/mobile sessions can't see — so they are restated here.)

## What this is
3D editorial globe of country-to-country relations (12 layers, real sourced data, ~2200 auto-refreshed news) — a damlahelloworld product built for Bera (founder & editor). Live: https://damlahelloworld.github.io/ir-globe/ (GitHub Pages, no build step).

**READ PROJECT.md FIRST** — architecture, data layout, pipelines, roadmap, decisions all live there and are kept accurate. KAYNAKLAR.md = per-layer dataset recipes. HANDOFF.md = Bera's guide.

**Style law:** current editorial style (Newsreader serif + Inter, white, sharp corners, navy) is Damla-approved and DOES NOT CHANGE without her approval. No fabricated data, ever.

## Status (2026-07-11)
- Phase 1 of the approved 8-phase plan SHIPPED: data moved to `data/*.json` (per-layer + per-layer news + digest + meta), `js/store.js` lazy loader, initial payload 1.2MB → ~40KB, SEO builder reads JSON, "TÜRkiye" display bug fixed. Legacy `js/{data,layers,articles}.js` unreferenced, kept one release for rollback.
- News Action (`news.yml`, 6-hourly) now commits `data/news/`.
- Supabase project created by Damla (2026-07-11): https://gwvlvqgpksinmstsevth.supabase.co — schema NOT run yet, `admin/config.js` NOT filled yet (do both together in Phase 6 so live forms never point at missing tables).

## Where we left off / next
Phase 2: weekly data pipeline (`scripts/fetch-data.js` + `scripts/sources/*` + `data.yml`) — see PROJECT.md roadmap. Then news diversification (3), liveliness face (4), new layers (5), accounts+personal page (6), e-mail briefing (7), docs (8).

<!-- deep machine context (auto, regenerable) -->
@CLAUDE.context.md
