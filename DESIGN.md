---
name: Wavelength Technology Centre
description: Engineering the energy transition for maritime and industry.
colors:
  signal-green: "#6fcf43"
  signal-green-strong: "#58b332"
  signal-green-soft: "#dff3d3"
  signal-green-deep: "#3b7821"
  deep-hull-black: "#0a0f0c"
  deep-hull-black-2: "#10160f"
  deep-hull-black-3: "#171d18"
  hull-line-dark: "#232b25"
  paper: "#ffffff"
  mist: "#f4f6f4"
  line: "#e3e8e3"
  heading-ink: "#0d1410"
  body-ink: "#576057"
  body-ink-dark: "#b7c2b5"
  muted-ink-dark: "#7c8a7a"
typography:
  display-hero:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "clamp(3.5rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.97
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "clamp(1.875rem, 3vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.2em"
  label-micro:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.15em"
rounded:
  sm: "2px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section-y: "clamp(80px, 9vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-green}"
    textColor: "{colors.deep-hull-black}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-green-strong}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.heading-ink}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.signal-green-soft}"
  card-flat:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.heading-ink}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  badge-hex:
    backgroundColor: "{colors.signal-green-soft}"
    textColor: "{colors.signal-green-strong}"
    size: "48px"
---

# Design System: Wavelength Technology Centre

## Overview

**Creative North Star: "The Engineering Ledger"**

Wavelength's interface reads like a technical record of real programmes, not a marketing brochure. It is editorial and documentary: dense horizontal rules, asymmetric column splits, and numbers presented as proof (stat rows, metrics) carry more weight than illustration or ornament. The system trusts restraint — a single accent color, a single typeface, flat surfaces at rest — because the credibility of the work being described (systems that run vessels and plants for decades) would be undercut by a visually loud interface.

Density is moderate-to-generous: sections breathe (`clamp(80px, 9vw, 112px)` vertical rhythm), but within a section, content sits close and rule-divided rather than card-scattered. Depth is used sparingly and only as a state signal — see the Dock Rule in Elevation & Depth.

No visual anti-reference has been confirmed yet, but the product principle "engineering-led, not a sales pitch" (PRODUCT.md) implies avoiding gradient-heavy, illustration-heavy, generic-SaaS marketing polish by default; treat that as directional guidance, not a confirmed rule.

**Key Characteristics:**
- Editorial ledger structure: rules, splits, and stat rows over decorative cards
- One accent color (Signal Green), used sparingly as a functional highlight
- Flat surfaces at rest; shadow appears only when something detaches from the page (the Dock Rule)
- Single typeface (Geist Sans) doing all display, body, and label work
- Hexagon-clipped icon badges as the one recurring signature shape

## Colors

The palette is deliberately narrow: one accent, one dark neutral family, one light neutral family. Nothing else carries brand weight.

