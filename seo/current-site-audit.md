# Current Site Audit — carpetcleaningservice.ie

Audit date: 2026-08-19
Auditor method: live DNS/HTTP checks (Google public DNS resolver, direct browser navigation, WebFetch), Wayback Machine (web.archive.org) historical capture, live Google index snippets via web search.

## 0. Headline finding: the live site is currently unreachable

As of 2026-08-19, **`carpetcleaningservice.ie` and `www.carpetcleaningservice.ie` do not resolve** — the domain returns `NXDOMAIN` (does not exist) from Google's public DNS resolver (`dns.google`), and every attempt to load it (direct browser navigation to both the bare domain and the `www` subdomain, and a raw `WebFetch`) failed with a DNS resolution error, not a server error. This means:

- There is currently no live page to crawl, no live `robots.txt`, and no live `sitemap.xml` — all three are unreachable because the domain itself is not resolving. I did not fabricate content for any of these; they simply could not be fetched.
- This is either an expired/lapsed domain registration, a DNS misconfiguration, or a deliberate takedown. I cannot determine which from the outside, but the practical implication for the rebuild is the same either way: **there is no current live site to preserve pixel-for-pixel** — this is a genuine from-scratch rebuild, not a redesign of something currently online.

Because the live site couldn't be crawled, the rest of this audit is based on the **one and only Wayback Machine snapshot** that has ever been captured for this domain, plus what Google's live index still shows in search snippets. Both are flagged clearly below as historical/indirect evidence, not current-state fact.

## 1. What Wayback Machine actually has

I queried the Internet Archive's CDX index for every URL ever captured under `carpetcleaningservice.ie`. Result: **exactly one URL, one capture, ever**:

- `https://www.carpetcleaningservice.ie/` — captured **2022-07-04** (`20220704091141`), HTTP 200, `text/html`.

No `/services`, `/contact`, `/about`, or location subpages were ever independently archived, even though the homepage links to paths like `/services`, `/services/carpet-cleaning`, `/services/upholstery-cleaning`, `/services/rug-cleaning`, `/articles`, `/testimonials`, `/contact`, `/carpet-cleaning-kildare`, and several `/carpet-cleaning-dublin/carpet-cleaning-<suburb>` URLs (see §3). I cannot audit those pages' actual content — only that the homepage nav/links to them existed in 2022.

**Important caveat:** Google's live search index currently shows a different page `<title>` for `www.carpetcleaningservice.ie/` — **"Upholstery Cleaning | Carpet Cleaning Service"** — than the one captured by Wayback in 2022 (see §2). That means the site was edited at least once after mid-2022, and I have **no archived copy of that later version**. Everything below about content/structure reflects the 2022 snapshot only, explicitly labelled as such.

## 2. Branding mismatch worth flagging

The domain is `carpetcleaningservice.ie`, but the 2022-archived homepage's actual `<title>` and on-page branding is **"Dublin Carpet Cleaning | Dublin Upholstery Cleaning | Dublin Mattress Cleaning | Krystalklean.ie"** and the business name used throughout the body copy is **"Krystal Klean Express"**, not "Carpet Cleaning Service." The domain appears to have been one property in a small cluster run by the same operator (see §6) — a doorway/landing domain pointing back at the main brand — rather than a standalone, consistently-branded business site. Google's current indexed title ("Upholstery Cleaning | Carpet Cleaning Service") suggests a later edit moved toward the domain's own name, but again, that version was never archived so its actual content is unknown.

## 3. Site structure / URLs discovered

From the 2022 homepage's internal links (this is a link inventory, not proof these pages had unique, substantial content — they were never independently captured):

- `/` (homepage — the only page ever archived)
- `/services`, `/services/carpet-cleaning`, `/services/upholstery-cleaning`, `/services/rug-cleaning`
- `/articles`
- `/testimonials`
- `/contact`
- `/carpet-cleaning-dublin`
- `/carpet-cleaning-kildare`
- `/carpet-cleaning-dublin/carpet-cleaning-rathmines`
- `/carpet-cleaning-dublin/carpet-cleaning-clontarf`
- `/carpet-cleaning-dublin/carpet-cleaning-donnybrook`
- `/carpet-cleaning-dublin/carpet-cleaning-dalkey`
- `/carpet-cleaning-dublin/carpet-cleaning-blanchardstown`
- `/carpet-cleaning-dublin/carpet-cleaning-ballsbridge`
- `/carpet-cleaning-dublin/carpet-cleaning-rathfarnham`

So there was at least a nominal attempt at suburb-level location pages (Rathmines, Clontarf, Donnybrook, Dalkey, Blanchardstown, Ballsbridge, Rathfarnham), but with no archived copies I cannot say whether these had real unique content or were thin/stub pages. Given the platform (see below), thin content is the likely case.

**Platform:** The page is built on **Google Sites** (free website builder), not custom code or a mainstream CMS. Evidence: image assets are hosted on Google's `lh*.googleusercontent.com` CDN, internal anchors use Google Sites' auto-generated heading-ID format (`#h.auezlapxpeov` etc.), and outbound links are wrapped in Google's own click-tracking redirector (`google.com/url?q=...`). This has real consequences noted throughout this audit (no custom `<head>` control, no schema support, awkward heading semantics).

