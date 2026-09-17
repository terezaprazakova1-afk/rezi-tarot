# Rezi Tarot — úpravy textů a předání projektu

Tato složka `rezi-tarot` obsahuje aktuální návrh. GitHub dosud obsahuje starší web.
Web tvoří HTML, CSS a JavaScript bez sestavování. Není potřeba Wix, API klíč ani instalace balíčků.

## Kde upravit texty

Otevři soubor v textovém editoru (např. VS Code), pomocí hledání najdi větu a přepiš text mezi značkami.
Neměň značky `<...>`, adresy v `href`, ID ani názvy tříd. Pro zobrazení změny ulož soubor a obnov náhled.

| Stránka | Český soubor | Anglický soubor |
| --- | --- | --- |
| Homepage | `cs/index.html` | `index.html` |
| Online výklady | `cs/vyklad-karet-online/index.html` | `online-tarot-reading/index.html` |
| Osobní seance Praha | `cs/vyklad-karet-praha/index.html` | `tarot-reading-prague/index.html` |
| Eventy | `cs/vestkyne-na-akce/index.html` | `events/index.html` |

Sekce mají pojmenovaná ID: `readings` (4 sezónní čtení), `questions` (vlastní otázky),
`how` (postup), `rose` (připravovaná služba), `about-rezi` (představení), `reviews` (reference).
Hlavní stránky jsou naformátované tak, aby byly jejich texty snadněji dohledatelné.

Pozor: texty sezónních služeb a postupu jsou na homepage i online stránce. Změnu udělej v obou.
Anglická verze se nepřekládá automaticky. Ceny a podmínky musí souhlasit také s popisy a JSON-LD v hlavičce.
Když si nejsi jistá, zadej změnu agentovi běžnou větou a požádej o aktualizaci všech výskytů.

## Co předat Claudovi

Nejjednodušší je otevřít přímo tuto složku v Claude Code. Pokud pracuješ v chatu,
pošli mu `predani-rezi-tarot.zip` ze složky nad tímto projektem. Balíček je statický snímek;
novější úpravy po jeho vytvoření už obsahovat nebude.
Nepředávej rodičovský projekt `psychic-rezi-automation` — obsahuje i staré materiály a může mít `.env` pro Wix.

Design hlavních stránek: `assets/signature.css`.
Jemné animace a pohyb karet: `assets/signature.js`.
Původní sdílené styly a mobilní menu: `assets/site.css`, `assets/site.js`.
Obrázky optimalizované pro návrh: `images/selected/`. Původní fotografie se neupravovaly.

Pokud chceš převzít jen sekci, předej HTML dané sekce, oba CSS soubory a případně oba JS soubory.
Sekce nemají zcela samostatné styly, proto je bezpečnější předat celou složku a omezit zadání na konkrétní sekci.

## Zadání pro pokračování

Pokračuj v tomto lokálním návrhu Rezi Tarot. Zachovej paletu #3A2721 a #FFF8F0, logo,
fonty Black Mango / IBM Plex Sans a čtyři sezónní služby se symboly ♠ ♥ ♦ ♣.
Online výklad je osobní video přibližně 30 minut za 990 Kč. Seance v Praze: 60 minut, 1 800 Kč,
česky i anglicky, hotel Monchis nebo domluvená kavárna, QR platba nebo hotovost.
Seance se domlouvají na WhatsApp, eventy přes rezitarot@gmail.com. Rose Temple je zatím pouze oznámení.
Zachovej sekci U karet s Rezi, pravé reference převzaté z původního webu, jazykové varianty,
unikátní metadata, canonical/hreflang a strukturovaná data. Rozlišuj online a pražské vyhledávání.
Uprav jen požadovanou část a ověř desktop, mobil, klávesnici a omezený pohyb. Nezveřejňuj automaticky.

## Náhled a stav

Spusť v této složce `python3 -m http.server 8765 --bind 127.0.0.1`.
Otevři `http://127.0.0.1:8765/cs/`. Náhled vyžaduje běžící server na stejném počítači.
Předání balíčku ani uložení souborů veřejný web neaktualizuje.

Otevřené podklady: přímý Google Business Profile odkaz, ověření pravopisu/návštěvní adresy hotelu,
pevná období sezónních výkladů, téma Rose Temple, přímý Etsy odkaz.
Pracovní název hotelu vychází z diktátu uživatelky; adresu ani mapový bod jsme neodhadovali.
Přímé původní zdroje recenzí ještě nejsou propojené, proto nepřidávat hodnocení/hvězdičky do schema.
Na Macu může mít repo kolizi dvou Unicode variant názvů starých blogových URL — neprovádět jejich
hromadné mazání nebo přejmenování při běžné úpravě vzhledu.
