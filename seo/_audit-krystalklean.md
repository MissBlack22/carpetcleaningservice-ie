# Krystal Klean Express (krystalklean.ie) — Source Audit

Audit date: 2026-08-19. Source: https://krystalklean.ie/ (owner's existing Dublin cleaning business — Krystal Klean Express Limited). Purpose: extract reusable real photos, factual content, and genuine testimonials for the new "Carpet Cleaning Service" lead-gen site. This is an internal source-library audit, not a competitor teardown.

Pages actually inspected: homepage, /about-us/, /services/, /contact/, /blog/, all 5 service pages (`/service/carpet-cleaning/`, `/service/upholstery-cleaning/`, `/service/mattress-cleaning/`, `/service/power-washing/`, `/service/house-clearance/`), 5 testimonial permalinks (`/testimonial/...`), `/carpet-cleaning-dublin/` (blog/location post), plus the XML sitemap index and its 6 child sitemaps (post-sitemap: 81 URLs, page-sitemap: 14 URLs, testimonial-sitemap: 5 URLs) to map the full site. Also spot-checked two orphaned legacy pages (`/about-us-3/`, `/blog-2/`) found in the page sitemap but not linked from the main nav.

The site is a real, active WordPress business site (theme: a "Mr. Handy"/cleaning WP theme), not a doorway page. It runs Elementor/WPBakery, All in One SEO (which generates the sitemaps), and has genuine local blog content (81 posts, mostly location-specific "House Clearance [Dublin area]" and a handful of "Carpet Cleaning [area]" / "Power Washing [area]" pages).

---

## 1. Genuine photographs found

All confirmed via direct visual inspection (not just filenames). "Clean" = no visible branding issue. "FLAGGED" = old branding visible, needs cropping/editing before reuse.

