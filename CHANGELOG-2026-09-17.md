# Rezi Tarot — changelog 17. 9. 2026 (celestial refresh)

## Hero (index.html, cs/index.html)
- Nový H1 „You seek. I channel.“ / „Ty hledáš. Já vykládám.“ (převzato z živého webu), lead s mariášky + tarot + runy.
- Portrét v arch tvaru, plovoucí ♠♥♦♣, jemná souhvězdí, venušský glow (jen CSS).
- Liquid-glass Google recenze pod CTA + hodnocení 5.0 · 20+ (ručně udržované číslo).
- „Tři cesty“: 01 Eventy (e-mail) · 02 Online video (WhatsApp, od 990 Kč) · 03 Osobní seance (1 800 Kč, pár míst měsíčně).

## Menu online výkladů (homepage + online-tarot-reading + cs/vyklad-karet-online)
- Sezónní výklady sloučeny. Podle tématu: Láska ♥ · Kariéra ♦ · Wellbeing ♣. Podle času: Co tě čeká (do konce roku) ♠ · Rok 2027 ♠ · Narozeninový ♥ · Lunární ☾.
- Vše 990 Kč, WhatsApp s předvyplněným názvem. JSON-LD OfferCatalog aktualizován (8 služeb, kotvy #love … #lunar).
- Meta description + FAQ na online stránce přepsány (bez „sezónní“).

## Eventy
- Homepage: nový tmavý pruh #events (reference, e-mail CTA, od 2 000 Kč/hod, foto). Osobní seance = tichý panel „Tváří v tvář“.
- Stránka eventů: Google recenze (dárek k 30. narozeninám), štítek Brand activations, galerie 3 fotek (images/events/*.webp).

## Recenze (homepage)
- Statická mřížka 3 recenzí (odbornost/angličtina · atmosféra · jasná rada) + karta 5.0 · 20+ s odkazem na Google.
- Jména recenzentů doplněna z Google profilu (ověřeno 17. 9. 2026: 5.0 / 21): Lily, Katrusya, Shirley, Anoosheh (hero), Luisa (eventy). Přidáno AggregateRating + Review schema.

## SEO
- Nové title/description homepage EN+CS (≤60/≤160), Prague title zkrácen.
- ProfessionalService: sameAs += Google profil, foundingDate 2005, priceRange, knowsLanguage, makesOffer (3 hlavní služby s cenami).
- sitemap.xml: lastmod 2026-09-17 u změněných stránek, doplněny changefreq/priority u pražských stránek. XML validní, JSON-LD validní na všech stránkách, žádné rozbité interní odkazy.

## Otevřené body pro Rezi
1. ~~Jména recenzentů~~ hotovo.
2. Fotka stolku (event-table) má vzadu viditelné logo značky — potvrdit, že může být veřejně.
3. Body Oracle — přidám do menu, až bude služba hotová.
4. Přesměrování — viz DEPLOY-SEO.md.

## FAQ (homepage, doplněno před nasazením)
- Sekce #faq se 6 otázkami (EN/CS) + FAQPage JSON-LD — cílí na „tarot reading Prague English“, turisty, ceny, online, mariášky, eventy.

## Git
- Repo terezaprazakova1-afk/rezi-tarot, větev main. Odstraněna duplicitní složka fixpack/ (duplicitní obsah = SEO minus).
