# Wavelength Technology Centre — Frontend Architecture

Status: **architecture finalized, no UI built yet.** This document is the single source of truth for how the codebase is organized and why. Every folder listed below already exists in the repo with its own `README.md` explaining its purpose in place.

Runtime note: this project is on **Next.js 16.2.10**, not 15. The one structurally relevant breaking change: `middleware.ts` is deprecated and renamed **`proxy.ts`**. When edge-level logic is needed later (auth gate for a future dashboard, geo-based redirects, A/B routing), create `proxy.ts` at the project root — not `middleware.ts`.

---

## 1. Full Folder Tree

```
my-app/
├── app/
│   ├── (marketing)/                     route group — every public page, isolated root layout slot
│   │   ├── about/
│   │   ├── services/
│   │   │   └── [slug]/
│   │   ├── industries/
│   │   │   └── [slug]/
│   │   ├── news/
│   │   │   └── [slug]/
│   │   ├── careers/
│   │   │   └── [slug]/
│   │   ├── contact/
│   │   ├── partners/
│   │   ├── technology/
│   │   ├── case-studies/
│   │   │   └── [slug]/
│   │   ├── privacy-policy/
│   │   └── terms/
│   ├── api/
│   │   └── contact/                     route handler, not a page
│   ├── layout.tsx                       existing root layout (html/body)
│   ├── page.tsx                         existing root page
│   └── globals.css                      existing
│
├── components/                          pure presentation, zero business logic
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── cards/
│   ├── buttons/
│   ├── typography/
│   ├── animations/
│   ├── ui/
│   ├── forms/
│   ├── footer/
│   └── common/
│
├── features/                            business logic, one folder per domain
│   ├── home/       {components,hooks,types,constants,utils}
│   ├── about/       {components,hooks,types,constants,utils}
│   ├── services/    {components,hooks,types,constants,utils}
│   ├── industries/  {components,hooks,types,constants,utils}
│   ├── news/        {components,hooks,types,constants,utils}
│   ├── careers/     {components,hooks,types,constants,utils}
│   └── contact/     {components,hooks,types,constants,utils}
│
├── lib/                                  framework/library integration layer
│   ├── animations/
│   ├── helpers/
│   ├── seo/
│   ├── constants/
│   ├── utils/
│   ├── hooks/
│   ├── providers/
│   └── motion/
│
├── styles/
│   ├── globals/
│   ├── animations/
│   ├── utilities/
│   ├── variables/
│   └── tailwind/
│
├── public/
│   ├── images/
│   ├── videos/
│   ├── icons/
│   ├── logos/
│   ├── illustrations/
│   ├── models/
│   ├── fonts/
│   └── lottie/
│
├── content/                              future CMS-ready structured content
│   ├── services/
│   ├── news/
│   ├── industries/
│   └── team/
│
├── types/                                global/shared TypeScript types
│
├── config/
│   ├── navigation/
│   ├── site/
│   ├── seo/
│   ├── social/
│   └── theme/
│
├── data/                                 temporary static JSON, pre-CMS
│   ├── services/
│   ├── news/
│   ├── industries/
│   ├── team/
│   └── careers/
│
├── constants/                            app-wide, dependency-free constants
├── hooks/                                global reusable hooks, no library dependency
├── context/                              raw React Context definitions
├── store/                                reserved for future global state (e.g. Zustand)
├── services/
│   ├── api/                              generic typed fetch client
│   └── cms/                              reserved for future Sanity client + queries
├── utils/                                framework-agnostic pure helper functions
│
├── ARCHITECTURE.md                       this file
├── AGENTS.md / CLAUDE.md                 existing agent instructions
├── tsconfig.json                         path aliases configured, see §4
├── next.config.ts
└── package.json
```

Every folder above contains a `README.md` explaining, in place: why it exists, what belongs in it, and when to use it. That is the authoritative per-folder reference — this document is the map, the `README.md` files are the legend.

### Why `not-found` and `404` aren't a folder

The brief asked for a `404` route folder. Next.js's actual convention is a **file**, `app/not-found.tsx`, at the segment level it should apply to — not a route folder. Creating a `404/` folder would silently do nothing (it'd just be a literal `/404` page, not the framework's not-found boundary). Left uncreated on purpose; add `app/(marketing)/not-found.tsx` when UI work starts.

### Why one route group and not several yet

Only `(marketing)` was created. Adding empty `(dashboard)` or `(auth)` groups now would be speculative — they're mentioned here as the intended pattern so the *next* section of the site (client portal, careers-application flow) gets its own route group and root layout without moving existing routes, not created as placeholders today.

---

## 2. Design Boundaries (read this before adding a file anywhere)

The architecture only works if these boundaries are respected. Each is enforced by convention, not tooling — treat them as load-bearing.

