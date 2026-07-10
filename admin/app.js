/* ir-globe yönetim panosu — Supabase backend, gerçek veri, localStorage YOK.
   Yönetici giriş yapar; bağlantı/kategori/abone yönetir; globe bunları okur. */

const appEl = document.getElementById("app");
const whoEl = document.getElementById("who");

if (!window.SUPABASE_URL || !window.SUPABASE_ANON) {
  appEl.innerHTML = `<div class="card"><h2>kurulum gerekli</h2>
    <p>1) Supabase'de bir proje aç. 2) SQL Editor'e <code>schema.sql</code>'i yapıştırıp çalıştır.
    3) Project Settings → API'den URL ve anon key'i <code>admin/config.js</code>'e yaz.
    4) Authentication → Users'tan yönetici için bir kullanıcı ekle.</p></div>`;
  throw new Error("config yok");
}

const sb = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON);
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let tab = "conn";

async function boot() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return renderLogin();
  renderDash(session.user.email);
}

/* ── login ── */
function renderLogin() {
  whoEl.innerHTML = "";
  appEl.innerHTML = `<div class="card">
    <h2>giriş</h2>
    <form id="login">
      <input type="email" id="email" placeholder="e-posta" required>
      <input type="password" id="pass" placeholder="şifre" required>
      <button>giriş yap</button>
      <p class="err" id="err"></p>
    </form>
  </div>`;
  document.getElementById("login").addEventListener("submit", async (e) => {
    e.preventDefault();
    const { error } = await sb.auth.signInWithPassword({
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("pass").value,
    });
    if (error) document.getElementById("err").textContent = error.message;
    else boot();
  });
}

/* ── dashboard ── */
function renderDash(email) {
  whoEl.innerHTML = `<span>${esc(email)}</span> <button id="out" class="link">çıkış</button>`;
  document.getElementById("out").addEventListener("click", async () => { await sb.auth.signOut(); boot(); });
  appEl.innerHTML = `
    <nav class="tabs">
      <button data-t="conn" class="${tab === "conn" ? "on" : ""}">bağlantılar</button>
      <button data-t="layer" class="${tab === "layer" ? "on" : ""}">kategoriler</button>
      <button data-t="subs" class="${tab === "subs" ? "on" : ""}">aboneler</button>
    </nav>
    <div id="panel"></div>`;
  appEl.querySelectorAll(".tabs button").forEach((b) =>
    b.addEventListener("click", () => { tab = b.dataset.t; renderDash(email); }));
  if (tab === "conn") renderConns();
  else if (tab === "layer") renderLayers();
  else renderSubs();
}

/* ── bağlantılar ── */
async function renderConns() {
  const panel = document.getElementById("panel");
  const { data: layers } = await sb.from("layers").select("*").order("ord");
  const { data: conns } = await sb.from("connections").select("*").order("created_at", { ascending: false });
  const opts = (layers || []).map((l) => `<option value="${esc(l.key)}">${esc(l.label)}</option>`).join("");
  panel.innerHTML = `
    <form id="add" class="row-form">
      <select id="c-layer">${opts}</select>
      <input id="c-s" placeholder="kaynak ülke (küçük harf)" required>
      <input id="c-r" placeholder="hedef ülke (küçük harf)" required>
      <input id="c-note" placeholder="kısa gerekçe / not">
      <button>ekle</button>
    </form>
    <table><thead><tr><th>katman</th><th>bağ</th><th>not</th><th></th></tr></thead>
    <tbody>${(conns || []).map((c) => `<tr>
      <td>${esc(c.layer)}</td>
      <td>${esc(c.s)} → ${esc(c.r)}</td>
      <td>${esc(c.note)}</td>
      <td><button class="link del" data-id="${c.id}">sil</button></td></tr>`).join("")}</tbody></table>
    <p class="hint">${(conns || []).length} bağlantı</p>`;
  document.getElementById("add").addEventListener("submit", async (e) => {
    e.preventDefault();
    await sb.from("connections").insert({
      layer: document.getElementById("c-layer").value,
      s: document.getElementById("c-s").value.trim().toLowerCase(),
      r: document.getElementById("c-r").value.trim().toLowerCase(),
      note: document.getElementById("c-note").value.trim(),
    });
    renderConns();
  });
  panel.querySelectorAll(".del").forEach((b) =>
    b.addEventListener("click", async () => { await sb.from("connections").delete().eq("id", b.dataset.id); renderConns(); }));
}

/* ── kategoriler ── */
async function renderLayers() {
  const panel = document.getElementById("panel");
  const { data: layers } = await sb.from("layers").select("*").order("ord");
  panel.innerHTML = `
    <form id="add" class="row-form">
      <input id="l-key" placeholder="anahtar (ör. silah)" required>
      <input id="l-label" placeholder="görünen ad (ör. silah)" required>
      <input id="l-ord" type="number" placeholder="sıra" value="${(layers || []).length}">
      <button>ekle</button>
    </form>
    <table><thead><tr><th>sıra</th><th>anahtar</th><th>ad</th><th></th></tr></thead>
    <tbody>${(layers || []).map((l) => `<tr>
      <td>${l.ord}</td><td>${esc(l.key)}</td><td>${esc(l.label)}</td>
      <td><button class="link del" data-k="${esc(l.key)}">sil</button></td></tr>`).join("")}</tbody></table>
    <p class="hint">kategori silinince o katmandaki bağlantılar da silinir</p>`;
  document.getElementById("add").addEventListener("submit", async (e) => {
    e.preventDefault();
    await sb.from("layers").insert({
      key: document.getElementById("l-key").value.trim().toLowerCase(),
      label: document.getElementById("l-label").value.trim(),
      ord: parseInt(document.getElementById("l-ord").value) || 0,
    });
    renderLayers();
  });
  panel.querySelectorAll(".del").forEach((b) =>
    b.addEventListener("click", async () => { if (confirm("emin misin?")) { await sb.from("layers").delete().eq("key", b.dataset.k); renderLayers(); } }));
}

/* ── aboneler ── */
async function renderSubs() {
  const panel = document.getElementById("panel");
  const { data: subs } = await sb.from("subscribers").select("*").order("created_at", { ascending: false });
  panel.innerHTML = `
    <button id="csv" class="link">csv indir</button>
    <table><thead><tr><th>e-posta</th><th>tarih</th><th></th></tr></thead>
    <tbody>${(subs || []).map((s) => `<tr>
      <td>${esc(s.email)}</td><td>${(s.created_at || "").slice(0, 10)}</td>
      <td><button class="link del" data-id="${s.id}">sil</button></td></tr>`).join("")}</tbody></table>
    <p class="hint">${(subs || []).length} abone</p>`;
  document.getElementById("csv").addEventListener("click", () => {
    const rows = ["email,tarih", ...(subs || []).map((s) => `${s.email},${(s.created_at || "").slice(0, 10)}`)];
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([rows.join("\n")], { type: "text/csv" }));
    a.download = "aboneler.csv";
    a.click();
  });
  panel.querySelectorAll(".del").forEach((b) =>
    b.addEventListener("click", async () => { await sb.from("subscribers").delete().eq("id", b.dataset.id); renderSubs(); }));
}

boot();
