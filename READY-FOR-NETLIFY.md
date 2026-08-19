# STATUS: READY FOR DEPLOYMENT (after the checklist below)

The site is a complete, static HTML/CSS/JS project (no build step, no framework) at:

```
C:\Users\cipri\Desktop\CLAUDE\carpetcleaningservice-ie\
```

It has **not** been deployed, pushed, or pointed at any domain/DNS. Nothing in this project has touched production. `netlify.toml` is already in place (`publish = "."`, basic security headers).

## Already done for you (real data, not placeholders)

- **Business name, phone (089 963 2144), email (contact@carpetcleaningservice.ie), and WhatsApp** — live in `js/business.js`, `data/business.json`, the homepage schema, and across all 80 pages.
- **Real logo** — your file, processed into black/white/favicon variants, live in the header/footer/favicon of every page.
- **20 real work photos** — 17 from your krystalklean.ie/spotless.ie sites plus 3 from your Instagram, de-duplicated, watermark-cropped, optimized. Several are wired into service-page heroes; all 20 are shown on `/gallery/`.
- **4 real, verbatim customer testimonials** — live on the homepage and 3 service pages.
- **`krystalklean.ie` relationship resolved** — confirmed to be your own other business.
- **Colour palette re-themed to match your real logo** (navy/blue), striped divider/hero pattern replaced with a cleaner solid design, and 7 pages' FAQs expanded from ~4 to 10-12 questions each.
- **Opening hours confirmed**: Mon–Fri, 8:00am–5:00pm — live in `js/business.js` and shown on `/contact/`.

## Still needed before you deploy (required)

1. **Set up email forwarding**: `contact@carpetcleaningservice.ie` → `carpetcleaningservice.ie@gmail.com`. The site references the branded address everywhere (that's what visitors will send to and see); the forwarding itself is a DNS/email-host setting you configure once the domain is live (your registrar's free email forwarding, or a service like ImprovMX/Zoho Mail forwarding). **Until this is set up, mail sent to that address will bounce.** This is the only remaining required item — everything else on this list is optional.

## Optional, your call

4. **Old landline (059 865 2981)** — from krystalklean.ie, not used anywhere on this site now that you've supplied a dedicated number.
5. **Real, current pricing** — see `seo/pricing-review.md`. Your existing sites' pricing table is likely 2–3 years stale; once you have confirmed 2026 figures, publishing an itemized price table is the single highest-leverage SEO move available (see `seo/competitor-research.md`).
6. **Testimonial brand framing** — consider adding a line to `/about/` acknowledging the same-operator relationship between this brand and Krystal Klean Express (see `seo/review-migration.md`).
7. **More real photos** are cataloged but not yet placed on a page — see `seo/media-library.md` if you want more added to location pages or guides.
8. **Real rug-cleaning photos** — none existed on your source sites or Instagram; that page still uses a generic decorative image.

## Recommended before/soon-after going live (not blocking)

9. **Analytics**: `js/main.js` already fires `phone_click`, `whatsapp_click`, and `quote_request_submit` events to `window.dataLayer` — add your GA4/GTM snippet and these will start populating immediately.
10. **Google Search Console**: verify the domain, submit `sitemap.xml` (already generated, 80 URLs, at the project root).
11. **Google Business Profile**: create/claim one for the real business — local pack presence matters as much as the website.
12. **Run Lighthouse/PageSpeed Insights** once live — no speed testing was possible without a live URL.
13. **Full manual page-by-page visual QA** — recommended before public launch or paid ads.

## Deployment steps (when you're ready — I have not done any of this)

```bash
# From C:\Users\cipri\Desktop\CLAUDE\carpetcleaningservice-ie
git add -A
git commit -m "Initial build: carpetcleaningservice.ie Dublin SEO site"

# Then, via the Netlify CLI or dashboard:
netlify init          # link to a new or existing Netlify site
netlify deploy --prod # deploy to production, once you're satisfied
```

Or connect the `carpetcleaningservice-ie` folder as a new Git repository to Netlify's dashboard for continuous deployment on push — your call. Either way, **I have not run any deploy command and will not until you say so.**

## Reference docs (all in `seo/`)

Original build: `current-site-audit.md` · `competitor-research.md` · `keyword-research-raw.md` · `keyword-map.md` · `location-database.md` · `site-architecture.md` · `internal-linking-plan.md` · `content-strategy.md` · `technical-seo-checklist.md` · `content-quality-checklist.md` · `final-seo-audit.md`

Asset migration: `source-assets-audit.md` · `review-migration.md` · `pricing-review.md` · `contact-information-audit.md` · `media-library.md` · `final-assets-audit.md`

Full summary of everything built: `BUILD-REPORT.md`.
