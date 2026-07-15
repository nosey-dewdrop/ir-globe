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

const NEG = /\b(not|never|no|n't|without|deny|denies|denied|dismiss(es|ed)?|rules? out|ruled out|refus\w*|reject\w*|halt\w*|scrap\w*|cancel\w*|call(s|ed)? off|fail(s|ed)? to|unlikely to|suspend\w*|block(s|ed|ing)?|freez\w*|limit(s|ed|ing)?|curb(s|ed|ing)?|bar(s|red|ring)?|ban(s|ned|ning)?|waive|waiver|pause[sd]?|stall(s|ed)?)\b/;
const CONJ_GAP = /^\s*(and|&)?\s*$/; // what may sit between two actors of one group (commas already normalized to spaces)
const MAX_TIES = 9;
// speculative / hypothetical framing — the tie is not asserted, just floated
// ("may put Kazakhstan at the center of a deal"). Down-weighted, not dropped.
const SPEC = /\b(may|might|could|would|expected to|set to|plan(s|ned)? to|weigh(s|ing)?|mull(s|ing)?|consider(s|ing)?|eyes?|seeks? to|appears? to|reportedly|rumou?red)\b/;
// STRONG hypothetical/urging framing — the event has NOT happened, someone is
// only pushing for or speculating about it. Drop, don't just down-weight.
// ("Pakistan urges Turkey to join pact", "may reduce aid", "could cut ties if").
const HYPO = /\b(urg(e|es|ed|ing)|call(s|ed)? on|press(es|ed|ing)?|push(es|ed|ing)? (for|to)|propos(e|es|ed|al)|may (reduce|cut|halt|end|raise|lower)|could\b[^.]{0,40}\bif\b|would\b[^.]{0,40}\bif\b|if\b[^.]{0,30}\b(cuts?|ends?|halts?|leaves?)\b|reportedly (nears?|weighs?))\b/;
// max words allowed between the two actors of a tie; farther apart = more likely
// they live in unrelated clauses ("Iran's stockpile … Kazakhstan at the center").
const MAX_GAP_WORDS = 8;
const wc = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);

// SEO/aggregator tag-soup titles ("2026 Iran war | Deal, Explained, United
// States, Israel, Strait of Hormuz, ...") are keyword lists, not events. A pipe
// followed by 3+ comma-separated fragments is the tell — drop them, they only
// manufacture fake ties.
const TAGSOUP = /\|\s*[^|]*,[^|]*,[^|]*,/;

