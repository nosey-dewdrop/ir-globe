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

/* layers: one lens at a time — showing every network at once would be soup.
   adding a layer later = new data table with its own type + SOURCES entry. */
const LAYERS = ["silah"]; // sırada: ticaret, enerji, tahıl — arkadaşın cevaplarına göre
let layer = "silah";
let selected = null;

const layerNav = document.getElementById("layers");
function renderLayers() {
  layerNav.innerHTML = LAYERS.map((l) =>
    `<button class="layerbtn${l === layer ? " on" : ""}" data-l="${l}">${l}</button>`).join("")
    + `<span class="layers-soon">ticaret · enerji · tahıl yolda</span>`;
  layerNav.querySelectorAll(".layerbtn").forEach((b) =>
    b.addEventListener("click", () => { layer = b.dataset.l; hideChip(); refresh(); renderLayers(); }));
}
function activeTies() { return TIES.filter((t) => t.type === layer); }

/* one tie, one honest sentence */
function tieLine(t) {
  const bits = [];
  if (t.exp != null) bits.push(`${t.s} ihracatının %${t.exp}'i`);
  if (t.imp != null) bits.push(`${t.r} ithalatının %${t.imp}'i`);
  return `${t.s} → ${t.r} · ${bits.join(" · ")}`;
}

/* ── globe ── */
const globe = Globe()(document.getElementById("globe"))
  .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-night.jpg")
  .backgroundColor("#08080a")
  .showAtmosphere(true)
  .atmosphereColor("#43302a")
  .atmosphereAltitude(0.12)
  .pointsData(NAMES.map((c) => ({ c, lat: COORDS[c][0], lng: COORDS[c][1] })))
  .pointLat("lat").pointLng("lng")
  .pointColor((d) => (d.c === selected ? "#ffd479" : "#c9c3bb"))
  .pointAltitude(0.008)
  .pointRadius((d) => (supShare[d.c] ? 0.35 + Math.sqrt(supShare[d.c]) * 0.12 : 0.3))
  .pointLabel((d) => label(d.c))
  .onPointClick((d) => select(d.c))
  .arcLabel((t) => tieLine(t))
  .arcStartLat((t) => COORDS[t.s][0]).arcStartLng((t) => COORDS[t.s][1])
  .arcEndLat((t) => COORDS[t.r][0]).arcEndLng((t) => COORDS[t.r][1])
  .arcColor((t) => arcColor(t))
  .arcStroke((t) => (touches(t) ? 0.7 : 0.32))
  .arcAltitudeAutoScale(0.4)
  .arcsTransitionDuration(0)
  .onArcHover((t) => { document.body.style.cursor = t ? "pointer" : "default"; })
  .onArcClick((t, ev) => showChip(t, ev))
  .onGlobeClick(() => { select(null); hideChip(); });

/* ── tie chip: click an arc → who links whom, the numbers, the reference ── */
const chip = document.getElementById("tiechip");

function showChip(t, ev) {
  const src = SOURCES[t.type];
  chip.innerHTML = `
    <button class="chip-close" title="kapat">×</button>
    <p class="chip-route"><strong>${t.s}</strong> → <strong>${t.r}</strong> <span class="chip-type">${t.type}</span></p>
    ${t.exp != null ? `<p>${t.s} ${t.type} ihracatının <strong>%${t.exp}</strong>'i ${t.r}'ye gidiyor</p>` : ""}
    ${t.imp != null ? `<p>${t.r} ${t.type} ithalatının <strong>%${t.imp}</strong>'i ${t.s}'den geliyor</p>` : ""}
    <p class="chip-src">kaynak: <a href="${src.url}" target="_blank" rel="noopener">${src.label} ↗</a></p>`;
  chip.hidden = false;
  const pad = 14;
  const w = chip.offsetWidth, h = chip.offsetHeight;
  let x = ev.clientX + pad, y = ev.clientY - h / 2;
  if (x + w > innerWidth - pad) x = ev.clientX - w - pad;
  y = Math.max(pad, Math.min(innerHeight - h - pad, y));
  chip.style.left = x + "px";
  chip.style.top = y + "px";
  chip.querySelector(".chip-close").addEventListener("click", hideChip);
}

function hideChip() { chip.hidden = true; }

function refresh() {
  globe.pointsData(globe.pointsData());
  globe.arcsData(activeTies());
  renderList();
  renderDetail();
}

globe.arcsData(activeTies());
renderLayers();
globe.controls().autoRotate = false; // spinning belongs to the user's hand, not the app
globe.pointOfView({ lat: 25, lng: 25, altitude: 2.1 }, 0);

function touches(t) { return selected && (t.s === selected || t.r === selected); }

function arcColor(t) {
  if (!selected) return ["#8a2f2f88", "#c9502f88"]; // arms = ember, everyone quiet
  if (t.s === selected) return ["#ffd479", "#ff8a5c"]; // selling out of it
  if (t.r === selected) return ["#ff5c5c", "#ffd479"]; // buying into it
  return ["#8a2f2f14", "#c9502f14"]; // unrelated ties fade way back
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
    b.addEventListener("click", () => select(b.dataset.c === selected ? null : b.dataset.c)));
}

function renderDetail() {
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
      `<p class="tie">→ ${t.r}${t.exp != null ? ` <em>ihracatının %${t.exp}'i</em>` : ""}${t.imp != null ? ` <em>(${t.r} ithalatının %${t.imp}'i)</em>` : ""}</p>`).join("") : ""}
    ${buys.length ? `<h3>aldıkları</h3>` + buys.map((t) =>
      `<p class="tie">← ${t.s}${t.imp != null ? ` <em>ithalatının %${t.imp}'i</em>` : ""}${t.exp != null ? ` <em>(${t.s} ihracatının %${t.exp}'i)</em>` : ""}</p>`).join("") : ""}`;
}

function select(c) {
  selected = c;
  globe.pointsData(globe.pointsData()); // refresh colors
  globe.arcsData(activeTies());
  if (c && COORDS[c]) {
    globe.pointOfView({ lat: COORDS[c][0], lng: COORDS[c][1], altitude: 1.7 }, 700);
  }
  renderList();
  renderDetail();
}

renderList();
window.addEventListener("resize", () => {
  globe.width(document.getElementById("globe").clientWidth);
  globe.height(document.getElementById("globe").clientHeight);
});
