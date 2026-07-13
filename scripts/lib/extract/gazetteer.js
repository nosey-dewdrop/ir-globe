/* lib/extract/gazetteer.js — actor recognition (NER) for the relation-extraction
   engine. Resolves country/actor mentions in a raw headline to our canonical
   country keys (data/countries.json), longest-match first, with a curated
   demonym table ("Russian"→russia) and a stopword guard so short aliases don't
   fire on common english words.

   Deterministic, offline, explainable. This is the entry stage of the pipeline:
     headline text  ->  [{key, disp, at, matched}]  (ordered by position)
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..", "..");
const REG = JSON.parse(fs.readFileSync(path.join(ROOT, "data/countries.json"), "utf8"));

/* Demonyms / adjectival forms that headlines use instead of the country name.
   Curated for the IR-relevant actors that actually show up in the feeds — not
   every country, on purpose (a wrong demonym is worse than a missing one). */
const DEMONYMS = {
  russia: ["russian", "moscow", "kremlin"], china: ["chinese", "beijing"], "united states": ["american", "u.s.", "us", "washington"],
  "united kingdom": ["british", "uk", "u.k.", "london"], france: ["french", "paris"],
  germany: ["german", "berlin"], japan: ["japanese", "tokyo"], india: ["indian", "delhi", "new delhi"],
  "south korea": ["south korean", "seoul"], "north korea": ["north korean", "pyongyang", "dprk"],
  iran: ["iranian", "tehran"], iraq: ["iraqi"], israel: ["israeli"], palestine: ["palestinian"],
  "saudi arabia": ["saudi", "riyadh"], türkiye: ["turkish", "turkey", "ankara"],
  ukraine: ["ukrainian", "kyiv", "kiev"], pakistan: ["pakistani"], afghanistan: ["afghan"],
  egypt: ["egyptian", "cairo"], syria: ["syrian"], yemen: ["yemeni"], qatar: ["qatari"],
  uae: ["emirati", "abu dhabi"], italy: ["italian", "rome"], spain: ["spanish", "madrid"],
  greece: ["greek", "athens"], poland: ["polish", "warsaw"], sweden: ["swedish"],
  netherlands: ["dutch"], taiwan: ["taiwanese", "taipei"], vietnam: ["vietnamese", "hanoi"],
  indonesia: ["indonesian", "jakarta"], brazil: ["brazilian", "brasilia"], mexico: ["mexican"],
  canada: ["canadian", "ottawa"], australia: ["australian", "canberra"], "south africa": ["south african"],
  nigeria: ["nigerian"], ethiopia: ["ethiopian"], venezuela: ["venezuelan", "caracas"],
  cuba: ["cuban", "havana"], sudan: ["sudanese"], libya: ["libyan"], lebanon: ["lebanese"],
  jordan: ["jordanian"], kuwait: ["kuwaiti"], bahrain: ["bahraini"], oman: ["omani"],
  azerbaijan: ["azerbaijani", "baku"], armenia: ["armenian", "yerevan"], georgia: ["georgian", "tbilisi"],
  kazakhstan: ["kazakh"], belarus: ["belarusian", "minsk"], serbia: ["serbian", "belgrade"],
  bangladesh: ["bangladeshi", "dhaka"], myanmar: ["burmese"], thailand: ["thai", "bangkok"],
  philippines: ["filipino", "manila"], malaysia: ["malaysian"], singapore: ["singaporean"],
};

/* Heads of state / gov who stand in for the country as the sentence subject.
   Curated for currently-prominent IR actors that headlines name instead of the
   state ("Trump welcomes…" -> united states is the subject). Kept small and
   current on purpose. */
const LEADERS = {
  "united states": ["trump", "biden"], russia: ["putin", "lavrov"], china: ["xi", "xi jinping", "li qiang"],
  "north korea": ["kim jong un", "kim jong-un"], türkiye: ["erdogan", "erdoğan"], india: ["modi"],
  france: ["macron"], germany: ["scholz", "merz"], "united kingdom": ["starmer", "sunak"],
  ukraine: ["zelensky", "zelenskyy"], israel: ["netanyahu"], "saudi arabia": ["mbs", "bin salman"],
  iran: ["khamenei", "pezeshkian"], hungary: ["orban", "orbán"], venezuela: ["maduro"],
  brazil: ["lula"], hungary_dup: [], pakistan: ["sharif", "shehbaz"], japan: ["kishida", "ishiba"],
};

/* Short aliases that collide with plain english words — never let these match. */
const STOP = new Set(["us", "uk", "chad", "mali", "oman", "togo", "benin", "guinea", "jordan", "georgia", "china sea"]);
/* Stop-listed forms that ARE allowed when the original headline spells them in
   ALL CAPS ("US and UK impose sanctions" vs "let us in"). Normalized space. */
const CAPS_OK = new Set(["us", "uk", "u s", "u k"]);

const PUNCT = /[.,;:!?()"'`]/g;
const clean = (s) => String(s).replace(PUNCT, " ").replace(/\s+/g, " ").trim();

/* Build the lookup: surface form -> canonical key. Longer forms win. Forms are
   normalized like the haystack so dotted aliases ("u.s.") can actually match. */
const FORMS = []; // {form, key, len}
function add(form, key) {
  const f = clean(String(form).toLowerCase());
  if (!f) return;
  FORMS.push({ form: f, key, len: f.length, stop: STOP.has(f), caps: CAPS_OK.has(f) });
}
Object.values(REG).forEach((c) => {
  add(c.key, c.key);
  if (c.disp) add(c.disp, c.key);
  (c.aliases || []).forEach((a) => add(a, c.key));
});
Object.entries(DEMONYMS).forEach(([key, list]) => {
  if (!REG[key]) return; // demonym for a key we don't carry -> skip
  list.forEach((d) => add(d, key));
});
Object.entries(LEADERS).forEach(([key, list]) => {
  if (!REG[key]) return;
  list.forEach((d) => add(d, key));
});
/* longest surface form first so "south korea" beats "korea", "new delhi" beats "delhi" */
FORMS.sort((a, b) => b.len - a.len);

/* word-boundary aware scan; returns actors in order of first appearance,
   de-duplicated by key (first mention position kept). */
function detect(text) {
  const orig = " " + clean(String(text || "")) + " "; // original case, same positions
  const hay = orig.toLowerCase();
  const seen = new Map(); // key -> {key, disp, at, matched}
  const claimed = []; // [start,end) spans already consumed by a longer form
  for (const { form, key, stop, caps } of FORMS) {
    if (stop && !caps) continue;
    const needle = " " + form + " ";
    let idx = hay.indexOf(needle);
    while (idx !== -1) {
      // claim only the form's own characters, not the boundary spaces —
      // otherwise adjacent mentions ("saudi arabia china" after comma
      // normalization) share a space and the second one is swallowed.
      const start = idx + 1, end = idx + 1 + form.length;
      const overlap = claimed.some((c) => start < c[1] && end > c[0]);
      // stop-listed short aliases only count when spelled in ALL CAPS
      const ok = !stop || (caps && orig.slice(start, end) === form.toUpperCase());
      if (!overlap && ok) {
        claimed.push([start, end]);
        if (!seen.has(key)) seen.set(key, { key, disp: REG[key].disp || key, at: start, matched: form });
      }
      idx = hay.indexOf(needle, idx + 1);
    }
  }
  return [...seen.values()].sort((a, b) => a.at - b.at);
}

module.exports = { detect, _forms: FORMS };