## 4. Content themes, services, locations, pricing (2022 snapshot)

**Services mentioned:** carpet cleaning, rug cleaning, mattress cleaning, upholstery/sofa cleaning, stain removal (wine, coffee, blood, nail varnish, paint, glue, slime, marker, pee, milk, tea), end-of-tenancy cleaning, plus a long tail of adjacent (non-carpet) services also promoted on the same page: driveway cleaning, power washing, after-builder cleaning, high-level cleaning, house clearance, office cleaning — i.e. the page reads as a general property-cleaning outfit using carpet cleaning as the lead service, not a specialist carpet/upholstery business.

**Locations claimed:** "Dublin, Carlow and Kildare area" in body copy; a dedicated "carpet cleaning Kildare service" process section; a phone number with a **059 area code (Carlow/Kildare)**, not a Dublin 01 number — a real brand/geography mismatch for a site titled "Dublin Carpet Cleaning."

**Pricing:** A "PRICES" heading exists in the page's heading structure, but **no actual price figures, ranges, or a price list were found** in the extracted page text. Either the section only said something like "contact for a free quote," or that content wasn't capturable in the archive. Either way: **no verifiable pricing was shown**, which should be treated as a gap, not preserved.

**Contact details found (plain text only — see §7):**
- Phone: `+353 59 865 2981` and `0852021222`
- Email: `infokrystalklean@gmail.com` — a free Gmail address, not a branded domain email, which is a weak trust signal for a professional service business.

**Reviews:** Six Google reviews were embedded as static text (names, star ratings, quotes) — e.g. reviewers thanking "Cyprian"/"Ciprian" by name — but as plain HTML text, not as marked-up, schema-linked review data (see §5).

**Content quality issue:** one heading reads "Our Cleaning **М**ethods in Dublin" — the "M" is a Cyrillic character, not Latin — a small but telling sign of careless copy-paste or low-quality content production that should not be repeated.

## 5. Metadata, headings, and schema.org — this is the biggest concrete weakness

Verified directly from the archived DOM (via script inspection, not guesswork):

- **Meta description: none.** `<meta name="description">` was empty/absent.
- **Canonical tag: none.**
- **Structured data (JSON-LD or any schema.org markup): zero.** No `LocalBusiness`, no `Organization`, no `Review`/`AggregateRating`, nothing — despite the page visibly displaying star ratings and reviews as text. This is a hard, unambiguous gap; a Google Sites page has no mechanism to add this at all.
- **H1s were broken/misused.** The page had **four** `<h1>` elements, and none of them were the actual page topic: `"404"` (leftover/placeholder), `"OUR GOOGLE REVIEWS"`, `"ARTICLES"`, `"EXPERT CARPET CLEANING IN DUBLIN"`. Multiple H1s with the wrong semantic content is a real on-page SEO defect.
- **H2s (29 of them) were a chaotic mix**, including large blocks of paragraph copy styled as H2 (e.g. the entire opening sales pitch paragraph was itself an H2), plus blog-post-style titles crammed with Dublin suburb names apparently for keyword coverage rather than genuine articles: *"HOW OFTEN SHOULD YOU CLEAN YOUR CARPET ARTANE," "4 COMMON CARPET STAINS/CARPET CLEANING BALLSBRIDGE," "10 REASONS TO HAVE CARPETS CLEANED BALLYBOUGH," "PET PEE STAINS CARPET CLEANING BALLYMUN."* This reads as an attempt to rank for many suburb names by stuffing them into headline-style text on one single page, rather than building real per-suburb pages — a thin/spammy on-page tactic, not a content strategy worth preserving.
- **Viewport meta tag was present** (`width=device-width, initial-scale=1`), so at least basic mobile responsiveness was declared — Google Sites templates are mobile-responsive by default, which is the one structural positive here.

## 6. Internal linking / nav / footer / off-site network

The homepage's ~109 unique outbound links were **overwhelmingly not internal navigation to its own content** — they were:

- Links to a **separate, more built-out site**, `krystalklean.ie`, which appears to have (per its own linked URLs) dozens of individual suburb landing pages: `dublin-d2`, `upholstery-cleaning-d15`, `dublin-kildare-wicklow`, `dublin-4`, `naas-house-cleaning`, `house-clearance`, `lucan`, `dalkey`, `dublin-carpet-cleaning`, `carpet-cleaning-leixlip`, `churchtown`, `donnybrook`, `upholstery-cleaning-dundrum`, `carpet-cleaning-drumcondra`, `blanchardstown-d15`, `carpet-cleaning-maynooth`, `celbridge`, `sandyford-2`.
- Links to **eight or more separate free `sites.google.com/view/...` microsites** (`dublincleaningservices`, `dublinsofacleaning`, `endtenancycleaning`, `dublinpowerwashing`, `pressurewashingdublin`, `highlevelcleaning`, `upholsterycleaningdublin`), each apparently a single-topic satellite page.
- Links to **four different Google Business Profile review pages** under slightly different business names (`KrystalKleanExpress`, `krystal-klean-express-after-bu`, `carpet-cleaning-service-upholste`, `krystal-klean-express-limited`) — multiple listings for what looks like one business, which is a duplicate-listing/local-SEO risk on Google's side, not just a website issue.
- Social links to Facebook (two variants), Instagram, YouTube, and TikTok.
- Six Google Maps links, and one link to `bona-ireland.ie` (a flooring-care product brand, likely a supplier reference).

