# Technical SEO Checklist — carpetcleaningservice.ie

Status as of this build. Verified programmatically against all 79 pages unless noted.

## Verified site-wide (automated checks run against every page)

- [x] **One `<h1>` per page** — checked across all 79 pages, zero violations.
- [x] **Unique `<title>` per page** — zero duplicates across all 79 pages.
- [x] **Unique, self-referencing `<link rel="canonical">` per page** — zero duplicates; every canonical points to the page's own URL (the exact CarpetsClean.ie bug flagged in `competitor-research.md` §2 — canonical pointing to the homepage instead of self — does not exist here).
- [x] **Unique `<meta name="description">` per page.**
- [x] **Valid JSON-LD on every page** — parsed with a script; 0 invalid blocks across 79 pages.
- [x] **`FAQPage` schema matches visible FAQ exactly, wherever an FAQ exists** — verified visible `.faq-item` count equals schema `Question` count on every page (4 pages were initially missing schema despite having a visible FAQ — fixed during this pass: homepage, pet-stain-removal-dublin, rug-cleaning-dublin, stain-removal-dublin).
- [x] **`BreadcrumbList` schema on every page except the homepage**, matching the visible breadcrumb trail.
- [x] **`Service` schema on all service/location pages**, referencing the shared `LocalBusiness` `@id`.
- [x] **No hardcoded/leaked phone numbers** — every phone/email reference site-wide uses the `data-biz` placeholder hook (see `js/business.js`), checked via regex across all 79 pages.
- [x] **No broken internal links** — every `href="/..."` target across all 79 pages resolves to a real file on disk (checked programmatically).
- [x] **robots.txt** present at `/robots.txt`, allows all, points to `/sitemap.xml`.
- [x] **sitemap.xml** generated from the live canonical tag of every page (79 URLs) — not hand-maintained, so it can't drift from the actual page set.
- [x] **404.html** present, `noindex`, links back to key pages.
- [x] **Semantic HTML** — header/nav/main/footer landmarks, skip link, `aria-current="page"` on active nav items, accessible focus states (`:focus-visible` in base.css).
- [x] **Mobile-responsive** — fluid type scale, responsive grid breakpoints in components.css, sticky mobile call/quote bar under 760px.
- [x] **No render-blocking heavy JS** — two small vanilla JS files (business.js, main.js), no framework, no build step.

## Deliberately deferred (needs real business data, not a technical gap)

- [ ] **Open Graph / Twitter image (`og:image`)** — not added; no real photography exists yet to reference (brief prohibits stock-photo spam and fabricated before/after images). Add once real photos are supplied.
- [ ] **`AggregateRating`/`Review` schema** — intentionally NOT added anywhere. No genuine reviews exist yet; adding review schema without real reviews would violate Google's structured data guidelines and the brief's explicit ban on fabricated testimonials.
- [ ] **Real `telephone`/`email` in `LocalBusiness` schema** — currently `TODO_PHONE`/`TODO_EMAIL` placeholders via `data/business.json` and `js/business.js`. Must be filled in before launch (see `READY-FOR-NETLIFY.md`).
- [ ] **Google Search Console verification tag / property**, **Google Analytics/GA4**, **conversion tracking** — `js/main.js` already pushes `phone_click`, `whatsapp_click`, and `quote_request_submit` events to `window.dataLayer`, ready for GTM/GA4 to be dropped in, but no tracking ID exists yet to wire up.
- [ ] **Image optimization (WebP/AVIF, alt text, lazy loading)** — no photography has been added yet (see content-quality-checklist.md); the hero visual is a pure-CSS graphic, not a photo, so there's nothing to optimize yet. Structure is ready for real photos to be dropped in.

## Cannibalization guardrails re-verified post-build

- [x] No `/sofa-cleaning-dublin/` page exists — confirmed only `/upholstery-cleaning-dublin/` targets that intent.
- [x] No Tier 3 area (Beggars Bush, Dartry, Dollymount, Merrion, Milltown, Irishtown, Kilmore, Ballybough, Bluebell, Broadstone, Grangegorman, Chapelizod, Cherry Orchard, Summerhill) has its own URL — confirmed via full site crawl (79 pages listed, none match a Tier 3 slug).
- [x] Only 5 end-of-tenancy location spin-offs exist (Rathmines, Portobello, Ranelagh, Drumcondra, Phibsborough) — matching the conservative list from `keyword-research-raw.md` §3, not one per area.
