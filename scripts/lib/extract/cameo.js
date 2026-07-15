/* lib/extract/cameo.js — event coding + Goldstein scoring.

   Maps the action in a headline onto a CAMEO-style event category and its
   published Goldstein conflict<->cooperation weight (-10 hostile .. +10
   cooperative). This is the same coding scheme GDELT/TABARI use, reduced to a
   curated, high-precision phrase dictionary tuned for the layers this product
   covers (diplomacy, sanctions, arms, trade, energy, aid, migration, alliances).

   Precision over recall on purpose: a phrase that isn't confidently an event is
   left uncoded (confidence 0) and handed to the LLM fallback later, rather than
   guessed. Longer/rarer phrases are tested first so "impose sanctions" wins over
   a bare "impose".

     headline text  ->  {code, root, label, goldstein, matched} | null
*/

/* Each rule: [regex, cameoRoot, goldstein, label]. Goldstein values follow the
   standard CAMEO->Goldstein table (Goldstein 1992 + CAMEO codebook). */
const RULES = [
  // --- material conflict (most hostile) ---
  // passive "X hit by Y" FIRST so the by-marker survives into `matched` and
  // relate.js can flip direction; lookahead keeps "targeted by sanctions" for
  // the sanctions rule below.
  [/\b(hit|struck|pounded|battered|targeted) by (?!(new |fresh |further |more )?(sanction|tariff|ban|restriction|curb))/, "19", -8.5, "saldırıya uğrama"],
  [/\b(invade(s|d)?|invading|invasion|full[- ]scale (war|assault))\b/, "19", -9.4, "askeri işgal"],
  [/\b(air ?strikes?|missile strikes?|bomb(ard|ed|ing)?|shell(ed|ing)?|drone strikes?)\b/, "19", -9.2, "hava/füze saldırısı"],
  // bare "X strikes Y" / "strikes on/against Y" — the single most common war
  // headline shape, previously UNCODED (only "launches strikes" matched). Guard
  // against the finance/labor senses ("strikes a deal", "workers strike").
  // "strike/strikes" as a MILITARY attack — but NOT "strike [a] ... deal/agreement/
  // balance/pact/accord" (up to ~28 chars of modifiers between: "strikes landmark
  // deal", "strike $10 billion frigate deal"), nor "workers strike", nor idioms.
  [/\b(strikes?|struck|strik(ing|es))\b(?![^.]{0,28}\b(deal|agreement|pact|accord|balance|gold|chord|bargain|partnership)\b)(?!\s+(back|out|down|a chord|oil|gold)\b)(?<!\bworkers?\s(strikes?|struck))/, "19", -9.2, "hava/füze saldırısı"],
  // "fire/launch missiles|rockets|drones at X" is a strike, not cooperation — must
  // outrank the support rule so "Iranian-backed Houthis fire missiles at Riyadh"
  // codes hostile, not "backed".
  [/\b(fire(s|d)?|launch(es|ed)?|rain(ed|ing)?|unleash(es|ed)?)\b[^.]{0,24}\b(missiles?|rockets?|ballistic|drones?|projectiles?|shells?|strikes?)\b/, "19", -9.0, "füze/roket saldırısı"],
  // "attack" as a WEAPON-PRODUCT modifier ("attack drones/jets/helicopters/subs")
  // is not an attack event — a supply/deal headline, not "X attacks Y". Negative
  // lookahead keeps the verb ("Israel attacks Iran") while dropping the product noun.
  [/\b(attack(ed|ing|s)?(?!\s+(drones?|aircraft|jets?|fighters?|helicopters?|choppers?|copters?|submarines?|subs?|vehicles?|boats?|craft|missiles?)\b)|assault|offensive|raid(ed|s)?)\b/, "18", -9.0, "silahlı saldırı"],
  [/\b(kill(ed|s|ing)?|deadly|casualties|troops? (killed|die))\b/, "18", -8.0, "ölümlü çatışma"],
  [/\b(clash(es|ed)?|firefight|cross[- ]border fire|exchange(d)? fire)\b/, "19", -7.0, "sınır çatışması"],
  [/\b(seiz(e|ed|ing)|captur(e|ed)|occup(y|ied|ation))\b/, "17", -6.5, "el koyma / işgal"],
  [/\b(deploy(ed|s|ment)?|mass(es|ed)? troops|military build[- ]?up|mobiliz)/, "15", -5.5, "askeri yığınak"],

  // "arms sales/transfers/exports to X" is a supply relationship even when the
  // sentence also mentions sanctions elsewhere — tested before the sanctions rule
  // so "France topped arms sales to Israel while backing mini-sanctions" codes as
  // a transfer, not a sanction.
  [/\b(arms?|weapons?|defen[cs]e|military) (sales?|transfers?|exports?|deliveries|shipments?|deals?|supplies)\b[^.]{0,20}\bto\b/, "060", 3.0, "silah/malzeme tedariki"],
  // military cooperation acts previously uncoded: training, basing, joint drills.
  [/\b(train(s|ed|ing)?|equips?|equipp(ed|ing))\b[^.]{0,25}\b(pilots?|troops?|forces?|soldiers?|army|navy|military|officers?|police)\b/, "060", 3.5, "askeri eğitim / donatım"],
  [/\b(build(s|ing)?|built|open(s|ed|ing)?|establish(es|ed|ing)?|set(s|ting)? up|station(s|ed|ing)?)\b[^.]{0,20}\b(naval |military |air )?(base|outpost|installation|garrison|facility)\b/, "060", -1.0, "askeri üs"],

  // --- coercion / sanctions ---
  // a "sanctions waiver/relief/exemption" is LIFTING sanctions, not imposing them
  // — negative lookahead so those headlines don't code as "yaptırım".
  [/\b(sanction(s|ed|ing)?(?!\s+(waiver|relief|exempt\w+|carve[- ]?out|lift\w*))|embargo|blacklist(ed)?|asset freeze|freeze(s)? assets)\b/, "163", -5.4, "yaptırım"],
  [/\b(ban(s|ned|ning)?|restrict(s|ed|ions)?|curb(s|ed)?|tariffs?|levy|levies|duties)\b/, "162", -4.0, "kısıtlama / tarife"],
  [/\b(expel(s|led)?|expuls|deport(s|ed|ation)?)\b/, "162", -4.4, "sınır dışı / ihraç"],
  [/\b(cut(s|ting)?|sever(s|ed)?|suspend(s|ed)?|break(s|ing)?|brok(e|en) off|down ?grad(e|es|ed))\b\s+(\w+\s+)?(ties|relations|diplomatic (ties|relations)|links)\b/, "162", -4.9, "ilişki kesme"],
  [/\b(suspend(s|ed)?|freez(e|es|ing)|halt(s|ed)?)\b.*\b(deals?|agreements?|pacts?|trea(ty|ties)|accords?|cooperation|exports?|imports?|shipments?)\b/, "162", -4.5, "askıya alma"],
  [/\b(recall(s|ed)? (its )?ambassador|summon(s|ed)? (the )?ambassador)\b/, "154", -3.8, "büyükelçi geri çağırma"],
  // withdrawing/ending support is NOT support — tested before the positive support
  // rule so "Ireland to End Housing Support for Ukrainians" codes as a pull-back.
  [/\b(end(s|ed|ing)?|cut(s|ting)?|halt(s|ed|ing)?|withdraw(s|al|ing|n)?|scrap(s|ped)?|slash(es|ed)?|remov(e|ed|es|ing)?|pull(s|ed)? (its )?)\b[^.]{0,18}\b(support|aid|assistance|funding|backing|cooperation|deal|troops?|forces?)\b/, "162", -3.5, "destek/yardım kesme"],
  // "<support/cooperation/funding> removed/cut" in the other word order too
  [/\b(support|aid|assistance|funding|cooperation|backing)\b[^.]{0,14}\b(removed|cut|slashed|halted|withdrawn|scrapped|frozen|suspended)\b/, "162", -3.5, "destek/yardım kesme"],
  // "measures/action/strikes AGAINST <country>" is hostile framing — a coop verb
  // nearby ("cooperation removed from measures against Tanzania") must not read
  // as cooperation. Coded as coercion so tone matches.
  [/\b(measures?|action|sanctions?|steps?|move|bill|strikes?|campaign)\b[^.]{0,20}\bagainst\b/, "160", -3.0, "karşı önlem"],

  // --- verbal conflict ---
  [/\b(threaten(s|ed|ing)?|warn(s|ed)? of|ultimatum)\b/, "138", -6.9, "tehdit"],
  [/\b(accus(e|es|ed|ation)|blam(e|es|ed))\b/, "112", -2.0, "suçlama"],
  [/\b(condemn(s|ed|ation)?|denounc(e|ed)|slam(s|med)?|protest(s|ed)?)\b/, "111", -1.6, "kınama / protesto"],
  [/\b(reject(s|ed)?|refus(e|es|ed)|oppos(e|es|ed)|deny|denies)\b/, "120", -2.2, "ret / karşı çıkma"],
  [/\b(tension(s)?|dispute|row|stand[- ]?off|(?<!de[- ])escalat)/, "110", -2.0, "gerginlik"],
  [/\b(summon(s|ed)?|demand(s|ed)?)\b/, "130", -3.4, "resmi talep / çağrı"],

  // "X blocks/vetoes/scraps a deal/venture" (either word order) is OBSTRUCTION,
  // not the cooperation its object names — tested BEFORE the deal/venture rules
  // below (first match wins). "cancel/halt a strike/war" is deliberately NOT here:
  // that de-escalation stays positive (handled by the ceasefire rule).
  [/\b(veto(es|ed)?|block(s|ed)?|scrap(s|ped)?|derail(s|ed)?|scupper(s|ed)?|torpedo(es|ed)?|reject(s|ed)?)\b[^.]{0,40}\b(deals?|joint ventures?|ventures?|agreements?|pacts?|trea(ty|ties)|accords?|partnerships?|bids?|resolutions?)\b/, "121", -3.0, "veto / engelleme"],
  [/\b(deals?|joint ventures?|ventures?|agreements?|pacts?|accords?|partnerships?)\b[^.]{0,40}\b(block(ed)?|vetoed|scrapped|derailed|scuppered|torpedoed|rejected|collapsed?|(fell|falls) through)\b/, "121", -3.0, "veto / engelleme"],

  // --- arms/goods trade (very common, direction-bearing) ---
  // "A buys/orders X from B" and "A sells/supplies X to B": these carry a clear
  // buyer<-seller direction that relate.js resolves via the from/to marker. Tested
  // high so a concrete transfer beats a generic "deal".
  // weapons-specific buy/sell (needs a materiel noun) label as arms; generic
  // buy/sell-from/to falls through to the plain trade label below so oil/gas/grain
  // don't get mislabeled "silah/malzeme".
  [/\b(buy(s|ing)?|bought|purchas\w+|order(s|ed)?|acquir\w+)\b[^.]{0,40}\b(arms?|weapons?|jets?|fighters?|missiles?|drones?|tanks?|artillery|warships?|submarines?|defen[cs]e systems?|air ?defen[cs]e|s-\d{3})\b[^.]{0,20}\bfrom\b/, "061", 5.0, "silah/malzeme alımı"],
  [/\b(sell(s|ing)?|sold|suppl(y|ies|ied)|deliver(s|ed|ing)?)\b[^.]{0,40}\b(arms?|weapons?|jets?|fighters?|missiles?|drones?|tanks?|artillery|warships?|submarines?|defen[cs]e systems?)\b[^.]{0,20}\bto\b/, "060", 4.0, "silah/malzeme tedariki"],
  // generic goods buy/sell keeps direction but a neutral trade label
  [/\b(buy(s|ing)?|bought|purchas\w+|order(s|ed)?|import(s|ed|ing)?)\b[^.]{0,40}\bfrom\b/, "061", 5.0, "ticaret / tedarik"],
  [/\b(sell(s|ing)?|sold|export(s|ed|ing)?|suppl(y|ies|ied)|deliver(s|ed|ing)?|ship(s|ped|ping)?)\b[^.]{0,40}\bto\b/, "061", 4.0, "ticaret / tedarik"],

  // --- verbal cooperation ---
  // signing a deal outranks the meeting/visit it happened at, so test it first
  [/\b(sign(s|ed)?|ink(s|ed)?)\b.*\b(deals?|agreements?|pacts?|trea(ty|ties)|accords?|mous?|memorandums?|contracts?)\b/, "057", 7.0, "anlaşma imzası"],
  [/\b(talks?|dialogue|negotiat(e|es|ed|ions?)|discuss(es|ed|ions?)?)\b/, "036", 4.0, "görüşme / müzakere"],
  [/\b(meet(s|ing)?|summit|hold(s)? talks|phone call|calls? for (calm|talks))\b/, "036", 3.5, "üst düzey görüşme"],
  [/\b(visit(s|ed|ing)?|arrives? in|trip to|tour(s)?)\b/, "042", 3.4, "resmi ziyaret"],
  // "backs/backed" only as a verb — NOT the "-backed" adjective ("Iranian-backed
  // rebels"), which names an actor, not an act of support between the two states.
  [/\b(praise(s|d)?|welcom(e|es|ed)|hail(s|ed)?|(?<!-)\bbacks\b|(?<!-)\bbacked\b|support(s|ed)?)\b/, "051", 3.4, "destek / övgü"],
  [/\b(pledge(s|d)?|vow(s|ed)?|promis(e|es|ed)|commit(s|ted)?)\b/, "057", 4.5, "taahhüt"],
  [/\b(apolog(y|ize|ized)|express(es|ed)? regret|condolences?)\b/, "055", 4.0, "özür / taziye"],

  // --- material cooperation (most friendly) ---
  [/\b(deal|agreement|pact|treaty|accord|partnership)\b/, "057", 6.0, "anlaşma / ortaklık"],
  [/\b(alliance|allies|coalition|bloc|join(s|ed)? (nato|the))\b/, "056", 6.0, "ittifak"],
  [/\b(aid|assistance|humanitarian|relief|donat(e|es|ed|ion)?)\b/, "070", 7.0, "yardım"],
  [/\b(loan(s)?|bailout|credit line|financ(e|es|ing)|bond(s)?|debt relief)\b/, "071", 6.5, "kredi / finansman"],
  // bare "billion"/"$" alone are NOT an investment event — a sanctions or aid
  // headline can name a sum too. Require an investment verb/noun near the money,
  // and never fire if a coercion word already colours the sentence.
  [/\b(invest(s|ed|ment)?|fund(s|ing)?|pipeline|infrastructure)\b/, "071", 6.4, "yatırım"],
  [/(?<!\b(sanction|embargo|ban|tariff|levy|penalt|fine)\w*[^.]{0,30})\$?\d[\d.,]*\s*(billion|trillion|bn)\b[^.]{0,30}\b(invest|deal|fund|stake|pledge|project)/, "071", 6.4, "yatırım"],
  // bare "oil"/"gas" is a topic, not a trade event ("Russia Oil Sanctions Bill").
  // require an actual trade action next to the commodity.
  [/\b(export(s|ed)?|import(s|ed)?|trade deal|supply|shipment|grain|wheat)\b/, "061", 5.0, "ticaret / tedarik"],
  [/\b(oil|gas|energy|crude|lng)\s+(deal|trade|export|import|supply|shipment|sales?|purchase|contract)\b/, "061", 5.0, "ticaret / tedarik"],
  [/\b(buy|buys|import|imports|purchas\w+)\b[^.]{0,20}\b(oil|gas|crude|lng)\b/, "061", 5.0, "ticaret / tedarik"],
  [/\b(cooperat(e|ion|ive)|collaborat|joint (venture|exercise|project)|strengthen(s|ed)? ties|deepen(s|ed)? ties)\b/, "050", 5.0, "işbirliği"],
  // a COLLAPSING ceasefire is conflict resumption, not normalization — tested
  // before the positive ceasefire rule so "truce collapses / ceasefire is over"
  // doesn't read as peace. "agree/hold a ceasefire" stays positive below.
  [/\b(cease[- ]?fire|truce|peace (deal|talks|plan|process))\b[^.]{0,24}\b(collapse[sd]?|fail(s|ed)?|breaks? down|broke down|violat(e|ed|ion|ing)?|broken|shatter(s|ed)?|fell apart|in tatters|(is|was|now|declared)?\s?over)\b/, "190", -6.0, "ateşkes çöküşü"],
  [/\b(cease[- ]?fire|truce|peace (deal|talks|plan)|de[- ]escalat|normaliz)/, "046", 7.0, "ateşkes / normalleşme"],
  [/\b(prisoner (swap|exchange)|swap prisoners|releases? (detainees|prisoners|hostages)|hostage release)\b/, "080", 5.0, "esir takası / serbest bırakma"],

  // --- recall expansion (lower priority: generic verbs, tested last) ---
  [/\b(kidnap(s|ped)?|abduct(s|ed)?|hostage[- ]?tak)/, "181", -8.5, "kaçırma"],
  [/\b(arrest(s|ed)?|detain(s|ed)?|jail(s|ed)?|imprison)/, "173", -4.4, "gözaltı / tutuklama"],
  [/\b(cyber ?attack(s|ed)?|hack(s|ed|ing)?|espionage|spy(ing)?|breach(es|ed)?)\b/, "175", -5.0, "siber saldırı / casusluk"],
  [/\b(veto(es|ed)?|block(s|ed)? (a )?(resolution|deal|bid))\b/, "121", -3.0, "veto / engelleme"],
  [/\b(coup|overthrow|topple(s|d)?)\b/, "180", -7.0, "darbe"],
  [/\b(withdraw(s|al|n)?|pull(s|ed)? (out|back)|retreat)/, "087", 2.0, "geri çekilme"],
  [/\b(urge(s|d)?|call(s|ed)? on|press(es|ed)? |push(es|ed)? for|appeal(s|ed)?)\b/, "020", 2.8, "çağrı / baskı"],
  [/\b(seek(s|ing)?|offer(s|ed)?|propos(e|es|ed|al)|host(s|ed)?|invite(s|d)?)\b/, "030", 3.2, "girişim / davet"],
  [/\b(boost(s|ed)?|expand(s|ed)?|deepen(s|ed)?|strengthen(s|ed)?|grow(s|ing)? ties|forge(s|d)?)\b/, "050", 4.5, "ilişki güçlendirme"],
  [/\b(supply|supplie[sd]|deliver(s|ed|y)?|send(s)? (arms|weapons|troops|missiles|drones)|arms? (sale|deal))\b/, "060", 3.0, "silah/malzeme tedariki"],
  [/\b(agree(s|d)?|approv(e|es|ed)|ratif(y|ies|ied)|endorse(s|d)?)\b/, "050", 5.0, "onay / mutabakat"],
  [/\b(help(s|ed)?|assist(s|ed)?|rescue(s|d)?|evacuat)/, "070", 4.0, "yardım / tahliye"],
];

const ROOT_QUAD = {
  // CAMEO quad-class for coloring: verbal-coop / material-coop / verbal-conf / material-conf
};

function code(text) {
  const t = " " + String(text || "").toLowerCase() + " ";
  for (const [re, root, gold, label] of RULES) {
    const m = t.match(re);
    if (m) return { code: root, root, label, goldstein: gold, matched: m[0].trim() };
  }
  return null;
}

module.exports = { code, RULES };
