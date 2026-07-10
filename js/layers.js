/* real, well-established directed connections per relationship layer.
   gathered 2026-07-10 by agents (verified facts, no fabrication). silah stays in data.js (SIPRI). */
const LAYER_TIES = {
  "ticaret": [
    {
      "s": "china",
      "r": "united states",
      "note": "US is China's largest single-country export market; ~$439B Chinese goods in 2024"
    },
    {
      "s": "canada",
      "r": "united states",
      "note": "US is Canada's dominant trade partner; ~$762B bilateral goods 2024"
    },
    {
      "s": "united states",
      "r": "canada",
      "note": "Canada a top US goods partner, cornerstone of USMCA trade"
    },
    {
      "s": "china",
      "r": "japan",
      "note": "China exported ~$152B to Japan in 2024; Japan a top-5 China partner"
    },
    {
      "s": "japan",
      "r": "united states",
      "note": "US is Japan's largest export market for autos and machinery"
    },
    {
      "s": "china",
      "r": "south korea",
      "note": "China exported ~$146B to South Korea in 2024; China is Korea's top partner"
    },
    {
      "s": "south korea",
      "r": "china",
      "note": "China is South Korea's largest trading partner for goods"
    },
    {
      "s": "russia",
      "r": "china",
      "note": "China is Russia's top partner 15 years running; ~$245B in 2024, oil and gas heavy"
    },
    {
      "s": "china",
      "r": "germany",
      "note": "China a top-2 Germany partner; ~EUR246B turnover in 2024"
    },
    {
      "s": "germany",
      "r": "united states",
      "note": "US became Germany's #1 trade partner in 2024; ~EUR253B turnover"
    },
    {
      "s": "germany",
      "r": "france",
      "note": "France a top German export market; core of EU single market trade"
    },
    {
      "s": "netherlands",
      "r": "germany",
      "note": "Germany is the Netherlands' largest trade partner; Rotterdam gateway"
    },
    {
      "s": "germany",
      "r": "netherlands",
      "note": "Netherlands #3 German partner; ~EUR206B combined 2024"
    },
    {
      "s": "france",
      "r": "germany",
      "note": "Germany is France's largest trading partner for goods"
    },
    {
      "s": "poland",
      "r": "germany",
      "note": "Germany is Poland's dominant export destination and partner"
    },
    {
      "s": "united states",
      "r": "china",
      "note": "China imported ~$165B US goods in 2024; total bilateral ~$688B"
    }
  ],
  "enerji": [
    {
      "s": "russia",
      "r": "china",
      "note": "China is Russia's #1 crude buyer, ~2.2 mb/d in 2024, plus Power of Siberia gas"
    },
    {
      "s": "russia",
      "r": "india",
      "note": "Russia became India's top crude supplier, ~1.7 mb/d and ~37% of imports in 2024"
    },
    {
      "s": "russia",
      "r": "türkiye",
      "note": "Russia is Türkiye's largest gas supplier via TurkStream/Blue Stream pipelines"
    },
    {
      "s": "russia",
      "r": "hungary",
      "note": "Hungary still takes Russian pipeline gas via TurkStream/Balkan route after Ukraine transit ended"
    },
    {
      "s": "russia",
      "r": "serbia",
      "note": "Serbia receives Russian gas via the TurkStream/Balkan Stream interconnector"
    },
    {
      "s": "russia",
      "r": "belarus",
      "note": "Belarus depends almost entirely on Russian oil and gas, transited via Druzhba and Yamal"
    },
    {
      "s": "norway",
      "r": "germany",
      "note": "Norway supplies ~48% of Germany's gas, its largest single source in 2024"
    },
    {
      "s": "norway",
      "r": "united kingdom",
      "note": "Norway is the UK's largest gas import source, ~43% of gross supply in 2024"
    },
    {
      "s": "norway",
      "r": "france",
      "note": "Norway pipes gas directly to France and is a top EU supplier (~30% of EU imports)"
    },
    {
      "s": "qatar",
      "r": "south korea",
      "note": "Qatar is one of South Korea's largest LNG suppliers, ~$6.6B in 2024"
    },
    {
      "s": "qatar",
      "r": "china",
      "note": "China was Qatar's top LNG buyer in 2024 (~$10.6B) under long-term contracts"
    },
    {
      "s": "qatar",
      "r": "india",
      "note": "Qatar is India's dominant LNG supplier, ~$6.4B in 2024"
    },
    {
      "s": "qatar",
      "r": "pakistan",
      "note": "Qatar is Pakistan's main LNG supplier under long-term deals, ~$3.5B in 2024"
    },
    {
      "s": "united states",
      "r": "netherlands",
      "note": "Netherlands is a top European destination for US LNG (Gate/Rotterdam terminals)"
    },
    {
      "s": "saudi arabia",
      "r": "china",
      "note": "China is Saudi Arabia's single largest crude buyer, ~$48B in 2024"
    },
    {
      "s": "saudi arabia",
      "r": "japan",
      "note": "Saudi Arabia is Japan's leading crude supplier; ~$29B of exports in 2024"
    },
    {
      "s": "canada",
      "r": "united states",
      "note": "~96% of Canada's crude exports go to the US; Canada is #1 US crude supplier (~60% of imports)"
    },
    {
      "s": "algeria",
      "r": "italy",
      "note": "Algeria is Italy's top pipeline gas supplier via Transmed, ~46% of Algerian gas exports in 2024"
    },
    {
      "s": "algeria",
      "r": "spain",
      "note": "Algeria supplies ~39% of Spanish gas imports via the Medgaz pipeline (2024)"
    },
    {
      "s": "iran",
      "r": "türkiye",
      "note": "Iran is Türkiye's third-largest gas supplier (~13.6% share, 7 bcm) via Tabriz-Ankara pipeline in 2024"
    }
  ],
  "tahil": [
    {
      "s": "russia",
      "r": "egypt",
      "note": "Egypt is the top buyer of Russian wheat, ~8 mln tonnes in 2024/25"
    },
    {
      "s": "russia",
      "r": "türkiye",
      "note": "Türkiye is a leading destination for Russian wheat"
    },
    {
      "s": "russia",
      "r": "iran",
      "note": "Iran is a major buyer of Russian wheat"
    },
    {
      "s": "russia",
      "r": "saudi arabia",
      "note": "Saudi Arabia is among top Russian wheat importers"
    },
    {
      "s": "russia",
      "r": "pakistan",
      "note": "Pakistan imported ~1.6 mln tonnes of Russian wheat in 2023/24"
    },
    {
      "s": "united states",
      "r": "japan",
      "note": "Japan is a top-two market for US corn and major US wheat buyer"
    },
    {
      "s": "united states",
      "r": "south korea",
      "note": "South Korea is a top-five market for US corn"
    },
    {
      "s": "united states",
      "r": "taiwan",
      "note": "Taiwan is a top-ten market for US corn and wheat"
    },
    {
      "s": "canada",
      "r": "china",
      "note": "China is the largest buyer of Canadian wheat"
    },
    {
      "s": "canada",
      "r": "indonesia",
      "note": "Indonesia is a top-five destination for Canadian wheat"
    },
    {
      "s": "canada",
      "r": "japan",
      "note": "Japan is a major buyer of Canadian wheat"
    },
    {
      "s": "australia",
      "r": "indonesia",
      "note": "Indonesia is a leading market for Australian wheat"
    },
    {
      "s": "ukraine",
      "r": "egypt",
      "note": "Egypt is a major destination for Ukrainian corn and wheat"
    },
    {
      "s": "ukraine",
      "r": "china",
      "note": "China is historically a top buyer of Ukrainian corn"
    },
    {
      "s": "france",
      "r": "morocco",
      "note": "Morocco is France's largest wheat buyer in 2024/25"
    },
    {
      "s": "brazil",
      "r": "china",
      "note": "Brazil, the #2 corn exporter, is a top supplier to China"
    },
    {
      "s": "argentina",
      "r": "china",
      "note": "China is a major buyer of Argentine corn and grain"
    }
  ],
  "ittifak": [
    {
      "s": "united states",
      "r": "japan",
      "note": "US-Japan Mutual Security Treaty (1960); US guarantees Japan's defense"
    },
    {
      "s": "united states",
      "r": "south korea",
      "note": "US-ROK Mutual Defense Treaty (1953); US troops stationed in Korea"
    },
    {
      "s": "united states",
      "r": "philippines",
      "note": "US-Philippines Mutual Defense Treaty (1951)"
    },
    {
      "s": "united states",
      "r": "australia",
      "note": "ANZUS treaty (1951) and AUKUS pact"
    },
    {
      "s": "united states",
      "r": "israel",
      "note": "US Major Non-NATO Ally, primary security guarantor and arms supplier"
    },
    {
      "s": "united states",
      "r": "saudi arabia",
      "note": "long-standing US security guarantee and defense partnership"
    },
    {
      "s": "united states",
      "r": "taiwan",
      "note": "Taiwan Relations Act; US primary defense backer and arms supplier"
    },
    {
      "s": "united states",
      "r": "poland",
      "note": "NATO ally; large US troop presence guaranteeing Poland's defense"
    },
    {
      "s": "united states",
      "r": "germany",
      "note": "NATO ally; major US military bases in Germany"
    },
    {
      "s": "united states",
      "r": "united kingdom",
      "note": "NATO ally; closest US defense/intelligence partner"
    },
    {
      "s": "united states",
      "r": "türkiye",
      "note": "NATO ally since 1952; Incirlik air base"
    },
    {
      "s": "united states",
      "r": "canada",
      "note": "NATO founding ally and NORAD joint air defense"
    },
    {
      "s": "united states",
      "r": "romania",
      "note": "NATO ally; US missile-defense site and troop presence at Deveselu"
    },
    {
      "s": "united states",
      "r": "norway",
      "note": "NATO founding ally; US supplementary defense cooperation agreement"
    },
    {
      "s": "russia",
      "r": "belarus",
      "note": "CSTO ally and Union State; Russian forces and nuclear weapons in Belarus"
    },
    {
      "s": "russia",
      "r": "kazakhstan",
      "note": "CSTO collective defense member led by Russia"
    },
    {
      "s": "france",
      "r": "belgium",
      "note": "NATO allies with close bilateral defense cooperation"
    }
  ],
  "yaptirim": [
    {
      "s": "united states",
      "r": "russia",
      "note": "OFAC sanctions since 2014, massively expanded after 2022 Ukraine invasion"
    },
    {
      "s": "united states",
      "r": "iran",
      "note": "long-standing comprehensive US embargo and SDN designations"
    },
    {
      "s": "united states",
      "r": "china",
      "note": "OFAC/Commerce measures on Xinjiang, tech, entities aiding Russia"
    },
    {
      "s": "united states",
      "r": "venezuela",
      "note": "US sanctions on Maduro government and PDVSA oil sector"
    },
    {
      "s": "united states",
      "r": "belarus",
      "note": "US sanctions after 2020 crackdown and support for Russia's war"
    },
    {
      "s": "united states",
      "r": "houthi rebels (yemen)",
      "note": "US terrorist redesignation and financier sanctions over Red Sea attacks"
    },
    {
      "s": "united kingdom",
      "r": "russia",
      "note": "UK Russia sanctions regime post-2022, asset freezes and trade bans"
    },
    {
      "s": "germany",
      "r": "russia",
      "note": "EU member enforcing Russia sanctions packages via EU Council"
    },
    {
      "s": "france",
      "r": "russia",
      "note": "EU member enforcing successive Russia sanctions packages"
    },
    {
      "s": "canada",
      "r": "russia",
      "note": "Canadian sanctions on Russia under SEMA after 2022 invasion"
    },
    {
      "s": "australia",
      "r": "russia",
      "note": "Australia autonomous sanctions on Russia after 2022 invasion"
    },
    {
      "s": "russia",
      "r": "united states",
      "note": "Russia counter-sanctions naming US an 'unfriendly state' under Law 127-FZ"
    },
    {
      "s": "russia",
      "r": "germany",
      "note": "Russia's 'unfriendly countries' countermeasures cover all EU states"
    },
    {
      "s": "china",
      "r": "united states",
      "note": "Anti-Foreign Sanctions Law countermeasures on US defense firms and officials"
    },
    {
      "s": "iran",
      "r": "united states",
      "note": "Iran sanctions US officials over IRGC designation and Soleimani killing"
    },
    {
      "s": "united kingdom",
      "r": "belarus",
      "note": "UK sanctions on Belarus over Lukashenko crackdown and war support"
    },
    {
      "s": "canada",
      "r": "iran",
      "note": "Canada sanctions on Iran's IRGC and officials over human rights"
    },
    {
      "s": "japan",
      "r": "russia",
      "note": "Japan G7 sanctions on Russia after 2022 invasion, asset freezes and export bans"
    }
  ],
  "goc": [
    {
      "s": "ukraine",
      "r": "poland",
      "note": "Largest wave of Ukrainian refugees after 2022 invasion; Poland the top first-arrival country"
    },
    {
      "s": "ukraine",
      "r": "germany",
      "note": "Germany hosts the largest number of Ukrainian refugees in the EU, over 1.3 million"
    },
    {
      "s": "ukraine",
      "r": "czechia",
      "note": "Czechia hosts the highest per-capita Ukrainian refugee population in the EU"
    },
    {
      "s": "ukraine",
      "r": "russia",
      "note": "Over a million Ukrainians recorded in Russia in refugee-like situation since 2022"
    },
    {
      "s": "kazakhstan",
      "r": "russia",
      "note": "Kazakhstan-Russia is a top-ten global migration corridor (~2.6 million)"
    },
    {
      "s": "russia",
      "r": "kazakhstan",
      "note": "Large Russian-origin population in Kazakhstan; ~1 million crossed after 2022 mobilization"
    },
    {
      "s": "india",
      "r": "uae",
      "note": "India-UAE is the fifth-largest migration corridor; over 3 million Indians in the UAE"
    },
    {
      "s": "india",
      "r": "saudi arabia",
      "note": "India-Saudi Arabia a top-15 global corridor; large Indian labor workforce"
    },
    {
      "s": "india",
      "r": "united states",
      "note": "India-US among the top global migration corridors"
    },
    {
      "s": "pakistan",
      "r": "saudi arabia",
      "note": "~2.64 million Pakistanis in Saudi Arabia, one of its largest expatriate groups"
    },
    {
      "s": "pakistan",
      "r": "uae",
      "note": "UAE second-largest destination for Pakistani migrant workers"
    },
    {
      "s": "indonesia",
      "r": "saudi arabia",
      "note": "Hundreds of thousands of Indonesian workers, mostly domestic labor, in Saudi Arabia"
    },
    {
      "s": "philippines",
      "r": "saudi arabia",
      "note": "Saudi Arabia the largest employer of Overseas Filipino Workers"
    },
    {
      "s": "algeria",
      "r": "france",
      "note": "Algerians are the largest single foreign-origin community in France"
    },
    {
      "s": "morocco",
      "r": "france",
      "note": "Moroccans are the second-largest foreign-origin community in France, ~1 million"
    },
    {
      "s": "poland",
      "r": "united kingdom",
      "note": "Over 800,000 Poles moved to the UK after 2004 EU accession, top EU-born group"
    },
    {
      "s": "romania",
      "r": "italy",
      "note": "Over 1 million Romanians in Italy, the largest immigrant group there"
    },
    {
      "s": "venezuela",
      "r": "brazil",
      "note": "Brazil the top net-flow destination for Venezuelans via Operacao Acolhida, 400,000+"
    }
  ],
  "borc": [
    {
      "s": "china",
      "r": "pakistan",
      "note": "China-Pakistan Economic Corridor (CPEC), Pakistan's largest bilateral creditor ~$22-27B"
    },
    {
      "s": "china",
      "r": "argentina",
      "note": "~$21B in Chinese loans plus central bank currency swap lines, Belgrano rail and dam projects"
    },
    {
      "s": "china",
      "r": "venezuela",
      "note": "oil-for-loans deals via China Development Bank, ~$10B+ outstanding bilateral debt"
    },
    {
      "s": "china",
      "r": "indonesia",
      "note": "Jakarta-Bandung high-speed rail and large BRI infrastructure lending, ~$20B+"
    },
    {
      "s": "china",
      "r": "drc",
      "note": "$9B Sicomines copper-cobalt loan-for-infrastructure deal, ~$13B total"
    },
    {
      "s": "china",
      "r": "kazakhstan",
      "note": "largest Central Asia BRI recipient, oil, rail and logistics lending ~$25B"
    },
    {
      "s": "china",
      "r": "nigeria",
      "note": "Kaduna-Kano and Lagos-Ibadan railways financed by China Exim Bank"
    },
    {
      "s": "china",
      "r": "egypt",
      "note": "new administrative capital CBD tower and BRI infrastructure loans from Chinese banks"
    },
    {
      "s": "china",
      "r": "belarus",
      "note": "~$11B owed to China, Great Stone industrial park and China Exim credit lines"
    },
    {
      "s": "china",
      "r": "serbia",
      "note": "Belgrade-Budapest railway, Smederevo steel and bridge loans, top BRI debtor in Europe"
    },
    {
      "s": "china",
      "r": "iran",
      "note": "25-year cooperation pact with pledged Chinese investment and oil-backed financing"
    },
    {
      "s": "china",
      "r": "brazil",
      "note": "China Development Bank oil-for-loans credit to Petrobras and BRI-aligned lending"
    },
    {
      "s": "china",
      "r": "south africa",
      "note": "China Development Bank and ICBC loans to Eskom and Transnet state utilities"
    },
    {
      "s": "china",
      "r": "thailand",
      "note": "Bangkok-Nakhon Ratchasima China-financed high-speed rail project"
    },
    {
      "s": "china",
      "r": "philippines",
      "note": "Chinese loans for Kaliwa Dam and Chico River pump irrigation projects"
    },
    {
      "s": "china",
      "r": "vietnam",
      "note": "Cat Linh-Ha Dong urban rail line in Hanoi built with China Exim Bank loan"
    }
  ],
  "diplomasi": [
    {
      "s": "united states",
      "r": "israel",
      "note": "decades-long special relationship, 10-year military aid MOU, key regional ally"
    },
    {
      "s": "united states",
      "r": "united kingdom",
      "note": "the Special Relationship since 1946, UKUSA intelligence pact, NATO, AUKUS"
    },
    {
      "s": "united states",
      "r": "south korea",
      "note": "1953 Mutual Defense Treaty, ~28,500 US troops, global comprehensive strategic partnership"
    },
    {
      "s": "united states",
      "r": "japan",
      "note": "1960 Treaty of Mutual Cooperation and Security, cornerstone of Indo-Pacific, ~55,000 US troops"
    },
    {
      "s": "united states",
      "r": "australia",
      "note": "1951 ANZUS treaty and 2021 AUKUS trilateral security partnership"
    },
    {
      "s": "united states",
      "r": "canada",
      "note": "stated most important bilateral partnership, NORAD, NATO, Five Eyes"
    },
    {
      "s": "china",
      "r": "russia",
      "note": "'no limits' strategic partnership declared Feb 2022, shared anti-Western alignment"
    },
    {
      "s": "china",
      "r": "pakistan",
      "note": "'all-weather strategic cooperative partnership' since 2015, CPEC, iron-clad friendship"
    },
    {
      "s": "russia",
      "r": "belarus",
      "note": "Union State treaty (1999), mutual security guarantees, deep military integration"
    },
    {
      "s": "russia",
      "r": "iran",
      "note": "Comprehensive Strategic Partnership Treaty signed Jan 2025, 20-year defense and energy pact"
    },
    {
      "s": "russia",
      "r": "india",
      "note": "'Special and Privileged Strategic Partnership' since 2010, long-standing defense cooperation"
    },
    {
      "s": "saudi arabia",
      "r": "pakistan",
      "note": "Strategic Mutual Defence Agreement signed Sept 2025, collective security clause"
    },
    {
      "s": "france",
      "r": "germany",
      "note": "Elysee Treaty (1963) and Aachen Treaty (2019), core Franco-German axis of the EU"
    },
    {
      "s": "united kingdom",
      "r": "australia",
      "note": "AUKUS partnership (2021), Commonwealth ties, nuclear submarine cooperation"
    },
    {
      "s": "united states",
      "r": "saudi arabia",
      "note": "long-standing security-for-energy partnership, major arms supplier and defense guarantor"
    },
    {
      "s": "united states",
      "r": "germany",
      "note": "key NATO ally, largest US troop presence in Europe, transatlantic partnership"
    }
  ],
  "teknoloji": [
    {
      "s": "taiwan",
      "r": "united states",
      "note": "TSMC supplies over 90% of advanced logic chips; core of US supply chain"
    },
    {
      "s": "taiwan",
      "r": "china",
      "note": "Taiwan IC exports to China were ~59% of its IC export value in 2022"
    },
    {
      "s": "south korea",
      "r": "china",
      "note": "Samsung/SK Hynix run major DRAM/NAND fabs in China (Xi'an, Wuxi, Dalian)"
    },
    {
      "s": "south korea",
      "r": "united states",
      "note": "world's top memory chipmakers; Samsung Taylor TX fab, SK Hynix US investment"
    },
    {
      "s": "netherlands",
      "r": "taiwan",
      "note": "ASML is sole EUV supplier; TSMC depends on its lithography machines"
    },
    {
      "s": "netherlands",
      "r": "south korea",
      "note": "ASML DUV/EUV tools essential to Samsung and SK Hynix fabs"
    },
    {
      "s": "united states",
      "r": "china",
      "note": "successive export controls (2022-2024) curbing advanced chips and tools to China"
    },
    {
      "s": "united states",
      "r": "netherlands",
      "note": "US pressured Netherlands to restrict ASML equipment sales to China"
    },
    {
      "s": "united states",
      "r": "japan",
      "note": "US-Japan-Netherlands deal restricting chipmaking equipment exports to China"
    },
    {
      "s": "japan",
      "r": "china",
      "note": "2023 controls on 23 types of chipmaking equipment exported to China"
    },
    {
      "s": "japan",
      "r": "south korea",
      "note": "2019 controls on photoresist, HF, fluorinated polyimide to Korea"
    },
    {
      "s": "china",
      "r": "united states",
      "note": "2024 ban on gallium/germanium exports, key chip materials, to the US"
    },
    {
      "s": "china",
      "r": "netherlands",
      "note": "gallium/germanium and rare earth controls hit ASML's home supply base"
    },
    {
      "s": "netherlands",
      "r": "china",
      "note": "ASML DUV immersion machine sales to China now require export licenses"
    },
    {
      "s": "china",
      "r": "south korea",
      "note": "China dominant supplier of gallium/rare earths used by Korean chipmakers"
    },
    {
      "s": "taiwan",
      "r": "japan",
      "note": "TSMC opened fab in Kumamoto, Japan, extending its supply footprint"
    },
    {
      "s": "taiwan",
      "r": "germany",
      "note": "TSMC building fab in Dresden to supply European chip demand"
    },
    {
      "s": "japan",
      "r": "united states",
      "note": "Japan supplies photoresists, silicon wafers and materials to US chipmakers"
    }
  ],
  "us": [
    {
      "s": "united states",
      "r": "germany",
      "note": "Ramstein Air Base, largest US troop presence in Europe"
    },
    {
      "s": "united states",
      "r": "japan",
      "note": "Yokosuka/Okinawa bases, ~50k US troops"
    },
    {
      "s": "united states",
      "r": "south korea",
      "note": "Camp Humphreys, ~28k troops under USFK"
    },
    {
      "s": "united states",
      "r": "italy",
      "note": "Aviano Air Base and Naval Station Sigonella"
    },
    {
      "s": "united states",
      "r": "united kingdom",
      "note": "RAF Lakenheath and Mildenhall USAF bases"
    },
    {
      "s": "united states",
      "r": "bahrain",
      "note": "US 5th Fleet headquarters, NSA Bahrain"
    },
    {
      "s": "united states",
      "r": "qatar",
      "note": "Al Udeid Air Base, CENTCOM forward HQ"
    },
    {
      "s": "united states",
      "r": "kuwait",
      "note": "Camp Arifjan, major US Army logistics hub"
    },
    {
      "s": "united states",
      "r": "türkiye",
      "note": "Incirlik Air Base hosting USAF"
    },
    {
      "s": "united states",
      "r": "poland",
      "note": "US Army garrison and Aegis Ashore Redzikowo"
    },
    {
      "s": "united states",
      "r": "spain",
      "note": "Naval Station Rota and Morón Air Base"
    },
    {
      "s": "united states",
      "r": "australia",
      "note": "Pine Gap and rotational Marines in Darwin"
    },
    {
      "s": "russia",
      "r": "belarus",
      "note": "Vileyka and Baranavichy facilities leased long-term"
    },
    {
      "s": "russia",
      "r": "kazakhstan",
      "note": "Sary Shagan test range and Balkhash radar station"
    },
    {
      "s": "france",
      "r": "uae",
      "note": "Camp de la Paix naval/air base in Abu Dhabi since 2009"
    },
    {
      "s": "united kingdom",
      "r": "bahrain",
      "note": "UK Naval Support Facility, main Gulf naval base"
    },
    {
      "s": "türkiye",
      "r": "qatar",
      "note": "Turkish base Tariq bin Ziyad in Doha"
    }
  ],
  "yardim": [
    {
      "s": "united states",
      "r": "ukraine",
      "note": "single biggest US aid recipient since 2022 invasion (~$16.6B in FY2023)"
    },
    {
      "s": "united states",
      "r": "israel",
      "note": "long-standing top US recipient, largely military aid (~$3.3B/yr)"
    },
    {
      "s": "united states",
      "r": "egypt",
      "note": "decades-long major US aid recipient since Camp David (~$1.5B/yr)"
    },
    {
      "s": "japan",
      "r": "india",
      "note": "India is Japan's single largest ODA recipient (loans for infrastructure)"
    },
    {
      "s": "japan",
      "r": "indonesia",
      "note": "consistently a top-5 recipient of Japanese ODA in Asia"
    },
    {
      "s": "japan",
      "r": "vietnam",
      "note": "one of Japan's largest ODA recipients, infrastructure loans"
    },
    {
      "s": "japan",
      "r": "philippines",
      "note": "top-3 Japanese ODA recipient, major loan and grant flows"
    },
    {
      "s": "germany",
      "r": "ukraine",
      "note": "Ukraine is Germany's largest bilateral recipient since 2022"
    },
    {
      "s": "germany",
      "r": "india",
      "note": "India consistently among Germany's largest ODA recipients"
    },
    {
      "s": "united kingdom",
      "r": "ukraine",
      "note": "Ukraine is the UK's top ODA recipient (2023)"
    },
    {
      "s": "france",
      "r": "morocco",
      "note": "Morocco is among the largest recipients of French ODA"
    },
    {
      "s": "china",
      "r": "pakistan",
      "note": "Pakistan is a top recipient of Chinese development finance (CPEC, ~$70B+)"
    },
    {
      "s": "türkiye",
      "r": "egypt",
      "note": "Egypt historically a leading recipient of Turkish TIKA development assistance"
    },
    {
      "s": "saudi arabia",
      "r": "egypt",
      "note": "Egypt is the largest cumulative recipient of Saudi aid (~$32B, deposits and packages)"
    },
    {
      "s": "saudi arabia",
      "r": "pakistan",
      "note": "Pakistan is a top-3 recipient of Saudi aid, central bank deposits and oil"
    },
    {
      "s": "uae",
      "r": "egypt",
      "note": "UAE among top Gulf donors to Egypt via deposits and investment packages"
    },
    {
      "s": "south korea",
      "r": "vietnam",
      "note": "Vietnam is one of South Korea's largest ODA recipients"
    }
  ]
};
