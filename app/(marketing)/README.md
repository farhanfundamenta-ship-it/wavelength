# Marketing Route Group

Route group (parentheses are stripped from the URL) wrapping every public-facing page: home, about, services, industries, news, careers, contact, partners, technology, case studies, and the legal pages.

Why it exists: reserves room for a second root layout later — e.g. `app/(dashboard)` for a client portal, or `app/(auth)` for a careers-application flow — without moving a single existing route or changing any URL.

What belongs here: any route a public visitor can reach directly.

When to use: default location for new marketing pages. Do not put authenticated or internal-tool routes here — give those their own route group when the time comes.
