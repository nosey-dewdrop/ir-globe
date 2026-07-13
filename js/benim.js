/* benim.js — kişisel sayfa: takiplerine göre süzülmüş haber akışı (akışın
   kişisel ikizi), takip yönetimi (ekle/çıkar) ve e-posta tercihleri.
   Takipler Supabase'ten, veri statik JSON'dan — sunucu hesabı yok. */
(function () {
  var app = document.getElementById("app");
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  if (!window.SUPABASE_URL || !window.SUPABASE_ANON) {
    app.innerHTML = '<h1>benim akışım</h1><div class="notice">Üyelik yakında açılıyor — şimdilik <a href="akis.html">genel akışa</a> bak.</div>';
    return;
  }

  /* e-postadaki tek tık kapatma linki: giriş istemez, token yeter */
  var q = new URLSearchParams(location.search);
  if (q.get("unsub")) {
    var what = q.get("what") === "alerts" ? "alerts" : "briefing";
    Takip.client().rpc("irglobe_email_unsubscribe", { token: q.get("unsub"), what: what }).then(function (r) {
      app.innerHTML = r.data
        ? '<h1>tamam</h1><div class="notice">' + (what === "alerts" ? "Gelişme uyarıları" : "Haftalık brifing") +
          ' kapatıldı. Fikrini değiştirirsen <a href="app.html#benim">akış sayfandan</a> tekrar açabilirsin.</div>'
        : '<h1>olmadı</h1><div class="notice">Bağlantı geçersiz ya da süresi geçmiş. <a href="app.html#benim">Akış sayfandan</a> tercihlerini yönetebilirsin.</div>';
    });
    return;
  }

  var USER = null, FOLLOWS = [], LAYERS = [], COUNTRIES = {}, NEWSBAGS = {};
  var shownDays = 0, CHUNK_DAYS = 7;

  Takip.session().then(function (session) {
    if (!session) { location.href = "app.html#uye"; return; }
    USER = session.user;
    return Promise.all([Takip.list(USER.id), Store.layerIndex(), Store.countries()])
      .then(function (r) {
        FOLLOWS = r[0]; LAYERS = r[1]; COUNTRIES = r[2];
        if (!FOLLOWS.length) { location.href = "app.html#uye"; return; }
        return Promise.all(LAYERS.map(function (l) { return Store.news(l.key); })).then(function (bags) {
          LAYERS.forEach(function (l, i) { NEWSBAGS[l.key] = bags[i] || {}; });
          render();
        });
      });
  }).catch(function () {
    app.innerHTML = '<h1>benim akışım</h1><div class="notice">Akış şu an yüklenemedi — birazdan tekrar dene.</div>';
  });

  function followedSets() {
    var c = new Set(), l = new Set(), p = new Set();
    FOLLOWS.forEach(function (f) {
      if (f.kind === "country") c.add(f.key);
      else if (f.kind === "layer") l.add(f.key);
      else if (f.kind === "pair") p.add(f.key);
    });
    return { c: c, l: l, p: p };
  }

  function myArticles() {
    var f = followedSets();
    var out = [], seen = {};
    LAYERS.forEach(function (lay) {
      var edges = NEWSBAGS[lay.key] || {};
      Object.keys(edges).forEach(function (edge) {
        var parts = edge.split("→"), s = parts[0], r = parts[1];
        var hit = f.l.has(lay.key) || f.c.has(s) || f.c.has(r) || f.p.has(edge);
        if (!hit) return;
        (edges[edge] || []).forEach(function (a) {
          if (!a || !a.title || !a.url || seen[a.title]) return;
          seen[a.title] = 1;
          out.push({ t: a.title, src: a.source, d: a.date || "", u: a.url, l: lay.key, edge: edge });
        });
      });
    });
    out.sort(function (a, b) { return b.d.localeCompare(a.d); });
    return out;
  }

  function labelOf(key) {
    var l = LAYERS.find(function (x) { return x.key === key; });
    return l ? l.label : key;
  }

  function render() {
    var arts = myArticles();
    app.innerHTML =
      '<div class="benim-head"><h1>benim akışım</h1>' +
      '<span class="who">' + esc(USER.email) + ' · <a href="#" id="out">çıkış</a></span></div>' +
      '<div class="lbl">takip ettiklerin</div>' +
      '<div class="chips" id="mychips"></div>' +
      '<div class="lbl" style="margin-top:14px">takibe ekle</div>' +
      '<div class="chips" id="addlayers"></div>' +
      '<div class="field" style="max-width:320px;margin-top:10px"><input type="text" id="csearch" placeholder="ülke ara ve takip et…" aria-label="ülke ara ve takip et" autocomplete="off"></div>' +
      '<div class="chips" id="cresults"></div>' +
      '<div class="lbl" style="margin-top:16px">e-posta</div>' +
      '<label class="prefrow"><input type="checkbox" id="p-brief"> haftalık kişisel brifing</label>' +
      '<label class="prefrow"><input type="checkbox" id="p-alert"> takip ettiklerimde gelişme olunca uyar</label>' +
      '<div id="feed" style="margin-top:22px"></div>' +
      '<button class="akis-more chip" id="more" hidden>daha eskiyi göster</button>' +
      '<p class="danger-zone"><a href="#" id="delacc">hesabımı ve tüm verimi kalıcı olarak sil</a></p>';

    renderChips();
    renderFeed(arts);
    wirePrefs();

    document.getElementById("out").addEventListener("click", function (e) {
      e.preventDefault();
      Takip.client().auth.signOut().then(function () { location.href = "index.html"; });
    });
    document.getElementById("more").addEventListener("click", function () {
      shownDays += CHUNK_DAYS;
      renderFeed(myArticles());
    });

    /* KVKK/GDPR silme hakki: tek tikla hesabi + tum veriyi sil (delete_me RPC,
       auth.users silinince irglobe_* FK cascade ile gider). Onaysiz calismaz. */
    document.getElementById("delacc").addEventListener("click", function (e) {
      e.preventDefault();
      if (!confirm("Hesabın ve tüm verin (takipler, e-posta tercihleri) kalıcı olarak silinecek. Bu geri alınamaz. Emin misin?")) return;
      e.target.textContent = "siliniyor…";
      var c = Takip.client();
      c.rpc("delete_me").then(function () {
        c.auth.signOut().finally(function () { location.href = "index.html?silindi=1"; });
      }).catch(function () {
        alert("Silme sırasında bir sorun oldu. hello@damlahelloworld.com'a yazarsan hemen sileriz.");
        e.target.textContent = "hesabımı ve tüm verimi kalıcı olarak sil";
      });
    });
  }

  function renderChips() {
    var el = document.getElementById("mychips");
    el.innerHTML = FOLLOWS.map(function (f) {
      var label = f.kind === "layer" ? labelOf(f.key) : f.key;
      return '<button class="chip on" data-id="' + esc(f.id) + '" aria-label="takibi bırak: ' + esc(label) + '">' + esc(label) + '<span class="x" aria-hidden="true">×</span></button>';
    }).join("") || '<span class="who">henüz takip yok — aşağıdan ekle.</span>';
    el.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        Takip.remove(c.dataset.id).then(function () {
          FOLLOWS = FOLLOWS.filter(function (f) { return String(f.id) !== c.dataset.id; });
          shownDays = 0;
          renderChips(); renderAddable(); renderFeed(myArticles());
        });
      });
    });
    renderAddable();
  }

  function renderAddable() {
    var f = followedSets();
    var el = document.getElementById("addlayers");
    el.innerHTML = LAYERS.filter(function (l) { return !f.l.has(l.key); })
      .map(function (l) { return '<button class="chip" data-key="' + esc(l.key) + '">' + esc(l.label) + "</button>"; }).join("");
    el.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () { addFollow("layer", c.dataset.key); });
    });
    var search = document.getElementById("csearch");
    var results = document.getElementById("cresults");
    search.oninput = function () {
      var q = search.value.toLowerCase().trim();
      if (q.length < 2) { results.innerHTML = ""; return; }
      var hits = Object.values(COUNTRIES).filter(function (c) {
        return (c.key.indexOf(q) > -1 || (c.disp || "").toLowerCase().indexOf(q) > -1) && !f.c.has(c.key);
      }).slice(0, 8);
      results.innerHTML = hits.map(function (c) {
        return '<button class="chip" data-key="' + esc(c.key) + '">' + esc(c.key) + "</button>";
      }).join("");
      results.querySelectorAll(".chip").forEach(function (c) {
        c.addEventListener("click", function () {
          addFollow("country", c.dataset.key);
          search.value = ""; results.innerHTML = "";
        });
      });
    };
  }

  function addFollow(kind, key) {
    Takip.add(USER.id, kind, key).then(function (row) {
      if (row) FOLLOWS.push(row);
      shownDays = 0;
      renderChips(); renderFeed(myArticles());
    });
  }

  function wirePrefs() {
    var b = document.getElementById("p-brief"), a = document.getElementById("p-alert");
    Takip.prefs(USER.id).then(function (p) {
      b.checked = !!p.briefing; a.checked = !!p.alerts;
    });
    function save() { Takip.setPrefs(USER.id, { briefing: b.checked, alerts: a.checked }); }
    b.addEventListener("change", save);
    a.addEventListener("change", save);
  }

  function dayLabel(d) {
    if (TRDate.isToday(d)) return "bugün · " + TRDate.full(d);
    if (TRDate.isYesterday(d)) return "dün · " + TRDate.full(d);
    return TRDate.full(d) || "tarihsiz";
  }

  function renderFeed(arts) {
    var feed = document.getElementById("feed");
    var more = document.getElementById("more");
    if (!arts.length) {
      feed.innerHTML = '<div class="notice">Takiplerinde henüz manşet yok — birkaç ülke ya da konu daha ekle, akış dolsun. <a href="akis.html">Genel akışa</a> da bakabilirsin.</div>';
      more.hidden = true;
      return;
    }
    var days = [], byDay = {};
    arts.forEach(function (a) {
      var d = a.d || "";
      if (!byDay[d]) { byDay[d] = []; days.push(d); }
      byDay[d].push(a);
    });
    if (!shownDays) shownDays = Math.min(CHUNK_DAYS, days.length);
    feed.innerHTML = days.slice(0, shownDays).map(function (d) {
      var list = byDay[d];
      return '<section class="benim-day"><h2>' + esc(dayLabel(d)) +
        ' <span class="cnt">' + list.length + " manşet</span></h2>" +
        '<div class="digest">' + list.map(function (a) {
          return '<a class="dg" href="' + esc(a.u) + '" target="_blank" rel="noopener">' +
            '<span class="dg-t">' + esc(a.t) + "</span>" +
            '<span class="dg-m">' + esc(a.src) + " · " + esc(labelOf(a.l)) + " · " + esc(a.edge) +
            (TRDate.isToday(a.d) ? ' <span class="dg-new">yeni</span>' : "") + "</span></a>";
        }).join("") + "</div></section>";
    }).join("");
    more.hidden = shownDays >= days.length;
  }
})();
