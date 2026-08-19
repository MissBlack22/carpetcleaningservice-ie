# Contact Information Audit — krystalklean.ie / spotless.ie

## UPDATE 2026-08-19 — owner supplied real details for this brand directly

The owner provided the actual phone number, email, and forwarding setup for carpetcleaningservice.ie specifically, superseding the "picked from krystalklean.ie" phone number below:

- **Phone:** 089 963 2144 (replaces the 085 202 1222 pulled from krystalklean.ie/spotless.ie) — now live in `js/business.js`, `data/business.json`, and the homepage `LocalBusiness` schema.
- **Email:** contact@carpetcleaningservice.ie — a proper branded domain address. Per the owner: this forwards to `carpetcleaningservice.ie@gmail.com` at the DNS/email-host level, "like other websites we did." **The site only ever references the branded address** — the Gmail forward is a backend setting the owner configures with their domain/email host, not something the HTML needs to know about. **This forwarding must actually be set up before launch**, or mail sent to contact@carpetcleaningservice.ie will bounce — see `READY-FOR-NETLIFY.md`.
- **WhatsApp confirmed by the owner** to be the same number, 089 963 2144.

The rest of this document (below) is the original audit of krystalklean.ie/spotless.ie and is kept for historical reference — its phone number recommendation has been superseded as above.

## What was found (all channels, with conflicts flagged)

| Channel | Value(s) found | Source | Conflict? |
|---|---|---|---|
| Phone (landline) | 059 865 2981 | Consistent across krystalklean.ie | No |
| Phone (mobile) | 085 202 1222 | Consistent across krystalklean.ie and spotless.ie legacy | No — this number appears everywhere, on both properties |
| WhatsApp | `wa.me/+353852021222` (same as mobile) | Confirmed live link on krystalklean.ie's carpet-cleaning-dublin page | No |
| Email (current) | infokrystalklean@gmail.com | krystalklean.ie contact/service pages | — |
| Email (legacy) | info@spotless.ie | spotless.ie legacy homepage footer | **Conflict — two emails live simultaneously; legacy one is likely unmonitored** |
| Address | None published on current contact page ("based in Dublin" only) | krystalklean.ie /contact/ | — |
| Address (legacy) | "Maple Ave, Stillorgan Business Park, Co. Dublin" | spotless.ie legacy footer only | **Conflict — not shown on current contact page, may be outdated (e.g. no longer the operating address)** |
| Hours | Mon–Fri 8:00am–5:00pm | krystalklean.ie /contact/ (current page) | — |
| Hours (legacy) | 8:00am–8:00pm | spotless.ie legacy footer | **Conflict with current contact page** |
| Hours (prose claim) | "24/7, 6 days per week" | spotless.ie legacy homepage FAQ prose | **Conflict — contradicts both hour ranges above; likely leftover marketing copy, not a real policy** |
| Facebook | facebook.com/KrystalKleanExpress | Both properties, consistent | No |
| Twitter/X | twitter.com/ExpressKlean | Both, consistent | No |
| Instagram | instagram.com/krystalkleanexpress | Both, consistent | No |
| YouTube | youtube.com/channel/UCbQaddg8N-22pU_s9WUJ3dA | Both, consistent | No |
| Pinterest | pinterest.ie/KrystalKleanExpressltd | Both, consistent | No |
| TikTok | tiktok.com/@cleaningcompanydublin | Both, consistent | No |

## What I actually did with this (already implemented — see BUILD-REPORT.md addendum)

Rather than leave every field as `TODO` when real, verified, currently-live information exists, I updated `js/business.js` (the site's single source of truth for contact details) with the fields that had **no conflict**:

- **Phone (primary/display):** 085 202 1222 — chosen over the 059 landline because (a) it's the number that appears consistently on both properties and is the one actually linked for WhatsApp, and (b) a mobile number carries no geographic mismatch, whereas 059 is a Carlow/Kildare area code that would look odd on a site branded specifically for Dublin (this exact mismatch was flagged as a weakness in the original `current-site-audit.md` of the old carpetcleaningservice.ie).
- **WhatsApp:** enabled, using the confirmed live `wa.me/+353852021222` link — this activates the WhatsApp CTA that was already built into the design but hidden pending a real number.
- **Email: left as `TODO`, deliberately NOT set to infokrystalklean@gmail.com.** Reasoning: the original `current-site-audit.md` specifically flagged "a generic Gmail address, not a branded domain email... a weak trust signal" as a weakness of the old site — using an address with a visibly different brand name ("krystalklean") baked into it on the new "Carpet Cleaning Service" site would repeat that exact mistake, just with a mismatched name instead of a generic one. **Recommendation:** set up a dedicated address (e.g. `info@carpetcleaningservice.ie`, or at minimum a Gmail address matching the new brand) that forwards to the same inbox you already check — leads still reach you, but the site looks consistent. Tell me the address once it exists and I'll wire it in immediately.

**Left as a decision for the owner (not silently picked):**
- **Hours** — three conflicting values exist (Mon–Fri 8–5 / 8am–8pm / "24/7"). I did not guess. `js/business.js`'s `hoursDisplay` field is still `TODO_OPENING_HOURS` — please confirm actual current hours and I'll fill it in immediately.
- **Address** — the legacy Stillorgan address may or may not still be accurate/relevant (this is a service-area business, and the current contact page deliberately doesn't show one). Left as "service area: Dublin" only, per the existing honest placeholder pattern — no address was invented or carried over from the legacy listing.
- **Landline (059)** — not used as the primary number for the reason above, but could be added as a secondary number if the owner wants both listed (matching krystalklean.ie's own pattern of showing both).

## Also worth the owner's attention (not something I can decide)

The three-way conflict on **years of experience** ("5+ years" homepage counter vs. "since 2008/over a decade" on every service page vs. "5+ years" on the carpet-cleaning blog post) means I have **not** put any specific experience-length claim on carpetcleaningservice.ie — none of the existing site's copy states a number of years. If you tell me the actual correct figure, I'll add it; until then, omitting it is more honest than guessing which of the three conflicting numbers is right.
