# ir-globe

*a slowly spinning globe that shows how countries are tied to each other — arms, grain, energy, alliances and more.*

### live: https://damlahelloworld.github.io/ir-globe/

## what is this?
international relations are easier to feel than to read. this globe draws country-to-country ties as glowing arcs, so patterns that hide in spreadsheets become visible in one spin. twelve lenses, one at a time: arms trade (SIPRI data), trade, energy, grain, alliances, sanctions, migration, debt, diplomacy, technology, bases, aid. every number is real and sourced — no invented data, ever.

## features
- rotating night-earth globe: drag to spin, click a country and its ties light up
- 12 layers of real directed connections, each with its own source
- 2204 real news headlines arcing around the globe, refreshed daily
- click an arc: who, to whom, how much, with the reference to check it
- editorial landing with crawlable topic and country pages
- newsletter membership and an admin panel for the editors
- privacy page (KVKK/GDPR)

## technologies
- globe.gl + vanilla JavaScript, static site on GitHub Pages
- data hand-verified from open sources (SIPRI and friends), listed per layer
- daily news refresh via GitHub Actions
- Supabase for membership, newsletter and the admin panel

## where this is going
a weekly newsletter that picks one edge on the globe and tells its story, and deeper datasets per layer.