| Image URL | Shows | Page(s) seen on | Status |
|---|---|---|---|
| `wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-20.jpg` | Close-up of carpet-cleaning wand mid-pass on a dark grey carpet, clear before/after clean line | Homepage, /service/carpet-cleaning/ | Clean — genuine, high quality |
| `wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-21.jpg` | Technician in hi-vis vest hot-water-extraction cleaning an office carpet, hoses/bucket/equipment visible | Homepage, About Us, /service/carpet-cleaning/ | Clean |
| `wp-content/uploads/2024/02/carpet-cleaning-upholstery-cleaning-29.jpg` | Split before/after of a beige hallway carpet, blue air-mover (brand "Tripp", not Krystal Klean) visible in "after" shot | /service/carpet-cleaning/ | Clean |
| `wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-18.jpg` | Overhead shot of technician cleaning a patterned blue/tan commercial carpet with wand+hose | /carpet-cleaning-dublin/ | Clean |
| `wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-19.jpg` | Same shoot as #18, overhead, technician cleaning patterned carpet | /carpet-cleaning-dublin/ | **FLAGGED** — "krystalklean.ie" printed on the technician's shirt sleeve, clearly legible. Needs cropping to exclude the shirt/name area, or skip. |
| `wp-content/uploads/2024/02/dublin-matress-cleaning.jpg` | Mattress before/after — clear diagonal clean line, visible urine/body-oil staining on dirty half | /about-us/, /service/mattress-cleaning/, /carpet-cleaning-dublin/ | Clean |
| `wp-content/uploads/2024/02/mattress-cleaning-dublin.jpg` | Close-up of cleaning wand/tool on a mattress mid-extraction, staining visible | /service/mattress-cleaning/ | Clean |
| `wp-content/uploads/2024/02/matress-cleaner.jpg` (alt text "Mattress Cleaning Ballsbridge") | Close-up quilted mattress top, faint staining. Mattress manufacturer's own woven label ("Respa Health") visible — not Krystal Klean branding | Homepage | Clean (mattress-brand text only, not the cleaning company's) |
| `wp-content/uploads/2020/10/sofa-cleaning-dublin.jpg` | Before/after beige fabric sofa, visible dirt/staining on cushions in "before" | /about-us/, /service/upholstery-cleaning/ | **FLAGGED** — small "Krystal Klean Express Limited" diamond-logo watermark in bottom-right corner. Easily cropped out (corner only). |
| `wp-content/uploads/2024/02/carpet-cleaning.jpg` | Before/after red patterned hallway carpet, yellow cleaning bucket in "after" shot | Homepage carpet section | **FLAGGED** — same "Krystal Klean Express Limited" diamond-logo watermark, bottom-right corner. Croppable. |
| `wp-content/uploads/2020/10/Carpet-cleaning-Dublin-Sofa-cleaning-Dublin.jpg` | Close-up of technician's arm/hand using upholstery tool on a brown sofa | /service/upholstery-cleaning/ | **FLAGGED, not downloaded** — technician's black polo shows a large, clearly legible "Krystal Klean Express Limited" embroidered-style logo covering most of the upper frame. Not practically croppable without losing most of the shot. Excluded from final set. |
| `wp-content/uploads/2024/02/IMG_20230113_173904.jpg` / `IMG_20230113_173950.jpg` | Empty, freshly cleared/renovated rooms (light wood floor, neutral walls) — house-clearance "after" shots, HUAWEI phone EXIF confirms genuine | /service/house-clearance/ | Clean but not carpet/upholstery-relevant — not downloaded (out of scope for new site) |
| `wp-content/uploads/2024/05/20240502_130931.jpg` | A parked white box truck/van on a street (AIB bank branch visible) — NOT a cleaning photo | Homepage gallery widget | Not relevant — excluded |
| `wp-content/uploads/2020/10/WhatsApp-Image-2024-05-22-at-22.41.38_b56d1a68.jpg` | Extremely cluttered hoarder-style room full of rubbish (house-clearance "before") | About Us | Genuine but off-topic for a carpet-cleaning site — excluded |
| `wp-content/uploads/2020/10/Mattress-cleaning-001.jpg` | **NOT a real photo** — a generic stock/clip-art infographic "What's Living in your Bed?" with dust-mite illustration and labelled arrows | /service/mattress-cleaning/ | Stock graphic, not a genuine photo — excluded, flagged so it isn't mistaken for real work |
| Power Washing gallery (`Power-Washing-Dublin-4/12/14/18/28.jpg`) | Exterior driveway/patio power-washing before/after and equipment shots | Homepage, /service/power-washing/ | Not downloaded — power washing isn't this site's focus, but available if needed later |

