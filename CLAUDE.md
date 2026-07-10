# ir-globe (WORKING NAME — real name is Damla's to give)

COMMISSIONED product: Damla's IR-student friend ordered it (damlahelloworld's first client, 2026-07-10). A rotating WebGL globe showing country-to-country networks — v1 is the arms trade; the client's ask also covers grain and other ties, plus a custom weekly newsletter on top. Pricing conversation with the friend is OPEN (Damla's call, rule: never free, even symbolic).

## Status (2026-07-10, v1 built, NOT yet shown to client)
- Static site, no build step: globe.gl (CDN) + vanilla JS/CSS.
- Data: ~160 REAL directed ties hand-copied from SIPRI Fact Sheet March 2026 (tables 1+2, 2021-25 period) in js/data.js with source URL. exp = % of supplier's exports, imp = % of recipient's imports. No invented numbers — that is a hard law here (client will fact-check, it's their field).
- Interactions: auto-rotating night-earth globe, ember arcs, click country (globe point or side wall) → camera flies there, its ties highlight (amber = selling, red = buying), side panel lists every tie as a sentence. Word wall sized by global share (size = hierarchy).
- Design: near-black + ember/amber + pink signature, mono, sharp corners, hairlines only.

## Next
- Damla: name the product, price the commission, show friend for feedback.
- Grain/commodity layer (UN Comtrade data) as second network type with its own color = meaning.
- Newsletter format (weekly: pick one edge on the globe, tell its story).
- Deploy (Vercel/Pages) once named.
