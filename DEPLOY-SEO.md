# Nasazení a ochrana pozic (301)

Web běží na GitHub Pages (soubor CNAME = rezitarot.com). GitHub Pages neumí serverová 301 —
proto:

1. **Živý web dnes = jedna stránka na `/`.** Všechny staré odkazy vedou na `/` nebo `/#kotva`
   (kotvy server nevidí) → nic nepřesměrovávat, `/` zůstává homepage. Stará URL `/cs/` existuje dál.
2. **Sitemap na živém webu už dnes hlásí 12 URL, které vrací 404** (`/online-tarot-reading/` …).
   Nasazení této verze to opraví — v Search Console poté klikni „Odeslat sitemap“ znovu
   a u 404 stránek „Ověřit opravu“.
3. **`/post/<slug>` (starý Wix blog)** → 404.html je přesměruje JS na `/blog.html` resp. `/cs/blog.html`
   (a existují i statické stuby v `/post/`). Google to bere jako soft redirect — funguje, pozice blogu byly minimální.
4. **Starý domain `psychicreziprague.online`** → 301 na rezitarot.com se nastavuje u hostingu / DNS
   (Porkbun URL forwarding „permanent (301)“ na `https://rezitarot.com`), ne v tomto repu.
   Po nasazení: Search Console → stará property → „Změna adresy“ na rezitarot.com.
5. Pokud v Search Console uvidíš další staré URL s návštěvností (Výkon → Stránky), pošli mi seznam
   a přidám pro ně statické redirect stuby (`<meta http-equiv="refresh" content="0; url=…">` + canonical).

Po nasazení zkontrolovat: `https://rezitarot.com/sitemap.xml`, Rich Results Test na `/` a `/online-tarot-reading/`,
PageSpeed (cíl: mobil ≥ 90, CLS 0).
