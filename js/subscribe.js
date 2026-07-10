/* newsletter signup → Supabase (real backend). Hidden until Damla fills admin/config.js. */
(function () {
  const form = document.getElementById("subscribe");
  if (!form) return;
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON) { form.style.display = "none"; return; }
  const msg = document.getElementById("sub-msg");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("sub-email").value.trim();
    msg.textContent = "…";
    try {
      const res = await fetch(window.SUPABASE_URL + "/rest/v1/subscribers", {
        method: "POST",
        headers: {
          apikey: window.SUPABASE_ANON,
          Authorization: "Bearer " + window.SUPABASE_ANON,
          "Content-Type": "application/json",
          Prefer: "return-minimal",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { msg.textContent = "teşekkürler ✓"; form.reset(); }
      else if (res.status === 409) msg.textContent = "zaten kayıtlısın";
      else msg.textContent = "olmadı, tekrar dene";
    } catch (_) { msg.textContent = "bağlantı yok"; }
  });
})();