| Layer | Owns | Must not contain |
|---|---|---|
| `components/` | Presentation, reusable across ≥2 features | Data fetching, business rules, feature-specific copy |
| `features/*` | One business domain's composition + local logic | Anything a second feature needs (promote it to `components/`, `hooks/`, or `lib/` instead) |
| `lib/` | Glue between the app and a named external library (GSAP, Lenis, Framer Motion, next-themes) | Business logic, page content |
| `utils/` | Pure functions, zero imports outside the language/stdlib | Any import from React, Next.js, or a UI/animation library |
| `hooks/` | Generic browser/UI hooks, zero library dependency | Anything wrapping Lenis/GSAP/Framer Motion — that's `lib/hooks/` |
| `constants/` | Fixed values an engineer changes | Content a non-engineer might edit — that's `config/` |
| `config/` | Content-adjacent, structurally stable data (nav tree, SEO defaults, site identity) | Component logic |
| `context/` | One raw `React.createContext` + `Provider` per file | Composition of multiple providers — that's `lib/providers/` |
| `data/` | Temporary static JSON standing in for CMS collections | Anything hand-authored as prose — that's `content/` |
| `content/` | MDX/JSON structured content mirroring the future Sanity schema | Numbers-only config — that's `data/` or `config/` |

The two duplicate-sounding pairs are intentional, not redundant:

- **`utils/` vs `lib/utils/`** — `utils/` is dependency-free and safely importable from any layer without circular-import risk. `lib/utils/` is allowed to import `clsx`, `tailwind-merge`, etc. (`cn()` lives here).
- **`hooks/` vs `lib/hooks/`** — `hooks/` has no named library dependency (`useMediaQuery`, `useDebounce`). `lib/hooks/` wraps a specific one (`useLenis`, `useGsapContext`).

---

## 3. Recommended npm Packages

Not yet installed — listed here as the architecture's dependency plan. Install when UI work begins.

**Core (already present):** `next@16.2.10`, `react@19`, `react-dom@19`, `typescript`, `tailwindcss@4`

**To add:**

| Package | Purpose | Notes |
|---|---|---|
| `framer-motion` | Component-level animation, page transitions, gesture interactions | Primary animation library per the brief |
| `gsap` | Timeline-based/scroll-triggered animation | Use only where Framer Motion isn't the right tool (complex scroll-linked timelines) — per brief, "only where required" |
| `@gsap/react` | `useGSAP()` hook — correct cleanup in React's strict-mode/concurrent rendering | Prevents the classic GSAP-in-React memory-leak/duplicate-timeline bugs |
| `lenis` | Smooth scrolling | Wire through `lib/providers` + `lib/hooks/useLenis` |
| `lucide-react` | Icon set | Covers generic UI icons; brand/custom icons stay in `public/icons` |
| `clsx` | Conditional className composition | Paired with `tailwind-merge` inside `lib/utils/cn.ts` |
| `tailwind-merge` | Resolves conflicting Tailwind classes | Same as above |
| `next-themes` | Dark mode | Wraps into `lib/providers`; token source is `styles/variables` + `config/theme` |
| `zod` | Runtime schema validation | Contact form, and any future CMS/API payload validation |
| `react-hook-form` | Form state management | Pairs with `components/forms` primitives + `zod` resolver |
| `sharp` | Image optimization | Next.js uses this automatically server-side once installed |
| `@sanity/client` + `next-sanity` | Future CMS integration | Install when `services/cms` goes from reserved to real |

Explicitly **not** recommended yet: a state-management library for `store/` — don't add one until a real cross-cutting state need shows up (React state + Context should cover the marketing site for a long time).

---

## 4. Import Alias Structure

`tsconfig.json` now maps every top-level architectural folder, not just the default `@/*` catch-all:

```json
"paths": {
  "@/*": ["./*"],
  "@/components/*": ["./components/*"],
  "@/features/*": ["./features/*"],
  "@/lib/*": ["./lib/*"],
  "@/styles/*": ["./styles/*"],
  "@/content/*": ["./content/*"],
  "@/types/*": ["./types/*"],
  "@/config/*": ["./config/*"],
  "@/data/*": ["./data/*"],
  "@/constants/*": ["./constants/*"],
  "@/hooks/*": ["./hooks/*"],
  "@/context/*": ["./context/*"],
  "@/store/*": ["./store/*"],
  "@/services/*": ["./services/*"],
  "@/utils/*": ["./utils/*"]
}
```

Example imports once code exists:

```ts
import { Button } from "@/components/buttons/Button"
import { useServiceList } from "@/features/services/hooks/useServiceList"
import { cn } from "@/lib/utils/cn"
import { siteConfig } from "@/config/site"
```

The scoped aliases exist so an import path itself signals which architectural layer a module belongs to — a reviewer can tell `@/lib/hooks/useLenis` is a library-integration hook and `@/hooks/useDebounce` is a generic one without opening either file.

---

## 5. Best Practices for This Project

