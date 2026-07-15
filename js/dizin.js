/* js/dizin.js — client renderer for the konu/ and ulke/ directory pages.
   The prerendered HTML shells carry only SEO meta (title/description/JSON-LD);
   the visible body is drawn HERE from the same data/ files the globe uses —
   one renderer instead of 2.8 MB of baked HTML. Markup and classes reproduce
   the old build-seo output exactly (style law: nothing changes visually).

   The shell tells us what to draw:
     <main class="wrap" id="dizin" data-view="ulke"  data-key="france">
     <main class="wrap" id="dizin" data-view="konu"  data-key="silah">
     <main class="wrap" id="dizin" data-view="konu-index" | "ulke-index">
   and where the site root is: <body data-root="../../">                    */

(function () {
  const mount = document.getElementById("dizin");
  if (!mount) return;
  const ROOT = document.body.dataset.root || "";
  const VIEW = mount.dataset.view;
  const KEY = mount.dataset.key || "";

  const SORU = {
    silah: "kim kime silah satıyor?", ticaret: "kim kime ne satıyor?",
    enerji: "kim kime enerji satıyor?", tahil: "kim kimi doyuruyor?",
    ittifak: "kim kiminle ittifak kurdu?", yaptirim: "kim kime yaptırım uyguluyor?",
    goc: "kim nereye sığınıyor?", borc: "kim kime borç veriyor?",
    diplomasi: "kim kiminle yakın duruyor?", teknoloji: "kim kime çip satıyor?",
    us: "kim nerede üs kuruyor?", yardim: "kim kime yardım ediyor?",
    kablo: "kim kiminle aynı kabloya bağlı?", siber: "kim kime siber saldırıyor?",
  };
  const soru = (key, fallback) => SORU[key] || fallback;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const j = (rel) => fetch(ROOT + rel).then((r) => { if (!r.ok) throw new Error(rel); return r.json(); });

  async function loadBase() {
    const [COUNTRIES, LAYERS] = await Promise.all([j("data/countries.json"), j("data/layers/index.json")]);
    const slug = (n) => (COUNTRIES[n] ? COUNTRIES[n].slug : String(n).replace(/[^a-z0-9]+/g, "-"));
    const disp = (n) => (COUNTRIES[n] ? COUNTRIES[n].disp : n);
    return { COUNTRIES, LAYERS, slug, disp };
  }
  async function loadTies(base, keys) {
    const TIES = []; let supShare = {};
    const loaded = await Promise.all(keys.map((k) => j(`data/layers/${k}.json`).catch(() => null)));
    loaded.forEach((lay, i) => {
      if (!lay) return;
      if (lay.shares && lay.shares.sup) supShare = lay.shares.sup;
      (lay.ties || []).forEach((c) => {
        if (base.COUNTRIES[c.s] && base.COUNTRIES[c.r])
          TIES.push({ s: c.s, r: c.r, type: keys[i], note: c.note || "",
            exp: c.exp != null ? c.exp : null });
      });
    });
    return { TIES, supShare };
  }

  const crumb = (leaf, mid) =>
    `<nav class="crumb"><a href="${ROOT}index.html">ana sayfa</a> › ${mid || ""}${esc(leaf)}</nav>`;

  /* dürüst hata-payı notu — konu/ülke sayfalarının altına biner (haber + motor içeriği var) */
  const DISCLAIM = `<p class="disclaim">bağlantılar kaynaklı verilerden; olaylar ve haber-çıkarımı <strong>otomatik</strong> derlenir — hata payı taşır, resmi ya da kesin bir kaynak değildir.</p>`;

  /* motor: bu ülkenin haber ağındaki yeri (kodlanmış olaylar + graf). Ayrı
     dosyalar; yoksa bölüm hiç basılmaz — sayfa eskisi gibi çalışır. */
  async function motorSection(base, name) {
    if (typeof Motor === "undefined") return "";
    const [events, graph] = await Promise.all([
      j("data/events/index.json").catch(() => null),
      j("data/events/graph.json").catch(() => null),
    ]);
    if (!events && !graph) return "";
    const html = Motor.radarCountry(events, graph, name, base.disp);
    return html ? `<section class="motor-sec"><h2>haber ağında</h2>${html}</section>` : "";
  }

  /* ── one country ── */
  async function ulke(base) {
    const keys = base.LAYERS.map((l) => l.key);
    const { TIES } = await loadTies(base, keys);
    const name = KEY;
    const ties = TIES.filter((t) => t.s === name || t.r === name);
    const outgoing = ties.filter((t) => t.s === name);
    const incoming = ties.filter((t) => t.r === name);
    const layerKeys = [...new Set(ties.map((t) => t.type))];
    const dn = base.disp(name);
    const labOf = Object.fromEntries(base.LAYERS.map((l) => [l.key, l.label]));

    function block(list, dir) {
      if (!list.length) return "";
      const byLayer = {};
      list.forEach((t) => { (byLayer[t.type] ||= []).push(t); });
      return Object.entries(byLayer).map(([lk, arr]) => {
        const top = arr.slice(0, 10); // layer files are value-sorted
        const items = top.map((t) => {
          const other = dir === "out" ? t.r : t.s;
          // an IR student's professor rejects a bare "%16" — spell out what the
          // figure means, its period and source, inline. (arms shares = SIPRI 2021–25)
          const pctVal = dir === "out" ? t.exp : t.imp;
          const num = pctVal != null
            ? ` <span class="pct" title="SIPRI silah transferleri 2021–2025">%${pctVal}<span class="pct-src"> ${dir === "out" ? "ihracat payı" : "ithalat payı"} · SIPRI ’21–’25</span></span>` : "";
          const note = t.note ? ` — <span class="note">${esc(t.note)}</span>` : "";
          return `<li><a href="${ROOT}ulke/${base.slug(other)}/">${esc(base.disp(other))}</a>${num}${note} <a class="pairlink" href="${ROOT}iliski.html?a=${encodeURIComponent(name)}&amp;b=${encodeURIComponent(other)}" aria-label="ilişki sayfası: ${esc(base.disp(other))}">↔</a></li>`;
        }).join("");
        const more = arr.length > top.length ? `<li class="note">+ ${arr.length - top.length} bağ daha (küre üstünde)</li>` : "";
        return `<div class="cgroup"><h3><a href="${ROOT}konu/${lk}/">${esc(labOf[lk] || lk)}</a></h3><ul class="clist">${items}${more}</ul></div>`;
      }).join("");
    }

    const motorHtml = await motorSection(base, name);
    mount.innerHTML = `
  ${crumb(dn, `<a href="${ROOT}ulke/index.html">ülkeler</a> › `)}
  <h1>${esc(dn)}</h1>
  <p class="lede">${esc(dn)}, ${layerKeys.length} katmanda ${ties.length} ülke bağıyla haritada. Aşağıda kimden alıp kime verdiği.</p>
  <p class="meta"><a href="${ROOT}index.html">${esc(dn)}'i küre üstünde gör →</a></p>
  ${motorHtml}
  ${ties.length ? `<p class="meta"><button class="csv-btn" id="ulkeCsv" type="button">tüm bağları CSV indir</button> <span class="note">kaynaklı, tablo hazır</span></p>` : ""}
  ${outgoing.length ? `<h2>${esc(dn)} → dünya <span class="cnt">(veren / satan)</span></h2>${block(outgoing, "out")}` : ""}
  ${incoming.length ? `<h2>dünya → ${esc(dn)} <span class="cnt">(alan)</span></h2>${block(incoming, "in")}` : ""}
  ${DISCLAIM}`;

    // country-page CSV: pull all of this country's sourced ties as a spreadsheet
    // (an IR student's citable dataset in one click).
    const csvBtn = document.getElementById("ulkeCsv");
    if (csvBtn) csvBtn.addEventListener("click", () => {
      const q = (v) => '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"';
      const rows = [["yon", "ulke", "karsi_ulke", "katman", "pay_yuzde", "pay_turu", "not", "kaynak"].join(",")];
      ties.forEach((t) => {
        const out = t.s === name;
        rows.push([q(out ? "ihracat/veren" : "ithalat/alan"), q(dn), q(base.disp(out ? t.r : t.s)),
          q(labOf[t.type] || t.type), q(out ? t.exp : t.imp),
          q(t.type === "silah" ? "SIPRI silah payı 2021-25" : ""), q(t.note), q(t.type === "silah" ? "SIPRI" : "acik kaynak + google news")].join(","));
      });
      const blob = new Blob(["﻿" + rows.join("\r\n")], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = "ir-globe_" + base.slug(name) + "_baglar.csv";
      document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    });
  }

  /* ── one layer ── */
  async function konu(base) {
    const layer = base.LAYERS.find((l) => l.key === KEY) || { key: KEY, label: KEY, blurb: "" };
    const [{ TIES }, arts] = await Promise.all([
      loadTies(base, [KEY]),
      j(`data/news/${KEY}.json`).catch(() => ({})),
    ]);
    const all = TIES;
    const ties = all.slice(0, 100); // value-sorted; page shows the top 100
    const rows = ties.map((t) => {
      const num = t.exp != null ? ` <span class="pct">${t.s} ihracatının %${t.exp}'i</span>` : "";
      const note = t.note ? `<span class="note">${esc(t.note)}</span>` : "";
      const news = (arts[`${t.s}→${t.r}`] || []).slice(0, 2).map((a) =>
        `<a class="hl" href="${esc(a.url)}" rel="noopener">${esc(a.title)}</a> <span class="hl-src">${esc(a.source)}</span>`).join("");
      return `<article class="edge">
      <h3><a href="${ROOT}ulke/${base.slug(t.s)}/">${esc(base.disp(t.s))}</a> → <a href="${ROOT}ulke/${base.slug(t.r)}/">${esc(base.disp(t.r))}</a>${num}</h3>
      ${note}
      ${news ? `<div class="edge-news">${news}</div>` : ""}
    </article>`;
    }).join("\n");

    mount.innerHTML = `
  ${crumb(layer.label, `<a href="${ROOT}konu/index.html">konular</a> › `)}
  <h1>${esc(soru(KEY, layer.label))}</h1>
  <p class="lede">${esc(layer.blurb)}</p>
  <p class="meta">${all.length} yönlü bağ${all.length > ties.length ? ` · en büyük ${ties.length} tanesi aşağıda` : ""} · <a href="${ROOT}index.html">küre üstünde gör →</a></p>
  <section class="edges">
    ${rows || "<p>bu katman için bağ derleniyor.</p>"}
  </section>
  ${DISCLAIM}`;
  }

  /* ── indexes ── */
  async function konuIndex(base) {
    const { TIES } = await loadTies(base, base.LAYERS.map((l) => l.key));
    const rows = base.LAYERS.map((l) => {
      const n = TIES.filter((t) => t.type === l.key).length;
      return `<article class="trow">
      <h2><a href="${ROOT}konu/${l.key}/">${esc(soru(l.key, l.label))}</a></h2>
      <p>${esc(l.blurb)}</p>
      <a class="tcount" href="${ROOT}konu/${l.key}/">${n} bağ →</a>
    </article>`;
    }).join("\n");
    mount.innerHTML = `
  ${crumb("konular")}
  <h1>konular</h1>
  <p class="lede">Silahtan tahıla, enerjiden yaptırıma: dünyanın ilişki ağını katman katman gez.</p>
  <section class="tlist">${rows}</section>`;
  }
  async function ulkeIndex(base) {
    const { TIES, supShare } = await loadTies(base, base.LAYERS.map((l) => l.key));
    const names = [...new Set(TIES.flatMap((t) => [t.s, t.r]))].sort();
    const cnt = {};
    TIES.forEach((t) => { cnt[t.s] = (cnt[t.s] || 0) + 1; cnt[t.r] = (cnt[t.r] || 0) + 1; });
    const sorted = names.slice().sort((a, b) => (supShare[b] || 0) - (supShare[a] || 0) || a.localeCompare(b));
    const links = sorted.map((n) =>
      `<a class="ulink" href="${ROOT}ulke/${base.slug(n)}/">${esc(base.disp(n))} <span class="cnt">${cnt[n] || 0}</span></a>`).join("\n");
    mount.innerHTML = `
  ${crumb("ülkeler")}
  <h1>ülkeler</h1>
  <p class="lede">Her ülkenin dünyayla kurduğu silah, ticaret, enerji ve diğer bağların tam listesi. <span class="meta">(${names.length} ülke)</span></p>
  <p class="ufilter-row"><input type="text" id="ufilter" placeholder="ülke ara…" aria-label="ülke ara" autocomplete="off"></p>
  <section class="uwall">${links}</section>`;
    const inp = mount.querySelector("#ufilter");
    const cards = [...mount.querySelectorAll(".ulink")];
    const norm = (s) => String(s).toLocaleLowerCase("tr");
    inp.addEventListener("input", () => {
      const q = norm(inp.value.trim());
      cards.forEach((a) => { a.style.display = !q || norm(a.textContent).includes(q) ? "" : "none"; });
    });
  }

  loadBase()
    .then((base) => ({ ulke, konu, "konu-index": konuIndex, "ulke-index": ulkeIndex }[VIEW] || (() => {}))(base))
    .catch(() => {
      mount.innerHTML = `<p class="lede">Veri yüklenemedi — <a href="${ROOT}index.html">küreden devam et →</a></p>`;
    });
})();
