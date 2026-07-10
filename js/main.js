/* merge the two SIPRI tables into one set of directed ties, then draw them */

const ties = {}; // "supplier→recipient" → {s, r, exp, imp}
function tie(s, r) {
  const k = s + "→" + r;
  if (!ties[k]) ties[k] = { s, r, exp: null, imp: null };
  return ties[k];
}
SUPPLIERS.forEach((sup) => sup.to.forEach(([r, pct]) => { tie(sup.c, r).exp = pct; }));
RECIPIENTS.forEach((rec) => rec.from.forEach(([s, pct]) => { tie(s, rec.c).imp = pct; }));
const TIES = Object.values(ties).filter((t) => COORDS[t.s] && COORDS[t.r]);
TIES.forEach((t) => { t.type = "silah"; });

const supShare = Object.fromEntries(SUPPLIERS.map((x) => [x.c, x.share]));
const recShare = Object.fromEntries(RECIPIENTS.map((x) => [x.c, x.share]));
const NAMES = [...new Set(TIES.flatMap((t) => [t.s, t.r]))].sort();
const src = SOURCES.silah;

/* geojson country name → our data key (natural earth naming is inconsistent) */
const ALIAS = {
  "united states of america": "united states", "united states": "united states",
  "turkey": "türkiye", "türkiye": "türkiye", "turkiye": "türkiye",
  "czech republic": "czechia", "czechia": "czechia",
  "republic of korea": "south korea", "south korea": "south korea",
  "united arab emirates": "uae",
  "democratic republic of the congo": "drc",
  "republic of serbia": "serbia", "serbia": "serbia",
  "russian federation": "russia",
};
function countryOfFeature(f) {
  for (const key of ["ADMIN", "NAME", "NAME_LONG", "SOVEREIGNT", "name"]) {
    const v = f.properties && f.properties[key];
    if (!v) continue;
    const n = String(v).toLowerCase();
    if (ALIAS[n]) return ALIAS[n];
    if (COORDS[n]) return n;
  }
  return null;
}

/* the lenses an IR student wants. only 'silah' has real data today; the rest are
   honest empty scaffolds (NO fake arcs) — the editor fills them with real data later.
   adding data to a layer = a data table whose ties carry that type + a SOURCES entry. */
const LAYERS = [
  { key: "silah", label: "silah", live: true },
  { key: "ticaret", label: "ticaret", live: false },
  { key: "enerji", label: "enerji", live: false },
  { key: "tahil", label: "tahıl & gıda", live: false },
  { key: "ittifak", label: "ittifaklar", live: false },
  { key: "yaptirim", label: "yaptırımlar", live: false },
  { key: "goc", label: "göç & mülteci", live: false },
  { key: "borc", label: "borç & kredi", live: false },
  { key: "diplomasi", label: "diplomasi", live: false },
  { key: "teknoloji", label: "teknoloji & çip", live: false },
  { key: "us", label: "askeri üsler", live: false },
  { key: "yardim", label: "dış yardım", live: false },
];
function currentLayer() { return LAYERS.find((l) => l.key === layer); }

let layer = "silah";
let selected = null;  // a country
let focusTie = null;  // a single arc
let hovered = null;   // arc under the cursor

const layerNav = document.getElementById("layers");
function renderLayers() {
  layerNav.innerHTML = LAYERS.map((l) =>
    `<button class="layerbtn${l.key === layer ? " on" : ""}${l.live ? "" : " soon"}" data-l="${l.key}">${l.label}</button>`).join("");
  layerNav.querySelectorAll(".layerbtn").forEach((b) =>
    b.addEventListener("click", () => { layer = b.dataset.l; reset(); renderLayers(); }));
}
function activeTies() { return TIES.filter((t) => t.type === layer); }

/* importance ≈ share of GLOBAL exports carried on this arc (supplier's weight × concentration) */
function impScore(t) {
  const pct = t.exp != null ? t.exp : (t.imp != null ? t.imp : 5);
  return (supShare[t.s] || 0.3) * (pct / 100);
}
function majorTies() {
  return activeTies().slice().sort((a, b) => impScore(b) - impScore(a)).slice(0, 38);
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
  return `${t.s} → ${t.r} · ${bits.join(" · ")}`;
}

