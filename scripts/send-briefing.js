/* send-briefing.js — haftalık KİŞİSEL brifing: her üyeye, takiplerine göre son
   7 günün seçilmiş manşetleri. briefing.yml haftalık çalıştırır (pazartesi,
   veri tazelemesinden sonra). Secrets yoksa sessizce atlar. */

const { ready, fetchUsers, loadArticles, personalArticles, renderEmail, send } = require("./lib/mail");

(async () => {
  if (!ready()) return;
  const users = (await fetchUsers()).filter((u) => u.briefing);
  if (!users.length) { console.log("brifing: gönderilecek üye yok."); return; }
  const { all, labels } = loadArticles();

  let sent = 0, skipped = 0, failed = 0;
  for (const u of users) {
    const items = personalArticles(all, u.follows, { sinceDays: 7 }).slice(0, 12);
    if (!items.length) { skipped++; continue; } // boş brifing atma — gürültü olur
    const html = renderEmail({
      heading: "Haftalık brifingin · takip ettiklerinden seçmeler",
      intro: `Bu hafta takiplerinde ${items.length} öne çıkan başlık var.`,
      items, labels,
      unsubToken: u.unsub_token, what: "briefing",
    });
    try {
      await send(u.email, "Haftalık brifingin · Kim kime ne satıyor?", html);
      sent++;
    } catch (e) {
      failed++;
      console.error(`  ✗ ${u.email}: ${e.message}`);
    }
    if (sent >= 95) { console.warn("brifing: günlük 100 e-posta limitine yaklaşıldı, kalanlar bir sonraki koşuya."); break; }
  }
  console.log(`brifing: ${sent} gönderildi, ${skipped} boş (atlandı), ${failed} hata, ${users.length} aday.`);
  if (failed && !sent) process.exit(1);
})();
