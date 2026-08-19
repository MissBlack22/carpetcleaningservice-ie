# Spotless.ie Source Audit

**Purpose:** Internal source-library audit of https://spotless.ie/ (the user's own existing property) for content/photo/pricing reuse on the new site at `carpetcleaningservice-ie`.

**Audit date:** 2026-08-19

**CRITICAL FINDING — READ FIRST:** `spotless.ie` no longer serves independent content. Every URL on the domain (confirmed via browser navigation) 301-redirects to **`https://krystalklean.ie/`**. The live business is legally and operationally **Krystal Klean Express Limited**, not "Spotless". The homepage still *displays* legacy "Spotless" branding, copy, and a pricing table (this content appears to be carried over from the old spotless.ie site and left in place), but every other page on the site (services, about, contact, blog) is 100% "Krystal Klean Express" branded, with different phone numbers, different email, and different stated company history. See section 10 for full detail. This materially affects how trustworthy/current the pricing and claims should be treated.

---

## 1. Genuine Photographs

All URLs below are hosted on `krystalklean.ie/wp-content/uploads/...` (the domain spotless.ie now redirects to). Only photos judged to be genuine real-world work photos are listed; two images that turned out to be marketing flyer graphics (not photos) were excluded — see Section 10.

| # | Image URL | What it shows | Found on page |
|---|---|---|---|
| 1 | `/2024/02/carpet-and-upholstery-cleaning-20.jpg` | Technician in hi-vis vest using a carpet wand on a dark office/commercial carpet, clean strip visible next to dirty carpet | Homepage, Carpet Cleaning service page |
| 2 | `/2024/02/carpet-cleaning-upholstery-cleaning-29.jpg` | Blue air-mover/dehumidifier plus before/after split of a beige hallway carpet | Carpet Cleaning service page |
| 3 | `/2024/02/carpet-cleaning.jpg` | Full-scene shot: technician actively wanding a large dark office carpet, hoses, buckets, chemical bottles visible | Carpet Cleaning service page |
| 4 | `/2020/10/carpet-and-upholstery-cleaning-1.jpg` | Classic "clean square" demo — cleaning wand mid-pass on beige carpet, dramatic dirty/clean contrast | Carpet Cleaning service page |
| 5 | `/2020/10/carpet-cleaning-carlow.jpg` | Technician in blue top actively cleaning a dark carpet in a furnished room (chandelier visible) | Carpet Cleaning service page |
| 6 | `/2024/02/Carpet-Cleaning-3.jpg` | Close-up of a professional carpet cleaning machine (third-party equipment brand "Endeavor" visible — a legitimate equipment brand, not old company branding) sitting on a carpet next to a sofa | Carpet Cleaning service page |
| 7 | `/2020/10/sofa-cleaning-carlow.jpg` | Finished/clean red loveseat sofa, no active work shown | Upholstery Cleaning service page |
| 8 | `/2020/10/sofa-cleaning-carlow-2.jpg` | Technician's gloved hands actively spraying/cleaning a brown suede-look sofa with an upholstery tool | Upholstery Cleaning service page |
| 9 | `/2024/02/dublin-matress-cleaning.jpg` | Before/after mattress stain removal, top-down | Upholstery Cleaning page (image carousel) |
| 10 | `/2024/02/mattress-cleaning-dublin.jpg` | Close-up wand cleaning a mattress, clear before/after gradient | Mattress Cleaning service page |
| 11 | `/2024/02/matress-cleaner.jpg` | Generic close-up of a mattress's quilted ticking (no active cleaning, no branding) | Homepage |
| 12 | `/2024/02/matress-cleaning-carlow.jpg` | Before/after mattress cleaning, top-down gradient shot | Mattress Cleaning page |
| 13 | `/2020/10/141756914_1511433072398305_8840712472195700777_n.jpg` | Black-and-white photo of a mattress being cleaned with a wand in a bedroom (Facebook-sourced) | Mattress Cleaning page |
| 14 | `/2020/10/322402410_902875517386571_5988949942778539563_n.jpg` | Before/after wand cleaning close-up on a white mattress (Facebook-sourced) | Mattress Cleaning page |

