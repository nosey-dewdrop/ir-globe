/* auth.js — üyelik (Supabase): kayıt / giriş / şifre sıfırlama / onboarding.
   Config boşsa dostça bir not gösterir (kırılma yok). Kayıt ya da girişten
   sonra: takip yoksa "neyi takip ediyorsun?" onboarding'i, varsa benim.html. */
(function () {
  const box = document.getElementById("auth");
  if (!box) return;

  if (!window.SUPABASE_URL || !window.SUPABASE_ANON) {
    box.innerHTML = `<div class="notice">Üyelik yakında açılıyor.</div>`;
    return;
  }

  const sb = Takip.client();
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* şifre sıfırlama e-postasından dönüş: yeni şifre formu */
  sb.auth.onAuthStateChange((event) => {
    if (event === "PASSWORD_RECOVERY") renderNewPassword();
  });

  async function boot() {
    const { data: { session } } = await sb.auth.getSession();
    if (session) return afterLogin(session.user);
    renderAuth("login");
  }

  async function afterLogin(user) {
    let follows = [];
    try { follows = await Takip.list(user.id); } catch (e) { /* tablo yoksa onboarding'e düş */ }
    if (follows.length) { location.href = "app.html#benim"; return; }
    renderOnboarding(user);
  }

  function renderAuth(mode) {
    const isLogin = mode === "login";
    box.innerHTML = `
      <h1>${isLogin ? "giriş yap" : "üye ol"}</h1>
      <p class="lede">${isLogin ? "hesabına dön." : "e-postanla bir dakikada — kendi akışın ve haftalık brifingin başlasın."}</p>
      <form id="af">
        <div class="field"><label for="ae">e-posta</label><input type="email" id="ae" required></div>
        <div class="field"><label for="ap">şifre</label><input type="password" id="ap" minlength="6" required></div>
        <button class="authbtn">${isLogin ? "giriş yap" : "hesap oluştur"}</button>
        <p class="autherr" id="aerr"></p>
      </form>
      <p class="authswitch">${isLogin
        ? `hesabın yok mu? <a href="#" id="toggle">üye ol</a> · <a href="#" id="forgot">şifremi unuttum</a>`
        : `zaten üye misin? <a href="#" id="toggle">giriş yap</a>`}</p>`;
    document.getElementById("toggle").addEventListener("click", (e) => {
      e.preventDefault(); renderAuth(isLogin ? "signup" : "login");
    });
    const forgot = document.getElementById("forgot");
    if (forgot) forgot.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = document.getElementById("ae").value.trim();
      const err = document.getElementById("aerr");
      if (!email) { err.textContent = "önce e-postanı yaz, sonra tekrar tıkla."; return; }
      err.textContent = "…";
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      err.textContent = error ? mapErr(error.message) : "sıfırlama bağlantısı e-postana gönderildi.";
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

  function renderNewPassword() {
    box.innerHTML = `
      <h1>yeni şifre</h1>
      <p class="lede">Yeni şifreni belirle, hesabına dön.</p>
      <form id="npf">
        <div class="field"><label for="np">yeni şifre</label><input type="password" id="np" minlength="6" required></div>
        <button class="authbtn">şifreyi güncelle</button>
        <p class="autherr" id="nperr"></p>
      </form>`;
    document.getElementById("npf").addEventListener("submit", async (e) => {
      e.preventDefault();
      const err = document.getElementById("nperr");
      err.textContent = "…";
      const { error } = await sb.auth.updateUser({ password: document.getElementById("np").value });
      if (error) { err.textContent = mapErr(error.message); return; }
      boot();
    });
  }

  /* onboarding: neyi takip ediyorsun? (ülke + konu seçimi) */
  async function renderOnboarding(user) {
    let countries = {}, layers = [];
    try {
      [countries, layers] = await Promise.all([Store.countries(), Store.layerIndex()]);
    } catch (e) {}
    const popular = ["türkiye", "united states", "russia", "china", "ukraine", "germany",
      "iran", "israel", "france", "united kingdom", "azerbaijan", "greece"]
      .filter((k) => countries[k]);
    box.innerHTML = `
      <h1>neyi takip ediyorsun?</h1>
      <p class="lede">Seçtiklerin senin akışını kurar: sana özel manşetler, haftalık brifing, gelişme uyarıları. Sonradan değiştirebilirsin.</p>
      <div class="lbl">ülkeler</div>
      <div class="chips" id="ob-c">${popular.map((k) =>
        `<button type="button" class="chip" data-kind="country" data-key="${esc(k)}">${esc(k)}</button>`).join("")}</div>
      <div class="field" style="margin-top:10px"><label for="ob-search">başka ülke ara</label>
        <input type="text" id="ob-search" placeholder="yazmaya başla…" autocomplete="off"></div>
      <div class="chips" id="ob-results"></div>
      <div class="lbl" style="margin-top:18px">konular</div>
      <div class="chips" id="ob-l">${layers.map((l) =>
        `<button type="button" class="chip" data-kind="layer" data-key="${esc(l.key)}">${esc(l.label)}</button>`).join("")}</div>
      <button class="authbtn" id="ob-done" style="margin-top:22px">akışımı kur</button>
      <p class="autherr" id="ob-err"></p>`;

    const picked = new Map(); // "kind|key" -> {kind,key}
    function wireChips(root) {
      root.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
        const id = c.dataset.kind + "|" + c.dataset.key;
        if (picked.has(id)) { picked.delete(id); c.classList.remove("on"); }
        else { picked.set(id, { kind: c.dataset.kind, key: c.dataset.key }); c.classList.add("on"); }
      }));
    }
    wireChips(box);

    const search = document.getElementById("ob-search");
    const results = document.getElementById("ob-results");
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase().trim();
      if (q.length < 2) { results.innerHTML = ""; return; }
      const hits = Object.values(countries)
        .filter((c) => c.key.includes(q) || (c.disp || "").toLowerCase().includes(q))
        .slice(0, 8);
      results.innerHTML = hits.map((c) => {
        const on = picked.has("country|" + c.key) ? " on" : "";
        return `<button type="button" class="chip${on}" data-kind="country" data-key="${esc(c.key)}">${esc(c.key)}</button>`;
      }).join("");
      wireChips(results);
    });

    document.getElementById("ob-done").addEventListener("click", async () => {
      const err = document.getElementById("ob-err");
      if (!picked.size) { err.textContent = "en az bir ülke ya da konu seç."; return; }
      err.textContent = "…";
      try {
        for (const f of picked.values()) await Takip.add(user.id, f.kind, f.key);
        await Takip.setPrefs(user.id, { briefing: true, alerts: true });
        location.href = "app.html#benim";
      } catch (e) {
        err.textContent = "kaydedilemedi — bağlantını kontrol edip tekrar dene.";
      }
    });
  }

  function mapErr(m) {
    const s = (m || "").toLowerCase();
    if (s.includes("invalid login")) return "e-posta veya şifre hatalı.";
    if (s.includes("already registered")) return "bu e-posta zaten kayıtlı, giriş yap.";
    if (s.includes("rate limit")) return "çok denedin — bir dakika bekleyip tekrar dene.";
    if (s.includes("password")) return "şifre en az 6 karakter olmalı.";
    if (s.includes("email")) return "geçerli bir e-posta gir.";
    return "olmadı, tekrar dene.";
  }

  boot();
})();
