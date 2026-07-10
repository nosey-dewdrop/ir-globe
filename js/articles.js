/* real, current news per arms relationship — Google News RSS, refreshed by the
   news GitHub Action. no fabrication: every title/url comes from Google News. */
const ARTICLES = {
  "united states→saudi arabia": [
    {
      "title": "CENTCOM Leads Regional Security Dialogue with 12 Nations in Bahrain",
      "source": "centcom.mil",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQblNFQ0tGR01peXlRaWN0LWEwNlNuVGVnWF96RUtLWDAycDBLLXZwNWtwZWtLRGQtNXFpek1HRjZQZHZSYV9PQkJRd3FhS01IWTRvMUV1MkV4TnN1elhGM1BoX0hKUl9uVGMtMjhNQzlfUHl5YURyZ0cxemljQjNaNXdjS1dLUEhmbVJWNk5Gemxvd1lXWEc2OGwyeW9XQzBZRGRVeXdSWGVxMlhrTTJBbVl2SUxjbUFNN3Z3U0h4OVpCakNXRERiUWhB?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Rubio meets Princess Reema at State Department, reaffirms strong US-Saudi ties",
      "source": "Al Arabiya English",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNTmZueDZHbVVTb3FfRnNNQVpuelY5NlRKaXNaZTFlZktRQ0VnX2dwaEI2T0ZLZXViLXpnNVV1N2pLdGl5azVib1lJVm5SVXJfLVRpVm1UQm1jU2VaTVVjRU1FamYyM1ljN24zcGZfVkVndmFpN3ducEhzaFU0UjlvYmFjYXdIUVBBYm9sUVZCZUEyeHlydUFSWG1PRGNFSTJoZGtoRmZ6NjZzcDRISDI1eVVZU0xFbUU0b1RRcjhGWHl6MV9PZWROS0ZWb3h2OEdv0gHWAUFVX3lxTE1ZV0l5Z1dlVHhkUEdQc2xfWm12bEdzeDJuZTNQbFo4SmdKelByUHNZMEtDa0Y1UWljaVlCUFFRakdoNHdIMTVlMjl0bFFqVzJRazJpMm9NaDJCUFdSMU1odlZyQVdWdTh0dVpLVTE0eTdycnZKYUQtMFUyaUE1dU5aLW9YQmtCUGJhMmZFT2JmLUxPX2Zpbmlhbmp6QU5wNlpsVlJ6RTQ2R1NPZHNoQVBFX2ZiQ0l1YlJuZUE5cm11OFRGLTgzRm5McUR4emk4R3V3cGtaZFE?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "The Iran War and Saudi Arabia’s Strategy of Self-Reliance",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNMUJFZmF4aHhJMVhrYktpVTY2ZEc4Znk5N2pFaHBrZlpweFRGY0sxeGdPX3dWODAxVHJoQU1pSkZnZklJd2hlMzNqbVJRX09hNmJxSGMyTjNSdFRUVUNTUDJjV25seDhZdWJXV3ZVVEpkN1VCR3BUSUVPRUhHbTdMQVlrdlgtUWJKeExsWEFoa2w1YThZUHJjNHdBaG9TcW9KZ0ptVk5aQVZiZ2ZH?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "Saudi Air Defense Depends on US Troops About to Leave",
      "source": "houseofsaud.com",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE85YXlGSGlVMEdhRWRtMXhzdFYyMVRUMUZyQnM3YVA4Wk1naUxfSjRySVM1YTBKVFBpdmxDTGRoUG9WQmF5cmlpYmJfSW4ycG5NdE5hdEFYVTJjdWo3UTZUYXBKOW9HLTNoeVE?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Trump and Saudi Arabia: More Transactional Than Ever",
      "source": "Georgetown Journal of International Affairs",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNbmVMYTdfc0owU3FLblA2ZjlWbG9nUnpOZ24zbDhUaWNmdkliOGtNZVFDb3RPY0gwTXo0VFItU3lEOUF6QmVnQ0o4Vk5SZVBXMDd0MUtwc3hyRFFhY2o5eXppV3o1R3c5T0JzSUx5Y1EycmphLVh4aFNHb05wcWFDdkR5UkxHXzYxeHpKVnhneDlJdzdXcGpNX3lUZDZ2QzEw?oc=5",
      "date": "2026-04-26"
    },
    {
      "title": "How Does Saudi Arabia See the War with Iran?",
      "source": "CSIS | Center for Strategic and International Studies",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBuaW9ZV1BIcDl0bVI4bUpDUGUwaFFkY3ZDUU1NenJFSVZsUlJGMWd0Vm9pSFFBTnZtU21paFdWVzBRX2xpTlVMcFJCYVY1MUFXQXFhaGx0UW84Y3FDSnY4MmN1eXZoVWd3c3hlLUxwazF5QQ?oc=5",
      "date": "2026-03-18"
    },
    {
      "title": "The Iran War Is Driving the Gulf Toward Turkish Air Defense",
      "source": "Gulf International Forum",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNdlh5aGhxYjk3Tk11cWpQRG5BQ194NklFekR2cGZPeXozdnBGdTRzNGxjNm5LckFUaWVya0dDbU9zeEVHR2dpQU9YMmxxNVlTQXAzWXg3STZQZk1GSEo4eEx4dlBkYk40LUZLdDI3SS0xc0hHUlZiOGpYY2Z6LVF1R0x2LW4xUQ?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "U.S.-Saudi Deal Said to Loosen Nonproliferation Vows",
      "source": "Arms Control Association",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNS2JLX1hibTRXVDBocUF0UExqalpITlBUOUxiSEtDVzdxVTZwY1ZnYlgwWnlUcDJvWkFhdzJLSFJvNXdOdkFGMFBzNW8wak43MTgwVktNeDFvaFAwaF9Ja2FfbV82Mmg1NmhjbXhKYW1Vck1tMEw2aGdXOTc2Y0JBdzJ5YWpLamFPV3MyYlc1ejgtcGNIV2RJ?oc=5",
      "date": "2026-03-04"
    }
  ],
  "united states→ukraine": [
    {
      "title": "Here’s How Much Aid the United States Has Sent Ukraine",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5HelNkR0NFLWxjYno4Nlo3clRmU3NkYmZ6UFMzN3M1eHZQMUxIdGdYSTZHWW5Ba3pPQ0ZldGZWaHAzQkpxZEpFN2hEb3JvZmtfSkNIMWNHX0tla1VxdHNKVzVJWHRNLUJfSHc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "NATO summit dashes Putin’s hopes of outlasting the West in Ukraine",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQkNxUTdPdTl2ZlJPLWQxTTEzdXNjenk3SnNWYTltcENhNWZJNm5VSVZFSDlteFlDOUlWRUVZRF9vOUFEN0xZOE82NnE0TWdnTWJpdHJNdmI3QkhwMkw0TjZXeU1jR3Y5dFBSUWk0bWFXTjl5Qjl6X29NZm5QZTdaRkxIMlB6bkFMTnhkemhRVUdDem1nRmtOb21LNUtoMFhNMkllZjhmME9YdG9hcE9Jd1JWWUxmNGRE?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Trump Says He Will Grant Ukraine the License to Make Patriot Missiles, a Key Demand",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNY041azNvQmo1QXFiTEl2Z0t3N0hpLUU1OHpIa3UzLVhmMnFOQ1JWY0hxVWJyYU5kV1hvRnB0OU1iYTRzeTN1R256UjNfTVpQbkpDSldaRzlhQjJBTkhxRWJTNEJ6Z2FBQ3lWVjE0SERZVVlfLVc1R3Izc19UU3YtRkF3ZVJqVWM?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Russian Offensive Campaign Assessment, July 8, 2026",
      "source": "Institute for the Study of War",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQRmZodUd3UG1DeHl5ZEp1UTJYZkxJQXZtSk8xRU9mYVpLQ0JlQXc3VHFqVURIWTl6MTUzZU5QQ1k5R21TRFFSWnZudEdTN0VfN1BoQlh3V1JSZWFsdEhidDJJZ2hKMzNoR19nMkZiMlNpMV9jdFBQbFc2VF9maUZrcFNfdEN3OEthaDZsaWRBVHMwX0JBQjUwMjQ5Ul9rUXJiYVpPQkZn?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Trump says Ukraine to be allowed to make Patriot missile interceptors",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNUnZfNjg1eEdZNWlueERQYzhObG1hQ05BN3FNUVlvV1dYRk5uakl0SHFwNkVpTmluWGo2aGdHc29lWFhZNnBWUUVTSTc1MVgwWFZ4cmM5aThvQldlYzZyTktnRG9MRXdUdGI1ekhTLUhGNGJlak1xcFJnYkNRQlMzVm9iV043djdqQ0lyang5NkJ6eVJQUTJUbHFDUlJoWkU?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Ukraine to get ‘license’ for making Patriot interceptors, Trump pledges",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOWC1QNXoycXpJUkJRSFB2aDliczNERjc4T1ZTQWlMSEh0R25KZW50QVRnZ0lOaW5qekdzSVBUaEN4Ump2eVRCUkw3OThENXphRDd3b3E0SG9qWWR2ZWRsWnV5MmpvUkZDYjIzTEhDQmhMcVZ6UHVjTVA3Z2RDWE9mNm5KRlhBRW51WTlOSHlVeWVKNzV6UkRqZWJlbWFDN0E0SEdIc3YwVEEta0tXenNVYjJHaHNRdGo1M1IzTjFxcw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "President Donald Trump said that the United States will give a license to Ukraine for Patriot missiles as he said both Russia and Ukraine want to see the war settled. | via ANC 24/7 Link to full story in the comments section.",
      "source": "facebook.com",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPZ0pRX0NJWng0NmEtTWpndFhUZU93emJic0JhT1lMOEhoMjhOMEpjRnhJNVFtX2tXMFJKNU53aXo4NlpwM3oxYTJjY3VMRkhOLU1qOW55N0dob0I2THNrclBLRzJVMTMzamtOeWxtSTYtZ3E2enFYMnBSRHprTmNKdklGOXVjU3RzYTFjWi1LR0VIbUZnNFRQSlFlWXdZeWdZX0ZwRmJsSHNNeUxLXzF1VVZ4X19NQVV3VFdVUE9lNVFUYl9vMklkaEpaRDNraUpwbXpETjVJaw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Trump Tells Zelensky Ukraine Will Be Allowed to Manufacture Patriot Missile Interceptors",
      "source": "Time Magazine",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNWnp0M0RiTmctck5DM3hqYmkxTm9zMVpPSGFHQmhqYWUyek96WVlPUDBfRl9MakRYQXlGbXhkUUVCUTdqUUVGNXRBNHR3TmlFZDJMeGdjNUN4WV9FWkZYTThRZHYyR0VJQmJEbjMzaWROYzB2UmQtbmlmbl84TjVEU3praURGVFBmdDRpWTV3dEFURzhfMTllMzRBYVhEYW9tRUE?oc=5",
      "date": "2026-07-08"
    }
  ],
  "united states→japan": [
    {
      "title": "Air Self-Defense Force begins logistics cooperation with U.S. and Australia",
      "source": "The Japan Times",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE14aE9BYWdMWGRnX0JrUmVLOHhCYnlIZEYwejNic29vRHVwVjc5S29LV2pVUmJVbWowTU56dHpqNHdHSFo0LS0yRlBTbTFra2JZTFdfWUpVTWVhQUhrTWxCWXR5WUwtNTFNOERmcFN6cG5YYjcxNmRlUg?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Japan's Defense Transformation Is More Ambitious Than It Looks",
      "source": "JAPAN Forward",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE84MzFZNUYxQlVMaVJpdUUtRmM1QnhPU2IycG1RSTdvWXh1U1RNQ1lES3ZNSGZjQ2ZmYXRKRnUtZ3FaaXRqZFgwN1lpR2NwalNjYUJ0dWoyY3dqaDF0Z1c0RGFpekRmS1A4Q2JraS1XVUZUQ1JFNkpUeHRxWlNQZw?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "U.S. Navy, Japan Maritime Self-Defense Force Hold Strategic Dialogue > United States Navy > display-pressreleases",
      "source": "navy.mil",
      "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxNNHkxMkVOTW0yZlE5Z0loSC1vUWVTQkpXc2QyN2hTaUFOMXA2TE9RNG9IbEJGTVJxa3NDeGk1V0lWemxTeGYwYkU1TnJiY3N5dFlUcnFJR3pYekhDcS0tNC1FTmdCcFFOejdJcVRnWVp3LWdXVHRLRWVNVm1wZ2s3dTNPWnFSbVlmSjROWVdYMUFaelJYcU5CaHdhNy11cllvX3ktVlhhRnRsY3RnYXo3VlVlRkhMbDE3cndYRFlQSlo0OHI3NGpuNGNna0Q3aGgtM0ZPSktsSWtHdjJ1QlJCWkVQdDZjUWRK?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Japan Maritime Self-Defense Force personnel tour USS Theodore Roosevelt during RIMPAC 2026",
      "source": "DVIDS",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNUldXbmpRY0xlZWtCLXFJdUVObVZPTEE4b3lRZjNvdzZjekRKWTQ4YkFHOFBES2xqWUN0Q0lQWE9Va2FyVWJzZnhFOGVqYS1acUgxWFhWZ0F5cVdNaHlvZU5LaTNmcVl0eHBBZGdDeVhxR2cwMEdEYW1nbldjREV5OFZCM1BVMmVOOENKTG5OMzVubWxrY3hLa1VYMEJoendjVzJGc0NEM3JiMHVLQW9tQXc1RzBNSVVtVk81SUdUM1QyRVZxQ0hMWA?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Japan bets on arms exports for economic resilience and security",
      "source": "East Asia Forum",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPNTR1YnhrTjFWZTVZQjJtZHVnak1ZemdiV2o0c3BtRXpKWFY2dlU1S01STmJyTkhWWFRDV0pacjFhdjYydXY1Zi1GdXRpUU1uUkpRYzN5WmRuclV5d0piVnFNaEY4aVlPOU5TZW0wekQ0MjdiUkxMay12Z3ZxdW1EMTBvZUt0T0cxZkE4WEw5VXVGOTYxQ3VYT1lJbXRPZEZtcGdz?oc=5",
      "date": "2026-06-12"
    },
    {
      "title": "Rattled by Trump, US allies eye Japan's biggest arms opening since WW2",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOX3c0bjU1V2d3RG5Zc200MFpTQXQxUWkzak1VWHV5emVxUGs0RFZmdVNlbU1FX0Y4UnlrY2Z0NzE1WU1YdjAzN2l4TFh6U1FyRHBQZzMzWWRrMFFYVXZXX1JfY3hRblVfcnhlYnJocklUcmxmR05FYTA2elh0eGxiTjBfUmhHVDYxcy03QjBkNEtTb0lnVllVaTdoVml3eXRuRVhlV0thT2lUZHc0ekE2Y3FSZFJyZ1RYNnFpQzgxOEg?oc=5",
      "date": "2026-06-14"
    },
    {
      "title": "Strengthening the Front Line: Transforming the Japan Self-Defense Force for Twenty-First-Century Deterrence",
      "source": "Hudson Institute",
      "url": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxNLWZBakNfd3FOQTJxYlNuUHJHOG5Ed3VnYmFCVnpnOS15Ri1xS0lCMDN2cUtrU3JMUy1TSFZ3RDUyYjJKOFVscG9SVjZGUm1MSmswWUc0Qm1FVDZSWm9Na1pDZmplbEFESFNuTFdNQ1QwTEhYYXpYUU96M251bThwVDg4V0QxR3Exa1loT0NIc1JfeUJLMGo2WEQ5LVQ5RWFXUE9Xcl9LMS1ndkx4VFpqV2dIMFF2aXVmeWl4RXBOU2dod2tibzJENUIzd0FYeEFERmpYU090VDVLWXBWbWpZREhFaDZpMFcxelNnSlVGOFI5cTI5d1BHQ2o1V1NJU3BmNlhCelpjR28?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "India’s Modi Deepens Ties With Japan in ‘Uncertain Times’",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOT3FtczJkNE5KUkVZYmo5QVVrRUM1QWpxOC1ZOGJkdjBsVmhuZU5TaDVpeFR5RnpqLVRLeWZlUXMtdjdxeTlMUlIzM1BGaUVMa2l3MGJaZlNnRTQxLXlzbmlzSTZHZFRKWnNoMm5wcVpLa3ZiLXQ1ZTJnZTlORTZ6RFcwX09jUFdjWlEtaGMyUHBRM1ZNT1E?oc=5",
      "date": "2026-07-02"
    }
  ],
  "france→india": [
    {
      "title": "India Clears $40 Billion Defense Deal for US and French Jets",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNM1RQUHA5QkE5VFZ5NDRPSWQ4b2dCYUVGZnlmVE1qdDFqcThlQkNRdEdpOGZGek4zSEpXM1FaR0Zsd0FLOGUyUzNOUmFzT3VfOHdGMGkteTA2S1JNVF9sZnI0dFZiUXhUaHdNUHl3VnUzdjBhTVNYbmh0QWFJallfeGFnN1liQURKNV9GeTlDcjBEVmV4X3p2ZTVGaWpBRzVzNDlwUTdaM19TUkhEU0NN?oc=5",
      "date": "2026-02-12"
    },
    {
      "title": "India clears the way for landmark deal to acquire French Rafale jets",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPN2dVUHhWYmUtZDNRQWdKRDg5c3BTaEg5MnFSZVlrTmRkZXhvZ2c5bGJFb2lrTkx4dFFBV1VwdHZnUnVVejhlNVdDQlBmZTkyX2I3eXdCWHBfY1dCdmRrMDJVM3BzT3hPT1RqSy0wMGdja3c4clVLdXZiQmF2V29WUlo2RTlSVGNEVUNyYzBfMjczZFM3Tm9KT3F2VFdncU0zN3M2MnRtUUVxSFpud2VNMkxZR1NUNUIzaDMzcnpTSjRTUU14VERV?oc=5",
      "date": "2026-02-13"
    },
    {
      "title": "Amid India-Pakistan arms race, concerns grow for more frequent clashes",
      "source": "The Christian Science Monitor",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxON3J3VUFPcGJ5cDFvLVpuRVR2clBtVDRnUXV5djlNTmJRamM1cWdNVUYwUGYwX2lVTWo4azMzYnI2UTRDY0daZ0VueWhkSVlZdTRhWGpzVzhTUGRybWxPYUFVRGlvMUV4d0FXV016TEhmVWFvaVhKenIzem9odGwzMkFmSXEzajNRcFYtcklsNzY5cjIyVGVnRjMzc1lqX3PSAbgBQVVfeXFMTUhmSVc3UVQxQXQwSjBRWjRBN3pQQlRvZE5lb0FQcnhLbFg0TXkzR1BkN3NRRl9iR0N4anVacVpMazFDUWdhZDJQMzlmWDJZUUNjSVowTXpqVXhyNGx1eVNiaGpxZ1dTTDI1QXJ2R3BUOXhzQURjNzRyZFJIVGNvTkZTV3o1bHczXzU0c2NhaDBEQlVVVjVhWlZ4MzRRbk1abG5EU21aOUJCNDlfOHVOa0ZZZ3FmeXpBMg?oc=5",
      "date": "2026-05-30"
    },
    {
      "title": "France's Macron in India to boost Rafale deal talks, AI ties",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1xeVRWWFFLVnlwWGFiVTFXZ2Y2WXdISHFncE9ES1RqUlo2TG9kekhrYlBXaG1fWnNCYXR0SWx6Q2xJdE40T2FMWDZXVjFmcEJfd2ZlV2xpaTNrVC1sQmROSVN6LXQ2NTVkT2ZQRlF1bTVlLW5WQWlCV3pFUEJsWTjSAX9BVV95cUxOMmJzeUhKcU1LX0RMcGg1Sy1QTE5jMVl1STFVcVB4aER4cm41NVhJMFVqRXN1a0J2SnNKY1hzTFI5TGNDUU9XM2pXUzRBZFczWnljWWJjZndzR0hJZmI1SmZ4TWt0N2k4RHJ0Y3pjcXllTlFiWW1VUGdKbEU3Vkdv?oc=5",
      "date": "2026-02-17"
    },
    {
      "title": "EU says ready to sign defense and security pact with India",
      "source": "Courthouse News",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQejhzT1JVcHMtQ2JmZlNUODE5cm5GMzUwRlUwMXNNZFBPMkNRRDZfQ3hLUFZKRGxYOEc2ZllqUG5xdEM4Zm55LWhsOGk3MXRUQ2Q5TXhFeXBPbC1lRmFOR2xQRnRRUXd6YkdGY015WFM3ckdrZG1RUDNYMHltSmtwR2ppTDM2ekJ2LU9IalNVMVQ5aF95?oc=5",
      "date": "2026-01-21"
    },
    {
      "title": "India approves Rafale jet purchase in $40 billion defense package ahead of Macron visit",
      "source": "CNBC",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZklQX3dlSUpQVlg3dnpUWWIzV1oxbS1LRDMxOUVvT0pncHRVb0NqbEZrcFFTdEhaZEgzMURDVG1hNWxrSjEzX0VabE9QdWtjUV93VkxNWV80WW56UlRMTkhvbU1KVHNTcE94UEFJeUJNZUt5SkhKX0hGWjhCc0NRLXk4LWJYWTNSdTVRdkN3Q3pTUEw4Mm1NTHQxaHN0ZmwyZlBuSlBlRjFndWZIb1Jn0gG0AUFVX3lxTE1LU3NKVEN1UC1xVXNDMWdOM2E2SFBBczdaRXpaVlFrN0lCZHdzeFlWUFF5ekZzZllqMzBxbXRFN0hyZUtwMDR3Uy02Y3ZnTWloaGFMTEo3bkk5ZTdFYVVwVVNWOXBHbU43TFZ5Z1Z1eG9JVWFnUnlRekdlQWM3VjA4cFNmMmJ5bzY4LXdKLVUxZ2VSSEVqaWVaYXN2X2NJOVk0QzlDakpibzU0R053Ym5RY0U1aQ?oc=5",
      "date": "2026-02-12"
    },
    {
      "title": "Premeditated: 2025 global nuclear weapons spending - ICAN",
      "source": "ICAN - International Campaign to Abolish Nuclear Weapons",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBGb2NXR1Z5cVR6d3ZjSUJpMHZxcTVhNWgzcDdYZ3NKRDdUYWR6Ri1BZzdFcHlMQUpST0Q4YmIwcUdXZHJHMk9GYTJvNlZySjFlenlKWXYxZ2plb1k4T1JVUmd4YS1PZ2xmWDBtdF9RQVhNcWVITFJ1QTF4Zw?oc=5",
      "date": "2026-06-08"
    },
    {
      "title": "Indian government approves $39.75B worth of defense projects, including acquisition of Rafale jets",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPc015SUlUVWQ0QXN5Wjkyejd1bmdXdFM2WEIzeHZ5TFFhbmF2QmNIX09KREk2MWdVbUVRQmE1U0I1NlhfWHdjcGhHOGJWRUlyU0dLMjdFTEoyRk5ENFh6dEVkTmZzU1hPdmRXTS1mZXplSnVtZzdHUnh0c3BETnlSWXh3SFRpbHVUYjFMQ0Y0VU9HMTF1Z2VLVVhoV2d2b0ItblBPNTRjSng1bEc0NFB6VlhFdHRfMF9vVnZUUVM0bnVWTTN5YUJUeG00MmdMeVZQNVRHY0RrMTY?oc=5",
      "date": "2026-02-12"
    }
  ],
  "france→egypt": [
    {
      "title": "Macron says France will sell arms to Egypt irrespective of rights",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOS01XRUdZWE1yV0JOY0hoZDh2UTlSM19pMjBGTThpTXlIbjhBU3FjZWZSSlFOenZoQ1RuZzBacnRrZ3d5aTRhQVVYZ0NPcWxMQTJMTzlRTE5uTDhlM1hrTVk4WVR6b0Q4bmMwTFRhTDJSWEg2ZWFDWXc5aTNMN1BwNnQ3X0poWldLWkp0UUFHckFjcjhTbGlzNERVbDc?oc=5",
      "date": "2025-09-19"
    },
    {
      "title": "Why Macron’s Egypt Visit Matters: A Strategic Partnership Entering a New Phase",
      "source": "Egypt Today",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPb1FUZVJpdGZuaW9uSWNyQ0dtM3lzaVNaQjJuNFBXU0dTWTVILUdnWlA4YUVWSENwdnVtZUE5T0s1U1hEangyeHY2NHd3ZHU4Y1I1NTVvNEY1WVo2LVAyTDhRamZVV3RXYk5NcjRCOVFvbllLLWg2enFHdzBsZWNCeUtPdEdqdm5sQUpBcGF1OEhGTmJSWjdBMURKZDJ5LTVnTnRoWFdmQ2YwU2NRNlR3ZzBZbC14eHM1QVFB?oc=5",
      "date": "2026-05-08"
    },
    {
      "title": "US gives terrorist designation to Muslim Brotherhood in Egypt, Lebanon, Jordan",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQdk5hVm45UUwxdnl3Tnk4dkY4QnBUb0ZjbU9CYjA1T1FlcmFTSmFwY3JOZ3hBV29pRWlXQV9mOGdYLWxuZkY3U2ZDTml3djZQanQ0RGxDV1ZqU3lObGlBUEVFWk1MOFV2YS1ZaktrbW5IVXQzaWs1NHRrd0FOd3JvUHpRWE0yMlR0WjltNHRHdnQyNjlRUlp1ME1iUXF6anFsSzA1TnF4TUpuYVMyX01GZXZ5V1c4UEdsWUtaN21aTQ?oc=5",
      "date": "2026-01-13"
    },
    {
      "title": "Thales, AIO Team Up to Accelerate Egypt’s Defense Tech Sovereignty",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9ZYlFNYnFLejVtR1N1eG8wMGJJdllPZUREX212TmJET0dia0o4eUF6TlhJd1FpTlVScVc0U2xyN2xLWG8zWWl4a192cmJxNS1manFpbWF6dGtDa0tCRjdZT08xTWlQRGhuYTdfTFl5dHhCd9IBd0FVX3lxTFBPRG1Vd2xEVG1qV2U1VThpRGNQSjhRQlVwZkg3b0wxeFF0R2RHc09heFRpNXV5NzBvQ0lIdW50YU5uMW1Xb0dlUHJXWGlUR1dWZ1FBck9WTUdndUxQU29GZE9SNW9rVjJyTUR2Q3dIYVhaMkcwcXdN?oc=5",
      "date": "2025-12-05"
    },
    {
      "title": "Morocco overtakes Algeria and Egypt as Africa’s largest arms buyer after major US and Israel weapons deals",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOSE1Oc2YwRFFiSXZ6UVVQeE5CT0x0UGxBMG9zTDVNRU5VVzZHcHQ3cUhjWlZXRUdRbGJYSVlRcGt6UzQ0Y1hodWRhdjZFemZsQUFnWkRpXzktbzdJZWlsWktlNk02aGNONjBsZUV1SVcwaFNhWDNKZXdGMFkxbjN0YUllQzFsNDJ6V2R1c2dtYmE5ckowMnFRN2EwSnc3N2UwbXRISGNpYnVkREZ0QW5nT1V3My1iSXFicVF1OVhINXRzRWNyVFdjUDRYV0hnX1ZraHN6Qg?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "How French arms were used to crush dissent in Egypt",
      "source": "Amnesty International",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNRktXYzl2SlE3T0p0TGlMQ3J1WXgyTEN3d1RMRVpKRjNIWmFBVm9iSFp2MWtLMXgtZGRubWtzaFFhVHo5STh3RTZFSWhPYzBsanlRZkZkTWFCMHFLMGN5ek93djNqVjR6ZURPWm1leWNCNjdHNmdtRHMxRVh6RnBxbUpDOE9yV2puOGpjc2QxTHNHUjhjOGJjQUQzNTNZRW5WaHhnQ1llM3dGUEJYMmJyWHhKNUNVZWpsdFJIUURVR1VILTZ4MVJ4bzM4Qnd4aDRSdmh1ZHloRjN3QVZHSHFXelhOTQ?oc=5",
      "date": "2018-10-16"
    },
    {
      "title": "France's Macron defends arms sales to Egypt",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQQUlIRjZKQl9wdHhmNjhvQzBIb2JHREdKVHQwRm1LLXU4clhTNlo0Y19PbW00RVhwUGlkS19wV21wbkFaRHVEZkdDOUl1bG1HdW9SM1pBSF9ORWdtQ3BwUlF3ZW1VRlBxWDlhLVJqZHhtWTR5TWhIa1pUTXM1U21KaC1HUnJ4bkM0d1R4UGVnb2RBM1pseFVGV1hzVXFHR2l30gGgAUFVX3lxTFA0ZkQxSk9vczJqRHZEV05fNktNUW5tbE1VT0VxMGVrd0R1RlZHQTQ3dHRHNzI5aTZlX1ZVeHc5OGhrY3ROb092alBFclVqcENUdGxnMUxwaFE4b1M3Ykk5SFJpVkFuSzNFNGx0TWpBbFBjTVFXVUhZNUhTUjJobERFeVp1djJFMTRkMGJUTkpsS2MtZ2pjdDAwT1Z6OHA0SUg?oc=5",
      "date": "2020-12-07"
    },
    {
      "title": "Egypt Receives More Rafales from Dassault",
      "source": "The Aviationist",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9id1V1N095a01MMmN1TkZITzZXRHhUa3ZNSEtsSklVckZpamJaRDY3MFdxd2JOZlNZVDlzSU15RHdiMEttdnA2UUdDc2VhRXN0X0dQWHRDODNiNTA1aGN3cjE0OGFaaHA3?oc=5",
      "date": "2025-11-28"
    }
  ],
  "france→greece": [
    {
      "title": "France Softens Stance on SAMP/T Missile Defense Sale to Türkiye",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPYnlDSVpvTUtfc0JLcC1lSzQ0QU90QTRqNlN3VmIySHhjVXAxbUkwT2RLNlF2bDQ1Y3VPX3FiZlFwNzJNam5PTHpfQ1UtN2NEUy04Y1VMZm5GakY4Tl81enBpVWVSVC1UaXNCYU1wWWZPTDU1TVcwdGlzTGM3SF9WcjdTa1BtejFIQXE5ZnV0Y1JwblV3QTh6QTJ0QQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Leaders of France and Greece say the EU's defense splurge is no alternative to the NATO alliance",
      "source": "AP News",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOUVNDUzNhUXhxZDhXMF9ubHZBZjJLZmo0ano4TTVKYUdOUmdsYVN4bGNHeDBIUjl2OThqT0pBelExbkhyaWlGdklIekVQcmlsQ2tWZTkxVUlBZVpGTFVpZUQ3TDlMZlVBUmZBMkl5VVlOR0FlSndqWTlxZnV6eU8wZlBaRVZ2TFdrYjh6Y0NxcnJ6Wk5jaUdobXp2ZkVFV1JJWGlaVQ?oc=5",
      "date": "2026-04-25"
    },
    {
      "title": "France and Greece Further Strengthen Mutual Defense Ties",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5iYUVnTWozdlRkdE00Zzg3VlJBNXlSUVdVcXJ1UWRSZzZhakZKUGgzbXRlZ0FYX1B0QkdYTlQ2cm9KbkFSNjFnbE4xOTVaQU5EbmtMSjNRUGpZZWdoMXhyWm5SWW5FRVlRVE15Vnd0bmYyVl9QcUHSAXtBVV95cUxPVmVEbEthQmd5bWtxOENwZTBsQU5sMjgwS2Q1Tks2N01oQWNOMk9sMVVQMmZxbzN5RVNPNXZwdVB0empWQ2xYRWhOZjJ5ME9fTmI2NTYzY1BCY2RSZ3hLbk9pbzBKZFpYYTFGcHNYUHZ5Ujg3SXV4Y0l3elU?oc=5",
      "date": "2026-04-27"
    },
    {
      "title": "Turkey slams France-Cyprus military pact as East Med rivalries deepen",
      "source": "Al-Monitor",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQTXp1cF9vRXM3REh3emJKcDRVaVFiblpsM2ZaVG01Y3J1Y1dFUWpsdURMTGNHaHBrOGo4bmNxS09CRTFLQ2RnRlVYMWJ6OXFvMnFCSjg1Uk9SWUtIYXJ6QlphRFZHdXhabE1PR2szQldnVXNISDY4LWswZ2N4TDczdzAyUHRSZ2xUVFRiU0ZqUjlZZ0k0c1NlSWlaT0NwUlBxR2pRS1ZXY25vbG1PM1FOSA?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "France eases opposition to Turkish SAMP/T air defense acquisition, sources say",
      "source": "Harici",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPeTRPV3BZMWRDREZJT2pKSmhNa00zekQwMW1pelZ1RmpJeUJSd3FVNU9Vamh1bFpPVFVlajRwNGZRdjdEZG1QZVZYVE1zSmhuYWpFUUtWZTVKUlJ0WWVPWVRURDNLV2JJOVNrVXJmUEVSRGJVWm5scHNnOFRkZTNNeTU5ZkRfUVBmUlRhVDUtS2VVdGZzZVF6YUE5SlY4NlNUM1FuY1hB0gGmAUFVX3lxTE95NE9XcFkxZENERklPakpKaE1rTTN6RDAxbWl6VnVGakl5QlJ3cVU1T1VqaHVsWk9UVWVqNHA0ZlF2N0RkbVBlVlhUTXNKaG5hakVRS1ZlNUpSUnRZZU9ZVFREM0tXYkk5U2tVcmZQRVJEYlVabmxwc2c4VGRlM015NTlmRF9RUGZSVGFUNS1LZVV0ZnNlUXphQTlKVjg2U1QzUW5jWEE?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Greece-France-Alliance 2.0: A new deal is here",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNblBydmh0UkFGTGpXX0lDNkN3T2t0c1JzLXNIYlI0M1NIcE9RVjJPWHN4SGJkRldmdkY3S2pienc0LUpadlFDWnZfTEs2Wk9PaWpqbElpN3dSZmI2U3lqMlFwX1pha1FLeDhkdTczSnlCNjA3WjhFZkNDMlAxSHNFU3djeHY?oc=5",
      "date": "2026-04-26"
    },
    {
      "title": "Greece Joins Türkiye, Cyprus, France, European Union, NATO, Eastern Mediterranean Nations as Maritime Security Tensions Reshape Regional Travel, Cruise Routes, Energy Connectivity, and Tourism Outlook",
      "source": "Travel And Tour World",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5Ic0hYWjBjd1EyS2hxRmI3V3paVFRFc2M1X0JCcmlHQ19zTkowbzRRdmQ4S1VNR3ZGZzg0NGJnNGZDOHJYcVNfOUtfMmpTY3R2NTd4OENjSUtfSm8zN1dnZkphNVFzUmZJMmhMT0lB?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "France and Greece to Renew Defense Pact and Broaden Cooperation",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNSzd6b0VoYXhDbG8tUU90a25tS3FHVXhZUjhtTUxWZjNkNFhzeU5hQjRfdnAyRmpvb3VZZFFBMVdBeWZURWZxM25jYTBnYmJ3aElxejR2VXhhdk1PdEFYZVQxNlNnYzlpdDNZcG5wUVdJSDFHQU9tc2NXQ0lucVdmMXlITVpXNkxlTjZobFU4c3l1bU5mQktUb0dRNzlQZ1lURW9JZDNEXzRzZ0xYb3hlMmJHZkY?oc=5",
      "date": "2026-04-17"
    }
  ],
  "russia→india": [
    {
      "title": "BrahMos Advances West: The UAE, Russia, and the Next Phase of India’s Defense Export",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNck1uNV9Td25qdnJodFpvVng3ZkdHSXZ2bUY3c1hlTWhyM1JRcUdIX3gyNVIzQTNfeGpWSEU0bFRnd2Jma3RtV29QVWxLakVWNUVzUU81ZDlDYkZZa1RFajB5VmMzeUVQUlJ1Sldaa0t6MnQ4MkFDQldJLVUzTXlFa2pHbGRBYUlCckpxaDdhYWxzaTlPN29HSG4tckloTE10SGoycDJpWW9wdDZlVmpvanhTNA?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Why India Will Stick with America",
      "source": "War on the Rocks",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE0xMXBFdlAybU5rMWZIUjRxVFkxR1NpazJwRE9PS2N2ekdpTDBvUjVEZVBjdkRVTjlZOGtxUm1ZTHV3VUNTQUJ3bmxUQTBvVE1naXRPQjctOTQxM0tQdV85VkxKWFR4dlJibU45Mw?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "UK sanctions Russian scientists over Novichok and Epibatidine research",
      "source": "India Today",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNMHJPTzdIV1dHcmx4b0tYZ2hqVjdubmt6OXlWRXd3SzlYYjBXMDZVck5KSDlBNTFGWGVnVnczY0w3NV9PMUZCODhuQjFTaE1GN3FmWENNV0Y1SVk5dmQ5emlsOHhIQkNOTEtLck9hNjVRV2hjYnp0X3NkREhpLW1GeEtVM2lzUmJZWWlUY0hBcjlOeEJTVGtjR1ljSFZyYUpVVFJNMENGcFg4RTJjTGNaY2pYNHVDeWFielM0WnhVQm5WYXPSAcgBQVVfeXFMT0FxOThQYWhhaXRGYnp3NnNGck12WXhXVTloS2tBQ3RGYmg4TWh0eVQ4cERKc1EwcmgwaW1TdmdzSEZXZXZ4aHZ4TmxaajB4VU0wVWZIQU9wcDczOTJPa3NaZ194bzdodW8xTGJQUGxseHBiMElnRGt2UVdCNG4wbnRoaEZGWE5kdTlSbk4xeDB2OXB2ZWFYQS1FMGhKc09sb0pvNmZQSkFUaWFySnkwdHlyclpoZmlVMkxTczV1WnJEanJFMnVENDk?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Nuclear Weapons 'Only' Guarantee Against Global War: Russia",
      "source": "NDTV",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPcUJWckZJZEVZd2V6ak1FVktyR09SQjhDTXgyUXFJWDJjaGNueU8tUXRWaGliY1NyMHd0TnVySzYyQzVTUUloSnlrRGhRdklBcVZjVWhZNkFXWkh2cTJVVFVOZXd5WUtld1drVTRWRjVfbWJHdzd5WXdkczB0b3hXVmxoRnlOTF9TdnBPaGxIOG1hN3I3cEVwR2FtemtGZ9IBpgFBVV95cUxNMi1FUC1IaTY5TXZiWm5jR0xuMnJKTkc1d1pqVkM4OWEtTnVoeVV6MlYyNmpkaWRRQnBseXlocEdZY2hEV290Sk5kbUZwdU1NSERaaTFZTkQzQnY1MlF1am9LU2xoWEg5RnA5UnR2R3M4eHZ0aXpndEYwUHFHdVotS2pUS1IyREx2MzIzb19JMnZvNTdoRWhnYm5JMUNUbXJ3ZzAxSFpn?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "Could Russian missiles help India counter its arch-rival’s Chinese weapons?",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPcVRyNDFQaUZYeGJtb2FmZmlzTVUwZ3EwUUt4VTc2VG9SdlkxM0YwUk9kUlBPdC1QSmZ1OHVQYWJ6dU8yZ2dSNjFILTVvSWFqbzZNNjBBU1p0S1NpVWlLRVpYRy10Rk9fSHJuOVVGaExDVWxIQWJ4VVBtcmNxWDdjZnlYR1Q4YkNqTDhya0VNei0waW9pUFpNcVJzQkt5UzFLeXUzS0JvZzZIVGNZMDhCZU9udnlVTFUwWktjYU13SnZJcDE3c1VGN3Vn0gHKAUFVX3lxTE4yNmpOcDZFc0N5S05kY0JOTE5Gb0JIdmhrT0R4RXR3dXl3V3BGaEVUVVd1dm5mVVdhME5oQnNYN0JxOVUxMXZ0dHJsdHgwQVN1RmNOZFRVNGNoX3k2QmVtMkJNS1lxOUFNQjFaVGY1cUt2WkFHaUc0WUxhY1RCRkk4Ml80UEpoZ01LWUFrVHRZaDZfMEFqTUNGRnhKa09vXzEydEU2Umtkd3A5alU0LS13QVpYSlB1aUIyS2FsQl9lbnlDV1FMMU9PS3c?oc=5",
      "date": "2026-04-26"
    },
    {
      "title": "Putin offers Su-57 to India as New Delhi faces stealth fighter gap",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNMEVEZzl4NVhaVFhoWUZ5RFZhQnc3YURXRDlmb0NqQ0JITmZUd0FyRHMtd1hNaEZxS0x3UWZxUkFSUFBlVk1sWmlBN2V0SGVtVWJLVDNna1RxcXgyV2FDZmFqZU1GS2I3QnE0WGl3dlcxNUt1SmNLTW93QUxYYkttcHZEWi1WOUhrTFZSME44NE42dXN3cVloaWRlRzdFRTcwLXlzRnVlX2FZU2JjZUoxWnhlWVdXTDY4YlBUaGJlclMxZWFI?oc=5",
      "date": "2026-06-09"
    },
    {
      "title": "Russia Sends India Fourth S-400 Squadron After Three Year Delay on Defense Deal",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNa1VmN3JJUHBWaGo5SmR0dFB6Vnh5cl9qZjlqV2d2TU53Zkw4THlpeUVoVXhmMEpVVG9UTnN2SkFnTC01M3ZPTkNvMkx2VjFQT1BiZ1NSZHo2SDV6bHA3ckJzMlBFcWg2TmRGWUplTTB3R2hyZ25JODFOV0t6QWx0cDdBWVRTdXVDekh1ZFZvekNkZndUNnFUdF9ORnlqbmZ4Q3hxblpjeFJwWmRFQ18yMHVLaC1hNVRs?oc=5",
      "date": "2026-06-05"
    },
    {
      "title": "Russian troops, warships in India soon? Why their new military pact matters",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPZTJaNU5CR2RZOVNUb29YaUZZSGdKV0JIWWpxYkdGUEVBYi00d1V5dWtlcXM1QzBnM3pHcVJJNW05aEJPQnBaWWc4WHBCSWxldUdBcUpvdkl1S0NiVnZUaEpNS19jSjFNSUs0OE9vbFViN2h2UUN3RmR3NUo2RVhGWmZVdGR5a3Fvblp3MDY1eTdKZ1Y1aVh1dGRTSHp1RE8wR0ZpN3RZOG5ZLVdzanJFVWc5S2FNSXlyUGfSAb8BQVVfeXFMTjVYdEp1MlNfdm50T1c1Y2JjWDZ6WEdLRnJhUTBsOC1mU2g5aVI3M2tVazRtLTl1Yy1CV0hzVm9ERTh6MHRmV244dzZsUDE0THA1VzFXeTczUWc1SUk4aDNlcFNBaFlsbklvdkFjZHF0OGxVb3hXNFY3X0xkVHFqVHlqZ2FUQTU1ZGs0eGh4LWwtVmNDaVlYclIyTEV2Z2w0WnZicTRObnotTEJ0dlFETm5Dal9WZjE1RW9BcmRCQUU?oc=5",
      "date": "2026-04-24"
    }
  ],
  "russia→china": [
    {
      "title": "China Again Warns Russia Not to Use Nuclear Arms Against Ukraine",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQbUNPLVJvNVlWZ0x5TW44YkZoeUhrajF6THIxZDhiWVdJWDVIU1pfRjVxODV4bURkX05KTW5MWTNiblM4bDFld29NQ2o4S0dzUkVHUGZ0eExvb0pYcUFVQldpR0tVbUw1QmNLM2dIVzJtUlF6NUpQOXJMT0k3SjB0My1xYWNJQ1dEbzNQWTFua05LN2Y5X21iLVk3dUtaODN2ZDdzWTBFOUxEbUVKTExNVllROFZydw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Zelenskyy: China urged Putin not to use nuclear weapons in Ukraine",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNVzZnTHZPbml3OFhUNkhsdWV1cEpmTWZXcFBUN1YyckFiYXQ5QW9ldGcwNUw5Rm84OVB3LXpTOFNvcE50SkRPNnFZSVZ0VWVaa0N0SmYtR2plUmRQWFRoWmNlWDNHNDN6ZFdYMWpfdGdDSGUyTGxkdlRqX3lBcjB3NTlQM042SXUtZ3luTEdQYm1SclZ1TGJOa0JuaFdCbHpDYllsQWFWTmdLZ0h5NHJubzFZMjc?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Leaked Documents Reveal Possible Secret Russia-China Military Plan to Disable Starlink",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPWkJWRjV3b1UteXhnYWtCeGsta3FPeXB2eGI0cm5JVWk2LTZydXVJOElKTkU5T3Nvakp4eXlpSW1wM3lCdGdiUjY4TFhwSnNrN2RwZGk5OEZ3RFJXemJOWEE0dTc0d2dXYXpLbncyVF93ZGpyUFVWanJ3UW5PR2d6XzRNNEpvZ0VySnU4TXk0RlBMVFVRRFh4WEFYN1BsWFRWN3NIOVhyR1M5QTA3NEsxa3RCQnBrTk1qeXNTV3RGNGVpZw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Nato launches defence projects to counter Russia and China",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPN3BxVWNXbDNQeE5NOWNaTDlHRkZpeDFqZFBkRENEcjlwS3NYNGY3TEpwdno5V1JoX3VhMWFodkpHVkZJbWZzUTJTX0pNNk1SV05UZUxQRlVXLXZ2TU1HQ0g1V2JWaGFkMkV5ZHVYdXlMa002QnhKeEFiYkppelVWSC1rcEhPeDg1ZUxaUF9LMHRrQ2dGMnI1X09YcFl3ci0wTFHSAaIBQVVfeXFMTWFFNTlWMDBFbG82WWNLcjV2NEVLSlc5V1U3a0J1elZmQWl2UUJ5Y1ozZUwwUEJsaDd3VVJ1XzV2U2o3b05MZHdaamtTSjZ5enhLLVZMVm9IQkIyQkdQd0dpWmh3NVQ4NjN1eEdiRmxRVHJvNUdhVUFkclN5YnpacVdKa1dCQnNsQ2ktZ1czTWNkYUM2TXZuUFo1dC1MTEFIUXd3?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "China ‘gave Putin ultimatum’ not to use nuclear weapons in Ukraine",
      "source": "The Independent",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOMEhSYWV6Q3lmUV9yOURVakY3VVN4WkVSaUlnQTNCNUNHcGh6LVNocUt3S1doczV5TU51OVlkSnU2bGJidFIwakdUYzJ5aEZsUVlnOUpOTlJYNUtsdEJjSnI1Y0pxZzVWTDRVMzV5d3VmdFRmU25NSXBTZUxUN2pSbTBnUjJ4N2htWGdCNGx2TWVSVG9rcS1rckVyc2dqRkJpekE?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "China warns Russia against considering nuclear weapons in Ukraine, reshuffling geopolitical risk calculus",
      "source": "Crypto Briefing",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBSdDlfNXpvcThYaXp5bWZRdGl3LWtIN0N4OE5faEJPT0lELTlkNjlwcnd6Tk9KdnJ5MXBYUFV2alVWdTNtUzFSbndVeVRjNGlPNHVSZHgyWkxVMmliZy1MdEpFeVpUdW5ISkRDcUZ2UDBfZlVyNUJhYVR3?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "China Tests Submarine-launched Ballistic Missile, Kicks Off Annual Exercise With Russia",
      "source": "USNI News",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNRnlGLS1BV2xtYUhnNUdpX3lFVlFhRUZ3R051dzlIcHM0dEFSd09ZZzdOd044Z0E5OGh5ak1xbXg4elZmNG9vQmkwOHhnSjZIc20tSmUyS29ObVItdF83Q1NmV1Z0YnhHRFRZR1UyeHhnM3RNaVJ2MTB6OHZzWEhSY1Mwc1RIWW5tdWY5ckpOZ1laV2lGY1d5OGFydWVKa1kwTjhWc04xN0Q5VDFENUFkTVpEam9icWpkY2dz?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Shooting Starlink: The “no limits” partnership between Russia and China is taking aim at Elon Musk",
      "source": "theins.press",
      "url": "https://news.google.com/rss/articles/CBMiSkFVX3lxTFBBNUc0bkRpdGZzaUZBa2ZwTGVqUkI0WDNMaTFLSmdIM0FEalJmeHFLT1hMV0pXWHVEcmtmSW5wNmVRdFVFRHdIZFJR?oc=5",
      "date": "2026-07-09"
    }
  ],
  "russia→belarus": [
    {
      "title": "On the Ground Along NATO’s Eastern Flank — as Russia Threatens",
      "source": "Politico",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxORlB5V3V0T0ltc3NrTHJlc2N5QkVfWGJ0aFNSNWI1QWkxUWNoM0d1NnNFdXBtbnV2dkIyekhoQUQtYlE2YXpzOUZlRmR6VXZwNDNBV1BhQ1dNX2JyQ1NqX05sbndVbG5hUXVhTkktM0ZJMXJXeVkzWHBTY1JyUVVtVnZSTlExNmVFU25sdm9jOHJzU3QteXFyX0xCemsyTkE?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "Blunting the Belarusian blade: The growing threat Belarus poses to European security",
      "source": "European Union Institute for Security Studies |",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPLVZ6eDItZnlpT0JfT2VpTHM3STdpeTgtbzBKV3FHb1ZobVhTQmlBalYzeHVhSkJQNTFzRTY0WEJ1QlN5c1JkbWxIbUJCUEQzR0QxSEQ2LXQ2M2FZcW9DSHlYdWlJZmdGd3VURzRZRi04amlWNzZEcmRaR0xTMVRNNUtNQ3FNT3lPbDVqT2tTMVgwM19oTm5fVUIwYzJhd2pmMnRPd2R0TUMxakdPRWtFLVBlNlBlVUJOclE?oc=5",
      "date": "2026-06-23"
    },
    {
      "title": "Belarus is quietly preparing to play a larger role in Russia’s Ukraine war",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPM1R1bUpqcEhFMmZpNUVzaW1iWXY3ZU9xTGVHdXhOTHhDMkV1RXBrYVhvUGhCeXVtUkVPOHoyUkJEMVhuVzh0aUVYQmNpX3F6Qm90c1l3Wm9aMXk5NHRaei1lc2x2bFFsanJ5NW5HSnZiWElYdjFrNzBFZnNtNTVHdUtudkxra25yS1hjOHc2OXV1OUZUeEMxb3dzT0dCQXNDdk14Z1hyaVRKVlo0enhzQXZTMVlRWkNPYURLSEp4NE10d3c?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Nuclear Integration With Russia Eroding Belarusian Sovereignty",
      "source": "Substack",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5XcE1EazJDbzVPX2hyeG4zcDRDdWRYMGtGbjBpazdnV0ctQzVKNUxQNzRiaUNhYzlCVXhSU294c2tKMUJXVDd6R3BELVBnYUJRaEh3a2RRQmZvTmVIbmpNT0dwZjU4MDVucUFjcmFzUTQ4MWtnLVVlSlRPMHQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Russia and Belarus Held Major Nuclear Drill",
      "source": "The Jamestown Foundation",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBJZmxyX0dYYlZOMzcwRURmSFhza3JNMzlIS3pHdVRVRW1EUmtKb09KaWJaejVDQlgyNkJfd2JaRGhPRDJNVkZQNkxUZGFmSWhRT01WVHFpb1lDLTJuS2Qtb3R3Ul9NOWVHVzkyRV8zazVGSWgz?oc=5",
      "date": "2026-06-30"
    },
    {
      "title": "Russia Eyes Broader Belarus Role in Ukraine War: Report",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1xb3dvNTJ1QURUUjNBS0EyT1JITjlXdGp1LU1FdnBxNEs3VEhwd1RZcUJQMWpfVVNPbHEtZTFNTUYtQ09YUnFoS2JTT3B3cnIzMUFPWmV5XzZMRlZyaFpvYTUyNzVObkdWNFo4OVlYU09FVmRtSEZQTWxB0gF_QVVfeXFMTzFDdGNPNUxDWk1wSEpNMkZZSUlqSl9RNHJBQTZLWnFqaUxQWWZmY0Jfd1dYbVd5VTc2UGMyZGdGVmVnWWcyTlJhNHh3RFRrOXdNRTkyTU9Ya2Q0VWc3b2tWaHlZbG5fdjczUEExc2dycnlyVWo2c2c0dUJOSTRqYw?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Belarus makes millions from weapons sales to Russia: report",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNS2xOOFdxLWp4RW1ndWhBZXk2VkRaTmRYRWhEc3RqODA1UGVRblQtS1JXVGpKSVFOYnVXRzNEUTRWamowVXNWeV9fdHNoWW5kREpfbXUwVVE4dklHLW83bmlwZXNId2hQdVZlMlBBZTFZd012U00zN3pLOG5CVlBRejRJRlpRdHItSEE?oc=5",
      "date": "2026-06-14"
    },
    {
      "title": "Ukraine says Russia stripped Belarus of key military assets",
      "source": "MSN",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxORjQ2eFA3eVA3UmZmQW5qVXhidWZYbWFuYjA4bmxiYlFBN3B4M3JYT25QV3RCVGNjcjRBeDdBT0ZMaVBpSEtrTElBdHJ5ZkZTRlRhWGloNXc1MTE1MDVxajRnRDd6VEVYMUw2NjNYc19LbE8yUko0bEN5bUZIakpPemQzTDJOMTFWRzl3NW9fNTVpbWh0d05WSk5FaDZCSWFSZU5VZFotOGZsODZLQy02dXNpSTc1SUJILVBydGZUcHU0a3c2VVhlenFsbV9lc3BRS2RaTlhMSUxFVnFuOU1pdy0zUQ?oc=5",
      "date": "2026-07-01"
    }
  ],
  "germany→ukraine": [
    {
      "title": "Germany Launches Production of Gereon UGVs With First Units Bound for Ukraine",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOM1pfam9XRHQtZW9PMmVPdTVudFRpZGJfaXBjMmYyeXFfcklIOFlFRmNXelRUZzlHRTgxNl9YN2ZlZlNyTmRaZWlHWFpkc3JTRW9vQ2V6WnJLYk1WbjlleEFEdnhOSnRPVnhMbW40Z0VuUnZOTjFQUFdCUE9WWmx6MEV5YmRraU5yRmp5MHdvN1RfNjNFNk8ycnZjN2V6T1RURWZIdTB0SU9xWTN6UERsNTBfU3NLYlhmcGFsV3NxTQ?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Ukraine Remade Air Defense, but Russia Has Changed Its Attacks",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQaWFObGlMZVd0Zl9SMWYzaUtpRnZOLUpybVlrZEdEVHN4S3I3RklpelNRQkh5blUxcEhZUkk1ZURZUnB2aXRvQ1VHczAtRHV4MG1WdEZNVkdsdEJBS3dac2czd09lMW9ScEJpZ090dVl4RnowT19WSk9wbVJmdlg1RXNUeFQ0ZnV5cWVueVVWbXc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Germany Says Ukraine No Longer Needs Taurus Missiles",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBrZENlVURTWjFMTlJ5amFRak8wSXpZOFBNQ2N1N3I3djVLNUtZMmJLYnBxeXJSVlkxek10Zkl5UjR6WXhEWUNZUUhGcw?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "Germany Begins Serial Production of GEREON Ground Drones for Ukraine",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5kWnFIVDBLdjRfanc0MFRlQWM1bHVtaHZiNkhycXJkNXQzVlpIbWttbXkyekt6cmJobHNGSHFBV1lGZ0ZQX2JMVFNFRThzcGtsSndvT2MtN3JObVFuUTdyWjlIdXM4U2cybW1aNnZR0gFzQVVfeXFMUGdvcnJVUWhYTXFRZF9SaFRBRnRTQXRwVEZpZkxCTTVHY3VCVjhITXY3SjlJbVlPMldEakJMUXg4bnNvRjZyWUdQS2dJRndKbnVoZFR4c1luWlNoNUlORGpuQldtSkd1RzNUMUF3NnVVOUIyTQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "The President of Ukraine and the Chancellor of Germany Discussed the Potential Delivery of Additional Anti-Ballistic Missiles",
      "source": "Офіційне інтернет-представництво Президента України",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPTGtLTXhiZjV1NUlidExQSjRJRVVLSnIwLVBDbWFOM0tjQl9zbWdkbTVjcHJTY3FGLW5TZWlubE05VlBBT0h6TXVwYmVpZmI4UkR1TTJTXzh0dUk2bUhqQTlmT1YwNVpaWDROODN2LWQ5d2ZjQ1gtcmx3b0k4WEFiVWNKYTZubzZEUTJmeXBjR1lvVDZsaTd6cWhkVXd5Wmt2X1BNNjhpNA?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Germany to Co-Produce Ukraine's Bars Missile Drone, the Same Long-Range Weapon Used in Strikes on Moscow",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxPaFlUNFZGR25fSF9hNzFIN2hlQUxxaEptbWxSdEFqRFR0ZTZ5YVV0YmExbTFNWXp5dWZkM3pyR2VFRHhzM3IwbDA1clBZUE9tb2xOdjlmOFJrRnRLZXhZRXV5TUxyMzdheVA5a0YyV0NCa28wNGNZT2J3LWZMMV9VZXlLYWRLX3dUalRDN2hOUjEzNWtqMHFsOTNoNzl4Ui1HSHYyanBHOWNVeFFjVmZlVHBxU1k0SW15aWJlWWZLTEdLN2NpUmtGbXFpN3o2OU9yU2FrQVJmMmtjWDkwbS1RZHRxV0ZzS1JPb09v?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "DEUTZ and ARX Robotics to produce GEREON ground drones for Ukraine",
      "source": "The New Voice of Ukraine",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQbHJIWF9nRGF0Z3ZpWkRSODZTYjV3cXBYaW1iUzdKY2VYdThvQzAzbmZyaWg2WWJQd3g5UVBURHVEVFRQbVdFNHNjY1lsRTJlRWpoSE1ySjhCY010SlUxZ2pvVE5OY19zZnlkNmRySUtqWl9MU1VGTFpLNlRJTmQ2cE1qVDRid0lsWG1Ub1FKZUI0N2VEMXREZm9BZDI2a2xHQ19uZjZEcVlyOWZzNlhCNFlVYUJhNVRFbjFN0gG3AUFVX3lxTE9aRzBUN0V1NnQzWHRlal9SaGJWbGFlaG9zN3lreXdyaS1LRVhDNlMxc2FJM3RRYlpzTnpxaGotbUd3U19GMHl5WkZ5eFlSQU9rSHdjb0tUWlJoNTVyOWNpaVplWlNmVTEyclB3dWFtVlVVaEVobGM2VHBkbEx2MHNkVGI3WGtyYVNySC1wdXA4amFMX284Q1VLT1hqQkhUY0R5N0JOZGxxRTVGdXJGUVhtTWJpTl92QQ?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Germany to Increase Borrowing as Defense Spending and Ukraine Aid Rise.",
      "source": "ubn.news",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPWFpBeXAyNjlMUV9zWnVOXy1wY3Y1ZkhmYXktWTAtOVhERlVWSDVueGZ6SGtsc1VTMW5pVWlqSll6TEtOTUhVUGFZNngxQnRPVFl5ZjUxTlRfaTdoVFR0bEoxQWMyaE5JX1JYZldTaFNQS2NmeU05dVFTQ3NPQS1TNl8wMTVKZklQSV9GM3NEMlQ1Z9IBmgFBVV95cUxPZ0tIREZwOVQ5UXFQb25KRmdWRkxaU2x6UFY3bUM5clZRUEt0Mm9sb1owdEpIQld5dHVDdzJaTUl6cnFrSC1jNnhMamxEakV1SFZVZTRwSHV1QXFvNHBfYk90YU9QZG1BSFRVOG9SSUpfWlplRXlKQmVlUVBNWW90TUJoOFN5cG55TGVmbGZWTGUxa18wWWFiVnZB?oc=5",
      "date": "2026-07-07"
    }
  ],
  "germany→egypt": [
    {
      "title": "Israel secures record gas deal with Egypt and record arms deal with Germany; Four men killed in U.S. airstrike on an alleged “drug boat” in the eastern Pacific",
      "source": "Drop Site News",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPdHRGdTZPYXBPWUJmRU43QmhnZU0yUjVYUEVCc1lhTjRvLUkwVkNYOXNPbFBhMVpsN3VScVUtUjhmQVJpcmg2eWsxNXBNdGxSM1hPd1dneWJVX213VGFGVEtBVmJNbktMclBWQzg5cDBxck9BWTZZeHJhQnZMaG9Rcmc2Y3RVU2V2WWxrNEE0S0x5R3VQQjhJOXVma1FOdElPc3M3akEzaHEzbFRiLVIwbmZDaXREaGlLQ2FDVw?oc=5",
      "date": "2025-12-18"
    },
    {
      "title": "Probe: Netanyahu gov't approval of German submarine sale to Egypt risked Israel's security",
      "source": "Haaretz",
      "url": "https://news.google.com/rss/articles/CBMisgJBVV95cUxPaXFnSE41RWt6WWtJX0hOVEo5VDhGT1FIUVpIREk2WUt6YTNBS1lVWlJ3SnIxY1BPYnJqdHpFOUMzc2tOQTlCckxpaXFpRXZocGpneE9HVFdGWkRWSHNtNjNuNWVBdG5ZRlQtOVk5MTNVb1dKcTV6NlUxUGppSWM4bzl0U25LZHd5WGoydkJQTTZHVHZzWWZzdWloSTdsdGVFNkJjTERDTFhlVmY0bTlxOS1kSlNtd3JXVlJ0SEE4bkxaQkFKVXpJODlieWNqZVVUNjdwVXlBaGp4MGVMSjhhMDdfQUI3dnBjd0k5NmpNV3lFQks1MGJuX2h4cUlUOUk0M0Q1d1E5OEdfRDhZUTNfa3NybzBKNngtWFJ3U1VNLUltOWI1ODhCai1mUWx5LWRuaXc?oc=5",
      "date": "2026-01-25"
    },
    {
      "title": "German weapons exports hit record with bumper Egypt sales",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNb1UxMHpwMVhQN3FDZmt3WWFISUJSVkdYaUpZdjVZY3Bqa3lVMDdmcklBV2FnQWxmc0VVWFp1eWUtNEhUWnV2RDhoQTdkVWFfVjRKcldFTDBRMnducTJWckRta2QwZUp1aTczZTFEV1d5ajQzSS1GcTVRbks3TUZqR1ZTTkk2X0tfM0d5M3o3b01LN0Fj0gGUAUFVX3lxTE9LQXAyaVp6enJHMHE4cTI3VlFoRFI4Ylp2Y1Q3QWZtbm1Hd054YlBGNUYtckpEaGIyR2MydEhfV0F5ekpMX0puZkJJXzZwc05LQVlOX25LSTVNNUJycktiRlBpanBPeHl0a1hrMWlxelhhRERqRDV4bllDdllEdnBRQnJqVXBid19BTDI0YlBqSGtwOGU?oc=5",
      "date": "2022-01-18"
    },
    {
      "title": "Germany’s Problematic Billion Euro Weapons Deals with Egypt",
      "source": "Internationale Politik Quarterly",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNVC14cTdUT00wSkR6NF9WNGlPR3NPSk5STkJCbnRPLW1jYWJNbWh1N0V3dHhtc0VDZ28wUmFUd0hiSkd1X05JVUlqSV9raXlhN1JKcVY5eEpBNTBzZHJBVk03X1IzM3E3MzNfWTZ0WkxtVnRHcGNhNGl1RGQ3dGdqa1V0MmNJQkVZ?oc=5",
      "date": "2022-01-12"
    },
    {
      "title": "Sisi Intensifies Arms Imports to Secure External Support for His Policies",
      "source": "Arab Center Washington DC",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPWWgwbDBCcTRHT0pCQ1dBRXgwQi1NdjMtR2taejQ5US16VkxGMTVpYmNFNlBBQ0FkX3NOT3YxZ2JpVElkNktpWUZqdW0xRmNIWk44Z0x5YnRYWm9zcGJrQi16VUIyS0Q0dkJmNlBDRlFiR2YtdC1rYm9iNmpWYUthLXNRMjF3bmxCc2VHaUMxZG9jeFpKNkdVMTM0M0RyZW9pMlFjMExYQXRzZVFW?oc=5",
      "date": "2022-02-28"
    },
    {
      "title": "Israel signs new billion-dollar deals: gas to Egypt and arms to Germany",
      "source": "Il Sole 24 ORE",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPUXBIdzl4aFJxRkVsX0FhMno4QmdTajhQclJmaS1rWkVRYllZOXp0cm5XdG5Oc25NY1hleEowVFBVeGIzUEVueGpGZUpXTDJaRVdYUnNTelVDeHVpNk8yZ3ZtZWI2X2cxSU1LYWlPUWt2bV9iWlRpX2FvOHpoM2xLRU16OHQtZ0VFR1NSdnZQTHdPUUpOTFFzeG54V1psU0J5QkJSUE9MSVF4UlU?oc=5",
      "date": "2025-12-18"
    },
    {
      "title": "German arms sales to Egypt must meet human rights criteria, foreign minister says",
      "source": "Peoples Dispatch",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNWkZIbURsRERVUXNQU0hYYTJfX2YtS0FaNGw3YkZnY3hxYXJfVzR1aThKTTZVRlpubVh3VnRJTnZHU1QzaWtqajRVSWM1d3JuWmJONkhYQ2RjcG4zNnYyd0pCSXp1Z0Zub2xWT21YRktCc2pFVHYwZjd4aFFMMXN4Q1l4WTFjUUtiYndXamJVWFRURFNuOXE2RFo5N0FDX0hscnI4YUMzZzY4S1c5WURXWXpnQk5RNEQtU05rOA?oc=5",
      "date": "2022-02-15"
    },
    {
      "title": "EU: Halt arms transfers to Egypt to stop fuelling killings and torture",
      "source": "Amnesty International",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPTjJhTHZscUNTOTI0X2tMU0g1TDFNTjZReFVUOEtKa2JHVVlDZExYYTgtWks0dkJzWWl2REp4MVNneTFnZ0lGOGtfRWo5UnVKNjdTQmxUQWpJRmFxYjBZWlhUbmNsRkNGdW15VVZhbllkVUhwdjhnMjJ5SURVZE9NTlFNUFV2VmljeGtHZUFnODJCekpDTTNLNkNmX2pMaVpwRDM1ck54aWJiUnhJSjgxTXFwQ2RGbTFNSUdMZTUyTFdCb20t?oc=5",
      "date": "2016-05-25"
    }
  ],
  "germany→israel": [
    {
      "title": "German embrace, French cold shoulder for Israel's arms industry",
      "source": "Haaretz",
      "url": "https://news.google.com/rss/articles/CBMijgJBVV95cUxPa1p5Tnk0Z1dJLXM3MGNKUkdKeEJHcXU0cnM2bS1pSHFmS2hCVlE1ckw3cWRMWVpPSzctV2RBY1pCSWZoalFoNUxqd2hkY3duZWtGR0V5RDE3M1VIM0VFY3AtY19jQWtNTklkdzFlbGVRdUNyNGlQY3k2QnBZcHJmT3Z3RmpSSkdVMUl5cTRVYzVvajBOX2FjYUhFcHRMRzBiRXg5dC0xcGh1NmMxa1o4emhGTHFmd21FdHhLakxhMnYyZnVERGlPdEttVlBJckk3cU03STh6RG42T0N1VUQ1a1pyajZPUzVhZUZQdXlpWjN4NjE1Zi1ZQURzQ3lKSERSWVctbUdBMllIWHdmNVE?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Germany’s missile search draws attention to secretive startup Covenant",
      "source": "CTech",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1heWRCT005LXh0YzZKVUVPMDIxVnJ0SGJlVjJyNDc3YUtScW12aFRrUkVqcDhiSDBKZXc0eFZHSFExdFBJZm44YnZyMExBQmtlLTdfMnJxUWk1ZkNVSDVJZkZ6MDF4UmlZ?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Germany's UN defeat is a verdict on its complicity in genocide",
      "source": "Middle East Eye",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOUFo5R1VPbkdFaUVuUGdRWFlwU0FBVFREaDFySUtxcnMxdDdUWVlmeUhvTlItZjJRMkNGMVhGZUR2TU1Mc19JLW9kTVlqUGU4Q1F2dW9OZWt4ajlpRWYxdEFYS2NUSkxDV2JTT0ZnaktTWmZ5SGRKaGlWVHVSRWZtaG9aR1ZqYzNrc2d3NWNXaGxRUQ?oc=5",
      "date": "2026-06-14"
    },
    {
      "title": "Israel’s Elbit Systems, Germany’s Diehl Defence team on SkyStriker pitch for Berlin",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPYVpidUNROFNpUG43djZOVVMxZzhBeGNJdVYzbml0MTFacE1WQXdWbGlvcnhVMUdVZGxnN0djTzZIYTVOQ3dBa0hKS0FENG9kaFp1dXZONkMyRUR2VG1FU3FhMUJiVXIyVjJCM0tlX3RkZVBpMmJkY0NTU2xqQm5TN3pDNDlrS3M1c09wUlM2UnIzX1JJRWdxQXpDZWx4cXVWZll3aTd1MHBtMmdON2d0RFkyRU42d0o4?oc=5",
      "date": "2026-06-12"
    },
    {
      "title": "Volkswagen's Qatari investors push against Iron Dome plant deal in Germany",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE04Y0kxajhwQURYU3otVi1rQUgteVJ6Q3doUjlXVk5KN3BaSDBNRG8ycW5qdktmUnlQRWo1TUpGTDVScGx3aUg3ZmFUX252UEJiclUzb2gxT2Q1aUFOZzgwa3oxcw?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Germany taps Israeli, Ukrainian missile companies after Trump setback",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNLXBNX2hteUhpX1lRZS00NS1VX0V5d21UeTJEOEV1cFFqV2d2QUtsRWZGVmtMc3UxS25lTTF1WE9WOFV4VUxXUm9ZMGZGVlhUaHZqNk1QNTZYWHJwQkFNNUVjQVIxSVJzM0V3dS0zSHFqX1dTem9TdGRNdVo1RC1hQTNVeHJHVDl3bGlXZW1CYldGVGtRVC1vTGJ3T3RnVXhpRFlzcklEbWFob3VD?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Report: Germany has okayed $7.8m in arms exports to Israel in Iran war, below earlier deals",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQOU1TQ2pxNzJDNXlSUjFsbTNESm45VEFtQWEwWER5VFV5c3RtYWkzUVlDSGVWMG9JbHVXaUtsRTZtYklLd0JOV2VTT1AwWlBocWpETm5yb1lLbmNVeVpBbWFwNENENS1VbUhORjc4T20xLW9rajg5bmVreTJ1TGYxcHM0NnZvYkp3UW00X0tka2pEblNhdi1PMGNVMlluLWpzNnJodmhXb1ZOdlVZUXV4aUEwWlhUeUxaQi1hOHFrd3RFcWxFeF9LdWdoTTZKY1U?oc=5",
      "date": "2026-04-16"
    },
    {
      "title": "Germany Turned to Ukraine and Israel for Missiles After US Refused to Deploy Tomahawks",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9vTmlDZHh0MG5oZDlFb0NvOGtoM3Z2U3JGT0tWSWo4N3B1QUk0dzJWN0c1NVE0TGxLaDFPZkFYc3lCUUprYUt2ZnNRZ2FpZEdXRjRPbkxiNGJYTmFJeVR3MGpqVWliM2dKaUF3Vkcwdzh5R0ZFdkpEYVZZai10YWc?oc=5",
      "date": "2026-06-20"
    }
  ],
  "china→pakistan": [
    {
      "title": "How Pakistan Enables China’s Expanding Defense Presence in the Middle East",
      "source": "Middle East Forum",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbnVSVEJ0Yk1zZThvdXZ1RlNrNTBfbThYZVRWa2l1MVBLSHBUU0lmNnVWVUl1YkpxZy01cDNGWGc1RTNXMEx5aUJMTVhOaFpkWHprQVR0dUszVEN5d1Jxcm9FM3RqbE9ib1J3aWxuN0tSQmQxc3ZQMzJqZ1JWcWFFX2g3ZWFVUU9ZZVdVaG9Zd294TzdkZ2I2MUlKVy0ycUQwaEk3bUFHWkdXb1VSWG5R?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "China’s often flawed arms still buy lasting influence",
      "source": "Asia Times",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQSTFMSW5wMGpZS25kWHJabTdsSm15TUs5VGRDUFA3Smt6T1NTSkNoM3BNQ1IxMmMycVFDVlcxMEFMNmhOSENObmNrRnZfZ0lhUnpCS2Q4YmZ6MTFrb3NZazNWRElETmdrR3dYQTZHT0FXU1BfR2h5M1pZamF2X3pvYXVHMERMVUJvNV93?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Azerbaijan’s Air Force Is Now Flying a Chinese Fighter Jet",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOYTZabDdFSEIzRzY1NzR6SVBNS2pNdE9KMkR2RVJ0TkZCbFB3UFB2aGtaYVBRVzhVWmhDSVpUbzZDMHpObE0wWXZiVVRnNUFqem5JZF9NNlBaZVVtTmVkRnRmNGpHX1dvN3A3X1lmQVkzcXpKM0tkRTFoTVBreXFVT0V2ZjZJSnlMRjU0YXNqNkRJX1J2cUE?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "China's pawn in the Middle East? How Beijing 'uses' Pakistan to sell weapons",
      "source": "The Times of India",
      "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxObXR0aTF3ZzJHMUZFenZxYlBROE1tYThPT2dPR3BMcElZZ0h0bmQtQVlNMkppRmdVYTZUNFc0ZldYQXc4Sll4Wk5YYmlab3VGaldya01NMGNzb1hfMDJUMEprWmtKdWFOb3pCUmRkYWczRzlXMDExTlVmZmdIOU12N3Nzenl2cTF3MXJGZjk1d3BYNzNMTXQ3QjJEbWpHdXAySVBoVGdnVnVmczdla1p2ZndRa1pqWFRMQVJSak1xcGN2dnZoanlodkdjdXdCa3QteHVMUkd4Qzk0dnR3YTlBdG12d29CRjJUMDl3aNIB8gFBVV95cUxPbWdpVE1ndjJNcUNINmpwdkhDNDl6M0IxRGRKVU5FS0NpMzBaU0dSaVVjN0c1YmpOMjN0S05TT2ZDbkNLOFdyVFkzX0Z2RUdYdHBPQzZDV1NtM09nb1BNSmRUMU1oRXFhTUItZW4yZGlaN3NnV2ROZi1YdUV2TmNRLVdiaFRCQXdvOVNoM1lBclk0NHdUYmlhM21ZbEJyTXNMN1Y0UlI1cVA0RTJYT1VXVG90VFhiMF9HbGF2V2dWdXRnaXNEblhxb0NXd1g5cF9VaG5ZT3pOYVAzdDJhRWhVdkxadWtkV1RaeE5MVnJ2a3hJUQ?oc=5",
      "date": "2026-07-04"
    },
    {
      "title": "Will new Saudi-Pakistan defence pact give Chinese arms risk-free exposure?",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPR3dVY29FbFpfQUtYSHNyZGRybzQ2bjVNS0NqOTZzMDNodmVubDZETVFtenkxbG1KbDBmckhxREVNdzJDWklLUmlQQnBkXzJaUGp6clFQeW9VMnBQdG1GVFNuQ29DaG8wQjVLX1NFUVY4MGdlcF9WYlFaMlBja0ZFNDJGek1Oek9sYjducHNUWjM0cDJqV2daNWxUYWxpY3BnS25ZNDJLSFY0czlEM2FYVW1qOTd5VFZsSExrUmtPNDI1cGtHRkYxUkhDc3Qxd0Zkb2NxUtIB1AFBVV95cUxOTXdMcFJtSVZNVDRFVldWUVRjOFdLSmh6Tlp6d1dEaHJfT2xwVmNBQTdkblR3OVZPQlVvdENDTThLbUNybjlOOXB1V3dnV05nRHp6TUhQLTZOaXJwSDNUQ3hhenIyZVJfclNPN1RZSFQ0YWVWWTBhMFV1Q19VSWlHX3IzQzMtU0E4OTJzV1BtYUROVFZVb0M0eWdJQ1hVTlJWeWhJZ1NmVkFNSlFYa1pkRklucmhOVlpLdmJ6WFBsRkc0UTRVS05uNjlKOHBpMWNBMmVUWQ?oc=5",
      "date": "2026-05-05"
    },
    {
      "title": "Arms Without Strings: What Buying Chinese Military Technology Really Means",
      "source": "Small Wars Journal",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9MbHFjczZ4bkY5ZGlOOXotdXBULV9rLTZnNThuZTZNSm9LdWpuVjlUem5JYmVHQXVhcWl4NmhJUk93TVNZdWNseFVPaWlhSDg4MS1LWlFqWm9EQVVUYzRqNlJjWUNtbVNLQWV0TVV3?oc=5",
      "date": "2026-05-19"
    },
    {
      "title": "Pakistan navy to add advanced Chinese submarines",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNYThFdl9KLXIwOWc3ZmtqZGtYdGJVYzI2bURNS2NkZ0dCV1BWRl85T3l5ZXJoUWJ0eVFrRzRWTFFkenNrQzliTi1zeXdxVEdXMkN4NFZFNjd4eWs2RnptR2gyOWpHUHl2U3FPZy05X1Y3U0I5d3FxRG5nbGloWWZGWk16VlRRbWJjZExjeUNCa1FiRmdLX2J4Rg?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "‘Iron brothers’: How China and Pakistan built an unlikely 75-year bond",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPb0R4MFdSWGlyczRKbXdobDdfYllOMW5IZU9MbFpDSmFkeDhzbzA4QU1mMnJzVHliN3NBOTZxU0Y4RlUyV0VhSWN5d19qb0JFbWdXdy1KcVZiRjc2WmdaMm9WZThXMjROdWRMNGVJcE9tckhWYzI3azFRZ0N0YWFZU0E1NVRFc0E3T25KN1lKemY5RjdOV3VQeWFveXFOQlo5QjFNZ2I3a1pmeEI3Q3BFdUVR0gG3AUFVX3lxTE1VWDJNR2l0QjVnbnNSSEk2b1NJZW5oY1c4R25IczhEOXNMRDJBM01NTXpmTXV2b1VVZ1VOMmtNcGEzd0hWUl9vRDZ0Mng4X0pyMUk5a3RtRHR2VUFHSzkwZXI3ZUsydG1MWnVmdnk1Vk5zdGhhMHJtdnl2WlpXaWtqc1JiQTgxNFpGT193TXg4aXdISzVqQzdaV1F0WVRhUnAxZjVCSm10TVJ2ZlhCOThQZDFNQk03SQ?oc=5",
      "date": "2026-05-21"
    }
  ],
  "china→serbia": [
    {
      "title": "Serbia reportedly plans to buy China's HQ-9 and more; expert says Chinese gears may become backbone of its air defense",
      "source": "Global Times",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE4wM3ZHNk5SbkFqODM2Q1U4UjJwWnBxQnZhclRFWHlONGo3eUtqTXdwemxRX0wwcUd3SlVzbkcyQTBLNHh1UGVieFROeHJGYVZXOWhBSTlQRUpYRmJtdlE3QnhB?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "China’s Most Advanced Air Defense System Arrives in Europe With the Ability to Engage Targets Traveling Over 125 mph",
      "source": "El Cronista",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNMUg0bmxrRlczeFFKZmo5STNsMFVZaDRzSmhKdzJNbWxEdDZDdS05SmRzZ3VPUW14MXp1czU1dWZzcWszVUJ3b21JTUh1WUw2VWFBRGcyZ2VLdGpmZEJWOTYwNFFFT0x6OFZqWmZodHhWdmpucnU2WWRvb1BqSVN0TWNjZ0FRdUZNZ1hic2JUOEVyRnFRQ0R1cmJYYnNDOU9Ob19SMjF4VldDOS0zbE81UEQ2eDRLaFZDU1B4LWJUM1dDbEhxTWtTQXoyWlZQZDR1Z3FHTFpITDRjeFpqQUdaVDhVcTY?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Serbia Confirms Acquisition of Chinese HQ-9 Long-Range Missile System",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9ZOTJELXhaSTVCUm13c2VyRkR4bDc2NDBfSWVHRFlUY3hXREFQLWRxSHZyU2h1S20xRF8ySHFvelBxbW5NRmFWcDdWMkZmdUwyNGl5ZjVaS04yX0tCV01NNnJ0em04WXVJNE1NdS1lZElCWVFY0gF6QVVfeXFMTWhXRHNLU0RXQklybjNxM2ZYQkpWRWg0SXFyQzZtZHRDTXZKbDNEN1VzeGUySG9DNnN0OVRqT0drZlp6N0dybGhtSW51YmI4Y1hhc2dzc29wRExJbERhaUJTN3NJNkIyakZTQ29XY0xYcmxIUUhDaFZMMGc?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "[VIDEO] Serbia Unleashes Chinese FH-95 Armed Drone in Live Missile Strike, Triggering NATO Alarm Over Beijing’s Expanding Military Footprint in Europe",
      "source": "Defence Security Asia",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNZ09wUURTeHVPTGdQaEJxbWNUbGJjOG5aOHpQZGJPTWNIdGVZSzdPQjR5NFZ2M012OXR1bWVzMDFaVklHSEF6S3hQUzJJQ1lrTDhUYzJwcXV5SlljblhPVEtCYWJZZ3llYjgtWVZORE5rbldYRTRGQmlDc2ZZdVdUWUhfaERkZkR0X2lBRHNMQjJKMHo2QWxISENaVVQ3WlJGOUUwZjc3NG1qaFE?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Tonino Picula: By buying weapons from China, Serbia does not contribute to peace",
      "source": "vreme.com",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFB6ZElHN3BZMjk1bWdXcXJObDdDMzFWY3lTeF9uNEhPMEFHTkpPdFYzckYwNXZTa0tSOW5sUlNPNE1QaF9xY0VpZzNQVDViMld4U2tzSFNwSHdLQ0poRVQwSE5XcFFpM1NfeE01cHhadTFSX2xMVVByTGJndkw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Serbia moves to strengthen air defense with Chinese HQ-9 systems, deepening military ties with Beijing",
      "source": "Zona Militar",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPWTRsT0E0T3ZraTJ1T2ZLbHp3eGE0cmpicWR6MUtoQXRKYkNsZnAwZHcwVTNZWHZBOFZ2cVdzVUNfTEh3VGUwZHh3SzYwc25Scks1M00wNGwxSC1NTFh4Y3pYOTFhTnJpR0E1dmxidmNjOWgzMUFTdGdfMmtMc3VudmM2YWt2WXJxOFRDTlZfMUh0dklUUFgta0ZleXFKZU1WYkxpTkpaN3cteG5WS3N4UGE0Ui1HakhoaGF0WWxNQ3lrZ2ZOc0FBNGJaNXAzUzdnRFVHM0N1ZWVWSHk5Unc?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "China’s beachhead in the Balkans",
      "source": "Foundation for Defense of Democracies",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE1UNy1sdUdXZ1JLZFFGMW1MN2pQN25YdTlCc2tDenROcHRvUU1TQ0ZjWjdSdDdEY1RRYXFrd3dKbnZKdkYtLWVlaDctMVM0UTdHMGhtdWRNbW5QUVM2TnFBZ2V5cXRaanVzYl93b3BEcmZMR2VwNC1nVmFaVlI?oc=5",
      "date": "2026-04-29"
    },
    {
      "title": "European Country Turns to China Again for Air Defense, Adding Third Chinese SAM System",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQU1k3akJGeWsxQXZTUUdPc0pPdkdQbkNhbjBFR1R1bmthT0dGaC1FWkNBN3RFWTRUbzlKQTBjYkJmeTlSWDZMSDY3N1VQUlk5SXl3cUtNV1d0WmNyZzd4TGplOG5yTElpRHhpSlpKeUNqV3JHcGpodjBxOFRBT0Nydl9hay12Rk9zSEhWaGRpdkttQkZrZGFMaGNVQUxyOGdmLTZ0Tlk5aHdSMHI0bEVZR3F0dm00OTRTc2NNanI0VnQzZVZsNnVMa0x2dGowZw?oc=5",
      "date": "2026-07-02"
    }
  ],
  "china→thailand": [
    {
      "title": "Why Thailand, a US treaty ally, is stocking up on Chinese weapons",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQTG14NV8zaDNaTEJvYkF1WU5KVkFLcllmc3U5RlRMWTQ4cHFGNkY0T0NQV0VNQmc5LXlEekxSZjB2VGN4V2FmU2NmLXhIYVVXVHd5NEI1ZnBDb2NkZ2paNVdZZ3JrUko3aWhsSnlxMUJkWVc3RUpxT0lVTlZhaG50bHNYNFhiUUlwVk5Fa1Nxenl0NU5Tbl9aYmxIZjRDSU1vZEdwNGhBVHgtaE0xcWfSAa4BQVVfeXFMTUhISFZEVW5XdDI0QURvcFk0WnBaQk05R1llT3o4d2IwTVA1VTZVbVRyd2hiOEE2WnJ2dmhWRldjaGhfLWk3c2tiM0VXQW91R3FsODQ2Ykgxa3paMUFJdmNKRUREUkUwWHIzSnEtbXEyUnR4eWhEVTVMSFpORmp0YnRBdGNwTDZHb2E3SWNqaTVKR1RjQjlaQXdaN29fNjFhV2dTOTlNUGRwX0hNZFFR?oc=5",
      "date": "2026-01-24"
    },
    {
      "title": "China, Thailand to hold joint army training",
      "source": "chinadailyhk",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBGZGtuVjh1TThTT29xMVV0T3E5MXlqMTJUcmdBdm5sanFzeUxMWlRGZURZb0NTV3dyZVZPUlZaelZuRTJuWDhsZWxid2hodlRSM2RoMnVHUjhWZw?oc=5",
      "date": "2026-05-10"
    },
    {
      "title": "Where Do Thailand-China Relations Stand in 2026?",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOQ2F4MC1CcFktNnNteTd4Yl9jczNJcTIwWXlQRTg1aE5UM3hCZW40aVBGZlRTOEZrcFlXelJsSWFva3JzNm5kaUJQZk8xYXdHajJwUnZaT2hfdzEzZUx2R1g0UU5IRHNDZzgwa05KUTViTHhFVHA3VVR2RFJJYm9kQ3dIblgycGM?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "China in the Indo-Pacific: November 2025",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE4ycUFXMFp0UDZHcUxMYmR6b3pVbi1LbUhHQktxU08yRWZMOUhMYkFwbXEzdkNuNkFaVmVJQ2gxU3dLV0tnT2gwcXpCcE1GWklQTWw2a3gxNlo3TGEtdXdGRGJ4eDBYa3c5aDRHTHVWaWtQX0lOWElz?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "Arrest of Chinese suspect in Thailand reveals transnational crime",
      "source": "Nation Thailand",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE51ZEFVdExXQ3VuQzlhanM1Tk9mQWJYQjRta05iNEp6NG5fN0pMMUxQNDkzTlFHWkFjWVEzZi1iZ1IzZWF1c3RXdlBPeDNTYVcxb0ZOMzNHeEQzT2JnMDBWRGF3?oc=5",
      "date": "2026-05-09"
    },
    {
      "title": "Chinese nationals arrested after Pattaya crash uncovers cache of weapons and explosives",
      "source": "Khaosod English",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQQVU2N0gzRVQ3ejlpZ1hSY2F3d0doS0JjMTFCQlFRV0ZvT1BscnBESlNPcmdZVzZ6ZTE2SWt0TGJ5ZmM2ZU9nUFRleXBvbUNPZ0ViV0Fud0c4UnhlbGdoeDluSW0tcW5UMjhNM3lqSE0wa1lQczh6OVhaZ3dVZmVLZFE3OXBnVVBUWlF6c3Y4YVN2NmNiNjktZVZoVE91RGpGNV9Wam1wNjhZQ2gzTGRyU19lWV85RWdGWEktdWNZS0pvQmlreVl1Y1AyVXNYVEVTNURLWTNR0gHbAUFVX3lxTE9qbmlfYUJlbFJMVTBtYTVmbnVQdEpjM1gzTzhYZjBOcU9zZ0labE9fV3k3TFBfYmJNNDQyZ2JWUC14QzZpY0dOR1FtbVowYU4tRlRrMVpfYmxMaTBoc1FfLW9mbndhS2pTNE4tVW9ZRXhGTG5xLU9lWVhhajhOWFJmYzRXX1RPYXJIVzBoV2dNc1UyN3V5Q1VCRGhPSnVVdFJxa0g5aVR1bExvQ1l5SGRNbFcxMEg4YkhFRkhhZmZvUUVnY0JsX3BrOXdOemJ0SGdlTjJXOVc2M3ZVdw?oc=5",
      "date": "2026-05-09"
    },
    {
      "title": "Ukraine just X-rayed Russia's $100,000 drone — and found components from China, Taiwan, and Switzerland",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxONWpIWmlYUHQ0NGhadVdXZVU5cEJuRFdWTXJIQWpTNVR0N2JraTRCcGpMVFM2alEtOXNFYi1oczU0dXVKc2V0ZkstaFVKSGotUXlnaHVpWnBVUTBXUXI5WFFfZ0NndDJoa0VOb0ppVHFRaFBJb2dDQ3dmeE90a0ZwODNxOHVlUWpRQWJSRWxOMVN4VlVicm9RcjNsMnN0T3ZTT1BQZTRiS2NHQTlaWUZHWlVwVmdmUXFpbDViSDBxa0JhMHl0M0hhMVFMVU1ZQjlaT0E?oc=5",
      "date": "2026-04-13"
    },
    {
      "title": "Thailand’s tilt toward China tests treaty alliance with US",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPb2FPbEFRekdpVmZzWVZpMkVwN3h1NElrdzEtOS0wcnloRGU5YVppaWtTWWszbjZaLXotQ1pvQ2ZqVm4xN2treVRZRjdCY3F4cGRkUFVHOGNVeEtWbFhwaFpiNUNWUlFiZ2lLM1VDV0tnRkxpeU9PV1lZMFRoSFNTN0tvcWRhblJVU01qU3RqaERuamwxb2szSkFPZ00taEdwRkhWbERxNEdTczI4WkxXX2FZbWQ2cDEz?oc=5",
      "date": "2026-01-05"
    }
  ],
  "italy→qatar": [
    {
      "title": "The Winter Olympics and Deepening Italy–Qatar Defense Diplomacy",
      "source": "Gulf International Forum",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQTEhPM3dEUVpjOFFmWEVNUWdBV29yTWg3VWpIR1hQbUQwX2FFeWdfVy13Qk1tQV9PdnNHdFp4Q05jU3pRMGNxc3N6LXFtQkJMcEdramY4QkFyU0NCWUxweGZ2Vjc1eWdBRTk2c2pfTEJPMlhiMDlQbWFWN2ljNzQycVJBUVlPN3ZNc3JZ?oc=5",
      "date": "2026-02-19"
    },
    {
      "title": "U.S., Qatar, allies enhance regional defense during Exercise Ferocious Falcon 6",
      "source": "afcent.af.mil",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQUEQtcUhEcXNGb2tKUjdXSDdESzgxVGdWTlV4OW1NSHZBZ3pBYW5rSlcwbi1JSWJHUEdMNUMwZU5DUUFEV0dhTzVZV0lOcC1BR1NMWk1EblFqNm9xNFhxV0R2bzFhS1pWS0VibEd1VXJfX1BRbkNXYVpERmF5dkZyMmYzS2I3NUNEWDNpWWNQYzBQRU81RndOMTNtbTBmdG9WUjhQY0htdFcxNTROOGl3LW1adGZETUkzZ2dWSFRSeVc?oc=5",
      "date": "2025-11-22"
    },
    {
      "title": "U.S., Qatar and allies enhance regional defense during Exercise Ferocious Falcon 6",
      "source": "centcom.mil",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBfZ3o3UnJNVmlUZUY5VEhvZGFCOHAtUzZDNzlQMG42UkRrd29DNHlfdmUteXI0RG5lSWFLcnkycENUOWo1dnowXzlxTUhsYVF6bzBKWHB1TjFKQktBM2ZKWjVwa2tXRkh6?oc=5",
      "date": "2025-11-24"
    },
    {
      "title": "U.S., Qatar and allies enhance regional defense during Exercise Ferocious Falcon 6",
      "source": "cusnc.navy.mil",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQd1o0VWVWeHloX3FGOUMtM1NJSWdPaWllZlZIZmlpUGxhTlAzVlVpUVFXUDlKSTkyS1FRbFItN2tNRm9aaG55R3h1aUxGM3ktNDhLM055bGRXQ1ZEakJpOWRqM3FDRWRxUjllUG9HWXd5X0J5OE5fUzNTOTNwa2JXRFpyOHYxT2NhU0ZpaHVMRnVfSVJ4dGlOSWhOSi0xSEV0MUc3TC1fdy1vWVVtNFFLMG5obXVlejZkX3JyVVJ2eVFLWm1CTExPaFVPRWFoYnR0bmZKbTMwX01JUQ?oc=5",
      "date": "2025-11-22"
    },
    {
      "title": "Gulf States Request SAMP/T Air Defense, Anti-Drone Systems From Italy",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE51TVVRME80WEEwOHR3cFV0THFQd0FsTXpGNkdFWUlOaHB3OFU3ell6NFQtTmQ4RlkzUU1TZmVuTGJ2X2F4ZURoSHdvV1FTU3lKV3k4SEZkcjZUbndkem9pNk9JTmNmT2lSVERHYk1hdFVTQdIBd0FVX3lxTE9raGxZMkp4UFpkb0JYVWNja1kxNlR2bjVISmZpb29oczM3d2xaSVBTQU5XMEl1QUMtMG5idGpTem10SkIzRVJrZE1ES3lxUmZzMjZqMTdCQUU2NGhHZkJlNTF6OXdTM2NyWjl6V01sZ3NFSE81LTdr?oc=5",
      "date": "2026-03-04"
    },
    {
      "title": "Qatar",
      "source": "CAAT UK",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5TNnEtQjczei1PM2lNZ3M0bGNSVm1sekxrRGJiSF9HVnFtanEwTFRDTzZaalgyVzF2MGZ5MDhwVkxWLU5ETVBNM1ktb2ljb3hjN0o0?oc=5",
      "date": "2026-04-28"
    },
    {
      "title": "U.S., Qatar and allies enhance regional defense during Exercise Ferocious Falcon 6",
      "source": "centcom.mil",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFA5aE9iZVMtMUJEZXR5RzlaTE1jZU9jOGNTN25jczA3UUhaaVQ2NGptb05HUDJxMnZFdDY3RUo5bnhRNGlqbjRNMmJyZUlYMUlZQTJZNGhHaXpON0hMdXdjdEV3VlluTTJJ?oc=5",
      "date": "2025-11-24"
    },
    {
      "title": "​Italy Becomes NATO's First Operator of Skynex Air Defense System",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPUHc0SXJzTURXeElVSWNOY3ZlUVNzakNUSTNTdmNicUJjTEszZVRkSnRUc1Naak0tUGJYRVN4WmR5dmxpMFhLQUVPaDUwV1ZCY3dyc2NhSXRnVUtDdDhXaDVhRE51WGswdEJTc3lmQlV4ODNVSGVfYWp1Qi1xR29FLVdRTENKRFNMRVVUVTNRNjdzLU14blpISWlPQnU2NWt3XzNmZmtuUXU?oc=5",
      "date": "2025-12-23"
    }
  ],
  "italy→kuwait": [
    {
      "title": "Industry: Leonardo to equip Kuwait’s naval patrol vessels",
      "source": "Euronews",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQQ0RwTHh1aG16djFZT242WTcxNW9VMllXbUNRV0RkM1ZuSlUyQU54X1Y0VVl3MjQ4YjJUdEhEMlFxYUpYcWswT3pUZnNobm52aWJaSzktemMyV2k4WVpyQlNwd1hkQlR6LW1mSGNHVXNENHgzSHJYV3Y3c0ZwN0V2MlVibFNFd2dZWEgxQjVmZndVMktPRTFJaUkzcDlGczRBNEZlNjktbkczQVM3anNGNllETEJRTFhwV1ZJWXJfMGVuOS1k?oc=5",
      "date": "2026-05-22"
    },
    {
      "title": "Drone strike destroys Italian MQ-9 at Kuwait base, no injuries reported",
      "source": "AeroTime",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPVlh2WkMxWlgzamJySVA4Vm1EQV9ETTZEVkNMMTF3TzJ6bnJYczVJMXFuYV80S3lGS1VFWXFtWkxkWkMxOFNmTmlWdVBvb2JyRTJXb05xb09QM1Z0R1RwV1lmV1RlX1d0TEtDMUNIaktNVlVRbkRIU1FmcDJtaVVtV2I0U1ZzYjROQmJF0gGQAUFVX3lxTFBseDNScVR3dmtTYnVOZWRNVVllVEo3SG8xaHhyc0ZWYU1Gb3p1ZmVBTWR5S3l1dkZyRWlmTGoyUVVlR2RmQzNNdHB5SXFueWFKbFBlMkVSNlpfTHNyb3hPbmZTQ0tsZDBUM3JIVUZNSDJHc1hmVDJ6b1pCUjlzS2E2UjQyYkdMd2hXQUd4YXh3dA?oc=5",
      "date": "2026-03-16"
    },
    {
      "title": "Italy to dispatch air-defense aid to Gulf countries: PM",
      "source": "Kuwait Times",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNYm5iQUEwa3ZFYldfalJUWlh3UE16Tm9vbGExdjZBNjRuc0sxOTJITGRwQ3hCOVl3WWZTb0FCSXdndTAzNHZYVlh3UVdRYVV0UVp6d2VEOGMzVUJialZqbXFMTFhMQ3dpLXgwM2lqM0dNTFY0S0ZrVWN5QVY0bjZ5MHBBa196NjBHdXFnNlRNUjBrUldpQml3VmZhRmg3UEVXTFJndUVQU0FKd9IBrgFBVV95cUxQa3ZCc2JNaHdjNE9CNTh2N1U4YkhMVklMZ3h4V2cxNXNtbzBOVFZtTGVuT2U0MDFidURkc05VNzVTWnJFZmJpOFRPU1BwNDhnWUgtcFlRYkVhZWZmajFvclRJbmg3NFhjWU4wU2RrbkhwU0hyYWVoQ3JUdTlldlpHbDRWeDU1R1BNTG1aU1IyZUFxUHZZVFo4ci05NVhSekFiODB1eWpiRS0zSjhWdlE?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "KUNA : Kuwait Defense Min. receives Italian counterpart's solidarity - Military - 02/03/2026",
      "source": "kuna.net.kw",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBMSWp4X3NmbURmWm16Uk16OW9ncmVDNEQxcUM0RUdLQmNrU1dXM3dvWWlSWHZJbWItYW81aFNnUU5vSm1jN0RwWW9NaWd6akxwYkJJMmlaaFA0eDJIYjdCX2lBWkttZklzNHBwaXFtMXU4Wlh4?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Italy Reaffirms Long-Term Commitment to Gulf Security, Stability and Strategic Partnership",
      "source": "Times Kuwait",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPRlRCTTJYc2hGbmtsSndFWllVSHZzM0ZjWGZlN3Q1QU5kUFY3bVJadEtvUG1HcFFBOThrUVlGakdtTDlIT1VRNUwzQ3VaX1YxdGx6Y1ozZmZUMnlIR044bEhRcFF3RGI1R0VVZXBsZnNOYkdrQ0ltUWdwTVUxSkVhbXc2ZC1nVjhtc0luYmR1RkdvR3MxOFJRRlFxQVE1RDduMnJUQ19fSXdWUUpTS3oxRHlEeU0?oc=5",
      "date": "2026-06-04"
    },
    {
      "title": "Kuwait’s envoy to Italy holds talks with defense chief on regional security",
      "source": "Kuwait Times",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQSzBmdzFPdTJvWjc5d3ROemhkLWNfMW05ZHVjcnFwbzA1LWxZRERqelhlSzg0b3k5Y2plM3F1ME0wUlNkNVQ2b0M0M3Q1Zy1KWl9VMEt3QTBRTE9SY04zM2Zicy1TWG01TlF6YUVzbVB1OFB4VjFrRE1UNmJacUNfdFFnUUpmaEhKVDNxRTRHRFFZS216eTFtS2RnYVZERmd2djF2NE56cHNabm9kS0pqbjY3Mkgyd1B2QWNhUC1mNzViS0o2T28tLXJuTdIBzwFBVV95cUxNaW1wMG81b3hLdjRiS1RMa0dSNXpLTmUwaEtGaWVVeG1SU05aVGV4VVllVmtZckxocE9LUnlnVHJqQTFydlpBNl9XcUh6YWF1Q3o5dm4zc0hVN09pWEUwSkxJYWVTTWZMMkVNNFBEanJ0djVKcGl2UkMxOE5kcnFJVWdRSjdHcjc3QVFRYzktbEgzRXVpaC0xYWtFbVhrVV94dUFMMHpaU3BYYUVxdV94bHR5dDhYdjNlVDNyV21fWS1Nd2hOV1o1UGhFME1kWDg?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "Italy’s Meloni suspends defense cooperation with Zionist entity",
      "source": "Kuwait Times",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNSGszakdWX2VTbE0ydU5iVW1LV1lzLURhc2VyZmd4WXhfeWg4c1JjS2Q5REFiX0NFVUVibmlNWFVEaGl5aHN3VzA2eGlySldDMU11cjRweU96NkdjeVVZd3BMR3E2LVZlYUZUUUdPeEZpYWR3aThvckVQN1dScnJtUHN1V1hpQkE0c3JNcVRZd2tMclNRT1dNVklId2R6cThFNmhVSVdrZmZ2cUhVTVViMFM1YmfSAbgBQVVfeXFMTldKNmFOSndLM0NYVWRjOGdXbjZTdnVWNzR6MDkyeklSOFhzMWxRbzBDYmFFSlZMWUpsNUdzN1JKYk5BOVJ4dy1kUkhIRmFkZGVYaDgtQU1uaXdJeV9aaHk2OXhDMTB4N2xFc2hTRWZOeTQ2d0hxWGg2VnVzLXlfQjJ3ZlRocXpsbHFXOTU1Mm0zXzdWRlZ0Zmw3bHhpN25rNVpWTlJnWWdERkNUMHg4M2xHZFdNdWZ2WQ?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "Italy lists Ukraine among top buyers for arms, while eyeing drone deal",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNSjdENDBKY0FOVW5TRFZoc0pUbWx5eHlMTFRBS2VEVjA1NzNfVjN3dTBKOU80bVFYT0NFdzRjVHlqRHpyaDl4NXdZWUZWMGFmMnRCWUNVZnZZbnhFaG81Ymt0T1REX0toSUx5X2QtLW1hem9Lb0tjN1lSWTNaQ1lNV2trWHVFRVl2TXBKdk9XX01uUVg4YkhEUjJmR1J1c2ctbjVjc0UxMTY3QQ?oc=5",
      "date": "2026-04-22"
    }
  ],
  "italy→indonesia": [
    {
      "title": "Italy’s Indo-Pacific Strategy Turns Toward Defense Contracts",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQR1dsNVpQMEF4RU5hb2ZTNl9ydldOcEJmMzBsN2YyRmRKNWVsVTd5MUd6c0lKbjZpSU5ac1VLMGNCdDc4WGF3bWszbVhOSlJnWFc3RVprdXdvekJzckVsVGp0dGNGeWlpSm5CdXVBY2QxR0dwUFNkSFFCYXM3eThGNVlldS00VndjcmstYl9CT1c3Y3B2NzlR?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Italy's parliament backs donation of aircraft carrier to Indonesia",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNek0wODJMZjVHZVVhaW85QkMtX0M1WEhndDdHb1FDaV9OS19JUHA2SWxBVGRKNzFfSjFIamRXUE5nT1hFNURTRWdIS09wX2djaWxGV2RWLXNQc1J4SW5EVW9kYTJjZm51VVhYeFZraUNPYUdCWTFiQW8tcTBTb1dzSEJmaEJTU3FKSGo0S2ZNNlUzaEVPQTFJbDZ4eXp4ZVU4RkVRRXRQT3ItRU04aFFYUm43ZjJpbEdsZDUwVGotdw?oc=5",
      "date": "2026-04-28"
    },
    {
      "title": "Italy moves to transfer aircraft carrier Garibaldi to Indonesia",
      "source": "Decode39",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOd05DRk4yMWRHOXA4NER6djkybjBWYklqbGE5bURjT1lGMGNnQk5OWi1fcmVzaG50VjdjN2FjVndHNXJHQ3d2OS1lWURTak5XWHpaWE9oUjlUVFhnTUdiQ2RaWUYxbVVNN2pUU1RWVS11emdDN0RiTko3S1pXUEZIWHhRQnJyMXZSNnRpMUxUXzRPNjloS2c?oc=5",
      "date": "2026-02-26"
    },
    {
      "title": "Italy clears transfer of aircraft carrier Garibaldi to Indonesia after months of debate",
      "source": "Zona Militar",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQNTh6ZkNVdE0zZTNVNFhVWndmOEhERU8zVFNyT0VmQUhNOThjX2c2bEd4cFpTNnVUMUl6R3hPZEdzb2pWd1AyUmtva0Uxbmd5M2xnWmREYTBlQVotdnlmSENGaFhabXNCX2JjajhzUElLUTFnd3NsZUdPamtNaHRVRUQyclN1VFZ5bXB0a0pkb2xvTlZQS0NKOHBFTHNFTmFNY3NQOW1HZWJtNFRrUnFqWnFPTlNBOXpDa2RkOFNQZzJOMExySUNMd19JMA?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "Indonesia selects Italian M-346 trainer jet",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOY0lOQ3c0dU1ock8xMW5LRjlla2pMeG9MeVpWY3JJY0p1YU5ad29xZldldGdBNzhlc0Zna0ROWG1NbVZEZTNvTm5udFBUeGo4aXRxclB2MlduelQ1ZHlQSERKNWN3ZVNyVUx2ZExWUUpOd3pFR19Ib2JOSHNWTEtLMUN2eEdZRXZuQ1lfaW1uMk5CdTNFSW55WGZJa0tUMWkwZEpqZER3?oc=5",
      "date": "2026-02-05"
    },
    {
      "title": "Indonesia to Modernize Giuseppe Garibaldi Aircraft Carrier Domestically",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQY0JYU1VIVVJrRlZ4SkgxUzF3VHRqbHdMWDlxWXhsOHFGb2dKRDc5amxzUHJabVgxSGxzbXhvbEpKd2dXYm9uWFVhR2JwbVJaMmc3MlNwTmlFbWpSSF9UVS1PdGJGcEJfc0JFbWY5T291cmRZQlpMQWROT0ZuNTdSSE5Nc9IBiAFBVV95cUxOWVktRy1idXZuUFQ1cWZ0NWdhaldqMVh4ZjFvUW5mbEhTb3B4RHcxY01GSG9ibVBmczFqa2hyUUpBcGU1Skd3MGJjU0Yxbk43cUh1VnREN0paSF80NE9haVcxWURVYjdYQTN0OUkyaUVNWXVpWUoyVE5FLUNCNFVDZDR3OFJ3OTMt?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Italy’s DRASS will provide six new-generation compact submarines in addition to SDVs to Indonesia",
      "source": "navalnews.com",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNb0ItMnFDRlM1dlpjVGRWOHR1Y2FtZzRNRTJPUTZfa0RubzhtQmxRQmJXbVVqZGVTN3RCbFBYQjAtZTJwZlNaWXVuMUhrX1d0NXhVVHFtdHBKUS15SnJ3ZXdDTUJTWGNsTFVzUmpTSkNBZWY5OWFOVFNKN0dGRG96a2lPQUFNZmxJSTBWb01LN0ttSXpoWnBvRU9tXzVPOE9hd1hQcW04UE4xYU5XeHFNbkQ4R2ZhVHRNTTFZVG9jYkNOZ2NNNmVyTGU1Z1Nxdk4xWVlQUGtvTVR5QQ?oc=5",
      "date": "2026-04-03"
    },
    {
      "title": "Italy Giuseppe Garibaldi Carrier Transfer Boosts Indonesia Navy",
      "source": "Defense Feeds",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNaGphOGQzN3g0b25VZkdSX0dEOWNWZ1Z0eVIzN3F2NHVPamRacWpWbm5qb3hzUDR5NEJzRmdrNmx3d2F0Q0pqNDVsOHBQeUwzZDVXclJrWkdHVGd0LWduTktCOGlqbW5Tc2c2UmZvS2d2anZtMUw2TmlzWWlCX1FOcXdWX1lKSlM3eEFiSVVfdHRYNFVhQVoxMzlfYTlFdkxwTFI1MG5VazY?oc=5",
      "date": "2026-05-01"
    }
  ],
  "israel→india": [
    {
      "title": "Rafael in talks to set up Iron Dome interceptor production line in India - report",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9rR2QzeFp5X1lOU3JKeDV2TlUzYjBOLUhFbVJrX3VxWng0QXJ5b1Y3X2ZWNzZPb0dhcThPZUs5cEFnaC1NZVJMYWFmUEQya1RlLVhHWTJ5S2d1YTJBdTh4aURrWQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "The nationalist ideology that binds India to Israel - Le Monde diplomatique",
      "source": "Le Monde diplomatique - English edition",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBmaWIyMTdBTGFhNW5adHFFTEk1ODFhU2VncTlYd1BqN21oc2M2Z3hrUEpsUTIxbHRkUVBHc2JHcEVoSDdIZGMxTGdOZXcyQnowdmc2TXdKOWk?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "India is Israel's insurance policy in a post-American world",
      "source": "www.israelhayom.com",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOS1VCRFBjT1Q4QmlYYVVkLTVBcWNZNTByZGVQVnZFaWV3NmJmVUhrZ2RtRTlWVUdGRXB5bmd3MmJBbUNYRkJpTFlIQ0ZCeC01bzJGODJEbUhDNFNaTGVCeERxa2RTdGg2aHp2cVc3a3VmbFY4YWR2OTFxVWxPdlAtZnhGdTZTWUFwMDRYdy1Rc091cC1PdVB6Smg0WkhxQm8?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "New Israel-India Initiative Aims to Deepen People-to-People Ties",
      "source": "Philadelphia Jewish Exponent",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbmIwYTkxN2lubnllMDlYQlotZHhOaDBqOS1sRTJwWEw4UVJqOXVXZVpDYWVzcUdNSXFUQ19xb1RQZF9vR0dHOFcycThJZFVDT0xjUEpiRzRfSGM1NDBUbHNqWk1Sd2hUbUdoWERRTklWMHdJWTBLYUVSZDBacUJ4S19kQjNLem9Fb0FOd1ZhWFFPYmEyS1pGTjZlb2s?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "The Israel-India Partnership",
      "source": "Hoover Institution",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE11bnZOWW40cjI1dWZfYzd2d014aENBeTZ1OTl3MjZlajRoZjMtMG9rUVNNRGVFTndMTlhEcjU2SnVCVUMxbm8yWEhPek1mcVdGbG1WVjdjc0NvdGdrNjh1SWc3c1ZPdTg?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "The Rise and Rise of the India-Israel Partnership",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNMXZrNU1HUGFOQmw1RlN4TXBzd0FUVkg0QmVCMUV6RUxhVnR0Um14OWc2eERSUW0zNFRQS0s1cjdGY2x0Z1hkZWlhUm5hVWZOeEMxUmFDaHJBeXBUR2N0emUxZHZSb0ozRWxfTlFXMUwtMlNoUGE3QVEyVl8xQzlMYlhBcEliOG9vc3c?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "India and Israel: The rediscovered alliance",
      "source": "JNS.org",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOT0U1QVJud1JqM1BmUlBMd1g5QnFwUzRiUXIyLUlGaExqOUhhaGp2eTZ0Tl9qaC01UlhBWFA5aHF0dmZYbERMenYtV0dBRFF6TVNjc1FYd1NuUUJBaTllRE13T3dMOWc5a1V0RUZDRng0OVEzSndDVzg5b2Q5OE1LOVJ0VGxJRU9hdHBUbGZZTQ?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "The Ripples of the India-Israel Alliance across South Asia",
      "source": "Centre for Strategic and Contemporary Research",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQNVR6ZmxxSHRJanZjM1FCODJWWkhHQXhMVEcxYlhjVm4tVWY0WmluWWFvYTJvOGFBOWpVekI0QThIR1RBNGFzRkhqY3VvT2wydl9lREFYMWRZMnRCYll1eng3Qjh1WnVUUm5TZkNGRS1TWUxXOWthQWlhdGItZlUtRWl1N3Fwd2VaZ3VZYkliV0toQUtKQTR5UC1yYm1NZU9WTmJIZEt2eHlBWEU?oc=5",
      "date": "2026-07-01"
    }
  ],
  "israel→germany": [
    {
      "title": "German embrace, French cold shoulder for Israel's arms industry",
      "source": "Haaretz",
      "url": "https://news.google.com/rss/articles/CBMijgJBVV95cUxPa1p5Tnk0Z1dJLXM3MGNKUkdKeEJHcXU0cnM2bS1pSHFmS2hCVlE1ckw3cWRMWVpPSzctV2RBY1pCSWZoalFoNUxqd2hkY3duZWtGR0V5RDE3M1VIM0VFY3AtY19jQWtNTklkdzFlbGVRdUNyNGlQY3k2QnBZcHJmT3Z3RmpSSkdVMUl5cTRVYzVvajBOX2FjYUhFcHRMRzBiRXg5dC0xcGh1NmMxa1o4emhGTHFmd21FdHhLakxhMnYyZnVERGlPdEttVlBJckk3cU03STh6RG42T0N1VUQ1a1pyajZPUzVhZUZQdXlpWjN4NjE1Zi1ZQURzQ3lKSERSWVctbUdBMllIWHdmNVE?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Germany’s missile search draws attention to secretive startup Covenant",
      "source": "CTech",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1heWRCT005LXh0YzZKVUVPMDIxVnJ0SGJlVjJyNDc3YUtScW12aFRrUkVqcDhiSDBKZXc0eFZHSFExdFBJZm44YnZyMExBQmtlLTdfMnJxUWk1ZkNVSDVJZkZ6MDF4UmlZ?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Germany's UN defeat is a verdict on its complicity in genocide",
      "source": "Middle East Eye",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOUFo5R1VPbkdFaUVuUGdRWFlwU0FBVFREaDFySUtxcnMxdDdUWVlmeUhvTlItZjJRMkNGMVhGZUR2TU1Mc19JLW9kTVlqUGU4Q1F2dW9OZWt4ajlpRWYxdEFYS2NUSkxDV2JTT0ZnaktTWmZ5SGRKaGlWVHVSRWZtaG9aR1ZqYzNrc2d3NWNXaGxRUQ?oc=5",
      "date": "2026-06-14"
    },
    {
      "title": "Israel’s Elbit Systems, Germany’s Diehl Defence team on SkyStriker pitch for Berlin",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPYVpidUNROFNpUG43djZOVVMxZzhBeGNJdVYzbml0MTFacE1WQXdWbGlvcnhVMUdVZGxnN0djTzZIYTVOQ3dBa0hKS0FENG9kaFp1dXZONkMyRUR2VG1FU3FhMUJiVXIyVjJCM0tlX3RkZVBpMmJkY0NTU2xqQm5TN3pDNDlrS3M1c09wUlM2UnIzX1JJRWdxQXpDZWx4cXVWZll3aTd1MHBtMmdON2d0RFkyRU42d0o4?oc=5",
      "date": "2026-06-12"
    },
    {
      "title": "Germany taps Israeli, Ukrainian missile companies after Trump setback",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNLXBNX2hteUhpX1lRZS00NS1VX0V5d21UeTJEOEV1cFFqV2d2QUtsRWZGVmtMc3UxS25lTTF1WE9WOFV4VUxXUm9ZMGZGVlhUaHZqNk1QNTZYWHJwQkFNNUVjQVIxSVJzM0V3dS0zSHFqX1dTem9TdGRNdVo1RC1hQTNVeHJHVDl3bGlXZW1CYldGVGtRVC1vTGJ3T3RnVXhpRFlzcklEbWFob3VD?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Israel’s war-tested weapons are becoming Europe’s new obsession",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFAzRlJSTGl1SXhSR2RJdTNXX2s2VXRfM1ctbkRHRHBfcmZaNnFZeVFiSDZOdW1KVldGaXEzbmNOTm1jaXFpbTVtdGJkLS1qa3Y5WkZQSUNrWEZ4SDYzRXNqamw3NA?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Report: Germany has okayed $7.8m in arms exports to Israel in Iran war, below earlier deals",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQOU1TQ2pxNzJDNXlSUjFsbTNESm45VEFtQWEwWER5VFV5c3RtYWkzUVlDSGVWMG9JbHVXaUtsRTZtYklLd0JOV2VTT1AwWlBocWpETm5yb1lLbmNVeVpBbWFwNENENS1VbUhORjc4T20xLW9rajg5bmVreTJ1TGYxcHM0NnZvYkp3UW00X0tka2pEblNhdi1PMGNVMlluLWpzNnJodmhXb1ZOdlVZUXV4aUEwWlhUeUxaQi1hOHFrd3RFcWxFeF9LdWdoTTZKY1U?oc=5",
      "date": "2026-04-16"
    },
    {
      "title": "Germany Turned to Ukraine and Israel for Missiles After US Refused to Deploy Tomahawks",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9vTmlDZHh0MG5oZDlFb0NvOGtoM3Z2U3JGT0tWSWo4N3B1QUk0dzJWN0c1NVE0TGxLaDFPZkFYc3lCUUprYUt2ZnNRZ2FpZEdXRjRPbkxiNGJYTmFJeVR3MGpqVWliM2dKaUF3Vkcwdzh5R0ZFdkpEYVZZai10YWc?oc=5",
      "date": "2026-06-20"
    }
  ],
  "israel→united states": [
    {
      "title": "In the Middle East, America’s best return is a reliable ally",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5WU09uZUptdW5hRWxtSU84Vl9yZUdIU3ZfZjQyZ0g3d2xqVkJ0TUxsc1RISWxxaDl2UFdUUmZtWEpwZmo1ZV83a2lSWktmZjVveHpWdnIwTVhRcUYxdXM4MlpmSQ?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Cooperation without Oversight: The United States–Israel Defense Technology Cooperation Initiative",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPXzh1RzR1YU1mS0lOMDJ2dzFOMjlZTDEyUDg5MlYtVExRMVZma2RVQ1d1M0NtNUc2NkhaWm10VXp3LW1CcVBCQkdyRF9JSkdlaU0tUXlNSlBqczlGcVVTSlkwNDkxNEZnZFBiT21leU1RRGJXTzJEczhXcFpZV2NIaWhiRzVOcU5JTmJ0RlNvc0tJUG0zRVQtdUlsOUNSdXg0Ny1nOW85dkpXdzZFSDRlWmR6STlfSE9pQUVnUmtJWi1QcWlaRjI5Uw?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Missile Defense Worked. Can Israel Count on It Working Next Time?",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZnR1QVlhbWJJLXBpQklyV0dMeGRwV3EzOXg5TFFQOWdpYmxoSUJLeDFTVHdqYXFlbHpmWk5saFhvZ0ZDRnJBRkQ0ekRnRmRuWTE5V1cwcjJNbnZGa1BuNWlHNHNJMzVOUTZQaHU4clFKWU00VFV0UXJaN2JvZVBYc0hWNW9ITXM4MjJmQ0tKMm1ucGtzR2htb0RuQ3A?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "US Insists Iran 'Does Not Control' Strait Of Hormuz",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQWnhyaS1tS3NVV19VeVRlS1RUeUhFblVCTkRCWmg2Z2YwTW1uR051ZFctc3F2eEcyN29hbkJkLUY3THpPVzVaYVRlcTRybGlrTGVsX3ZvTFJyQmRELVNHckg3Nk9uOUw3V2RyN2lZY0dIMW1jLWVQSUVTdXBTZGpuVE55cDBQcG01?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "US Defense Secretary Is Expected To Arrive To Israel On Wednesday - Report",
      "source": "i24NEWS",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQS0ZEcHFTMVM0WkpVTUZYNkg5SXdBQ05yUWZsMDBoNmJJeVNuZjZqOXJVOGxCUk5YQTFWZXpmc2VhbW16YnRGeHZVckdFdE8tUUY2aUlKV0N6aTZlZnlNN1BKV1BBMExXLURtSmJaVHhJTllUSWh5YWFNcFBkVHk5MTlRdkV0TzZkRWpVaDBid1E0NzBnR1JLeUJuNFQtbTVZLVM0a3BmX180a3F3MEFxWWpRNVhkOXl0M19RRUVBWUc?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Washington is subsidizing Israel's booming global arms trade",
      "source": "Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBMeE1mWWd5S0E3dnpVdXlXRmY4b2xxZjk3ZFZXTlVEUW01Y2lGdzFub0VieDFxMmJ0bEtxcldwZGlPb2RCLWplUUdYNFdIeTNxWWF6UWhHVklIS0NmQjg4LTZIZko?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Letters: U.S.-Israel defense initiative; Manny Rutinel and ICE",
      "source": "Longmont Times-Call",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTVREQ1hGSTVNU0psR0xrdVdjWmJUU0tBVlpnVnljMlJvbklGZTdfVE1mTkE0czljNEk5NHF3X1ZxMkdYVU1teldRSXExWWlVbnl2bUJIWW9vQXpLbDR0NFc0N2pZZ1FWQnNZc21jWFNnb0xGVTJIUnhISEJHejg4Wm54ZkNEUUd1eS1IdXFoWjRRTzBTd3lvRC1aYlg?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Israel ready to attack Iran ‘a third time if necessary’, defence minister says",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPa00zRURxc3AzWU1IOHhmaE45VHB6VFhLSDVJVHNFdHk1ZjhMQUEyeVJvNWRFcjl5SnU4RlZQUmJCQ0R3MWlZbHdsMHQ3elBqZW1haEN1SVZ3ZVluV29UT3NLWnNIVWxFYWxUc3E1b0lfOUl4Q0JiT1FvZFRVcE1GS05kazJJeC1WTUk4TmF4eEZHMjFXTGl4ZzZHbUllZHN5TVR2aU1Oc3VWd3F0a2lNZVFOTUlLNWZYTnVRajRNZEZwd215M0E?oc=5",
      "date": "2026-07-09"
    }
  ],
  "united kingdom→qatar": [
    {
      "title": "Are Qatar and Saudi Arabia Reassessing Their Reliance on the US?",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV1haLV9Za3VEWGVTUmtSY1lGTHZGTDZoZlBJenJLVGxoTDlwYWtFempDZlhlaGhGbVo3Zm9kNkxJbEx1OGgtQ3JkYm1naWhKU19hQUgyTGk2U0ttdHNyQTFlU2d0T29qRE1yNzhJYmg0cUdpYWQ2QkpfT25SU3BLdHUycE9fTlZvbF9hUC15TEpGMzNPUW1xOWU5cTc?oc=5",
      "date": "2026-02-26"
    },
    {
      "title": "UK urges citizens in Gulf states to shelter after missile attacks",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQWkxGaV90cEtob0lqM0RlT0hsSG5tbTkxdnNzWkFwRU9YcWc0LWh2Ml9iREJKMWxfZ1c1YUxSSjBjQ3pNdDF0aDJxb0RjX0FRZ01FVkNvSGUzMGcwUFJMLTIyVGJCakJCZzRlVFBCR1p3RUUxYl9tT0RLWkJJQUc2emRIbEdCWDh6Zk1FN2RYNHl4b1YtWUgyQjg2N0wyYW9tdFJDelhVWQ?oc=5",
      "date": "2026-02-28"
    },
    {
      "title": "Britain’s military interests in Qatar examined - Action on Armed Violence",
      "source": "Action on Armed Violence - AOAV",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFAtUmE3UzVRd18tUloyeUUzV1Y0cmNfZjY0X2NnTHBrM1gzaHRRZTZ2bjNjWDh6bGwxRUJ0UHhLU2k0ZFpiRnh6RE15WWRzcFJtWjlhQTBLdkl6QnNnRGlibUlEZ0FXdU1GN1psdnA1czdSNFJNaTgxVGxaVQ?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "Iran’s drone war on Gulf will test whether Arab nations strike back - analysis",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5nN0R2SmpkN2ZFRTZEeWprSkk3ZlJPZFNBb0lxTnE1M2RCdUFuUFJRMGtlU3pmTjRVS0JlbnM0ODhVa0Y2U3FzdVpnUGFORnFWYmNxazVHVnU2S3ZuUXpMXzV4eTJUdmpzanc?oc=5",
      "date": "2026-03-08"
    },
    {
      "title": "F-15s, Eurofighter Typhoons and Dassault Rafale Fighters: Qatar’s Air Force Is Now Fighting Iran",
      "source": "19FortyFive",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQbFFxOFQ5Ui1nU1ZMeWZvS0RGQXI0S2VPVkRhOVRwX0I1UjJ1cjhmUVFHb2ZGM203eFFZYW5jUFROWkZ6bXRGR3FwMnhQdmU3cUdrYW1aOXRsVDgwYzJWem1WM1RWcVVaNld1bHlTUEszWVJFbmdkUnZyZWdjRS04b3RjdU9Nbk4xQVA1SWhRYi1mZmhFSWlZdzNMR2YwejRhYUQxcWJNTm5hbFR6bjVIR2VWOF9wS2xQOHJZLVRfNUxGZTdzYWwyTFNR?oc=5",
      "date": "2026-03-04"
    },
    {
      "title": "Zelenskyy announces 10-year weapons deals with Saudi Arabia, UAE, Qatar",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPcVdSN3VBY29mS0R0OUtCRF9JazV6VmQzS3BoTm9YTzU2NF9kTE5KRGtnY2ctS0xhTkx5aTFMb25IVmFOVkNWMVRFU3kxdE96QkJ6NGJ5ek5OeDdkN3BFQ041bTZrY0ZvQzM1R1cwQldSR055QlJBWjJDczI4dUVfZkNUalZzeVhqTVlyTW9rQzZsZGJsaV9UWGkyM1hwbWRDNFg0RW5hczc3Y3loblM1NzNVbw?oc=5",
      "date": "2026-04-20"
    },
    {
      "title": "Four Nuclear Weapons States Are Now At War with Iran: More NATO Members Joining U.S.-Led Assault",
      "source": "Military Watch Magazine",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNaEZqZTdvSXp3SXFKcU5lMlVKNEtGY3RXdUR2WVdPQkhuUkpmLWFKek1kZmg0YnJjYzl5Rmk4WGlCaWlIbHJNdUMtbno3cEFjU0hsaUtabDFTblB1d25HZlN6NU9qYm03d2YzVm1jX0owYXVSMkZrQmp5ZkF3dzJTLXZjNVI?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Starmer Deploys Typhoon Jets to Qatar to Strengthen Regional Air Defense",
      "source": "Межа. Новини України.",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQc0ljd0F3R19ZbzNuX0RDVkRPRWMyTDZIdmRJaFprTm5CbVA0U2FRRXo4dTYxc0swVF9pYlNjaERvNGJ6RzRRV1dnVkllaUtwaGVNUllacW5CM0JTSkI1bUs1ZmdENkZnU2lacUpJaUlRWWJIdkN5ZmZkclRXR3dpU3YtQndac2k5Ni10Wkh4YzhHc0lWVzhqSHlIenF3a00xNnZR?oc=5",
      "date": "2026-03-05"
    }
  ],
  "united kingdom→united states": [
    {
      "title": "Here’s How Much Aid the United States Has Sent Ukraine",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5HelNkR0NFLWxjYno4Nlo3clRmU3NkYmZ6UFMzN3M1eHZQMUxIdGdYSTZHWW5Ba3pPQ0ZldGZWaHAzQkpxZEpFN2hEb3JvZmtfSkNIMWNHX0tla1VxdHNKVzVJWHRNLUJfSHc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "What the NATO Ankara Summit Missed",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBldmg3TXFGT3FDdzktRGkzUXdmbGxYTUZmR3lnNXdtOFlwcHNJNU4tT2ZYZDR0bWFlLTE2VzVRRDNyMFhacEVjTFk2YUVFV01zM09IczRiNXY2OVRnVEwxaUNMM01SX1lEcTlTUVVxX0w0U3dsT3NKcWJvZw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Munich Security Conference’s European Defense Roundtable Series Continues With UK Edition",
      "source": "Münchner Sicherheitskonferenz",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQYzZrQzlNRmdQMG45TExzYWw5UEczZWEyQW00aDFCbDB6Uk1fN2FBUE52VlQtd09pWmJtU1poZDFUZjVINEVTckotUEZRWWtFSlJ5endUeTI5eWd6T0phX1RhN1QybDVuMWttdUlZLWJCVU1XSjRrYmNHd01yR0FlQ1FUUkFCbXhnOHg3WnRoQWJsa20tUnBmcHBpeVFYc0U2ZUZyWTNqcVM5VWYwNzBCM1hCMlZkelZuYnVKR0xVUVNmZ2FTZG4tdw?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Britain is answering Trump’s call — and spending big on defense",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNYUFfRG5QNzViZWtCeXZWT042MDNQM3FSUmFfQUJSaWx3UG14R0Z1WDk1SE1rVU9MVmtrbmFRTlF4VENsRzVDZkRwZDVlNzE0UWpKRlNfbVUzZHhhYWJpemhHeUxwYm5yZ1I3MVZLckVQeDJCbm1kYjhJTVlZb1NkNnlWMEpWVlZjZjdlN0JJOGJUZ0JlRnkzRlg0M2g1elk?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "New Zealand Joins US-Led Push for Shared AI Battlefield Command",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9fVFM4Zm9kak45NXFUVzhZTE9ZcFByYjlLcHM3dXlHR3dxOUdOYUhabGhocjVWT19ERmN2TmVDam52czZIdHhxSDhURFRrZXJLbk9PYmxmbUM1SldPWE55TnVfSkF3Sk9MZVdaX2FqYVZmZkNv0gF6QVVfeXFMTU51Nm9oWXFjaXJ5Mm9XNUkyQVc2M25ndmtlR0diWHFMQS1iQlNGYlBpblo3cG4tNDB5MDRLLVFmYW15bllZZWtjVDhSWGl4aEZPQk82NFR4NlhyU1VTRjdtR3dWU3A1NkI4NjUzd2JER3d4WnZRa09LbGc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Cooperation without Oversight: The United States–Israel Defense Technology Cooperation Initiative",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPXzh1RzR1YU1mS0lOMDJ2dzFOMjlZTDEyUDg5MlYtVExRMVZma2RVQ1d1M0NtNUc2NkhaWm10VXp3LW1CcVBCQkdyRF9JSkdlaU0tUXlNSlBqczlGcVVTSlkwNDkxNEZnZFBiT21leU1RRGJXTzJEczhXcFpZV2NIaWhiRzVOcU5JTmJ0RlNvc0tJUG0zRVQtdUlsOUNSdXg0Ny1nOW85dkpXdzZFSDRlWmR6STlfSE9pQUVnUmtJWi1QcWlaRjI5Uw?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "The United States Spends More on Defense than the Next 6 Countries Combined",
      "source": "Peter G. Peterson Foundation",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQczI3UVpwUGpWb2xSTG82Vjg1Q25SU3JkcnhWQmxUTENmNGVKaGZmb25iLXVSNUdNZmk5anRLTDZRc2RyRFBhZnB6UDV4LTJZQnZqXzB2X1dlV3dFaVhwZ3hzdlctcHNPYWZOdFIyZmRMV2lFUjVNMGRiRlQ3OHg1S2E4dGNtZ2tHb29OYmZTZjhzZlFjdGZHcUFpNDg0UHRsdjFBb3ZUdG8?oc=5",
      "date": "2026-05-07"
    },
    {
      "title": "Broadening the Defense Industrial Base Is Necessary, Not an Insult to the Primes",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQTWtTODZEWXNjbDdxVi1DNHFjeVhJOWtCYUR0b1JoN0hnLTRTQlU5OGg3N1dhdV9qZU9Qa3k4ZEI4dGZ2bjZMS0FaUFl5OFpjSHhUV0gwdzY3Wktaemt6S09qRzVneXRVNjlzNVZLUEJKczlpV0lFTmIyOEFhR2Y5MTRMTkRjdS12SFdNOE9mbk9BM3hlUUtkUmNRNWluZlNjVFdSY0UxWWVPclgwbENydE9EaWRURldiLUE?oc=5",
      "date": "2026-07-08"
    }
  ],
  "united kingdom→ukraine": [
    {
      "title": "Here’s How Much Aid the United States Has Sent Ukraine",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5HelNkR0NFLWxjYno4Nlo3clRmU3NkYmZ6UFMzN3M1eHZQMUxIdGdYSTZHWW5Ba3pPQ0ZldGZWaHAzQkpxZEpFN2hEb3JvZmtfSkNIMWNHX0tla1VxdHNKVzVJWHRNLUJfSHc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Trump says Ukraine to be allowed to make Patriot missile interceptors",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNUnZfNjg1eEdZNWlueERQYzhObG1hQ05BN3FNUVlvV1dYRk5uakl0SHFwNkVpTmluWGo2aGdHc29lWFhZNnBWUUVTSTc1MVgwWFZ4cmM5aThvQldlYzZyTktnRG9MRXdUdGI1ekhTLUhGNGJlak1xcFJnYkNRQlMzVm9iV043djdqQ0lyang5NkJ6eVJQUTJUbHFDUlJoWkU?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Media: EU set to open €60 billion Ukraine arms fund to British weapons",
      "source": "Caliber.Az",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQaFZXV3pnYUg3dS1EcHlBc1NiWTI3N2xLSlNnb19xWFdYWHRsLXYxT0RLYmQ2SHg5WDJKQ2h4cUw2SlZmTnhrUHQ0N0NwbUpXdnAyV1lrVWxCTk1WZWpXb0ZiaWVGanJvamYxVU9UVk5mYm4zVkl5bEJUTE1hbVc1Z0puNUdQVm1uWmFxWi1ZUzdRLVNES096cVlxcw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "UK Develops New Long-Range Missile for Ukraine Free of US Restrictions",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQUVZZdkNxdnNWTm9wWWEtb05oSjNXZWpzbVoyVi14OGpJaTVRbGRkbXFjbmhxUnljczNRUkszbFlwU3EzN2lSM2hocjIxREVOQTl1UFB1OTNzV19zdjFELW5kd3N2djZ5TTlKZzlySkR5c0xyWm5IM2NTbm1ycjJjT1EyVW1BZkJjQ1J3WEh3WDlqc2FlYV9YeGRudTh3dE93NVd6bmJ5NDk5SDQyaDhLYkdGWTR4bEhi?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Ukraine: Founding Member No. 1 of Europe’s New Defense Alliance",
      "source": "Center for European Policy Analysis (CEPA)",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQeU1nVVczT190UlowZkswME5GbjdnX19ScWxVX2xWVTJLT2hXZ3A0YmxSUjVVV3VhOXVRSzF3VHZjb3dScXBkbnJxdks3MHFqNFdCWEEwaGVrY3l0bVBHejIwdHhvUVd2MVpPNXJYU05nME1NUkpmaDNnWlBDSGp2OVJTS3lIcXhiMkdXR1Etdw?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "Ukraine strengthens its defense industry, needs support in three key areas – Fedorov - Ukrinform",
      "source": "Ukrinform - Ukrainian National News Agency",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNeF81ZXYwMlZkRDJWWmRRS0Z5b3BpOC1KRFBPQThSeE4yT3ZUS2Vsc3hpOTUxRDZERS1Mb0l4d0d4aC1POGVicWNEWEs2elRfV0FjenViWkp4ZG8wMDFwTXJSd2k1cGFjcGl4TFB3dklXbmk4cE5TeWlzWGMyQ2I0ZHdzQ19XdFRtR0IxNDFibk1yZmFCNlJiMzJ2RFJMQ0pJMFJwMXBWdDRtdFN5WTRzOU5ZV2lLeDVXOElaSWxpSHFqeXNKX1k0QUpteFEwS0lt?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "United Kingdom To Provide Ukraine with 150,000 Drones and LMM Missiles",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNeHZRQkY3SmN3c0RFZEo3RWxKVlJJR21TbmlnbWxFZTNneDBnbEhWUUlQd0NrRktlM1FXNzJXRV9UWmYtVVhvMWZvOFpaNXJocXpLUWNidVUwOVp0cjB5Y21XVU50aE93c0ptV3VoOG1KSjhJX1AzMUh2SzY2SWMybg?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "UK pledges 150,000 drones, air defense systems in $1B Ukraine package",
      "source": "AeroTime",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOQ1B2WXJhcGRtSzZYQVZKU2xtLVdDZG45UG9CV0dHUHBneWkwYkFvSGlYalM1eGlINW5PT3djamY2M2x1Yi1hQnRYZlVfQXcxODFTZEs3aGg3U0d1LVAyTnFRLUNtdUxBcW9GY1MyeXNTNjREcmJVZVBKUERzdFN2M0tBenpSZ9IBiwFBVV95cUxPZ1ZPRmFWajRLWHBEUHdMb2VDSG44SXFFWHhhY3J0ZWR6TW5qZ0lDN3prUUFZQjhFYldoRUVMVld0S1ZTWVhpTEVjelhZd1Y5TURZVVZjZ3lIbzdfYnhrRnJYQUNHOHVDVnNsREhTd3M5MG14bldENGxSdldVY1pPYnUydGU3MjNPWnVV?oc=5",
      "date": "2026-06-18"
    }
  ],
  "south korea→poland": [
    {
      "title": "Poland Bought Up to 1,000 K2 Tanks From South Korea. The Real Prize Was the Factory",
      "source": "19FortyFive",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQc2VybWxCb2RvQWg4MF9vZmpscm5vOTdGUFJqT244eTJWUWoxUGVCRDl1eVFKR1I5Y3EzSjBocHlIdFl3Q0NSU2Q2QmZGblAtVXkxbndjYm5fblRvczhZbGpWc2hvbV9neUVhY0pHUjFwVFlscDhpVjhHa2V6cTlXSTQxRjJ6d2tkTmZWRllpUHR1UFdfLVA5WVdVSTNHZ1JaeEhzSFQ4Y0RCN3QyMEdpNmNiNDE0N21mSlE?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "South Korean arms back Poland drills amid Russia warning",
      "source": "upi.com",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOVHFmYkFFTFdjdklScFZMZ1pEank5Yl9QTFNId2FHU1FYNmxOUDN3TlJLSTB6MlRONEltSU90cEt5ZkVmX19TVlV1SGpqbEFKMEhhZ21uXzAwYUVpczhheEdEQ1NxZG9XU2hfWDYxdHA4M3FZTVdEM3E5NWwwaEZvSFVTTEo3a3lwQVEtX3RYY9IBlAFBVV95cUxPSHVaVllmRUx1OEIwZHZ0WmNDcU1jWnNvMmxTRF9ha2J5MHIwZjhxajdUWlZBNkoybHdVYl94VE12U2p6RXV4UXVzb1ZPOU1fQ3F6MXk0M0R0VC1LelZGVFB2STBfeHU3dkVvS0lzTnluTlotUzNaN04tTDRkQ3FUazdObXBoMk1uZHB1WXd2bktyN1My?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "[Editorial] Defense cooperation with NATO could cost Korea",
      "source": "Hankyoreh : English Edition",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPclM5OE51Q3JMR2VsMUtDeUVtUldRN01tYW1INWRGLVh1Sjhudm4zTkxNeXhFTkpQcUpDV2dDTXRzbUdsdnlNek5PZnVqQWxhbXV2SExkOWNvUjVncWU0LTMxTjVIWFJhMEJZaC1maGsxRmEtekZfYm1wY21HWkhBQjk0d0RvQQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "South Korea and Poland to upgrade ties as Tusk calls Seoul key ally after US",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPdi0zcGgyckZJX3hsUENfYUZLLVZmVmlDUlFZRjdLWXBRcUVtYnlWUjNHZ3hEVENwVmg2aHFjeXlvS1dYd1pyZW1oRjdnSWJGdGFaejZzR3MtX3NzRWdsMlNKRGpnUlk0dmtOWjNwVXNqVjdiY0Z3OVl4TDNyOTY1QmlVNEF5dkdPZGZCUmpzb2ozSzJzaXNhb3BzSFBUelFUaTdUT183NWFGX3d3MHBmTmhycjRRbkNycXV3NE1ZQmRwYTR2YnFn?oc=5",
      "date": "2026-04-12"
    },
    {
      "title": "Europe facing ‘Catch-22’ over US weapon sales, top Polish general warns",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQY1NnVkRBck1jMTNnblZZalpRR2RUbjNGSWtXUERTd2kyUzd4NzVaWGllQnVqd0pUcWJjdHo5a1UwLVgwNV9EWkhkci1IX1VySGc4TUl1c25VSDlCUG0tX0k4QzVSSWZYdllHeF8wMWh2d0p0MHFxU21Ia3pjZVpQNlkzLUNzaHN4bTZNZ05FZUthSU9qTlJyT1ZxZ18tOFd5cHFzN0FNWno?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Poland’s Defense Spending Poised to Skyrocket",
      "source": "National Defense Magazine",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPMG5pTG5PTEx5ZEZZZ0dxcWpyWnl4a18yQXlDU29fdlFDakRrVUVTSHNCMUVJaE1DYkhxQ3BHZ3g1UzRvRU9DZnJ3UkYyc0N1UWpUMlR5ek96SVJQc3RCYVdGWWV6YVpyTTV6X2pWZkl4TkFVSzNtbGV0R1QxMlBGNVJKSmZsbUtwTVhUemhLZDRoNERaZzNHZUpNUjRRdDgwemJmRzhR?oc=5",
      "date": "2026-05-26"
    },
    {
      "title": "Poland Begins Receiving South Korean K9 Self-Propelled Howitzers Under Its Second Contract",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOSzl6ZnlXNEdOaHVnb1RtOU5IZzBPbkoxSV9GVTJIOGRDSHNnbW5lUWJWdVlCVk91eExnU2xmeXpKNW8tNXRsUm9RSW9nbGNKR19zMl9Rc2ZuWWgyelZGcWJpVTZ0Zk5GNnBOU2lWMUZjTmRHMlRmYlVJdjlIT0h1U3JzT3Zkc1picGR2Qi1LV3dKRjBpWFd1bXc4WXVYV29QczJjNk9OcnpLMTdTSURJZnFWbG5jbHJncWZvYXZGeFRFbTZUUllKWU5nSlY?oc=5",
      "date": "2026-07-04"
    },
    {
      "title": "US Allies Are Becoming All-Star Weapons Sellers - American Enterprise Institute",
      "source": "American Enterprise Institute - AEI",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPdjRSZ3NEdUdNOGFxLUx0NFVWQnNSUGFYN29QcjhaMnQzLU1CVjI4dGZPemVwVkwwNVc3aFczWklJbnBxZi1PVzh6Rjl2WHNVbFczanBWQjlVUVhGWHNSeHJwWV91czJhLXVzZWU1ZnJjZ1I0amtnZnQ1bHNrbTNabQ?oc=5",
      "date": "2026-04-22"
    }
  ],
  "south korea→philippines": [
    {
      "title": "South Korea, Japan agree to deepen defense exchanges, cooperation",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQOHk2dEtfeE9oYng4NlVFZjVwbHBoYkhjWlNxLVFHV0xfRzIwUlRBN1lTMG1MV2R1N1p3c1ZiVXFPVzNycmprSEJkeWlMZEc2ODY3cER5RGRVbUQ1NlljYzk0UjBSajhSV1ppTFdjVXlXX0oxZkp5Zmh4WFhFZWQxd2loX0UxZGFwbGdaOVJ5T2xueTdkR19wWlpLY1VTRFRndHdSdTA5T3NyMWVEcVE?oc=5",
      "date": "2026-06-28"
    },
    {
      "title": "Philippines, South Korea hold defense talks",
      "source": "Philstar.com",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU2ZPamdOS0hhR0pwUFdzTHlFVnNHS1VsR1Y1UExSczdQQlFIdG15Ukk5YnJhajllb1kzYldHVVlFb3g4T1dhVmhtMnBKUTh4N1daZUo3OEdMUWhKWW5YalpSbW1lOE9Tckh6dTVRNVdMSDRoZVhSZFRZRFpySk1oVzNFZ2tvMUhaRGc1SlZIamhZVl9wYkM5cTRpaDfSAaMBQVVfeXFMT2htcVdBUUkza3VSUTRUN29ucXM0WDlPdUFGeHNOMFlRMHFPMTZjbWZYMksxVmZobTd0MmUwNHNoSEhUSlEzQVRWcFB1MjBmMktvcUlBcjBwZ2RLdW5GV3ZueWJQMUs2ZmJ0NmI4YkRaWlBfaHhSR3pLdFdLdTQ2ZjlnRU90WlZhMk11U1FqZmw3N3Qxc0N2M1UwZ2VYdEZ6OU9uZw?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "S. Korea, Philippines hold joint committee on logistics, defense cooperation",
      "source": "Yonhap News Agency",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBqaE1MaVJBeXlZLTFvNzBxWTF4U0xrQjRDMWRnUVZjZFRsODlSZ1ZUYzR5ZWJaR0x5c2ZlRUtldGRFUkhGVUNPSUsxWlhHWUFzUkwxT3ZHY2tQZw?oc=5",
      "date": "2026-06-23"
    },
    {
      "title": "Marcos confers Order of Sikatuna on Korean envoy Lee Sang-hwa",
      "source": "thephilbiznews",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPRFFXSXowbHBfOHpFbWxhVXlWMkhRb25KVTg3b3dZY2xjTUdyNlNydVUtMXR5VjNGRmdJOTlJTUNENnhfNDFERDJpVjJmaG9WejFaYXBqbFM4S2pFUm8zV0NhQnhOX1lMN2xYX1ZWcHduVmx2dUN1Z3RlYkVwVU14QjhQLXRwX04zZlUwenFnSEd6ajlpQnhYV0lNSF9TbGNsd0E?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "S. Korea, Philippines agree to expand defense industry, nuclear power cooperation",
      "source": "Japan Wire by Kyodo News",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5ieUZndUhsRGJpWVBJRHJUM0lSdE9FaVlDS0M4S3dNRDllTGFXUWJGQkVfbHQ5TzJHSEp0RTMzRTBybE5ITnMxbll0S0RjSkZCXy1YUEFna3prZw?oc=5",
      "date": "2026-03-04"
    },
    {
      "title": "US lawmakers advance major Taiwan-Philippines defense aid plan",
      "source": "MSN",
      "url": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxPMlpKdW5ZOUpweERtTngwWG9KSTZrc0xGUFdtZFlld01MdlJwVk9vNDJmX0EyOGU5TFpabUh2OTJ1M192MmZCVEhQQVhKN0JMU0FlOFdNanhKNmdrMVEtSE8zNEpUMERiUUlnUkh4enJGbjBvUkQ5OTlTQnU0enh5VWZPUVhMZDR0SURZMnZBODl3eW9IUUFoNTZubmFSUXFidGZmdnhEMkplLVlLaXRRVXhJOXhEX3RQVGZiRmJvdkRaZFhSMnd4SXdKTGI1OTdmX29XcFZOdXFnOHhIN255NzVKOTRnbDgxTFdjTkNsYkd6ZjRoN2Ew?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "South Korea to step up arms exports to Philippines as security ties expand",
      "source": "Nikkei Asia",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQbWh0T093RXlkbkpuOUFvUm93aGpXakN6QWVGXzVzTHJPUGpLTHVWdEljckQtZ3p5bkpOT3dKTmtuSnVNbXc2aHVwMjhLaGY0Q0FTdkZpUnhwSEZsQU00YTg5V29veVdlam84OVlBbmxTaHVFT0JJY0hYS2JUb2RzUDk0NTg4cjQzSVpiaXJDc29wUzFtMXpyclRLT1djcXFtUUx1U1BVSXBYM193QzFyalRfQkZLd1ktRzNpLXJpdkFSeVQyMXFSRHUwcw?oc=5",
      "date": "2026-03-04"
    },
    {
      "title": "South Korea and Philippines to Deepen Ties in Defense, Shipbuilding",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPNnozUG5scDJ2SzlyQXQ2VTdNZERJMkRPNnk0TTVnRHF3aFB6ek94X0NBa0VMaFY0NFR1ZUkwaFJEeDdEZ2lVVFVVcmNMeG51RzVIMkFDNy1Ubmhrb0NxZE8zRGNndzdJOTJsN054WlU1eEVWVlVEOUF6el93NUNnWDlhanNlSzM2RWoyNHE2Ym9teDNmUVNoVl90ZTZMcnU3eF9Nc18wbjN3SnB0akhkS3B2UQ?oc=5",
      "date": "2026-03-03"
    }
  ],
  "south korea→uae": [
    {
      "title": "South Korea’s Hanwha joins with Emirati firm, aiming to build K9 Howitzer in the UAE",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNU01FZ1VhVENzVnJ6Ry01N1FHZm83S0NfczdiWUtUUnJGY3pZc0duaDM0T0ZiSHpMLUs0dWtpdFdTRzNWbVVEMWZkMWxIR0VWZFh2bGk1M05PQV94S01pTXQzd3IwN3ljY2lwbWdtWXJEUDZtd01CYjlYcHo0dFFsU0RBbG5MX05DR1VGMlZzQ3NSRXJWbVF2aFRPWjd1X3ptN0lYTTBXSEQzZ1FMbTVWX3BJcTVpZDZkVFFN?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "KOTRA sees UAE defense openings for Korean firms after Middle East war",
      "source": "Aju Press",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1meEhjckhndmlqcTd6c2V6TFpMYU9aVnRRd2Jtd1BCbHBNRjI4QnF4a0N4UThzbGsyQVZ1emhLbnpVQlRzNkhwaW9wQ2RTUy1JdnItY0lvTdIBV0FVX3lxTE1meEhjckhndmlqcTd6c2V6TFpMYU9aVnRRd2Jtd1BCbHBNRjI4QnF4a0N4UThzbGsyQVZ1emhLbnpVQlRzNkhwaW9wQ2RTUy1JdnItY0lvTQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "UAE’s defense diversification drive: Multiple suppliers, local manufacturing, and strategic autonomy",
      "source": "EnterpriseAM",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQLXZfQXhfcWVzSDRFYS1BRE1iVzNoT2FlbUpBdk56SDNENml3aWRSSjhUc3BkYmN6WFdGc1hKdGd3TTMyaUVXOWJMb043NW9GSlF4aWRHVjdOUm44bVJBcmhQQTBUTlBfVWV1Rzd3bEszbE9heFVOTVJVdUpHbGtyRFJIVWxmSUEzOWNXSGYxbUlhRm8yc1lYNzhlNTJWUTNBTUI0aXlCOWFYVUdpWDBGWmZxeDdXMFhJblVIeGptZ3htNmZHX2hJS29tX18yQ1NDQkxZ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "KOTRA: UAE Defense Market Shifts to Full-Cycle Partnership, Opening Doors for K-Defense",
      "source": "finance.biggo.com",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5rc1JXZkpSWnh0bjk5dzBjODZtNE1MSTN6OVdLWWRjWjR4ZU8xMXJhc0gzaEhZZUhYYU90QnZ3NzdFYUdZRlRtQ1JPV2lHeUpROVVoY2NZWGVSMGlTckp4WUdOdThvcjNTMzRRblJGeVI1MThONFE?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "India In Talks With UAE For Supersonic BrahMos Missile And Air Defense Systems Sale - Report",
      "source": "i24NEWS",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNYWlJdURRejdpVXlGSFBmTUxWYnNBb3B1NkNES3NxWENxX0tGcDhLRDBXSS1PTzFfYlRBTkc2V1JiRWMwMFg4bUxXVFdQSmxadWMxaTZGUnFpQ1Zhb0tqS2QtYnNSb2xBNW93aEhDNXh1OGpacV9RRWdFNGJpSlRCT19COHVMbmViUWxZRlZaRm5tM0s1aWYyNnRyazdjTXJORmlBeWhyZkdFQk5tcXl1YWtxcTJpUG1KRnkzUVg1T280S2FqR1dPeEo3eWxacjBOU1daXw?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "UAE–South Korea Defense Cooperation: The KF-21 Factor",
      "source": "Gulf International Forum",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBVZ2g4dHNlQXA4MWRNT2xMRkFlb0xBQmIyeWNtSEFqSEhscUNrWTd2aHVXenB2dDVNR0EtMVpEcGNyeENNRVRFWGtLNUtqdEduc2FfQW14TlQtSG9mc2RTT0JVSkFKOExVMTV2VXZSVTZWQ1lkcENXRTd6SHY?oc=5",
      "date": "2026-02-17"
    },
    {
      "title": "UAE Deploys Eight C-17s to Airlift South Korea’s M-SAM-II Missile Shield as Iran’s Hormuz Blockade Reshapes Gulf Warfare",
      "source": "Defence Security Asia",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQQUdjNGMyeEx3S0RzeWdrdldQeVdkeHo1cUZZbXZtRWREd2ZjSGNyQlJkOWhaX2YxNHZGc0hBVG9LY0U0NGhsd2lVRFUtUlBuQ2o4c3FlLVZEenl1YmUtckxsLVNfWTFQZkRtWEJZd1Z5NWR1NXhPMDFLSm1sZ2tOMGpURG5hcXVyOUlNS0FSZFYzbGtzZm9IX2pwT0ZkVk8yZmpRag?oc=5",
      "date": "2026-06-13"
    },
    {
      "title": "UAE Urgently Dispatches Its Own Transport Aircraft to Korea to Rush Cheongung-II Delivery",
      "source": "조선일보",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNekpoWEU3WnoySTNpUk1RNUJNUkp5cEtFM0x6VnUydU5WbTNPTjRSSkwtTERsVmxMdG9NYU9tOEZ4Z1JnQnYzaFFKQU5kNlVmeFgtX0VGMnF3MlZPbnBaaTgtbXRBWGkzcmMyZHotd0c1M3cwTmZpN0VxSjh1OWxmSmhJN1g5REVa?oc=5",
      "date": "2026-06-13"
    }
  ],
  "spain→saudi arabia": [
    {
      "title": "Spain vs. Saudi Arabia— World Cup: Preview, Predictions and Lineups",
      "source": "Sports Illustrated",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQLTUxcUJ3VmJZQUt4R0RVWTZ6V2VzdG9mX2JsY0wtTWZZbklTbl9VbzRrWlZ1WWc3S3NuQWE5MmQ0UE00MWtGaUlNZTVDMU1DT1pIcUtDVTM3aU1hektfc01XdUVvUGpzWmdlLTBBUzd0bDhqVHZ4dmxEQWZQbUVLN0g3T2hEN19wVjJPbzYteWRMR0wyRWgwMQ?oc=5",
      "date": "2026-06-20"
    },
    {
      "title": "Spain vs Saudi Arabia Predictions, Goalscorer Picks & Injury News for Yamal, Williams",
      "source": "Sports Betting Dime",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQSXpjTTFSTkNZdGJ4YVY3aDBXbW11VlgxY0pVUlNvT3c2WjBXMnh2TDc2cXpYSmJuakd1Y19IaE1SLUNTWEg1bTd2aG5KLTBrOENUT0FwZjlrVm9hTzV6c2JlV056aWhEWjR0R1NFeDN5Mm8wa1RfYTdJblFJYlFWempRZkJ0b3gwR2E5SXVMMU9HU2t5a1dBZ1RjeFE1d1hDVEVmUUdfdS1Od2hISEE?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Spain vs Saudi Arabia: Match Preview and Predicted Lineup: 2026 World Cup",
      "source": "365Scores",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBNQlFmb1hHdHB0TkpVYnNrRGdvQW1zZXdsb2tOdFR6VmR4ckVZV2xBOFFNYi04OGdhQ1Rod3BfOEtsWUJ1MnBvMjNzODVVTDYxODdzQUt1VlhMRjBXSm9RbS1Qd041SDJJQkFMU3BwR2dmNV9a?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Saudi Arabia’s Predicted Lineups for the FIFA World Cup 2026 Clash Against Spain",
      "source": "beIN SPORTS",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWnhpYndaVm5POXNoNTNIdDF2ZVVlRUY2R2xGVVlMWWlmbUdWbTd2V2lGWEZLSlgzM1JKM2NuTDBYV0hpYmZ2NExCR2p6R1NPZ2IwOFdEbnBQTlcyMXQtVGxSVTVHMHRDQzUyS1hjMmxFRWR4M21DTkh5eWc5cE04TWNSN2VDMnp2MkE2VjFqT3JtMk9vQmdFNGpFX2gtSDE2bHJpMEc5MVhPaTFFNDhxZVY1ZnA3T2tQZi1CbFVaWjRtS0hDZDBudm5sbTE0Uk5vQ3cwOTNKcjlaMExLMXVHQ050MW1GbzU5ZDNldDRGUHhUQQ?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Spain score five to stay on course in World Cup",
      "source": "MSN",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPcUQ4VGwwR01fcVZTMDQ2VWUzWjV3czdzVVVDZkVzbkE3dE9jZXlOQktWSzJqOEZoTjN3VjJybXIxX3A4NnVEU0pPTVVmMVdnVlpDazIxZkg2Y3pPeURPMVZQM0h0Q2xEcHF0b0UtS3QyRGVzaFRUZENtbWlnZHozUlVxUzBTZnNzT1ZpTXM1b1ZLX0Zjek40YnlhSEFIS01MOTlaRFFmTXQ5NWh1TlBPaWRRRjE1MUVRUnRsR1Rjb3hHd0QwbTRWM2JRWi1oeFdHUU83eF83WEdjMlExaXQ1Z1duaw?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Spain vs Saudi Arabia Predictions: Best Yellow Card Picks and Best Bets Today",
      "source": "nysportsday.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQWVFmQTlhRWNTS2lRWGg5SmlONkFiZi1iX1RvakpHaXQwQTJRVTA4OHIzMU1zUFFEa2VGazNfbXJ3cGhOSDJvc2x1VFFzbEdCOEp0UW1COU5Fbk9ZWE1UVXVfWWJ3LW54aFJPZkFhaV8xR0lkbTBFaHlsOWNyQ0Q1eW9QaTE0ZFJhLUV4SHFpN01kZ2dqcGRrQkhjdjZ6aXNrUnc?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Saudi World Cup progress in balance after heavy loss to Spain",
      "source": "Arab News",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFA0ZC1IcXlnR3YxQVZRd29VbUw4WDdhVUtLMURlWFVKTkx2X1FBT0ZsbXdmRHNJSWc3bnhLd2Y1VjhqcnNNVmc1UWdXeUcwR2Z5ZElr?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Saudi Arabia, Spain sign strategic partnership agreement during Madrid talks",
      "source": "Middle East Monitor",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQYmZfWjFJa0lmQmU5ckdYcjZPczM4QXlmaDJpYmJFbFYxX19YYXNLdjM3aW5XRWl1cHVVNExVTEtmcXJxUjRGZkd3N0VQUm9POHdjQjlTOGpXUkFyMjNjSnBCRWJ5VE5Mb0trVkJoemNEaWJvUlBvRHAwVmZ4bGZFT1liOGlDd0JNX2xoQS11WHJKRF8yMzU2UElsWm4zZU9ZQmt0RGVmSEQ2MDFzdWMzSnZ2dDB4a0ZjNXJ30gHAAUFVX3lxTE9IbFBPcVpUVlZnWFNjbVZOOUotYzVxY0h0YVpLX2lQTDdfS3ZEd2FWREZSd1lxb0l0S1ZsREJRSW1IYVlEQUdzNlVEVWJ1bXFaTTJ0UldpU3JJdGdxUlJ2VDZyckFGWG5yM0R5QWktcFJ3RWR4ZG1kbF81OUJyVDEwT2FoSE1zRDJ2ZXVwSWprcmtWM1dzeW9nZ19zckplWjlHUDdrZk0yQTBFZXIzaHgtdmN0UEFRT3VMbFJTYXBZUw?oc=5",
      "date": "2026-05-14"
    }
  ],
  "spain→türkiye": [
    {
      "title": "Spain rejects NATO's 5% defense spending target ahead of Ankara summit",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNekI4enFDT3d6ZVNGbHYxcmMtcVdmZHZCTkIwOU9xYkhfT0RkUUdOQWQySElsNmt3VWtVNDVqVHhrWDFyaVY2ejNjU19HUWtYQXZ0WVJVZjB4ZWJDcHZBTEJqZ2pvOXdfV0xVaHlfREtzbG43em9STmgxN0ZXMWJMZlN2aTg0U2tHZkVMT0RiZjlUa1Bnek16OUNlVjNTT0VkTS1hUXVrMHJacUVVQ1lUblp3?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Türkiye’s defense industries chief holds talks at NATO Ankara summit",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQaHBQUThwN2hlMFhKeGxEYUxVcERWa3NNMGlsXzdmS0NMeXNlVnVDdmViZENkdU81Y19qeTFyQWtkbDV3dUlRTW9aSXBHaE5jQm8waURVT0hxanZqVlktQy1pWlllYWVXYk5maW4zTEJZcmZkMmsyQU8zUnBOVlIybGxWZmNQZHg5b1dGeHU2c2lubThjVlNtMklhRUdyXy1EZHZlLU0temJ0bVdRWHc?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Türkiye Exports Hürjet to Spain in Landmark Defense Deal",
      "source": "Politics Today",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxObHhVTzFxUU9KLVg0WW1QcVZYbllZNFpmWGlkUnZKNVYwTG04TEdnSk02alFPeWh0YWlJc09FMHZKSlh5ZWZWbVd4d0d0cVNiMDRobTFpRDBKWjN1d2FaM2xCTDhZbW1NbVJmQ2lxQUx6VGR4cU51MWhGVWhGdV85bUpNZ2RTVzR1Tlow?oc=5",
      "date": "2026-02-27"
    },
    {
      "title": "Türkiye, Spain emerge as aligned voices taking assertive global position",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPcG42dklSSjRxZkFvaHN6N2pPd2hiM3ktX3Y2R2Jqa3dxenR0LVRDaFBjbUFBc1h1YmYtTjJaZnNqX2dSY3FIanhtSU01WGQ1UWgwSUhqTzlYQW52TTVIeFRHR3YtUzU5M1JIZ3RXM0ZPVV9lamNsYklDUDNTaG5ybzBKOHNiSTl4OURuTVRKYl9sUG1oVUFHQ0VacWxyNkNiYUdJVDhyaUxpbGROSUgzVF9uWm5Fdk85b24zQzJ30gHDAUFVX3lxTE4zUzZ0T1ctckVDS201M0Q3Q1Vtb282Yzl6YkppMm92MTNfdU5CSUNhWFR5VXNoODdjeTQxUUhwV1FacEo4NWtra01QRF8wd0VRcmUxOUhlbTRJNFRVNEduT0JUNjZfMFZ1SEYweV9fdWxlTjVaZlNDTXJHdUloUEs5WjFjRzNzeXN6ckdJbDFuNElDbHlLWTM4M1l0MHBHYnA3czlBZ0xncGwzQ3k0ZkxyOXRBNnlydWJ6MGljcVpYcjV3RQ?oc=5",
      "date": "2026-04-23"
    },
    {
      "title": "Turkish defense industries chief holds bilateral talks at NATO summit",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQVmx4MjRES0VVNEVid2c2RERqU1JCaUtwMWhFM2ZOSjl4MGlxRHdicGtrOUZFY3Bubm9fLUNaRmtyaVdKTkpsaTY1MzFLM0JSMTA3N3kweVlYOG5fc2hmOGxuNUltNG1qTlN1blVud0tiZUZZX1hZaTRXR0xjTzFSTjBQQktuMUNXem1GYVdfRzJsVHotbnU0NWY0UktuR2taUFNsVk1fM1pUYzZTRUkw?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Türkiye Signs Deal to Export Hurjet Jets to Spain",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQeTZLZkQ0NFI5ZUpNY0cwTVJxRGJ4T3A1bm15UGhLY1YtZ0xkZE9aaXJmdWJDdU54bTkzaU8xbXlEUXE5YUxnbDVTSTZkYkYzWmo1ZmVWVl9oUzZIMDd5dHdUdC0tejBpeHNxOGg0aEJ3WFdnLUxYdW9MWFJNUzloRWlWbXRmdDhK?oc=5",
      "date": "2026-04-28"
    },
    {
      "title": "Spain's Hürjet deal opens new export opportunities for Türkiye, Defense chief says",
      "source": "Hürriyet Daily News",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPLVlsS01ReGt4WmVCNUdkSkg3enVRQ3RpeFRfQmJHc0F2V2xlNWo2dktXVmMxSk1UWXlxeEV4UXU4a2JkZW5rNGltcDNYZHhJam9zSk1FOVlvT2hVOEJXUkdCN2NyYXVVd1NUdHprN3JURzJhQkc4TktjaXpMeS1uU3NjcHpwSHRnOHZlRWJzcHJvcEFDNF9PeWtyelhXWVJaa1dmX3BnS3lDTTVtVGUyQ3dJbUg5aWhFTjEwa0VB?oc=5",
      "date": "2025-12-31"
    },
    {
      "title": "Spain Turns to Türkiye’s KAAN After Rejecting F-35 — NATO’s Fifth-Generation Fighter Balance Faces Strategic Shockwave",
      "source": "Defence Security Asia",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOUTNNSkozXzFoOEZyaVJjLVhQWHlzRnNpczJIbG9wZTRUVUp1Wmlzdm9LaXZyc21TZnVkb1hhclV0RFZJdkhTeDFXQl9IYVdnekMzc0RZOVd0TkxtVEZyQ2xzTmtGSUF6dEt6bWpZa2Z6Z0hKTWQ5am15SG14MlJKMnZ6T0ZLSjUtX1NNVjd1ZV9iMktld0ZzQ2c0UkwwMVhhOUZwbU0zVnhuTVR4WEROZ3plN0tOeUwyMW9zMVozNE0?oc=5",
      "date": "2026-05-08"
    }
  ],
  "spain→belgium": [
    {
      "title": "Spain versus Belgium: What the data says about the matchup",
      "source": "Northeastern Global News",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBITlFXNXRGNzJFb211OUZGVHhjcEtuR3NjMFVYLW1tRE1pNVhxUVlFT1hsRmNUZDBCR0NOdVhVSU1jU0N5WTNrTng0VDNEYXBDTVBCeXRkUU9Vck9PQkJHNjNTTzdSX3hlVU9xTkJOb2QtdS1kMUlR?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "The Young Star vs. The Old Guard: What To Know For Spain vs. Belgium",
      "source": "FOX Sports",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOeDg1UHVqX3ZBSTNtUXBtcmU1Q2FUaEdwWE90QU1YZEpEbldtRUppTFByeEpFZ1htWHM0WjhEbFJJRkhiYllBVjYyc1BST1I5eC00QVNXR29sbVFHT0VJdFhJMkp4OXlDUTNGVnpSZDRXRDY1VHBkaVpldGhsM1NPQ0lnd1lwZjV4ajhsOEVBWEo1ZjFvcHfSAZYBQVVfeXFMT1RrcTBpc3AxcFlLRWtNZTNTSG1CaFQwakc3eXRWT0o3cUdzdXpCU1NvRHlYSjljRnVXWUJUUjhEekFhVU1ScUEzelgzOFpLU1hibV8wd1VnS0J5akxWS01uanBQZjI1Rk9oNUZWMkl2Sm1UY3YtVEJOYU0yOHJNWXhXY2ZqUWU2TzlIZERadmEyNEt1ZTZB?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Spain vs. Belgium 2026 livestream: How to watch World Cup for free",
      "source": "Mashable",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQRE5tRmRCWGRYOHFERzdjeDBqX3N3a2xVVW1Mcjh2ZHo3cm90QlFhaEQ1cmI0UUJlSWhESUxTM25WTHlPU0hJNW1qYjd1NW5ZQmg2LXF6dEVfazJiNHY4bXBpcjNjSEdGZ2p4Zk14X0hMQktTVzZzbWVPMlRMVWRicnU1bWtabkdaN19aVzVaa1VEVDA?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Spain vs. Belgium World Cup odds, picks and predictions",
      "source": "Lansing State Journal",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPT1ZaeFE2bVNJVFhDdndpMlNUVWFZZ1d0ZE50WTVFWjQydFQ2LWluRDJyUXdhTmNvMHoybDJnUWFmN05ITFk3NVBYQ0JQc3plZ25Kb2kzdF9vWGswbVFOY2RkRk9ZTjQzSUhvNkppdzRITmF6aXpvYU1NUElWWjB5UGhVU0RMNk1GTmh5VVlyX0xEcmppVm9HaUtVcXdubUtackU4QTYwdXNzZWIzSVk4aVc1U25Zb19sMmtiUThsZTdNMm15OTV4aDhnVGhXdw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Belgium Bid to Crack Spain’s Ironclad Defense in World Cup Quarter-Final",
      "source": "Asharq Al-Awsat English",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOelY1WmNIbnpqaXZDbDM1M3o4QXFKM3JkSXV0MTZDRXFITmxNWmRxN092RnhrYVBlMHlWZ0w3ZGdXU1ZOVXRFRzg4cXhCYUdUWTd5cERjZjBmb2RfV2QzbEg4dm54V2l4MUNjcmYwUkNSRmY4Yi1tRmduanlZTDZ4VjlJSU90d1kzMnY5bXpUSE5YRkJxU0duUEZUMzd3NUs2azVtdDk0SjJHLVVrUUk2cHlkQjl5NEE?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Spain's unbreached defense faces Belgium test in quarterfinal",
      "source": "China.org.cn",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9jZHVYdjRKZEdoZGFJdEpwaGw4QXNERUZ2b3F0eUd5UGNfWFk2am80VnZ1QVAteFdGTXNoaEVXRF94V1oyUDEzU2pYTUJKQ1V0V3loRmxwa0NCTkZYREFBZ1J4SHFMTU5oQ2c?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Spain vs Belgium: Predictions, Picks, Odds & Lineups",
      "source": "Squawka",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPUWdYcTJ3NE45elRSb2pkUWxEQU5vSGxBbkoxTjhGcnh4cDF2aTNXejhwa19NOW1wSWxwNTRIRFJoeVdRN1F1WUgxUXc1OGxUNG85c25qbkFUSjN2eUI0X2t5VWEtWkpYYloxTWZxZ1ppcFdScjkwNnU2cXF3T21XV2xnQ3FxMG0zTnZjN0tuWVk4aDNFWEw2Wk1CYy1JTFlWQ3cyWXI4dEQ1V05yM0hfRw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Spain vs Belgium: Defense is the Key",
      "source": "VOI.id",
      "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1oaWY2UlRrUERvUVZWdGlmZWlDVGEzLXU1c0t2azRMSE8zdjZpcnFpUVdmaGJjWGJ0WEdmRWF4UGVQOW5EU2fSAUJBVV95cUxQUWk2VHRhU29iNmNUVGdSTU1yQzlFdTg2UjNLdXdQdWI4Vjh2R2xqa21SYW5OMC1PZjN6QVZYNmZablE?oc=5",
      "date": "2026-07-09"
    }
  ],
  "türkiye→pakistan": [
    {
      "title": "Türkiye, Pakistan reaffirm $5 billion trade goal",
      "source": "Hürriyet Daily News",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQU3FlNU5RYjhyRXl5LWdFOTNrdjg2V1VKR2J3ODMzMzZKY1RTcHM0Q0hlOGZNSkpQYkRIQlZhbUdzUGEyUmlYYW5wMnVnMjM0S0c1QVRXZHlOWnFMcndITmNLUWxOd0VYcVI1dDFDbnl2SHZET3lnQ2lSQmdGZDBCajJLVy1DU3EyRGVvR2xxRi0?oc=5",
      "date": "2026-07-04"
    },
    {
      "title": "Erdoğan: Türkiye wants to deepen cooperation with Pakistan in energy, transport and defense - VIDEO",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQTVdmLUhVcnd2SVlKS29lcVNTd1pvRVlRWDdkbVU2OTQzdjZ4WmRZS3F3emtTd1dzcWE4c1I5RGREWWVDUDVDZnVwYWJfVkRtZXlqN25XVkVtdVgxaEhzbnpIS21lYk5ONmZoYTA4UXRNZVk4eG5xektDWV9EMFI3ZFZHNVpRNVFyTmtRSWsxUmlid2dHbEhITWZkMHk5d0IzY0lQZVFDRlBjWW8tYlVpZW16MS1kN0U?oc=5",
      "date": "2026-07-04"
    },
    {
      "title": "Türkiye and Pakistan: The Unstoppable Rise of Two Allied Nations in a Changing World",
      "source": "The Diplomatic Insight",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQbWoxWHRZVTFUbUdpZWxVcTVnQkkzODJkcXE0QncxZThJSUhLZEw4ZEVmUWN6VVlUaEFhRmxkTF9MX3NtTEZYY2trU25WS0FNaG9FeEpWTXdBcG5VUElBMFFDS0sweTh5SlhYV2xrT3BFeVJXaWM3Z3NWSXpSa0VnUWFPWQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Pakistan, Türkiye discuss expanding defense cooperation during senior military talks",
      "source": "Arab News",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4td1ZGMVc3YUhGWWZuVHh6eEpBNnpzOXA3Vk9vSWVQQUo3elI0ZzgyXzB5dkxIdDNFRUQydWNJRXU2Sm8xbk5kLVRkYVJuWl9xMnZhZFg2dVg3QQ?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "The Emergence of a Regional Security Framework: Türkiye, Pakistan, Saudi Arabia and Egypt",
      "source": "Al Jazeera Centre for Studies",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNWnl4cFBrSGEwamp0Q2tHNzNSa2VjeVB2MFU4M0VZUFZMa3RqVERvVUJraVlNZTZKQXpUaGFyTnVvM1lXS2xHT0otbnlfRmU0LVR4VmtkY09pYnRWTHNJTE1ManZYX1NOWEpJOWs1Q0E1OTFadC1TWjFiMWNZQS1HUUcteW84WDZRTmpjNjA0Q2JqT2pJd19QalFkc1hGNnlMejJVWUxqQWxZSUtjdzZzSXBEck1lWlYwNDYzSG0wQ1o?oc=5",
      "date": "2026-05-18"
    },
    {
      "title": "Türkiye, Saudi Arabia, Egypt and Pakistan edge toward a new Middle East alignment",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNbjliU2hUZXN1UEJyamkwTl9mdnJ2cDlrbzBWcmR0S0xDT3U2cEJGS0FpTC1VUk9MYnNjdk5MY0N5bG9CQ2hlaTkzNXJ2M0Y2Q3RPRW1iSzFEREJ5Mk5iR285N1FFY2djVkpmUGdUeTNFOWx2dVQ1bkU2LW5JcHdZV1NNLVZDT1dCY2l6RXNidjZmdHJDeEw5Ukc5VVpPc0xXdmZrWUVTa3gwdmg4MDU1X2Y1NmFCS3FXSk9zX2pDTTlzQQ?oc=5",
      "date": "2026-04-29"
    },
    {
      "title": "Türkiye enters NATO defense market with ADVENT system delivery",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOdklLZUhtb3hZOTBHZXllNkNOSnhNd0t5dzBQVWlIQTlxbUI0ZGlPWGVRNjhHak9oS3NlbjlUSkNFdFVYdjdvZXZRcFV3UWFsVmxMODE3YUlrQnk3ZnFQcFluOWN1TS1faFRnNnp0NkNpWGVDQjRXV05FUDVDQ1Ixb25yM0NqTmZSbjNzbU10RnB0enZoVmwtNnY5ZTE1a1RsMWM5N19n?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "What Does Türkiye’s Intercontinental Ballistic Missile-ICBM-Announcement Mean?",
      "source": "Yetkin Report",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPQUptWlFkUWxxUmIxTGozQ0FackloLXBuQTdMY1VCUkJpeEdpZE5QeW91WjdZNmlXX2Vjb0pISWNrNS1GaW5HVThIanBiai1XY2JNcFlmSmhDNzRfcjBDRDlENEhpcGZJLXlGUDF5QkFCYW94ZVJCSko2ZENDbVVUaEVhYVFMSnFaZ1liNVFSQUVyb0M4WWVvV2p6bjN4UmdVcXp1ODdjN0FoSG9TTnBFU0wwYnRSMFnSAbwBQVVfeXFMUFJtcnVfQzVBR2NjZGZ1NXVlU1otRlRhel8ydTNURWxPc3lwak9IcHI2NGoxWGYtSVJhYURDQXBpV0UyNjJCSHRhQjlQZzVtMjB3b3RMa0tZNFV2eXFaZU5Ed3ozaWkwZmRER2hUQjNYSm5tUDAzZF9OTXdWSGVpSFNiSWEtaUwxVDI1ajVPS1hTWU9HZ1VLZmlUMTFKandGa3hxRFpEcnI2N01oLUdXWXlFVnJpSHhTdXBja1Y?oc=5",
      "date": "2026-05-07"
    }
  ],
  "türkiye→uae": [
    {
      "title": "Türkiye mulls Dubai option for S-400s to rejoin F-35 program: Report",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOTkJhbk9uU0YxUzd6YkprNWxGN1JWSkwzSFQzU1lOanRaT285NlNDdGFmZ0FtVTlGdHhsaktvZ0hTX1prbXFTMFlsVENUWUVSTHBPY3BnMUI0amhIOUhVR29Pa2ZaZmlTTjlGeWZOR1o1S291OE1hZDNQdmJJTlRoaG9WRFJMMGY2dXRUYjBxSmljdE1fLXRuRWU3bFcxZUJJelY3d1NSeVZHQ0JHMWQ4VQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Türkiye, UAE presidents discuss regional developments amid Iranian-Israeli escalation",
      "source": "سانا",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1OLVlOMGlTQTNYckZZYTl0bllqYXVkRURweUprOGw0WkhMQTVzemxIS1VyS3VTSzE4U1ZDVlJrUDFPTHI1VFJxbkNsWEM4VlRSaEtv?oc=5",
      "date": "2026-03-01"
    },
    {
      "title": "UAE ‘strongly condemns’ ballistic missile fired from Iran toward Türkiye",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNaDVaSG1WSUlPX1AzbVJwbHVLakNnbG15OV8wcV9aRHkyUGd1NmJGQXdHU0JWb1E4bmRxSHZKbGdIbUpqcWhhWDBsTFJsOEFzcFdyS3lEU3R0TVFzdm45TDU4cHd4SjhJNF9CYlRoWlFxblpFLWQxTV9vWE9vOUFRQjZKR0o0U1hQRHk4UldicndONGRkQ1JDaG5vZngyRm02aU9rV1NRWEdJLTdLWEdIcHB5SzhuUQ?oc=5",
      "date": "2026-03-09"
    },
    {
      "title": "UAE weighs creation of new defense fund to invest in Ukrainian and Turkish drone makers",
      "source": "Harici",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPazQ5Rm5uaS1GOGh3enE5ZkZtUVVZd0N2c0c1blluV1htVnNiaTVRNmp2YXF5QS1qdnpsRElpSHdQWjc2NWl0eGFpUE9zQWpIbHJpZENPQWZPdG1YbkplbXA3VGFOc1d1cm9pa1p6MjJtN2ZHRnUxQjVLN1R1LUszMENSSzByYkhEc1RtVEdxLVRDejZnZWhraU1pNzdrN0RoYU9wbEVSbVJjMzBQbTNVbWpYZ9IBswFBVV95cUxPazQ5Rm5uaS1GOGh3enE5ZkZtUVVZd0N2c0c1blluV1htVnNiaTVRNmp2YXF5QS1qdnpsRElpSHdQWjc2NWl0eGFpUE9zQWpIbHJpZENPQWZPdG1YbkplbXA3VGFOc1d1cm9pa1p6MjJtN2ZHRnUxQjVLN1R1LUszMENSSzByYkhEc1RtVEdxLVRDejZnZWhraU1pNzdrN0RoYU9wbEVSbVJjMzBQbTNVbWpYZw?oc=5",
      "date": "2026-05-06"
    },
    {
      "title": "Turkish FM holds talks with UAE president as regional tensions mount",
      "source": "Hürriyet Daily News",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOTlg3aHUxX2QtRWpBUHlHLTY4QWJXemF4UXQ2enZCWnJ5dVhDQW1pdDFnYThaOTdLWHd2NkNFS0YyRTFNRTYyS0MyaG10bFhEd3VhcnUxdzdKYWxHcTZNZlR2dXRoUXR1LWl0V2t6TlZzTjdadW1ETklPS0VMQXUwYlJneUhIUWE5WTVEWUpnVnF3RmpqS09wSktfSlAtb3NYbmw4R0l2NVB4LUJ2dlE?oc=5",
      "date": "2026-03-21"
    },
    {
      "title": "Iran reportedly targets UAE with missiles, Emirati Defense Ministry announces",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPNEEwMWJpUlgwMVVmaXRyWlNmSWROaGxGbUJvRV9ERHBxS0liaW1TcEVULUtmSUYxcWJFRTNGek5YRXJoTVZQOEpyTmttb2ZqeVhqMDVkU0NxSzBWbjQwRXUwbG8wTHdIT2ZYXzZPX3pwZDgzaVBuNF9BYnZDV283Q3ZfOHNXdW9salpLNFhxNkdYdUY1QU5ZTFVXRmdsTHNzZEVWQU1TNkFPQ1ViQWNSN1pkNWtHZENRYkxheA?oc=5",
      "date": "2026-05-05"
    },
    {
      "title": "UAE condemns Iranian ballistic missile strike on Türkiye",
      "source": "سانا",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1Da0YxN2xmMng1MHcyNW5IVXJSMGR0R3Y2c2NzZFUwbHdpNWJiaExOTXM1ekUtR2lvMFV4US1LbUVEMzJ1N1VLOVQ1azU2MXB5ZEgw?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Erdoğan delays UAE visit, due in Ethiopia for talks",
      "source": "Hürriyet Daily News",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPR05ZcTNDYXF6TXJhcmNrWWUzRDBQOVFkMHdPQmk1ckw5RlpUWGROeV9ZbmxQSmdVbzN4ODZUVDk2RE5lTERrQTBTUnl3UEhFNHBNQjNSQTlTYmNfRmx5ZmE4NzJ4cEV3RE9WSEpZYUVmbEJHcE1wbDlnZ2JWazZkQ0V1VWZGQzNKYU04aEdKMmQ5bS0tQ0E4MnNheW1DSVBPRU0xQ1NGQlZQS1dqOVhscw?oc=5",
      "date": "2026-02-16"
    }
  ],
  "türkiye→ukraine": [
    {
      "title": "Türkiye to continue funding weapons for Ukraine through PURL mechanism",
      "source": "Українська правда",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE01VVMxT255eXA2UTdDSlFTMUx0cnlRT2dFSG04NGlhU3J3T3pJYTZSM1J4bWQtYklXdEJjbTNVS05zZER3S2xpMkpPQmNoMW0yX1BGT2RwTVVOM3hIRjNmU2xqZXXSAXBBVV95cUxORm5MVDNQNjhzcEthNFZKTjh2ZHpYeGNXZFhnalBBMnhfYmFOXzZId1lETkV5V1pJU05uRENtQ04ybUhVd0RpQ1lWX1g4dmg0Yms5X3lwMzBiRFdKZUtQcERfXzJvdkNQcDlPUzBIV0JT?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Türkiye Joins NATO’s PURL Mechanism to Help Finance Weapons for Ukraine",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOdkdlcmN1YzBBWm1tMk1TTFBMTm5aOUpLOFZLZldxU09mUlJHZHh1ZXNRMC1iczd2R3VVVXdYRDY3dXFTMXY2dVc2eEQ5MTFEdWxSQVBKdkotZFNVOHktdWk1OGhkdHFsV2l5RWhULTRmdFlLZ3FaMnpYUTFJWS1Xa2FyM3hBXzdaVzlQRXV2QWd4dVpjTjB0eHhxcGtTcmxOZGdrbHlFLWk5OGRoTW9nS2NTRkNXRktu?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Hungarian PM opposes new arms support for Ukraine at NATO summit",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPVDF2ZUlfUVB3Y3ZxUml4ZThOaG5COHRZc18zME8tNVJQOTM2a2JrZExZQjRLR1pTZVRYSXdrOXlwX2lveHZmTXRpZ3NQNDlvcEZibXB1Z0RSaVFCMUg5c3pJVnVuTFB3NzFJQTdpb1U3TFU1OEoyRzVmUzNZOU1yZERNYU1hTU5wajJvQmtTZFRNRHZSaVJVNzIxTXpOVWZnaTZJV0sxb1lyR082?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Defense push, Türkiye’s role dominate NATO summit amid political divides",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPQUg5czNIVVR6ZHpaQ2tDalZ2UkdMSEI5Q3FTVHREUUJvSE5NUG1sSXVwQ2lMNDhuOG55LS1zZlFrdUgyNkJpWU5GMjVWcFRZMU1RSXJrcjR4UGR1WjFaM2k4OWEwSUp6VklQREZMMUlsMkx0WTFSVy1ycVJWMWNkRkhGSzdkaTI5bkhlSVV3WDNtRXZwc05yX3E4a2ZnZlpaMU1QU3dYMS1TU0paWEp1R0NpQXBGUdIBtgFBVV95cUxPQUg5czNIVVR6ZHpaQ2tDalZ2UkdMSEI5Q3FTVHREUUJvSE5NUG1sSXVwQ2lMNDhuOG55LS1zZlFrdUgyNkJpWU5GMjVWcFRZMU1RSXJrcjR4UGR1WjFaM2k4OWEwSUp6VklQREZMMUlsMkx0WTFSVy1ycVJWMWNkRkhGSzdkaTI5bkhlSVV3WDNtRXZwc05yX3E4a2ZnZlpaMU1QU3dYMS1TU0paWEp1R0NpQXBGUQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "NATO Summit in Türkiye to Focus on Ukraine, Euro-Atlantic Security and Defense Spending",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNcXhOTzBRUGx5aGszZGZaNVJxUXgxYktlVk5jQ3N3X3FlRWNVdTd2THVHN21QXy11eS05a0N3TXcxZDFJSUl4NWxhaHhfOE9nREp3a1dwRFB5R2lOVnN0REdGdXdxNFY5bUhEQkRhai1sY0Y5WnhhTF8tWDlFWEJFcnpxWkVYNkdSS2YxRjllc2d6ZlhSN2RFaXJNajZvMFd5R2pBWUVBU0xlc0czRVdtdlBUa0VMbVhhVWc?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "NATO leaders open summit in Ankara as Erdoğan calls for closer defense cooperation",
      "source": "سانا",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1xWGFpYjh5NXhCZXlSS1AtQ1dzWTBDWmw2OVZsc1dQREpkYldhMzloMDBTd2UxelhUck42S0RRcXZsNjFjS25wWE5ENGg2d0VV?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Ankara declaration: NATO reaffirms alliance unity, collective defense, Ukraine support",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQd1hwaVJ0SnVKMmctNXhxMUYyYjIxSHpRYmpidkhUT1UtSW5RWWxTU3A0b1ptU2doaU1YSk5pU1FHUVZzMlNuNnRENk1TVmM4aXY0MUNDTnFFZjFEZEpqR0JHcktJMHdOY3NFUm5vWEhRaFhxYkp6TjNfcF95ZDNQTzItU3JIeGZQZmt4aEV2bDBNd2RKWlQzOUt2MnlUR2s3OUxfRlhLanlpbnlMOGI4VW9PZlJXNUJibmZjSWI0NUhtZkk?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Ukraine says NATO summit yields concrete air defense commitments",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOMWQyQkZpMlhmSmRiU3REbEF4R3hGQ1JocEtJYllQNVNkTldLTVJmTGdIVWFyZV9nTTR5ZjZmOURQdkhoSGoyZjlyTXh1MGM5NVdNM2RMYVM1ejhURGtwdW1veFRqSlZFUm9rNUR3eVV6aHJvTmJUQ2pXTzctX2VHS20zajBvSmF1WnJEdjZ6VnZrNE5qS3lkb0toaUY2ek9CWmc1R05OM3ZDTDh4?oc=5",
      "date": "2026-07-08"
    }
  ],
  "netherlands→ukraine": [
    {
      "title": "Netherlands Has Maxed Out Its Military Support For Ukraine",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPYS1OdzJGUkJQdUdyWDliNTZWd2dqRWppNmNla2FnTGtERW5RWUFaZ3FBUEtOdkdCMHd3ODJDTkxEVFNyQWVLNjdzT1BCV3hPVE45b1RKRzFrNEdKaFRmbXlmUXUwcnY1cE1iYk5tOUI2QmlXVGw5TjM4YWVISTRsRzhXT01NZE1BVkRabnc0blJKSXY3Z1dEaTVrcmZ2MnJBWUxBMUEyTHFwalhwSlE?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Netherlands says it has exhausted its capacity to provide military aid to Ukraine",
      "source": "Українська правда",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1RNXhqUDFKQUJMd2xTQWE4QWJka09KQ01xWi1MOExHZU5jRTBJeUxiLW8xNlF4UzhyVnluTUVrYlpuZWE4ODdoa2ZzdUpRSFcyVzdqQUZPd2Nta3Atd2hoLWVzQmrSAXBBVV95cUxPYlNWUElLTDB4OHk1MXBobUk2UDBnemx0ejRqeFVpQ1FCN2VNVTV0T2pvSzNaVkxMM0E1UUYxZ3FRRkIzV0tTOUxDeU15ZnVxRE5kYjhnNm0yWWRheDMzQmVoVmxUcHhTVmZxanFTZmNB?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Dutch PM: Drone Deal will strengthen Ukraine, the Netherlands, and NATO - Ukrinform",
      "source": "Ukrinform - Ukrainian National News Agency",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPNHdVV2xuQlYxMGtkc0ZVUU5vLWV5cHlleVhQejdXRGgteTJUdVRpSFRhdkQ0Y1AyTlhTQzdLT2RqaG11b3JOOTVRWWsyX3VHTWdCaVlUQy1iczBRMnUzRkdhTGJNTHZQM1FFZ3RkalN6bHFubEUxNjhTaWdWT181b2c0NWNvdHoxczdEcnJFS2xwcHBmRFJtMzVkZHhMSTdIRnk4T19xWlJ3WGw0SjF3V09kX2ExOGpCNXdfdC1ENEQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "“Ukraine is becoming a security provider for Europe”: Ukraine signs Drone Deals with Estonia, the Netherlands, and Denmark as Europe taps Kyiv’s battlefield-tested weapons technology",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPOXo4VGN3bzR3eWRTNVdqeU5XN0FfMHpNcW9kZDlvNDRRNEY1V19qdFdkNnRLdDJOZXhEUmpRZXF2amEtNlA1WWdJbC1Zd1NQRmU0RGJxeG1IZzdBOFBtOHJqOXVvdUtwOHlfWUJ6X1dIVmVYck41ZTc5bGFFTTJmTWJoSHBNbUJtemJjTVlyN05aRTVUaXJZRm5DVjdPdnZSOUtrRUhhNjM4QQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Netherlands says it can no longer send weapons to Ukraine",
      "source": "RBC-Ukraine",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPakZEX3VfZDYxLXZVRUMyNDRtV1A0TnJUVkJJZm5vLW1mNVVmZGZuYVppY1dHUWktQno3ZUZja2xDUVktZkI1ODNnUXF5VVVKNjFLZko2eHktaWIxbjh4MGI0Q0hLWVJYeEJ0N05SZXFUMWdHWnlQUV9uSmtEdmZXc1VuVXNBMVluU3FGendMN0JlS0ppOHdoWS1R?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Dutch PM: Defense minister's remarks were a call for allies to step up support for Ukraine",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQcnZmVjNtQkI2dXRXMjU0cGZ5SktIVmxFUzRSWlM5c0thVWFlUHJwM0k1NjQwRnZwMG5Xd1pFYXFBUkZEVFRvdUtEOWVDXzhvdXZfQzI3dVl1bWMtTmhoel9YLUlZTWZKR2xPRUpSNXdzY0d4Y1ZyMEZCWmJZWFZpOGVHdTZieXJESkk3YWN6RGxDRlZTRXNZWVNLQ3EyUXE4cW1UMWJ5cXJDYzN2Tl9TYzZnWTctR3FyQTNJbG9VTQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Netherlands pledges Ukraine $580 million for drones and other weapons",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNeElYQklPbmltLUZRbmFIc2JuWnh0YWVEQVhhbEJESmNlNU41VlRrbTFNYThQSHM5dUZPSm92VzdKbF9MaV85U0tRT3dXcGthbzVJd0Nmem5iVnlZYnozUmU5ckFYR0RKYkE2UDlKRlpmd21GeENHOTg0MTJJTmItaTd2dXc5RXRmYklMc2NKc0pzY0NJYXJZRTlacUNhLTU3RlFkTzBsY2c?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Netherlands exhausts direct military aid capacity for Ukraine",
      "source": "The New Voice of Ukraine",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOalRGakVxU0E5RUx0YTZ2UlRRbkVLWW1LMGd5UWl5OXFNTFRZWnlHM0Q5ZGpiRS1RNXdwSW5BeFFaTkJyZlhoZXBpZjNIZTlkd1l4RlRndG5wRThRQ1ltckhYOEJMX0psRV9sSG5vb2VuTml5Snc2SHk3bEdXZ1dTcGs4R0NLazFjdGZyeUFzbTlUSzhnM3lMMWxOUWRTOWlI0gGcAUFVX3lxTE1MTGljNFZudndYRkdhaGNldXFkZHAxbGhOcHVFYi0tSmRxRHZxMk5GcUE2NURtS2xOOVZ6OHBZYi1HY3BIc0FvTEtJSUJiU3pYenpXNEJBWVkyNEFKNFNHaDUxMFBMVWJ2aGktOWFGZkc1dlZEVWxLbXBkRmxpY3lZMUk3ck1Tam9rTmVRSjdrTjM0bUNaaUQxcTNVWQ?oc=5",
      "date": "2026-07-07"
    }
  ],
  "netherlands→united states": [
    {
      "title": "NATO allies to sign a raft of missile deals with US companies",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNdVZnU2p1US1zdVE5Y2o4aHJ4Zk9SRTZDeDN1RlJfWkZCWm5vanB6VFYzRkc4akFRckRqXzNFbEJRS1FLQWY1TUs0V0Y0U1ZWTU03QWQ4NktpWG4tU3k2VG1rM0pCWEU2X3czMUFYaGlxNVpuYXd4TU0zTzlWb18xWEh5aEZRNVpOWC1NNzNCbXNvcXA1MThOeU53?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Netherlands Announces €500M Package for Ukraine Air Defense and Drone Support",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOUnB4UnIwYTJhaE9YQjZic1ZYVENNejMzbGExWXp5ZnVTUHNIUWxlQjdqcFRTSU9QVzM1VGVjbFI2czRoLWowTFVLdWRWNFJoSDFyOE0tYll2SDV4ZnI3OXdRTEJ6UGZid21zM2gwUlg0YXVkWkREVk8zSWkyYWxGVmdIMEUtYzJwN1h2V0lnU1pQVEZfVk0zVWItcEVITXdmS1ViaXB0dXEzelNvMkNsX0NhREJGdjJq?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Netherlands pledges Ukraine $580 million for drones and other weapons",
      "source": "Yahoo Finance UK",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPSHRQRF9kQ2U3NmNQdkJSeXRza1A5YW4zbG5yekNPWThRbXRfNkVxRTNNckVzeTdXTVp1ZndEMXM0UHVpYU9NRVNfTXlERnVlV25jRHNaa29DWmhmS2xHMGVLU1ZiV212MmJzWkNFRmFpZm1neXl5WHhPaFV3WS1EaEFYNGotX1ZPelExUnRBQXNrUQ?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Netherlands aims to cut dependence on U.S. security guarantees, new strategy says",
      "source": "NL Times",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQUWtKOVdHOG03VjhaMnE2WlFTc1lWMUlxSjJhNk9SVGhjMzYtVEFCSnlMeEkwUDFqdTNrZlN0UkNVbWNQbm9fRlFFUmRza1prbS1zTGUyY1lIcWNsQVZZQUVPb21ETDZKNkRad18xLUpwMzdrbnR3c2NqUkh5eHQ2dWQtbS1fc08tUmdJWVB0RXEweWdJOGpxMVlnM2d3SG9hZkJ4ag?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "What Rob Jetten’s new minority government means for Dutch and European defense",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOZVlLSGFzbnhmeFJiTWh5WUxWU0tuaTBKdEpMdU83WUZSWElIdWlWamZIaGxVcnN6UllsbTVkY1RfTjFSQl9CbVRJMGZpZW9SdkVsb1BUTFZGYkdyMmNVQVQzQUFsTUdOSjlVLUZuOUl1bWcyS0E3ZHV4MGNmNWNCUzdnTHVsbWdMN01KMzc4X29XT2cwamo0akJFQkpPZlJHRVU1TVp0VjlhMEVOVmszeVNTUGhfOWNIQ29WWXRB?oc=5",
      "date": "2026-03-13"
    },
    {
      "title": "Axient Systems BV Awarded the Holland on the Hill Freddy Heineken Award",
      "source": "Netherlands and you",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQeW1MdktabDAxRFVNUnY0UU1aVm40MlhtcXY1Q0pDelJrY3AwRTV2a1RldjFXWExiVG03UHdLMWk0SWxIUlJtSE5IWW1uNWxaQmJyak9ZalEyaFY0Wjd2RS1xemNzV1FrSlp0NnRsaVhDaXJKRTgyT2U2SVpOVTdWWV94WmVmMTBHdjJSU0pRRzNxWG9qUEk2eWQxVU1FTGQtN3AtWnV0RjdRREtBUlFWMHlaYmZmVUJnaWdtUld2ZDZwUQ?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Only 11% of Europeans trust U.S. alliance as defense autonomy gains ground",
      "source": "The New Voice of Ukraine",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPaTNqQTVkUTZFeHllNGlKazV0REFfa0hKbW1vdTZKMTdSOUhsNHlFaEFqUkhyU1c4ekFoWC1fQi1qR2xKLWlPYmpRajBLRm1pYjNqLTJ6NC1sUlFXQTVyVW9tb1NEdlJRM0NqNk53SDFGOFp4a1N2bGZCLWh0SXR6ak5YdUdIVjBURF9aOUJiNzlGNU1kb3I4SHRhZ2I5OXJWMHpURzdhemo5Q3pidDd6NWpNcThIQ0lvUVHSAbYBQVVfeXFMTVhSRXB1cnNUaFR1ZWgwakFwbzlsWVMyZHJlNzBnNGdwRk9jN3pQenotdDFRa21ieGx4cTZsaWphWkRUS2x1WTN2ZlNUa2xNLTZxNUVwMnIxdmJvX05wOVJXVWMzWGRWWlRzdl9teHNZU19uR3RnRDRpekNMUlRRbzJzTmhodnJJek5Ha2w4SGV5QjZZUkU2aHlTUkxtWUNoVTNqc0lRdE9Zc2NYd0pLcUdFVjd4YWc?oc=5",
      "date": "2026-06-10"
    },
    {
      "title": "Netherlands announces €500 million military aid package for Ukraine",
      "source": "NL Times",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQWXR0MzBWbm5xZWs4ejlBcmhPV0UxeVBGTk9LdEpHNUtMY3dBdUZWTGIxV2tjZ0FGT2tHOWxRQklqWlZMbEVfNEFXTVF5a3BYN25Fa2JwZ2l0OFBlTFZzLWR4SWtKT2JLdTdfODAxeTM0dS1WdVNvM3lsLUZRR2RLMEl5RzJCMVBVZDlwdEtKc3RSeVJiaUpBWlNB?oc=5",
      "date": "2026-06-17"
    }
  ],
  "netherlands→pakistan": [
    {
      "title": "Naval radars, choppers & battle tanks. What Jaishankar meant about scope of Pakistan-Europe defence ties",
      "source": "ThePrint",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPWEthN1VXOXNCeU9mNlc1VnZqZWpvVVJkVy1KeHZjb0xjWEJQVUd3TkhUdW1JbXZwcVpyaEMtcXNBVGl4SGhCMW9vV3NEUVJTb1dwT2dRcE1IRnRiNFZVY1lZc0NNTE40SDRsZlZsd00yUHlpU1AzbGN3UHduTzE3Z2E1T2YzMkV2d0dja3NldTQtNzBFZFkyN3ROWThtdzM5R0R6aC1FcWJNSHRYdWc1TFNBbnU5cVRUNnNPYlhFTlloenVuMXI4WmlWN3U5a0M2Q0lv0gHYAUFVX3lxTFBzZkVveVhJT1VwRDMwMTRXTDVFVkIxZ1JhSFdYeEdNRkZtbzBpa2V2YjhxMVpjd0hIX3dxaG5fbnBqSEFMek84T0ZZVk1HTlpaS2QySjFpTjdNT3BtbDJNQkRjczA5d3VGamNKYkgzQlNWVWpub3RKb1ZXNDkxUVlqZkQtMllhQjNhYTVGQUhpb2o5RURMdGVJUmtRT2drbXNQbUZqRG5DdHFDbzE5OWdJZ2hHZkgydmIzRTRKakpnbjVXaTBKR2QtUFpoUm1iNFRzWlptM0NFaA?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Netherlands cites strict ‘end user’ agreements on arms exports to Pakistan as India ties firms up",
      "source": "WION",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQeDhZWVY2UXYxYmFScDdkVHI0LXhWNTRCemFTTENaU1NEeFpNdXVlbk42MF95ZVNTOWtJMVlzNG83Zl92ZGNqTGd1N2d2cXhQbG51Q0pSaGJFek9zMU5zOVVRUVBlS2RCamRTZDI5ZzJvTVY2QmE1ZnJyb2daWjNhaWVDQmd1bDVYZE5WejRYRGFERTJUUk9zdkEzSU9haWg3RGZ0czdEX3hFNU1MTUZNZmNWVVBSa3p5T1FGQzR0QnJnZ2Z1eG1kVmFpVGlDbXRUbWx6ajFR0gHbAUFVX3lxTE9FdEliM2dwQksyeDNFcFZBX2ROU3hab29uNUQ1Y2NnMWpSM2ZSMUlib3lQdWVpSGpFc1otUjBqR01sYkZocjlyM0RLZ09mRTd2QzBVZ0x5cWNOZEp3ZUxWcEN4TXZ1YVhkTTNvZF9jOEJaS3ZqSVFRZGlWQmM2WGsyTXlib21GWTZJQ1FkaEJIT2gyVlZVTGRoOXhobnNyNnVDbkZkWnZpMjVrekdZcVJ4LTg5bV9MTkpueldSelZCLUNIdjNOWGFMVWhaSHhWUzBrZFVROVhSSW9SUQ?oc=5",
      "date": "2025-12-19"
    },
    {
      "title": "Rajnath asks Netherlands not to supply weapons to terror-sponsor Pakistan",
      "source": "The Times of India",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQLWprMFBhRHVlbktUQjFrcTJEQXBRV0VPNHBReHdCYVlaWlJwM0NweHpHbG1ra0NJdXVUeDdvVWlyM2dLVWR2N1g3RnA4WkZxa3VJbXBsT2NzdVNBR29UUWlaRVQ1dXpQZEdxNHFTend1ZEE1T0FBTVRoUmFsLXBPMFlweHc2c1BSSWpzYXVpczlQekM1dmRhc2dtZGp0cUdaclVXOVRCbjFWYW1XRGVIRlBUMHYxYkVWTWd5SktBWVozU0Y2TGY3ejM2MXhLbjNJOGZ5R2pDYXbSAd4BQVVfeXFMT2EwYVBzZllKenkwNEtYaDhEdzVDUy1zUGRPY19HY1FrMWtQS0xPckVpR001NDlLcV8ycVpoQjdNcGxkdUFCakpNVFd3S050UF9VMVdrV3VLaG80R0Y3R3pVTWtKVF94LVNoM3BsSzE2UTFKQmtDdkJjeGczTk5wbjFyQ3k4enQ4UG1mRjBPN3hPZDc1QlRSd3BSODNpZWU5R2oxZU9RNHpYZmhuRkwtaUQ4Zlp3UnRYUXVldmhaVDE2R0laeTFMMGkxcUJqcl9xRVhDcV9KLUdLdGd4ZThR?oc=5",
      "date": "2025-03-18"
    },
    {
      "title": "Which countries have nuclear weapons? - ICAN",
      "source": "ICAN - International Campaign to Abolish Nuclear Weapons",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE00dmVibHotRWVsM3pNalpEZ2VMN09kSjU1QWNIZmpVRFZtcG9YSHpPZHlBMVdXUHdYcTFraDltNEtIejNYeUF5aGhpbm1GNE0?oc=5",
      "date": "2019-12-31"
    },
    {
      "title": "'Equipping Pakistan with arms undermines stability': Defence Minister Rajnath Singh tells Dutch counterpar",
      "source": "The Economic Times",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxNRnpWbm53akxOT1hmVjFtVFBCODVnbXhYQkkxaXluX1ZyYjlLQWNYTFRSZmdZbFBTLTBSb2dXQ29CakFsME5nWkR3UzJ2R1B0MWRHZnVxM1JiMXZsa1JuSmVXVTRaYllYSWVWRmVGVjBsRVdrOXliempWZE96MGtXSlZMQkJNYW9Ud093a0k3V2l4d1IxXzYzWU56dVB6YUkzb0xYQ0xGVnNKcF82V3hUTExlVktEOURMRTFodE9ibmU0ZzlzbFJ6NVNPWnhJbVJMeGhCYmRkQmdfWDMtM0hvRmt2NktqbnNBakVQSm5NUWNlaElRSlFkNGF4eVJqTXho0gGGAkFVX3lxTE1KbDR2NFgxX0podmtRMm5nR29Db2xvU2NUTnhWUGI2cmVvSEUwb2szWllVeTBROHM3dFhjYUttZ3psd24tcWtwSVZhU2xiSjJObnV2b3VuVWR3VjZVZGhnejN5eGRNVDR1eFJTWnQzbDdPXzZ6TF93QTJYSXVITk1xOUNJZEFKRXVERDV1YVVGbTVoU3Z1dzZBbFNmWTVRYXBock1sT3RFekdEM3FQa2pfWmJFZWFlZHVCM2dtSGFxVjUxQU1qQWl6NGQtNXFqWXhVd0NIUFdBSzlYMWg3U1FQeWdUVkFubkxQTURDNVN0OXcwN1BjUmVUaVhDWWtiMld3cDhIQnc?oc=5",
      "date": "2025-03-18"
    },
    {
      "title": "Pakistan’s Nuclear Program Posed “Acute Dilemma” for U.S. Policy",
      "source": "National Security Archive",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPcmpBcnRIb0tLejA4R1JIeTl4YzVEb0pMc0dSQnVZZWhQeFhkNHczVG16aC14M0tfSzFKLUE4bW5tTG9xLW1TT3RLa3RYWmtyY1QyaEdzNWgyaXRYQW0wSkRBSjAyZkcxYVdVVVNqbUVwZVlnQk93eThvWGhMSllobkY5aXlOcDdMRlpwMjE1enV4LUt4S3FKcFRUa3ZZWFZkWlM0OE4yaDl6TUZUcXZVXzdSUWJNU0x1TFhkYQ?oc=5",
      "date": "2021-08-30"
    },
    {
      "title": "Abdul Qadeer Khan, known as the father of Pakistan's nuclear bomb, has died at 85",
      "source": "NPR",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNb3pVTUs5ZklFMUFLQ0Q4Q1JZOUlRTnVlcHlJdnBLRlNNam5MSlR5a1d3VWxtR1JHcjhCSTAySmtRMS1zNE9paXJWM21CQ3dpd1VoRGdYVi1kQzhWUmROVTd2LTZoeWRSQVhuUEJVNVFMLW1lOXRkRzJRS1dLeF9HLUZCYy1nVDAydkNwaC1Ea2FqUWVtRmRn?oc=5",
      "date": "2021-10-10"
    },
    {
      "title": "Why the U.S. let Pakistan nuclear scientist AQ Khan off the hook￼",
      "source": "Stagecraft and Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQN3pDcTQ0Y1hfU0ZRZUM2RWZTSm8zYjJEVEE1c1VSY3ZuOEh6UmpRT3IyblRwNnIxaFhFMGh2d2gtZ2ZnLWdpYzNaakJhd2E1M29YTExrMmVmUHFEM2pySllsZWVqRFo5RTJseEhpUHdvdHE2ZGdVc3ZIX280c3N2QTNBOTNFcERaamIwVWdyMnZVbmFHSnB2UC1fM3BCVkNzVXc4ZlZ2bWR5UQ?oc=5",
      "date": "2021-10-30"
    }
  ],
  "norway→united states": [
    {
      "title": "Norway to Trump: We’re already doing the hard work in the Arctic",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNbGFmbEtscFpYZ1hYdG1aNy1yR3ZmUkZ0dXFaM3RxVVNlVnpOSHFOZHZPZWxOa2kyYVZuMExjOUZhRjcwa05sNWNGa3czblU3eTJ6aWpvRklwbnZHRVV0ZjB5R19tTDUxX2FmVU5Qbk9xcHpuQ0tsYVBBRE9YQWNCeHZuMFBYNkk?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "United to win: Norway funds additional Patriot missiles for Ukraine with €268 mln air defense package",
      "source": "Рубрика",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPeXdCZnIxSTNvZXIwR2VPaHNaNW1Ec1RCcm9nZHhXV3NzTFlrSFowZnVUZkRma1diZllaNnE1TnNZTVMzWlNjTXFsa0RrRnl0RVpwUldYWEN4MEhsLUJEVlFiWGZ1VURfb3FhNEp2NHNoQjlhSWc4Rm9NcUI0Q0JuYTFISXJOclpJRkE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway pledges €268 million for Ukraine's air defense",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1kbTNob0xEaV9IT0NVTV8xVkdnUExHV2ttZ2Vxa1ZaVUpfUXYwbzNVV2thYzdPZm9VRVNuNkV1MVBiSGRFWl9HRVU2RVZCZnZ6RFFzc1hhcGFUd1pDZGhQMDRMOWVMbkhVQnhWemt6dXlBWWdFUDZEVmxkSTJlUQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway has allocated 260 million euros for air defense missiles for Ukraine",
      "source": "Цензор.НЕТ",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOT3J4WXJwYm1KRmhrWnkyc3NFT0NyUWJtbWVHVXhXYThIX2VSRzNsbjN0dTVjVnRPd1daQUgxbFk1RkJmMG03YjIycHVjX3VPdF83Si1vdkR2TFpMNGpWLUJVQU1VcWdPamUwTk9vbjJZc0pQV3N3MmctY2NFUXNyZFNQQ1dBR3ZyWGtuUjN6MjVOQ0NfTi1Sdk1HSnlpcjA?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway informed it may face weapons delivery delays from US",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOU9pV1VtSnl2YU94aFhIWFJHUUVuSmZRLUhRSkNfVWw5U3BQc2pHRjVoOEwtNENJVnI2RE9XR0RqSTIxN1YxTDBwa1NTaUN3ZG8ydmN4bzhQd2dpOVVZZ1FKeHRNaEJZYlVIanp4d0NfR3R0V0JWNDFZc0x3c0xTOU0weHMwbnJFMXpadXZEaUQyX1NTMlliV2RoVnE?oc=5",
      "date": "2026-05-01"
    },
    {
      "title": "Norway’s Nammo Quietly Supplied Ukraine With Hundreds of Thousands of N7 Drone Warheads",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPbXRSZWV6dG1WQzNRd2xwSkw2QlVreHd6VGJ1Qm91VVJEVjlWZ1NYRHNkLWVrYjJJZGdxNjYxZ3pmLVFESUZOdGVJWnlOb0U4THJWM0pJdlpGaUxsZTRVd2lxNkszU3RYSV9NZU9XdWx3aks4YklDT0pJMThCOXdGX2poT1RMYkFlV1QzODJfclQ2dmNCMllVVGZORVVNZkhaczNQcGYxYnV2dXJBb0lKcnUxUHItbWpnZS0xZnpULWVwaGNoWm9LTjZKVklBZw?oc=5",
      "date": "2026-06-27"
    },
    {
      "title": "Norway Pledges $306 Million for Ukraine's Air Defense",
      "source": "Devdiscourse",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPVENSUWpIa0FrcUJGcGNrNTZnOGhpMXNMaHNiaEMyZ2MxazhvZTc4dFJUTDZBNllxbDdmLXlvdTRYSkxDTXItVGRkcURBRWh4SU9mcUZ4akI1SVNiZHpMR0lSbkllbldDaWtDV01MbGtHUGhMV05fR2RQR2xxOFFQM0tjbXhwb1ZLU3BBNXdkNC13S19MdmxWbGVEbTgtekdRU21xZk1SUzTSAa4BQVVfeXFMT0RZUV8wemdLbWU3RUswTVVfMGNHc2xieUF4RXNXaG1OZzNMLXFNa3daeldqbWdPQjhWRUZLcDRuaG41QUo5ZTBZRDlZNC04VHZobEVtQUY0c2wxRDJxLXpwZ2pLMzhhNGpEZzhOdWJQdERpWHhBRk1RUUY3ak9CZDV2OGFOM21nRWFDZlUzZmRnb1U5bmc5aVJDSEFwY3BpS1d5cXh2M3IxWEQ3d1dB?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Cramer Highlights Strength of North Dakota-Norway Defense Partnership at Bilateral Conference",
      "source": "Senator Kevin Cramer of North Dakota (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRHdiYXZLUHdENTV4WGdGa1locWhuZXpfWnp1bjBaUDZwdHJmQkpWbWxTd1Nkcnd3S21zSGJITTg0aEhVMUlxUHI1YmhqckdiM0xLNmNmQUpjb19GcXBKQWVnRXRUZnBHZVFJb1dvQmp6MnVJTTZEOEFSUzZTdjFmeWNSeEljTG52UjR4MzY1a1dwZVZ4MFNncGpJRV9NY2NDTTc3TmNIMVlpbnZ0SWFPOFpiOFNtZmNpcmJZRFdVMmtPM194cjM3UW5aN2M2QThJRW5scWpwN00wQTg?oc=5",
      "date": "2026-04-17"
    }
  ],
  "norway→ukraine": [
    {
      "title": "Norway allocates three billion kroner to Ukraine's air defe…",
      "source": "Nordic Defence Sector",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNSWhRcjhaUkdKMmVaTHJLbHc0LXNpSDFwb0V6UWIxUFhaQ1lFTUxGZlR2NnQtVUQwald0RjZIbU9OdTRySnJfcFUwakdDbEVXVVAzS1JfQnFxaFNubTBRN1Y3TG82QTlrNDVYeEN2NTB3cmpMbDhjemVOdWZMOE9LaDhSNkxhVWtWR3NBd3BVdTEzQ3RzSlh4Sk1taVY4WXFIYUlaU0xuN21mdw?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Norway Commits $306 Million to Help Shield Ukraine From Russian Ballistic Missiles",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOYkJVbElOSjF5Wlk4SURacDFwWmNXLS15Tkt0Y2pwUFlJdmMzX0h2S2drUmVpWGFlSTZNTm1hUl9QMV9DSFIzZVhXZEM2SHpWTDJBcFNGYlV0TU5KMExSMGxxWmZfNUF0OU5HX3M4UXpLOUsxd2QzSG9CRXhkbEt3WHZJOTdtTVJUQzFRdTZCQnNYY3lzcE5Db3BNWlZvNWIwUlRtUnV6Zm1lODBjTmhXTGhlTXBiaXA2bUZhNHNJS1BEdGxpZTlV?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway to provide $306M for Ukraine’s air defense",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNUE9CdWViQktOYjJwcU1iRWRXM2lDRnNNcHprclhQUFI2ak5WN3gtbUQ2MmJXZEx0OUxCRzJPUzV0SXN0MFpDWElhNHlDZmg4SUFUb0NGUXlPbDRra0FQdEJySHo4SzhfRFlURHhoNXB2MEFNakphYWRXc1U5Z3RRNTZFM1g5NHYzS29OQjZXUFRwUQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Norway to Allocate Over $300 Million to Strengthen Ukraine’s Air Defense",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNdkNneFpEWjhZeTltaFlWanRQalJTY25TOVhLWG1IbjhwLVVrdnZod2lsdHpzVzRUSllWYmNlZEV0ZTBwMG1xY3FrT2FFa2EtS2ZrdzhLTnNGajYxLTdsZ0o5bEphZFc2ZE1SMUNYQXBWSUhHN0FIcUVJR1J5YWI1WDFHbVFrV2pZX2t4S0NhejY1Ull6NFJGYzZzeE1RVFB1SXFYUU9R?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway allocates another €268 million to Ukraine for air defense missiles",
      "source": "Бабель",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPT1NqZ2ZvQ0tfenhsSWhORDlyVWNkQ3BKWVBzOF9lYnJLdDB2djJ0bzh4WTdNTXRLVmV2WlRRREdkTUVVcEZIZEt3QmxhbnkxT3NSVy10al9TcjhxQWNsZlBEQUNZU2JpTTI1U2ZVempIbTNKTllFV1V2YVZUTlA3X1ppS1BEUGVGVnZfSnBldU53amNmbmtkMXBXbWxJLXBKczZGWEhNMNIBrAFBVV95cUxNX09VUXJwVjBPQ3pRcUFaX011MDIzQmFJdHZwQnk3SWhLMTBqT2dDNWxpR240b01USWNkbTVJOTFhemhMaklucDhBUkYtY0xLT2txeDFUbW1SSEk2TllUYk1oUkZWR2g1dzNlRXpOekNFMlgxV2w0Q29rcUtpMTJXVnZoWUJxLUVxOThsS1A4UnlKWFl2WGluazEtSnZLMldRWmlFWmpmU0JsLU1V?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway pledges €268 million for Ukraine's air defense",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1kbTNob0xEaV9IT0NVTV8xVkdnUExHV2ttZ2Vxa1ZaVUpfUXYwbzNVV2thYzdPZm9VRVNuNkV1MVBiSGRFWl9HRVU2RVZCZnZ6RFFzc1hhcGFUd1pDZGhQMDRMOWVMbkhVQnhWemt6dXlBWWdFUDZEVmxkSTJlUQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "United to win: Norway funds additional Patriot missiles for Ukraine with €268 mln air defense package",
      "source": "Рубрика",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPeXdCZnIxSTNvZXIwR2VPaHNaNW1Ec1RCcm9nZHhXV3NzTFlrSFowZnVUZkRma1diZllaNnE1TnNZTVMzWlNjTXFsa0RrRnl0RVpwUldYWEN4MEhsLUJEVlFiWGZ1VURfb3FhNEp2NHNoQjlhSWc4Rm9NcUI0Q0JuYTFISXJOclpJRkE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Strengthening Ukraine’s Air Defense and Energy Cooperation: The President of Ukraine and the Prime Minister of Norway Met in Ankara",
      "source": "Офіційне інтернет-представництво Президента України",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPVVNzRGlXNnhySzZ6bUVqNXEzZTVlU3JRVzEwYzlycjhPUVRSX3BKZ1lrZ19kTElFSHlIaUtwTldJNU9OSkpYOWtUX2xvbUptVHN3Sk14a2lGakNFbDJCdWZlZ1dSaldYV2QyM0puZlhsNjlMbWVtV1o1cXpRN2JWOEVPbXpibUhoTVk4YlJBNk95dDZMLURlMlN3c2RzS2VVUTZrMFpFZw?oc=5",
      "date": "2026-07-07"
    }
  ],
  "norway→romania": [
    {
      "title": "Norway Begins F-16 Deliveries To Romania",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQam1MRHBfel9MdUtoOVpWeWg0RGh1N1RTaXZ3clJKanVUbjdCaEtDRkpJWlQ0X3gtclVmaWRjdTg2MTUzdDV5ekZsdDdKYnlncFVUb1RBcVV0LU5aQmw2N00xeWRCMnFpdzl6YTJJLUNOWVQxajdzaU91WllmdG4zUlAtTnVBRzdzQUNNY3NKaHVMQXBu?oc=5",
      "date": "2023-11-28"
    },
    {
      "title": "Romania Misses Out on 11 F-16 Jets in 2025 Due to Priority Given to Ukraine",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOcDVKWkwwVkI0OGtIQWh6NjFMRk5mMkZYUmhjdFFXekpEcDdtNE5aU0JvUjItRXlMTW4yUGFyQ21za2VRaXNIMFY0ekRxWE9BQkFjYVJ1V2R3LWttNHV6RUs3bWtkcXc4U1NmUkZTUWlnbFJlNkxDbS1oVVNsbTh5WDVMN2owaVJWV2dDbThmMHRaT1BsMURuSW9zNzNMNVB0RlhzSjZiNVVoY1U?oc=5",
      "date": "2025-12-29"
    },
    {
      "title": "Three more F-16 jets arrive in Romania as part of Norway defense deal",
      "source": "Romania Insider",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5CX0x1VnZNWDhveW15d3pwZW9WckdEaWxTNDg1TUUwVXhncVhjX0pOajQ2enJaNFlQN01XN2N5OVdFY1NjUjNfTEdURmxoVkZDcnpuRUNUXzJBMWl5Uzc5dFhrbDFsQTZqaDg1N3NKY2l0bkRudV9r0gF8QVVfeXFMTThkTUw0X3RyaTVPUWRveWE2UWZQYTA5RzJGV0sxdVZxcVMtRl9nTWF4bjVhTkNqWGczcEFNMk40Rlo3MFl4NUpvR2hfV3J0OEVvemJYRjNVN2stOEhhWWFTTW1xOGJmVFR3VE9qbm1zc08tMDBxUWNINnVzZw?oc=5",
      "date": "2025-08-29"
    },
    {
      "title": "Norway Gives Romania $127 Million For Patriot Missile System Sent To Ukraine",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9aaGVxdVdjb09VTnQ5SXFwV1JmcFp0S0czd3ZmUUFid1I3ZHdWaTNHY1RrYWZ6Y00wUmlLbTRVbkduaVFRQjZiMFVtQl9KS3N0czFEVW1uc0p6X3JQYlc4WmluVzAzLWdaZ1o3RjE5cXZsMmQxYjFr0gF6QVVfeXFMT2V6QllLRU1GUGtJN2NldG5QclBlMmFvVEh6OTVuOF9udUk1N1JCbTBpUUY1ZkNVNWUyLW5VcjZUbXRzeURGbEc4NElJcXQ1d3RmTWhpZ2VMRmdTWEhLUjZZeklRMURuWFJtNFhnYW1BWTY0Rjc3cEhKZEE?oc=5",
      "date": "2024-10-30"
    },
    {
      "title": "Norway to Sell 32 Used F-16 Fighters to Romania",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1mbE40Mk9HdUVyZVZhSmZhVU5EenhjNTUyWmdRcVRJT0Rrd2pDeXJCNmgyenFnd2F3dktzN3BKQ2d0SjhNRUhXakRLVW9hX0lQQ0IzRjZubHJ2QU1SVWZuMTk5dy1oUEpWUFl6TEhnaEbSAXZBVV95cUxNcElNNi16NmZYaFRyVVRsNlp4eEZBOFFQeTAwalBEQ3VvTkFpT2tVOUlQM2thUV9MRjFfNWhTQ0RYZHdORE9wNTEzRVktTEhmejI4ZGpJR01fM0VkOVJIZm5IZTB0aXk5STNnaUppYmFCR2V4TS1n?oc=5",
      "date": "2022-11-07"
    },
    {
      "title": "US State Department approves AMRAAM sales to Norway and Romania",
      "source": "European Security & Defence",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOSG5JQmdBdWJXa0d6UDFoMlRqYzJFQVJJZ0dQVVgwX0UtUElsYVlfWGdlSHk4R3VzQmxKbk5hTGFmbjJncktybkJzeWJqNXdKR3l0R1hSUFg5WmJqTGI3WEtGVklVbGNWV2dacVk0bWdDWU5YRU8za0VWYUtVMy1ROHNB?oc=5",
      "date": "2024-08-28"
    },
    {
      "title": "Hanwha Aerospace beats Lockheed to win $2 billion Norway artillery deal",
      "source": "The Korea Economic Daily Global Edition",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1VY3JucHlWaDBNdkdTdFlibXBTeVh6X1NNRWs4U3FVYjNUdlRkejF4V1RQT0dTajcyazlDZzMzLWF0SUlvNFlLalNMT3VqSl81Ni16UU95dG1LcFBDNDF0LVIxdU9BZFdyWk5YLVhpOEl3eFJvQTVr?oc=5",
      "date": "2026-01-30"
    },
    {
      "title": "Romania calls on US to ‘overturn’ troop drawdown",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPWjVOOHY0aTlSZXVtM2tzNlpGNWk1R1k4UTVTQUkyd3BjQS1ROEQyVDg0cnpuNnhlenRBdTlxZWhpVHNQelFWenRVN3p6ejZXS0FzcEdxUTc5N002NUxkclU2RDdMNmp4YVoxcjFzX0Z6TWxST2p1ZjFyb1UwRUNCTVg5d1RqTnJRS1JVZUNqU1F1c2dKUndTcg?oc=5",
      "date": "2025-11-06"
    }
  ],
  "poland→ukraine": [
    {
      "title": "Poland to declassify Ukraine arms donations records",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQMGpsWVpfMnFSZ192bFJaZm41UFZkVURRampwekIydjNmM2ZadTZxWVRLdm5hREFFYzk3TnlZQ1lkc3BJTFVubGtpU3VsMF9NbG9YbzlONmVUYTBsUGxnTWtJVUQwUWxTSENsb2U4UWRsQUotUVJrNGZwcFVwWFpDSHlXZEFCZ3FSQTg0WW5qLXI0d0NiWkFrXzh0VFV2WHBMTUd6OHlPNVdUaUxRWHNn?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "'It Drives Me Crazy': Polish Defense Minister Defends Patriot Missiles for Ukraine",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1hWDc3YjhlU3FselBtVFNHRVQ1OFhJaThzTFFFSldpOEtDa014YWJGeXNDeFNhUWxtVGZTVHFGWmRQM1RJU2ZUYlduaw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Poland to declassify military aid to Ukraine since 2022, defense minister says",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQOXU3WjktbjEtM01hZDEtRUFvbUtNM0NWMWZySUlDcWFJSXNSTUJXaXN2TlMwdXBJYzNoT29pdjJDbDdlU01ybFpYdTdydUd5RHFhNllweEZUZ29wLXpCY1NsTUtRWGZ0TW5nUzFKb1BDSFo3YkhMUFdzZWhBZm5iSHoyWi1PNFN2dk9jQWZmY08wU3N6R3F6MmJlc1ZwODhDbWdUOTJCVkJQdTBCODFGWkVmX0NSUGUw?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "Polish defense minister fends off criticism over sending Patriot missiles to Ukraine",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOV1QxdU5iLXdQMmZxRDZGSW1xYWNZdTFlZGxRWVgtRGNfM21weXRZWmJPTHBaUkFBNFFzTVJTcG1KTi1sRVNLRFpPOVFwWDhjaUpla21ZMDhFM3BLbGlyQzllc0Q2ZVpYUm9NM0p4cWh3UzhuN3J6ZXU4WUQ1blNDOUV0ZVBlT3JFVkh4QXNOZDczMV8wWWxyM2E2eDlKeXphajh1Z0p0dllqZmFjQlM0X3VjQQ?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Poland and Ukraine Reopen MiG-29 Fighter Jet-for-Drones Negotiations",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQekUxQmVXTUFyOHYyMWdaMGl5TEd3Z0NIS0RhdTJJVk5NUlc3XzhQV3BLRGE2aWlUdXZOZGdXZVdNd3I0MjEyQVRQeWFHcmM1RFMxRUhMMENLTXBTa3lJak5PS0d2bnFHQlFMTU9VcUkzZDhGYjBNblNVaTlEaWxmQVQtQjBDaHZ0TnZmWHZKdXVKQXVtNXZ5al9lV25BbkxoNzlENmZfRk5NVDA5UmVQWGRKVElRZw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Poland to Declassify Military Aid to Ukraine From 2022 to 2026",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNQWVnQ3AtTjBHaXJYazdtN01KeGI4cW40bVIwcDlYYU9HVFJEZVpOTC0waVFVenFHSVpGNlJMaFE0eGV0dTdDWTI0SXprc0JKU25Oa3l3S2s2b0lEVUswOXhJNjR4U2ZWZ2NXSVBTZzBRTTZjNFhLWWZGMnR6LXRvbDZMONIBiAFBVV95cUxQdTFHZmdQbWc2bm9sbU94enJFN0NvNkpod1hYa0kyb2VYdXdScE1XQ19USlBTRFpYaXJpSDJtVWhPSjc5dlBBU3pmVVFHbnh1TnB1M010aW9Xdm1jNy0zUUFPNnhaeDhTMkdwNm53X0VUN2lCTGJ5RDVHbThaZVJOSTNpMEQ0TmxP?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "\"I want Russian missiles to be shot down not over Warsaw\": Poland's Defense Minister supported the transfer of Patriot missiles to Ukraine",
      "source": "Українські Національні Новини (УНН)",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxQckZvczZNS3NqekRFaU9RUnVKN1dQVkNDREFycWlrMlp4NTg5djhSdlBvbU1TY2NpaS1FemFDVmNHalp0azl1UGIyVzhSUVRxYnVlRlNHZHJTY3NJdFlhTmFmVWJhMGhLdnRFZkIxSy1WMEVkc0NFREpuNFd2UC1ra2FFa2VBYmRzZE53eHhSSHkwTk8xUmw4TUo2d2hTclJvMDUxUC1JQW51dzhYbkNiYmtqdXJydFV2N1NHZURxZnZXMVduSTRJa05rZDQ5eDZTSlRsSHczTVc5SUhZOFd3cXRscERhN20zaVFpVXJn0gHsAUFVX3lxTE9zQkUtV000ZVg5NkhlYWtCNllrc1NHVmpmRGROdEdBaHlMSG95Mk1WZEltY3JHU3hTdl9wb3oycjJhR3R4SHlCZExOVThlTUctU3FzTDVMSmtMOV9wcVpHRFdFbDVyNTFtZnJuMFlUM1JmU1I0cnRPN0pENlNRTTZ2a0lGNmlsYlhxU2lIbW1mU0lHMVlJN0xsd2ZrN3VBanR1TlNVUUw1b3JBX0NkVk9Za0tkYUJzOVd3MDNnN09vSC15VkczcW4weTNoQVB3TXM0a1B6Z0dkUmpQeDluLUlEN292RHFMUTZ2eE1q?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Polish defense giant PGZ to produce Anduril’s Barracuda cruise missile",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNMDBMRkJmbGZSQUlMY0VydkVOWkZlVm5ocWlaRUZxcFNWUjA5UzZvZi1kQWdnQVRLbmRZZ1JfRGdvSXNmZkI3N2lDa0locXpTWDR0NXpmajVHMmFxQTZCWWxqcDNNdm54V0lvOTlnYUdESEpWUHF1NDJ4SlhtdnctSEoyVlVwR2gyU3hYQWhHNmxmZmdpTHp5c0tHSTdWMDRibzktUnE1Y0FiWFV3SnAyMWxhQ2Vua1paUXZDSTlXQjk?oc=5",
      "date": "2026-07-07"
    }
  ],
  "poland→estonia": [
    {
      "title": "Strengthening NATO’s eastern flank",
      "source": "North Atlantic Treaty Organization | NATO",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOb0lJaHFFWmtoOVNvV3NULWl6SG03alRxX2xrUlAxNkRCMUlQU1NkWEdpQjFhSWRFQ1hpckdfLWN6ci1waU1iVVQ5UVdXb1NwRHdCT0dpTTZaallpcFR3SVJudmluSjdkcXZobUpYTTlhSUtJXzZjSmppV2FkZHJBTnE0UmFaRGhOZ05xX0Z6TWxqLWdndXc?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "PGZ, Estonia's Frankenburg to build anti-drone defence plant in Poland",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQZTRVWWdGemRnR2YyQ3ZBZUFZXzBuNHA0MFQtbm42MTJiMk5wQ0hWTkE4RVZqbWxTQ2ExV3l6TGdlRzJHbFlEbjVPUV85MjBGTVBiai04OGg4eEdWU20zalVMSExJX2tuUF9sTFpEUFl4eS1sa1JOQjRXcnZzSEZNejVidnBxRkxxM3ZGY0stMFZxTXVqRVIyRDRXZlY1ckJzaWxFN0RwQy1ka1ZZdm9naVNyOUJYTzUtZlB0OEgyNVRBczQ?oc=5",
      "date": "2026-03-27"
    },
    {
      "title": "Poland and Lithuania explore playing bigger role in NATO's nuclear deterrence",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQZ0d1Nldmc25tRnVqaFRCQklOazljbHRrV2t2cnNqdVBqWnBWRWxCOEs2TkQwOUJOSWFFQ1lDSkI1RTVJZkhwNEpFM3JLVDVpVWdSX2JXVTA1dHctbS1KY09qMDIwNGlPVTdSdGVtRTdqel9Pam0xbmphdzk4MTlGeDFweFlGZ1ZDS2F4b056U2gwSmZyZ05XcXJjdDRVdWFzNzdibUhSX2F3U20ybnpsQ9IBtgFBVV95cUxQTUROZm5mZUVCN0F2RmF0VU9kckZQVG5reVk5VzBOcnhRSGs1LXJscjNZWHp2WDJfTEZ4YTltOHM2WHJEMVdGazRuQjhfRTJMamR4RnM0b3RMRW9KaDJOSDNWeU11WkhYNi00elRVZ3RaYXFfbG1rMEwyUVVXZTRTX2dMQTkyUE5RdklDdHFrbjlNZlB5QmwxMzNmaldUWjJqZXdQU3NraWl2bmU5em9BRlJpaTFvQQ?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Baltic nations ponder biggest bang for their bucks in $14 billion arms spending spree",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNSEdjOEtnZFdiMEc4dklWV2ZQZm94cEhSNGtqV3JMZGRDY19TUkRjb0NUdkF1MmVvTzh2cmxJcC0ya2Viamk4cnN0RjNPWFVzc25CRGdoLVBMeTNzb2VXVEpja3pmU2VKdkxRWUFuaGhYTUVJaXh1d2Q1ajZocF96MEFRdDVEUm9SeW1jeG5ub1ZYOWNpMGFVWU5XSkpROWh0RlRZM2ttVTMtTWYtTmlsZlNBMXBsenljMmFGV0ZrMVdIR3lSWHNmYmVNbEQ3cVQ4SW5WcQ?oc=5",
      "date": "2026-05-13"
    },
    {
      "title": "Poland and Estonia are building Shahed killer Mark I at sustainable cost. Inspiration came from Kyiv",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNS0ZOYjVmTW43Zkc3Vm00OFdSRENobUxkRXdGcXZtcHREZm14dWlXS2oxbl9NZzNmM01QOEhLclZvQzZ2NDN3WHNxQ0JvalR2bTZlbVc5RFgzXzlmMmN4Rm5kUXMzVTJDLTAzQ1BGX1c0R3U5Zl8yenhJb01GVml0cXBsQWRjTnN3ckUxSWJBb1FLVkdxSFZSd2c1SXZXcDJDeGdUMlpzZ0xCYzVWajNwTUdXTmRraDFFdk4yZWZtQlo5TWJVQjZhY3VTODJxRHZVejNZ?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Poland, Estonia Launch Joint Drone Missile Production",
      "source": "Odessa Journal",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxONEZnYzhiUVlLSnlCNDktZE9QU0ZRZFNmZkYtRDk0MnpOVElxVkFYX0FrNW1laWRGdzBCUEhKQVo2QTdmQ0ExaDdUREN1dXhfQVJjM3piNVluTjhLenVyQ1ZXRTlPR1lTQ3kzZVVGN3FPNXJZRzdoZVJMN3BZVmFIM0VkeXBmZ1ZDWWlwbk5ieWxtbHVTeU1LNHNOTy1xa3F4?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Poland and Estonia Develop New Missile to Counter Russian Shahed-Type Attacks",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPLUV5eW1zbVJaeHlrWEhucHZra2c4ZXplWVNFVTRSNXJHd1lGR3F2cXZ6VThkRjRSU3R0RGRSVFIzMDRnTHp0SUNSbkNYX1ZUbUlzNXlBZ3otOEdpM1AwcEpKbDZLVHhsN1lGMUVzR3NDTC02QVVrdWNZcUpUb3dVaEZZWlo3VVVvQXZSR2Q4bVpWaFotX3hleE40YXhMYWNBWGRpMnRJaldaalNITXE4QWhFOU5TRkRRWUs2cWZn?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "President Nawrocki refuses to sign law to tap $51 billion in EU defense loans for Poland",
      "source": "Los Angeles Times",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQX001Y05pYjFKUlp5WG9HZnZCZHhFTlBwRVN6RkU2ZEUyeV9adnRVMFNaTU5wRkhCOXZBb0NReVRGd1ZMZGJEMzVxV0tmNHAybFJDRWdmVzgtSzB1U1RLeFBiN0lXSXMtaXR2QkJ0MHdXOFZNS0VCM0JlOGkzbjJpQkdGVktMRXc2VmpsWm80SGl1b3lZU1JnYVFuVVZSYWN6Z3FvWmtSMGVYTzhDeG5lYVZRa1Z4TEVldUlncy1lcmtyVGdlVGVnazludGV1UWFvRVBPbllOMFA?oc=5",
      "date": "2026-03-10"
    }
  ],
  "poland→sweden": [
    {
      "title": "Poland inks order for three submarines from Sweden's Saab for $4.8 billion",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPd21JNnhUUERVd1FfbjNxQVFqaUdiTlU5dmVOWmt6bl9yOHlxa3V4aXJTVW9fbE5vTEVwcnFzWDRBMG5udUk4c09zNG5WazlwRk1BWWpfZWZWclJxeGZXNkE1RDFWdnBpVWRudHhjM2tHQ2dwOFlWbEFONGRRUUk0eEctSTdPR2ZsVG9QX3lNcVZpWEQ1TTFBdXRPOHpRcEs4dGJFNUpkOTVlVU0?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Poland joins European Patriot missile maintenance hub alongside US, Germany, Netherlands, Sweden",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOWjYzMmpvM0ZEcXNpeGxtbnY5LXc1eC1OdlZ5MzBhajJVNk5GQUpwYW8tb0dFR1lEeWIwTFVpZEtvTmk1WTkybEMyWEdhWDRULTRlcFpBY3MzcjdVMHdDUTNQenlPNGZtRDhpR2JURHd0Rl93OTRmZ0dKU1BvcjdRek8tVkI0UVhYYW5YYVQ4R1RObkJEV0JxZXowYTQzNHFEWEdDZm5rMHpqNlZaWTU3V3h4MWMxNmk3OVk1MnhxZXNTc2FGdThfMG9JMkVXUQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Poland Signs $4.8 Billion Defense Deal, Deepening Sweden Ties",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQUll1d2V3ODJfYmpfc2IxeFNyVEcwdW1wbk1lZm9EZDhLN1R6a0JaWUxYQ050Y1lxUDZzN3hxeWRhd0NkeUd0ZVU4ZVF2ZzVYa251Y3VLQVhNM04yWXM5THhmcThEWk1OS1JQekUycExncjloTjJmamxVSkEtOWEtZWpmZFV4ZkRqNFdnRzdiUWM0MjMzTDN4dHU4YzFGSTV2THM0NkU2bnV5eDE0Y1QzNWJKTXFodS1QbWlEMnNhbjRObEE?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Poland orders Swedish submarines to bulk up navy",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOaWhtcmNvUGhjV0NpNVY0SzRnRnl2WUkzMjNBbzIyRTJRTzNlam8tMnNiR1VpQ19CZEl2Rk9QN2V0eVU3Z1FaZmVvMV8tby1VRnB3akprWlJKR0hpU09ocy1UYUNiSTJBdGVRM3ZJLUF4VGs4V2NTTDZPbHBZbWRPZFVSNUhKTzZK0gGIAUFVX3lxTE5RcWpaTUtrUnNsY3dMOVJpZHZTTEpTblh1ZjR0RXVpQ05aMGlGWWtQaVYyY3hLbmswVFQyYlRINGUwczM1Y2w2bVRKbFZ2YWF3MEJPeURLaUYwYnNMal9uZnlrVDVVN3FvSkxpeWowQ0gycXpUajNLV1pHWGpMc2FnUnhneE03S0o?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Poland awards $4.8 billion A26 submarine deal to Saab",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPMmRXd2JtQ1RPS1ZJejVCTFc0ZWd5Z2pmR1JncU5sS0tHeFJlREVuRUtqU0R5NGVOUDVRakZ0UXZzWm5MZm1CTU9iMGdpOGM1U21NdHhPcW80a1haRnppYjBUYTVGS3R6UlhRdTlBeDdSMmNxUmdyRUNjQThfZ1BPSmg4WHI1QWZkdHdSRmVpOWYyblNRQTRaNlNPVDJaMG5qOG9hYnJSR0s?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Poland signs $4.8 billion submarine deal with Sweden's Saab, deepens Baltic Sea defense cooperation",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdVJ3dGJKT25DQW5iVTl0S3ZvVk0zVXZFemFtbDRMam5Md09lVzNUNGs0X3NFZEg5Si1ILTV2Y2NvWTZMQjBmV09ZZnRCYXUxN2dXdlFMRWdwLWpyT2ZWSDJnTTdVZFJvZ0drZUNNVEItUktYNzZQTTBER0ZqeXpCLXJocnlYeFdMb3JRTEIySEJzRm5ZS0taakpESjE?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Poland signs deal with Sweden for three advanced submarines",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBEcnhuMUhkTm44OTZBdWJUemxBLWFBUGl5TG5oTllMQ08ydF9VUC1tM1lrRTJRMWhaQXRTYUNoQ1daNU9MemRPRmFSdzJ3V3ZKZFZRTUpUNXFpQWZVaU1oZ29PSXc1azRndnRNbVhTOFF1OFdpQmNxUnJEMVphUQ?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Sweden will sell three A26 submarines to Poland to strengthen Baltic defense",
      "source": "Українські Національні Новини (УНН)",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNMzd6VUE1TXhnbnlqT3JNUFZGVU9tbWJnWElab0xFbkdCajhUNS15eEt5UzhVNG5MS2duYzdGNDFWYUtUSHNHUXVuVWlfSF9XMTAybG5SOGJzRUdWckxNaUlQZE1qbEJoSUtmRHZDaDZfdldPYlZjdzZwaVZ2TDU0d3ZYWmNzTmpOVVFvVFJzU1VXRzBaWng1b3NZdlQtRVYz0gGfAUFVX3lxTFBjYnZtdldkMnVRZ3BKc2VrZ25wTkx5aUItVnVCandSX0RhMzgwc2VtQU04TGVNOVZVSHVYdzljVmlUNWxhYUdORTM0SFZKbGZxRDluNEV5SmdWTWRnQUkzUGtUc1g3YXA1YldKUEFxLS1mNFo3ajhqVzNCdldkLVZ6NHpfOXA1UmRsLWJfUlZ4NnpVS0F1aUxMR3RnZGpkdw?oc=5",
      "date": "2026-06-28"
    }
  ],
  "sweden→brazil": [
    {
      "title": "Brazil could buy another 20 Gripen jets, Sweden says",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQU21ESDZGa0V0MUItZmpGaFJBUk5jZXhaOW00VmJUeERrSlFHVEExeWszamotTENfVWY3VjhhTzduUWV5djNNYW9TTEdjVzRTRUtOMUZ6ekpUTDIyQVhHN3U1UG5zZDhsT2VQZjcybUVJNVY3WVRmNVQyUV9zc3cyRnppU28yckNDQUVoTWJNcHJZRTJOenU1TE92SjJWbU5PYzV1WlNCS0t6WTNldW1iMzVrR2Q?oc=5",
      "date": "2026-06-04"
    },
    {
      "title": "Brazil plans to buy 20 more Gripen fighters",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNcWE2ajhuc2czbTdOQzlROG1Rc3NZQTNwTVZtd2NhbEN0dThfMEZxS3p0dXgwZHJlSzNqYnpMMTFlN0dqSmY1WVF3WmdyajViUDRjR2VOREl0S1NIWnBkeG1sdU5CeGdPcHZQdnJXSjE5MUgwY0JQMklMUk4wb0Q3ZE9xR0ZqU1U?oc=5",
      "date": "2026-06-04"
    },
    {
      "title": "Sweden and Brazil Deepen Defence Cooperation on Gripen",
      "source": "Nordic Defence Sector",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNcjRESHdzMW5IS0FjUW5rQ3FkeV9zcDNiRklGVVV6QVlCSzBuU1h5RW8zMkxVQ3RoUEVZMmNJd3h5UmJMWlg4akE1eVhMZGdGc25ReTREeXZpNi1nTEZyd3l0Wl9QUEtkckVubFRfWFc3OGczS2ZwbXV0eHZCa1hYTDlwejcwYTJ1WnlJckdpNGJxVzV3enBMeGxTRWl3RHRHa2dwd01xYw?oc=5",
      "date": "2026-06-05"
    },
    {
      "title": "Japan Draws With Sweden, Advances to Face Brazil",
      "source": "조선일보",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNcC15NGFhaUdDTFNqMEttM1VRNHc4UFhGTnNyVEFCclVabmlKWjVUdWEtMnVZTnIwV2pIblZ5d2dXbjBTaDBZQUt4TWdnVkN1ZWJVN2czNkM3ampfZ0Z5eGVRWURPUDFTTWpTU0l1cmJkNW4xUTlLOTE0MTJpX3Z0cFo1cl9pUQ?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "Brazil may add 20 more Gripen fighters after rejecting the Rafale, and Sweden’s bet on Latin America is suddenly growing",
      "source": "OkDiario",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQczdLb3lyLUZiS0ppNzZxM0pGZkczTXRPREpCWjlMRU4tZDI1aHViQWpRWk1hcC1fRFN0QnJuaFVNcVAxTHhwdVFuZDFoMi1Mb1J1bHhYR2hhXy1mMlJXTmRnT2hVY0pCTlNLRnBjT2w1TDhZVEFIcFJQd1BFYms1R2YtLTk2LVhLaUpQa2lKaWV5QkI3NXJYcm9SNGNaYUVmUXRySHl3UFpvdTlpMnRadmROQWFuT0ozTUx4YnlGa2pUMFlJbzJ4WmR4cXVubDhpeE1vdjhxWjRQVHQ2aHozbTB3c2VCdU9GdlE?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Brazil May Purchase 20 More Fighter Jets From Sweden",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE93dHp4YWhsazFWd0V4M2xGc2RtMnlEV05CRW1LcjFha2ZTVzNVUVJNT1hPYWhMbmRVNEwwWFFlMTYyNENIZXNYM2R1TlZiUm5sMTNFNUQwbllna2w5ZGdDaGZnNWd3ZzlKbnA0Zm1scHLSAXZBVV95cUxOQ0lpWmFXU0s4ZF9VMEFyYXluZnBCMVlKWjFZdklmcnZfa3JhWld3aXMyN0F4RVcwSDdOMFFxVDI2czFfUjhTanVBM2ZoNjZJSlp4ZlVxZWlNa3kwX2pnMlNTZndjTjJVNV92enpsMUE5ejNIaHFB?oc=5",
      "date": "2026-06-05"
    },
    {
      "title": "Brazil Seeking 20 More Gripens, Swedish Defense Minister Says",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOY1VxcGhnUEtZT2FFSkZSZ0Q3VS1uOGpzN2ZoOXYyRDNickFvVXZSdmVjVTBETUQzMGFSX2Rmeno2Y0hmNzNvUWtHMjhvVUlOcTlhU0NPay1nX0I4bVZkUUZ0cjFGYl90UVdnUTdiYUkwUHZUa2EzZWdWeUFCY0NRekNqM0NKQ3dzbVlmRjhWTUg0ci1TZVpabmJVcng4bGVjY21YU3pzSy1TRTR5bUd2MFpBYw?oc=5",
      "date": "2026-06-05"
    },
    {
      "title": "CAAT - Brazil’s arms suppliers",
      "source": "CAAT UK",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBuWlhsU2ljbXVlR0hvRWxtM1hYa0o1YmEwUHNrS3QyQlRFRk8xU2JQRWZaRlByLWFqSUZGSnNzZnRWdVVNeTZqRlBGR1BnSWFPV3R6Z3U4b0ExdVAwTTRDQkJPWTBEdThCR1BfRmJtR01JbVE?oc=5",
      "date": "2025-10-28"
    }
  ],
  "sweden→ukraine": [
    {
      "title": "NATO allies sharpen focus on Arctic, defense spending, Ukraine as summit enters final day",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOT3p0X2dzNTlPbWVUVVVQaXE1QzV2dzdaOXNXSnpZM1BPWml0TDljUm9MQjhWcncyYmZIY0RHS2lXcnI5aGRwaE5sVlRnRkg5TU9qazQ3al9XaEFhNUliRGtEUzktdEtEWkU0WV9uQVQ3Y2RTM3NveGcxbElRT05YdzhTak9sR09sS1Y5eXV0N0tuNVlpbk5HMm1tWklQYXBHS0cybE5fQTFUenJWRnpPR05DNEZOTDN6T19zTHlOSEVWcGpj?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Ukraine has already won the war against Russia, Finnish president tells CNBC",
      "source": "CNBC",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQVFJvb0c2V1g5TGFiRHFtcDAtaVY4d0ZzU1dHMEs1Q3dRM2Fvd2VVaUR3SXhCN0Q2TEhwU3BDeFc1RFNoTmJIdGpOTjM5QXBpRTZ5YzR3QlVpRXJ0OGQ0SWdzcDgyNGFoWTBKdlF3YVJJNHdhOTNkQkg0YmhtLVV3cmpJb3dYa0MyUjJ6YVBTSWIza2ZpczR1WVNNYzE1bmfSAaQBQVVfeXFMTkNaUXVXODNmOFE3UURuNms2cW1Va0VVZTUteFNER3pUVkhBWElGMFpoQ0FlZ3NneXBsbE5KeGFVOTNGQjBsbnVIQlB1bkxWY3Q2cEJna3VjTXFzVjBMQ1EwZDhGUUxEeHB5OWJrVDE2UmRDY3VUYVM1TGxMdmVMNW9qRnBxaXdqVjJwRW93T0xGVGpkaTZzYlpPbXNoZlZlREpiNFQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Ukraine signs $2.5 billion contract with Sweden for Gripen E deliveries by 2029",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOMV9ZVEtQVUhhOFRYOHd5bHV4WnppVGNEY0pxN0hfdE1CZXNiY1cyNUxCYjhXUFkyN0xZTllMUVNQRkVqWEN2bmg1cXpMRkM0enBUU255c3VleXNCOVU0RHNNT1BXVmk1cmFIdzBRNWI5WXhMY0l4LWR5bC13UU1wVlBmbkV6VHB4NXR1dTV0Umhua0EyR0lkQ1BaRVkxVmNNb0dxVlN3NnJTUW5jWU5VTlZWYWJOQQ?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Gripen Fighter Deliveries and Strengthening Ukraine's Air Defense: The President of Ukraine Met with the Prime Minister of Sweden",
      "source": "Офіційне інтернет-представництво Президента України",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQMjBmdno2T0FCVksyNDFWVkdPdlFBYzdpNG8zM2pIZzJDT2tSd2ZwejZLN3UzeTR2NU0xSGdPaGY2eS1DNnRvM1RyVzhfR2EyNmRxNkQwaTRYMVhoMVl0SVFiWUlzMUNENkZWWmhpcFVGNnAzNzFzcnZyWWVFRTZRQnR2WnFTcWtxZTZvNVBPT0lyNWQxRlNpNC10dk5QcGludGZTenpB?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Sweden allocates USD 108 million to PURL mechanism for U.S. weapons for Ukraine - Ukrinform",
      "source": "Ukrinform - Ukrainian National News Agency",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNUkZNMzZvSkNTZmZCNUlCcm1FZFNRM1EydVRjTHRUZUVQMDVWTWFaY1d2d1RqUnFfNWx2di1rZFpCWmdGcjJLV0RLRzgwdjJucU92dDVwS25lR3VSZldnTmxRcDZpRFNSbk81SUhPdDBJOVFLMy1QWlJNWTJmS0FBTGU4TlNkY0hac2JGZEZsOXhRTDRPMG9QLTVLTE10Mml0U2d3LUh4SlVlc3hLb21kLWZlWHBhVWlRb1RaQzc5ZkEzVHhaYWc?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Sweden Authorizes Ukraine to Use Meteor Missiles Against Aircraft on Russian Territory",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNcnhMNXdHVEYwLS1Hdk5ETVR1bzJ0ckNMd1FhR0hSWDZFOEtzQ3NGbk9YaldPaFdHQ1hrYkQ3NlZwRUpzaDUySjhaSXV1Z2dhZENJa0pxS1ExVjdWVEFXdlBlRUxWSTBmQmVBSEZyWW5qUU1RX0lIeFM1dk9FUWhJYw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Ukraine is finally going to get Gripen fighters built for a Russia fight, but new jets come with new challenges",
      "source": "Business Insider",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQY3REeVBOLS1lcTBGaDJIUzJoRDNtcUtwN28zcHJURXA5VmFWYVVFUWJqSVk0ZUQ3bURzYnplTHo1TmcwdWlEd3BQVFd6U1RPdW44NVhSRXN2b2g2dUY2dTF3NXl3clF0QnVFWm1jRERLbzlKbjc4VnVjblZOYVFKak50b3NYLVdZNURuTEZ5cWZsQVB2elEycDl4dTRndW1aVTdic1ZJRHR4bWpL?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Why Sweden Became One of Ukraine’s Biggest Military Supporters",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNM3hfaEhCRmtkYmkwbEt5TUtTR2JUSDZIRDNScGI2MVU4TDk5LURlNUc5c1JOcXNmczJOQ3k2ZE8yc1pFWTlWaVdxUDJMc1lta3ZuVEN6N0xXQjlNUkhvR19mbllTeGw3OTdCTnRsRDBCMW96eXV6eGZRLWRIbFNZcjJpdWV1RVBZZEo0WERCZ291VlVrNnUyNnpxUWZiNlI2UkM3cGwyNUtONTg5?oc=5",
      "date": "2026-06-30"
    }
  ],
  "sweden→pakistan": [
    {
      "title": "Jaishankar exposes EU double-standard: The weapons Pakistan got from Europe",
      "source": "The Times of India",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQMXBfMHF0dTllMjBUV2ZqSUE0SzZZUFVyQ3Y4M3RqdnVmZ2hMN3U0THpIZ25ZR1U3dURUQ0JMUHJUdkxCRkRqZ1JzSHFsM0R6ZUZxbEtBUWZ5ckcyaWh2ZjVab285b1pvWHZVN2doZ292bmNUdVhreVlQc2h5bDVFc2t6QVpCMnNVTDBCdW1vNlg2TWo5aWdNQXBELUQ5RjlKZ084SDgyZE5GbDFQLWxGX3J6TFV2MXQxVVlSNktwczY0bEpFbUlQZnNkSjBkTXNMLVZZbHlBSUdrSVg3QkJqR09jTdIB6AFBVV95cUxNOUxzNEVNbVVXZXBQMFpuRWhwRlp4b1MtcVVUOVVWc2Q4dW5sUkdOcEFvLWhMekdUV0NRcHF5YW5RbjF3QnVFRkx1WkNBSE1ubGEzRmxUTDNmVE9rdUFpd1duOF9XeldsMXBOTlh2QnptczFZTHZWeEE3TVNxVXRMTE16NVdWT19xUXZBUGQtNWVqNEI1WWVnVHZsM0hKWDc5cnU0bFh3SEplRnRZQUVMakxMdFlCVGVuS2hoUkZ4cTFBTThHZ3Etd3M2VGdmS3Y4THpyMm9MaVZGS2h2aGl4SHJTeDhnblhf?oc=5",
      "date": "2026-06-12"
    },
    {
      "title": "Naval radars, choppers & battle tanks. What Jaishankar meant about scope of Pakistan-Europe defence ties",
      "source": "ThePrint",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPWEthN1VXOXNCeU9mNlc1VnZqZWpvVVJkVy1KeHZjb0xjWEJQVUd3TkhUdW1JbXZwcVpyaEMtcXNBVGl4SGhCMW9vV3NEUVJTb1dwT2dRcE1IRnRiNFZVY1lZc0NNTE40SDRsZlZsd00yUHlpU1AzbGN3UHduTzE3Z2E1T2YzMkV2d0dja3NldTQtNzBFZFkyN3ROWThtdzM5R0R6aC1FcWJNSHRYdWc1TFNBbnU5cVRUNnNPYlhFTlloenVuMXI4WmlWN3U5a0M2Q0lv0gHYAUFVX3lxTFBzZkVveVhJT1VwRDMwMTRXTDVFVkIxZ1JhSFdYeEdNRkZtbzBpa2V2YjhxMVpjd0hIX3dxaG5fbnBqSEFMek84T0ZZVk1HTlpaS2QySjFpTjdNT3BtbDJNQkRjczA5d3VGamNKYkgzQlNWVWpub3RKb1ZXNDkxUVlqZkQtMllhQjNhYTVGQUhpb2o5RURMdGVJUmtRT2drbXNQbUZqRG5DdHFDbzE5OWdJZ2hHZkgydmIzRTRKakpnbjVXaTBKR2QtUFpoUm1iNFRzWlptM0NFaA?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Sweden to invest $916M in air defense systems",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPSUpQU1J3OGI5VnB4S1ZQa29QQVBRUUJKZnM4MFJ3MGJzMzM3cXUxbXR5X2p5RXlTUWE2M25XOTEwZTlEal9YNmlLaTJKSU5kM1lVbGFKUlJIdFoydVowZ2VXQUFVZWFNdHZrbGhtdEd5a0RZRWRaTzIxamROVU9ib1JKOEZremJnWVlpZg?oc=5",
      "date": "2026-04-02"
    },
    {
      "title": "India had a $90 billion defence bill in 2025. Only 4 countries spent more",
      "source": "The Indian Express",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNT1FDTjdpeUtRVFhYS3k4bG96QjdJMTRNNlhmMDhvZk94M201eGJSTDBJTG5oc3huUjA2emNORkt4TmVPWHVTYmxvYVZWMThRYmpyNDBHMmZnNExzbUliZ2RIcFJHOHJVQWNaTFJabHlsZ2FoQkIzVUtuaXdHZUtuSEtIbWFiRHVPN0haekdtOFlUekp3UnpQTWthZVFSOEo3RG9RUGJmVFhMUW5tcW9Ud0FLWUl3MHlq0gG_AUFVX3lxTFBlWFB5VTUxZndkUEx3MnU3TFIyNkN6X1BkWWN0d25mZkhVZk96ZENBM0VVejJ1c2RYZTREdnpQMVI0T2h2NGM5d2NJdjV5WXlzNGNQRXVLVXZUdDU4aDNyeUNSaV9CUGpLT1doUGVMNExzcV96UmU4NWd3dlBsNzBiZnVmZFpQbEFlcV9YSFVqUVk5OVlfQVo1QzZjU0VpNG9HWE13Zm9KMnlzNlRCZFdTeWFOZHJlM1laMGYzY3ow?oc=5",
      "date": "2026-06-09"
    },
    {
      "title": "Defence budget rose from ₹93 crore to ₹6.8 lakh crore: Will India boost spending amid 3-front threat in nei...",
      "source": "Bhaskar English",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOd1duRVZNc1FRTWFwMDNRSHotRWxmaVFCUy1uamxReVpxeDctamJGT2V4Skk5b2pqUHc3TkVxNElhcWdDcGNkR3NROXE5blZvNWpsbVFIekZHek1BOU9md1I3SmhiWENwMnVzZ09NbWM5YXI0aTR2TFNfR2lkc2lNRkZNZGJGTm40WGlGN2tmUC1zVW9iMVQ2MjJZcUhzcnVJOEJWZTdOUVltMC1YX0kzazkzY3ZLZDdIaTVzenY1UUtaS3pOdUZ6WnQ2VWhKZlJOdkdFMNIB2gFBVV95cUxOVmhYMHVQOHdfaHVHRVltWURIdmhKakRMc1MxRTN1ZzJoaDRoNktJNmwwZ0ZnNWJrOEdGRWdCamZCTHJOUVlZWTRBbmVBa1BiZWt3R3FXMFF5UFB4YjkyOFBPVkt3ZVhZNnlQbUNrS2RENDVRMlFyS3BjQklMazNpZlByblhLZWExcUZPbTFZQV82ckxEVEZWcHdYV09oY3hZRERieUhMRmxUQTkyMjJleG1JQ3c4cGwtQkpJZHNMNzBWV0E2SDFFTDVaR0FienlCanVnY3VnaHZ6QQ?oc=5",
      "date": "2026-02-01"
    },
    {
      "title": "Sweden arms exports rose 18 percent in 2023 with Pakistan among top destinations",
      "source": "Arab News",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9lMmZ2LW5lcnBWNDNleEI2TXVobHNfa2VDcGw3WnRrLVQtTEZfN0JoUHMwYTZjUlp4TTVYZG1PWDBuanB4OVlfLW9hNHdZRS0xTTFSUVVGYw?oc=5",
      "date": "2024-03-04"
    },
    {
      "title": "Swedish Weapons Exports Sold to Dictators",
      "source": "BORGEN Magazine",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQZjN4SU1EZGpIX2t4NDFBdWZJbFZBLW50SmxIYU5iUnhYZ0JpVjRiTU82RkFRTjItNV9hRUczM01ybHVCOTZiNkJDdVFHTHRHU1dlUFFMNmdhTWZ4MTVKNjRLVVo0ZE9lcWZFZXo0N2VrRzFfSXBsMUxRVkhad0kxNlRFOFY1ZXU5NmE4RHhrN2E?oc=5",
      "date": "2014-05-25"
    },
    {
      "title": "Pakistani Armed Groups Obtain U.S. Weapons Left Behind In Afghanistan",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQa3RrczBwSmprcWlGSXU2WHNTcXJfQjVqNG0yU1ZvOEw2OWRFUFhtTmExbFphNlRvb1VxMHZ3X0tYZzZCQ09RdHFGMkYzTkZ2WUxNM0tlNEtYMG5zTW9zWlpheXBic0Q4UzZHYXlwUzJMbHQzNHlhdE15RVFwRDhIaVctYzkzVFdqSGFHVmxzMU1wc3JCV25iMVc4OXQxd9IBoAFBVV95cUxNMS05UEZXN2t4bkR4ZTF6anB0aGtiaDRsblZlaEtZazlZSEhBR3pSMExsM01KbFRKQjJkVGcxN215UnpNa2RERWxlRERldVg5RnE5RmRuTTRSSFVQSkhqREt1Mk5jV09lcHJ5ZUZFdmRzb1p3TlRQakdzM1dMdlhoeGtZVWlqaVVjVjBHQXBNekZnQ2F4MVRsQ182TkZTZEZv?oc=5",
      "date": "2023-03-29"
    }
  ],
  "canada→ukraine": [
    {
      "title": "Canada Unveils $900M Ukraine Aid Package, Air Defense Boost and Energy Support at NATO Summit",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1IMnR6QXZabTJ4SHFkc09ncTdwX3JMQThrTkVCNEs2S3dDakFpTzFJR1JSVjBYdV9PVnRWQVZnX1NHendIT1BsZnFITQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Canada Wins Support From Eight Countries for New Defense Bank",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNR3U4TmZyeUpxV0xhVzN5el9jd2ZiT1FILXF1dHdPa0RKYTFxV05ZOTNWLUhMVll6QU5xQmx4NjBaUGNnaTNUNXBNY29qTC1XUjNtdHNUUXlPeExtRVVwX050UG12MEZXRXItOEE4ZTBrazRBcnZCV2J6LThIb1FnSWJITUljejBaQlpjU0ZKMm96cFB5c29GOFBjRUhLODNldGhOWTBZQ0NDX3pubDl6TF9tMm9kWTRYTEt4Rk91ZlE3bTl1?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "As Ukraine urgently seeks more air defense, Canada announces $900 million military aid package",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPLTUxa3I4d0NTUUthdlAtZ1VNXy1wblVjX0NxazRrb3dTa1hQMF82dExYRGpodFYwM24tS2F1Q3NaUGpIY1dKcUFuTmpvdGpPU2RYMjZRNjdBYl9RR3RvckJHSDJpRW1XZXRmMkVyLVJPWjVlU2FjbENTUVNvUWtMLUUyQU1GS2pFRlN4XzdlMjhTczg?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Canada pledges $900 million to Ukraine for vehicles and ammunition, but no air defense",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNNFoxZ0UwdUlfMGw0RXFsYjBkWktwMkZ3ZVozWmdYLXdBYnlfblEwTTZoSW1KUDh1MU5mV1JoWE4wMzZ4OWVWZXBLenFMZG05MGFzeWVQNzRRYTIxWUh4WFhrV2tlUDZNSmVLOVA4VHBxM1RDaXg2QVFtSlJuMTVMaXZzenRMSDJzZ1Zqel83c2dPdzJQeEU5bkpVU3h4NE5MYWZhSFJDMTQ5ODg?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Canada Launches $134B International Defense Bank With Ukraine Among First Participants.",
      "source": "ubn.news",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNOHM3WGQxNlpuaVNIN0NaQi1iWnFLeGt6cjB5QnBKUmJsdU5YaUEtbkRMUGs5bFFMckY3c1dmTmRWWENQeVkxZEcxeXpGRTY1ZlhkOVo1REI2Y2w0M1pVdnNCM1lMMER2Y3hfMVkwZlhsS05YZWFycU15NGc0d0R4MU5FRGFQSFY2akFPOFVSWTQ1N0t6SE9YQXNGWjlZT3FJQXNjbG930gGuAUFVX3lxTE51N1czWmtDQ2lacGFiaHZvbjFKak56X251WjM3N3oxclFXT1pBQ1QyWl9RZzFTUWpqd252aTZWR1BCclhVbW9aYlRzNVk2RUpzYXQ2cmRLQmllQ3gzTGx5NUV3VnRlNUtlUVZCQXFnZmxTT05wQmJWQ1g1YjZVR1NuMHlRVzd1T2didHFVOUw2aEdtVlR4ekRpSjFGOHF1NW5oSFlaY0x4Uzl1Q2Jxdw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "NATO allies sharpen focus on Arctic, defense spending, Ukraine as summit enters final day",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOT3p0X2dzNTlPbWVUVVVQaXE1QzV2dzdaOXNXSnpZM1BPWml0TDljUm9MQjhWcncyYmZIY0RHS2lXcnI5aGRwaE5sVlRnRkg5TU9qazQ3al9XaEFhNUliRGtEUzktdEtEWkU0WV9uQVQ3Y2RTM3NveGcxbElRT05YdzhTak9sR09sS1Y5eXV0N0tuNVlpbk5HMm1tWklQYXBHS0cybE5fQTFUenJWRnpPR05DNEZOTDN6T19zTHlOSEVWcGpj?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "NATO Pledges $80 Billion in Defense Support for Ukraine in 2026",
      "source": "Odessa Journal",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQa1hsa0YzWGUwZk5CMHBSSlZSbFBBZjBBWGk4U2JONVpVWm5SUlVIZW1ycHV1OTVlNjBwd1pUUUFpRU5ZZHNtX1lqSTQzTUFxQV9UYkoxdHlRb1M3UEhoVVBlN0NsNXF5WnZsMTl0b1lLYjBYRzdYd3hhT2FtU1Nlb2h5OWVFd245ek91T0lhbTNGelE2Q3lIWg?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Canadian PM Announces Major $633 Million Military Aid Package for Ukraine",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNaHF2RjVpekdxZFl0SWRBdk8xbjVjcnZpRnNEekVNdHdoNjNnaHhWVjhZN1RPazNiQzNQcVc1bHU0eUR2cExPZk82TWZJUy1hQS02cGlvSEVkRUU3WWNvXy1DN1hNdTV1SEFTR2szcHozMnk0RVFlbmJocW9VNG8xQk9oc1ljMzRBam53b01hbHlWOFdxNk9icUZpd3lEQU5DYXNGSnd3SzNmMjNuMTllWjh6MXZWZUNYLTNV?oc=5",
      "date": "2026-07-07"
    }
  ],
  "canada→saudi arabia": [
    {
      "title": "Saudi, Canadian defense ministers discuss bilateral cooperation",
      "source": "Arab News",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1sdVd0NWtNRkNUMlBabkNoRDFmVXJITy1IdXppUUludV9pdFc5ZVcydnFRTUFFbHJjSFFra2FVMVBGZ1hLUUVCWUhzcTRkc1RtLXVj?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Saudi, Canadian defense ministers discuss bilateral cooperation",
      "source": "Arab News PK",
      "url": "https://news.google.com/rss/articles/CBMiTEFVX3lxTFB3cUhpZElpNVhlb25KNnMtLThqSDZHUTJOZmhCOTZqTk9NenBLeFBvX3U2Z2VQWU94cHpOTktFTnBqbjBzcGpBcE4wZXc?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Canada to deepen trade, defense ties with NATO allies, Saudi Arabia",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQeHVnMENVS0JVR3JYQ3gwZ2tndjYzRUdsTTRPbGFDYUJUTEVoU2R1NmpDWkpDbEM3bE9NaWJJWVhjVzZPYVJ2TWxvYVkzN2VpS2NIUG5oRVNwMmpDaWYxQl9wbGFwYS1kVlZyeDR5ak45OWMzQTZoYldZekM5OFJIeURTcEFoZ0FRRk14OVBvOXZpTDhmNW9DMHdLYjB1cWViNEtXcWV1anI0eHc?oc=5",
      "date": "2026-06-30"
    },
    {
      "title": "Canada to attend World Defense Show in Saudi Arabia despite attacks against human rights defenders",
      "source": "Peace Brigades International-Canada",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNd3Bhc3VoYXJMeTVybHRQYU1MSEFUSHctZ1ltYXE0N3hOWGtoZ3VzZjVXSGNhT3N0SWVBTGIyWGFQWVBsZUtrblVleGJqdWFMM1RpeE0tNWF4ZGFLTGVaZE94eGhyTlpUS3Rfd3FMNkotcm9iZl9ERlIyYzhBTWhPSlE3NDA4MjNSb2lLY01FS1JobENxRUFFQ1VSWEtGcXJxQVpERF94dElmaXVfX2tkcVJBNXdjOVZZemJHT2ZvUmFkaHV6RDN4MjlMWFNwVjlGTHc0?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Saudi, Canadian defense ministers discuss military cooperation",
      "source": "Saudi Gazette",
      "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBFalozVlM5azkzNmhTbm1ZbWhzQ1c2SGZ4UGo0VUNJMkV5ekMwX21sOTdpTXppZkdKY1hRd3JDM1JGUXJidHFHSVI4b0pxZDFpZ1R1dg?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Saudi Arabia, Canada launch investment pact talks, deepen mining partnership",
      "source": "Saudi Gazette",
      "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBLRGNSTDFIR1hsLW14SXVnMUpRMmZ4MU13S3NCSy1CWjcxUW54bG15S0xjbnM0eXJqWE5mb0RYdmFKVkRUeFJJYm9mVENtbTNidmtqSA?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "What to watch: Trump vs. Canada, Saudi F-35s, new naval tech",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNeGNfVzNoclg3YTFTc0xTMU4tRVdHOUk3RDNoSlp4X3E0YVFJaUs0UV9PUGNxWUpCNHlJUXR0bjJNellFX2RJdHlzdmdvN2xCWHdZU3ljUGZ2a3pWYndBNC1feHBmZEFBTGpvQWVsVk8temE5cVBrWmZhMW0yVS1MbWVSYV9VMXByeVpJWTBTRzNjUmFmMUpDTA?oc=5",
      "date": "2026-02-03"
    },
    {
      "title": "Carney to visit Türkiye for NATO summit, then Saudi Arabia",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMENlWGJ1RHJiNHM3LTAyV3lONDVZanhmcVlGR0RfTG9vbU9jaDlBN2daOUpFaWFoWnA0VmxJV19acTh6S1haUXdEX0VmbU01X1pZZ0lBc2lFWUc1N1FLa3p3V2dxaWYyQXkyZmhSaDRKM2ZMLWtsUVpld0RGSWpueS1jek9BeWhsWkhGMDVNdnFMVlJOOHNiOVBCM1A?oc=5",
      "date": "2026-06-30"
    }
  ],
  "canada→united states": [
    {
      "title": "The Defense Industrial Alliance Washington Is Throwing Away",
      "source": "War on the Rocks",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNX3ZNdWtWRGNlZkdTX1RBM0ljM3pSVjZ1WnFaYmJIbmRQMWxsM3RodHJpODZYd1hqbHdIanktenN0ZzB4VWJMLUpOeHd5SGpwdGwwQ2ozZVc4cHJCUmNEQmgxa1A5ZTJ5aFpyMTNIOFFrbnoyX2l5QmZnX0xOZ1RfckpTTl90S2tWMnFad3BWbnRhcWktdU9KWFZRbGxneFk?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "ALGORITHMIC WARFARE: Canada Launches Its Own Version of CMMC",
      "source": "National Defense Magazine",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNV1JyRHAycTBJb1NaN285YVZOb2RQeGZsTzFVLVk3QUFJSWM0OURGMXgzcFBIRDZ0b015MU42YUgwNnBVeGthVnBDczZiZjlSYkd3d29uYzZmRGxQWkZuN3hwQjlQRlBJQllxQlRIZnRUZmJwSTBnSXpjUlBvT1I5SGQ4QllDeDcxVThYOWVuODFkRk5OVEFTLUVMbXhhaGM?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "Australia scores its largest defense export ever with a $1.75 billion long-range radar deal with Canada",
      "source": "Fortune",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNMXBqSno4UnVGbmhXa0IzN2FtZ21JM1Y1dDBQeTdEYjJVZWF5V3RWdHl2cGZOZlhVeWhuRlJQTlFnNWk4XzR5VXp3N1k0QTNTRjNveUlpcnp0VUlqdHZYck1VOGw5eFVpNThtMGV1R3NkN3FORUlUMnNhNlNOYWg2VWhWWHh0TkViQlFHZGJxU3NjeFBvNEQzd29wVWt0REdxa28xalZnSnVFQQ?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Canada Is Spending More. Is It Buying Military Power?",
      "source": "RealClearDefense",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQV9LazZEcDhGODI5bzc0a1JoRVhHT0dDZ05sdkp1MjRxWEtycFhPU01jNjdKcjFaNHZkZG1ieWRiVmF3a21RMWxRVHRHeDhud21yTUUzRll6WHJGcWZLWnczQUdnSUdsUEZvUldwUUlneFRxZU90MmFtTFo1U3pvc2RQSnRaSUFldk56OXpkZGtobnVub2xVcVIxMWlQRU0zZWhNb1F6aS1CQ3F1TzFVcXRUZ2V5YkRr?oc=5",
      "date": "2026-07-03"
    },
    {
      "title": "Why Canada Keeps Underinvesting in Its Defense",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQcHpmNzg4RzVwRjdEVDhBb1VPcVQ1MkJKT3h3NWkxUnRJUzdaazNsQk9kaDFqZ1I3SjdWNUNwNTJfcDEtV1FvQndpQ0YyVUp6bzhCNEVlVzBILUlKTnZSclIxTDFudFVlY05yUXhGeFA5dy1HLVZ6U3E2MFRwaS1fLUdNc3BZSzdYSHlj?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "Europe and Canada boost defense and lead NATO support for Ukraine",
      "source": "Межа. Новини України.",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE43bjZVajNJRkxXSFV0dXU2bW9yZktTOHN5RFY2S21qRjN3Y0VwM0JRMlVTOEVvZ094MVdwckpVZmVPN1pWWGM1X05mSU0yTVotOG5EalFhM2Vpd1JRZ3pwNTZRdWR6UQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "The Politics and Repercussions of Washington’s Permanent Joint Board on Defense Pause",
      "source": "CSIS | Center for Strategic and International Studies",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNUW4tSkI3MTMyQlNrSmJWYTFkUG9UNkNINjZEXzRLWlpnSGtOV3VjcHZOSnlrUjhJSlFFcjV5QjZERXVOTll4cHp6ZG9pMzkxTjRKTmVFSmttZURjS2JUejdKd0xKMmhGaUl0Q2JUQUVwVmx0YW9QMG1GSkwzVS1EM3FSTHRTWllGZVdZYnlQNmxwOXhGX2NQQk5jUVFtdV9OUTVaNEQtQQ?oc=5",
      "date": "2026-05-26"
    },
    {
      "title": "Focus - Gun violence soars in Canada as illegal weapons from the US flow in",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPTVZ4UWliVG1LdGN2TWZPbmRoR2tNM3M3S0FXQnVmVXM0aERGMHE5cTd3WUtQN2NxMmk2VE1WcVM0RGdNbkRLWTFONE9EYVR1aFlPYmlYU25JZURocmx1dGo1UkV0QjNaMnFUWjJvQW1Nc0Y3QXVueFRDTnpiMjVBalVoUXNrSW5pMi1rY01oUV9hTmNOUzBiMDl1akVib2VWWDdLXzc2V1lpUF8tWGhoRFdTcXQ0U0pPeVgw?oc=5",
      "date": "2026-06-19"
    }
  ],
  "czechia→ukraine": [
    {
      "title": "Czechia to Fund U.S. Weapons for Ukraine for the First Time",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQRmZIU2FvZURFNDNWRXNWODhBU3ZUYXBOYVg5T2hfOG1pSWFucktlSkotNnN0bURWZko0cDNxVVJlN29Gc1hYYWlRbTFkREw0Y0lWcmxnVUdpVElGbzF3RUR1dndLNmF2eEliQTJlS21QbkpQQ1V2WTNZZ0EzcGR1SE9mekZzWFIxUm5CUlJlRUk3d2hs?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Czech government that campaigned against arming Kyiv will now buy it American weapons for Ukraine",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNcGRJVzlMQWNGWjhNVmpVcHpiV2hobDI0WENSWDJrYlVRZUpBMElPaEVHOXczMG1MNFhJbkVVWHB4S0YxZ2hzbzZuSzlzbkotdWNiMnNVMmctUmtuaUc0QXVwQkpTWWIzSHZnWUhtd2hOUXU1REtJSEM0NkxTcE5HRXVhWDJoMkxNVHUtMWg1ZUNvOEhkc1F2ako0aXNlaVFoMVdmUmpfdE1kVFREV2hIZHRpQ0E1UHNSMm5hRzRxTHdzYkZQLUpNY19Uc09ZT012SHlZ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Why Czechia supports NATO’s Ukraine aid plan but won’t pay into it",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPZ2VtOU5BVVlFLTdXZWYweG9yZWxzbjg3RDRWdnVJTlQxa0tDNE1OSVY4OHFZQnNCbEhWbHVZN3I3S2dLTkt5RHhVS0hZVmJlWGZ6YmJiVG5ZRndfVmtoWVJXVXRhaGt3MVlDdzZacUY4RlBLdW5KQnRpRjN1NHloLWdpTkpMVkhEMGdNdW53?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Czechia Sends Ukraine 10 Training Aircraft to Build New Generation of Combat Pilots",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOZ21CWlVYS19yWS04REcwYWpWR2lkRUdoYzJVMlBwQVpUNUw2RHV5Z2xOU3Vja3RraGJTWEV1SFlObWczQ3FRbWkzMzAzR0YxdnpIbDBOVV9XcDBVMkYzcUw5M0lsTTVGek5TRkszYjJaQmNvTWFmUktmX2thcmgyVnVwb3JiLTQ0SHZJNDFkZ2s5eGJjY05CWG5RR1BuNDA5TTlLTmRpeW9icjhCWWJxUkxGNWFJNThiRHBuUzkwQnQycXZoTzBrLWtB?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Germany and Czechia Summon Russian Envoys Over Alleged Threats",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFAzRmZPZEcwM0RRNGJCMGJjd0NxZVd2ZU1rRVRrck9Cb1lENFpHWkRhdmtWVmhiYzVOc2tUMnFERGpGaGduUWRZTUdFVQ?oc=5",
      "date": "2026-04-21"
    },
    {
      "title": "Czech-led ammunition initiative to continue; Germany commits $346 million",
      "source": "The New Voice of Ukraine",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOYmJ4ZFIwQW51ZHF2R2ZfU3BFcE9Fdm5DN2hzZFNlOTRMYm5kaDNJOXpHTFljZkVqTlBVUmwtbEh2V1VzVVlwSWptOERSQlZCZVl6OFRvTkF1N0FvQWpma1MtZnNWNk5RSDgxSThKeVhQMWdvVXdqY3pJcXBoa2JiWkpseFgxYW05R0FKWWZVQW93NEZyUUdUX9IBjgFBVV95cUxQWEtSNW9ISEptd2dZWGhjdlJWRUk1VjhXd2JUNXlNTVNpbjdGZmgwTDA2alotMENGcm1yRUhzNXdaRXpsOTBlX25WaXAtN1dCM0pmODJSSS1QLVJ3eWxUUUtFVDdiSmJHYWNhSHBLcUJLNk5GS0IzU3NQdFlfcVlHTHpIbkJzb2VUeUZpWGNR?oc=5",
      "date": "2026-06-09"
    },
    {
      "title": "Czech drone facility making weapons for Ukraine set on fire, investigation underway",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNYTFyelh3NnlxNjk1Y2ViSjRXTUFNWWFfbmFWeHpwcWg4TlBLUVNoMXhXdUdFMG0yTHRjMjZTMGtubXYzTG5uVlZuOW1GV2tFUTdFSVo0aC1aWFpUQ0NuWG44ZXk2Nkpuai1xOTk0bUJ2cGRLUWdremRzMEl6RXc5OWdybW03RXV0VGEzbURjR3VHYlZsSUp0dUxnc0QwMUVLTHB1SmlFeE9LYlRxWmlqUA?oc=5",
      "date": "2026-03-21"
    },
    {
      "title": "Czechia summons Russian ambassador after Moscow issues threats over joint drone production with Ukraine",
      "source": "Українська правда",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE54dzBCa3d1dFZEbk9SUXpmSjhXNXhaWVphcWM2ZnJZRjlwQ08zWlJ2X05PbnBvNEF5Y3BVNzdGZTVqYXNOaG5yX0d5SDBlX2VOcmhUYXNpaUZOWHVhN1lqRnJjbTTSAXBBVV95cUxQenpPbWlHY1hFNmtCdkxJMWxma3ZIT1EzNWNRVzN2c0thTF9yWFl5RWo0MngwRzNocXZ6RHBXbmM2M1lqYzB5OTRVeTZUZEZKU1BCbEpnckdBUDg1NjF3alZkTGJlNHZqZExMTWcxTVZ5?oc=5",
      "date": "2026-04-17"
    }
  ],
  "czechia→vietnam": [
    {
      "title": "Vietnam defies Eurosatory ban and met with Israeli defense companies",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE50WDZ3RlZNcGRtUFJJNnBtWm1RZTVZUVBfSXhXbWoxOGVyZWprMGVyTmcxNGxFY1J4Nm9vaHMxak0tYkpqUEdNZDRnMzAzNDVKRnJIX2FGRURsSkd0Y2lXcnk1Zw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Vietnam and Czechia Elevate Relations to Strategic Partnership",
      "source": "Vietnam Briefing",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOLTVhTnJxY25HNUlybzVzdGtmQkxTZ2pVQjBCMlhmbllLaEhxb2JzWTItOXh4OWQxdDRkTjJvbU5oMVRiM0VvOFZzQW5tX3RDRTZRX2ZGejNiazRHa1hXVXVaTlh5QThIeGxDbnQ3SnpURmxpM0pFV0RtRGF5MUJjU0ZxZjNLcFdXNWFFaGtPMklYNW1BYzFhSXNFREZjTGVyTF82N19B?oc=5",
      "date": "2025-02-07"
    },
    {
      "title": "Annual government spending on defense in Vietnam from 2012 to 2021",
      "source": "Statista",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNUkV3M290emt4eXpKMU1tdGxaQlF2S2Y3bk1NVTF6WV9DVzNwbVBWZVZ6cF9senBndkhvTjZnY1VNOURIMnpkOUM1MmhsckpCN0J1aXRhN3Y3LVk5TzJDeW9BZVpiejRBX19KdTJicmhwNGtvc2tON1RTb2w5X25WOUluWHBUYzNqUXV4akVoSXA?oc=5",
      "date": "2025-11-29"
    },
    {
      "title": "Revisiting Czechoslovak-Vietnamese relations 50 years after the Vietnam War",
      "source": "Expats.cz",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNREVWZEU2RnVTYVVsVmhEckhwdGxaVVpLV3pUQ2QxM1doZ2tTaWVmeVVVU3RjbTM1MnNJcWswcnNSeU1EUkRaZTJsbWd0TG14bDZHR3F1ZUItSnpUMU5teEZ4WVFxdDdfT3pKaWlGcXhydlVOcUxjX3RNbGUzSlZoN1dnejZFQWd4SkNZMHlxVnZiSy1HNWM3TkNvem95Z0k?oc=5",
      "date": "2023-03-31"
    },
    {
      "title": "With Arms Expo, Vietnam Seeks to Diversify Its Defense Procurements",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNcXpOVGstWTc1bENhSGplbDhxZ0xOUUlHeW9namU3dnJtMEtfcWNGTG1malRZZHZKRkhYb0ZkenBjM2N2Y1RSQ05raENUMFk2NG05TnFLT3J1eEtrd1E3M1d3NmtmcWpGTExTVHlNSTA2djFSOFFxSGlLN3lFT2R6MHJWUzFwNTFEeklXZ0dFdjlrNWVYSWo1ZXhrVkRuaGN5?oc=5",
      "date": "2022-12-13"
    },
    {
      "title": "​From BMP-1 to OT-90: Czechia's Upgrade Now Aids Ukraine",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQOEZ2REpwWUR5aXkxNTZTUy1iR19idmRIRm5jeTNVZ2F2NGFzQ2xDcXczOUFja3M4bjdGOHE3Qk0tb1RYWlM1MWpCckMwSHpXNFhreVc4aXlFbWVUVmpNWmtkTzZsZUtlbHg3S2U4a3ZEbjk3a3RuaU5SVlI0RnRKMjZ2Z2s0RGVoMFBIbEdkVmtHb3ZwQll4WXdBMA?oc=5",
      "date": "2025-08-21"
    },
    {
      "title": "The Czech illegals: Husband and wife outed as GRU spies aiding bombings and poisonings across Europe",
      "source": "theins.press",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5JTW80U2hkemdLTUQzMmk2R2ZwYTJoMmZPUW5xRFNMYUlUbjJhWS10WUhHSm9FaEhQc2Y2R2dQTXVFMlplOU1Hbmw2WTF5eGtq?oc=5",
      "date": "2024-04-29"
    },
    {
      "title": "Vietnam orders L-39NG Albatros jet trainers",
      "source": "TURDEF",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQUnFvMTd1b2dReDFvSGltUjVoWUVRM29QX25EWE55clpUcU5GaFJsQTZhd3pkdG9YT1hJSmh5NENfak90ZTJEUkY2RlRPVVR2MmVBN3NyQ1ZCa3FnblZLZEJtMVJ2UHlwYWRNTHRYTmI2QWNlRldyTmlSaWJkSlBvT2JpT1pYXzRuN2N1Mm15VTZISnlY?oc=5",
      "date": "2024-03-18"
    }
  ],
  "czechia→hungary": [
    {
      "title": "Czech government that campaigned against arming Kyiv will now buy it American weapons for Ukraine",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNcGRJVzlMQWNGWjhNVmpVcHpiV2hobDI0WENSWDJrYlVRZUpBMElPaEVHOXczMG1MNFhJbkVVWHB4S0YxZ2hzbzZuSzlzbkotdWNiMnNVMmctUmtuaUc0QXVwQkpTWWIzSHZnWUhtd2hOUXU1REtJSEM0NkxTcE5HRXVhWDJoMkxNVHUtMWg1ZUNvOEhkc1F2ako0aXNlaVFoMVdmUmpfdE1kVFREV2hIZHRpQ0E1UHNSMm5hRzRxTHdzYkZQLUpNY19Uc09ZT012SHlZ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "More European NATO allies should step up help to Ukraine through PURL",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNdGxWcDVvaEJ4SFBkQ0ZOSkdoM0FPM0dzTGlMZ2ppUkdIV0ZVZ05QY1pUTjQzVkN5dEM0eVhWc3BhV1RxazE1XzMwQUEyQUFWUm0zUnRweENxSU1yZ0lwYnhnTDR2UEVXMVpwN20tYjg1TXIxd0lCTlBXZmJTc19mMml4Qjd2OHRmemQzWWVfN3o2d2R4NXVFcGNaRHJVQmFCZGwxdXVqcDBJNTJES3ZvMUFUTQ?oc=5",
      "date": "2026-07-03"
    },
    {
      "title": "IST faculty member completes Fulbright experience in Hungary",
      "source": "The Pennsylvania State University",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNQW84ZWtEUE1rQnhYSEI0czNHRG5EelBlOGNvdDhzSzRjQ3ViUjEwVEVwR2kwdmRzOHJtZDF3VlJRMlpWTEl1MmtETjRrYjZHdXRnU0hHS3FKd2pRRE1zemg4bDYzaGhpRDFiNURhM01WZUpSWW16aDloWTh1M0dGRzFOdVg3em9UakNYVGdXa2RGMFphTWl1Vl9YRUQzWXR2Y3VOOVJCdVJ4V2d0UWdBUGsxUzl2YngzS3NmajFnMHdGQQ?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Weapons in Hungary Trade",
      "source": "The Observatory of Economic Complexity",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE8yRFRNZ3VKV1NmdVlpcHp2a2gyQTZsOTd2WndtRlVoSElFbXBqRjBRQ1BBZ2o4cENIZ1p2TlQ2U2p1WmhURTN1R1BKclp5MXowZGFEOVhFa1Y3QWVmVm56bDdxYmVUTU1zMmtzazdoOVY0dGJKQkI1NkhSZzg?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "NATO Eastern Flank Military Readiness Audit Points to Significant Gaps Among Ten Border States",
      "source": "The Baltic Sentinel",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPc2VmdDFZOFNvd282dVRoOVJ1MWwxeWN0UUFxbHUwTkY4TkRadi14eEJFNEV6eHhZX3g2YnR5YXcxeFk3YXVsdjRfOGNlM0hPOG1OTEtKVFlUWEJ4ekkxVFJHZVVlRXhFX01yQVFzMU8tTTc2ZHhZejZKRDVQYmctb3l3cy1oY0tyVmlLY0ZZRUxIN1o1MlZnQjJFX0JLTEtIQ05EQmtiNGNDVFQtc2MtZHMtcFRIeXgzeTQ4QXl4VnJGbGpnNWNz?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Hungarian Fighter Jets Escort Israeli Passenger Plane After Contact Lost - Israel News",
      "source": "Haaretz",
      "url": "https://news.google.com/rss/articles/CBMihwJBVV95cUxObnhZWkNQbkt1b0wtdjlKR0hsTnVYcWY4VjFrSlozcHpWQVcwcFRxNWQ1NWZvbEkwdjFXOVdBbmRKYmdGUGI0VVBUc2JqTHBDajQ5NGxsaDdSMnl3eWFvSVJGMlRlNXFyWjB1WVc5eG5oYlhxWUpuaU9jRldreVhucVAteTRNeUpNbVphNzdrQTAzX3lrR0I3c3FnTVlVRXVRX0drUGNzNkdtbXdqN0xDcW5uQXlCbmpfMDdDOGdkaUF3S0o4UDNxMXNxVXpMczRYV3lkdzk0UkxqTV9GSnR2VUVmNlA1S2dWdC1ER2JRS0JTeDMyeWRyYzhCaDZQV2tEUEl2VWx1NA?oc=5",
      "date": "2026-06-13"
    },
    {
      "title": "Which European Countries Are Most Battle-Ready on the Eastern Flank in 2026?",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPaFRrcmNXRmZrVUN2UVZhSmlETXZRbkx3Snc3VC1iZVRyQ01hYndadzRCUG1GWmpJaEt3NE0ybDUzT3Rta2JvRmxiRXo3MXdXb1V6YUhHclRMYkc2X2IyZXlWMTdiVEU5OGIycVR6VjFtM25wNXNlZmY1NDZzRGJOd0lLaU94TGUyOGFJVUhVUnZmQXBFTFYybDQ5UWZTal9TUTNteWlPM0dZbWJf?oc=5",
      "date": "2026-05-08"
    },
    {
      "title": "Orbán says security being tightened at Hungarian defence plants after terror attack in Czechia",
      "source": "Українська правда",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1iQ2poajVORmRqczVvOVRyanRmTWtYVFZMc1VPcDBNYTNGY25DaVp0MWkxeC04eUdJM3VlMFdPUlFGRk5DX29zenR0Z0ZONEdocGZnVEI1Zm5NRWxvbmMxd1JNV3HSAXBBVV95cUxNUW44NUI4X0lHdno3aDlGUGd0OHBKbFFuUENFOEhKZFdPZVVKTWY5THlZanhZVVZsd0tJX3dJZ1BtaGVQdlAtbXlhUGRCMWo2WXdOeVo1WnZOc0hzdi1WdnpMSzlDRnh3STZIT3lMZmw5?oc=5",
      "date": "2026-03-21"
    }
  ],
  "south africa→uae": [
    {
      "title": "South Africa makes record arms sales of over $550 million to France, Turkey, Kenya, UAE and 38 others",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOWVkxU0hiSTdkS2RXRW1YUzFsV2g2UmtmeWxvSG9NRHI0MWhaU1Bxc1hWdjdhbEhHSXRObm5QQ0hHNnFac0xieDRJeWFmUFJMM3FyQ1VjN1J0cVM2cndOT3NiOXQ0Q0ItRUlGNTc5Rm9nWXlJc3dFckVrRWFkNi1OUUlwMjU0akdib3dwaGdQaFhpZkRLcG1sQWpQTm5MT01WVGNJTGo5TVFQMmpsYUM5YlAwMmpJTzV0dXh0X0xVbVpKcDUyZVZMTm1DTDJ0UTlwanUxcGRFUTRfQQ?oc=5",
      "date": "2026-04-08"
    },
    {
      "title": "Arms chase: Top 10 countries wey dey import arms for Sub-Saharan Africa",
      "source": "BBC",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9TMDNvWEF5TnUtcktDMmVQdHVyRG1ndzNWQmx1SHd4aHpuR0lkb2pzQUdPRDdhVG03eVgyMkZLcDhxTUFHSTl1ei1uS0E1Vnd1NmxHcE0ybUhuQ3pn0gFiQVVfeXFMUFBSUUdSclprU1Y1dXRRczRsOGVnNS1SS0tzYTNRblBaRUZ1UEsxbmZpY1BsNU1hTUJJMWNxMnNiUHhFcXpRanVaUmdFQkZzM2w4Z1I2QkpCQXMxVUxSbm51TGc?oc=5",
      "date": "2026-05-17"
    },
    {
      "title": "Arms committee fails to explain SA’s weapon sales to Saudi Arabia and UAE",
      "source": "GroundUp",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPSHVzV2t4cDAwaFYtanY0M3I1bHh0V2FlSHVfVXpHeEp5b3BDZFMyaHBTcU1QeEM5LUdHdlJKOEtRU0JTdGV2RmFfcnhJOXpjRC1sVUVGWEJDN1NVcjRYaElXVXpITkJ2SGxXWUxHQ1RvMVh4Y0lVYkx4ZkhwcV9ldUxEYVNGMXp4MHpkbnJlcFFEZk9PaVJKS3ZKYlZ2ZXF2dmJHUUwzTUt0aEFtQXZPNURsLU8?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Here’s where weapons manufactured in South Africa are sold the most",
      "source": "The Citizen",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPaXlCcjljRlQta19NNzVfWDJHeWgzSHpMOUxSOURHVVA3SzJZZEZVc1Z1QnFZNHJkUzJDRDRydDFINlJPTkt5QWtsSGJDd0xqRjQ1N2ttOG55SThHSnpLR21Bc2JLdTZLZzVVb2swcW5DUkNqRF9qWW8xLVVKU216NG9sZlVqVlgwaGVISHVaZm9JTjNxZW1uWFp3?oc=5",
      "date": "2026-03-13"
    },
    {
      "title": "South Africa’s arms export regulator sleeps, as world goes to war",
      "source": "Currency News",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQWTVhLWNJRUloOU1JXzBkS3pLbkt3ZFJNWTlVcjlDQXRaUDlOR0twS0JuUjJxM3lkUWRiVmNQLWkyRFYwX0doNGxQcExYTVpSWUhGNUZJQWc2QnFwWVJwY0FVMEJlN1ZZTWx6RlprZjg2WFpQbjhVNGNfRGFxemlxX2hSdzdiSXF3cm9iRjBVckpLLXZKMkE?oc=5",
      "date": "2026-03-17"
    },
    {
      "title": "South Korea's Lee promotes arms exports to UAE, Africa",
      "source": "Nikkei Asia",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPLWdmaEZselVEMmhWREdFMXZwXzBfc055aFpqUTNkZ2t0VkFaUm1VYWxSTGhFcWlEamRnV05IUnRxTU52VG05N0xITENQM2FDRnNpZzh6cHlLNEhRYXctWVhFM0hvd1ZFVlE1QTdSSndsa0R1Y05zQTNYSUFlTFRuUUZxcmVtYk5pcXNObHliRHVBOVBQTmhwTVdmUWFKSGlqZXVzUUJJbXRpaXpXN2FNbkttRC1FQQ?oc=5",
      "date": "2025-11-26"
    },
    {
      "title": "South African Firms Suspect UAE Companies May Have Obtained Military Intellectual Property",
      "source": "Organized Crime and Corruption Reporting Project | OCCRP",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOQk9jZU5CVGlqb29sMUItb3AzQm9ZUnJoVnFwajhvLUEydmg3N3RkTHNNbTZQbmVmYnl0b1V1OVJYNEZTTUl4clB6UDRwTFRFVk9NWEw3YkNsbUpVX0dtTmxxNlY1N2ZMc3QwaVZWV1EzZzJYWk1RUktOVllLOGIwN2tjWUdOaGQ0MFhWMURXTGtBRUVHNGRRbTN4QWVEd0xSYkR6MGxIZjBmUW1tLTZqZ1ZXd0NBS2RwQktxOWNqTzVYa1pSUzB4Ng?oc=5",
      "date": "2025-05-26"
    },
    {
      "title": "South Africa halts arms exports to Saudi Arabia and UAE",
      "source": "Middle East Eye",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOSEdNQTJtWWhMTEVJWXllN2JHT3VIN19STTZFZHh0TEg2aFpsNEN1R21zQzJmOU9VVW1Od0ZfRGpGVDh2NnJ6a2hxaktvMVNWTlU2YV9yZk9DWjVqMXJIYlpLYUFHd2pQOENmSDN6Z0VWNE9OQTFzTTItcnY4SVplUldoSFNWWHpobWgwYWZsdGU?oc=5",
      "date": "2019-11-23"
    }
  ],
  "south africa→singapore": [
    {
      "title": "US reveals seizure of purported anti-submarine mission trainers en route to China",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPaWs0ZG0wblBoOTRDa21YLVBBOVdrUHl2ZmlwR3lCZWl4TW1WRzl1V1hrYkxKN3VndnNuNVRhTjIxX0N0V202QlY5Rk1xLTNwS0FaS3hyLVlNblFqcE5PS3RJaFB6aHJEQjU0emFLVXVMa2tuNTNhd21hMEJBcXRDOTZfcXdpbVRJOFJpamtmVXlIS0liRThTZ0FFNFhoRS1BbXJrekJZQlhpWWczQjQ0RlBpR2E1TWdmdUE?oc=5",
      "date": "2026-01-16"
    },
    {
      "title": "It’s been a rollercoaster of results for DeChambeau as he eyes 2026 title defense in Korea",
      "source": "LIV Golf",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQUERlb0JnVWFWanF0VC1SSUpST0hLM2FvdUxITFhERU13TTdwOXlYaElITV8wZklFSGNGdlYzYW9CMTBzOE5aYkkwdUxTTUZVZW1Vei1uRjZHVzZhNGRhSUd1WGFGcXNBUGJsalgtSVFnUl8ybEtMc0pDNlNvbmFwclBOWmJWczlWNGExQXV3?oc=5",
      "date": "2026-05-26"
    },
    {
      "title": "Germany's Pistorius in Asia warns of a frayed global order",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQMjNtWmpwTzd3bW5yNE43UHljVHNQYzdPM0lFSC1LbGVoMWVVMTgzQnNPUlpZazB1MXhCTm9ZUHlpT25telBfTmk2T2E1OENBM1ZmTldwRkk0MTRxUnpfd0pYaXo4R2JMMG15R3VSMGlYUVFUUHYxVGlMQlBZcFkzVlE2VDU5czRMdUZEWlV0S2hFS1l40gGUAUFVX3lxTE9UeEhaQWlXeGJ1R0VZcl96RDMzNk9ndEVFMGhFeXA3TDZlQ0VTazk2dFFFZkptNlB4M0Y4VEFmMlJFUVljQzdlS2tyNW5hN3RiS1drYjdMeFBJdFM3YTl1dGVCYl85ZGNKVkEyMVJGQVBlb0E3dkNzU2xTcnpyWEh0UnhHNUgzVDRqcTdWY00tR2pVY3M?oc=5",
      "date": "2026-03-30"
    },
    {
      "title": "(LEAD) Defense minister to attend annual security forum in Singapore this week",
      "source": "Yonhap News Agency",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9SZ0tnOHpyTG9FdF9URVJDamlvUTNIUzl5aFB6LVlmRG5vcHI4ZlNYTDlrTFp2SjFsdVl3dWZ1Nkd5YjF6NGt2d3BBc2pHckNwbDFsNnVic0tjQQ?oc=5",
      "date": "2026-05-28"
    },
    {
      "title": "Beijing Xiangshan Forum Navigator Meeting 2026 Kicks Off",
      "source": "Ministry of National Defense People's Republic of China",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE95WHI1R0NKYjdoY3ZVMUdmU2s0YTRETkZzem1XcW0wMXBKQUFzbTh2YzVYSWZWUncxZnpkdUc5bUFkQnNrSzNfT0tfT193M0tKQTcxSkVwZ0xCZw?oc=5",
      "date": "2026-05-08"
    },
    {
      "title": "Hegseth tells China in first call that US is not seeking conflict",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPUC1lLTl3UEQ2VFB2bWdTOWUtSXpXajdjTk9hTklqdVFfSkRBOHQwOWdfdlZqeEd3QmJnZkY3cmZndmFjbko1M1U1VGQyRldoZlRlVlBaV04yQ1kxZEZVbUpzUnpZeFg4anVYSE90Y282ekV3VGlJcmZ5bjJnZHcxMzZEdS1CT1I2cjVaaEhXMnp6MEJPTEtoYl9NblRZWmk3R05LaWZMQ0syc3p3aWln?oc=5",
      "date": "2025-09-10"
    },
    {
      "title": "Armormax Defence and ST Engineering demo mortar-mounted TAC-6 vehicle",
      "source": "defenceWeb",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQTWw3NjhXTkU4WGZLTkNBWFlXT0FhM0ZRZFhwRVdZUkRwQVlQdlU1OXp2VV9HWll2UDN3Ti1OQVNCcUo1UGtnTWVrQ09kWjM3Yl9WYllfejUzYVg4alozaUJzQmt3LTdLN3VwRTJhaEJiRGp1aWd2cTQyOG81QnJKYTNrd09DSlZ3WVZabjNSdUpsNWZ0eU9TTzh0aU5IN2toeGhEcXpOY0ZfbFJjV3E0?oc=5",
      "date": "2025-11-12"
    },
    {
      "title": "Putting the Defense Industry Through Wargames",
      "source": "War on the Rocks",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPYXZsQ2YwTkdNMFVqa2JJc2VsMkVlek1OdTF4QUJBTE9UZk0xb3Qxa1JteFpBcFk5V1R2eEZNU3FxYTZUT3MxTHdKYzlVbTIxdjJiYzBvQWY0U1FCMlZEa0thODc5OFF5eXBhUFdBMG9UTVFxelBFSlJHX2otSGlOY1owV0pNSFpUbTJPag?oc=5",
      "date": "2025-06-23"
    }
  ],
  "south africa→drc": [
    {
      "title": "Houthis’ Potential Impact on Africa; DRC Commences Anti-FDLR Ops: Africa File, April 2, 2026",
      "source": "Critical Threats",
      "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxON3VBNGNIUE1aQUI5TEtrLXE0YnRTVEZ0OXJmSnBIQi1OOW4xbWdKVmxITDRFODBSUGIxRnpSWXJvYW9NR0t5cUxJOTAwTDlwOGhYRk84c3ZNSk5pdXhxQUZWRTFNZExaaDBxcG5HWFhHSW9MRHJCTW1WdlFWVkpBWHZabndfNllFRkhOYzRCZDdSVWhlSnFRTTNTb1NWUi0xZjhMN0lreExsbzJkY0hIaDlRWktWV3VGeFYxOEdQcEtPS1lxRHpIcFhSZDNUVUV6dmZvQzlrMmNKb2RDNXY0R0FYUVF4ZUFPRTFWdi1BSQ?oc=5",
      "date": "2026-04-02"
    },
    {
      "title": "South Africa mining minister criticizes DRC over US minerals deal",
      "source": "Semafor",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPSnNoNjhqMWppN0FyZi1HNVNkLXpvUDJVZU9VOWlGT1Noay0xOTB5RUNydDYzRmxEQWxKbkJkT0hqN1d3ejZHREVQd1hwOWd1d2pQaGJwOGhaZTdMbm9HTEFYUXFyTTR3RWZWMkVDWGdzS00yN0tMaFloMG1xYjNwV2ZUc3ZaeWgtdzhfQnMxZzlxNkVqWE5ib25iQ0Zjc0ZNRHlWZzBmMkpkcHcz?oc=5",
      "date": "2026-02-11"
    },
    {
      "title": "With Russia Focused on War, China Increases Arms Sales to Africa",
      "source": "Africa Defense Forum",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxON0RjYlNGTmg5TjBsRGIxUlhnc0FvX1RCdmFlbzVlMGFwWDJuVk1uZFZqNkhEc3p4cUxKVTFmMnJJbUdMa3ptazZrSk0xRHVlaFBnUHphWUE1LUV6QnZmbnVDOExKd24xV1RIUm9ieVJ0R2VPSE1TRlBieVdRU2RtbkpXNTNHclNJSFllRnlSNnByclBQWFpTMzdKc0E0dw?oc=5",
      "date": "2026-03-17"
    },
    {
      "title": "Botswana, South Africa and DRC on standby as reports show US has only two months’ worth of rare earths left",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQQjlmU1dENTRCcVZmN3B2MXJHcUZTLWg3ZTR6UkRSam1kb0VXNUpORjlFZWZ5aEFEWDdwTEpGX0hNc3VXRjJZRkZVLTVPQWlOa0JQWFFjd2J3aWtXdEFJLWJNbXMtc1ZRNzRUUVRqdGd4TEpiZ0RsNE84Uy02TzZjLWxmd2paLXRYbXlFRmpSUEJPSWVNYmpwblZoSEdRUm9WcDFqNjlMYU1yX1lfMU5KWGpDWlhsLXV6bVZjVzgwLWxnWXZ3RE1pUGxyUkJiRERzWU5hb0FENmpodw?oc=5",
      "date": "2026-03-12"
    },
    {
      "title": "South Africa to Withdraw Troops From UN Mission in DR Congo",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE92ZVJ3TUdkaS1iZVVjRHE3T1NSeGVFU0V3OHAxZHVyRkQybkRsckNRODh0N0NCY3owcFVJNU51QXhnNDVjbkVaYTd4SFBWcVdxTGV2VDZDeWhMSmhCbzI3cWpnSlRzcjl1aVROLUt5OHVvWThOVFBaVkVmOHVzUdIBgwFBVV95cUxNOVU3Q3hfTkdmbHFGTFNxY0VIWGg1Y1B6cTdKVjViRG1wZzZVNDZ2UlBzR0pZRzdGWmlFQzhnc0dVNm1ob0pPOW0yY2FPNFR6SXpKTWg0a0lmZnN1a2FHQ0VpWF9CaldGcXZjYnVBVUN4VWJVNXQyZElKaGUzZlNsZnNNVQ?oc=5",
      "date": "2026-02-08"
    },
    {
      "title": "Arms trafficking / DRC conflict drives arms smuggling in the Lake Tanganyika Basin",
      "source": "ENACT Africa",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQeEpITmM0X0ZYQlB5RXNmWUFjNDF1OUtWcDFaa0F4LVppMER0VzVFWG9kb25BSmRmUmktUHpPZFN6dEs3X181TzEydUNYdHZBOFZXY2FCVlBrYUtGZmVuZWU4MEx4X0FTMFBRRVpzeWVfT3BfMlZKVG1pSW5OS1VmWXRIenktMW5KMmxrdzg3M2pHanlrZlg1M01OeW16NFR4QU94Zg?oc=5",
      "date": "2025-08-05"
    },
    {
      "title": "South Africa makes record arms sales of over $550 million to France, Turkey, Kenya, UAE and 38 others",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOWVkxU0hiSTdkS2RXRW1YUzFsV2g2UmtmeWxvSG9NRHI0MWhaU1Bxc1hWdjdhbEhHSXRObm5QQ0hHNnFac0xieDRJeWFmUFJMM3FyQ1VjN1J0cVM2cndOT3NiOXQ0Q0ItRUlGNTc5Rm9nWXlJc3dFckVrRWFkNi1OUUlwMjU0akdib3dwaGdQaFhpZkRLcG1sQWpQTm5MT01WVGNJTGo5TVFQMmpsYUM5YlAwMmpJTzV0dXh0X0xVbVpKcDUyZVZMTm1DTDJ0UTlwanUxcGRFUTRfQQ?oc=5",
      "date": "2026-04-08"
    },
    {
      "title": "350 SA soldiers face unarmed bus journey through DRC war zone",
      "source": "News24",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNT3JZOS1NVzJrNFZwTXFUV0E4b3BrZDRwTlROa0ZieDV3ZHViUm5KdGdiYUtqdy00Z3JBQnhCRUlScXpoXzNFaFVSdExRalNoZGJtLXBsREVSNGJxU0gxc0RVRDlNb1loSC16UlJ1TWJBVVVjdjBsM2VRWlVzVzNzd01iOThUM0FLMFBTMGZ2RmJITWZ0N3BwN291TDFBNEdNeS1CY3hVc2xqWGRVbEhSbzNYWDZtdw?oc=5",
      "date": "2026-06-21"
    }
  ],
  "denmark→ukraine": [
    {
      "title": "Trump says US will give Ukraine license to produce Patriot defense systems",
      "source": "AP News",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQQzhoTmRUY1YwTVlQNXBOQ08wcTU5dVQ4YXB4ZW0tN3FuMWZCbkFDbTRyRnMwRVNCRVNaTDFRWkhLWENMeUVKelpJdEVVcXdqVy1QVWxPNC02MVVSWF80MG8zR2FZVklqVFMtN2RZZkltNUEtSUgzempWdjFFSlpHekVmSGxnTzZjNlVndzBIQWVJbHJh?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Ukraine Signs Ninth Drone Deal, This Time With Denmark",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1lSTBQWkxyNi1nS1JTS3l6UGdsTmZQbldZeWotRlFJU0FkN0FSOVEtWkdsVnNjY3RIRVV2cFpaNjdYNEFfMTV2cFJIdw?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "“Ukraine is becoming a security provider for Europe”: Ukraine signs Drone Deals with Estonia, the Netherlands, and Denmark as Europe taps Kyiv’s battlefield-tested weapons technology",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPOXo4VGN3bzR3eWRTNVdqeU5XN0FfMHpNcW9kZDlvNDRRNEY1V19qdFdkNnRLdDJOZXhEUmpRZXF2amEtNlA1WWdJbC1Zd1NQRmU0RGJxeG1IZzdBOFBtOHJqOXVvdUtwOHlfWUJ6X1dIVmVYck41ZTc5bGFFTTJmTWJoSHBNbUJtemJjTVlyN05aRTVUaXJZRm5DVjdPdnZSOUtrRUhhNjM4QQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Ukraine signs Drone Deal with Denmark - Ukrinform",
      "source": "Ukrinform - Ukrainian National News Agency",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOak85eF9LZ25qaW1fWFIwclFha0lyMXlvVUFzY1VybTl3Ri1kYzd3WTVLUVg2OTU0OVpXVDhKRmlQaTRiQTJwQmZZUEl0bFF0X3o0MmJZeWtVa2FpLUJIVFc3X09laTM0QV8wQ3lVN0Y0MTFPblFjb0toM2ZMbWxfWENSOHhjc3VqMld2dk03X3RyWUdRemdR?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "NATO allies sharpen focus on Arctic, defense spending, Ukraine as summit enters final day",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOT3p0X2dzNTlPbWVUVVVQaXE1QzV2dzdaOXNXSnpZM1BPWml0TDljUm9MQjhWcncyYmZIY0RHS2lXcnI5aGRwaE5sVlRnRkg5TU9qazQ3al9XaEFhNUliRGtEUzktdEtEWkU0WV9uQVQ3Y2RTM3NveGcxbElRT05YdzhTak9sR09sS1Y5eXV0N0tuNVlpbk5HMm1tWklQYXBHS0cybE5fQTFUenJWRnpPR05DNEZOTDN6T19zTHlOSEVWcGpj?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Ukraine signs 'drone deals' with three European countries",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPZnphS2RJVUVRRUU0M0VJbzB2VUZYcmg0eEo2RXN0UEk4SnFBS2otbVBzN2JsS21WSEhJaml6ek41Q21BeFZFNllUMEwyQ2h1cjBzbWh1T2Q2TFBCTVZyeGhCV1lxRWV4eERzN3RkVXVHdTdkenpWNDZlSTh6VWxlYTI1NXJWMjRSOFE1Z3pGeTUtTTBSaWtLNVVyeTEyZjE5MU9JUGJJNXpyTnZpOGFtaW5R?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Ukraine and Denmark signed the Drone Deal, the number of agreements increased to nine",
      "source": "Українські Національні Новини (УНН)",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPSWlzcTVzM3VhNTdWTmdMYnFKek1zcGp1ZzlhOGw3WG5vUHZNeHQyeTRNSkl1TFZIcjVya0pBS1dXazAwOTB2SVhTT09nTlhtaW5zeHZXVXJnWnJfRTJxOWZmdWVTY2M2elREcFh0eEhzc0NtSEoxR0JBS3g5RzNaUlZpYVE2aWJrNnR5VDU0NmdmLXhfa2JFT0NaMW96WUN3NWtoRk1BM2VsaWPSAaoBQVVfeXFMUEFwaFM1YUtYeURweHlGVUFCb1A2dE1VZnlzMFd5R0p1cG1ISVNidTNYMzhQVHdXOERENG11OVFZVmZ3MlB2YXlNUE85STg4bFBJRUN6N3RUZ3NjZHdKclZkSHhmN0ZLdmU4cFgtVHdZaW01STJlbzhkcGY1VEdGV3JIZ09Ud2dIVm0yS2ZtMVo0MTBqNzlNWlR6aW9WNGttSVNQWVZyTFFNNVE?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Ukraine Signs Three New Drone Deal Agreements with European Partners",
      "source": "Odessa Journal",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQTk9xYnRHMGhFd25JU3pEaVdNQkUza3pBMklQX19PRnVGOHVCNk43Ukg1SEc5c1pBVTlBVl92WkdqWE9mZ1p2SFhNX1dEbjRSTnJUMmQwUThQMm0zN0hrYXp0RWZMd0NuSHI5Tl9PX2FJQUtBVlNpNHNFU1FfRkxXUGp1V0Faa3l3Z2VBUVpYcWVQWmZYWW83OFRyUnVYeFR5U3NnMWUtV21FcW42dkhGeUFjdw?oc=5",
      "date": "2026-07-08"
    }
  ],
  "denmark→argentina": [
    {
      "title": "Denmark will transfer to Ukraine funds obtained from the sale of its F-16 fighter jets to the Argentine Air Force",
      "source": "Zona Militar",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxPSGxKM0lxdHU1SXR5LW5Ed0VncU92TXd4ME9RZ1NwRkwyYVpSa1U2eVltQl9kWGpCZl9sX0k2cVMydkFFNFFmU3A2RWdhTG5XOVFZX3RrUnBPUTI4ZTgxR2FuT1cxYmVPYWg2ODA2OFV3dlMzTzltbFBMQ2dlQkpNeEthSXZUMWw1WUhvc0VILWxfRFRiTFJGdWphTGdFbFQteUtzS3RLRkJITWNnRS1QZVRJTTV0dGRKdTBhSzA5RGJNN1dXbVZhLWxMVFRoWUdLTTFYQ2xxeHVfTlRIU21zTGJuWHZRLW5YdHJHenhB?oc=5",
      "date": "2026-02-23"
    },
    {
      "title": "First Six F-16s En Route To Argentina",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQSVhpMWxQOTFQUmtCY3BhcS1NZmtWSEFMZmtIeHV3VW9GVWpDU1V1anVnRnJkbVFGSkRMM2RLbTBnMUhSS3JnblMtX0ZoMVliUTRzSGUwSm94TE90OEgxUFpkRkstSlp4SGx3SnNWNS1LY1MxTXVxbkhyWGIzd25CNExyWDRmOG5hbnNXZVFBbVd3Rm44aXcw?oc=5",
      "date": "2025-12-02"
    },
    {
      "title": "Six F-16 Fighting Falcons Are Flying South for the Winter (and Staying There)",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQaXB1R0VzTEhwdy0zSVNPZXc2QmlkLUw3LVduZmFxYWtwZlRRZkN6bTNOLUkzUFNmZkZubnFEbGp3VG55R0FhNU9rbWgwOVlxY183Q0lDLXRyZ0tQSEkzejZrYnZVR0tnVDByUzMxNTlsaVJxMmdSLXExMzc0NVVodnhrWC0yZktCNlA5bDJZN0cxUGE5YXlZUm4tbzNJTmtSUTFzdUJ0OVA2ZmZXZjRXVFJB?oc=5",
      "date": "2025-12-03"
    },
    {
      "title": "Milei Welcomes Argentina’s First F-16 Fighter Jets",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB1cDdzMlNiMDluQ3p5ZzVnZkV2Z1Q4QjUxa0E5ekJfRngycTYzQmJ0MGVSUVdCaG50VmlkMnMtS3A5bkEwRFl0aGJzRm56Wk4tVmd2b1R5T0psblJfRDJkNHd1NklBNnhsX2o0TkZfcmvSAXZBVV95cUxQVmtERXVuYWFucHcyZTF1LW0ya3RNSVQ1VHpFb040Q0JvUGxLQUplaUoxaUd5S3BvaEZVWV9JMHV3TTJsaVJQZXdlWHpEZHhxanUyak95dlhicTBLcnk0T1Z1YUFiUGh6QWhwdEY5WXpGbkxvWFRn?oc=5",
      "date": "2025-12-07"
    },
    {
      "title": "Argentina Unveils First F-16 Fighter Jets Procured from Denmark",
      "source": "Defensemirror.com",
      "url": "https://news.google.com/rss/articles/CBMiTEFVX3lxTE5OWnpSZjlJY2tUbVJGUklYdFQ5ZlJySTRTV1VlV0p6Q183eWJ4aFYzTFp4eHY4c0VCMDlETGxqcDY5dElKa1ZJdzdrSmQ?oc=5",
      "date": "2025-12-11"
    },
    {
      "title": "Argentina seals $300 million deal for 24 F-16 jets from Denmark",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPXzAzVW8yOHRxRUlNOUR2Rk1BR1UzdUlUU3RLN3Q4Rm9Xa09LTXJTNmFrOUNKNTgtTXRTNDdBVHhzNlZmMXlIbmdmb1VBckpRT2xndXN0Y09URmdOTFNhZktJaW5DNjRNRERIQ0g4VWR4UXlsZVYxYW9WUWZmT0lmdUlWN29JMlpFdjBlYnJxclp3Q0dXay1IMFRtWlV3cU5WbUppY1hIc3VVU2FGdlN4di1IZDkxZw?oc=5",
      "date": "2024-04-16"
    },
    {
      "title": "Argentina to buy surplus F-16 jets from Denmark",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPbXlQTVFiVEtweW9KWFRiQTVpYmpqS1VrZlFybzRKUlJxWnlZQlNocmU3ckhPOEhjUkxkQzY3OXE1elEwbnA2V2FHQVE5VHVNY1NGdU4yZEFWTjdkdUVuS0hjaDk2a19aSEVUeERZU0hROEJIM1loWHRUY1dsLXFkOTYzd2VnWFdKNE44Z3h4bDVmSTdSMXc?oc=5",
      "date": "2024-03-29"
    },
    {
      "title": "Argentina’s First Airworthy F-16B Spotted in Denmark Ahead of Delivery",
      "source": "The Aviationist",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA5S1ZpelVFazNXakRFTVViSE5mRDhzYi1ZaG9ZLWF5Sl92ZVZqV3F4UEwyVUlTaGM5eFFBN205eE5vaXNUUGRTY3JDQ0ZiRGk0SmlmaWFJSmNoVWdlb04xSjJHeU9HNjlLSG1qSGU4cmliOUd1N3hUdGJEQQ?oc=5",
      "date": "2025-09-22"
    }
  ],
  "denmark→norway": [
    {
      "title": "Norway to Trump: We’re already doing the hard work in the Arctic",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNbGFmbEtscFpYZ1hYdG1aNy1yR3ZmUkZ0dXFaM3RxVVNlVnpOSHFOZHZPZWxOa2kyYVZuMExjOUZhRjcwa05sNWNGa3czblU3eTJ6aWpvRklwbnZHRVV0ZjB5R19tTDUxX2FmVU5Qbk9xcHpuQ0tsYVBBRE9YQWNCeHZuMFBYNkk?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Denmark and Norway Present New Weapons Packages to Ukraine",
      "source": "Nordic Defence Sector",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQX3dzYkVMRVU1b3lJYkFmdllCbkI0ODdvNFFudUdLYS0wNGI4X2VJeDE1QmdBRlctSlJERUZzSk15cDNoYmRKU2N5eDFwUWZ0TTlXbFBYeTVWRTdxbkFLLTJjYlNVcXM2ekFfVWx5T0JubkFyN2k2X3VOQ3BfMDA4bmVJSnFuN1JvR0p2SWFJOUhRT2d4Y2ZmTlNmVkxQd290LXVR?oc=5",
      "date": "2025-12-17"
    },
    {
      "title": "Norway to buy two more subs, Denmark buys new surveillance ship in Nordic maritime push",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPX2ZBZ0V3YkFER1ZJOFFtZi1DUGQxZnlJZjB4eE5pT1RFeFFQRVUzTEZpMmtqcmFRTzVNX1dNYURpZl84RjdLamZPZzRfWE1yUFN4d0hkbjZmNVNtMThzWF9WQjkzRC1BWVNIOGkzc01jclVXbzZkc18zQmd2UzlzS2xHb21VRk8wejFnbnpLcU5NMVlERzhGaFFNLXhBdjVMWHEtOWtFNDk4WWlBSElfdjhXQTdkQXdYcW9HUzdZQWVfcWtHOWhUcWZR?oc=5",
      "date": "2025-12-09"
    },
    {
      "title": "Denmark increasing military presence in Greenland",
      "source": "The Hill",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxQeGxkVHZWdW5hUmdaRGdxcU5OREdjQzdRYVlCbkdaY1pTRVVRMkVJRGZ0VFZNVW9za3g2NF9Vb1ZCdWFjdGZ2U0djbVZiSTQ1NEp3TWQ0Mm1zLTVub2FNYmItVGVoSjd2aWlMQUhxaFA1NmJlMzVFd1JnWFlpS0tXc01JVdIBiAFBVV95cUxNTFdVZ1lqMngwTHRJZ2F3OG9aRXR2aWR6TW5NQkhQQWpoXzBwR0FjOENzeFl4VlN2bzVndlpXcTJWOFdZREZFZzEyeVBvbkQ1dktkOF9rcGI1Q0kzSTdnWHpCOGgxOWZkS1FvUGZ2VjJKR1puMEZsSmFzd1hWWWMzckx1NTBuaEpT?oc=5",
      "date": "2026-01-14"
    },
    {
      "title": "Shifting defence landscape sparks Nordic debate over nuclear weapons",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOQzVmd2pETHMyQi1PQzJpYWhTQzlUQUhGeGVSYVhfYlNpTkNWQklBREdjMHY3YWZ5R2xjWVAzdUp1R01nTzVGZGRWSGk3SHJHTU5hRWhkSEFzcDJoSE9QWDdXc0JxWnlOeVg3NzhGMGRVWktOdXlULXNjeXBwTGNKMW5FTEdVQXpHU3VLLWZzdDhKV3JYWjBJMHhDblpIcVFF?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "Sweden, Norway, Denmark give $500 million to NATO project to send US weapons to Ukraine",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOOTlhSlNyZTFuNFBQWlJmYndWMXBheHFPdTlMU0p5Y2ZsamJ3Wks5QUM2dWgxa2dqOWJOQUhGb3hCVDcyd0FtaGtVSFJGcFlLRUFTQ0o3THhjMDBZbGlyRlVoa09iOHpUZkJTRDVWWkFUdlE1MDZac0RZRUlVVlZrTERpOGFaSzBCanZGV1hydEF4RDV5RVBlZ0hKMDBRaU9qNXg0bDNsRDNhaFlEOWlDREp4bXNWdENZ?oc=5",
      "date": "2025-08-05"
    },
    {
      "title": "A ‘Roman’ army from Norway of a thousand men may have fought in Denmark 1,800 years ago",
      "source": "ScienceNorway",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQQnhHVjZGYjBvN05tNUlLczVXakNUZVpWVG9lU2hndFRoaTJtY2d3cmQ3SXIzcFlERmRLOGp6Um10elcxQUl4TkVybTByU0Y2WGRjVVpOVGpTVGQ1dzdVa2lLcWYtYlUtdGRKMmxGeXpxclNTY2xTYVNLOGo1c1NjdEJiOWZOdEVBWXM5c05SbjJGVU5BNXFQdlJ5alllaTI1OFhMZjZKak5uNkc4WkdublVFTnVYdFFhWUotR3Z5TktRb0cwZ2JncS1JYWZNVmpIdVZEWFZWdzhRYUx3bGdqZXpvcUhFQjdNV2c?oc=5",
      "date": "2026-02-12"
    },
    {
      "title": "Greenland updates: Denmark floats NATO mission on island",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOM3EweDhrVHhxTWI5REN6WnRQM1NUZFJmV2FFUXpodmdzbi1jQno5WlJZai1XWFRFV2tQd0t5VWVVMXlNMmwtcFBlV0Jya1hPLThLYndaLTV1eXN5Tm9WX3Z3ZXkyRGJKRXJRMXFQb1VNa2xQYm9UNF9BcFdkcGFHcVhKcDg2NjRDdDBXVXJFbkFpcmxiOUE?oc=5",
      "date": "2026-01-19"
    }
  ],
  "switzerland→spain": [
    {
      "title": "Why The Remaining 8 World Cup Teams Each Could Win It All — And Why They Won't",
      "source": "FOX Sports",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNV0xMXzAxSkp4Zjc5cnRuS2RwQ1V1N2JvLWNRakJUWnc2TFRhcjhUTUFwdHlUVnlKZHJLa09KQWtIN0tybXNCcjg2TXhmZ0NWWFRSZjlrbllZdlhyVm43WlVPVUxDNGVKeE80RTZyS05GU1gtMWdISWVEY245QWhsVnpPMlpzSmdaZDRyanF6NnFQbHB4T3VTelM5Yk5CRjhZamfSAaIBQVVfeXFMTURZTGN0RUs5b0tLelhUakpZUzJnWGhvYWZJdndISE85ek9KUzNmblB3RE8yaWhDTV9QQ1VaUnMzV0JYVnpsdXhkcXN3MzJwUHJvRVFXWmkzQzhYZ1hDQno0SFhLYlRjZk16TmQwMWdGRzdQcDNPZHptampxUWlaOTlZTE44NHJ2TGZ5VTYwTW1SMDRiTHEtbGdlaGVhS3pVTkt3?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Switzerland Says It’s Halting Weapons Exports Licenses to US, Citing Neutrality",
      "source": "Truthout",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNNlFuZjgxb1ZheXlaSEJPbEpzcndfV05SWDQ5MlpmUHpVeUg5c21xS251azVURE94NXpSWUU4TEVPam5aVm0ycDNENjFJV2EzZE9rUXhpc3ZiZTREMlA2M0RzMVhzdWxVZVdkNUZSd2pxNGVtcEYtRW82WUtmN2xwV3ZUck1tM3FfNWw5X3RsZFZKZFpWUjhXdnBOMjBodmw4enRFbWxjd1NtM0NY?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "Following Switzerland - neutral Austria closed its airspace to US military flights amid the war against Iran.",
      "source": "Українські Національні Новини (УНН)",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOVm9FYXlrZXZDRUo1ZzdINkpPejNVMWFuVFN3a2tybG1yQk9oeTNrb1FsN1RGVndNeWotX2RCSkhhYlB1cVpCNG43T0NDSm1QVU5XamMxc0R1S25CZm9ULTF0VG9qWUZsSGR4TU1kalJpcFF2OVFGVTRVRHpzVjNOUktlVnFiVFNKVm1vbFZwRXMyRXotYlpkdUZfYXF6QzRGZndYNU9TeGhqVzlaZlJ0QUMzLTRqWExaNmxidWlHS1g4WlHSAcIBQVVfeXFMT0pzT3ZILWpGa2lnbzRwRzRjMDBUUWRYWGhUU3ZGbWUzVF8yMDZQZ24ybnJIZUNJMmRFcEhWeUZqdUhObGpaNDMtWEp3azBVTHk1MTZvMjhJMmthV056a3NvWnFKNUNHX01YY2hRR21TZEhhZ3F2Z2h6b2tPWktzY2ZwdWFETjNOS1BDa0tROVVsWDRmT0xWR0stU0U3b2JldTA4R3UzSGRGSHlIZmZXVW5kQ254Qk5Mai1NQ1VKVld3SVE?oc=5",
      "date": "2026-04-02"
    },
    {
      "title": "From French drug pricing to 'loser' windmills: A rundown of who Trump criticized at Davos",
      "source": "CNBC",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNUjhYbVdGcDBzX25sSW5YSVl6LWtKc3lXX2lUQ3NHSVhKVVNWYXpZMmRYWVMtWGtWU1pkc010bFJ5alFHQ3FHT1NqSl9BcVZYTVdEZnFjdlYzUGJ3VEZMdnl0NVlKRjNFNWh1U2dvSElSOUhoUDNKaVgtLTEzWnRaZ2U0WG4zbm9kYkFPYUxSdnpiZ0lrSVpieNIBngFBVV95cUxQQUVreXZMMkFqZVFMM3k0V2ZsOHpaUldzNGxuWjVLS2tqcDNyMnVwY3dMWFd6VlhpOEpxUlZOTnMtWndYRHNOb0dsZ0YzajctNUppLUVSaGp3bVFHZVdfczRua0c1TjBpeHAwcWt1TDVWX2tTU0gyT1J5bEx3OE1nUEExcl9uSGo1QXduQzIyUU1kNzZUVXkyVWYxR29qdw?oc=5",
      "date": "2026-01-23"
    },
    {
      "title": "Iran’s claim to shoot down a US F-35 hits its reputation as potential buyers said to be backing out",
      "source": "India.Com",
      "url": "https://news.google.com/rss/articles/CBMiuAJBVV95cUxOaTZSNlJQRkd1TWFLN2dqaUNpZFdRazVoZ2dwWmNESUZod1VKMUUyZjBtVUZxc3JCUWVfbm02THJ1NTVQS3NuZXVLYmlBeHNlejNGSm9LemZLamNPTkRyVUVsdHYxcEdZNGJGNDJLQndnYXByMFFSSFFlbUM5X3VCOU9fSVYtcWl3SW5IeUM0blNfcWVQTUZDQnJJWkFaNldYTzdyOFI3OXFocnZwOWxhZ0FuQkQxWXBXYXU0UkxhUjB6ZlQtMkN2V2dqNDUzOVFUUV8xMUFQdEI4eFF0cEhnM2M3MVctdWtVMUpFSVVtWDBXY0RKREVvVUFBRkdGaG9JUk9oSzhjbWhGQUw5eEh2ZWVmX0tnS1JTV3dJVUxibVFCcWxWekJfczFONncwNWxNREVvMmdVM1bSAb4CQVVfeXFMTXlNYWIxcWhTN0xGdnJMUkdHWml4VDZiUndoVGdRY0RWT1J1dGZGQWFrbTcwRTkyVThQQmRZRkttbnNvd3oyZFpmdEFXUUR4c3RZYUZ1YmpVeFl2LTY2NWZFUlN5MVdLYkcwSWJza3paMjhneUhEalQ0ek81dUVrTDV1LTZwVnNOLWVoTXpJa1N4eEcwQzA4N0tMcldrMnF6WFhmNllEaVJidzNPSl92czNQdTVPam5FQ1hJWFlma1MtenFLcGlCNjRleVBlSzRVS0ZXM016R181Wlowd1B2NkRpTE5XRWRWRTB1SDFJNUxNeDMzZm8yYXBTNUxXNFRwYTR6UmpOUFE5UTZBT2xGaFZLbkxpTU5YRVJrVWxmMDNMdk9EekxTbW5MdmhQYVBISHJLaXktYUE4OFJJT2x3?oc=5",
      "date": "2026-03-23"
    },
    {
      "title": "F-35 Procurements Face Setbacks In Spain And Switzerland",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNOGhtY25FUnFoUzdxOXJ1V09zTDB6Q3o3Nnp2WTVfUnBVMHRNWlFiTDdWVFhHYk4zQXl3Uk81TFNXQk9JR1EzYURCZlJja2RMSHBjY2k1YVh4dkh6cUIxT1ZMNEltb3BzR3d6VnJocnF3Z3NKR3R4VjltcE5ucFFuM1VDLUtsZzRCZW9GRmRvZU5zM0EtSWpkY1V3N0hhV0E2SXYweA?oc=5",
      "date": "2025-08-19"
    },
    {
      "title": "America’s F-35 is stealthy in combat but lights up the radar in Trump’s trade war",
      "source": "Fortune",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNVGhXNjBzMUtQMUlCRWdEY2tYMjJrOHBHSlF6dDZXaXpKcmt4WWg1cVVFX2NXY3pHUnF5VURIZTRYYzZMRXgwTXZiQ0pZaVZjTTdBSHpzc1NkbU8tU0p5T3VDNElvUzZnYzJJMmJTanpVY1labDZwcmw2SWdGQzJUbnktdGlJRXk5WlFzX2JvZTRnd0piYkVGenhCX2VzMjJiZkNhZ2ZRSmE1QQ?oc=5",
      "date": "2025-08-08"
    },
    {
      "title": "Why Switzerland Just Scaled Back Its Big F-35 Order",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaTkxblg0STlHREVSR1Vib3lnWDlrbHplU2FuRHlvQmVlb2lsUVhFWmZ2aDhCLXVubl9QaU04R2JSY19WTDkxT20yVEhDd29QeTZUQnZFSHZjMUl5TFpmVEpiWnQxUGtYa3FzSF82dkhxa3h5c0t0SjZ6VEw1blQxcFJJX3ZIWU9pWUU1cUpRT0Rka1Y0dFdOdC0tZXU?oc=5",
      "date": "2025-12-16"
    }
  ],
  "switzerland→denmark": [
    {
      "title": "Canada Passes Denmark With Five Third Period Goals, Remains Undefeated",
      "source": "FloHockey",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNZ0hFcFpaN3B3RkxLczF5ajFzWXVOUWh6TjRIbE9SUUpvN1dtNWd4OW9aY0VNMXBlUTNRcjNDdnNNdnJPbVptUERmUGMtamZyWFpHQTlpTDlHZkFxTzAxSncyMENGX0gwSHhzR0lVTEZmd3psOUs0TzlITXRUcFNCZ2tYVDhTdEJIOWZrSmhXSE1BUEV6c3R1Wkx0WUNIQU40Y1BpbldiazRqc1d2aFJ2bGNn?oc=5",
      "date": "2026-05-18"
    },
    {
      "title": "Danish defense denies Slovenia",
      "source": "IIHF",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9BdGtJb0d2UWEwUGVabktydmtINjZ2YXVXb2NQTTNqSkE4MDJxUTJpbVktbGlfVFE2NF9ydDNZbVp6d1NibjRKbW12WFEwaHRTOUdlU3JTMEZSVXFrSDNZTjloR3p0ME0?oc=5",
      "date": "2026-05-23"
    },
    {
      "title": "Denmark's F-35 Program Costs 25% More Than Planned, €1.89B Overrun on 27 Jets Forces Cuts Elsewhere as Final Four Arrive by 2027",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxPZ0ZKeURZei1OWEhZNWh4WmFyWFFIZlJHMWJXRWVNYnQ2a19qQjdmT0dIMHdNN1pxRE53Q0lzUWM0YTVpRFNWeWU1ZkR1TnNpOTBUdUZKVkVCNFdOQjFTNm5tSFV6ZXFKWmZSUXBfVG1XT01SSUgzYTBfbXdpdGV1N3poazZyNW16TGdUVHlTd1F0OWNHWk9sNDhhcjNkeWJXM1BxaTJSbkpwUTlJRzhNYUZqVUE3M2hNT2YyUk9tMDR1bGozY0tpT1gyVEp6TDhIT095TEt6czZ4YnNKUC1GMC1VcHRvVF9Xd2MtaVpnZEoxQk9PZ0xwWXk2WU15MHVT?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Switzerland Considers European SAMP/T After US Patriot Delay",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5hZURLRHNGN3p1WlQ5bU16VVF6eUNLZjZZZ0ItNER6V0EwbjVwb0x0OTlXV0JtbFpBMXBxUWNwVHNVY3FKOVVrMzUzR0o3a19KSm5icWw1SGRaZndRdS1EOFk3T2c0STF5NllyeW9yOHNnd9IBd0FVX3lxTFBXa0VMbkFWOVIxS1FCekRzMjM2YTVhNmN2Mm93Y0NjTU9VaVZ0blV3VE9VQXZ0VGQ3aDRKTm5WdlVyZk1VZGdsaFBaRTlJSVYzZkZZNE1mOWphVlp4U2tDdDlXZHBwUHdoX3l3cTVob2ZWc2JXQnQw?oc=5",
      "date": "2026-02-24"
    },
    {
      "title": "Here's what we know about Trump's 'framework' of a Greenland deal - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNUlE2Qm1jV1ZwaUZxQjF5VWJyRDR6dHZMclhpdkxxX0p3U1BCRG9zV3ZXVHlRWlF0aE45Z3o4T0RwRkx1ekRGa0o3RTJsa2p5WlZsZklVUmsxcEVHMzBuaDB6YUtwV00weF9Iel8tdEVoWWNOSFFkWE5EYnVVU0RrX29RME9qQdIBiwFBVV95cUxOSGJJbWtNRnhMX2p6SmI0Tkk4WDFDVENGOWlzek1ycnluckMzR0lvSW4xYTl3UFQ2bFFoTEVnVUlmbXdSZHdHWUNqVXRmNGNacjJFdUlQZ0VHdU5fajUtNmRWQTBIc3hkdkRrOFpfMnFCck5Gejl6OG01VG0wMHBFWmVHRUtRRmQtMjhB?oc=5",
      "date": "2026-02-11"
    },
    {
      "title": "What follows President Trump's decision to step back from threatening to use force in Greenland?",
      "source": "Brookings",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQeng4enJDeHVOQlBEckNIbGNYRVdYR0pJOXRZY1ZveVVyN3ZhaUx5NDgzSUJyWTVCNXBGYzJVaTJLZHpXOVZONlY3djBjdUp6X2tIN2ZoOGxvWkwtYndMQUFIcTdTNkh2YVJVenpkSm84cU42cmk4V3YzclkxWi1PTl81YXV5N0RhcVFmbWVkWXBVZTVMdFhoV0pNVFQtT3JTTUZLVmtCcmVjczhRY3E0b1pWVFVtMllPQ0UxTEJSYlFhSnF6dkluaA?oc=5",
      "date": "2026-01-23"
    },
    {
      "title": "Greenland proposal Trump endorsed respects Denmark's sovereignty: sources",
      "source": "Axios",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9ZTjRHYzdKeFZqeXpaVFI4NkRRc3U5X29KNExlQ0daMG1JcHFqQkZuR29UWk1iQnV6ZUtCTUxmY19WRnZWRHpJOVB6dGoxRmhwVFJ0ZlNXUDhqbkxFcmdvRDBCZkNDQmFucDEtdF8yQnR4cnFnMU16cGxNNlladw?oc=5",
      "date": "2026-01-21"
    },
    {
      "title": "Denmark open to 'Golden Dome' talks after Trump touts framework Greenland deal",
      "source": "CNBC",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNNlk1UGNhekthVVRORTBPdFpSVk9FMFZmeDJXanItNlk5QnNLSmpETnhyazBJZHhleTlBS1NXM3lvRDV3aXh0Y0gycmttbzFjSkFfN2g4SWluMW5rdWR5ZVBmYUpnZnhEcmR1ZkF1MTA1TnlZenFudG0yRVJydEUwVEpVSUVqM3N2LWfSAY8BQVVfeXFMT3lfZklYNWJ4NUI2ZHFqX3hsY0VqZWVJTUhXaDRPa2hlNkd6SjRGcFlXSU1BUE5xejFaMDZHWl85YWdubGpVaTVjZG9oZEJ2S1piWUlaRjYzWHNUTVVZUndjM3NTcVRRT3cxd3ZMYkxzUVFtRW9JajJORWRkRFpDUjRULW04OFBQUWE4YnNpQnM?oc=5",
      "date": "2026-01-22"
    }
  ],
  "switzerland→romania": [
    {
      "title": "Romania, Rafael sign record SPYDER air‑defense deal for €2 billion",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9MR19xLVZmOTh6S1g1UnI1YkZ3cE9CckV5MV9EeTBRaWtsTjBnb0JMYm4zcVBLTVlfYThJQXVmOXBvX2tVejBnajlhNW9IenF1WjRXMjV6LVhoNkEtYUlhSV9JSQ?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "US redirects Swiss F-35 payments to Patriot program despite Bern's freeze",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOQ0hpOHAxRmw1TTJ6MlR4U0l4UzJ5TUkxMVNjOXBtQ3BIMmFTZ0NfWE5pQUlwYmIxSV9RQlFMTm5hUEhUaXBWdlZjbVEzVzlZV2VsTUx0Q0JDcG5iVjVqUkNjUV9QLUhJOGF4cUVhZnRzeFdaSnU3ZmY0S3E4OVdTQVo2cl9lQW4wdmhUWHc4ZjFQMHcxQkZtajQxdVBwT1ZZODltMnFqZVo0ZzNNOVJ0Rk52ZWxIWXc?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "US redirects Switzerland’s F-35 funds to Israel for Patriot missiles",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOcHU4SXlzbTRqSktLNk1zZHpUaG45TWZqUXoxazU0TG1hYm1XOVFqWU5Hd3VXVXhHeld0blpoQXFROEEtdkh1RXVjaTBMZF9tVlFkYVVjcVdSM1FqeXZ3XzRlMXhpWFZnYkR1QVEyWUV5YnBXQ0lXbERMZlBKOWtBVG5hazBHWGtDYkZ3MjZqQWRfZ0dFZ1BiMWtfa21SWVRETk1qcHo0NWE1UQ?oc=5",
      "date": "2026-04-07"
    },
    {
      "title": "Five European Patriot Operators, Zero Searching for Alternatives — Why That Is Unlikely to Change Soon",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxPNUloUV9CZHNvVWh2VW9aclpZRUdFYUhwZFVHTlUteUxxYmNuWEVrVWZTUjJLN3IxTFVBbEdZYU1fWS1NQ2VKMUpmOVFoTm5EeV9ReGtCbk9ySXR2R19DN050SFpKQUR5TE04LU9iUktSSjZwbDBzOU1nRk96WXlzcFpMR3hwWklDdmNuWkdqVXMtN1kybXBZN1lRbVpNUk5tbEtxQ25DSmpQMU5DMGtaUmJJRmxINUQwRUp6WG5rblFXbFREX3NiRDU1NVZxczlyUU9mRi1zaUYxSWNZdWtPeA?oc=5",
      "date": "2026-05-12"
    },
    {
      "title": "Rheinmetall Secures Record 5.7 Billion Weapons Contract with Romania",
      "source": "irishsun.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNUFRhYlRMZk5wVnljQ05EMElPY1Q1blMxS2QzNC1BVUMyd28tQjFVWEkwZXRleW93c0xWcklVNmNDNEh5czNsNmFYdTdZc0s2Q0pfdWdGQkNDVlhFcWFUSmFCcjBGREZjUUJEZ3JkMWs0T1pxZTVCUzhxLTFIbFNXT3hBTmJKVXpWZUtJcERlQ01PYmVNNHFGZnBqbGJWY0tGS3VVaW9YQlN5LVk?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Why Switzerland Just Scaled Back Its Big F-35 Order",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaTkxblg0STlHREVSR1Vib3lnWDlrbHplU2FuRHlvQmVlb2lsUVhFWmZ2aDhCLXVubl9QaU04R2JSY19WTDkxT20yVEhDd29QeTZUQnZFSHZjMUl5TFpmVEpiWnQxUGtYa3FzSF82dkhxa3h5c0t0SjZ6VEw1blQxcFJJX3ZIWU9pWUU1cUpRT0Rka1Y0dFdOdC0tZXU?oc=5",
      "date": "2025-12-16"
    },
    {
      "title": "A Romanian, reported missing after the deadly fire in Switzerland",
      "source": "The Romania Journal",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPZFZEQjlOemJzbG1jMmZXUjRGakwwYVowcVd1ZVJfc2RFWlpEcEE3a01SR2hLaVBhWXNyLTdHUTFBVE14Skw4QlNha1BiLXF2bHllSTNIZUZSemdlNkV3dXRDbnd4UW5DTEVVS3RwRnZwSjFXR0ZsUm9zYlNOdkluQnEtTHpxbGtDMTBxT3ZvLTQtd0RMNW8taUFTQXF4cmFEbHJxd2x4SGdfZlYtaG1V0gG0AUFVX3lxTE1RdXFQR1VvcklNck9PaDd6WTNjdHBFNWhNQWFzQTFxbFljYzRicC03blhXUkZhbWg3YlJhYkVLY0JyamctRXBXZWRUdGdTdF9hMWM0UkpLOTQ3WmJ6bmEtZVkzUlR5NWhMLXdUYUFEbV9mOXdSNlZ3T0VlaVFsbEhkb1Q3TG1lT19wVWRXajJFMkdKc3htS2ptY2FYRUgyZTBqTVdEOXpWaXpFYmdUUmRNcFU3cA?oc=5",
      "date": "2026-01-02"
    },
    {
      "title": "Stabilization system from Curtiss-Wright to support Romania’s ANUBIS 3.0 weapons station",
      "source": "Military Embedded Systems",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQb1hENGdmTEdLS2d1ZjVheTVqd0xyTUZLMXZrVWRXNmx3dmtUQTRyU3pPbTRkUVdiaDV3cU5sRENXTXZOczZvY2pjSU9PMmR1WFBOMEw4MHdyLXhTY1FCdzlNQ2ZrM21GcDgtcTJWaS10UkhyM1hmcWdjbFlabGRiR1NHMHhiQ1hiQ0VuS3hxc2lMYWR1Y2Zlemp0b0w2M1RLOGw2TWU5aXFkVjZDbGIyQUthSDBSTkFGN0d2dEMtZGZweTNrQjBRZC15NWRneXlMejEwTGVXQ1Q?oc=5",
      "date": "2025-05-22"
    }
  ],
  "ukraine→china": [
    {
      "title": "Zelenskyy: China urged Putin not to use nuclear weapons in Ukraine",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNVzZnTHZPbml3OFhUNkhsdWV1cEpmTWZXcFBUN1YyckFiYXQ5QW9ldGcwNUw5Rm84OVB3LXpTOFNvcE50SkRPNnFZSVZ0VWVaa0N0SmYtR2plUmRQWFRoWmNlWDNHNDN6ZFdYMWpfdGdDSGUyTGxkdlRqX3lBcjB3NTlQM042SXUtZ3luTEdQYm1SclZ1TGJOa0JuaFdCbHpDYllsQWFWTmdLZ0h5NHJubzFZMjc?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "China Again Warns Russia Not to Use Nuclear Arms Against Ukraine",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQbUNPLVJvNVlWZ0x5TW44YkZoeUhrajF6THIxZDhiWVdJWDVIU1pfRjVxODV4bURkX05KTW5MWTNiblM4bDFld29NQ2o4S0dzUkVHUGZ0eExvb0pYcUFVQldpR0tVbUw1QmNLM2dIVzJtUlF6NUpQOXJMT0k3SjB0My1xYWNJQ1dEbzNQWTFua05LN2Y5X21iLVk3dUtaODN2ZDdzWTBFOUxEbUVKTExNVllROFZydw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "China ‘gave Putin ultimatum’ not to use nuclear weapons in Ukraine",
      "source": "The Independent",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOMEhSYWV6Q3lmUV9yOURVakY3VVN4WkVSaUlnQTNCNUNHcGh6LVNocUt3S1doczV5TU51OVlkSnU2bGJidFIwakdUYzJ5aEZsUVlnOUpOTlJYNUtsdEJjSnI1Y0pxZzVWTDRVMzV5d3VmdFRmU25NSXBTZUxUN2pSbTBnUjJ4N2htWGdCNGx2TWVSVG9rcS1rckVyc2dqRkJpekE?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "China warns Russia against considering nuclear weapons in Ukraine, reshuffling geopolitical risk calculus",
      "source": "Crypto Briefing",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTFBSdDlfNXpvcThYaXp5bWZRdGl3LWtIN0N4OE5faEJPT0lELTlkNjlwcnd6Tk9KdnJ5MXBYUFV2alVWdTNtUzFSbndVeVRjNGlPNHVSZHgyWkxVMmliZy1MdEpFeVpUdW5ISkRDcUZ2UDBfZlVyNUJhYVR3?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Trump surprises Nato allies with arms deals and praise as summit ends positively",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPSkh3Z2xOZUxKU2FRTnRhTjlaSk1wLXZCaWV2bzBocmI2NW50M0xSR2VYZ1ZkZl8wUmdaNFo0MnJpYlVxREF1LWtjOFRtblJETlNNam9OaFRNRzRoQldOa205NUhfbmRycm5aRF9ra2xEQk12MTh3V2VzRkp3cmpEc0pDR0hkdlhxT2ZEVU1IeElhYmRBYkNOZU9OT1JHV0U4dDV4eFZBQ09KeDhVSzVpN2E2RlQ4U1dlY2xrWEpDamxjeG5tblHSAcYBQVVfeXFMTk5jMnlYVnlYQVhDU185LTJ0QllBNUpzQndTbUI2aF9yRTdqLXdxVmdnMUctdTNxMGQ1WDBFcnhrSzRQQWdSMXJEZ3BmSVhSdGpWQk1PX3MxaTJ1dU1nZDFWM1lBS2I0bUY1NFhTbzE4QUZOWkZBUGl3RDFYR2tLczVtNjhSTTUyUTBHZWIwbzJ0TWFmaHkyOXZqRktPUWFYZy1TZzdpMkZoQW5KTm10YVdwbi1vdmFRVzd4dGJ3LThMZGJLeDd3?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Beijing warns Russia against nuclear escalation in Ukraine, Zelenskyy says",
      "source": "RBC-Ukraine",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQd3plM0tmX2Nzalc5bVdqdEh0OXZ6ZXdaSGs5MmtBMFFfMldoZ2l5RUJvTHFLV2Flb2ZNNDAxSGtzcHkwa1FrR21sMTZZYzFFaGRKdlpYNU5sbnJTeEVNNmdzdm11S245M05lcnJBbk1ObnRjWW0xZHVubjR2RFhvSHVmazlRaVdHY3J6bEpYX3FNNXJxZnQ2YnR6QQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Leaked Documents Reveal Possible Secret Russia-China Military Plan to Disable Starlink",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPWkJWRjV3b1UteXhnYWtCeGsta3FPeXB2eGI0cm5JVWk2LTZydXVJOElKTkU5T3Nvakp4eXlpSW1wM3lCdGdiUjY4TFhwSnNrN2RwZGk5OEZ3RFJXemJOWEE0dTc0d2dXYXpLbncyVF93ZGpyUFVWanJ3UW5PR2d6XzRNNEpvZ0VySnU4TXk0RlBMVFVRRFh4WEFYN1BsWFRWN3NIOVhyR1M5QTA3NEsxa3RCQnBrTk1qeXNTV3RGNGVpZw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "EXCLUSIVE: Russia approved secret China military training at top level, sources say",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPNVJVQXU4eHRhYU10Ni14TDA5YlpLejhJcDNPRDBUMmpJak96bldnZ2Jub1VLanZDREhBbmJPQ05TZGViTW84ZUR2MWRwOEd3WExaR19kTWM0SE44WmhKaEFxeEIwbnZqS1BjTWo3bW93WlhqMEhOWW4zcVdEaUxwN3IzQXl2OFRFZXJCdFc1Q1ZPT2lVNnk2V2poUDdObGUxWHo3dVhBUURxT2NLSGpaWHpDMTUydzc2N3FJZW5nbUtFRG02OE83R2Z1QQ?oc=5",
      "date": "2026-07-01"
    }
  ],
  "ukraine→india": [
    {
      "title": "DW News. . India is one of the world’s biggest arms importers, second only to war-torn Ukraine. Now it wants to become a major exporter, too. Indian weapons are now seen in Armenia, Vietnam and several other countries. Can India really pull off the transform",
      "source": "facebook.com",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxObDlqU0RoN3Zyek5JTW1oYVRWTE9COHpFLXRHNUxaMklkOG9YQUJ3Zm4zQkhjcWlJNEN0MTBsZ3BsWjdzRGwxOVpRVlhXWmZDRzIydEdWMGNfWFNrTEFhRlFEYkw1N21kTlIzaU96MlBDWGhvT2F0RHdzQm51M2c3ejczaTE5NERXZ3hHLWVtbFVlOW5IRlZFMzRFTjJYRDNCZ3oyWnIyZTBpdDYyTllVVGJLRDVSeDdaeU5zTW1pOU1BYndWMzZVUlVFR2h1ZlJiOEsyczZ0ZXl1TnFvZzlDNnZR?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "West Dumped 'DUD' Patriot Missiles On Ukraine? Russian Expert Drops 'Faulty Weapons' Bombshell",
      "source": "The Times of India",
      "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxPV1EyYWR1REJSc0JGbHNPdXNuYzBuT051U2VRbDJHWWQ4VnRvdEtOeEdzYTNhdE44RVhUX0hLMjcxRTF2d2YzWkVmbWdIUDZROEMySDlBYjFzbzVrTFk4X1RwUjlNWXBNUFNEZHI0TmJtZ1kyOW5SRmhRTzRfV0o3MzNIbXE5SHNoZXdtTUVXWFhXUkx3NW5uVFpSWjdiVmdfN0NZV1VUTkhScTJQSEd5eEluRmR3dXlmeU9IOXNDbktqMFpJWFJHQVE2a0xCTm9Qb2tYV0J0T3lvRzNYQU5PWHpXNWVFS1NWWWgyczY3UWZHSktMMnhrNW1mRldXMjTSAYQCQVVfeXFMTjhrWXc3QkJ6MFF5OE54d1lfSmkyR0FuSE40RElfMjktOElVa2lhOVB6UTRNSVlNMElCalNxbTRvYzBfdkxPTkR3eGdZS1Zvd0lGT1RqN0ZKeGp4dVBBbDAzSS1vSDA3c0FMdW5ZV0c2Sk12TE9WSzlqaEtGLTBDNXpDN08xdXpaeXgtZk5POWMyOXBaLWpHWm1vZ0ZpQnk3LWk2M1hZSWI2RnJ3OEtiSm1yaU1Cd0xSYzV5Vk9ZajlwQXRpLWg5eWpmclZfY2VNR285SHNfeG9YN1libU9YZUpsWHE5YUNMZFBJOWpabkFuU0k2eUEyN0NBLWhfbG5QM3pWZWM?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "'Europe sells weapons which are used to attack India': Jaishankar hits back over Russia-Ukraine stance",
      "source": "Firstpost",
      "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxORkIyYWk5VWZLZkFYVWg5MVRtLWhKTE0wWGI1T24tQTN1Sm0zNVUyR3MybGNobFhGRVhwOUN2ZGtpSnBEWGFBNlR4alZYMGd6SHpPMTNHb1cwSzFLSWFPVmNvSHJ1aWIyc0tKYzJkZFB6UjFjaWE3UU1XOGZIY2ZFUXRRNWZBY1c4eDFYVFFPc2h2RDgxNHhXZXJ4XzZyUVlMVm9MNnJjN2FqZlRRaEFiZzVlWVozMzM1eHBKY1NnaGVDTVpQbHFBMHpvV0dCMmhBOC1YeC1mQdIB3AFBVV95cUxPMUVnVEM0SmdFakx5T29rODJ6YlNKemp1OXNyNXpJcGxtNFM0clVxNkVFOTNSYWQ1a3hGbFlmNjZLRFhSeDlpUXBRT0k4bFhVMERFemFCcHV3S0k4YzlvZVpTdUlhb3Vmd0lvM0ljaXRVNXIycmVVSXhaYVZYaUFvbkpQZjZ0dVZKX3F0OXdIRWZTYkNWVU1Xajg1cU83TXl0YkJQMlZuYlZlUkx1VUx1TWl2Sll1Z29WNXFpZ0NLRWhDQjU1ZTZhWXpjejlLeVVib3RmRzJlbllTOU9M?oc=5",
      "date": "2026-06-12"
    },
    {
      "title": "Ukraine reaches security deal with India — Zelenskyy says documents being finalized",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQTU10SXU1ZGdMYUwzR25LdUtTbFRYUlQwcUFkM1ZROFR2WktEVE1OYkFKNlZoYVRWR3c0RmQyeUUzSGNmYlRaTE1sVzRSVm1MSUxmWEZUU0RaWXVwN2E4UlhVOE5nZVFtTTVJSnNTNkRtVFhtUzFQSjg2dWtkcVRQZWZ4UkZ0anlWZlJHbnNJOFRjcWJTWnRVT2VGTFczTDZGTVFHWkdIWjdkV3FNSTZFVEdMTkh4SmFxRDJLYkxB?oc=5",
      "date": "2026-04-20"
    },
    {
      "title": "India and Security Norms in the Liberal International Order",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQNVBXQ01pcWRJRFB1TjQ0OGRjWEtTZFZ1Zk9MbldrUzh2Z3dhQ29FUVZGU2pHejRHUFNoRDRkRXc2UG1MLW5IUGlsZ1dHRm5UZDk0Y0J6aEM2QmNnZ3B2bGN5emlWRU9McGVSZjVLT3BlOWlOWGVfMlhNSzZHR2NVMTJKWTVMMTNScUpyRXo1RTBhdw?oc=5",
      "date": "2026-05-11"
    },
    {
      "title": "Uralvagonzavod Offers India T-72 and T-90 Upgrades Based on Ukraine War Experience, Four Years In",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPUV9Pb0psWjdHOGdqQ2YzWHVPbm9WTlhERFRVQ2xreDRLaGRpaWdvSmdPS1NJbzcyZ2F6aVNBdlFCUzNYaXpPT2Y3eGpjdUU3WkV4bDc0dGlHaExnMV9ndEh1dmNfZ1V1ZFBRTmpMdG50aHIyaWpjOWV5ZkpSZHA2TE5HNXJtaUxOaTU2dGNiRVN6VmVkUjUzWl83X1hXb2JaZXdKQWwtRHNRMW1rUkpYcXcxTFI3TDl4cGp4SUw4bzgyODZjUEZlWGVUWWVvcEZqV0hmVEx0cFB3WlB2?oc=5",
      "date": "2026-06-01"
    },
    {
      "title": "SIPRI: Ukraine Becomes World’s Largest Arms Importer",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOdHZudVNHRlBmakxhbmpqUFUtMVBYY01CVnpiak53THB4N3hUd2dYOVV1eG9kSTY3VXA5WW5MZlI3X2JqU3ZoUU00aG9DU2M0R1pRQk8zc3ZtWVZfNk9wdTVTVUp5dlE0bHFrX3U3dTVFc2VGMDY4WkZvVnYxTUw3Y3AzOGhkRTRfQlk0?oc=5",
      "date": "2026-03-09"
    },
    {
      "title": "European Weapons Used Against India; US Urged Russian Oil Purchases After Ukraine War: Jaishankar",
      "source": "ETV Bharat",
      "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxPRVpnTE9DRHR0RENKakFKLUJDb29lVm9XODBLR195UWd1T1BEWFpCeEhFeUN3TC1xamVTTktjMXI4WnVCcXhmSXZYNEdoSndXVXgyUzdMU3VWUjJYSUlGMW1IaGhEUUhPTkw0TEdzWUZ4aTBuOFBJTGxVOWc2RWRRRHVydE9Vdk9UT1BhdENMRDNVZVdBMVZvZnRIalh5N1hKX0JPSHJ5U0hXb2NEaHpQWlFSVEZoNVNaN0I0S3hFcUhmNVQ1YzhTMGw1Z25lRzdNV2M2VHhTM2VjU2lRQWhvMV9tajkxTWdD0gHuAUFVX3lxTFByRWpKeld1VW1pSHdDZlllVFB5aTBXOWNKYmU2djNmcjNqa1drdVZsZDlPZkNVT0hhcVFfWTdyQ0Q0dWFJTHZOYW90eDdsZXFzSWgweGlha2gxU3RHTHZRT2lzV0ZWVTZJWU56cUZoNXllUUNxNlh4M2RZZko4eG5VOGdvYVlaZTJMY0RCRmVOUDFqZXRCREJkelcwaXE3WUxzNlFydGdTeTcxMWVsbi0talBDZjZZV0ttd29SMmJDeUQ1MXJzaTdCV3VyUlhNb3dKN3JrUTV5b0JoaWVINTVKWWxjZXpCSTJyeDNQRkE?oc=5",
      "date": "2026-06-12"
    }
  ],
  "ukraine→qatar": [
    {
      "title": "Ukraine Finalizes Air Defense Deals With Gulf Nations Amid War in Mideast",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ05wLUdSNFRnSkV2MU1yMzRXM29JYVA1SC1zOWFZRy1wcVBVN290TEVGdmpyV2Juc2lFZnBOcWdkc2p6SjBpaXpsWFg1aV92M0R2ZDRHSkNrY2MtOXJDTDg1MVhzQkZuUmJKTHd5QzBmcHhQS1NaaXBoUWd0UEtUOF9kU1RhbG5tZ1VNUGh6cDlnNHEwejlTQzRoUVU?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Ukraine inks defense agreements with Qatar and Saudi Arabia, with UAE to follow",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOenhBaHBGRmJvRDI0ZUJkSGkzSHp2Zmgwd1lyY3d3c3JSOUFIN2xTUUV0SEFNWWJrblUtOXEzYVR6TkV4OExEc0FGUDV6clQ3Rzh4d0poLXVrSVJ3ZmsybTl5cFkzYk9DMFVlR3ZmUlBlNVZuV2JueGNJT1hSY3JMaGxPVDZOV2NqeGpJb3hVT3R4aFRnalZDOGpTMWpPb0FSSWRXb2J6U3gtRlFtdkNxOVMyVnUydw?oc=5",
      "date": "2026-03-30"
    },
    {
      "title": "Ukraine’s Zelenskyy agrees to defense cooperation with UAE, Qatar",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPZW5aaWFyZkpwbktOWXVqNzBOSDF0c1dNYjYtMjZNX2o2U1RjRnVWVUE5a3lmSDRkUWhRU29TZVNac1NUOGkzdEoxNEQ5VkY4Y09yWGlHQWRxTU85anBpeU5ZWnFFOUR3ZGpwcndEaFdPNS1QazNsRWx4OVM3SlJpMmNRc3NFR1dpOUozTHpvNnFSbU1fdXZWVGhUU3VCckNXVXQ3Z09OTk9uVExuVzFCUy1nLTBwTDFI?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Ukraine agrees defence cooperation with UAE, Qatar as Zelenskiy visits Gulf",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPMExaUVg0ODN5bkEzcEc0Z2NFN3NmSS03UjdMclZDYWc4V3BxSnhpbWMtZ2FmREo5akhIdEZ3NUU3MjRUdHJlUElOV3d2LVltM09HZFo1WEc5S0dmVFBiZ0t1b2YzOUhrQjRFSW1UWkZ0RkhIYWk4RW5PaDU3dW8zOWhydkJrdHRLNG4zTW9qaE55akxQWDhNaVN3amNieEtTSWsybWU3dw?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Zelenskyy visits Doha as Ukraine, Qatar sign defense pact",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOUDFBa3RTYTcyOFhvOUJsaU9VTFZJWWRuS1I5NG0wbHp2dF96T01tMlVRa1hhUVZzako3S0hMT1RLbVZPdkdCVVlLRFkzb3JUd3JPZk5SSkJaTk90Tk9aMTJBNkt2cWlTcU9oUkY2c3pKV093S1VfU001eTdUamd0UVVfd05qazQxeUQ3TVMzMkdYNGPSAZMBQVVfeXFMTU1NZFFJNkFLLXRlbTZnRllUb2YxRDhZQkNCaVZpSjJnUlpvUGd4RjJ6aUltSjRUckRaWUFxWEFad3JJMVZoQ000WHFRZXIwb2N0MmpQMEgxUjNTWnhMeUh1RmhySTh0cmtsQkRxMHM5MF9fSW1jZ0RRd0UzbG95Ti1WOFA3dFZSN3ViVHAzdGdFa29r?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "What Recent Gulf-Ukraine Defense Deals Mean for Russia and the Region?",
      "source": "Российский совет по международным делам",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPVmNnazVDVUw0VC1feS1DM21FWThJZk45QWhQWXNvV3J3UXhUWlMtRGl2bkVXOC1pRllyeDRMWUlHREptT29UakhEZldWTzF0eERTaXJ4VWVlb1JXY3pmQ1ROWUVLdnhOXzlKQm5jaGlHVlFjaFZfX2QydEo4WXdObFh2ZzdrejU1MVIzb09yOVI0bkF1dmU5SW9pNldnRndjNFY1aEpTVHJuMmRZaWp1WmVlZVpaTHZsNkQ4V1JWLWktZGlUNXhGdGhxM0Y?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Ukraine Signs 10-Year Defense Export Deals With 3 Middle East Countries",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5rbnBfV0VCbVE5empZR3RBTkl0NVJFaUtfN2JHQ2YtajBPMUtQTXo5Y0w1RklHZy1KUTlpNkxfUXRkOVNMeF9wYW11cw?oc=5",
      "date": "2026-04-20"
    },
    {
      "title": "Ukraine signs 10-year defence pact with Qatar as it eyes broader Gulf cooperation",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNYmtqbUgwSkhWYXI3SFhlWWNTNmZ3cXAxczQ0Nm9KTmlybXY1ZVNWUjJKMW9NeENaVDJrMWJ5bmI4ckJrNjRwUXZhY1ZQcHJ5eUMxZUZIdE43QWpzLVhWWFoxMEdBWlNmc2RLOW85WUFhZWR3VmJLX0RnR3R1RXBnczFfa2VYQ2NERkFScnVKS1FuZTFYeFFIOVdtWUFiT19OLXJyc3RHMGF1RzQ?oc=5",
      "date": "2026-03-28"
    }
  ],
  "australia→ukraine": [
    {
      "title": "Australia announces $70 million in arms funding for Ukraine through PURL initiative",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPY05SVnVVUS1aOEFRb1hsUm9MT2luRmowSmYwNWhfRjZvUUphY25KVnIwb1V4bUxKanFsNzN4VlN0RnRuQzBSMW5xQ2stMUo1dTV5dFB1WUFxY0x0ME5DVWh6SFhYcGc5OThlTTg4R0hGOGxOenBSVnlBVXQtMlhIak8ycUZ6ZmZhbVAzQUVFdDVUVC1VWW9sbGMwdUY0R2M1Y1BmaWxRWDZHT1NVZ3BUcw?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Australia to provide Ukraine with an additional US$35 million in military aid",
      "source": "Українська правда",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE93MjlKa2Zra05DNGRCcHAyOTRXME9kSjdBY3ZqZWF2dGk2M2x1V1R0TUM3QnBYYl9YY0JGMmw2Z1RNUWh3aVI2ejU1NjQ3bmhlMTlUdXhUdDZfTndqWFZ5ZzNpcjDSAXBBVV95cUxQZGFEOEd2V1FLSmNMSHZmU3RPT2dfdVp3UTktSzAwbzB1amc4S2Ixa25iZ1JkZENaVmc3aXlLQnRBY3E4Tl81cmhsT0hmTlN2S1ZheGxlQ2tVWTY3TlMwRDJMcjJyMHRLQVBab3VyX2d1?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Australia Pledges Additional $100M in Military Aid to Ukraine for Critical Defense Support",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPRFA5alU5VXVsZnBGa3FVM1pRVW9xeXNKaXFUNGtkZ1dQQW1wNkR0bEU4alVqT2pnQ3liRjRDYm9ZdVVQUTZab3hDUDRlME5JY3Q5dGlKQ3Ezb2hwcDUwN2NFeVE4U1lTMnFHSWFRMG1NNVVLdGN1UC1Sc2dPOXBzUGlnSnNkenJPZzlfQjRwdHlZUHFmUmU2Q1F3UUVHbk9IS1l5cHVRVFNOT1cwbUtVdlNtRURfUGtBWXc4dzhXWDRER2RFdFE?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "\"What happens in Ukraine matters in Indo-Pacific\": Australia pledged Ukraine another $70 million",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPV2h0ZGJyWm1lVUhMMzZYZFRTSldWSjljLWIxLU5TMlRLbEdaZWNWMUdZYTJJWlNSZFZONG8xaldmLXZHY0dnVHo2YkNlQjRiNWlVVGR3aFFxbHJ6WHV4Q2NtZGt1RWdCVnNfZzdzeTRrbEtodkR5SnREN19TclFCVnAxUzhleFNDV2F2amt6QTJjRlFfVlZ6Z1lyenVjQUtBYmRuam8xa0VBc3RNaUpVdXg3dlBFMWcxcVBLSnM2d2JQM1N1dFNVM0xVV3g?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Australia Commits New $70M Military Assistance Package for Ukraine",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNLUF2dEFoalJ0RnNjVEFrZlY3VmtuQmdqVkcyZG9jOWpjX3E1S0NpTDJ6LU1qWjAxbVo0NXk2cko1YkdtanhfcmZZWmxBaDgtQk1qZGpwNmNJNG1xZTVMbVZ3MTNPcS1tYTFtRHlnVmZMTm9YaGVRUkd3QnhKYnp5b3pvMFFreknSAYwBQVVfeXFMTWw3U29paHIzaXZUdDcwaEhibl9mamZFeWZfVncydkxsSEVFXzNFaTZYM1VYM0s0WHBLVXpHSlN0QUcyOURRX080RWZfYzBYUVFYT3FWSkprMlpac0xGa19vb01XQjlCZ1MycmpRU2VIRHJCNWZ4WjdkZ3ktSjdrZUhrYmxCdWZLWTJkeEs?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Australia commits additional $100 mln in military aid for Ukraine – Rubryka",
      "source": "Рубрика",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOMG9DZjZDR2NoVjJsZ01zNndlV3BkODNHZUxlMXZIeHppRW95cGQzaFduMTVVLVhLV3JYZjVQRXE4VUVLV0JKSmhuN25pN0FXWDc5YWM4czRtLXplN3JpVzBBdUdPbnlyeWxFblR0aU84eVNJdGtrbENnWmxFWmkyemJyYlc3NUdSY2tlcHRhZndvWVdlZzVMSnZhOXFLUmFsWDRyQURTbXVSUEtNMjZ0OXhQUHVEcG9B?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Australia pledges additional $100 million in military aid to Ukraine focusing on air defenses",
      "source": "Межа. Новини України.",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1QUlhnOTJGdTJWY3lIbWpQcFhGaWo4TzVyeWo5QXpyWlBFTldYX2FXVzVJYjVGNEZ4RnZYQXVEVkxTNS1CYmo3R253aEN4LXVCRzNXQTJ5R3l6T1ZJVUNGT0doNWoxUlFvaHhwYnBTTGxFcTlx?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Australia will allocate another USD 100 million to Ukraine for critical military equipment",
      "source": "Українські Новини",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPUFNxamt4eEY5RV9DUW9VQnFqN1FpeUhFMm9QdVlHMm5iZlZoYlB5X0k3VXlCWGlhVDlDZXN1UW5YYmJQdGk3bHh5Q1dDUW11Qjh4NUhyY0VsNFVuR1BLcGtfUlJxWHZuTjgtVUJ6VzNBeXdMdFEzV25adHNucnBHMWRMenhISTR1WVBTQnk3WjVRSHFQNUZPU0pjRU1oQkowa2F6Q1hpZ3Y1MlhYSlRlN3l1eUN5SWk2bEFqVVJhT1JicjNSNlHSAcsBQVVfeXFMT2JUSjVhUm9aZkQyd2NMY09iTEIzQ21oczBfTWhndHU4Nlp5T21tYUltWXFMb2lzbm81Mm16c2ctZGpPVGZGNlZvcFQtX3UyeWU0Z2dxdFlBeDFVbUpzd01ObnJxVURhNDdsa1JJdnpzdWtUYm51WU0zSC03SW5IZHhFVENIQkkwdV9hSnk1dVd6R2FrZnc4Zjd0bFI2S2lHSjl3UF9BRlBvLV9xNDNfQ1JoQzR4a1pRbUQzeUhPN3hDZHpCVC1SRTZlQ1E?oc=5",
      "date": "2026-06-19"
    }
  ],
  "australia→canada": [
    {
      "title": "Australia, Canada sign $1.75B agreement for Over the Horizon Radar system",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPRnFKRmZhU0pNNmxrdXVSaXg0Qk5oUERnVFd0UXB6cVRsLWpfa0gyTG8yOUM1Ump2WFNPYUtuU1pCaHhjMk9hUXlsdlBhZ2RfbG1KcVJLaHdTd0w5RWNPbkFBRU9PSmRDNVl2Wm8yX3pOT05ZR1ZKbnVOOGtQVzM3Q2EyQWNNZXFZUUpQc3l5MVgtM0lUNWpFWFozMFExWll1dk9tS0VidUk1RkpG?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Australia and Canada sign a $1.75B deal to build long-range radar in Canada",
      "source": "AP News",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNSHluN1V3cFp1UG5YRjdIVlBCb21OTTd1cGJ3RDVMY2h1MUZ6a2FNM0RxYUZNNXdwdGxqbHF3X1kxblJ0anc0YmFRTmNjRlhMQUZWX3MwUlR6c3k5U3JneERreHdyczR1SmZxV3RzTUtzcGoyOFQtV0pFTGN1VWtSSGlsc0xfeEhsYkpWVFg1c0dXZERGVXZ0MnZxNzdQT1NWSTdxZEdB?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Australia, Canada to build long-range radar in Canada",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOdEFKUDhCaERERXRiOFM3QzhQMmtTWk1XWDhQSS12QXNoN05iMURXZDN2aFpXbU9GSW1RTWgwWW9fOU9yWHNGS2NpUnY0NGRvOHBNN195NUJaLWZKM3lfUlpBR3hJX1c2TlVUWHlobUtnTnFFc1owTUVnb0Jlb3poZzd4TjRHdF9pYXUwazh0djRlZw?oc=5",
      "date": "2026-07-03"
    },
    {
      "title": "Video: Why This Australian Radar is Changing Canada's Defense Strategy",
      "source": "Eyes Only with Wes O'Donnell",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE8tSG1LMFNWMUtoeV9JbkpwQjhPTjdtZnhaMXNTZ1lKNmVCU2pWWjNuMkxwTTRaUjNTUldzQ3dJZFJzVXBUc3lzclhhc2J3LVdsbVpoaExpcGFMU2JLdWptQU1lZmMwSzFrc25WWG5PazFGZw?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "Canada solidifies agreement with Australia to buy Arctic Over-the-Horizon Radar system",
      "source": "CBC",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE05cnpqNVhaTFdBLWNNSUxBWHpnODN3Rk04ZjhuRGs3R011UVhQRm1FZ2cteVV0YXFBTnAzTE4xM2pIUVJJVVYtVjN1NGdkRWZsQjdteEJyeHplLWUtWVNWcVE0aVM3Y1VXbzYtcG1RdEE5Nk55QVMtZi1UREg?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Australia lands record defense export deal with Canada",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNUVFOTDNia1JGT3ZabmpFMUlPclFuRURRVng0Q0FjVmZ4NUl5bDhOSF9yOTBlZ3d4dU05bVB3YXg3Tjd1RGt2M19EbkYtUWNBSWZkQUxXOG5BbnY0VkViMkt1amtyZUNhVTlWZklsTzFoUlhPR1ZMLTczRWFuY1pGMg?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Australia and Canada signed a $2.5 Billion Arctic Over the Horizon Radar Agreement with BAE Systems",
      "source": "Overt Defense -",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNczRpdDNEWFIxNHBZaVpvU0NuQ2Z1MUNyTDNTUzBOMGdzRVNLRGtsMlh4bEFzNmlMWDdJRWdPT3BKeGxFUlhWVlNEekM3TUNWaE1MVjBCSF9zUWVOX1RtRDdORXZTbjR3ZUNEWXRZZm43akhQZXFOOVJLTVB1MEo0bGpfelRWN2NIYVVwV1lJenlvTTF2Y3JJV0VYTUNST3hMRWo2aVZWNFRQNTRubDJCS2huZ2FVWVZ5QmdaUVpBYmI2MkdyS3FXVkQ1cTVMaGM4VWF2TXJ3?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "Canada Signs $2.5B Radar Deal to Expand Arctic Threat Detection",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9JbzhMa1RzS2RRa0V6RmRoTTd3cWJ5T0ZsdXl3QzB4RmJQclh1MmEtSWw4SlNZQUo2elJxaTVCMVB5UUpRRHJyeU0yQkVBbjdaN0xvclVRZXg4amx6a1gwd09QV3VWUUHSAWxBVV95cUxPenRxRmxPbFZvU2t1d1BFalRfQ1VxcXd6TU1tbEFjMVk4SkFpTUw3NG5taUs2eEt2SERLaTBrZXB1T0p4YmV1NnJNUDdxZDhBTXpqVGQtUXNFWmZVNTdnM09TeDNINGk2WlptcFM?oc=5",
      "date": "2026-06-23"
    }
  ],
  "australia→united states": [
    {
      "title": "Air Self-Defense Force begins logistics cooperation with U.S. and Australia",
      "source": "The Japan Times",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE14aE9BYWdMWGRnX0JrUmVLOHhCYnlIZEYwejNic29vRHVwVjc5S29LV2pVUmJVbWowTU56dHpqNHdHSFo0LS0yRlBTbTFra2JZTFdfWUpVTWVhQUhrTWxCWXR5WUwtNTFNOERmcFN6cG5YYjcxNmRlUg?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Australia and Fiji seal a new mutual defense pact in a push to counter China in the Pacific - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOS1JraElaQ2Z4bXpQUlRYZWh4NEt6dGdEQ2JqdW5CbXJwd0V4OHZJZnh3Ul85SGRXbG9ZaVdYd3BMMGd3NGUtV2tURFpyTmNiUGdtVDJ4eTNLZmIxc09MSFpvTjJIZFJITG1QSy1Ia3JYOUQ5dDlxdms0cjQ3cmd3U1hQQlJOZk5VNkpyRUN3ejZ0b3EwWFhuT3VZU0l1cDgtYnN0UdIBqgFBVV95cUxOdGZtX0VSOTctQ0dTeUNvbXdtRW1qU29zc0k5OUFFUEhWU3VQZnhxejNjNF9XZzRtVUJPSDRpZ1dzZlAxdWpteGhUVkpWUzcwcE5oNFBxTzdSVTNYSy1aenl3NVhpTUxCcnIyZWxPQ1hEekJxZ1hpeWw0M3BLVlMxY3RjNWJ4Q2M4a0pVUjFQMjNUYkxySjVmTkVnYzlHbFRkZm1MVzctTHhPUQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Australia fires SM-2 from prototype ground-based air defense system to intercept cruise missile target at Woomera",
      "source": "Defence Industry Europe",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPeFR0TkI2VjlaQUJ0NHhqRWdNdF9QU0RTZGNxODVVaUQxNzZJVHFDRnlwWTBHeHRPZFlTQjRoekJZX2tpdV9LX3phVVQxbU1raFhzRHB1T21oanFhc1R5S0IxRDZLNlFXb2xkVXBrTTBQT2pLVWtDODhHYi1sNDN1d3ZYQzg0Q1dsdWtYeXA2bmRWMDNMSk9EcUROLWI5QWp3TXNaLTNEUlhfT3JjT1FjRGk3VGtIeHRxdi0za1dpUC1fSnZXZVVIMzVKZ0RNN1VGYkZzN1Z6d3VFdw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Australia, Fiji sign defense alliance pact to counter China",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQRG1RekV5QUJzcWFmcGwzXzZJSENVVGZaSTdna2wzRk5CYzROdzh2elJVYURvV0NEQUZiLTFsSkpqbzRTNGZ2ZjA1bnlnRGFtaEppSWxxTUR2MEpOTDR2RVFvQVgtMW5raDQtN2xBbUJTLUpUcDIySjB6eTBqWEduUUN4UFRwX29jdVhmYUZuWkh2SE5iNWtMQ9IBmAFBVV95cUxOMzFITFNtQmVtUENVX2tmWXJQYlZMQ2tPX2xRNC1mcTNHUE13MjU2Ti1LUzZxWkNTeElCakJIUWVxQVR5eVgzbWNya1pqQlJ5UGpWR2J3NTNjZFNhNmdNVlBydVR0bmhzUm0tVTRfNkFoSG9wWDNTZVZpemxwR0JxZG9QZmZFZjZpN2ZWWHE5RTFEcGRzcVVucQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Australia agrees to sell uranium to India, ending a long stalemate - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPQ0NVNDVtY2xELXN3M3pLbVdCR1RXdlR6Xy1pU2x1M0QyRV9ZWEVlMDlDcDZmNWVIMTZmZEEwS3doeDRCUW9Edms4NzNwaV9NcjdodURqXy1FLTBQZDJKRFZZR1l5MFpaYjhlNDVFaWtydmhmSzdKcTFqTzdUWjhQVE1aZ1ZTOGtnallnRHAzcXRPem5xVzQ1dGlmQXBuQV93OFYwcmVaV09hNHFmVVFfRNIBtgFBVV95cUxPWi1uNWVQUklRVzdZb2VpSkhyWW1HXzFNVzJ1SnE0ZzQ3bHZIZ0ZvMWtsZlZFX0xHdExFNEpBXzVVcXpnV29IYkdqMVlxRmVxeFRTOHhwM1FzN192TDN1TmVQV25fSFItcl9KQnUzUnlzWTRGZ2J1V29qME9qbkhHbFd2ZmNBWjQ1bWE0TEZGbHlNd19VTVVBSXg1Qk1lM29FQnM0cWtFenNDS1UxcjBvajY3WWhTdw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Australia scores its largest defense export ever with a $1.75 billion long-range radar deal with Canada",
      "source": "Fortune",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNMXBqSno4UnVGbmhXa0IzN2FtZ21JM1Y1dDBQeTdEYjJVZWF5V3RWdHl2cGZOZlhVeWhuRlJQTlFnNWk4XzR5VXp3N1k0QTNTRjNveUlpcnp0VUlqdHZYck1VOGw5eFVpNThtMGV1R3NkN3FORUlUMnNhNlNOYWg2VWhWWHh0TkViQlFHZGJxU3NjeFBvNEQzd29wVWt0REdxa28xalZnSnVFQQ?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Australia Signs Defense Alliance With Pacific Nation Fiji",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9UUnZzdDNlazZ3NVRUSTQ5bDlpMVpqSVE4Rm1XUC1Gc0Y4RF9mVkNFemJfUzl4czZwQmU2X0ZmZUN3MWlWbUMwTHdnN19hck9EdlVkNUVGRDBNTWFlQ3hvRWlxWURCV1g5YXV0c1ZjYS1fOVFoLU03MlhR0gF_QVVfeXFMTWNYTkxKYUNkMnBNU1pEWGs0aUJKT3NNZGdZc2ZFOUpmLWdXS2pNaDNpV2N4VWNGQWVYcTMtWjdJWlJRS3d1S3Y4Um1JX3lYX0ZwQlVXcVVEdENaOXVFNUJjWHNpSUVtS0JVYU1BaVNkV1JWem5ndUZPRXhGM1VPbw?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Deeper integration with Australia, U.S. key to regional stability, says former Japanese commander",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQajRZVEhMMVBGcEhacUYtVHlocVdvTTR4UUYyZFQ3RGVBQndMN0dTWmNlT2w5TWVhLXdDTVJDd1BldnhkMlVQMUFoNjJSTXBrczNFRFpQb1hXeEhDSEc2UFFTZ1ljR05JM0ZyZmFJcm1SWkkyNlVjOHVZeGhLbFJDUlYzOE5OVC1CV1IwNWdvWE9XMWREdDhNUWpBZUdidE11bUxrelFjWXFwOVdMTkpreGZNZzVmVFZrUVo5N2xGV3lUcWZJUGdQNFhR?oc=5",
      "date": "2026-07-02"
    }
  ],
  "belgium→saudi arabia": [
    {
      "title": "Belgium: Amnesty International joins complaint against FedEx for unlawful arms transit to Israel",
      "source": "Amnesty International",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQQ3RFaEplckctQWs5LUE4YndpVUJmdnJZUmJSeEd5eDNLMlhBekExVUVidEF2Uk1mY25KZS1HRThEd00yV1JYczZjaGI3bFNGZ2kzLUVvZmtDY0J0UGNLc1dlWjdMQ1Ywc2JmeFR6Y3hmQjVnWko5VXRkZFRNeHlFc19SUE1teVl3VVNXd2d0aW9RNkE4LWVFR3BjbnB2aXBzZXlSSHl3NjJtREwwOWZobHlpeDNiclk0bWZDa1RhYkxhOFVtNVlncmF4OEIxWGFldENoWEprU3BBYlE?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Saudi Arabia seeks military support from Belgium after Iranian missile attacks",
      "source": "Middle East Monitor",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQWGpTTzJ1UE1IRFF3QWI2THVsbUtzQWxRS0MtaDVhUHJwNlRVYW9FYU1kWlRPUElUYUctSnNmaHRUdFQ5a1dKbF9pU0d6QjZnR1ZIQXdVQ1dXUzJpdm9Ja2RrU29sTUxTVXc4R2JRRFFXR1VDZlAzMDBSSWoydzdsOHEwcVdNSUtJdnZQU1c2Q1NQUEszS1pWT3JnNXRfdnEzS3NtR05GTEo4UUxmVEhRdWZjWGdJYlR6aFB6cEx2ONIBxAFBVV95cUxOajl2VXBpYTIzRVZkYlNkNVRybW04dXhybGRrVEcwNzUtcTVZMVVtdUVYTWd6ekJIX3BvMUdQWThjYWZMSE51X2R6ckZhV21ndVFvMDJ1ZS1PanFVakpEaVNJb1RyY0huWkZkc2hIc0RCOXp3LWJnMDdOQW1oMWVjelZsMnB5Mjl5c3RxSWl3SENNSWZ1QVpoeDJ4WWZEeTVlbm9Oc2gwYzRaQTNoTDdYdk50SGJJTU1MY0RKZXAtT0pyRWdS?oc=5",
      "date": "2026-03-11"
    },
    {
      "title": "Famous FIFA World Cup Goals: Saeed Al-Owairan’s Flying Sprint | 1994, Saudi Arabia vs. Belgium, & Facts",
      "source": "Encyclopedia Britannica",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNNS0tWXh5SXNZczEzakZxQnhiT0VHWjlBdEpyX3ljS2Rua3ZYYWVtLWI2QWNKdjhzZnVNUXZrODJOeHFYMVFNNERiQVdJc1pJRzFSV095NV9xSjg2M2dWUXRHM3B6ZTAzYS12X1VLLVVMTjBwbUIxRURkNmVYY1JZTUdYYWFGU2UxeDF2bmFTMG5saThjb1l0dg?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "Trump says US will sell F-35s to Saudi Arabia, first Arab country to acquire jets",
      "source": "Al-Monitor",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQQ2RSYTlESWVFcnVRQlE5cE82aERHMHg3dnFXcl9uVFBjYTI0WXN5R2p3ZGNjLWxyY0cxYVhsbFFDdGVRVXJnSUZOOEwxNlR1Q0c1V0J4SFZubXVBX2pfZThST01fR3FsY1p4cVY3eDQwTXYzZTUyS1o4U0tIU3RFanhHUzJIT1dYVVpqU3Jsc1VhSE45S0FFVE9wOTV5SW1mc2c3VmktLV9nUVhnYlZ3LWYyU1Q3bXYwbHNr?oc=5",
      "date": "2025-11-17"
    },
    {
      "title": "Belgium suspends arms exports to Saudi national guard",
      "source": "Edition.mv",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1KRkJoTHI2OTBtYm45U1JDaGMtbDZLbEJYeTVpOGtpOUxBSm5BcWxOTDZOWEdqZzZrYmd4ckFReFJsdGFtUWlqeUw4VmRFSFgyOVUwRTdDRzZYVE8xdVFz?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Belgian defence industry looks to expand ties with Turkey during trade mission",
      "source": "Belga English",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPRUR0UWVvSTMxMDRtWUZlMWdLbGN6ZXZuSHhsbWozV1J1WVNJTkplTFJZdTBtQl80SmE4UVJBSS04S3FxQ3RuUzh5TjlPTW53WGIwUlVjV2V2MVlKZ2QyTjZDUjF1RVhoVExuU1JDSllGUGRjelhVZEh4NE9oajlfbG5yZTdkdkhicFRVZFVmSXMzcXZpWHpXb2tuYTJvU3ZpS21sQ0Z3NXNFN0xoWHc?oc=5",
      "date": "2026-05-13"
    },
    {
      "title": "Dutch, Belgian leaders rally behind Saudi Arabia in calls with crown prince",
      "source": "Arab News",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5CVXVHY2RqQ1VWRUF5azZackE4RGs2c1owQmtqVVhtdS0wbHlrY3lyWUhfMEJiOG9NRWhmUnczdl80VGtOdUdVOVVKWG5RenljODJN?oc=5",
      "date": "2026-03-24"
    },
    {
      "title": "Belgium imposes arms embargo on Israel",
      "source": "Middle East Monitor",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxONFRuUHJweXAxMi1henA2dGtZemN1Z0Q4WUVoT2tucU1sMjdDYXNMRkNBMHJnRUM3bmU4UlV2OTd0LWxOcU43TWNjbXdLclY3WEFLQ0ZvcXQxNkV1TDhIdWFqZ0xOREZIVE5id1NfZzJJaGxOUW53LTFrSS1haGI0NkhMYkN5SGdoaHfSAY8BQVVfeXFMUC1MVHNBYjFVVExfRkJfSWtnTGFYQ25sdHJKTE9sbDlsWmRWOVJwaklnX3M1akwyVjZicDdNZV9xRkNxalMyYjdmTVhZZUhzWU5sVDJtSExxN3d6WU5rWHNCUDNZNGltZ3B6VDFZT0pMWlJaNGVQUmViWUo0d09Ma0Q5ME9YMTFSM0E5R211Ylk?oc=5",
      "date": "2026-01-23"
    }
  ],
  "belgium→ukraine": [
    {
      "title": "Canada Launches $134B International Defense Bank With Ukraine Among First Participants.",
      "source": "ubn.news",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNOHM3WGQxNlpuaVNIN0NaQi1iWnFLeGt6cjB5QnBKUmJsdU5YaUEtbkRMUGs5bFFMckY3c1dmTmRWWENQeVkxZEcxeXpGRTY1ZlhkOVo1REI2Y2w0M1pVdnNCM1lMMER2Y3hfMVkwZlhsS05YZWFycU15NGc0d0R4MU5FRGFQSFY2akFPOFVSWTQ1N0t6SE9YQXNGWjlZT3FJQXNjbG930gGuAUFVX3lxTE51N1czWmtDQ2lacGFiaHZvbjFKak56X251WjM3N3oxclFXT1pBQ1QyWl9RZzFTUWpqd252aTZWR1BCclhVbW9aYlRzNVk2RUpzYXQ2cmRLQmllQ3gzTGx5NUV3VnRlNUtlUVZCQXFnZmxTT05wQmJWQ1g1YjZVR1NuMHlRVzd1T2didHFVOUw2aEdtVlR4ekRpSjFGOHF1NW5oSFlaY0x4Uzl1Q2Jxdw?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Belgium could eventually send all its F-16s to Ukraine – Defense Minister - Ukrinform",
      "source": "Ukrinform - Ukrainian National News Agency",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPVnU2V0QwS1htWkpyRnpROEdlS2EwaDkwSEltbmxpa1NrS3pLeTA1WnRFZmI4XzB6Z1hWaUktN19BbVZadWhFaUZNLTBLYy1Ld3hKdlhJRHpfNllKMkpxa3FoMFdNbFJFeFZQcU83OUJUU2xhUDZWeS1PN0Y2c3hRTnZHSDRYcXBPQUNIbW1sR253aHE1OWpWeGpRWTRvMnhhdkxFRXc1MU5SUC1HLXNTT3NyNGNBU21JdHdoNg?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Belgium Has Seven More F-16s for Ukraine—and Says More Could Be Coming",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPRGJSMTdyemV0aklfclEtMGUtdURmaE9RclRnakFqZ2R0R0FKT29hQzM2UndHb0FjVUxUWkVDeHhQbWRiU0xuRmhVLXZkRVllMXJmbHpSVDRKeUxlNG1fUVFMREhqckV3LWhtZWVXNGg3ZjhxMnlDMm1PUEV3Z0VvaXNuaDZuSFZuaUFiU2lhXzY0eHEzOGhaWnlNQ2JKOVdlZjY5cXFDTkRfVUpy?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Belgium plans to hand over seven F-16 jets to Ukraine this year",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPOGl0NGJFQTA3bGZ0V19uRnhFcjIyVnp4NFRDT2JEVm1aQlVFaHhDYmdKMFVmaWVLT3d1NGVmb3BES3ZVeUVydE1VdTFmbXAxRS1Ba2ptMVdHTU1vZ1NialZRV1R4M3RDWHQxN1dtTXFZdHZMOFhJZG5LYk9PbHA1TzdJenZ5blJqZ1Vya2VUWXpWd20yeWZCbTdjYUZ6Q0VIVDBNMGUzQ2k?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Ukraine Secures $2.5B Defense Boost at Ramstein",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9kckZXeWtUVmNLWnRxTE1hcGd3V29aWUxQT1BQMnhSSjAtSFh2ZkpvbU91X3E5d2dnMUtjaUxCdFNRVDZveHBuM0hTbw?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Belgium NATO Ukraine",
      "source": "Dayton Daily News",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQZUVlRGhyeHZ2bzBKcjh4Z2xKYTV2bnFlTXd0U1RJVzlUMVBIa2p4QTM2VW1LQTZJZ0hjNE40dlNHZkVlT2ZIazZwSkoyMlZPN2trU3R0aDZzRHgybmFVRHNSMzI0VVBmX0xJaEpPOXBaYXR0S0YyU0tWSHJJdVRLRkhhekt3blNtQkVPdHFsd1NwanlYVklPb0tfbnNxMlkyRjRYaXV1SEozRkF5UDdhSTVySQ?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Belgium, Germany, Sweden, Netherlands announce new military aid, F-16s for Ukraine ahead of NATO defense ministers' meeting",
      "source": "Yahoo",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxORWt0Q0pqd0JvWkJMSE85WFA3Nm81dXI3X3BaOFB6bnZ0S1ByQ1llbW9BUVNTY2M4U041UmVNZmtjaG5OWTNTbE05R3RYWjJyaWlRMlBSUHZONldhZkMyN1E4SkJKa2hXRmxqZFZkLUZIbV9YOVJ0MFVxUzMxVjR1UEFLdlVkSXRxMV82M2pjeGR4YW4zWEZKdEhNaktUY0Fxbmc?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Belgium Eyes Thundart as France's First Export Customer, System Guided by Ukraine-Proven AASM Hammer Technology",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNR0tTR2NXTDVtcXg4cGVIN2NtUkVLdWplZkVJTzVYSG03cmF6dnJXcUlNY2hFNkVwZUVlUndfUGl3OHJMTWJFMVZaR0J6VjhVREtIOFVXeGxSUjVXdFVqTDVmWUlTSUttVHNuRUs0UGlmNHNJSXVha3Q3eUpOWHNKTmVzd3c1QzllUFNoR2VUYnlidVhUNm8tV1BDOW5neEJTd0w5VEVFR3JOQ3hQU3J0UHc0UjNWaXpTVjgwamR5dVhMWmVxSWxESHZPSVVzaFNLcXpPR25KQ3ZYVU5WeVFfUVpVSHhOcWlZTkJnby1n?oc=5",
      "date": "2026-07-02"
    }
  ],
  "belgium→canada": [
    {
      "title": "Canada Wins Support From Eight Countries for New Defense Bank",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNR3U4TmZyeUpxV0xhVzN5el9jd2ZiT1FILXF1dHdPa0RKYTFxV05ZOTNWLUhMVll6QU5xQmx4NjBaUGNnaTNUNXBNY29qTC1XUjNtdHNUUXlPeExtRVVwX050UG12MEZXRXItOEE4ZTBrazRBcnZCV2J6LThIb1FnSWJITUljejBaQlpjU0ZKMm96cFB5c29GOFBjRUhLODNldGhOWTBZQ0NDX3pubDl6TF9tMm9kWTRYTEt4Rk91ZlE3bTl1?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "US tells Europe, Canada to boost NATO air and naval forces",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQZURGdVVPUDNhcUtYblV4VE5kODhMY3ZrR01OUnpQTHd3THluUy01aUQ5amh0SFh4UWt3YXlVTWhTWXZxR1k0RGZqZk1ld1h1a3ZJOWxOV1gzLUE3clFSaE9kaTlTcDVRbmgwNzJsQjB1UVZPdl9RdlhqR2k1T0xkUFVHbjJJNkhlSGhOYWhCNzBRT01FZEtJell6WVBtMHV6S1QzUHlKVDYzNmU5elZvZg?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "These countries no longer arm Israel. It’s not making much difference.",
      "source": "The Washington Post",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxObW1tcVhUbUExb0xhUUxhMHRrY2Z0QnNfaVFYdGZQUmhzdW5TLUJqS2xya0VLbU5Ld1FBQVZ6STlUMnl0SUhxaFoyaDBXQVpuV2MwZ3Fvdko4WlFETkZ4RjMtU05oTHh1R1dBVEpuN3F4ZGdJT2h4YnRlNm1uMi1hYTF3Zw?oc=5",
      "date": "2025-10-16"
    },
    {
      "title": "NATO: All allies met defense spending target for first time last year",
      "source": "upi.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNOGhfeElScTNKQWVTa25Rd05rcHF2bzdPbVdZdzV5RElfWGg1QndqcDJ2X0dGbk5id1NUb2lTbWlMY2pOdkNmTHFSVFFuSDJGNERvMHZ5NzBmMXhGYkV2dXVJbmJNZGFPbkZPRUl3TmltT09HeTJHNElnUEgwUlhmczUzWTh4Z0N6d0RLaVp4ME_SAZYBQVVfeXFMTlJVYXpRQXdweWVYTVdxSmsweUFuYXI2M3pTWHlITUZsaS00UmhrWUZqUVpoZjhJT1FoTXZ0OGktbl91blRBN0JfM1pyM1NqdnJIQXhPTGNINjN2b0FsTFM5T3VJZ0RCRUZSWjgyWGpOblliampMTEMza1BvQ241U2h2Q3BnMFlxT0c4NFMtVEpDUXBiUHh3?oc=5",
      "date": "2026-03-27"
    },
    {
      "title": "European NATO defense spending rose by almost 20% in 2025",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOX1owM1lEYkdnVEg3Zmo4NDJTem9WUldNRjl0OERubUdaR3RfaVcyNEwxUjFJTW0tcTRjMndGSDlFYjNNSlNlbE1kMTFhQm5FV2N6aThESWMyOU9QVFR4Y19RSVZpNXdlTzQ5U05RMkxwTWNXem9ndFJIRWtpR2dQa0xUaVpYM1c0eTBvS0ZVaE52MjTSAZMBQVVfeXFMT1V0bDZNeU5TQWFieUVMVXZaTmtGbjdHS1hIdHJXUjBsWFZScEVNOUJtLTNMQmhTa1JKTzJNLUE2b3NqaWlheXRZOV9qUmZHd09NbmdIT3BFNXRDeEFKc1N6UjBoZXQ0bThJcXVQQV9XUmhQWWtneTBmNEcyRVkxdVlNdUNVbFg0RUthaE9xOTFqZVpr?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "CANADA’S MEN’S SEVENS TEAM CONCLUDE HSBC SVNS 2 CAMPAIGN WITH WIN OVER GERMANY AND LOSS TO BELGIUM.",
      "source": "Rugby Canada",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPUzFEY2VYeG8td3d4SHZsbXdFUzYyTXdIdWdBS0FTUzNUUTNDdkdWN0VBckJYT0pweUh1VFdRWlVGLXpIdFZ0cWZqR3NYRXZONHRmaU5GLXh6RUVnMnNxTUhlRHVrMEtFQWdIbGxiQkg4MElwSnpWWUVjWmZMMXl0TS1fSExsWGs4aVN2UlRvem02aExrSEZKMWFrbjNKWlIzMDJYRmY5RXh2WUw4LVp6ZjZPU1JoVGw4Yk1iVGRFODE0LWMzcU16YkxDZw?oc=5",
      "date": "2026-03-29"
    },
    {
      "title": "Communities in France, Belgium and Canada protest the complicity of Safran in violence against Palestinians, Wet’suwet’en nation",
      "source": "Peace Brigades International-Canada",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNa0MzWEZhSXVMLWtCTVIwMHB4Zk1mYXh2RXJONkpWVnEtYTdWZ1dZTnNiZ0FSMEJZWkFoX3VXNW1GYWJEbFMtcHpHSWxmWF9vWUpLejhMQm5mNFNMTlF0OTBWTWJ0YlJiUTUxRVNxSHFhYnFhaHhUQVZPWEdKNjNuRUpmclVSUlljV0k1NXJranl4UUxxaGFNNmhzeUVFSWxpYkNZcEpORXVDWnVIdVFJQ3k0dFRpRE1qSVdual9CeENFSmFvbmFLOUw0WHpmbDk0Z2VDQWd1VU5ab0RrMkNSTUYwcjc?oc=5",
      "date": "2026-04-23"
    },
    {
      "title": "Canada has officially joined the EU's loans-for-weapons program",
      "source": "CBC",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNYUJRX0dsNWFFb3ZyME00dTJFdlEzY2NkYTNWSFBzRkhfWVNnRFpaRXVpZDJtZ0szWFBIcGdPVlMzY1JmZ1ZKMDh3N2tTQlZIYmQwT2xOSEkwRzdLV1UyRTRRRWdxV1ZPWGRHWG4talBGaFVCd1VpLUlBSlRJYUZaX1VPcTEtVC1Zb0VlZWNRQ3ZfMW8?oc=5",
      "date": "2026-02-14"
    }
  ],
  "brazil→portugal": [
    {
      "title": "New Entrants in the European Defense Market: A Study of Korea, Brazil and Turkey",
      "source": "Fondation pour la Recherche Stratégique | FRS",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxONzRaZHNQbVJ0b29Lb0tFbVZ0SU1IWVp4eTJpZ2FKSXd4eC1oeXA4QzRkT01sZ2tQdklHeDFTSzJFMXlJNDZXVE9RbmlxUEMweXVSNTVSNXNqR2thMVNkLU1EVV9sNV9MSjc5UHBSd0RmMzZQNDRiNjZFRDVURmduV0RPdEtfcHY2bkR4dTRqZjJtc1QxQnF4bW1mendDb05SajRNVGl5Z0tqMU1BcnZ6YXRZWkF0SVpJZUtPYmpVdy1rYVFlUnVVRUpxOEozSHc?oc=5",
      "date": "2026-04-01"
    },
    {
      "title": "Lula’s son admits Portugal trip paid by pension fraud suspect",
      "source": "Valor International",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPU3M2M01Qb1BZYzhRTHhtN2lGUlJBTkVpcEdoR0R0QTl6dm4yLVFhNDlUMG5ob2FmY1U0LUdIV0xraC1vMVRDZDFfTlhhc0dHeDl2M0U0TkdEZ2QtU1BGc001Ny1XOUFjMWxDa2stRFl3SUY3RkZWcEtRcmpmS0U0NV94aDRnS0tJRk8zRFNVWGxSVWdRbjZCZ1hhMHh4VWl5QW0wWi0wdEwta1h5UlJNb08tdlN5U3Fad09sS2FoQWRxVk16Qk9N0gHWAUFVX3lxTE15cU8zTk52SGMzNk1xeEdFMGFjR01IUGhTRS0zWjZqcWlVY1ZpYmliTHRnX3AydDFtNVZkUmE5QnBYbjlDTHNSMjN3TkN5VGkzajV5cHlvcTRpUHBlU2xSbUVUVjVhMnFaR1owWmZzc0JJcm5ILVNjRHMzSWlCeWV6Q2hHOU4xaWRYeTU0LUI5MlZ1Yk5NOWdWbHdjUTY1dEo2ejhZMy1OaGkyVUFqQktuenRJMlpoR0l0QmVnWVdWSEswSWVDYURMNHdUc2RKaGY5Unp1QkE?oc=5",
      "date": "2026-03-17"
    },
    {
      "title": "Saab Eyes Portuguese Gripen Production With Local Partner",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFBaU3otRVlSOHZscnY5eEN2ZG9Wcm5kUXd1VWF5M0tsNndXVzloYXNwaTFVVFBqQjEyd1JlTTBFMU42SEhFRm10RTl6eXcycklCd3M3cmhuTG9xc0stVVFuSHVYc09kNjVEWG41Z05XclFndE1KNUHSAXtBVV95cUxNVlEtS1plWHdtSWI1UDM0Wk9NaXNCaXYtS0hNOU5HSDk3ZFRCNmNtbzQwbkItMzJCQkQxZ3FnN3VuLVQ5QWNOVFZKTGFlMXJRUWJsaTM1NGFNZ3NQNlU3ZEZIeTVNUXhzb0hEMmZMSXdfUU9xaERaM2d4UW8?oc=5",
      "date": "2026-03-09"
    },
    {
      "title": "Portugal receives first five A-29N Super Tucanos from €200M Embraer order",
      "source": "AeroTime",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOTjdVMjRmUXI5U2E4VjFEUzVBWDZLRGZMUUMxV3cwdTA2T0JROW1IMDlkWmdUTWQ2S0NEOW9Ta1lZc2c1bW53OWhCS2RQSHdZZU9iaDNRcTRfYU5WMGhJRHlzLVlxUGhpdWh4LXJjZm5WOFdMWW1NX0c2bjZ0Z051cF9n0gGHAUFVX3lxTFBWZE1RSDRFaERDbGtmZUpBdlY0aUpaak9RbGlPd0lHUVRibVVMY3pYQXhRSkc2b3NQY2Zjc29sb0VRRl9lVHZnbVhKN0h0WFg1VktRcUF1QzcyWmdWdUFWT2paNkFrMTA1UjlHYUxLZlk2NlBYRXlGa3RWVFdDRkxpSjJ5MmZpdw?oc=5",
      "date": "2025-12-18"
    },
    {
      "title": "Morocco Reportedly Nears $600 Million Deal With Brazil for KC-390 Aircraft",
      "source": "Morocco World News",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPSE8xOVJKTmc2UmhpM245M3FYOVhMOXd3azRaaFdsMERuaElJaHBLSV9LbnFGVHU1eHVCWUVsalJXQXVRQzhlTjVpT2hsWVdmcW0wTHF5NXZaaXBROHFxZ29vczNPMDBnc2dnbmp5M2VfMkJwR1J0Y0VmcVJSX2lYVXkwZzRPZU9lVF9MMktsNlc5cS1iUlE2bnZsRVFOSG9lX1k5LXBZcmd2RE94QWhLcEpab2ZOVGJrNWhCYjVNbw?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "First A-29N Super Tucanos Arrive in Portugal for NATO Equipment Integration",
      "source": "The Aviationist",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1XWVRCUWw0RUhJY3RxRGNneVdERjBGM3NJemlISzd2X3ZiLUNCdXZac3VnTnN2WXI3UUV1UTFSRmRJZnNfNmV4NDBGd1dXSVdmanJrbTNTY3VVc2NxaE1nN1dXanEyUVE1MG5BVEdFRzQ2QktOVG9FeUUwbVphQQ?oc=5",
      "date": "2025-09-02"
    },
    {
      "title": "In Portugal, Brazil's Lula Says He Wants to Construct Peace in Ukraine - VOA",
      "source": "VOA - Voice of America English News",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNNXVPQm1OQ0lxNmJQdk1idjF0VXZDNHRCOUNGVXNSMWt5c0Fnb3Q3aDJFUm5lRU9kU2t6Y3B2SWVsNEc0YUlYQV9TaDZIX2xCLXJRV2lHR1pRT2w1ZkZ0ZXN1YmJhT052bWFYcmx4WDlfQm1qOGFjOXB1YnR0N0RLa3NGNkx3TmtBRHZfcXhfZ0xDQkpZWDBWc3ZENi10U09ZVVlSWm5QNlFzX04zekHSAbABQVVfeXFMTWp3RGZyMm1EQWgxc0ZDRXotcVpxTHBIQVpid2d5V1Z4blMweTUxTWozQUpRS2Nwa3N3b2MyNWVVQ2ZwX1RIQUFZRFl0U3RQSkhzQ192Z2lQZ1BoV1JmcG1tZUtoaDgtX2VWNmF4SFM2UW5aOHMxeXMwZ3hfR1g0dnlxcWFsN2pnYnFkajBSWTZJYkgtbXBDOGRMMmZmVS1YOW4tVGZfWWRGSnB4Z0gyYzk?oc=5",
      "date": "2023-04-22"
    },
    {
      "title": "Brazil crowned first World Cup champion of women’s futsal",
      "source": "BusinessWorld Online",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxObVFlTGh6bkV5OWVxQmMyc3plZm9sVENTZmNlb3owS1dXRXRNdllSNjNJdnByVnVCek9sVDM0ZTJLSnhCQ1pFN2FPaThBb3JBNEFJQW5sUlB2WHBDZHJOa1ZORU52MDZzbG41Uzd2MmRNN0Ywa29LSUg5cmY5UnpZdk00NGhCRWxNeG8zbVB4N3BtdDJ3ODN4b3NGOW80M2dZQXVnSnc1UzhIS3c?oc=5",
      "date": "2025-12-08"
    }
  ],
  "brazil→hungary": [
    {
      "title": "Hungary’s Rearmament: Past and Future",
      "source": "Hungarian Conservative",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPbG52cXZhRzdGMDBlSXcyZkxCUmlEdDNWS0JrRnN0aFJqU2VlQ2hKTTUwYzRkNlVKVlVXTW8yRGEyMl80QVlFMnZ0eHFhODRZazZMSW9JQk5GRERCVm94el90VjN2WDY1b3B4ZTBoS2ZDUkx1UHkzZUhpQTdTeG8zamdsc2M3OEpGZUpkMzNFSTNsX0M3ZXNwdlVFSUZEU1FBTWV4ME1B?oc=5",
      "date": "2026-01-02"
    },
    {
      "title": "Brazilian Aircraft Used by Hungarian Defense Forces Becomes International Benchmark",
      "source": "Hungary Today",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNb2s4SGFGLWhBdWxJRF9rSFA1aDZXNUZTdE9KdzRXVHlWYlNPX0phblptc3N4NmlpYlJuTExhOWdlZ2p3VTk4TGlzamVCR3k4dElRbVp5amJfOFZqSDRVeXJLS18taW56SE5mMWtramtaS1RLNWdraVRMT1NVQ2xQV3dBdzJ2Tm1tU3F2UTdJbDAtQ1JMTVI0UkhCS3FfS0Uzam1Pcg?oc=5",
      "date": "2025-10-20"
    },
    {
      "title": "Hungary has chosen Europe",
      "source": "Cartooning for Peace",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA2U2JoaTRBU0xaQVFQeDRsSmlxRkJQdEphdkNIRzdNWkFhSlY1Rnk1Wml4WDd4S2Q5MmUxNEZCclgzTXlKcmxpenMtTVREdEtZUFFmcEd3OENrVlNsUndYMzBwLURCOEppSlBBbE1YaWt5cDItV0VxVjFpOA?oc=5",
      "date": "2026-04-15"
    },
    {
      "title": "CAAT - Brazil’s arms industry",
      "source": "CAAT UK",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5CcDhxdE82MkNlWGdfUmtOTkJ1ektmN1NJejFfdDA4aVp4TWpLV3ZSWUh6YnA3TnN4T2NrTU04bUszWFRWWWtDSGU1WFh4R1FTOE45OHhveGY4ZGxRaFR3S3lJNXN6TExuV19JeFlZaWJtUkda?oc=5",
      "date": "2025-10-29"
    },
    {
      "title": "Morocco Reportedly Nears $600 Million Deal With Brazil for KC-390 Aircraft",
      "source": "Morocco World News",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPSE8xOVJKTmc2UmhpM245M3FYOVhMOXd3azRaaFdsMERuaElJaHBLSV9LbnFGVHU1eHVCWUVsalJXQXVRQzhlTjVpT2hsWVdmcW0wTHF5NXZaaXBROHFxZ29vczNPMDBnc2dnbmp5M2VfMkJwR1J0Y0VmcVJSX2lYVXkwZzRPZU9lVF9MMktsNlc5cS1iUlE2bnZsRVFOSG9lX1k5LXBZcmd2RE94QWhLcEpab2ZOVGJrNWhCYjVNbw?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "Sweden to Acquire Four Embraer C-390 Airlifters",
      "source": "The Aviationist",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1qT1RrVTJTbExDdHJQb01ma0NVTmpPTUlaaVhTamNNTjNfS0RwUG81SHhMNGk4a1NORHVwck1FbVdVbkJEVFVqb0Rwd1lSb0xNREduS3BkOG84d1o0UTcwNzgzakVEd1hKckJ3cTZkSk9CbThjSlE?oc=5",
      "date": "2025-10-06"
    },
    {
      "title": "H225M Helicopter Operators Meet in Hungary for International Defense Conference",
      "source": "Hungary Today",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOYkxDY1M3bGVZTW9QY0dmWGY1bUg5SEdkZ01Xd2lTRkxla3hDU1ZjWHhKNG1LQ2V1bDlTeEpGR2xPbVZaUmt1ODlSbDAwZjJEa0E5ZWJvNG5IdEZoNWRTSUcwMHBzSVdvQV84RFBUNWstTHBrVFJhMXlGck94OWtWOUE2TDFiWjFRNHJmLUpUQ3JwcVZxYlVCUUV3YXRvenVWZjlocWZRWQ?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "After Thailand’s Gripen combat mission, questions of future sales",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOV1lOYi1fRF9VMTIybUZRQWwtdGJYM3lpLWJLalNROVRYOXRadHBDRkdqV0tNLXA5bUNHbDBTNVNBZkZiMlkwUTFUZVQ3Z3UtSkc5bXhTZzZ5cDAtdkhFU2YzN1JxaTQ3T1VSeUxiQ0NhSExBQmpqQ0dpRDFPZldUSnZYaldUNnV6LU5QWEMxYkUwSG9WWk9iSjVxY3R5SzdDU3Q0?oc=5",
      "date": "2025-07-29"
    }
  ],
  "brazil→nigeria": [
    {
      "title": "'I cried into my parents' arms' - Chelsea's Estevao Willian opens up on heartbreaking injury that denied him World Cup 'dream' with Brazil",
      "source": "Goal.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNWm1NdUVHY0M1QmM3eEM5VnNydDVwdlY2bDFIaDlUZ29pYnAycDdUR2stSTBvWVFhc2JDbVQ0Si0xM2JHcnpCY1ZjeW1PUFhsNTYwU3JUV2pNNVNRU0lYTmdmTzhjS3ZRaUdJY1ZZVGUwd1Q2Nk9Uby1idDNMUDUxaHNWLUdXUEdVckdxUUJZSXZXd084a0pOSFE5MWVtVk02OUE?oc=5",
      "date": "2026-06-07"
    },
    {
      "title": "Nigeria Is Epicenter for Chinese Cyber Scams",
      "source": "Africa Defense Forum",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxONUZkbzN6TUk5QmFBZklpOGxKand1VmRIbktQVzBsTW95VXpXNlQzYTVuTWV5WHJzeUZVZElOeW1RR3kxWTU5Q1VhOWJpUFgtUmw5eExTcjRoQ092SXZpbGNnbGExSE5kUGZhb2M2cmtHbVpGRXdRVER0ZUFSZnNRN1liUzM?oc=5",
      "date": "2026-01-13"
    },
    {
      "title": "Trump threatens Nigeria with potential military action over claims of Christian persecution",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxObHFSWWFmenpwVG5ieFowTEZLdXFlZVdvR2Jya05jTU14REM2YThMREhQcVpyc2NVMlpVZHBFX3c4UnVIS2NkQ1hfa3dJZlgtMjNYT3VzQlFIX1dzSzZhc0M1Uk1rdDlfS25WeGlHY2dqRlZ5UjZlT0cycy1IbXNaTE4xSkxtc2VLT1B0WVRURjd5bHJ4eTk5djg1T2pNd0VGb1VtMldJQXZYTXZWWXJaSDNLcUtzbG5WanV4UXlQZUx5VjBT0gHKAUFVX3lxTE9zYlFRZTE4cjExSV9jQzdnMVJZcUJBSDZmVDdiZVRpUHBtYnMzUHEyOVQ0Z3hEbGwxRHpraGozWmZYRXYyWURWdkRvWkgyQmk0QVFWaXY0cGZuS3FVQVN0RURzeXctNWhma2F5Z0kteWFkNk1HQzRCSHloNVR5eFlaZWlfb1JwYzRaQmdLZDByTUNGZXhFU1FNVVgyR0hoYUxKX2xqSnNpVTBtMldoU0E1YlR1QldEQjg4dTZMaEZWTW5RR2YxWFpjYVE?oc=5",
      "date": "2025-11-01"
    },
    {
      "title": "Nigeria's Tinubu replaces service chiefs in major military shake-up",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOSXpSR1A5Nms4cjNOQ2xyb1RxYzR6Mm04VlZjaDJTcTVHRUZxYlN3czVqNEF6VklOSlVlXzNCRFd0Z0EzZFhYeTh3QzYxQjE0VDZKYmlRZ3FfalN3bm5jT09rZkxIMWd5YkdiWDlIUTBxeWpkOG5INFNiaS16V0NlWjZYMVRjdHd1b1dDQXVKeGpVc25rX0lxNUxMNGtfdm9mMmdESzZIbEJ6Qm4wWmpFOGxMUFYyQVBqRC1mVnJPSk9oN21mcDhZ?oc=5",
      "date": "2025-10-24"
    },
    {
      "title": "Nigeria replaces top security officials days after coup plot denial",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPb3lqN1RxUUswNEVrSDhzRmszVTJ3dVVGSmpnbWE1UWlLZHd5RmoxWUZ4YmtwLVhzdU03RDhDZEFhdnM3dTB0WU1Vakp0VTFVY3JUSkhMSEYtTUw2bm1oLTh3M3I0M2dvUUMwRk5PM0ZaZEktLWNoUkpRVnVINmlnRk9jdVMyS2gwNUdPOFZSRGVKNXBLUG9KUzNSdDlTYml0VS1LeGt3cWFBZnp1WUHSAbMBQVVfeXFMUFlzMG4tUnpwRlpoS2lQSHJmRG9VN0JaX3cyVHlTSHlMTnplVzVrT0NPZU5tTFRuTHRjQVVmWVRWb0lldWxQNnBDQXQwS1NEUzNyanNTTTFBM1ZvcW9vM3BEQ2x2WUt2eG80RDdEMTdtZTNEdE54a0F3XzJfYmI4V2dROTBtbF9sTllubDIzNi1BMnRGcWJiSlBoWGlPaFotb040c3p4SnAyTnhfSjN1MnZzUUE?oc=5",
      "date": "2025-10-24"
    },
    {
      "title": "MINISTER OF DEFENCE ENGAGES BRAZILIAN COUNTERPART TO STRENGTHEN BILATERAL DEFENCE COOPERATION – Ministry of Defence",
      "source": "defence.gov.ng",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNVEtBYnRfLWk0aWN6clFSM2Y4cWRNUmFIb3pPN214eTc4UTFBbmwtdWl2TnNrYkFuaFpKSVN2bnpfME1oUHZtV0lVTElVZGRVdnFoWHVPblhNdE0tZXhKdUU5TG9ITlRnQzl2bUJNMXhiekQ0NXBUZEpoMG5JUC11TmlaeXkyTUxzSngyOFphcFdoN3FrLXppOGdwQ2lvVGpaZkZUWFhwbnE3XzFKU1poMXU0OG8tMlhQbWFCXzBYS2NjUERQdkNZ?oc=5",
      "date": "2025-08-27"
    },
    {
      "title": "US-Nigeria relations: what it means to be a ‘country of particular concern’ and why it matters",
      "source": "The Conversation",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPNktPZl9Bem5hNGdtbkRETGt0N3pqWFhJVzgzRVM1TlpUNmtqdmZ6RjlpV1NCNjdvTndxaHhqc3o0S1EtZHhnVEoyTGZCN3BiNWVlZGllejVNSmJaX2hmUzJnWDhVWXZKWllfTlhoQmJPU296N21NZWpGcE1Hd0xMVWoxR3lnbnNkcnBTUXVnVDlzTXdSOGpiTUEzSzFKQUxGVlFkYjJMSTBWSkF2a1RDWHhGcnZncERILWJGZEJsekJ0S3k2?oc=5",
      "date": "2025-11-16"
    },
    {
      "title": "Nigeria and Brazil ink $1 billion deal to transform agriculture sector",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPdnpyVldBSzYwWnhPYk9SbHN0eUxkV1U4YXAyeDJXQk5TeC1KelFvMUkweXlFTEpGa3R3elZ6RElUaWt0ZGZwNzdpbHEzeUNWMGNyRnBkWHM4Mk1SNzRZdGxPci1fT21mZlBQbmZEa093aVZqeWl4QXNZdHZwY1ppOVV1T0V2RWkzbjgtaXRBODVwdWFNZDc4cVdzaFRWUWx1a2ZoNlBjOU1fa2NhRjd3WldiU19YWWNDOEtFVGNUVnZ6aVROYXZmXzkyaGs?oc=5",
      "date": "2025-06-25"
    }
  ],
  "iran→russia": [
    {
      "title": "Israel Opposes Turkey F-35 Sale As Russia Prepares Iran Su-35 Delivery",
      "source": "Forbes",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPNmVIdzRtYnhMbW1Db2trNWFHMEhSMzNqc005VXRvWHA2Tlg3VHBzZFFDRVVmRzJqVURWSllQTXI4amFscEVoQ2poTnNscjJnQkJMcDhGNXVEQ2lCYUl6a0RtamZuT2lxWEcyckdzSFh2QUdGaDFXbnhROVZzMlY0Q0FpV0JSaTFvSVVmQzhaRUpMNk5uVVJ4Ul80cHdnWDZLMmcwN0JidF9rOFVpanpNV3Z0NFJQWDd5SHJQV2NR?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Russia’s Wartime Support for Iran",
      "source": "Middle East Institute",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE03OENza1UyMnVicjNIbjVMNjlRanVDN3lZUnhjelpFNTBObl9KdHVIVzNJVHZRTGpxUGRKU2JhUU0xU25uWWQxRFlVaVVUTFNVOTJYbWpEcXRQdmh3aUhOc05faHRraTBrQjRkZg?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Russia has given Iran something more important than weapons",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQT3kybExwTzVwazk5cVpyTUI0WE92S3NkZmFlQWFzMkc4ZFRFbjVDRU9PRU1UZndxdGt2QzM0enZuZ0pBcTd3OTFtMVpIUDJvV0dZcHFUV0x4Z2JXanVoUlBfN0p4cklOWW9BWm5UYlVZbXY4dVNvQVdTc1hkd1ZBa0hsclg0YXJjQl9BUTVfSGZ2ck5JcXgtbTVtS3FoRE0xQlVJVVg2ONIBrAFBVV95cUxPdVJMY1B2QVVROGI2aW9yZjlTcUJ1NHpoS18xZTNIYlN2NWdmc2V0VUJlV3RLcGhCSElwYTdZS0V6YVh6WWU3a1pSYnphNnBXZWlldmV3eWdfMU1kQVl2S0paMzUtemJ4S3EwWmUydWl3MEtEcGRmQ1RDeHpwMXlGekRYTW84SUREZFNlVzg4SVNuNTZ2Qm45TXBzQ3pPc0c4QWVIZVZubWZlVll2?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "In Iran’s War, Russia Serves as Backstage Partner",
      "source": "Russia Matters",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOT1NsR19HLVlweHd1UEQzMGdoSUlWeHVxY3hEckRJUENuaEVkN0dDVllNYVRxSmxPaW1MTGlKLW93T3BhOHdNWXFNMkx2cmxsbFRHREpWU2JpcVNhN2ZHa0JBbVh5dVJXM1dndDNxZjVvRjNPOXdsM1FtcEl1cFVwZmlWWjIwdWc?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "From drones to rocket fuel, China and Russia are helping Iran through supply chains",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQRF9Qd2phXzhYYUQ0WldmeXppTEZTSHB6bWF4WEV6NHVuTUZRdWZtcVk3TkhFcEkwcmdwX3NZbWhvbnh2R2k0OER0VU14V1BBSGN4WlBiNmpIWHZLT0xxVWt4aDlTamg0QmlnbDJTX0NqdnlTODBWTUJEZ0xjT0VqNS1tQXpzUUFqNjFjSXRIalJud1pxSG5zTF8tbndwcTBSMnp0UnduU3dtYmlhSTNwS1J6MlNIdnRjaVRPRWVIRFdJMTRx?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "US Lawmakers, Experts Sound Alarm On Deadly Iran-Russia Axis",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5wb2M1bEU4eVNkQUIxQkVXdHNkYzhjRjhaTDFOZUNIaDg5YjZ2TlRvcHZjUGVhQ2dkUldrV0NQRE5ZanpDcEN3VjZjZWl1TFJ3ZHlVUmRxNzQwbVJYT213WUhmQnNVMXZZci1vZldDTWlZdnJydUZDTGlHa2rSAX9BVV95cUxPd0hoMS1CYmR2QkdXbzJ1R1J6UEhoLWx2QlhqT1dta24tVDFXeEZDRDhrSHZtTjQ2LXZLYkVpUmlWT2ZraWVMMHNOcU9Zb1ZoVmd4R082QXprbXllNnpIWEMtdmtEN0FleHJjcDhERWx4ak1wUjZNNVUxa1gyQXVN?oc=5",
      "date": "2026-04-22"
    },
    {
      "title": "How Far Can Russian Arms Help Iran?",
      "source": "Carnegie Endowment for International Peace",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQOVI1ekNMXzdIOVF1S1pPNzVsRHUybUEwVE1iTUxOc2kwcjM4ZjFVXy1QbkJfWVEzQ0dwcFJLSF9qb1VQTHhVNTVoOXVmVUtsQ3pIOUNCSmVlQW9fSmgxbm1wa3dLOG9GdTVfMHY5R0FBQ3k0T1ItT3I2emY2UnpISTNlN0JQYy1mYzR3R3pQaWF1Uktm?oc=5",
      "date": "2026-02-28"
    },
    {
      "title": "The Russia-Iran Partnership",
      "source": "Lawfare",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFA2UnVYZlRZdzFtbXQ4YjFzWFZRUVJNT0JlTE16T0EyamMzRVZLMktxOUlDZUxVNlF0Y2Z0TWpqRU4zdHc1UjByY19PYUxhSVR0LTNkMmlyMWFRMUdXeWhtM1Zzb19qcVpUa1B2dkx5Tl93dw?oc=5",
      "date": "2026-04-19"
    }
  ],
  "iran→venezuela": [
    {
      "title": "EXCLUSIVE: Space Force’s role in Iran, Venezuela raids fueling push for more resources",
      "source": "DefenseScoop",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOcGJKM0t6UzFWRG9xR2Mtd2ZJVVJYQVdZb2w5MWZTbm5ldWc0MWhtRHQtdHBlTFhaNWJTcXI0U0ZQcnI5dzFNOEVuMzhVWlhTbEZDZVNwbURDam1yeUFRNXQwU3g3QnBQODdULUloTzMyM2JPNzltaS10YVNST1RyMDV6MEhTQXpTVWZONEd5NUdocmlmT2liVHU1Qi1qNGt4NV9RMkRhV0Z0UQ?oc=5",
      "date": "2026-02-22"
    },
    {
      "title": "U.S. will need years to replenish stockpiles of advanced weapons used in Iran war, new analysis finds",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQNGIyZm5TRGxCbUlnaVZkRVlYM0pJZWJFSmJJbnV0R21WZzZzWFpvT01PTkZ5U2FpaUFFc0ROaXBBZ25PQU02MXcwN1dkb0Q4UTNRbFcwTFpJRjlDemIwakxJblpGSEtjbC1sRHRaemI0OFB6ekdVWm9sTGo5eVhiS19UZks5NGdzVzJtbHNyNTlPTlhhZk1fbll6S1JybHFMenhqNFZ1eE5FbG9Ha1J4aVhYUmQ4NXZ2dklNQ0RURFBWbm1ja3VZdk5pUnk2UWPSAdQBQVVfeXFMTXBKdG9DVnZNamQxd04zSHUxUUhUb0RWYTFaSl9BdUdobHUtVHY5aHlvOW1NTDhFd2tvY1ZPaTd1T1lLdjVIZkp5ODZtWmZzRDZuQUN5bVBLanpGWkZlX2pGZXFoYUU1Mk1zbGk1R0RjZzN5SjllNl8waHg1MEJoVkQxS1R0X25fRXVGOFpUS3VBTE1DYUJ4TzhGNlF2Smp6bzA5bDRhVGVpcHpxd1plemkyOGV1VmktVjJKOS1uTGNjVFEzcnYyU1hveDBuU1J6NGJfblM?oc=5",
      "date": "2026-05-27"
    },
    {
      "title": "US military supremacy shines as China fails big in Iran, Venezuela",
      "source": "The Hill",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOUG9XUTczNXVzRGRuejFscVd4NWRtVDRSeUowMVRXUnRNRmRETldKSUJ2UnE0NTVMenVpVDBsQW54ZWZFbnk2VmxaNkFCb3BHbWR3SEdaaXpDajBWTGM1WTduQVR3YndxcngwZUtybUk2bHZ4SnJ5aDgyT1BCdVNza0tpNjByUzdLdXdjTEgwb03SAZYBQVVfeXFMTlBHSGRPaXR3VFkwbDRmWW1wMndkTjNsTzFmTHBNV3hhM1p4NEQzNHAyNHhKNEtjRXc1WERKcVJMSXRJWnJ2S1FHZGdQcExFRURyWFphOTlQTWFOYzhTV0s1bTdJclNrR1g4RXhSMEl0OC04VmRhazdPNVZVUVZoajc3R3h6QkE2eWtXMl8weS1jeEJmVU1n?oc=5",
      "date": "2026-03-11"
    },
    {
      "title": "Beijing Doesn’t Think Like Washington—and the Iran Conflict Shows Why",
      "source": "Carnegie Endowment for International Peace",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNX2lVbmRhVWpHWDh5Y1hIWHhSbWlMNENtb1VTbzdSWFVDa3V6SVBkWndfZDI0dmZJcGNGMjlUMFVETVZMN2Y5T20zYXNWR3FzM1piV2UwVFZxWVpud2lON2otQVNGNGJCdXN6ZmlRYU45cFBJclJwNHU1cXFuanJ0QU1QdnhraEQzUEE?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Iran Seeks to Preserve Its Venezuela Corridor",
      "source": "Middle East Forum",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQVkZUZm80a3UzX0NZOVRFbmpmc3Vkb0V0VGtBZmlUYnpVLVJvUm1nOGNnMXRybGNYMGp6X3Iwa1NHZjFWVlFxNEs5SkI1emZqRTFXNzZ6Y1lsRHUyNEt3SVZDZVlodGpCSmFSbk1nMklzYnJUaWVGNVpoRUVjY0xKZElMSENEa0VfWkE?oc=5",
      "date": "2026-02-20"
    },
    {
      "title": "Iran-Linked Networks Shift Operations in Latin America After Venezuela Disruption",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE4wMmYydTBRSnhPSUpJV01HdENZd1hjX09rcU5tWlhSMDZLZ2RZeWlWWHUwLWJ2cTdlc1dJdG5adjBteDBFaEJEU1lucGRPaWdrLTh2dFNnMGpob09Mbnd3Y0FwNTZ4S3NyalF3NmpFZnR0ZXZF0gF6QVVfeXFMTkRodlQwS0diN1g2V3lhazFDdG9vT01ZVXpxNUt0LXRldFhBcHhCekl5MXhDcGszdDVnQWJBLUZkVUJVbm1HTzJEaFVYYVpRNmxEODZKM3Rpc2REQU54dnRzUGZsVy1iZ3A4MjZCTzg2WkU4ME1lbGhXS2c?oc=5",
      "date": "2026-05-06"
    },
    {
      "title": "Best Defense Stocks to Watch During Operation Epic Fury in Iran",
      "source": "MarketWise",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOdGdsWnh4djFWcXJKZWl4ZnpXNFQ1aTg0NXZUUXVJVy1ZQkE0N0R0eHJaX0hpdUwzQTFvQW5OMlF6aWszMmlLcDJSSTNyX0xQODhJQXpnWlpldjFhT240cUJvS1NxYmh5aFhFWVQ1M2VTQ3pYdllWUXd4RC11aFRvR1YxQ24wSXZkMmlwcmxSQi1fc1k0NEdKOVdlNHJadw?oc=5",
      "date": "2026-03-15"
    },
    {
      "title": "After Iran and Venezuela, Kim Jong Un must decide how to handle Trump",
      "source": "CNN",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9MSEZWTnNXWXU3NTAwWWlBOWpCTG12b1JCaFEyY1pEb2N3N1pSSUNYYlc3bVFHdDZ6VlBhRnYtX3l0OEVSN29TQlZiTkVzMFJOdXgwdTNxRDBrMHgzRVJLNVZ5QnVzRmNJbDNteVBKMndXZ1RMRFBSdjV5Vm80dw?oc=5",
      "date": "2026-03-07"
    }
  ],
  "iran→houthi rebels (yemen)": [
    {
      "title": "Iranian-backed Houthi rebels in Yemen fire ballistic missiles at Riyadh",
      "source": "Middle East Institute",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQN3ZTdDE1U0FuaHJjWm0xWnhPdHotQzQzTTBFNDJvbGZJNDRYcHFsN2R4RXFtdzBxd0lNVkZfbWtKNDh1NktGSWl2NWVSYzBSQkpnSW9MemFsS090RUZ5UWdJRDNhT0pUU0hOOFAxLUhYanZILVhUcmV6bUhxeW5VMGFZOVJadFRCQ1dDWWNkM2dsMzRuYjVJbUhR?oc=5",
      "date": "2026-01-23"
    },
    {
      "title": "After month of silence, Houthis join Mideast war by targeting Israel",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOY3laR0ZMSm9zRmZZNFEzcUhGQzA4bjVtX3kwcHFEUWVKd1FRbkdPd3hVZnY1eVZSekpOelZBQ2JQUmFJZGNXRVR6UUpnclMzaEJfVE1BTjhTQjI0ZTV1djlOOUNCWkNsRjNWVE5QWmUzRldoQ2kxQ3ZyUDBnaHBTYzN2Nk1TY0M5OUFlRjZTS2tseThsaU05c1dqdlFNWTR4M3lnMXZzSzRHLU9NaHfSAbMBQVVfeXFMTS1uS3NIb3dsREEyMkR4QVY5OVNHLVRGYzlSOThaNkswOTlLTDNkcEJpNmpVY1RIM0lCNm94dHVCa2IwRXVKRmpxb3hwdGEtVUhVN3ZFLVNWemF0V3p5RE1nQ0daWEhJdVcwU0dnY241dnctMUVaMUxqSXQxbmV0dTFyOTFtTEtEU2NQbWNSWllSSnlXX1VnZE5KazFIeC1VSGhnWVRuU3NjNlVDZFhWamxzS1k?oc=5",
      "date": "2026-03-29"
    },
    {
      "title": "Arab Leaders Accuse Iran of Sharing Missile Technology with Houthi Rebels in Yemen",
      "source": "Middle East Institute",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNNkh1VGk4SkM4b0t2YkR1a01KQkRGb25aeXJ0b1pvMVNNemNRMF9KamdKbU1oUFI5ZjZId2szWWZQWTBqVnlYZ2V3ZlExbnFNZjQ2ZExQTEFXLXNtUmJ5WVh6NTZyYmJpeHJKU2ZBcDYwb2tKTWZBR2IxOWR0TGNJaUJHTm1zTWdNaFBzVXRtRDBJY2kwWnAxXzN2WlFEX3p1SkE?oc=5",
      "date": "2026-01-24"
    },
    {
      "title": "Iran is helping the Houthi rebels in Yemen target and down U.S. Reaper drones, U.S. officials say",
      "source": "NBC News",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPX0Q3YmZ3RUJFN252RVROeGNWal9DbmdINlJEQ09FdGNQckRGX3BfMlAzc2w2RzRvUUVJb2dZNEZ6U3RzMFFZc1VBMTFKVTdlX2FzdUFzU3BqUkRodDVfX24tb0I2emYzcUp6QnV4R2E5aXhTaE1kc01TdkhXWUJ1Rk54Ymgyd05GUjBpcWdiUXgzdThrRnZDTGo1aHVZdXVZbGV0TmxwSWp6M3BXYnZLNi1Ebl9jblF2dTJV?oc=5",
      "date": "2024-09-19"
    },
    {
      "title": "Navy SEALs’ drownings in Iranian op were preventable, investigation finds",
      "source": "The Hill",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQWE5wZDc4YjkyaDNDNFdVTVNqZ210c2lFSHZxNnpKTnJ6S0IzdDBEQ1daZWxJOGdTdVFCVXVYZnhsV3RHNEtyTkFhVUJvUjBTU05tTHc4NXVHdlNYbFk1a3JrU0ZpMlNXSUJQYi13NlI4eW95bTlOWlZFYnJTMkVOVGVLMkVzdEZ1cVRkRUhlYjNJd9IBlwFBVV95cUxPOXZvZXJySVN6Tzl3NG0tczVqX3JmZ1p4TklLNE5xek8ybUJueEo1X3JIb1FlMmQ0dU5hZmtUU2FmRzFsVVVrdjZGRG5rVEh1cFZJZDFqcjI4RGJKdVJXOVZMai1zV29zTzlyb1c3dWV1Y2V6RTFDT0tIUFFfMGc0bXpfTXc4Um43QlR0eVRvdlhtaXVyV3BJ?oc=5",
      "date": "2024-10-11"
    },
    {
      "title": "US: Iran Is Sending Rebels in Yemen Weapons to Fire at the US Navy",
      "source": "Business Insider",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQVVlXVVlQOHJuWkRMVlFxX3lXV0Q2bXVDcnR3dlVVQlA0Tmd1SE5PWlF2c1M5U3VZSVlDeXhFNXNCNWtPaHdsNDVWTmo5OVRXMzNkdlA0elFpbVdsbTJsZ3JCTVR2WXlVQXpQd0FzUFhldmRtTjFiU2kxTEtsLXNiY0tiV2NPbEk?oc=5",
      "date": "2016-10-27"
    },
    {
      "title": "Iranian-backed Houthi rebels in Yemen ramp up drone, missile attacks on Saudi Arabia",
      "source": "NBC News",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQTnJFREpZV2FuSnJXVEFPVUdmV3pCdGlQQXpPNzZoY3A5SU9XQThDNnBzYS1sMkhNUGdJUXpQQTlSNm5tMXJweTFxQWFXb05IVHk4NnQ0OGptXzQ3MnFIX0xGNVpDVjZWVDNWeWxPX3hkcXpUSXJ1MWtjd29LWE8ybWU0a3VBemkySFpEODZUTnE2MXduSU9ITlRMblpBYlpYX21vSzU4TmQ5UlFURjhNTQ?oc=5",
      "date": "2021-03-12"
    },
    {
      "title": "Breaking: B-2 Stealth Bombers Take Part in Strikes Against Houthi Rebels in Yemen For The First Time",
      "source": "The Aviationist",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5WMXhhTVdMQmV6aXRHclZRRXZIdVItcGhxOTBZUjBydHNRR0JiVnctNHlndVdJbW9kblVhSkdFLXFsbmhyanhIdDJRX29JT2RDSFJkang3d18wRDNx?oc=5",
      "date": "2024-10-17"
    }
  ],
  "france→saudi arabia": [
    {
      "title": "Air quality in La Defense",
      "source": "IQAir",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE4zSERQWE5vZnljY2owT193MnJMUjZJUUEtdktKUnBwbE1qT2trdlVRNUVSWUkxYmVhRmZGR0lYdmdYTkZQcVROVmdUck11VU95eVRmcDhVU1U2ZHFjWW8zNzFvMnNVQ1ZQUVZrTFBtc0p0M1JMaHhZ?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "France and Saudi Arabia Agree to Deepen Defense Ties as Iran War Enters Fourth Week",
      "source": "houseofsaud.com",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNcjBGdERrekhlMjhoSl9BYUJ3SE9RaXZyMzYzUnpZYjMtSDFMV05idmNGVXdaVVNjR3M4djVIek96R0lOTS1QRVE2aGsxQnNPeDNkeDZvYXI3Q3BTVENiNlNhZU53RGFwT0RuaDBwbE0xOWxTQW5HWktpbHdub0RZdEtOZnZWUQ?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "Can Pakistan play brother-in-arms role as Gulf states eye security shifts?",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNM1pFV2taUENHY0x4VWZ1dWs1b21qSEpMc0s2U1plRHJORXV4a2Z5SFlvWDR3bHM5bDlLcGp4eUxZV1hXNFl1dlJRRVF5YTRJRS1TcEtjd3VsVTV6SE51cXdWSUljZkNfTnMwSGhMV3lJRDlIbXZZNHJBZ0xycE4yR0JjbUVtWEE5RzBuaERVN1FMOXBxaTdNMEZIVlE1LUlIX3ZNbWp1SlNYMDEzd1g0d2lneGVFSFdjaXpycTV4NA?oc=5",
      "date": "2026-05-05"
    },
    {
      "title": "US tops global arms supply with Saudi Arabia the main recipient, Sipri data finds",
      "source": "thenationalnews.com",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOTTZVdkotMmF3X21VMkR6eDgxLXQ1dThXUjVyU0pMSWFaOUx5TWJHVjBKeWdPRGh6X1NBb2dscjREZUVCM0NzbVhJbnFfVXBPTWZiUHU5NmhZOTRVaE1BS2I4b1Q0Z01ET2dlTWZqMDZGMHZXM0FPSjY3X0FERGxjYWI4dEV4eDA2MU50cEdsaEZMXzl6aEJWRTlGZ2ZNQVFCdENBR2JSQXFBNkJXODc2cnVoX19icnBDTVg4Z3AybnowMHdsaEVJMjZnejhHdw?oc=5",
      "date": "2026-03-08"
    },
    {
      "title": "France 'ready' to defend Gulf countries and Jordan against Iran if necessary",
      "source": "Le Monde.fr",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNMjIzcTlteXh3YVRNVV82UEc1eUpZWXUxc1pDcU5DWkc0Y2VwRXpaV3luSjF6SnRsamtHUkZQZXFpdEZyQ1ZWM0c5UDdpekdhNnFPMm9tN2p5QkNMNDN4Sjd2a2tSSzFfTHVwcFBSZFcyQ0dSQ0RKd3hCN0JCVWo3Yi1EZEVBczZISXN1ckZmVjFTakJQVlZicTl6UnlxaGVMaGlCOUs1cUZRYUZwWjZ4X2dRX2RvX1M2S2tfSXpTRElNaWEyY3gzYnQweUlsWmQyT0xVTDBISVIyZmJMQm9Ca1VDcFV0RVY3c1E?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Israel's announcement of plans to stop buying French military equipment is 'symbolic move': Report",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPT2xvNl8yUUNlLTR4bjBiT2pRUExCNWUwOGtlV1lqVHU2b0I5azNfb3F2WGRSbGc5elZSMFBMUVRsSC13SzBzd3hHczNtOHdjRVNndjNHUVEzQWlJMVhlWG1DUXp0c25ZOG1BYWQ5bDJEdDR3RFNWNGZ4N19EcWFlMFlwQllrZW1Na3Q4cDcyWTVYX284Zkx1dGx5dWhwdExXWC01bFFPUVQtbGdJM1VtdFlzRmstQUlaZjhUQ1VzOC00UU81YXNWWDBBVnpmS0U?oc=5",
      "date": "2026-04-02"
    },
    {
      "title": "Saudi-Pakistan mutual defense pact will not include Turkey: sources",
      "source": "Turkish Minute",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPRVJfZzFLNk1kcVNyQ0t4TkFESmUtOTc5emFXNEx4Z1JFZmFMQlE2b1hEdHZZWjdFUHgxTWU4ZmRBR3RfN1ZDbXhOVnFXOUpYOUFHbklmY2w5bk0xTjhSYmlhN3pXYmVBRUo1QVNqUUJvSjMzMHhNeUFtcTgtaWtmaVp4ckczUUJaWjZJNWdUblhyQzZoNGlHZmNTTHdyY3Fzc1UxcWRJVdIBrAFBVV95cUxQb1NtYW1Gd1BxR2ZOVVZvRHJBOHhvbnVVbmtjcjY2cklubjBvX2FpM0NBa0RIcDR1Z0ROM3N3Q1JyWG5JMEZveXhiczRra0FiYlZXNVU1eXdsb2MzNVNrNlJlQU5fYjRMVW8zZFR2Q29KaU9TNUJLS2xUOVZCR0JDQXVRY2E1UE9rRDFsTjZYNTZTQzBLT3RmLVhpOVM5TEp1VzVPSmdJc055VkNQ?oc=5",
      "date": "2026-01-31"
    },
    {
      "title": "Saudi Defense Industry Transformation in Iran War 2026",
      "source": "houseofsaud.com",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNR21zQnRiNURZSnhLV3Q0WlNlanh1NXM5eU1WT1NWNV9MZDNpMkVJQ0JlWlFBcF9ycnFyODkyMm1CekZNMXkxaXVuT215aWtuNnM2NWJwdUw1dTNidWtwSDE0NE0wZ3VaelJTaXVqcmYzSW5pVW4tU1VxREpKWFFwakRSblY?oc=5",
      "date": "2026-03-10"
    }
  ],
  "united states→qatar": [
    {
      "title": "Trump flies old Air Force One out of Turkey, switches to new jet in Britain for trip home",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPRUFNSFZCMUlyZmxEVTVyWGdaRzZfUEk4V0ppVmNhLWpQWlp2TEFGQTlmX2haM2dRMFk0TVAyM2VCMUZQdmE5N05HWTE1NzBQenBZOWZvS3VnZUZNX195QWtGa01MTUtOVnNmYkR4ZU5lSWF0Z2hrazRXWTV1d0dUM3NSMVE4NUxPYzRlZk5xbFdlS3RaaVRNTkJZM0h2clNtMXZ6eE43WFlvNTU1enBMOU9LeDdMNkZ6RTVzdVZBSlRQczhCNHZwZmNrYw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "US approves $8.6bn in arms sales to Middle East allies",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdWJWTm5KbnBCeTdWa0VjbzJTRi1tWVBsQTB2RVJOYTlFdkhoa0tqN18xTEFqUGFHeW5SUVN4clN6T25iTXNVQTZrdXk3VzNPOHJxX0VldmF1WUZPSVhEdkRxZ211UGJwbjZqc2lsX280RUN6RGQ1S2xHQU5PbkVvdnlYSVJTdm80QnF2NUU5T3VTcThDa0Q3cURyWGLSAaIBQVVfeXFMTU41LTl0eWpDajk1XzRfT1h5MEdpU1RIT1BHRmhwd2pLeHlxY2Z5Qk81NjhwSFBOTmVyVjdHc3lMVHB6TElRYTV5QmlRbzBSQ1J0cXRkTFJ3TXhBaXJwQUJUaUZYc2dPcVRhV1JyaEMxckwycnU5WXYxaHZuMXBua1dsek50ekVqNk5fUXotTFo1ejNhSUI1T3UzbmRuQ2t3NkR3?oc=5",
      "date": "2026-05-03"
    },
    {
      "title": "Are Qatar and Saudi Arabia Reassessing Their Reliance on the US?",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV1haLV9Za3VEWGVTUmtSY1lGTHZGTDZoZlBJenJLVGxoTDlwYWtFempDZlhlaGhGbVo3Zm9kNkxJbEx1OGgtQ3JkYm1naWhKU19hQUgyTGk2U0ttdHNyQTFlU2d0T29qRE1yNzhJYmg0cUdpYWQ2QkpfT25SU3BLdHUycE9fTlZvbF9hUC15TEpGMzNPUW1xOWU5cTc?oc=5",
      "date": "2026-02-26"
    },
    {
      "title": "US clears $8.6 billion arms sales to Middle East countries, ‘waiving’ congressional review",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOSGo1QzJ6LTVMODRHNDVTVmJXdjR4Tk1FTURmMXJPMnEtNVltVV9zUGxqS0ZaT2wxdE1RVUk5MnpVOWFOc3VxeEt0M2x3Z1I3RnBCNlhBbFhZTE9LbUhDQnMyR3VNcHROOHkwTms3bW9oeWZwOVNpQjVhM1NaWVY3VzVZeGppclRMTW4yc2sydHctYU1vQmNXRWtRbmRsVTF4VklVSzNYalhoNVhUeGs5WVZDN1BJbXBRSXJwWE9jV1c?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "U.S. Fast-Tracks Arms Deals Valued at $8.6 Billion to Mideast Partners",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOUmQ3Mm1ZT3A2dXZRbTZGaUVfUV9ZalpMWXkwZ1FnaVJrekxSbFpDbWUzbm1kblprM2wycE9fQWtVYklCMlg4dUx1WGg5Z3A3b1I0dkhQWjVZVEFvUkFUaXpFNWVpVHc3WWEwclFSLURfNDMxcnlkd0dVbE5meXhoeE9IXzctblRQek04ZTFIdkpQMUZYQVBr?oc=5",
      "date": "2026-05-02"
    },
    {
      "title": "US approves arms sales of over $8.6 billion for Israel, Qatar, Kuwait and UAE",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPbXNYXzlSTWtOakNfTW9nM1dRd205a3IwV2tKcEN3aXQycTJsOGY2LW9oVEJnSDk4aXNWT1VNVUtIYmVFWW4tcU5US2o5T044LXNOeDdtamZtaktVQi0xbUdnSHFEeXBkZFN6WU90UDh4eEFNUl9JNWNMUzlFVmhsRVVRYW1TYnZZZVF5cjJtTFJxZk9zMDFNQURTY0I2elpYTHQxSGs1MFZVc2p0bFHSAbMBQVVfeXFMTVREaTdFYTVXT3VhV3k5bjZZOHczZlQyOHFWdW5TV1E1NGduZHNOZlNib0JEbGZ0eEJIek1ib0NnTzJ3MjJodmNTR0pDMHhsSm5LNWdmbDNNVjBVOVNCUU5McjFUcGpFdENpT1B3dTRIeEFKZXNkVHpOSHBkRlMzSTlkZnNyQUNob3RSVGpNc0JNTEZ5cXZqWjIwQ0lEbWxwLVkwZ0ZtYThLSFRzZWg0YzNFZ3c?oc=5",
      "date": "2026-05-02"
    },
    {
      "title": "Israel’s Hidden Missile Shield Inside Saudi and Qatar Air Forces Signals New Gulf Airpower Alliance Against Iran",
      "source": "Defence Security Asia",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQZEVSd0FpSWVIR3NDSU5UbVY4NXV1cFRTMEw1TWZPdXVjcUxnWFBzMWFXelUtRWctMi15WGczbnJxYVdTZWszQ3dWZGpBc3RRRTFrNy1qTkhFUFRjUlhDTWpsQVJyWGtza1pLWlhuajhscEdPWUVrb1JDNlJMMUJsbTNmNmNXM2ZVNTBxZGJ5dXRTV3llMXc4NVFoM2NlY2VFa2lpRkwycTdvbHpIMUVFTWlsYWQ?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Trump says he's 'very unhappy' with Israeli strike in Qatar - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOeDhzdTcwa2VOdUNFdjVYQldLZFh0am83WVhyQ3FpQ3ByZTNGa2tfU2VlWkg1d1EwcHdfaWVlZG5KMlFkRTlXczJUTldTc0FsTXRnNnM0b2NzQ0h6S2ZVbkR1cGx2dnB0MWVlX1dESU1jakpoMkpGSmFIbm5BVFVvRktlX2dscUk4Mk4zNng0eTdqVHJ4V3JmNDRzU2VPQkdicGtXd0ln0gGrAUFVX3lxTE1YakJLelUtdUpXN05zMTR2eXNJWkJjd1c5Y2ZzUGdOR3lnLTAxRWdhUC1BNEtrbzlGdGM2RmEzZHJpLVNTbFBiTjlKaTh0OFAtQnFXX0NJVFNhdV9JNXNvVjFIcjYyZGQza2hYS1NRM05EcUx3aWRSTUNYOFhxeno2aHBHVnI4XzFsS3lOLUJGT2hTN25xU2hlWFUyWHRqb3U2Y1p6bGlIcHlwNA?oc=5",
      "date": "2026-02-11"
    }
  ],
  "united kingdom→japan": [
    {
      "title": "In Japan, Canadian defense minister expresses interest in GCAP sixth-gen fighter project",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOQXFFdlBPYmR0OGJoUFpDMEI4bndSRUdiWDN0S1NjdmFrUU5raHBHUzdiNTJGYVNGQnpkSnBOR2tCZGtZREY0dklrcW1IWHpwSTQwQi1kYU9oQnRvRUhWdlN4NGtZUm1XX0U3V0ljZGxPcjEwejIxVG90NGcwWEJpSWg2TXVhb1pmQnpNMjM0TEhia2R1RWFUMzUycTVDaWpqb1BJeHVFRXVueHJTdkRpd3dVWVEycVg0QnJ6M2Y0cXdkUQ?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "MDA Space Wins Role in Japan’s Next-Gen Military Communications Satellite",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE4wbnY4OThlcGswQmJhWVV1TEotTFVva05VQTZMbmQySTlzSl85NHd1bFRkVlprTUloU2FkbU9OdDdhaXpVdTU3d25LckgzdjV5c05uQzFTWkxMOGJtN1pwSVpiajJOMk9hbDFGUFBBTXp4UWMtUmfSAXtBVV95cUxOSHhseW5ycjUtaFRZS0Qyc09kWm5fdVdCcUQ3X1NNRy1XVHBJMy1EUV9LeVg2b19pdURJREtkUVNqWjRVV0FsYURBQXFESDZyanFFVC12dXpVdUxCRkY4UFF3Vndkd2NSckdkb2NNYlFkSTYtcjFodHJHcjQ?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "Japan Is Poised To Become Part of America’s Arsenal of Democracy",
      "source": "Foundation for Defense of Democracies",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOYmliWEVGUVM3SHNCRkNyUzhqZlRVOVNUWE1qWlNFTW43WkVnUTVGdXREVWVLQlhYV3ROcHdDRFpDY2M5NmFnSDJCZnc4cWNfVm9kcktlVjZETENYUUtNaXpoam5ReXpwS3cyZHN5Q05ZVzNKamVZNU1FY1hOVmFoZjZsbFV2QnJmSmtHXy1IU3lOYVVWT1lPOVlfbnY2RENBdmdjem1lSQ?oc=5",
      "date": "2026-04-17"
    },
    {
      "title": "Japan opens door to global arms market with biggest export rule change in decades",
      "source": "CNN",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPdm05cVFCenYtaDc1Zk9IczY3aFpfUHUxSElZRGxKZk1UN0lUYjdHOGtPMjNWVVRRWXNweEc3NXl6TXZxLU5sMGVNc0tjSVpxWWh6eVAtc3BGTXZpeEZzbHpoRC02YXZoRnBPQzdwNWx0T3hxOHRmWWwydEVRb0RFRGZiRWJLcms?oc=5",
      "date": "2026-04-20"
    },
    {
      "title": "JUST IN: Japan Focused on New Policies, Allies Amid Rising Geopolitical Tensions",
      "source": "National Defense Magazine",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNdGlPVlQxVzU2MVpuUk0tMGh0eFRjb0E1ajZ1c2hHWmVLOWNaYmV2YlY3c1dmT3RJQ1p6U0l6M0pCQUZUU2l3aVZzOF80bTdJRl9vVHZkNVlZTFQwTXEwckZHODhtZzRPX3ZTVFpUNFUza3VKQVYzTEI1MGdTTkdkbjlHelB3XzZyYXNsRTYyVmxvWjV0VTFjTUN2N2pPZjVzeWhhUEY3T3JLSEl6eWs5Vw?oc=5",
      "date": "2026-05-06"
    },
    {
      "title": "Japan lifts post-World War II ban on lethal weapons exports",
      "source": "The Washington Post",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPb1gxaHYxajJjOFoxc2Q3d2dyQjlsTGFqU3dEbmFmTkZ3bHB4NXYwOHlXdFlsaGRXNHhCNG1vZTB4VUVIVmJZenpsellxV3pSUTZOM0ZRZFJuMVVReE11WjVma1JpcUsyejd6VENyTVMwQ2g5RkgxaXh5QUdFcTJhQzN5dw?oc=5",
      "date": "2026-04-21"
    },
    {
      "title": "Japan’s Sovereign Cloud Commitment at the U.S.-Japan Summit: Defense Interoperability, Not Just Digital Policy",
      "source": "Crowell & Moring LLP",
      "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQZEFOMVUwUlExakg4bDdxTXlRal9ieHQzNHNZN2dPd3R5dXlLeENGcHQ3N0ZxNk8tZGJ0WUp4QnBMUFBBdDZJLVBoSE1WQS13RFotRVVPLUZldVh1a1E1UHQ4d3VSNDJLM1ZTSHFUaHN0eFJqdEYzRVgta29LSnFJQk9vd0lMZFVQUkg4Sm5vYjJieGhuSGx4dFl4OEpBM3g4X1FySVI4ZjFScy04dHM5b2hLN19jZGl0M1AyVmg0OTgzaEJMZmFzNmZnSWRmVFRsTVlrdmpEanh6NXphb0FoNXRDZFJCV21VVEJn?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "Japan arms exports to strengthen Indo-Pacific deterrence",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQczRpdU9tLTFhbFZsTWl1R1U5QkVtbEJkeGt1eTRTbEh6bVNCcjlSLXc5MEREQmFQak01RzB5WXB6MFpPQmRmOGhELU82eFFPdHQxSDhUQXBBRms4SXdDWEJ5R1hqekFIU2h5bTZtRlJMN3hScXdHdlYxekU5VHo2SUVac1NYUFZ3WW92VEVHZk9vdHRVaFU4?oc=5",
      "date": "2026-05-10"
    }
  ],
  "norway→japan": [
    {
      "title": "Japan to Sell More Weapons Abroad, Breaking With Postwar Pacifism",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQM2RnSXN4M0dCQ0YxeHlMNU1VVERMeUhRUWt0Q3VpOEs2UzB2aEJiYktUbFI5SUVVYWVZRDRhMVYzRmVsaXI0T3VWVzZMcGdFVklNdHJsM3B3UGZ1bEVTUUVnWDNOUXpKcHdqOFE3czJMSUl2cmFaQW0tQmlrZHNNRlBpQTY5Zw?oc=5",
      "date": "2026-04-20"
    },
    {
      "title": "Canada selects Kongsberg Joint Strike Missile for integration with its future F-35A Lightning II multirole combat aircraft fleet",
      "source": "Defence Industry Europe",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxQNlNsODhaZkRRcXYwc0pJVUdwZ0trbEt2TS01anpiYkJISV9BT2pBNFEzSXVuaXc3ODY4QUIzT3N1VlNaVDdmTlowSE1peWU5VEJSaFUzaFJ1Uk41MTVGZnhUOThoVFZzR2tVVGdjckRYek1TSXkzZ0cxeHAyT3J5UE9TREJ1Y3ZMeXdlQ2JjNElBQ1FnWWxJbE5pTnJUbGhPWGRmUFZ4eTBiWGo5bllBNjRMaFpDLXV4Y096WDRCdi1UdzlDYWMzMG9OT05VX29EdmhTVTlndXdiZTBDZ09WMV92Q19rYm1RdnZJTktB?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Joint Statement Reaffirming a Shared Commitment to Defense Industrial Resilience",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxONTlSWUhyWkpoUDA2ZzhIRDc0YTFDZDRVY3dmYlNzWlZUYzd5blpVTzNpWmhXM1poTHVxdGlrbFdoLVozNVNzeXNNczJOZlJXd1lfbmNFOUFub2JtV0xzVElIOVlZbjFNRUdja2UycWZaNXoyMnJ2YVJRRXZHUmhSalF5aTdLaDF1Z1laWUVpS0Fmd1ppMjZQRjh1OXVaM21HZXgtejRLbDlQbWlZNm1meUVPaUVGdjNaQTN0bDdqcVB4UkFKZjZWakF3eS1BZjVWcVNZT2h3?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "The US Air Force Just Spent $240 Million on ‘Stealth’ Cruise Missiles from Norway",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQVTFYLUIweWdDU1lmXzRKal9EdlNMOHBTOVEzMXBnTmQ3emFVdWxRSHd0N29iUTh0cURIazhPQ253ckZrR0gtOXMxd1dhd3BvbXI4bEFkV1MyTVpva0NMNTkwTkNudTdXVVJlMnFza29ZMDhqRUZESnExQjM4REpiZWhDOHRVWDJZMmd5d0dwMVdHeWJHVGtLWDVIOGVwY1Q5M254bkZOLWFfTUJTb0FMaWt4amEzN3o0V0tad2taX0k?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Japan Takes Delivery of First Joint Strike Missiles for F-35A Fighters",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9zWlVvaWluVGdYT2JFS2FRQV9mUW9hVnBQeFB5QTJRNmFIR094R3VQMk5ycEdld1FiU1REXzVKNHBkNFFvMVFLVnVtV2FjUm0wQTlpZUU4NjRaUjZSX01rNGRJSkdrMnVnbjVhbGdES3ZNSUow0gF6QVVfeXFMTzhTVzFieEhuQzFuOGlLWC1HMno2SzQ0OFdyc3lvZEpPX2Vjemd0ZXFiSFBJSVA4WkFzTm5neE5ONlE4ZTN4ekZfTFVfamNYVHQzNlpJejR5YlJfeUNIMlVTbjJoVlBsSEc5ejBSSFpyYnBReGZxWHI2SFE?oc=5",
      "date": "2026-03-18"
    },
    {
      "title": "Japan Receives First Tomahawk, Joint Strike Missiles",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNRXI2ZktIcWxkMkdnQnpGQ09PUGZuVEx2MXJZX09uZ2dzS2RSV1hfbUZQT2xUcjhaMnowQ3R3c1ZxWERPOHQxcDRNNTZBUjktdnhSR2dSRGNyUHVHWXZwUnY0TXRWWWdlSE9ySkFvVDVRVnBRMzE0QzhybW43MWJhWnJFRFk1dUY4TjFRQjlPSHRFRVA3dzV0LVpwTXJYWFNsbEtEU1ZTYU9tS1pi?oc=5",
      "date": "2026-03-16"
    },
    {
      "title": "The Japanese women's junior handball team shook off Norway's last-minute chase and confirmed its adv..",
      "source": "매일경제",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE53bUtydEVtTGxfSmFsLThzRjkxSXdxa0g1VEdHSzhodnVFOFNXNVZfR0ptektxSVJZb0x0SlNJNGpWRl9HazNkS1psaHJabG03?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "World Cup picks for Brazil vs Morocco and Norway vs Japan with over bets and a draw prediction",
      "source": "Fox News",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOQTk4WHRRSEVNOFpoMjc4QWFqc0QteW9vZ3RDRTA3V1ZVRUtsSUdwMWFwamU5U25jSTBoN2w5aDY4NjRJNmlwbG1mUXpLVU41VXc1d2lPeW5KMWFKdjFtM0NGajYtVjljaGV6eU1mV2NidC0wUnMtQ3FHaUtsN09zTzVwX1pndlBSQk9IQUk2M0tyS1p0blVORGRHMVoxeHFEdUI1UUNxd0M2RzU0X0E?oc=5",
      "date": "2026-06-13"
    }
  ],
  "united states→poland": [
    {
      "title": "Doubts About NATO Abound as U.S. Seeks to Push 3.0 Version",
      "source": "National Defense Magazine",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOcXZZNVBVb2Y4TW5reVRMU0w0Zl9zVU5yTjlqbVBNWk9pZHNvdjZPMC1tSVZWN3JjcWN1OHdoNmQ0Z05QOGhjeldzbFlYTGdnbXdTZzBucnB2MHY5S1lfaHhya2JUSFRsWVN2NFlJbE5OOGpBSXVlLTMweldrbDhVNlE2cE1Ib2xPU1h3ZHJ0SWo1bVRNX2Z6alo4NU82emp5TTlRYWJ5cDRUcjlpNnhxcXcwSQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Polish defense chief: U.S. to put troops back in rotation in Poland",
      "source": "upi.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNUEVaTXNteFdHbVFvRm5vOXpLOU5aZVQ3THZOQjQtbnA4aE4zdFpVdVBaaEtrazNVQzhDSElGWjBCM1RXZ1RXSHBSUzNjSzA3Ny00SnNUZi1lU2huSnRjWDdVM1A0N1QyUjE1SWgzUzk4djVUc05oWnVQLXBQc2xSME9kNG9HM2dESG85ZW5sOWrSAZYBQVVfeXFMTXhzbkxIMnRKVHNoNUFPazkzUlRTTHJKc2otYmZuOWRpMFF5djB3STRzVm1MS1VPaUhMR0J6dFIzX2tjcEJnY1FWSm8xeFJxUkViT0xhVUptR0c0YlJ2SHFycU5IekFqOU15ZVlBV1R6TlZuaTZtaUc2S1pISG56bTdibHE5S3I4S0lwcVRENGNneHdTOVNR?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Poland to declassify Ukraine arms donations records",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQMGpsWVpfMnFSZ192bFJaZm41UFZkVURRampwekIydjNmM2ZadTZxWVRLdm5hREFFYzk3TnlZQ1lkc3BJTFVubGtpU3VsMF9NbG9YbzlONmVUYTBsUGxnTWtJVUQwUWxTSENsb2U4UWRsQUotUVJrNGZwcFVwWFpDSHlXZEFCZ3FSQTg0WW5qLXI0d0NiWkFrXzh0VFV2WHBMTUd6OHlPNVdUaUxRWHNn?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "US Army Troop Rotations to Poland Are Back On—for Now",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOVW8tTzE4UFNFREFDQkM2SEZ5UXNoLXhxQTdqMmZqcWNoNFBjM3dVX19Sdm02dlRtWHJKd0MxVjlnSkFHeGFtdHhYUDVZWHRfUXg1eDhSQ2tOM2M5cmN3enNkclUwUWxTOFExWkR5WlllQnFfSFBIN25mVnR5OTZrSVlnYlN4eV9xS3MwN1hMb3NUY1RtYURqb3kwb1FJam8?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Poland defense minister says US soldiers are returning to country",
      "source": "National Desk",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNTVc1cDBNVGtHZGplTnVRQ0dhVG9NSkY2Ui1jNXVqS1NfQ1BYNmxDUk1uUTVYN2xUdm1DZ2tidVZUUWZ3ZHZ1Y2p0OUpMTkU4cTZNNW5mZ2JjR1BqYjFIZ1BVcDZ5QTFmZElrcTFkdUpHXzAtaXQ2UGFmY3ZjZWhURmVwVVptSGtjVjYwNTV6OUZXV2JYakVUN05IZEM1dDR3SzFCUnctaUJOeUNXa3EycW9IeW9yTjd5WkttcXdzTXpxVDFvQURMdGY3WEUweEFa?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "NATO chief praises Poland's defense spending, cites US commitment",
      "source": "Polskie Radio",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQS0hLbHI2dG15bmZkZUtwbm1zN1JNYW85Y0t4a2pvbkw3MlRnT1ZsSkNLemlzRGJ0NWRtc3hkWDhLT3hadXdSUndXb1d2VWQ5T1piTzFEcTQxZmxWX21CRTlzZVUwVXZaS2VJMW8tN0ZDY1g1LXBzclE3T2UzajNOdHNwQkhWVXdYdWdXX3J5QU1zX0s2X2VWWU9ZUjJwc1hnLWJkRHpGNUNTVDNCSEpSWW5NMFFYLXhxMFRZMF9rbWoxUHNj?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Poland to cooperate with Ukraine on production and maintenance of Patriot missiles - Ukrinform",
      "source": "Ukrinform - Ukrainian National News Agency",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPQ1VVcGVhTF9HcEx1NFBqZ1Z4Y2tTbUpUQlQ0NUVvNTZaREpvS29JMmlrZ2RXZkxUYXNfOGFpdHh6VkFlbDhqSG9FcmNsMG9tanVvU2xuUGZLY0RqWDd6TEJlTUdhTmdubDF2Vm1wUFR5d3Q1c1BXQXNuN3ZYQ29sYy1HUzlMUUw5LXZSUnRzSjNmV3BWUWtfWkltb2V2VXlSWWZKZ1VCcXBLTUdJVG1LN05tNzM5a3NmZkF2aklZU1dUSktCaE84ejB1Mm8?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "East Shield: Poland’s Role In Defending NATO’s Eastern Border – Analysis",
      "source": "Eurasia Review",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOc2paTHFJUGUxSFV0elpTOVZ2c3VmN3dTVElpZXJ2QVQzaU9NSXNSUG9PdVdjM2ptZTBDMU5BQW5FeWJWMl9MUlRjWTJGZUpNZ2VGbVlMeDlmc3FQVzc3Q0h5WkV1di0xYzFuY0tDaDNWT0hjdnhIa2RPbmYxeVc0eENlZjYybW5aaG5vWm5oWkNFZG02SHdfWW1VOXhic1haVVVOaW5kY0RZMEE?oc=5",
      "date": "2026-07-08"
    }
  ],
  "italy→poland": [
    {
      "title": "Poland eyes benefits of joining GCAP sixth-generation fighter project",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOdGJCRHNCWV9nN1B6SGwzdTRfZW45T1RyVWphRGVueUd6YWItR3J2OHUzNFo2NVZrUDA5OHFFQjUxaGkwU3kwVUdTYjFMQmhULWlvVFZ1MWM2RkZPSDBTV2ptRFNkNzJoLWo3YVljQXliSG9sbUc4NU8yLXNXd1Y5S2RnNmxXazNkbUNpdERZdmxUeTVlRWRhRWx3Y2NFMml6Q2E2dXNuOWhpNTJsUXhaeTd6M2YxcXlQUHR3eFhFNzA?oc=5",
      "date": "2026-03-23"
    },
    {
      "title": "UK and Poland sign new defense and migration pact",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQU3RBTktWbW44M0RKaVZiQm9JeENiY0VXWXZjX0NPWk1DWHlhbkI5cEFVbEx4elpoSmdPZkliSXJ3Y0hTNjkzeFI0ekZEelVfZVFqQXZCRXNFZmtXQUUwaFJ6d2h3bG9xWThWN2hpbTZJekRabTFwSHN6Mkl1VUlxYTY5OXl6Vzhn?oc=5",
      "date": "2026-05-27"
    },
    {
      "title": "Poland, Germany, France, Italy and UK to jointly develop low-cost air-defence systems",
      "source": "Notes From Poland",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxObllCUGdpZldaRVQwOS1nc3ZsSGxqbnd4aXVMaXl5dWNiZUlBN3FyVDdJajRhM0dKTEE2bk1DOXVIWkZXUF82MmlzNk9Ha1dCNVlxZlR5MW1rb2ttVUxlQkZxQm54WDUtQUZSNGxiSm1MZWxWY2Jsc0d0R2NFZ0Z3Ni0tTldrN1c3WDBZZ3ZGYWtKR2w4RGdmdTBPN2RVQko1RjgxdFc3MEdoUWJzZ2lUd1UzYzlYaTlBcXpuT3pJSQ?oc=5",
      "date": "2026-02-23"
    },
    {
      "title": "Tusk: Poland's defense spending nears 7% of GDP",
      "source": "Report.az",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPU0lrY19BakpDdDU0VmJxazdnWGlETm4zSzdBd2xKSjVkMW5rYWNYa3VZSDRWcnAxZm04SVktSnFhcmFPRjhUc2kxTWc4SmtwQzVQWDkzNEVMOFNuZTZ0dUpOb2NDOURvSl8wdmxMX3VtVTVMdk03YVBUZG5LeHBtRldzY0FLTGdSelHSAY8BQVVfeXFMTk1YeEY3SG15d0xwRVMtdGI5c1BEMGNFU1l0NTFianlBMW5IanFCNi1SU2VXX3FOZ0NiTG0zZ1pycXVjdVV4M0MybzBUazdoTUVXS0c1T2ExRWkyazRURU9YYnlxMFB4RVVxT0d1ZTFjOXBxY2RhUzdJRHNmVTVxNk53X2ZrTi1YVnphZVZ6U00?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "5 European allies pledge millions to build cheap drone defenses with Ukrainian know-how",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNVWd2OGQxa2xNVnFlNHNqek1faVUtNEctdF92LVl2NzVwdHZiOTliOEZFMWFvNWJWNDlYMkRPbXNiQUpzd0o5VFdXdVltSUxHQ1dybGFaQ3ZSWS04UGpJMW5SLXBWOFRIbllGOWRMbFlYVFYxTWtOWGkwYWFVb2M3eXdwbF9tN2NFcXlfS2VHWm83LU9aV1Vrb1RENXdzUUdRUUtIMERtbzRZWThSenZFdXpSTElnOVJmMEFnUXRFVdIBxAFBVV95cUxPbDJ2Tk1xaDBQU1FXSUs3VEIwblhuTlJxaktZbzBTaTlKZDlWaUM2UG9LZF9WRnFDQjhkZkpHZXpsUUF6UHlYOVNsT1d1X2xmd1BySEc3Q1RpR2F0MHIyWWlMdy1oLXhRQ256YWx4dDlscVIxLXV4cmdIR0w4aGRUVzhDZ3RYTzE4d0YwTUNoeFZxNGZrRVdINC1sc3hpY0R1Rno0WEJkdy01Q2JyLWdvaG1Gb0pwOFZ3NEZuU1g5Wm5EWkFJ?oc=5",
      "date": "2026-02-20"
    },
    {
      "title": "Poland looks to join rival to FCAS fighter jet programme",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOaG9zN05HNzBPVlNpbzFyQ28xUWo5ZVdFRUR1V2ZiWVF1SUNldkFiTEg0RW4tU1pWQm1yd0dGVXh0bTExRENVRWR5Y1laT2JyUGJpa2NRUFNnaGl0bnF5ZnpUVkw0WFZlcnFpQUF1UkpWaHY1YUE4RGo5V19fM1pBRnhlak5pQkFoTDhGSWJwS08?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "Poland Might Consider Developing its Own Nuclear Weapons",
      "source": "19FortyFive",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPMTFlUEw1MURMTy03ZkdVTDNya18zckMzckJZWnVienpJbzdSVThYaUE1dlhwR1dwMTdvRjZsLWRfWklWN3F0alN3Q3hIbFFLZVkwdmNtTDZyOHZVcFk1RjR1bm11aURqOFZmd0RmLVdtUFFJVjlMVUJlb05uNWZjWjlKcVc0RXlydmY4VlJpWHV2QzBHYW5uZw?oc=5",
      "date": "2026-02-23"
    },
    {
      "title": "Poland to develop ‘low-cost’ air defense and drone strike capabilities with European allies",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNb2d5dU5XMTRnV2JUZjlHNFNYQURXSzRmenFMU1Y2OXRKSy1kZVFseWE3bEhKY3otTVVkdjVrandxWkd1Wkh5YnpJczJvUVZDYnBSTllJZlF1MGNaWWpLUDc5cmw5VFBnb0w1WUxycjVSWW9GMFpRa29VbUwxZEJpcHhjRXNZSUQ5Tm1xTVRWdnpGTDFDZEhJ?oc=5",
      "date": "2026-02-20"
    }
  ],
  "france→united states": [
    {
      "title": "US, UK, France, Germany raise alarm about Chinese patrols off eastern Taiwan",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPVGVseXVvMXkzSTdObGpJS1l5NmpvaVJsSWtaa210dmt4XzZPSWViTFRRWTNGNXFWOEJTNWRPX0ZnZUw3c2djSGN3R0tQME1Pb3hjdHNUN1pvOE4zQkk0V0hHd3BnbW9ERWxlOThQeGdmOEtwY1NLb3pGY21YSjVWNE5MaHQtV1RvOVpKd2RfeE9XLVpjSjJwM0xCUGszYVNidXJRaTN0TTRlTUNtWnlmZF9NSkp4R2RCaFEzemJaQzkxc1o3TTI1SkZkZWR4dw?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "France and Germany Need Their Own Situation Room",
      "source": "Carnegie Endowment for International Peace",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNbVNpb1VZVjBUWEhEaEhmaFU3UHZEMk9mVzNQVjFHRUdvdHJmbU81VGlyVGlPclhzVUpJOGQtenoxMzRWamZRelFFejNKeV9nSjVvX1JISTZUQ2tYbnRfR1NyWi1yc2wxMmZKZ1YtWU01Q240SWVvVmItWWlhd051Y3lXbGFNa3BabmY1OXJPYTc4X1R2OG4wY2VCQzJCRkJUal8yeWtRSEVmUU85UGk4?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Failed joint jet project spotlights Europe's defense dilemma",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOWXZxZW5mQzJILVVsR21pbFJWXzNzVGpUZmk3V0dMUHpvRTRuN19ab25oTDVzX3BuRHVtSWlKVVhKOU10WXBPQWpaUnNpSGhzWGg5RFV5WTRUTFhvcTdjZGREY1pORUZHQk12TU1vXzJyemkteldOWjhYTE5oVmFRRmtrczlMQjZJS1NzT2d1QUR4THJMZk9z0gGXAUFVX3lxTFBiQXFCVWtsdUxLYWJ2VHlYZ0tsQXpWcV9TbDNHNWE3SGc3X0JkMEZrV3BKQUF2LWR5TksxWjJFX1BjRmd0aWQzeG96NXRCUVNKQXhZZG1LZ2kzU2lvVkZmYlBqTGctRFpLLTB6TUgtVklHSExleTRJc0ZJNnk1UXh6VEJlVGYtMUdYdlJoQ0F0ZVJNRTZOVVU?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Failure of European fighter jet program exposes the weakness of EU defense",
      "source": "EL PAÍS English",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNd2ZpeC1CTS01WlhvaWNWZEVKMWhTbHRhNXZIWVl6bWJqam5NeXc5QnBCNE9tdjAtbzZXaFl2TDJDOHZJVDdQajIweWZOc29GaUM0Q3IxRi1vRVpyeEhGTVc2SjB5dlpJM2VPUUFNaTN4OS01R2dzMGk0QVhrazhDUlBFQlk5bElhR3NydU8xbGVPaWZWNFVULWM0dkRob2RLM1dhcmhJalZGUmZ3VDZ1RjJqZU5mWTUtUUs1VWNLM3BnNC1fendhNi1IY9IB3wFBVV95cUxPUVlyYUprZHVKbTNJQ1FlZW1NYmtHRzZ6Y01KZ2FwMENpbTFWWWNaSzFkTndXMzA0N0ZabGhzdm1YNGg0QW42cUdMZmpUU1ctVmt2RjZrcnpJOHk1dDFZMzk1NXNTMDRKMS16VkhtZFF4X29ESk1DWVRxRUpiTjlyMDJmd21kSWpzemxmb3lSMjBIMXh3cDNwb1U2V3piMFlfbThvTkI5eEJNMjBfaGtncFhxRUtLZzNzVjdWTzViQ2JEQjh5MU85bVJhV05UWGhqak1RTEFpSGV4RlRFeWk0?oc=5",
      "date": "2026-06-14"
    },
    {
      "title": "France reaffirms its commitment to nuclear deterrence",
      "source": "France ONU",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNd2w5MHRTSXNrNXRoQlo3bnVpc2F3TUlRc1FyckVUSG9jN3Q0Qm5kYV85Q09kRVoxaGNHVnNZWFJWTEhXX19HckY2UjFpQXItUllySUJmTkhkY3ZqX0xmeHB0RkhFVmNMcXBXc1VUV1BNTmpUTFJZTzkzZC1FUUV3S29qM0I3ZVl2?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "Poland and Lithuania explore playing bigger role in NATO's nuclear deterrence",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQZ0d1Nldmc25tRnVqaFRCQklOazljbHRrV2t2cnNqdVBqWnBWRWxCOEs2TkQwOUJOSWFFQ1lDSkI1RTVJZkhwNEpFM3JLVDVpVWdSX2JXVTA1dHctbS1KY09qMDIwNGlPVTdSdGVtRTdqel9Pam0xbmphdzk4MTlGeDFweFlGZ1ZDS2F4b056U2gwSmZyZ05XcXJjdDRVdWFzNzdibUhSX2F3U20ybnpsQ9IBtgFBVV95cUxQTUROZm5mZUVCN0F2RmF0VU9kckZQVG5reVk5VzBOcnhRSGs1LXJscjNZWHp2WDJfTEZ4YTltOHM2WHJEMVdGazRuQjhfRTJMamR4RnM0b3RMRW9KaDJOSDNWeU11WkhYNi00elRVZ3RaYXFfbG1rMEwyUVVXZTRTX2dMQTkyUE5RdklDdHFrbjlNZlB5QmwxMzNmaldUWjJqZXdQU3NraWl2bmU5em9BRlJpaTFvQQ?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Macron’s nuclear pact expands across Scandinavia as global forces surges",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOOXVfem5QVDlXc3ZoTW5jVXF5ckZ6b3pvTEhXWDNlNHpDS3dfdDh2dk5HSHE3VVVXZDM5WVRJTXdwaHBBbDB1SHk1S0dKbG13V09fX1JiODhZbHdfSVh1YlB6cHh3am9uaS1FNGljcnRXbUJaX1doa1JXMEp1cTFkOFlxdFpOdTV1RVpaaGE4ay1WVmlQTFhLaE1WeG5Yb3VhWVdNNnZTZFJEaXZS?oc=5",
      "date": "2026-06-08"
    },
    {
      "title": "France and UK Send Warships to Mediterranean",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9XMDlaZlJhYkk3cXJvMHU4a1N1c2xxNG9STEhnVy1aQ0FZMmpVT1RlNlBKdHpuNERPdFNXRVFkXzF3Z2otQWltN3VFa3RkbXpoNVBYOExEZEd5OWtWY3ZKeWY3eXc5VGN0RzMtYklhRWFpTDBoOFAyd1RTSnZldw?oc=5",
      "date": "2026-03-04"
    }
  ],
  "italy→united states": [
    {
      "title": "Turkey, Italy, and Europe’s defense-industrial future",
      "source": "Brookings",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQZ2dpZDUtbkU5VVZ5WVdGcXpMOUpwNTl1UkVUUEl5UWd6UGUxRjlRRHFNbEJhdVFqR0VEal9RRVhRTFJ5ZDVOY3pWcGZoR0QxQlJ2ek1XM3lFN0pCaFdHclBUOWdlSGZxVGlxVENvcUc5dVZSaGV3bm9Ta0xQSEt0MGdmUmVldHVyU1owYmQ4TQ?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Trump deepens the dustup with Italy's Meloni, who says his 'unprovoked attacks are senseless'",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNd1NjeUZwY0YycUZUNkNURXJRNHU3a3MtVG83OHBEbXVpQ2ZDNWhWa2NCdTk2VU9nbEZER09kNmpTX2NLQ25HVzg3NFpXRjdtalBfekVlYXRyUlRMN1V1bWQxTlhWTkVhYzlyNXdPUlcyVlJwalk4elRDVXNwQ3kyWkg1ZFVIbzQzd25ENkN0XzhzZktRYXlPRVYxYVczWmc5Q3NKZFlmZnNyNE96WHBXc2RiNzB6cFRSSHhXdVJRb1R6enRuSnfSAcsBQVVfeXFMTURYVmstVVFubWxlMUpuY3ZHSFNCVEdIcnlqYmVQel8yaXhtcFFfRFFJaUVlM1JfbUpGSWVRUGdFMnBYTm9fclI3YTEtek1Vd0NPbUdsLXE1RGxHcVVPTk5WVnh0bVFldTRRb0Z1WVJrcEU3ZXprR05jSHU4ZFQzaTU3QTkyQkhKUDNxbUxPZkJDY1VSb0oyQlZlblczbnQ4TEVQMTBmbFEzdHR4RFIzbGE4UlNibTg2ZGNvbUxaZWhleFowQ1FjWkJQNkE?oc=5",
      "date": "2026-06-20"
    },
    {
      "title": "Trump and PM Georgia Meloni Face New Strain as Italy Reassesses Israel Ties",
      "source": "Military.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNXy1hcFFlRWRMWFhYNWJKUzF6d1ljOHdvUlctSVpXYXlmdWpjNXVPUVhrNTVZTG9qbEpxRzB5NTVvM2VWNVlPV2tJdHpLQ3I2aXBfbjM1NlJ3YnpSUUJEVDhWcTVLSXdKTEF0Z1ctOVotbzM2SmdGT1RDZGNHYnQ3Qms3VDVBQlNQZXJxYmdhYWdSZXlRbmJLT1pBQ0x6d2JtSVE?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "US doesn’t seek withdrawal from Italy, defense minister says after Hegseth meeting",
      "source": "stripes.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQb1hJRmtZNDE3UFRielNhR0pxcjk1MU9jbEFGckprMU4xMm9TTkNjVFlDVUQ5T3Z5NHJXT0J2TWlBVlZMeDd0eTBpOGJEYmdnaHBNLThmY3JnOVJWWHdKWkEzWVRiWHFnb2cwd1FXRGR5UmhXZUloTUM1UGdPbUd1Zi1jeUVlQXdER0JXM1J2UE1UaGhrckdKY0lONV82dGs2cGF5ZmJuNlJLWkFaUnJJbDdpeFJOWUFSRTBZ?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Italy’s political spectrum reacts after Trump remarks on Meloni",
      "source": "Decode39",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOTG85QkFSd0tmdDhGTkpxS2JpdGN6UHhkT0kxSC02czVhRWwzNHNvRTYyX1RBZ0w2SXNXR2RWdG9xLTVueEJvWmw5cFRMeWFTQno0YWlfdzFQWWYwVlplWEk2d3NEakJiUWtJRGFuSC1PX1NHYTVOaFg2aWNTbGdDWlVJWExjcmxITmVZLVJhTS1ic1c5?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Italy Rejects PURL Funding for Ukraine While Redefining Own Defense Budget",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPS2FIVlUxOTRkalVNdzNTMW9hd2FHRkNhRENrbjJZY0tCMXB0SEVTTGQxcXk5a2NMU24xMWNpRTBZR29YRkpjeGNfbzFEN2MwTEZ0VWVqa2N3X1ItN21jclRCMHh1dzYzcGVvUHk5QU5QS2syekQ3VUxkYmRIdHFiLWc0aUFBUDNfZDJhcTFnb29VUXpYZ19vYmIxMlFpdFdHV3BHV1JpSldlRk1rczItV2tB?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "U.S. and Italy Look to NATO 3.0 - VOA",
      "source": "VOA - Voice of America English News",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBOYlBmQjVTRzZKLU9oVHUxUnhHNXowZUR5TktVaTBHcEx2enAwQ3R1cUM0VTVzR09jUFBRcFc4NlRQMG51QmJNVDNLRlNRSk1tN0V0Sl9mUlprWkxaeHRIMUNQQXdSQ3VfMzZzbWo3TW9rYjVYSmdONEQ1R2_SAX9BVV95cUxPMW0zbmZaQnNhWWE4VWptUFpOUXFrODJoV3N5U0lJNHVIRWY1bDhMWERUak0tQVptb0RrOVhJNksxU0JrbDFSOEZVOWFmRlp5VU9YQ21mcEl2MzdZNkhiaVo1a1JGTkpJTFJqbmUwN0s2WXI5NndIRTZkVzhVZGEw?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Europe Needs New Military Alliance to Defend Itself, Italy Says",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTkY4NWV6STJuYUZCTmtjUTh4YkgxYjdHMmdDbjhzTy03Y1g3SFQtdnFfVTVkOHAtOWd2eVMtNHV0TS1vaG13WVZUSkM2S0VtMmVRWTdYaDFiRmxfZEFxTUdPY1dNc29YS3VoNTlnN3lJcVJYbG1TMHhhZ09odDM1WVh6R3pXQks3YjFGek5Ba3RnR0tTS1NiaFp3aGQ?oc=5",
      "date": "2026-06-05"
    }
  ],
  "united states→kuwait": [
    {
      "title": "US Insists Iran 'Does Not Control' Strait Of Hormuz",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQWnhyaS1tS3NVV19VeVRlS1RUeUhFblVCTkRCWmg2Z2YwTW1uR051ZFctc3F2eEcyN29hbkJkLUY3THpPVzVaYVRlcTRybGlrTGVsX3ZvTFJyQmRELVNHckg3Nk9uOUw3V2RyN2lZY0dIMW1jLWVQSUVTdXBTZGpuVE55cDBQcG01?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Iran attacks US Patriot defense system facilities in Kuwait",
      "source": "IDNFinancials.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQc3ZTWkxKMVlMYmdRNEhiWGJfaGNVeUdMMUJDRzJudWxMRjhKY3d5YU9YU2dxcEpiZlcyUlpJTXdfMTVTeTFibXF1bTdzVmlFSC1oUkl2aWEzNVFSbWs0OHlla0ZSRUNIbm1CSWJ0cUJ4NjRRU2RlOVBkMmV0dUl5OVM1X2RlalRLRW14X2pVb2J4Uk82Qk5oZ2xCcHpSS20xX1o2MXN6OG9SUHBlSEE?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "CENTCOM Leads Regional Security Dialogue with 12 Nations in Bahrain",
      "source": "centcom.mil",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQblNFQ0tGR01peXlRaWN0LWEwNlNuVGVnWF96RUtLWDAycDBLLXZwNWtwZWtLRGQtNXFpek1HRjZQZHZSYV9PQkJRd3FhS01IWTRvMUV1MkV4TnN1elhGM1BoX0hKUl9uVGMtMjhNQzlfUHl5YURyZ0cxemljQjNaNXdjS1dLUEhmbVJWNk5Gemxvd1lXWEc2OGwyeW9XQzBZRGRVeXdSWGVxMlhrTTJBbVl2SUxjbUFNN3Z3U0h4OVpCakNXRERiUWhB?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "One hurt in Kuwait after missile, drone intercepts",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1hdnVnVlp1R0JLRERvazd3dkg0elJNZmMwVzFqaFNyVVFiSDlGZDNaSklsMXJ6V3JrcXlveXg0SHI0bGdfaEk4X2h5QXVaS19mbUNQYTVUSEJiT0s1ODhCbk5wZUFnMGM0NXhzanQ5eWxISUU0M0hFNFdn?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "US fast-tracks $16.5B arms sales to UAE, Jordan, Kuwait amid Iran attacks",
      "source": "Al-Monitor",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQWDBwaUMxMXlmSXVrd2tfSHlINGdFOHIya19yZkpsQ2xIRnpHN3RvRVZfR05KNnFUOVN3S3czbTVUa1E0UV9HUXIxaGlLSVlITjF4ZXVQOTh2d01mb3V1WjdpTEd5OThFZVNmVklBSFU4WVRaN3QzeWdPaTlPLUNKZ3Y1VWs3alV5eTQxbkNVYmljemhrN3VkWTloUjBhZmFfZ0lGdC0tOXdtMk9jWjdmXw?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "US approves $16.5bn arms deal to Gulf states amid rising Iran tensions",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNOXBvUUpYRnI1S29BMzFwUmk4eFQ4Ti1PUlA0dkFUVWtLUU5Hbm55aWZFakExVzdJOVF2UG1sNmhNVEIxNFNxMl9NcTJyck82VHM2cUV0b3dOdERjTWQ5bkdOaGY2WHA5N2FkSHhDYnJ2NXJqWWY3ZnJ1dk9IRmhnOTVqVExCOUhvdEJvclVUOHJJcm5kVGxHTXlXWnFIOEIxelllejNkcHR0WkMwQW0xY2NmRdIBuAFBVV95cUxQbXZEUmktNWY3eVUzR3NlakxZbEZ4amxDb0swZzh4SHl2OEJFUzl0Mk5fZm1qbHlPWnlkY3hGc3NFcjVPa0ZTUy1CVFFvSFJpTGhEVnhtb3BBSkRrWkE0M2R6d1E4UllGYVZucDA3aV9odzI1UEtCblBqVHhNdGI4U1BoQVZSU2FqZWZRTUdiVks1UUNQSWR3Y3FORnYwRWtJUm0zbmRxOUg0LWFHY20tRmdHR0hVUW1R?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "US bypasses congressional review for military sales of $8.6 billion to Middle East allies",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPOUR4TjloMGRWaElBQnBQQ3RZLW1tWlpUVkxQaHZyRGZfVUJjRFo4dkx5YnZyNFFvdkVCT3U4TnVIQWNIYktYSDJiaDB6alROdVhlaHBuVloybVBCUldOMUFjbHQzODdleEJjLVRnb2JPOGYxWWdHaGRyTUlUcjRRZHlwcGhGN0VQX3JjeHJ3eDVtN2s2UGNxZDcyQ18tTjBnQkw4MUViMzBmR0FjaHBQeTRLSEFrQQ?oc=5",
      "date": "2026-05-01"
    },
    {
      "title": "As Stockpiles Fall, U.S. Sells More Missiles Worth $17 Billion to Gulf Nations",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNdWlKbUY3OU5neklQckg3Z2JnUUhFOVZNZVBMMHBkcXVmOERRRk9FVEdnbFFaSFIwSDlfMUxqZVVrOGJpTDUwdWNpTXBsRk5McVJJRXlxTmdqV2FvVHRiMkQ0dkZsMTRjemZEMmtWRnNqWGNFc0dkQ0Z1WUJ6cVVlSVluTUJOUQ?oc=5",
      "date": "2026-05-07"
    }
  ],
  "france→kuwait": [
    {
      "title": "Israel ready to attack Iran ‘a third time if necessary’, defence minister says",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPa00zRURxc3AzWU1IOHhmaE45VHB6VFhLSDVJVHNFdHk1ZjhMQUEyeVJvNWRFcjl5SnU4RlZQUmJCQ0R3MWlZbHdsMHQ3elBqZW1haEN1SVZ3ZVluV29UT3NLWnNIVWxFYWxUc3E1b0lfOUl4Q0JiT1FvZFRVcE1GS05kazJJeC1WTUk4TmF4eEZHMjFXTGl4ZzZHbUllZHN5TVR2aU1Oc3VWd3F0a2lNZVFOTUlLNWZYTnVRajRNZEZwd215M0E?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Kuwait and France discuss boosting defense ties",
      "source": "Kuwait Times",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNUzVLQTBGRkFQVkNxNGI2eG54bDBoWjZhVUU2SVQ3YV9NZXRDZG91bjY1ekhqNmFyN29sVE9Sb1hmN1pCVTJrcklaRVpHMjZmSDk2OGUwU0RHS3BPbUg1a0I0bnZYZHZweWJtY0xBbkgzc2xpaC02NUpIRG5aYnJSWUJNSDJUN3p1bFBqRFBzdng0SE9qaHB6MW1kOGl2ZDktR05zY094Z9IBqwFBVV95cUxOS2dGNDNCYTRTd1NfYkw5V0VNTW5Db3ZLQ3FKTU9jb25Bc2RmSi01eURkdXJINWhQZjA3bVVBX3ZralF6bzFncEhabWNGd2hXcDlEMkxFWmFpcFUwUEpQdDY0dFlmSmdlQmU3WFFTZGNIY3hQMklZT250MkJMZHVNay1mbmRQS19lREFRVmF5MHNzcnpvOFJva21WcGRTdjV1enB0cWU5ajJxbjg?oc=5",
      "date": "2026-06-20"
    },
    {
      "title": "France ‘Ready to Participate’ in Defense of Gulf States, FM Says",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE13T011bHQ2T1RSN014bWVzSmtNelZSajRjVTgwLTg0SkxsQW4tdW1Da2EzMElaNFY0YlhZTEhfOXhHRjdWbDNYUFJZbw?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Kuwait discusses possible defense reinforcements with France amid regional tensions",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNZjVsV0FITU5tTUM3ei05WnFYaTZWX3B6YjljMTJRNEl3UTI1d3RieWdKZ2U4RXd3TDVObmxYdDRYdUNUbDVKd0xSeENqSDFOd01uTlB1ZHEwc29aNHFlY292d3l0TlhLSDBKZlRzY1FFSHZQVS1kczdFaVBkVk12SmZBbTlHdEtuR2t4al9KcVlQNUJQd0FvQ1JhWFc5eG1DNzZVZzFtQ0FEVWU2ZlYyS3BoWXZWVHFTSmJDXy04eXU?oc=5",
      "date": "2026-03-07"
    },
    {
      "title": "France 'ready' to defend Gulf countries and Jordan against Iran if necessary",
      "source": "Le Monde.fr",
      "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNMjIzcTlteXh3YVRNVV82UEc1eUpZWXUxc1pDcU5DWkc0Y2VwRXpaV3luSjF6SnRsamtHUkZQZXFpdEZyQ1ZWM0c5UDdpekdhNnFPMm9tN2p5QkNMNDN4Sjd2a2tSSzFfTHVwcFBSZFcyQ0dSQ0RKd3hCN0JCVWo3Yi1EZEVBczZISXN1ckZmVjFTakJQVlZicTl6UnlxaGVMaGlCOUs1cUZRYUZwWjZ4X2dRX2RvX1M2S2tfSXpTRElNaWEyY3gzYnQweUlsWmQyT0xVTDBISVIyZmJMQm9Ca1VDcFV0RVY3c1E?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Israeli strike kills three Lebanese soldiers after ceasefire deal",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxONVBFaEc0LWZBVnZkM2NWaXUwM1QtZ0lRcnJUTTRFLUtsRFNnMGpWV0lWZEJpaHhrczAwdzFxbEs2emlzN3NCX2t4QzNRRzRRRTNtMkxMVUVVUmpTbFdJVEJZeGYyN2JIOEhjZl9OOENnQjFleS1oUi1NeEJMcVh2aXY2RGljeEdkdFRtUGVSWFNlMVZUTGUyTUloMWxobS0zdmRoaENSTWZsNVJvS0ctODZUbFBoMVRTSHc5aU1VRXpPc1NFWVEwaHM3Uzd2bEZjbEhlaVNn?oc=5",
      "date": "2026-06-06"
    },
    {
      "title": "France, Germany reach deal on arms maker KNDS, paving way for IPO",
      "source": "Kuwait Times",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNUk5tWWd6eTJGYlUyOWVHOXZBQWhwQV9kOU83U1RZM3dsbmEwdldvWmRpR2cyMzZMQ29RdFJQa2ZMTmxsRW5Mb3l3WWV4blNqVXdCbWVNTkVxajhCV19ublVXR2Q1Z0dXNEZUUHREYl9lYzJKS1BQZ1VjVnQydVdaZ3FEN2Q0Wm9OUzdCRGEweUFZUnhybFlFQW1NZzZ2ZklIbDVzSTZXVmhGZUw00gGwAUFVX3lxTFBUT0lDOFVBVzM0V2hUQ010Tk1xc3M2elBpOHZVNXF1SUZSV1VnLWtlNXVIb1F0ZTNWbjdHZlctWmJqNE5uUnk1VVpHdXFfeEIzdHQ2SXJVemhRQllFc25LQnRlTFQ2ZFdVSzY5YTNCT2tuazVOQUZkbEo1dHJDMU1RNEZpVld1UFpKbEdpbC1CYlNDZDRiMTV6Q1E2ZTl1RmdYVjlNZFAtVW1nZ2tVMVM2?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "There’s a wild violence to Iran’s retaliation and it has the firepower to do even worse",
      "source": "SMH.com.au",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQLVA0NnVTazBnQWtEWDBpZTJ6aFhYV3ZUeUtSN2FrZXVmZEZxRzFqU1h5eDRFZU03bFRBb3dYaDNXOGlnU1VMbFAtWFVDd0FqRFF5ZEVUQ291cUJtdkRiRzg2b2YyWEUwdjUyd3QzLXRFajhSNlJZZ0Q0eXhUVHVDY05wU0ExVGNDbFk1dkdjYWJQOW1ScmhQaWtZTDJseFdxWFI2M2REN1ZPZTgtQ1NwWGY1alE1Q1ZEODhXaF8xS0RXWHNqU1hhTQ?oc=5",
      "date": "2026-03-03"
    }
  ],
  "united states→australia": [
    {
      "title": "Air Self-Defense Force begins logistics cooperation with U.S. and Australia",
      "source": "The Japan Times",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE14aE9BYWdMWGRnX0JrUmVLOHhCYnlIZEYwejNic29vRHVwVjc5S29LV2pVUmJVbWowTU56dHpqNHdHSFo0LS0yRlBTbTFra2JZTFdfWUpVTWVhQUhrTWxCWXR5WUwtNTFNOERmcFN6cG5YYjcxNmRlUg?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Australia and Fiji seal a new mutual defense pact in a push to counter China in the Pacific - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOS1JraElaQ2Z4bXpQUlRYZWh4NEt6dGdEQ2JqdW5CbXJwd0V4OHZJZnh3Ul85SGRXbG9ZaVdYd3BMMGd3NGUtV2tURFpyTmNiUGdtVDJ4eTNLZmIxc09MSFpvTjJIZFJITG1QSy1Ia3JYOUQ5dDlxdms0cjQ3cmd3U1hQQlJOZk5VNkpyRUN3ejZ0b3EwWFhuT3VZU0l1cDgtYnN0UdIBqgFBVV95cUxOdGZtX0VSOTctQ0dTeUNvbXdtRW1qU29zc0k5OUFFUEhWU3VQZnhxejNjNF9XZzRtVUJPSDRpZ1dzZlAxdWpteGhUVkpWUzcwcE5oNFBxTzdSVTNYSy1aenl3NVhpTUxCcnIyZWxPQ1hEekJxZ1hpeWw0M3BLVlMxY3RjNWJ4Q2M4a0pVUjFQMjNUYkxySjVmTkVnYzlHbFRkZm1MVzctTHhPUQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Australia fires SM-2 from prototype ground-based air defense system to intercept cruise missile target at Woomera",
      "source": "Defence Industry Europe",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPeFR0TkI2VjlaQUJ0NHhqRWdNdF9QU0RTZGNxODVVaUQxNzZJVHFDRnlwWTBHeHRPZFlTQjRoekJZX2tpdV9LX3phVVQxbU1raFhzRHB1T21oanFhc1R5S0IxRDZLNlFXb2xkVXBrTTBQT2pLVWtDODhHYi1sNDN1d3ZYQzg0Q1dsdWtYeXA2bmRWMDNMSk9EcUROLWI5QWp3TXNaLTNEUlhfT3JjT1FjRGk3VGtIeHRxdi0za1dpUC1fSnZXZVVIMzVKZ0RNN1VGYkZzN1Z6d3VFdw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Australia, Fiji sign defense alliance pact to counter China",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQRG1RekV5QUJzcWFmcGwzXzZJSENVVGZaSTdna2wzRk5CYzROdzh2elJVYURvV0NEQUZiLTFsSkpqbzRTNGZ2ZjA1bnlnRGFtaEppSWxxTUR2MEpOTDR2RVFvQVgtMW5raDQtN2xBbUJTLUpUcDIySjB6eTBqWEduUUN4UFRwX29jdVhmYUZuWkh2SE5iNWtMQ9IBmAFBVV95cUxOMzFITFNtQmVtUENVX2tmWXJQYlZMQ2tPX2xRNC1mcTNHUE13MjU2Ti1LUzZxWkNTeElCakJIUWVxQVR5eVgzbWNya1pqQlJ5UGpWR2J3NTNjZFNhNmdNVlBydVR0bmhzUm0tVTRfNkFoSG9wWDNTZVZpemxwR0JxZG9QZmZFZjZpN2ZWWHE5RTFEcGRzcVVucQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Goodbye Indo-Pacific, hello first island chain!",
      "source": "Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5tejNiaU9SVFlUSEpRaWZncm9uTEFYYXJPZDN6dWs4NllJTHFCRWZYeWRqQkY1bkFWb29WQ0lqaGczWXkybjZOWnlwOVVidU5kMlZlR2VzQm1Tc0hKMmFYZ0NtNGk?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Everything To Know About USA vs. Australia: Storylines, Projected Lineup, Predictions",
      "source": "FOX Sports",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE10R2JuNm9vNUZaMnBCT0d0RWRCUEt2V2E5UlNmX2M2ams5ekJlUURrbGZTQmxJN3Z6NFpQTnBtYkJrVGtxTWJ1Z0RLSTczdFo1czN5NTBIMnRFN2NJVF9JUTAyVTVqajZsdGNjLVdjUFE4UlltM2NzUUUwYXAwd9IBfkFVX3lxTE5tZzRJR2RMS25yLXFuWmhGeVlaY3ZpazJ0Zmp4WUQ4UkVMSVdQbUFjVlFhSXNQMkR4SHJKdzZGZXR2aE8xUWhLY09pV0M1OVkwUGRwTVBVdjBPRFA5MHVQMl9XRzJ5NHdlZ0tZcEJXZHhjdFdSZGRnQ0lhZ2l2dw?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Australia agrees to sell uranium to India, ending a long stalemate - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPQ0NVNDVtY2xELXN3M3pLbVdCR1RXdlR6Xy1pU2x1M0QyRV9ZWEVlMDlDcDZmNWVIMTZmZEEwS3doeDRCUW9Edms4NzNwaV9NcjdodURqXy1FLTBQZDJKRFZZR1l5MFpaYjhlNDVFaWtydmhmSzdKcTFqTzdUWjhQVE1aZ1ZTOGtnallnRHAzcXRPem5xVzQ1dGlmQXBuQV93OFYwcmVaV09hNHFmVVFfRNIBtgFBVV95cUxPWi1uNWVQUklRVzdZb2VpSkhyWW1HXzFNVzJ1SnE0ZzQ3bHZIZ0ZvMWtsZlZFX0xHdExFNEpBXzVVcXpnV29IYkdqMVlxRmVxeFRTOHhwM1FzN192TDN1TmVQV25fSFItcl9KQnUzUnlzWTRGZ2J1V29qME9qbkhHbFd2ZmNBWjQ1bWE0TEZGbHlNd19VTVVBSXg1Qk1lM29FQnM0cWtFenNDS1UxcjBvajY3WWhTdw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Australia scores its largest defense export ever with a $1.75 billion long-range radar deal with Canada",
      "source": "Fortune",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNMXBqSno4UnVGbmhXa0IzN2FtZ21JM1Y1dDBQeTdEYjJVZWF5V3RWdHl2cGZOZlhVeWhuRlJQTlFnNWk4XzR5VXp3N1k0QTNTRjNveUlpcnp0VUlqdHZYck1VOGw5eFVpNThtMGV1R3NkN3FORUlUMnNhNlNOYWg2VWhWWHh0TkViQlFHZGJxU3NjeFBvNEQzd29wVWt0REdxa28xalZnSnVFQQ?oc=5",
      "date": "2026-06-22"
    }
  ],
  "spain→australia": [
    {
      "title": "Committee Probes Australia-Spain Defense Treaty",
      "source": "Mirage News",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQaGtyODZZMWU2QTRsTEpoUVdxSldPcHFCMVBXVlZybzgxdzJaeG53RmhxanZxUkNzb1ZDd0poa0tJejJqV05OcWMzMmRmTmE0bUUyWFM5dmhmMzJybDd6ejZmN1pKcHBVYnQ0SlJfRm5FWE9xekhxYzNzdlp4d3F0S0IwaFhCLU5ieHJn?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Leaders of Canada and Australia urge Iran war de-escalation, affirm Iranians can't have nuclear weapons",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOWnVjYzRGVERUM0JFSlJVeFpMc3FYNzJfb1VoNEVfVEthV3pMT1RrcmFwZV9JbXZJWElFQmQ1NDBuRHFvT01qaFBNRUxjRFRpMmxMUWJBLXRyS2stZXJSdTEyRmF1emxEbzRNU3RlRUJXY0ctWkxQSl9UdjF4Vm1OeFpVLU9vZHVjdk0wVE1FcERXU3NlVEhndmhvYnlMRVp5Y2N1Rk5xVHdDUjFRanVXVTR1U2NSUVpwbVQ1dzMxUUFBZ2xyVFZFN3JxTEZOMndxdUHSAdcBQVVfeXFMUFU2WEcwUENCLXpQTEkyN1BqU3U2LVM4VTFDVjQzcnJESExaa0VHNlF6M3pPc21CRkJCSDZPSWlwdGsyd1g3US04ekhnN3dvUHFDSEtRRkxJblNvUk85bWpsamM0Z1ZJRDkzTXRzQklJcEtoSldZMld5bWE3T2g3U2t6VVhmLW1PbXVqNVlmRFFscnJLRGN6TmFUUkJ4SUpRZWpfbFhEaVRSSHBLNFhnTmJEd3RIYTZhV2ZHaVQ4TzZSejhkYVVBMk5nbzdOY29vZ0pyTzNrVkk?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Why have Europe, Australia sent military assets to the Middle East?",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQVHhkN0lIcFI2U05mT3A2NmZrT1lvYWtuYndXRHlReHluLXQ5TzNnMHJsM1RGbW9VZEZnS05qM2VKMXNQd1hVT3JqM2JYcml6YmJxdTNtVHdyME1idnhraUxialBBcnp6MVJNR0VfdktRT3g1elVhNU02Q0xxNFRYRlhOcVpNc2hyMTd2OERVTGIyNXhYa1prNkkwczdkSEJnZzZOMjZ3MEHSAa4BQVVfeXFMUFp5czVXbDkyXzIzd2JmTzNkc2tTVmFrV3d0a1h5c3RqMjVZZGlfb1RKTF9qdUUwbUJYby1EZVNNcWhHenRBdWdOeXZmN1RoeEx5anIzbm5vVm5hX2FfLUlKZUhIMWtNTTRBa1RNaC1tUTh5QXVaSGhhS2ZHUEV6SnRFdFVpdDNERkIyYTN4ME5uZFMwVVBBSnpTSm1tb3Q2emhzTTB2cHBwUDhPanVB?oc=5",
      "date": "2026-03-06"
    },
    {
      "title": "Japan, Australia Join U.K., Spain in Refusing Trump’s Request to Send Warships to Strait of Hormuz",
      "source": "Defensemirror.com",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNb2VXLXpVdm5BWlZJR0lYZjlRdmNjVzdEQ29oOTg0bWpLa0t5Ql9OckRYaTlDbktLbG8xclFPMzZrRDdZVnNVY3VNT09QVWVOYU1odW5hdTRHaDh0TmtFYmh2cW5fZ1hpaXVJMDh2Ri1XM3Vaakprcm5NR3NsVE5zallHUnFBakE3NVBhM2NuWC1RZkFfVlZ2YkNFVHFoT05vd0VPdW8ydmdKcWgwZmwteEQwMHBsUWpoRVJ6OG9wNWs2Yjl3cng0NjB3d1gtWE9lQ1JJ?oc=5",
      "date": "2026-03-16"
    },
    {
      "title": "Hanwha Aerospace to share K9 platform with Spain’s Indra",
      "source": "The Korea Economic Daily Global Edition",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9EekY3bzFIRUtXbEN3T1pTOWdhcXFJYlFuckVCMTRQbklqTUlNWEhyYUwyMURpQ3IwVWtfRnRXeGdrSGNMbEgyTFdmNWw1SFlGd1dxenhQdDh4d2NsdFNtdjVnblNyMXlBOEd5NHVMNXJPNEZ1VTBn?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "‘Time proved us right,’ Sanchez says in defense of Spain’s stance on Palestine",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQLWJ5VjFWX3RYcEd6U0JZOHVGX1d3Ty1iNWFDTTJVd2Q5VGRSeVdTdmZ5MWhDUFFQSXRUVFdUVjNXdVltMEpNT3FEV01ncnJNX3p0QVhSWC1aS3pIQ0N1cTBBMVVDX0JueHdObktpTEtsNUlDdnVyUC1PbGVCQ0lsRG5xRWtLMHJ2Tl9yV1NNdzNhd0pyTHZZWmpaUW8yV0Z3OEZYRWpuUHNXdlcwQWlOVEhFRVNWU1E?oc=5",
      "date": "2025-12-15"
    },
    {
      "title": "Australia and Spain reject US request to join a Red Sea ‘Prosperity Guardian’ naval operation",
      "source": "Modern Diplomacy",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOUjRFNk53QmdCeko1Q2ctWE1TS1FjY3JTcVBRVHZUdmwwcWFWb3pRQVp3U2ttTkU4aDl6bjhzR2pqNlhrNnJWYmZXbndRTUlyWVBLTFg2UldVejNMMDRBUjkzd0dZMXNEMkYyTVJKU1doSGFyZGtsTHVDQUVmWWdMeXZvUUEtT0xfTlFuWTR5eHc3MnlyVDZzZUVocG0tNFlJWW1IX0NnYlpETWJKbFpFZXhVdGk0ODgyVVFla0FrNENwOTdRdzZwVVNR?oc=5",
      "date": "2023-12-24"
    },
    {
      "title": "Australia is selling arms at a weapons fair in Dubai. Are they destined to be used in Sudan atrocities?",
      "source": "The Guardian",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQazFwd3ZKeEk4MXFqTjVtR0JDUTdKMkppLWdRVzZTdnFGa1IyUHNQdktMUjEyNUxLSlZnMXVFdWlvc29IclB6NzlYSm1vM3d2SXZkYmRnRE81bVVGOGVyODVkbFlyYnJWbml3cHVHdVpicVFlaXpCVjJFc1RXMkN6WC14SGZ4ZnpZb2tRRXhvd1VEdEpubFJzb29CZVdOZWN2YjhCT3IzRVJUUFo4emRyUlF1SHJSSXhWVm1xOUhTS1Z1MXd0QUpB?oc=5",
      "date": "2025-11-16"
    }
  ],
  "germany→australia": [
    {
      "title": "Germany, Australia Team Up On Space Security, Laser Weapons",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNMnFaMk9IeHhnVFZyYm5nV0ZwRUxpb1IxRnRJRkhBYkpTOHRJdmdDcUFQeVpRcV9nSnJlSENTMUJNRVo5VzBoRkYzc0ZQbDMyUVNFRWtIUU1ocF81eHdWVHpjcERLSmNnVmJqVVZRTUwtQjJOLVhBT3JjXzd6b21Db01naEV2VzF2TUdmRnVRa1pjdTJVMkFNeXhUSS16bmVNTUg4TUlTR2lIM0t2?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "DW News. . Why are German armored vehicles being manufactured in Australia and imported back to Germany? German Defense Minister Boris Pistorius recently visited the Australian headquarters of German arms manufacturer Rheinmetall to observe the pr",
      "source": "facebook.com",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxPN0RPZVk0TFF2UHpUdVpjdnRxUDgyR2FBbThoUkRXVk5MYzZuWElsZ0FIcGJtS0IzMDdaaTBoN1hidXZsLW85ZWhlMXozZGd0NlM0TjJsb1Iwb1V6MXRZVm5ISm1YMWQydFlMUEtVeUxNMm4wekVsUGttZVNsRHZWaGV3dDR3VGZ4UXJGWHNjdVZWLWM2blZ3WUN3eGRYVzJCZG8tVU1zVWV3OUxWaXJpaXlMVEZRWmdBV1VuSklZc0JsZFNoZkozSUlxenR2MHFTYTNhMDljNmRyYmU5OXZwamZB?oc=5",
      "date": "2026-04-05"
    },
    {
      "title": "Germany's Pistorius in Asia warns of a frayed global order",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQMjNtWmpwTzd3bW5yNE43UHljVHNQYzdPM0lFSC1LbGVoMWVVMTgzQnNPUlpZazB1MXhCTm9ZUHlpT25telBfTmk2T2E1OENBM1ZmTldwRkk0MTRxUnpfd0pYaXo4R2JMMG15R3VSMGlYUVFUUHYxVGlMQlBZcFkzVlE2VDU5czRMdUZEWlV0S2hFS1l40gGUAUFVX3lxTE9UeEhaQWlXeGJ1R0VZcl96RDMzNk9ndEVFMGhFeXA3TDZlQ0VTazk2dFFFZkptNlB4M0Y4VEFmMlJFUVljQzdlS2tyNW5hN3RiS1drYjdMeFBJdFM3YTl1dGVCYl85ZGNKVkEyMVJGQVBlb0E3dkNzU2xTcnpyWEh0UnhHNUgzVDRqcTdWY00tR2pVY3M?oc=5",
      "date": "2026-03-30"
    },
    {
      "title": "Drone wingmen face off at Berlin Air Show in race for German CCA",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPUF81VmZsVzJzRV9IM3dpdjB1NXJ3NXRrT1p4NVN4YjUyU1VYQVRlLTA0UmdXcXh6eEdKSkxKNEtnalZ3Y1VCYUpQTkJyeWlsT25qMUY2Nlk5Zkh6ay1BMUttN2EtNzFmeVl6YlNIenBJWnhzQW8yTjB1ZkxJWk01R292TUxTRFlCLVRMVUYxUEs2cW1KZ1FTRHo4TWZ5RHBuUXVV?oc=5",
      "date": "2026-06-10"
    },
    {
      "title": "Germany eyes Australian Ghost Bat combat drone",
      "source": "Taipei Times",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1SdEhtT3gtOXJfTmhQd0JQN2o3cktXNE5vVkFqaDYxWVM1UWNKOW9TaExkRlNMTEdqNEVXbFBFbFBkOHZIekZpSEltMlUxM3pvbnlmR1JfVnkwVk9fejFJVWNmNlUyemJtLVkzLWdKVF9DXzlZelBlbA?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Germany, Australia deepen defense ties",
      "source": "Hürriyet Daily News",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOcGZKN2Z5RjdORGVkWGRNbmJtSnI4M1NkSjBIemtvd1J6Ym1tdkRFZTg4ZkEyY2xzQjFHTnVGdFN1ZFduOUtXRkFtcWJRb3ZlZ3BHMjMxbmNGYjFUSnlBSkcyVHViQzZzNUFWTi1Valk3dUFlS3lwYnZXN2Q0TVV5cmlCUlM?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "Germany weighs buying Australian-made combat drones",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPQ3lfOS1WWW10RnJxVVFBcDdXSmwzYm5wZ3ZEWS03RFRSTUZ1OEZGNy1kc1dzd21ERXEzaEJ0NUJ5UDRiXzM2V0xCeFZtXzFVdGlLYWVsdmJoMzdmYVpIN21PNmdNY2NjXzZjVjZ3WnQ5TkxaMkl5QXQ4WFM3dzdkellYV0RuVzNFT2F3?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "Germany, Australia team up on satellite defense with space monitoring network (EUAD:BATS)",
      "source": "Seeking Alpha",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNa015WXJuVVRXeW5NejNpRWZpcVNqd09GdHdudEVzclMtaHh2Uk5xNkd1M3h2MV9MQWRjTmdqWk5uYVJhTUMxc0kyY01DSjRudXlRV05vNmtieFlBTFczaE9wc3JYdllaaDdvNUp1Yy1kZ3gyYTl4aWlnckhwTkU4cG1Cc0ZWM2JvYlRtSDdoRGU4NkI1MGo2X0xHX2NwUE1QUVhqTXdhVkVMdXN5azR6T2t5YUE?oc=5",
      "date": "2026-03-26"
    }
  ],
  "united states→uae": [
    {
      "title": "Trump: ceasefire still in effect after mutual 'love tap' strikes",
      "source": "Ynetnews",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE5nRDNDVUNDaUxsUTJwUHZKSnZXT2pCWU1JMkQwa21fOEJhbGEyV1B2R3N0eGhZRS1rb3VwdjY2MDB5OHZLTHFNWkhJcjJzYVVhWFV6RGtsSQ?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "KOTRA sees UAE defense openings for Korean firms after Middle East war",
      "source": "Aju Press",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1meEhjckhndmlqcTd6c2V6TFpMYU9aVnRRd2Jtd1BCbHBNRjI4QnF4a0N4UThzbGsyQVZ1emhLbnpVQlRzNkhwaW9wQ2RTUy1JdnItY0lvTdIBV0FVX3lxTE1meEhjckhndmlqcTd6c2V6TFpMYU9aVnRRd2Jtd1BCbHBNRjI4QnF4a0N4UThzbGsyQVZ1emhLbnpVQlRzNkhwaW9wQ2RTUy1JdnItY0lvTQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "India In Talks With UAE For Supersonic BrahMos Missile And Air Defense Systems Sale - Report",
      "source": "i24NEWS",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNYWlJdURRejdpVXlGSFBmTUxWYnNBb3B1NkNES3NxWENxX0tGcDhLRDBXSS1PTzFfYlRBTkc2V1JiRWMwMFg4bUxXVFdQSmxadWMxaTZGUnFpQ1Zhb0tqS2QtYnNSb2xBNW93aEhDNXh1OGpacV9RRWdFNGJpSlRCT19COHVMbmViUWxZRlZaRm5tM0s1aWYyNnRyazdjTXJORmlBeWhyZkdFQk5tcXl1YWtxcTJpUG1KRnkzUVg1T280S2FqR1dPeEo3eWxacjBOU1daXw?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "BrahMos Advances West: The UAE, Russia, and the Next Phase of India’s Defense Export",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNck1uNV9Td25qdnJodFpvVng3ZkdHSXZ2bUY3c1hlTWhyM1JRcUdIX3gyNVIzQTNfeGpWSEU0bFRnd2Jma3RtV29QVWxLakVWNUVzUU81ZDlDYkZZa1RFajB5VmMzeUVQUlJ1Sldaa0t6MnQ4MkFDQldJLVUzTXlFa2pHbGRBYUlCckpxaDdhYWxzaTlPN29HSG4tckloTE10SGoycDJpWW9wdDZlVmpvanhTNA?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "US approves $8.6bn in arms sales to Middle East allies",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdWJWTm5KbnBCeTdWa0VjbzJTRi1tWVBsQTB2RVJOYTlFdkhoa0tqN18xTEFqUGFHeW5SUVN4clN6T25iTXNVQTZrdXk3VzNPOHJxX0VldmF1WUZPSVhEdkRxZ211UGJwbjZqc2lsX280RUN6RGQ1S2xHQU5PbkVvdnlYSVJTdm80QnF2NUU5T3VTcThDa0Q3cURyWGLSAaIBQVVfeXFMTU41LTl0eWpDajk1XzRfT1h5MEdpU1RIT1BHRmhwd2pLeHlxY2Z5Qk81NjhwSFBOTmVyVjdHc3lMVHB6TElRYTV5QmlRbzBSQ1J0cXRkTFJ3TXhBaXJwQUJUaUZYc2dPcVRhV1JyaEMxckwycnU5WXYxaHZuMXBua1dsek50ekVqNk5fUXotTFo1ejNhSUI1T3UzbmRuQ2t3NkR3?oc=5",
      "date": "2026-05-03"
    },
    {
      "title": "US fast-tracks $16.5B arms sales to UAE, Jordan, Kuwait amid Iran attacks",
      "source": "Al-Monitor",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQWDBwaUMxMXlmSXVrd2tfSHlINGdFOHIya19yZkpsQ2xIRnpHN3RvRVZfR05KNnFUOVN3S3czbTVUa1E0UV9HUXIxaGlLSVlITjF4ZXVQOTh2d01mb3V1WjdpTEd5OThFZVNmVklBSFU4WVRaN3QzeWdPaTlPLUNKZ3Y1VWs3alV5eTQxbkNVYmljemhrN3VkWTloUjBhZmFfZ0lGdC0tOXdtMk9jWjdmXw?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "US bypasses congressional review for military sales of $8.6 billion to Middle East allies",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPOUR4TjloMGRWaElBQnBQQ3RZLW1tWlpUVkxQaHZyRGZfVUJjRFo4dkx5YnZyNFFvdkVCT3U4TnVIQWNIYktYSDJiaDB6alROdVhlaHBuVloybVBCUldOMUFjbHQzODdleEJjLVRnb2JPOGYxWWdHaGRyTUlUcjRRZHlwcGhGN0VQX3JjeHJ3eDVtN2s2UGNxZDcyQ18tTjBnQkw4MUViMzBmR0FjaHBQeTRLSEFrQQ?oc=5",
      "date": "2026-05-01"
    },
    {
      "title": "Trump Officials Bypass Congress to Sell Weapons to U.A.E., Kuwait and Jordan",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOTS1fbDZYZ2d0YlMxWkZkaVFhQU81bzFPMVJnbnVfV3JFeG9xM2t2b0RxY2xEdE8ydDFPOXIzclZLV3hwLXZ2MHZscGl0RzZlOUVWcUF6cl9GZXZBbEtUZG5PaGVOOEFWVmtaektQOFR0Z0l3VVJ1RGZMTWhpdjRzUnJwVVlxblktM1J6eGtqQQ?oc=5",
      "date": "2026-03-20"
    }
  ],
  "france→uae": [
    {
      "title": "UAE, France renew defense pact after Rafale jets controversy",
      "source": "Al-Monitor",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPMUk0RUs3dy1tUzBNUkppRS1yMVVzdkNFSnczQ21iZFR2eVotbGd1WkgzTlliTVNuWEF6ME4xVTItQTB5bVU0M1AybzFLRlR2bmE4dGRrTThtdmRYVzhVNkU5ZUwta0N6cGc3alBiOWJfSlVHaHllNXR2UTFHN29JWW1VVm9jeU1xcG5PS3JEVGJsc1FBWEd4RFkzdHBLOFV2bmxzS1VxVQ?oc=5",
      "date": "2026-05-19"
    },
    {
      "title": "UAE’s EDGE Launches European Subsidiary in France",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQSW4xMlpfdVNQYUpxb05CZlN4VnEtT205akd5RDhQRDhQNTJlVkhRWlVnb0tNZVVyUk1UTHlWMzcwZjRjbWVUbmxEczNmVXRJemtrRmROamNVOGhmOHhSVnd3M1JoUlFrWWptUHFjaTJnR3ZQQUVPT3ljQlNIZjIweGh30gGHAUFVX3lxTE5PZWdxSktxbWlSNjAtdktlNUQxdGd2VTJ6Ym9tbUp1ZmNnelJsRnVoTF9ZS2R2WFdNNXpFaU9tcm1HOGdrQmF3RWN0aHRIanc2SFZmRGw2R2poZi1XOWRRWXdQNERiWmxoNDV2akhmNmZFczBXOFZvYmhxblRtVk1wenR1cXJTUQ?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "With new Paris office, UAE’s EDGE Group sees Europe as ‘next large market’: CEO",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOREk3OXBrNTA1cHMyRnJleXZuODBMbzlNcUFsX0VsVmRSM0R5Q2VXNUlYYlJVU1E0OEYzdHRQZVc3LXBBeXA3LXBkSUlmV216NnJNTUx0UTdXbTdMNlpqNkxxeGpPRVB1aXRKSXloUm51QTU2OXVaRW9WUlpFc0VhVlB6alp1ZDlEUkpZUHRMbXJ6YXhIYklVWVllSkFNSk1lSEZBS1plRFVnanVSTWJMMQ?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "US-Iran agree to initial deal, Peru’s Fujimori expected to prevail in closest of elections, France eyes UAE as replacement defense partner",
      "source": "GZERO Media",
      "url": "https://news.google.com/rss/articles/CBMihwJBVV95cUxQYkxrT2ozLTl1Y0p0eVB0dUR1Wk1UM2pndF9kVktJbENMcGk1MXZpLXJnTXlTYmFfcFVuemhFVFZrMUJMUkxpVW1BMllQQnFiLXY3UHJBVWROQlBIaVlfYUd1MmgzR3V5RHNvWkVXSVBjcnN2XzZ2OFRERVJGY2NVSjVmMEgzRUp6a212Q1Y0R0pyWm5oSXJFd3pUeUtHZ1dfVlBXWlotYy02el8xczh6QzRHSnQ1YjJfNkRpeGNVUW5RLTlVMFVLbTlNbmg3M1JrekRoT2FVdkh2U0V5a0oyVHYtbzUzT2hUT3dHYVRaVDVfWWp3bFoyOGdQc0VOTVl1UlFxOEhNY9IBiAJBVV95cUxQd0VRZll5eUZNelIyM3ZOT3R2RG5XQURfaWZNVndnSjltVWg0d3VCN3ItQlFpRjg5ZExxTUtPRFNrTmMzZnIyRWNpaEpXSUJqWkJaaWlnbWZEdlVPWUl0eUxCTW5JYjl3UmNTSWFqeVo4NkFadDRkLTBrYXdGaHJEX25GQldGek12VVJUb1FxTzdUN2NyeEZVS2tWVlplNzNxZ0tNemkxTDNhRTVDRk93OV9TTzh2YnJQZFpkMElwelBiQkNabTBGMC11VkhqSnhVVS1ycW0xd0hsOVFUS1RpWjVINkoxdGUwNUNNRHRGcUdlcGJKRlZxZ3VJaGVTTE9HOUYzLXJBTXM?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "Cold arms, fast legs? Netcompany Ineos roll out unusual pre-cooling strategy at the Tour de France team time trial",
      "source": "Cyclingnews",
      "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxNeGVWVkdxS3I0TWwyMkVabWNFeVVrSWw5b2RMX3JBb2l6TlhsYWh3RkFPLVpVYzRjakVSYS1md2VZMHNHc2NvT0M1S2x3VW9nN1IwVjdzelBmQkZqR05hY21QQndYdlhncGhTWkQ0NjZmUU9XT0laUHZFZXhaWEtEX0UtODZ5OXA2QTZBY0VlVGRBZldLUU1WejczQ0dUZGtWRVM3bGxmWGZtb21OMnVNVDBoZVhocmtYXzBqVjVSb1FJNDc3TzJ4X2dveHItWEhaS1FVRmtraHZTckNTeDJhZlgwVV9DN3Vz?oc=5",
      "date": "2026-07-04"
    },
    {
      "title": "France left to fund Rafale F5 alone after UAE withdrawal",
      "source": "Defence24.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNRkpSV0lDUEJhb3g2Z3Z3Z0FrT1Z0WDFsTFo3Tm82Y2Nta0RYVnFiM3dCSWRMaE5ZYk9PQ0d6VnRuMFowaUVZb1phaXpJVFF4Y3Vzelc3bUpoS3NZdF8wS0g3Z25QTWt0cXVtMWZGcU9kbEJOMFl1eVpJYnZBOXk2MUlreFdBWmtTQnZxS3h2R29wSDdk?oc=5",
      "date": "2026-04-02"
    },
    {
      "title": "South Africa makes record arms sales of over $550 million to France, Turkey, Kenya, UAE and 38 others",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOWVkxU0hiSTdkS2RXRW1YUzFsV2g2UmtmeWxvSG9NRHI0MWhaU1Bxc1hWdjdhbEhHSXRObm5QQ0hHNnFac0xieDRJeWFmUFJMM3FyQ1VjN1J0cVM2cndOT3NiOXQ0Q0ItRUlGNTc5Rm9nWXlJc3dFckVrRWFkNi1OUUlwMjU0akdib3dwaGdQaFhpZkRLcG1sQWpQTm5MT01WVGNJTGo5TVFQMmpsYUM5YlAwMmpJTzV0dXh0X0xVbVpKcDUyZVZMTm1DTDJ0UTlwanUxcGRFUTRfQQ?oc=5",
      "date": "2026-04-08"
    },
    {
      "title": "The UAE denies shipping weapons to Yemen after overnight Saudi strike",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQSnozbmhFZGpDV1JZcnVqQldveFZSbE1JV0d2MTByci1CT3NEdXNyN1lUamZPOTZCMjJ1WWxWYkFtTmNJVXhDM255VGdBSEhzZnUtYlgxM3lfVVhEY1puZGNYamc2V2RhZjgzVThWdHlaUDhkSFk3UDRmOWNSRTdEMUhfQmx3a1V6aWJYUTdfb0lUS2V0NG9WRFhOTTByUGhtSTNGcUd4ZXV6LTJIV2c5bmtB?oc=5",
      "date": "2025-12-30"
    }
  ],
  "italy→egypt": [
    {
      "title": "Flintlock 2026 exercises commence in Libya – Egypt and Turkey participate",
      "source": "Egypt Independent",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQXdseUZjU1hjNEJXXzZ1TngtMk5Gd1dfX19ZN05YVlRxdGY3UElQb09XTXl2NEY3SkxLQUJiSHJDMmxHWHVoXzg1elZ0S1hFOEZMQ3ExWkVlNU1mT1hnR1lDR2p5VHhnd2U3SGRwVjMzVi1zZnpSdjVuOG84SmhKYzliV0NtX3czMVpVV3g4MS1PRC0tTGc3ekZ5VDJzSGNUNmhoUnZBUVU?oc=5",
      "date": "2026-04-19"
    },
    {
      "title": "Italy Should Stop Arms Transfer to Egypt",
      "source": "Human Rights Watch",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBUUkwtU3U5eVlfWlZrMlVpS2k2c1Brazh6WU9NODl1Uks5R0w0NzRHaDZRanB6NTdCbncwS3cwa2wzYkt6U1VybVg3djhMbUowZk56RXd4YV9kcEpCWlVDYVdfN0VyeUlhOEVFc3VzTGNtTDZxN0lobHIwZWpoQQ?oc=5",
      "date": "2020-06-16"
    },
    {
      "title": "Pressure on Italy to scrap planned arms deal with Egypt",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSUQ3ZGtzUGJNX3ZHZTdlQURwUHRVWnhNSGhVc1pJOHVfTkxLNGQ0UmU2VjJObUc2dmlHZ0E5SXZQMjk5NGZFald3OU5xVDc4djNzZWhmekJGM21TcmlNMjRqb2tHVVVCTXBaXzNSZTB4a2l5TVN1dG9iU3A5ZWhpNUVLdzljYmZsRWNEcHR2bFJWMVNoWFctdjRSWG7SAaIBQVVfeXFMUEZiYjYzQVdtVDVYaS1nZlNWT05wRTZObm1hVkVRWFd2RVVtTjVXUDlFOEJZQ1ZNSk4xNDBWQWVrbkY2YkdZN19raFZrZ05WdmRHQjlJWWg1TTRKejJ5N05RVy05RmxLSWNzZURDby1YbkpDUVVyTXlHWVh2ZmVMa2NzejBrWHZHd0RwVl8zMFo5S3Y0b3RubUJPTkRES2t2VlFB?oc=5",
      "date": "2020-06-17"
    },
    {
      "title": "Sisi Intensifies Arms Imports to Secure External Support for His Policies",
      "source": "Arab Center Washington DC",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPWWgwbDBCcTRHT0pCQ1dBRXgwQi1NdjMtR2taejQ5US16VkxGMTVpYmNFNlBBQ0FkX3NOT3YxZ2JpVElkNktpWUZqdW0xRmNIWk44Z0x5YnRYWm9zcGJrQi16VUIyS0Q0dkJmNlBDRlFiR2YtdC1rYm9iNmpWYUthLXNRMjF3bmxCc2VHaUMxZG9jeFpKNkdVMTM0M0RyZW9pMlFjMExYQXRzZVFW?oc=5",
      "date": "2022-02-28"
    },
    {
      "title": "Egypt close to completing $3bn arms deal with Italy",
      "source": "Middle East Eye",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9JMW90MXJhTktaWURuRHg5RUk3WGdRVGVGNUdVZ2RuUENpaFVuQzZyeG45Tk1GeWVLTUEwM0Ftc2RRbU1YXzZSV2x0SnFZWWdFbDMtOEtTM1J4UWc3ZllES3paZndZS1hHLUNmSU1iTlIzcS1yOXNMOEhRZ0kxUQ?oc=5",
      "date": "2022-06-06"
    },
    {
      "title": "Arms deal could pave way for Egypt, Italy thaw | Amr Emam | AW",
      "source": "The Arab Weekly",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5MZVdERl9UQ19NWGhfQ0xYbGJNZ0RNRThNcTl6TXVHMmdtbW1sbUplWXFXUHNWUHphdnR1ZEJwbDZSdldadnI5R2dVZ1RYRS1iLVRxcmR0WWI3MVpxX01LZVNKMDdidW16Sm96dTFwRDdFV3Itbmc?oc=5",
      "date": "2020-02-16"
    },
    {
      "title": "Egypt−Italy defence sales navigate a complex course",
      "source": "The International Institute for Strategic Studies",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNTVdTMnU4SkswX3hCQkkyM2VEZUhDSXA1aEdMbzYxeC1rR3V5Sk9laWpITXp5cGlGR0VkaTZaTlNVQ01DZGdrQzlyeW1QRVhoQThUMmhGdFRYNE9JRGFxdW9rWFhPMkZCSUJIeFdCVFNkLUZBMmxsTDR2aGQ5Z3F6SnVQb3FzZFdDSmp3X0VwTDR4UQ?oc=5",
      "date": "2021-01-29"
    },
    {
      "title": "Egypt, Italy probe boosting military cooperationEgypt, Italy probe boosting military cooperation",
      "source": "الهيئة العامة للاستعلامات",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQdzdFcHlleDhibXE3cnNXV0trcW5rV3V6LWVyTjJhNE5RQlJlc3dSaUNuNmlRcXk4alhndWFJbl85bnJSUHhqTVJWQlF0NFpoTkFlaC14bXlRM2NySTE0ZU80YzZmaEVXR2lLandRMGZQaDJIWnROYXQydEJTTXVQbGtnOTJRLXVtaFZuQ3owOG01UQ?oc=5",
      "date": "2025-10-25"
    }
  ],
  "united states→united kingdom": [
    {
      "title": "Broadening the Defense Industrial Base Is Necessary, Not an Insult to the Primes",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQTWtTODZEWXNjbDdxVi1DNHFjeVhJOWtCYUR0b1JoN0hnLTRTQlU5OGg3N1dhdV9qZU9Qa3k4ZEI4dGZ2bjZMS0FaUFl5OFpjSHhUV0gwdzY3Wktaemt6S09qRzVneXRVNjlzNVZLUEJKczlpV0lFTmIyOEFhR2Y5MTRMTkRjdS12SFdNOE9mbk9BM3hlUUtkUmNRNWluZlNjVFdSY0UxWWVPclgwbENydE9EaWRURldiLUE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Munich Security Conference’s European Defense Roundtable Series Continues With UK Edition",
      "source": "Münchner Sicherheitskonferenz",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQYzZrQzlNRmdQMG45TExzYWw5UEczZWEyQW00aDFCbDB6Uk1fN2FBUE52VlQtd09pWmJtU1poZDFUZjVINEVTckotUEZRWWtFSlJ5endUeTI5eWd6T0phX1RhN1QybDVuMWttdUlZLWJCVU1XSjRrYmNHd01yR0FlQ1FUUkFCbXhnOHg3WnRoQWJsa20tUnBmcHBpeVFYc0U2ZUZyWTNqcVM5VWYwNzBCM1hCMlZkelZuYnVKR0xVUVNmZ2FTZG4tdw?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Cooperation without Oversight: The United States–Israel Defense Technology Cooperation Initiative",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPXzh1RzR1YU1mS0lOMDJ2dzFOMjlZTDEyUDg5MlYtVExRMVZma2RVQ1d1M0NtNUc2NkhaWm10VXp3LW1CcVBCQkdyRF9JSkdlaU0tUXlNSlBqczlGcVVTSlkwNDkxNEZnZFBiT21leU1RRGJXTzJEczhXcFpZV2NIaWhiRzVOcU5JTmJ0RlNvc0tJUG0zRVQtdUlsOUNSdXg0Ny1nOW85dkpXdzZFSDRlWmR6STlfSE9pQUVnUmtJWi1QcWlaRjI5Uw?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "New Zealand Joins US-Led Push for Shared AI Battlefield Command",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE9fVFM4Zm9kak45NXFUVzhZTE9ZcFByYjlLcHM3dXlHR3dxOUdOYUhabGhocjVWT19ERmN2TmVDam52czZIdHhxSDhURFRrZXJLbk9PYmxmbUM1SldPWE55TnVfSkF3Sk9MZVdaX2FqYVZmZkNv0gF6QVVfeXFMTU51Nm9oWXFjaXJ5Mm9XNUkyQVc2M25ndmtlR0diWHFMQS1iQlNGYlBpblo3cG4tNDB5MDRLLVFmYW15bllZZWtjVDhSWGl4aEZPQk82NFR4NlhyU1VTRjdtR3dWU3A1NkI4NjUzd2JER3d4WnZRa09LbGc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Britain is answering Trump’s call — and spending big on defense",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNYUFfRG5QNzViZWtCeXZWT042MDNQM3FSUmFfQUJSaWx3UG14R0Z1WDk1SE1rVU9MVmtrbmFRTlF4VENsRzVDZkRwZDVlNzE0UWpKRlNfbVUzZHhhYWJpemhHeUxwYm5yZ1I3MVZLckVQeDJCbm1kYjhJTVlZb1NkNnlWMEpWVlZjZjdlN0JJOGJUZ0JlRnkzRlg0M2g1elk?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Tactical Analysis: How Belgium's smothering defense sealed the United States' fate",
      "source": "DAZN",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPcTdDUWx3NVk0RTZBREVBdUljd2xWekpSRTBpNXNWblF0Z09OX2xjXzJRUWZyTU9YWEtCWnI4QWE3aFJiZmZTeUVMbFZuVEN4SVZLb2ZNVWxBX09iQTVaaTNmSHFWSGdVbWYtWHZTS0ctWnVHT2tiQlFjTnFDc21UdmQ1bEZtQWlhZVRnMFh6THZpSldOMFlQRGpfRFBvR2tBRTBnUWxJZFVpT2hLNEJxUGJIS3V3M3YyelBBSHc0Q2piVTBMX0I0?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "The United States Spends More on Defense than the Next 6 Countries Combined",
      "source": "Peter G. Peterson Foundation",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQczI3UVpwUGpWb2xSTG82Vjg1Q25SU3JkcnhWQmxUTENmNGVKaGZmb25iLXVSNUdNZmk5anRLTDZRc2RyRFBhZnB6UDV4LTJZQnZqXzB2X1dlV3dFaVhwZ3hzdlctcHNPYWZOdFIyZmRMV2lFUjVNMGRiRlQ3OHg1S2E4dGNtZ2tHb29OYmZTZjhzZlFjdGZHcUFpNDg0UHRsdjFBb3ZUdG8?oc=5",
      "date": "2026-05-07"
    },
    {
      "title": "Optimizing Defense Requirements Cooperation Among the United States and Its Allies",
      "source": "RAND",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9uMWJFeGpnUTN1RHVYRGF3dEpWbk5DLVVEbGE0NTlqbzQ0T1pCSXBLeDNudFhLaTAxYVdkYjhldm1ld1h6OXZtaXlfRU16cDJnY01EQ0hMb3dGSkxXSnNwTV9DMA?oc=5",
      "date": "2026-05-07"
    }
  ],
  "israel→united kingdom": [
    {
      "title": "Washington is subsidizing Israel's booming global arms trade",
      "source": "Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBMeE1mWWd5S0E3dnpVdXlXRmY4b2xxZjk3ZFZXTlVEUW01Y2lGdzFub0VieDFxMmJ0bEtxcldwZGlPb2RCLWplUUdYNFdIeTNxWWF6UWhHVklIS0NmQjg4LTZIZko?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Business of War: How Israel’s Arms Industry Turns Genocide into Global Influence",
      "source": "Palestine Chronicle",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPbTJJcFR2SWZDbEYtelJhZlZWejlkTi1CV01YZVJYNmJNSDVMOEg3eF9Ka2MyOWphdTJkaTNFcm5SN20ySDVBUU5GazF3Vk1EMjIyT25qbHBMaHJQRmxyRFp4c0h2Nmt6VVFlNlF4UlIxMmtUSkJVTkdrZjg1dGNYbUJaMkpza2t5RjdfSm9jYmhOOW9iZkp1Qk5NREFaZThFcnFCXzcwZm40T1d2SmVNMXlxd2NLZ2p2UVVOdkNB?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Cooperation without Oversight: The United States–Israel Defense Technology Cooperation Initiative",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPXzh1RzR1YU1mS0lOMDJ2dzFOMjlZTDEyUDg5MlYtVExRMVZma2RVQ1d1M0NtNUc2NkhaWm10VXp3LW1CcVBCQkdyRF9JSkdlaU0tUXlNSlBqczlGcVVTSlkwNDkxNEZnZFBiT21leU1RRGJXTzJEczhXcFpZV2NIaWhiRzVOcU5JTmJ0RlNvc0tJUG0zRVQtdUlsOUNSdXg0Ny1nOW85dkpXdzZFSDRlWmR6STlfSE9pQUVnUmtJWi1QcWlaRjI5Uw?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Israel’s weapons exports reach a record high with sales doubling in the past 5 years",
      "source": "Boston Herald",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPMXIzV1NrRXRRd2Q3U3ktQUtXWlEzRlZfeHQyb0xEMEZVbWd0dFJXV2FxNlJQZzd1SlJJLURHQUtYd28xelhvLWF3NHdicHdtcGdoQ0dyTGd4NDBMRGhfd1VVdzdvWW9ZXzJZVlN6cFduRVBYYVlIYTlESTBVRWNtUDhwVTJTUnpYdW5CR1p5TE01eTBj?oc=5",
      "date": "2026-06-02"
    },
    {
      "title": "Belgium Halts UK Military Shipment Bound for Israel Amid Legal Scrutiny",
      "source": "Military.com",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPbzZNUUhPZDdFTHE1ajY1d29oTTY4bHBNT19lUmM2cHVBcTZkNmNDVTNGSDhTN2pINU0yTGRiTXJGWU90dXB2WjducDVJSVpqckRLWndXaXY0LVpBOW5fS2lWRVQ2QkdyUWRmNVRGTG9OYzJNYXprUjJnSjg0ZFFUSHlLWE1ZOU1QS1hUUVppY2g2UXU0TDVEbjhyVXVseHRCYlVoTGhBSEJlNEt4UU9ycEEzcy0wMmc?oc=5",
      "date": "2026-04-18"
    },
    {
      "title": "Israel has surpassed UK as 7th-largest global arms exporter, report shows",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNWWZ5S3F2ajV1Z2pMR3lvM1psLUgzeEl4VWZrMVQtRUxmUVVxY2JJSHVnSWloVkdDcFNEQ2lscDQxMHpqWFgyU1NTUmpXSEM0WUpZaXFQenFxVGpLNVdtT0R5M0pURVFCNnZYVzJmMlRvYnJraU1jUnVLQ2dxQ2U5TE0zZlZGb2FTM3hWNGZuT3J3RndLUF9SeDYwYmRHS3Zh0gGmAUFVX3lxTE4wcldXd0t5ZUNDYWMycjJ6cHh5d3Mtd2E4S2dLV1gtNFVhZy1ZNjFPWWZBQkJGZGljSHpTWmg2SGI4UzhiblR5dk40b0otWGIxa0JvZ1B6V2htZFBHZDNnSWhhY29FWU1VZGtuQk9RQktqVmI3ZlYyUi0weUVGQXgwUkc0QXBhZzdtcmxmVzVHNGhsaU9TblhxZWNxX3JxNnZJajV6dnc?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "The United Kingdom’s Use of Force Against Iran: Walking a Legal Tightrope?",
      "source": "Just Security",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOWllTcFY1N3AyU0Z6TTZSN2pHazdrRTlBbmNLZlZFRGRObDJfTDlsbTdmdm1Wb3RfZHVQb3QweTlyaVBIcFczaWFGWTFEM2trYVdSajZZdXJNTGVFdXhyTUtheVFIVHpaeENWbXpmXzh0OHUxMzFmemRWd3VVdGsxT01KX28?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Section 224: US-Israel Defense Integration Beyond Military Aid",
      "source": "Arab Center Washington DC",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWjRXY0RHVzdJNDhFSE9IVmphUmxoazRwNWpBTE9PM29UY1lYRnFvamRqYkc3ZEtaNFVyVy1jRThZWnNoaXI5SkZkRHRpeVFQZGtNZkJqMzlNNVRuX1dwUEJoWl9HWElCb29nTzNDbXBWNG9ycWZmNXRmLWVuc3BDa0ljYmJtZ3NJbkF2enFjVnJzSm9uc2V4NnljZkk?oc=5",
      "date": "2026-06-04"
    }
  ],
  "germany→united kingdom": [
    {
      "title": "Netherlands to announce over €3 billion in defense contracts at NATO summit",
      "source": "NL Times",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPNnlINnhGU1ZTRDFfZW9OcG5Id3BjSndtV0RObVVGTk5HdmlBX2RneEVRUC1UMzJTSHJGYWdmTlRwSVg0MXl3OTZGeFVrUUZ3YVlNQzdSSGxrUkdSc3czd3VXdnFRRmlzNmdTbzdNRk9ZVjNHUHRTejg4STltVHVsaHJJSWZJMDh6a1ctZGJTWGt5SVIxRG9v?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "U.S. Army officer to assume duties as U.S. Medical Liaison Officer to the United Kingdom Defense Medical Directorate.",
      "source": "DVIDS",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNaWtrRmdhUmxPSDBFcnliZlRGZm5IblVReWpWVHZfbDVFS0ZQajEyTG04S1ZXQUFMTWI5eDB5US05VWF6NjF4cWRGZ3VfOFExdXI3eVVkSGZpWjBJb1g1eGU5ZW82SzBPeUVDcHd4QUFYNXNSd3JxOUs3bUk4ZGhLTHNQSmpWdzhQU0RWV2pUTG9qT0lqOEJNOUhmbjRleS1jX3pDbnpVN1RRQzllU0RpdGFDRGllQUszdnR2cHhDREFOUE1YdXk3VDJyZk9ELTBMNFNfQQ?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "The United States Spends More on Defense than the Next 6 Countries Combined",
      "source": "Peter G. Peterson Foundation",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQczI3UVpwUGpWb2xSTG82Vjg1Q25SU3JkcnhWQmxUTENmNGVKaGZmb25iLXVSNUdNZmk5anRLTDZRc2RyRFBhZnB6UDV4LTJZQnZqXzB2X1dlV3dFaVhwZ3hzdlctcHNPYWZOdFIyZmRMV2lFUjVNMGRiRlQ3OHg1S2E4dGNtZ2tHb29OYmZTZjhzZlFjdGZHcUFpNDg0UHRsdjFBb3ZUdG8?oc=5",
      "date": "2026-05-07"
    },
    {
      "title": "Germany Eyes Ukrainian and Israeli Startups for Low-Cost Cruise Missiles",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNUzhPODE3c29CaW9jQmhwcmt5TXNwZEdtalNoMEo0Snl1WWpIbmxKTVhLZ2lBRk96YnJJVW96TmdXVHZ0OVNiQUtoZlVHZzJUSXB5Y1BleXZSSlI1SmExc1lKemVjN2dEbEtaVUw5R0pOYjVEZTdYUlI1Q1JLWnBFZnRlX19CTjBqU1Z4aXNaUGRUdTF1RExmQlRXemkzRVNVZndZTXBsMllwdVk2Q1hz?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Europe’s defense startups are losing the rearmament race",
      "source": "The Parliament Magazine",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQbHVuY0NCSmtBaFpTVWZIeG1jTGJkczhlUW9JLThQTjRaWUZ0d3pPYm9PZ0pzc0NmT1BUX1VtV2VmLWFFMlR3R3dDS0trUEpqcExWUFRIVndxN0VoR1J4RlIxT05wZmx0ZjlLbWRVWk02Z29waUZqT3NmakcxNlZyRmJ2ZGJhV3J4amZYSjJrRTVITXdrdGw2MWFzQ1RTR3hvLXY3eHVXaHQ?oc=5",
      "date": "2026-05-29"
    },
    {
      "title": "Ukraine Pairs Up United States, Germany, United Kingdom, France, Poland, NATO Allies as Kyiv Air Assault Renews Global Push for Safer European Travel and Stronger Air Defense Cooperation: New Report",
      "source": "Travel And Tour World",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE04RlAwdkdBdEFaQ2dpbDBOMGktSFR3R0dzMlpYZFItQm9xQlU1M21uUUlrQ2FyeE5lX1NTSHJkLTc5aHFyck4tR0xUN0NQQ0JOVjNzNFRwd3Z2NzRJalVSRlBSdG5VT0pyVWxISExR?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "‘New status quo’: Germany reaches for European conventional military dominance",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNSzVfLURYbDg3eEtZVVNPT3AtcjhES3hLbjI4QUI5NS1PRXdGemhfcmFJUjVBejV5S2tGR3hUaDNUcVJXUmd2VG9jdG5JdmtGaExTZGcwY0VGeWpKRGt6b0J1RXdYNjFrQlF2OTBZZV9mN1lqZ1Y1Z1B2dVViVTBoazhpUWxlY2o0T1lTNUNFakRKeFBGNGt4OEgwTU5uUXhDV3ZBS2tUWEs2UXkxa1dRbUN3?oc=5",
      "date": "2026-03-06"
    },
    {
      "title": "Franco-German Cooperation on Nuclear Deterrence Needs to Start Now",
      "source": "Internationale Politik Quarterly",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNQnR1ck43SHBKbkNJSDdDeGJLMWhkRVlOTHdYNllLUW9SNmc3bjEwRkY1NjlEeDVuZTBRRFlqQlpobkEyV2c1R2NzTEMzWmRFeUJ6Qm93U1VTcmxPNm1BamE1X1hJQXFjTEx5LVF1SE12XzRoNk9ETUowNmVpbW1iUF9DRzkwZGVTSVJvYkZmQld0QQ?oc=5",
      "date": "2026-02-25"
    }
  ],
  "united states→israel": [
    {
      "title": "In the Middle East, America’s best return is a reliable ally",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5WU09uZUptdW5hRWxtSU84Vl9yZUdIU3ZfZjQyZ0g3d2xqVkJ0TUxsc1RISWxxaDl2UFdUUmZtWEpwZmo1ZV83a2lSWktmZjVveHpWdnIwTVhRcUYxdXM4MlpmSQ?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Cooperation without Oversight: The United States–Israel Defense Technology Cooperation Initiative",
      "source": "Quincy Institute for Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPXzh1RzR1YU1mS0lOMDJ2dzFOMjlZTDEyUDg5MlYtVExRMVZma2RVQ1d1M0NtNUc2NkhaWm10VXp3LW1CcVBCQkdyRF9JSkdlaU0tUXlNSlBqczlGcVVTSlkwNDkxNEZnZFBiT21leU1RRGJXTzJEczhXcFpZV2NIaWhiRzVOcU5JTmJ0RlNvc0tJUG0zRVQtdUlsOUNSdXg0Ny1nOW85dkpXdzZFSDRlWmR6STlfSE9pQUVnUmtJWi1QcWlaRjI5Uw?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "How the Iran War Weighs on the U.S.-Saudi Partnership and Prospects for Normalization with Israel",
      "source": "CSIS | Center for Strategic and International Studies",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOX19Yd1E1Y2ZzZWJveU5ENFBlX2h6TkpJZVMyU2loOHpRRlJCXzIyNjRtOVAycXJFMXVyN2kwZmRTOEpOUXNURFJaREpobF9NT24tY1BmdlJwLXA1MUR0VnNtRjB1WVVNWUJsblVtNlJSdW56alRCc2ZvclpIMnJ6aDJ3ZW8wb3M2QTk3OEVWUDlnZUxMQkxFOXpwYVFWc2lkYy1OU2UzMlk?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Missile Defense Worked. Can Israel Count on It Working Next Time?",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZnR1QVlhbWJJLXBpQklyV0dMeGRwV3EzOXg5TFFQOWdpYmxoSUJLeDFTVHdqYXFlbHpmWk5saFhvZ0ZDRnJBRkQ0ekRnRmRuWTE5V1cwcjJNbnZGa1BuNWlHNHNJMzVOUTZQaHU4clFKWU00VFV0UXJaN2JvZVBYc0hWNW9ITXM4MjJmQ0tKMm1ucGtzR2htb0RuQ3A?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "US Insists Iran 'Does Not Control' Strait Of Hormuz",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQWnhyaS1tS3NVV19VeVRlS1RUeUhFblVCTkRCWmg2Z2YwTW1uR051ZFctc3F2eEcyN29hbkJkLUY3THpPVzVaYVRlcTRybGlrTGVsX3ZvTFJyQmRELVNHckg3Nk9uOUw3V2RyN2lZY0dIMW1jLWVQSUVTdXBTZGpuVE55cDBQcG01?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "2026 Iran war | Deal, Explained, United States, Israel, Strait of Hormuz, Map, & Conflict",
      "source": "Encyclopedia Britannica",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5nTzlhOGZTS180cWNtVG91c2VWRVJFYlk0cW5Ba1RHUEFOSEtldU15QktQT0EzRVY1ZVdZZ0VTRHVWTVhyN1IzeU1wbmlDMUhrQ3Roc1YxcmdMUQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Exclusive | Israel ready for more war on Iran should Trump ask for backup, sources tell The Post",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPTGF3ejlBOE1JZ2sySzBTT3ZvQmhPY1AwMG53OEJMOVZNVGNMT0ZzV0hCOFJCNkxIbFlGSVVueG9ldW5xcnFKVjJzWGZvMkJZemVaNjRqbGdwRnRZWk1EbkNZa0JUMlV4XzhjQVBJZUlfVlRwSnBjSGM0bmJTRTUwYzQ2b2syZVlzdmdvYW95UFpSbzhISC1hUTdKMjJJV0VYRS1GX0F6MWtfYmVpY2RLcWl3XzlYOUFGZHZmZ0dQejhVNzg?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Washington is subsidizing Israel's booming global arms trade",
      "source": "Responsible Statecraft",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFBMeE1mWWd5S0E3dnpVdXlXRmY4b2xxZjk3ZFZXTlVEUW01Y2lGdzFub0VieDFxMmJ0bEtxcldwZGlPb2RCLWplUUdYNFdIeTNxWWF6UWhHVklIS0NmQjg4LTZIZko?oc=5",
      "date": "2026-07-01"
    }
  ],
  "italy→israel": [
    {
      "title": "Trump and PM Georgia Meloni Face New Strain as Italy Reassesses Israel Ties",
      "source": "Military.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNXy1hcFFlRWRMWFhYNWJKUzF6d1ljOHdvUlctSVpXYXlmdWpjNXVPUVhrNTVZTG9qbEpxRzB5NTVvM2VWNVlPV2tJdHpLQ3I2aXBfbjM1NlJ3YnpSUUJEVDhWcTVLSXdKTEF0Z1ctOVotbzM2SmdGT1RDZGNHYnQ3Qms3VDVBQlNQZXJxYmdhYWdSZXlRbmJLT1pBQ0x6d2JtSVE?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Legal group files complaint in Italy against Israeli man for alleged Gaza war crimes",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQVnJsbi1HOXFKR1ZGdzRDMWtFck1zOTVnd1dBc1I4cDdUeTBsc0t0ZHBGZk51bzZici1SUDJUTktLeFBUV2ZJUnJ4aHEzOUF1OVhVTmg4U2I4RzFzTV95czBLd195eXozRlZRcGlEWnZPYzJmdWxnbENmREJTNHFZNGxKRFRwZDRtVThXZk9yZEljVkIzb2RGVTI2bjdoS0hEVjROeW13NzRoVjhtZjZvV3gySWh4d9IBuwFBVV95cUxQS1M4UHAtTWd2VG9KUV9ZSE5kQzBkOURXNTlSRnZCU3l4d001aEZ3NVBmYkJMTktDcExrMGQ1MG1GZXA4aHFtX1h1VWtMT1R6TEd0UGlYbUo1QWZOWTFRTlZtcHVwNjJQZUVCeUh3cWtqQzZZTUU3N3VyWnZQUjZ5TTd6bGFxdVNPQ0FhNXM1Zlp1UXlDS2NwaXlBdXRJby1XanAxTDlQMVpNVjRmdkhncEhxOUlwNDJXaWVJ?oc=5",
      "date": "2026-07-04"
    },
    {
      "title": "Italy suspends defense cooperation with Israel amid Middle East conflict",
      "source": "Jurist.org",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNLTdoeFN2ZXU4c1hoU2MtQWU1eEpOTXFCUjBzSTU0bFk2ZHlwRjhXVUpUMkxaWjRadkV2RmJzZUk1Wmp4bnFRSEYyTmdjTk81UDBTbU9objdfOEJWZ29xOXc4VmdhY3E0TUd4ZVZZcWFZT01lYXVmbXFxWldQeFFXOUtNZ3Qtd2NVN0s2R1A3TUVvcUZwcmVKdFFXdE9lRkRnOE5HYVNUcTFLOUc4Y2poY3hZeVRub3IzdlNmNzk4YlFkZw?oc=5",
      "date": "2026-04-16"
    },
    {
      "title": "Italy suspends defence agreement with Israel",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNUDVsb3F6Q3J4OVlWdUhIanowa3FsNWlsTl9vbEEySTdXazJyUWo4RjBiWWZNbzRNR3cwS21icENEN3BCU2MzNjZMaG5LUGdKUlJaN19WaXNkUlhDTlZaSzNpekJ6clpXeHZGamlJTDF5bm5PZTF5UlVDb2JZZnVfdEVTNjFHY1RYTFlVdFlFWmHSAZYBQVVfeXFMT3hLUHd1UkxiTndXMDhuSXMzUGx5RWhHcF8zOXBRNmJJRDM2bEsxb2tSamhKV1g5cEg5clZKWmhPNUJ5UnhKeFBDUXZuc0F3UURzX19MbzAtM3ZqQ0tSTnlBQl9QNzlkME9nUDNwXzVFUExxai1fblozTExHbnNBLS1vMEZpY3o2MjNYdUhVQU9SRkNPYzVn?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "Italy Suspends Defense Pact With Israel, Further Straining Ties",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPQUFXNUhjSEtZTjNHbGluV0tWM2J4OGI3ckowV25DZHpTNE1iMDZpbmJxLVRrTmtpMEN6WXNUV1hURUQtWmVsWnpWdVdWRlptSE5ld2hqd19aLXlrSFNLQVdBU2hJMldTcFhzUjhGR2xWWE0xZlNHbkZZOVp3V3FiUUk4REkwbm4xbFE?oc=5",
      "date": "2026-04-15"
    },
    {
      "title": "Italy suspends defense agreement with Israel",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNakJqeXRDU2ZUNUhBcm5LZW9EcjZjOFdKQlRUcmViRy1NQTYxcG1iQWM2amVaY2U2V05aQXppWWFTaUJITzFMNl9SU3hmQTdOcEt4ZGtPTlVoRF95SldZcjBNR25EN2NfXzlfdk9Hejk2M2p5eERQUVc0d1Z6T2cyMldwaG9vd3JIZW1DR1pDN1BWN3ZyRHhSZTNJMDBoV0E?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "Italy will not renew defence agreement with Israel, Meloni says",
      "source": "BBC",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1wN2szcjNCNmxSRXpkcGtaWHRsUmRvQ1J0MmZnWlJvaW54QlJPaElRVUtnT282bGRBZFE0SFIxX20zQjF6YlBuVkk4eEhpbUpscEhCbVFXUlR6Zw?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "Italy: Suspension of defence cooperation with Israel long overdue",
      "source": "Amnesty International",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOWW52c2hPc0J6WEpld3RabTFwQ004NzdVaEROUFBHblNOQVNpbDJncG9Wd29sTkM3QWNqWDEtTVJ0VEJ6RGhrMm9LeVNJVVNqUE1tTHNNMWw4Z1F0Z1lPWTVPXzI5cUFFdVRVNnZ4UXI1TnFjcjBhWUxZSVJUOG5lYlI1QzVCQnJNVlhHcnc3Yk5VNVQtT0ZvdzF0ZWpXRlN5bGNmUGNOMTFYclFUZUdSNHd3?oc=5",
      "date": "2026-04-15"
    }
  ],
  "united states→netherlands": [
    {
      "title": "Netherlands Announces €500M Package for Ukraine Air Defense and Drone Support",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOUnB4UnIwYTJhaE9YQjZic1ZYVENNejMzbGExWXp5ZnVTUHNIUWxlQjdqcFRTSU9QVzM1VGVjbFI2czRoLWowTFVLdWRWNFJoSDFyOE0tYll2SDV4ZnI3OXdRTEJ6UGZid21zM2gwUlg0YXVkWkREVk8zSWkyYWxGVmdIMEUtYzJwN1h2V0lnU1pQVEZfVk0zVWItcEVITXdmS1ViaXB0dXEzelNvMkNsX0NhREJGdjJq?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Netherlands aims to cut dependence on U.S. security guarantees, new strategy says",
      "source": "NL Times",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQUWtKOVdHOG03VjhaMnE2WlFTc1lWMUlxSjJhNk9SVGhjMzYtVEFCSnlMeEkwUDFqdTNrZlN0UkNVbWNQbm9fRlFFUmRza1prbS1zTGUyY1lIcWNsQVZZQUVPb21ETDZKNkRad18xLUpwMzdrbnR3c2NqUkh5eHQ2dWQtbS1fc08tUmdJWVB0RXEweWdJOGpxMVlnM2d3SG9hZkJ4ag?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Netherlands pledges Ukraine $580 million for drones and other weapons",
      "source": "Yahoo Finance UK",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPSHRQRF9kQ2U3NmNQdkJSeXRza1A5YW4zbG5yekNPWThRbXRfNkVxRTNNckVzeTdXTVp1ZndEMXM0UHVpYU9NRVNfTXlERnVlV25jRHNaa29DWmhmS2xHMGVLU1ZiV212MmJzWkNFRmFpZm1neXl5WHhPaFV3WS1EaEFYNGotX1ZPelExUnRBQXNrUQ?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "What Rob Jetten’s new minority government means for Dutch and European defense",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOZVlLSGFzbnhmeFJiTWh5WUxWU0tuaTBKdEpMdU83WUZSWElIdWlWamZIaGxVcnN6UllsbTVkY1RfTjFSQl9CbVRJMGZpZW9SdkVsb1BUTFZGYkdyMmNVQVQzQUFsTUdOSjlVLUZuOUl1bWcyS0E3ZHV4MGNmNWNCUzdnTHVsbWdMN01KMzc4X29XT2cwamo0akJFQkpPZlJHRVU1TVp0VjlhMEVOVmszeVNTUGhfOWNIQ29WWXRB?oc=5",
      "date": "2026-03-13"
    },
    {
      "title": "Axient Systems BV Awarded the Holland on the Hill Freddy Heineken Award",
      "source": "Netherlands and you",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQeW1MdktabDAxRFVNUnY0UU1aVm40MlhtcXY1Q0pDelJrY3AwRTV2a1RldjFXWExiVG03UHdLMWk0SWxIUlJtSE5IWW1uNWxaQmJyak9ZalEyaFY0Wjd2RS1xemNzV1FrSlp0NnRsaVhDaXJKRTgyT2U2SVpOVTdWWV94WmVmMTBHdjJSU0pRRzNxWG9qUEk2eWQxVU1FTGQtN3AtWnV0RjdRREtBUlFWMHlaYmZmVUJnaWdtUld2ZDZwUQ?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Only 11% of Europeans trust U.S. alliance as defense autonomy gains ground",
      "source": "The New Voice of Ukraine",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPaTNqQTVkUTZFeHllNGlKazV0REFfa0hKbW1vdTZKMTdSOUhsNHlFaEFqUkhyU1c4ekFoWC1fQi1qR2xKLWlPYmpRajBLRm1pYjNqLTJ6NC1sUlFXQTVyVW9tb1NEdlJRM0NqNk53SDFGOFp4a1N2bGZCLWh0SXR6ak5YdUdIVjBURF9aOUJiNzlGNU1kb3I4SHRhZ2I5OXJWMHpURzdhemo5Q3pidDd6NWpNcThIQ0lvUVHSAbYBQVVfeXFMTVhSRXB1cnNUaFR1ZWgwakFwbzlsWVMyZHJlNzBnNGdwRk9jN3pQenotdDFRa21ieGx4cTZsaWphWkRUS2x1WTN2ZlNUa2xNLTZxNUVwMnIxdmJvX05wOVJXVWMzWGRWWlRzdl9teHNZU19uR3RnRDRpekNMUlRRbzJzTmhodnJJek5Ha2w4SGV5QjZZUkU2aHlTUkxtWUNoVTNqc0lRdE9Zc2NYd0pLcUdFVjd4YWc?oc=5",
      "date": "2026-06-10"
    },
    {
      "title": "Netherlands announces €500 million military aid package for Ukraine",
      "source": "NL Times",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQWXR0MzBWbm5xZWs4ejlBcmhPV0UxeVBGTk9LdEpHNUtMY3dBdUZWTGIxV2tjZ0FGT2tHOWxRQklqWlZMbEVfNEFXTVF5a3BYN25Fa2JwZ2l0OFBlTFZzLWR4SWtKT2JLdTdfODAxeTM0dS1WdVNvM3lsLUZRR2RLMEl5RzJCMVBVZDlwdEtKc3RSeVJiaUpBWlNB?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Netherlands, Lithuania cleared for USA missile buys",
      "source": "FlightGlobal",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNakdvbFc4NzFWU0RQcExzYWRNV01RaUxFV0NlTDBCaHB5RDNFdGRZNGstSkJEV2YwbFIxQ1ZlUW5iUGdVTXpZWDNwcXcyY3hHODh5bzhnY1MtVVRoX1pnNExpNXQzUWo0SXZrODBvdThYTUxUbUxnbmpYZmNPTUhlc2tCOVB5czQ1RmVjUE5hWGRSX2k2eXp4NE1QemY?oc=5",
      "date": "2026-04-23"
    }
  ],
  "romania→netherlands": [
    {
      "title": "Romania rules out hosting nuclear weapons, says president",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOV0JFNGc1aDRoNnpMbDB3eXRkS3ZHV0VLV2hBemNERmNnWVludEtPek8yQURueTJ6Wk93NVYySGNoVmt4NkFXOTdTNUFvZW5RQlJDUTM0dFlhV2ViaFREQm91SVJReS1zc1p3VlJuMjBGT1hpZGU1Qy1mUlQwcjVCYlVqVQ?oc=5",
      "date": "2026-03-06"
    },
    {
      "title": "ASELSAN Strengthens Its European Footprint with Landmark Electronic Warfare Contract in Poland",
      "source": "DefenseRomania.ro",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOTFdDWDVqdUJ2RHA1NXdvTGwyWG9CRnFOZTNDWnJKWl9ZWFBKSEhQVmlnQTFWeGMtRDRRZGhrMzlfOXNiX0FPZVBHeEwwLVJCenA5bjVNcGZfeGZ4YVcxZWYtYjVkUTlZNkx4dlNFRjlmTDJOU0xWXzk1MHV2cEZGRWRhY2RjdWZQMDNrUXhXMmZ5S09HYzJPZnJOQVdzcklfMGRGTC1IaGtMeEZtVVJ2aDFSaGh1TnNObF9NajRGUUJGcHVOVmdqS29fNXBVME1qdXfSAdcBQVVfeXFMTVVXaEgyU256TkZBUUE3XzJXUER1dmR5b0lSQzhKTkxMdmJMVElob01QS012ZXl2RHdIQ29DNnk0VUlWZTczZk5relBZcjdWUnRVVEJqT1pUZnpYNjVQOXZBMmFrTjV6VDBENkJXU0xvdGZkemNDOUxtSFMxVmQ0Wm0xd09qdXp4ODhUSkRRWGhTSVN3YU5WUDZFSTlFWFdYaGpvZmlWUkZZZWVQbmR2cTJhcXZwaTlsRDhzMkI3aF92VFZJZnd0dTlianFLUzEteXRCUTlzeVU?oc=5",
      "date": "2026-02-02"
    },
    {
      "title": "Romania Acquires 18 Dutch F-16 Aircraft for 1 Euro",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5tTko0aTRySUhzRHFJSWYxM0tieVBuRW51VzB1dHpWSURCVE9NTzBrdlhXSnUtUVhSZVFDV3EyNW9mdzZJMVhXaEw1U3ZsaXhpX05nZDFpb2RFbE9OU1prSFp4REM3OERWZXB4R0xR0gFzQVVfeXFMTXk4QlZGaDc5aXdQY0xfYzdSZXBvTXpIRTlROThaSjVHc29PTEFfcHRKRHQ4ZXlPbG05UXNhUk5Ea2xYSVJua1I1UUgyS05oMHpJckp3a0lDSnJGUXhLNmt1SmpCTmF6eTlSckpPUV9fYnRzYw?oc=5",
      "date": "2025-11-06"
    },
    {
      "title": "Romania buys F-16s for just €1 to train NATO pilots",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOSmhMc3RzSE9WaXNvR09hV2hpRVNkZGxweEE4bTRobWswMWJNcG1YNWgzRXdxcHRwREktLXh1VmtCT19IYWo2WEJabm1oNFNMekZVa2NJMjRxOXNvQ0Q0Y0VyM0JQMVFzQ1FmdThqUDlpc1FnNUZDWlNoX3pyM3N3bW5kalRHbjF6UHEtam40bzhSdUdfN3lkeUp3?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Netherlands Exploring Amraam Production; Hands F-16s To Romania",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOWmJoUGtNd2o4NEdxY0ZMWGNvUklYZkt5SjlQSEJPZ091aG95N1A3VW1FZ2ZySHpXeDkzSWxnVFB4LVlXbk5NLVVZZTJaWHJZZmthTExHVmtUaGRZQXo0X2pIOENxOVc1Zm1GbWJZVzdIVDZZQnhyQi1FZzIzRm81R2x1NUdXUzkyUVlrMDJkcHVkODIxVURFZlBaYjFjOXBNNFdtOGp1WFE?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Netherlands sends five F-16s to Romania to train Ukrainian pilots",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOX3FfVmRTUXk5VUNCN250R25jU2N3RTJWVUlienNWbWo3WmhoNlNmdDlCdEZlUUpaNkoyNU5lOGpMQS0ycjZ4SmdfUUpVY3ptS2IzMDhhQ1QtVTBKbTB2d0J1QWVwb3IwWWNKVGRNNWw2QXVNdzM5TS1velh0RGthYnk2RUdjUmhjMjFORFhQT0NuLVlod25jVm9YamV4M3NLTnNwRUczaXVfOGtCY04yN0RRYTJKMWd3UVE?oc=5",
      "date": "2023-11-07"
    },
    {
      "title": "Romania signs deal to take ownership of 18 Dutch F-16s for training center",
      "source": "Romania Insider",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5vYUpxek1CRC1YRmRuZjN4aHY0Vmx2QVdSbUtoVzRJeENHN1dDYlhGTHZLdThsdDY3MjFZZDJ1ZDFmNkFlVG03TVhycjktcUM1a0ttWURJdmg1X1hEbHlycENGalNlNWZjZ0dUVUJjQkQ0TG1jREdGZzNHeUpPb2_SAYQBQVVfeXFMT0hNaEhnc1dOdXNPVFQwVkZLZXF6SWVWNjFfbjV1a3p2ekRNbzlQOXQtTjQ3UzB4TlJXSUpDZzBHWGw1OXhERlJkek5IVVlkZVNFMWlxeG8xQXFZdGxkZW5UaXVJQk5sQTVhdTlWTEs5ZGxvaXB2VjdSMFFjUTdSNHBGa1dP?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Netherlands formally transfers 18 F-16 fighter jets to Romania",
      "source": "AeroTime",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE45OGt2UldGQXNyYjhOcGYtVldFcjAzM1ZZbjZucFVNdUk1dDRLZ05INW1vTDdCRW1jZkdYOUZwUXFTUW1DN01XNFdOSTNva2dQVVRibUpvekFNekRmWHdVRkpRaFNISjRTOUVGQTZHOWFRT283VG1lN9IBfkFVX3lxTE1sTUlKOXJrWFVXNjkwM2gwdmtzU25KWlFnTmdEV1NLY2JsczR4MzhlMkptdC15NDZpT0tqdTd6YVhaOUVHNGNscW1sMGJkQkhVY2FHQUtyZm9ONjhxZk0wZC1LNHo5cW5vNzFrak1SQ1c4SHdvcVRrZURxc2duQQ?oc=5",
      "date": "2025-11-04"
    }
  ],
  "sweden→netherlands": [
    {
      "title": "Eight NATO allies to create new satellite mega-constellation",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOUTQ3WDFKanRtWU4tQ0xSWERMRHFZRWg2QXZXdWtyVDUyVHdYX2Q1LUJYWDRiUDZSZ2ZsMHZUWUItMDRNODY5WnBvS3pBZHhyOXEtOERjNVNITHctd2o1RXY0QmJWbDVWWllHT3BDVnBjZzR1MmY1UFdPZFR1VG1fTnRTQU42bDRLc2hRdXA0QlB1aTVINkxkczdGdHM0Zw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Poland joins European Patriot missile maintenance hub alongside US, Germany, Netherlands, Sweden",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQXzRsRzF2WmxhZzc5MExOcjg2ek1aU2J2TllhQlFXSHBMSEt5X0VRb1lKUFc1UlQtSk9mLWNQdXpfRGViaFNZcTdDTnNaWXRKOGxyOURrVnNSbDcxX2NfQmdIMW5JNHZpWEdvQUgtSGF0Q29nQWt4Skh5Q0txUXVSMnZZWWtuUjZkRTNoQ2ViRFBfWkpOVmlFMnBuXy1EbkpQbktBVU1MSGN1RnpxRmoxc1h4QTVwRDB1VTE2TDhpZjZCSGlVVnNGcUNtdnJVQQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Netherlands vs. Sweden Prediction, Picks, Lineups for World Cup 2026 Today",
      "source": "PrizePicks",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOREc3RGlpSlNZVkljVnl3b3RrODJibTVHUXBYbHVEM0tCbmNKN0J5RXhGa2lmN0xLLVdiamNERndhXzdEYWk0Sk1QNTVjNXVrYllUX0dGSEV6OVhGSzEzNExjcEdrVE96eEdVLVJBVkF5UU8wY20tMlVCdS1HMGtFbmRrbFRTWFdDQkNQNVllYWw3R0s4cUx4M2ZMMmR1LWZmcU1tQUtyVXBBR0xJWk9xMQ?oc=5",
      "date": "2026-06-20"
    },
    {
      "title": "Netherlands vs Sweden Preview: Predicted Lineups, Team News & Tactical Analysis | 2026 World Cup Group F",
      "source": "RotoWire",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPVWdhNXlKZFc1ampuOHJrMEZCVV9ZNy1pT3FjaFBDUHFpdklteVcxdFRmdmgtT1ZQT29LVVFCbW9wUHpqZ1lRX1RYaGtrOXN5X2JtQnM5aV9QWHNLU2RxTmdVQllsMHdlY2lINXZnWC1GM0tEMmhuQWdCU1JHX1RBSHEwdktaZHFJblVQSVNXc0NlaWQ2SGUxenpodUFBQkt0YjUxQXBxUXByZkJEcllZWWU3UmlhbkZsU1B4LWQ5YmNJV09yVkNsdkc0YWRsWXRYUzhUcVdWVlpJMlVWUlE?oc=5",
      "date": "2026-06-20"
    },
    {
      "title": "Are Germany, Netherlands 2026 World Cup contenders? Plus, Sweden's strikers, and Ecuador's defense",
      "source": "CBS Sports",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOenl5bXNKVzgyNEFxQklGMUxCSnpiVE5TMnltR3R4YjdJUk8wZjNiWU9aelNqckxuX1hOVF9RZmFkWHVzUU1feXFZcnRjNy1pZ0lmQmRFanlQLUQyQzZ5RG9zMFlUV0NYaEU2eHU5MHVGcnNxWUFzajhFOG5HZDdVNzcxSl9oaVJWR1VwYW9UbHlSdw?oc=5",
      "date": "2026-06-14"
    },
    {
      "title": "Belgium, Germany, Sweden, Netherlands announce new military aid, F-16s for Ukraine ahead of NATO defense ministers' meeting",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNOHdvdjcwTEVtTlh6LTZHRk4yNXdIOElYRFU4NnlGXzBHOWo1Y20yallTV2JMY01rYmpaZUZSX0M3cENERDd2a0w4dFRLdVp2S3hVQzltQkp1WktPci1NV1IzVWh5Vml2T05jRHEzaWFlTTNLTGdaR3ZaeHJsWlRpQnU5RmM4ajBZdDhSWXdxVHFKV2ozT0c3OVZoYzV2Rm41Um9WaC1RLUtncUcyQkxNWXo3T2lxY25JbVhCMlVFY0xLcWxyN1Z0bG9kbGdycmFGS0YwN3dCbkE?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "4 Takeaways From Sweden's Rout Over Tunisia At World Cup",
      "source": "FOX Sports",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPckdOWEpVa1F2R2c4eXVGRVRJZkdySFdJYTBJdmRGSzFRN2FlVW1GN3pHM01vUVdoa3FQNUtLQUt6SWpVdHRpS0dIVktFNG5uaGE2N3J1aTVuNEpLM18tS1lQZlJzZ1hRMm5pS2t1Z2MyeklMX0xZSWtnVWlTdlk3QlZKRdIBgwFBVV95cUxPeEEyX3A5d1drUUh1MUNWRS1scUJvY1BDbFNlSzNCanl2amJ1V29KU3Bkd1hIWll6QlFITW1veHNRSnFWSS1MMkNXMWI1bkVDV2FvN2dTdGlpREF3bFZzT1FvYnp0V2xQUFpZS2pNYTREQ3E4M1ltQ0dDN21jbUl0N2o4cw?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "Netherlands vs Sweden Prediction, Odds & Match Preview",
      "source": "betmgm.com",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQelAxdEFPUHhxalFUSl9iVkJUclBvcUQzbmVpTjh5ekRCc3RwVTVCSzktNzNqRncyanRtRnd0YkJQNE5TRnAxbXQ0MkFncDRfVW5VR3JIUUZUb3pGY19CQVlMcXFiX0FGR0REaVUxNzZ3ZG1QOTFSMDh2bWh1cVNyLVd6WHRoYU80Z0N3VEJYM1dnbG5ObE9qTklxWmJPRG9fbF9NZGpHT1BLbWdkTWFWWTRnTQ?oc=5",
      "date": "2026-06-16"
    }
  ],
  "united states→south korea": [
    {
      "title": "A New Risk Calculus for the Korean Peninsula",
      "source": "Korea Economic Institute of America -",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE83RGhzWUVrTHk0SnAxUmMwOHYweTMwRjQzZ29OUHU5YS1qLUV5WUI3N3E0ekx6MTlwQmRvRGNEbHktWWdmcFd6Q2VNQVVfTzRXeXR0VS1FUGo5UjdyVUgxMy0tV0VKSmZmdFBXVzlyUC1WY3MtVTAwQ2NWMA?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "South Korea Announces Plans for Nuclear-Powered Submarines",
      "source": "Arms Control Association",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQUFRZQTRWOThjQlBvZ2hRYnQ5WDlUWDRIcVFiOGlCZWVjMEd5SFU3amZ5SldjVWx0YW00bnA0SFJRVk1FZVRkdmdQa2dROFNCWklXOHU5d2ZCYTRPQkRUSEE3clN2SmxlbHh1Z0JJTFVuU01YempTTmFMbndPSlpaTU5Ocm55VXVsVWRBUS0yOFQ1bTdESi0wVlJtejM0U0dr?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "North Korea uses renamed institute to attack Seoul-Tokyo ties, signals entrenched 'two hostile states' policy",
      "source": "The Korea Herald",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE1tcVNqUlpiSjM0dTBjTTdldzVPZXRQYld5WXQ1NGhGYnpJNGhTb01CajVhemdkUkhBYXQxbVhvR3JDTGNHbGNBU0FJUUJ6ZFh2ZlJobVdTNA?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "South Korea’s Nuclear-Powered Submarine Ambition",
      "source": "RealClearDefense",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNaHJzaEhFVFJYcXlheHFqN251a2RCRlF4VFRFNXd6Q0lRaV9NNFJyOXU5TFlfWlJZdmtoUU5saWFveHNDeG5GSGxlQl96ZHg5UGkwWERicDhHQU8tSmpQWVBTVDEyZGhNekQyNGJvY3NmX3ZxbDRmMVVCZkdZMDB4Z09yWDJpa2trU2p0RjA3NWdJa3lTMGVVbHNrUllXdUJ6cU5GNmQ0cEQxbmRBU3ZEaHZJaw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "South Korea President Lee envisions Korea-NATO 2.0: From arms sales, to building together",
      "source": "Asia News Network",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOcGZRUk5JVXh2NFY1UVgzLTFIMGc3N3kzRnhZNncxaHM4LWY4SU9jV3dqam9UQkZMTnYtUlFQZ2dOZkdiXzZhb3FCTmtCdTQ4Z2stNm5NTVduT05BeTRCbkZjbHJtZDF1LWdvU2dJY3BvRWp6SDRUNElqZUZGeS1oLXJQMlptdDk5LTI5U29EaGpOd2ktLW9xd29RRm9JQlVNVHl0TW12ZldOSW5DR1RXR2htMA?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "How South Korea Can Help Rebuild US Naval Power",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5aQkRGSC1fRHNaUWU0UnRuNFJPQURXV1FFLVo1QUpELXVXYVNaVVZVQ09EUGJOUVZnNnRUMEtjNGMwNGhzQXNyU3B5TDdZQ3JXZmx5UDJJenQzMjVJVnZyTkFsSDdUV1RCX1N1UVFQTm83UEU5WUg0RzVjM3nSAYIBQVVfeXFMTVN4VENkcWs0emM3QTZBMDZ0QUloUEV2MEF0TE9qUVhPWklRT242MkZiTE9Fdmxoc0VPeEYtYXB3TThlWHZ4ci1fQkZUMUJJRnJaTzBtdlRnOXltVzFMUXVNOE4wbVY2a2hUSF91TDA1UDJxWGNnYU9EcFo2YkE3cmhLZw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "N. Korea slams S. Korea-Japan military cooperation as 'self-destruction'",
      "source": "The Korea Times",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQSmtOcWdxU1FqQzE0NmJONzZ6QktJZU9XT0JQMUdOZGdQblExRExRWFQ4YnVqbUw5elM4eWd1LU9pUHhZVHpxQzJfbjhQY2JiZTYzRWVldG9Jbmo4eVUzN2RDWlNxOVlaVXlVOHlCdTJNQVF0N1pkMUgya3JzeE9UVXhxb09hY1ZjY3NFTGZ4V3cxb2hOTXpkdWtodE1nVU5wZ3Nzbk1YZUZlTFRCQzAyLXdpMkZvaVkxVUJjMHg1N0dJZDRYRDd1VXhub2HSAdIBQVVfeXFMTW5TZGhsMFdyTEs3UWE0TzR0SDlnX0ZhYW1kLXBmcFZvak8za1BIQVR0cEJYd1BzME5UWXB3OUpIZGg4X2U1enFkeC1IN1ExTlFvZ2hTdTB1WkU2LTBrbVVJTm10T1ViZ25jS0JiaUU5Wk52S1hvS0ZDUVlUZkQ5ZmJ2czROdVJYM0hydHpjQ1lhWUN5cEExUUgyNzJsR0djdGZIcFR1ajZHcjJTTVBLRXBObGJ5NkhvcjUwRHlmb1hmVVpJNlNFLTd4aGdTNmVBS3Zn?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "North Korea's Kim calls for 'destructive' military posture as South vows to boost drones - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPeUNVVUZuSlgyOHRIV3ZFS2JGbGg0UmhzalE2VFRLUTItQ3pZVTVEamd1d2hJVUJISkZod1VxOTNiam43dkZtTk5LcnVmWlNRYjlsY2hGSWNBZWgycTVJdm8ycXQ5TnBRZXprV3N0OUt2UHNRcDJOX1VtUWU4Vm1ULXo2bjU1NmVOSllyRlFTRHV1T2laWTd5LUNIZTBVTWdqeVNsdDJlNUJkVWRLZ09KWdIBtgFBVV95cUxQQ3cxcUx5OVVOa09PenBfc1NUTXBUV2VzRnZhdlpkMF9vNW1Ra1VTVmY4eVJvUnVtQmJRUEhaQTdrTURPcUlyNllnczdhQ1k3ZGZuUE5EVkQ1eEtvWlh3NGRpMWUyTEEzWVNlNkxBUkFJX1Z5QnJuNElUMFdQOVhDanlxRkMwVTZRaWtPODBXUFJjOTdiQW5tRVBnVmtqY1BfeVhDZ2ZSWkJPdTZYWkNicjVPanRsZw?oc=5",
      "date": "2026-06-25"
    }
  ],
  "united kingdom→south korea": [
    {
      "title": "South Korea Joins the World’s Top 10 Arms-Exporting Nations",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPckUzM2FfZ2NyQ0ZwOXFpbE5GYldBLWt3aFVpdkNEd3loSmRTeDRMWnQxa2ZlNVVya2M0UGJqbVBhMXVSOUVfUkhobUN4RndCMVd5STNJdlc1cUJVY2NPcmpFMExtXzZnWWdNOEFvN0FJMDlXYm5KSE82QU1DSGhreGlqVWtiNXlGWUt2eVpYTDUzMDlwMWc?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "How South Korea Can Buy Alliance Insurance",
      "source": "Korea Economic Institute of America -",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5NSFBpWXJKTkFOdkZPdFM4a3JTNEQzUFU0QUFoR05qc284VWVSX0JRZUxZbS03Y3ZnVDNsUDhXdnljQ1I1QXVzLUxwaE1jUHBwNUFOQkUzOG04MXFwdmZjWl9fYVkxMG84Z2hodU1tZUw5UFZiN1hMVg?oc=5",
      "date": "2026-04-28"
    },
    {
      "title": "Canada leads defense bank push as South Korea weighs joining - CHOSUNBIZ",
      "source": "Chosunbiz",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPTk9YXzg4SnFlaHB4VVJKNDk5X1Y2WDlYbXhlcWFTSjNjZ19yYUtycTB0U2VZVjVCeTJjREc5cVlLR2hXZXVINmZCSHowN1FIM05PUWNNX1p4V1NTUXdCeUVwVUFMdkRRRks4Y2hBRE10MV94N2RHQWdXMHFPTm0yeFRjX3hha24x0gGcAUFVX3lxTE1rTjdycThLYUU1TFFaSjc2SjJMZ05QTjczUG1LX1FWMlFXOXBJQmtOTHFVRDVacWVqQnJHYTlKaGNVSzVRTmdveXFwcS1kOWdvZWdWa2tfb2ZXYzUyNXVNbENvaHA1RWpmNGxBVWttYTNHTm0zRXA1eERTengta2xucXFxOFFUNGxPMm5tZEFzdEloQWRGdUNEZWs3VQ?oc=5",
      "date": "2026-07-03"
    },
    {
      "title": "South Korea’s Integrated Cyber Defense Framework: Active Cyber Defense and Reactive Responses",
      "source": "CSIS | Center for Strategic and International Studies",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOdk5najNlcFpyUEk5S0lSZUZjSTZiaVVmb1phT2wwVE8za2ctNGtWS2c3NEhSaWNBdGpQRFVlYy1aYVN5Z0pMMzdRM0Q3RHF5dFU1R0tKdWhZNm9RZXBSbDItMlV5UnNUVjJsMFJjd2tkOXM0R2R4Y2wwMXRvZEVRRlhEM0wyQU42VzBqSkRXcWVyWkhRUGk1Skg4WFBkWEVOWEQxTjJDZnhhNUxFS1FWSQ?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "JIATF 401 Drone Defense Marketplace Broadens Allied Access to Counter-Drone Capabilities",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOanAxUXdBNkI2dWwtZ3NuSFYxUVZYTWJfNkk1ZWwxQjBiYVk4U2EtZklUNS1ES1Ywc0tlenlTbldDay1UNFROcXhmdDBwUk1QcGUxOExaOGZaYVhuTVBXSDNQVnZ3TkVIYkZSVkJLZkpuMW14VGdZU18xMmVIUDJIZXliRVkxY0VYRjlRUC1IN25aOU1hUTlNczNjdnl4TTV2a0dzSzBmUV94WERLeHJrRXB2UGVKVUpSWnhfTzNCenYzRGsxSFQwYWZTUDI4UTg1VDBXcWdFRmV3dw?oc=5",
      "date": "2026-05-20"
    },
    {
      "title": "Why U.S. Allies in Asia Are Chasing Nuclear Energy—And Eyeing Nuclear Weapons",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOV1FqRGJKLVlqSVNUM2xvM3lVa1c0Y0FwNE95YXBscWc4ZmxoeW5YbUxqblgtX01kM25JcXp2NWRlUlNlTTQ5QklkbTRETlFfVnNaS0FQanFNazg0NmdKeU1QaXU1UUg4d09rdW9NMDZNOVRmQ0djM3pJbDk0WHpfSGxKbS1SbUU4NEhxTVRNNjBfWVhYQVdXWHNtNkg2d0l2a0JQalNXMk4?oc=5",
      "date": "2026-04-06"
    },
    {
      "title": "Tanks, guns and rocket launchers: The ties that bind the EU and South Korea",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOeFNaaEdkVDJwSEkzVUY1U1dyOXRNU1FDbUgzRWQ2TUJFc0xYNWNaVktRbHozVGNBSzJ6OGw4bm1WQWFRU19haW5LRXJNZEhRaFlNMmxmT3duMVlPR0p0VldkdGZIVDhCeU5tLVdScGtJRVUtYlN0ZEJiTExVcG1NTw?oc=5",
      "date": "2026-06-09"
    },
    {
      "title": "ROK to produce first nuclear-powered submarines by mid-2030s",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMUZEU3NHU0xQQ1d3MjR1SWg2ZnItemFtdFl1S2hWQ1BsSzlQX3JSWFFZVG56MFdfOTBNNVFVWkJJNzliaDZzcmIxSC0wc3NNZlpwc1QwLTlUMFNFU2ZzMGlldkIxaU94Tk9ValRnc3JFWURHdEhHOV9iSklQVXFBU05pLWRMU1BHZE5JXzNMaThsd3VQMlRkV3YzNWw?oc=5",
      "date": "2026-06-07"
    }
  ],
  "israel→south korea": [
    {
      "title": "Switzerland in talks with Israel, France, South Korea to buy air defense systems",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNOGNfdEFiQklBcnRyOVF0Q25qN2Q0Z2dVenFKNG5EbU14SmhkRDgzOHdkLUxERUJZb2VEVlBnODZwSzdFakM3ZGFRME40YlJyeGxuaUcxTWUyYlpRWUgxQm5lRXNXT0lJN3B6ZXNBMnlHV0FteVV0SWkzcTBPUmVjaVhKX1BhV3BNODlOSFpFcER4NU9iWWVBekd6eTJlOTE2M0c0eWVaR1MwTXdpOXfSAbMBQVVfeXFMTkJSejlmZ0xad2VwZUxIRHAyNkRBYzRWWldVaDRPYWc1VU11eGFlYUd1Uy1aREw3dzlkT3AzQnJadGNwdXlsYW81cTZCZVEyakRqYjdCcVhpdjNrUWtiYnlyM1VTVi1hUW1jZndfcVVIZlVvc0FPenAyNE5iT2Q2ME1XYVo3clYxRlUtUkxqWVQ4anBaaFp0a25fOUlkNEw4VkdRUDcwYXhhV2tpX3d5MFlhNnc?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Why North Korea Got the Bomb (And Iran Did Not, for Now)",
      "source": "38 North",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNWDVRRmpQamQwckROX1BzQlJkTUp3LXBsdFh3dUVFUGlXM19vN096YU9HQ3dSbXhOOEF5UTZWb2MydWtIZ2ZpWkl1dkF1TDdFQW4wbHNydjdaLU1RbHdMLU1KTWZCclhJY3NnUmwzdXU3ZVZHY2tBS1A0S3c5RXdKeFFEeGlDZTRVYzJiWllTYw?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Swiss Open Talks on Air Defense System to Diversify From Patriot",
      "source": "Bloomberg.com",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQY01GRjIwLXlqazdkeHJqS3RXY2FOZ0swbGxXS0htU2pYRHo4Ul9hVHVoZVZYUFEtNmJGRGJ6Zm1BVmJGYURndVZCeUQ1TkFUOFBsU0VxZzNhc3YzQnZGRHQwV2pkLVlpbmVtRTJQQkNldmtoRThULUVRQzEycW56anJWWFlGT25CeExmWWNsMGt2cHhmdmlscFg2ZkVCZTNQbWVTN1lmYzNybll3Rk00NFJWbzNkdw?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "Switzerland opens talks to buy Israeli air defense system",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFB3QV9zcVJjV0F6Y2k5Zl9pMHVDZkZJU0NlRmM4M1kwLUVqYnY1VGlSYVhJNDNtY1FFQnNkMi1GYldNWEgzSzdhR21RS2RqeHBZdE9ZSGEzdEthNm85R1JEb2Rldw?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Switzerland starts talks to acquire non-US air defence system",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNc09jX29WU1l2d3VBWlh0dzFzN2VvWE1ZUmR4UlB3TFJvcm1rbEZpZkItb00zbURaV09TQ0dZZ0NOLWFvbDhLMGRRaHZveEtfUUJ6cGF5NlJXY1FxcEJhczViOU5zOHYxOFN4VkdCYlVPN0tnZHRzNVZ5N29Ia3A4TnRaMFBIVUhwQWVSTzlOWmFjQWpoanNSdnVQN2VONkc3QnNXRUpFNFlYTU5wWXZ4dWduWjladzVkTnpNMURR?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "North Korea keeping Iran at arm’s length, reports Seoul",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNX0hFMXgwdi1nLWRzU0dxSWFiMXlYNHktV0xvSElsRGZhcHpRUnVuNHJZSzczN3pLb1lJR1NtdzNQNmJtZG1hazFQdUlhWFJRYm5sQVM5T29ycWY4R0RVWkh5OHJ5STZEVDdiOUJFRUpyOUg5cjRfRlZ5MWR2a1laOEQ0c25tVGZ1c1ZBZVBwcFF2YVRXZFhscNIBngFBVV95cUxPYy0wU3FWUjZsa2RKNlBqNjJfOUJYSWcwbzBPMG9NQzVCS1RqWVc0VVR1N0Y3QjRSVDB4aWIxQlZxeXA1aUh5b1hfYmF5TmZkWlZVZFlQUGF6QnZ2aFc5LWZyLW9jMDhDTi1vby1ZMlhtX0U1NHE1ZXJPeVNvMWZWWmcyRmdoRE5YbUtqTDJBYVRVbFhVV3BLTW1qMjlRZw?oc=5",
      "date": "2026-04-06"
    },
    {
      "title": "Switzerland in Talks with France, Israel, and South Korea for Air Defense System",
      "source": "وكالة صدى نيوز",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5qMDNwcGRrcE1nNHg0eUU2UVNIdFNCaVB0Q3VBNjNDMUdMcGZ5RmdkSkNjNXNLbHhfOERqSHhtVDdST292TjNwbGhiNDBvT2tva0I1S2d3?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "South Korea to review phased contributions to US-led Hormuz initiative",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOOXk4QUY4S2p5WUtjUWM2WFdNV1NRYWo1by0zM2h1NDVKdEZxd2dINUdQdjBsOUZacG1QTDBsN0pqLXg0SGlUWDF1OEN2bnpJcGtQS29TejZyN19IQ0xYREp5NUVZSlNmclVTM0t4Q1doZFpxNkVqVVh0UEw0VVlkd05qSXVRTFFSTTZIMHdiN2VmRFdPemJXakZtTlN1WW1SSEh5eU1Lbmlib1lXeTRUTnc2THU4S1lkMHlaZEpCMA?oc=5",
      "date": "2026-05-13"
    }
  ],
  "united states→germany": [
    {
      "title": "Germany set to become first international site for ATACMS missile production",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQUEdNVndWNzhoREl0dmJtNHdsblBrUE9zS0pNaUF2TzhvLUM2bTlGVUYzQWZ1TGFZSmNvTFFiUFdWRXBOM0FHVlpRZnlWNzUyVHkteGdhTzhSNkw2aUYwUGNQazd0M2FBRmRRSEJVWERraUFCT1B3dDBWNkV3OHE2TGkzbFU3VEExY1JreFhGXy1wbGo5REJMRnlkRlNEODllbFdwbXNzUHV0SmhwelhfMzJ4RVFGVnJZSlBnSE5DbFhheGpMeGFHYXF3?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "US Approves Sale of Tomahawk Missiles to Germany: Merz",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9HeEtwbXkxdE54R1RKVnI3QTFNY0tiRDI4MnlDNThxcXhTX0FobFhlS3hnaE9qRzlpWnBvaFJzb2p6a1A1Q0MyQzJlWTZLQW12ODhfSnVldndZdE0yZU5kUktwVlJOd3JGX2xpUmZVb1jSAXZBVV95cUxNc2VxX29sOFRwU2FWaWZUV1dmcGtrUGlkeFplN2t2UUl1SFVfcnFMNHJxM2M2MTFOQlNXb2VVV2RlTmZfZHVxSy1MU1QxSWNEUGhnRVZrcG1lWEM2VHRmOXNfcXBLS0ZqckVJdmNWc0NMaVhSQkFn?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Germany to buy U.S. Tomahawk cruise missiles for domestic deployment to close strategic defense gap",
      "source": "Defence Industry Europe",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNb3NTVHpibm1raUtzSjJHdGxBRlF4N2l0N3VpR2MwMmswaE1ZMHBrZlN5R0xTNWRCUTFFV25nYl9LLVBIUFBIWGQyalhpdGY2ZElwZklPZ1g3Zm5rWkNBMksyaVJLNkl1Ry1kbzdkNFhoN0c0d1FvWXZtUk93RlRDWmVkQ1lHWlV3Y1Qtd05BRkkwdURhRnUxTVVNcDBsSF9SWnJKMUIxMElqY0VGZWpEZ29BOE9kSC1Dcmp3bWlEeEFJY2c3c3c?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Germany ramps up defense spending in new budget plan ahead of NATO summit",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNZGIzd3RDdnFTUWxrUFZ0R1lQQmFpS3F3VzJORHZGVEo0ZGJiZkNrNnhCQzl4OTBLMWZMWEhUaGEtOXA2SlJPSnFfemF1VXIyMkhJRHZBNHl0RDY3ZXdZOGw2cjNDV25jTDBtQkJLQmdlckhDc2JGSndvcjd3YlRxaDJ1UHQ3YzVUSFJKM0ZsbjVFeDZlOFlKWW1MbldqZHQwWm52QzJOVjNhQQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "A Claim to Lead, a Hesitation to Act: Germany’s New Military Strategy",
      "source": "War on the Rocks",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQRmYxbW12U1dlbDV2UERkUkJ6Ni1jZDJ6YnhYem9raW55VmlzdFY3bXRSYzFXa2NSbXBmelR5Q3JpeklYZmZEUHZPWDBnMHAzY0lPTGZRcjdnNll2Z1V6RjNsMy04YWppYlhndWhNTVNZZnFLcmZMcEk1aWJ5M21jLWYzWFhnYUdFQnhrQ2RERDRJMTBPbWpleg?oc=5",
      "date": "2026-06-23"
    },
    {
      "title": "Berlin makes bid to build more US weaponry in Germany",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPXzE1a0Q5MWtxRlVSRVJMbXY2MmgtRVZQYmFZcERPM2tOQmRqbGRqRmZSOWp6YUxEeHZMX3Z4U1dNTlF1M3pEYXU4WWdNaHV5eGdRYW9taFdmODlGbUFhUExIdk9zTGtuU2dMZkprOHY2TkdHZkVyQ1dsbDBjYVo4MkFCWjNfZ3RYeC1vRA?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Germany Gets US Green Light for Tomahawk Missiles to Close Defense Gap",
      "source": "Novinite.com",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPSDlnNUJTVTZyQmdQMnd3ekJwN0U4WkZUZ0wyS1VOODRyYms4X2txd1dWeXJWS0t2VEhBNmZoeUIwMUtHWWgtZXVuMUFSdDBTYWttdFBqUG4wLUlGVnlHRzFkTFhpSF80U2lWd2Vkb2dTNTBnNkVtR093c05JZG5OeHVhUWZMR2tHNzIyRTJiS01aeHk5dEZ6cVpKOVZMc2w1SHFCcnRlWDBwZjY1czN6ZQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Europe scrambles to fill the gap left by the United States in NATO defense",
      "source": "EL PAÍS English",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPSmdpbm85cTBFaFd1RUpESnQ1VEltd3k5WldhVEY0U2JvcmxnenAxMTNLWDl4bVg3ckVwbnBGckUtSUJmeW1NblZmdmREMUVpZGlRVUJuMl8wMFQwdHJOdlBySzZFNERIXzJXZkdGVGRoZ3FjcldFREluVUQ0el84UG9VMU51aHgxZGc1NkVTLXhENE13enVLSnNvZmxJZ3BPaXFaSm0tVHNabk1RNVFCNWp3QS01Y0NSSDJzRmpxR2tDOTlrcFRGSlU5UdIB3wFBVV95cUxPQmc0OTV2WUxrZkpNXzZKVHE5RHRjdFYzWjFpTzZTUkQxa1FSTkhBSG4xanZtSzB6SEdHYVZYZXVkSWRobTY3T1p6SHBMM3kyWkdENDdORTdQX0haQVVhSXczcWlaY3VPWE1JSFRHVU51Y3VRQzVkc093ZUZzRHVWNzlET2FiQkNOSDJuTTNFRTE3RlAxR0xFZHlrZVNYc0pYbTd3ck5wcW1wUjAyTlRiWGpQa2FZM1EtNnJiN0JWTWN5X2RhME9uSmNNMU05U21sZFN4ZUVYWGg3c3RMS3o4?oc=5",
      "date": "2026-06-18"
    }
  ],
  "sweden→germany": [
    {
      "title": "Sweden and Germany sign letter of intent on air defence, Swedish government says",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPTGY0TGo0bGZhV0dCMkN1TjNBdmxyRDdfam83T2NoMFR3aDRUZjFEUXhSbjF1ZGtaVGotS2RxaUthejhDaC1DamhMQXRlNWdMenNPNDBVMDRtSnd3NTZpRVZ2V0dJNG9UeTBsUFVGRVJOREJWTWJIYllnR2oydVU0ckJIeDZickNHcVhuSk1nQ1JNVkpFTmdZWC1UTXpuWVI1U041Um84UTRyVEo3Z2FMNmdwUmtYcEt3SEt3RkE5YjJqRTFrOVI5TTJJLWQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Sweden, Germany Outline Defense Cooperation Plans",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNZnB6dGZVYW5qZzZKLUNTcXJhdmhNdDFDazdNakN2MVJtYW16MlYwczZCVGFQM05uVjV2U1k1YjF5d2NyaXBCVnRMMDZVamo0TjFoUElsVU42MFJONFN3QWc4Q1JYNGk0TTJOTmhLRWRLalA4ZHNrTnVMUjRRcXQ4bk90RjNlVXBTczFEYWk5WFFkN3JZeTBrbFlDU2NJcmlmR0RwNlpGVjA1UQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Eight NATO allies to create new satellite mega-constellation",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOUTQ3WDFKanRtWU4tQ0xSWERMRHFZRWg2QXZXdWtyVDUyVHdYX2Q1LUJYWDRiUDZSZ2ZsMHZUWUItMDRNODY5WnBvS3pBZHhyOXEtOERjNVNITHctd2o1RXY0QmJWbDVWWllHT3BDVnBjZzR1MmY1UFdPZFR1VG1fTnRTQU42bDRLc2hRdXA0QlB1aTVINkxkczdGdHM0Zw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Germany and Sweden commit to expanded industrial defence cooperation, but no SCAF…",
      "source": "Meta-Defense",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPVEhiNlJVcy1ESUM1Y2Uxekc5MlUzenUycXhzNWlzVWZZWm96Y245SW10Z1Z2WC0tajN6MDhDdzBJX0tjZ0ljMVlaTUliQ2FVejBNMExDR0F1NU9JelJRSGdxdGx4QUtyQmhmN1N0QVR5RkFHVTJwdHR5Z2pUUlFoRnJZUmFjYUsx?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Poland joins European Patriot missile maintenance hub alongside US, Germany, Netherlands, Sweden",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQXzRsRzF2WmxhZzc5MExOcjg2ek1aU2J2TllhQlFXSHBMSEt5X0VRb1lKUFc1UlQtSk9mLWNQdXpfRGViaFNZcTdDTnNaWXRKOGxyOURrVnNSbDcxX2NfQmdIMW5JNHZpWEdvQUgtSGF0Q29nQWt4Skh5Q0txUXVSMnZZWWtuUjZkRTNoQ2ViRFBfWkpOVmlFMnBuXy1EbkpQbktBVU1MSGN1RnpxRmoxc1h4QTVwRDB1VTE2TDhpZjZCSGlVVnNGcUNtdnJVQQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Belgium, Germany, Sweden, Netherlands announce new military aid, F-16s for Ukraine ahead of NATO defense ministers' meeting",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNOHdvdjcwTEVtTlh6LTZHRk4yNXdIOElYRFU4NnlGXzBHOWo1Y20yallTV2JMY01rYmpaZUZSX0M3cENERDd2a0w4dFRLdVp2S3hVQzltQkp1WktPci1NV1IzVWh5Vml2T05jRHEzaWFlTTNLTGdaR3ZaeHJsWlRpQnU5RmM4ajBZdDhSWXdxVHFKV2ozT0c3OVZoYzV2Rm41Um9WaC1RLUtncUcyQkxNWXo3T2lxY25JbVhCMlVFY0xLcWxyN1Z0bG9kbGdycmFGS0YwN3dCbkE?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Sweden and Germany Partner to Deepen Air Defense Cooperation",
      "source": "News of Bahrain",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9GQ1BOOTRpVzk2OHg3d3d6QlJXeDNOMFNhTGxMMWhKZ19QSlNqRWFRNGp0NVhHRnFFbUVCNHMxTFNIU0JYaVpUbjBmNGVxdGVENkhnX0dEdXNhNjg?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Are Germany, Netherlands 2026 World Cup contenders? Plus, Sweden's strikers, and Ecuador's defense",
      "source": "CBS Sports",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOenl5bXNKVzgyNEFxQklGMUxCSnpiVE5TMnltR3R4YjdJUk8wZjNiWU9aelNqckxuX1hOVF9RZmFkWHVzUU1feXFZcnRjNy1pZ0lmQmRFanlQLUQyQzZ5RG9zMFlUV0NYaEU2eHU5MHVGcnNxWUFzajhFOG5HZDdVNzcxSl9oaVJWR1VwYW9UbHlSdw?oc=5",
      "date": "2026-06-14"
    }
  ],
  "united states→indonesia": [
    {
      "title": "Indonesia joins RIMPAC 2026 to strengthen Indo-Pacific security cooperation",
      "source": "Indonesia Business Post",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQN2E1UjQ0LXNZem13b0dLc1lMQllxaVFCVGdaR0Y2YXBwNjllRW9nTDE1czJhVUtKQ3dkTVVWd3JjaWkxVzN4eW1KVXVfaWtyQlF2TW1ybVEteDZ4R2xUZnh1UF9OekNNdl95Z3NxeVo1ZzNORnVqc0FtU3lnVm9WcUZlLWNtbVNhZUJRQUJlOEs2LVdsWWYxMFVJRE1kVEZPNkM2aWVnWjUycERNRTVsTWlGTnlxNVJ4TGhjOUd1WjMxVVpnWGYtaVl3ajRKLVpt?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Hegseth, Indonesian Counterpart Announce Defense Partnership",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOWkFYX1Nwc1R1b0I3ZHhfcFdNcXBlWmVPRUxVUHUzX24tTlViSWVoVmpCa1V3VlF5NmdxUnNSTFJCOTA5UGg5cGRRckRyaTV4S01xNl9fb19EUXZISm13Uk1IclB1WjNBLWhzTXVEVlFJODdZUHkxcTZvcnRxWWhDM0gycXZOZkxKMmo2aDdGdkk5eVkwMWlWSklVVlM2YWhrMjR5aXNrSmJsQUF0eHVBaEJUTWh3ZmpyZnZWR1A1bw?oc=5",
      "date": "2026-04-13"
    },
    {
      "title": "Indonesia, U.S. Enhance Long-Standing Defense Partnership",
      "source": "Eurasia Review",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNWk5nb1FfRnQtRm85MjlfVy1ld05TcFk3ajBWT3c5TzZuQVVPZEhtSkpfeTdBbldxbTBRT3FCdnIzMGZtd0NHQk1PNlFkbjZCZWg1djFvTlR5TmU1NTNfVmVrR2h4YS1kd2d0UnJhcTRRcWlKQ1NYZVVpVzdJalIwZDlNaG9fRWo2em5WdnVYYnp6Q0Y5NWNQT3N6WQ?oc=5",
      "date": "2026-06-01"
    },
    {
      "title": "Indonesia, US Announce New Defense Partnership as Prabowo Visits Russia",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNaW40OEZWbEE3ZmJobXFZZjBVemp4a1ZzcHRWVE8xNEhPMkhSc0RYN2h6YmFfaThCZ0dhWmRQekI3NWhyOUJxcUZ3M1JWNG1NZ3prTmV1clMtNV9RVjlzeHFPZ2Ixd2VyRF9YYVE5ZVJyT2tRQjFKVTI2cFRwWGk4bmZXN2RLaXVtbTRPbmprcUdodkNhNWc0eFhYMGRoemwtZ0lMcVZR?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "The impact of a new agreement between U.S. and Indonesia | Opinion",
      "source": "Deseret News",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNb3UwTURpTUZpMnFSeHFBUkhkTlotdmVvZnJaLVNydlZfZDBZNzdxTnMzdzFCZThOcC1kaDZkanR1X1hkNXRobzJBUFNnWWtTVjRIQUVnU0RMTGpDR3QtVl83VlgxcXgwYll5Y2doYTd3RV8xUE05XzVuVk5KeG9Ccmd5Yk90X3A2bzQ1c1R0aw?oc=5",
      "date": "2026-04-25"
    },
    {
      "title": "Indonesia Shows Where US Defense Partnerships Are Falling Short",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQZnVBV01xQjhXVmlRcDBlOVE2MXZWVmViUC1zYkxuc2VQb19PV2MzM3ljekdqREdMaXdGUTNYUUUxc1FBVVl6SF9kNmdEWG1HUEI0WEZVcVA3ZlItbml6cm5xLWpwaDdmYW1mQlFHXzlfcUpGZE9UaWRRR1JrcW5KeXo0RW_SAYoBQVVfeXFMTU9yM09kal9obmFMWTFwN2NINm82R0x1T1BmYTBvb3RLdElMWno2UEl3dW5STmxWaHNvbXdmc3o1MWUzNzMyVS1WdFBKLXN1cUItM2JQaXdXVUdUVUpXczFKbFltYUlWbExHVDEzdllIRnRfQWpBa0xjRFo4WWRndGUtNV9nYmw1LXhR?oc=5",
      "date": "2026-05-06"
    },
    {
      "title": "Indonesia, U.S. enhance long-standing defense partnership",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPSnRKZ2RTQ2x5MUgydWp0TWo0SW0yQkxTZm40VnVHemktb29IWnMtTTAxc1ZYTVM3VFR2cTBBUGVOcXQ1N0FzeUlMd2I1NUVYOVZOR21ZcGo1NGU1TGU1WjR1cFVtRFZvYUFxMlQ4TlN4N2VBYi1McTBldVNJTUNrNHVkdzNtQ1lJQUlNaUxGREZMT050dmc?oc=5",
      "date": "2026-05-31"
    },
    {
      "title": "Why the US-Indonesia defense pact is a big deal",
      "source": "Washington Examiner",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNTGdKSmhmYXpQcnpFaHgzT0M4dDlOWGE0R2xwdFVyeGMzV2h6Yzhncll2SXdMVThZeVJyX3BHZUJyNmR4ZWxWRWRhUVBUZXVFX3pKai1oNWcwMEJuS0RtRFBWR1AzUkQ2YUxBaXQ3T3BsUVpqWXgteTA5QkNidzd4ZHB2VVVyWUV1Y0V0b2NfMUV6NEpCdGl3SUJaYTV6M2JkMHdyOFRBbm1aTlB4YkZfbg?oc=5",
      "date": "2026-04-15"
    }
  ],
  "france→indonesia": [
    {
      "title": "PT Pal, Naval Group Kick Off Production of Indonesia’s Scorpène Submarines",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE41ZElVMDlKVlVtVFhxbjd0VXdXd0t0QXJEaG1iMnBHeG1aajJuVEZCelFzYnlKNTJtdnUxbWZtdXdoS2l4cUZZVXFqSjlfSUhra0FCLXgxS1JyS21WSk5TVlAwZ0xmMFh5OVRHY0o4dEJrOGNqdnNn0gF8QVVfeXFMT1ZnSTlnNFpXc2N0cnFOOVJmOV9JazNFWUZKeXdwRW9HbUlSX05odzFGNFNTSlhra2s2Z1BpM0JET3RQUWhEQnJFNkZYRVA2TW85bjAxcnBkanNwLVFSMkl0RV9TRzFmWEE1RGRVS0FMVEJaUXdBVG96NE1sdQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Indonesia, France agree to boost defense industry ties",
      "source": "The Jakarta Post",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQbjlCdjFYSGcxN0Y4NmFuVEUwcF9hVDloV1ZQRUhFd3VkNVNQbzNMVzRoUU5Xa2ZZQUVDUEVRS2RyWDY4MUR1WVN6N0RuQjcwbVdwVWRDRERabW1nS19OcjRhWGMzV1lNc3FVZTBYVENMaTRoVGJXeUJOZFg1Wk1NZkJPRHJJTjBZbHhQQmJZczNpRkk1ckpQRlQxTWppaFRxN2R3?oc=5",
      "date": "2026-04-15"
    },
    {
      "title": "Indonesian defence in the Indo-Pacific. How France became the main partner?",
      "source": "Defence24.com",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNdFFhTTYweUhJYmZkcFZRV2NJVzN0X1AyUjNhUko1MEFPblFpRjRVOW1vWU5vckdSXy1BczhackEtY0hqRmJWcTBkR3h5Umc3XzRndVoyVHpCei0yLU9maFU4eER6LTI3dmpWOGx5VldUeFN4Q1BMX3VKNmZuQTNpellVdHNvZkIzVVc1cnh3X0hOLUR4U1hwSUxNaVd2elBaUnlCb3ZQOFB3TEE?oc=5",
      "date": "2026-02-25"
    },
    {
      "title": "Indonesia expands defence ties with France on back of Moscow visit",
      "source": "RFI",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOTFdpY2RjSm1iUlhTR08zRnBUTFJQQmlHMVVUY0tVOHluWEdYLW5tZlRwVnZmSjRUZGQzYXJxcUZyTVpkM3k0WnhHU01jVVNVNTRkeEczYktsaGM4Mk9pbnBjRmsyQ3REeDB2TTFzR0pZZmFFX2NFX1lyTlVQeGpfQ0ZWRW05Mnk4d1l0djVNUlhRaFlrRjJjSWI3bEw2RVJGdmZNODdXRnJSSmNhZXRhRw?oc=5",
      "date": "2026-04-15"
    },
    {
      "title": "France-Indonesia Defense Ties Take Off Ahead of More Rafale Jets This Year",
      "source": "Jakarta Globe",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQVUNiczZrbnhDTElzWGM2TDhTZHVBSFZqRFNJLVpkUERyOEV0c0V6ZFM5V05FQnVEdTgtaThIMVhGOWFqSXYyZld2XzhFdWE4VnA1QWNkem15NUFtakYtUTUxSnhEeC1pbWphSUQzZ2J4Wi1od3l1V2tNVHdSMEdMT0RYRnVjbnI1WHJ0Z0tDaFNubVNRQUZicTZQLXJTbllNUkJFRQ?oc=5",
      "date": "2026-03-24"
    },
    {
      "title": "Indonesia and France Strengthen Defense Capabilities through Tactical Vehicle Production Cooperation",
      "source": "VOI.id",
      "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE9hdEMxQVZxT1BJMEJXM0xvcVBEOXpERGFUbzZvaEtfdG9jV3lFcTdDRjczNDgxTUJMb245TU0zOUNyeTNDdmlr0gFCQVVfeXFMUEoybTZPVmZidFUzUDlNZkVMeTMwbWhSRkxHNVp2cEJEZ1loRC0wMDNndHFTaHhxelg1TzdaWk5CSWp3?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Prabowo–Macron talks focus on defense, energy and infrastructure",
      "source": "Indonesia Business Post",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxONnRCbG5Yem03dFFzSDlJZUNMUzlVVmdzYUdPRnNjQk55MzNIdnA0QU82bVk3bFR1N3pCUFc0dlQxSnRuODR2MjB2SjdXOF9JWWtWMU9QNXp2V2U3cGJfVzlFNlZndER5ZjlWNGNYejVhODR3bTRKU2hORWlGYk50SXpVYlVNcW5hQ3ZZc1hwRW5KV1JYNGk5Y1hEZHR4b2RZOV85VF8wMlNGVUdRV3dhOE5NVlI?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "Hegseth announces ‘major’ defense partnership with Indonesia",
      "source": "Inquirer.net",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQb3dSZWVDTzVFQ0N4RE1YRElzaEU1OG1jQl9tblFKSWlPWmw0MUJ1ZVpxRXJ4WER1NXFrQ2gxZkZYcU5RaG90dF91V1RNaUNiUTBXMTh3dVhvZmM3bHZuTm1xZHNLZE15XzVDOHFHRm1fVFpNb2NZMkNZeV9WZ29aeUdpaTFWSmtTdlE4VWNlLXRjdndKaDQ0Wlk5TzVMd2JZ0gGmAUFVX3lxTFB0dkVUanB0VjZqUEpnTVM3VFRJSmRESEx6U1NBVld5dDQ1TDE3TVdUaE5xRW5LVHBaS1Z0bTJ3RjZzZ0RLYXpoZ2xUX1ZLQkNiZkRpalBCYnpXQXVMeTVha0diZFZNODZyRGk0STJnNkFjS21KMDZBd2I0NzJSZWUyRmFSRURUV1dLdkJ3SjNrbldCNUNlME1uNGt3RDFBdjN2MFpva1E?oc=5",
      "date": "2026-04-14"
    }
  ],
  "united states→greece": [
    {
      "title": "Greece’s Defense Minister Dendias Receives Delegation From US Congress",
      "source": "The National Herald",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQNDRGanlIYWFzVGktV002RzlkRmNWSzB3X2MtaFVQcGI5TjhRN0I1T1ZONmhCTWFMTVZ6MFJzLU0tN2ZQQ1VhUWgxdGJ6S2RvRmg2WUVCVG1oREVHZWdPcTJSRTcySnpUaTFUYUw3QWZtZlZxNlllY3piaWZuQlJObFlYdS1Fa2ZtaVBQVEtvT19udGFOWGpRVlh1cUs5WGlPb05LV1V5MA?oc=5",
      "date": "2026-07-10"
    },
    {
      "title": "Greece warns F-35 sale to Turkey could affect Eastern Mediterranean stability",
      "source": "Turkish Minute",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNSkZRNkgxOGtaVUhIMGRPWUVEVEZwV1VNUjExdU5EbVlxN2VMbEJZWTRackVDcVJUajdjdWp5SExuVHNGODNYN0t6MXl6OE1ic1c5c1piZ3NiX2ZGYTRHekhnMjIxVHRTeUxKZFd0Rmxna1VZVXdtM2NRYWEwM3hCcmhGVU9Rd1o0SEllOTNqTzNsYndGSDBtNGVQV0R0eEFGTS10OC0zM181blc3RzlhekNHV0N2ZDQtT3N5RzBZNG_SAcABQVVfeXFMTUpGUTZIMThrWlVISDBkT1lFRFRGcFdVTVIxMXVORG1ZcTdlTGxCWVk0WnJFQ3FSVGo3Y3VqeUhMblRzRjgzWDdLejF5ejhNYnNXOXNaYmdzYl9mRmE0R3pIZzIyMVR0U3lMSmRXdEZsZ2tVWVV3bTNjUWFhMDN4QnJoRlVPUXdaNEhJZTkzak8zbGJ3RkgwbTRlUFdEdHhBRk0tdDgtMzNfNW5XN0c5YXpDR1dDdmQ0LU9zeUcwWTRv?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "America’s East Med strategy is working",
      "source": "eKathimerini.com",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPTWNBaUdSS3VsZVJCLXgxUnNSRzd1OS1XbGZtVnFRVi1YX2hoU1E3ZVg4Zlc4MU1VZjBMVXlCU3V4VG44SGJSSUdzOTQ1c2lDVkVQUTg1akpSblY5MlRXMXZvNUt1RGg3Y0RUZDJJajlLVkhhRWlSTWgyM0o2VGRORldyaWFrNERnTjRZ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Bipartisan U.S.-Greece Defense Cooperation Advancement Act Advances Out of Committee",
      "source": "Congressman Chris Pappas | (.gov)",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQYXh3Q0t3aUdnMS1ZT3hlQWNvVzhqbGNKOU9KbC13YlJlVnVBckhod3ZyYW9paEc3N1YzRzVMSk1Nc3YzX1NOVUVkRElKTXUtVlZlSFY0MHlnMlo2QlRfd3hpa2VEZGU5X3NQNUZLNjNnSEVEN1dKUDhCZTB1dmZpLW1sUFVIdHdaSmxzbjlfVkZNcTlDNGVlRW52aG4xR3ZxQ0Y4cGRZNWo5Q2dEbmNZdUdnU1QwZzREeDJNOHo4bTctQm11RUFF?oc=5",
      "date": "2026-05-15"
    },
    {
      "title": "Greece’s Ambassador to the US Meets Senator Rick Scott to Discuss Defense Ties",
      "source": "GreekReporter.com",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPRm0xMEN2MTk4UzJHNU9UcDVzSW5PNGNrUFRNQjdwbkhqdFRSWElXb1NhSGxNMmpIMFBfbGd3NjNxa255WWpIcFA4VE5SdXFGQ0xTcHJRQlN0Z3A5dzg0TDhUeWJDbzFZV1dId3ZqMXpOLXo5bzlMOVY0QnZQRGpqdmdiZzROWk8xVy1YTjZJQmNkbVJEcW1r?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Defense Minister Dendias: Greece is not happy that Turkey may receive F-35s",
      "source": "NEWS.am",
      "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE8zbng0RU1qR0NGaWpJakZYNjFNb0ZneF9DODdQVmdSVm5rbENRNldhdFJfSUF1b2g4ME1ySWtNbXY5UVJLS2c?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Pappas, Hellenic Caucus Introduce the Bipartisan U.S.-Greece Defense Cooperation Advancement Act",
      "source": "Congressman Chris Pappas | (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOU01qTG9seGllc0M3VVBkWDZUTS1tcnFWZWNaQW96Q2ZQWjhLX0NCejl6YTBvc3lEVDgxZThPMU93ZW5VTHhEY3g5aDdiYnNtc19ZbXR3cnJncHh1YVlWREdBY1VXVVYwTmVVakYwT2d6dXpfbFNUWV8zeHpQbjJwM0xwWlhVSUtxUUxJdVN5SmpteUlZZVM5Mk1YOWwwYldjNTRCTjZRaGN0QnpLM2ZTZFk5cmRPZnZTXzBkY3Fta0dBU2tyNDJhSXBYVnBEdjNvY1phYg?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "The Right Way for Europe to Spend More on Defense",
      "source": "Foreign Affairs",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOWUNFVnlDdm1HZzhVczZJN2MwbWY3TGdVX2pDUzRnLU1HbHk1c0lxejVicHdnY2ZZbmt3QlNVU1liY09PQ1ozOFpnTXlVRFRLOTVTWktBUWl4V2ZIQUtRajZhSFdFNVRNNTh0d0VDZWdMVF95c0MyTmhFOGNpa0twZUwyRXIxMUE?oc=5",
      "date": "2026-05-27"
    }
  ],
  "italy→greece": [
    {
      "title": "Italy Vs Greece Vs Albania: Military Power Comparison 2026 Aéroport (vO0eSQrj6P)",
      "source": "Mshale",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE8yVTQ2ZlFOSHlkeXluYko4dE00WG1LM01YUHg4RDZaTGZTNmJTb3hpdTRNUURrcFhkSUhISllJZ2xBSUFjV1lzcmw1Q0xSOXVENVhjdy1ONDk0OFdnbDhjVw?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "Italy and Greece deepen air defense coordination in the Mediterranean",
      "source": "Decode39",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPbUczdzRnRmUyWGNXTkR6ZzFmaTdUSUUwV2tlSXZmZ1FEbTJJckRLNjIzQmVTQUJCbHg5Q1ozYklDYUdheTBwYTA2dnIzOEpHUG9fX3NKZE8yWmhkU0dtNHZSaFNuSEtfQXZTd044dXBRUmVFRDFENXZhaDRiRDZEYUhXQ1ZuTDZITDdPdnZuMEZOazZwRVQ3N1NObjdOZw?oc=5",
      "date": "2026-05-14"
    },
    {
      "title": "European states move to secure Red Sea navigation, protect Cyprus",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQbGUtTk9HMy1YYVk3RktQek5XMm82eHg1VFZ1WWxNVWgyRTNmSW5NWk4zMVNEelduTE1BekhFMjRibjJtSXFtUGY4d014VzMwSTVydEUwdjJreG9JVURMdGRsa2p3elN4Z0RxcmpqZU5GOHhwbWV3ZFV3c1VXbFZidkpZSEI5ZXExX2J4THVJMFZ5SnVLLXVxd0xjdmU5LVF1VTBMXzFnVmFTYmhBenJtamltZWNRRHRNaXp0Y1JtMkhqa0ZoT25Dd0h5ZkNmMWE1aDMwWFJlOUI?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "US Navy introduces free Wi-Fi to barracks in Greece, Italy",
      "source": "Navy Times",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPLVlRSmllTHBsZVlSWXFKeTh0UU5pZy1Td2VqNXk2SFB2a1h4d2V4dVo3NGlNS0lmMmFyZGEyWHBEV0ZSOF9NcTBsRjFmU3lRMTBtYlhCWUxQZlJJLUtxaGRxRlRRbGlHVEI2VDZMeGcwci1oLWNpeU9OVGhJZk9IemZKLVRXT3E3SXYxXy1UVEx1bDRucHczak14ZXNfT2dJaXZRWVViNUhpamdGNUEw?oc=5",
      "date": "2026-04-09"
    },
    {
      "title": "Why Greece Is Buying Secondhand Frigates from Italy",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxONVpHTFdzMlNhMG5BT2JBcU5QSFV2S0JlOVNxLXhFbFZ6bDU0LWNMNlROaVBidlRiNmlEM1ZYR2RDSTc5WkxLeTZmcWlHcmpMUUFwZ3lQcmhwVWxtZ2tkV0JoanNqczhkLW02UkxwMkVpaXVEQ3p0VlJ3eWcwZXdZUnR4RE5ySFRuR1JtZ0xlX3ZxVVpTMFduaWlJV3Qwdw?oc=5",
      "date": "2026-05-22"
    },
    {
      "title": "Italy, allies send warships to protect Europe’s southeastern edge from Iran strikes",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPUHBReTlycGdRMDBFSUJoNUdjcTZvSUZyd0NXOC1jSEhjbTc1NVB6ajliS09zUk1tUUFyOFJmd3VwYVBhSWVLSjVUWXpnbnlHOFE5QW93d2hQLVVDR1ljdnAzUGlMSE1NcW1QQTlFbzUzbFRYZVg2eEpSRHdjbXZURThOcTNmUjZjaHFoc3lCdUl6UTVFS2VSVi1CX2RiWW9ZUHZiVDBNTHI1bVRpY3NRNjdNdk9qeFhZbVNHdjdVbEwxeTdGTVFBMlZfTWR4U0xN?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "FREMM: Greece finalizes the purchase of four second-hand frigates from Italy",
      "source": "Meta-Defense",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5fTFZUYTJkR0NXcmtVSFlPRlZBYTNtQXZQZHk5YmozTms1V21sVDhtU2ZCUWtMZm9QaWcwMUFpSlQtZjdxVnI4bWxteUtnNVpQOVNQT0ZNUlRTT2J1YmZjOTM2c2ZVVFhHT3RNR0dYVUs5UzZHc2tRUkVVNFo3V1k?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "Italy, Spain, France and others send naval vessels to protect Cyprus after Iranian strike",
      "source": "The Times of Israel",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQUG9GeGJDZTJUbWZvOWU4eGZtRF83Zkhqa29JamlRUVdkV0VVaVFRSGVwQlI3WWR4elpnTzRzSVktdDlMNHNDcVJKeFlfandRRUx4MWhmMlhFbEt6aTBqY09fZG9lT0s5V3J3SWQxS3pyWHBSVmpZRFAyVURpT0NSRFRXSWRaWm5vb1Z4VG9xRHd4NHhCT0p5dDY3TU81YjJrTkR4bklhZXlPc2hWUkx3MmFMYUFtVksta2fSAb8BQVVfeXFMUC14Tjg1b2NmMUNJeE5aNU9ILWs4OWZmeUdpT1JabWtZUk9VblkwVVBiajl6NHNuOGhZWTJ2aXN1dFBwTGhQR2lEZDZfZXhiYUV0SG5WeFdja2JqM2ZQU09BdFpQdXhORTVPY1I5U2FFYWlXa0hPVVVDT3JzNFNRN2tFSDZEOFU0bm56NkhHczI2OENjZnhJa0hWN1hTamVlS1paek9jaDhxRUNPRFJrZnQ5V3FQNDNXZGxESko1WmM?oc=5",
      "date": "2026-03-05"
    }
  ],
  "united states→norway": [
    {
      "title": "Norway to Trump: We’re already doing the hard work in the Arctic",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNbGFmbEtscFpYZ1hYdG1aNy1yR3ZmUkZ0dXFaM3RxVVNlVnpOSHFOZHZPZWxOa2kyYVZuMExjOUZhRjcwa05sNWNGa3czblU3eTJ6aWpvRklwbnZHRVV0ZjB5R19tTDUxX2FmVU5Qbk9xcHpuQ0tsYVBBRE9YQWNCeHZuMFBYNkk?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "United to win: Norway funds additional Patriot missiles for Ukraine with €268 mln air defense package",
      "source": "Рубрика",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPeXdCZnIxSTNvZXIwR2VPaHNaNW1Ec1RCcm9nZHhXV3NzTFlrSFowZnVUZkRma1diZllaNnE1TnNZTVMzWlNjTXFsa0RrRnl0RVpwUldYWEN4MEhsLUJEVlFiWGZ1VURfb3FhNEp2NHNoQjlhSWc4Rm9NcUI0Q0JuYTFISXJOclpJRkE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway pledges €268 million for Ukraine's air defense",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE1kbTNob0xEaV9IT0NVTV8xVkdnUExHV2ttZ2Vxa1ZaVUpfUXYwbzNVV2thYzdPZm9VRVNuNkV1MVBiSGRFWl9HRVU2RVZCZnZ6RFFzc1hhcGFUd1pDZGhQMDRMOWVMbkhVQnhWemt6dXlBWWdFUDZEVmxkSTJlUQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway has allocated 260 million euros for air defense missiles for Ukraine",
      "source": "Цензор.НЕТ",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOT3J4WXJwYm1KRmhrWnkyc3NFT0NyUWJtbWVHVXhXYThIX2VSRzNsbjN0dTVjVnRPd1daQUgxbFk1RkJmMG03YjIycHVjX3VPdF83Si1vdkR2TFpMNGpWLUJVQU1VcWdPamUwTk9vbjJZc0pQV3N3MmctY2NFUXNyZFNQQ1dBR3ZyWGtuUjN6MjVOQ0NfTi1Sdk1HSnlpcjA?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Norway informed it may face weapons delivery delays from US",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOU9pV1VtSnl2YU94aFhIWFJHUUVuSmZRLUhRSkNfVWw5U3BQc2pHRjVoOEwtNENJVnI2RE9XR0RqSTIxN1YxTDBwa1NTaUN3ZG8ydmN4bzhQd2dpOVVZZ1FKeHRNaEJZYlVIanp4d0NfR3R0V0JWNDFZc0x3c0xTOU0weHMwbnJFMXpadXZEaUQyX1NTMlliV2RoVnE?oc=5",
      "date": "2026-05-01"
    },
    {
      "title": "Norway’s Nammo Quietly Supplied Ukraine With Hundreds of Thousands of N7 Drone Warheads",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPbXRSZWV6dG1WQzNRd2xwSkw2QlVreHd6VGJ1Qm91VVJEVjlWZ1NYRHNkLWVrYjJJZGdxNjYxZ3pmLVFESUZOdGVJWnlOb0U4THJWM0pJdlpGaUxsZTRVd2lxNkszU3RYSV9NZU9XdWx3aks4YklDT0pJMThCOXdGX2poT1RMYkFlV1QzODJfclQ2dmNCMllVVGZORVVNZkhaczNQcGYxYnV2dXJBb0lKcnUxUHItbWpnZS0xZnpULWVwaGNoWm9LTjZKVklBZw?oc=5",
      "date": "2026-06-27"
    },
    {
      "title": "Norway Pledges $306 Million for Ukraine's Air Defense",
      "source": "Devdiscourse",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPVENSUWpIa0FrcUJGcGNrNTZnOGhpMXNMaHNiaEMyZ2MxazhvZTc4dFJUTDZBNllxbDdmLXlvdTRYSkxDTXItVGRkcURBRWh4SU9mcUZ4akI1SVNiZHpMR0lSbkllbldDaWtDV01MbGtHUGhMV05fR2RQR2xxOFFQM0tjbXhwb1ZLU3BBNXdkNC13S19MdmxWbGVEbTgtekdRU21xZk1SUzTSAa4BQVVfeXFMT0RZUV8wemdLbWU3RUswTVVfMGNHc2xieUF4RXNXaG1OZzNMLXFNa3daeldqbWdPQjhWRUZLcDRuaG41QUo5ZTBZRDlZNC04VHZobEVtQUY0c2wxRDJxLXpwZ2pLMzhhNGpEZzhOdWJQdERpWHhBRk1RUUY3ak9CZDV2OGFOM21nRWFDZlUzZmRnb1U5bmc5aVJDSEFwY3BpS1d5cXh2M3IxWEQ3d1dB?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Cramer Highlights Strength of North Dakota-Norway Defense Partnership at Bilateral Conference",
      "source": "Senator Kevin Cramer of North Dakota (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRHdiYXZLUHdENTV4WGdGa1locWhuZXpfWnp1bjBaUDZwdHJmQkpWbWxTd1Nkcnd3S21zSGJITTg0aEhVMUlxUHI1YmhqckdiM0xLNmNmQUpjb19GcXBKQWVnRXRUZnBHZVFJb1dvQmp6MnVJTTZEOEFSUzZTdjFmeWNSeEljTG52UjR4MzY1a1dwZVZ4MFNncGpJRV9NY2NDTTc3TmNIMVlpbnZ0SWFPOFpiOFNtZmNpcmJZRFdVMmtPM194cjM3UW5aN2M2QThJRW5scWpwN00wQTg?oc=5",
      "date": "2026-04-17"
    }
  ],
  "italy→norway": [
    {
      "title": "Nations withdraw some equipment from NATO Arctic exercise amid Iran fallout",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNbGNZYTVWLUdya3BSY0VsVlYwVERKZTdEQlVRZVFWZVlLdWNUQW9MdXlwQjRHa3pVNEY5YjZtRS1BTmdtNm1ycFZ1c1VROERCZnVPX0JqZ1BZZkx5b2hkX0cxS3pOcE5TVWNvR0s0dnJmRlVGM3ZSa1dTbUV5c3ptWlRVWUJfV3hPZkJSUS04bGhxM1JMOEJTU1hOVkUtRFhZeFpLRUg3eVE2YnlheDlUcjhiUUhSMmNuODdyaEtfQ1JITEN0dXBXSA?oc=5",
      "date": "2026-03-12"
    },
    {
      "title": "Joint Statement Reaffirming a Shared Commitment to Defense Industrial Resilience",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxONTlSWUhyWkpoUDA2ZzhIRDc0YTFDZDRVY3dmYlNzWlZUYzd5blpVTzNpWmhXM1poTHVxdGlrbFdoLVozNVNzeXNNczJOZlJXd1lfbmNFOUFub2JtV0xzVElIOVlZbjFNRUdja2UycWZaNXoyMnJ2YVJRRXZHUmhSalF5aTdLaDF1Z1laWUVpS0Fmd1ppMjZQRjh1OXVaM21HZXgtejRLbDlQbWlZNm1meUVPaUVGdjNaQTN0bDdqcVB4UkFKZjZWakF3eS1BZjVWcVNZT2h3?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "Ukraine and five European partners just created a defense-buying coalition, and the hidden target is Russia’s supply advantage",
      "source": "OkDiario",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQaWpuTU51VjNNRGlLZzhPVG5lRE9UeGFXc3c2UENQS25WV19jQTc1RWdmUUJTUHlHNk8zMjhGUnMtLWtDTThKbERXZXdBQ2ludVdzaUU1ZjhieGwzd3lBcUtnclVoRFprTWhrSF9OQzl3Vnl3amtIcV82dFVITUxDQlBvbkxsQmdKbjBfbHZLOURtbEJyUXpMdXVrbXBmaGxScG9GYVlpSE03TWJtd00wVWpGaERKZ1dlbmRHUkdtcDU2SElOZzI1bm9QUGhxUmJodElmLXI0VFhWcGN0NFM2OWYwMVRLdXVfN2VGbnVNdDhSQQ?oc=5",
      "date": "2026-05-09"
    },
    {
      "title": "Ukraine Launches CORPUS: A New Multinational Defense Procurement Coalition",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQV2R3NXoteHJRcFNKRjZfOHpVaUlnbXFhajlnYTU1QzFBREhFbUEzNmZCOTgyMUE3WTZlNnBIY3AwbWk0dTNuS3BNZlVhbTZ4T1NhakJIcW5HY0RGY0FoUm10dkE2QXZha3Y0dDc0RHhjY3RvUmRRY3RhRndWMFM5TUd0YmtnVnFkYzFrZHVJc0JvaFc3Z0hya25WWWEwOUV1ekZQZmFHWnNobXpkRjFsVGF4UDQ3VGVKOUNSZw?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "Why Italy matters in India’s new Europe strategy",
      "source": "Decode39",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQNDlIQU9RRjRKMDY4MnFWd2I2cVVOeXNSMV9YTjdXQXpmVDktdDdJeFl5WHlvbkUya0x1Ul81b0xzZU5kX0lHclNvQ3kxWml2QWJLVWlBTWxmd2lSS08yYTc4QTJyRGtaR0MwYVNlQnlfenNJQzMyd0NzNjU3bkcwWVdsUVdjSnU3MXBETHAwVEJlR0tmdHNqQQ?oc=5",
      "date": "2026-05-21"
    },
    {
      "title": "Zelensky meets Meloni, touts upcoming drone deal with Italy",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1kQ0t0OGdmSVdRWV9LUFJjRUdMdE5XZ21XSzNVc2RvVC1EQ1hURVFsVHM2SV9kcG5iQmxLS096dkJwcDZ4MHJNMUh6dmZPZEYtQkZQZU1RajB3R19mOHVJU0RQSzFYV05PTGNIY3ozWUs?oc=5",
      "date": "2026-04-15"
    },
    {
      "title": "Zelenskyy to meet Norway’s crown prince before heading to Italy",
      "source": "The New Voice of Ukraine",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPS3dlNGl4YV85dUpaQV9HQjJmd0ZLem4xMGktam8tT1hyem14dXdWWDYycVliRnZiRjRhek9EVUktMjBHOXZvZnVqX1FjZHZtb3pVVUZZbmZGX2RuczcxenRmc25RNEFmY0cyT2w5d18zdzZ3b1JiV0Jpam43NEtmby1DQjMwREF3MThYb0ZfTUQ1NXpUOF9wa2Vyck1Jc0lNb3JZ0gGfAUFVX3lxTE5GQ0FqZzdpZmRsQXpKeE01Yk5wd1BWd1psT0g1Wk9WbTduNDMwNHVhMVV0NnJnN1FLRTlEbnp6ZEN1YkNXcXJiWDhJSHVXdGI2N3A0bUZTTnZCV3o5aXhRTzVmckJBODlkeVdRU1lTcWdpNVktMlV2WnE2YkxfUDRYWjh6Ym9FaUF6blBPcmZnVXk4elB2ajJZd2RCdzlTVQ?oc=5",
      "date": "2026-04-15"
    },
    {
      "title": "Ukraine and Allies Launch CORPUS Defence Procurement Coalition",
      "source": "Odessa Journal",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPbXJQT3NjQ3JGbXZUQ3ZzaTlLWDBDQnBtby1MNjVTX0YzS24yeHh1SnFkVUhsbUNsYXltWjh6bGJlUG9NQ2NuUFpxZDcyYnJsQXNDREJpekpGdFBBdEVDWVNSVFJ0NDNpNjFDbnNkVFA1VlI3d29CSy1hMHRnS2NUbzYzU3BOVlI0RzB4OEJwSklKcmVBY1VfQ2c1QWFiS1RqMFVZLTJCbw?oc=5",
      "date": "2026-04-30"
    }
  ],
  "france→china": [
    {
      "title": "US, UK, France, Germany raise alarm about Chinese patrols off eastern Taiwan",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPVGVseXVvMXkzSTdObGpJS1l5NmpvaVJsSWtaa210dmt4XzZPSWViTFRRWTNGNXFWOEJTNWRPX0ZnZUw3c2djSGN3R0tQME1Pb3hjdHNUN1pvOE4zQkk0V0hHd3BnbW9ERWxlOThQeGdmOEtwY1NLb3pGY21YSjVWNE5MaHQtV1RvOVpKd2RfeE9XLVpjSjJwM0xCUGszYVNidXJRaTN0TTRlTUNtWnlmZF9NSkp4R2RCaFEzemJaQzkxc1o3TTI1SkZkZWR4dw?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "5 EU countries call for tougher trade weapons to tackle China",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOSDFKSzd5Vkw2bHB4cG1Cc0VMWTN5QjJ1bjFFRllSeTVoYXdPSnlIWjFLb0Z3eVdfbHhOWWI3aEdfMmxwMC1OMlNiREp2a2hacU5sRTFoUUE3YWh2VFN4Vmw5cU9hNTMzeWJGeU9rSHpWYVVqcmdNZUcyYWwwcUJZOHAxM1BGQQ?oc=5",
      "date": "2026-05-25"
    },
    {
      "title": "US lawmaker asks Pentagon to review Safran ventures in China",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQQTZUalZsTHkxamZfLTVhTTliXzdsbXdIQUpCc0R1WkpyT2tHOXlsYnNlbTFzQnpWbWo4bENUb0ZhQWJJazFTeGg5ckhBR0FqNVpEOE9jcTJKX2hfVGgyWVM0akhNQmhkS0c2bXplMUFjZjRMWHFNVFhJYTFhczcyY3F2Z2k0T3FlZ0dWdzctamQ2dzVsRnhRcUpvODNWRS1KNU5pU0l5MWl0QS1uZ1JzbWFyMktMWEJXSTRvVQ?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "South Africa makes record arms sales of over $550 million to France, Turkey, Kenya, UAE and 38 others",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOWVkxU0hiSTdkS2RXRW1YUzFsV2g2UmtmeWxvSG9NRHI0MWhaU1Bxc1hWdjdhbEhHSXRObm5QQ0hHNnFac0xieDRJeWFmUFJMM3FyQ1VjN1J0cVM2cndOT3NiOXQ0Q0ItRUlGNTc5Rm9nWXlJc3dFckVrRWFkNi1OUUlwMjU0akdib3dwaGdQaFhpZkRLcG1sQWpQTm5MT01WVGNJTGo5TVFQMmpsYUM5YlAwMmpJTzV0dXh0X0xVbVpKcDUyZVZMTm1DTDJ0UTlwanUxcGRFUTRfQQ?oc=5",
      "date": "2026-04-08"
    },
    {
      "title": "Regular Press Briefing of the Ministry of National Defense on April 9, 2026",
      "source": "Ministry of National Defense People's Republic of China",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE51MmlIZHU3VGNMZjZlakJuVy10WXZfLWI2U0Zra3d6QmxLeDRpZnNPemowbHpjeUVENFdLajJrS2tFNHlZV3kzVVRYWmUyVEw5bWRIS2p5VQ?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "G7 ‘concerned’ at Russia and China’s nuclear build-up",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOdFYxNzl2UzQtNWVNbll0Z3FyY0JaSkFJZ3FjeEd1a0pQSUNReW5tNkVVd2xSUnJ6dFlPSU43YmlaalVNRUo5eXZfekM2QWI4N0RYQkVRUldHMlVFektMaVlhVFJEM01NcE5NRWlJZzVXUzlnSVFZVUtUTmdzOWZsb2FHVDVSaWJ3U2IxMlJ5a0JHSkhfcjhEVF9fTG5TUVFC0gGgAUFVX3lxTFBfVDNMVHIzRVprX3Z2QWhvdjJKX0EzRTloUXJWMUNUOGNacFZGNWd3RmY1RTdHMm1vZndWXzdnUXpuNlljamNjT1lUaUFDM016cW95NDRSMTNjZU1EdGt1ZTFQeG9IOWhoY3FkTkd0Q1F2cUJoSkxvaW9WemRpeUcyODhDcjhmZ3lyZlZRVVBUNFlTdC1KRzdyTXRya3c2TUM?oc=5",
      "date": "2026-04-25"
    },
    {
      "title": "EU seeks self-reliance as US, China dominate defense sector",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOFJVOGYwSWpYWFFPbG9FRm01ODdyM1hod2F3bkxYZ3pTU083Vlg0VWlJVFNoXzJZVEdsNFdmRll0V3VUNERiR25jNkhuZEZCaGNkeFFJNWFXY3hzZHk5OFVKSXNmc3VTSXJlTXFOWnFmTnNHZ2ZER1RRLWEzb0Rsc3kyeWw4ZFZ1Z0Q2WFpHV21vX3Q5Z3fSAZYBQVVfeXFMTVRRc19rQWJ6Z3dSUDNtZXZzcVFHYnRGdVhEdEVwOE9yaTVUWUpYbk5EeE5INGE1ZWx5Tk1XSDM3LXAzNE1YRGxVMUtOdXpPYklLOWhWYWRCSk9URlZYNGEyQWpMeXQxYXhmQ01qZXJybVJNcE1rRU9JYzE1YkxkZWdxcUhYeHV1TXJfU2FCR19fcGVDYkZ3?oc=5",
      "date": "2026-02-09"
    },
    {
      "title": "China built an arms empire. Now India wants its own",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE16QXNoMFRmNXk5MVdnYmFUSGFOTEZnR3NjcUd4T3NuOUM2aXpzaWx1Vy0xcUotYnVwaDVZeWp6Y2RNNnRsQnFFaVoxZkZUVWNYeWphV3g4aHNsRGtRR1BLTE8tV1dsLUJqNGxsNWVVUWxHZ1hTTXRfRFB1TQ?oc=5",
      "date": "2026-05-25"
    }
  ],
  "united states→italy": [
    {
      "title": "Turkey, Italy, and Europe’s defense-industrial future",
      "source": "Brookings",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQZ2dpZDUtbkU5VVZ5WVdGcXpMOUpwNTl1UkVUUEl5UWd6UGUxRjlRRHFNbEJhdVFqR0VEal9RRVhRTFJ5ZDVOY3pWcGZoR0QxQlJ2ek1XM3lFN0pCaFdHclBUOWdlSGZxVGlxVENvcUc5dVZSaGV3bm9Ta0xQSEt0MGdmUmVldHVyU1owYmQ4TQ?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Trump deepens the dustup with Italy's Meloni, who says his 'unprovoked attacks are senseless'",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNd1NjeUZwY0YycUZUNkNURXJRNHU3a3MtVG83OHBEbXVpQ2ZDNWhWa2NCdTk2VU9nbEZER09kNmpTX2NLQ25HVzg3NFpXRjdtalBfekVlYXRyUlRMN1V1bWQxTlhWTkVhYzlyNXdPUlcyVlJwalk4elRDVXNwQ3kyWkg1ZFVIbzQzd25ENkN0XzhzZktRYXlPRVYxYVczWmc5Q3NKZFlmZnNyNE96WHBXc2RiNzB6cFRSSHhXdVJRb1R6enRuSnfSAcsBQVVfeXFMTURYVmstVVFubWxlMUpuY3ZHSFNCVEdIcnlqYmVQel8yaXhtcFFfRFFJaUVlM1JfbUpGSWVRUGdFMnBYTm9fclI3YTEtek1Vd0NPbUdsLXE1RGxHcVVPTk5WVnh0bVFldTRRb0Z1WVJrcEU3ZXprR05jSHU4ZFQzaTU3QTkyQkhKUDNxbUxPZkJDY1VSb0oyQlZlblczbnQ4TEVQMTBmbFEzdHR4RFIzbGE4UlNibTg2ZGNvbUxaZWhleFowQ1FjWkJQNkE?oc=5",
      "date": "2026-06-20"
    },
    {
      "title": "Too Big To Break Again: India, Italy, and the Defense Partnership That Almost Wasn’t",
      "source": "War on the Rocks",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPTEExUVNHMXFvQUhkMEtmQ2xXSWl0QWVLRktONWNnVWlpdjNra09QODZkOXBvdEh5Zzg3RVR6NHJZdTR5VDhsdlVWUFZ6OThxZi1NSklCYTl0UVZOY0FkOTJPZ2k5QkFZTXkzUXpXN0FyS0FxNWZRZjZXYm12T2hLR1RfOFFrXzhaOV9WdDk4TE5tOWFIc19wRXNYZ0xocElpU3BUNjMzckpvaEk?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Trump and PM Georgia Meloni Face New Strain as Italy Reassesses Israel Ties",
      "source": "Military.com",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNXy1hcFFlRWRMWFhYNWJKUzF6d1ljOHdvUlctSVpXYXlmdWpjNXVPUVhrNTVZTG9qbEpxRzB5NTVvM2VWNVlPV2tJdHpLQ3I2aXBfbjM1NlJ3YnpSUUJEVDhWcTVLSXdKTEF0Z1ctOVotbzM2SmdGT1RDZGNHYnQ3Qms3VDVBQlNQZXJxYmdhYWdSZXlRbmJLT1pBQ0x6d2JtSVE?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "US doesn’t seek withdrawal from Italy, defense minister says after Hegseth meeting",
      "source": "stripes.com",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQb1hJRmtZNDE3UFRielNhR0pxcjk1MU9jbEFGckprMU4xMm9TTkNjVFlDVUQ5T3Z5NHJXT0J2TWlBVlZMeDd0eTBpOGJEYmdnaHBNLThmY3JnOVJWWHdKWkEzWVRiWHFnb2cwd1FXRGR5UmhXZUloTUM1UGdPbUd1Zi1jeUVlQXdER0JXM1J2UE1UaGhrckdKY0lONV82dGs2cGF5ZmJuNlJLWkFaUnJJbDdpeFJOWUFSRTBZ?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Hegseth, Italian Counterpart Meet at Pentagon",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNVFFIakRzdEY1NFBWbzZ2ZzVlZndnb05xZWp0aVZLM0JTNHlQTjRNOUZ0MUFHVzV6ZGc1M3UxYm9TRFB1U1hxQTJ2SzVVXzF4YTVBZmpEQWh0UWg1UlhqU25VNEJrdnRvZnpJakt1T3BuLVRyeFMxeGFFaFVhT1o4X296QzVQZnhXZmtzY1NTbkJQdXJkTWpvQU1zNzFTbVV4NXREZDlmTm1UU3M?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "Italy’s political spectrum reacts after Trump remarks on Meloni",
      "source": "Decode39",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOTG85QkFSd0tmdDhGTkpxS2JpdGN6UHhkT0kxSC02czVhRWwzNHNvRTYyX1RBZ0w2SXNXR2RWdG9xLTVueEJvWmw5cFRMeWFTQno0YWlfdzFQWWYwVlplWEk2d3NEakJiUWtJRGFuSC1PX1NHYTVOaFg2aWNTbGdDWlVJWExjcmxITmVZLVJhTS1ic1c5?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "U.S. and Italy Look to NATO 3.0 - VOA",
      "source": "VOA - Voice of America English News",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBOYlBmQjVTRzZKLU9oVHUxUnhHNXowZUR5TktVaTBHcEx2enAwQ3R1cUM0VTVzR09jUFBRcFc4NlRQMG51QmJNVDNLRlNRSk1tN0V0Sl9mUlprWkxaeHRIMUNQQXdSQ3VfMzZzbWo3TW9rYjVYSmdONEQ1R2_SAX9BVV95cUxPMW0zbmZaQnNhWWE4VWptUFpOUXFrODJoV3N5U0lJNHVIRWY1bDhMWERUak0tQVptb0RrOVhJNksxU0JrbDFSOEZVOWFmRlp5VU9YQ21mcEl2MzdZNkhiaVo1a1JGTkpJTFJqbmUwN0s2WXI5NndIRTZkVzhVZGEw?oc=5",
      "date": "2026-06-18"
    }
  ],
  "france→italy": [
    {
      "title": "France softens stance on Turkey puchasing air defense system, sources say",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1UMjVSTDFORVdnOHZhbzJKeDVvODB5LWp0RkllZGtKbGY2TTZOTWpicWRlMEdoZnRVMXZGWUJaYXl1T3hVWG9Eb0VQbXAzOWJpN3p6N1lJM2Z1VmdEYlhr?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "France opens door to SAMP/T air defense talks with Turkey: report",
      "source": "Turkish Minute",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE1vb3dqNDRxUlRoeDM4eVlGNU1JOUF4NFFibVZUZE1faVRJbFJSWXQ2UTg0R05CelRsMFF0UlRYQ3ZoVWNMejA5RmVUa2tOSFhl0gGvAUFVX3lxTE1QYnpnQWdYNENMX0RHdlAta3RvRVZsZzhxTUhGQU1XNE9RWldhYmF0LUxJSGZKOE1jaWFhc2NINGZJbUlpNFFKam95UXdUdjZTakdjcEdOSmpPTWJGVEdYZXh5dGw5UDNkNmJYNnFIejJ4TW9Ud2kwNjJFSDJfUjBKQWhVMXVFVklyTlRDMjI3UXd4RmJHVUI2cFF0aEhpMkVGclJ0ckNieFpIWkc4dFk?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "France Softens Stance on SAMP/T Missile Defense Sale to Türkiye",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPYnlDSVpvTUtfc0JLcC1lSzQ0QU90QTRqNlN3VmIySHhjVXAxbUkwT2RLNlF2bDQ1Y3VPX3FiZlFwNzJNam5PTHpfQ1UtN2NEUy04Y1VMZm5GakY4Tl81enBpVWVSVC1UaXNCYU1wWWZPTDU1TVcwdGlzTGM3SF9WcjdTa1BtejFIQXE5ZnV0Y1JwblV3QTh6QTJ0QQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Strategic Defense: France, Italy, and Turkey Collaborate on SAMP-T System",
      "source": "Devdiscourse",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOOUlZMUlyR1FwQkk3U0VjeUttOTlqLUViMDR0czZWNEI2UWg0Q1ZqUGZGNGRBTmw4V2UwSUpjMUIwODlzeFAxdHNhbjZXR19Pc0tIWEhHUkMwMXdCT2prXzZ3VXRPTTVidTZQMDd6bzN1Umlrckw2c1BQeXV2QkdFZU4zREJGbWdmZ0lYTTJ3dy1TcjVTYTdxSnl3bURsWUlEcUx3NUFYMll6WWlpVHYwdU5qQWtLZlhtSjlQd0lvWVIxQdIBxwFBVV95cUxNVE4tTThOdjdJSXpZMXV1MzlHNlI1RUF0UjJndS1PcmFUWkwzdHdTcjRIdHF2OURJNHZiYnJQdGtwMnJ4MHhNbnFjZG1CTHFGdlAyczJLLUNXSjk3RnFoZDV1SmNBSlJpMG9VQlo5QUhpQjhPQVN3bFJWR09FMmxkakFpOVRnQkdFXzU3LUlDdzRyanFVZWR4a043MHVyU2tMNTRSb2Z6VVY1SmEtUkFkV3dBWTVnUl9kb0VGVEpWNDlsOGV2QkZr?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "France eases opposition to Turkish SAMP/T air defense acquisition, sources say",
      "source": "Harici",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPeTRPV3BZMWRDREZJT2pKSmhNa00zekQwMW1pelZ1RmpJeUJSd3FVNU9Vamh1bFpPVFVlajRwNGZRdjdEZG1QZVZYVE1zSmhuYWpFUUtWZTVKUlJ0WWVPWVRURDNLV2JJOVNrVXJmUEVSRGJVWm5scHNnOFRkZTNNeTU5ZkRfUVBmUlRhVDUtS2VVdGZzZVF6YUE5SlY4NlNUM1FuY1hB0gGmAUFVX3lxTE95NE9XcFkxZENERklPakpKaE1rTTN6RDAxbWl6VnVGakl5QlJ3cVU1T1VqaHVsWk9UVWVqNHA0ZlF2N0RkbVBlVlhUTXNKaG5hakVRS1ZlNUpSUnRZZU9ZVFREM0tXYkk5U2tVcmZQRVJEYlVabmxwc2c4VGRlM015NTlmRF9RUGZSVGFUNS1LZVV0ZnNlUXphQTlKVjg2U1QzUW5jWEE?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "France-Italy, Meloni: \"Strengthening cooperation on defense and Sampdoria.\" The agreements signed in Antibes - video",
      "source": "Agenzia Nova",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPcG1VTThrQTMteXpVdlpWZzFHMHphQ3k3YTdMalFCUno5Slo3YnV5cTNvbzN5VHZlNDBOZmt6d2U4dkNYaGUzTFBUWjBkaVpsNVZDcWlNYk16SVp1U25FZHRvVmJIZnpWUmotOE1TNW43cUtiRTB0LWthc21JNTJwX2w5VWJiWXZFY0xXQlBNTmk1RDI4Y0U1WTR4VjFmbEc1Vzh5RnNLT3pVLU1HdjAwZlNseTdyQmgwemNMZnlmWDVzelI5dE9qSXltRGYxOEx2MTZYTVZYNzBqTlg3?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Europe Tourism Meltdown as Spain France Italy Lead Solar Cooling Arms Race Against Deadly Heatwaves",
      "source": "Travel And Tour World",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBNZEVLY1hfR0Y5M2lwRWRvNmZ6THlyNHZwR0tGS2ZGR3pkYm16YTNtdENOUHhXdGNkZjRwcEN2Sk93aERfMWpaeUtiQU5lVjJudjdqd19aVTlLbGRmOWtXRlh2ZVNpQUY5WW12Z2Nn?oc=5",
      "date": "2026-06-27"
    },
    {
      "title": "France Enhances Ground-based Air Defense with a New ASTER/MICA VL Multi-layer SAMP/T NG System",
      "source": "Overt Defense -",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQWi1ucFJRaExsdGdxR1ljLW9mX0djZXAtVXhxbWY4cWdERmVxeElIdHpEM1pSbGp0RDhNU3JuYkRLbjVvOEtENG9Ec2lhdl84S3poM3d3MUxTZDctTTNSOFBzR0VLeEpCZmRoUlhfZmFwOFBDU2IzVmlxS2FodlFhYVhiS29WczlTTlRVR1BfTVNNbTN6TmhINlM4eWxmd280YlJkRkxSaGF5UFBGSTVmS3ZiNWVheXllZlgzdndnb3JMVkRKOTIyZkdlem9iS2pE?oc=5",
      "date": "2026-06-16"
    }
  ],
  "germany→italy": [
    {
      "title": "What Europe’s base towns lose if U.S. troops leave",
      "source": "Florida Politics",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPbXBNX24zWnlZTHdheWVlNFJRUzFjc2t0d2w0OWRZMFpDa1JkTXhpYnBsT183YnZQMkdrQ200MTFwZnNqRk9PbTQwdzgzOEtDc1pOVGpfbXN2eUZjVEtqdm44d3RDV3h6RXN2OEkydk9pd3ZkVVpvNjg0bXZoa3ZlYkprdkpwamoxTExZYXJtdFhpR2xmVS1scA?oc=5",
      "date": "2026-06-21"
    },
    {
      "title": "Trump criticizes Spain and other NATO allies for lack of cooperation in Iran war",
      "source": "EL PAÍS English",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPRXZ0QWFHWlhQZFAtSHJxUUFsRkJwQ2NMUDY5WnpScElPWURwS21mY3pHdllGY2tsRjhXcWhLZjJiWHlmOGIzeUxfbGFDWTFUbW9WU055RFppNWgzWExmSjdDcjEzWFNrcmMzVFpvN1BxaUQzLWNIVElfM1c2R2dpZGRmQXp5dTRDd09YZXpULWhmWG9wMWMxd3pfX0Nwb0tRaWxrb3NIWW5SNEdyUm5nSTJOSHFtMTUxVWE1RVdKZlplS1A2SzZ2OFJfazRkLUNYWkVr0gHnAUFVX3lxTFB6VWZ1ZUplQlNnLVRiV0gwWlpKSWo3T2xLS3VBM2M1TE1tZm9RdjhfcGswNC1qYm8zVHBHQ3IwdnFZOEZ4ZlpId3JrMjZoNko5bHc0TUpMUndrMkYxcFJsTUxlX2xib2RnbW1zekxqU1FWUEZPZWJoWTY4d2ZrWnpaTndDUkpVZVU5WWZHRkRZR1pnY3FVTWF6bnZmc2hSZTljVVJ2VlNuNXpEVXNia0t1ZmlYTHQxRXh1NFREWk45OVkxVGlKSjRWbjhjb3VJb0o0a2RVbDhfdi1Sd3V2bDA0cEFocDdHcw?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Germany says U.S. troop withdrawal ‘anticipated'; Spain and Italy could be next",
      "source": "NPR",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOaWR4c2M1VHhkWEVjVk11VXB2TFhBakJYczdQdXYtS0VTcjJvWGktd2IxWDN4cTZUc210YVQxenROZDFaZExUWlB1OU5xMldlUHowbDZuRUMxVEdPQlZUNDZDV2NXbUtZQWdOLUd2c2VSTWdGR2lSUXF5ckp2M19BNmpQbEQ3RUNyTWktc2hrVQ?oc=5",
      "date": "2026-05-02"
    },
    {
      "title": "Germany welcome in GCAP, but new Leonardo boss warns about timing",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNdFBmYk9KektVbUhoUzdDaS1VZVROM0c5NUJDUTZfamdjeEJhc2dnM3pHUldMcDFIU0FVQ1U4c1pCVnFBSTZpYkNiRFJSZm5jaGdtMl9Yc29GWGhZeHR5dHE2NmZzTE1lU3lZSEcteU05WGgyMjZfMnZ3ZGk5bTZNak84VF9lRjZRTVNpaGtMWmJ1ZVFJZWJpVGZnQ1pFTEtITV9HWF9HMS1JSlFNb2pXNUVCWmRFcEpTOFE?oc=5",
      "date": "2026-06-10"
    },
    {
      "title": "Red lines not red carpets: Why Italy & Germany must support suspending EU-Israel Agreement",
      "source": "Amnesty International",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOOWRlamo4SklLaU9laDY0VnFRRVFlQmNvSUlGUUxFTDFnNWx6SmkxY2tUY2tqVkxIN1JTV0ZQcnM5ZnpjcTZmQm4tbkpyNlR1ZnRRbEp2c3VJS3VKTWhGZ28telAyZi1NdEJ1RnA4dnVsV3R0Nm4yc2E0ckVZMndva0lJLVo?oc=5",
      "date": "2026-05-11"
    },
    {
      "title": "Trump threatens to pull some US troops from Germany, Italy and Spain amid spat over Iran war",
      "source": "CNN",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1iUHRrYVpmM3VwSEdUell1SEtzeW9sVEFZYlJ2YnZzNlpiLXRzQ2ZsS2kzSWtQSjN6TEJXMjRING5fSUtibXAtX3ZYVVJ3RHlKSUtQNEk5TmFNemJwLS0yM2tVN3lzNXNPRG1JTkJOeWFMMGZhTlpV?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "Trump Threatens to Withdraw U.S. Troops From Italy and Spain as Europe Rift Widens",
      "source": "Time Magazine",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNSGgwVFZpMC1fU180a1hBQndIM1FEQUM3ZTZoR0w0T1ZaVUp5STU3ZlNEbTlpNEN6N3ZJVExzR3pjRi1JTTNVcnYybGZjdWRaR2dpbWxjWngzX3ZBVWx3VVVDYko5V0ZHMGZjVk5Nc3pqR2ZkSDZlTEdiMl9sbXpCTGI4MkY1T1ZSN043dG9ncnhOZDM4YkpLenh6MExzSFFGZUtSNw?oc=5",
      "date": "2026-05-01"
    },
    {
      "title": "Trump says US could withdraw troops from Italy, Spain too",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPZGNGOW4tWk9CS243VW1MMHJKZThVQkpueHlBY2tKYi0yVm1sN296T2hZdGlGZFhzMldsX09VNExmbGxoQ2dDZm42U09wanJmZm45TE9rNEE3YVRGZTViWE9DU1lGaXRtaEZEOUJDcTc1MGN4SkZmTmhzNEhxRnR5Q0RnU090dnVyRk43RGY5cw?oc=5",
      "date": "2026-05-04"
    }
  ],
  "israel→philippines": [
    {
      "title": "While Rodrigo Dutertes Former Police Chief Is Hunted, His Israeli Arms Suppliers Are Not",
      "source": "TheWire.in",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPRlVGbzh5VUxtaGNsdmc0TGdlcTE3Y3BQVEg5d05ndUFaTFo1c0kzMTdOUlRBQU9VMDFZaXlDSUtiWnhGc01xUmJxRnFnUFVOcVByRV9IRVhQTVliS0NoX2dMQ0ZGSTNmQlktTy1hSUpjYnA1VXZjZldOWEhkYUtLMEhOUU1JQ0ZyVFI2cjh3eVBMME9FdVVSMlhaTVRRRVp1ZHlwZ3JjX1d0YndKNlFWOGM3X1JDa2lTTVg0a2tZONIBxAFBVV95cUxOOUNuendSSk04Rzl3eGRBV0VNUTVsOWVDcTNOWHRYdG03ZGcwZ2hWSnA4WFJPSmZmTmxPd2lFaGFDdl9pMXhqN0FvZE1kNTlZVC1LU0g4dnMyNUlHc3Z1ZmU2Y1NlX3JJS0xfU3pSN3pJM2VfcE43RnRoY0VmWkdES1NiR1VQLXZlX0ctNW9mOHJ1eEZ3cmxJQWwyUVlWYk1UM1dWWXFaaThQeF9Sb2RXWl80QkY5V2NfZW5jZFFrTDVJaXJw?oc=5",
      "date": "2026-06-04"
    },
    {
      "title": "What Israel can learn from the Philippines vs. China",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9VZDdkSXprSUJ1d3liOTJtRXNZWHgxSWphT1JxN0lZeDNwazVXNkVHanVuckZucUJqVDlHTFh3aGJUQk44dm5ob0c3Y3pHdTZDSWVUc0dJQUVzOWxwbnlNT1dZMA?oc=5",
      "date": "2025-12-07"
    },
    {
      "title": "Groups slam US-Israel attacks vs Iran, EDCA expansion in the Philippines",
      "source": "Bulatlat",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMEpWNWlWOVNJbVZOQ3Y4MERyR29QUlMtNFBCYXNMTjRkM1dfcWJVVmRIUTg0US1DbEQxbWZwamVkdDdvSTJUMFJZbUVkZTBIQ1pIZGJaWHdRdFB2SC03U21JWEdBc3lwak91MFFPY2pKRThlZ1BlUGZvQkY2cFA4dnM0dmRPcjZBTWpPcUFaSVBmbkhTZ3BPc056cE0?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Israeli defense firms lament a chill from erstwhile client Philippines",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPVkRWTENpZkJmbXpOQjB4dVpQWDktRzZhbzU3aUxMZk5IejBYXzdjTnA3SGZnMGlFQjRWTWplaVc5aERCMW5kNk5tekg3LVJpT0puWlBsdS1oR2lLbVZyR3N5ekhUT2JQcFZPT1dKWHJMRHJjU2V2eDFYOXd0WVFkUGtFLTE0UFVhcEdaZ3pxam9lTkFac0RXWWZURThpcl9XSnZyM3p2R2FZWlZLSnZBcThnSkF4NkdpcWRfZ0JMWGJSX183S1p5R1pDVVE?oc=5",
      "date": "2025-05-27"
    },
    {
      "title": "DND, AFP: Middle East conflict poses 'no direct threat' to Philippine territory",
      "source": "Philstar.com",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOTVA0TUwzMTQ3R2ZVVFpLMmhFeUY2TEhHa0JBNlltUHZMZ0lGYWdhMHhmM1FoUUszVExsa3hEbVp2NmtmTVhSVEwwSHhtV0piZlZIcTJwNlhSdDJmenVWZUhyMDlmV3hueTVEcklZRkVsR3lhcVF5WkNGM2Y0LWZkTmZQUThMN3VBc0RQX1pSN2w1Vk96QTBJckhrb1F3ODRqUVJBc3BLV2ZWQzg1ZGNJOUxOOGpfTWZDWGIzTEtJTTl5TE100gHLAUFVX3lxTFAxTVlZM0FBMW1LaVhETjd3ajg1STYzeDd5UzFyNnR4RXhDSkZFOHFEcTNhaVAwUFYyclRnb3R2VlNxUnJSNGZBN05CeWw3TU5Vc1g1VmhZYWx5SElKbFlwYVRQaC1EN1VQakpjbU1LeUE0WV9SMVFiY0hLY09iQzgxbkpwTDVnOEktakpRUE5jUnEtZXNJVGRhbGg2dDNPRUNKSVVMczNPLUNJblVRa3dtOVloN0JVdjZrMFFvMGVyTU9EWW5pRmV6UHRJ?oc=5",
      "date": "2026-03-01"
    },
    {
      "title": "FACT CHECK: Philippines NOT Iran’s next target",
      "source": "VERA Files",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNS2h0Y2pkQlVBTEJfX1RPLVhVTkxJb2VIR28zTXlua0xWcWM3cHlyaWJCWnppcWlPdTh1N2dWWFBUb3h5RGNuUWdDZnpvZ21jaVF0ejU2UkpHNjB3VzlJQmwtUXZpdkFrbW5tVUliUGVDRHdrT0dWaGNQTERJMnZ6Mg?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Philippines says no new military acquisitions from Israel amid war in Gaza",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQcjJfSEpNUE1BR1ViS25uUlAyNV85SzVxd21tdVV4Sk52TFBGazlvdF9rTXBkUnV4V19SRUZVVldtbzhtcmJVSHhjejMtYnYxVW54enIyd2JhdXl5cGxsZnB1MWdOZmdCZVVoeXZWbDF3WnJfYm13S3F0dDVvQkZjdERvWld3TlRON2JyQURCXzJFOU9aY29LVGVVVFVtR3gzZkY1RXhYY2lyd2E3Ynp0R2UyWG9WVkFnX251Mg?oc=5",
      "date": "2025-09-18"
    },
    {
      "title": "Will Israel be a major player in the Philippines’ military upgrade?",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPT3lveEwza0g1bVhfTzVMSTZQaFN6OFZUa0g0bWxZVVFfVk43TDdBZ2pBOVByV0s3SWg5RU04SHJ3ME1ZeUk3Sl8wTEllTzcxajhMNUd6WE1ISEZKOS1PTUJJNVdzSjZaajUyTjV0Um9SeVhmYjVMZlFvM3djVWpvY29RcWJLMUQxeXpFcHhlZVloQkEzdFRzcGl4SFN3YUlNc0E4M2dMUmhFMkI3bXRhTFdWY0hzcEJrU29DMXotd0dEakHSAcMBQVVfeXFMUFZmNmMyang2QS1NS2QyeUM3U1NER3g0UHhXc1dqY094T3JqXzNZRXBhamxWNkEzcm5mNnJNZkRZN3RraEo0VkRvZFRKRFpiQkZuX2ZWamo4YmN2SHBjeEt2OUFIOXM3Y1RVN3VTRDdrM0R6cnBFTGtiTEtBZkN2RFFoN0taLVBXaU5JVkRzeml5ZlFBb2xtYjhLTWVGUmJIV2hsMzAxUzlVMmdNX1VoTW5nZzFjZC1vRWNKTDU4cWpveUVN?oc=5",
      "date": "2024-10-01"
    }
  ],
  "united states→philippines": [
    {
      "title": "U.S. and Philippines Deepen Defense Cooperation at EXECOM Summit",
      "source": "pacom.mil",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQTU11cEZvS0g4LTFJZWt5SFlHd0x1OEsxTjNnNDZEWno5Q2JoNTZ6OGNCWW1wVWd5U3F0RVVSZmxhWWE5ZlBsLTVBekpkLU5iVmRpNlE1YXNvaHNNNmk1MTIzckpQd1lDQ0Rid090VEpNeTRnTzQ1M3QzbFFQWElqNm5QZENZellKS2hMMU9PSS0zblU4cTFPazByNVBzOS1abDVMd2RMS2c5Z3NXb3UwWVZEallRc09ZSHpZSTRSd1FZUGI0LTdJR0t3NC12OXMx?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "Japan defense force to join parachute drill on Philippine islet near Taiwan",
      "source": "Japan Wire by Kyodo News",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1NdTVRNWYxZVdwZnEyampmV0JtVjJSWmdFWkhFR2xTMWtrS0ROQjd3SFFfNl9LZ19FV3VjaF9va1pPaGxrbnA0M0I2d3dnOUZ1T1VTbUY3bDlJZw?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Fiji, Philippines, Sri Lanka enlist drones to strengthen maritime security",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPT01FS0dJV3N3UWMyUUFSSzVwemkxNDVGbWk0MEF4SnlkRWlrTExuWjh2cUFoX0hJbW40ZzRVRUg1aUJTUE5XYnBfRlN5VUx5aGV0al9POGhfZ2JZWnJxbGtxakZTSVVwWlhZdU5mSWRDeDNnZHlpQ3pZS1RiX3JISzBwRlFibWdXSVZjUThxYkR1MDdWd0NQcF9NVmJrdmFBX2RIUk5MdmFjX1lE?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Multinational forces exercise coastal defense in Northern Luzon during Balikatan 2026",
      "source": "army.mil",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOTHNiVDJwRkRaWnFLeENGR1VuQ0JTbUVhVnVESnFpSnNtdU0wenBvNXJIZ0hhUmxjYWxUT3BJSWVsTzNIMzFDaWM3QzVuUThWNlR3VHJlNWVlTnloNmZXNkJVMERrZnFDdnFSQnJNdEtsZm5oRlNwby1Tb2NUYzlCOUpyNmVwVXF2dVdic2s3RlhyRWFGb1V5eTNydHdfV3pTYzIyWDFqU3J3cnY3ZkFBRlh5bkh1dkxrUlU3NWFB0gHDAUFVX3lxTE1HZU9kSVZtWklXaUFEWnNJUnVTWGZMOUcwbFdfWmpXUkF3LUpSdVM4dWZCdTVFNmlyVEo5Um5qQ2N2WUpkVTFvUUVqZEItMUYtZUE4V3Rfa0hZOV9xY18tRUpPWElkVTBKSE00QlVzbk05TUpqemJPYWh5NUdUUHQ5Y1M2WVdHdExyZi13cFF0eTMtM3hSZXhWTEx2dTFWRC1SN3ZPaGd4dFRZT0NVVlJvRzdlaElIOG5GQldCaVZHNU95dw?oc=5",
      "date": "2026-05-06"
    },
    {
      "title": "Q&A: As South China Sea confrontations ramp up, what’s the risk of open conflict?",
      "source": "ACLED",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNb2NtSE9tamU1LUVfYm0zOHgxOU1EVllhV2x0d3JlU1BsMnNRaUxkVXB2RUtsMnFzd0NKZjBOQjAtVjBWMVpQVWh6YUtBQWlJYlhIYTctSmI1cU1OY1BTTllQQzhWekhFbHVDUTQzZE9McE04R3lLZUxZTTJZcnVOaEpxRnBXOHJTRldGU1EwMWRadw?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "US reaffirms ‘ironclad’ defense commitment to PH on Independence Day",
      "source": "Inquirer.net",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPbnN2a0YtV2VMYUVoWE5pU2tEQ1dmVkE1RXZfZFl4RHE3Yy1QOEtPeF9FamllZVF3RmpHNGxUZk5xbkpuSzhYZWNNeDlmN3A0U0lOS3h4cjRqUDM5eFEtYTBNdmVQMzhxTHA1LV93d191RVBiNklQSnFFNkxlRlhVOFN1Yi1QLW13aEVMNlBCOGI1ZV9XSnhDV1pVMlRkWVRYWXVyemFzRFlGLVXSAbABQVVfeXFMUE9YZ0t3bEwxOHNGZlRvY19WOTBrTFp0NXd3Q3FoQmlLYWI3VWxBN01GSlZCWmh5MHlpaVNkYkNIWC1TQkZodEc5NTZYYjNHbVF0SXJVNVNkMUd2d1JOSnpvSThGbVR5OEJBWTlMNEhlR0ZHV0x5aFNQTnJWR0VzRUFVa1hTb0lKUE5nT0VhM3U4TEFodWFiMlBEZU5kWUIwR0ZwRFozM3hQVDAzbzVJX2M?oc=5",
      "date": "2026-06-12"
    },
    {
      "title": "US backs PH over China's missile launch concerns",
      "source": "GMA Network",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQbm14b21zTmhBazlmQkQxN3FGWDdSQTlJZFdCakRma2hTZ3VfdGhYSUEwUXk1VlFZb1lwNkJYV0poNS1pelcwc2F0MDNqaUJTTXNDVmxoQVBWU0FVeXY2ZDFEZWRHOFVHQ1pWaTRwNzAteGFDQXFLanBaTE93NVVla1UzNzA0b3RpbC1uY2VYLTZFWFNsMHFLcWF3ZUdPai0ySThlbF9TcnIwbkZ0cS1uMnNn0gG3AUFVX3lxTE5Dd1lOdzBJTHlwb1oxLXV1MGU1YTh0aFFxOXFvbW1maGZlbnBRMjQ4VTQ0VEFNNU1vMFVRS2NDOEpxQ1dpemE2aVJaOUZ5ODRnLWozalVCMVFfQTR6ZW1KNjVrMzh4UDNZTGJIRlpaVWNiQm1INWhqOXZuRXExWVpleGtIZmVtM0tnakFXeV91OENjREVCbkdRUW45d21zZHgtbTRRNzdUMlFrbG91cndhOU0xbDhfZw?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "U.S. and Filipino Forces Launch Expanded Military Drills",
      "source": "Foundation for Defense of Democracies",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRkZzbEZRYXhtTm1sQmhDcHJNVzh3RGxkMzRhMDNjNHdRWElTMUlVMzJmb0k2NWJYN1dJLWlZNnEtejlod1BkRnRyMVB2cm1iNmdMTFZVYlJvMmkwdXV4enZCdF9RNmlSUjY3aXVSeF9Udkg0WDR1VFduVXVuTnZTa1NxLW10YnNxR3lray0zbUtVQ1VKV2FodTc0OHY?oc=5",
      "date": "2026-04-22"
    }
  ],
  "germany→türkiye": [
    {
      "title": "Germany’s Merz urges ‘Spirit of Ankara’ to reshape European defense",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOLU5MVm5wbnFvWk5VODFScWlidjFxYWIzQXlGQ01JaHJ0RWFMemZBNjFzcmtPOU55c1FCVV9lN1czTmZ2UW5LbHJQaUdQRE14VmM4VXI4RjhDV1BnaEI2TVpvQTdwUHI2cHpKYkxPMHliYXRFQW1VSm42SHljZUQ2S1BDN1Q1V1BTVnNpMFFsR0JTN2xVcjdwVVJTVkdKQ2ZNamRkMFZwLVBaNUk?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "NATO’s Ankara summit to show Trump Europe is stepping up: German deputy defense minister",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNd1pQeEZPX0I5NUx5SlBlcDM0SmRHTnNlTElpTkRHZzdGbEs0dUJlZlctazh1b2g4UG1QY0htalRTbldFX2J1V1RtTm52VzB0d0lXeG9UZHBiYUx0UXZ0OWt5MHFhWGhDTjF5djl2dm1Edl9oY3RTNW84bVprTkJtRGZiY29VMHBLTnRNNXpLMjROX1JPRnA3MWN2cVZRTHdKZFR5QUdHRkZYd05JcjZiNDRLX3MydG0wX0V2QmlsNUF0akU5?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Germany to Deploy Air Defense Unit to Türkiye, Relieving US",
      "source": "Asharq Al-Awsat English",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOOHlxc3hUd2FDUDA5RmRsdXhWQXBfZGg0QnJEQTEySTBMU1hGMHhkUWtPdWZodm5LbzBZYm9GZ3owdTJjb1lMd1BzcktpMV9RMWtvMkZUN1Z6UkpzT051MWVqUzNickg0UlRWeVRUOElGN2VPTjVmVmJPQ1FRdzhwVkF4NmpZb1d3bV9kWnBCajZNNWcySklBdEM2Y1F1Ujg?oc=5",
      "date": "2026-05-18"
    },
    {
      "title": "Germany to deploy Patriot air defense unit to Türkiye under NATO mission",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNMjZJWkM2S3F1Z29NdjFDaExDTEhtM0ltdkl1SUxtZ0JUcFhfVl85ZzdDdkFZenFOYlMzYk04VHkwRmsyTlluMXozRlNBaXlTZm9UNmRsOExjTWg4QzlHN2JoVjJHTnNrWnM1YWIwdndTd0hYVHVoVEFxMm9VdGlKWW9LOUJTWldmLXBwd19qakJraG44WmVmTFBjckNxQmVFc0w0Yl9lc01INFp2QTZ3WjMtMmY2aVZiSnfSAb8BQVVfeXFMTnpCRWlWOGNUTW1iZTlkdm1PbDdmdXcwS1c4aXRqMmVpeVctdWx1WVYwQjJlRjdxNFU1WG0zRkszRVh2MDM3MTV1dFJvMFhNMDF6UDk2WlFERlRJeHI0U3F5R2ZZNi1HSWpCaVNHTEx4d3UxV3ZtT3J3bFp2bHdBTGU4dVNKWkRUM2VJVzhPX1lZVW9YWGhBSnFjMW50RTl3aFEwWVFwYm1uSUlfaURhZldPcXJqS0tNYi1XZ1Zrdjg?oc=5",
      "date": "2026-05-18"
    },
    {
      "title": "Germany to Deploy Patriot Defense Unit to Türkiye Under NATO Mission",
      "source": "Kurdistan24",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNa3k0cDFaRDBnbXZRbGxhcFk0RlNqbGNFOWh2NU1aMFEzY05zZUZVTlU3TkhTTHdmTXpSbFBSbnlfU2NTQUJCazBZYW1YR1h3YUVpX0d0UGhnd0RLaHRtZnRnc1FfdkJXcDNEcGwxQWhnOEpoSVJqQkFuMm5TejZ2TzItSC00b3AySjVsaktlTnRNZkhxbGRQbkxfNGdLOGtacGVfVUI4QWxwbW1LYzZ1MXlMempTS1A3?oc=5",
      "date": "2026-05-19"
    },
    {
      "title": "Germany eyes Türkiye's missiles as Berlin races to close long-range strike gap",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOUVNJT243ejh6WXdlRGVFUHNDQjZwcXl1Z3NkbUtjYUlhWi1wMVJiVDEtcExRdDIzRXpHV295M3JBdnBZbkpab3k0enE0YmpXdE84SVRFOWVFTFhyRUwtZTF0Y3ZOZWVBWjVldjdONXNGdHNOWnJmdXdxeUZMSVBUYjRBZjJYNkxPWVlYQlgxMjV1cVRlQ2tLaUFMQWY3N2xYVzFIQUJMVXd1RklBV3ltQWJrbGpaaEpJV0cycFlR?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Germany to deploy Patriot system to Türkiye under NATO mission amid regional tensions",
      "source": "Xinhua",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQbzU0d3NhTG9TRGNHZW83OFVSWERISGdwVVhHXzlReVhGVDdKWUoydjhHdVFHX1FONXZBWUstTHdwTEp4eWUwcmpfYVFnU2JTeUtWSE1WbEJ1MnhMQUZTUkhzbkdaZlJlR2pyUzhJVnBaX1N5OEJhRWxxMmhta3JiNHFuTFV0dw?oc=5",
      "date": "2026-05-21"
    },
    {
      "title": "Germany’s Merz: Ankara summit will bring ‘new spirit’ to NATO",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdVVrWmdVOXhUZkJIbnNWb2hyOGdkVlJVSHNaMTdrOXZzemloMmdTUWhhY0VFbWhab1RUNlRNS0tHNHhSWnhzUjIwN2xqR3cxbFVYSTVSdXV3d0ZHdjNfRE56amx0WWYwT0Qyb05PdV84a25oTXJrQUJUNFA4QWlON3dVMno3THNXVXg5aFhvQVFzTjdWeG1yYWwzMmk?oc=5",
      "date": "2026-07-08"
    }
  ],
  "italy→türkiye": [
    {
      "title": "Macron says work ongoing with Türkiye, Italy over SAMP-T",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQN0RxUG9zR3BYZV8wZjBiZDVpa0xXbWtiSVk2YlNIM3ZoQW5wVmdBTjU2TmpveV9PNG5lUDcyd19IYUg3LVZxb2JyZ21wSUdBWEJ1b2UxLTZDNnpzdjhRVHB3Y3dIUkJualNJcXlFMFpWckI4M3hiMFlTb2M2OHV5eU42SktCc05ZTTlBTGZMaERUdFN0alJwdkV6NERRTGJIbmg0YWhB0gGmAUFVX3lxTFA3RHFQb3NHcFhlXzBmMGJkNWlrTFdta2JJWTZiU0gzdmhBbnBWZ0FONTZOam95X080bmVQNzJ3X0hhSDctVnFvYnJnbXBJR0FYQnVvZTEtNkM2enN2OFFUcHdjd0hSQm5qU0lxeUUwWlZyQjgzeGIwWVNvYzY4dXl5TjZKS0JzTllNOUFMZkxoRFR0U3RqUnB2RXo0RFFMYkhuaDRhaEE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "NATO defense spending projected to top $1.8T in 2026",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRF9pa2xzYWpmSlVwUXBaNjdOMzRWdnZmbXhMd0xhSG9ZYzRZM051bEtWaS0yb3BDNnFpMGlVOFd2c1p5d3p6OTFncmxJQkJ6eU1OLXVYRnBDb1RUT21XVUN4RzV6TklWb0xWZlVqM0RVOTRtaWVLQlpHd2k5Y2F4T19FWktIZ2wzM2lLcG5sb2FNcTVYNnVGSg?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "France Softens Stance on SAMP/T Missile Defense Sale to Türkiye",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPYnlDSVpvTUtfc0JLcC1lSzQ0QU90QTRqNlN3VmIySHhjVXAxbUkwT2RLNlF2bDQ1Y3VPX3FiZlFwNzJNam5PTHpfQ1UtN2NEUy04Y1VMZm5GakY4Tl81enBpVWVSVC1UaXNCYU1wWWZPTDU1TVcwdGlzTGM3SF9WcjdTa1BtejFIQXE5ZnV0Y1JwblV3QTh6QTJ0QQ?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Macron urges European defense spending push within NATO, backs continued cooperation with Türkiye",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNUldNanpqX3pCQTRnQ29KZDhLQTBBZzl6cjEyUHI3TUg1eEhZRTl0SThyS2hlZU9ISjI5dHdmNUdBcHVYNnJmRjItTzFPUFlGY3d2NDhLOTdfZWpkXzBXUTA1VTI2SW9NRWxoX1N1OUdrMDlIYWxJQmZQQldBMmczSXhRczJhMDYwS19QYlRzZWFsNnV2R01yenRVWVQ1b0U4VHQ3RVR3a1o1MmlQUkNsYy1fTUdpd2lOc091N2FIQVhfbU1CM3d3c0ZUWEswMFVoOG9B?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "NATO adds SAMP/T system to Türkiye’s air defense network",
      "source": "Hürriyet Daily News",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPR09xRHZqSWZKOUYtM0xEd0Rkc3U5SzV1M09yTmtvdldPZFRBWjlXTDljdDhoQkVtRkdNRlBXM0RCbm1VbXBhb1R1UlBBNW92djFzcV85dWhicVUwdTRRdjJGRUNBZzF1MFdkX1JJXzNKQ0dIOTJZLTFyVUp5alR4YWxoS3BRZlpneXR0Vk9fVUZPVHhtMUp0Ukhn?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Meloni reaffirms Italy's Ukraine support at NATO summit",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOcUpOVlNSUlR3T0xVbVB4N0tCdUJXSmd4c1l4Q1ZkTE9WdVZTdVJLMUN5TUxWbzdnZzF6bkJwX29tLTRzdFdLMUF5X2MtNU1iMWNTVjV5NGlReGYwS29MSTVXdjBFaEJ5VnpGVGpLSGVGbm5zVlBJY1N6SF9mVXl4THU3RkMza1NUMnJvcC1JRGFoSEhYOGg3bA?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Türkiye Pushes Two Western Arms Deals at Once: F-16 Vipers and Italian SAMP/T",
      "source": "quwa.org",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPa3FNSG9pNjJMQmdYWFVCLVZ5c0RtcmFXazFTYno4YUNfMUdCZzhUQjQ1XzVULW1ONjA1WV84T1pGWUQ4elpScHJmc0tIVWlFQ2gwQmJrZzhpNTFQaTZxQTR6WlRzQjZWZnhqbXhKNlUxdFlTWVlJcGlsS0RHb0xhWFVkSDN3SXZndHE4VjFDN3hkdGhFQUlka0VzUXJvRWpEalAzNHYzUkxhS0lzTUhXQUdOZllBdzROMUo3M0tmQQ?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "France reportedly softens its opposition to Türkiye SAMP/T deal",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQTm9sV1QyaFVrbC11bWxZX2ptSkdZOGp2LWJyY3lTTDBONzJKY2xDTldzU0pzRW92QVY0ZFhqN2lBMVlhRXhfYjRodFVsQU9odm5mci1GcjBtQ3MwcXhGbDFvdDd6emlFdzFvUmlzRm15X0I5emhLLVNyQkRSOC1aVnVwNGZUNmUtaVR2bE5HZ0RMSkExUmhtZWZSWWctVFhLSGRPUHM5RUFsUQ?oc=5",
      "date": "2026-07-06"
    }
  ],
  "france→brazil": [
    {
      "title": "How to Watch the World Cup Today: Schedule, Times, TV, Streaming for Brazil, Norway, Mexico, England",
      "source": "FOX Sports",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPVXdtbXcwNVpBREN2TnhaQmd4VTJKeG9oQ1Bnbi15ZnhHM2dVMGxtZGkzVEhMcmktNnJ6UzdkSmV1ZUhoV1RKdkp1aWJyM2prTTV5OEhQSFhNTXllaW5GZ2REd0ZVNXVYNU9aSzVUSjJWbnpQLWxTeW9mejZscUFEQnZJRFRYWVpGMVhHVFhkM0xVQmI2T1VzejN3MTl6VEltbUhmdUJwMVNYU2VlOEZtZnBlU1dHcVEyVEhYM25YQjFnRWZld280?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "World Cup 2026 Power Rankings after two games: Who is No. 1?",
      "source": "ESPN",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOMGp0eHdTVk03cERpV3pKY3NabHdaNC1mcEJWdzlaSDF2OFBfYmVacGUzeHlFTFc5V2dDcHB3YndudnA5Q0NkZ1RsdmE2RVlHb2h2alU1UVBiMnd6cHNGZGpwQkpXcGFONFQ5dkJheGN4WnZlU1kxdWpKWGxYVDFSRHdwVlBocnBUZE5Mb1pndmh2Tmo0QjFoMGUzelFTbDI5QmtFNzRxRnhsbVpkS2ZxS0xWZ3h5eFY0ZDlyWnBvMmxJRm9IM3M1VmdTWGRORkE?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "CAAT - Brazil’s arms suppliers",
      "source": "CAAT UK",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTFBuWlhsU2ljbXVlR0hvRWxtM1hYa0o1YmEwUHNrS3QyQlRFRk8xU2JQRWZaRlByLWFqSUZGSnNzZnRWdVVNeTZqRlBGR1BnSWFPV3R6Z3U4b0ExdVAwTTRDQkJPWTBEdThCR1BfRmJtR01JbVE?oc=5",
      "date": "2025-10-28"
    },
    {
      "title": "World Cup 2026 Power Rankings: France remain out in front as England prove their mettle while Argentina continue to show vulnerabilities in another thriller",
      "source": "Goal.com",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNTVFtSGpxVEdNX1I0a0xwTFVjY29qYi00eXhySUhEQ3pLMkZCazZ0MG1pclgwQVM3RFhfVnJzYWRjLUpKY3dLYUxZS1g2czEtM0lnOXYyQ3lPRGlyeFRaVlNtRXlMc1RYSXl5dFVyWkFkMUNtQ09qa1g3aGlyVkV6d1lPekR3M1luRXc?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Lula And Macron Talk Defense, Science, Tech, And Trade",
      "source": "Eurasia Review",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPa0swU2FNdWxyakhhUXI1TlRscER6MDdjUXNqYUY3c2ZHRHFqeWpwMG5wYVZyc0U0ZEs5X3FQclFRUDNUb0xSMHBKSWNWQmVtZ1h4VlpwLWhua0RzaVRPU2E3dVJaMUV0Zl9lNzg5ZDNZNkpLNXFDRXlzbDYxMjF3YXRYVE1TTko0bDJ4OERSSVpRcHo4NWc?oc=5",
      "date": "2026-02-21"
    },
    {
      "title": "Lula and Macron discuss defense and digital sovereignty cooperation",
      "source": "Plataforma Media",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNQ055Y2VORmN5aExuS0VNTkp4cjFfQnZFdmM0OS1IZHh2VWtydDlYTU1xSTNlT29ZdjVvSjVIZ0dubjFMcXIwdjFYOXcwT094cVhNNWhXS25RVHhreXRJczlXSU1LYUxzRC1lbkd0QVlfMGljMHYyQ2ZXbXNwVFpJVk1DSzJMSmtyQ1pocF9XZWF5QQ?oc=5",
      "date": "2026-06-16"
    },
    {
      "title": "Brazil rejected France’s Rafale and is now eyeing 20 more Saab Gripens, deepening a Sweden-Brazil defense pipeline that could reshape regional airpower for years ahead",
      "source": "Vozpopuli",
      "url": "https://news.google.com/rss/articles/CBMirwJBVV95cUxPQ1dNQ3FVaC1ORjg3S18zVzhpN2RxTTlJQkRacFUzN09XbEJnSHRmaFBjdkY5VVF5bldaSVFwUTlFUERXNnpSR2s1TXQ1TzVZU1Fqa3U0MHRMLU05QjV5R0MxYnBRQWtqTk54cnlEOGVSUlJjSlpYazhLTldDYW8xVExzckEtM2NyMFdUbmVqSC1KSzYyTFhRRFNKODh6Zk9OckR1M01jR1N2YjFWTjFHQnBLOE95eFpwaUNHaVhMX0RSVFNITzNiZnBzUk9zZkNPb0hRaUVlazM4c09KRTI2ZGU3LUNkdG1FVnpuaTJTR0U4WjZxclZvVEg4Ry1nTWNzdXlsdzZZVG00U3lRVWktOENJcDJ0YWh1SklFaG1oelgxaF9VTGhHNWJUQ1hHZ1E?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "South Africa makes record arms sales of over $550 million to France, Turkey, Kenya, UAE and 38 others",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOWVkxU0hiSTdkS2RXRW1YUzFsV2g2UmtmeWxvSG9NRHI0MWhaU1Bxc1hWdjdhbEhHSXRObm5QQ0hHNnFac0xieDRJeWFmUFJMM3FyQ1VjN1J0cVM2cndOT3NiOXQ0Q0ItRUlGNTc5Rm9nWXlJc3dFckVrRWFkNi1OUUlwMjU0akdib3dwaGdQaFhpZkRLcG1sQWpQTm5MT01WVGNJTGo5TVFQMmpsYUM5YlAwMmpJTzV0dXh0X0xVbVpKcDUyZVZMTm1DTDJ0UTlwanUxcGRFUTRfQQ?oc=5",
      "date": "2026-04-08"
    }
  ],
  "italy→brazil": [
    {
      "title": "Italy Consolidates Defense Industry as Leonardo Absorbs Iveco’s Military Vehicle Business",
      "source": "Defense Security Monitor",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPaVh3b0xIUklqR1NycWx2bEppVDU1MzF1MVZJdjVLWGZiNGk0Rkowd0RXLVA1MjM2RjEyR0FscnlkU2pQQjJuM3J4ekJHNjVhMTFyTTBmbjlhRENoTW9BOXNjUXdUR1ItcllraENESTktUE9LMGY1ZkxRckRZZUV1QWIzWUUzcFlmZUpGOVZ5dTVNbTdqbjhIaTRsNThJQl9pcnFfZHpwcmlGMm0wd2w2MXE0MktFdy1EQVR5T3RtREcwaWUwcUFWQnhaZWEwVFVhbUp2Rg?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "Brazil Leans Towards Acquiring Italian Air Defense System",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5Ka0xMRXFYalhIWTNIRTJFeFN6X2NnWFBfcnlUUXVjZFhweFd2QmJDU3hLQUxQWDV5SVhmanNXWkRfZ01wdThxYWI0bWFydFlTMnRqcG5RcHhDc2ZkNVczbnBBNW1pR3pWOE9vWXlXdklGYjjSAXhBVV95cUxNSDF4WDM0WXZyMmFweWdadnc3dVQ0Yk45WDdPV1ZUcHdERnNYRlpvRm5uSXAycDlQSmY5a3JjLTFiMFBESlVpT045R3FlMVZPcWRnNTd4UmxNRmc0TXJ0Z1YyeWdxeUZDN0NpWF9xdF81T0ZKcXFHVEE?oc=5",
      "date": "2026-01-05"
    },
    {
      "title": "Not just the US: India to Brazil, 51 nations armed Israel amid Gaza war",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOODNXS3VmNWdhVTdHSVNWallCVWI5TmxyWC0yNHdGbDVLOUppU01Wb0ZDdm9VcGNnbzdtV0NqMG5ScUdpeDV6VDdEOVFmRVByVXV3WDNIN3ROeV9NMGg4S21lbXJfNWZfTG5tSGJZRVVLUkZ1UVRFMXY2OXc1RXJ1c2ljVWx1X3UzUE45aG5wbVVDS2h4Y2hCTDJGNmFaYWxqbUIxc2RuT0JsTWx3SUJSYTl2Y3BodGJ3QXFZ0gHAAUFVX3lxTE1iVFg3dVZkbTNRRFFEbXJWM1NzWW5VdWY0Q29QXy1QanZOS09VZ2k0U1lzUk5XY2p4eEZmNk4wdVlFTDBROUpqaWpfdDduOGJHVnhjU0hiRmtFZlpaWVNKSV9OMnppNXRBcXhERWFIamtjclhpZXIxelo5QkxNYVJzVjMtdUlYZ2dTT2RNWS0xMTUxZFVuWlhTa0t2MWpPM1hPYm5MUTZlM2gwS05Ub2dPaXEtbHpjYm5PdmNna1l0OQ?oc=5",
      "date": "2026-05-23"
    },
    {
      "title": "An undefeated 3-0, Team USA has begun to flex their defensive upside at World Cup Qualifiers",
      "source": "Swish Appeal",
      "url": "https://news.google.com/rss/articles/CBMiywJBVV95cUxOSzA5b2NyU1p5cUpmY1o0UG5Dd0o2Vll3YjJVUzQ2YXRLUDkxemtYQ2VVek40Qjc3Y3BaX2k5UXZQUTVGcVBQVnZuRHNqMlM0MnJKWFJRU2Y1emtsYk1wNkdhT25kcGNqaXNnSTlieWV0VGdTU3F3bzlZeWc0eThIcnVqbjRLYXJ0LXpaTm93LXZaQ0NPd3RqLTVIS0RXSzBGOThnQVhET3lrYXhscFdaLWFqXzFRQ3JnS3ZnOFhGbTg0U2pSb1pFeFRPWHJJZmxUVEY5SXZEc1R0OWVWUzR0V2o0WnFPeDUxTTN1YlFCcmNPMVJkRTk5eXg4bHgtTHFpRzMzZGJrS0JqX3cyeXpodGpHSVhYeVJwSUVXb3VzUXBpRGlxM3VXWGw0eHJ1V3hkOWUteTBkd2JEZUpuU1ZFdjhXdFVJekxVQ0N3?oc=5",
      "date": "2026-03-15"
    },
    {
      "title": "Brazil eyes Italian weaponry to boost defense capabilities",
      "source": "MercoPress",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPQVZpcU9zeVU2bUEzM2tDMmtObzZqYWRvUnNia0dnN3ZmQW1aTnZxVDFnMy1nUW1zVWF4blBHUTNXQi1NVFBqeGRwWk5MUUN4eDNGVnFfN2lhUlFUZ0dYZUdVSlJPc09xVnNwMGlHQk93VW5ORU9vVUQ5Y2haVXFCWE92TmxzbHhtZHRGak83MEEzWHBIYlltRzktQQ?oc=5",
      "date": "2025-12-26"
    },
    {
      "title": "Day 3: Italy start their World Championship title defense, while France and Brazil play their first matches in the Philippines",
      "source": "Volleyball World",
      "url": "https://news.google.com/rss/articles/CBMiigJBVV95cUxONmI0Ri1SMy1Dcm1rQ2RrQ21NdF9Ea3Rob2ZHclBmbm1ZMGJpUFhfejBycElEYWJRZGI3QlFBWUxWLWVhTzFxQ1FQaXoyZFZIS2IybnZMSDVRODl6QkRPdjE2NjRncVhyUldYQzJST1hJT0E3TG5pTTh0dEh5THdJUnB2cmo0WGxuRDBqSUVQUFJTYTF1bzgzQkFEN1duM3c4ZXFETm85Y05oVEpwQUdydW1qY2pVaFlzeUxlV1R3OEN1THY4cGhQTThHVnhZQl9CY1Q2OWtnUFdHT1U4b3M3UE9uVmpuVkMwMUc2NEhxOHhZYmNxVkhpU2xhOXA2QVROSFh1YVBhd0txZw?oc=5",
      "date": "2025-09-13"
    },
    {
      "title": "Brazil Picks Obscure Italian Air Defense — There is Pragmatic Logic Behind It",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPUWV1d1lqT3B0NndDMXpUM0l1RnJpVnZ1Zy1kM3ZadFM1ZzJoXzlGTU5BQXpZUEpGRVBWWWRxaExQT2tfNWNUNTB5Snh1TWp2MEFWbFMzRUFqNHd2Q1dCVERsbWYzOVA4OWVXZENMeHYzZTF4TVEwWm80M0FOY25HRU5ic01rLVR6RTN6bENoOXJpYTJyc25lVUZkZWs3WXdDWGtocFZqOTZOSVMwWnFQNGR3cUd5MXVxOTI1MFppczY?oc=5",
      "date": "2026-01-05"
    },
    {
      "title": "What Role Did Brazil Play in World War II?",
      "source": "History.com",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE4xMWI3cUx1ODNOOXN0TVltREEwUjBaQ1VVMnZReWYtWktkQmFaellDVkQwdjU5VVRZU1pSWTlBbzdfNHlTY0VKWndPNnhseGhMVTh4TlFTdVJuY0FhYVBZbU9HX1VpUERBYmxMdkVlZGVIckQtbGtsTS1lNE8?oc=5",
      "date": "2025-09-09"
    }
  ],
  "germany→singapore": [
    {
      "title": "China is 'losing a chance' by not being at the Shangri-La Dialogue: German defense chief",
      "source": "CNBC",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOVUg1MWUzZW91UHBxYUx4bnRaQ1NyMUw4NlI3dEpWYmY1YWpwZDFoX0otMFotTGNGWklSenJBa1d0MEpMUTh1enZfZGJxSVU1cV9VNHEwMWRvXzBib0pWWDJnaTdKODlfSzl2dHVQMGcxQXA1SGF0d2N1akh0R1ZyMDl5NkVkYm9LTml4Vzd6NWrSAZYBQVVfeXFMT2V1QWpUeS13cnFYS1IyUzMzeVB6enZ5Q2ZQbGwtNVdCcnRWTmN4cUlQSEsteE5peDFydVYzS3VfV0Ywb3ZneHcwd3daXzZxa2VEbFJzUElUV1A0UVdYTHNnMUFsNnNNZGpsdVRZdVc5RG1rRVlwLXo2MDdIMmJDWkk1aUdhbXE1Y3lUU1ZpeWpyUjZoUDV3?oc=5",
      "date": "2026-05-30"
    },
    {
      "title": "National interests always shape security: German minister",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQcXZvTnBHODhfNmRhQ1BfdUROQ3pFUEN4cnVOQ1NJTkJLcXE0aEVYTG9MLVB6SHFsRlZES2xBVmltWE41NUYyY183N3FvTmsxeE95bGtFMXF4a2NSTk9mOTNQcE42eWtKa0FBZUFkTkt0eG44Y1o0MlFRazFyaGdMNXdkX2wyTThwVGV0WHZoLWFNUEh3VmF0aQ?oc=5",
      "date": "2026-06-01"
    },
    {
      "title": "TKMS and ST Engineering to create submarine service ‘hub’ in Singapore",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPNXZYUEVoblRtSElQMmRHVldoT2U2anl0Si00VXA0TklxR1RWUkxKdWQzYVR5NnB0dC1NWVg5UzRuUUdySkU0UElnQTZkc1h5S1d3ZlNMRVVBU21waWlTUEVQdEZ0X2NEVC0xYzc1M0F3VjU2VUNSQTRGcFJnNjY3NlBnOUJjbjdMc0NOSm1sY2l0SUZLMGZaWGkwZTdLd1A4WXdaN3FldG5mY0hpUTdmNEhSTTQyNkNnNmJLeFdvM0pseVdrU0g0?oc=5",
      "date": "2026-03-24"
    },
    {
      "title": "Berlin’s Indo-Pacific strategy blends arms deals and alliances",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPUGlad2NLMUI5MlAtSnlYTklnd2UtTFl5V19fNXFuV2lMakRfZTZQNVAwdmgwd1dvSG9CUWFlcUdFbGZQWnIwZWkxR2NqWndvRWxPVmptMk9iZ1NhVzF1OUZVeGtabFZIWUdib1JNaVBoUXVHLTA0YVFkNEdqamRVT2I2VlZfY0ZvUTZF?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "German Defence Minister Visits Indo-Pacific with Arms Firms in March",
      "source": "Global Banking & Finance Review",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNMHJKSjVxbVQ5MXNtc3l3Q3JJUG1Qc3g5enBCbC1WUnJKZUw3RjlOUkZZd09qSWVkSXZuel94bkxvczdwMkhDLVRMc29XU0lPRERkdkpCSHdaU2tTYUU5QnFvUjRzN3dvS0dUdDdnemFydWpMSVVwd1h2aGZBbzdldmd3cUdkRzZrQlRoWEdkeUdFMnpQcFpMTmxB?oc=5",
      "date": "2026-03-18"
    },
    {
      "title": "Germany eyes lasers, spy satellites in military space spending splurge",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNczhiX0JXeGdreTBFaVlSQTRQWjRMNGh6VlhmM2xQZVoxb1pVVjNyZkViTzYtdURBa2hlRjlqTlM3YTNJbzdfcjdtQ3V3WnhVZ01nRlY5clNnX1htdFVQLV94THFWUnJNLTNNOWFNZGpsWmlnMklOZUk3a1FxdGt3akN2aTByUGlFWWdCMVVUWUtmc1hxamxCb05DUkg2RWdoWXNhWkR4N1NMM1F4VFgw?oc=5",
      "date": "2026-02-03"
    },
    {
      "title": "EOS to scale high-energy laser production for weapons at Singapore site",
      "source": "Optics.org",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPVGhsRDFxSnR0a09Zbzg0Y1dnX3BPXzdrS2pvTUxtNEJXVl9mTVZTeTQ1ZVUtMHJvR3dIM1ZjUFhYYlU1bk9wUzJpRFVzZVV3RDVvUWRXNkhoNVpYSWxrTWFYNnYzRHJmeEZPaGlhTkg4M3kxX29Bd3E0SnR3SGZma1A1dXBDTU9pX3RCWDVVNkdjT240OHFYTm1PSQ?oc=5",
      "date": "2026-02-10"
    },
    {
      "title": "Germany's Pistorius in Asia warns of a frayed global order",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQMjNtWmpwTzd3bW5yNE43UHljVHNQYzdPM0lFSC1LbGVoMWVVMTgzQnNPUlpZazB1MXhCTm9ZUHlpT25telBfTmk2T2E1OENBM1ZmTldwRkk0MTRxUnpfd0pYaXo4R2JMMG15R3VSMGlYUVFUUHYxVGlMQlBZcFkzVlE2VDU5czRMdUZEWlV0S2hFS1l40gGUAUFVX3lxTE9UeEhaQWlXeGJ1R0VZcl96RDMzNk9ndEVFMGhFeXA3TDZlQ0VTazk2dFFFZkptNlB4M0Y4VEFmMlJFUVljQzdlS2tyNW5hN3RiS1drYjdMeFBJdFM3YTl1dGVCYl85ZGNKVkEyMVJGQVBlb0E3dkNzU2xTcnpyWEh0UnhHNUgzVDRqcTdWY00tR2pVY3M?oc=5",
      "date": "2026-03-30"
    }
  ],
  "united states→singapore": [
    {
      "title": "Hegseth Outlines U.S. Vision For Indo-Pacific at Annual Asia Defense Summit",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPU3VmWHY3N2x5RXlRb0VCM0ZHYTcxcVg2SlA4X1FQWllPeG9Yak5qRERoVmhWeFBwNVhrZVN0TTU2TTg5d0J3OGlRVzZKMWxrLW5CSzV1anFOY2ZZaDhsWU5WMWN0TW1RcEFzQ0JHemRqRmtlbW5RdlJHa0pFcmNWMEtTNG9HVmF2cFpnVEl4M0ZwVGZKaG4wOEc1U2l4WkRmYkN3UUJkX2MzdWs5R3JnaUNPdFY1M2g0dkhDUlYzVVdWMFpQMjZZTThxR3BTX0x2dGc?oc=5",
      "date": "2026-05-29"
    },
    {
      "title": "US Greenlights HIMARS Fire Control Systems Transfer to Singapore",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5DeWl0OWFJNVowYlZpZ1lQT09vLWVrX2c1QUZyai1SRUJCdTRZNlRxaGE1SGxscW1ESVdmZXlLM1daelNrbGFUNXRCclM1VU5QXzUyRUhFd1VPeUgtV3NwWkE3eElFS3JNOWpYT3drRW5fLWlVemtZ0gF8QVVfeXFMTTM4X1NuM2NManYtSzJwNDBPTTFraFJqSVZSRzZhQ2laZm55YlN2bnpiRGtkbXhCdzdfTlBJb09ibDlSbGk1VzlrYkV5dUJtYkx0RllUYktSNUtaYXMxVjExVDhmM094SkZMU2RoanJjbVFGa1E2SlFZRzhpWQ?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Hegseth says 'no state, including China,' to dominate Asia",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNRlh0eDU4bmY5QW5lWHFwNVQzQ0xlUHRiQ0s2TVdWMGtrb21WME05VFZ5OUl0T1RCajBpUERCS2xmUG9icV9odXMyelhFcHkxLXhyYV9IZFV1M0FJdlFBdEJoLUpyei1TUHlJeHY4cFlIMGRjajZ0TTFoaU13UVlVNERVc3JmN1dKdDJtZXhYQzdweHpzZ0ViWkZIbDJGTWFJQnptZHBqWUJDbExFenfSAa4BQVVfeXFMTW5INGFsRGJyeG5NS1ZnN21Ia1FIMGJ6T1RNZ2kxRGdvemZPMUx5Zk1TV0RhRGkzWl8zMW1nZ0ppTTlucEx5TmNFMVB4RlQ5TFRvanQ3Y1JPdm9HZGpNREsyYkVMdGd4YUl1Y2dhYnowQXlEZXEzNmpMV3dDa3p4RDVrNkJKOWowWjhIdDRtM0lLRmZnOHVta29JeW95UFI2emdSU3h6Vl9odV8xTXhR?oc=5",
      "date": "2026-05-30"
    },
    {
      "title": "Hegseth urges Asian leaders to boost military spending against China",
      "source": "NPR",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNWEdjdHBlejE5RGhKZDNQTUNvQTB3eUZicDJuYVlCNGJJV2otVGVKSFpkQWMzc0hnRlRNS2x4LXdTVTdHdDRveGFBTUlieTd4NGJnMzhUZk14MDBxOVdWQmZENXI4TjFPT1pnaDZnVTJxQ1BFZGIydXpqSjlBU09VREU2Qi1kQQ?oc=5",
      "date": "2026-05-30"
    },
    {
      "title": "USARPAC Visit Strengthens US – Singapore Partnership",
      "source": "army.mil",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxObTFlQzU4UmxoX2hoT1BpXzVMenhRQXItMFZwendUZVlMZmhzRkNLVXpkMjhiVGpaaG1CT25ad1h2cFRmX3FRRFU5VHNfXzMtbXJTdHFDRm1ld2tjcG5kT1ZNa3lLS2YycXd5SDd6ejJpNXVyeUNfM2U4R2xiTnFibk1kLU82Nm1CUDBwZFJYb9IBlAFBVV95cUxNM0FLLUN6OE9jeXk5YnQ5YUMtR2plQXUtRkdPa182NDRaOVlBVWN2LWY0elluUU5ya3V0UWtPbHRGYl9UZWhTbGtrRDB0blpsSkFyUkZUNi1oUjJmcGItMzEyNDF1RGJZbU81UkgtUXFVekJkMHJCUzJNQkRsMGFwOFY1T01YcXBzRlhRdzg3VlN5OFpF?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "Hegseth’s Message to Asian Partners: Do More to Get More",
      "source": "The New York Times",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNZ2ZvZDNDeGI2TUotZ1JIaTRpUXgxbzJaNW5GQnRES05ld0Vmam1fSGJLS05HYnF3VGxtdVotYUl5c0tPMXpSeVFCR0Y3bW1qTTFXRllYTUVjaDM1Q3RkM0EwMUxhRldxT21NY2ZuTGRQc0VfN1EycWlyLUxSX0FXMC1qb1lWUGtoWUE0?oc=5",
      "date": "2026-05-30"
    },
    {
      "title": "Asia reckons with China as Trump pulls back",
      "source": "Politico",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOdFVhOWNrNDZ0aGQ3eDQ4UW1QR0M1OUlkRGNQUUgxU1c2T2dBX3NxT1VKYWZmZzVITEhHeW55Wnc2M28yU2w2eEJqU2pmSnNTWVNDck5GRFN4amt1M2hWSTYzVW16VE8tT2x4bmtuSW9VcWZxVmFfelNjbkVPcFRfQjZLTDZlZldVbWp2cXJadw?oc=5",
      "date": "2026-05-31"
    },
    {
      "title": "What Hegseth’s comments at Shangri-La Dialogue say about US foreign policy",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOMTJDOG9KbXp3MEpwM09yckNEUl9mb2w0MEsyb0Jtekx0c3ZpYXBQSlI4VkJGWmtZODJHQ3RzLTFiTjE0dXIwM2tocEgza1pxQ3NFVmRkLVJaRzc1dVVnVGI5RHFpRVpkUFJYdTA2X3NEdGtFZV92aGhTUmZ6YWJMS1l6VzdVQmFDYl8zVXVjWFVYb3pSX2F1RENSaUstenNrZ3hvMW45XzhGVU0waTk2MnVGVFfSAboBQVVfeXFMTnlOUkRxWEFPalJxUVpaQnBjeERhdGl3S3dwWklOQlZfRm9NU1lsWGZlZE9Qbll1LXlYUGZBR0xoa254QTdhdVo2WmxRRmR0c2M4R1A0R1Z1X3V1ZGtza2lzUXVoZDhueVlNSzltTUQ1c3dpYU9jS0drcG9KRlhFRzFxRmJaT0FNR00tU1pPQXd4NkNwWTZQRzJpS2hEd3R3NTAwaDJnamNJelpDelJkcldsa1UtZHdDb0dB?oc=5",
      "date": "2026-05-30"
    }
  ],
  "israel→singapore": [
    {
      "title": "Airlines resume some Middle East flights but disruption continues",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOWFJfQjlRZjRXUnYyTjAwWGRsUzRVdnQ4SVJoT3lDNzFkenp1SzFOTnF6cGEyc0xicVNqR1BmclRUb0F3QUpfNFBQbElVdTk2LVVjWXhKbTJYYVRBX0dyUFVtLUhESkpwbFpiUXZfOHg3Z18zdDVHdWVNczJma2kwdlAwSEJHQ0o0U0hOTURpdFRZQ3ozQWJYZHpzWmlnbkw2LVhhNW9kVjZwWHh1bEhac3FvbU9xQQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Israel’s battle‑tested tech sees demand in Asia amid tensions with China - analysis",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBzbHBUdVNLX1JZRlY2SndvQXIyN0l2Z0pTV2phMDFSc1hvTVFrOVpIWmVWX3dvOVJJSWZKUkE1dU52R1cwS3ZNQ0U4eXdTdUFsMVlNRk1ULUZZSkl3aWtGUkZsbw?oc=5",
      "date": "2026-02-15"
    },
    {
      "title": "Defense",
      "source": "Oracle",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE54WVVmM3RNVjI3U1YxRFdWSWhoaU1RaWg2LUVCUWEybVhfZjA3WjVGQlphNktPOHBmZWNUTm55d1ZxTXFoZ2RuNEpVNGttUQ?oc=5",
      "date": "2026-06-04"
    },
    {
      "title": "Israel showcases air-defense systems, UAVs at Singapore Airshow",
      "source": "JNS.org",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQWmtuLXljSTRJX3hqaWFyTHZjZDVNSE45Y3NDRGhKR1NEa2ZycnljNVNKWVZUSXE0N0pQd2xhTWVnZTRIOGlqUTVJWWRQb0o4RVdFT3Z3RDhvVGpOX09sT3VPQVo4d3JZMDFpNWg1X3ROaDlfMUR5QzNRNm9Ed0Zxd1phTER0bU1EREpkcFljUHNnTzJfTnRtdF9R?oc=5",
      "date": "2026-02-05"
    },
    {
      "title": "Israeli defense firms target Asia as Singapore Airshow opens amid regional arms race",
      "source": "CTech",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1SVlpXejdRSy1ySy0xRGZzZXpoTkxSbnpiWWUxb1hYTU1Fb2F6S0V4VWw5WEdIeE56LXJuckdiRE9hUk9oRUFfQU4yNkdVQWN3NngwYnNwc3h0QXRLY2tsUlR6VGNSZzNYaVE?oc=5",
      "date": "2026-02-02"
    },
    {
      "title": "Singapore to acquire three Gulfstream maritime surveillance aircraft",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNZV9FdkRtQ0d6X3ZRYm1TTy1Ka1A4YkRaaG5mSC1YZmk5MUlobmVNXzZZVmJGNVFaTjBxZHVqWUFjb01tRHpLVGRfNER5aHE0NDU4cEVDWkVDSGpXcUE4dHp2Rld1TW0tcVppU1R2c1RIa1ZnSlllUDZael9UYkRPLTFxQjhabTVwWnhkNnREZWY0YzhOakt3WW1tZmVRd3hNYnhzb3lvaXg?oc=5",
      "date": "2026-02-27"
    },
    {
      "title": "Israel approves Arrow interceptor production surge amid Iran campaign",
      "source": "www.israelhayom.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQdTQ1NE1oTnFWOFZnZUNFSzcyeklsMm5IdVlVN29lRmZ6UmNYUFRuamVFZEFPR0RaazR4bEhsb2NxNVV6T3lERDBIcGVQTXphblVOcjZkY3FSUHhna1MxdklXSTRGMktlS0UzdWVJR1pVMUVrSjd4NUp5WWM2TGpVcGg4aE9Ib3RJeTRTOUdJM2dDc1J2cjRCMnlpSVpoX0xLUVYzYThRN1hfMHBoanc?oc=5",
      "date": "2026-06-04"
    },
    {
      "title": "RAFAEL to Showcase Integrated Air, Space, Intelligence and Air Defense Capabilities at Singapore Airshow 2026",
      "source": "European Security & Defence",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQMDdjTVNKOW9kd3J3UHFNR0NWdEtaT2hCN0pIOHpfZEdnSFRmZ0R6LWJxcnBJemFCMFZ4WkxmTlpra2tnaGM1Q1NSVkpQZ0VBZllhUGNKNWhpOWN1cmZaV3c2WVVMWEFwTUY3bXkzWXV0ZmdUNm5nQXdXV3o4dUdUVjFYR1A1Z2k1TmVIaTlxa3B4UFZPNjROakxic3FoOFZ4azRIYnRtVGt4amg0WE9ELVZlbDdaNTVHLVROU1Juc0ZSZDl1dzd5aElHZzVfQ0VDSXhfdDlySWkwOExPdFk1dg?oc=5",
      "date": "2026-02-02"
    }
  ],
  "united states→bahrain": [
    {
      "title": "CENTCOM Leads Regional Security Dialogue with 12 Nations in Bahrain",
      "source": "centcom.mil",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQblNFQ0tGR01peXlRaWN0LWEwNlNuVGVnWF96RUtLWDAycDBLLXZwNWtwZWtLRGQtNXFpek1HRjZQZHZSYV9PQkJRd3FhS01IWTRvMUV1MkV4TnN1elhGM1BoX0hKUl9uVGMtMjhNQzlfUHl5YURyZ0cxemljQjNaNXdjS1dLUEhmbVJWNk5Gemxvd1lXWEc2OGwyeW9XQzBZRGRVeXdSWGVxMlhrTTJBbVl2SUxjbUFNN3Z3U0h4OVpCakNXRERiUWhB?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Bahrain says air defenses intercepted Iranian aerial attacks",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOMFc0WXVmdU5ZMC1PZWdUTzlNaEl0QlBSdUp5Zmx3QS1oVTRKbEJqaFJ4UjlqX0U1a0MzYnRicEFCa3hRY1FUYVNRU0RoSEczbW9Zb1ZYM0ZEeDROZEgycDdzdnV4MmY3MjFYYkxqWFl0RkZtR0JVUXM0SFlFTk5WNzRWLVJ3alZIQkdiMF9CWmkyT3FTNzN1a0NPXzcyUEll?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "US evaluates moving CENTCOM forces and naval assets to Israel after Iran war",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE41Y2VKUTFZMlF1anJWTkpKU2gxNnd2cTFDOXlheEJXX2tvY0E1UFBLSVJ5Z3BKTVpZZGpvZUs3WE11R0NTUmFoWFlBZDRjZnBtYVduY19JcUhtcWpv?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Tehran targets Bahrain, Kuwait and Jordan after U.S. strikes Iranian assets",
      "source": "CNBC",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5sRm9EcldpYUsxdEx1MnNJUUhaVGc1a0hsUDN6am1PMnJXQWZ2c3lVSWFEMVRtcktEeE5EQUxpcC02Rzg1akFuMEd1VGhlRmxPYzV3RnBWMmVVejR5YkhhYWZfeDg3UWYwWlROZGY0SGtUREZQeTFDSTM4Z3XSAYIBQVVfeXFMTjB2aTYwNTNBOVpOWEhaVUl5ZGx1WFdMTUMwU3p3TkMtUlNfR2hEZTF0X2s5VWlZZUpsbnc4eXItazJEb2I4Y3VuV1BOa1FoX1NVSVJwblpyNmhNQ1hBSlhSV0FYb3Y1SFdiMUkxX2VuVXJoTDJJWW01Qk9OZFg3a1NtQQ?oc=5",
      "date": "2026-06-09"
    },
    {
      "title": "US Central Command Hosts Regional Security Dialogue in Bahrain",
      "source": "Asharq Al-Awsat English",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPcmpManFhMkNpMzR1Q2tMbmZNeTNsMmgtSEctVmFYblBXeEtnQzhYOVJyaVhqRVJwcUg5MkhFQzdEOTc5RjMtWkhjbll0dTlqQTVKTFExQzZaVjRaalhfOUdaUThaWkZZY2wyb0ZvX2h3T0pjNW9GaVMzQlJLWmU2YXF3Sm5NeFNUWFU3ZlBIOUpQUUlhVEpMeFBVcUZzV0pM?oc=5",
      "date": "2026-07-03"
    },
    {
      "title": "U.S. says it carried out 'self-defense' strikes in Iran, including missile sites and boats placing mines",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNa2RFSXFKUHhtXzhCbXZuSlJCOGVTREs0a01mM2h5T2lodW4yNDZVU25YdFlaMENjZjNiZ0YzNk9teGNRQ2t3WTZBVG1TaFpnaGVPLU1jM1h3YnEtNGs0Mjg1ZGpNZ3g3VjNONlRiZFgzT2tQbnRZeV8yR3h4a0hmUGpaT3c2bEZkMXRtRUJMbDM2UkFfNE5YTVdzZDVveS1Ld1h5UWpLSjgzcUR3TUFWSl9YbUVHa0NFMUljUzFqOTdqeHJLVWRTUXFFQWg4ZEZ30gHWAUFVX3lxTE03RnpqcGtDWk9nQ2lPUU9reURKZTJIRWt3cEtMZDYtZHpsQ0xEN0ROcjdhVjhWcmE1WUp4QjBHaHdhSmFIM2JGSktpcFFCOUY4OWpKQmNPNk1HbWtDR3FIYXg3VU5Gd3dld1EwekVST3dRTUpTSFFnM2swamN3Ym1QOGVSQXYzbV9jY2J0NVVOdUN0RG9GcmZYQi10MWNyVTlnMWZYNWQyRVVZSzViaDd0OVhDLWpJcE50bTE2S2JkbjhyOFBnZ2c2eHBrdlZoUFhHb050OEE?oc=5",
      "date": "2026-05-25"
    },
    {
      "title": "Despite ceasefire, Iran and its militias continue attacking regional states (April 2–8 updates)",
      "source": "The Long War Journal",
      "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQQ3BYbklHMVNHZUdIZDVzU1ppNVF5Wm8xbFdoLWxJZGZUVEdVSlZvZGxzWk1FSEFiOVl3UjNLT2VVN2ExTXRYNktUODdNQjk3X1dpVXhWRmZqX0ExVllYd04ydm82MEpmS2RjSTduSm80ZjNpR2NNSzJtSHp1T0pkaGlMVS1ZNHhaN0JsWVM1OVZNbjhRSVo0bzNLSS1PSXhLaGJ5T09RSUR5SlJkTGxUNVd0NEhGX0lBWlZNdW45RFZ1dU1yejd2czM1ejhBWFhndjVfbklZbXRzQkRD?oc=5",
      "date": "2026-04-08"
    },
    {
      "title": "Patriot missile involved in Bahrain blast likely US-operated, analysis finds",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOLVRPMjI0TE44aUItVE1kckZmMTJEVTFDb055MG40RWVhVkhGX0lHV0tuN29NU0lKZUl4cGdINko1Z0RDTC1lZjItUldqQnVJRm5tSWl6UjVrRWg3OFdGTy1tSjAxRWs0UEhxcWZvaTFrR0xXRXY0WC1wTXZUYlE2aDhpSFRmbUdWYUJ3UFFUd0dpRWtSRXBocVhIQncwRnhEZjY5SHZZaUJ3ZFZVV0drSzhjMV9MUWdfc0FwUTNvZU0?oc=5",
      "date": "2026-03-23"
    }
  ],
  "türkiye→bahrain": [
    {
      "title": "Bahrain says air defenses intercepted Iranian aerial attacks",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOMFc0WXVmdU5ZMC1PZWdUTzlNaEl0QlBSdUp5Zmx3QS1oVTRKbEJqaFJ4UjlqX0U1a0MzYnRicEFCa3hRY1FUYVNRU0RoSEczbW9Zb1ZYM0ZEeDROZEgycDdzdnV4MmY3MjFYYkxqWFl0RkZtR0JVUXM0SFlFTk5WNzRWLVJ3alZIQkdiMF9CWmkyT3FTNzN1a0NPXzcyUEll?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Title: US senators say Türkiye’s return to F-35 program would benefit NATO’s defense capacity",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxOQWhzTkJyZ0dsNG9TSjFEOUdoV0V6ZjhHRXppREphUG1CVU51azByQUxUeUZHMk9jaW1vR3JrYmRyb21Tb3RsNTdmZ3lFaFU2ZWhmSFZPbjNrRzJ2QmYzUEN3YWlkUTZoWG5iWTUxSDZCZVRSZlZiMG9jbzRrNk82bWNJcTZSV01zMU5QbnR1STY1dlFMMzdLX3p1RlRCSWhhS0V5WmV0SnUyTGV0R2ZybEVrZUNScGpZMW1JOEh5bGVGSjlfS3N3eQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "US intercepts Iranian barrage, denies Kuwait, Bahrain bases hit",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOV25mNkV3ckJhWm5qeU93blpxNWlGSWlqMzRWcVhrLTBoenhaV3M4Vl8zQ0JCdFlrZnNqNC1XRF9aTmVkNnRTZDE2THlURFNlM0tHWG1qb29GTVlNeWVMMk9lWDlsMnV0WElfMG02WWY5Nm1jaWVzNkxEOEpFYTV0aU1LaDdfV1JsaVl0NWE2Z0syWVhmS0k0bmJ5MkhBak9Qc3ZZMFZmZDdsVTJ2YXZz?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "Bahrain says it intercepted, destroyed 3 Iranian missiles, several drones",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQUTI4LW1IMzBsc19STExEOFRxZ3F6STlSQnUxRmJKSG1JeDhudnR3N0xIcWtzRVE2Z2YxWDZUQzk3V2kwbU9GRmEyc0EtdEctbDhyOHlEVmR0Nk4xMUZFaFVCUkZtc09xZXlyTE5kUFhQWDI0NnJLOUJ0bXFfcnVfdzRKRUZTMHdIMDhQLWc4eU4xeDVxN3dHLV85aFZ6bWVnc2J3QkdUM0J4RlNiSXhYNl9VNHVrNmM?oc=5",
      "date": "2026-06-03"
    },
    {
      "title": "The Riyadh statement: Türkiye, Azerbaijan and Arab regimes legitimize US-Israel war on Iran",
      "source": "World Socialist Web Site",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1FOUtGMXl0NVpPMGRTMGE5MWZfRzdVLVQ4Rjc1TEFXcUlTRjVVaF8zX3dJNkFSejEteVFPRmFkUXlEbHZEbjlrWGNrV3BzelF1aHpEY2ZRVGdpejNVOUYxdFlXVkw5Nldm?oc=5",
      "date": "2026-03-23"
    },
    {
      "title": "Bahrain, Kuwait sound air raid sirens after Iran attacks US bases",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQQTlZN3hZa3laZ1ZHd3pGcTZJaHcxRXVuUE50WFZMQ1RsbVV1X0FJLXlGVGhDTmlwaFFnbUpaUDdIa093UkhaNFNpZmNnSWt0dTlyRzNoT0FBbU9YZlZOcFdaalF1TXhoMUdGblcxTV94UGFQSm9YS2QydkZRQl94d0ZnNUVMMGRlbEtmS28yWjFudHdsb1VLc3BVMnNSd0xZS2YxNGFn?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Bahrain accuses Iran of ‘blatant aggression’ after missile attack",
      "source": "Türkiye Today",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPbGZjcHRRVmstWWprVzgyTHZPby1qMUdtVl9sQzdYNldLQkJFSElNX2x1UXcyQ2Z3X09kRzNVczA4Yk4zMmtBSkVyUURaWDI0aGc2Vzl0bmFJdWs0ZWtnVUNwc2M0VDlCLUVTbklsRXVrZjQwZXd2c2NTNzRDSEVfazJ0cGVsaGtCNmEtQk5sX0otN1lVUDJULWVVUm9mRVJMdkVrd3FxVFpER0U?oc=5",
      "date": "2026-06-06"
    },
    {
      "title": "Sirens sound again in Bahrain amid Iran strikes",
      "source": "Yeni Safak English",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPWFY3ZWd1WWdEQlpyZnpSSXBDM1pnc0Q3MVRUdEhLUGhjdDNtS2ZBZTRhWFZQMXpUN2NyZm1hOWtWWDdsSGlhdFBhOXBlTEpoMTFSUGRyQVhzekl3UzFsRzg4NzhWLVVLeWthTExXN3o5Rkc2VkVEZmxBTjJ5NGJ6dzBaU2VlQUxjVy16T3VPTQ?oc=5",
      "date": "2026-07-09"
    }
  ],
  "italy→bahrain": [
    {
      "title": "Italy plans to send air defense aid to Gulf states after Iranian strikes, Meloni says",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9UcjdoWW5GVXZBeS1SVXdMMmlINngwcDdKME1LN3BIVENHUXdGZlBfc0NsVWZTemg3YmZMcHQwOURXTlVzbDlCaV9QYTJmbUtwQXRfUXlObVpoYWdmdnhn?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "Gulf States Request SAMP/T Air Defense, Anti-Drone Systems From Italy",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE51TVVRME80WEEwOHR3cFV0THFQd0FsTXpGNkdFWUlOaHB3OFU3ell6NFQtTmQ4RlkzUU1TZmVuTGJ2X2F4ZURoSHdvV1FTU3lKV3k4SEZkcjZUbndkem9pNk9JTmNmT2lSVERHYk1hdFVTQdIBd0FVX3lxTE9raGxZMkp4UFpkb0JYVWNja1kxNlR2bjVISmZpb29oczM3d2xaSVBTQU5XMEl1QUMtMG5idGpTem10SkIzRVJrZE1ES3lxUmZzMjZqMTdCQUU2NGhHZkJlNTF6OXdTM2NyWjl6V01sZ3NFSE81LTdr?oc=5",
      "date": "2026-03-04"
    },
    {
      "title": "DODEA teachers who evacuated Bahrain get new assignments for the upcoming school year",
      "source": "stripes.com",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQdlZTWkgtWGVrUmZmdXI5Ui15NERDbnJnZW1Xa3RXU21NZlVZOVhORXdHdjUxODBvdnA1OG44VHllTUhNdVRqNWV0LWJ4MjRlbDVSUzZPVERMSkpOTlVvWUZYUWZlTGU0WEZIc3BiUVAzdUt5bFRxX0ItRTBUQXJzcFFOQmsxaExHcVJlMGdLSXBkRDktUG9rLUhEQ05tZw?oc=5",
      "date": "2026-06-08"
    },
    {
      "title": "Trump says US Navy vessels could accompany tankers in Strait of Hormuz",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNdDJiN0c5Z19ZRl9qWWpXZWJlTzhVNjVMSmN4MV90ZlZtaTY0VmswSVBONllMN3phN3lQRnlGb1NhT3V3RXd6dDRJUDg1Ti1lYy1tRGpaMThQSWhsWDdOaHR5SHFOU3lZUDRhcmFZVnFQNXhDalV3bnRaSE5iSFNQVG5ZcHo2M084NzZLYmJpYzN3ZF9qUnpjMzdHeXBMd3RNV3VyeTZyczMwU1k?oc=5",
      "date": "2026-03-03"
    },
    {
      "title": "Pakistani warplanes land in Saudi Arabia as part of mutual defense pact",
      "source": "thecradle.co",
      "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNS1dQYjd5aTZHaEstQ09HV2Y1LUo3TVUxY2g0b1A1Wlp2SHJOTUQ0SVJHQUtFRll0VkZMS0tVVGJkelJVRDlGWlNtY0l5cDJpR19XMjdFWjFhSXUwTmotRjlkUkcyNFUxaDRKNTAxRGxUZ0t1MGdScTJsUG1UZ2lRU1hhbmRHVWxRNE9hUll0N01EUHdneDhqTnZWc1lXZC1Fektz?oc=5",
      "date": "2026-04-13"
    },
    {
      "title": "Germany Joins Saudi Arabia, France, Australia, UAE, Italy, Bahrain and More Countries in Bearing the Economic and Tourism Fallout as U.S. Strikes Iran Again, Sending Shockwaves Through Middle East Travel and Security",
      "source": "Travel And Tour World",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE45QUlwVGxoSl9nUHlNaXc2Mld1NmhHaXgyb19NUmF0NEY4UE52QXdaNFk4d3NfdU1fbDA4TE4tRkpRaXltUzB1WEVnMWJvZS1xXzhBOXl4dEswWlM0cEF4TXBxN2RhbGxUSXdoXy1n?oc=5",
      "date": "2026-06-01"
    },
    {
      "title": "How Far Can Iranian Ballistic Missiles, Cruise Missiles, Drones Reach, What Parts of Europe Could Be Targeted?",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxQTFp1bm9FT0NjVWFQQnlydkNSM2dVazl2OXRfRU5wUEpLOWhMaUJFTi1CU3FPSk1GbE1yTWo0WnJVQUxtSG9IbU5OckxQeWpxZ3RvRUhrMmdtaXM0QnBoRnc1T0ZkaDYwLXVKbTU0OGE5MkxqWUtpbExVTnk3eGctcVZ0UVpqOXlEcDdJV0ZGR3lKMGJSMFl6TWRIeUhOUmdzSEdsVzhZVlRVZWluams5aEJGcVE1Z0tNMkxzeUt3VjlyMjFkOHNyUFRZU0M5cndXZi16NWxROGNscExERGVUMy1lZnM4NjA?oc=5",
      "date": "2026-03-03"
    },
    {
      "title": "Vicenza High School principal ousted amid DODEA probe into misconduct accusations",
      "source": "stripes.com",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxObjZmTUdJV2pRTjd2Qm02QjVFcDhJdHMzUklTTmZQSFZQdHZHb0NTZjNoeGR2eHB5QnBzLV9Ld196aVQwMEc5OTdtZDJzWVNsTHNHSnB5ZFBBUXNncDlHUFl2NHJ4T2pIWDVlR2R1SVl4R3ROR1VHcS1oWE1NYnJhZnlRUjZkbW1WM1FueGh0QWNUMkJQUmFlZ01pTmppTjVQ?oc=5",
      "date": "2026-03-02"
    }
  ],
  "united states→morocco": [
    {
      "title": "The secret US plan to turn Morocco into Israel's western shield",
      "source": "Ynetnews",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE13OHRwV19nQ1JuNXIwNGZaelFqc1dXaW1lMEVEZWZYMm5ueG5TYWs2VEp1WGR0b2J0MmJWUDY2RjBKb3N0ZHhTTDdmX2JoeHEzU1ptNGpaMDJFME9vbTN0SkY3NUJ4VGdZWHlaM0hn?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "What to Know About the US-Morocco 10-Year Defense Roadmap in the FY2027 NDAA",
      "source": "Morocco World News",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQUGpYU2d3ZERpS2xvUmV5Wlo2WGg0RFVDNXBwRzJMQnZ6Zmc5UkNHNUdEOUlDNGVmbElKR0lqNVUyM3cyQWVYc0RTUjVLMWk0OVY0NURucG15UUJZNVl6MjFsWHh6SDIxdVZQTDNKSWF2QWx2Y1RNTmd1WkhCbHdLLWVzRmMySmxnUGtYSUtjWTM0MFlfMDNGbDFKVzRrMktjeXdVQlhaMXZaMlVEb2lRRHIyWXRsXzl5bVBwOUd2c3Z2MU0?oc=5",
      "date": "2026-06-23"
    },
    {
      "title": "US defense funding bill would turn Abraham Accords member Morocco into strategic partner",
      "source": "All Israel News",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNUEJMQzhvNFhWZGgxMTJXMktHSGNCYVJUV1REVHBPem1fbVQ2OEN5TFFkV09WcmMzdG1iQ2QyM1ZvNmJfR2pLV0ZRYzAtVkhScE5RZTB3MnZEdGUxTDBma3AydW4xdE9qT0pDc3VTQndoMVBocDRNelRqYzFxZ21QVmF2N0NLZmlzNU5HRURkWGU3Tmd5cEhGRzh0TWFIbXhvTDBBT25NR3N4c2JXS0NGLXVQcVo?oc=5",
      "date": "2026-06-23"
    },
    {
      "title": "Drones, cyber and military modernization: US bill outlines 10-year Morocco defense roadmap",
      "source": "Yabiladi.com",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNOEpCXzZOOWNRb19xOFFiYTRJUktNdFlIOWplc0F2eTJxYTF5cUZLWW0wdHlwVk5mem9VVklJclpkMFUzUHFNc2JZeFZ0RFYwaWduZ0tVbHFDZElCQ1JQY3NPeTNsMzVWRC1GZzV6enpqN2NxbHRmdjlDcG9nZkJOTDJmdGdzWUdMTjJiS0xBNmJ2UVhESDNaUw?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "US Army recovers, identifies second Soldier near Cap Draa, Morocco; search and rescue operations conclude",
      "source": "army.mil",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNalBNRHczUHh1TVVFSTRLSVdaemg5VktGUkZlMkJNa1hYQloyNGpxejBaT05aTXdyTi1leHM0a0VIc0dxb2JZYzFzQm1qZDU4WUFmM19ZdHBiQXE2aXU3b3lMUnNjUDBOaE1SNFhvZk1hcjlXRlRDNm1KRWlXTGtha3o5ZmRrcC1NaktLSXliTUlSU3oxZWRIZUhoMFVLRjdYOXJsMTk5VXpxUlFHVEZ0Rmw5UWdxV25PSDdVTkxxbHNyRHRTanpUNkpBRlJrMTVsMUlxT9IB2gFBVV95cUxPTnlRRnc1N1pNQzlWUEYxYWNFZV9CSVd2SC1RZDlwRGZQSDhYTXpMT19NMncwY1NoMUdDcV9nSHp4RFphdmxxVC1uNWJDYkFFTTh4VFVUQzBHUzVob3hicGN6b19TWWNUdFVMb1I0cDg5T0N2VFJKaS1PZVd3VlBXZjVoZVRFcjY2aF9BN1V1N2ZlcnF3NmJCWk9YWU9Ka09fQldDQnNIRmtEdWl4YV9NM1dsZm5WTW41SEpuNU01N3RTLTFiY00yYWdnQXVQNFFFNW9Sc2Zmdksydw?oc=5",
      "date": "2026-05-14"
    },
    {
      "title": "250 years later, America’s ties to its first and oldest friend are getting even stronger",
      "source": "The Hill",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOLXhJVUtETWpsR0lsUXZQa2RGTjIwWlRSM19zeGFxeFVzcWl1WVNsLVlicmZGVENITHRqX2JMNnJ4SmFqRlFRb2FldTFNRmk1YzZuV3Q1R2VycGVreTZUUF9fNFh2ekpiZHZqSmxwNmpiVTN6MVk4TzVjRDlqYTR0ck5GQkk0Q29VVWt6RGYyd9IBlAFBVV95cUxPSXhxVmo4V3hPUllBdzgwSHhKT1hFRTNIdFVRWGllcGtpQ2tuNTBwdmU1NVFoMWxoZU9sTDFtZjVhUFc5QmRZRHJLeG9VaFFxT1VJXy11WVdiaDFjWkRkRnp4RFBFOWd4TTBQSksySXpHSkotcDlUNVltUk1aNlpFN09Hei12UmlyYUZLeEx3dm5aUWNl?oc=5",
      "date": "2026-06-01"
    },
    {
      "title": "Morocco, the United States Sign a Decade-Long Military Cooperation Roadmap at the Pentagon",
      "source": "The North Africa Post",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPRk51aGptdlQwLTQ3eVVBTjVJOU8tX2JycTVURlNhaVZlNmVGWm4xQWRZMVlEWERnQWV1aEhtZ05USFU2MEZ3eS1wQi1JeWcwTUtINWhaMnFFUzJwOG50LU9QYXFCeG9md1ZkVmNlNm1PcnlJQVBWcUc4V2dvWHRGNjBwZ1dvZnBmZmo4UHlhMUg4M1JjT1BxT3VJYWU2VmVsSWlCY1Btb283YTJvMzRveV9HYkc5MmJJcllnZ19EaDVfc2wya3BB?oc=5",
      "date": "2026-04-16"
    },
    {
      "title": "U.S. and Morocco chart defense future with new 10-year roadmap",
      "source": "Escudo Digital",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxORExHSFNnYkZ2S25RQUxmSy1VQnVIbkpMcEFpemNFRVpBdzV0eHZuRlgtNWN5U3g3bUs3NzNSLU1oRlRBeHI4cXpHeEl6a25aQlFCc1NVdTdtNmtPUERGZ2xQVURDZ0NVSU9vdG95OWlBUTdvdU92MTRnWTFmNXZCWE96c2gwVXFaWWhpZno5cHBoeE8xUEdXREdhc0JtTWRxbjkwczJiVl9RcVJzcEJwUFpXUQ?oc=5",
      "date": "2026-04-21"
    }
  ],
  "israel→morocco": [
    {
      "title": "Algeria is spending $25 billion to counter weapons Israel built for Morocco - opinion",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1wQ2pKN2tmcXgwMjRGaHNsdDduYTBWU2xoZkJTTEhVMUMyZnVkQzBnanlmZFNIY3BDempFeDdzN0FraW5yQ1ZNZ1FQX3dicmtEVTh2TEpRTXBPT3haZklKSkJNRQ?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "The secret US plan to turn Morocco into Israel's western shield",
      "source": "Ynetnews",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE13OHRwV19nQ1JuNXIwNGZaelFqc1dXaW1lMEVEZWZYMm5ueG5TYWs2VEp1WGR0b2J0MmJWUDY2RjBKb3N0ZHhTTDdmX2JoeHEzU1ptNGpaMDJFME9vbTN0SkY3NUJ4VGdZWHlaM0hn?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "US defense funding bill would turn Abraham Accords member Morocco into strategic partner",
      "source": "All Israel News",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNUEJMQzhvNFhWZGgxMTJXMktHSGNCYVJUV1REVHBPem1fbVQ2OEN5TFFkV09WcmMzdG1iQ2QyM1ZvNmJfR2pLV0ZRYzAtVkhScE5RZTB3MnZEdGUxTDBma3AydW4xdE9qT0pDc3VTQndoMVBocDRNelRqYzFxZ21QVmF2N0NLZmlzNU5HRURkWGU3Tmd5cEhGRzh0TWFIbXhvTDBBT25NR3N4c2JXS0NGLXVQcVo?oc=5",
      "date": "2026-06-23"
    },
    {
      "title": "Israel Ramps Up Issuing of Air Defense Export Licenses, and Not Just to the UAE",
      "source": "Haaretz",
      "url": "https://news.google.com/rss/articles/CBMipAJBVV95cUxObGJxams4YVRmQ2VDREltOFNhX0phRkFlRDBoSW1kbTMxRlN5RnpGLXlBZDAtMDlOdmFtN2xIekh4WU5RSFhYaUVlWllUQjBQX2E5cGQ2aUdsdnJYa0dtTy1TT2ZUUjJvUENXQ3NtbVAwdDVBT25qVTRJN1hPZmltaUVoa0NYaWdRTG02aEVzREYwbUNQbUtHQUtpUG84anhPd2c1bGs1U1VKbjBRbVZINXdkMW80eGxPb1d5R1Bpb2U0S1kzNXlhOWwzeko2MGpicl9TQllWLU5OTWFlbUw4aTdaeXVEemNZcERwMExhMFo4YUQ0dElBUmxOSmZGU0ZiTm16U3JhWlRET0VHcjZnQ0pacXNOMVRvbnZpUkpscXFGaXFF?oc=5",
      "date": "2026-05-07"
    },
    {
      "title": "Leverage Morocco as Spain Drift Makes Madrid an Unreliable Partner",
      "source": "Middle East Forum",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPTnBGVkluekgyUjRLNXhiZEpoajVmMHlVMkpDS0hjZnR0QW51UFVwX2RMc2w4YVZ5MHNFakgzM0xaRExvSnZVN1FUVkZQU09wRTNaUmdSUjB0c1VxeDZBWjlNWENhTzZWVmNOS0MtNi1tN3MzaUI5QXVGdnRmU0w5UG53VHpDYWd6WWFSNGxNNlZLMU0zNW5Sdm81LTk5NElJalpjV0p3?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "Morocco overtakes Algeria and Egypt as Africa’s largest arms buyer after major US and Israel weapons deals",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOSE1Oc2YwRFFiSXZ6UVVQeE5CT0x0UGxBMG9zTDVNRU5VVzZHcHQ3cUhjWlZXRUdRbGJYSVlRcGt6UzQ0Y1hodWRhdjZFemZsQUFnWkRpXzktbzdJZWlsWktlNk02aGNONjBsZUV1SVcwaFNhWDNKZXdGMFkxbjN0YUllQzFsNDJ6V2R1c2dtYmE5ckowMnFRN2EwSnc3N2UwbXRISGNpYnVkREZ0QW5nT1V3My1iSXFicVF1OVhINXRzRWNyVFdjUDRYV0hnX1ZraHN6Qg?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "Why Morocco has become the continent’s leading arms buyer",
      "source": "The Africa Report",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWmVvdldXdXpndktnX3hmQkdxS0JvdmFTRm42dlMwOFRkcW8tRDZtTVlEeWd5MHd6eGJhbl9UOWxJUHNxb3NvQTE3eTh0ZTg3UUUxWlVoQ2hkLW1xNnBvVnNGb2Faem1pMzJTOV9CWTd3aExJMnZkRGZ0TEgzLXlIYWR5SVZvS3Z5SWJ3WnZWTVRwLWhfX195SlhZeWc?oc=5",
      "date": "2026-03-17"
    },
    {
      "title": "Israeli drones, US training center: Morocco is Africa's new military tech hub - opinion",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE8tUUxLZ2FjNW41UWdCZXgxNVpnelNVLXlDR1NrM1BfWjBZWE1VenNpNG1POE5lMk1hZFlUZVE2Q1pTMENGV2pqM1VKT283d1I0M1ZVOTQ3UXBOWGZ3R3BIeEF6Zw?oc=5",
      "date": "2026-04-19"
    }
  ],
  "france→morocco": [
    {
      "title": "France versus Morocco: Who will win in the first quarterfinal game?",
      "source": "Northeastern Global News",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1mT2cxaWRBc2RZSUJKSDVtcXY0UGRnTllTdDZ1YnRxTUxjSDRYazJkcnNFZm9jbWR4aC1ueThJemJiMUdSWFRQT2Z1MDRfMlZQU19JVEszNExNUjAwSGg0ZHB5eG9MbUY2c21wU2hpUk9ZS1FzMkl5T1hmQnJMZDA?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "France vs Morocco Props & Goal Scorer Picks Today: Mbappe, Olise Connect Again",
      "source": "Yahoo Sports",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOUEZVUFFPejJ2Tldhb2lmYmd3YTZuTUx0NU9aZk9VNU1XM0lMVENZMjlwMmpOTTlhbnVNNDRvVDlvWTVhTUVveDJKVC1wdVlVQ3ZIUE1nOXMwb0lCRHNJSm1jQnNEME5IaTVHb0NMcGl1cjlROFZ3NkxWeFlmYVlsMEpzTQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "World Cup predictions: AI predicts France vs. Morocco quarterfinal today",
      "source": "USA Today",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQR0xxMGhYWno0ZUVkMUlHa1gzMG9kUXUxLUo2XzlKLS1GbVA2M2pKcWtkV3VRNHpmNXhYdHlEV2lOaFg5MEJkQlJVNTIxaE1rRDVPR1F3OWppMFlvX1dtbzFWcVk2RkRZRF8xeTlVOGZGYlk4ay1PQnVvMF9EVnYxVnNleGxkdmZoTmVGV2JPeGxrdk9EcWZaV0xoeUFwY1JBNUxmZEU2SFlTR0dCYTBqTlF5U2RwWXg0?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Mbappe keeps France rolling in win over Morocco",
      "source": "SBI Soccer",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPRUs1WlJobXp2azV5WHJnZFh4WVBfcTdjcVg2aWRweUNobUlqcDg3OXhfX2kxUVhSV2RKMzhCb19hUWNGOUkxeUdVZVFoSV9meFhPRVlCVHZ0eTdsR0pfTEc0bWNja2NaczVGXzA2LVpfemtUdVRGQmhkOHVjU3ZmY3NGajFxVzA5el8w0gGLAUFVX3lxTE9FSzVaUmhtenZrNXlYcmdkWHhZUF9xN2NxWDZpZHB5Q2htSWpwODc5eF9faTFRWFJXZEozOEJvX2FRY0Y5STF5R1VlUWhJX2Z4WE9FWUJUdnR5N2xHSl9MRzRtY2NrY1pzNUZfMDYtWl96a1R1VEZCaGQ4dWNTdmZjc0ZqMXFXMDl6XzA?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Morocco vs. France World Cup prediction: Odds, picks, best bet for quarterfinals on Thursday",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPLW44RUYxcEpIRmthZWVVa01TSVJhNXlIQ28tRGVjcmhsV2ZLa19OeGpPSVlEZ2VUenBxSi00WlpmaXZzMEwzQmpQR3ZSZkRmREs2dHAtc2lkTWJZakFBUHJ3VlZ6bTVDUjMtUlVib3FURHNjNmZMRUM0bkowazVJQTR0SEJjNEliSGZhS2NzOE5uTlVlMklPQVU4WWotbnQ4OThmbUFmNnRweHdVcC1ZS3JXaWh5T29TZmZMTkZScWh1Z2VKdUE?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "France Defeats Morocco, Advances to Semifinals on Mbappé's Decisive Goal",
      "source": "조선일보",
      "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPUjNCUy02Wjd4SlpGeXpsSGdSLXBZemRHd2o4Q1Bwdjl0ZlNFYUd6NUwzNFRxdXNGMVFqWkpBSjc1NU8yNXJHUDFmQzlpcWxLakhya0x5RG9QbGpKRjdRcHNlUEY2M2J0UU51NEFGQnhtR3lTZlBFc1lESVRJQXRCcWI3UjVhZw?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "France, Morocco Kick Off World Cup Quarters On Thursday",
      "source": "The Patriot KEIB AM 1150",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQbkhDV0JKMzcyZ2RNenZUZ2Y1MGJFRElvWkZUUzNIUS1YZkdlM0k4Mk1DTTdxSE1zNWxNbDFqWEZLdTZXQ0hDamFiaUU0eHVoMFhkUlg1RFN6dUVXZ0Rabnd0ZjYyQkdYRmhJaW81bklVRjhZZkNjeHpSRm5RMngwUi1sMG1WNFhER3FQRllsVmdjTldQME85cUlJZHM4akswWWpWcHhn?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Mbappe lifts France to World Cup semifinals after missing penalty vs Morocco",
      "source": "USA Today",
      "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNam9hU2ViRTZaSXVTQnVILWc0RmtjODYtZDZmY1FYeFMwVXlObFFoekdKUml2SjJYZkExMTBWRjhjTDl6UC1NME00Z1ktdm1OU3kxOWFQbkk3cGhPc3NfMXdJRy12Yl82cXhsT3VmRlVDWmJfX2VfTUhpSUFYV3h1YzVXamZfU2c0UXVpTnZCbkJfc2ViQmlQZHBKQnBoOTVBYXE5RW9SUktZSDdCZUVUdGM0ZTVGeXdGWDlfZ0VWRURXSVkyQU55TFRnVHZxMXZPOVBpQlV6Mmd3M3NTVFBuRUhrOA?oc=5",
      "date": "2026-07-10"
    }
  ],
  "united states→denmark": [
    {
      "title": "Trump again demands Greenland as NATO unveils military projects worth billions to prove its firepower",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPclAzS0gwcXJBSTlWSzRHekxRQlJ0bGY5UGVCaWxqNnVvdTFKWTNtbTF4LUtqbFRqckRKcUxDLUk2M2VxSGFtMDRrS2UzNzJwMm1jeVd4em5mNWpNYks1SGxtbmZvdVBQMXU2alpSYWo2eW12ZDJPYk1tcUw2bkI1NXNSOE1kaVN5OHczS09HYkhSUzhIMnl1bExOT3R2YVlfOGJnMUhkNF9sZy1kM1k3YzNRX3dIb09Dbi1hMXB5RWtCN083NjM4RDYwZEp6YWJvNnfSAdcBQVVfeXFMTjgtMHhBZDIyRnhUbEdSV1I5d0JjWlFjT1hCU2xNblBEOGFvU0RIeVNsZ2JZeEdDX2pEZjZUWWRaakZpMGptZ3d5dXp3ckU3Y1lPSk5QOW9KR2I4SmtOdWd6Q3pad05ZTTJpRWRLYVBqV2RTYkdEZ19WdnpzYWZVbHI3c2pnWDkyZzNVZjM4Nm1FT0dfVmd6Znpna1BGaVc0aWRucmNvR2lzZ3k2aDhZcW9qU2NSX0JJX0NncGlocGZnTW1MOWhBSmRmSXB0eWpSVHlIZllWUjA?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Trump blasts NATO for rejecting his efforts to claim Greenland as leaders hold a summit in Turkey - ABC News",
      "source": "ABC News - Breaking News, Latest News and Videos",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPSEZfZk8yakpKeTlqT1JrWjRubDZnZ01BWFEzTlAzaU9MS3dYWWZ4U004N29nMkRFSmtUWnpUbWkzRHppTjExcGlpWjVlRzFwN2NQNV9zanFmc0VzcVhpN3E5R1VHZWJ4U3o1WG8yOTA1cG5rRTByVVJHUUFzVEJIT1AtT044TzJfcHNwTFVQa1dwSnNZTXY2WDNUR1B5MFRaWUpoRm84NDRIV3FER0lTenpR0gG3AUFVX3lxTE9MbUNfa1lhU251WHhXUkV6cUVxUUV3UXdNbzZ5MUdqNmdFRFlaN0hsVkR6ZU1HOWxfNEV6WTVCWThMbWR2dVpaZEI1el8yY3BLcERQa1FFTkMwQXZfNTV5TGwzWXNqUFV3dFRLZlloSDk3cVBsYzdqU3ZZcXJTLU9MX3dib1M0M0NWT1VQNjMxZ29YYUx6VzFWRUxiN1BtdDl2R0lPeGZhMzZMYXZvcGdPeVk4NzVkaw?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "NATO unveils billions in arms deals to prove its firepower as Trump again demands Greenland",
      "source": "The Washington Post",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQcy1VQjE0NjBsalNEZXpXdGZ5bXU0U19xdTdwc0tYN3FQcVFVSmZIemVPc25IRjY0OWNZVVd4eUw3Yi1wT2Nkbl9KVzVWWWNSb3YwOUR2aGo4ZUgzOFJZWVljdXRERXpScF92Y0FqRWk3QWlLN0k3em43amhycFk4aWFfM0lrWWZPb05mOHVGTjdmY0RkdEhKR3FuU3V0bUxTUzFFX2dka3dKMldGakNlS2RVRFJVOG54S29ubG01bGtOVUYtRE1meW5OMUpwbnhiR2xnTTVMbFg5NkVjV2lJSg?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Trump plans billions in arms sales as NATO summit tests alliance frayed by Iran war: 'Daddy isn’t going anywhere'",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNbW5PMHpSVXFwR0tWZVN0Z0hVUzVsbjZ3M0ZUbTNXR3J4dXh3ZmFGZmZYcERzdk1abGZLQjBfdVA1Zko0YWdTT2tjeV9KbFRzcTVhWnNMaFh6dXEyd1ZwTzdIRERld1Vlb0dvUFhhSURoS180ODRnMkNTb0JFREdmN2J1TTdtbTVpNk43UW0zWDdBd0lCZVU4akpheVF4cDlEOU5rUHlzb3Y2aTZSVHlJUzdkT1RvTEZVMTBLOE5zWEt2SDEweVJEaWhmdFRJQ0N2SFM2Y3RlTkJ2VS1KUzlKeFJn?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "A US and allied strategy for Greenland",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNSXNiYjRsWVpjVENva3B3V2V4OTdtanZWY3hFUG9zUWRyUUszNU1zS3h6NEo2TnNYVWpsLXduODZtN2NFV0pkT0ZrZWNPbDRwV1lBMlNmZXAtOWRCYUhEYTZHMWlKczVqNm5wSUxVSWR3RUFxVFBzbGpRTXN5cWZQa3BIQURZQjdGQWlGbUMwbk9CU3J6UHpzQy1uWDBGWlFmRklHdVFXZUl6MlZac050WHJTM2FHeld2RldYQVUtc3Z2dFE?oc=5",
      "date": "2026-05-13"
    },
    {
      "title": "Denmark Is Buying US Missiles to Defend Greenland From the United States — Yes, Really",
      "source": "Military.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPeGlhNDRCNU9uRGdqZGQxMUxMVXlZWm1QdWNLVjJOTnJQRlRSYWdlOXdsclpKdDNoSEl6RTRCcUV2amlBVVFyd1AwazZITkE2WXY3dDVoTDFqeGNxYWFodU84Z1hKdjJSWHhHWTFyd0l3bkZ6RUdMRmtKdnBTeEtqZzNGbkxLajhHMUV4blFKNUkzMnNuMnFUWGZkVWp3bEozdjFpS0pkTVFhOW9ZQVJUazctMDZ3eW9K?oc=5",
      "date": "2026-02-20"
    },
    {
      "title": "Denmark, Greenland, and the United States: Whether a U.S. Purchase of Greenland is Legal",
      "source": "Columbia Undergraduate Law Review",
      "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOR1RPb3h5OHVtOUxwMkdJRng1YWJpb0ZiekhwRkxXcWswb0tpcUNycS1JaEZFbnFVSmFza0ZKVXF0WmlBM3NQTEhqU29RWW05aW5KMkpENlN1dTdoNkpxOGw3S2hKQWdUczdJUDE2UnlDcGZwTXJmVXFTRU5PVDhTbDJFYjNfNVBRVFlZd0VaaTBYaGI2T2tGb2hIcVlSVmpMOUZyREVBUERueXRCRFNMdUtOYlhONGs3Y3dUSU1pUnNPYVFEV21z?oc=5",
      "date": "2026-05-26"
    },
    {
      "title": "Canada deepens Arctic defense ties with Nordics after Trump threats",
      "source": "NBC News",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPQ0NiRTJrTkxFcjJycWJqSlJnQlZJUkQxdGxrdUF2Y0FYekFoVDh0T2NLMDBRZWdvNzJPaFVBaDdvZGI0Zk9FTkZMeDl5T1JNbTFwWWdjYW9WZG13bS1PV19ZdEVabUQwdng4WWpVbURza1U5MWw2M2dkQXl1NWc1a0hNV1k1aFRVbldWMG1WMml6UHhxdmhQMnJtOS0wT3ZQdEIyTW40TQ?oc=5",
      "date": "2026-05-16"
    }
  ],
  "israel→denmark": [
    {
      "title": "Our Legal Challenge Against Denmark’s Licensing of Weapons to Israel Concludes, But Our Struggle for Justice and Accountability Continues",
      "source": "Al-Haq",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1hS0tuaHlMVW90c2hQWVFqWkg2cEFCeEtjVVUyamVKazdqRmtRck0wbDE1WkdGX1ZCblNqeWhIejRUcVVUcWM1aHFpeW1XTHNwVm8w?oc=5",
      "date": "2026-03-19"
    },
    {
      "title": "Maersk is still shipping weapons parts to Israel despite denial, new report says",
      "source": "Middle East Eye",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOUC1JbUlJY1pBR0FTLXVJbDMxd1Z6dVU5YUpoNVNyRWdyNE5yWDJFQ1R5M3lDdlR3S3EwaWUwX3VOOVM4WXFaem9jeGV4VlE0aGNINC1sdF9mVTJvMDZGSkpZS1pReUh4aUJDSmJpcWJxSC1MVWNRQTM4WlBaUlJBZG9lN3VyTjdZdXIwZGQtbEx3TThLVUVnU1RzbmtzVFJtRDZuSnc4R2VJc3FfN2FMTkdZckY?oc=5",
      "date": "2026-06-08"
    },
    {
      "title": "Al-Haq Continues Arms Export Case Against Denmark",
      "source": "Al-Haq",
      "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1NdTktNzJIQ0llaWY0Y0NhWi00SnItZ1NnVEE2aFAtVGwyTGI2amZabFh1czlDSVY5b1JCOHlFQWI3VDJwSFJYWEFsTGZnZFVMSi1v?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "Danish police baton charge, detain activists protesting shipping company over Israel-related cargo",
      "source": "Middle East Monitor",
      "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPbjhfMHhkMmhxSUNoN1d4eVZwWVYtZ3RxN0RIdm5HSDRmbF8tRV82M1pqbEQ4bVhxVHBiX3QxMUNVSlhWZXY5eENJMWNJY0E0UnpwcTh6cnJmODdWRHRXN0ZFdlY1YlV6UmI3SkxMTU91dFUyQXpEU1I5TDU1aW5abmNFYjZFNURpbWRpV1QzZFczV2lMcGJZWUZOQ2UySDNRVlNQSTM5c1ZMdDFud0l2S0FfdHlKYWtTWDB2bWZtaWNvelRQb2RzRGZyeGxyZTVyNG4wRHNtdG0?oc=5",
      "date": "2026-05-14"
    },
    {
      "title": "Danish Supreme Court opens case on arms sales to Israel",
      "source": "Dawn",
      "url": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFAtY3dTV3hIaHJ5LUdjVTlnUS1kVHN2QXJpbFBzR1gxcEFsU2o3NkJfUzM3b1h3NTdMZVJ3Y00ydVFXc3VLdUxSbg?oc=5",
      "date": "2026-03-11"
    },
    {
      "title": "Denmark: NGOs sue the Danish state to stop arms exports to Israel",
      "source": "Amnesty International",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOTVhEb282Rk8wUjNJOUFiQ1FZcXM3TU1VUmtObFQzMzJIc0RWSkVSLVZ5c3oxM3pXQktESUJrQXJxVC04VWFDS08tdndSRXQyd2x3TGRKSmgyX2dHdV9nU3Q0U05LRnF4TkR2Q2xJNDU2a29GejN6OTBqTkZwMHhRdW9rQVRKaXdMR0lTU3hjbmpweVJBM2o3ay1ENkloX205anctOEtvM1g0eWZleEt2bUJR?oc=5",
      "date": "2024-03-12"
    },
    {
      "title": "Denmark decides against Israeli Barak air defense order",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNSndlUWFnc3d1dHZ5cV9yeGJSaDVTNkFvV2VtUHFzcXUzX1Q2dE15U1Q0Y01XazNyMGg3RDBqZXJoNzhZYWhpc2c1MHNqZ0xfdnFMbmNuSmRuRVRNemFnamJhOUFudDVqSjlJTm9tajR5MHBMa19MOUNCS21fVHhEWF9RbmpVcjZNeERuODhCVWFmeGVyLVBZ?oc=5",
      "date": "2025-10-24"
    },
    {
      "title": "Court throws out lawsuit on Danish arms sales to Israel",
      "source": "Courthouse News",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOMWF6RExKem1LN3ZPRVNheWQ2LUVhWlZZUzZEZEtMRkZSdWlUR1NvZDRZTkREVU1jS0JJZ2tUa29BRWQtbGkyLXgtb3dSU3ZHQWRMeGo3M3hheUNtLVJIbVoySGlXY2NKSDZrTXplRmlCY2lpM2wycEwtZTlOOGRPQWJMS00wbU0tSG5iTFJ4U08?oc=5",
      "date": "2025-04-11"
    }
  ],
  "united states→romania": [
    {
      "title": "Romanian Defense Firms Gain Ground at NATO Summit Forum",
      "source": "The Romania Journal",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOc0preXRRY0hIRXRIMUVvSkZyYTV0N1FnMXlvV29uM21BSThnWVlrNGk1T1V3Ny1qUkhSMFROTldzM3dqTThkaFFsYzBhNUNPWGF5ZXU5bnRvTk52T3dhY2F0NDZ5LXVWeWtzOHJaQ1pIbnI1WkJzcU5PVVhfSk1DSE4xQ3BobjNwVDNJcThienFHY182TnBkRkF1Z9IBoAFBVV95cUxNQ0RmVDJ1MjRvNGxELXhNLU83MmpZVEdUMFk1aGZTN0RzNnBUeXp3NjBMaHpzcEdUdDltSkVCQ21DQlhBNGNRQjFVQTU4OHRqVDZBekRBa2FYOVhDR2dLeGtiTUZLQ3J3UHRjZV9RNUlnYlU2cVFCa2diTkZOUm84TlFRbmJHSHhDNzZONG9ocFphWjF1QUtlVHBfR0dWRWY3?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Romania Invests Heavily in Air Defense to Counter Russian Threat",
      "source": "The Jamestown Foundation",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOOTdya3luUG16SmhhZzlmTXhZbXRBNk9sVmVjYVRmSWJabVNKQnZIZHBJMFlJaUkzc1dLUTQtWVZ2NFpaMDZDSEI0TUFwdXlBMWxSTjFkeWxiSklBRXZuUUF2NkI0VHpYUzNUOVp3MU1ZZzE0cG1kQmdXblZDVEtVTnAtdDZMVHdJLWFhbjgzUWw?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "Deputy Chief of Mission Michael Dickerson at the Black Sea Defense and Aerospace Trade Show",
      "source": "U.S. Embassy Romania (.gov)",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOR1FSQTk4QkowdHpCS3N2UFZScW82SUJBZXBiQWxFLUpxVHVkbW1SQ0xSd1o0bHI1WG50c0pXT19KYVB3T2FLV3FiR2ZUQy1KdVlENm1NUTRPMllfWk80X2xGYWFFVFFBUS12cl92RXppeVBtN0ZQOG9zRGk1RGhveHJ0aWx5Rmw3ZEFPRE5xQVpCRW5STFZDYkZVS01TRkNxaXZya2ZmeUdBbUVJU2xSZ2tPYmpXWUNF?oc=5",
      "date": "2026-05-13"
    },
    {
      "title": "Portugal, Slovakia to provide drone defense equipment to Romania, president says",
      "source": "Romania Insider",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQX2RRSmI5Z3h1SE54RHdlZUVfcjgyMGNYbE9VZnB4TVloMWt2Z2t2RF9aVWF0VTh6QTlhTy0zcDRvNmRRRG1YcnFFakdHUXV5Qk5DaUNKWDJNR1FMTy1NSlZjNmNfN3I0WUcyTUZRZ1FEUVEwQndBU3JGSmM3Ry1oQ9IBhgFBVV95cUxNQTB4empCcFBNN2x0emNjTGZxcVZqbDdSdzhQUExCRVJBVVBad3RBSjM0VEVqUjZ6UWc5ZGlaNDJHRnd3NU5WSWoxbVdpMk9xb29fZklpcWlOVVFuZm5oVVlwX0tHbm9fdmkwOXY2T2pKc255bHdlUGIxY2haYU9pYUtKOVlIdw?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "What Romania’s role in the Iran war reveals about its diplomatic positioning",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPSjdjdHU2NnB5czFya1ZQMlFPVEVzX3lFbHhacjJvN0s3OXBuMWVGazgxSHg3TGJsa2FWUmdTbFJidnd4UVhCMk9qMDA3ek5mbWotNmFXUndvZUR3cWMzTGoteHBuMlBOODJ5eUVzZDNqZ1ZJS2ZMWVFpYW1DODRlb1c5WWotdnpVdUtfNTlPZ0JIRFVJSG1sS3dJTUgyMDFEZTZoeF9WdWlrMDFiVi1jMDdYZ1BfYjdyOTZr?oc=5",
      "date": "2026-03-23"
    },
    {
      "title": "V Corps commander visits Romania to deepen strategic partnership",
      "source": "army.mil",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPa0VjY3psMllTcUJHSV94S3RkbWFVSWFGVV9HTFpHLVJuemdHSFlacE9fQmdvR0ZXYkQ5dEtCZWxsTlVMU3FWTU5jQlVfalRFbXRrUFBEanhydXFONjQtV0hfU2kzV0prVV9iTHlvdlhvcW1XeWVhczFUQ2RZV3hmbUhGOGl1U3NNNm11Nm9yQUxEOXNSa2FRVUpTckpnem8zaXfSAacBQVVfeXFMT2REaW1tdk01OEVXOEhWZ3JscVAycS1CeWRrOWctaWp5U1gyRmQ0OUxKcy1CMU9BUHFSZWRIWnJoNjZmdGtOQ0xnd0pCRnhwbHM4QlBwcGszWE5nTzZjekE5ZGRzeDNtLUJyb2lDbWpNeG0yZmhXT3o1eWxPSVVHT3ZnZWdxMlF6d3BFVGszX2FOXzQzS3lFdWJfT2hfRnBkdUR0ZHlMZG8?oc=5",
      "date": "2026-02-12"
    },
    {
      "title": "Romania gains access to US counter-drone platform",
      "source": "stripes.com",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPcWs2cGhUWVN3dFFiNkViN3N5V3A2NVpFQWpTYjliR0ZnSVJQVm5BUVo4al9lbUEwNUU1ODVERFpPbG44TTh1b0ZMYk9FY18wbDJYN3FaNlp6TkhLMVk2QVVjLW91Um92MmpzOWE1eEVfWmpTVlBGVDVsZmdpQWtUT05vWkhEMXpkbVgtYzVURQ?oc=5",
      "date": "2026-04-28"
    },
    {
      "title": "INTERVIEW: Romania threatens to scrap SAFE defence contracts over ‘inflated’ arms prices",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPWTktYUU4SlNSUy1PWmZQMDhuVzdycFpic3pDZ1Zhc0F3T0NBNi1qcWg1RlIwYXFaQ3M0NFQ1WGhOR2MzQnpaZnRZekJkSzZ6WXZXV0RsSEFtRnllZnVPMmVhQUJrTFFxZV93NHgtTFNIRnBiUVJXUXdRYURGZUZ6Q21KVzRDWXppLUMxQTF2dGs1NDllYi03TkJuLXYwdlc2MkRwSU5mc3JIUUhZdzlFU1ZpeUlpeUE?oc=5",
      "date": "2026-05-12"
    }
  ],
  "netherlands→romania": [
    {
      "title": "Romania rules out hosting nuclear weapons, says president",
      "source": "Latest news from Azerbaijan",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOV0JFNGc1aDRoNnpMbDB3eXRkS3ZHV0VLV2hBemNERmNnWVludEtPek8yQURueTJ6Wk93NVYySGNoVmt4NkFXOTdTNUFvZW5RQlJDUTM0dFlhV2ViaFREQm91SVJReS1zc1p3VlJuMjBGT1hpZGU1Qy1mUlQwcjVCYlVqVQ?oc=5",
      "date": "2026-03-06"
    },
    {
      "title": "Netherlands Exploring Amraam Production; Hands F-16s To Romania",
      "source": "Aviation Week",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOWmJoUGtNd2o4NEdxY0ZMWGNvUklYZkt5SjlQSEJPZ091aG95N1A3VW1FZ2ZySHpXeDkzSWxnVFB4LVlXbk5NLVVZZTJaWHJZZmthTExHVmtUaGRZQXo0X2pIOENxOVc1Zm1GbWJZVzdIVDZZQnhyQi1FZzIzRm81R2x1NUdXUzkyUVlrMDJkcHVkODIxVURFZlBaYjFjOXBNNFdtOGp1WFE?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Romania Acquires 18 Dutch F-16 Aircraft for 1 Euro",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5tTko0aTRySUhzRHFJSWYxM0tieVBuRW51VzB1dHpWSURCVE9NTzBrdlhXSnUtUVhSZVFDV3EyNW9mdzZJMVhXaEw1U3ZsaXhpX05nZDFpb2RFbE9OU1prSFp4REM3OERWZXB4R0xR0gFzQVVfeXFMTXk4QlZGaDc5aXdQY0xfYzdSZXBvTXpIRTlROThaSjVHc29PTEFfcHRKRHQ4ZXlPbG05UXNhUk5Ea2xYSVJua1I1UUgyS05oMHpJckp3a0lDSnJGUXhLNmt1SmpCTmF6eTlSckpPUV9fYnRzYw?oc=5",
      "date": "2025-11-06"
    },
    {
      "title": "Romania buys F-16s for just €1 to train NATO pilots",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOSmhMc3RzSE9WaXNvR09hV2hpRVNkZGxweEE4bTRobWswMWJNcG1YNWgzRXdxcHRwREktLXh1VmtCT19IYWo2WEJabm1oNFNMekZVa2NJMjRxOXNvQ0Q0Y0VyM0JQMVFzQ1FmdThqUDlpc1FnNUZDWlNoX3pyM3N3bW5kalRHbjF6UHEtam40bzhSdUdfN3lkeUp3?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Netherlands sends five F-16s to Romania to train Ukrainian pilots",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOX3FfVmRTUXk5VUNCN250R25jU2N3RTJWVUlienNWbWo3WmhoNlNmdDlCdEZlUUpaNkoyNU5lOGpMQS0ycjZ4SmdfUUpVY3ptS2IzMDhhQ1QtVTBKbTB2d0J1QWVwb3IwWWNKVGRNNWw2QXVNdzM5TS1velh0RGthYnk2RUdjUmhjMjFORFhQT0NuLVlod25jVm9YamV4M3NLTnNwRUczaXVfOGtCY04yN0RRYTJKMWd3UVE?oc=5",
      "date": "2023-11-07"
    },
    {
      "title": "Netherlands formally transfers 18 F-16 fighter jets to Romania",
      "source": "AeroTime",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE45OGt2UldGQXNyYjhOcGYtVldFcjAzM1ZZbjZucFVNdUk1dDRLZ05INW1vTDdCRW1jZkdYOUZwUXFTUW1DN01XNFdOSTNva2dQVVRibUpvekFNekRmWHdVRkpRaFNISjRTOUVGQTZHOWFRT283VG1lN9IBfkFVX3lxTE1sTUlKOXJrWFVXNjkwM2gwdmtzU25KWlFnTmdEV1NLY2JsczR4MzhlMkptdC15NDZpT0tqdTd6YVhaOUVHNGNscW1sMGJkQkhVY2FHQUtyZm9ONjhxZk0wZC1LNHo5cW5vNzFrak1SQ1c4SHdvcVRrZURxc2duQQ?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Romania Just ‘Bought’ 18 F-16s For One Euro",
      "source": "TWZ",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5ad2lGOEp1NEpoT0w4bVRzZ0xsakVqSklUUG5YZ2kxZzUyNEg5UnNDWVJEdk11QTVLTUY3RVNYU3V6amJBN2NOX1MxU3dKRno1Mk40VkY3SlFIMGNDRlduYjRLejFHb2xDYmhVRTVKNjFtckE?oc=5",
      "date": "2025-11-04"
    },
    {
      "title": "Romania signs deal to take ownership of 18 Dutch F-16s for training center",
      "source": "Romania Insider",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5vYUpxek1CRC1YRmRuZjN4aHY0Vmx2QVdSbUtoVzRJeENHN1dDYlhGTHZLdThsdDY3MjFZZDJ1ZDFmNkFlVG03TVhycjktcUM1a0ttWURJdmg1X1hEbHlycENGalNlNWZjZ0dUVUJjQkQ0TG1jREdGZzNHeUpPb2_SAYQBQVVfeXFMT0hNaEhnc1dOdXNPVFQwVkZLZXF6SWVWNjFfbjV1a3p2ekRNbzlQOXQtTjQ3UzB4TlJXSUpDZzBHWGw1OXhERlJkek5IVVlkZVNFMWlxeG8xQXFZdGxkZW5UaXVJQk5sQTVhdTlWTEs5ZGxvaXB2VjdSMFFjUTdSNHBGa1dP?oc=5",
      "date": "2025-11-04"
    }
  ],
  "united states→belgium": [
    {
      "title": "Tactical Analysis: How Belgium's smothering defense sealed the United States' fate",
      "source": "DAZN",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQXzZ3b0NxNkR3NHNKWTNOcU9qMDdXYmFNN3pMYl9qR3RZbll0ZF9SdGtuVzBaMWZ5dG1iamZfbzdJZTBUMUQ4Yl9ydVVyU3FxTFBsZEdBeFc3WW9mUEp2TUJUQ3V6aDF6YzNRNGZsbHh1Z1B3YlFJZGt3UlE3bHRzX2JpMWl2bkg0dkVpeEtoVmk1a1UtcHlVbFBEbnNNNno5b2JQcmVkU2R2Z2RYVzJnb09KZTRNZ2NHOUpFQjVuM3YtVkFy?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "How the United States can beat Belgium, according to the data",
      "source": "Northeastern Global News",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1jaHE0bXVVeHBpM1F6NFp3V0ltVmwzVW84Q0NpVk5YZ3lJd1h2dnp2SjZNVE5tZmxRQjhLZ0EtUTl1Q0JkMkdOSFdmak44cVBhcVlqa21WSUxXV2tnZHZLQ0RfdElhRTZhNWN4WHdyUk81bjUt?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "USMNT vs. Belgium expert predictions, World Cup picks: What does Folarin Balogun's return mean for USA Soccer?",
      "source": "CBS Sports",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNbnFjRFRNMHdYbi1mNUZmZ2RmdFM0NXI5TlNWWVlPLUxHbWRMOWtIaVBlekZwNEItQlBMdFU5MUhENTBDNHJqV3Fobi1kejN1dXN5bGdkV3VveTJON05DdWsydDVwdEtBZ1A3S0xwOWYzUk1pTmZZeEl4VlBGOVQtNG16YzNSLVZUSTYtVk5PbmEwWlBVM3BHTGFuZkhraE00NVBZV3BJYzhybWRtVmhUVWVFbnM?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Belgium exposed the defensive cracks USMNT showed all World Cup long",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOd3d2NHJMaHFpM00ybElFRzg1cDVRVUlMYXowUXZlcHVfS0R6UkFXTXM5SHA1aDZXZkVpV3Y3ZWpMTXh5bFlKWmNMSnY3RjlnVkpxd0pCMTZEVGVrbmc5R3pQNGtOd0RfdmhkejBKbVcyNUJJWFJISTJscWViZlRVY3RGY3J2RnBoczZYSGFZRktyLUl6TkxMejZlVQ?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "US men’s soccer team falls to Belgium amid FIFA controversy",
      "source": "Daily Sundial",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRXhvUC1yY1Jkc2FHQXNIWFJFSG1XTkF4NGR2RTgwcWd2aU1tU21pdkx3MHhJREVfUU42WmZJVEYwVHBNUFNSR0xBcFRWWnRVZlpaLVQ0cVNtZ1JsSmtnR1JsbGhGOUM3amxXcTdGMTdGZW1ZcUdRU3pmWmwxVlhCUkE0X3hFVmxsS3RtZkhBXzZ3QmlpU05Ha1RsMG1DNnBDUGc?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "USA coach Mauricio Pochettino kicks Powerade bottles in frustration as team's first half defense looks shaky",
      "source": "Fox News",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPV1FIcjBlUlNzYjZXV2tVbUtFel9maS1nMzZockxjTVdyM0lETXhPSG41MnlOTVhoRGRHSmdyQko1TmhadTh1N0RSVFRPSnpIWGE3N1NIREdzSzluZk1La0hiNnFtbER6U19Rb0p0VmkzTm16Zk5MQlgya0xpUTBkWmUzNktNOUFTRXFSYk1mUnVpTXV0ZU96dEdmRjMyM2cyMGdkZkhDRS1oaU5LVEFnQWlIRWF5aDJQc204SUh1aEgzTFl4dnZJaEFFWELSAdIBQVVfeXFMTmlZVkZxZzlHX1FNbS1BampuZzJKN1Bkczg1bXRueTJVYl9wQmxZaWNZNHJQOHAtQ0FkenVxWU5VaXRBTzlMbERaUUxTdzBad0lTRmp0Z0U2d3dzeFBlb0pfZzJVZmZ1d1ZibzViYmF3V0VxSnVSRy1Fa3RmMmlWN2hwcnZhZlFmenQzTmpHNk1ZbnBmelBGZkFCV0ZjUWszMHAycmo1ckpWZU1BSGJRSEo1R203WnZVMWR1NXg1R3poeURpZy1PS0stUm9rNVIxSldB?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "Everton legend became USA 'Secretary of Defense' in gutwrenching USMNT fight vs Belgium",
      "source": "talkSPORT",
      "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOSGVrQjdZQ1ppdHJRQzFmUWM1b1VBRXJVNHR0ZnAwcVZsbEM3TC1xZ0J6cEpSSkt2WlYyeURzUVNOc2tCNUd4bkd0Qlp6bjI0Y0V3RlQ2OHhtNGJyT1V4OF8zMTcxOXp4V0xTRkNwYXp3VGlReXNvamVwRWdIMGRGdVZLTklhZlJPNDFlTG4wa2l0NmRVeGVTT0pxZDYzYkZxX200dy1MVU55WGo5LXpUcE91cHl6Rlh2eHpmNQ?oc=5",
      "date": "2026-07-05"
    },
    {
      "title": "Belgium bid to crack Spain's ironclad defense in World Cup quarterfinal",
      "source": "VnExpress International",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQSVVUNXl5RjJvUU95aXc1R0xRNWZLVWNtZzVwZU9rYllscjhzWEF5bTZfcGQzb19WbFRnOFVVMmFEaGtmck14OWJZbW5nNnB4S1oxRnhNLVI1aTVWQ0lNVkxNX2xRakVkamZEYTUzVTl2SFhxcTdRNjRkZVc5dGNkY1d0M3BYUkVMdzFzYklGSGtIR05HSDVIWE02TV93Mk9FV2x2ZU12MW5SSmd1X0N3SG9TeFplVnlKd21zX2JJTVlQNzlTa3AtSQ?oc=5",
      "date": "2026-07-09"
    }
  ],
  "france→belgium": [
    {
      "title": "Ultralight Machine Guns: Belgium and France strengthen cooperation in the field of small arms",
      "source": "FN Herstal",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQcU5lbU9HSEtkR0JCMXVRQ0VoTkhUeDYyU0F1UjQ1bEc1YmxSeWtPTGN3a0pXY3d2aDBnRzFhSEtrWGFFV2N6cDBUaW5wNG5GOE80cVM2UDkwdXlaOTFzbjl0emQ4T0c0R04zZXdQanRzdTNCbFlPMEFHVkpfLUVTd3FHdmhRSGE1RVdZUkk5LWJuenIzc2hFUzlQOHVRT2Q1UHJRMTBmVDF6TFdYUmJBWVNkdm9zMFdSZFVHYWhTVEtLWXBjeHBjQUtjZzZ6UQ?oc=5",
      "date": "2026-06-19"
    },
    {
      "title": "Belgium Eyes Thundart as France's First Export Customer, System Guided by Ukraine-Proven AASM Hammer Technology",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNR0tTR2NXTDVtcXg4cGVIN2NtUkVLdWplZkVJTzVYSG03cmF6dnJXcUlNY2hFNkVwZUVlUndfUGl3OHJMTWJFMVZaR0J6VjhVREtIOFVXeGxSUjVXdFVqTDVmWUlTSUttVHNuRUs0UGlmNHNJSXVha3Q3eUpOWHNKTmVzd3c1QzllUFNoR2VUYnlidVhUNm8tV1BDOW5neEJTd0w5VEVFR3JOQ3hQU3J0UHc0UjNWaXpTVjgwamR5dVhMWmVxSWxESHZPSVVzaFNLcXpPR25KQ3ZYVU5WeVFfUVpVSHhOcWlZTkJnby1n?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Belgium among countries to host France's nuclear weapons",
      "source": "The Brussels Times",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNYlV5OWNLQ1pCbDJERjUxNkJ2SkthYkVnbWc0ai1meDlTWEMxbUhYaGE0Xzh3X3k4OW9mNnpHWGQ4eUlnb0xoWFFoUTJES1VkTjF5OHRhTjR2ZjF3VWh3NEt3eGZsYXlyWjJEem5xZGRiclBYUjQtYVMxMUN5RUI5QmZTVVRiVFF3cXJ5OWJFRml1T0FJcHdBWmw0dDg2bkk?oc=5",
      "date": "2026-03-03"
    },
    {
      "title": "Belgium hails 'big step forward' after defense deals with Türkiye",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPQzB5d0VxWFpSaHR1QnRwSGpFVWoyZVJGV2xmNi1uT1EwbTdhM2oyQzFBTFlGaGpXcWNMM2NWNUV2SlFkT3NkNENrb0t6dGliMWRwbEc2Y1dNTUI5enAtSUJELXlDMmY2WFJqN1g4M0lDeEN6TlhISzVlcUdiR2U0Z2FwU1NkUW9sX0pzTFNJYlhycHJMbGZYTzFOd21zNmxhUFVwcnkzcXhaY3fSAbABQVVfeXFMUDMwZnE2Rmxield6Y1hPWm1iZnVsOHFCekRrRGJZeXBlVFpQQ2RMZHZ6Wk5fYTZ4a2JIa05rcFZDZGx3R3llQzBVWVpyWWxJMGt3MmprUnNldWdBSlh2ekJ4ZmMyY18ya2NUclMxalJnOW16ZkNGS2NBbWhKVDJaY2Z4T0FzY3FWZVJfY1ZVekFnZmVJX3dVam95T0dGalNyc2c3VmRfT1pPZk9oU1JRS0E?oc=5",
      "date": "2026-05-14"
    },
    {
      "title": "Belgium to participate in France's new nuclear strategy, PM confirms",
      "source": "Belga English",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPOG5DU25KZzFvenR1QUFKX0h2eTJlMmVqZXZvNXZYbG9IUXIxVFhaME10VF80eUNJcHpZY0pyOXg5SmU1bGxsUlRhYW1uRDFrbm5TQ244T18zT1g5TmxzVFQ0VDdlNGIydXBMaHM4TzFRZHVMa3FhdkZ4YVZLNlZOdXl5WFI5a2YxaWtxVkhBUGFVcVdRRmlibTVDY3RIdw?oc=5",
      "date": "2026-02-03"
    },
    {
      "title": "Belgium seizes suspected Russian shadow fleet tanker",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNQXpnOGl2M1IxUTRyYTJPbTNKNERZSXduVmZVdnY4TDlwY3dKZnZyMDdWSFRYZjJtY0RnZVVYRDNCVUVFa0FyRkFsQmlSbUtjZkh3ZGdKRl9la3J5MXlTT1lZODVBSm4ydmpBbl9DMmdEWl9ZcUJoeEloWk1SODZHak5BTFNkNUh1MUxMLTRR0gGOAUFVX3lxTE1BTFcydlBKRGR2UnZFOV9Fc3RBTHVXX0hTSGdhNHVNTkNCVXVZSEJfUmJGeS02bWhhbFctYld3a0VSZlowRVdtRTlLYUZPaEtuckJ5cE5SMHBibmRaSzRMVDI2SmhuUEFGWDBLRm5ZOWd4cktKX2k0YVFpUU96blpULVlUenoybEVyU1ZRYkE?oc=5",
      "date": "2026-03-01"
    },
    {
      "title": "Britain, France and Germany deploy anti-drone teams to Belgium",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPNy1TR3NvbGEyUE9hU1lhY3BNRGtmUjZMTTQ0VGJqX2pITFpXcDBSdWFFZlNRYlJnckxGQXNzQ2JlR3d5MnBnOXRHbDJrYzk2OW01T2pOZ0ZvR0VMcWRRRFlJZEN1VHl3ZnI0VFdURUZ1d2xkOXVxMExibkpWWGU2dnhZQzhEY3BRT0xV?oc=5",
      "date": "2025-11-09"
    },
    {
      "title": "Britain, France, Germany aid Belgium after drone incursions",
      "source": "upi.com",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOWDBaNk9sQ2swS3E4eEJGWjctNWp4V2tyTXlEQnBwUU9oX3pVbjYwamRMVFNBRjdvVGhIMDhTaTA1anBSdGtsSGpDSkcyNFhQM19xZjh3TVh3MUVfVlZ0TnRoblpLZE85eGJCT3FYUmNSUV82aVlEdDdva3RHTGRqNGFSX015TFphQ0dFYi1mNFpWdy1DTGtqNUdOY1k2a0NzTThYbzRRaDhmOVdpWlHSAbMBQVVfeXFMUEdZeGxscWN4SVA0RkFoU3ZWXy1DbzkxNTJaRkxveDFrTWx3eEFfOXVLTG1nSFQxWjhYdGdFQ0NSeWh1T2w0cEVNU0h3VmpqTlJMMGlZZ1ZJbGZiMDRVSjFma0ZKUlFxVVJOY3JfU3pKR3BwTnZacTNvQXlTSjNheGZwdUVqdHNxRlp1WnQ3a0hodVd4S1NDc0tVZzBkQWRZNVp3dl9vMGh6dXNId3hCRmxvZ2M?oc=5",
      "date": "2025-11-09"
    }
  ],
  "iran→belarus": [
    {
      "title": "US tightens sanctions on Belarusian company for supplying weapons to Iran",
      "source": "Belsat",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPMm1wZWJyVnd2TkdVNTBhUzc2Yzd0UVItY3VUQzV6YnBUZ3VVekQzbG14U2RlLUVpSzl5WndmcGlmb29QOG5YNGFxZ1BwekFmanR5blhDMk8zb0tmZVJ0U3FWRDJFTHN2TDkwMHBLV2lPTEJEdDFOMnd4QVhURmswZnFwemFEdzgzamFEMlhaT2d5STZ0aDBHWEZfUmRKN0ZjaFFoMC1B?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "US sanctions 13 Iran-Belarus-China entities supplying Iran's IRGC. That's three of four \"Axis of Upheaval\" states",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxPVkk0Q19NdmQtODBJbnVfVWJwaGVYaVZaT1BSaFBJWTlWemxXMm1ZeGFMX0t0TUtvWl93UEt5T0xrMDZkalprS3dXclpkNzdpcDdtQ3ZBU19zaENDei1IX29XaWNzZlJ4a0I3Z0Jrc2FiUDZvNElGSmJmNF9DWWc3eHBtZFFuNVpHdWVVYkwxdzE0YjBhMExpZlFibmRNMkp6UXdtR3QyZFE5cU14RGRyTk9LSmpJZUdxS2pLYmFPQmVJZkNzcXVoczRoOVV2amx4VTBWeWRuZFEwZGM2QTlSMXRB?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "How Far Can Russian Arms Help Iran?",
      "source": "Carnegie Endowment for International Peace",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQOVI1ekNMXzdIOVF1S1pPNzVsRHUybUEwVE1iTUxOc2kwcjM4ZjFVXy1QbkJfWVEzQ0dwcFJLSF9qb1VQTHhVNTVoOXVmVUtsQ3pIOUNCSmVlQW9fSmgxbm1wa3dLOG9GdTVfMHY5R0FBQ3k0T1ItT3I2emY2UnpISTNlN0JQYy1mYzR3R3pQaWF1Uktm?oc=5",
      "date": "2026-02-28"
    },
    {
      "title": "U.S. Imposes New Sanctions Targeting Iran's Weapons Procurement Network",
      "source": "Kurdistan24",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBSUkFqZWJVQ090SlhXNEQyYzlDUnU4Z1FrWkdzV3pPV0twV2lWNGtJMmgwRExuTHlBS3RENzQ4a21xaTJfZ1gxQVdrLWhRMVhMcHRQSkV3?oc=5",
      "date": "2026-06-10"
    },
    {
      "title": "US imposes sanctions on networks buying anti-aircraft missiles for Iran",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBkUXRla3EyQ0U0WEVtTkpJU2FrVnN1WHBIV2d6dDd2OGZSajduRjlZazdiTy1SOFFBcDd4dkg5QThOY3o1MDV2S0tGQjBZM01fUktPMmFFbEpfdUFyWmtr?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Iran Meets with Russia and Belarus: Diplomacy or Deterrence?",
      "source": "The Organization for World Peace",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPLWN0MDFUSzltci12MmQ2X1VqaXNyeXNDR2czUzM3YlRmNjVNNklBZjlsQlFTVHJQeW1mQ2xfNTZMMzJZY0liRGhwaWhZUDFXTE03aW53WTFaNnhPdm5FcGZ4aE4wNmNKNGxtYzlRVzJVbnBtUXNaZ2h6bWFEUEdKQ0JDMzA?oc=5",
      "date": "2026-05-03"
    },
    {
      "title": "U.S. Treasury Sanctions 11 China, Hong Kong, Iran, Belarus Entities Over Iran Weapons Procurement",
      "source": "Forth.News",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5fa3NWX01PUEpUblFyRjNUSkVCczB4N3BhMzJrVzN6d0YtdzBTcUpxNVZCVWU2NlRrU0doa2xPZ2tKdFRhQTl5TlBIajRDSWZ2N0FpMTF6LTgzVVM4d0V2TVhn?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Cracking the CRINK: Belarus’s Relations with Russia, China, Iran, and North Korea",
      "source": "Святлана Ціханоўская",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPQkNHUkViZ3VJSl9TR09CX21XSngzMUE5M056Mnhlb3ZOcWFFV1pZQ2UxWThSaDhrUzZGNkhpcGpEbFByZFJuZ0xkMG0tXzktRWNiSThRenRNUl9LMHB6SnNQY051MFoxRW9DdHdoeVctS18xMGVEZE5BbjJySWRtY1NWeWpiQXFoYUE5YWthWWRXTl91dHM5bDRFVDl2aE96X2dISVdsZWdWb0laRzJ0VlJpVHF2UmRscW9wR2Z4ZHV2TWR1?oc=5",
      "date": "2026-03-31"
    }
  ],
  "china→belarus": [
    {
      "title": "Why Belarus Is Now Europe’s Most Dangerous Flashpoint",
      "source": "Modern Diplomacy",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOTzNWaTlJdGFiRnpHSDZiTXVSSTgxMktDQWpoLXVTaE5kaHhYS1h0cUw0Yk9QVktEbzRjQnVLOEs2WTVSdXJwVExOQmEyVnF0Q2lSUWZOcVJpUHFiTF9DSGQwVUN3NUI4V2N4dTFiUlVJZHVLNTkwa0x4aEliUTcwM0FJWk0yZzBvY3VwOWVkNmxDcXc3R2c?oc=5",
      "date": "2026-06-30"
    },
    {
      "title": "US tightens sanctions on Belarusian company for supplying weapons to Iran",
      "source": "Belsat",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPMm1wZWJyVnd2TkdVNTBhUzc2Yzd0UVItY3VUQzV6YnBUZ3VVekQzbG14U2RlLUVpSzl5WndmcGlmb29QOG5YNGFxZ1BwekFmanR5blhDMk8zb0tmZVJ0U3FWRDJFTHN2TDkwMHBLV2lPTEJEdDFOMnd4QVhURmswZnFwemFEdzgzamFEMlhaT2d5STZ0aDBHWEZfUmRKN0ZjaFFoMC1B?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Belarus begins nuclear weapons drills with Russia",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPTEpadlBCZTg1dkM2bWM4R2NINGdLSjVWSi1EUlpSMkRXMVRacVN1ZjFxZ1RmNXY4eWNrMjFmdXlDWTRid1prb3lNV0VrbW5tRlV0Z3ZlRXpRdjNjSzQ1X1oyTnZ4YVV0UmllR3lrbTdEd0J0Slk3azE0ZUt6UFhvVHFzNUZRZXlJT3JyREQ5enZ6V2ZXZmRObUxJeDdpSzFHQ2VIUmpXWkdwbmRLNE9lWkNGZDRUcDRaeFZlYnYwRE9ESXhObS1rTGRmZVRDZTlxZnZiZ9IB1AFBVV95cUxNMC0xRDRwQmI1UkVBdVUtX0k1U1NkcEVqN3pfRTFqck56elRDMklLeW4wRTUwTjVKNXhvcTZsVE5iZFo1TnNMalQ0ck9lX01nVk5hWk5kLVlYbEx5Z0pfaHgwRE91eEloWThSOFRYYmV3NHlac1lPTnh0REFqdm51VWd4X0xHRkJWSTJEUVR1RVAza0RUeFRULS1Jc19GUUJKQ1NncXRfX2oyQzEtYWxUYjI5dEluM1ppQ2psZl9CV2d3aDZkNm1MbjI5SW14NVNQMXNDbQ?oc=5",
      "date": "2026-05-19"
    },
    {
      "title": "US sanctions 13 Iran-Belarus-China entities supplying Iran's IRGC. That's three of four \"Axis of Upheaval\" states",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxPVkk0Q19NdmQtODBJbnVfVWJwaGVYaVZaT1BSaFBJWTlWemxXMm1ZeGFMX0t0TUtvWl93UEt5T0xrMDZkalprS3dXclpkNzdpcDdtQ3ZBU19zaENDei1IX29XaWNzZlJ4a0I3Z0Jrc2FiUDZvNElGSmJmNF9DWWc3eHBtZFFuNVpHdWVVYkwxdzE0YjBhMExpZlFibmRNMkp6UXdtR3QyZFE5cU14RGRyTk9LSmpJZUdxS2pLYmFPQmVJZkNzcXVoczRoOVV2amx4VTBWeWRuZFEwZGM2QTlSMXRB?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Cracking the CRINK: Belarus’s Relations with Russia, China, Iran, and North Korea",
      "source": "Святлана Ціханоўская",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPQkNHUkViZ3VJSl9TR09CX21XSngzMUE5M056Mnhlb3ZOcWFFV1pZQ2UxWThSaDhrUzZGNkhpcGpEbFByZFJuZ0xkMG0tXzktRWNiSThRenRNUl9LMHB6SnNQY051MFoxRW9DdHdoeVctS18xMGVEZE5BbjJySWRtY1NWeWpiQXFoYUE5YWthWWRXTl91dHM5bDRFVDl2aE96X2dISVdsZWdWb0laRzJ0VlJpVHF2UmRscW9wR2Z4ZHV2TWR1?oc=5",
      "date": "2026-03-31"
    },
    {
      "title": "Chinese firm helps Belarus build arms factory—press",
      "source": "TVP World",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOY2NNaUhkQnZ3VExNaUlGU2stbS1iVE5qaTVnZGdpWDJQckpCRGhQSWh0clVJcVNJYU82Q0lQdjVPMG04WUthUGN6cmZUVk13aFZhdl9TU21acE9pVzNGalVfMGM2eWU1NGdoLVVyYXJvQTZ1ZW9aRTBsRHZlLXFjaXg2OE1jbm04VVdBWGdERQ?oc=5",
      "date": "2026-02-24"
    },
    {
      "title": "Chinese state company helps Russian ally build ammunition plant",
      "source": "Nikkei Asia",
      "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOelEtVF9IbXZzcnhTZThDeVJCbzcwUnN2dW0tSjFUTWpHU3dFMEVudWJQbnZMaXJIYl9VRm5BdFNaTTBxMnBOS1BrZURrM3o2MzVDQi1SZmlXYXk5Z2JENGt5TjNhejhibVk1RUhwS0IwLUxtcDVLa2ctcVl6dXI1OVh6VzlOaDFkenNOOVhmSVRxVGhmNERlbXFxQVlUM3hOdFdCTTFzRDkxWmt4?oc=5",
      "date": "2026-02-23"
    },
    {
      "title": "EU sanctions Belarusian Oil Company, Belarus-China defense company",
      "source": "pozirk.online",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9hX2JTRXdDMzhua3F1aktpa1RWVWlnMzVJbGRod3R4anYtM3dCSDVUUU5GQUI3QnpSYnhaenlZUkNZbDVlQ3VuSUV1YWpsZw?oc=5",
      "date": "2026-04-23"
    }
  ],
  "russia→algeria": [
    {
      "title": "Investigation: Russian shadow airlines use Algeria as base for secretive missions",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOdXBpaW1wNktiekJTWklTdU5RMnA1WWZ6bGQ2WC1zVFpBUG95SWlfcEU4bklKd3g2dEpuaHpBdzd4eFdBVHJFX1JHdjgtWTluZGxBX05DZ2lZZV9iQzRkaDd4WVBSUHN6Z1ZvVlNJY2dvbkJLS1RQWEJJRGN3UmE3UGxna25aNklJdjVQR1JiZVJjVm5FZVBXMlNVcDMxaGNNbWJPenJBbVJHcHZ2dWp4NTBZTENsd21xZGNvZUlURkRmeHpZbkNFbTVnYmhOUDA?oc=5",
      "date": "2026-04-30"
    },
    {
      "title": "Algeria Receives First Four Su-34ME Bombers Despite russia Losing Six of Its Own in 2025, Weapons Package Remains Secret",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxPU01CU1l2R2l0TWJVcXMyMmdoTnl4Y0NhZ1FadmxvR2pRUW5XWUM3YjVJdm1UNVhVc0M3Y2RVWkZaSEtyZWQ0S3ZaQlNybThoTG85WlN2M2dfWHluVi1aVXU0M2puQl81a3A1TWV0LWxpbWtRRm5xUGZyb1JpdnprMzBYMFV3RGV2SWJ5Y0hteTByY0RwTGppMTVwZlpQbDBJUkI2bERjYlhtT1F1Mlc2X3JmSlFVSGRxcDdaOGpaTkJXM0JJYU5qbmlCOS1BTnkxODBrajFFdDFpenc3YllhYml6TE1QQm1HZ3ctTU04elYwdl9vZ29lb3A1UQ?oc=5",
      "date": "2026-06-15"
    },
    {
      "title": "Russia’s ‘Shadow Air Fleet’ Uses Algeria as Key Hub for Weapons, Sanctions-Evading Flights",
      "source": "Kyiv Post",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE54elcxRkcwbTlvYW5uRDlPOWJDX3BNWGJ5NTBtTE1aaG9aekNQYVUzQkpvQkNqckxmS1ZUelFGY2w2N3BmMElLRWQzbw?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "Russia Expands Wagner-Era Playbook Into the Air, Using Algeria as Covert Weapons Hub",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOU2lmV2dIckVEOFdGVGVLeUJqSzZIbDhTX3M4ZlRONlViaUJtWnZDREFNeHpsUHhFMnZiRlR1bGJWaGZJTGtGUklkT1hIQWRUa2FUZS10cmFlV2xid2J3RTdPRXc2bVBRaHU0a1ZjVktCWkRYVkthR3o0ejM4UlRSVnl6TUhmcXhGT1BNTDNHMmdBd0haZjJpVXhBTVQyV0tRclphMDJ1Sm56Z09MSFJQWXAzS0NsaDV4bTFFNkdn?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "Russia’s Shadowy ‘Air Wagner’ Uses African Air Bases to Skirt Sanctions",
      "source": "Africa Defense Forum",
      "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPdEF6ei1WcUhxRGVzOHNnd0JZNmxrQjV2TWo3TjlwY2xrMlVxc29iU2FPZ1dhVFZOY3RsaFUyUWh0UHFaUmdSdHpjbG1ZaC1XT25FWUtRYUl2UDFtbklTaTdWbDBKWmhHMXRTM040NllMc041bjVrWENWRWVoTGZ4cEZadHdpaGlxWVo0ZUZsS3BjV3AzMUlabmdseWZBRW1abktBUA?oc=5",
      "date": "2026-06-02"
    },
    {
      "title": "Algeria gets Russian Su-34",
      "source": "Defence24.com",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5tUm5wZFJlSDEtOGYxZUFUdjlGU3F2TGppZzBWRTdfQ0xqaEZrNXRxbTNPdGJkQ3psbUNtTE1LUlFXS3NpbkZZZklZMTBJWFdBUWlxeFZLNm44VWEzckJrYTFpWUtzcDMxOXNJag?oc=5",
      "date": "2026-05-29"
    },
    {
      "title": "167 flights, one country — how Russia turned Algeria into its African air bridge - investigation",
      "source": "Euromaidan Press",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPX0xJTGoyeHlPeE5Db0cxQWRNMHREMlpPd0FHV0cxWDlVVVNNY21DTG1xUW1odGYwVVNTN1ljeFhNTG55YXNwZjJ0bTVqOHQtWWpRSkc3VjljSmVycF9iUE9qVGVLZ3ZwOFl4QTktTjhWc2t2UnA3WFRKUDVqYXBjMTQ1VkVUYnpHeGxoRnNpZTNNZjRnUDA5MVlLX1ZrMFowYU5BT0tia3JEdUxQbWRlQXNuOUUtbTRib0dvSmI5MkhGUHdxa1BsanlEUQ?oc=5",
      "date": "2026-05-04"
    },
    {
      "title": "Africa’s second most powerful military finally gets its hands on Russian Su-34M fighter jets amid North Africa arms race",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPZ0pLV0lSZkpvWHlhOUl6T3M5OWtSaE45dFNTNndjMkZvOV9IV0VZTkVrT0hVXzl2Wm5ScVdOZXRaN0Y4QzljOXBLZW9fWElIdmZnc1o3XzU4XzRBMEtSZGswU1p0aDRWVnpSQUhKLV9SbzE0MnZad1FmblNmT0tCUGhkdlItemsydVltTk1KYl9oenlaRXNLT1BFcU05UzVWV1Fzc1BReHFFTE9ZNm1rZmNlb01VQ1RUNTZDQmtDT1RCcllRcnMtOEdJYzc3TmZ4?oc=5",
      "date": "2026-05-27"
    }
  ],
  "china→algeria": [
    {
      "title": "China’s often flawed arms still buy lasting influence",
      "source": "Asia Times",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQSTFMSW5wMGpZS25kWHJabTdsSm15TUs5VGRDUFA3Smt6T1NTSkNoM3BNQ1IxMmMycVFDVlcxMEFMNmhOSENObmNrRnZfZ0lhUnpCS2Q4YmZ6MTFrb3NZazNWRElETmdrR3dYQTZHT0FXU1BfR2h5M1pZamF2X3pvYXVHMERMVUJvNV93?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "China enters Algeria’s air force",
      "source": "Defence24.com",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE54d3FmSDV0bktwS0xpY3JpM0FhaEZ4eTA2dmpVbzROR2c1b2xXTDVXbkdzdHY4VkNIbDVvbjFOaFR0VTFGLWNBQnFpWGR2WmFoZlM3YjVqZkU0UGdCVkRybUNVQUpzRFBMWGlqUHdZZWZIMko2?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Could Algeria Secretly Turn to China for J-10 Fighters and KJ-500 AEW&C Aircraft Instead of russia?",
      "source": "Defense Express",
      "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOZTh2NVY4ZE1DZEc5TXE3dWpQV0MzMGFKU1JSUWtaSmhpTlUyWGZYdXFLTElXSWZBSWYtcndHcXhhMm9lUGxZeHVHWTNaZXNmS3BPWmd2TS1QLURwMkJ2X3N4OExSUGM1c1k3YlB6TU5BNUtqbUFMam1HOGtSSzBNZmhQcHpKQVRJem5YZ2UwRDhIWk9yRHZzSU5ndC1pVkx0RENXVTd6dnlrN193a1dsN1JuNTlQeVk1QzJKUUgzdUVvMmpUZ1gxWFJjVWtwUmF0bjdBZ2d6SWd5Vl9pYkJQcDEtRXM?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Morocco overtakes Algeria and Egypt as Africa’s largest arms buyer after major US and Israel weapons deals",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOSE1Oc2YwRFFiSXZ6UVVQeE5CT0x0UGxBMG9zTDVNRU5VVzZHcHQ3cUhjWlZXRUdRbGJYSVlRcGt6UzQ0Y1hodWRhdjZFemZsQUFnWkRpXzktbzdJZWlsWktlNk02aGNONjBsZUV1SVcwaFNhWDNKZXdGMFkxbjN0YUllQzFsNDJ6V2R1c2dtYmE5ckowMnFRN2EwSnc3N2UwbXRISGNpYnVkREZ0QW5nT1V3My1iSXFicVF1OVhINXRzRWNyVFdjUDRYV0hnX1ZraHN6Qg?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "SIPRI: Morocco Overtakes Algeria as Africa’s Top Arms Importer",
      "source": "Morocco World News",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNcmV0UkhFWEg2VGxabUNRMmsybmMwdFNEeVZaZE1CRDFpcVNpMm43VVBQV2g4T2Q3b3VHVGxzRTNfRkc4aW5mX1hva3RwMS1WX194Q3FNb3VXbjM1WFF1eThjeUlaVk85Tnd0WEFYT3RzM2I4MERyWkFDQ3ZsTy13TXlESFpLUV9QcWdmeUFoa0xHMC1GbkZSc0dRd2UwbVN4N2JVV2p1TGdTN0F3RHc?oc=5",
      "date": "2026-03-09"
    },
    {
      "title": "African country named among Russia’s top 3 largest military-technical cooperation partners",
      "source": "Business Insider Africa",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNc29rNXFYZjIzSUU1cjQ5YWhucE5xV2VRb2xzZkN0S1ExaS1ScG9SNFMtU01WSm1oZ2hCSUVwWWg3azlsdkJSS0dJOGZRU3Y3S05xRW5RU0VCLTNUS0psQURINGVCOExVVXZ2UnR2OFhSWW41TEpQRzZ0RWpGYm1kZV9vNmZOUUwwN21SQ09ZeHAtZ2RfUFY0M0lwVXZiWXoyNmcwLVJCcnZaU2pRNURCeGdlTEVHaDFDR3ZERDNnZ2J1Z1I2OVJyUkl4Tm44WTlSYUVZ?oc=5",
      "date": "2026-05-27"
    },
    {
      "title": "Morocco becomes Africa’s top arms importer, ranking 28th globally as Algeria drops to 33rd - HESPRESS English",
      "source": "HESPRESS English - Morocco News",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNSDBGdlliS2pMVFJfcVd1OGVoaGhJc2xfQjJaeXAwOUFZbFZ4N2NnQjVBY1pRbEMyZWl3WkhTcFNwNWVmQWsxU2JMM3IwV3lwSDUtd1dPTTVONUJYel9OUlg3c0labjR2c1MtNDl4dTRuRmhpY3hEQjVUelA4NVdlWHNzU1dycy1BV3loRGttOXZRem40Uk1OWG1kZ1RVR2QxeWlySHFKenhuZUtWc0J4MW45NEtfMlBXLVNQaS1ta08zdw?oc=5",
      "date": "2026-03-10"
    },
    {
      "title": "Algeria Successfully Launches Alsat-3A Satellite, Boosting High-Resolution Geospatial Capabilities",
      "source": "AL24 News",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOdllKMU9nSnhTbkJFUzFJcVpJY3ZRT3RfNndmMHdhM2NYY0tSTVplNmRNOXVvZ0RZa2oxNUtKUkNtd3libWpqNFVxRzZsWkR0VkFKeTZORm40TjZJY0NrWnBrbjZwdlRfTjhUb2U0MllkeEhsdDhUU2VNa3BIdkVEY2xjU2g0dXp3dmtvTl9tdWlLUVN1MGQ2OXRISVNRRHMwSzF4cTRBX0lXcWhxTEhYNTdySE9SSHdhWmxQZnhR?oc=5",
      "date": "2026-01-15"
    }
  ],
  "germany→algeria": [
    {
      "title": "Main suppliers of arms to Algeria 2022",
      "source": "Statista",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQZ2dSZTAxNnlBamFnMnFMdzY3WEtqYV9pWHdNUU5CbFpiUjl5SHhkOFN4cXhJWmNYek5BU0ZHaHhXRjd6WGxRS01xV3JhcGl5YmxxRTRzNmdINmJHVk96NEQzc0RNcndLZlNKNmc5d1d3SVVNdVJ2Z0NUTzBzUUpsVWZXcFo4aEJ5Y1BBdl96Ty0wWjV1QnFGWm10cVdldS0xaWNnTU9rNlFBUGc?oc=5",
      "date": "2025-11-26"
    },
    {
      "title": "With a historic Messi, Argentina begin their title defense by thrashing Algeria",
      "source": "MercoPress",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOQWpVM0c2VGRVQlBHcG40Q1FZUzFoT2RUSl9qdUhhODQ3ZW9yUzlZQzVOWXg4WldEQ1FPbWd2MEFnWmZZeEdxWk5fOFU4UGh3Snl0SzVyTl9tYnNocDlodGlZc0dGUGljcTJfU252MVFnQ3oycUg1dG11OXNNU2xWRG5EY0ZPeUgyckI5Z3hGR3h0Z1pzNjVyTHliOFZIdGJ2c0ZNOGt6cEc4ZG15eGFzX0F6dTFNZw?oc=5",
      "date": "2026-06-17"
    },
    {
      "title": "Algeria Continues to Lead Africa in Arms Spending, Morocco in Second Place",
      "source": "Morocco World News",
      "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQRlVmTUFMQllRSUxKN0pPNW4zT0x6NDhlcHJCTTFYWnVmNHhYYS15VEw4XzJrVmgwdkhMbjV3c3hMTEJMbHduTkxBOXZYNTh1eUhSc0NaYkdQVWhKdW9tR1lVT1FVcEJUSVo3TzVIN19pNndJcDdraWZ5NS01elc2Slk1X2FEUHlNUlo0STdHcFk1bEhVeV9qdFd0eXpxSzZ4T0E3YXFoLUVMRHBGV0xEaHNjZG1KSGJDRVROSy1Kdw?oc=5",
      "date": "2026-04-27"
    },
    {
      "title": "USAFE-AFAFRICA, Algeria Conduct Aeromedical Exchange",
      "source": "africom.mil",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOYi1EMnVURGRqWEc5T1lZeUgtdXo0VTdWTUY3a0lHcEJQUng5TU5yTmFmdmt5LURqN3NpYThmcFZIc09fMWFZalpMbUdXUkJ3dm0wbzY3RkNHenR3SU9qZ2hnSWpiczdBbmVsMFVjZTBudDJQVVVEdHByX001Q0RsQzgtcHY1OTN6SngwTGxDT2piTHM?oc=5",
      "date": "2025-07-25"
    },
    {
      "title": "Algeria increases military spending due to regional context",
      "source": "Atalayar",
      "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQRTM5X3hhS2ZKZ2F5aTFzRHpiRVNjVjc3eFhaeEJ1ZWhzLXRTR2pNZ1ZxUFg2X0tEck9Zd1AwZnltUUt5T29iYkJtVjEzai1sRUNWcFhhUHRPSk1xbVhUYUV3Sjk4YWEtYm1VSk8tRU9EM19IU1JjTHMzazhISEdQRmY2OGVZYU1KRDJ4QUtQb1lsV0ZUQ1JmX0xoMjBqajdiNjZaN2ZtZEpIcnhJbzlXS1R6bFlUQ1BzM0ZZRFJyaml3RFBCUktOaUR5a9IB0AFBVV95cUxNU255dE9hTko2MVF5VkFKQ1BsbWtyUURWQWNfX29FVXA2R05KNEwzenp5RUszcDVRRTR3dUxsRENUSlhUYTNtZWFzN1Vza0xESG10OFZEU1ZnSHROdF84d1ZtRl9qZWRsdHBwajVEQ010dWIzSDd5RU5rUEhLQTZ3ekJwQmVOWDlyU2l2TW52UjU2X3ZQcTZkc3UyRW9ESWZXNlJ5cDBFT2twMTZwdlFOVWVsUng5RjJhOVJnRlJ0QVFEYnhOaU9scGlibEVYTU5h?oc=5",
      "date": "2025-01-26"
    },
    {
      "title": "Algeria-Russia Relations After the Ukraine Invasion",
      "source": "The Washington Institute",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNakw0Um5tVHduYVR6a0xFcDRxUjdTN0tYeUVPYXJJY0ZXdExBck1nY2oxWTJoVzdiODZSNVJSNUxETjZjdnFYclg1M3p4V0NEQ1VpcnVkQURfSy1YZmtKbFZoYmhhOVluTlItYko1dW5EcHRrSzMyd0t2RW4xalVTWkpteUtKMnFwS3otOERMUTVBQ292RGtnQTFtNDJFSUFF?oc=5",
      "date": "2023-05-18"
    },
    {
      "title": "Germany Approves Record $20.7B Worth of Defense Gear",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE9MVWhXUlVPZzV0VDhCQ0I3M0o5Y2d0aVNuVVNmYVJFNjNJaEtJU2FVU3JXaERlVi1ZWDlLREl4WldycWlMa3lMM0p2NEotTExqb0hFTmJxOUdrZlhja2ZiaHlSSzNsbzdRa3A0dU1kMjJfSS0yUko40gF8QVVfeXFMTW4yckw1b213aWZUaW43cmR1REZZV1hzLW5KeXBITlBILW1NWDA0QzFueFpMMVIyQzBEUk1kOUt5N0QwUmFaSE83d2pGMWM3aTlxSWRtejA0VDdqVXVOajVuN2JleWkxd0FKVTZkNmhTNTBtMWRlb1VFNHpZeA?oc=5",
      "date": "2024-12-19"
    },
    {
      "title": "SIPRI: Morocco Overtakes Algeria as Africa’s Top Arms Importer",
      "source": "Morocco World News",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNcmV0UkhFWEg2VGxabUNRMmsybmMwdFNEeVZaZE1CRDFpcVNpMm43VVBQV2g4T2Q3b3VHVGxzRTNfRkc4aW5mX1hva3RwMS1WX194Q3FNb3VXbjM1WFF1eThjeUlaVk85Tnd0WEFYT3RzM2I4MERyWkFDQ3ZsTy13TXlESFpLUV9QcWdmeUFoa0xHMC1GbkZSc0dRd2UwbVN4N2JVV2p1TGdTN0F3RHc?oc=5",
      "date": "2026-03-09"
    }
  ],
  "united states→taiwan": [
    {
      "title": "Selling Taiwan Short: Four Decades of ‘Sufficient’ US Arms Sales",
      "source": "Geopolitical Monitor",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPd3ZiMUlpQmx6aTN5ZTZsOXctd25oSW45UHlnUkloZkpSUUEyZ1VYVFpWcndVbC1hd1l3NnQ2ZlU2QUQ5di1sX0N0VVZfYUFQQ0czREJzd2pnQ3B0Qmk4NnlmaUhET2lucFZiU04tejdpSWYyT2VUMVI2dFlXWTRKMV9PbHFaMVM3VTk4VVFPY05LeE9Hc0NfUWlWa2VtbVE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Taiwan needs US weapons for self-defense as threat from China grows, diplomat tells AP",
      "source": "AP News",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQNXlQNjlmazB0SVA1UWJIaEVmbmZ0YWJNRml3MjZGOHhJdmNkQXZkaEcxbDRJUXNUM2k2VUpkOXdKQWlvRHhhYlZpOThsTDJIb1Z4bnkwS0JSLVZKT0NIS1poZ0NPQktOeHF4WkozT1E1cDZsNE1RdUZhNGVUendIRUtqZi15TFQ0cjNpNlViWl81R00?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "China & Taiwan Update, July 2, 2026",
      "source": "Institute for the Study of War",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNVDhqWjBPVXJndHZQRHJyOWRRQnhyOWpxTHhnVjJxQ2dYTFpLZHB3cXFIWVo0TkEwUFVqTDczSVFzaGdJUEhEQ3ZCRHJNWXlUenhqWkdDN2FpSjZaOG1LWlZMR0hqZElEZ05qX1dIdkYyX0JzT2NReWJqLUFRdmJ2NFE5T0JPLW5lZFZ3?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "US in talks on Europe missile co-production, maintenance of Patriot missiles, source says",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0xUnB3TUxRQWtjanFXU0xka0h6MkhTbjJnWVNBVGhrdjhpZ3c4ZC12akNqcVBibGNtd3NEMlJROG5mckE4cURnNTdjMjlvNFdQMjRyUW9RODQtS0M0ajR2bVhKaw?oc=5",
      "date": "2026-07-07"
    },
    {
      "title": "China Shouldn’t Get a Veto on Taiwan Arms Sales",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZUo1bllYZTNrb2twSmFvdFdkN282cmFRU0tKcG9UOF9PN2FBdlFCVkd3ZEZnUWRYU21OZ2R1SmZPdWtLV1ZkcndvS25CUmx4blg5SF96eVAtVGRXT0Rla0V2OGxVM1EzR0JFSnVtb0xZN0xHTzlJbEZUSTNPbVRKakRjSVZWZk5MX2c?oc=5",
      "date": "2026-05-28"
    },
    {
      "title": "Taiwan’s Drone Industry Takes Centerstage in Defense Spending Debate",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOTjJWYkc3YThVZkhSODRsa2lrOEQ5MC12cms4VG5ORWplTGN1bVR3RVRiRUVmRkxzOGZyTnpGemlPZmNkSEFlZW9Rd1Z1aHVKQ2pVNGU4OFFVcmI1TW1wTkpLdHZiOTh6RmZMZjJCS3ZOTkRaVVkydUY2MUgwWmVZbS1Ic3VtMVN2aXI1eDh3dll1dG9nM05NU045Yk1zVHp5?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Comfortable in a Truce With the U.S., China Pushes Taiwan Harder",
      "source": "RealClearDefense",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOQ1ZaV1ViOFd3SXAtcXA2blMxd1VTbjlCZXAwWFBZeUM5Z0REOU80VUVGYjNUaWFGZ1BPQjlpUjYwaU5Ed1dwcWRVeVFxMEhfd1dzY2dxQWtYWkxhbmZ3Nzl6Z3luOG5PZzFRVGdqSDhzWjZHMmtHamNjUVo2aWZxT2F6YTVmVmhQNjItSFQ1VTNGTzBGM1ZDdFMyTUFXdUJreEhJWHdfRnZxZncwZU1zaFZWNFZWNlRlZkE?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Taiwan Debates Spending To Close Drone Development Gap",
      "source": "Foundation for Defense of Democracies",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNakhJeHFZSzZTS1NtSk4wQ2JCQkdaNlI4OTlTNlU4R3BlYlFFMjczUDBHOHIwaFlucXZYT0swMzVueURlTC1DZGkzM04zQjNDbXpXNkZmLXhBdXR0T0xxQnhsTmRpTko3Q2h6QjRETnBFWlVRSkFUTmlEelJlektPZ1dMTzVleWV2RDVTZHExcEtKRURFMkxqQnp1Yw?oc=5",
      "date": "2026-06-22"
    }
  ],
  "italy→taiwan": [
    {
      "title": "Italy’s Indo-Pacific Strategy Turns Toward Defense Contracts",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQR1dsNVpQMEF4RU5hb2ZTNl9ydldOcEJmMzBsN2YyRmRKNWVsVTd5MUd6c0lKbjZpSU5ac1VLMGNCdDc4WGF3bWszbVhOSlJnWFc3RVprdXdvekJzckVsVGp0dGNGeWlpSm5CdXVBY2QxR0dwUFNkSFFCYXM3eThGNVlldS00VndjcmstYl9CT1c3Y3B2NzlR?oc=5",
      "date": "2026-07-02"
    },
    {
      "title": "Arsenal of Democracy: Taiwan and Europe’s Expanding Defense Technology Collaboration",
      "source": "Global Taiwan Institute",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1jaEVqRks3clVrdnVITlB5VklJR3hVVVY5X0p6cE9fbGkwZ3F2M1drNk9kRVMtbXo4YjVydG5OVXpERUR3bkhkYkVCbEttVExYS2wxSUhaeDE1QllIRFA5SkhDRGs?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "Taiwan Deploys American-made Attack Drones Against Maritime Targets",
      "source": "RealClearDefense",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPQVMzMGxPOFlxTm5GUEFTalVLOTdfQWt5Z3E3TDJHQjhIbGZqb2w5OU01bmRfSVFQWGVwdWVkaFl2bVJSTGxWcHFNNVh1VjFsYVRzWERTckM0ODV0dGpTVU5ZZzBJTEVUUThQLUtFMFo1dTdCR1U5NlVxOHFqcWRHaHVJVnU1WFdUWERSUUNKanZ5c01paFg2dk84S1lpOGhhYUFqOFVpc3duc2VfdmZ6SkVjd3B6dWFQVU1tb3ZhNnZRZw?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "China reportedly preparing air defense shipment to Iran within weeks, says US intel",
      "source": "i24NEWS",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPUUlCSUIyX1Njc015VUlwNGpvX1dSaFpzQ0o4d0VfREpBa1diNUd3a3dBRW1vamlYQmtiRXhtUnhNS0tUVHdJSzJFemhhTkt6XzVQNjB5U1ZPN0llMlRIc3JpSTFRWDNmUF90NUptZVkwRWxaYXNQVFoxeWMyM08xSWhWa3dTQ2VZSG43aEhEUmlObWtGQXItdFBTYzVVUk5zenZwTjl2SVV1dUkzNXRQWDhSem1icTdkQXNkTjlYRDVDWEdBSnlZMWs4U05ZU0lFenROcHRR?oc=5",
      "date": "2026-04-10"
    },
    {
      "title": "Russia is modernizing its arms factory with machinery from Italy, Germany, Taiwan, and the United Kingdom in the midst of war, plans to install at least 22 industrial machines, and a member of the European Parliament utters the most viral phrase: “Thank good",
      "source": "OkDiario",
      "url": "https://news.google.com/rss/articles/CBMi0AJBVV95cUxPRTRmTjhyR2FqeFVyYWJranZRQV81SmF2Y1NnRzJKUEdDei1XOVN3bUc4QS12dzNOZ0c0aGVWYTk5U29FQXVZYkZpYjBBcW8yd1lCMXBBdUZrLThBVmZhaE1adWd4OVVqUmlyaWhWTGlqQ0NBNERhRkJsdEVOWVdYek85WjdZNVVMMlYtTDdYQnRlZmt0VUs5RUlCblF0NFdZVzFkajFkeVFjWWpHaldkRWNBT2VhZVdsWmxteVBQT0hwSmNRaGRfV0xJdVJnNDk0WW12QXk0RDA2RVZjRjRoN0lBWXRvSzh1eDhkSC1GZ3FQSG1xMHhvZ3ZvaTRCdENoZUVnMGNBN2FHWVVsMjdmWDdfNmpEQVBodGk5YmpZWVFWTzRlZHRDd09NRWV3X1d0aXlWLTBKY1puLVRTbmlEQWpieHpUNWxXYURiUHNzdHk?oc=5",
      "date": "2026-03-07"
    },
    {
      "title": "Italian think tank hosts Taiwan-Europe talks on tech cooperation",
      "source": "Taiwan News",
      "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE9RLTFDVGRkNzlCT0lxX1c5X2o1R1piN3YxVC1nQ0owQi1qWXhHT25DVmtYVFVBV3UxRk5TalN4SXJGU2Y1Z3JBN0tZYUtiWVJBc09nZw?oc=5",
      "date": "2026-04-09"
    },
    {
      "title": "Taiwan Announced a Record Defense Budget: But Is It Enough to Deter China?",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOUEJ6UlZjaHdQYmRCMjFzZEFET25vTG5acExsYzduMjI1eFRGNGw0RUxTMDdCM3BOMTZpS1Y5SkowNmV0emZzRi1xejdwZUVpdUc0T3p5LXJ1MDM0R01fNzh5VUdLWFhFcVdWS2F5bk9FR3RRcmdWa3BDOE9rdTFIQlZCZHlRVVo4UTZxemxqc1BiRXc?oc=5",
      "date": "2023-08-30"
    },
    {
      "title": "China drills feed info war targeting faith in Taiwan’s defenses",
      "source": "Asia Times",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQdlFVN1JUbWdtZktUbXhsU2xvS3FvdWxGeVpmRmUwSER2RHpLTVJpYmZDb2pEUFJuajdSa3Y5VW42bVlJWjd2U0dFS3hPU1JoZThDcjBjR1piQzZYSFBmZXNOSk96QWNZMmpKdVUyaUI4bEJyU2hMaFg1QzZkbWpLYWxINThpWkRkYlVvY3FIbjByRHRKWXM1Vw?oc=5",
      "date": "2025-12-31"
    }
  ],
  "germany→taiwan": [
    {
      "title": "US, UK, France, Germany raise alarm about Chinese patrols off eastern Taiwan",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPVGVseXVvMXkzSTdObGpJS1l5NmpvaVJsSWtaa210dmt4XzZPSWViTFRRWTNGNXFWOEJTNWRPX0ZnZUw3c2djSGN3R0tQME1Pb3hjdHNUN1pvOE4zQkk0V0hHd3BnbW9ERWxlOThQeGdmOEtwY1NLb3pGY21YSjVWNE5MaHQtV1RvOVpKd2RfeE9XLVpjSjJwM0xCUGszYVNidXJRaTN0TTRlTUNtWnlmZF9NSkp4R2RCaFEzemJaQzkxc1o3TTI1SkZkZWR4dw?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "Arsenal of Democracy: Taiwan and Europe’s Expanding Defense Technology Collaboration",
      "source": "Global Taiwan Institute",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1jaEVqRks3clVrdnVITlB5VklJR3hVVVY5X0p6cE9fbGkwZ3F2M1drNk9kRVMtbXo4YjVydG5OVXpERUR3bkhkYkVCbEttVExYS2wxSUhaeDE1QllIRFA5SkhDRGs?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "The Case for Berlin Supplying Arms to Taipei",
      "source": "Internationale Politik Quarterly",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9LWDFSY0NXZlJqS3VFa0htSVFyQTA0V0wzNTU4LThUZDZMU28xS3MyZUVzdXJlQ2FiSnppQllWTGZGekNxb2NYb0lRSUFKTkJrYnE0Y1IzNTVMOUlmZDdBS09NbDE1Q180U2Z4T2xB?oc=5",
      "date": "2025-09-05"
    },
    {
      "title": "Europe emerges from the shadows at Taiwan's largest defence show",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQY3hrYU4tZUVtWHFxQXQ4T25OXzhjUXNvMWhGSVZRTGg4RlI5QkJzeV9DTzlVNUZIa2dIblprTGJUNm1TN3NvcW4wR0x2ZU9hR2c3SGNCRDRYUi1MdnBpMGJRMWFQanlOU2FqRklDdkJ5ZDNabEV2VWd4Rk5PZlUxYVVza09Zc1A5UHZRZEdEOEI3Zy1mNy1qcXdzVDdmZlh5TDdRS2RiQ19wM0xvREZ2amtOUWU?oc=5",
      "date": "2025-09-21"
    },
    {
      "title": "UK, France, Germany say Chinese 'novel' activity around Taiwan 'threatens' region",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOY1cyNFoyUE1taDAzQmpNQlFHWDhXNDM0cDFTWWpOWkloRTlfNTR6Ul9OWmJyNUVGcWtHbHRqbUlmaUZiam52cllyYUJ6cDVpQzNKRU9ZRzBBd0RHSXlmMkVsOXdTV2RXaWxNTDNDcHFBYjM2NFlaRWF2WV9XTkZEb05rWHpBM0cyNVJwdlo3dWVPZVdYWWx5d2ZER01RekdXY2Zpb0U0TWpZbUhLcXBHdVVGR2d6ak5ITDJNMkpn?oc=5",
      "date": "2026-06-24"
    },
    {
      "title": "Taiwan-Germany ties not subject to PRC: lawmaker",
      "source": "Taipei Times",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5XYU9nWURYdGJxVlUyQTlwMWpXRUNFQ3ZtaHk1d0ZTY3dDdFhDLUw1WGZHbU1VYUNnWThubnktbEFpNW9sVTN0RWdMaXZIYU9TWGJPU01xRTdnVmxTeHZJRWRieXl0dzVGWmxLVVA1SS1vT0FOVzhMSg?oc=5",
      "date": "2026-05-27"
    },
    {
      "title": "Trump Challenges 44-Year-Old U.S. Commitment to Taiwan",
      "source": "조선일보",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPVExlMzJKR3V0Z083UUdJOTdsbXdTczM4M3d4Vk12Wmd2dDNINE51TzYtcXV6aktCbks0cldjR0ptdi1OZUxWdzJEb29tVC1qODVpNDlRQ1UzR24wNDN2OC04Y3hUZnNERnVjUlZORkdGekZkSUpCaVRmVFVkNHIzRjJGOW8?oc=5",
      "date": "2026-05-18"
    },
    {
      "title": "Europe emerges from the shadows at Taiwan's largest defense show",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5JVm9IOEFUNjlfcHJDcVIwaFZNS1FVSGdWZlVWM1ZOdVl6WnN3Q3JnTC13WlVVWFNZcHJ3LTZfZ0p6cDU3Rmw0Y0dva29ZdDlPVWxNbGtWaTRCTkM1cE5uLUdDSQ?oc=5",
      "date": "2025-09-24"
    }
  ],
  "germany→hungary": [
    {
      "title": "Rheinmetall locks in wide-ranging $6.6 billion weapons package with Romania",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOODRfTmNwNHllb2tkMmZ1b21IT3JqeFRkQzFjUFpsUDYxR214YlYxNnk5TVFQTWUxYkp5T2QwREwxVWd2NTg4UWNzaE8waWllWEE1RE00TjRfbExwVGZhSEUwRjEzV0ZVR0xoUWtqYVB2d3JqWXU5ODYwSWdoVWc5NG41OFo2ZkVCbmU0WDA1cDVaYzdmOXJOUkNQajFoMGNlcENkT2JOb3YzTEpCbktfNA?oc=5",
      "date": "2026-06-02"
    },
    {
      "title": "Weapons in Hungary Trade",
      "source": "The Observatory of Economic Complexity",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE8yRFRNZ3VKV1NmdVlpcHp2a2gyQTZsOTd2WndtRlVoSElFbXBqRjBRQ1BBZ2o4cENIZ1p2TlQ2U2p1WmhURTN1R1BKclp5MXowZGFEOVhFa1Y3QWVmVm56bDdxYmVUTU1zMmtzazdoOVY0dGJKQkI1NkhSZzg?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Germany completed the delivery of 44 Leopard 2A7HU tanks to the Hungarian Defence Forces",
      "source": "Zona Militar",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPS0VwSFcxMHZXRzg2YVN2cGF4RlI3ZGFRdlBiN0JVbDRHZkFJdzZ4cG1MUnRwOFR0VDNLTndVSWY0NmdkcU1jMVR5dWsyX1hOdXVtWlhqNl80N0c3M3E1WURRZlBqQl9SV3dCdEFCcWMxeG54cEhXYWJtcGFSSE5SaW45OG03TzJ2QVk1VzBNWkpLcUxSQ3RfbGJmWXR4czJBSGg1X1o0N3hXSm5JN1hoUmhVZnFKWkNZZThJTGtyQ0JEZW9WSUxudHdVS28?oc=5",
      "date": "2025-12-29"
    },
    {
      "title": "Germany Seeks to Channel Unfrozen €6.6 Billion into Arms for Ukraine. Poland Objects",
      "source": "Мілітарний",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPd1otUUd4NWJOVzM3bHFrLW5ET3VTQVJSbDNuX0lOS2JZbmtoRTBKTHZEdlJmUlhnY2gxX3VzcF9Ldk84N2Y0V0ZmZmtrczRFQllvdC1pajJ3c0t0VUoxa01ad1h6MEs3cFVGTWNnUkFKc2tEQVZyc1d0SmY5emFXak1fNXMzMGNZTERnV0tqUVZZR1VVdUplSVRfOU9COGNxQnZBa09fU1VXdDN5ZXA4WjM0RlA?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Eastern flank countries push to salvage EU’s anti-Russia defense projects",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNZ21HWVh1bEc2X0twZ2xsZm1meFliUzBxYnZxeFVqR0xnZUlTMTU2ZzFLMHpDSlc3RDFGeEpTZXJDVXVEa1Z2RmVoOThIRnQwcUlIYS1aVEg0NG01NXRuaHlqS3lnTVVETHdoQ0dOdUcwTEQ0b1NSVkt3TElRZ0NNZkI2WWtBNjNkeUpEaXVfZGFiN3R2aWhxVUJMWkNwNHFaam1FdE45NVA?oc=5",
      "date": "2025-12-16"
    },
    {
      "title": "Rheinmetall Opens Hybrid Plant in Hungary",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1Ndm84TWtreUhoUGpvUTlBbzJ1SFdMMTNiVS1yZTRiMzE1Smhld0h4TjZ0R1VlYmk2Sjltbkx1MlVDMmRidzlwNDc3V2R0VW80TnJ4Ym5GSHdiQUFZV2tSQmlQLTVjY0czNnFLVzV2cGpRZ9IBd0FVX3lxTE05WVR5V1JaNU5oTE9LWXR4aVBzSGhtTzBPTEVlaXl3UW9KUlhkb1lrSWtjZDRKRUhwUXVpcXcwb20zdmFrRjZZRm5LNnRIbmV1dnk2ajd6UVM5TEs3ZzVxN0FHMXNnMElLV3l4dFJibXhadkZ6eG5n?oc=5",
      "date": "2025-12-29"
    },
    {
      "title": "Closer US – Hungary Military Cooperation is Good for Both Countries",
      "source": "The Jerusalem Strategic Tribune",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPY29LTmc2MmNkNG9tSHV0Y3RYWVp6NWRGMDhFMC1QZWVBLTB3X25ESVpES21DZEkybzZuR0pDTmlzMlJ4MUlWZlVfaE1pVG1zSFhxQks0LUlKM05nZG10ZGIxYzlVU3pYdFhpTEN3RU8yUFpnUm5tTFFqVVFoVHJpWmN3?oc=5",
      "date": "2025-07-28"
    },
    {
      "title": "Germany's Merz lashes out at Orban during EU defense discussions, Bloomberg reports",
      "source": "The Kyiv Independent",
      "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOZUlpMlVsLVpYQ2t1ajVWZjVuMXo1b3NDUng1UExxUEJ4eXJFLVVUMWtMVEcyT29oeW5GQ0hEUXBHR1RnX0dNQmxyR2ZJVmY4d2UwZGJpdnBiUWM5UnVLWU54bkFiRHVjMHpxdkw5cXJFZDlPWjBhZU1ESHg5LTQxSUJRbkFHeDdHaXk4SHV6c1ZXaG5tQ3Rv?oc=5",
      "date": "2025-10-02"
    }
  ],
  "united states→hungary": [
    {
      "title": "Weapons in Hungary Trade",
      "source": "The Observatory of Economic Complexity",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE8yRFRNZ3VKV1NmdVlpcHp2a2gyQTZsOTd2WndtRlVoSElFbXBqRjBRQ1BBZ2o4cENIZ1p2TlQ2U2p1WmhURTN1R1BKclp5MXowZGFEOVhFa1Y3QWVmVm56bDdxYmVUTU1zMmtzazdoOVY0dGJKQkI1NkhSZzg?oc=5",
      "date": "2026-06-18"
    },
    {
      "title": "Weapons, Oil, Nuclear Reactors — Vance’s Goody Bag for Hungary",
      "source": "Hungary Today",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNNVFyYWZWVzludmFCbFhRb1k3Vml3enViTllsSTVfblNZZGx4UGk3RHhzdkRhOEhHT2RlSmlVTHNzakZCN3ZYLTlya3J4WGpLUlloMjBmQ0xHbzJGLVJ5aTZZbE50WlJUYmJxWjVqWUtHbjd2ejNPaGw1WlZuZmZ5eFMwUHZ4dk9obFE?oc=5",
      "date": "2026-04-08"
    },
    {
      "title": "Hungary left in the cold as European Commission keeps defense cash frozen",
      "source": "Euronews",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQZjd3aXRFZUJ6TDNSYlkxLVFNRUUyamxzV0ktMGJzVjU4Nk5QSVFSQTRTYVdpdFQxX2ltUnVHRXRXZ05TZnVwZUxKSXBUUjNPN0s2TVVycHZNV0ZIQnpmT2hHVGh3VEtybEdTaThiaUxvSTNjNkktS01TX0JvN08tRHVVaTZTakhjUGVQeDJXZkxmS3AzVnRhLURGZGtBc1JqN0hTV3M2OUhLR3ktbVNvc19zTmxza21vemdR?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "Hungary's Magyar lifts Orbán's veto on EU arms funds for Ukraine - Politico",
      "source": "RBC-Ukraine",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNTTFzREs0Rm50ckl2RFAtXzJ6V0p4RDh1TWVsUjF2X1ZLR1pGalhxV0VkQWc0cVNhMEJyaHlFSXFwalNlcWstSTN6ak5DbEozUXpjazZkcGZkUlBzN0RuYmxMOXZyWXpuUXhlR3kyVVZnaHo5MXZDUDdicmJNdGNrcFdDMU0tOUd5bUUyRDd0dVVoeEU?oc=5",
      "date": "2026-06-02"
    },
    {
      "title": "4iG Expands U.S. Defense and Space Partnerships in Washington Talks",
      "source": "Hungary Today",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNdmVfbmJiZ0h1b0g4dHgzSS16WnZ3MkRMN2dWUmNJUW9vZE1jaXN2VVhaa1hCU1h2RTFCSFNZRzJxX2VjNm1EdVFRaHFkOThOQWp5bEZHc2tYbUhwc25jaTU3N0I0Skg4dC1aR0gyRGZ3R3MweDZYaU9YR3N0ZEVGcGt6YVB1emhZVWFfZU1hU0w2V2F0dUE?oc=5",
      "date": "2026-05-07"
    },
    {
      "title": "Northrop Grumman and 4iG Space and Technologies to Deepen C-UAS, Space and Advanced Weapons Collaboration",
      "source": "Northrop Grumman",
      "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPOE9SY1FwLWJvVzBWVnNuU3dkMUh2blVMZXVGVklmOG1nMmlPNTZuUy1KMUVaQVEwY0NKaWV5RVFFZy04djJ4VHFfWVRwdm1tT1lCTUZTUDN0Nkx3SzhUNmxZLUFlOHVlNVFTQ0h5MU85aEhNeUVTejZROXpvREVNVUM2M1NweFE1a05jaVNpOFA1ZzI3dE1rdEtHRFdObzBnVmJpOENiRDhneGVjWmlUamdOUUZxOV9pNjZtdDVteC10bXY2N3hOZzJ2X0ZDQXhOU3VSZVk1NVJyelhiRmwyd2lmODA4dw?oc=5",
      "date": "2025-12-16"
    },
    {
      "title": "Closer US – Hungary Military Cooperation is Good for Both Countries",
      "source": "The Jerusalem Strategic Tribune",
      "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPY29LTmc2MmNkNG9tSHV0Y3RYWVp6NWRGMDhFMC1QZWVBLTB3X25ESVpES21DZEkybzZuR0pDTmlzMlJ4MUlWZlVfaE1pVG1zSFhxQks0LUlKM05nZG10ZGIxYzlVU3pYdFhpTEN3RU8yUFpnUm5tTFFqVVFoVHJpWmN3?oc=5",
      "date": "2025-07-28"
    },
    {
      "title": "Hungary in Talks to Acquire HIMARS From US: Hungarian Defense Minister",
      "source": "The Defense Post",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE42aWV6UUJNWjBZNi0xZ1d0bUNPblBNaV9fRXZKOUZHY3dKaVVZVnh4ck5DNjRQVEhyMHBxUTdEa0FrejFsdFVfdkZHbHBCMm9meDdiemJoeVZPMWtKWno2bXhsZ2xGQUxFc3JLUEN5QdIBdEFVX3lxTE93T1l3UzNQY2pqbUJTOVVJMG16VHBUeHQxVDdVQmpqLVBaRzllaUptdEthNTduRVhCSy1zQlFnYkFOZ1dZOGcxcVpPcXpzWGFLaWVyRkt4TDBzYjd4UzNMbzFjR0NrMkNIMGJQcnJvSnU1cWZw?oc=5",
      "date": "2025-11-11"
    }
  ],
  "france→hungary": [
    {
      "title": "Italy weighs using EU defense loan on new tanks, eying Hungary team-up",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQNXFzSFNrMmJKdEVGUndfOTEwQmFFZ25nSFB3REFCOFdyODE2aGNoSWd5YzZPTk5aUG5LOVJreTlTMG1KME40bU5nQ0llZS1BekRBNm1DVzlnbi1NeTVaSmxFR29kZHM5aUJVM3FsQy0yQUhlTWFwX3Q1X21UODFzOHlKTFlySU93MlhYYVZXUHZzbkhFOGxPX2l4bHFWVkI3dlNTb185V2hFakExNGxPN1IyOHhteHBDbEZWWFJYVjI?oc=5",
      "date": "2025-10-30"
    },
    {
      "title": "Orban ousted: What Magyar’s victory means for Hungary and the EU",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNbXRmX1FZaFZDZGQ3TlpnRjgtUDc2bUV3Z21Jd25iakVvQnU5bE5nOVZwWkZ5WjdiTjh5dW5uTEY0WC1oVTdmMU1pV0ZqVk5WQ2paRl9BTlVRd09VLUZhNWlpYTBYbm1ybkZaeTBoZTRjSks3Z1R1MlFiNW1WN2VSQ2xGNnQ3WUtKTGhsSHJDb3RFMkQxMF9LRGo2WTlPa0lGTi1PaGNKQQ?oc=5",
      "date": "2026-04-13"
    },
    {
      "title": "Hungary left in the cold as European Commission keeps defense cash frozen",
      "source": "Euronews",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQZjd3aXRFZUJ6TDNSYlkxLVFNRUUyamxzV0ktMGJzVjU4Nk5QSVFSQTRTYVdpdFQxX2ltUnVHRXRXZ05TZnVwZUxKSXBUUjNPN0s2TVVycHZNV0ZIQnpmT2hHVGh3VEtybEdTaThiaUxvSTNjNkktS01TX0JvN08tRHVVaTZTakhjUGVQeDJXZkxmS3AzVnRhLURGZGtBc1JqN0hTV3M2OUhLR3ktbVNvc19zTmxza21vemdR?oc=5",
      "date": "2026-03-25"
    },
    {
      "title": "France topped EU arms sales to Israel while backing mini-sanctions",
      "source": "EUobserver",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQRkdodk4tTkowZWZpZGl5RE9LWGxFaE1JYmJMajAzcW43TWlQd0l1NmpqNF9iQTU4bjhHeThleVRTR2F2aVdRaTUyN1VWM1VIY1Y1QzFzeGg4Y0FQY1NUWEl5bDBzYlRTc3J1cFZhSmgtZFdtcTh0eXhSMmlrZTBQTXZ6bWdscWJVUlFNU0ZPcWFkSl96dzkweEVzbDVwdw?oc=5",
      "date": "2026-04-29"
    },
    {
      "title": "France denies blocking US flights as Israel cuts defence ties",
      "source": "RFI",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNWEtEQlJQdHlaNDhOdGhvR3ZKcXVlRkZaNnFUamZKUk5sdGhUb3RKaUZ5R1M2OS1mbWZLQjFLZnpKcWFVUVczejlsaFRfRW9KVUVWelllRVI1NWh4QTNSeXEwY1BCQXpaTjdaOW9NcGp4YzV5WnlIXzh1c1VZVGNaVU1GazdHREhXOTA2TnprQnRvSmFSemFfTHNqSl9VWXNkY251U2lzV3BmQQ?oc=5",
      "date": "2026-04-01"
    },
    {
      "title": "Eastern flank countries push to salvage EU’s anti-Russia defense projects",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNZ21HWVh1bEc2X0twZ2xsZm1meFliUzBxYnZxeFVqR0xnZUlTMTU2ZzFLMHpDSlc3RDFGeEpTZXJDVXVEa1Z2RmVoOThIRnQwcUlIYS1aVEg0NG01NXRuaHlqS3lnTVVETHdoQ0dOdUcwTEQ0b1NSVkt3TElRZ0NNZkI2WWtBNjNkeUpEaXVfZGFiN3R2aWhxVUJMWkNwNHFaam1FdE45NVA?oc=5",
      "date": "2025-12-16"
    },
    {
      "title": "Flintlock 2026 exercises commence in Libya – Egypt and Turkey participate",
      "source": "Egypt Independent",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQXdseUZjU1hjNEJXXzZ1TngtMk5Gd1dfX19ZN05YVlRxdGY3UElQb09XTXl2NEY3SkxLQUJiSHJDMmxHWHVoXzg1elZ0S1hFOEZMQ3ExWkVlNU1mT1hnR1lDR2p5VHhnd2U3SGRwVjMzVi1zZnpSdjVuOG84SmhKYzliV0NtX3czMVpVV3g4MS1PRC0tTGc3ekZ5VDJzSGNUNmhoUnZBUVU?oc=5",
      "date": "2026-04-19"
    },
    {
      "title": "Peter Magyar: former Fidesz insider who vowed to dismantle Orban system 'brick by brick'",
      "source": "France 24",
      "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPUEg1MHpuNW1uWnNmUUtQTUJVLWdJdzhsUmlmVzdtWW8yTVI4MDMzMXZjdnZfQmJ3M2RGczRMZmlLN19SZDdwV2tfQ0g4ZnYzVFdJZTg5SDhQQ2NNRV8zZ2Z2aXlrWXJRbGNlMXU5QzV1cjFYQ3R1VUYzZkRoQkNQTWN0bktoS0RvUVNFWVF3a0RXZ1UtNFVUSi1xeENweFZxal91TjdjTldzcnVaWVZfOGh2SmxpSXZLTlBYTEFYeGJuTjhtYWVXUDA4Yko?oc=5",
      "date": "2026-04-13"
    }
  ],
  "russia→kazakhstan": [
    {
      "title": "Kazakhstan Now Building More Powerful Drone-Based Army",
      "source": "The Jamestown Foundation",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPYS1xWmFSRkdFNmkxUVhQZlNneENnUjNKdExSS3lLMk5TU0pobWVxczJvR1psU0N4WlBrYlBlcHFiM0M0TW82eWhuSlQ0MDFGSXNleUltWHNwY1ctb0NOU09LbnNISWd3MWhabF9hcDVtaVBMMVVNQ05wU0RObnFYMXlFVQ?oc=5",
      "date": "2026-05-14"
    },
    {
      "title": "Kazakhstan Chose Russia and China for Its Reactors. Washington Wasn't Even in the Room.",
      "source": "CSIS | Center for Strategic and International Studies",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQVVmS0c5OWZsVVB2TjBGbjhBeURIV2VrdF9wMms1NFU1d01BOXNJa1hTdS1oLXNmdlIxMVhQcWVaU21wZnNqcEFfRml0VUZoMzNvaDI3THVzb3BDWG50UGZmWEN0YWw0a2dxeFhPWnZJZmw2d0MzNXMxdlZTdlR6YXJuNkFwdE1pYUxqMmsxbnJLUUlHMzF2WEUwU3UyM0U5QWF5QkRNdnZnSjJhUmhIRzh2TjdiLVRR?oc=5",
      "date": "2026-02-24"
    },
    {
      "title": "Kazakhstan, Russia Launch Joint Air Defense Drill",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPZzZlZ293TkQxamtwcGNuaTdTY3pvQV9UaXR3OENyV0F0dm0xNGphZlNPRVl1RFN0RkpKZUhGZ2tNRkRheFBXSmdDbTBLZGs3S2tkWDJVVDNjRnRjdldZVzFDc3BRY0xqOE9ocWc0RDZTNE9FMTFac25PTWRfR2ZkLWJaeGFqMUNQampz?oc=5",
      "date": "2026-02-21"
    },
    {
      "title": "Belousov’s Bishkek Warning: Russia Uses SCO Meeting to Target Outside Influence in Central Asia",
      "source": "The Times Of Central Asia",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOZF9hWmJtczVmaHh2UFJnV3U3OEZDWlAzYjBVUTJMM1BMZDl2X3FLdVkzQ3FVZUR1ZExneWdDV2tmVURGV3BkYjBQNWtqQ3pyS25OT290Yk01dnVpOEJQbGdtVFkydnkzak8wblVvVGhqOENtalFYVkl0M2NGTWhQR3lmTkdiZ05ValpNbUhZTW52dmxENnljSm9UVEVkUlNNaXRkSmV6al8tajBrTUQyaV9QX3k?oc=5",
      "date": "2026-05-01"
    },
    {
      "title": "Russia-Kazakhstan Sign $16.5 Billion Nuclear Power Deal",
      "source": "StratNews Global",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQY0U4Q3FBMnpwNkRXTXNJRHFseVg1X1dQeHRiNFR3dE9Xb2xaVkdzOHZKSXYxVkZObTZFZW1QR09rd0VZY0tzMkJ4dmJJbTZ3V2dVeW81MFNiYy1UZkk0T2JqZ2JRQ2p3aC1XU2lMSGx4N1owR0JyVnR2TGVrVjRQMVF1NVktZGpySFBhV3BUWlpaY2tPamVOdWpWZy1oMkFsYkJjelBDa3VDVUE?oc=5",
      "date": "2026-05-28"
    },
    {
      "title": "Moscow Has Done As Much Lately To Attract West Kazakhs On Its Side As Astana Has Done To Push Them Into Russia’s Arms (Part II) – Analysis",
      "source": "Eurasia Review",
      "url": "https://news.google.com/rss/articles/CBMigwJBVV95cUxPd2M0dmpFQ0xCNzgzWC15aWNvREVlc2hFSWkyQVpPSkdNYzBVLXZlcmp1NS1FU1JabHBjdnNtQ1N2MVZ4YWtzM1ZkWElIUzNLU195Qm1EeVJ5ZU5YSm12ZXo5RThNZnAtLW5GcjRnb1oxcTR6OVRlRU00eGw2SVdNRHZXamZfbjYxNW9qSFFybVFmZ0FFcGw1cVh4OXFGM2x3X2JmYjNkdFowUk5qNkdVTkx2QWRwQ0QwSm5aZnYzMEoyNVVEbFBFS3g2N1VYblZrR1hpYnBCSTF5OGQ2ZVV0a2hiaWQwNmhMZ0xwY2tPM0FvUUVkNGJRQzdrV3YtM1BoU0Nn?oc=5",
      "date": "2026-04-14"
    },
    {
      "title": "Kazakhstan Moves to Extradite Ex-Navalny Volunteer to Russia, Anti-War Group Says",
      "source": "The Moscow Times",
      "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQZU9KcGdaU3RVd01pWmp4OFctOHl0bDJMaFpPV3ZqZXRubU9kVkJZRF9FSjNjTVY5WFVFSDRKOXJkcGtJay1Nd3ZPd2FfUnY1WEw2SlNEV1NEWk9ZV3ozWDRtM1lOQVBaZE51T0k2ZFBTLW9acDQ0TmxTQjZRMkJ6R05hWktGMVRrTFh4UnA0bnBQalR4V2ZmSG5NR2dkbnAzZXRFSFpQQlR2amUwWGZHdVVJV1UyMlJVdG43NTc3Vi1OalpTejFrbA?oc=5",
      "date": "2026-02-11"
    },
    {
      "title": "Can Russia Revitalize the CSTO?",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOY0I5OUJaY2VfdXMtN1JFVkU1MG9RZV83MWN6bi1JMkV1bTB1aEVVMnlyZkRCX3pxdTZTdGxPX2p5VzR2TlhBV3VLSzhYR0dmWFpyb1lwTDZVWlZkeWprWkRESGQ2Yk41RUZTaHVNTm9fRS02dlAxeGdOVXpWVVJySnVrb2RfX0o2RVVLSQ?oc=5",
      "date": "2026-01-23"
    }
  ],
  "spain→kazakhstan": [
    {
      "title": "BJK Cup 2026 Quarterfinal Draw: Italy-China, Ukraine-Belgium, Kazakhstan-Spain, Czech-GB - Tennis Temple",
      "source": "Tennis Temple - Live tennis",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNODliTWsyV0l3MXJycTFaN1dRSVQtMGxXNS1JV0tnWE5YSFEzTDNoYXMzSTJUd24yV3BGU0swM0dRRjZZV0pqakJEdEQ0Q3dvd2txaVR0WVFFWXE4ajBmZElYYkpaQU82TnJoQW9lUHgwWjlqd3YyYmozTU4wcnN6UC1ibjlrRzM0UVZtOEpDWTdZdw?oc=5",
      "date": "2026-06-11"
    },
    {
      "title": "Aryna Sabalenka returns for Madrid title defense—can Elena Rybakina dethrone her?",
      "source": "Tennis.com",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNQlhLVEtOVHp0aE5udm50OXBlTm1rMjhMYnBwQUNFbTFYTjN1Q0hUMzdFelFRbWo1d0s2QkFHUDAzNU9iSlY2eDNBcUxLUlhBVWFfSkpMNVoyY25kRnJVdGNhdktPWlAzekJMUFFiNUNMUkhpS25XVjV4MXVzUzV0OE1LbW1HbnBITDktNjZYOW1CbS1sZ3VsMFMzdGQtZ0R5eVp0cGpYMjRBTm5SNU5BSUVDMDVGMDJ0?oc=5",
      "date": "2026-04-20"
    },
    {
      "title": "Kazakhstan's Air Force receives new military aircraft from Spain",
      "source": "Qazinform",
      "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPMzVIcmlJelZhaFhSX1YzandIY1l0aXFiQjg3Nno5WnZwbTZablZkeXVHRXVJTTRUb0drbWdXZXNVWmMxaFNqX1J6YUxkZnRhUlRZOWt0Tmo5czNONTJxcVdOQ2k3VTVMVWdUeVMwMW9yRlduMV8wN3E1cWk3ZkU1MElaWjI1bTBZV3RsTVc5LVpHNjFRT1ZTZXYwWktZZ9IBngFBVV95cUxONGNjeWFxaDk3d1dfbEUtSHV6WkJ6YTJ5Z3BnMkdiTGJsQTB0YXNsOWplTGs5eTY5bHlhRzBvYVFHNEdVZmJsczRpNXUwdjd1V0JUS3RNc19WMFcwQlo4UDVqVjgyOWdKMkgzaXRhUDB1eHpiNTRjTUhVMFFZOWJKeHpqMjM4VURYZUtVaVVmVktpOEJYVDczdUQ1T0pUZw?oc=5",
      "date": "2024-12-05"
    },
    {
      "title": "China trying to expand role as arms supplier to Central Asia",
      "source": "Eurasianet",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNYWplcm1LRkhTN1EwclBmWkxSTFRIa1dtTVRJMDhDZ0w2MTk0UGp2M1VkVWdvUGJ1MlJOZDlQbW1Rb0ZoYUIybktpcVZ0RGJoLXdxU0Y5c0pSZ2JrZEFpbzFPNHBDUUFDMDQ1NGNXOEFmS1pON3Y1bllPXzNrX09rNEFPc09WYldneEVV?oc=5",
      "date": "2025-04-08"
    },
    {
      "title": "Kazakhstan reports 36.8% increase in defense procurement",
      "source": "Kursiv Media",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOVzZweGhPOFNNaXozaTF5X2NHSFpjRVoxek9LZ2RBa0ZzVW5sOUk4V242eFlrWk52TDhueExEUzRnVVNzeTZCZ2N6TTdZZVVxNVR0SDJtcHloZXNTRi1BQXZ2ZWhJcnljZHQ4NUJBUXhxaHVfSFBNMXdlcUJGRlJyN0NBNVZyTTcwblF2am4tMHNQNXI0RlVROXFn0gGfAUFVX3lxTE96UzZUNThkN0tZVmp1bS1sU29BSmRhazBjajRJdy1mZjhza3FkUVdMalFaa1VMYVUwQWZ3OU9UN20zZ29oVjR6cXl3LTQyRUZ6Ukp1YW1lbkhKRWt6a21pSGxGVUN6ZXZsTU9DQXRHWG5tQWU0cEdyam5qdnpDN3BJbnAzejhkQnhsaE9JM1NIYXFhRGtaMGY3SjJaQkZKZw?oc=5",
      "date": "2024-08-19"
    },
    {
      "title": "Kazakhstan - ICAN",
      "source": "ICAN - International Campaign to Abolish Nuclear Weapons",
      "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5meFA2NEtPNHh0SzVsZlF6bklOeWNob1JSOTFUWDc0MFVGdVYySEhBWE56QnVqMHBxNE4xTkxLQUNDUkgxTHVz?oc=5",
      "date": "2019-12-31"
    },
    {
      "title": "Airbus rolls out first A400M destined for Kazakhstan",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPamFjMVF1QU1oVkVwazVLWlIxeUJmOE9jOVJpemlWZFlPYjVrN2VtNnE3RUxEdVRtZzBWNWJiZmZEbjNNUW5QdU9fd3IxR3pOZmN1dWNaOHdUYzJRR3VlYjIxZ2VsNWU5aktzcWFrWlZjekxiZ1AxLVM2REhGZUVMM2xTRjhia05RZnliWk5LX2ZaTTZLenN5S1lXVkQyNC1wVGY3UVpkZ3R0Zw?oc=5",
      "date": "2024-04-15"
    },
    {
      "title": "Uncovering a Kazakh oligarch’s Spanish idyll - International Consortium of Investigative Journalists",
      "source": "International Consortium of Investigative Journalists - ICIJ",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOS1hxaEJ6NVhhZW52Vmg0TUpaaUY1ZDdyaVc0VjQ0Y190Qk9vSzdJdk81eGludjNPbkxuR1diRGVhakt6d3lBbF9GTEExUXJ6ekl3SUoyaVhzT19kZXRNeGZUNTF2R1JDRXBRblNQcVNnZFBsZWFQei12MjZBeTd5NTlaamloMWlXRk92Wkk2WEhlV210MjlOOEh3VQ?oc=5",
      "date": "2025-01-21"
    }
  ],
  "france→kazakhstan": [
    {
      "title": "Kazakhstan Leads Central Asia in Defense Spending Per Person",
      "source": "Caspianpost.com",
      "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPLUczVzQwcHA5dW9NU1FyQUtpTEs1aExOR3J3SjhNd0JzQ0loTk1CNHNYdkRPaW0tT2M3WmRmWEVXd2FnVFZ6SjliWE9rTkVBSFJwYUJaMXh0VVhyb2o3bVlqZjlvWkJMSF9vUnZjQWRjQXgzYTFNRU5ZVmduN0l6YzdyWWplam1VQWxTVTJwYVdaLVdmb1hhTXhROA?oc=5",
      "date": "2026-05-07"
    },
    {
      "title": "France Pitches Rafale to Uzbekistan, Kazakhstan",
      "source": "Defense Security Monitor",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTWhiVXNUX0hRR29xVzczWnFZZ0lZeHgxaVdPdGpHWW5OWHk0aHNCR1lnYjZEcXhxQVRPaGktbXFrbm15WWtneEpEY3lvdkJOMkhjb2w3OUpNMXVrQUJ3NHl6YW9yQWQxZDJEUy1ubUVEdllJNXVCbklSTlVsc1VDMnVxakM3Z181aWI3TjkyOGJYUDFTalpOR0ZrQ2M?oc=5",
      "date": "2023-11-27"
    },
    {
      "title": "Liberté, égalité and military hardware: France sets its sights on Russia’s former allies",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOOFBMMjdfbFZpTTFpS0c1RmhxVmw0dlhIOC04SHZ6NWJ1Y21KcU9zSzZDbTJDMFg2UkY0VnZlWHI4YzJ5SjEtVkFTVEhjbXlPTXRyNDl6NXVIMjVRNms0S083LTVuMVFCaWM2X0puNXJBdExLTXNsVmQwYVRYYlVJRWNUSmppMnZzX1Z5R2RWOXVNSE9fcGc?oc=5",
      "date": "2023-11-03"
    },
    {
      "title": "Central Asian military spending surges amid border tension, regional conflict fears - VOA",
      "source": "VOA - Voice of America English News",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQMk9sVVdndEVHbWhjRGdBWHhEeTBjRk9RdzRuOVhZYm1jRlJDQmN3OHRPaDZ6S201dUFFYlZjNmQ3SmY4YmM3RDB0UmhVZ2QtOVRWQW5RcHV3dWo1YVNaeHVRRmF3MEpfUlFGOTZDSUpoRHh0end5REplakxabUU4TnQxZ3hkV0NCMVZ2NjdQWHNpNlhObkZYZmhDQUg4WXp4SEdabnh6Y19rSk5NVDhFS1V4V0ducEJ1SWQwd2tB0gHAAUFVX3lxTE16aVpza2UwcVhJblF5RndKRTM3a2E1Tzh1M3lsemJaOEpXWGpxRThIcjBDeGZ1OGFlMG9MT2I3cjUtQ05FN3UteC1VT1dOd0NITnJGMmdRWVJKU0hLZkhhVFotZEZMLXhuUHFoN2tnY3Z6YUljYUlueTNLX1Z0Z3d5Z20ybkNmSlYxaVcyMXZUekxEVEdyYzE0bWRuc1I3Ylhic1RlTFp0UHdYaHp3WW5mNFpPSDVlMnVmSU92VXdVZw?oc=5",
      "date": "2024-07-25"
    },
    {
      "title": "Russia and Kazakhstan Agree to a Joint Air Defense Shield",
      "source": "The Jamestown Foundation",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQOFE1bFFXdmJuWFA1ckNRNVFvVmZJaTBIa1o1WXNrell5R0Z1ekZlcGhIdGNSSnRQVjZsVnY5UFFnaFluWTR3OXppYm96UFY0VFp1NEFqYWFBSVAyeG1nNXNvd1BUc0JFc0JpT3ZWai11bGpCc3ZaYXJZb0s3ZVFRUHNGMjlzRlU?oc=5",
      "date": "2025-11-14"
    },
    {
      "title": "China trying to expand role as arms supplier to Central Asia",
      "source": "Eurasianet",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNYWplcm1LRkhTN1EwclBmWkxSTFRIa1dtTVRJMDhDZ0w2MTk0UGp2M1VkVWdvUGJ1MlJOZDlQbW1Rb0ZoYUIybktpcVZ0RGJoLXdxU0Y5c0pSZ2JrZEFpbzFPNHBDUUFDMDQ1NGNXOEFmS1pON3Y1bllPXzNrX09rNEFPc09WYldneEVV?oc=5",
      "date": "2025-04-08"
    },
    {
      "title": "Kazakhstan’s defense ministry denies information about purchasing fighter aircraft from France",
      "source": "Kursiv Media",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPSWVGUHNPREZZaTFmTU0tWkJ6OHk3VERweVZ0aVBwMl9PQWlTWklWTDdWR1haaDMybnF1RDdmWjJqV3ByU1U4dGp1aDQ5VnRvdThjZ1VuRTJJMmgxcE1FWW9wdW91VmhxUjQxcXJVSzEtNnhfeGtSVEY2eUVCY2NZbEVFSVgteG1UeGNXLU1MU0hZTEtwRzRkUl9QeDJkSzFlSXRIRW9ab1Zlcm5CUkVMUHZxMGhOUWhyWExoMjJzWHR5eW9zTkRlY1kzcHRGMFoy0gHWAUFVX3lxTFBPM0RaNnlPMjR2RzZia1ZpOWpDUmVsUFZQQXU3c1NrVy1JUjFLX2J1M19vMzJmRnZpS21tWGQxRnNKOUU4T2hxS0RZb0hJRTkxUDJYbHJWU3hBZ3NrbTR2ZkFzenRjRHFRNTE1TGQtSUNKRy14UDBZcVc5ckRoOEpyMHYzTUhEenRNZm1iS2wwNXEwTktuZm4ydnFSd0pGYm1PamoyVVhpRWZMM2lwX09xT2tFenlaUjZBTDNrXzg5cWhWdmFZb3pha2dhWGpxc0s1ekpFV2c?oc=5",
      "date": "2023-11-27"
    },
    {
      "title": "Kazakhstan, France widen space and arms industry coop",
      "source": "Qazinform",
      "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOT05UdjduWXNoM0JhSWYzVUlpUUxPclZKTHYxel9kb3pBYWs2ZHprRTVqZ0tZaFRTWkd4aXM3LWFDZXM3M1NLY2k2clhCYm9ORTBicURoYlNLcnFNNDV1blRGczVCazQyWWY0MkEwR3I3MHVSY2F0MGdtZTM2ek56bjNwVElDc205bDY1bWVsQ3Y3UdIBkgFBVV95cUxOMmhMSWlpUlNoWnEzUVcwNEJKY2h3WmxpNXZLenhURkd4ZHFMYkRjY2laVXlMTDNydDl5LXN5UUM0MDVNNl9GU0l3VkdZOG1odGpVbHViLWt4Yi1wQlBRU1hDV3gyRUM0aGZieUZzR2lKVER2SEZ1Y05jZkpKSkF4R2tOUktGQVBtSlN5TmsxdWphUQ?oc=5",
      "date": "2017-09-11"
    }
  ],
  "france→serbia": [
    {
      "title": "France’s controversial arms exports to Serbia and Croatia",
      "source": "Defence24.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQUVlycThXYlhHMTFvVWcwcXprTmdPZ0g0T3pNZ0VLNm9uSldvUXRsWkxEMG1oVVNsS2cxSG40YVBPc282UDJabGM1eG9EY2ItNXJyb2o2Tk1sU0w5b3ljMXdWZkNSMXRqVjB5VDVzNXZaZ28xSXNGOXFqV1kzWTRaN011WjExUTJsVWl5TjFESjQ?oc=5",
      "date": "2026-03-12"
    },
    {
      "title": "Serbia is 37th in the world in terms of arms imports, over 60 percent of purchases come from China",
      "source": "vreme.com",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBlZ09CTnNQLXVjM2h6ZUxwX1IySzhsVWh5TlVCdWdqQ2d1eFBDN0V5bV8yLXlsZ3hEWjRQYVJ5ZGVvZkg0UmlqTmFwemFReWd6QXpwMlRzSERCZ0VFRWRRcVR6LTkxRVJDVTEzN25ZWEVlZ1RCd0lv?oc=5",
      "date": "2026-03-09"
    },
    {
      "title": "Vujinovic: With demands to Macron, Kurti aims to provoke Serbia and divert attention from internal problems",
      "source": "Kosovo Online",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOUzJ0QUI4Z3VwWUFJamV2SzhkMEowV2pzdzRWRUdORDBqQWRCY2R2LUFkSHRmT25tWEF4TE9uNm9fejE4cjFrME9lbWNvVzVBOWFQcDAySmIzRjlWeWRwY2Y5UVR5bnZTaDdaakUxajk5RVJXMlowOFRDSC1zM19nWG92aF9fb21TVDhFb1JtdDVnR2lnbUNvQUFReTVhMlJkZkNncHFiOE11cXRPcmVlZWRWMjJ1SktWZ0ZGQnFtSWJibkoxaUE?oc=5",
      "date": "2026-03-27"
    },
    {
      "title": "Croatia’s president feuds with France over secondhand jets",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNUkc0VjNnOHdIWFd4N3BMa0UzWFlJRnAzamNXdmpDdUNuZWZIZ2hOQjNmbTBUMFhTUUZfQk9OMHM4S2V5MnNnc2lhTEFiWVhvNlhzYVhpMFp3RkhGNWRWa293d0owQVdwQ2RNN2FpY0Y4bkFRZHZIVGpVeGpwTjVpd0tzR3hSNjJsWmRzX1BSbFgyeEtEUGdoMl9uZHh5Z0VfMUg5Ykg2WmIyOVJFVThvbElR?oc=5",
      "date": "2026-01-14"
    },
    {
      "title": "Serbia Deepens Military Ties With China Through Drones, Air Defense Systems",
      "source": "Radio Free Europe/Radio Liberty",
      "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPT0dKQklZekN3QllWT0QwSUNrNVgwall0YlRNcUI0TG16VzJnN2o5Z2gzWnpqc0p3RzZMdkh4b3BhYXYzMk8xZHdJM1FPNmUtbFZTWkRUdVZycElfLVJEOWFoeVV6RXdyTWNSVGpPSTZtbXhENVhZZnBoRVlET2cxRWZINVRoNVJCMC1SSkhmdjhrQmlDLUkyeVRhWnFYTVRN0gGjAUFVX3lxTE1PYnZ2VTdCNmZ6V1ROaVNRWmlqeUVkSmk5dTBKQnNkam1MRGFsTGFudWFCM2dWT0kxTlVMU1B0Z3NiMXJLenlpM09wdDdhMzk1bzFScDI2MTd2b2d6SGFJaDQzQ2dQZEI2LUVELUo1bUlUbzBSLTFsZHpnVVVBWGhGVTFUUzRfbnFaQnJzZmxlWVJHSUFMNlFwSlNIeFVnOVhfSE0?oc=5",
      "date": "2026-01-07"
    },
    {
      "title": "Drecun: Kurti’s idea of KFOR withdrawal is an attempt at destabilization and pressure on Serbia",
      "source": "Kosovo Online",
      "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQNnllMkxrS0VoR0FVOEk5THhBVndmdEx5S0dqd2IyZlI4U2g4ZjBncW5XVGJjckdTcTJROGVZM2hIUmt4Q2NZTFRWRlV6ZHRJbWZ0Mk95dUc1LTUzU2dNODZwQjQxNVExdmpSN2Fua3d6N1RmUldpbDJaRzRweW1RZ1QxT3U0UC1yWFZSaFFWV1FwWnEwUGpuV2FmbjRuMlI4UUhvd2xyV25JTWE3X2gta3V3cW9tNXFPdHZVMzdXOWE0eWpMMXM3aVN3?oc=5",
      "date": "2026-03-28"
    },
    {
      "title": "Serbia and France sign $3bn deal for sale of French fighter jets",
      "source": "Al Jazeera",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOMFQzUFBBNGNiSEVuME96aUM0YmluaTA1XzhpQnFtdjR4TURaZ1lKdUlod3FPemMtbnpncGpHNU91WUd0dmtabVhibTZlR3VKdm9jU0ZDeTJaS242SGJjcTRob3k1c2dkVzM0TlU4ZnFlaFRRSGNseGRZWnptSUl2RzhoUDVuTmtxcmtoYl9udHJMc3U0NVZYckNlSDhKSjYwc1dVdUw0VdIBrAFBVV95cUxOdUQwaHVVX0ZJVU4xdVNhclk2eFNvMzBkMUpwSnUwempYYTRPMmhxTjh6QmpvZlEwSnYxTGcwWmg5MXBEN3RQN3JkWENxU090WUlsN3VvZUN2cGVpZVZobldfNHRQVGJscnZ1ODVBVG5EUkktYndoOHdRQ2hQdjVzaVFzNjRybW1La1JWSWRzUnRSWm9sSVlXQUUteUlQYVJhMEtJRFlZdk9CVDRr?oc=5",
      "date": "2024-08-29"
    },
    {
      "title": "What to look for as Xi Jinping visits France, Serbia, and Hungary",
      "source": "Atlantic Council",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNT0lQRjdYc0xaMHdHeGF0U1ZSMTdJa21SaGJiSkhCWl9ib1o2WF8xTGlINW9WRGUtX3puYjhiNEFfVnlTUEx2eEJyRk41aHMwNmo1UkVhWHF2SkVTOFdFVmlGUEdsYjZpR1lYWGpUdkc2Z3E3dm45c0pjZFZJZkRWVEc3czZOU1BEYXZFVnpCT1pIc2lQQVhNVVZROHBWYzFld2sxUEh5TVN1R0VPX0pmY2c2bkJMOW1odVE?oc=5",
      "date": "2024-05-02"
    }
  ],
  "russia→serbia": [
    {
      "title": "Serbia imports more arms than other Western Balkan states",
      "source": "DW.com",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNT1YzOGRsSE1xbUNvc08wRFBSTmMwQVl3YVVFWDlwTDRXZndESWFObnFrVGVnUVNFdzB4UFVvNDQ5WE9EV3I4b00wQjUtdTduV0ZBbHhPMThMUTBzaUY0OHB5bXY5cG9aOGxfX0hmOU1tWEZFaHEtdE1oYjRtVHRIUkFSWFM4Sm5iaWVrWHYzZERxNkNv0gGUAUFVX3lxTE1iZzZxbEgwdzVScUd0dDNrdGd3Y3R4YmxLSV9uRjdFajgxSE94VExNeGxMbFlNUlVPOHlRRkQ4S2xUMzhlV1YzX01kbXltTE85MEJ3d2RhaGFQdXg0bWduSWRFMEFZWUo5YW1PNU9nQWFtSTJyUzlzNmlWQ2gxZmtYMm9ITk94RkZzalMxcmxBd3RIdmY?oc=5",
      "date": "2026-03-12"
    },
    {
      "title": "Serbia and NATO Launch First-Ever Joint Military Drills",
      "source": "UNITED24 Media",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQeGI4dXhVQlBnaGtvRW5lT0owOGgweTdMRkIwZVpyRjF4bzZNMjZjVU43WXMtejJHYXVvQ2NLazF4eXRQLUoyakJaWVEyeFN2aGY4UTZPZ3FXNTVtTW1EYkF5amVqVEtJSFo5bjloQlpQUE1xT09hbkZSZTJ3cjFnQmk1a0VmZVZSUl8zMzVDUG9WbnliaWdvMA?oc=5",
      "date": "2026-05-14"
    },
    {
      "title": "China, not Russia, is reshaping Serbia’s path to the EU",
      "source": "Euractiv",
      "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNVFZQVHdVcEpOQXBQSko4T1hlVXZYYklGQ29YYTFCRjR3Z3IyYTlWLVhjUlBhZFJUX3MxTHM3R2hvNHplSHMzd2pjbUxhUmdQWjFhSFRaZHc2WVlNZ2RFbmJNRU8zQ2d4REgwZXM2bWp6NW9xMHN0clBoQzVwTFFRQ3BoRGNSbkhrdndZ?oc=5",
      "date": "2026-04-23"
    },
    {
      "title": "Serbia announces new purchases of Chinese weapons despite Western warnings",
      "source": "BGNES",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQUE1uZTFEMXVEcU5NME1uX3VURmlJZTFJVm5naDlCWFQ5RFFFTVFjb1U5eU9xZ05LbEQ2UEtMZEEtTlVzUEtMX3kzenROYWVWc2Q5U2hzZS1xSEF6c0thVGU4dzFabkJoU29JUzdSRElqYkdnaDVmWUM2cHFHTHlfanZJeXNlbXdBSFFKWnlWdUJUbUFTTmxXYW94ZnBzOUJsbjlpV3Z3UGE?oc=5",
      "date": "2026-07-01"
    },
    {
      "title": "Haradinaj: Serbia, with the millions earned in Kosovo, bought weapons in Russia",
      "source": "KOHA.net",
      "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNTTVQNkYxd1VFcl9PeTU2dzNXV2tDSEJVMTFiSGJwbjNfR1pNYlI3UENwSmZNcTVyY29QYWprRDVuT2liZVNhRU5HS2tLbkpqVHA1by1pVEZldHFyNkxKVUF4N1BJOHJHNGhkOXpDMEpJWTJHdTNiZWZXTU5aS3RNbklaUEVLYkxNbm9IVG1fa2ZURVBMQnZLVDJFZDRKOHlPOEo5eVhGTFRwblZ2Y29zejU4UEJnNTJiM2xfQ0M3ekZrNFNGZkh5VDdOWkFhWmVPVnZVaHliNGJfNG5qdkFQRjRCeS1HWWxjYWdrNjE4VzlUalAyd1pVWWJ3?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "France’s controversial arms exports to Serbia and Croatia",
      "source": "Defence24.com",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQUVlycThXYlhHMTFvVWcwcXprTmdPZ0g0T3pNZ0VLNm9uSldvUXRsWkxEMG1oVVNsS2cxSG40YVBPc282UDJabGM1eG9EY2ItNXJyb2o2Tk1sU0w5b3ljMXdWZkNSMXRqVjB5VDVzNXZaZ28xSXNGOXFqV1kzWTRaN011WjExUTJsVWl5TjFESjQ?oc=5",
      "date": "2026-03-12"
    },
    {
      "title": "Serbia is 37th in the world in terms of arms imports, over 60 percent of purchases come from China",
      "source": "vreme.com",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBlZ09CTnNQLXVjM2h6ZUxwX1IySzhsVWh5TlVCdWdqQ2d1eFBDN0V5bV8yLXlsZ3hEWjRQYVJ5ZGVvZkg0UmlqTmFwemFReWd6QXpwMlRzSERCZ0VFRWRRcVR6LTkxRVJDVTEzN25ZWEVlZ1RCd0lv?oc=5",
      "date": "2026-03-09"
    },
    {
      "title": "Kurti claims in London: The Kremlin has an office within the Ministry of Defense of Serbia",
      "source": "KoSSev",
      "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQWVRWOTFDLUxYRFhtalNMeG44VW1PYy1JQTZxRVExWE00WVNNU195NnFweWdzUHFKTE9uQUU5V2FGNW1EY3hvTWt2MlJxOUVjaHRpNzVzYmx0TE1yUGJFcGRBeXBGUWZFZlFwU1NCYXFXaVQzY3NHWGFjVk1tTXRBc0gzMlp4TFZUM19HY3RHVExtZVVyOUdyTGp0ejJVWXRzeEpRSWd2Vlg?oc=5",
      "date": "2026-04-10"
    }
  ],
  "united states→canada": [
    {
      "title": "Canada selects German company to build submarine fleet as it boosts NATO spending",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPT1hRak9valVrdXpiT1lkeWZkYS1YRHRPSmhLbzcwdFFPVnByTU8tT2wxaWNVOUZXU0FreHdmbXMwOEZ6MlNLV1FxYzBSa1FMTDVaZjEzNlB5VjBhak5Kb1pzWHlUVU1sanVmS0pWZTI0dVk0dm10bmxRRVV4TVh4RnpmSV9ITXRiWXBBQzIwbGRXNUlkaVJ1S3lxcy1vYkY5RU9lX2RhYmJIcTJESW1TN0IwRkNpNUXSAbwBQVVfeXFMT0xNRnd4UVJuS1hlSmVMS3RnMGZ6cVNRLUtVUWtXa1dSVFpNUW0tNHJLaDJSU2pVajY1ZmgxOGJLeVdVMFFERld3Q2o5QjVhQ0ZOV0dzYXNfY2VXTERIcXJwalA5U2FocnFEMEw3VTQxeGJDZVpPeGpyYk5ZbzBpek9Pb1FDNkFxNHA4VDJHRlhwUEdBVEQzcW1lMXdaZnVHdFB3dlRieVpYcXZlVERUVDY5bmlDS0c0cUVoQXc?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "The Defense Industrial Alliance Washington Is Throwing Away",
      "source": "War on the Rocks",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNX3ZNdWtWRGNlZkdTX1RBM0ljM3pSVjZ1WnFaYmJIbmRQMWxsM3RodHJpODZYd1hqbHdIanktenN0ZzB4VWJMLUpOeHd5SGpwdGwwQ2ozZVc4cHJCUmNEQmgxa1A5ZTJ5aFpyMTNIOFFrbnoyX2l5QmZnX0xOZ1RfckpTTl90S2tWMnFad3BWbnRhcWktdU9KWFZRbGxneFk?oc=5",
      "date": "2026-06-29"
    },
    {
      "title": "ALGORITHMIC WARFARE: Canada Launches Its Own Version of CMMC",
      "source": "National Defense Magazine",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNV1JyRHAycTBJb1NaN285YVZOb2RQeGZsTzFVLVk3QUFJSWM0OURGMXgzcFBIRDZ0b015MU42YUgwNnBVeGthVnBDczZiZjlSYkd3d29uYzZmRGxQWkZuN3hwQjlQRlBJQllxQlRIZnRUZmJwSTBnSXpjUlBvT1I5SGQ4QllDeDcxVThYOWVuODFkRk5OVEFTLUVMbXhhaGM?oc=5",
      "date": "2026-06-26"
    },
    {
      "title": "‘It’s Not Going to Stop a Hypersonic Missile’: The End of Canada Nice",
      "source": "Politico",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNN3V2c0oyVU1DRU1ZSTBzbjdVV0YtaWZtRHBiaFlGUHdrTWtpemdmSnM2MkpyWDZMcFV1UW8wODBwTURNRU1WbXdydHBhbXdPVWpRakJMSTQtX2VlUnNrcS01RG9DTF9hZl9UNnFUS05ZcFpzR00tNE8yZDJpNHg4YUF5U3g4cW1nOERxZWN2UnY5cHFKLXUzdzczVzZpejg?oc=5",
      "date": "2026-07-03"
    },
    {
      "title": "Canada backs US response to Iran as Carney deems strikes 'appropriate'",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOdTdPTEQwMGNLczB0OFFkbnRCMzJpV044VHBVSUN5N3VkSlFoZnY1SzQ2MXFjSzRURWtLdTJaaWNLZVpPOGh5SjIzc2N4WkJyXzI2ZzRYelJJWkxaVnExMkVXV0JEV1BWWUw0YVczUVBnbU9zZjJqN2ZLRDktbmxPcEczTWlUYUpDUWdWdWE2eTA1MXJxZmpTd29YdzVsaEpDQjI4S0pQT3hNdGc?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Korean arms makers confront NATO market barriers",
      "source": "Korea JoongAng Daily",
      "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPQ0w2VDVJRlM4WkNrQUZNbThUN0l5YnMyTXdyaEs2SHlqTE1lTS1pZElla3NVZExYNHJCMnFPeWdNNF9XSHBNUE1iUGRsN1NSNkM3b25GTTFuWFlqZHRXZk9JdWhLU20yYV9ubTdVWU9DLXFUT29oUEhFN0Y2QjNPZU9BaldvdGFTeDhwQzdjaXZmQldaX0NGOFlpaWlNTWs?oc=5",
      "date": "2026-07-06"
    },
    {
      "title": "Australia scores its largest defense export ever with a $1.75 billion long-range radar deal with Canada",
      "source": "Fortune",
      "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNMXBqSno4UnVGbmhXa0IzN2FtZ21JM1Y1dDBQeTdEYjJVZWF5V3RWdHl2cGZOZlhVeWhuRlJQTlFnNWk4XzR5VXp3N1k0QTNTRjNveUlpcnp0VUlqdHZYck1VOGw5eFVpNThtMGV1R3NkN3FORUlUMnNhNlNOYWg2VWhWWHh0TkViQlFHZGJxU3NjeFBvNEQzd29wVWt0REdxa28xalZnSnVFQQ?oc=5",
      "date": "2026-06-22"
    },
    {
      "title": "Canada Is Spending More. Is It Buying Military Power?",
      "source": "RealClearDefense",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQV9LazZEcDhGODI5bzc0a1JoRVhHT0dDZ05sdkp1MjRxWEtycFhPU01jNjdKcjFaNHZkZG1ieWRiVmF3a21RMWxRVHRHeDhud21yTUUzRll6WHJGcWZLWnczQUdnSUdsUEZvUldwUUlneFRxZU90MmFtTFo1U3pvc2RQSnRaSUFldk56OXpkZGtobnVub2xVcVIxMWlQRU0zZWhNb1F6aS1CQ3F1TzFVcXRUZ2V5YkRr?oc=5",
      "date": "2026-07-03"
    }
  ],
  "spain→canada": [
    {
      "title": "Leaders of Canada and Australia urge Iran war de-escalation, affirm Iranians can't have nuclear weapons",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOWnVjYzRGVERUM0JFSlJVeFpMc3FYNzJfb1VoNEVfVEthV3pMT1RrcmFwZV9JbXZJWElFQmQ1NDBuRHFvT01qaFBNRUxjRFRpMmxMUWJBLXRyS2stZXJSdTEyRmF1emxEbzRNU3RlRUJXY0ctWkxQSl9UdjF4Vm1OeFpVLU9vZHVjdk0wVE1FcERXU3NlVEhndmhvYnlMRVp5Y2N1Rk5xVHdDUjFRanVXVTR1U2NSUVpwbVQ1dzMxUUFBZ2xyVFZFN3JxTEZOMndxdUHSAdcBQVVfeXFMUFU2WEcwUENCLXpQTEkyN1BqU3U2LVM4VTFDVjQzcnJESExaa0VHNlF6M3pPc21CRkJCSDZPSWlwdGsyd1g3US04ekhnN3dvUHFDSEtRRkxJblNvUk85bWpsamM0Z1ZJRDkzTXRzQklJcEtoSldZMld5bWE3T2g3U2t6VVhmLW1PbXVqNVlmRFFscnJLRGN6TmFUUkJ4SUpRZWpfbFhEaVRSSHBLNFhnTmJEd3RIYTZhV2ZHaVQ4TzZSejhkYVVBMk5nbzdOY29vZ0pyTzNrVkk?oc=5",
      "date": "2026-03-05"
    },
    {
      "title": "PBI-Canada to participate in “Shut It Down” webinar on community resistance to the arms trade in the United Kingdom, Spain and Canada",
      "source": "Peace Brigades International-Canada",
      "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxPZkMtMVB0RS1rZTNHSFh2OU5lQ0NhTWJzM000NjA3ekxsUWZtWEZ5alVjcl92ZUczRVZ2M0Q1YTY5RXdzeEp0aUx5ZXlQLVV6Z0hqckR0OE9GQnFnOC1sMXdTdXlnam9UOExZOGdUd3lXdXZmT3FVWlRqYzVtNU45YlVveFBNMFYtVFhETFdPdVVSakZiUVYxd1pjelp3TkMtZGlsRXl4eDk2QmFDNWl3aGRMSjVoU0VkdF82VGNRMjduZnBtV01UVllhakUzdTZXeFljeGtmdmNINThOdi05Mw?oc=5",
      "date": "2026-04-23"
    },
    {
      "title": "Mark Rutte warns Spain: higher defense spending is required",
      "source": "Escudo Digital",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPNXF4aEwtT0tPM2dHRDFLM1hIZE1zRkNLTG1zTUtZdHAtX0FFNkx3MzJKTmIxYmZfUUlPZjRJQVhOS2VDU0FWc0VZNGxJUXFVRWFGYzJWaGxjQmxiTW1VZU52Z1RBaHR5MkZrUW1LcDBDTlJzUTAxODR5Qzd4N2luWUMwNWN6d1ZaZVhNZ0NaUW1IcWNjWFhLSHF5SzA4c2Z2cllPcWplcw?oc=5",
      "date": "2026-03-26"
    },
    {
      "title": "Arms chase: Top 10 countries wey dey import arms for Sub-Saharan Africa",
      "source": "BBC",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9TMDNvWEF5TnUtcktDMmVQdHVyRG1ndzNWQmx1SHd4aHpuR0lkb2pzQUdPRDdhVG03eVgyMkZLcDhxTUFHSTl1ei1uS0E1Vnd1NmxHcE0ybUhuQ3pn0gFiQVVfeXFMUFBSUUdSclprU1Y1dXRRczRsOGVnNS1SS0tzYTNRblBaRUZ1UEsxbmZpY1BsNU1hTUJJMWNxMnNiUHhFcXpRanVaUmdFQkZzM2w4Z1I2QkpCQXMxVUxSbm51TGc?oc=5",
      "date": "2026-05-17"
    },
    {
      "title": "Spain and Canada sign an alliance in defense and AI",
      "source": "Diari ARA",
      "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNWjBqeGllSkxUUThrekQxZ2hBbmFiaDhGUkpRRnZxNjNSODA3T3NIUVJlRVpzVWtIWVNiRHhaXy01dkVXM0xaRUpQa3hYbTAySHM5bmY2RnZsbEdscmhZemJZRlNoeVpKcGRnYnVXX3hGaEZ1S2R1NnlKM1dheTlPNmNFVGpRblpFcjlSTFgtSm1OSHJfZnRZY01B0gGfAUFVX3lxTE5EX3B2bXpMU2F3cElYRkx0VVhjeF80SUVhV1ZhYXdxdmpfQlB5S0IxNkdwMmxwVDItcldxSlBWbmhHcjF3SmFSVldieWZ1YnVyTl8ySnJjMmpRb09TcV9fQmlHdjFSY1lrUHlkYURaWUJ0RUg3WmJjTUl1YkgzZ0M2YlNLeXZOdjRsQlI1X0c5TzlfcmxtLXpTN3N0d0V1OA?oc=5",
      "date": "2026-05-20"
    },
    {
      "title": "Trump admin’s probe into Noelia Castillo euthanasia puts Spain on the defense",
      "source": "New York Post",
      "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOOGR3c25BQ0NKSjhQcnFiVDJNYWFGRXNFYk9sSGdrUzExSXpsTEZVNnBIaUVERW5qU1Y1VGdtRUJzYVZqNzJOcU15VXVvY3UwNGN1RWQ1TEVjOWZLNnY0dGNDdFJTNFdCU3p0NUloUEp0TUFQaHN3M2dDZkFJZ09NYUhiNnlacDdoNUc2aXAzU0ctcVNPYkVZVDY5OEF3THctVDhhc3d1SlI3WV9kYU52dU56TjZKUQ?oc=5",
      "date": "2026-04-01"
    },
    {
      "title": "HIGH-SCORING THRILLER BETWEEN CANADA’S MEN’S RUGBY TEAM AND SPAIN ENDS IN A DRAW",
      "source": "Rugby Canada",
      "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOaHhMM3p1NjVzOHpiMHAwaXFKWFJ3R2pWNFI4dVYxTWpLWngzX25ob3ZtQ08wNnc5X25BMHl0NjBLYzBMWHNjRzVqNXNDRFJfSDNmTUFoTUdWeW9VOFpsX2tWWXloUUJOSTc4MzZfQmVjelRLeEJQZ0U1R3kxM0dqdTFsQTllSmRjZVR2Q3JEZTQ2VnFXM1RkWTRtMzl0Mng3cS16bzFYOTQ0bk1GbUwtaXJ4dw?oc=5",
      "date": "2026-04-07"
    },
    {
      "title": "Spain remains the NATO country that spends the least on Defense along with Belgium, Albania, Canada, and Portugal",
      "source": "El Mundo America",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBTeXhDazVhTFA3WWh0NTJqY0N0SVVOR0VzemI3dzZWNmtTbjRFZHowZVVvZnRnYWdXNnEzeW8xcDdTSE9nLVhuWVBSYjR2MWpnWDBXM2FPMW1JYllFV19FcTRYTHJsNWZrMkxqU0M3cFZ6YTdCc0tJWmthNWdvWm8?oc=5",
      "date": "2026-03-26"
    }
  ],
  "united states→spain": [
    {
      "title": "Trump turns on Spain and demands Greenland as NATO summit exposes cracks",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNXzRwdEJyUmpsTmdQUEVjbVoxemhLZWVheTdBZW52SG4yQXJoTHhRNEk0LVhmY3diZWJtSGRYSmxjUS0xVy00dTk0c19GbFBhV0hZeWdITW8tMGpoNl8wNGN6Y1l5RmxOWmJHMzlOWUp1OS10T3FnU2VaSUJzaURWby01T3dXTDJ4Mlo0elhSY2xDZmw5dmNyMFIxTUEtUE5NSld0RlZydDJWUG4yOFprTlROQ2prSGdvVGYtX3VZYUN6QzJN?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Carlos Giménez quits Friends of Spain Caucus, citing Madrid’s treatment of Israel",
      "source": "Florida Politics",
      "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNaDRMTldKeFNoR0ZhcURRWDZVOXhvM2dWWDJmRm1xMU9oM0NKRDFXUWF3TDhlWGsxYXh4SkZxekpuOTFIeVhKbmdwcTBEUkhSaDA3RXRQYmZlQmZobFhzVHhGVzNkOW8tSnhWV0V1WkxLNFFSbXZBZ1dqWHVWMTkyYTBobnduNHBkYUNiVFh2UGEzY2RDSS1IdUItajVXX1NuZXFTZUxCc1BMbTRUcVdJQnp1WDdnaVZINVUzNTYyYmowUQ?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Spain seeks 'best possible relations' with allies, says premier amid renewed Trump threats",
      "source": "Anadolu Ajansı",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPYXBBTDZhOHQ1YUNHa2RMMkJ5VXc3SW5tT2tLRWxXaEZadEdQYTNPTzNyTGk5b1VsMU1PTjBLckpybHBiclN6Z2E1aGZJUGVNaUlQZXJvR3dBYUZTT0NDNXZzU2V6TXlVTEl2a1g4UTRmQXVRVk5Sa3BEenRncWpEbU82bWJTZkpfcXpLdnVTTEJjRHJNZDdZYnlueUxiS2xkc1VkNlZvOC1ocm5QR0t2QWlfeEhpQ2FRX1ZsV1NlbUYtVmx4?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Trump orders a halt to US trade with Spain",
      "source": "politico.eu",
      "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQMXNBOEd6c3dpZFVObnlURFBsQ29kb2Y5alpHT2U1NS1YMEp2X3BfNDdPX091cVpjcTZ0OXRzX1h2YXQ4LVVMakh4ckpqSXdSa1FHQVFoZE42ZU8ycTdkSnB3cy1tQzBBOTVfS0Z2dlFkMnFYeWs3b25JZmV2YWFrSDF6VnhtbnEtV2p2YTdMaUw2eHFkUHI2bUpGWnNobWVXOER0bzZn?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Trump orders cutoff of US trade with Spain over NATO spending, Iran",
      "source": "Daily Sabah",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPQmw1SElRTFhpTkcxd05tZFE0YXlXYTFxMG5SbTJqemJqT3ZhT1V4VVhLUV94UF9FYXdHZGdjWC1GeWZXSHhwYm5ZTHZFUnh2ZDNUbnA4RFF5NGNFVG5faGJ1ZUZHZTBwWnp3aHpMTWx2TDlSSzdnWWhNRU1qazdZVEd1YmlWOXVnMHhFVVlWSGRoSUtidU11OThJSWFBZkFoeHZyTGw4cGFmS1B3RndWQlNaaVrSAbQBQVVfeXFMT0JsNUhJUUxYaU5HMXdObWRRNGF5V2ExcTBuUm0yanpiak92YU9VeFVYS1FfeFBfRWF3R2RnY1gtRnlmV0h4cGJuWUx2RVJ4dmQzVG5wOERReTRjRVRuX2hidWVGR2UwcFp6d2h6TE1sdkw5Uks3Z1loTUVNams3WVRHdWJpVjl1ZzB4RVVZVkhkaElLYnVNdTk4SUlhQWZBaHh2ckxsOHBhZktQd0Z3VkJTWmla?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Trump says 'a lot of unity' at NATO summit after lashing out at allies",
      "source": "Reuters",
      "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPUEVNU2RSNGlfY1hHTkpSVFpWcjFYcDJHa3FHRkNHWEM3U19nM1lxSWN5SUY1Zjl6czA4LTNrNENOZ1lYMFlDZ2JyWllaRURvU2ZJSTctcFEzWUNKLVoxSmdVT3RmWFNfenFhblhMZUFvXzBrb2M3VDkxQm9PdlZIWmN2YmRaS3lPaGRBcE5XcHdrZFV2NWFSNmZuWUY4VjZmWUhXUXB2RHNQS0ZYdnRHMWxkM3daNlJQR3B6eW5yem1qRDhFRXZLVU1fbjJTelh6S1UybQ?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Spain's unbreached defense faces Belgium test in quarterfinal",
      "source": "China.org.cn",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9jZHVYdjRKZEdoZGFJdEpwaGw4QXNERUZ2b3F0eUd5UGNfWFk2am80VnZ1QVAteFdGTXNoaEVXRF94V1oyUDEzU2pYTUJKQ1V0V3loRmxwa0NCTkZYREFBZ1J4SHFMTU5oQ2c?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Trump Halts Trade With Spain Amid NATO Spending Rift",
      "source": "teleSUR English",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1IUkZBdGtiUkxpRTd0RlBaZGw1R0JzSWpVMHlWVm9GNG9sZ3lwWWVmNF9fUHY3ZndtWHhhVjBadmpWWmhOdVdBNjFRWUFvcG11cFM2clF3ZmNZMGF1YWlhWFM0RV9HY2huSy1DWWx6VlBtd1dnNDBxVDVR?oc=5",
      "date": "2026-07-09"
    }
  ],
  "france→spain": [
    {
      "title": "Why The Remaining 8 World Cup Teams Each Could Win It All — And Why They Won't",
      "source": "FOX Sports",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNV0xMXzAxSkp4Zjc5cnRuS2RwQ1V1N2JvLWNRakJUWnc2TFRhcjhUTUFwdHlUVnlKZHJLa09KQWtIN0tybXNCcjg2TXhmZ0NWWFRSZjlrbllZdlhyVm43WlVPVUxDNGVKeE80RTZyS05GU1gtMWdISWVEY245QWhsVnpPMlpzSmdaZDRyanF6NnFQbHB4T3VTelM5Yk5CRjhZamfSAaIBQVVfeXFMTURZTGN0RUs5b0tLelhUakpZUzJnWGhvYWZJdndISE85ek9KUzNmblB3RE8yaWhDTV9QQ1VaUnMzV0JYVnpsdXhkcXN3MzJwUHJvRVFXWmkzQzhYZ1hDQno0SFhLYlRjZk16TmQwMWdGRzdQcDNPZHptampxUWlaOTlZTE44NHJ2TGZ5VTYwTW1SMDRiTHEtbGdlaGVhS3pVTkt3?oc=5",
      "date": "2026-07-08"
    },
    {
      "title": "Trump criticizes Spain and other NATO allies for lack of cooperation in Iran war",
      "source": "EL PAÍS English",
      "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPRXZ0QWFHWlhQZFAtSHJxUUFsRkJwQ2NMUDY5WnpScElPWURwS21mY3pHdllGY2tsRjhXcWhLZjJiWHlmOGIzeUxfbGFDWTFUbW9WU055RFppNWgzWExmSjdDcjEzWFNrcmMzVFpvN1BxaUQzLWNIVElfM1c2R2dpZGRmQXp5dTRDd09YZXpULWhmWG9wMWMxd3pfX0Nwb0tRaWxrb3NIWW5SNEdyUm5nSTJOSHFtMTUxVWE1RVdKZlplS1A2SzZ2OFJfazRkLUNYWkVr0gHnAUFVX3lxTFB6VWZ1ZUplQlNnLVRiV0gwWlpKSWo3T2xLS3VBM2M1TE1tZm9RdjhfcGswNC1qYm8zVHBHQ3IwdnFZOEZ4ZlpId3JrMjZoNko5bHc0TUpMUndrMkYxcFJsTUxlX2xib2RnbW1zekxqU1FWUEZPZWJoWTY4d2ZrWnpaTndDUkpVZVU5WWZHRkRZR1pnY3FVTWF6bnZmc2hSZTljVVJ2VlNuNXpEVXNia0t1ZmlYTHQxRXh1NFREWk45OVkxVGlKSjRWbjhjb3VJb0o0a2RVbDhfdi1Sd3V2bDA0cEFocDdHcw?oc=5",
      "date": "2026-06-25"
    },
    {
      "title": "France, Spain reassert faith in Europe’s next-gen future fighter, but Germany stays mum",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPX0pxYzBIbWVrTXd2akJ3THRYVko1UDY5aGVfYmF6VjNKRVpjR3lDUkYzeGFOblhHN2VFRGpPOWtMWHhETDlGejdYYkNGc2Q4Y0QzbFo2MHhQaWh5SlFubGFYTkhfeU5RT3ZrTHF2YjFQc0EwMGhHMmlyeVZnSHZlUXg3S1F4SnBRLWx0MGtGcEExTWIzV1NEVnpROGU0dHI2Y3ZZRW5RdGg0bkxOMHV3WHQzbkhaTGdiTzYwZlNR?oc=5",
      "date": "2025-12-12"
    },
    {
      "title": "Spain vs Belgium: Defense is the Key",
      "source": "VOI.id",
      "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE1oaWY2UlRrUERvUVZWdGlmZWlDVGEzLXU1c0t2azRMSE8zdjZpcnFpUVdmaGJjWGJ0WEdmRWF4UGVQOW5EU2fSAUJBVV95cUxQUWk2VHRhU29iNmNUVGdSTU1yQzlFdTg2UjNLdXdQdWI4Vjh2R2xqa21SYW5OMC1PZjN6QVZYNmZablE?oc=5",
      "date": "2026-07-09"
    },
    {
      "title": "Germany Drops Jet Project With France in Setback for European Defense Sovereignty",
      "source": "WSJ",
      "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPV1pDMWUyNEdlZXNxU1kzV2haS0ZNbkhZN19ZSTllMTRlV19DcFh5bVVSZU84aDJZTG5wSWdsSUxqLVZVNWRUYzFsRmp0MTJ1WXZWVldDdHNodWZNNUVyVk9jYjhpcXhodFhJMUZ2LWIxMXlJX2FsdVNVTklpWXh2aTJyUmVaR2NJRy1vaWRoOXVuM1NfSkE0eFBMbnhpR0I4Yk5oQkdYUm9KQjNIMTczbV80azByQ040bUhYQXFXRlU?oc=5",
      "date": "2026-06-08"
    },
    {
      "title": "Spain closes airspace to U.S. planes involved in Iran war",
      "source": "PBS",
      "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQV1JXbWdFdWZhWnlISFJfSUt0TTdDeHcxZzJtVkZpNnprUlZmZjB6XzNoTEVna3JVRHpKdW92cUJzcDFJY0tlZk16Y3J2Ukp3RTFndFZ1cjVJaFJsQjByNmNBUVZyTUgwTzVLVWc5dHFxcm10ckFpQkpQRlF1aURYZWhJSkhvaUFTYzJHWS1Xb185YWxTTkHSAZsBQVVfeXFMT09kRVdzcUdNaTY2XzhMMFVLX2o1QlhiV1o2anMwREUyUjFQcnFNM0FFSXI1VXNzc0ltaERhTS1yLTFDTzBqRXQtdnF4V2hZRncxbFEwT1BhbHU3ZVpJaHhYT1QyUWRnMlJGZmRWMkxvQkc5cnpmZ3hsZldFbFZDMnA1NXZpblN6dGs2MUVtN3RVLU1TSkxBazBidDA?oc=5",
      "date": "2026-03-30"
    },
    {
      "title": "France and UK Send Warships to Mediterranean",
      "source": "Council on Foreign Relations",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9XMDlaZlJhYkk3cXJvMHU4a1N1c2xxNG9STEhnVy1aQ0FZMmpVT1RlNlBKdHpuNERPdFNXRVFkXzF3Z2otQWltN3VFa3RkbXpoNVBYOExEZEd5OWtWY3ZKeWY3eXc5VGN0RzMtYklhRWFpTDBoOFAyd1RTSnZldw?oc=5",
      "date": "2026-03-04"
    },
    {
      "title": "France, Spain push Israel-Europe tensions to a new low",
      "source": "The Jerusalem Post",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5vLW5FLXFyNmUzbUpJWk1nOUliMDJQam9meloyZkFUOE45VkpDSVluSElWbjBLNktHck40SFJIanpraDRVZDZIWW8tYVk1ZXJqc2lVR1BGTTctUks2MW9R?oc=5",
      "date": "2026-04-13"
    }
  ],
  "united states→thailand": [
    {
      "title": "US-Thai Alliance Strengthened by Military Engagements",
      "source": "army.mil",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQSmFTc3JpQW4tei1DdHNkQUJDSWNwSVg3UUZoREtfLVFieVRlTGhFUDFmUmNGMDZDc2ptWG5zaVlydEFQUFFwbm9oVVg4X2U4dHlMTjlzRlJvMzBoUVpzSFJVX2xqRUpnbVlLU0dYdWc3bndFeVEycXZJb3hmSXRxakRMN1VsUG83alliaUx6azVNdXPSAZgBQVVfeXFMTTRNci1FY2J4blJGNEQyMnhuTU13OF8zcDBCUmFHSk10TnVSbTluTDZkazB4RC02dTJLQXZNUGlhcWE3M3luV3JneXdXU0RsNnJMUUNBaFE1bXpPU1ZpWDRGNHZuTmtqY2pzczFOOTJWRmF0SmhJOEpUSWRVMWh1RTdvSzE3MXpBaFpMdjNWbTRKY3p0VjhwSVY?oc=5",
      "date": "2026-03-27"
    },
    {
      "title": "USINDOPACOM commander underscores U.S.-Thai defense partnership during Thailand visit",
      "source": "pacom.mil",
      "url": "https://news.google.com/rss/articles/CBMijAJBVV95cUxPeTc1ZXpFR2g1SzJpQ0phbkVwQkpvelJ1aDJ0UUdscnY2Y2lUT2txdG9wU2tzMXdnbEZXdkMwYUxyeUxTVGExVXJRVlY4dnBsQ1hLdVMxeFlxbWJheHo2LURPVGxvMzVsWVZNaXlXQVZGS0loUWQyRWpydERBcXl2RnY2azFFRDBCM1dWTl96ZmdDd2dBM0gxUW1iX0ZFN1N0TTdYMFptbnotVXpfNEkxMldjaGwzODBtUDZyQ2RLSzlYS2Q5LXpBUExJUlE4ZVBieGRfMC1NTjJRLUxsRVlfa1pUQTJYMjl0MEJCSG1qLWxtVjQzVWRQYlhWenkxbDBNaExkeHVCMVVRZzdj?oc=5",
      "date": "2026-01-25"
    },
    {
      "title": "Joint Statement Reaffirming a Shared Commitment to Defense Industrial Resilience",
      "source": "U.S. Department of War (.gov)",
      "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxONTlSWUhyWkpoUDA2ZzhIRDc0YTFDZDRVY3dmYlNzWlZUYzd5blpVTzNpWmhXM1poTHVxdGlrbFdoLVozNVNzeXNNczJOZlJXd1lfbmNFOUFub2JtV0xzVElIOVlZbjFNRUdja2UycWZaNXoyMnJ2YVJRRXZHUmhSalF5aTdLaDF1Z1laWUVpS0Fmd1ppMjZQRjh1OXVaM21HZXgtejRLbDlQbWlZNm1meUVPaUVGdjNaQTN0bDdqcVB4UkFKZjZWakF3eS1BZjVWcVNZT2h3?oc=5",
      "date": "2026-03-20"
    },
    {
      "title": "16 Nations Boost Indo-Pacific Defense: PIPIR Welcomes Thailand & UK In Expansion Push",
      "source": "Dallas Express",
      "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNNWJVWFA5ZFE5RXRXeFdnUGlBbkNGQ1dTdGdsczAwTWdpbmVjQU5wU0FwY3p6ek1CTGVoYjk5eW9ieWxRR3huZ2xmU2p2Y1pWbDB1eG9QV1NHaFUxTlowWS1zZG1jOWEza0FyMElYaG5yY3NTRXdOdHozU2VfSjc0NDhEQlFvVEhIaE5CekZRdzhiNTNVdmI1Q2V4VUltVnM0MzZ6M0FtOEVKaDBMN2tpZm5EQlZ3YmlzcEE?oc=5",
      "date": "2026-03-22"
    },
    {
      "title": "Why Thailand, a US treaty ally, is stocking up on Chinese weapons",
      "source": "South China Morning Post",
      "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQTG14NV8zaDNaTEJvYkF1WU5KVkFLcllmc3U5RlRMWTQ4cHFGNkY0T0NQV0VNQmc5LXlEekxSZjB2VGN4V2FmU2NmLXhIYVVXVHd5NEI1ZnBDb2NkZ2paNVdZZ3JrUko3aWhsSnlxMUJkWVc3RUpxT0lVTlZhaG50bHNYNFhiUUlwVk5Fa1Nxenl0NU5Tbl9aYmxIZjRDSU1vZEdwNGhBVHgtaE0xcWfSAa4BQVVfeXFMTUhISFZEVW5XdDI0QURvcFk0WnBaQk05R1llT3o4d2IwTVA1VTZVbVRyd2hiOEE2WnJ2dmhWRldjaGhfLWk3c2tiM0VXQW91R3FsODQ2Ykgxa3paMUFJdmNKRUREUkUwWHIzSnEtbXEyUnR4eWhEVTVMSFpORmp0YnRBdGNwTDZHb2E3SWNqaTVKR1RjQjlaQXdaN29fNjFhV2dTOTlNUGRwX0hNZFFR?oc=5",
      "date": "2026-01-24"
    },
    {
      "title": "Enduring Cobra Gold prepares armed forces for multiple contingencies",
      "source": "Indo-Pacific Defense FORUM",
      "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPYThIdHV5ODdnVG9FZ2FScjJYS3BINE5kVl9QRnNfVmVQOE9JNGlvSk9uYnhQd0VmMGM4cXFYTVJ1eEJ5a1BQaVEtbnlDLUVSY2VmaUNWNW44WXM4aFlsM3lSV3JZWTAwOE5lS1hJM2dNOFl1UmtCSVh4RUdvYUxPRXZVTlNFVmtNLUF2MHd4TmNzSmpYMEFOZjZyYWNLaURITVZtczFzWQ?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "Thailand’s tilt toward China tests treaty alliance with US",
      "source": "Defense News",
      "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPb2FPbEFRekdpVmZzWVZpMkVwN3h1NElrdzEtOS0wcnloRGU5YVppaWtTWWszbjZaLXotQ1pvQ2ZqVm4xN2treVRZRjdCY3F4cGRkUFVHOGNVeEtWbFhwaFpiNUNWUlFiZ2lLM1VDV0tnRkxpeU9PV1lZMFRoSFNTN0tvcWRhblJVU01qU3RqaERuamwxb2szSkFPZ00taEdwRkhWbERxNEdTczI4WkxXX2FZbWQ2cDEz?oc=5",
      "date": "2026-01-05"
    },
    {
      "title": "Cambodia Officially Removed from US Arms Embargo List",
      "source": "CamboJA News",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQTUt3cTJQZ2ZjWmNjcjJ6Y1l4d1FqOWJEaEJRMUtiZzg2WTc1b2c3YXZlbDItR3RfdnJNZEFWZEtBQWNWMkw3cUhURk5qX3VncDlSODBYZ0pPcU9rbDh2ZmNWdTRVaXZkblFQajZCb2NLMk9Mb0d6c0s0TTFYeUdONXZQMGY?oc=5",
      "date": "2026-02-04"
    }
  ],
  "israel→thailand": [
    {
      "title": "Thailand’s Brittle Defense Against Oil Shocks",
      "source": "The Diplomat – Asia-Pacific",
      "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNSkhSbUstZXJ2V2hZZFgwN2I3ZWI5bC01cndEWW5PenJqdmY2TjJNcnpLN2k4RlFuYnZsaGtXamZhUjh2NFJrM2d6dWtZaGdiU1M5WnpLZUQwYmVubU1FSHV1Um9nZktUc0R0eVc3OXB0ZlA0dXlvZ0kyQlEzMU9DNjBMNA?oc=5",
      "date": "2026-04-01"
    },
    {
      "title": "Israel Confirms ‘Operation Roaring Lion’ to Neutralise Iranian Nuclear and Missile Threats",
      "source": "Nation Thailand",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1zaDFIZkZpcS00S0tfQ0Nxdjg4STFaOEpON1cwSy1wX3JaenJaRTZFMFNqQjA5aUpabjdOMU11SElpWlBrNFJYUFlWbVRqTWt0U2I2ZmtZSkxjdk5KVU9z?oc=5",
      "date": "2026-03-02"
    },
    {
      "title": "In Battles With Cambodia, Israeli Weapons Help Thailand Achieve Superiority",
      "source": "Haaretz",
      "url": "https://news.google.com/rss/articles/CBMiogJBVV95cUxNRUtZd2E1b0x4S1VkUWtmSU54MkItN1hFZFNldWhLQzdWUUUtX0k3RDNVN3RkZnUzSkJjZDNCdUNWVE81ZXpwbVRQeHdRSnN3MXhiQllCYjN4VE0ya0UzVURTbmJaYVgycWhQUFc5U19EY1JtZ2hKejJkT0pQdEh4VkRTZjI0NE5Xc0hRVXBmWDRvTE9wS0EzdmNpZWp3a3RSSmphYlgwa2R0MDM5Y01LZ1c5b0lxVzI1ZTB1eHctZVV0QTN5WE5KeTJyMmcxR1hSV05xamVyeGs2ZWlWYkFVSFhzWVZQMURMXzFkNkI2d0d0c2tzX2lZTmdEbUNUMmVyUm81MnloZzNyWnkxTkp1eXVNOWEwTjBmbXNWcElWY21NZw?oc=5",
      "date": "2025-12-10"
    },
    {
      "title": "Israeli arms used in Thai-Cambodia clashes shows global reach",
      "source": "The New Arab",
      "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNOFFxRDliRDlpWlZjTWQ2RVNrM1NZMjNaVWphVUphQ1JkdHNsU0pXVG9WRndRUU5WcHljMVVfOGY3NXJuV0JMeTR6TkxUaXRHdWRMLWp3UWtvbWdZc081eUZ6NTc3SjZxRk5EMDd1TE9xXzJDX2pGX2dQMXRycExSeE1FT2p0UWxJOVVFVFhQWEc?oc=5",
      "date": "2025-12-17"
    },
    {
      "title": "Thailand to acquire Israel’s IAI Barak MX Air Defense System",
      "source": "Breaking Defense",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOV3Y0Z2RWZHZXakk5SXllNkY2UGtxa01KREN1QkoyakViXzNRVk1qWnZ3TmNBM2FuR01tYlV6emdZMVNWNDhuQXRFT0FNNlVJZFVmOFhMaHJOYjZERURHbzUxbWVCdFNlNU41UGFaUmh2SlFrbnlOQWQ0dkxnWnFyeVhIejBBQ1BjWU92Z3VIOTlqak94UVpyNmJiaTU?oc=5",
      "date": "2025-12-04"
    },
    {
      "title": "Thailand Buys Israel’s Barak MX System in Multi-Million Dollar Air-Defense Deal",
      "source": "The Media Line",
      "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPd1pWbDNjUjcwX2Y1bFJtbjF2VzMzZ2s5N2lDdUFXQklZc1pSclExUXlkYWVlNjhhektDSmxOa29obENYQ0lndm1Xam1yQWRZRkcxUjQyazlxOGx0LVBxUWJHUzJCTVlmeWFPQXU2NWp6N1VhbERuUlVzSDViQVA3Y1hWNHVYRVg4aU9INVpONk9lMHZCUjd3VndRM2tiNEw4bFNxdFhndDhaUUI2M2h0Tll5aVU?oc=5",
      "date": "2025-12-05"
    },
    {
      "title": "US bypasses Congress to rush bomb sale to Israel as Iran war escalates",
      "source": "Nation Thailand",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9kRlVsdWxHVngyM3lValBHTVp2eERyU055akhnejE3dkotMjVuZ3NJVllBeUFmWUoxaDFSQjFXSGVhN1BZT1dWWjJsbkpDbENwWFRzc2ppOG4tWHJuQWhzV3pNVm9OMTQ?oc=5",
      "date": "2026-03-08"
    },
    {
      "title": "The Real Reason Thailand Bought Israel’s Barak MX Air Defense System",
      "source": "The National Interest",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQOFhBRkdUenZfSncwOFh1LWROVXhpcEplLW5OalBRXzNaWksxUWR0UU5XZkF4WlJJWjB6STloR0dMYzFmMm9FcS1ZTTlhMmxPcndUSUFQbF9MRzhnQXdzWTdnQ1BXc2hsSUN5N0tzU2N1Qlo4N3NRTm9KbGc4Rk9MdHdOdnI3WWVsOEJ0R2J4WHVCUnBXaDZRNWR3Q05kTlh0QzZ3ZnY4Q0g4MWc0bGdnSTFR?oc=5",
      "date": "2025-12-12"
    }
  ]
};
