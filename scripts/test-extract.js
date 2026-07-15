/* test-extract.js — regression tests for the relation-extraction ENGINE itself
   (gazetteer -> cameo -> relate). Every guard added while hardening the engine is
   pinned here so a future regex edit can't silently reintroduce a fixed bug.

   Two kinds of assertion:
     KEEP  — a real, correctly-directed tie must survive at conf >= 0.60
     DROP  — a headline that must NOT produce a shown tie (noise/reversed/etc.)

     node scripts/test-extract.js   (also runs in news.yml before the pipeline)
*/

const assert = require("assert");
const { extractAll } = require("../scripts/lib/extract/relate");

const SHOW = 0.6; // keep threshold used on the live globe
const shown = (title) => extractAll(title).filter((e) => e.confidence >= SHOW);
const edges = (title) => shown(title).map((e) => e.s + "->" + e.r);

let n = 0, fail = 0;
function keep(title, expectEdge) {
  n++;
  const got = edges(title);
  const ok = got.some((e) => e === expectEdge);
  if (!ok) { fail++; console.log(`FAIL ${n} KEEP  want ${expectEdge}  got [${got.join(", ") || "none"}]  :: ${title}`); }
  else console.log(`ok ${n} keep ${expectEdge}`);
}
function drop(title) {
  n++;
  const got = edges(title);
  if (got.length) { fail++; console.log(`FAIL ${n} DROP  got [${got.join(", ")}]  :: ${title}`); }
  else console.log(`ok ${n} drop`);
}
function label(title, expectEvent) {
  n++;
  const r = shown(title);
  const ok = r.some((e) => e.event === expectEvent);
  if (!ok) { fail++; console.log(`FAIL ${n} LABEL want "${expectEvent}"  got [${r.map((e) => e.event).join(", ") || "none"}]  :: ${title}`); }
  else console.log(`ok ${n} label ${expectEvent}`);
}

/* ── real ties that MUST survive ── */
keep("Germany and Poland sign defense deal", "germany->poland");
keep("Russia launches air strikes on Ukraine", "russia->ukraine");
keep("Israel strikes Iran with missiles", "israel->iran");           // bare-strikes coverage
keep("Turkey buys S-400 missiles from Russia", "russia->türkiye");   // buy-from direction
keep("India sells drones to Armenia", "india->armenia");             // sell-to direction
keep("US imposes sanctions on North Korea", "united states->north korea");
keep("Netherlands Pledges 580 Million for Weapons for Ukraine", "netherlands->ukraine");
keep("Germany to finance the purchase of 50,000 drones for Ukraine", "germany->ukraine"); // financier is source
keep("Canada announces military aid to Ukraine", "canada->ukraine");
keep("Ethiopia receives 1 billion aid from US", "united states->ethiopia"); // receive-flip
keep("Canada imposes new sanctions on Russia", "canada->russia");
keep("China sanctions US defense firms in retaliation", "china->united states");

/* ── negation (the apostrophe bug): all must DROP ── */
drop("Germany won't sell tanks to Israel");
drop("India doesn't supply weapons to Iran");
drop("Poland hasn't signed the deal with Russia");
drop("Why Russia and China Aren't Helping Iran");
drop("France Should Stop Selling Arms to the United Arab Emirates");

/* ── third-country / venue / topic must DROP ── */
drop("Top diplomats of South Korea, US, Japan to meet in Turkey");   // venue
drop("UK, Netherlands leaders hold talks on security, Ukraine and migration"); // topic
drop("US Russia Sanctions Bill Eases Threat of Tariffs on China and India"); // legislative bill
drop("The Iran Deal Comes at a Cost to Israel");                     // cost-to-third
drop("China Signs Submarine Deal With US Ally");                     // ally modifier

/* ── hypothetical / question / advocacy must DROP ── */
drop("Can Trump Cut Off All Trade With Spain? Here Is What Experts Say");
drop("Pakistan urges Türkiye, Qatar to join defense pact with Saudi Arabia");
drop("Czechia may reduce aid to Ukrainian refugees in 2028");
drop("Japan Should Reject Myanmar Junta's Call for Development Aid");

/* ── polarity / negation-of-event must DROP ── */
drop("Germany blocks weapons exports to Saudi Arabia");
drop("China Has Suspended Negotiations with Russia on Power of Siberia 2");
drop("Italy suspends arms deal with Israel");
drop("Ireland to End Housing Support for 16,000 Ukrainian Refugees");
drop("Spain Moves to Mitigate Impacts of New U.S. Tariffs");        // tariff victim
drop("US and China agree to reduce tariffs after Geneva talks");    // de-escalation

/* ── invasion background vs active ── */
drop("Four years after the Russian invasion, has Czechia shifted?");
drop("Russian Invasion Could Make India a Wheat Player");
keep("Russia invades Ukraine", "russia->ukraine");                   // active invasion kept
keep("Russia launches full-scale invasion of Ukraine", "russia->ukraine");

/* ── coercion yoked to cooperation (IR-substance) must DROP ── */
drop("Germany to Limit Ukrainian Men Seeking Asylum as Kyiv, Berlin Sign Defense Pact");

/* ── analysis / theft / indirect-approval must DROP ── */
drop("US Occupation Assistance: Iraq, Germany, and Japan Compared");
drop("Ukrainian grain was stolen, relabeled Russian, and sold");
drop("Trump welcomes China and India investment in Venezuela oil");

/* ── background-strike vs cooperative event, instrumentalization ── */
drop("US delivers military aid to Nigeria After Christmas strikes"); // aid, not attack
drop("Russia Expands Wagner Playbook Using Algeria as Covert Weapons Hub"); // instrumentalized
drop("Germany to deploy Patriot air defense unit to Türkiye under NATO mission"); // defensive
drop("Iran conflict threatens Brazil grain exports"); // threatens-a-consequence
keep("China sanctions US defense firms in retaliation", "china->united states"); // coercive floor

/* ── coverage: previously-uncoded common IR shapes ── */
keep("Iran cuts diplomatic ties with Morocco", "iran->morocco");
keep("France trains Ukrainian pilots", "france->ukraine");
keep("China builds naval base in Cambodia", "china->cambodia");

/* ── IO / multilateral actors ── */
keep("NATO allies pledge support to Ukraine", "nato->ukraine");
keep("EU imposes tariffs on China", "eu->china");
keep("UN Security Council condemns North Korea", "un->north korea");

/* ── colon/dash tail is a separate blurb, only main clause matters ── */
drop("Bangladesh seeks IMF aid: How badly has Iran war hit its economy");
keep("Turkey signs deal with Spain: what it means for NATO", "türkiye->spain");

/* ── strike-a-deal is trade, not a military strike ── */
label("Canada Strikes Landmark Deal to Export LNG to Germany", "ticaret / tedarik");
keep("Israel strikes Iran with missiles", "israel->iran"); // real strike still attack

/* ── label sanity ── */
label("Israel strikes Iran with missiles", "hava/füze saldırısı");
label("France topped EU arms sales to Israel while backing mini-sanctions", "silah/malzeme tedariki"); // not sanction

console.log(`\n${n - fail}/${n} extract tests passed`);
if (fail) { console.error(`${fail} FAILED`); process.exit(1); }