**Images seen but NOT recommended for reuse (old branding / not real photos)** — see Section 10 for the full list and reasoning.

## 2. Embedded Videos

- One YouTube video is referenced in the text of a homepage blog teaser: **`https://www.youtube.com/watch?v=biuvyexcGRg`**, embedded (per the surrounding text) in a blog post titled "Upholstery Cleaning Blanchardstown" ("Spotless is a professional cleaning company based in Dublin that specializes in providing high-quality cleaning..."). I could not locate a live URL for that specific blog post during this audit (guessed slugs 404'd, and it does not appear in the current 20-page blog archive, which is now dominated by house-clearance content) — so the video is confirmed to exist/be referenced, but I could not verify it still loads on a live page. Treat as "referenced, not confirmed live."
- The homepage's YouTube channel link (footer/social icons) is `https://www.youtube.com/channel/UCbQaddg8N-22pU_s9WUJ3dA`.
- No other embedded videos (e.g. Vimeo, self-hosted) were found on the homepage, service pages, about, or contact pages.

## 3. Genuine Customer Testimonials

Found in a testimonial slider on the homepage (`.testimonial_wrapper`), all displaying a 5-star rating. Exact text below, verbatim:

> "These guys did an amazing job clearing my parents' home, leaving the property spotless and showing great professionalism. They made the challenging task of moving furniture seem effortless. I would definitely recommend their services. I'm also planning to use them again soon to clear some items from my flat."
> — **Mike Anderson**, 5 stars (Note: this review is about house clearance, not carpet cleaning)

> "We moved into a new place and the carpets were severely stained as well as our two mattresses. I thought it wasn't possible to remove these stains, but Cyprian removed all of them. He went above and beyond, did the 2 mattresses, staircase + landing, 2 bedrooms and deep cleaned our sofa. I cannot recommend him enough and he is very fairly price."
> — **Alena Samuel**, 5 stars

> "Brillant work done today by Ciprian. Highly recommend ? carpet & sofa came up like new. Il be sure to use your services again. Thank you!!!!"
> — **John Kennedy**, 5 stars

> "Cyprian did an absolutely amazing job in my new home, cleaning 3 carpets with meticulous attention to detail - he answered all queries quickly and efficiently, was able to fit the job in in a timely manner and the service was excellent value, I recommend him to everyone."
> — **Rosy Natalie**, 5 stars

> "Not only did he arrive on time but did a wonderful job on my upholstery, carpets and rugs. He is extremely courteous and friendly and trustworthy . The standard of his work is impeccable. I cannot recommend him highly enough."
> — **Victor Williamson**, 5 stars

Note: four of the five testimonials name "Cyprian"/"Ciprian" as the technician who did the work — consistent with the site being a one-person/small operator business (matches the blog byline "Cyprian" seen on old posts, and the user's own email name).

No testimonials with review text were found on any other page (services, about, contact). No star-rating aggregate (e.g. "4.9 average from X reviews") is displayed anywhere.

## 4. PRICING (priority section)

### Published price table (homepage, both spotless.ie legacy content and mirrored on krystalklean.ie homepage)

| Service | Item | Price | Conditions | Source URL |
|---|---|---|---|---|
| Carpet Cleaning (Domestic) — "from €25" | Stairs and Landing | €50 | — | https://spotless.ie/ (redirects to https://krystalklean.ie/) |
| Carpet Cleaning (Domestic) | Living Room | €50 | — | same |
| Carpet Cleaning (Domestic) | Bedroom | €35 | — | same |
| Carpet Cleaning (Domestic) | Landing | €25 | — | same |
| Carpet Cleaning (Domestic) | Rug | €25 | — | same |
| Upholstery Cleaning (Domestic) — "from €7" | 1 Seat | €25 | — | same |
| Upholstery Cleaning (Domestic) | 2 Seats | €50 | — | same |
| Upholstery Cleaning (Domestic) | 3 Seats | €75 | — | same |
| Upholstery Cleaning (Domestic) | 4 Seats | €100 | — | same |
| Upholstery Cleaning (Domestic) | 1 Chair | €7 | — | same |
| Mattress Cleaning (Domestic) — "from €30" | Single Size | €30 | — | same |
| Mattress Cleaning (Domestic) | Double Size | €60 | — | same |
| Mattress Cleaning (Domestic) | King Size | €70 | — | same |

### Supporting pricing statements found elsewhere on the site

- Homepage FAQ ("How much is it to have a carpet cleaning in Dublin?"): *"For a typical 3-bedroom house, the cost for carpet cleaning is around 205€, which includes cleaning of the three bedrooms for 105€ and cleaning of the stairs and living area for 100€."* — **This is internally consistent** with the table above: 3 bedrooms × €35 = €105; stairs+landing (€50) + living room (€50) = €100. Total €205 checks out exactly.
- Carpet Cleaning service page FAQ (krystalklean.ie, current site) ("How much does carpet cleaning cost in Ireland?"): *"On average, professional carpet cleaning services in Ireland may range from €30 to €50 per room."* — a generic market statement, not a specific company quote, but broadly consistent with the per-room prices above (€25–€50).
- No pricing at all was found on the Upholstery Cleaning or Mattress Cleaning service pages (krystalklean.ie) themselves — only generic aftercare FAQs, no numbers.
- No pricing found on the /services/ overview page, /about-us/, or /contact/ pages.

### How many services have published prices

**All three core services (carpet, upholstery, mattress) have specific, itemized, per-room/per-item published prices**, all only on the homepage pricing table. No page-specific (e.g. per-service-page) pricing exists elsewhere on the current site — the service pages (carpet-cleaning, upholstery-cleaning, mattress-cleaning on krystalklean.ie) carry no numbers at all, only generic marketing copy and FAQs.

### Currency / trustworthiness assessment of the pricing

Mixed signal — **use with caution, treat as a starting reference point rather than gospel current pricing**:
- The pricing table is internally consistent (the 3-bedroom worked example matches the per-room prices exactly), which is a good sign it wasn't just made up loosely.
- However, the pricing table lives only on the "Spotless" legacy homepage content, which sits alongside a footer copyright of "© 2024" and blog posts dated March 2023 — while the *rest* of the live site (service pages, about, contact) has been reburanded to "Krystal Klean Express" with a different phone number, different email, and a claimed company history of "since 2008" / "over a decade" that contradicts the homepage's own "5+ Years Of Experience" stat counter. This inconsistency suggests the homepage pricing block may not have been actively maintained during the Krystal Klean rebrand and could be a legacy holdover rather than a current, deliberately-updated price list.
- No explicit "last updated" date exists anywhere near the pricing table.
- Given it's now 2026 and the visible dated content (blog posts, copyright notice) tops out at 2024, these prices are plausibly 2–3+ years old and have not been visibly revisited since. Given Irish inflation/wage growth since then, treat these as a **useful ballpark / structural reference** (i.e., the room-based pricing *model* — per-bedroom, per-seat, per-mattress-size — is sound and reusable) but **do not present these exact euro figures as "current" without deliberately re-pricing them** for the new site.

## 5. Service Descriptions / Process & Method Content

- **Carpet cleaning method:** Hot water extraction / steam cleaning is repeatedly cited as the primary/preferred method ("Hot water extraction, also known as steam cleaning, is often considered one of the most effective methods. It involves spraying hot water and detergent onto the carpet and then extracting the dirt and moisture with a powerful vacuum.")
- **Why hot water works** (About Us page): *"Depending on the type of dirt, hot water can be up to 50% more efficient than cold water and has a shorter drying time... The molecules in hot water move faster, which means they collide more frequently with dirt. No chemicals involved, less cleaning costs."*
- **Drying:** Air movers are used to speed up drying time (mentioned on Carpet Cleaning service page and shown in photo #2 above).
- **Mattress cleaning process** (Mattress Cleaning service page), presented as 3 named steps: Vacuuming (remove dead skin cells/debris), Deodorizing (remove sweat/dust-mite/odour sources), Stain Removal.
- **Upholstery cleaning:** low-moisture methods used to avoid over-saturating fabric; steam cleaning used but explicitly *not* recommended for delicate/water-sensitive fabrics (silk, velvet, some wool).
- **Water damage / flood restoration** (homepage, standalone section): positions the company for emergency carpet water-extraction after flooding — powerful extraction machines, specialised cleaning solutions, air movers; states first 24–48 hours are critical; claims 24/7 emergency response and "multiple carpet cleaning teams serving Dublin and surrounding counties."
- **Niche service pages exist for:** Residential Carpet Cleaning, Pet Stain & Odour Removal, Office Carpet Cleaning, Stairs Carpet Cleaning, Church/Communal-space Carpet Cleaning, Hotel Carpet Cleaning — each with its own descriptive paragraph (all on the homepage, long-form content blocks).
- **Process (3-step, repeated site-wide):** 1) Give us a call, 2) We come to your location, 3) We clean. Free estimate offered, response promised within 24 hours.
- **Money-back guarantee** claimed (homepage long-form section): "no-quibble money-back guarantee" if not satisfied — stated as a standing policy, not time-limited or condition-limited in the text.

