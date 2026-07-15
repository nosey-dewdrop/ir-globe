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
    return '<section class="trend"><h2>ilişki haftadan haftaya <span class="cnt">yukarı = yakınlaşma · aşağı = gerginlik</span></h2>' +
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="haftalık ilişki tonu çizgisi">' +
      '<line x1="' + P + '" y1="' + ys(0) + '" x2="' + (W - P) + '" y2="' + ys(0) + '" stroke="#d9d9d9" stroke-dasharray="3 4"/>' +
      '<polyline points="' + pts + '" fill="none" stroke="#0a2a5e" stroke-width="1.6"/>' +
      weeks.map(function (w, i) { return '<circle cx="' + xs(i) + '" cy="' + ys(series[w].avg) + '" r="2" fill="#0a2a5e"/>'; }).join("") +
      '<text class="tl" x="' + P + '" y="' + (H - 3) + '">' + esc(weeks[0]) + '</text>' +
      '<text class="tl" x="' + (W - P) + '" y="' + (H - 3) + '" text-anchor="end">' + esc(weeks[weeks.length - 1]) + "</text>" +
      "</svg><p class=\"meta\">haberlerden otomatik çıkarıldı · hafta başına ortalama</p></section>";
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
    ]).then(function (all) {
      var lays = all[0], bags = all[1], events = all[2], graph = all[3];
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
      var radar = typeof Motor !== "undefined" ? Motor.radarTie(events, graph, A, B, disp) : "";
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
        var yon = avg < -1 ? "gerginlik ağır basıyor" : avg > 1 ? "işbirliği ağır basıyor" : "hem işbirliği hem gerginlik var";
        // layers is an object {key:count}; take the busiest layer names
        var layerNames = Object.keys(pairData.layers || {})
          .sort(function (a, b) { return pairData.layers[b] - pairData.layers[a]; })
          .map(function (k) { var lab = LAYERS.filter(function (l) { return l.key === k; })[0]; return lab ? lab.label : k; })
          .slice(0, 3).join(", ");
        summary = '<p class="pair-summary">motorun okuduğu son haberlerde bu ilişkide <strong>' + yon + '</strong>' +
          " (" + pairData.n + " kodlanmış olay" + (layerNames ? " · " + esc(layerNames) : "") + ")." +
          " Aşağıdaki her olay ve manşet gerçek bir kaynağa tıklanır.</p>";
      }

      /* manşetler: iki yönün tüm katmanlardaki haberleri, yeni üstte */
      var arts = [], seen = {};
      LAYERS.forEach(function (l, i) {
        var edges = bags[i] || {};
        [A + "→" + B, B + "→" + A].forEach(function (edge) {
          (edges[edge] || []).forEach(function (a) {
            if (!a || !a.title || !a.url || seen[a.title]) return;
            seen[a.title] = 1;
            arts.push({ t: a.title, src: a.source, d: a.date || "", u: a.url, l: l.label });
          });
        });
      });
      arts.sort(function (x, y) { return y.d.localeCompare(x.d); });
      var newsHtml = arts.slice(0, 40).map(function (a) {
        return '<a class="dg" href="' + esc(a.u) + '" target="_blank" rel="noopener">' +
          '<span class="dg-t">' + esc(a.t) + '</span>' +
          '<span class="dg-m">' + esc(a.src) + " · " + esc(a.l) + (a.d ? " · " + esc(a.d) : "") + "</span></a>";
      }).join("");

      if (!tieRows && !radar && !arts.length) {
        fail(da + " ile " + db + " arasında kayıtlı bağ ya da haber yok.");
        return;
      }

      mount.innerHTML =
        '<nav class="crumb"><a href="index.html">ana sayfa</a> › <a href="ulke/index.html">ülkeler</a> › ' + esc(da) + " ↔ " + esc(db) + "</nav>" +
        "<h1>" + esc(da) + " ↔ " + esc(db) + "</h1>" +
        '<p class="lede">İki ülke arasındaki kayıtlı bağlar, olay geçmişi ve gerçek manşetler. Ülke sayfaları: ' +
        '<a href="ulke/' + esc(COUNTRIES[A].slug) + '/">' + esc(da) + "</a> · " +
        '<a href="ulke/' + esc(COUNTRIES[B].slug) + '/">' + esc(db) + "</a></p>" +
        summary +
        trend +
        (radar ? '<section class="motor-sec">' + radar + "</section>" : "") +
        (tieRows ? '<h2>kayıtlı bağlar</h2><div class="cgroup"><ul class="clist">' + tieRows + "</ul></div>" : "") +
        (newsHtml ? '<h2>manşetler <span class="cnt">(' + arts.length + ")</span>" +
          (arts.length ? ' <button class="csv-btn" id="csvBtn" type="button">CSV indir</button>' : "") + "</h2>" +
          '<div class="pair-news">' + newsHtml + "</div>" : "") +
        '<p class="meta" style="margin-top:24px">olaylar ve ton haberlerden otomatik çıkarılır, hata payı vardır — <a href="metodoloji.html">metodoloji</a>.</p>';

      /* CSV export: an analyst can pull the full sourced record of this pair as a
         spreadsheet (date, layer, source, headline, url) — the "take the data with
         you" value a paid tier is built on. Client-side, no server. */
      var csvBtn = document.getElementById("csvBtn");
      if (csvBtn) csvBtn.addEventListener("click", function () {
        var q = function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; };
        var rows = [["tarih", "katman", "kaynak", "başlık", "url"].join(",")];
        arts.forEach(function (a) { rows.push([q(a.d), q(a.l), q(a.src), q(a.t), q(a.u)].join(",")); });
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
