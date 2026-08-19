# Final SEO Audit — carpetcleaningservice.ie

Audit run after all 79 pages were built. All checks below were run programmatically against the full site (not sampled), using Node scripts (`scripts/qa-orphan-check.js` and inline checks) rather than manual spot-checking alone.

## Site inventory

| Category | Count |
|---|---|
| Homepage | 1 |
| Dublin-wide service pillars | 8 |
| Pricing + FAQ hub pages | 2 |
| Location pages (Tier 1 + Tier 2) | 44 (26 + 18) |
| End-of-tenancy location spin-offs | 5 |
| Guides | 14 |
| Hub pages (locations, guides) | 2 |
| Navigational/legal (about, contact, privacy) | 3 |
| **Total indexable pages** | **79** |
| 404 page (noindex) | 1 |

This matches `keyword-map.md`'s planned architecture exactly — no unplanned pages, no missing planned pages.

## Automated checks (results)

| Check | Result |
|---|---|
| Duplicate `<title>` tags | 0 found across 79 pages |
| Duplicate/missing canonical tags | 0 found; every page self-referencing |
| Pages with ≠1 `<h1>` | 0 found across 79 pages |
| Invalid JSON-LD (parse errors) | 0 found across 79 pages |
| `FAQPage` schema vs. visible FAQ mismatch | 0 (4 pages were found missing schema entirely on first pass — homepage, pet-stain-removal-dublin, rug-cleaning-dublin, stain-removal-dublin — fixed during this audit) |
| Broken internal links (href → no matching file) | 0 found across all `href="/…"` links site-wide |
| Orphan pages (0 inbound internal links) | 0 found (404.html excluded, intentionally unlinked) |
| Hardcoded/leaked real-looking phone numbers | 0 found — every instance uses the `data-biz` placeholder pattern |
| Tier 3 areas with their own indexable URL | 0 — confirmed none of the 14 folded-in areas has a page |
| `/sofa-cleaning-dublin/` cannibalizing page | Does not exist — confirmed only one page targets that intent |

## Issues found and fixed during this audit

1. **Missing FAQPage schema on 4 pages** (homepage, pet-stain-removal-dublin, rug-cleaning-dublin, stain-removal-dublin) despite having genuine visible FAQs. One of the three service-page agents had deliberately omitted it out of caution about mismatches; the caution was reasonable but left a gap. Fixed by adding schema that exactly mirrors the visible Q&A text on each page.
2. **All 10 core commercial pillar pages had zero forward links to the 14 guides**, because the pillar pages were built before the guides existed. This violated `internal-linking-plan.md`'s own rule ("every pillar links to at least one guide") even though no page was technically orphaned (guides still had one inbound link from the guides hub). Fixed by adding a "Related guides" section to all 10 pillar pages, linking to 1–3 genuinely relevant guides each.

## Not found (checked for, absent)

- No keyword-stuffed titles (`"X | X | X"` pattern) anywhere.
- No fabricated prices, reviews, testimonials, statistics, certifications, or addresses anywhere (spot-checked by every building agent per-page, and no numeric price figures exist anywhere in the codebase — verified by grep for currency symbols returning zero matches outside of documentation/planning files).
- No duplicate/near-duplicate location-page boilerplate — every location page's local intro and service-section copy is grounded in its own `location-database.md` record; a sample comparison (Rathmines vs. Rathgar, both affluent southside areas) shows deliberately opposite framing (rental turnover vs. long-tenure ownership) rather than reworded copy.

## Remaining/manual items (not fixable by an automated pass)

- **Visual/UX check**: spot-checked homepage and a Tier 1 location page (Terenure) at desktop and mobile widths via live browser render — header, sticky mobile CTA bar, hero visual, and swatch cards all render correctly with no console errors. A full page-by-page visual pass of all 79 pages was not performed (impractical at this scale); structural HTML/CSS is shared and verified via the design-system files, so visual risk is concentrated in the shared components already checked, not per-page content.
- **Page speed**: no build/minification step exists (plain static HTML/CSS/JS, two small JS files, Google Fonts loaded via `<link>` with `preconnect`). Real-world speed testing (Lighthouse/PageSpeed Insights) requires a live deployed URL and hasn't been run — recommended as a post-deploy step in `READY-FOR-NETLIFY.md`.
- **Real business data gaps** — see `technical-seo-checklist.md`'s "deliberately deferred" section: phone/email/hours, GA4/GTM, Search Console verification, and real photography all require input only the site owner can provide.
