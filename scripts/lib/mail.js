/* lib/mail.js — Resend gönderimi + kişisel akış derleme (brifing ve uyarılar paylaşır).
   Secrets yoksa sessizce atlanır (exit 0) — pipeline asla bu yüzden kırılmaz. */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const SITE = "https://damlahelloworld.github.io/ir-globe";
const readJSON = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function env() {
  return {
    url: (process.env.SUPABASE_URL || "").replace(/\/$/, ""),
    service: process.env.SUPABASE_SERVICE || "",
    resend: process.env.RESEND_KEY || "",
    from: process.env.BRIEFING_FROM || "kim kime ne satıyor? <onboarding@resend.dev>",
  };
}
function ready() {
  const e = env();
  if (!e.url || !e.service || !e.resend) {
    console.log("mail: SUPABASE_URL/SUPABASE_SERVICE/RESEND_KEY secrets eksik — gönderim atlandı.");
    return false;
  }
  return true;
}

/* service key ile üye + takip + tercih çek (RLS'i service role aşar) */
async function fetchUsers() {
  const e = env();
  const h = { apikey: e.service, Authorization: "Bearer " + e.service };
  const [prefsR, profR, folR] = await Promise.all([
    fetch(`${e.url}/rest/v1/irglobe_email_prefs?select=user_id,briefing,alerts,unsub_token`, { headers: h }),
    fetch(`${e.url}/rest/v1/profiles?select=id,email`, { headers: h }),
    fetch(`${e.url}/rest/v1/irglobe_follows?select=user_id,kind,key`, { headers: h }),
  ]);
  if (!prefsR.ok || !profR.ok || !folR.ok)
    throw new Error(`supabase HTTP ${prefsR.status}/${profR.status}/${folR.status}`);
  const prefs = await prefsR.json();
  const emailOf = Object.fromEntries((await profR.json()).map((p) => [p.id, p.email]));
  const follows = await folR.json();
  const folOf = {};
  follows.forEach((f) => { (folOf[f.user_id] ||= []).push(f); });
  return prefs
    .map((p) => ({ ...p, email: emailOf[p.user_id], follows: folOf[p.user_id] || [] }))
    .filter((u) => u.email && u.follows.length);
}

/* tüm katman haberlerini yükle: [{t,src,d,u,l,edge}] tarih sıralı, tekilleştirilmiş */
function loadArticles() {
  const index = readJSON("data/layers/index.json");
  const all = [], seen = new Set();
  for (const l of index) {
    let bag = {};
    try { bag = readJSON(`data/news/${l.key}.json`); } catch (e) {}
    Object.entries(bag).forEach(([edge, arr]) =>
      (arr || []).forEach((a) => {
        if (!a || !a.title || !a.url || seen.has(a.title)) return;
        seen.add(a.title);
        all.push({ t: a.title, src: a.source, d: a.date || "", u: a.url, l: l.key, edge });
      }));
  }
  all.sort((a, b) => b.d.localeCompare(a.d));
  const labels = Object.fromEntries(index.map((l) => [l.key, l.label]));
  return { all, labels };
}

/* kullanıcının takiplerine uyan makaleler (benim.js ile aynı mantık) */
function personalArticles(all, follows, { sinceDays = null } = {}) {
  const c = new Set(), l = new Set(), p = new Set();
  follows.forEach((f) => {
    if (f.kind === "country") c.add(f.key);
    else if (f.kind === "layer") l.add(f.key);
    else if (f.kind === "pair") p.add(f.key);
  });
  const cutoff = sinceDays == null ? null
    : new Date(Date.now() - sinceDays * 86400000).toISOString().slice(0, 10);
  return all.filter((a) => {
    if (cutoff && (!a.d || a.d < cutoff)) return false;
    const [s, r] = a.edge.split("→");
    return l.has(a.l) || c.has(s) || c.has(r) || p.has(a.edge);
  });
}

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (ch) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

/* sade editoryal HTML — sitenin sesiyle: serif başlık, çizgisiz, tek renk vurgu */
function renderEmail({ heading, intro, items, labels, unsubToken, what }) {
  const rows = items.map((a) => `
    <p style="margin:0 0 14px">
      <a href="${esc(a.u)}" style="color:#16191f;text-decoration:none;font-family:Georgia,serif;font-size:16px;line-height:1.3">${esc(a.t)}</a><br>
      <span style="font-size:12px;color:#6b7280">${esc(a.src)}${a.d ? " · " + esc(a.d) : ""} · ${esc(labels[a.l] || a.l)} · ${esc(a.edge)}</span>
    </p>`).join("");
  const unsub = `${SITE}/app.html?unsub=${unsubToken}&what=${what}#benim`;
  return `<!DOCTYPE html><html><body style="margin:0;background:#ffffff;color:#16191f;font-family:-apple-system,Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:28px 20px">
    <p style="font-family:Georgia,serif;font-size:22px;margin:0 0 4px">kim kime ne satıyor?</p>
    <p style="font-size:12px;color:#6b7280;margin:0 0 22px">${esc(heading)}</p>
    ${intro ? `<p style="font-size:14px;color:#37414d;margin:0 0 20px">${esc(intro)}</p>` : ""}
    ${rows}
    <p style="font-size:12px;color:#6b7280;margin:26px 0 0">
      <a href="${SITE}/app.html#benim" style="color:#2b5cad">akışına git</a> ·
      <a href="${esc(unsub)}" style="color:#6b7280">bu e-postayı kapat</a>
    </p>
    <p style="font-size:11px;color:#aeb4be;margin:12px 0 0">gerçek, kaynaklı veri · bir damlahelloworld yayını</p>
  </div></body></html>`;
}

async function send(to, subject, html) {
  const e = env();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + e.resend, "Content-Type": "application/json" },
    body: JSON.stringify({ from: e.from, to, subject, html }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`resend HTTP ${res.status}: ${body.slice(0, 200)}`);
  }
  await sleep(600); // resend free: 2 istek/sn — nazik kal
}

module.exports = { ready, fetchUsers, loadArticles, personalArticles, renderEmail, send, esc };
