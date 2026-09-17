# Rezi Tarot — předání (úpravy od Claude)

Základ = tvůj čistý „signature" draft. Web je statické HTML/CSS/JS, bez buildu.
Náhled: dvojklik na `Náhled webu.command`, nebo `python3 -m http.server 8765` a otevřít http://127.0.0.1:8765/cs/

## Co Claude změnil
- **Homepage (cs/index.html, index.html):** ponechán ČISTÝ signature hero (světlý, portrét vedle textu).
  Nový text: „Pražská kartářka a tarotová múza… klid, jistotu a mystiku… jako od dobré kamarádky."
  Přidán řádek důvěry `.sig-trust` „Od roku 2005 · tisíce výkladů · česky i anglicky". Symboly ♠♥♦♣ zůstávají.
- **Rose Temple ODSTRANĚN** z homepage. Nahrazen sekcí `#rituals` „Tarotové rituály za novoluní" (odkaz na stránku rituálů).
  (Blog článek „rose ritual" ponechán — je to obsah pro SEO.)
- **Rituály/Rituals přidány do menu na VŠECH stránkách** (stránky rituálů = novoluní už existovaly).
- **Homepage panel eventů:** „Tvoje tarotová múza" → „Host, na kterého se nezapomíná." + neutrální prestiž,
  odkaz na eventovou stránku.
- **Eventová stránka (cs/vestkyne-na-akce, events):** povýšený design —
  full-bleed atmosférický hero (foto `images/selected/rezi-group-960.webp`),
  kredibilní pruh `.event-logos` (NEUTRÁLNĚ: „Světová šperková značka · Mezinárodní streamovací produkce · Festivaly · Firemní večery"),
  CTA „Rezervovat Rezi na event / Book Rezi for your event" (otevírá e-mail rezitarot@gmail.com),
  opravena chyba v kontaktu (u e-mailu bylo tel. číslo).
- **Online stránky:** přidána galerie detailů karet `.sig-gallery` (fotky `images/rezi-detail-1..3-*.webp` ze složky foto/).
- **Nové CSS třídy:** `.sig-trust`, `.sig-gallery` (v assets/signature.css), `.event-logos` (v assets/site.css),
  override `.signature main:has(> .hero-media-wrap){padding-top:0}` (nepoužито po vrácení čistého hero, neškodí).

## SEO — zachováno silné
Titulky, popisy, JSON-LD, canonical, 4× hreflang a sitemap.xml NETKNUTY a konzistentní.
Platné ceny: online video 990 Kč (~30 min), osobní seance Praha 1 800 Kč (60 min), eventy od 2 700 Kč/hod.

## Otevřené body / rozhodnutí
1. **Publikace = nutná 301 přesměrování.** Živý rezitarot.com je zatím JEDNA dlouhá stránka;
   tahle verze je multi-page (samostatné URL online/Praha/eventy/rituály). Bez 301 hrozí ztráta pozic.
2. **Styl eventové stránky** je tmavší „venušský" (site.css, `page-hero/band`) vs. čistý signature na homepage/online.
   Rozhodnout, zda sjednotit do čistého stylu.
3. Fonty: Agnes nemá české diakritiky → české nadpisy používají Black Mango (viz `html[lang="cs"]` v site.css).

## Kde upravit texty
Homepage: cs/index.html, index.html · Online: cs/vyklad-karet-online/, online-tarot-reading/
Osobní seance: cs/vyklad-karet-praha/, tarot-reading-prague/ · Eventy: cs/vestkyne-na-akce/, events/
Rituály: cs/tarotove-ritualy/, tarot-rituals/ · O mně: cs/o-mne/, about/ · Blog: cs/blog.html, blog.html
Design čistých stránek: assets/signature.css · Sdílené + tmavé sekce: assets/site.css · Chování/animace: assets/site.js, assets/signature.js
