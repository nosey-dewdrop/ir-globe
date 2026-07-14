/* state — filled asynchronously from data/*.json via Store (js/store.js).
   The page boots with the country registry + the default layer only; other
   layers and their news load lazily on first click (see ensureLayer). */

const COORDS = {};      // key -> [lat, lng] (arc endpoints)
const KEYOF = {};       // any lowercase name/alias -> key (polygon lookup)
const LAYERS = [];      // [{key, label, live}] from data/layers/index.json
const TIES = [];        // directed ties of the layers loaded so far
const NEWS = {};        // layer -> { "s→r": [articles] }
const SRC = {};         // layer -> source meta {name, url, year}
let supShare = {}, recShare = {};  // silah (SIPRI) global shares
const loadedLayers = new Set();

async function ensureLayer(k) {
  if (loadedLayers.has(k)) return;
  const [lay, news] = await Promise.all([Store.layer(k), Store.news(k)]);
  if (loadedLayers.has(k)) return; // a parallel call already applied it
  loadedLayers.add(k);
  SRC[k] = lay.source || null;
  if (lay.shares) { supShare = lay.shares.sup || {}; recShare = lay.shares.rec || {}; }
  (lay.ties || []).forEach((c) => {
    if (COORDS[c.s] && COORDS[c.r])
      TIES.push({ s: c.s, r: c.r, type: k, note: c.note || "",
        v: c.v != null ? c.v : null,
        exp: c.exp != null ? c.exp : null, imp: c.imp != null ? c.imp : null });
  });
  NEWS[k] = news || {};
  tiesRev++;
  applyOverlay(k); // Bera'nın editoryal bindirmesi (varsa) bu katmana da uygulanır
}

function countryOfFeature(f) {
  for (const key of ["ADMIN", "NAME", "NAME_LONG", "SOVEREIGNT", "name"]) {
    const v = f.properties && f.properties[key];
    if (!v) continue;
    const k = KEYOF[String(v).toLowerCase()];
    if (k && COORDS[k]) return k;
  }
  return null;
}

function currentLayer() { return LAYERS.find((l) => l.key === layer); }

let layer = "silah";
let selected = null;  // a country
let focusTie = null;  // a single arc
let hovered = null;   // arc under the cursor
let gesturing = false; // touch: a pinch/drag is in progress → don't treat its end as a click

const layerNav = document.getElementById("layers");
function renderLayers() {
  const total = activeTies().length;
  layerNav.innerHTML = LAYERS.map((l) =>
    `<button class="layerbtn${l.key === layer ? " on" : ""}${l.live ? "" : " soon"}" data-l="${l.key}" aria-pressed="${l.key === layer}">${l.label}</button>`).join("") +
    (total > CAP_DEFAULT
      ? `<button class="layerbtn viewcap" id="viewcap">${showAll ? `ilk ${CAP_DEFAULT}` : `tümünü göster (${Math.min(total, CAP_ALL)})`}</button>`
      : "");
  layerNav.querySelectorAll(".layerbtn[data-l]").forEach((b) =>
    b.addEventListener("click", async () => {
      layer = b.dataset.l;
      renderLayers();               // instant button feedback
      await ensureLayer(layer);     // lazy: fetch layer + its news on first visit
      reset();
      renderLayers();               // tie count is only known after the load
    }));
  const vc = document.getElementById("viewcap");
  if (vc) vc.addEventListener("click", () => { showAll = !showAll; redraw(); renderLayers(); });
}
function activeTies() { return TIES.filter((t) => t.type === layer); }

/* importance: dataset layers carry a real value (v) and a global rank; silah
   falls back to SIPRI share × concentration */
function impScore(t) {
  if (t.v != null) return t.v;
  const pct = t.exp != null ? t.exp : (t.imp != null ? t.imp : 5);
  return (supShare[t.s] || 0.3) * (pct / 100);
}
/* rendering caps: default shows the big flows, "tümünü göster" raises the lid —
   globe.gl frame rate dies beyond ~300 arcs, so that is a hard ceiling */
let showAll = false;
const CAP_DEFAULT = 50, CAP_ALL = 300;
/* PERF: 900 bağı her çizimde yeniden sıralamak yerine sonuç önbellenir;
   TIES her değiştiğinde (ensureLayer / bindirme) tiesRev artar, önbellek düşer */
let tiesRev = 0, majorCache = null;
function majorTies() {
  if (majorCache && majorCache.layer === layer && majorCache.showAll === showAll && majorCache.rev === tiesRev)
    return majorCache.list;
  const list = activeTies().slice().sort((a, b) => impScore(b) - impScore(a))
    .slice(0, showAll ? CAP_ALL : CAP_DEFAULT);
  majorCache = { layer, showAll, rev: tiesRev, list };
  return list;
}
/* declutter: default shows only the big flows; selecting a country/tie reveals its own arcs */
function visibleTies() {
  if (focusTie) return [focusTie];
  if (selected) return activeTies().filter((t) => t.s === selected || t.r === selected);
  return majorTies();
}

