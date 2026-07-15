/* i18n.js — English layer. A journalist/analyst writing an English brief needs
   English event labels and UI text (customer deal-breaker: "I translate every
   line"). Language is chosen by ?lang=en (or a saved preference); default TR.
   Pure lookup, no dependency — pages call I18N.t(key) and I18N.ev(trLabel). */

const I18N = (() => {
  // event-type labels: engine emits Turkish; this maps each to English so the
  // same coded event reads natively in an EN brief.
  const EV = {
    "saldırıya uğrama": "came under attack",
    "askeri işgal": "military invasion",
    "hava/füze saldırısı": "air/missile strike",
    "füze/roket saldırısı": "missile/rocket strike",
    "silahlı saldırı": "armed attack",
    "ölümlü çatışma": "deadly clash",
    "sınır çatışması": "border clash",
    "el koyma / işgal": "seizure / occupation",
    "askeri yığınak": "military buildup",
    "silah/malzeme tedariki": "arms/materiel supply",
    "askeri eğitim / donatım": "military training / equipping",
    "askeri üs": "military base",
    "yaptırım": "sanctions",
    "kısıtlama / tarife": "restriction / tariff",
    "sınır dışı / ihraç": "expulsion / deportation",
    "ilişki kesme": "cutting ties",
    "askıya alma": "suspension",
    "büyükelçi geri çağırma": "recalling ambassador",
    "destek/yardım kesme": "cutting support/aid",
    "karşı önlem": "countermeasure",
    "tehdit": "threat",
    "suçlama": "accusation",
    "kınama / protesto": "condemnation / protest",
    "ret / karşı çıkma": "rejection / opposition",
    "gerginlik": "tension",
    "resmi talep / çağrı": "formal demand / call",
    "veto / engelleme": "veto / blocking",
    "ortak tatbikat": "joint drills",
    "silah/malzeme alımı": "arms/materiel purchase",
    "ticaret / tedarik": "trade / supply",
    "ilişki güçlendirme": "strengthening ties",
    "gönderim / tedarik": "shipment / supply",
    "girişim / davet": "outreach / invitation",
    "anlaşma imzası": "signed a deal",
    "görüşme / müzakere": "talks / negotiation",
    "üst düzey görüşme": "high-level meeting",
    "resmi ziyaret": "official visit",
    "destek / övgü": "support / praise",
    "taahhüt": "pledge",
    "özür / taziye": "apology / condolence",
    "anlaşma / ortaklık": "agreement / partnership",
    "ittifak": "alliance",
    "yardım": "aid",
    "kredi / finansman": "loan / financing",
    "yatırım": "investment",
    "işbirliği": "cooperation",
    "ateşkes çöküşü": "ceasefire collapse",
    "ateşkes / normalleşme": "ceasefire / normalization",
    "esir takası / serbest bırakma": "prisoner swap / release",
    "kaçırma": "abduction",
    "gözaltı / tutuklama": "detention / arrest",
    "siber saldırı / casusluk": "cyberattack / espionage",
    "darbe": "coup",
    "geri çekilme": "withdrawal",
    "çağrı / baskı": "appeal / pressure",
    "onay / mutabakat": "approval / accord",
    "yardım / tahliye": "aid / evacuation",
  };

  // UI strings used on the pair page and shared surfaces.
  const T = {
    en: {
      "relationship": "relationship",
      "headlines": "headlines",
      "recorded_ties": "recorded ties",
      "event_radar": "event radar",
      "tension_dominant": "tension is dominant",
      "cooperation_dominant": "cooperation is dominant",
      "mixed": "both cooperation and tension",
      "in_recent_news": "in the news the engine read, between",
      "coded_events": "coded events",
      "highlights": "Highlights",
      "each_clickable": "Every event and headline links to a real source.",
      "as_of": "as of",
      "refreshes_6h": "news refreshes every 6 hours",
      "csv_download": "download CSV",
      "moved_this_week": "moved this week",
      "auto_extracted": "auto-extracted from news",
      "week_to_week": "relationship week to week",
      "up_closer_down_tense": "up = closer · down = tension",
      "sourced_note": "auto-extracted from news · weekly average",
    },
    tr: {}, // TR is the source language; empty means "use the original string"
  };

  function lang() {
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q === "en" || q === "tr") { localStorage.setItem("irglobe.lang", q); return q; }
      return localStorage.getItem("irglobe.lang") || (location.pathname.indexOf("/en/") === 0 ? "en" : "tr");
    } catch (e) { return "tr"; }
  }

  const L = lang();
  return {
    lang: L,
    isEn: L === "en",
    ev: (trLabel) => (L === "en" && EV[trLabel]) ? EV[trLabel] : trLabel,
    t: (key, trFallback) => (L === "en" && T.en[key]) ? T.en[key] : (trFallback || key),
  };
})();

if (typeof module !== "undefined") module.exports = I18N;