## 6. FAQs

Extensive FAQ content exists in two layers:

**A. Homepage general FAQ** (large Q&A blocks, not just short answers) covering: opening hours, areas covered, services offered, trained/insured status, "how much is carpet cleaning in Dublin," how to get a quote, payment methods accepted (cash, bank transfer only — no card mentioned), whether customer needs to be home during the job.

**B. Service-page accordion FAQs** (krystalklean.ie), full Q&A captured:

*Carpet Cleaning FAQs:* deep cleaning carpet yourself, best cleaning method, cost of carpet cleaning in Ireland (€30–€50/room), is it worth cleaning carpet, is 20-year-old carpet worth cleaning, do carpets get dirtier after cleaning, cleaning frequency (12–18 months recommended in one place / "once or twice a year" in another — see Section 10 inconsistency note), stay-off-carpet time after cleaning (4–6 hours), can you use just hot water, stain protector value and longevity, insured/licensed meaning, how many technicians come, pre-arrival prep checklist.

*Upholstery Cleaning FAQs:* best way to clean fabric upholstery, cleaning sofa fabric, deep cleaning a couch/old upholstery, whether to wash upholstery fabric yourself, steam cleaning suitability (and which fabrics should NOT be steam cleaned — silk, velvet, some wool), laundry detergent warning, low-moisture cleaning, ingrained dirt removal, best detergent, carpet cleaner on fabric sofa warning.

