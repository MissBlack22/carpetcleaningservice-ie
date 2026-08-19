# Build Report — carpetcleaningservice.ie

Full autonomous build. This document summarizes what was audited, built, and changed, and what's left for you.

## UPDATE — real logo, real photos, real reviews, real contact info

Since the initial build below, you confirmed you own krystalklean.ie and spotless.ie and authorized using them as an internal source library, and sent the real logo file. Both were fully integrated — see `seo/source-assets-audit.md`, `seo/media-library.md`, `seo/review-migration.md`, `seo/pricing-review.md`, `seo/contact-information-audit.md`, and `seo/final-assets-audit.md` for complete detail. Headlines:

- **Real logo** now live on all 80 pages (header, footer, favicon) — processed from your file into black/white/favicon variants. Design section 2 below (bottle-green/putty/brass palette) is superseded for the logo itself; the rest of the site's color system is unchanged.
- **Site count is now 80 pages** — added `/gallery/`, a real before/after photo gallery (17 genuine work photos from your existing sites, de-duplicated and watermark-cropped).
- **17 real work photos** integrated: 5 wired directly into the homepage and carpet/upholstery/mattress service pages (replacing earlier AI-generated decorative images on those specific pages — rug cleaning still uses a generic AI image since no real rug photo existed on either source site), the rest cataloged and available in `assets/photos/business/`.
- **4 of 5 real, verbatim customer testimonials** now live on the homepage and 3 service pages (the 5th, about house clearance, was excluded as off-topic).
- **Real phone number (085 202 1222) and WhatsApp are now live site-wide** — confirmed working numbers from your existing business, not placeholders.
- **Critical finding from the audit**: spotless.ie no longer exists independently — it fully redirects to krystalklean.ie, and both are the same real business (Krystal Klean Express Limited). This resolves item 2 in "Remaining issues" below — it's not a competing property, it's your own other brand.
- **Still deliberately left as `TODO`**: email address (your existing one carries the old brand name — using it would repeat the exact "generic/mismatched email" weakness flagged in the original site audit) and opening hours (3 conflicting values existed across your source sites, so none was guessed). See `seo/contact-information-audit.md`.
- **Not published**: the pricing table found on your sites (likely 2–3 years stale — see `seo/pricing-review.md`), any specific "years in business" claim (3 conflicting figures existed), and 2 photos with old-brand watermarks too large to crop.

---

## Original build (below this line, superseded only where noted above)

## What was audited

- **Live domain**: `carpetcleaningservice.ie` currently returns NXDOMAIN — it isn't live. The only historical record is a single 2022 Wayback Machine capture, which showed the domain was previously running as a Google Sites doorway page branded "Krystal Klean Express" (a different business name), phone number in a Carlow/Kildare area code, zero structured data, four broken/duplicate `<h1>` tags, no contact form, no click-to-call, and a large network of thin satellite microsites. None of this was usable — see `seo/current-site-audit.md`. **This build is a genuine from-scratch rebuild, not a redesign.**
- **15 real Dublin carpet-cleaning SERP queries** researched live, with 6 competitors' actual pages fetched and analyzed in detail (titles, H1s, word counts, pricing, FAQs, a live DOM/schema inspection). Full findings in `seo/competitor-research.md`, including a verified live technical bug on a top competitor's site (canonical tag pointing to their homepage instead of itself on every location page) that this build deliberately avoids.

## What was built (79 pages)

- **1 homepage** + **8 Dublin-wide service pillars** (carpet, upholstery & sofa combined, mattress, rug, stain removal, pet stain/odour removal, commercial, end-of-tenancy) + **pricing page** + **FAQ hub**.
- **44 location pages** (26 full-depth Tier 1 + 18 lighter Tier 2), each written from a per-area research record (`seo/location-database.md`) covering real Dublin housing stock, character, and customer type — not a find-and-replace template. Benchmark pages (Terenure, Rathmines, Ranelagh, Ballsbridge, Clontarf) were built and self-audited first, per the brief, before scaling to the rest.
- **5 end-of-tenancy location spin-offs** (Rathmines, Portobello, Ranelagh, Drumcondra, Phibsborough) — the one service×location combination our own keyword research found genuinely justified a separate page, out of 58 possible areas.
- **14 informational guides**, each tied to a specific commercial page, no word-count padding — topics that would only inflate page count (carpet-fibre trivia, generic listicles) were explicitly rejected during research.
- **Locations hub, guides hub, about, contact, privacy, 404**.
- **10 required `/seo/` planning documents**: current-site-audit, competitor-research, keyword-research-raw, keyword-map, location-database, site-architecture, internal-linking-plan, content-strategy, technical-seo-checklist, content-quality-checklist, final-seo-audit.

## Key architecture decisions (and why they deviate from a literal reading of the brief)

