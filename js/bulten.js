/* dinamik bülten — kendini gerçek veriden yazar, uydurma yok.
   kaynak: ARTICLES (google news, news.yml ile 6 saatte bir tazelenir) + SIPRI (data.js) + LAYER_TIES notları.
   her açılışta o anın en canlı bağını seçer, kaynaklı giriş + en yeni gerçek manşetleri dizer. */
(function () {
  if (typeof ARTICLES === "undefined") return;

  var LAB = { silah: "silah", ticaret: "ticaret", enerji: "enerji", tahil: "tahıl", ittifak: "ittifak",
    yaptirim: "yaptırım", goc: "göç", borc: "borç", diplomasi: "diplomasi", teknoloji: "teknoloji", us: "üs", yardim: "yardım" };
  var GOOD = { silah: "silah", ticaret: "mal", enerji: "petrol ve gaz", tahil: "tahıl", ittifak: "ittifak bağı",
    yaptirim: "yaptırım", goc: "göç", borc: "kredi", diplomasi: "diplomatik bağ", teknoloji: "çip", us: "askeri üs", yardim: "yardım" };

  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var cap = function (s) { s = String(s || ""); return s ? s[0].toLocaleUpperCase("tr") + s.slice(1) : s; };

  // silah yüzdeleri + dünya payları (SIPRI, data.js)
  var exp = {}, imp = {}, supShare = {}, recShare = {};
  if (typeof SUPPLIERS !== "undefined") SUPPLIERS.forEach(function (s) {
    supShare[s.c] = s.share; s.to.forEach(function (p) { exp[s.c + "→" + p[0]] = p[1]; }); });
  if (typeof RECIPIENTS !== "undefined") RECIPIENTS.forEach(function (rc) {
    recShare[rc.c] = rc.share; rc.from.forEach(function (p) { imp[p[0] + "→" + rc.c] = p[1]; }); });

  // non-silah bağların gerekçe notu (LAYER_TIES)
  var noteOf = {};
  if (typeof LAYER_TIES !== "undefined") Object.keys(LAYER_TIES).forEach(function (layer) {
    (LAYER_TIES[layer] || []).forEach(function (c) { noteOf[layer + "|" + c.s + "→" + c.r] = c.note || ""; }); });

  // tüm makaleleri düzle + bağ başına sayı/tazelik indeksle
  var now = new Date();
  var daysAgo = function (d) { if (!d) return 99999; var t = new Date(d); return isNaN(t) ? 99999 : (now - t) / 86400000; };
  var all = [];
  var edgeStat = {};
  Object.keys(ARTICLES).forEach(function (layer) {
    var edges = ARTICLES[layer] || {};
    Object.keys(edges).forEach(function (edge) {
      var parts = edge.split("→"), s = parts[0], r = parts[1];
      (edges[edge] || []).forEach(function (a) {
        if (!a || !a.title || !a.url) return;
        all.push({ layer: layer, s: s, r: r, edge: edge, t: a.title, src: a.source, d: a.date || "", u: a.url });
        var k = layer + "|" + edge;
        var st = edgeStat[k] || (edgeStat[k] = { layer: layer, s: s, r: r, edge: edge, count: 0, recent: 0, latest: "" });
        st.count++;
        if (daysAgo(a.date) <= 45) st.recent++;
        if ((a.date || "") > st.latest) st.latest = a.date || "";
      });
    });
  });
  all.sort(function (a, b) { return b.d.localeCompare(a.d); });

  if (!all.length) {
    document.getElementById("lead").innerHTML = "<p class=\"lead-body\">Henüz haber akışı yüklenmedi. Birazdan tekrar dene.</p>";
    return;
  }

  // en canlı bağı seç: son 45 günde en çok haber alan (eşitlikte en yeni, sonra toplam)
  var edges = Object.keys(edgeStat).map(function (k) { return edgeStat[k]; });
  edges.sort(function (a, b) {
    return (b.recent - a.recent) || b.latest.localeCompare(a.latest) || (b.count - a.count);
  });
  var lead = edges[0];

  // kaynaklı giriş cümlesi — sadece elimizdeki gerçek veriden
  function leadBody(e) {
    if (e.layer === "silah") {
      var g = GOOD.silah, ex = exp[e.edge], im = imp[e.edge], p;
      if (ex != null) {
        p = cap(e.s) + ", " + g + " ihracatının <strong>%" + ex + "</strong>'ini " + cap(e.r) + "'ye gönderiyor";
        if (im != null) p += "; " + cap(e.r) + " açısından bu, ülkenin " + g + " ithalatının <strong>%" + im + "</strong>'i demek";
      } else if (im != null) {
        p = cap(e.r) + ", " + g + " ithalatının <strong>%" + im + "</strong>'ini " + cap(e.s) + "'den alıyor";
      } else { p = cap(e.s) + " → " + cap(e.r); }
      p += ".";
      var tail = [];
      if (supShare[e.s]) tail.push(cap(e.s) + " dünya " + g + " ihracatının %" + supShare[e.s] + "'ini tek başına yapıyor");
      if (recShare[e.r]) tail.push(cap(e.r) + " küresel " + g + " ithalatının %" + recShare[e.r] + "'ini alıyor");
      return "<p class=\"lead-body\">" + p + "</p>" + (tail.length ? "<p class=\"lead-body\">" + tail.join("; ") + ".</p>" : "");
    }
    var note = noteOf[e.layer + "|" + e.edge];
    return note ? "<p class=\"lead-body\">" + esc(note) + "</p>" : "";
  }

  function headlineList(items, n) {
    return items.slice(0, n).map(function (a) {
      return "<a class=\"dg\" href=\"" + esc(a.u) + "\" target=\"_blank\" rel=\"noopener\">" +
        "<span class=\"dg-t\">" + esc(a.t) + "</span>" +
        "<span class=\"dg-m\">" + esc(a.src) + (a.d ? " · " + esc(a.d) : "") + " · " + (LAB[a.l || a.layer] || a.l || a.layer) + "</span></a>";
    }).join("");
  }

  // LEAD — bu haftanın bağı
  var leadArts = all.filter(function (a) { return a.layer === lead.layer && a.edge === lead.edge; });
  document.getElementById("lead").innerHTML =
    "<p class=\"kick\">bu haftanın bağı · " + esc(LAB[lead.layer] || lead.layer) + "</p>" +
    "<h2 class=\"lead-h\">" + esc(cap(lead.s)) + " &rarr; " + esc(cap(lead.r)) + "</h2>" +
    leadBody(lead) +
    "<div class=\"digest bl-lead-arts\">" + headlineList(leadArts, 5) + "</div>";

  // ÖNE ÇIKAN BAĞLAR — sıradaki en canlı 5 bağ
  var topEdges = edges.slice(1, 6);
  if (topEdges.length) {
    document.getElementById("top").innerHTML =
      "<div class=\"lbl\">öne çıkan bağlar</div>" +
      "<ul class=\"toc\">" + topEdges.map(function (e) {
        return "<li><a href=\"index.html\"><span class=\"no\">" + e.recent + "</span>" +
          esc(cap(e.s)) + " &rarr; " + esc(cap(e.r)) +
          " <span class=\"dg-m\">· " + esc(LAB[e.layer] || e.layer) + "</span></a></li>";
      }).join("") + "</ul>";
  }

  // AKIŞ — en yeni gerçek manşetler (tekilleştirilmiş)
  var seen = {}, flow = [];
  for (var i = 0; i < all.length && flow.length < 30; i++) {
    if (seen[all[i].t]) continue; seen[all[i].t] = 1; flow.push(all[i]);
  }
  var updated = all[0].d || "";
  document.getElementById("feed").innerHTML =
    "<div class=\"lbl\">akış · en yeni manşetler" + (updated ? " · " + esc(updated) + "'e kadar" : "") + "</div>" +
    "<div class=\"digest\">" + headlineList(flow, 30) + "</div>";

  // künye sayaçları
  var totalEl = document.getElementById("bl-count");
  if (totalEl) totalEl.textContent = all.length.toLocaleString("tr-TR");
})();