### Primary
- **Signal Green** (#6fcf43): the one accent. Functions like a status light or a highlighted reading, not decoration — icon-badge fills, primary button backgrounds, CTA underlines, the `::selection` color, eyebrow-label dots, focus/hover borders. Confirmed rule: used sparingly, never as a large background fill.
- **Signal Green Strong** (#58b332): hover/active state for Signal Green surfaces (button hover, focused link).
- **Signal Green Soft** (#dff3d3): the palest tint — icon-badge resting background before hover, soft highlight fills.
- **Signal Green Deep** (#3b7821): the on-light-text variant. `Signal Green Strong` (#58b332) measures only 2.66:1 on Paper — fails WCAG AA even at large-text size, and even a lighter deep candidate fell short (4.36:1) on Mist. Signal Green Deep clears 4.5:1 on every light surface in the system (5.39:1 Paper, 4.96:1 Mist, 4.60:1 Signal Green Soft) — use it any time the accent colors *text* on a light surface; Signal Green / Signal Green Strong stay reserved for icon fills, buttons, and text on dark surfaces, where they already clear 9.8:1.

### Neutral
- **Deep Hull Black** (#0a0f0c): the dark backdrop of engineered interiors — engine rooms, hulls — not a generic "dark mode" black. Used for `ink`-tone sections (About intro/values, Footer, floating-header dark state).
- **Deep Hull Black 2 / 3** (#10160f / #171d18): stepped-up dark surfaces for layered dark sections and dark cards sitting on top of the base ink.
- **Hull Line Dark** (#232b25): borders and dividers on dark surfaces.
- **Paper** (#ffffff): the light base surface.
- **Mist** (#f4f6f4): the secondary light surface, one step off pure white, for alternating section rhythm.
- **Line** (#e3e8e3): borders and dividers on light surfaces.
- **Heading Ink** (#0d1410): heading text on light surfaces.
- **Body Ink** (#576057): body text on light surfaces.
- **Body Ink Dark** (#b7c2b5): body text on dark surfaces.
- **Muted Ink Dark** (#7c8a7a): least-emphasis text on dark surfaces (footer column labels).

### Named Rules
**The One Signal Rule.** Signal Green appears on a small minority of any given screen — icon fills, CTAs, dividers, dots. Its rarity is what makes it read as a signal rather than a brand color wash.

## Typography

**Display Font:** Geist Sans (with ui-sans-serif, system-ui fallback)
**Body Font:** Geist Sans (same family)
**Label Font:** Geist Sans, uppercase, wide-tracked

**Character:** One typeface carries the entire system — headings, body copy, and labels are differentiated by weight, tracking, and case, not by swapping faces. This reinforces the technical/instrument-panel feel: no decorative display face competing for attention.

### Hierarchy
- **Display Hero** (700 weight, `clamp(3.5rem, 6vw, 5.5rem)` / `text-[3.5rem] sm:text-7xl lg:text-[5.5rem]`, line-height 0.97, tracking -0.01em): the single largest step on the site — the Home hero H1 only. Heavier weight and tighter leading than every other heading; used exactly once per page.
- **Display** (600 weight, `clamp(1.875rem, 3vw, 3.75rem)` / text-3xl→text-[3.75rem] range, line-height ~1.02–1.03, tracking -0.01em): section H2s. Bold, tight leading, never italic.
- **Title** (600 weight, text-lg–text-2xl, tight tracking): card and component headings (ServiceCard/IndustryCard titles at the small end, PremiumHighlightCard's `text-[1.75rem]` bento-card headline at the large end).
- **Body** (400 weight, text-sm–text-lg, line-height 1.6): paragraphs. Long-form copy caps around max-w-md/max-w-xl containers rather than an explicit ch value.
- **Label** (500 weight, text-xs, letter-spacing 0.15em–0.32em, uppercase): eyebrow labels ("About", "AI / Discover"), nav items, footer column headers — always paired with a small Signal Green dot when used as a section eyebrow.
- **Label Micro** (500 weight, `11px`, letter-spacing 0.15em, uppercase): the smallest step, reserved for photo-caption chips overlaid on images (`figcaption` pills) and dense stat sub-labels (PremiumHighlightCard `statLabel`). Never used for anything interactive or load-bearing.
- **Decorative glyph (exempt from the scale):** EngineeringConfidence's oversized quotation mark (`text-[10rem] md:text-[14rem]`) is a single decorative background glyph behind a pull-quote, not a text-hierarchy step — it carries no content and should stay out of the ramp above rather than be normalized into a "step."

### Named Rules
**The One Face Rule.** Every role — display, body, label — is Geist Sans. A second family is not introduced without an explicit product decision (none confirmed as of this writing).

## Layout

Container: `max-w-7xl`, horizontal padding `px-6` mobile / `px-10` desktop (`components/layout/Container.tsx`). Section vertical rhythm: `py-20` mobile / `py-28` desktop (~80px/112px), via `components/layout/Section.tsx`, with four background "tone" states (`paper`, `mist`, `ink`, `ink-2`) that alternate down a page to create rhythm without borders between every section.

Grids favor **asymmetric editorial splits** over symmetric card grids where the content allows it (About page's Story section: 6/6 column split with a border between, image on one side, copy on the other) — this is the clearest expression of the Engineering Ledger north star. Card grids (ServiceCard, IndustryCard, Values) use `sm:grid-cols-2 lg:grid-cols-4` responsive stepping.

Stat/metric rows use `divide-x`/`divide-y` rules instead of card boundaries — numbers presented as a ledger line, not a dashboard tile.

## Elevation & Depth

Hybrid, but heavily weighted toward flat. Surfaces are flat at rest — cards are a border only (ServiceCard: `border border-line`), no ambient shadow.

**The Dock Rule.** A shadow appears only when something detaches from the base page layer: the Header once it un-docks and starts floating on scroll (`shadow-[0_12px_40px_-12px_rgba(10,15,12,0.25)]`), an open nav dropdown (`shadow-2xl`), or the AskAI toast (`shadow-2xl shadow-black/40`). A shadow is a state signal — "this is no longer part of the document flow" — not a resting decoration. IndustryCard's `shadow-sm ring-1` is a pre-existing inconsistency against this rule, not a second pattern; new work should follow ServiceCard's flat treatment.

### Shadow Vocabulary
- **Floating-dock** (`box-shadow: 0 12px 40px -12px rgba(10,15,12,0.25)`): the un-docked Header only.
- **Overlay** (`shadow-2xl`, Tailwind default): open dropdowns, toasts — anything rendered above the page layer.

## Shapes

Two deliberate registers, no in-between:
- **Soft-technical**: `rounded-2xl` (16px) on cards, `rounded-full` on all buttons and avatar/social circles, `rounded-xl`/`rounded-lg` on nav dropdowns and list items.
- **Cut/instrument**: the hexagon clip-path (`.hex-clip`, `clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)`) on every icon badge — the one non-rounded, non-rectangular shape in the system, and the system's signature mark. It appears nowhere else; its exclusivity to icon badges is what makes it read as a mark rather than a texture.

## Components

Buttons, cards, and inputs all read **precise and functional** — no decorative flourish, confident but quiet, built to be used rather than admired.

### Buttons
- **Shape:** `rounded-full` (9999px) — every variant, no exceptions.
- **Primary (solid):** Signal Green background, Deep Hull Black text, `px-6 py-3`, `text-sm font-medium tracking-wide`. Hover → Signal Green Strong background.
- **Outline:** transparent background, Signal Green border, heading-ink text on light surfaces / white text on dark surfaces (`outline` vs `outline-light`). Hover → Signal Green Soft background (light) or `white/5` (dark).
- **Ghost:** no border, heading-ink or white text; hover → Signal Green text only.
- All variants may append an arrow icon (`Icon name="arrowRight"`) as a trailing affordance, never leading.

### Cards
- **Corner Style:** `rounded-2xl` (16px).
- **Background:** Paper (light) or `ink-3/40` (dark, e.g. About page value cards).
- **Shadow Strategy:** none at rest, per the Dock Rule. Dark value cards get a `hover:shadow-2xl shadow-black/20` only on hover.
- **Border:** `border border-line` (light) / `border-line-dark` (dark); border color, not shadow, is the primary resting differentiator.
- **Internal Padding:** 24px (`p-6`) small cards, up to 28px (`p-7`) for the About value cards.

### Inputs / Fields
- **Style:** bottom-border only (`border-b border-line`), transparent background, no full outline box — an understated, form-as-ledger-line treatment consistent with the north star.
- **Focus:** border color shifts to Signal Green Strong; no glow/ring.
- **Error:** border shifts to red-500 (the one non-palette color in the system, reserved for form validation).

### Navigation
- Uppercase, wide-tracked (`tracking-[0.15em]`) labels, `text-xs`. Two chrome states driven by scroll: transparent/white-on-dark before the Header docks, translucent white pill (`bg-white/80 backdrop-blur-xl`) with the Dock Rule shadow after. Dropdown panels are translucent + blurred, matching the docked/undocked chrome state.

### Icon Badge (signature component)
The hexagon-clipped badge (`.hex-clip`) is the one recurring custom shape in the system: a small (44–48px) hex containing a single-line icon, background Signal Green Soft → Signal Green on hover (light cards) or solid Deep Hull Black background with Signal Green icon (dark cards, footer mark). This is the closest thing the brand has to a logomark-adjacent motif and should not be reused for anything except icon containment.

## Do's and Don'ts

### Do:
- **Do** keep Signal Green to icon fills, CTAs, dividers, and dots — never a large background fill (The One Signal Rule).
- **Do** use the hexagon clip exclusively for icon badges; it is the system's one signature shape.
- **Do** reserve shadows for elements that detach from the page layer (floating header, dropdowns, toasts) — flat otherwise (The Dock Rule).
- **Do** use `rounded-full` for every button regardless of variant.
- **Do** prefer editorial rules/splits/stat-rows over decorative card grids when the content is a comparison or a claim of proof.

### Don't:
- **Don't** introduce a second typeface without an explicit product decision — the system is single-family by design (The One Face Rule).
- **Don't** add resting shadows to cards; if a card needs to stand out, use a border-color or background change, not elevation.
- **Don't** treat IndustryCard's `shadow-sm ring-1` as a pattern to extend — it's a pre-existing inconsistency against ServiceCard's flat treatment.
- **Don't** use gradients; none exist anywhere in the current system.
