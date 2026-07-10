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

/* layers: one lens at a time. new layer = new data table with its own type + SOURCES entry. */
const LAYERS = ["silah"];
let layer = "silah";
let selected = null;  // a country
let focusTie = null;  // a single arc — everything else fades

const layerNav = document.getElementById("layers");
function renderLayers() {
  layerNav.innerHTML = LAYERS.map((l) =>
    `<button class="layerbtn${l === layer ? " on" : ""}" data-l="${l}">${l}</button>`).join("")
    + `<span class="layers-soon">ticaret · enerji · tahıl yolda</span>`;
  layerNav.querySelectorAll(".layerbtn").forEach((b) =>
    b.addEventListener("click", () => { layer = b.dataset.l; clearFocus(); refresh(); renderLayers(); }));
}
function activeTies() { return TIES.filter((t) => t.type === layer); }

/* one tie, one honest sentence (hover tooltip) */
function tieLine(t) {
  const bits = [];
  if (t.exp != null) bits.push(`${t.s} ihracatının %${t.exp}'i`);
  if (t.imp != null) bits.push(`${t.r} ithalatının %${t.imp}'i`);
  return `${t.s} → ${t.r} · ${bits.join(" · ")}`;
}

/* ── globe: editorial world map — real country shapes, navy arcs, white paper ── */
const globe = Globe()(document.getElementById("globe"))
  .backgroundColor("#ffffff")
  .globeImageUrl(null)
  .showGraticules(false)
  .showAtmosphere(true)
  .atmosphereColor("#a7b8d6")
  .atmosphereAltitude(0.09)
  .polygonCapColor(() => "#c4cdda")   // land
  .polygonSideColor(() => "#00000000")
  .polygonStrokeColor(() => "#8b97a9") // country borders
  .polygonAltitude(0.006)
  .pointsData(NAMES.map((c) => ({ c, lat: COORDS[c][0], lng: COORDS[c][1] })))
  .pointLat("lat").pointLng("lng")
  .pointColor((d) => pointColor(d.c))
  .pointAltitude(0.006)
  .pointRadius((d) => pointRadius(d.c))
  .pointLabel((d) => label(d.c))
  .onPointClick((d) => selectCountry(d.c))
  .arcLabel((t) => tieLine(t))
  .arcStartLat((t) => COORDS[t.s][0]).arcStartLng((t) => COORDS[t.s][1])
  .arcEndLat((t) => COORDS[t.r][0]).arcEndLng((t) => COORDS[t.r][1])
  .arcColor((t) => arcColor(t))
  .arcStroke((t) => arcStroke(t))
  .arcAltitudeAutoScale(0.4)
  .arcsTransitionDuration(0)
  .onArcHover((t) => { document.body.style.cursor = t ? "pointer" : "default"; })
  .onArcClick((t) => focusOnTie(t))
  .onGlobeClick(() => { clearFocus(); selectCountry(null); });

/* ocean = flat pale blue sphere; land shapes are drawn on top from geojson */
const mat = globe.globeMaterial();
mat.color.set("#eef2f7");
mat.emissive.set("#eef2f7");
mat.emissiveIntensity = 0.85;
mat.shininess = 0;

/* real country outlines make it a map, not a blank ball */
fetch("data/countries.geojson?v=3")
  .then((r) => r.json())
  .then((geo) => globe.polygonsData(geo.features.filter((f) => f.properties.ISO_A2 !== "AQ")))
  .catch(() => {});

globe.arcsData(activeTies());
renderLayers();
globe.controls().autoRotate = false; // the user's hand spins it, not the app
globe.pointOfView({ lat: 25, lng: 25, altitude: 2.1 }, 0);

/* ── colour + size rules ── */
function inFocus(c) { return focusTie && (focusTie.s === c || focusTie.r === c); }

function arcColor(t) {
  if (focusTie) return t === focusTie ? ["#17356b", "#2b5cad"] : ["#17356b06", "#2b5cad06"];
  if (selected) {
    if (t.s === selected) return ["#17356b", "#2b5cad"];
    if (t.r === selected) return ["#2b5cad", "#17356b"];
    return ["#8896ab12", "#8896ab12"];
  }
  return ["#8896abaa", "#6f7d93aa"];
}
function arcStroke(t) {
  if (focusTie) return t === focusTie ? 0.9 : 0.05;
  if (selected) return (t.s === selected || t.r === selected) ? 0.7 : 0.12;
  return 0.28;
}
function pointColor(c) {
  if (focusTie) return inFocus(c) ? "#17356b" : "#c4cad3";
  if (c === selected) return "#17356b";
  return "#4a5464";
}
function pointRadius(c) {
  const big = supShare[c] ? 0.32 + Math.sqrt(supShare[c]) * 0.11 : 0.28;
  if (focusTie) return inFocus(c) ? big + 0.2 : big * 0.7;
  return c === selected ? big + 0.15 : big;
}