/* ── globe: grey editorial world map, white ocean, navy on select ── */
const globe = Globe()(document.getElementById("globe"))
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
  .onPolygonClick((f) => { const c = countryOfFeature(f); if (c) selectCountry(c === selected ? null : c); })
  .arcLabel((t) => tieLine(t))
  .arcStartLat((t) => COORDS[t.s][0]).arcStartLng((t) => COORDS[t.s][1])
  .arcEndLat((t) => COORDS[t.r][0]).arcEndLng((t) => COORDS[t.r][1])
  .arcColor((t) => arcColor(t))
  .arcStroke((t) => arcStroke(t))
  .arcAltitudeAutoScale(0.4)
  .arcsTransitionDuration(0)
  .onArcHover((t) => {
    document.body.style.cursor = t ? "pointer" : "default";
    if (t !== hovered) { hovered = t; globe.arcsData(visibleTies()); }
  })
  .onArcClick((t) => focusOnTie(t))
  .onGlobeClick(() => reset());

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
  .then((geo) => globe.polygonsData(geo.features.filter((f) => f.properties.ISO_A2 !== "AQ")))
  .catch(() => {});

globe.arcsData(visibleTies());
renderLayers();
globe.controls().autoRotate = false; // the user's hand spins it, not the app
globe.pointOfView({ lat: 25, lng: 25, altitude: 2.1 }, 0);

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

/* ── editorial writing built from the real numbers (no invented commentary) ── */
function tieStory(t) {
  const p = [];
  if (t.exp != null) p.push(`${t.s}, silah ihracatının <strong>%${t.exp}</strong>'ini ${t.r}'ye gönderiyor.`);
  if (t.imp != null) p.push(`${t.r} açısından bu ilişki, ülkenin silah ithalatının <strong>%${t.imp}</strong>'i anlamına geliyor.`);
  if (supShare[t.s]) p.push(`${t.s} tek başına dünya silah ihracatının %${supShare[t.s]}'ini yapıyor.`);
  if (recShare[t.r]) p.push(`${t.r} ise küresel silah ithalatının %${recShare[t.r]}'ini alıyor.`);
  return p.map((s) => `<p>${s}</p>`).join("");
}
function countryStory(c) {
  const p = [];
  const sells = activeTies().filter((t) => t.s === c && t.exp != null).sort((a, b) => b.exp - a.exp);
  const buys = activeTies().filter((t) => t.r === c && t.imp != null).sort((a, b) => b.imp - a.imp);
  if (supShare[c]) p.push(`${c}, dünya silah ihracatının <strong>%${supShare[c]}</strong>'ini yapıyor.`);
  if (recShare[c]) p.push(`${c}, dünya silah ithalatının <strong>%${recShare[c]}</strong>'ini alıyor.`);
  if (sells[0]) p.push(`En çok ${sells[0].r}'ye satıyor (ihracatının %${sells[0].exp}'i).`);
  if (buys[0]) p.push(`En çok ${buys[0].s}'den alıyor (ithalatının %${buys[0].imp}'i).`);
  return p.map((s) => `<p>${s}</p>`).join("");
}

function newsBlock(query, heading) {
  const q = encodeURIComponent(query);
  return `
    <div class="lbl">${heading}</div>
    <a class="news" href="https://news.google.com/search?q=${q}&hl=tr&gl=TR" target="_blank" rel="noopener">google haberler ↗</a>
    <a class="news" href="https://www.google.com/search?q=${q}&tbm=nws" target="_blank" rel="noopener">makaleler ve analizler ↗</a>`;
}

