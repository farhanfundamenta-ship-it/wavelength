# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mixed audience, roughly equal weight:

- **Marine/industrial buyers** — engineering leads, procurement, and operations decision-makers at maritime and industrial companies, evaluating decarbonisation-technology vendors for vessels or plants that must keep running for decades.
- **Prospective licensed fabrication partners / investors** — evaluating Wavelength as a business and delivery network, not as a direct technology buyer.

## Product Purpose

Wavelength Technology Centre designs and engineers decarbonisation technology for the marine and industrial sectors — turning proven components into practical, scalable clean-energy systems. Success is a buyer or partner trusting the engineering enough to start a conversation (contact, readiness assessment) or a partner application.

## Positioning

Systems-engineering-led, proven-components approach: Wavelength builds on components with an operational track record rather than unproven lab science, does the systems engineering in-house, and delivers through a network of licensed fabrication partners close to where clients operate. The claim a competitor can't casually copy is the combination of in-house systems engineering + a licensed fabrication partner network for local delivery.

## Operating Context

- Tools/features live on the site itself: a fuel calculator (`/fuel-calculator`) and a readiness assessment (`/readiness-assessment`) — self-serve evaluation tools for prospective buyers.
- Marketing/informational routes: home, about, services, industries, technology, case-studies, news, partners, careers, contact, resources.
- Legal routes present: disclaimer, privacy-policy, terms.
- `/askai` redirects to an "Ask AI About Fundamenta" section on `/about` — a set of deep-links (ChatGPT/Claude/Gemini) with a copy-to-clipboard structured prompt, for visitors who'd rather ask an AI assistant about the company than read the site. Note: this section's copy currently says "Fundamenta," not "Wavelength" — flagged as an inconsistency, not confirmed which name is canonical going forward.

## Capabilities and Constraints

- Next.js App Router site (Next.js 16.2.10, React 19, Tailwind v4, Framer Motion).
- Content is componentized per route under `features/<route>/components`, with shared primitives in `components/`.
- No CMS observed — copy lives in TSX/data files (e.g. `data/team/team.ts`, `config/site/site.ts`).
- Undecided: whether "Wavelength" or "Fundamenta" is the canonical brand name going forward (see Operating Context note above).

## Brand Commitments

- Name: Wavelength Technology Centre (short name "Wavelength"), per `config/site/site.ts`. This is placeholder/example data (`wavelength.example` domain, `mail@wavelength.example`) — not confirmed as final production brand details.
- Tagline: "Engineering the energy transition for maritime and industry."
- Visual language observed on About page: dark "ink" tones for intro/values sections, "paper" tone for story/team sections, accent green, hexagon-clipped icon badges, uppercase tracked eyebrow labels with a small accent dot, scroll-linked reveal animations.

## Evidence on Hand

- About page currently shows illustrative stats (40% avg carbon intensity cut, 12 programmes engineered, 6 fabrication partners) and team bios — **confirmed placeholders, not real figures**. Do not cite or extend these as fact in future work; flag them as needing real data before ship.
- No real case studies, testimonials, or press confirmed on hand yet, despite `/case-studies` and `/news` routes existing.

## Product Principles

1. Engineering credibility over sales pitch — copy and structure should read as substantive/technical, not promotional fluff (matches "Engineering-led," "Safety first" stated values).
2. Design for permanence — the product itself is framed as built for decades-long operating contexts (vessels, plants); design work should avoid trend-chasing at the expense of that credibility.
3. Two audiences, one site — buyer-facing technical trust and partner/investor-facing business trust both need to land on the same pages; don't optimize purely for one at the expense of the other.
4. Placeholder data must stay legible as placeholder until replaced with real evidence.

## Accessibility & Inclusion

No product-specific accessibility requirement established yet.
