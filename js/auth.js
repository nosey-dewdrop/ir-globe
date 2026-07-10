/* auth.js — public membership (Supabase). Sign up / log in / account state.
   Config-gated: if admin/config.js is empty, shows a friendly notice (no crash). */
(function () {
  const box = document.getElementById("auth");
  if (!box) return;

  if (!window.SUPABASE_URL || !window.SUPABASE_ANON) {
    box.innerHTML = `<div class="notice">Üyelik yakında açılıyor. Şimdilik
      <a href="index.html#subscribe">bültene katılabilirsin</a>.</div>`;
    return;
  }

  const sb = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  async function boot() {
    const { data: { session } } = await sb.auth.getSession();
    if (session) return renderAccount(session.user);
    renderAuth("login");
  }

  function renderAuth(mode) {
    const isLogin = mode === "login";
    box.innerHTML = `
      <h1>${isLogin ? "giriş yap" : "üye ol"}</h1>
      <p class="lede">${isLogin ? "hesabına dön." : "e-postanla bir dakikada — haftalık bülten başlasın."}</p>
      <form id="af">
        <div class="field"><label for="ae">e-posta</label><input type="email" id="ae" required></div>
        <div class="field"><label for="ap">şifre</label><input type="password" id="ap" minlength="6" required></div>
        <button class="authbtn">${isLogin ? "giriş yap" : "hesap oluştur"}</button>
        <p class="autherr" id="aerr"></p>
      </form>
      <p class="authswitch">${isLogin
        ? `hesabın yok mu? <a href="#" id="toggle">üye ol</a>`
        : `zaten üye misin? <a href="#" id="toggle">giriş yap</a>`}</p>`;
    document.getElementById("toggle").addEventListener("click", (e) => {
      e.preventDefault(); renderAuth(isLogin ? "signup" : "login");
    });
    document.getElementById("af").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("ae").value.trim();
      const password = document.getElementById("ap").value;
      const err = document.getElementById("aerr");
      err.textContent = "…";
      const fn = isLogin
        ? sb.auth.signInWithPassword({ email, password })
        : sb.auth.signUp({ email, password });
      const { error } = await fn;
      if (error) { err.textContent = mapErr(error.message); return; }
      if (!isLogin) {
        const { data: { session } } = await sb.auth.getSession();
        if (!session) { err.textContent = ""; box.innerHTML =
          `<h1>e-postanı onayla</h1><p class="lede">Sana bir onay bağlantısı gönderdik. Tıkladıktan sonra giriş yapabilirsin.</p>`; return; }
      }
      boot();
    });
  }

  function renderAccount(user) {
    box.innerHTML = `
      <h1>hoş geldin</h1>
      <p class="lede">Giriş yaptın: <strong>${esc(user.email)}</strong></p>
      <div class="notice">✓ Haftalık bülten listesindesin. Her hafta seçilmiş bir bağ ve hikâyesi sana gelecek.</div>
      <p style="margin-top:18px"><a class="btn ghost" href="kure.html">küreye dön</a>
        <button class="link" id="out" style="margin-left:14px;color:var(--muted);cursor:pointer">çıkış yap</button></p>`;
    // ensure member is on the newsletter list too
    sb.from("subscribers").insert({ email: user.email }).then(() => {});
    document.getElementById("out").addEventListener("click", async () => { await sb.auth.signOut(); boot(); });
  }

  function mapErr(m) {
    const s = (m || "").toLowerCase();
    if (s.includes("invalid login")) return "e-posta veya şifre hatalı.";
    if (s.includes("already registered")) return "bu e-posta zaten kayıtlı, giriş yap.";
    if (s.includes("password")) return "şifre en az 6 karakter olmalı.";
    if (s.includes("email")) return "geçerli bir e-posta gir.";
    return "olmadı, tekrar dene.";
  }

  boot();
})();
