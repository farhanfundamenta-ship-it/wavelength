# Animation Wrapper Components

Thin, reusable wrapper components around Framer Motion / GSAP: Reveal, Parallax, Marquee, Counter, StaggerList. Components here own *how* something animates; they never own business logic.

Distinction from lib/motion: this folder holds components (JSX); lib/motion holds the raw animation config (variants, easing curves, ScrollTrigger setup) that these components consume.