*Mattress Cleaning FAQs:* best cleaning solution, is cleaning a used mattress worth it, DIY deep-clean method, heavily soiled mattress handling, deodorizing method, home remedies vs professional service.

## 7. Business Credibility Info

- **Certification:** "CTI certified by Prochem for the cleaning industry" — stated on every service page footer, with a "View certificate" link to a certificate scan image (`https://krystalklean.ie/wp-content/uploads/2024/03/Carpet-cleaning-service-Dublin.jpg`). Not downloaded for reuse (see Section 10 — it names Krystal Klean Express Limited).
- **Insurance:** "Fully Registered and Insured," "we carry both public and employer's liability insurance" (stated, not documented/linked).
- **Ownership:** "We are proud to be a 100% Irish owned business."
- **Track record stats (homepage counters):** 1267+ Orders, 324+ Trusted Clients, 5+ Years of Experience. Also stated in prose: "With more than 1,000 carpets cleaned in Dublin, SPOTLESS has established itself as a reputable brand..."
- **Conflicting company-age claim:** Carpet/Upholstery/Mattress service pages (krystalklean.ie) each state *"With over a decade of experience since 2008... "* — directly contradicting the homepage's "5+ Years Of Experience" counter. This is a genuine internal inconsistency (flagged in Section 10).
- **Legal/regulatory:** Homepage footer states: *"Spotless.ie is operated by Krystal Klean Express Limited, an authorised waste carrier holding a valid Waste Collection Permit issued by the National Waste Collection Permit Office (NWCPO), Permit No: NWCPO-25-13287-01."* (This permit is for waste carrying/house clearance, not specifically carpet cleaning, but is the only concrete regulatory credential found on the site.)
- **Eco claims:** "eco-friendly cleaning products," "wool-safe and eco-friendly detergents," safe for kids and pets — stated repeatedly, no certification/brand named for the products themselves.
- **Equipment:** No specific equipment brand is claimed in the text, but one product photo shows a machine bearing the brand **"Endeavor"** (a genuine commercial carpet-extraction machine brand) — this is real equipment visible in a photo, not a text claim.
- **Uniformed staff:** "Our staff is trained to the highest industry standards and is uniformed for easy identification" (text claim; also visible in several excluded photos — technicians wearing branded polo shirts/caps).