/* ── left column: the story + articles ── */
const story = document.getElementById("story");
function renderStory() {
  if (focusTie) {
    const t = focusTie;
    story.innerHTML = `
      <div class="lbl">bu ilişki</div>
      <h2>${t.s} → ${t.r}</h2>
      <div class="writing">${tieStory(t)}</div>
      ${newsBlock(`${t.s} ${t.r} silah`, "bu ilişkinin haberleri")}
      <p class="src"><em>kaynak: <a href="${src.url}" target="_blank" rel="noopener">SIPRI, 2021–25 ↗</a></em></p>`;
    return;
  }
  if (selected) {
    story.innerHTML = `
      <div class="lbl">ülke</div>
      <h2>${selected}</h2>
      <div class="writing">${countryStory(selected)}</div>
      ${newsBlock(`${selected} silah ticareti`, "bu ülkenin haberleri")}
      <p class="src"><em>kaynak: <a href="${src.url}" target="_blank" rel="noopener">SIPRI, 2021–25 ↗</a></em></p>`;
    return;
  }
  if (!currentLayer().live) {
    story.innerHTML = `
      <div class="lbl">${currentLayer().label}</div>
      <div class="writing"><p>Bu katman için veri henüz eklenmedi. Silah katmanı canlı; diğer ilişki türleri gerçek verilerle buraya eklenecek.</p></div>`;
    return;
  }
  story.innerHTML = ""; // live layer, nothing selected: clean sides, the globe carries the page
}

/* ── right column: the ledger + country wall ── */
const detail = document.getElementById("detail");
const list = document.getElementById("countries");

function renderDetail() {
  if (focusTie) {
    const t = focusTie;
    detail.innerHTML = `
      <div class="lbl">rakamlar</div>
      ${t.exp != null ? `<p class="row"><span>${t.s} → ${t.r}</span><b>%${t.exp}</b></p>` : ""}
      ${t.imp != null ? `<p class="row"><span>${t.r} ithalatında ${t.s}</span><b>%${t.imp}</b></p>` : ""}`;
    return;
  }
  if (selected) {
    const sells = activeTies().filter((t) => t.s === selected).sort((a, b) => (b.exp || 0) - (a.exp || 0));
    const buys = activeTies().filter((t) => t.r === selected).sort((a, b) => (b.imp || 0) - (a.imp || 0));
    detail.innerHTML =
      (sells.length ? `<div class="lbl">sattıkları</div>` + sells.map((t) =>
        `<p class="row"><span>→ ${t.r}</span>${t.exp != null ? `<b>%${t.exp}</b>` : ""}</p>`).join("") : "") +
      (buys.length ? `<div class="lbl">aldıkları</div>` + buys.map((t) =>
        `<p class="row"><span>← ${t.s}</span>${t.imp != null ? `<b>%${t.imp}</b>` : ""}</p>`).join("") : "");
    return;
  }
  detail.innerHTML = "";
}

function renderList() {
  const ranked = NAMES.slice().sort((a, b) =>
    (supShare[b] || 0) + (recShare[b] || 0) - (supShare[a] || 0) - (recShare[a] || 0));
  list.innerHTML = `<div class="lbl">ülkeler</div>` + ranked.map((c) =>
    `<button class="country${c === selected ? " on" : ""}" data-c="${c}"
       style="font-size:${12 + Math.min(8, Math.sqrt((supShare[c] || 0) + (recShare[c] || 0)) * 2.2)}px">${c}</button>`
  ).join("");
  list.querySelectorAll(".country").forEach((b) =>
    b.addEventListener("click", () => selectCountry(b.dataset.c === selected ? null : b.dataset.c)));
}

/* ── actions ── */
function focusOnTie(t) {
  if (t === focusTie) { reset(); return; } // click the same arc again → deselect
  focusTie = t;
  selected = null;
  redraw();
  const midLat = (COORDS[t.s][0] + COORDS[t.r][0]) / 2;
  const midLng = (COORDS[t.s][1] + COORDS[t.r][1]) / 2;
  globe.pointOfView({ lat: midLat, lng: midLng, altitude: 1.7 }, 800);
  renderAll();
}
function selectCountry(c) {
  focusTie = null;
  selected = c;
  redraw();
  if (c && COORDS[c]) globe.pointOfView({ lat: COORDS[c][0], lng: COORDS[c][1], altitude: 1.8 }, 700);
  renderAll();
}
function reset() {
  focusTie = null;
  selected = null;
  redraw();
  renderAll();
}
function redraw() {
  globe.polygonsData(globe.polygonsData() || []);
  globe.arcsData(visibleTies());
}
function renderAll() { renderStory(); renderDetail(); renderList(); }

function sizeGlobe() {
  const el = document.getElementById("globe");
  globe.width(el.clientWidth);
  globe.height(el.clientHeight);
}
renderAll();
sizeGlobe();
window.addEventListener("resize", sizeGlobe);
