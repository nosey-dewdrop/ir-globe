/* All numbers hand-copied from: SIPRI Fact Sheet "Trends in International Arms
   Transfers, 2025" (March 2026), tables 1 and 2, period 2021-25.
   https://www.sipri.org/sites/default/files/2026-03/fs_2603_at_2025.pdf
   No invented data. exp = % of the supplier's total exports going to that
   recipient. imp = % of the recipient's total imports coming from that supplier. */

/* every layer carries its own source; the chip on each tie cites it */
const SOURCES = {
  silah: {
    label: "SIPRI arms transfers database, mart 2026",
    url: "https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-international-arms-transfers-2025",
  },
};

/* table 1: the 25 largest suppliers, each with its 3 main recipients */
const SUPPLIERS = [
  { c: "united states", share: 42,  to: [["saudi arabia", 12], ["ukraine", 9.4], ["japan", 8.9]] },
  { c: "france",        share: 9.8, to: [["india", 24], ["egypt", 11], ["greece", 10]] },
  { c: "russia",        share: 6.8, to: [["india", 48], ["china", 13], ["belarus", 13]] },
  { c: "germany",       share: 5.7, to: [["ukraine", 24], ["egypt", 14], ["israel", 10]] },
  { c: "china",         share: 5.6, to: [["pakistan", 61], ["serbia", 6.8], ["thailand", 4.7]] },
  { c: "italy",         share: 5.1, to: [["qatar", 26], ["kuwait", 17], ["indonesia", 12]] },
  { c: "israel",        share: 4.4, to: [["india", 29], ["germany", 21], ["united states", 7.8]] },
  { c: "united kingdom", share: 3.4, to: [["qatar", 31], ["united states", 14], ["ukraine", 13]] },
  { c: "south korea",   share: 3.0, to: [["poland", 58], ["philippines", 18], ["uae", 9.5]] },
  { c: "spain",         share: 2.3, to: [["saudi arabia", 28], ["türkiye", 16], ["belgium", 12]] },
  { c: "türkiye",       share: 1.8, to: [["pakistan", 16], ["uae", 12], ["ukraine", 8.4]] },
  { c: "netherlands",   share: 1.2, to: [["ukraine", 23], ["united states", 20], ["pakistan", 16]] },
  { c: "norway",        share: 1.0, to: [["united states", 33], ["ukraine", 22], ["romania", 16]] },
  { c: "poland",        share: 1.0, to: [["ukraine", 94], ["estonia", 1.6], ["sweden", 1.4]] },
  { c: "sweden",        share: 0.9, to: [["brazil", 24], ["ukraine", 14], ["pakistan", 12]] },
  { c: "canada",        share: 0.7, to: [["ukraine", 34], ["saudi arabia", 27], ["united states", 17]] },
  { c: "czechia",       share: 0.4, to: [["ukraine", 69], ["vietnam", 14], ["hungary", 9.0]] },
  { c: "south africa",  share: 0.4, to: [["uae", 39], ["singapore", 19], ["drc", 9.1]] },
  { c: "denmark",       share: 0.3, to: [["ukraine", 50], ["argentina", 19], ["norway", 7.7]] },
  { c: "switzerland",   share: 0.3, to: [["spain", 46], ["denmark", 14], ["romania", 12]] },
  { c: "ukraine",       share: 0.3, to: [["china", 64], ["india", 23], ["qatar", 5.8]] },
  { c: "australia",     share: 0.3, to: [["ukraine", 24], ["canada", 23], ["united states", 21]] },
  { c: "belgium",       share: 0.3, to: [["saudi arabia", 30], ["ukraine", 23], ["canada", 21]] },
  { c: "brazil",        share: 0.3, to: [["portugal", 45], ["hungary", 26], ["nigeria", 13]] },
  { c: "iran",          share: 0.3, to: [["russia", 73], ["venezuela", 17], ["houthi rebels (yemen)", 9.1]] },
];

