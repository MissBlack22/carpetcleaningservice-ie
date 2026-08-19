# Content Quality Checklist — carpetcleaningservice.ie

Applied to every page built (79 total). This is the standard every location page was held to before being considered done.

## The core question, per page

Would a person in this area find this useful? Does it answer their questions, explain the service, explain what affects pricing, show how to contact us, provide useful local context, link to relevant services and nearby locations, and read as substantially different from other location pages?

## Hard rules enforced across the build (verified, not just instructed)

- **No invented prices.** Checked: zero specific price figures/ranges appear anywhere on the site. `/carpet-cleaning-prices-dublin/` explains cost *factors* only and routes to a free quote — deliberately diverging from the "publish real itemized pricing" recommendation in `competitor-research.md` §8, because we do not have verified real pricing for this business and inventing numbers to compete would violate the brief's explicit ban.
- **No invented reviews or testimonials.** Zero fake review quotes, star ratings, or reviewer names anywhere. The homepage's reviews section uses an honest "reviews being added" placeholder state instead of a populated block.
- **No invented statistics, studies, or certifications.** Guide content (dust mites, allergens, deposit disputes, etc.) is framed as general, well-established household knowledge, never as a cited study or invented percentage.
- **No fabricated customers, completed jobs, or named clients.** Unlike a competitor page found in research (which named real client businesses on its Ballsbridge page), our location pages use only well-known, public, verifiable area character (e.g. Ballsbridge's embassies, Clontarf's seafront) — never an invented job anecdote.
- **No fake physical address.** This is a service-area business; `/contact/` and `/about/` say so explicitly rather than inventing a street address.

## Location page differentiation (the single biggest risk this project's own research flagged)

Every location page is built from a per-area record in `location-database.md` — housing stock, likely customer type, and a genuine unique angle — not a find-and-replace of the area name into shared boilerplate (the exact failure mode documented in `current-site-audit.md` and in three live competitors per `competitor-research.md` §2). Examples of what actually differs page to page:
- Terenure: long-tenure homeowners protecting a long-term investment, garden/pet ownership.
- Rathmines: high rental turnover, communal stair carpets in subdivided houses, EOT-heavy.
- Rathgar: the deliberate opposite of Rathmines — affluent, long owner-occupied, preventive-care framing.
- Clontarf: coastal salt-air/grit angle, genuinely different soiling pattern from inland areas.
- Ballymun: newer housing stock with hard flooring as standard, so the page reframes around rugs/upholstery/mattresses rather than assuming a whole-house carpet job.
- Walkinstown, Donnycarney, Killester and a few others: honestly stated as connector suburbs without a strong standalone identity, rather than inventing one.

Tier 1 pages run ~900–1600 words with five distinct per-service sections; Tier 2 pages run ~500–800 words with a single compact combined-service section — length matched to genuine content depth available per area, not padded to hit a word count.

## Titles, meta, headings

- No repeated "Keyword | Keyword | Keyword" title pattern anywhere (the exact anti-pattern the brief called out) — every title reads as a natural phrase.
- One H1 per page, verified programmatically (0 violations across 79 pages).
- FAQ content is genuine, area- or topic-specific where possible, never a generic block copy-pasted between pages verbatim.

## Tone

Natural Irish English throughout, written as an experienced Dublin trade business would write — no AI-marketing-voice filler ("unlock," "elevate," "game-changing"), no keyword stuffing, no purple prose. Guides give honest, sometimes business-against-its-own-interest advice (e.g. "does my carpet need replacing, not cleaning" tells customers when *not* to book a clean).

## Known gap, honestly stated

Real photography, real reviews, and real pricing do not exist yet. The site is built so all three can be added without restructuring (see `technical-seo-checklist.md`'s "deliberately deferred" section and `READY-FOR-NETLIFY.md`) — but until they're supplied, this is a launch-ready skeleton with honest placeholders, not a finished, fully-proofed site.