## 8. Contact Info

| Channel | Value | Source |
|---|---|---|
| Phone (legacy/Spotless-era, still listed as one of two current numbers) | +353 85 202 1222 / 085 2021222 | Homepage footer; also listed as second number on all current service pages |
| Phone (current/Krystal Klean primary) | 059 8652981 | All service pages, "GIVE US A CALL TODAY," contact page |
| Email (legacy) | info@spotless.ie | Homepage footer, homepage FAQ text |
| Email (current) | infokrystalklean@gmail.com | Contact page, all service pages |
| Address (legacy, homepage footer only) | Maple Ave, Stillorgan Business Park, Co. Dublin | Homepage footer |
| Address (current contact page) | No street address given — only "We are based in Dublin" | /contact/ page |
| Opening hours (homepage footer) | 8:00 AM – 20:00 PM (i.e. 8am–8pm) | Homepage footer |
| Opening hours (current contact page) | Monday–Friday: 8:00am–5:00pm | /contact/ page — **directly contradicts** the homepage footer's 8am–8pm claim, and also contradicts the homepage FAQ prose claiming "customer service department that operates 24/7, 6 days per week" |
| Facebook | facebook.com/KrystalKleanExpress | Homepage footer/social icons |
| Twitter/X | twitter.com/ExpressKlean | Homepage footer/social icons |
| Instagram | instagram.com/krystalkleanexpress | Homepage footer/social icons |
| YouTube | youtube.com/channel/UCbQaddg8N-22pU_s9WUJ3dA | Homepage footer/social icons |
| Pinterest | pinterest.ie/KrystalKleanExpressltd | Homepage footer/social icons |
| TikTok | tiktok.com/@cleaningcompanydublin | Homepage footer/social icons |

## 9. Local / Location-Specific Content

