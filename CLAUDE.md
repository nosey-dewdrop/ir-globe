# ir-globe (working name "kim kime ne satıyor?" — real name is Bera/Damla's to give)

## Commit rules (READ THIS — mobile/web sessions too)
Commit messages: lowercase english, no emojis, no dashes. Author is Damla ONLY. NEVER add a `Co-authored-by: Claude` / `Claude-Session` trailer or any "Generated with Claude" line — Claude must not appear as a contributor on this repo. (These rules live in Damla's global config on her Mac, which cloud/mobile sessions can't see — so they are restated here.)

## What this is
3D editorial globe of country-to-country relations (12 layers, real sourced data, ~2200 auto-refreshed news) — a damlahelloworld product built for Bera (founder & editor). Live: https://damlahelloworld.github.io/ir-globe/ (GitHub Pages, no build step).

**READ PROJECT.md FIRST** — architecture, data layout, pipelines, roadmap, decisions all live there and are kept accurate. KAYNAKLAR.md = per-layer dataset recipes. HANDOFF.md = Bera's guide.

**Style law:** current editorial style (Newsreader serif + Inter, white, sharp corners, navy) is Damla-approved and DOES NOT CHANGE without her approval. No fabricated data, ever.

## Status (2026-07-11, all 8 phases shipped in one day)
- Data: 13 layers, 3882 ties (real datasets: UNHCR/OECD/Wikidata/FAOSTAT/TeleGeography + SIPRI), 198 countries, ~3800 auto-refreshed articles + curated RSS feeds. Weekly `data.yml`, 6-hourly `news.yml`.
- Product: lazy-loading globe with caps, akis.html feed, benim.html personal feed, uye.html onboarding, weekly personal briefing + daily alerts (Resend), one-click unsubscribe, admin overlay panel.
- Supabase: project https://gwvlvqgpksinmstsevth.supabase.co, config.js filled and live; **schema NOT run yet** — site degrades gracefully (static) until then.

## Where we left off / next
WAITING ON DAMLA (PROJECT.md → Setup checklist): run schema.sql, add Actions secrets (SUPABASE_*, RESEND_KEY, BRIEFING_FROM), Comtrade key for the enerji layer. After schema: end-to-end verify signup→onboarding→benim→emails. Open code work: enerji source script (needs key), manual converters (BACI/GSDB/AidData), siber layer (EuRepoC access).

<!-- deep machine context (auto, regenerable) -->
@CLAUDE.context.md