/* one tie, one honest sentence (hover tooltip) */
function tieLine(t) {
  const bits = [];
  if (t.exp != null) bits.push(`${t.s} ihracatının %${t.exp}'i`);
  if (t.imp != null) bits.push(`${t.r} ithalatının %${t.imp}'i`);
  if (!bits.length && t.note) return `${t.s} → ${t.r} · ${t.note}`;
  return `${t.s} → ${t.r}${bits.length ? " · " + bits.join(" · ") : ""}`;
}

/* ── globe: grey editorial world map, white ocean, navy on select ──
   PERF: kurulum TEMBEL — WebGL context + 480 KB geojson açılışta hero ile
   yarışıp siteyi kastırıyordu. Küre artık sayfa yüklenip boşta kalınca ya da
   ilk kullanıcı niyetinde (tekerlek/tuş/dokunuş) kurulur; davranış aynı. */
let globe = null;

function initGlobe() {
  if (globe || typeof Globe === "undefined") return;
  try {
  globe = Globe()(document.getElementById("globe"))
  .backgroundColor("#ffffff")
  .globeImageUrl(null)
  .showGraticules(false)
  .showAtmosphere(false)
  .polygonCapColor((f) => polyColor(f))
  .polygonSideColor(() => "#00000000")
  .polygonStrokeColor(() => "#cfd4db")
  .polygonAltitude(0.006)
  .polygonsTransitionDuration(0)
  .onPolygonHover((f) => { document.body.style.cursor = f ? "pointer" : "default"; })
  .onPolygonClick((f) => { if (gesturing) return; const c = countryOfFeature(f); if (c) selectCountry(c === selected ? null : c); })
  .arcLabel((t) => tieLine(t))
  .arcStartLat((t) => COORDS[t.s][0]).arcStartLng((t) => COORDS[t.s][1])
  .arcEndLat((t) => COORDS[t.r][0]).arcEndLng((t) => COORDS[t.r][1])
  .arcColor((t) => arcColor(t))
  .arcStroke((t) => arcStroke(t))
  .arcAltitudeAutoScale(0.4)
  .arcsTransitionDuration(0)
  .arcDashLength(1).arcDashGap(0).arcDashAnimateTime(0)   // solid lines, never dashed
  .onArcHover((t) => {
    document.body.style.cursor = t ? "pointer" : "default";
    /* hover vurgusu v58'in kanıtlı yoluyla (arcsData aynı nesnelerle tazelenir →
       renk/kalınlık accessor'ları yeniden uygulanır); PERF farkı listenin artık
       önbellekli olması — eskiden her hover 900 bağı yeniden sıralıyordu */
    if (t !== hovered) { hovered = t; globe.arcsData(visibleTies()); }
  })
  .onArcClick((t) => { if (gesturing) return; focusOnTie(t); })
  .onGlobeClick(() => { if (gesturing) return; reset(); });

/* retina'da tam 2x piksel çizmek GPU'yu ikiye katlıyordu; 1.5x görsel olarak
   ayırt edilmez ama kare hızını belirgin rahatlatır (DPR 1 ekranda no-op) */
if (globe.renderer && globe.renderer())
  globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

/* ocean = grey sphere with real shading so it reads as a 3D globe, not a flat disc.
   lowering emissiveIntensity lets the directional light fall off toward the edge = depth. */
const mat = globe.globeMaterial();
mat.color.set("#dce0e6");
mat.emissive.set("#dce0e6");
mat.emissiveIntensity = 0.55;
mat.shininess = 6;
mat.specular && mat.specular.set("#f2f4f7");

fetch("data/countries.geojson?v=6")
  .then((r) => r.json())
  .then((geo) => { globe.polygonsData(geo.features.filter((f) => f.properties.ISO_A2 !== "AQ")); wakeGlobe(); })
  .catch(() => {});

globe.arcsData(visibleTies());
/* dönüşü kaldırdık (Damla: parmakla zaten çeviriyor). Onun yerine on-demand:
   herhangi bir kamera değişimi küreyi uyandırır, boşta uyur → sıfır boşta yük.
   Kamera mesafesi ayrıca kart ölçeğini besler: pinch-zoom'da kartlar küreyle
   birlikte yaklaşır/uzaklaşır (Damla'nın isteği). */
globe.controls().addEventListener("change", () => {
  wakeGlobe();
  const base = globe.getGlobeRadius ? globe.getGlobeRadius() * 3.2 : 320; // altitude 2.2 başlangıcı
  const k = Math.max(0.55, Math.min(2.0, base / globe.camera().position.length()));
  if (Math.abs(k - zoomK) > 0.03) { zoomK = k; requestAnimationFrame(() => { layoutCards(); curveStory(); }); }
});

/* ince okları seçmek zordu: raycaster'ın çizgi toleransını büyüt — okları GÖRSEL
   olarak kalınlaştırmadan, tıklama/hover'ın oka "yakın" saymasını kolaylaştırır.
   globe.gl varsayılanı 1px; 8px ince oku bile rahat seçtirir. */
if (typeof globe.lineHoverPrecision === "function") globe.lineHoverPrecision(8);
/* dokunmatik cihazda küre parmakla büyütülebilsin (pinch-zoom); masaüstünde
   normal tekerlek sayfayı kaydırır ama Mac trackpad PINCH'i (ctrl+wheel olarak
   gelir) küreyi yakınlaştırır — iki parmak kaydırmadan ayrışır (Damla'nın notu) */
const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820;
globe.controls().enableZoom = isTouch;
globe.controls().minDistance = 140;  // en fazla yakınlaşma (büyük küre)
globe.controls().maxDistance = 520;  // en fazla uzaklaşma
if (isTouch) {
  globe.controls().zoomSpeed = 1.1;
  globe.controls().enablePan = false;  // sadece döndür + yakınlaştır, kaydırma yok
} else {
  const gel = document.getElementById("globe");
  gel.addEventListener("wheel", (e) => { globe.controls().enableZoom = e.ctrlKey; }, { capture: true, passive: true });
}
/* mobilde küreyi geniş çerçevele — ekran genişliğini doldursun, küçük durmasın */
globe.pointOfView({ lat: 20, lng: 20, altitude: 2.2 }, 0);

/* dokunmatik davranışı:
   1) SADECE pinch (2+ parmak) tıklamayı bastırır — böylece pinch-zoom seçili
      bağlantıyı uçurmaz. Tek parmak dokunuşuna KARIŞMAZ; drag/tık ayrımını
      globe.gl kendi yapıyor (önceki "10px kayma" kuralı tek parmak tıklamayı
      zorlaştırıyordu, kaldırıldı).
   2) Dönüş kalktı; etkileşim küreyi uyandırır, boşta uyur. */
(function globeTouchUX() {
  const el = document.getElementById("globe");
  if (!el) return;
  el.addEventListener("touchstart", (e) => {
    gesturing = e.touches.length > 1;           // yalnızca pinch tıklamayı bastırır
    wakeGlobe();
  }, { passive: true });
  el.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) gesturing = true;
    wakeGlobe();
  }, { passive: true });
  el.addEventListener("pointerdown", () => wakeGlobe(), { passive: true });
  el.addEventListener("wheel", () => wakeGlobe(), { passive: true });
  el.addEventListener("mouseenter", () => wakeGlobe());
})();

  sizeGlobe();

  /* küre görünmüyorken (hero'dayken) render döngüsünü durdur — sürekli 3B çizim
     tüm sayfayı kastırıyordu; küre sayfasına gelince devam eder */
  if ("IntersectionObserver" in window) {
    const glPage = document.querySelector(".page.gl");
    if (glPage) {
      new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting) { wakeGlobe(1800); } // gör: bir kez çiz + otur, sonra uyu
          else { globe.pauseAnimation(); if (_glSleep) { clearTimeout(_glSleep); _glSleep = null; } }
        });
      }, { threshold: 0.15 }).observe(glPage);
    }
  }
  } catch (e) {
    /* WebGL yok / driver sorunu: küre kurulamasa da sayfanın kalanı (hero, akış
       linkleri, hikaye paneli) çalışmaya devam eder — sessizce statik kal */
    console.error("[globe] küre kurulamadı:", e);
  }
}