**No clear, conventional footer or top nav was identifiable from the archive** in the sense of a normal coded site — Google Sites renders navigation as its own template chrome, and the crawlable link list above is what actually exists in the page body. There was **no genuine primary/footer nav hierarchy worth preserving**; this whole link cluster reads as an informal network of thin, interlinked doorway pages built for local SEO reach rather than a coherent one-brand site architecture.

## 7. Conversion elements

- **Phone numbers:** present as plain text only. I found **no `tel:` links** in the DOM — meaning on mobile, a visitor could not tap to call directly; they'd have to manually copy/dial the number. This is a real, fixable conversion gap.
- **Email:** present as plain text; the one `mailto:` reference found in the archive was malformed (rewritten incorrectly by the Wayback proxy), so I can't confirm it was a working clickable link in the original either.
- **Contact form:** **none found.** `document.querySelectorAll('form')` returned zero forms on the homepage. There's a `/contact` link in nav, but since no subpage was archived, I cannot confirm a form ever existed there.
- **WhatsApp:** no WhatsApp link or button found.
- **Quote request:** no dedicated "get a quote" form or widget found on the homepage; the CTA was essentially "call or email us."

## 8. Images/assets

30 `<img>` elements found, **all hosted on Google's `lh*.googleusercontent.com`** (Google Photos/Business CDN), which is consistent with Google Sites + imported Google Business Profile photos rather than professionally produced, self-hosted site imagery. **Alt text was essentially absent** — most images had `alt=null`, and the rest just said the generic word "Carousel image" with no descriptive content. Zero SEO or accessibility value from image alt text. (Per instructions, I did not download any images — this is based on `src`/`alt` attributes only.)

## 9. robots.txt and sitemap.xml

**Unreachable.** Since the domain does not currently resolve at all, `robots.txt` and `sitemap.xml` cannot be fetched live. I also could not find either in the single Wayback capture (Wayback only archived the homepage document itself, not these auxiliary files). I am not going to guess their historical contents — there is no evidence either way.

## 10. Related/adjacent property to be aware of

Live web search results (as of today) still surface **`krystalklean.ie`** as an apparently active, indexed site with its own suburb pages (e.g. a result for `krystalklean.ie/carpet-cleaning-rathcoole/` and `krystalklean.ie/service/carpet-cleaning/` appeared in searches run for this audit). This looks like the same operator's primary/current brand. This isn't part of the scope of this audit, but it's worth the team flagging explicitly before launch: **make sure the new `carpetcleaningservice.ie` site has a clear, non-duplicating relationship to `krystalklean.ie`** (distinct positioning, or an intentional consolidation/redirect strategy) rather than accidentally competing with itself in Google's results the way the 2022 version's link network suggests it may have been doing.

## 11. Overall verdict

**What's worth preserving conceptually (ideas, not content/code):**
- The *breadth* of services (carpet, rug, upholstery/sofa, mattress, stain removal, end-of-tenancy) is a reasonable service set to keep.
- The instinct to target individual Dublin suburbs (Rathmines, Clontarf, Donnybrook, Dalkey, Blanchardstown, Ballsbridge, Rathfarnham, Kildare) for local SEO was directionally right — competitors that do this well are winning on those exact terms (see companion competitor-research.md).
- Real customer reviews naming the technician were a nice authentic-trust touch — but need to be properly sourced/consented and marked up with schema, not just pasted as text.

**What's weak, thin, outdated, or actively worth abandoning:**
- The domain is currently **not even resolving** — there is nothing live to preserve as-is.
- Built on a free, uncustomizable platform (Google Sites) with **zero structured data**, broken/duplicate H1 usage, and paragraph text mis-tagged as headings.
- No pricing shown anywhere despite a "Prices" heading existing.
- No contact form, no click-to-call, no WhatsApp — meaningful, avoidable conversion friction.
- Zero meaningful image alt text; all imagery borrowed from Google's CDN rather than owned/optimized assets.
- A sprawling network of thin satellite microsites and multiple Google Business Profiles under near-duplicate names — a legacy footprint that's more liability (duplicate/thin content signals) than asset.
- Suburb "coverage" achieved by cramming location names into homepage blog-title-style headings rather than real, individually indexable, substantive location pages.
- Branding/domain mismatch (site branded "Krystal Klean Express," phone number in a non-Dublin area code, generic Gmail address) undermines the "Dublin carpet cleaning specialist" positioning the domain name implies.

**Bottom line:** this is a genuine ground-up rebuild. There is no live content, code, or design to migrate — only a handful of directional lessons (service list, suburb targeting, real reviews) worth carrying forward conceptually, and a long list of concrete technical/SEO/conversion mistakes to deliberately avoid repeating.
