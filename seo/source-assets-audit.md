# Source Assets Audit — krystalklean.ie & spotless.ie

Internal source-library audit of the owner's two existing properties, for reuse on the new carpetcleaningservice.ie build. Full raw findings are in `_audit-krystalklean.md` and `_audit-spotless.md` in this folder; this document consolidates and de-duplicates them into the required format.

## Headline structural finding

**spotless.ie no longer exists independently.** Every URL 301-redirects to krystalklean.ie. The live, real business behind both domains is **Krystal Klean Express Limited**, a Dublin-based operator (the testimonials name "Cyprian"/"Ciprian" as the technician on ~4 of 5 jobs, consistent with a hands-on small operator). spotless.ie's homepage still *displays* legacy "Spotless" branding/copy/pricing that appears to not have been updated since the rebrand — everything else on the site is Krystal Klean branded. This resolves the open question from the original `current-site-audit.md` about the relationship between this project and krystalklean.ie: **they are the same business**, so carpetcleaningservice.ie should be treated as a new brand for the same real, existing operation — not a competitor to manage around.

Because krystalklean.ie hosts the actual image files spotless.ie's pages reference (redirect target), **the two staging folders overlap heavily** — see `media-library.md` for the de-duplicated final set.

## Asset inventory

| Source | Page | Asset | Type | URL | Description | Potential Use | Ownership | Notes |
|---|---|---|---|---|---|---|---|---|
| krystalklean.ie | Homepage / carpet service | 10 work photos | Image | see `_audit-krystalklean.md` §1 | Real carpet/mattress/sofa cleaning photos, before/after and action shots | Homepage, service pages | Owner's own business | 7 clean, 3 flagged (watermark/branding) |
| krystalklean.ie | /about-us/ | CTI Prochem certificate scan | Image | `/2024/03/Carpet-cleaning-service-Dublin.jpg` | Certificate No. 2018/020, real credential | Reference only — not a site image | Owner's own | Names "Krystal Klean Express" — don't publish as-is on new brand; the underlying credential (Cyprian is CTI/Prochem certified) can be stated in new-brand words |
| krystalklean.ie | Testimonial CPT (5 pages) | 5 testimonials | Text | `/testimonial/*` | Verbatim customer reviews, no ratings shown | Homepage/service reviews sections | Owner's own real customers | See `review-migration.md` — 1 of 5 is about house clearance, not carpet cleaning |
| krystalklean.ie | 4 service pages | ~40 FAQ Q&As | Text | `/service/{carpet,upholstery,mattress,power-washing}-cleaning/` | Genuinely useful, non-generic cleaning FAQs | Rewrite into new site's service/guide pages | Owner's own | Already largely covered by existing new-site FAQ content; use to spot gaps, don't verbatim-copy |
| krystalklean.ie | Multiple | Contact info | Text | footer/contact page | Phone, email, WhatsApp, hours, socials | `js/business.js`, contact page | Owner's own real info | See `contact-information-audit.md` — some fields conflict between pages |
| krystalklean.ie/spotless.ie | Homepage | Room-based price table | Text | homepage | €25–€105 per room/item, carpet/upholstery/mattress | Pricing page structure only | Owner's own | See `pricing-review.md` — likely 2–3 years stale, don't publish as current |
| krystalklean.ie | Blog (81 posts) | Location-page template | Structure | `/carpet-cleaning-dublin/` + area posts | Intro → credibility bullets → genuine local paragraph | Content pattern reference for location pages | Owner's own | New site's location pages already follow a comparable, arguably stronger pattern (see `location-database.md`) — used as validation, not copied |
| spotless.ie (redirects to krystalklean.ie) | Homepage teaser | 1 referenced YouTube video | Video | `youtube.com/watch?v=biuvyexcGRg` | "Upholstery Cleaning Blanchardstown" | Not embedded — could not confirm still live on any current page | Owner's own (assumed) | Referenced only, not confirmed embedded anywhere live — do not embed without verifying it still exists/loads |
| krystalklean.ie | footer | YouTube channel link | Video | `youtube.com/channel/UCbQaddg8N-22pU_s9WUJ3dA` | Channel link only, not inspected for content | Optional footer social link | Owner's own | Not opened/audited — out of scope, add to footer social links if desired |
| krystalklean.ie | `/about-us-3/`, `/home-test/`, etc. | Orphaned legacy pages | Content | various | Leftover WordPress theme demo content, wrong business name ("Mr. Handy") | **None** | N/A | **Do not use anything from these pages — confirmed not genuine business content** |