/* kurulum tetikleyicileri: sayfa yüklendikten sonra boşta, ya da ilk kullanıcı
   niyetinde (hangisi önce gelirse). CDN (unpkg) geç gelirse pes etme: Globe
   tanımlanana kadar 500 ms arayla tekrar dene (en çok ~20 sn). */
(function scheduleGlobeInit() {
  let tries = 0;
  const kick = () => {
    if (globe) return;
    if (typeof Globe === "undefined") {
      if (++tries <= 40) setTimeout(kick, 500);
      else console.error("[globe] globe.gl kütüphanesi yüklenemedi (CDN erişilemedi)");
      return;
    }
    initGlobe();
  };
  ["wheel", "keydown", "touchstart", "pointerdown"].forEach((ev) =>
    window.addEventListener(ev, kick, { once: true, passive: true }));
  const idle = () => ("requestIdleCallback" in window)
    ? requestIdleCallback(kick, { timeout: 2000 })
    : setTimeout(kick, 800);
  if (document.readyState === "complete") idle();
  else window.addEventListener("load", idle);
})();

/* ── colour rules ── */
function isActiveCountry(c) {
  if (!c) return false;
  if (focusTie) return c === focusTie.s || c === focusTie.r;
  if (selected) return c === selected;
  return false;
}
function isActiveTie(t) {
  if (focusTie) return t === focusTie;
  if (selected) return t.s === selected || t.r === selected;
  return false;
}
function anySelection() { return !!(focusTie || selected); }

