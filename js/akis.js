/* akış sayfası — tüm katmanların gerçek manşetleri tek kronolojik nehirde.
   gün gruplu (bugün / dün / tarih), katman filtreli, parça parça yüklenir.
   veri: data/news/*.json (6 saatte bir tazelenir). uydurma yok. */
(function () {
  var LAB = { silah: "silah", ticaret: "ticaret", enerji: "enerji", tahil: "tahıl", ittifak: "ittifak",
    yaptirim: "yaptırım", goc: "göç", borc: "borç", diplomasi: "diplomasi", teknoloji: "teknoloji", us: "üs", yardim: "yardım" };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  var ALL = [];          // her makale: {t, src, d, u, l, edge}
  var THREADS = {};      // temsili başlık -> kaç kaynak (n>1) — "×N kaynak" rozeti
  var filter = "hepsi";  // katman anahtarı ya da "hepsi"
  var shown = 0;         // kaç GÜN gösterildi
  var CHUNK_DAYS = 7;

  var feedEl = document.getElementById("feed");
  var moreEl = document.getElementById("more");

  Store.layerIndex().then(function (index) {
    var keys = index.map(function (l) { return l.key; });
    return Promise.all([Store.threads()].concat(keys.map(function (k) { return Store.news(k); }))).then(function (res) {
      THREADS = res[0] || {};
      var bags = res.slice(1);
      var seen = {};
      keys.forEach(function (k, i) {
        var edges = bags[i] || {};
        Object.keys(edges).forEach(function (edge) {
          (edges[edge] || []).forEach(function (a) {
            if (!a || !a.title || !a.url || seen[a.title]) return;
            seen[a.title] = 1;
            ALL.push({ t: a.title, src: a.source, d: a.date || "", u: a.url, l: k, edge: edge });
          });
        });
      });
      ALL.sort(function (a, b) { return b.d.localeCompare(a.d); });
      document.getElementById("akis-count").textContent = ALL.length.toLocaleString("tr-TR");
      renderFilters(index);
      render();
    });
  }).catch(function () {
    feedEl.innerHTML = '<p class="dg-load">akış şu an yüklenemedi — birazdan tekrar dene.</p>';
  });

  Store.newsMeta().then(function (nm) {
    var el = document.getElementById("fresh");
    if (el && nm && nm.updated) LiveStamp.mount(el, nm.updated);
  });

  /* motor radarı: bu haftanın spike'ları akışın başında editoryal satırlar.
     graf + ülke adları yüklenir; motor yoksa/spike yoksa bölüm hiç basılmaz. */
  if (typeof Motor !== "undefined")
    Promise.all([Store.graph(), Store.countries()]).then(function (r) {
      var graph = r[0], countries = r[1] || {};
      if (!graph) return;
      var disp = function (n) { return countries[n] ? countries[n].disp : n; };
      var html = Motor.akisRadar(graph, disp);
      var mount = document.getElementById("radar");
      if (mount && html) mount.innerHTML = html;
    }).catch(function () { /* radar yoksa akış aynen çalışır */ });

  function renderFilters(index) {
    var el = document.getElementById("filters");
    var chips = [{ key: "hepsi", label: "hepsi" }].concat(index.map(function (l) { return { key: l.key, label: l.label }; }));
    el.innerHTML = chips.map(function (c) {
      return '<button class="layerbtn' + (filter === c.key ? " on" : "") + '" data-f="' + c.key + '">' + esc(c.label) + "</button>";
    }).join("");
    el.querySelectorAll("[data-f]").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.dataset.f;
        shown = 0;
        renderFilters(index);
        render();
      });
    });
  }

  function dayLabel(d) {
    if (TRDate.isToday(d)) return "bugün · " + TRDate.full(d);
    if (TRDate.isYesterday(d)) return "dün · " + TRDate.full(d);
    return TRDate.full(d) || "tarihsiz";
  }

  function item(a) {
    var n = THREADS[a.t];
    var kaynak = n > 1 ? ' · <span class="dg-src">' + n + " kaynak</span>" : "";
    return '<a class="dg" href="' + esc(a.u) + '" target="_blank" rel="noopener">' +
      '<span class="dg-t">' + esc(a.t) + "</span>" +
      '<span class="dg-m">' + esc(a.src) + " · " + (LAB[a.l] || a.l) + kaynak +
      (TRDate.isToday(a.d) ? ' <span class="dg-new">yeni</span>' : "") + "</span></a>";
  }

  function render() {
    var list = filter === "hepsi" ? ALL : ALL.filter(function (a) { return a.l === filter; });
    // gün gün grupla (tarih sırası korunur)
    var days = [], byDay = {};
    list.forEach(function (a) {
      var d = a.d || "";
      if (!byDay[d]) { byDay[d] = []; days.push(d); }
      byDay[d].push(a);
    });
    if (!days.length) {
      feedEl.innerHTML = '<p class="dg-load">bu katmanda henüz manşet yok.</p>';
      moreEl.hidden = true;
      return;
    }
    if (!shown) shown = Math.min(CHUNK_DAYS, days.length);
    feedEl.innerHTML = days.slice(0, shown).map(function (d) {
      var arts = byDay[d];
      return '<section class="akis-day"><h2>' + esc(dayLabel(d)) +
        ' <span class="cnt">' + arts.length + " manşet</span></h2>" +
        '<div class="digest">' + arts.map(item).join("") + "</div></section>";
    }).join("");
    moreEl.hidden = shown >= days.length;
  }

  moreEl.addEventListener("click", function () {
    shown += CHUNK_DAYS;
    render();
  });
})();
