/* çerezsiz sayaç — sayfa görüntülemeyi irglobe_hit RPC'sine yazar (fire-and-forget).
   Kişisel veri YOK: IP/UA/kimlik gönderilmez, çerez yok. "Tekil" sinyali cihazda
   kalan günlük localStorage bayrağıdır; sunucuya yalnızca bir boolean gider.
   Supabase yoksa/erişilemezse sessizce vazgeçer — site aynı çalışır. */
(function () {
  try {
    if (!window.SUPABASE_URL || !window.SUPABASE_ANON) return;
    var h = location.hostname;
    if (h === "localhost" || h === "127.0.0.1") return; // dev sunucusu sayılmaz
    var path = location.pathname.replace(/index\.html$/, "") || "/";
    var uniq = false;
    try {
      var day = new Date().toISOString().slice(0, 10);
      if (localStorage.getItem("irglobe.gun") !== day) { localStorage.setItem("irglobe.gun", day); uniq = true; }
    } catch (e) { /* private mode: tekil sinyalsiz say */ }
    fetch(window.SUPABASE_URL + "/rest/v1/rpc/irglobe_hit", {
      method: "POST",
      keepalive: true,
      headers: {
        "content-type": "application/json",
        apikey: window.SUPABASE_ANON,
        authorization: "Bearer " + window.SUPABASE_ANON,
      },
      body: JSON.stringify({ p: path, uniq: uniq }),
    }).catch(function () {});
  } catch (e) {}
})();
