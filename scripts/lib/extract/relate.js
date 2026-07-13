/* lib/extract/relate.js — the relation extractor: fuse actors (gazetteer) with
   the coded event (cameo) into directed ties.

   100% deterministic, no API. Directionality heuristic: in a headline the actor
   group that appears BEFORE the action verb is the subject (source); the group
   after it is the target. "by" immediately before a group marks the passive
   agent ("Ukraine hit by Russian strikes" -> russia is the subject). Falls back
   to reading order when the verb sits before or after all actors.

   Conjunction handling: actors separated only by "and"/"&"/commas form ONE
   group ("Pakistan in talks with Saudi Arabia, China" -> pakistan→saudi AND
   pakistan→china). Ties are the subject-group × target-group product (capped).

     extractAll(text) -> [{s, r, event, root, goldstein, confidence}, ...]
     extract(text)    -> first tie or null (back-compat)

   Confidence (0..1) is honest self-assessment used downstream to keep only the
   ties the engine is sure about:
     +0.5  event coded
     +0.3  two distinct actors found
     +0.1  actors sit on opposite sides of the verb OR passive "by" agent
     +0.1  event phrase is specific (root length 3, e.g. 163 sanctions)
*/

const { detect } = require("./gazetteer");
const { code } = require("./cameo");

/* Same normalization as gazetteer.detect builds its haystack with, so actor
   positions and verb positions live in ONE coordinate space (the old version
   compared positions across two differently-normalized strings). */
const PUNCT = /[.,;:!?()"'`]/g;
function norm(text) {
  return " " + String(text || "").toLowerCase().replace(PUNCT, " ").replace(/\s+/g, " ") + " ";
}

const NEG = /\b(not|never|no|n't|without|deny|denies|denied|dismiss(es|ed)?|rules? out|ruled out|refus\w*|reject\w*|halt\w*|scrap\w*|cancel\w*|call(s|ed)? off|fail(s|ed)? to|unlikely to)\b/;
const CONJ_GAP = /^\s*(and|&)?\s*$/; // what may sit between two actors of one group (commas already normalized to spaces)
const MAX_TIES = 9;

function extractAll(text) {
  const actors = detect(text);
  const ev = code(text);
  if (!ev) return [];               // no event -> nothing to assert
  if (actors.length < 2) return []; // need two sides for a tie

  const hay = norm(text);
  const mNorm = norm(ev.matched).slice(1, -1); // verb phrase in the same coordinate space
  const verbAt = hay.indexOf(mNorm);
  if (verbAt === -1) return [];

  // negation: kill the event if a negation marker sits just before the verb
  // ("has not signed", "won't attack") or the headline opens with a denial.
  const preWords = hay.slice(0, verbAt).trim().split(/\s+/).slice(-4).join(" ");
  if (NEG.test(preWords)) return [];
  if (/^\s*no[,\s]/i.test(text) || /\bno longer\b/i.test(text)) return [];

  // domestic agent: "Germany attacked by critics over China policy" — the real
  // actor is internal (critics/opposition/media), not the other country.
  if (/\bby (critics|the opposition|opposition|media|lawmakers|mps|activists|protesters|protestors|analysts|experts|campaigners|watchdogs?|rights groups)\b/.test(hay)) return [];

  // group actors joined only by conjunctions ("Saudi Arabia, China" / "US and UK")
  const groups = [];
  for (const a of actors) {
    const end = a.at + a.matched.length; // a.at is the form start (no boundary spaces)
    const g = groups[groups.length - 1];
    if (g && CONJ_GAP.test(hay.slice(g.end, a.at))) { g.list.push(a); g.end = end; }
    else groups.push({ list: [a], start: a.at, end });
  }

  // "talks between A and B in Washington": the between-group IS the tie —
  // everything else in the headline (venues, mediators) is ignored.
  const between = groups.find((g) => g.list.length >= 2 && /\bbetween\s*$/.test(hay.slice(Math.max(0, g.start - 9), g.start)));

  // direction: last group before the verb is the subject, first group after is
  // the target; with only one side, fall back to reading order.
  const before = groups.filter((g) => g.start < verbAt);
  const after = groups.filter((g) => g.start >= verbAt);
  let subj, targ, clearDir = false;
  if (between) {
    subj = { list: [between.list[0]] };
    targ = { list: between.list.slice(1) };
  } else if (before.length && after.length) {
    subj = before[before.length - 1];
    targ = after[0];
    clearDir = true;
  } else {
    // verb sits before or after ALL actors: the group ADJACENT to the verb
    // carries the event ("…as Ukraine and Estonia sign drone deal" -> the
    // ukraine+estonia group, NOT canada from the other clause).
    const g = after.length ? after[0] : before[before.length - 1];
    if (g.list.length >= 2) {
      subj = { list: [g.list[0]] };
      targ = { list: g.list.slice(1) };
    } else if (groups.length >= 2) {
      subj = groups[0];
      targ = groups[1];
    } else {
      return [];
    }
  }

  // passive agent flips direction ("Ukraine hit by Russian strikes" ->
  // russia→ukraine). Two precise triggers, so "France backs plan by Russia"
  // does NOT flip: (a) the coded phrase itself ends in "by", or (b) the text
  // between the two groups has a passive participle + "by" ("targeted by
  // fresh sanctions from the EU" — participle may sit anywhere in the gap).
  if (subj.end != null && targ.start != null) {
    const gap = hay.slice(subj.end, targ.start);
    if (/\bby$/.test(mNorm) || /\b(\w+ed|hit|struck|shot|beaten|torn|driven|shaken|taken|overrun|besieged)\s+by\b/.test(gap)) {
      const t = subj; subj = targ; targ = t;
      clearDir = true;
    }
  }

  let confidence = 0.5 + 0.3;
  if (clearDir) confidence += 0.1;
  if (ev.root.length === 3) confidence += 0.1;
  confidence = Number(Math.min(1, confidence).toFixed(2));

  const out = [];
  for (const s of subj.list) {
    for (const r of targ.list) {
      if (s.key === r.key) continue;
      out.push({
        s: s.key, r: r.key,
        event: ev.label, root: ev.root, goldstein: ev.goldstein,
        matched: ev.matched, actors: actors.map((x) => x.key),
        confidence,
      });
      if (out.length >= MAX_TIES) return out;
    }
  }
  return out;
}

function extract(text) {
  return extractAll(text)[0] || null;
}

module.exports = { extract, extractAll };
