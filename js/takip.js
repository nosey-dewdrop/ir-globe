/* takip.js — follows + e-posta tercihleri (Supabase). benim.html, uye.html ve
   onboarding bunu paylaşır. Config boşsa her şey null döner, sayfalar statik
   moda düşer (kırılma yok). kind: 'country' | 'layer' | 'pair'. */

const Takip = (() => {
  let sb = null;
  function client() {
    if (sb) return sb;
    if (!window.SUPABASE_URL || !window.SUPABASE_ANON || typeof supabase === "undefined") return null;
    sb = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON);
    return sb;
  }

  async function session() {
    const c = client();
    if (!c) return null;
    const { data: { session } } = await c.auth.getSession();
    return session;
  }

  async function list(userId) {
    const c = client();
    if (!c) return [];
    const { data, error } = await c.from("irglobe_follows").select("id,kind,key").eq("user_id", userId).order("created_at");
    if (error) throw error;
    return data || [];
  }

  async function add(userId, kind, key) {
    const c = client();
    if (!c) return null;
    const { data, error } = await c.from("irglobe_follows")
      .upsert({ user_id: userId, kind, key }, { onConflict: "user_id,kind,key", ignoreDuplicates: true })
      .select();
    if (error) throw error;
    return data && data[0];
  }

  async function remove(followId) {
    const c = client();
    if (!c) return;
    const { error } = await c.from("irglobe_follows").delete().eq("id", followId);
    if (error) throw error;
  }

  async function prefs(userId) {
    const c = client();
    if (!c) return null;
    const { data, error } = await c.from("irglobe_email_prefs").select("briefing,alerts").eq("user_id", userId).maybeSingle();
    if (error) throw error;
    return data || { briefing: true, alerts: true }; // defaults until first save
  }

  async function setPrefs(userId, p) {
    const c = client();
    if (!c) return;
    const { error } = await c.from("irglobe_email_prefs")
      .upsert({ user_id: userId, briefing: !!p.briefing, alerts: !!p.alerts, updated_at: new Date().toISOString() });
    if (error) throw error;
  }

  return { client, session, list, add, remove, prefs, setPrefs };
})();