function label(c) {
  const parts = [c];
  if (supShare[c]) parts.push(`küresel silah ihracatının %${supShare[c]}'i`);
  if (recShare[c]) parts.push(`küresel silah ithalatının %${recShare[c]}'i`);
  return parts.join("<br>");
}

/* ── side panel ── */
const list = document.getElementById("countries");
const detail = document.getElementById("detail");

function renderList() {
  const ranked = NAMES.slice().sort((a, b) =>
    (supShare[b] || 0) + (recShare[b] || 0) - (supShare[a] || 0) - (recShare[a] || 0));
  list.innerHTML = ranked.map((c) =>
    `<button class="country${c === selected ? " on" : ""}" data-c="${c}"
       style="font-size:${12 + Math.min(9, Math.sqrt((supShare[c] || 0) + (recShare[c] || 0)) * 2.4)}px">${c}</button>`
  ).join("");
  list.querySelectorAll(".country").forEach((b) =>
    b.addEventListener("click", () => selectCountry(b.dataset.c === selected ? null : b.dataset.c)));
}

const src = SOURCES.silah;
function newsLinks(s, r) {
  const q = encodeURIComponent(`${s} ${r} silah`);
  return `
    <h3>bu ilişkinin haberleri</h3>
    <a class="news" href="https://news.google.com/search?q=${q}&hl=tr&gl=TR" target="_blank" rel="noopener">google haberler: ${s} × ${r} ↗</a>
    <a class="news" href="https://www.google.com/search?q=${q}&tbm=nws" target="_blank" rel="noopener">makaleler ve analizler ↗</a>`;
}

/* focus on one tie: fade the rest, fly to it, show its numbers + news */
function focusOnTie(t) {
  focusTie = t;
  selected = null;
  redraw();
  const midLat = (COORDS[t.s][0] + COORDS[t.r][0]) / 2;
  const midLng = (COORDS[t.s][1] + COORDS[t.r][1]) / 2;
  globe.pointOfView({ lat: midLat, lng: midLng, altitude: 1.6 }, 800);
  detail.innerHTML = `
    <h2>${t.s} → ${t.r}</h2>
    <p class="share">${t.type} · SIPRI 2021-25</p>
    ${t.exp != null ? `<p class="tie">${t.s} silah ihracatının <strong>%${t.exp}</strong>'i ${t.r}'ye gidiyor</p>` : ""}
    ${t.imp != null ? `<p class="tie">${t.r} silah ithalatının <strong>%${t.imp}</strong>'i ${t.s}'den geliyor</p>` : ""}
    ${newsLinks(t.s, t.r)}
    <p class="src">kaynak: <a href="${src.url}" target="_blank" rel="noopener">${src.label} ↗</a></p>`;
  renderList();
}

function clearFocus() { focusTie = null; }

function renderDetail() {
  if (focusTie) return; // focus panel owns the detail area
  if (!selected) { detail.innerHTML = ""; return; }
  const sells = activeTies().filter((t) => t.s === selected);
  const buys = activeTies().filter((t) => t.r === selected);
  const share = [];
  if (supShare[selected]) share.push(`küresel ihracatın %${supShare[selected]}'i`);
  if (recShare[selected]) share.push(`küresel ithalatın %${recShare[selected]}'i`);
  detail.innerHTML = `
    <h2>${selected}</h2>
    ${share.length ? `<p class="share">${share.join(" · ")}</p>` : ""}
    ${sells.length ? `<h3>sattıkları</h3>` + sells.map((t) =>
      `<p class="tie">→ ${t.r}${t.exp != null ? ` <em>ihracatının %${t.exp}'i</em>` : ""}</p>`).join("") : ""}
    ${buys.length ? `<h3>aldıkları</h3>` + buys.map((t) =>
      `<p class="tie">← ${t.s}${t.imp != null ? ` <em>ithalatının %${t.imp}'i</em>` : ""}</p>`).join("") : ""}
    <p class="src">bir oka tıkla → o ilişkinin haberleri açılır</p>`;
}

function selectCountry(c) {
  clearFocus();
  selected = c;
  redraw();
  if (c && COORDS[c]) globe.pointOfView({ lat: COORDS[c][0], lng: COORDS[c][1], altitude: 1.7 }, 700);
  renderList();
  renderDetail();
}

function redraw() {
  globe.pointsData(globe.pointsData());
  globe.arcsData(activeTies());
}
function refresh() { redraw(); renderList(); renderDetail(); }

renderList();
window.addEventListener("resize", () => {
  globe.width(document.getElementById("globe").clientWidth);
  globe.height(document.getElementById("globe").clientHeight);
});
