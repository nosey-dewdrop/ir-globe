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

## Where we left off (2026-07-12, heavy LANDING UI iteration — build v57)
Visible build tag in the page-3 footer (`.build`) — BUMP it every deploy so Damla can confirm the CDN
served the new version. ALWAYS test on `damlahelloworld.github.io/ir-globe/` + hard refresh; the custom
domain (damlahelloworld.com/ir-globe, ir-globe.damlahelloworld.com) lags badly and caused hours of
"hiçbir şey olmadı" confusion.

**Landing (index.html page 1) at v57:**
- Background = full-page JS **variable-width masonry** of real faint headlines (blocks 1 or 2 columns
  wide → grid breaks into a mosaic; that was the key fix — equal-width blocks looked like columns),
  varied font sizes 11→26px, decorative only. It's an inline `<script>` in index.html.
- Foreground = solid **white card** centered; text **right-aligned**, "hesap aç" **left-aligned**;
  brand + "son güncelleme" stamp on top; stats counters back on the hero; lone ↓ scroll arrow.
- 3 pages: hero / globe / kapanış. Full-page wheel-scroll hijack between them.

Landing at v58: hero text LEFT-aligned, "hesap aç" RIGHT-aligned, and the white background hugs the
characters per line (`.hl` span + box-decoration-break: clone) — NOT a card. Wall hover grow now
DOES push overlapping blocks below (variable-width masonry, blocks store __c0/__c1/__top).

**OPEN DESIGN TODOs (Damla asked, NOT done):**
1. Homepage should personalize when logged in (benim.html is separate now).
   2. Globe: cards only on RIGHT arc — she wants LEFT-side cards too + story panel truly curved.
   3. Globe pinch-zoom → cards move (Mac pinch = ctrl+wheel, separable from 2-finger scroll → doable).
   4. Smooth page transitions ("sayfalar ilişik değil" — konu/ülke/akış hard-reload).
   5. "hesap aç"ı hero cümlesine gömülü link (opsiyonel, netleşmedi).

**PERF PASS DONE (2026-07-12 night, v59).** Root causes found and fixed:
1. Masonry layout interleaved style writes with offsetHeight reads → 240 forced reflows
   (~0.5s freeze at load, again at fonts.ready and every resize). Now 3 batched phases
   (write widths / read heights / write positions) → 1 reflow total.
2. Globe (WebGL context + 480 KB geojson triangulation) initialized at load, competing
   with the hero. Now LAZY: `initGlobe()` runs on requestIdleCallback after load (timeout
   2s) or on first user intent (wheel/key/touch/pointer), whichever first. All globe uses
   are null-guarded; behavior identical once built.
3. Trackpad momentum tail re-triggered page jumps after the 1050 ms scroll animation
   ("akıcı değil"): wheel handler now has a 220 ms cooldown + decaying-delta detection —
   only a RISING delta (a new deliberate swipe) or a gapped event turns the page.
4. Arc hover re-sorted ~900 ties per hover change → majorTies() result now memoized
   (tiesRev cache); hover/redraw keep the PROVEN v58 refresh path (arcsData/polygonsData
   re-set with same objects) so highlight behavior is guaranteed identical.
Hardening (2026-07-12 late): initGlobe wrapped in try/catch (no WebGL → rest of page still
works), CDN-late retry loop (500 ms × 40) so lazy init can't be permanently missed, wheel
momentum rejection window widened to 1.6 s (rising delta always passes).
Also deleted dead code: js/articles.js (18k lines) + js/layers.js + js/data.js (legacy,
loaded by nothing), renderList/NAMES in main.js, dead CSS blocks (#countries, .subscribe,
.ed-in/.page.ed, .below*, .cwall, .masthead, dupes). Security pass: see
reports/2026-07-12-ir-globe-temizlik-guvenlik.md — clean overall; hardened news URL
scheme (http/https only) + admin CSV formula-injection guard.

**WAITING ON DAMLA (manual):** Supabase schema RUN + auth tested OK. Still needs Actions secrets
(SUPABASE_SERVICE, RESEND_KEY, BRIEFING_FROM) + Resend domain (emails); COMTRADE_KEY (enerji real data);
Bera admin. Curated layers needing downloads: ticaret/teknoloji (BACI), yaptirim (GSDB), borc (AidData); siber deferred.

<!-- deep machine context (auto, regenerable) -->
@CLAUDE.context.md
