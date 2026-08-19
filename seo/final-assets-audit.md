# Final Assets Audit — Asset Migration Pass

Quality-control pass after migrating real assets from krystalklean.ie/spotless.ie into carpetcleaningservice.ie. Covers everything imported or changed in this pass — for the original 79-page build's own QA, see `final-seo-audit.md`.

## USED

- **17 real photos** — de-duplicated, watermark-cropped (2 files), optimized to WebP, organized in `assets/photos/business/{carpet-cleaning,upholstery-cleaning,mattress-cleaning,equipment}/`. 5 wired into pages (homepage hero, carpet/upholstery/mattress page heroes, plus the full 17 shown in the new `/gallery/` page); the remainder are cataloged in `media-library.md` for future use.
- **Real logo** (`assets/logo/logo-real-black.png`, `logo-real-white.png`, `favicon-real.png`) — supplied directly by the user, processed (trim/invert/crop), replacing the earlier AI-recreated approximation across all 80 pages.
- **4 of 5 real testimonials** — placed verbatim on the homepage and cross-posted to the 3 most relevant service pages (carpet/mattress/upholstery).
- **Real phone number** (085 202 1222) and **WhatsApp** (`wa.me/+353852021222`, confirmed live on the source site) — wired into `js/business.js`, now live across every page and the homepage hero.

## NOT USED (with reason)

- 2 photos with old-brand embroidery/text too large to crop — excluded entirely.
- 2 marketing-flyer graphics (not real photos) and 1 stock clip-art infographic — excluded, not genuine photography.
- The Prochem/CTI certificate scan — names a different legal entity (Krystal Klean Express Limited), kept as reference documentation only, not published.
- 1 of 5 testimonials (Mike Anderson) — describes house clearance, not carpet/upholstery/mattress cleaning; off-topic for this site.
- Room-based pricing table (€25–€105 figures) — structure noted as reusable, exact euro figures NOT published (see `pricing-review.md`).
- Legacy street address (Stillorgan Business Park) — not shown; current site correctly shows "service area: Dublin" only.
- Any "years in business" claim — 3 conflicting figures existed on the source sites (5+/10+/since 2008); none was picked, none is published.

## NEEDS REVIEW (owner decision required — flagged, not silently resolved)

1. **Email address** — deliberately left as `TODO` rather than using the old-branded `infokrystalklean@gmail.com`. See `contact-information-audit.md`.
2. **Opening hours** — 3 conflicting values found on source sites; `js/business.js`'s `hoursDisplay` is still `TODO_OPENING_HOURS` pending confirmation.
3. **Landline (059 865 2981)** — not used as primary (Carlow/Kildare area-code mismatch for a Dublin-branded site), but available if the owner wants both numbers listed, matching the source sites' own pattern.
4. **Testimonial brand-attribution framing** — reusing reviews left for "Krystal Klean Express" on the new "Carpet Cleaning Service" brand is implemented with neutral framing (no brand name stated in the quotes themselves), but the About page doesn't yet explicitly acknowledge the same-operator relationship. Worth adding a line there for full transparency — see `review-migration.md`.
5. **Real pricing** — once the owner has current, verified 2026 figures, `carpet-cleaning-prices-dublin/` can be upgraded from factors-only to an itemized table (highest-leverage SEO move per `competitor-research.md`).

## OUTDATED (found, explicitly not carried forward)

- Legacy `info@spotless.ie` email and 8am–8pm / "24/7" hour claims — superseded by current krystalklean.ie contact page, not used.
- Spotless-era pricing table — likely 2–3+ years stale, not published (full reasoning in `pricing-review.md`).
- Orphaned WordPress theme demo pages (`/about-us-3/` and similar) — confirmed never real business content, nothing from them was used.

## DUPLICATE

- 6 image files were byte-identical between the krystalklean.ie and spotless.ie staging pulls (both properties serve from the same krystalklean.ie media library, since spotless.ie now fully redirects there) — de-duplicated to one copy each before optimization.

## Recommended future assets

- Real photos for **rug cleaning** — none existed on either source site; `/rug-cleaning-dublin/` still uses a generic AI-generated decorative image, clearly not presented as a real job photo.
- Real photos for **commercial/office carpet cleaning** and **end-of-tenancy** contexts specifically (the existing photos are general residential/office, not tenancy-specific).
- A dedicated new-brand email address and confirmed current opening hours (see "NEEDS REVIEW" above) — the two lowest-effort, highest-value remaining gaps.
- Once the owner has decided the brand-positioning question in `review-migration.md`, consider adding 1–2 more of the 12 not-yet-placed real photos to location pages or guide articles for additional authenticity.