function extractAll(text) {
  if (TAGSOUP.test(text)) return [];
  // rhetorical/hypothetical headlines assert nothing: "Can Trump cut off trade
  // with Spain?", "Will China invade Taiwan?", "Should the US arm Ukraine?" —
  // a question is not an event. Also "here's what/why/how" explainer framing.
  if (/^\s*(can|could|will|would|should|is|are|does|do|why|what if|what|how|when)\b[^?]*\?/i.test(text.trim()) ||
      /\bhere'?s (what|why|how)\b/i.test(text)) return [];
  // strong hypothetical / someone-urging-it framing: the tie hasn't happened.
  if (HYPO.test(text.toLowerCase())) return [];
  // legislative object: "US Russia Sanctions Bill", "China Tariff Act" — a bill/law
  // named after countries is not a bilateral act between them. Drop.
  if (/\b(bill|act|law|resolution|legislation|amendment)\b/i.test(text) &&
      /\b(sanction|tariff|trade|defen[cs]e|arms|aid)\b/i.test(text)) return [];
  // "comes at a cost to / at the expense of / hurts / threatens X" — X is merely
  // AFFECTED, not a party to a bilateral tie.
  if (/\b(cost to|expense of|blow to|threat(en)?s? to|hurts?|damages?|undermin\w+)\b/i.test(text)) {
    // only drop if this framing wraps the second actor; cheap heuristic: present at all
    // in a headline whose only "event" is a deal/agreement noun.
    if (/\b(deal|agreement|pact|accord)\b/i.test(text) && !/\bsign|ink|reach|seal\b/i.test(text)) return [];
  }
  // reacting-to-tariffs framing ("Spain moves to mitigate US tariffs", "seeks
  // tariff relief from China"): the SUBJECT is the victim, not the imposer — the
  // reading-order direction would be wrong. Drop rather than assert a false one.
  {
    const tl = text.toLowerCase();
    const victim = /\b(mitigat\w+|cope with|cushion|respond to|reeling from|brace(s|d)? for|impacts? of|hit by|relief)\b/.test(tl);
    const coercion = /\b(tariff|duties|levy|levies|sanction)/.test(tl);
    if (victim && coercion) return []; // subject is reacting to coercion, not imposing it
  }
  const actors = detect(text);
  const ev = code(text);
  if (!ev) return [];               // no event -> nothing to assert
  if (actors.length < 2) return []; // need two sides for a tie

  // "diversifying / moving away / reduce reliance FROM X" negates X as a partner —
  // the headline is about leaving that counterpart, not trading with it.
  const away = /\b(diversif\w+|away from|reduce\w*\s+(its\s+)?(reliance|dependence)|wean\w*|cut(s|ting)? reliance|less dependent)\b/.test(text.toLowerCase());

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

  // locative venue: "meet in Turkey", "summit in Qatar", "on sidelines ... in X"
  // — a country right after in/at is the PLACE, not a party. Mark it so it can't
  // be picked as a target (only matters for meeting/visit-type verbs).
  for (const g of groups) {
    g.loc = /\b(in|at|on the sidelines of|hosted by|hosts?)\s*$/.test(hay.slice(Math.max(0, g.start - 22), g.start));
    // topic mention: "hold talks ON security, Ukraine and migration" — once a
    // meeting verb is followed by "on/about/over", every country after that "on"
    // is a DISCUSSION TOPIC, not a party. Find the topic-marker position and flag
    // any group sitting past it.
    const topicM = hay.match(/\b(talks?|discuss\w*|meet\w*|summit|dialogue|negotiat\w*|deal)\b[^.]{0,30}\b(on|about|over|regarding|concerning)\b/);
    if (topicM) {
      const topicAt = topicM.index + topicM[0].length;
      if (g.start >= topicAt) g.loc = true;
    }
  }

  // "talks between A and B in Washington": the between-group IS the tie —
  // everything else in the headline (venues, mediators) is ignored.
  const between = groups.find((g) => g.list.length >= 2 && /\bbetween\s*$/.test(hay.slice(Math.max(0, g.start - 9), g.start)));

  // direction: last group before the verb is the subject, first group after is
  // the target; with only one side, fall back to reading order.
  const before = groups.filter((g) => g.start < verbAt);
  // drop locative (venue) groups from target candidates: "S.Korea, US, Japan meet
  // in Turkey" must not make anyone→turkey ties.
  const after = groups.filter((g) => g.start >= verbAt && !g.loc);
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
    if (!g) return [];                 // locative filter removed every candidate
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
    // buyer/importer framing: "India clears/approves/signs a deal FROM US jets"
    // — the subject is the BUYER, the counterpart after "from" is the supplier, so
    // the trade flows target→subject. Flip so the seller is source. BUT never flip
    // when a financing/aid verb governs the sentence ("Germany finances drones FOR
    // Ukraine"): there the money/goods flow subject→beneficiary, not the reverse.
    else if (!/\b(financ\w+|fund(s|ed|ing)?|gift(s|ed)?|donat\w+|grant(s|ed)?|supply|supplies|supplied|deliver\w+|sends?|sent|aid|bankroll\w*|underwrit\w+)\b/.test(hay) &&
             /\b(buy(s|ing)?|purchas\w+|import(s|ed|ing)?|clear(s|ed)?|approv\w+|order(s|ed)?|acquir\w+)\b/.test(hay.slice(0, targ.start)) &&
             /\bfrom\s*$/.test(hay.slice(0, targ.start))) {
      const t = subj; subj = targ; targ = t;
      clearDir = true;
    }
    // benefactive flip: "As Ukraine seeks air defense, Canada announces aid" — the
    // subject (Ukraine) merely NEEDS help, the giver (Canada, after the verb) is
    // the real source. For aid/finance/supply events, if the pre-verb text frames
    // the subject as the one asking, flip so the donor is the source.
    else if (/\b(07\d|06\d|071)\b/.test(ev.root) &&
             /\b(seek(s|ing)?|need(s|ing)?|request(s|ed|ing)?|ask(s|ing|ed)? for|awaits?|urgently|plead\w*|appeal(s|ed)? for|wants? more|calls? for)\b/.test(hay.slice(0, verbAt))) {
      const t = subj; subj = targ; targ = t;
      clearDir = true;
    }
  }

  // honest confidence: a deterministic regex match is never "certain" (max 0.95).
  //   base 0.45 (event coded + two actors) then evidence adjusts:
  //   +0.20 direction is clear (actors bracket the verb / passive by-agent)
  //   +0.10 exactly two actors in the whole headline (no ambiguous pairing)
  //   −0.15 speculative framing ("may/could/plans to")
  //   −0.15 the two actors sit more than MAX_GAP_WORDS apart (unrelated clauses)
  let confidence = 0.45;
  if (clearDir) confidence += 0.2;
  if (actors.length === 2) confidence += 0.1;
  else confidence -= 0.05 * (actors.length - 2); // more actors -> more pairing doubt
  if (SPEC.test(hay)) confidence -= 0.15;
  // symmetric/mutual cooperation between exactly two actors ("Germany and Poland
  // SIGN a deal", "Turkey, Russia AGREE") is a high-confidence tie even without a
  // before/after verb split — the act is inherently bilateral and direction is
  // moot. Reward it so clean deals clear the keep bar.
  const MUTUAL = /\b(sign(s|ed)?|ink(s|ed)?|finaliz\w+|seal(s|ed)?|agree(s|d)?|reach(es|ed)?|forge(s|d)?|strike(s)? a deal|join(tly)?|hold(s)? talks|deepen\w*|expand\w*)\b/;
  if (actors.length === 2 && !clearDir && MUTUAL.test(hay) &&
      (ev.goldstein > 3)) confidence += 0.2;
  // "diversifying supply from Russia" / "cut reliance ON the US": if the target is
  // the one being moved away from, this isn't a partnership — sink it below keep.
  if (away && targ.start != null && /\b(from|on|upon)\b/.test(hay.slice(0, targ.start + (targ.list[0] ? targ.list[0].matched.length : 0)))) confidence -= 0.4;

  // distance + clause guard: look at the text BETWEEN the subject and target.
  //   − far apart  -> likely unrelated clauses
  //   − a clause boundary sits between them ("… deal AS Iran war …",
  //     "Russia Sanctions Bill targets China") -> the second actor belongs to a
  //     different clause / is a compound-noun modifier, not a real counterpart.
  const CLAUSE = /\b(as|after|while|amid|amidst|despite|over|during|when|following|ahead of|before)\b/;
  if (subj.end != null && targ.start != null) {
    const lo = Math.min(subj.end, targ.start), hi = Math.max(subj.end, targ.start);
    const gapText = hay.slice(lo, hi);
    if (wc(gapText) > MAX_GAP_WORDS) confidence -= 0.15;
    if (CLAUSE.test(gapText)) confidence -= 0.25; // cross-clause pairing is usually noise
  }
  // compound-noun subject: actor immediately followed by a noun it modifies
  // ("Russia Oil …", "US Navy …", "China's exports …") is not the acting subject.
  if (subj.list.length === 1 && subj.list[0].at != null) {
    const s0 = subj.list[0];
    const tail = hay.slice(s0.at + s0.matched.length, s0.at + s0.matched.length + 22);
    if (/^\s*('?s\s+\w|(oil|gas|navy|army|military|bill|law|sanctions?|tariffs?|deal|policy|exports?|imports?|troops?)\b)/.test(tail)) {
      confidence -= 0.2;
    }
  }
  // indirect-approval framing: "Trump welcomes China['s] investment in Venezuela"
  // — subject approves of what the target does ELSEWHERE; not a bilateral act. This
  // is a structural false-positive, so DROP the tie outright rather than nudging.
  if (/\b(welcom\w+|hail(s|ed)?|praise\w+|backs?|backed|applaud\w+)\b/.test(hay.slice(0, verbAt + mNorm.length)) &&
      targ.start != null && /(investment|invest\w*|deal|move|bid|plan|push|expansion|entry|role|presence|spending)\b[^.]{0,20}\b(in|into|across)\b\s+\w/.test(hay.slice(targ.start))) {
    // ...but a plain "welcomes Japan defense spending increase" (no in/into third
    // place) is a real bilateral nod — only drop when a third location follows.
    return [];
  }
  confidence = Number(Math.max(0.1, Math.min(0.95, confidence)).toFixed(2));

  const out = [];
  const seenEdge = new Set(); // one headline -> at most one s->r edge (kills dupes)
  for (const s of subj.list) {
    for (const r of targ.list) {
      if (s.key === r.key) continue;
      const ek = s.key + ">" + r.key;
      if (seenEdge.has(ek)) continue;
      seenEdge.add(ek);
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
