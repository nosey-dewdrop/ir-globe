# ir-globe — katman veri kaynakları

2026-07-10 tarihinde 11 ajanla araştırıldı ve doğrulandı. Her katman gerçek, açık, yönlü (A→B) veriye sahip. Uydurma yok. Her katmanı sırayla bu kaynaklardan çekip küçük bir statik JSON olarak shipliyoruz (silah gibi).

## ticaret
- **kaynak:** CEPII — CEPII BACI (International Trade Database at the Product-Level)
- **url:** https://www.cepii.fr/CEPII/en/bdd_modele/bdd_modele_item.asp?id=37
- **erişim:** Free CSV download (ZIP files, one CSV per year) from the CEPII BACI page; no paywall
- **lisans:** Etalab Open Licence 2.0 (free use, attribution required)
- **not:** VERIFIED on the CEPII page (id=37). BACI gives directed exporter->importer bilateral flows: every row is a unique (exporter t, importer i, product k, year) with trade value v. It is product-level (HS 6-digit, ~5000 products, ~200 countries), so to get "total merchandise trade A->B" you aggregate (sum v) over all products per exporter-importer-year — trivial in a build script. Latest release 202601

## enerji
- **kaynak:** UN Comtrade (UN Statistics Division / DESA) — UN Comtrade International Trade Statistics — HS codes 2709 (crude petroleum oils) and 2711 (petroleum gases / natural gas), by reporter and partner country and trade flow (import/export)
- **url:** https://comtradeplus.un.org/
- **erişim:** Free REST API at https://comtradeapi.un.org (free registered API key: raised limits, ~100K records/call, up to 500 calls/day; unregistered preview ~500 records/call). Also browsable/downloadable as CSV via comtradeplus.un.org. Python lib: comtradeapicall; R: comtradr.
- **lisans:** UN Comtrade License Agreement (https://comtradeplus.un.org/LicenseAgreement) — free public/API access with attribution; NOT a Creative Commons license, bulk/premium download requires paid subscription. Not verified as CC.
- **not:** VERIFIED real and open. UN Comtrade gives true directed A->B flows: each record has reporterCode (country doing the reporting), partnerCode (trading partner), flowCode (import/export/re-export), cmdCode (HS commodity), and value in USD + quantity. Filter cmdCode=2709 for crude oil and 2711 for petroleum/natural gas to build an energy-dependency map. Free tier confirmed (getBilateralData / previewF

## tahil
- **kaynak:** FAO (Food and Agriculture Organization of the UN) — FAOSTAT Detailed Trade Matrix (Trade_DetailedTradeMatrix_E)
- **url:** https://bulks-faostat.fao.org/production/Trade_DetailedTradeMatrix_E_All_Data_(Normalized).zip
- **erişim:** Free bulk CSV download (ZIP, ~420 MB, normalized long format). Also available via FAOSTAT web UI at fao.org/faostat/en/#data/TM and via API. No key required for bulk download.
- **lisans:** CC BY 4.0 (attribution required: cite FAO + accessed date + URL)
- **not:** Verified live on 2026-07-10: the FAOSTAT static URL 301-redirects to https://bulks-faostat.fao.org/production/Trade_DetailedTradeMatrix_E_All_Data_(Normalized).zip which returns HTTP 200, content-type application/x-zip-compressed, ~420 MB, last-modified 2025-12-23. This is exactly a directed A->B matrix: each row has Reporter Country, Partner Country, Element (Import/Export quantity+value), Item (

## ittifak
- **kaynak:** Correlates of War Project (hosted by Douglas Gibler, University of Alabama) — Correlates of War (COW) Formal Alliances v4.1 — "alliance v4.1 by directed" (directed-dyad file)
- **url:** https://correlatesofwar.org/data-sets/formal-alliances/
- **erişim:** Free bulk file download: two ZIP archives (one CSV, one Stata .dta). The directed-dyad file is "alliance v4.1 by directed" (also "alliance v4.1 by directed yearly" for dyad-year). No API, no login.
- **lisans:** No explicit open-data license (e.g. no CC) stated on the page; it is a freely downloadable academic dataset with a required citation (Gibler 2009, International Military Alliances 1648-2008). Treat as free-to-use-with-citation, not formally CC-licensed. Verify current terms before commercial use.
- **not:** Verified real and downloadable. COW Formal Alliances v4.1 gives true DIRECTED A->B dyads: the "by directed" file records the specific promises ccode1 makes toward ccode2 (defense / neutrality / nonaggression / entente), coverage 1816-2012. Free CSV+DTA ZIPs, small enough to slice and ship in a static site. IMPORTANT CAVEAT on the user's exact framing: COW is organized by TREATY-BASED MILITARY alli

## yaptirim
- **kaynak:** Global Sanctions Data Base (Drexel LeBow Center for Global Policy Analysis / Kiel Institute / WU Vienna — Felbermayr, Kirilakha, Syropoulos, Yalcin, Yotov) — Global Sanctions Data Base (GSDB), Release 4 — dyadic version
- **url:** https://www.globalsanctionsdatabase.com/data/
- **erişim:** Free email request form on the /data/ page (returns Stata/CSV files; case-specific + dyadic versions). No public direct-download link or API.
- **lisans:** No formal open license. Page states: data cannot be used for commercial use; users must cite the GSDB papers. Treat as free-for-research/non-commercial.
- **not:** GSDB is the right and essentially only comprehensive open source for directed country-to-country ("who sanctions whom") sanctions data. Confirmed via the official site and multiple published papers (ScienceDirect, CEPR, Drexel LeBow WP2025-02). Release 4 covers 1950-2023, ~1,547 sanction cases, disaggregated by type (trade/arms/financial/travel). It ships in a DYADIC version giving directed sender

## goc
- **kaynak:** UNHCR — UNHCR Refugee Population Statistics Database (Refugee Data Finder) — end-year population figures, asylum applications, asylum decisions, all disaggregated by country of origin and country of asylum
- **url:** https://api.unhcr.org/docs/refugee-statistics.html
- **erişim:** Public REST API (JSON default; CSV via download=true) + bulk CSV download from Refugee Data Finder. Base URL https://api.unhcr.org/population/v1/ ; e.g. https://api.unhcr.org/population/v1/population/?coo=SYR&coa=TUR&year=2020 . No API key/auth required. Bulk download: https://www.unhcr.org/refugee-statistics/download
- **lisans:** Creative Commons Attribution 4.0 International (CC BY 4.0). Attribution required: "UNHCR Refugee Population Statistics Database". Some third-party-sourced indicators may have separate terms. Terms: https://www.unhcr.org/terms-use-datasets
- **not:** Verified real and directed. UNHCR's API returns true directed pairs: origin (coo) -> asylum (coa) with stock figures back to 1951 and flow-like series (asylum applications/decisions) by year. Public, no auth, CSV via download=true, plus a bulk CSV downloader on the Refugee Data Finder page. CC BY 4.0 (attribution + link to terms), which is compatible with a static site as long as you pre-pull a sl

## borc
- **kaynak:** AidData (William & Mary) — AidData's Global Chinese Development Finance Dataset, Version 3.0 (GCDF 3.0)
- **url:** https://www.aiddata.org/data/aiddatas-global-chinese-development-finance-dataset-version-3-0
- **erişim:** Free bulk download from the dataset page (ZIP containing Excel/CSV, project-level rows). No API needed for a static site — pull once, aggregate, ship a JSON slice.
- **lisans:** No CC license; free to use with mandatory citation. Cite: "AidData. 2023. Global Chinese Development Finance Dataset, Version 3.0" (+ TUFF methodology paper / Cambridge UP book for academic use).
- **not:** VERIFIED as the best fit for BRI/bilateral Chinese lending, directed A->B. GCDF 3.0 covers 20,985 official Chinese financial commitments (loans + grants) to 165 low/middle-income countries, 2000-2021, ~$1.34T. Each row is a commitment with a directed Chinese funding institution (lender) and a recipient/borrowing country — so China -> country flows are directly buildable; aggregate to country total

## diplomasi
- **kaynak:** Database of Embassies (nicolas-raoul / community, sourced from Wikidata) — Database of Embassies and Consulates (Wikidata-powered)
- **url:** https://raw.githubusercontent.com/database-of-embassies/database-of-embassies/master/database_of_embassies.csv
- **erişim:** Direct single CSV download (raw GitHub file), no registration, no API key. Also browsable at https://database-of-embassies.github.io/
- **lisans:** Public domain / CC0 (data comes from Wikidata, which is CC0). Individual embassy photos may carry their own licenses but the relational data itself is CC0.
- **not:** VERIFIED with a live download: I fetched the CSV directly (semicolon-delimited, ~10,457 data rows). It IS directed A->B: column "operator" = sending country, column "country" = host country, plus city/latitude/longitude, "jurisdictions" (extra countries an embassy covers), type (embassy/consulate), Wikidata QIDs, website, and inception/creation dates. Perfect for a globe because it already carries

## teknoloji
- **kaynak:** CEPII (Centre d'Etudes Prospectives et d'Informations Internationales), built on UN Comtrade — CEPII BACI (bilateral trade at HS6 product level), filtered to HS 8542 (electronic integrated circuits) and 8541 (semiconductor devices/diodes/transistors)
- **url:** https://www.cepii.fr/CEPII/en/bdd_modele/bdd_modele_item.asp?id=37
- **erişim:** Free CSV download after free CEPII account registration; one zipped CSV file per year, columns: t (year), i (exporter, ISO numeric), j (importer, ISO numeric), k (HS6 product), v (value, thousands USD), q (quantity, metric tons). Country/product code lookup tables included.
- **lisans:** Etalab Open Licence 2.0 (free use, attribution/source citation required)
- **not:** VERIFIED. CEPII-BACI is the best fit: it gives genuinely DIRECTED exporter->importer pairs (i=exporter, j=importer), not just per-country totals, at HS6 level so you can isolate semiconductors precisely — HS 8542 = electronic integrated circuits (the core 'chips'), HS 8541 = semiconductor devices (diodes, transistors, LEDs). It is free and downloadable as CSV, one file per year, under Etalab Open 

## us
- **kaynak:** HKU (University of Hong Kong) — Asian Religious Connections, HKIHSS; hosted on Figshare — Overseas Military Bases
- **url:** https://datahub.hku.hk/articles/dataset/Overseas_Military_Bases/20438805
- **erişim:** Direct file download (XLSX + Shapefile) from Figshare; also via Figshare REST API (https://api.figshare.com/v2/articles/20438805). Direct XLSX: https://ndownloader.figshare.com/files/36566772
- **lisans:** CC BY-NC 4.0 (Creative Commons Attribution-NonCommercial 4.0)
- **not:** VERIFIED via Figshare API (HTTP 200) and by downloading + parsing the actual XLSX. DOI 10.25442/hku.20438805.v1, published 2022-08-15, data current as of 30 Nov 2020. The data sheet has 210 base records with an 'Operator' column (operating/sending country) and a 'Country' column (host country) — this gives true directed A->B pairs (e.g. China->Cambodia, China->Djibouti, France->Chad). Also include

## yardim
- **kaynak:** OECD (Development Assistance Committee / Creditor Reporting System) — DAC2A — Aid (ODA) disbursements to countries and regions (donor to recipient bilateral ODA)
- **url:** https://data-explorer.oecd.org/vis?df[ds]=DisseminateFinalDMZ&df[id]=DSD_DAC2@DF_DAC2A&df[ag]=OECD.DCD.FSD
- **erişim:** Free public SDMX REST API (no key), CSV or JSON, plus interactive Data Explorer with CSV export and bulk download. Tested live endpoint returns directed donor->recipient rows: https://sdmx.oecd.org/public/rest/data/OECD.DCD.FSD,DSD_DAC2@DF_DAC2A,/USA.KHM.206.USD.Q?startPeriod=2021&format=csvfilewithlabels
- **lisans:** CC BY 4.0 (OECD default since 1 July 2024; free reuse incl. commercial, attribution required; OECD logo excluded)
- **not:** VERIFIED LIVE. OECD DAC2A is the authoritative source for who-gives-aid-to-whom. I hit the SDMX REST API and it returned real directed rows with explicit DONOR and RECIPIENT columns (e.g. USA -> Cambodia, ODA disbursements 116.05M USD in 2022, 123.65M in 2021, constant prices). True A->B directed pairs, not just per-country totals. Free, no API key, CSV/JSON, filterable by donor/recipient/year — e
