/* iliski.js — pair sayfası: iki ülke arasındaki HER ŞEY tek görünümde.
   ?a=<key>&b=<key> alır (ülke anahtarları, registry'deki lowercase halleri).
   yapısal bağlar katman dosyalarından, olay radarı + haftalık ton motor
   çıktılarından, manşetler haber dosyalarından. hepsi istemcide; sunucu yok. */
(function () {
  var mount = document.getElementById("pair");
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  var q = new URLSearchParams(location.search);
  var A = (q.get("a") || "").toLowerCase().trim();
  var B = (q.get("b") || "").toLowerCase().trim();

  function fail(msg) {
    mount.innerHTML = '<h1>ilişki</h1><p class="lede">' + esc(msg) +
      ' <a href="ulke/index.html">Ülke dizininden</a> seçebilir ya da <a href="index.html">küreye</a> dönebilirsin.</p>';
  }
  if (!A || !B || A === B) { fail("İki farklı ülke gerekiyor."); return; }

  /* haftalık ton çizgisi: motor serisinden küçük, kütüphanesiz SVG */
  function trendSvg(series) {
    var weeks = Object.keys(series).sort();
    if (weeks.length < 3) return "";
    var W = 560, H = 120, P = 18;
    var xs = function (i) { return P + (i * (W - 2 * P)) / (weeks.length - 1); };
    var ys = function (v) { var c = Math.max(-10, Math.min(10, v)); return H - P - ((c + 10) / 20) * (H - 2 * P); };
    var pts = weeks.map(function (w, i) { return xs(i).toFixed(1) + "," + ys(series[w].avg).toFixed(1); }).join(" ");
    var EN = typeof I18N !== "undefined" && I18N.isEn;
    return '<section class="trend"><h2>' + (EN ? "relationship week to week" : "ilişki haftadan haftaya") + ' <span class="cnt">' + (EN ? "up = closer · down = tension" : "yukarı = yakınlaşma · aşağı = gerginlik") + "</span></h2>" +
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + (EN ? "weekly relationship tone line" : "haftalık ilişki tonu çizgisi") + '">' +
      '<line x1="' + P + '" y1="' + ys(0) + '" x2="' + (W - P) + '" y2="' + ys(0) + '" stroke="#d9d9d9" stroke-dasharray="3 4"/>' +
      '<polyline points="' + pts + '" fill="none" stroke="#0a2a5e" stroke-width="1.6"/>' +
      weeks.map(function (w, i) { return '<circle cx="' + xs(i) + '" cy="' + ys(series[w].avg) + '" r="2" fill="#0a2a5e"/>'; }).join("") +
      '<text class="tl" x="' + P + '" y="' + (H - 3) + '">' + esc(weeks[0]) + '</text>' +
      '<text class="tl" x="' + (W - P) + '" y="' + (H - 3) + '" text-anchor="end">' + esc(weeks[weeks.length - 1]) + "</text>" +
      '</svg><p class="meta">' + (EN ? "auto-extracted from news · weekly average" : "haberlerden otomatik çıkarıldı · hafta başına ortalama") + "</p></section>";
  }

  Promise.all([Store.countries(), Store.layerIndex()]).then(function (r) {
    var COUNTRIES = r[0], LAYERS = r[1];
    if (!COUNTRIES[A] || !COUNTRIES[B]) { fail("Ülke bulunamadı."); return; }
    var da = COUNTRIES[A].disp || A, db = COUNTRIES[B].disp || B;
    document.title = da + " ↔ " + db + " — kim kime ne satıyor?";
    if (typeof Ilgi !== "undefined") Ilgi.note({ countries: [A, B], w: 1 });

    var keys = LAYERS.map(function (l) { return l.key; });
    return Promise.all([
      Promise.all(keys.map(function (k) { return Store.layer(k).catch(function () { return null; }); })),
      Promise.all(keys.map(function (k) { return Store.news(k).catch(function () { return {}; }); })),
      Store.events().catch(function () { return null; }),
      Store.graph().catch(function () { return null; }),
      Store.newsMeta().catch(function () { return null; }),
    ]).then(function (all) {
      var lays = all[0], bags = all[1], events = all[2], graph = all[3], nmeta = all[4];
      var disp = function (k) { return COUNTRIES[k] ? COUNTRIES[k].disp : k; };

      /* yapısal bağlar: iki ülke arasındaki her katman kaydı */
      var tieRows = "";
      LAYERS.forEach(function (l, i) {
        var lay = lays[i];
        if (!lay || !lay.ties) return;
        lay.ties.forEach(function (t) {
          var hit = (t.s === A && t.r === B) || (t.s === B && t.r === A);
          if (!hit) return;
          var num = t.exp != null ? ' <span class="pct">%' + esc(t.exp) + "</span>" : "";
          var note = t.note ? ' — <span class="note">' + esc(t.note) + "</span>" : "";
          tieRows += '<li><a href="konu/' + esc(l.key) + '/">' + esc(l.label) + "</a>: " +
            esc(disp(t.s)) + " → " + esc(disp(t.r)) + num + note + "</li>";
        });
      });

      /* olay radarı + haftalık seri (motor çıktıları) */
      var radar = typeof Motor !== "undefined" ? Motor.radarTie(events, graph, A, B, disp, 12) : "";
      var pairKey = [A, B].sort().join("|");
      var pairData = events && events.pairs && events.pairs[pairKey];
      var trend = pairData && pairData.weekly ? trendSvg(pairData.weekly) : "";

      /* MÜŞTERİ İHTİYACI: bir analist/gazeteci sayfayı açar açmaz "bu iki ülke
         arasında ne oluyor" cevabını tek cümlede istiyor — içindekiler değil.
         Bu özet doğrudan brief'e kopyalanabilir. Motorun kendi verisinden kurulur. */
      var summary = "";
      if (pairData && pairData.n) {
        // overall tone = mean of the weekly averages (pairData has no top-level avg)
        var weeks = pairData.weekly || {}, sum = 0, wc = 0;
        Object.keys(weeks).forEach(function (w) { if (typeof weeks[w].avg === "number") { sum += weeks[w].avg; wc++; } });
        var avg = wc ? sum / wc : 0;
        var EN = typeof I18N !== "undefined" && I18N.isEn;
        var yon = avg < -1 ? (EN ? "tension is dominant" : "gerginlik ağır basıyor")
          : avg > 1 ? (EN ? "cooperation is dominant" : "işbirliği ağır basıyor")
          : (EN ? "both cooperation and tension" : "hem işbirliği hem gerginlik var");
        // layers is an object {key:count}; take the busiest layer names
        var layerNames = Object.keys(pairData.layers || {})
          .sort(function (a, b) { return pairData.layers[b] - pairData.layers[a]; })
          .map(function (k) { var lab = LAYERS.filter(function (l) { return l.key === k; })[0]; var nm = lab ? lab.label : k; return (typeof I18N !== "undefined") ? I18N.layer(nm) : nm; })
          .slice(0, 3).join(", ");
        // date-stamped narrative — the paste-ready sequence an analyst writes a brief from.
        var mine = (events && events.events || [])
          .filter(function (e) { return e.pair === pairKey; })
          .sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
        var mo = EN ? ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] : ["oca","şub","mar","nis","may","haz","tem","ağu","eyl","eki","kas","ara"];
        var shortD = function (d) { var p = String(d).split("-"); return p.length === 3 ? (EN ? (mo[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10)) : (parseInt(p[2], 10) + " " + (mo[parseInt(p[1], 10) - 1] || ""))) : d; };
        // Highlights = the REAL headlines that drive the signal, not generic
        // event-type labels. The analyst pastes these straight into a brief. Dedupe
        // by story (title) and by day+layer so three Jul-14 escalation lines collapse
        // to one, giving 3 DISTINCT sourced moments.
        var seenStory = {}, hi = [];
        mine.filter(function (e) { return e.title && typeof e.goldstein === "number" && Math.abs(e.goldstein) >= 4; })
          .forEach(function (e) {
            var k = (e.title || "").slice(0, 40).toLowerCase() + "|" + e.date + "|" + e.layer;
            if (!seenStory[k] && hi.length < 3) { seenStory[k] = 1; hi.push(e); }
          });
        var seq = hi.map(function (e) {
          var line = esc(e.title) + " (" + esc(shortD(e.date)) + (e.pub ? " · " + esc(e.pub) : e.src ? " · " + esc(e.src) : "") + ")";
          return e.url ? '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + line + "</a>" : line;
        }).join("<br>");
        summary = '<p class="pair-summary">' +
          (EN ? "In the news the engine read, between " + esc(da) + " and " + esc(db) + " <strong>" + yon + "</strong>"
              : "motorun okuduğu son haberlerde " + esc(da) + " ile " + esc(db) + " arasında <strong>" + yon + "</strong>") +
          " (" + pairData.n + (EN ? " coded events" : " kodlanmış olay") + (layerNames ? " · " + esc(layerNames) : "") + ").</p>" +
          (seq ? '<div class="pair-highlights"><span class="hi-lead">' + (EN ? "This week's key headlines" : "bu haftanın öne çıkan başlıkları") + "</span>" + seq + "</div>" : "");
      }

      /* manşetler: iki yönün tüm katmanlardaki haberleri, yeni üstte */
      var arts = [], seen = {};
      LAYERS.forEach(function (l, i) {
        var edges = bags[i] || {};
        [A + "→" + B, B + "→" + A].forEach(function (edge) {
          (edges[edge] || []).forEach(function (a) {
            if (!a || !a.title || !a.url || seen[a.title]) return;
            seen[a.title] = 1;
            arts.push({ t: a.title, src: a.source, d: a.date || "", u: a.url, l: l.label, pub: a.pub || "" });
          });
        });
      });
      arts.sort(function (x, y) { return y.d.localeCompare(x.d); });
      var ENh = typeof I18N !== "undefined" && I18N.isEn;
      var artRow = function (a) {
        var outlet = esc(a.src) + (a.pub ? ' <span class="dg-dom">(' + esc(a.pub) + ")</span>" : "");
        var lyr = (typeof I18N !== "undefined") ? I18N.layer(a.l) : a.l;
        return '<a class="dg" href="' + esc(a.u) + '" target="_blank" rel="noopener">' +
          '<span class="dg-t">' + esc(a.t) + '</span>' +
          '<span class="dg-m">' + outlet + " · " + esc(lyr) + (a.d ? " · " + esc(a.d) : "") + "</span></a>";
      };
      // group headlines by recency so "this week" is trustworthy at a glance and
      // a stale 2025 item can never be mistaken for a current transfer.
      var today = new Date();
      var daysAgo = function (d) { return d ? (today - new Date(d)) / 86400000 : 9999; };
      var buckets = { week: [], month: [], older: [] };
      arts.slice(0, 60).forEach(function (a) { var g = daysAgo(a.d); (g <= 7 ? buckets.week : g <= 30 ? buckets.month : buckets.older).push(a); });
      var bucketHtml = function (label, list) { return list.length ? '<h3 class="news-bucket">' + label + ' <span class="cnt">(' + list.length + ")</span></h3>" + list.map(artRow).join("") : ""; };
      var newsHtml = bucketHtml(ENh ? "this week" : "bu hafta", buckets.week) +
        bucketHtml(ENh ? "this month" : "bu ay", buckets.month) +
        bucketHtml(ENh ? "older" : "daha eski", buckets.older.slice(0, 20));

      if (!tieRows && !radar && !arts.length) {
        fail(da + " ile " + db + " arasında kayıtlı bağ ya da haber yok.");
        return;
      }

      var EN = typeof I18N !== "undefined" && I18N.isEn;
      var langToggle = '<p class="lang-toggle">' +
        (EN ? '<a href="?a=' + encodeURIComponent(A) + "&b=" + encodeURIComponent(B) + '&lang=tr">TR</a> · <strong>EN</strong>'
            : '<strong>TR</strong> · <a href="?a=' + encodeURIComponent(A) + "&b=" + encodeURIComponent(B) + '&lang=en">EN</a>') + "</p>";
      mount.innerHTML =
        langToggle +
        '<nav class="crumb"><a href="index.html">' + (EN ? "home" : "ana sayfa") + '</a> › <a href="ulke/index.html">' + (EN ? "countries" : "ülkeler") + "</a> › " + esc(da) + " ↔ " + esc(db) + "</nav>" +
        "<h1>" + esc(da) + " ↔ " + esc(db) + "</h1>" +
        (nmeta && nmeta.updated ? '<p class="asof">' + (EN ? "as of " : "güncel: ") + esc(String(nmeta.updated).slice(0, 10)) + (EN ? " · news refreshes every 6h" : " · haberler 6 saatte bir tazelenir") + "</p>" : "") +
        summary +
        trend +
        (radar ? '<section class="motor-sec">' + radar + "</section>" : "") +
        (tieRows ? "<h2>" + (EN ? "recorded ties" : "kayıtlı bağlar") + '</h2><div class="cgroup"><ul class="clist">' + tieRows + "</ul></div>" : "") +
        (newsHtml ? "<h2>" + (EN ? "headlines" : "manşetler") + ' <span class="cnt">(' + arts.length + ")</span>" +
          (arts.length ? ' <button class="csv-btn" id="csvBtn" type="button">' + (EN ? "download CSV" : "CSV indir") + "</button>" : "") + "</h2>" +
          '<div class="pair-news">' + newsHtml + "</div>" : "") +
        '<p class="meta" style="margin-top:24px">' + (EN ? "events and tone are auto-extracted from news and carry a margin of error — " : "olaylar ve ton haberlerden otomatik çıkarılır, hata payı vardır — ") + '<a href="metodoloji.html">' + (EN ? "methodology" : "metodoloji") + "</a>.</p>";

      /* CSV export: an analyst can pull the full sourced record of this pair as a
         spreadsheet (date, layer, source, headline, url) — the "take the data with
         you" value a paid tier is built on. Client-side, no server. */
      var csvBtn = document.getElementById("csvBtn");
      if (csvBtn) csvBtn.addEventListener("click", function () {
        var q = function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; };
        var rows = [["tarih", "katman", "yayin", "yayin_alan_adi", "baslik", "link"].join(",")];
        arts.forEach(function (a) { rows.push([q(a.d), q(a.l), q(a.src), q(a.pub), q(a.t), q(a.u)].join(",")); });
        var blob = new Blob(["﻿" + rows.join("\r\n")], { type: "text/csv;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url; link.download = "ir-globe_" + A + "_" + B + ".csv";
        document.body.appendChild(link); link.click();
        document.body.removeChild(link); URL.revokeObjectURL(url);
      });
    });
  }).catch(function () { fail("Veri şu an yüklenemedi — birazdan tekrar dene."); });
})();
