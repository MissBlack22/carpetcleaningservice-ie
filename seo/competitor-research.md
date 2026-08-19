# Competitor Research — Dublin Carpet & Upholstery Cleaning SERPs

Research date: 2026-08-19
Method: live web search for the 15 target queries below, plus direct page fetches (title/H1/pricing/FAQ/word-count/content-depth) for the six most recurring competitors, plus a live DOM/schema.org inspection of one competitor's rendered page. All company names, prices, and claims below are taken directly from what was observed in search results or on the pages themselves — nothing invented.

Queries researched: "carpet cleaning Dublin," "carpet cleaners Dublin," "carpet cleaning near me Dublin," "professional carpet cleaning Dublin," "upholstery cleaning Dublin," "sofa cleaning Dublin," "mattress cleaning Dublin," "rug cleaning Dublin," "stain removal Dublin," "carpet cleaning price Dublin," "carpet cleaning Terenure," "carpet cleaning Rathmines," "carpet cleaning Ranelagh," "carpet cleaning Ballsbridge," "carpet cleaning Clontarf."

## 1. The competitive set

A small pool of companies dominates nearly every query above — the same 10-12 names recur across the generic, service, and suburb-level searches. That repetition itself is a signal: **whoever has built the most/best suburb pages is winning the long tail**, and a handful of names below appear because they've built dozens of individual location pages, not because they're bigger brands.

| Company | Domain | Notable positioning (as observed) |
|---|---|---|
| Renew Carpet Cleaning | renewcarpetcleaning.ie | 25+ years, premium/B2B trust angle (client testimonials from Brown Thomas, The Shelbourne Hotel), Woolsafe/Carpet Institute badges |
| Dublin Carpet Cleaning | dublin-carpetcleaning.ie | Largest visible location-page footprint (Terenure, Rathmines, Ranelagh, Ballsbridge, Clontarf, Baldoyle all found), "200% satisfaction promise," 1800 number |
| CarpetsClean.ie | carpetsclean.ie | The only competitor found with a full, itemized public price list and same-day/€59-from positioning baked into titles |
| Ace Carpet Cleaners | acecarpetcleaners.ie | Longevity claim (est. 1983), 350+ Google reviews, WhatsApp CTA (rare among competitors) |
| The Carpet Cleaning Company | carpet-cleaning.ie | Sandyford-based; genuinely hyperlocal suburb pages with real street names and named commercial clients (US Embassy, Herbert Park Hotel) |
| Eco Clean Solutions | ecocleansolutions.ie | "1000+ Positive Reviews" baked into page titles; suburb pages for Terenure/Rathmines/Ranelagh |
| Aqua-Dry | aqua-dry.com | 40+ years, NCCA-certified, 1,100+ reviews, name-drops Arnotts and the National Concert Hall as clients |
| Professional Carpet Cleaning ("Happy Clean") | professionalcarpetcleaning.ie | Prochem/Karcher branded equipment, 24/7 "emergency" stain removal claim, Dublin/Kildare/Meath coverage |
| carpetcleaning.ie | carpetcleaning.ie | Has a standalone prices page with real published figures (see §4) |
| carpet-clean.ie | carpet-clean.ie | Widest stated geographic coverage (Dublin, Meath, Kildare, Louth, Wicklow); has a dedicated `/prices/` page and Clontarf/mattress pages |
| RugSpa | rugspa.ie | Rug-only specialist with a physical facility (Rathcoole) — a niche-authority play rather than a generalist |
| Chem-Dry Ireland (network) | chemdry.ie + regional sub-brands (chemdrycentral.ie, chemdryexecutive.ie) | International franchise brand recognition; fragmented across multiple franchisee domains |
| Perfect Clean | perfectclean.ie | Has cost-guide blog content and a Terenure page; mentions "encapsulation" as a distinct method |
| Cleaning Team | cleaningteam.ie | "300 5-star reviews + video testimonials" and a "€30 discount" promo baked into the title |
| Krystal Klean Express | krystalklean.ie | Related to this project's own domain history (see current-site-audit.md §10) — appears actively indexed with its own suburb pages; not a competitor to beat but a relationship to manage |

Smaller names also appearing once or twice: Stillorgan Carpet Cleaning (35+ yrs, part of a cleaning group), Emerald Carpet Cleaning (money-back guarantee), Chem2Clean/carpetcleanersdublin.ie (Wicklow/Kildare/Meath), Sandyford Carpet Cleaning (has a 2025 pricing blog post), Absolute Cleaning, Shining Oven (carpet cleaning as a cross-sell off an oven-cleaning business), Go Green Cleaning, Clean My Mattress, dublin-housecleaning.ie, clean2shine.ie, All Green Carpet Clean, Spotless.ie.

## 2. Page types and structure, in detail