/* value hierarchy: ocean (lightest) < land (mid) < arcs (darkest) < hover (near-black); navy = accent */
function polyColor(f) {
  const c = countryOfFeature(f);
  if (isActiveCountry(c)) return "#2b5cad";     // selected country → navy blue land
  if (anySelection()) return "#e2e5ea";         // everything else fades
  return "#a7aeb9";                             // default: mid grey, darker than ocean
}
function arcColor(t) {
  if (isActiveTie(t)) return ["#17356b", "#2b5cad"];   // selected arc → navy
  if (anySelection()) return ["#cdd2d924", "#cdd2d924"]; // others fade way back
  if (t === hovered) return ["#171b22", "#171b22"];    // hover → near black
  return ["#49515f", "#49515f"];                       // default: dark grey, the darkest resting layer
}
function arcStroke(t) {
  if (isActiveTie(t)) return 0.95;
  if (anySelection()) return 0.07;
  if (t === hovered) return 0.7;
  return 0.38;
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* count-up: a number that animates from 0 when it appears */
function cnt(v) { return `<span class="cnt" data-to="${v}">0</span>`; }
function runCountUps() {
  document.querySelectorAll(".cnt").forEach((el) => {
    const to = parseFloat(el.dataset.to);
    if (isNaN(to)) return;
    const dec = to % 1 !== 0 ? 1 : 0;
    const start = performance.now();
    (function step(now) {
      const k = Math.min(1, (now - start) / 620);
      el.textContent = (to * (1 - Math.pow(1 - k, 3))).toFixed(dec);
      if (k < 1) requestAnimationFrame(step);
    })(start);
  });
}

/* what is actually traded in each layer, for plain-language sentences */
const GOOD = {
  silah: "silah", ticaret: "mal", enerji: "petrol ve gaz", tahil: "tahıl",
  ittifak: "ittifak bağı", yaptirim: "yaptırım", goc: "göç", borc: "kredi",
  diplomasi: "diplomatik bağ", teknoloji: "çip", us: "askeri üs", yardim: "yardım",
  kablo: "denizaltı kablosu", siber: "siber bağ",
};

/* ── editorial writing as a flowing paragraph (built from real numbers / verified basis) ── */
function tieStory(t) {
  if (t.type !== "silah") return t.note ? `<p>${esc(t.note)}</p>` : "";
  const g = GOOD.silah;
  // build only from the numbers we actually have — never print a fake %0
  let p;
  if (t.exp != null) {
    p = `${t.s}, ${g} ihracatının <strong>%${cnt(t.exp)}</strong>'ini ${t.r}'ye gönderiyor`;
    if (t.imp != null) p += `; ${t.r} açısından bu, ülkenin ${g} ithalatının <strong>%${cnt(t.imp)}</strong>'i demek`;
  } else if (t.imp != null) {
    p = `${t.r}, ${g} ithalatının <strong>%${cnt(t.imp)}</strong>'ini ${t.s}'den alıyor`;
  } else {
    p = `${t.s} → ${t.r}`;
  }
  p += ".";
  const tail = [];
  if (supShare[t.s]) tail.push(`${t.s} dünya ${g} ihracatının %${supShare[t.s]}'ini tek başına yapıyor`);
  if (recShare[t.r]) tail.push(`${t.r} küresel ${g} ithalatının %${recShare[t.r]}'ini alıyor`);
  return `<p>${p}</p>` + (tail.length ? `<p>${tail.join("; ")}.</p>` : "");
}
function countryStory(c) {
  if (layer !== "silah") {
    const sells = activeTies().filter((t) => t.s === c).slice(0, 3).map((t) => `${t.r} (${esc(t.note)})`);
    const buys = activeTies().filter((t) => t.r === c).slice(0, 3).map((t) => `${t.s} (${esc(t.note)})`);
    const g = GOOD[layer] || "bağ";
    const seg = [];
    if (sells.length) seg.push(`${c}, ${g} bağıyla ${sells.join(", ")} ile bağlı`);
    if (buys.length) seg.push(`${g} tarafında ${buys.join(", ")} ile de bağı var`);
    return seg.length ? `<p>${seg.join(". ")}.</p>` : "";
  }
  const g = GOOD.silah;
  const sells = activeTies().filter((t) => t.s === c && t.exp != null).sort((a, b) => b.exp - a.exp);
  const buys = activeTies().filter((t) => t.r === c && t.imp != null).sort((a, b) => b.imp - a.imp);
  const head = [];
  if (supShare[c]) head.push(`dünya ${g} ihracatının <strong>%${cnt(supShare[c])}</strong>'ini yapıyor`);
  if (recShare[c]) head.push(`ithalatının <strong>%${cnt(recShare[c])}</strong>'ini alıyor`);
  let p = head.length ? `${c}, ${head.join(", ")}.` : "";
  const t2 = [];
  if (sells[0]) t2.push(`en çok ${sells[0].r}'ye ${g} satıyor (%${sells[0].exp})`);
  if (buys[0]) t2.push(`en çok ${buys[0].s}'den alıyor (%${buys[0].imp})`);
  if (t2.length) p += ` ${c[0].toUpperCase()}${c.slice(1)} ${t2.join(", ")}.`;
  return `<p>${p}</p>`;
}

/* ── articles as data (per layer) — the cards layer lays them out around the globe ── */
function layerArticles() {
  return NEWS[layer] || {};
}
function tieArticleList(t) {
  return layerArticles()[t.s + "→" + t.r] || [];
}
function countryArticleList(c) {
  const all = layerArticles();
  const seen = new Set();
  const out = [];
  Object.keys(all).forEach((k) => {
    if (k.startsWith(c + "→") || k.endsWith("→" + c)) {
      all[k].forEach((a) => { if (!seen.has(a.url)) { seen.add(a.url); out.push(a); } });
    }
  });
  return out;   // NO cap — kaç makale varsa hepsi; yerleşim geometrisi kaç tanesinin sığacağına karar verir
}

/* ── left column: the story ── */
function srcLine() {
  const s = SRC[layer];
  return s && s.url
    ? `<p class="src"><em>kaynak: <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}${s.year ? ", " + esc(s.year) : ""} ↗</a></em></p>`
    : `<p class="src"><em>bağlantılar açık kaynaklardan derlendi · haberler: google news</em></p>`;
}
const story = document.getElementById("story");
function renderStory() {
  if (focusTie) {
    const t = focusTie;
    story.innerHTML = `
      <div class="lbl">bu ilişki</div>
      <h2>${t.s} → ${t.r}</h2>
      <div class="writing">${tieStory(t)}</div>
      <div class="radar-slot"></div>
      ${srcLine()}`;
    attachRadar();
    return;
  }
  if (selected) {
    story.innerHTML = `
      <div class="lbl">ülke</div>
      <h2>${selected}</h2>
      <div class="writing">${countryStory(selected)}</div>
      <div class="radar-slot"></div>
      ${srcLine()}`;
    attachRadar();
    return;
  }
  story.innerHTML = `<div class="writing intro-writing">
    <p>dünyanın bağ haritası. her ok, bir ülkeden bir ülkeye giden büyük transferi gösteriyor.</p>
    <p>bir <strong>oka</strong> tıkla: o ilişkinin sayıları, yazısı ve haberleri açılır. bir <strong>ülkeye</strong> tıkla: kiminle bağlı olduğunu gör.</p>
  </div>`;
}

/* v2 motor: olay radarı hikaye paneline TEMBEL biner. events+graph ilk seçimde
   bir kez çekilir; gelince o an seçili olan bağ/ülke için radar basılır. Motor
   yoksa (indirilemedi / henüz üretilmedi) panel eskisi gibi çalışır — slot boş
   kalır, hiçbir yerde boş kutu görünmez (Motor.radar* boşsa "" döner). */
let motorData = null, motorPromise = null;
function ensureMotor() {
  if (motorData) return Promise.resolve(motorData);
  if (!motorPromise)
    motorPromise = Promise.all([Store.events(), Store.graph()])
      .then(([events, graph]) => (motorData = { events, graph }))
      .catch(() => (motorData = { events: null, graph: null }));
  return motorPromise;
}
/* küre paneli ülke isimlerini ham anahtarla (küçük harf) gösteriyor → radar da
   aynı gösterimi kullansın ki h2 ile tutarlı olsun (kimlik disp) */
function attachRadar() {
  const slot = story.querySelector(".radar-slot");
  if (!slot || typeof Motor === "undefined") return;
  const wantTie = focusTie, wantSel = selected;   // enjeksiyon anındaki seçim
  ensureMotor().then((md) => {
    if (!md || (!md.events && !md.graph)) return;
    if (focusTie !== wantTie || selected !== wantSel) return; // seçim değişti → bırak
    const cur = story.querySelector(".radar-slot");
    if (!cur) return;
    const html = focusTie
      ? Motor.radarTie(md.events, md.graph, focusTie.s, focusTie.r)
      : selected
        ? Motor.radarCountry(md.events, md.graph, selected)
        : "";
    if (!html) return;
    cur.innerHTML = html;
    curveStory();  // panel boyu değişti → kavis yeniden hesaplansın
  });
}

/* numbers under the story (silah only — the other layers have no percentages) */
const detail = document.getElementById("detail");
function renderDetail() {
  if (layer !== "silah") { detail.innerHTML = ""; return; }
  if (focusTie) {
    const t = focusTie;
    detail.innerHTML = `
      <div class="lbl">rakamlar</div>
      ${t.exp != null ? `<p class="row"><span>${t.s} → ${t.r}</span><b>%${cnt(t.exp)}</b></p>` : ""}
      ${t.imp != null ? `<p class="row"><span>${t.r} ithalatında ${t.s}</span><b>%${cnt(t.imp)}</b></p>` : ""}`;
    return;
  }
  if (selected) {
    const sells = activeTies().filter((t) => t.s === selected).sort((a, b) => (b.exp || 0) - (a.exp || 0));
    const buys = activeTies().filter((t) => t.r === selected).sort((a, b) => (b.imp || 0) - (a.imp || 0));
    detail.innerHTML =
      (sells.length ? `<div class="lbl">kime silah satıyor</div>` + sells.map((t) =>
        `<p class="row"><span>→ ${t.r}</span>${t.exp != null ? `<b>%${t.exp}</b>` : ""}</p>`).join("") : "") +
      (buys.length ? `<div class="lbl">kimden silah alıyor</div>` + buys.map((t) =>
        `<p class="row"><span>← ${t.s}</span>${t.imp != null ? `<b>%${t.imp}</b>` : ""}</p>`).join("") : "");
    return;
  }
  detail.innerHTML = "";
}

/* ── liquid cards: real articles arranged along the globe's curve, they flow on change ── */
const cardsEl = document.getElementById("cards");
/* bir habere tıklamak = en güçlü ilgi sinyali (gerçekten okumaya gidiyor). Delege
   dinleyici bir kez kurulur; o an seçili bağ/ülke + katman on-device kaydedilir. */
cardsEl.addEventListener("click", (e) => {
  if (!e.target.closest(".card") || typeof Ilgi === "undefined") return;
  const cs = focusTie ? [focusTie.s, focusTie.r] : selected ? [selected] : [];
  Ilgi.note({ countries: cs, layers: [layer], w: 2 });
});
function currentArticles() {
  if (focusTie) return tieArticleList(focusTie);   // hiç kırpma yok — veri neyse o
  if (selected) return countryArticleList(selected);
  return [];
}
/* öğretmen geri bildirimi ("ne sunduğu anlaşılmıyor"): ekranda İLK 10 makale +
   sağda kaç makale bulunduğu + yazım hatasına toleranslı kelime araması (js/ara.js).
   Yazarken input yeniden yaratılmaz (odak kaçmasın) — sadece sayı + liste tazelenir. */
const CARD_CAP = 10;
let araQuery = "";
function cardsHTML(arts) {
  return arts.map((a, i) =>
    `<a class="card" style="--i:${i}" href="${esc(a.url)}" target="_blank" rel="noopener">
      <span class="card-title">${esc(a.title)}</span>
      <span class="card-meta">${esc(a.source)}${a.date ? " · " + esc(TRDate.short(a.date)) : ""}</span>
    </a>`).join("");
}
function araHits(all) {
  return typeof Ara !== "undefined" ? Ara.search(all, araQuery) : all.slice();
}
function countLine(all, hits) {
  const q = araQuery.trim();
  if (q && !hits.length) return "eşleşme yok — başka kelime dene";
  const n = q ? hits.length : all.length;
  const base = q ? `aramanda <b>${n}</b> makale bulundu` : `bu konuda <b>${n}</b> makale bulundu`;
  return base + (n > CARD_CAP ? ` · ilk ${CARD_CAP} gösteriliyor` : "");
}
function updateCards() {
  const all = currentArticles();
  const hits = araHits(all);
  const list = cardsEl.querySelector(".cards-list");
  const cnt = cardsEl.querySelector(".cards-count");
  if (!list || !cnt) return;
  list.innerHTML = cardsHTML(hits.slice(0, CARD_CAP));
  cnt.innerHTML = countLine(all, hits);
  layoutCards();
}
function renderCards() {
  const all = currentArticles();
  if (!all.length) { cardsEl.classList.remove("show"); cardsEl.innerHTML = ""; return; }
  const hits = araHits(all);
  cardsEl.innerHTML =
    `<div class="cards-find">
      <div class="cards-lbl">${focusTie ? "bu ilişkinin haberleri" : "bu ülkenin haberleri"}</div>
      <p class="cards-count" aria-live="polite">${countLine(all, hits)}</p>
      <input class="cards-search" type="search" placeholder="haberlerde ara" aria-label="haberlerde kelimeyle ara" autocomplete="off">
    </div>
    <div class="cards-list">${cardsHTML(hits.slice(0, CARD_CAP))}</div>`;
  const inp = cardsEl.querySelector(".cards-search");
  inp.value = araQuery;
  inp.addEventListener("input", () => { araQuery = inp.value; updateCards(); });
  cardsEl.classList.add("show");
  layoutCards();
}
/* kartları kürenin İKİ kavisine sarar (Damla: "sol tarafa da kart") — sabit adet
   YOK: sağ yay birincil, kartların ~üçte biri SOL yaya gider (hikaye paneliyle
   küre arasına sığıyorsa). Dikey kolon dolunca dışa yeni kolon açılır, yer
   biterse font kademeli küçülür. zoomK: pinch-zoom kart ölçeğini küreyle izler. */
let zoomK = 1;
function layoutCards() {
  const cards = [...cardsEl.querySelectorAll(".card")];
  const n = cards.length;
  if (!n) return;
  const stage = document.querySelector(".stage");

  /* mobil: kartlar CSS ile kürenin altında düz liste — konumlandırma/font override yok */
  if (window.matchMedia("(max-width: 820px)").matches) {
    cards.forEach((c) => { c.style.left = ""; c.style.top = ""; c.classList.remove("solyay"); });
    cardsEl.style.removeProperty("--card-fs");
    cardsEl.classList.remove("dense");
    return;
  }

  const w = stage.clientWidth, h = stage.clientHeight;
  const cx = w / 2, cy = h / 2;
  const pad = 46;                         // üst/alt kenara asgari mesafe
  const usable = h - pad * 2;
  const FS_MAX = 14.5, FS_MIN = 10.5;
  const rowH = (fs) => fs * 2.6 + 13;     // 2 satır başlık + kaynak + nefes → dikey adım
  const cardW = 210;
  const story = document.querySelector(".col.left");
  const storyEdge = story ? story.offsetWidth + 8 : 320;   // sol kartların sol sınırı
  const Redge = Math.min(w, h) * 0.40 * zoomK;             // küre kenarı (yaklaşık, zoom'la ölçekli)
  const leftFits = cx - Redge - storyEdge >= cardW - 30;   // sol yaya kolon sığıyor mu

  /* iki yayın paylaşımı: sol sığıyorsa ve kart ≥4 ise üçte biri sola */
  const leftN = leftFits && n >= 4 ? Math.floor(n / 3) : 0;
  const right = cards.slice(0, n - leftN), left = cards.slice(n - leftN);
  cards.forEach((c, i) => c.classList.toggle("solyay", i >= n - leftN));

  /* bir yayı döşe: side=+1 sağ, -1 sol. Az kartta orantılı yay, çokta kolon-fan. */
  function place(list, side) {
    const m = list.length;
    if (!m) return FS_MAX;
    const Rbig = (Math.min(w, h) * 0.46 + 30) * zoomK;
    if (m <= 6) {
      const STEP = 22, half = ((m - 1) * STEP) / 2;
      list.forEach((c, i) => {
        const deg = m > 1 ? -half + (i * 2 * half) / (m - 1) : 0;
        const rad = (deg * Math.PI) / 180;
        const y = Math.max(pad, Math.min(h - pad, cy + Rbig * Math.sin(rad)));
        let x = cx + side * Rbig * Math.cos(rad);
        if (side < 0) x = Math.max(storyEdge, x - cardW);
        c.style.left = x.toFixed(1) + "px";
        c.style.top = y.toFixed(1) + "px";
      });
      return FS_MAX;
    }
    const colCap = Math.max(1, Math.floor(usable / rowH(FS_MAX)));
    const colGap = cardW + 8;
    const r0 = Math.min(w, h) * 0.40 * zoomK + 10;         // ilk kolonun kavis yarıçapı
    const room = side > 0 ? w - cardW - 14 - (cx + r0) : cx - r0 - storyEdge;
    const maxCols = Math.max(1, Math.floor(room / colGap) + 1);
    const cols = Math.min(maxCols, Math.ceil(m / colCap));
    const cap = Math.ceil(m / cols);
    const fs = Math.max(FS_MIN, Math.min(FS_MAX, (usable / cap - 13) / 2.6));
    list.forEach((c, idx) => {
      const col = Math.floor(idx / cap);
      const row = idx % cap;
      const inCol = Math.min(cap, m - col * cap);
      const y = inCol > 1 ? pad + (row * usable) / (inCol - 1) : cy;
      const Rk = r0 + col * colGap;
      const t = Math.max(-0.985, Math.min(0.985, (y - cy) / Rk));
      let x = cx + side * Rk * Math.cos(Math.asin(t));
      if (side < 0) x = Math.max(storyEdge, x - cardW);
      c.style.left = x.toFixed(1) + "px";
      c.style.top = y.toFixed(1) + "px";
    });
    return fs;
  }

  const fsR = place(right, 1), fsL = place(left, -1);
  const fs = Math.min(fsR, fsL);
  cardsEl.style.setProperty("--card-fs", fs.toFixed(1) + "px");
  cardsEl.classList.toggle("dense", fs < FS_MAX - 0.1);
}

/* hikaye panelini kürenin SOL kavisine gerçekten sardır: .writing içine görünmez
   bir float konur, shape-outside küre dairesini oyar → satırlar kavisi izler.
   Geometri küreden türetilir (kör piksel yok); dar ekranda kendini kapatır. */
function curveStory() {
  const el = story.querySelector(".writing");
  if (!el) return;
  let f = el.querySelector(".curveflow");
  if (!f) { f = document.createElement("i"); f.className = "curveflow"; f.setAttribute("aria-hidden", "true"); el.prepend(f); }
  const stage = document.querySelector(".stage");
  if (!stage || window.matchMedia("(max-width: 1100px)").matches) { f.style.display = "none"; return; }
  const w = stage.clientWidth, h = stage.clientHeight;
  const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.40 * zoomK + 16;  // küre kenarı + nefes
  f.style.display = "none";                       // ölçümü float'suz yap
  const wr = el.getBoundingClientRect(), sr = stage.getBoundingClientRect();
  const wx = wr.left - sr.left, wy = wr.top - sr.top;
  const overlap = wx + wr.width - (cx - R);       // yazı kutusu daireye ne kadar giriyor
  if (overlap <= 6) return;                       // kavise değmiyor → düz kalsın
  f.style.display = "block";
  f.style.width = Math.min(overlap, wr.width * 0.65).toFixed(1) + "px";
  f.style.height = Math.max(el.scrollHeight, 40) + "px";
  /* dairenin merkezi float'ın KENDİ kutusuna göre verilir */
  const fx = cx - wx - (wr.width - parseFloat(f.style.width));
  const fy = cy - wy;
  f.style.shapeOutside = `circle(${R.toFixed(1)}px at ${fx.toFixed(1)}px ${fy.toFixed(1)}px)`;
}

/* ── actions ── */
function focusOnTie(t) {
  if (t === focusTie) { reset(); return; } // click the same arc again → deselect
  focusTie = t;
  selected = null;
  araQuery = "";              // yeni konu → eski arama taşınmaz
  if (typeof Ilgi !== "undefined") Ilgi.note({ countries: [t.s, t.r], layers: [t.type], w: 1.5 });
  redraw();
  const midLat = (COORDS[t.s][0] + COORDS[t.r][0]) / 2;
  const midLng = (COORDS[t.s][1] + COORDS[t.r][1]) / 2;
  if (globe) { globe.pointOfView({ lat: midLat, lng: midLng, altitude: 1.7 }, 800); wakeGlobe(1400); }
  renderAll();
}
function selectCountry(c) {
  focusTie = null;
  selected = c;
  araQuery = "";
  if (c && typeof Ilgi !== "undefined") Ilgi.note({ countries: [c], layers: [layer], w: 1 });
  redraw();
  if (globe && c && COORDS[c]) { globe.pointOfView({ lat: COORDS[c][0], lng: COORDS[c][1], altitude: 1.8 }, 700); wakeGlobe(1400); }
  renderAll();
}
function reset() {
  focusTie = null;
  selected = null;
  araQuery = "";
  redraw();
  renderAll();
}
/* on-demand render kapısı: küre boştayken HİÇ çizmesin (eski sürekli autoRotate
   tüm sayfayı kastırıyordu). Kamera değişimi, veri tazeleme ya da odak animasyonu
   küreyi uyandırır; ~2.6 sn hareketsizlikte tekrar uyur → boşta sıfır GPU. */
let _glSleep = null;
function wakeGlobe(ms = 2600) {
  if (!globe || !globe.resumeAnimation) return;
  globe.resumeAnimation();
  if (_glSleep) clearTimeout(_glSleep);
  _glSleep = setTimeout(() => { if (globe && globe.pauseAnimation) globe.pauseAnimation(); }, ms);
}
function redraw() {
  if (!globe) return; // küre daha kurulmadıysa initGlobe kurulumda kendisi çizer
  globe.polygonsData(globe.polygonsData() || []); // aynı nesneler → sadece renkler tazelenir
  globe.arcsData(visibleTies());
  wakeGlobe(); // renk/bağ değişimini bir kare çiz, sonra uyu
}
function renderAll() {
  document.querySelector(".stage").classList.toggle("sel", anySelection());
  renderStory(); renderDetail(); renderCards(); runCountUps(); curveStory();
}

function sizeGlobe() {
  if (globe) {
    const el = document.getElementById("globe");
    globe.width(el.clientWidth);
    globe.height(el.clientHeight);
  }
  layoutCards();
  curveStory();
}
renderAll();
window.addEventListener("resize", sizeGlobe);

/* ── Supabase = Bera'nın EDİTORYAL BİNDİRME katmanı (asla değiştirme modu değil) ──
   admin/config.js boşsa hiçbir şey yapmaz; site statik JSON ile aynen çalışır.
   Doluysa DB satırları statik verinin ÜSTÜNE biner:
   - eşleşen (layer,s,r): hidden=true ise bağı küreden gizler, değilse notu ezer
   - statikte olmayan satır: editoryal ekleme olarak katmana katılır
   Tembel yüklenen katmanlara da uygulansın diye bindirme ensureLayer içinde
   koşuyor; burada sadece OVERLAY doldurulup yüklü katmanlar tazeleniyor. */
const OVERLAY = {}; // layer -> [{s, r, note, hidden}]
function applyOverlay(k) {
  const rows = OVERLAY[k];
  if (!rows || !rows.length) return;
  rows.forEach((o) => {
    const i = TIES.findIndex((t) => t.type === k && t.s === o.s && t.r === o.r);
    if (o.hidden) {
      if (i > -1) TIES.splice(i, 1);
    } else if (i > -1) {
      if (o.note) TIES[i].note = o.note;
    } else if (COORDS[o.s] && COORDS[o.r]) {
      TIES.push({ s: o.s, r: o.r, type: k, note: o.note || "", v: null, exp: null, imp: null });
    }
  });
  tiesRev++;
}

async function hydrateFromSupabase() {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON) return; // config yok → statik kal
  const base = window.SUPABASE_URL.replace(/\/$/, "");
  const headers = { apikey: window.SUPABASE_ANON, Authorization: "Bearer " + window.SUPABASE_ANON };
  let dbConns;
  try {
    const cr = await fetch(base + "/rest/v1/irglobe_connections?select=layer,s,r,note,hidden", { headers });
    if (!cr.ok) throw new Error("HTTP " + cr.status);
    dbConns = await cr.json();
  } catch (e) {
    console.warn("[globe] Supabase okunamadı, statik veriyle devam:", e.message);
    return;
  }
  if (!Array.isArray(dbConns) || !dbConns.length) return;
  dbConns.forEach((c) => { (OVERLAY[c.layer] ||= []).push(c); });
  loadedLayers.forEach((k) => applyOverlay(k));
  redraw();
  renderAll();
}

/* ── boot: registry + layer index + default layer, then draw ── */
(async function boot() {
  try {
    const [countries, index] = await Promise.all([Store.countries(), Store.layerIndex()]);
    Object.values(countries).forEach((c) => {
      COORDS[c.key] = c.coords;
      KEYOF[c.key] = c.key;
      (c.aliases || []).forEach((a) => { KEYOF[a] = c.key; });
    });
    index.forEach((l) => LAYERS.push({ key: l.key, label: l.label, live: true }));
    await ensureLayer(layer);
    renderLayers();
    redraw();
    renderAll();
    hydrateFromSupabase();
  } catch (e) {
    console.error("[globe] veri yüklenemedi:", e);
    story.innerHTML = '<div class="writing"><p>veri yüklenemedi — bağlantını kontrol edip sayfayı yenile.</p></div>';
  }
})();
