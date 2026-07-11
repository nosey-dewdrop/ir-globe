/* send-alerts.js — gelişme uyarıları: takip edilen ülke/konu/çiftte BUGÜN
   tarihli yeni makale düştüyse üyeye tek birleşik e-posta. news.yml her 6
   saatte koşar ama uyarı yalnızca 18:00 UTC koşusunda gider (günde en fazla
   1 uyarı e-postası — taciz yok, ücretsiz katman aşılmaz). FORCE_ALERTS=1 ile
   elle test edilebilir. Secrets yoksa sessizce atlar. */

const { ready, fetchUsers, loadArticles, personalArticles, renderEmail, send } = require("./lib/mail");

(async () => {
  if (!ready()) return;
  const hour = new Date().getUTCHours();
  if (process.env.FORCE_ALERTS !== "1" && hour !== 18) {
    console.log(`uyarı: saat ${hour} UTC — uyarılar yalnızca 18 UTC koşusunda gider, atlandı.`);
    return;
  }
  const users = (await fetchUsers()).filter((u) => u.alerts);
  if (!users.length) { console.log("uyarı: gönderilecek üye yok."); return; }
  const { all, labels } = loadArticles();
  const today = new Date().toISOString().slice(0, 10);

  let sent = 0, skipped = 0, failed = 0;
  for (const u of users) {
    const items = personalArticles(all, u.follows).filter((a) => a.d === today).slice(0, 10);
    if (!items.length) { skipped++; continue; }
    const html = renderEmail({
      heading: "bugün takibinde gelişme var",
      intro: `Takip ettiklerinde bugün ${items.length} yeni başlık.`,
      items, labels,
      unsubToken: u.unsub_token, what: "alerts",
    });
    try {
      await send(u.email, `takibinde bugün ${items.length} gelişme — kim kime ne satıyor?`, html);
      sent++;
    } catch (e) {
      failed++;
      console.error(`  ✗ ${u.email}: ${e.message}`);
    }
    if (sent >= 95) { console.warn("uyarı: günlük e-posta limitine yaklaşıldı, durduruldu."); break; }
  }
  console.log(`uyarı: ${sent} gönderildi, ${skipped} gelişmesiz, ${failed} hata, ${users.length} aday.`);
  if (failed && !sent) process.exit(1);
})();