I directly fetched and analyzed six of the recurring competitors' pages (homepage plus, where applicable, a Terenure or Ballsbridge location page) to see actual title tags, H1s, FAQ presence, and word counts rather than relying on search snippets alone.

**Renew Carpet Cleaning**
- Homepage title: *"Professional Carpet and Fabric Cleaning Dublin - Renew Carpet Cleaning"*; H1: *"A Healthier Living Environment"* (benefit-led, not keyword-led).
- 11 services listed in nav (carpet, upholstery, tile & grout, anti-bacterial, rug, curtain, mattress, leather, wood floor, carpet protection, natural stone).
- Terenure page title: *"Professional Carpet Cleaning in Terenure - Renew Carpet Cleaning"*, H1 *"Terenure's #1 Carpet Cleaning Company"*, ~2,000–2,500 words, has a 6-question FAQ. **But the location-specific content is minimal** — beyond the headline, the body is generic Dublin-wide copy with no real Terenure detail. No pricing anywhere on the page (they push toward a phone call / quote form instead).

**Dublin Carpet Cleaning**
- Terenure page title: *"Carpet Cleaning Terenure - Sofa, Upholstery, Rug & Mattress Cleaning"*, H1 *"Carpet Cleaning Terenure"*, longest word count found (~3,500–4,000 words) but an estimated **80–85% of that content is reused boilerplate** across suburb pages — Terenure-specific mentions amount to a couple of FAQ lines and one image caption. Has a 5-question FAQ. No pricing shown, only "prices vary by job."