- **Areas covered, as stated on homepage / contact page:** Dublin, Kildare, Wicklow, Carlow.
- **Areas covered, as stated on service pages (krystalklean.ie):** "From Dublin, we extend our services to cover the areas of Kildare, Carlow, and Kilkenny" — note **Wicklow vs. Kilkenny swap** between the homepage/contact page list and the service-page list; another minor inconsistency.
- Homepage "Why Spotless" section names: "Dublin, Kildare, Wicklow, and Carlow."
- Named local content: blog post titles referenced from the homepage teaser cards — "Carpet cleaning in Lucan, Co. Dublin" and "Carpet Cleaning Blanchardstown" and "Upholstery Cleaning Blanchardstown" — these appear to be (or have been) local-suburb-targeted landing/blog content, dated March 16, 2023, byline "Cyprian." I was unable to locate live, working URLs for these specific posts during this audit (guessed slugs returned 404; they don't appear in the current 20-page blog archive). The current blog archive is now dominated by house-clearance-specific local pages instead (e.g. house-clearance-lucan-dublin, house-clearance-booterstown, house-clearance-marino, house-clearance-bayside, house-clearance-southside-dublin) — confirming the content marketing focus has shifted away from carpet cleaning locations toward house-clearance locations since the Krystal Klean rebrand.
- No dedicated "areas we cover" landing pages (e.g. /carpet-cleaning-dublin-4/, /carpet-cleaning-swords/) were found live on krystalklean.ie for carpet cleaning specifically — the area coverage claim is a single sentence repeated across pages, not a page network.

## 10. OLD BRANDING — Flagged Explicitly

This is the single most important structural finding of this audit:

1. **The whole domain has moved on.** `spotless.ie` redirects entirely to `krystalklean.ie`. There is no independent "Spotless" website anymore — only a homepage that still visually/textually presents as "Spotless" while every other page presents as "Krystal Klean Express."
2. **Two different brand names appear on the same site:** "SPOTLESS CARPET CLEANING COMPANY" (homepage hero, homepage FAQ prose, footer legal line) vs. "Krystal Klean Express" (every service page's "Why Choose Krystal Klean Express?" heading, about-us page title "KRYSTAL KLEAN EXPRESS," contact page, all social handles).
3. **Two phone numbers, two emails** are both live simultaneously (see Section 8) — not necessarily wrong, but a sign of an incomplete rebrand/merge.
4. **Contradictory company-age claims:** "5+ Years Of Experience" (homepage counter) vs. "over a decade of experience since 2008" (every service page).
5. **Contradictory opening hours** and **contradictory service-area lists** (Wicklow vs. Kilkenny) — see Sections 8 and 9.
6. **Visible watermarks/branding found in specific images (excluded from downloads):**
   - `sofa-cleaning-dublin.jpg` (upholstery page) — has a large, legible **"Krystal Klean Express Limited"** diamond-logo watermark in the bottom-right corner of a before/after sofa image.
   - `carpet-and-upholstery-cleaning-21.jpg` (homepage) — same diamond-logo watermark, bottom-right corner, on a before/after red-carpet image.
   - `Carpet-cleaning-Dublin-Sofa-cleaning-Dublin.jpg` (upholstery page) — real, otherwise-excellent action photo of a technician cleaning a sofa, but the technician's cap and polo shirt both carry legible embroidered "Krystal Klean Express" branding.
   - `carpet-and-upholstery-cleaning-19.jpg` (carpet page) — real overhead action photo of a technician cleaning patterned carpet, but the sleeve has legible printed text reading "krystalklean.ie".
   - `carpet-cleaning-dublin.jpg` and `carpet-cleaning-dublin-2.jpg` (both appear multiple places) — these are **not photographs at all**; they are marketing flyer/poster graphics carrying the full "KRYSTAL KLEAN EXPRESS LIMITED" logo, both phone numbers, the email address, and social icons baked directly into the image. Excluded entirely.
   - `Mattress-cleaning-001.jpg` — turned out to be a generic stock/clip-art infographic ("What's Living in Your Bed?") with no connection to real photography or any brand — excluded as non-genuine content, not for branding reasons.
   - The Prochem/CTI certificate image (`Carpet-cleaning-service-Dublin.jpg`, linked from every service page's "View certificate") names Krystal Klean Express Limited specifically — not downloaded/reused since presenting a competitor/former-entity's certification as the new site's own would be misleading.
7. **Recommendation for the new site:** Treat all of the above as reasons to (a) rewrite pricing/experience/hours claims fresh for the new "Carpet Cleaning Service" brand rather than copy them verbatim, and (b) only reuse the 14 photos listed in Section 1 / the Downloaded Files list below, all of which were individually checked and show no legible old-company branding.

---

## DOWNLOADED FILES

All 14 files below are saved in `C:\Users\cipri\Desktop\CLAUDE\carpetcleaningservice-ie\assets\staging\spotless\`. Each was individually inspected for legible old branding/watermarks before being kept.

| Filename in staging folder | Source URL | Content |
|---|---|---|
| `carpet-and-upholstery-cleaning-20.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-20.jpg | Technician in hi-vis vest wanding a dark office carpet, clean/dirty contrast visible |
| `carpet-cleaning-upholstery-cleaning-29.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/carpet-cleaning-upholstery-cleaning-29.jpg | Blue air-mover + before/after beige hallway carpet |
| `carpet-cleaning.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/carpet-cleaning.jpg | Full-scene technician actively cleaning a large office carpet, hoses/equipment visible |
| `carpet-cleaning-before-after-square.jpg` | https://krystalklean.ie/wp-content/uploads/2020/10/carpet-and-upholstery-cleaning-1.jpg | "Clean square" demo shot mid-pass on beige carpet |
| `carpet-cleaning-carlow-action.jpg` | https://krystalklean.ie/wp-content/uploads/2020/10/carpet-cleaning-carlow.jpg | Technician actively cleaning dark carpet in a furnished room |
| `carpet-cleaning-machine-endeavor.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/Carpet-Cleaning-3.jpg | Close-up of professional carpet-extraction machine (third-party "Endeavor" equipment brand) |
| `sofa-cleaning-carlow-result.jpg` | https://krystalklean.ie/wp-content/uploads/2020/10/sofa-cleaning-carlow.jpg | Finished/clean red loveseat sofa |
| `sofa-cleaning-carlow-action.jpg` | https://krystalklean.ie/wp-content/uploads/2020/10/sofa-cleaning-carlow-2.jpg | Gloved hands actively cleaning a brown suede-look sofa with an upholstery tool |
| `dublin-matress-cleaning.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/dublin-matress-cleaning.jpg | Before/after mattress stain removal, top-down |
| `mattress-cleaning-dublin.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/mattress-cleaning-dublin.jpg | Close-up wand cleaning a mattress, before/after gradient |
| `matress-cleaner.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/matress-cleaner.jpg | Close-up of mattress ticking/fabric, generic |
| `mattress-cleaning-carlow-before-after.jpg` | https://krystalklean.ie/wp-content/uploads/2024/02/matress-cleaning-carlow.jpg | Before/after mattress cleaning, top-down gradient |
| `mattress-cleaning-bedroom-bw.jpg` | https://krystalklean.ie/wp-content/uploads/2020/10/141756914_1511433072398305_8840712472195700777_n.jpg | B&W photo of mattress being wand-cleaned in a bedroom |
| `mattress-cleaning-wand-before-after.jpg` | https://krystalklean.ie/wp-content/uploads/2020/10/322402410_902875517386571_5988949942778539563_n.jpg | Before/after wand-cleaning close-up on a white mattress |

**Not downloaded (seen but rejected)** — for the record, in case they're needed later after cropping/editing: `sofa-cleaning-dublin.jpg` and `carpet-and-upholstery-cleaning-21.jpg` (both carry a corner watermark logo that could potentially be cropped out); `Carpet-cleaning-Dublin-Sofa-cleaning-Dublin.jpg` and `carpet-and-upholstery-cleaning-19.jpg` (both are strong action shots but have legible branding on the technician's clothing that would need blurring, not simple cropping); `carpet-cleaning-dublin.jpg` and `carpet-cleaning-dublin-2.jpg` (marketing flyers, not photos — not reusable at all); `Mattress-cleaning-001.jpg` (stock clip-art, not a real photo — not reusable); the Prochem/CTI certificate scan (names a different legal entity, should not be presented as the new site's own certification); two empty-room photos (`IMG_20230113_173904.jpg`, `IMG_20230113_173950.jpg`) that show laminate/vinyl flooring, not carpet, and are not relevant to a carpet cleaning site.