- **One-way dependency flow:** `app` → `features` → `components`/`lib`/`hooks`/`utils`. Nothing in `components/`, `lib/`, `hooks/`, or `utils/` may import from `features/` or `app/`. This is what makes the lower layers reusable and keeps future refactors local.
- **Server Components by default.** Only mark a component `"use client"` when it needs interactivity, browser APIs, or a hook that requires it (animation components, forms). Keep the client boundary as low in the tree as possible.
- **Data access goes through one seam per resource.** Feature hooks call `services/api` (or, once integrated, `services/cms`) — never `fetch()` directly inside a component. This is what lets `data/*` JSON get swapped for Sanity later by changing one file per resource.
- **All motion configuration is centralized in `lib/motion`.** No inline GSAP eases or Framer Motion transition objects scattered through components — reference the shared presets so the site's motion language stays consistent as more people touch the codebase.
- **`generateMetadata` always goes through `lib/seo`.** No hand-rolled metadata objects per page — this is what keeps SEO consistent across dozens of routes over years of additions.
- **Route groups define layout boundaries, not folders of convenience.** Don't create a new `(group)` unless it needs a genuinely different root layout.
- **Feature folders are the default home for new code.** Only promote something to `components/`, `hooks/`, `lib/`, or `utils/` once a second feature actually needs it — resist promoting speculatively.
- **No default exports for anything except Next.js special files** (`page.tsx`, `layout.tsx`, etc., which require them). Named exports everywhere else — better refactor tooling, better grep-ability at enterprise scale.
- **Content-shape-first for CMS readiness.** When populating `content/` and `data/`, shape the JSON/MDX exactly like the intended Sanity schema. The CMS migration should be a data-source swap behind `services/cms`, not a data-modeling rewrite.

---

## 6. Architecture Decisions and Why

**Route group (`(marketing)`) instead of flat `app/`.** Reserves a clean seam for a second root layout — client dashboard, careers portal with auth — without ever having to move an existing route or break a URL. Cost today: one extra folder level. Benefit later: zero-downtime structural expansion.

**`features/` separated from `components/`.** The brief explicitly requires separating business logic from UI, and this is what makes a component genuinely reusable: if `components/cards/ServiceCard` can't be dropped into a different project unchanged, it's not a UI primitive, it's feature logic misplaced. This split is also what keeps a future dashboard's code from ever tangling with the marketing site's code — they'd both consume `components/` and `lib/`, but never each other's `features/`.

**Deliberate near-duplicate folders (`utils/` vs `lib/utils/`, `hooks/` vs `lib/hooks/`, `constants/` vs `lib/constants/` vs `config/`).** Called out explicitly in §2 because without a documented rule these pairs drift into duplicate, inconsistent implementations of the same helper. The rule is dependency-boundary-based (does it import a named library or not), which is mechanical enough to actually hold up over years of contributors.

**`content/` and `data/` kept separate from day one.** `data/` is disposable — every file in it is expected to be deleted once Sanity is wired up. `content/` is meant to survive the migration as the shape reference. Merging them would make the eventual CMS cutover a guessing game about which files are safe to delete.

**`store/` created empty, no state library chosen.** Enterprise marketing sites rarely need global client state beyond what Context handles. Committing to Redux/Zustand/Jotai now would be exactly the kind of speculative complexity the brief's own "scalable for years" goal argues against — better to add it the day a real need appears, into a folder that already exists.

**GSAP scoped to `lib/motion` + `components/animations`, not spread through feature code.** The brief says "GSAP only where required" — centralizing it is what makes that constraint enforceable. A reviewer can grep two folders to see the entire GSAP surface area of the site.

**`services/` layer created now, even though there's no backend yet.** `app/api/contact` is the only real endpoint today, but every feature hook is written to call through `services/api` regardless. This means the day a real backend or Sanity exists, feature code doesn't change — only `services/*` does.

**Multilingual and dark-mode readiness were architectural, not structural, decisions.** No `[locale]` segment or `i18n/` folder was added preemptively — Next.js's routing-based i18n would change every route path in `app/(marketing)`, which is exactly the kind of restructuring the brief asks to avoid needing *later*, so it's flagged here rather than half-implemented now. When multilingual support is greenlit, the move is: wrap `app/(marketing)` in `app/[locale]/(marketing)`, and `config/site` + `lib/seo` already have the right shape to become locale-aware with additive changes. Dark mode has no such caveat — `styles/variables`, `config/theme`, and `next-themes` in `lib/providers` are enough to support it with zero restructuring whenever it's built.

---

## 7. What Was Deliberately Not Done

- No components, pages, or placeholder UI written — every route folder contains only a `README.md`, no `page.tsx`.
- No packages installed yet — §3 is a plan, not a completed `npm install`.
- No `proxy.ts`, no auth, no i18n routing — flagged as future work in §6, not stubbed out.
- Existing `app/layout.tsx`, `app/page.tsx`, `app/globals.css` left untouched.

Architecture is ready for review. Nothing below `app/(marketing)` will need to move when the dashboard, multilingual support, or CMS integration land.