**CarpetsClean.ie — the strongest all-round competitor found**
- Title (as server-rendered, seen via fetch): *"Carpet Cleaning Terenure Dublin 6W | From €59 | Same-Day | CarpetsClean.ie"*, H1 *"Carpet Cleaning Terenure — Professional Service in Dublin 6W"*.
- **Full itemized public pricing** (see §4) — the only competitor found doing this thoroughly.
- Reviews shown with a specific figure: 4.9/5 from 500+ verified reviews, plus a named testimonial quote.
- Has an FAQ, internal links to other real suburb pages (Rathmines, Harold's Cross, Templeogue), and genuine local landmark detail — not just a find-and-replace suburb name.
- ~2,800–3,200 words, well-structured (process steps, before/after, method comparison, property-type breakdowns).
- **Confirmed technical SEO bug, checked directly in the live DOM:** on the `/areas/carpet-cleaning-terenure` page, `document.title` in the rendered browser still shows the generic homepage title (*"Carpet & Upholstery Cleaning Dublin €59 | CarpetsClean.ie"*) rather than the page-specific title that the raw fetched HTML has — and the `<link rel="canonical">` tag on that same page points to `https://carpetsclean.ie/` (the homepage), **not to itself**. That's a real, verifiable canonicalization defect: it risks Google treating every one of their suburb pages as a duplicate of the homepage rather than indexing them as distinct pages. Despite having the best content of any competitor reviewed, they have a live technical bug undermining it — a concrete opening.

**Ace Carpet Cleaners**
- Title *"Ace Carpet Cleaners | Over 350 Reviews On Google - Full Services"*, H1 *"Best Cleaning Company in Dublin"*.
- Strong trust signals: established 1983, 345+ reviews, 10 named testimonials with dates.
- Three CTA channels — quote form, two phone numbers, **and WhatsApp** (the only competitor reviewed offering WhatsApp).
- **No pricing shown anywhere. No FAQ section found.** Content depth described as "moderate" — mostly company/review information, not in-depth service or location content.

**The Carpet Cleaning Company (Ballsbridge page)**
- Title *"Ballsbridge Carpet Cleaning | The Carpet Cleaning Company"*, H1 *"Ballsbridge Carpet Cleaning"*, with an H2 giving a direct local phone number.
- **Genuinely strong hyperlocal content**: names actual streets served (Clyde Road, Elgin Road, Raglan Road, Lansdowne Road, Haddington Road, Northumberland Road), named commercial clients (US Embassy, Herbert Park Hotel, Lansdowne Rugby Football Club, D4 Hotel), and local history/trivia (Ballsbridge's development, the RDS move in 1879, Brendan Behan/Patrick Kavanagh associations).
- But short: ~1,200–1,400 words, **no FAQ, no pricing** (only a generic "€25 off" promo).

## 3. Recurring strengths across the field (what to match)

- **Local specificity as a ranking lever**: nearly every serious player has at least attempted individual suburb pages for Terenure, Rathmines, Ranelagh, Ballsbridge, and Clontarf — this confirms Dublin suburb-level local SEO is a proven, working pattern in this niche, not a guess.
- **FAQ blocks are common** on the better location pages (Renew, Dublin Carpet Cleaning, CarpetsClean all have them) — table stakes for this SERP.
- **Review-count-in-title** is a widely used trust tactic (Ace: "350 Reviews," Eco Clean Solutions: "1000+ Positive Reviews," CarpetsClean: "4.9★ from 500+ reviews" in the meta description).
- **Phone-first CTAs** dominate; most competitors lead with a phone number, several use a single memorable 1800/01 number across all pages.
- **Franchise/longevity branding** matters to some players (Aqua-Dry 40 yrs, Ace since 1983, Stillorgan 35 yrs, Renew 25 yrs) — years-in-business is used as the primary trust anchor when review counts alone aren't enough.

## 4. Pricing — the field is split, and this is a real opportunity

Most of the *trust-led* incumbents (Renew, Ace, Dublin Carpet Cleaning, The Carpet Cleaning Company) **show no pricing at all** — every page pushes toward a phone call or quote form. Only a minority publish real numbers:

- **CarpetsClean.ie** (from search-result review): single room from €59; 3 rooms from €149; 5 rooms + stairs/landing from €249; stairs & landing from €39; upholstery per item from €39; 2/3-seater sofa from €69; mattress from €59; rug from €49; 3-item bundle €150; end-of-tenancy package from €149.
- **carpetcleaning.ie** publishes a dedicated prices page stating a guideline range of **€85–€350, average ≈€190** for a Dublin carpet cleaning job.
- Independent third-party estimate (from a competitor's own cost blog content, so treat as one data point, not verified fact): **€30–€60 per room**, or roughly **€99–€159** for a standard-sized home clean, with **€139** cited as a typical figure; some providers publish flat per-bedroom rates (e.g. one bedroom €40+VAT, two bedrooms €80+VAT, three bedrooms €105+VAT).
- Terenure-specific: one provider's title cites a **"minimum charge of €60 per project"**; another cites **"stairs from €39 per flight."**

**Takeaway:** transparent, itemized pricing is still the exception, not the norm, among the trust-strongest competitors — which is exactly why it's a differentiator, not a commodity, in this market.

## 5. What users complain about / what's missing (from what's directly observable)

I did not find a dedicated public Trustpilot/Google review page for `carpetcleaningservice.ie` itself to mine for complaints (the domain is currently offline — see current-site-audit.md). Within the competitor set, the *absence* patterns below function as the practical "complaint" signal — friction points implied by what competitors force users to do:

- **No pricing shown** on most of the trust-strongest sites forces every visitor into a "request a quote" round-trip before they know if the service is even in budget — a well-documented conversion killer for local services, and the majority pattern here.
- **No FAQ** on Ace Carpet Cleaners or The Carpet Cleaning Company's location pages despite otherwise strong trust content — leaves basic questions (drying time, pet safety, cost drivers) unanswered on the page.
- **Templated/duplicate suburb content** (Dublin Carpet Cleaning's ~80-85% reused boilerplate; Renew's "minimal location-specific content" beyond the headline) is a thin-content pattern that a genuinely differentiated local page can beat on relevance and, likely, on ranking quality signals.
- **No WhatsApp** on all but one competitor reviewed (Ace) — a real gap given WhatsApp's popularity for quick quote requests in Ireland.
- **A technical canonical/title bug** on CarpetsClean.ie's own location pages (see §2) — their best-in-class content isn't fully backed by correct technical SEO.

## 6. Likely traffic sources and keywords each type of competitor owns

- **Generic head terms** ("carpet cleaning Dublin," "carpet cleaners Dublin," "professional carpet cleaning Dublin") are dominated by the longest-established, highest-review-count brands: Renew, Ace, Aqua-Dry, Happy Clean/professionalcarpetcleaning.ie, carpetcleaningdublin.ie — these are the sites with the deepest backlink/review history, not necessarily the best on-page content.
- **Service-specific terms** ("upholstery cleaning Dublin," "sofa cleaning Dublin," "mattress cleaning Dublin," "rug cleaning Dublin") pull in a wider, more fragmented set including specialists (RugSpa for rugs, ChemDry variants, Clean My Mattress, Go Green Cleaning) alongside the generalists — specialist framing clearly earns visibility here even from smaller domains.
- **"Price" intent** ("carpet cleaning price Dublin") surfaces a distinct cluster of *content/blog* pages rather than service pages — clean4u.ie, perfectclean.ie, sandyfordcarpetcleaning.ie, carpetcleaning.ie, homeconcierge.ie all rank here specifically because they published a cost-guide article, not because they're the biggest brand. This is a clear, cheap, replicable content opportunity.
- **Suburb-level terms** ("carpet cleaning Terenure/Rathmines/Ranelagh/Ballsbridge/Clontarf") are owned almost entirely by whoever bothered to build a dedicated page for that exact suburb — the same 5-7 names (Dublin Carpet Cleaning, Eco Clean Solutions, CarpetsClean.ie, Renew, The Carpet Cleaning Company, krystalklean.ie, Absolute Cleaning, carpet-clean.ie, Aqua-Dry) repeat across every suburb query, confirming this is a template-and-scale opportunity: build it once, well, and it should compound across every Dublin suburb.

## 7. Content gaps — what nobody (or almost nobody) is doing well

1. **No single competitor combines transparent itemized pricing + genuinely unique, hyperlocal suburb content + correct technical SEO.** CarpetsClean.ie has pricing and decent local content but a canonical/title bug; The Carpet Cleaning Company has excellent hyperlocal detail but no pricing and no FAQ; Renew and Dublin Carpet Cleaning have length and FAQs but generic/duplicated local content and no pricing at all. Owning all three at once is currently unclaimed.
2. **Cost/price-guide content is a proven, separate traffic channel** (see §6) that most service-page-only competitors ignore — a well-built, honestly-numbered pricing/FAQ hub page is low-effort, high-relevance content nobody dominant has combined with their main service pages.
3. **WhatsApp + real click-to-call** together, on every page, is essentially unclaimed (only Ace has WhatsApp; the old carpetcleaningservice.ie site, per current-site-audit.md, had neither working tel: links nor WhatsApp).
4. **Video testimonials** are rare (only Cleaning Team was found using them) despite being a strong trust format for a hands-on home service.
5. **Service-combo/bundle pricing** (CarpetsClean's "3-item bundle €150," end-of-tenancy packages) is only lightly explored — a clearer, more prominent bundle structure (e.g., carpet + upholstery + mattress in one visit) is an underused angle nearly everyone could push harder.
6. **No competitor reviewed publishes real before/after specifics tied to the exact suburb page** (e.g., "here's a stair runner we cleaned on X Road last month") — The Carpet Cleaning Company gets closest with street-name detail, but even they don't pair it with visual proof on the same page.

## 8. How we build something better — concrete plan, not generic advice

- **Location pages that are actually different, page to page**: for each target suburb (start with Terenure, Rathmines, Ranelagh, Ballsbridge, Clontarf — the exact ones searched here, since competitor presence proves demand), write real local specifics per page (landmark streets/areas, housing stock notes — e.g. period-terrace vs. new-build carpet considerations — building types actually found there) instead of the find-and-replace pattern Dublin Carpet Cleaning and Renew both fall into. This directly targets the weakness documented in §2 and §5.
- **Publish real, itemized prices on every relevant page**, not just a separate pricing page — matching and slightly out-doing CarpetsClean.ie's transparency (per-item, per-bundle pricing), since it's the single clearest differentiator against the majority "call for a quote" incumbents (Renew, Ace, Dublin Carpet Cleaning, The Carpet Cleaning Company all withhold pricing).
- **Get the technical SEO fundamentals right where a real, proven competitor visibly got them wrong**: unique self-referencing canonical per page, unique title per page reflected correctly in the rendered DOM (not just server HTML), and full JSON-LD (LocalBusiness/ProfessionalService + Service + FAQPage + BreadcrumbList) on every location and service page — closing both the CarpetsClean.ie canonical bug pattern and the old carpetcleaningservice.ie's total absence of schema (see current-site-audit.md §5).
- **Ship a genuine cost/FAQ hub page** targeting "carpet cleaning price Dublin" and per-service price questions with real, honestly-labelled figures (ranges, what affects cost, per-room/per-item breakdown) — this channel is proven (§6) and currently won mostly by smaller blog-style pages, which is an easy bar to clear with a properly designed page instead of a blog post.
- **Combine WhatsApp + tel: click-to-call + a short quote form on every page**, closing a gap only one competitor (Ace) partially addresses and the old site never had at all.
- **Add short, real video or photo before/after proof tied to the specific suburb page** — the closest any competitor gets is street-name-dropping (The Carpet Cleaning Company) or generic testimonials (Renew, Ace); pairing genuine local before/after evidence with a named area is unclaimed ground.
- **Push bundle pricing harder as a named offer** (e.g., a clearly branded "carpet + upholstery + mattress" package), extending the one bundle example found (CarpetsClean's €150 3-item bundle) into a more prominent, repeatable cross-sell across every service page.
- **Resolve the relationship with krystalklean.ie deliberately** (flagged in current-site-audit.md §10) before publishing overlapping suburb pages under two domains from the same operator — otherwise the new site risks recreating the old site's own worst mistake: competing against its own related properties in the same SERP.

None of the above is "copy a competitor." Each point targets a specific, cited gap — a missing price, a broken canonical tag, 80% duplicated boilerplate, an absent FAQ, a missing WhatsApp button — that a real competitor's own page demonstrably has, verified directly rather than assumed.
