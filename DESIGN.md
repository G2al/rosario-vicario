---
version: alpha
name: Rosario Vicario — Personal Trainer
description: "Design system per il sito one-page di Rosario Vicario, personal trainer a Sant'Antimo (Golden Village). Dark, atletico, tagliente: nero, argento e il rosso del logo, titoli condensati Anton e tagli diagonali a 45° presi dal monogramma R. Obiettivo unico: portare il visitatore a scrivere su WhatsApp dopo aver visto i pacchetti."
basedOn: "Boutique Gym Website Design System (stormcube, designmd.ai) — struttura, tipografia e regole di conversione; colori, forme e motion riscritti per il brand."
colors:
  background: "#0A0A0B"
  on-background: "#F2F4F7"
  surface: "#141518"
  surface-alt: "#1C1E22"
  on-surface: "#F2F4F7"
  on-surface-muted: "#9BA3AE"
  outline: "#2A2D33"
  outline-strong: "#3A3E46"
  primary: "#E3161B"
  primary-hover: "#F5262B"
  primary-pressed: "#C21015"
  on-primary: "#FFFFFF"
  secondary: "#C9D1D9"
  on-secondary: "#0A0A0B"
  success: "#2F9E5F"
  on-success: "#FFFFFF"
typography:
  display:
    fontFamily: Anton
    fontSize: "clamp(56px, 10vw, 136px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: -0.01em
    textTransform: uppercase
  headline-lg:
    fontFamily: Anton
    fontSize: "clamp(40px, 6vw, 80px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.01em
    textTransform: uppercase
  headline-md:
    fontFamily: Anton
    fontSize: "clamp(28px, 3.5vw, 44px)"
    fontWeight: 400
    lineHeight: 1.05
    textTransform: uppercase
  headline-sm:
    fontFamily: Anton
    fontSize: "clamp(22px, 2vw, 26px)"
    fontWeight: 400
    lineHeight: 1.15
    textTransform: uppercase
  price:
    fontFamily: Anton
    fontSize: "clamp(48px, 7vw, 88px)"
    fontWeight: 400
    lineHeight: 1.0
  stat:
    fontFamily: Anton
    fontSize: "clamp(40px, 6vw, 72px)"
    fontWeight: 400
    lineHeight: 1.0
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.06em
    textTransform: uppercase
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
    textTransform: uppercase
  label-wide:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.3em
    textTransform: uppercase
rounded:
  none: 0px
  full: 9999px
angles:
  logo: 45deg
  section-edge: 4deg
  corner-cut: 14px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  section-y: "clamp(80px, 12vw, 160px)"
  gutter: "clamp(16px, 4vw, 40px)"
  max-width: 1200px
breakpoints:
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
motion:
  duration-fast: 150ms
  duration-base: 300ms
  duration-reveal: 800ms
  ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  stagger: 70ms
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    cornerCut: "{angles.corner-cut}"
    padding: 16px 28px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    border: "1px solid {colors.outline-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.none}"
    padding: 16px 28px
    height: 52px
  button-link:
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    underline: "1px, offset 6px"
  nav:
    backgroundColor: "transparent → {colors.background} al 85% + blur, dopo 80px di scroll"
    textColor: "{colors.on-background}"
    typography: "{typography.label-md}"
    height: "72px desktop / 64px mobile"
  eyebrow:
    textColor: "{colors.secondary}"
    typography: "{typography.label-wide}"
    marker: "barretta rossa 16×3px inclinata a {angles.logo}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3vw, 32px)"
  pricing-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.none}"
    cornerCut: "{angles.corner-cut}"
    padding: "clamp(24px, 3vw, 40px)"
  pricing-card-featured:
    backgroundColor: "{colors.surface-alt}"
    borderTop: "3px solid {colors.primary}"
    badge: "Il più scelto"
  segmented-toggle:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline}"
    activeBackground: "{colors.secondary}"
    activeText: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    height: 44px
  chip-savings:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 4px 10px
  stat:
    textColor: "{colors.on-background}"
    typography: "{typography.stat}"
    labelTypography: "{typography.label-wide}"
  faq-item:
    border: "1px solid {colors.outline} (solo sotto)"
    questionTypography: "{typography.headline-sm}"
    answerTypography: "{typography.body-md}"
    icon: "+ che ruota di 45° fino a ×"
  before-after:
    handleColor: "{colors.primary}"
    labelTypography: "{typography.label-wide}"
    aspectRatio: "3:4"
  cert-badge:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
  whatsapp-fab:
    backgroundColor: "{colors.primary}"
    iconColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 56px
    position: "fisso in basso a destra, rispetta safe-area; solo mobile e tablet"
  footer:
    backgroundColor: "{colors.background}"
    borderTop: "1px solid {colors.outline}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
    padding: "64px {spacing.gutter}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
---

# Rosario Vicario — Personal Trainer

## Overview

Sito one-page per Rosario Vicario: personal trainer giovane, laureato in Scienze Motorie, calciatore agonista. Allena alla Golden Village di Sant'Antimo, sia di persona sia a distanza.