### Legacy/orphaned pages — template junk, do not use
`/about-us-3/` (in the page sitemap, unlinked from nav) still contains leftover WordPress **theme demo content** from the original "Mr. Handy" cleaning theme: text reading "At Mr. Handy we have over 25 years of cleaning experience... booked and paid for directly through the Handy platforms," and demo stock images (`clean-single05.png`, `singl-img07.jpg`, `clean-project04.jpg`, `clean-service01/02.jpg`, one image still hot-linking to `mrhandy.cymolthemes.com`, the theme vendor's own demo server). This is **not genuine Krystal Klean content** — it's unedited theme placeholder text/images that were never replaced. Flagging explicitly so nothing from this page gets reused. Other orphaned pages (`/home-test/`, `/contact-us-2/`, `/contact-us-3/`, `/services-1/`, `/services-2/`, `/portfolio-style-1/`, `/our-team/`, `/blog-2/`) were spot-checked and are either empty shells or duplicate shortcode listings with no unique content.

---

## 2. Embedded videos

**None found.** No YouTube/Vimeo iframes were present on any page inspected (homepage, about, services, all 5 service subpages, contact, blog, the carpet-cleaning-dublin post). The only video-adjacent asset is a link to the business's YouTube channel (`youtube.com/channel/UCbQaddg8N-22pU_s9WUJ3dA`) in the footer/social icons — the channel itself was not opened as it's outside the scope of "on-page embeds," but no embedded player exists anywhere on the site.

---

## 3. Genuine customer testimonials (verbatim)

Confirmed on the homepage slider AND as individual permalinked pages (`/testimonial/[name]/`) via the `cmt_testimonial` custom-post-type sitemap — 5 total, no more exist. **No star ratings are shown anywhere** — plain text testimonials only, no rating widget/schema on the testimonial pages.

> "These guys did an amazing job clearing my parents' home, leaving the property spotless and showing great professionalism. They made the challenging task of moving furniture seem effortless. I would definitely recommend their services. I'm also planning to use them again soon to clear some items from my flat."
> — **Mike Anderson**

> "We moved into a new place and the carpets were severely stained as well as our two mattresses. I thought it wasn't possible to remove these stains, but Cyprian removed all of them. He went above and beyond, did the 2 mattresses, staircase + landing, 2 bedrooms and deep cleaned our sofa. I cannot recommend him enough and he is very fairly price."
> — **Alena Samuel**

> "Brillant work done today by Ciprian. Highly recommend ? carpet & sofa came up like new. Il be sure to use your services again. Thank you!!!!"
> — **John Kennedy**
> *(exact text, including the stray "?" character and typos as they appear on-site — likely an emoji that failed to render)*

> "Cyprian did an absolutely amazing job in my new home, cleaning 3 carpets with meticulous attention to detail - he answered all queries quickly and efficiently, was able to fit the job in in a timely manner and the service was excellent value, I recommend him to everyone."
> — **Rosy Natalie** (permalink slug: `rosy-s-natalie`)

> "Not only did he arrive on time but did a wonderful job on my upholstery, carpets and rugs. He is extremely courteous and friendly and trustworthy . The standard of his work is impeccable. I cannot recommend him highly enough ."
> — **Victor Williamson**

Note: three of the five testimonials name the technician directly as "Cyprian"/"Ciprian" — consistent with the site owner being a hands-on operator.

---

## 4. Published pricing

**Only one concrete figure exists anywhere on the site**, buried inside an FAQ answer on `/service/carpet-cleaning/`:

> "The cost of carpet cleaning in Ireland can vary depending on factors such as the size of the area to be cleaned, the method used, and any additional services required. On average, professional carpet cleaning services in Ireland may range from **€30 to €50 per room**."

This is framed as a general Ireland-market statement inside an FAQ, not a formal price list — no per-service Krystal Klean price sheet, no package pricing, no minimum call-out fee is published anywhere. The "Request an Offer" form and "free quote" language are used everywhere instead of listed prices. The only other pricing-adjacent text is an unexplained "WANT TO GET 20% OFF?" banner on the orphaned `/our-team/` page — no percentage basis given, and it's on an unlinked legacy page, so it shouldn't be treated as an active offer.

---

## 5. Service descriptions / process content (genuinely reusable, rewrite for new site)

**Hot water extraction (used consistently across pages as their core method):**
> "Depending on the type of dirt, hot water can be up to 50% more efficient than cold water and has a shorter drying time. The hot water itself is the solvent. The molecules in hot water move faster, which means they collide more frequently with dirt. No chemicals involved, less cleaning costs." (About Us)
> "The best method to clean carpets... hot water extraction, also known as steam cleaning, is often considered one of the most effective methods. It involves spraying hot water and detergent onto the carpet and then extracting the dirt and moisture with a powerful vacuum." (Carpet Cleaning FAQ)

**Drying time claims:**
- Carpet-cleaning-Dublin blog post: "Fast drying: 1-3 hours"
- Carpet Cleaning FAQ: "stay off the carpet for at least 4 to 6 hours or until it's completely dry to the touch" (slower general guidance — worth reconciling to one honest number for the new site rather than reusing both)
- "We utilize air movers to expedite the carpet drying process"

**Carpet Cleaning "Why choose us" bullet list** (service page): highly-skilled/trained technicians, air-mover-assisted fast drying, "100% Irish owned business," fully registered & insured, mite/bacteria elimination framed as allergy-reduction, wool-safe & eco-friendly detergents, uniformed staff, "100% satisfaction guarantee," flexible scheduling, personalized approach.

**Upholstery cleaning process:** multi-step — pre-treat stains → hot water extraction → thorough rinse. Explicitly states which fabrics should NOT be steam cleaned (silk, velvet, certain wools) and recommends assessing fabric composition before cleaning — good, honest, reusable caution content.

**Mattress cleaning process (3-step, explicitly listed):**
1. Vacuuming — "meticulously vacuum... using a clean upholstery attachment"
2. Deodorizing — targets sweat/dust-mite/dead-skin odors
3. Stain removal

Benefits section ties mattress cleaning to improved air quality, reduced allergy/itching, extended mattress lifespan — solid, non-exaggerated claims.

**Power washing (hot vs cold distinction — useful even if not core to new site):**
> "The main difference lies in the use of hot water for power washing and cold water for pressure washing. Power washing, with its hot water, is ideal for tackling tough stains and grease buildup, while pressure washing is more suitable for lighter cleaning tasks."

---

## 6. FAQs (full text captured, genuinely reusable — rewrite, don't copy verbatim)

**Carpet Cleaning FAQ (10 Q&As)** — deep-clean-yourself steps, best method (hot water extraction), Ireland pricing (€30–€50/room, see §4), value of cleaning carpets, worth cleaning 20-year-old carpet, why carpets can look "dirtier" after cleaning if under-rinsed, recommended frequency (1–2x/year), clean-until-water-runs-clear guidance, stay-off-carpet time (4–6 hrs), hot-water-only vs detergent-needed.

**Upholstery Cleaning FAQ (12 Q&As)** — best fabric-cleaning method, sofa fabric cleaning, deep-cleaning a couch, deep-cleaning old upholstery, wash-vs-professional-clean tradeoffs, steam cleaning suitability, fabrics to avoid steaming (silk/velvet/some wools), laundry-detergent risk, low-moisture cleaning to avoid soaking, ingrained-dirt removal, detergent choice, carpet-cleaner-on-sofa caution.

**Mattress Cleaning FAQ (10 Q&As)** — best cleaning solution (mild detergent + warm water), value of cleaning a mattress, used-mattress cleaning steps, at-home deep clean, heavily soiled mattress handling, steam cleaning safety, deodorizing method, smelly-mattress causes/fixes, home remedies vs professional service.

**Power Washing FAQ (9 Q&As)** — hot (power) vs cold (pressure) washing distinction, Ireland cost factors, safety/benefits, method description, water-only vs detergent, cost justification, pre-treatment, weed/moss removal, best whole-house method.

(Full verbatim Q&A text for all four sets was captured during this audit and is available in the session — condensed here to avoid bloating this file; happy to dump the raw text into a separate file if the content team wants to copy-edit from the originals directly.)

---

## 7. Business credibility info (as stated on-site only — nothing inferred)

- **"10+ Years Of Experience"** — homepage stat block.
- **"With over a decade of experience since 2008"** — stated on all 5 `/service/*/` pages (carpet, upholstery, mattress, power washing, house clearance — identical boilerplate paragraph reused across all five).
- **"Over 5 years of dedicated experience in carpet cleaning Dublin"** — stated on the separate `/carpet-cleaning-dublin/` blog post.
  - **Inconsistency flag:** three different experience claims exist across the site (10+ years / since 2008 / 5+ years). These are not reconcilable from public content alone — the new site should pick one honest, defensible figure rather than copying any of these blindly.
- **CTI certified by Prochem** — "We are CTI certified by Prochem for the cleaning industry," with a "View certificate" link to an actual scanned certificate image (`wp-content/uploads/2024/03/Carpet-cleaning-service-Dublin.jpg`, downloaded to staging as `CTI-Prochem-certificate.jpg`). The certificate reads: **"Prochem National Training Academy for the Cleaning Industry — Certificate of Training & Instruction in the Professional Cleaning & Maintenance of Woven and Tufted Carpets, Rugs and Soft Floor Coverings with Industry-Approved Cleaning Methods,"** issued to "Cyprian [surname redacted in the image itself by the site owner]," Certificate No. **2018/020**. This is a genuine, verifiable credential.
- **"Fully insured and bonded"** / **"Fully Registered and Insured"** / **"comprehensive insurance coverage"** — stated repeatedly, no policy number or insurer named.
- **"100% Irish owned business"** — stated on carpet-cleaning service page.
- **"100% satisfaction guaranteed"** — repeated site-wide tagline.
- **Waste Collection Permit** (relevant to house-clearance/junk-removal side, not carpet cleaning): footer states "Krystalklean.ie is operated by Krystal Klean Express Limited, an authorised waste carrier holding a valid Waste Collection Permit issued by the National Waste Collection Permit Office (NWCPO), Permit No: **NWCPO-25-13287-01**."
- **Equipment/brand mentions:** an air-mover branded "Tripp" is visible in one before/after photo (equipment brand, not a claimed partnership — just what's visible in-shot). No other equipment brands are named in text anywhere.
- No stated count of "jobs completed" or "customers served" anywhere on the site — do not fabricate one.

---

## 8. Contact information

- **Phone:** 059 865 2981 (landline) / 085 202 1222 (mobile) — shown together everywhere as "0598652981 / 0852021222"
- **WhatsApp:** confirmed via an actual `wa.me` link on the carpet-cleaning-dublin page: `https://wa.me/+353852021222` (same number as the mobile, in international format)
- **Email:** infokrystalklean@gmail.com
- **Address:** none published — only "We are based In Dublin," no street address anywhere on the site (including the Contact page)
- **Opening hours:** Monday–Friday, 8:00am–5:00pm (no weekend hours stated)
- **Social links (footer, all verified present):**
  - Facebook: facebook.com/KrystalKleanExpress
  - Twitter/X: twitter.com/ExpressKlean
  - Instagram: instagram.com/krystalkleanexpress/
  - YouTube: youtube.com/channel/UCbQaddg8N-22pU_s9WUJ3dA
  - Pinterest: pinterest.ie/KrystalKleanExpressltd
  - TikTok: tiktok.com/@cleaningcompanydublin

---

## 9. Local / location-specific content

Service area stated consistently: **"We cover Kildare, Carlow, Wicklow, Dublin"** (footer/contact), with some service pages instead saying **"Dublin, Kildare, and Kilkenny"** (a variation worth noting — Wicklow vs Kilkenny inconsistency between the footer and the individual service pages).

The site runs an active local-SEO blog with **81 posts** in the post sitemap, overwhelmingly **House Clearance** location pages (e.g. Lucan, Marino, Booterstown, Phibsborough, Rathmines, Drumcondra, Sandymount, Artane, Donabate, Killiney, Donnybrook, Castleknock, Sandyford, Raheny, Sutton, Harold's Cross, Swords, Enniskerry, Newbridge, Bray, Crumlin, Dalkey, Blackrock, Santry, Portmarnock, Clonskeagh, Bayside, Dundrum, Balbriggan, Celbridge, Cabra, Baltinglass, Glasnevin, Rathgar, Leixlip, Stillorgan, Kilkenny, Blanchardstown, Sandycove, Malahide, Drogheda, Howth, Clontarf, Naas, Dun Laoghaire, Athy, Rathfarnham, Ranelagh, plus Northside/Southside Dublin roll-ups, and county pages for Dublin/Kildare/Wicklow/Carlow), a smaller set of **Carpet Cleaning** location posts (**Terenure, Ballsbridge, Drumcondra, Rathcoole, Santry, and a general "Carpet Cleaning Dublin" post**), and a few **Power Washing** location posts (Lucan, Celbridge, Sandymount, Blanchardstown, Athy, Bray, Dublin). The carpet-cleaning-focused posts follow a consistent template: intro paragraph, "why choose us" bullet list, then a genuinely well-written local-area paragraph (e.g. the Lucan post describes the River Liffey, Lucan Demesne, transport links, schools — real local detail, not generic filler). This template pattern (service intro + credibility bullets + genuine local-area paragraph) is a good structural model for the new site's own location pages.

---

## 10. OLD BRANDING flagged in images/text (explicit — do not reuse as-is)

1. **`sofa-cleaning-dublin.jpg`** — small "Krystal Klean Express Limited" diamond logo watermark, bottom-right corner. Downloaded; **needs corner crop before use.**
2. **`carpet-cleaning.jpg`** — same diamond logo watermark, bottom-right corner. Downloaded; **needs corner crop before use.**
3. **`carpet-and-upholstery-cleaning-19.jpg`** — "krystalklean.ie" text printed on the technician's shirt sleeve, clearly legible. Downloaded; **needs cropping to exclude the branded clothing, or discard.**
4. **`Carpet-cleaning-Dublin-Sofa-cleaning-Dublin.jpg`** — large "Krystal Klean Express Limited" logo covers most of the technician's polo shirt in a close-up shot. **Not downloaded** — logo is too central/large to crop around usefully.
5. **`/about-us-3/` page** — entire page is unedited "Mr. Handy" WordPress theme demo copy and demo stock images (wrong business name "Mr. Handy," "25 years... Handy platforms" boilerplate, and images still partly hot-linked to the theme vendor's own demo server `mrhandy.cymolthemes.com`). **Do not use anything from this page** — it was never real Krystal Klean content.
6. Domain name itself ("krystalklean.ie") appears throughout body text, image alt text, and the org schema `name` field ("CLEANING SERVICES") — obviously not to be reused verbatim for the new "Carpet Cleaning Service" brand; all copy pulled from this audit needs the brand name genericized/replaced.
7. Business name "Krystal Klean Express" / "Krystal Klean Express Limited" appears in body copy across every service page's "Why choose us" boilerplate — needs find/replace, not verbatim reuse.

No old phone numbers or superseded logos were found baked into any *other* images beyond the ones listed above — the bulk of the real work photos (carpet wand, mattress stains, hi-vis technician shots) are clean.

---

## DOWNLOADED FILES

Location: `C:\Users\cipri\Desktop\CLAUDE\carpetcleaningservice-ie\assets\staging\krystalklean\`

| File | Source URL | Depicts |
|---|---|---|
| `carpet-and-upholstery-cleaning-18.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-18.jpg` | Overhead shot, technician cleaning patterned commercial carpet with wand+hose. Clean, no branding. |
| `carpet-and-upholstery-cleaning-19.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-19.jpg` | Same shoot as above. **FLAGGED**: "krystalklean.ie" visible on shirt sleeve — crop before use. |
| `carpet-and-upholstery-cleaning-20.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-20.jpg` | Close-up carpet-cleaning wand mid-pass, clear before/after line. Clean. |
| `carpet-and-upholstery-cleaning-21.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/carpet-and-upholstery-cleaning-21.jpg` | Technician in hi-vis performing hot-water extraction in an office. Clean. |
| `carpet-cleaning-upholstery-cleaning-29.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/carpet-cleaning-upholstery-cleaning-29.jpg` | Before/after hallway carpet with air-mover. Clean. |
| `carpet-cleaning.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/carpet-cleaning.jpg` | Before/after red patterned hallway carpet. **FLAGGED**: logo watermark, bottom-right corner — crop before use. |
| `dublin-matress-cleaning.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/dublin-matress-cleaning.jpg` | Mattress before/after, clear stain/clean diagonal line. Clean. |
| `matress-cleaner.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/matress-cleaner.jpg` | Close-up quilted mattress top with light staining. Clean (only mattress-maker's own label visible). |
| `mattress-cleaning-dublin.jpg` | `krystalklean.ie/wp-content/uploads/2024/02/mattress-cleaning-dublin.jpg` | Close-up of cleaning tool mid-extraction on a mattress. Clean. |
| `sofa-cleaning-dublin.jpg` | `krystalklean.ie/wp-content/uploads/2020/10/sofa-cleaning-dublin.jpg` | Before/after beige fabric sofa. **FLAGGED**: logo watermark, bottom-right corner — crop before use. |
| `CTI-Prochem-certificate.jpg` | `krystalklean.ie/wp-content/uploads/2024/03/Carpet-cleaning-service-Dublin.jpg` | Scanned Prochem National Training Academy certificate, Certificate No. 2018/020 — supporting evidence for the "CTI certified by Prochem" claim, not a work photo. Keep as reference documentation, not a site image (surname already redacted by the source). |

11 files downloaded total (10 work photos + 1 certificate scan). 3 of the 10 work photos are flagged and need corner-cropping before use on the new site; 7 are clean and ready to use as-is.