1. **No separate `/sofa-cleaning-dublin/` page.** Research showed "sofa cleaning" and "upholstery cleaning" are the same buyer intent in different words — building both would violate the brief's own cannibalization-protection rule. One page, `/upholstery-cleaning-dublin/`, targets both terms.
2. **Only 5 of 58 areas got an end-of-tenancy spin-off page**, not all 58 — chosen conservatively, based on real rental-density reasoning, not applied indiscriminately.
3. **14 of 58 areas got no dedicated URL at all** (folded into a parent page as a named sub-area instead) — small/overlapping areas where a standalone page would be thin, duplicate-risk content. This can be revisited after real Search Console data comes in.
4. **No published prices anywhere on the site.** Competitor research found that publishing real itemized pricing is the single clearest way to beat the market-leading competitors — but we have no verified real pricing for this business, and the brief explicitly bans inventing prices. The pricing page explains cost *factors* instead and routes to a free-quote request. **This is the highest-value thing you can unlock post-launch** — see below.

## SEO / technical improvements

Full detail in `seo/technical-seo-checklist.md` and `seo/final-seo-audit.md`. Headlines:
- Self-referencing canonical, unique title, unique meta description, one H1, on every page — verified programmatically, zero violations across all 79 pages.
- Valid `LocalBusiness`, `Service`, `BreadcrumbList`, and `FAQPage` (where a genuine FAQ exists) JSON-LD on every relevant page — checked for both JSON validity and exact match against visible content.
- `sitemap.xml` generated programmatically from every page's own canonical tag (not hand-maintained, so it can't silently drift), `robots.txt` in place pointing to it.
- Zero orphan pages and zero broken internal links across the whole site — checked with a full link-graph crawl (`scripts/qa-orphan-check.js`), not sampling.
- Analytics-ready: `js/main.js` already pushes `phone_click`, `whatsapp_click`, and `quote_request_submit` events to `window.dataLayer` for GA4/GTM to pick up once you have a tracking ID.

## Design & UX

- Deliberately avoids the generic cyan/teal "cleaning brand" look and the current AI-design defaults (cream+terracotta, or black+neon). Palette is a deep bottle-green + warm putty neutral + muted brass accent; headline type is Fraunces (a characterful serif), body/UI is Public Sans.
- Signature visual motif: a "clean pile-line" stripe pattern (echoing the literal look of a freshly-vacuumed carpet) used in the hero, service card swatches, and section dividers — ties the whole site together and isn't used by any competitor reviewed.
- Mobile-first: sticky bottom Call/Quote bar under 760px width, large tap targets, hamburger nav, verified in a live browser render at 375px width with no console errors.
- Spot-checked in-browser at desktop (1280px) and mobile (375px) — homepage and a Tier 1 location page both render correctly, hero visual and swatch cards display as intended, sticky CTA bar works.

## Conversion & lead generation

- Every page ends in a clear next step: full quote form on major pages, compact CTA + phone/quote links on lighter pages.
- Click-to-call (`tel:` links) on every page — the old archived site had none.
- WhatsApp CTA is wired but hidden-by-default (`data-biz="whatsapp-href"` in `js/business.js`) — flip `whatsappEnabled: true` and fill in the number once you have one, and it appears site-wide automatically.
- Single source of truth for all contact details: `js/business.js` — change the phone/email/hours once, it updates everywhere.

## Internal linking

- No orphan pages (verified). Every guide links to ≥1 commercial page and is linked from ≥1 commercial page (fixed during the final audit — the 10 pillar pages didn't originally link forward to guides, since guides didn't exist yet when they were built; this is now corrected).
- Every location page links to 3–5 real nearby areas and relevant service pillars; every Tier 3 (folded-in) area is mentioned on exactly one parent page plus the locations hub, never duplicated across two full pages.

## What I found and fixed during my own QA pass (not asked, done proactively per your "if something's weak, fix it" instruction)

1. 4 pages had a visible FAQ but no matching `FAQPage` schema — added.
2. 10 core pillar pages had no forward links to the guides that reference them — added a "Related guides" section to each.

## Remaining issues / things only you can decide

1. **Email and opening hours** are still placeholder (`TODO_*`) — deliberately, not by oversight. See the update section at the top and `seo/contact-information-audit.md`.
2. ~~`krystalklean.ie` relationship~~ — **Resolved.** Confirmed to be your own other business/brand (spotless.ie now fully redirects to it). See update section at top.
3. **Pricing strategy**: once you have real, *current* (2026) confirmed prices, publishing itemized pricing (per room, per item, or bundles) is still the single highest-leverage SEO move available per the competitor research. Your existing sites' pricing table is a good structural starting point but is likely 2–3 years stale — see `seo/pricing-review.md` before reusing any of its actual figures.
4. **Photography**: real photos are now live (see update section) — but only for carpet/upholstery/mattress. Rug cleaning still uses a generic AI decorative image since no real rug photo existed on your source sites; the 12 remaining unused real photos are cataloged in `seo/media-library.md` for further placement (location pages, guides) whenever you want.
5. A full manual visual QA of all 80 individual pages (vs. the shared-component-level check performed here) hasn't been done — recommended before public launch, and definitely before spending on ads pointing at any specific location page.
6. **Testimonial brand framing** — see `seo/review-migration.md`: the About page doesn't yet explicitly acknowledge that "Carpet Cleaning Service" and "Krystal Klean Express" are the same real operator. Worth a line there for full transparency before launch.

## Deployment status

**Not deployed.** No Netlify action taken, no DNS touched, nothing pushed live — per your explicit instruction. See `READY-FOR-NETLIFY.md` for what's left to do when you're ready.
