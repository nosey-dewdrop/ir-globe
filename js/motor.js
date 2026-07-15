/* js/motor.js — v2 relation-extraction engine → readable Turkish.
   PURE render helpers only; no fetching. Each page loads the three motor files
   itself (globe via Store, dizin/akış via their own fetch) and hands the parsed
   objects in. That keeps this module node-testable and coupling-free.

   Inputs are the engine outputs verified in PROJECT.md:
     events = data/events/index.json  { pairs, countries, events[], ... }
     graph  = data/events/graph.json  { top[], centrality, spikes[], week }
   Everything printed is engine-derived from real headlines — no fabrication.
   Country keys are lowercase and match the globe registry (verified 119/119). */

const Motor = (() => {
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* unordered pair key, same convention the index/graph use ([a,b] sorted) */
  const pairKey = (a, b) => [a, b].sort().join("|");

  /* Goldstein score (−10 conflict … +10 cooperation) → one honest word + a mark.
     No colour, no pill — editorial text only (style law). */
  function toneWord(g) {
    if (g == null || isNaN(g)) return "";
    if (g >= 2.5) return "işbirliği";
    if (g > 0) return "ılımlı";
    if (g === 0) return "karışık";
    if (g > -2.5) return "gerginlik";
    return "çatışma";
  }
  /* the arrow reads "up = good"; a rising ARMS flow is not good news. So an arrow
     is only shown for genuinely relational tone (cooperation vs conflict). Arms
     and other heavy transfers get a neutral dot — the event word carries meaning,
     the arrow does not pretend a weapons deal is a stock gain. */
  const toneMark = (g, layer) => {
    if (layer === "silah" || layer === "us") return "·";
    return g > 0 ? "↑" : g < 0 ? "↓" : "·";
  };

  /* a short date if the caller gave TRDate; else the raw ISO tail */
  function shortDate(d) {
    if (!d) return "";
    if (typeof TRDate !== "undefined" && TRDate.short) return TRDate.short(d);
    return String(d).slice(5); // "07-11"
  }

  /* the radar sells "her hafta taze" — so displayed event rows are limited to a
     recent window. Half the coded pairs have their newest event months/years back
     (one stale feed reaches 2006); showing those reads as broken, not thin. The
     cutoff is data-relative (newest event − N days), not wall-clock, so it stays
     honest whenever the page is viewed. Aggregate stats (rank/tone/spike) are NOT
     date-filtered — those are network-wide, not a dated headline. */
  const RECENT_DAYS = 90;
  function cutoffOf(events) {
    if (!events) return "";
    if (events.__cut == null) {
      let max = "";
      (events.events || []).forEach((e) => { if (e.date > max) max = e.date; });
      if (!max) { events.__cut = ""; return ""; }
      const d = new Date(max);
      d.setDate(d.getDate() - RECENT_DAYS);
      events.__cut = d.toISOString().slice(0, 10);
    }
    return events.__cut;
  }

  /* recent coded events for a pair / country, newest first, within the window */
  function eventsFor(events, filterFn, limit) {
    if (!events || !Array.isArray(events.events)) return [];
    const cut = cutoffOf(events);
    return events.events
      .filter((e) => (!cut || e.date >= cut) && filterFn(e))
      .sort((a, b) => String(b.date).localeCompare(String(a.date)))
      .slice(0, limit || 3);
  }

  function evRow(e, disp) {
    const who = `${esc(disp(e.s))} → ${esc(disp(e.r))}`;
    const label = e.event ? ` · ${esc(e.event)} ${toneMark(e.goldstein, e.layer)}` : ` ${toneMark(e.goldstein, e.layer)}`;
    return `<p class="ev"><span class="ev-h">${who}${label}</span><span class="ev-d">${esc(shortDate(e.date))}</span></p>`;
  }

  /* spike lookup: is this pair one of THIS week's z-score spikes? */
  function spikeFor(graph, key) {
    if (!graph || !Array.isArray(graph.spikes)) return null;
    return graph.spikes.find((s) => s.pair === key) || null;
  }

  /* precomputed PageRank ranking (cached on the graph object, cheap) */
  function rankOf(graph, c) {
    if (!graph || !graph.centrality) return 0;
    if (!graph.__rank) {
      const order = Object.keys(graph.centrality)
        .sort((a, b) => (graph.centrality[b].pr || 0) - (graph.centrality[a].pr || 0));
      graph.__rank = {};
      order.forEach((k, i) => { graph.__rank[k] = i + 1; });
    }
    return graph.__rank[c] || 0;
  }

  /* ── tie panel: "olay radarı" for the selected relation ── */
  function radarTie(events, graph, s, r, disp) {
    disp = disp || ((x) => x);
    const key = pairKey(s, r);
    const spike = spikeFor(graph, key);
    const recent = eventsFor(events, (e) => e.pair === key, 99); // all recent, window-filtered
    const evs = recent.slice(0, 3);
    if (!spike && !evs.length) return ""; // nothing recent/coded → no empty box
    let html = `<div class="lbl">olay radarı</div><div class="radar">`;
    if (spike)
      html += `<p class="radar-spike">bu hafta hareketlendi · ${spike.n} haber</p>`;
    if (evs.length) {
      html += evs.map((e) => evRow(e, disp)).join("");
      if (recent.length > evs.length)
        html += `<p class="radar-more">+ ${recent.length - evs.length} olay daha</p>`;
    }
    html += `</div><p class="radar-note">haberlerden otomatik çıkarıldı</p>`;
    return html;
  }

  /* ── country panel: where this country sits in the news network ── */
  function radarCountry(events, graph, c, disp) {
    disp = disp || ((x) => x);
    const cen = graph && graph.centrality && graph.centrality[c];
    const cData = events && events.countries && events.countries[c];
    const evs = eventsFor(events, (e) => e.s === c || e.r === c, 3);
    if (!cen && !cData && !evs.length) return "";
    const rank = rankOf(graph, c);
    const partners = cData ? cData.partners : cen ? cen.deg : 0;
    const tone = cen ? cen.tone : cData ? cData.avg : null;
    let html = `<div class="lbl">haber ağında</div><div class="radar">`;
    if (rank) html += row("ağ sıralaması", `#${rank}`);
    if (partners) html += row("bağlı olduğu ülke", partners);
    if (tone != null && toneWord(tone))
      html += row("genel ton", `${toneWord(tone)} ${toneMark(tone)}`);
    if (evs.length)
      html += `<div class="radar-evs">${evs.map((e) => evRow(e, disp)).join("")}</div>`;
    html += `</div><p class="radar-note">haberlerden otomatik çıkarıldı</p>`;
    return html;
  }
  function row(k, v) {
    return `<p class="row"><span>${esc(k)}</span><b>${esc(v)}</b></p>`;
  }

  /* ── akış radar: this week's spikes as editorial lines ── */
  function akisRadar(graph, disp) {
    disp = disp || ((x) => x);
    if (!graph || !Array.isArray(graph.spikes) || !graph.spikes.length) return "";
    const lines = graph.spikes
      .slice()
      .sort((a, b) => (b.z || 0) - (a.z || 0))
      .slice(0, 8)
      .map((s) => {
        const [a, b] = String(s.pair).split("|");
        return `<p class="rl"><span class="rl-p">${esc(disp(a))} — ${esc(disp(b))}</span><span class="rl-n">${s.n} haber</span></p>`;
      })
      .join("");
    if (!lines) return "";
    return `<section class="akis-radar"><h2>bu hafta hareketlenenler <span class="cnt">radar</span></h2><div class="radar-lines">${lines}</div></section>`;
  }

  return { pairKey, toneWord, toneMark, radarTie, radarCountry, akisRadar, _esc: esc };
})();

/* node test harness picks these up; browser ignores it */
if (typeof module !== "undefined" && module.exports) module.exports = Motor;
