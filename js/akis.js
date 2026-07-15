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
  var cfilter = null;    // ülke anahtarı — "sorumu sorayım" kapısı
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
      renderMine();
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
      return '<button class="layerbtn' + (filter === c.key ? " on" : "") + '" data-f="' + c.key + '" aria-pressed="' + (filter === c.key) + '">' + esc(c.label) + "</button>";
    }).join("");
    el.querySelectorAll("[data-f]").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.dataset.f;
        if (typeof Ilgi !== "undefined" && filter !== "hepsi") Ilgi.note({ layers: [filter], w: 0.5 });
        shown = 0;
        renderFilters(index);
        render();
      });
    });
  }

  /* "sana göre" — akışın başında, SENİN cihazındaki ilgine göre (okuduğun ülke/
     katman) öne çıkan taze manşetler. Sinyal yoksa ya da yeterli eşleşme yoksa
     hiç basılmaz. Tamamen yerel; sunucuya hiçbir şey gitmez. */
  function renderMine() {
    var mount = document.getElementById("mine");
    if (!mount) return;
    if (typeof Ilgi === "undefined" || !Ilgi.has()) { mount.innerHTML = ""; return; }
    var cTop = {}, lTop = {};
    Ilgi.top("country", 8).forEach(function (x) { cTop[x.key] = x.score; });
    Ilgi.top("layer", 5).forEach(function (x) { lTop[x.key] = x.score; });
    var scored = ALL.map(function (a) {
      var s = (lTop[a.l] || 0) * 0.6;
      edgeCountries(a.edge).forEach(function (c) { s += (cTop[c] || 0); });
      return { a: a, s: s };
    }).filter(function (x) { return x.s > 0.2; })
      .sort(function (p, q) { return q.s - p.s || String(q.a.d).localeCompare(String(p.a.d)); })
      .slice(0, 6);
    if (scored.length < 3) { mount.innerHTML = ""; return; }
    mount.innerHTML = '<section class="mine-strip"><h2>sana göre <span class="cnt">okuduklarından</span></h2>' +
      '<div class="digest">' + scored.map(function (x) { return item(x.a); }).join("") + "</div>" +
      '<p class="mine-note">yalnızca <strong>senin cihazında</strong> — neyi açtığından oluşur, bize gönderilmez. <a href="#" id="mine-forget">sıfırla</a></p></section>';
    var f = document.getElementById("mine-forget");
    if (f) f.addEventListener("click", function (e) { e.preventDefault(); Ilgi.forget(); mount.innerHTML = ""; });
  }

  function dayLabel(d) {
    if (TRDate.isToday(d)) return "bugün · " + TRDate.full(d);
    if (TRDate.isYesterday(d)) return "dün · " + TRDate.full(d);
    return TRDate.full(d) || "tarihsiz";
  }

  function item(a) {
    var n = THREADS[a.t];
    var kaynak = n > 1 ? ' · <span class="dg-src">' + n + " kaynak</span>" : "";
    return '<a class="dg" href="' + esc(a.u) + '" target="_blank" rel="noopener"' +
      ' data-l="' + esc(a.l) + '" data-edge="' + esc(a.edge || "") + '">' +
      '<span class="dg-t">' + esc(a.t) + "</span>" +
      '<span class="dg-m">' + esc(a.src) + " · " + (LAB[a.l] || a.l) + kaynak +
      (TRDate.isToday(a.d) ? ' <span class="dg-new">yeni</span>' : "") + "</span></a>";
  }

  /* bir manşete tıklamak = güçlü ilgi sinyali (on-device, sunucuya gitmez). */
  function edgeCountries(edge) {
    return String(edge || "").split(/→|->/).map(function (s) { return s.trim(); }).filter(Boolean);
  }
  document.body.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".dg[data-l]");
    if (!a || typeof Ilgi === "undefined") return;
    Ilgi.note({ countries: edgeCountries(a.dataset.edge), layers: [a.dataset.l], w: 2 });
  });

  /* ülke araması: yaz, seç, akış o ülkenin bağlarına süzülsün (× ile kaldır) */
  Store.countries().then(function (countries) {
    var inp = document.getElementById("cara"), box = document.getElementById("cara-list");
    if (!inp || !box) return;
    var all = Object.keys(countries).map(function (k) { return { k: k, d: countries[k].disp || k }; });
    function selChip() {
      return '<button class="chip on" id="cara-clear" aria-label="ülke filtresini kaldır">' +
        esc((countries[cfilter] || {}).disp || cfilter) + ' <span aria-hidden="true">×</span></button>';
    }
    inp.addEventListener("input", function () {
      var q = inp.value.toLocaleLowerCase("tr").trim();
      if (q.length < 2) { box.innerHTML = cfilter ? selChip() : ""; return; }
      var hits = all.filter(function (c) {
        return c.k.indexOf(q) > -1 || c.d.toLocaleLowerCase("tr").indexOf(q) > -1;
      }).slice(0, 8);
      box.innerHTML = hits.map(function (c) {
        return '<button class="chip" data-k="' + esc(c.k) + '">' + esc(c.d) + "</button>";
      }).join("");
    });
    box.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      if (b.id === "cara-clear") { cfilter = null; inp.value = ""; box.innerHTML = ""; shown = 0; render(); return; }
      cfilter = b.dataset.k;
      inp.value = ""; box.innerHTML = selChip(); shown = 0; render();
      if (typeof Ilgi !== "undefined") Ilgi.note({ countries: [cfilter], w: 1 });
    });
  }).catch(function () { /* arama yoksa akış aynen çalışır */ });

  function render() {
    var list = filter === "hepsi" ? ALL : ALL.filter(function (a) { return a.l === filter; });
    if (cfilter) list = list.filter(function (a) { return edgeCountries(a.edge).indexOf(cfilter) > -1; });
    // gün gün grupla (tarih sırası korunur)
    var days = [], byDay = {};
    list.forEach(function (a) {
      var d = a.d || "";
      if (!byDay[d]) { byDay[d] = []; days.push(d); }
      byDay[d].push(a);
    });
    if (!days.length) {
      feedEl.innerHTML = '<p class="dg-load">' + (cfilter ? "bu filtrede şimdilik sessizlik. filtreyi kaldır, dünya konuşsun." : "burası şimdilik sakin. silah ya da diplomasi katmanına bak, orası hareketli.") + "</p>";
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