/* table 2: the 40 largest recipients, each with its 3 main suppliers */
const RECIPIENTS = [
  { c: "ukraine",       share: 9.7, from: [["united states", 41], ["germany", 14], ["poland", 9.4]] },
  { c: "india",         share: 8.2, from: [["russia", 40], ["france", 29], ["israel", 15]] },
  { c: "saudi arabia",  share: 6.8, from: [["united states", 77], ["spain", 9.5], ["france", 4.6]] },
  { c: "qatar",         share: 6.4, from: [["united states", 48], ["italy", 21], ["united kingdom", 17]] },
  { c: "pakistan",      share: 4.2, from: [["china", 80], ["türkiye", 7.0], ["netherlands", 4.6]] },
  { c: "japan",         share: 3.9, from: [["united states", 95], ["united kingdom", 3.4], ["norway", 0.9]] },
  { c: "poland",        share: 3.6, from: [["south korea", 47], ["united states", 44], ["italy", 2.2]] },
  { c: "united states", share: 2.9, from: [["united kingdom", 17], ["france", 14], ["italy", 13]] },
  { c: "kuwait",        share: 2.8, from: [["united states", 62], ["italy", 31], ["france", 5.7]] },
  { c: "australia",     share: 2.8, from: [["united states", 85], ["spain", 6.5], ["germany", 4.0]] },
  { c: "uae",           share: 2.7, from: [["united states", 42], ["france", 18], ["south korea", 10]] },
  { c: "egypt",         share: 2.6, from: [["france", 39], ["germany", 30], ["italy", 18]] },
  { c: "united kingdom", share: 2.1, from: [["united states", 85], ["israel", 8.2], ["germany", 2.7]] },
  { c: "israel",        share: 1.9, from: [["united states", 68], ["germany", 31], ["italy", 1.3]] },
  { c: "netherlands",   share: 1.8, from: [["united states", 89], ["romania", 4.8], ["sweden", 2.1]] },
  { c: "south korea",   share: 1.8, from: [["united states", 93], ["united kingdom", 3.5], ["israel", 1.8]] },
  { c: "germany",       share: 1.7, from: [["israel", 55], ["united states", 37], ["sweden", 2.8]] },
  { c: "indonesia",     share: 1.5, from: [["italy", 40], ["united states", 16], ["france", 14]] },
  { c: "greece",        share: 1.5, from: [["france", 68], ["united states", 17], ["italy", 4.4]] },
  { c: "norway",        share: 1.4, from: [["united states", 93], ["denmark", 1.8], ["italy", 1.7]] },
  { c: "china",         share: 1.3, from: [["russia", 66], ["ukraine", 15], ["france", 13]] },
  { c: "italy",         share: 1.3, from: [["united states", 93], ["france", 2.6], ["germany", 1.7]] },
  { c: "philippines",   share: 1.2, from: [["south korea", 42], ["israel", 20], ["united states", 15]] },
  { c: "türkiye",       share: 1.2, from: [["germany", 31], ["spain", 29], ["italy", 19]] },
  { c: "brazil",        share: 1.2, from: [["france", 62], ["sweden", 18], ["italy", 8.6]] },
  { c: "singapore",     share: 1.1, from: [["germany", 40], ["united states", 33], ["israel", 12]] },
  { c: "bahrain",       share: 1.0, from: [["united states", 99], ["türkiye", 0.6], ["italy", 0.6]] },
  { c: "morocco",       share: 1.0, from: [["united states", 60], ["israel", 24], ["france", 10]] },
  { c: "denmark",       share: 1.0, from: [["united states", 82], ["israel", 6.4], ["switzerland", 4.7]] },
  { c: "romania",       share: 0.9, from: [["united states", 48], ["norway", 17], ["netherlands", 15]] },
  { c: "belgium",       share: 0.9, from: [["united states", 54], ["spain", 32], ["france", 7.9]] },
  { c: "belarus",       share: 0.9, from: [["russia", 100], ["iran", 0.1], ["china", 0.04]] },
  { c: "algeria",       share: 0.9, from: [["russia", 39], ["china", 27], ["germany", 18]] },
  { c: "taiwan",        share: 0.8, from: [["united states", 96], ["italy", 1.5], ["germany", 1.4]] },
  { c: "hungary",       share: 0.8, from: [["germany", 43], ["united states", 16], ["france", 9.9]] },
  { c: "kazakhstan",    share: 0.7, from: [["russia", 83], ["spain", 7.9], ["france", 3.6]] },
  { c: "serbia",        share: 0.6, from: [["china", 61], ["france", 12], ["russia", 7.0]] },
  { c: "canada",        share: 0.6, from: [["united states", 32], ["spain", 26], ["australia", 11]] },
  { c: "spain",         share: 0.6, from: [["united states", 49], ["switzerland", 25], ["france", 9.1]] },
  { c: "thailand",      share: 0.5, from: [["china", 49], ["united states", 15], ["israel", 9.2]] },
];

/* rough country centroids for drawing, [lat, lng] */
const COORDS = {
  "united states": [39.8, -98.6], "france": [46.6, 2.2], "russia": [61.5, 90.0],
  "germany": [51.2, 10.4], "china": [35.9, 104.2], "italy": [42.8, 12.8],
  "israel": [31.4, 35.0], "united kingdom": [54.0, -2.5], "south korea": [36.5, 127.9],
  "spain": [40.3, -3.7], "türkiye": [39.0, 35.2], "netherlands": [52.2, 5.3],
  "norway": [61.0, 8.8], "poland": [52.1, 19.4], "sweden": [62.0, 15.0],
  "canada": [56.1, -106.3], "czechia": [49.8, 15.5], "south africa": [-29.0, 24.7],
  "denmark": [56.0, 9.5], "switzerland": [46.8, 8.2], "ukraine": [48.4, 31.2],
  "australia": [-25.3, 133.8], "belgium": [50.6, 4.7], "brazil": [-10.8, -52.9],
  "iran": [32.4, 53.7], "saudi arabia": [24.0, 45.1], "japan": [36.6, 138.2],
  "india": [21.8, 78.7], "egypt": [26.8, 30.0], "greece": [39.1, 22.9],
  "belarus": [53.7, 28.0], "pakistan": [29.9, 69.4], "serbia": [44.2, 20.8],
  "thailand": [15.1, 101.0], "qatar": [25.3, 51.2], "kuwait": [29.3, 47.6],
  "indonesia": [-2.5, 118.0], "philippines": [12.9, 122.9], "uae": [24.0, 54.0],
  "estonia": [58.7, 25.5], "romania": [45.9, 24.9], "hungary": [47.2, 19.4],
  "vietnam": [16.0, 107.8], "singapore": [1.35, 103.8], "drc": [-2.9, 23.6],
  "argentina": [-34.0, -64.0], "nigeria": [9.1, 8.7], "portugal": [39.6, -8.0],
  "venezuela": [7.1, -66.2], "houthi rebels (yemen)": [15.6, 48.0],
  "morocco": [31.8, -7.1], "bahrain": [26.0, 50.5], "algeria": [28.0, 2.6],
  "taiwan": [23.7, 121.0], "kazakhstan": [48.0, 66.9],
};