Il sito deve sembrare **forte, preciso e vicino**: l'energia di una palestra vera, non il lusso freddo di un brand di auto né la pulizia sterile di un SaaS. Tutto parte dal logo, il monogramma R in argento e rosso fatto di tagli netti a 45°.

**Un solo obiettivo:** il visitatore capisce chi è Rosario, vede i pacchetti con i prezzi e gli scrive su WhatsApp. Ogni sezione deve avvicinare a quel bottone.

## Colors

Palette presa dal logo. Tre ruoli, nient'altro.

- **Nero (#0A0A0B):** sfondo della pagina. È lo "spazio bianco" del sito.
- **Grafite (#141518 / #1C1E22):** superfici di card, pacchetti e FAQ. Servono due soli livelli di profondità.
- **Argento (#C9D1D9):** colore secondario. Eyebrow, toggle attivi, chip "Risparmi", link, icone.
- **Rosso logo (#E3161B):** l'unico colore d'azione. Bottoni WhatsApp, maniglia del prima/dopo, barre e tagli grafici, bordo del pacchetto in evidenza.
- **Bianco ghiaccio (#F2F4F7):** testo principale. Grigio (#9BA3AE) per il testo secondario.

**Regole di contrasto (vincolanti):**
- Il rosso su nero è circa 4:1: **mai testo rosso sotto i 24px**. Il rosso è per bottoni, elementi grafici e numeri grandi.
- Sui bottoni rossi il testo è sempre **bianco** (4,8:1).
- Il testo piccolo su sfondo scuro è bianco ghiaccio, grigio o argento.
- Il rosso non deve superare il ~5% della superficie visibile di ogni schermata. Se c'è rosso ovunque, non c'è più gerarchia.

> Confermati dal logo SVG definitivo (`materiali/logo/logo-r-colori.svg`): rosso #E3161B, argento #C9D1D9.

## Typography

- **Anton** per titoli, prezzi e numeri, **sempre maiuscolo**. Condensato e atletico, dialoga con il "PERSONAL TRAINER" del logo.
- **Inter** per tutto il resto: testi, descrizioni dei pacchetti, FAQ, etichette.
- **label-wide** (Inter 600, tracking 0.3em, maiuscolo) richiama la scritta spaziata del logo. Si usa per eyebrow, etichette dei numeri e "PRIMA / DOPO".
- Le dimensioni dei titoli sono **fluide** (`clamp`) e crescono senza salti dal telefono al desktop. L'hero arriva a 136px su schermi grandi.
- Anton mai per paragrafi. Inter mai per titoli di sezione.
- Righe di testo lunghe al massimo 65 caratteri.

## Layout

Mobile-first: si progetta a 375px e poi si allarga. Colonna centrale di 1200px al massimo, margini laterali fluidi (minimo 16px).

Ordine della home (dettagliato nel documento di progetto):

1. **Hero:** foto di Rosario a tutta altezza, nome in `display`, sottotitolo "Personal Trainer · Sant'Antimo", CTA WhatsApp, barra rossa diagonale.
2. **Chi sono:** foto + storia breve + 3 numeri (`stat`): laurea, anni da calciatore agonista, certificazioni.
3. **Il percorso:** i 5 step (anamnesi → programma → sessioni 1-to-1 → 4° allenamento → nutrizionista) come timeline verticale.
4. **Trasformazioni:** griglia di slider prima/dopo.
5. **Pacchetti:** tab Singolo / Coppia / Coaching, toggle 2x-3x e Mensile-3 mesi, CTA WhatsApp con messaggio precompilato.
6. **Certificazioni:** griglia di `cert-badge`; al clic si apre la scansione dell'attestato.
7. **FAQ:** fisarmonica.
8. **Contatti:** grande CTA WhatsApp finale, palestra con link a Maps, social.
9. **Footer:** logo, link privacy/cookie, social.

Sezioni separate da `section-y` (80–160px). Su mobile tutto va in una colonna; i pacchetti diventano una lista verticale, non un carosello.

## Shapes & Signature

Il linguaggio visivo viene dal logo: **angoli netti e diagonali**.

- **Raggio zero** ovunque. Uniche eccezioni con `full`: il bottone WhatsApp flottante e la maniglia del prima/dopo.
- **Angolo tagliato** (`corner-cut`, 14px a 45°) in alto a destra su bottoni primari e card dei pacchetti. È la firma del sito: va usato solo lì.
- **Barra rossa a 45°:** compare nell'hero e come marker dell'eyebrow. Ricorda la gamba rossa della R.
- **Bordi di sezione diagonali** a 4° (un taglio a 45° su tutta la larghezza mangerebbe lo schermo), al massimo **3 per pagina**: in uscita dall'hero, in ingresso ai pacchetti, in ingresso ai contatti.
- Niente ombre. La profondità viene da foto, superfici grafite e bordi da 1px.

## Motion

Stack: **GSAP + ScrollTrigger** per le animazioni allo scroll, **Lenis** per lo scroll morbido. Un solo sistema, niente miscugli.

Animazioni firma:

1. **Entrata dell'hero:** la barra rossa si "disegna" in diagonale (clip-path), le righe del titolo salgono da una maschera con `stagger`, la foto passa da scala 1.08 a 1.
2. **Rivelazione delle immagini:** maschera diagonale a 45° che scopre la foto quando entra nello schermo.
3. **Rivelazione dei testi:** titoli che salgono riga per riga (800ms, `ease-out`), paragrafi in dissolvenza con leggero movimento verso l'alto.
4. **Timeline del percorso:** una linea argento si riempie seguendo lo scroll e ogni step si accende quando la linea lo raggiunge.
5. **Numeri:** i `stat` contano da 0 al valore una sola volta, quando entrano nello schermo.
6. **Prezzi:** al cambio di toggle il prezzo scorre in verticale al nuovo valore (300ms) e il chip "Risparmi" appare.
7. **Prima/dopo:** trascinamento fluido della maniglia, con un piccolo "invito" automatico al primo ingresso.

Regole:
- Si animano solo `transform`, `opacity` e `clip-path`: mai larghezze, altezze o margini.
- Al massimo **un'animazione d'effetto per schermata**. Il resto sono rivelazioni discrete.
- Hover e feedback in `duration-fast` (150ms).
- Niente parallax sui testi e niente scroll "bloccato" per più di una schermata.
- **`prefers-reduced-motion`:** Lenis disattivato, nessuna rivelazione (contenuto visibile subito), contatori già al valore finale.
- Il contenuto deve essere **leggibile anche senza JavaScript**: le animazioni sono un miglioramento, non una condizione.
- Su mobile le animazioni sono più corte e leggere, mai scrub pesanti.

## Photography

- Solo **foto vere** di Rosario e dei suoi clienti, mai stock.
- Tono coerente con le foto esistenti: palestra scura, contrasto alto, luci fredde, punti rossi. Ogni foto riceve la stessa correzione colore leggera.
- Formati: hero 16:9 su desktop e 4:5 su mobile (taglio dedicato, non lo stesso ritagliato a caso), ritratti 4:5, prima/dopo 3:4.
- Prima/dopo: stessa inquadratura, stessa posa, stessa luce. Pubblicati **solo con consenso scritto** del cliente, viso oscurabile.
- Le foto si esportano in AVIF/WebP ridimensionate; nessuna sopra i 300KB.

## Voice & Copy

- Italiano, **col "tu"**, in prima persona: parla Rosario ("Ti seguo io in ogni allenamento").
- Frasi brevi e concrete: numeri, luoghi e prezzi veri.
- **Vietati** i cliché da AI e da fitness: "trasforma la tua vita", "rivoluzionario", "il miglior", "sblocca il tuo potenziale", "viaggio".
- Calore sì, emoji no nell'interfaccia. Il tono amichevole dei suoi messaggi resta nelle parole, non nei simboli.
- Ogni CTA dice cosa succede: "Scrivimi su WhatsApp", non "Scopri di più".
- Ogni bottone di un pacchetto apre WhatsApp con un messaggio precompilato, ad esempio: *"Ciao Rosario! Sono interessato al Percorso 1-to-1, 3 allenamenti a settimana, pacchetto 3 mesi."*

## Accessibility

- Contrasto minimo AA (4,5:1) per tutto il testo sotto i 24px.
- Focus visibile: contorno argento da 2px con 3px di distacco, su ogni elemento cliccabile.
- Aree tattili di almeno 44×44px.
- HTML semantico (un solo `h1`, sezioni con titolo), `alt` descrittivi su tutte le foto.
- Il bottone WhatsApp flottante non copre mai testo o CTA nelle ultime righe della pagina.

## Do's and Don'ts

- ✅ Usa il rosso solo per l'azione e per i segni grafici del logo.
- ✅ Tieni sempre a portata una CTA WhatsApp (nav su desktop, bottone flottante su mobile).
- ✅ Mostra i prezzi veri e chiari, con il risparmio dei pacchetti da 3 mesi.
- ✅ Ricava ogni diagonale dall'angolo del logo.
- ❌ Niente gradienti, neon, glow o glassmorphism (unica eccezione: il blur della nav allo scroll).
- ❌ Niente angoli arrotondati su card, bottoni o immagini.
- ❌ Niente icone decorative generiche "a caso" accanto a ogni titolo.
- ❌ Niente sezioni riempitive (loghi finti, numeri inventati, testimonianze non reali).
- ❌ Mai testo piccolo in rosso. Mai paragrafi in Anton.

## Open Items

- CTA principale: "Scrivimi su WhatsApp" (provvisoria). Se Rosario offre una prova gratuita, diventa "Prenota la tua prova gratuita".
- Pacchetto "Il più scelto": provvisoriamente Percorso 1-to-1, 3x/settimana, 3 mesi.
