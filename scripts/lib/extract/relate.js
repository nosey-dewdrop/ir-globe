/* lib/extract/relate.js — the relation extractor: fuse actors (gazetteer) with
   the coded event (cameo) into a directed tie.

   100% deterministic, no API. Directionality heuristic: in a headline the actor
   that appears BEFORE the action verb is the subject (source); the actor after
   it is the target. Falls back to reading order when the verb sits before both.

     headline text  ->  {s, r, event, root, goldstein, confidence, matched} | null

   Confidence (0..1) is honest self-assessment used downstream to keep only the
   ties the engine is sure about:
     +0.5  event coded
     +0.3  two distinct actors found
     +0.1  actors sit on opposite sides of the verb (clear direction)
     +0.1  event phrase is specific (root length 3, e.g. 163 sanctions)
*/

const { detect } = require("./gazetteer");
const { code } = require("./cameo");

function extract(text) {
  const actors = detect(text);
  const ev = code(text);
  if (!ev) return null;               // no event -> nothing to assert
  if (actors.length < 2) return null; // need two sides for a tie

  const hay = " " + String(text).toLowerCase() + " ";
  const verbAt = hay.indexOf(ev.matched.toLowerCase());

  // negation: kill the event if a negation marker sits just before the verb
  // ("has not signed", "won't attack") or the headline opens with a denial.
  const pre = hay.slice(0, verbAt);
  const preWords = pre.trim().split(/\s+/).slice(-4).join(" ");
  const NEG = /\b(not|never|no|n't|without|deny|denies|denied|dismiss(es|ed)?|rules? out|ruled out|refus\w*|reject\w*|halt\w*|scrap\w*|cancel\w*|call(s|ed)? off|fail(s|ed)? to|unlikely to)\b/;
  if (NEG.test(preWords)) return null;
  if (/^\s*no[,\s]/i.test(text) || /\bno longer\b/i.test(text)) return null;

  // pick the two most prominent actors: first two by position
  let a = actors[0], b = actors[1];

  // direction: actor before the verb is the subject
  const before = actors.filter((x) => x.at < verbAt);
  const after = actors.filter((x) => x.at >= verbAt);
  let s, r, clearDir = false;
  if (before.length && after.length) {
    s = before[before.length - 1]; // subject = last actor right before the verb
    r = after[0];                  // target = first actor right after the verb
    clearDir = true;
  } else {
    s = a; r = b;                  // fall back to reading order
  }
  if (s.key === r.key) return null;

  let confidence = 0.5 + 0.3;
  if (clearDir) confidence += 0.1;
  if (ev.root.length === 3) confidence += 0.1;
  confidence = Math.min(1, confidence);

  return {
    s: s.key, r: r.key,
    event: ev.label, root: ev.root, goldstein: ev.goldstein,
    matched: ev.matched, actors: actors.map((x) => x.key),
    confidence: Number(confidence.toFixed(2)),
  };
}

module.exports = { extract };