## Images: separate category breakdown

**Carpet cleaning:** 5–6 usable clean photos (wand action shots, before/after, overhead technician shots) — see media-library.md.
**Upholstery/sofa cleaning:** 2–3 usable (1 finished sofa, 1 active-cleaning action shot from spotless staging; the krystalklean sofa photo has a corner watermark, croppable).
**Mattress cleaning:** 6–7 usable (multiple before/after and action shots across both staging sets, several are literal duplicates).
**Equipment:** 1 (carpet-extraction machine, "Endeavor" brand visible — legitimate equipment photo, no company branding).
**Before/after:** most of the above photos already are before/after composites — no separate category needed.
**Videos:** none confirmed embeddable/live. Not integrated.
**Testimonials:** 5 found, 4 usable — see `review-migration.md`.
**Service information:** substantial, genuinely useful FAQ/process content — see `_audit-krystalklean.md` §5–6 and `_audit-spotless.md` §5–6 for full text.
**Pricing:** 1 full room-based price table (spotless.ie legacy content) — see `pricing-review.md`.
**FAQs:** ~40+ Q&As across both audits — largely already covered on the new site; a few genuinely new angles noted below.
**Local content:** area-coverage statement (Dublin/Kildare/Wicklow/Carlow — inconsistently also "Kilkenny" on some pages) and an 81-post location-blog pattern (mostly house-clearance, not carpet-cleaning-specific) — informs `content-strategy.md`, not directly reusable as new-site copy.

## Old-website content → new-website migration map

| Source page | → New site page | Content used? | Images used? | Video used? | Rewrite required? | Redirect required? |
|---|---|---|---|---|---|---|
| krystalklean.ie `/service/carpet-cleaning/` | `/carpet-cleaning-dublin/` (already built) | Partial (FAQ gap-check only) | Yes (2–3 photos) | No | Yes — full rewrite, already done independently | No — different domain/business, no redirect owed |
| krystalklean.ie `/service/upholstery-cleaning/` | `/upholstery-cleaning-dublin/` (already built) | Partial | Yes (1–2 photos) | No | Yes, already done | No |
| krystalklean.ie `/service/mattress-cleaning/` | `/mattress-cleaning-dublin/` (already built) | Partial | Yes (several photos) | No | Yes, already done | No |
| krystalklean.ie testimonials | Homepage reviews section, relevant service pages | Yes (verbatim quotes, real reviews) | N/A | N/A | No — verbatim reuse of real reviews is appropriate, with honest attribution framing | No |
| krystalklean.ie/spotless.ie homepage price table | `/carpet-cleaning-prices-dublin/` (already built) | No — structure noted, figures not used | N/A | N/A | N/A | No |
| krystalklean.ie contact info | `js/business.js`, `/contact/` | Yes (phone/email/WhatsApp, see contact-information-audit.md) | N/A | N/A | No, factual | No |
| krystalklean.ie 81-post location blog | New site's 44 location pages (already built) | No — pattern validated independently, not copied | No | No | Already independently written, no changes needed | No |
| krystalklean.ie `/about-us-3/` and other orphaned pages | — | **No, explicitly excluded** | No | No | N/A | N/A |

No redirects are owed from the old sites to the new one — carpetcleaningservice.ie is a new, independent brand for the same underlying business, not a replacement domain for krystalklean.ie (which remains live and active for its own house-clearance/general-cleaning focus).
