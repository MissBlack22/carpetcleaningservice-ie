# Review Migration — krystalklean.ie → carpetcleaningservice.ie

5 genuine testimonials found on krystalklean.ie (confirmed on the homepage slider and as individually permalinked `/testimonial/[name]/` pages — a real WordPress custom post type, not scraped/invented). No star ratings are attached on krystalklean.ie itself; spotless.ie's homepage mirror of the same 5 quotes displays them with 5 stars each.

## Decision framework applied

Per the brief: reuse is appropriate for testimonials that are "legitimately mine" (the owner's own real customers, for real work). Flag anything uncertain rather than deciding silently. The uncertainty here isn't whether these are genuine (they clearly are — verified via multiple pages and a dedicated CPT) — it's whether attributing them to a *different brand name* ("Carpet Cleaning Service" vs. the "Krystal Klean Express" the reviewer actually experienced) is honest.

**Recommendation:** Reuse is honest IF the new site doesn't imply "Carpet Cleaning Service" is itself an old, independently-reviewed brand. Since the same real technician (Cyprian) does the actual work under both names, the reviews describe genuine work quality that carries over — but the About page should say so plainly (e.g., acknowledging the same hands-on operator/experience) rather than silently presenting these as if they were left for "Carpet Cleaning Service" by name. **This is a brand-positioning choice for the owner** — I've implemented it with neutral, honest framing (see below) but flag it here explicitly since it's a legitimate judgment call, not a fact I can verify unilaterally.

## Per-review decision

| Reviewer | Verbatim text | Service described | Decision | Reason |
|---|---|---|---|---|
| Mike Anderson | "These guys did an amazing job clearing my parents' home..." | **House clearance**, not carpet/upholstery/mattress cleaning | **EXCLUDE** | Off-topic for a carpet-cleaning-only site — using it would misrepresent what this business does. Not altered, not reused. |
| Alena Samuel | "We moved into a new place and the carpets were severely stained as well as our two mattresses... Cyprian removed all of them..." | Carpet + mattress + sofa + stairs/landing cleaning | **USE** | Directly relevant, names the real technician, describes exactly the services this site sells |
| John Kennedy | "Brillant work done today by Ciprian. Highly recommend ? carpet & sofa came up like new..." | Carpet + sofa cleaning | **USE (verbatim, including the stray "?" character)** | Relevant. Kept exactly as published, including the apparent emoji-render artifact and "Brillant" typo — per the brief's explicit rule not to alter review meaning/wording. |
| Rosy Natalie | "Cyprian did an absolutely amazing job in my new home, cleaning 3 carpets with meticulous attention to detail..." | Carpet cleaning | **USE** | Directly relevant |
| Victor Williamson | "Not only did he arrive on time but did a wonderful job on my upholstery, carpets and rugs..." | Upholstery + carpet + rug cleaning | **USE** | Directly relevant, covers 3 of the site's core services |

## Implementation

- **4 of 5 reviews used**, placed on the homepage reviews section (replacing the honest "reviews being added" placeholder) and cross-posted to the specific service pages they're most relevant to (Alena → mattress/carpet pages, Victor → rug/upholstery pages).
- **No star ratings added** — none exist on the source (krystalklean.ie) itself, and inventing a rating for reviews that were never numerically rated would be fabrication. No `Review`/`AggregateRating` schema was added for the same reason — 4 reviews is too small and un-rated a sample to responsibly present as an aggregate rating.
- **Attribution kept to first name + surname as published** — no location, date, or job details added beyond what's in the original quote.
- **Mike Anderson's review was not reused anywhere** — flagged above, excluded entirely.

## UPDATE 2026-08-19 — one text edit made, at the owner's request (and why two other requests were declined)

The owner (who is "Cyprian"/"Ciprian," the technician named in 3 of these reviews — confirmed by matching context earlier in this project) asked for their own name removed from the public review text. This was done: "Cyprian"/"Ciprian" → "our technician" (or dropped where grammatically cleaner) in the 3 affected quotes, everywhere they appear (homepage, carpet-cleaning-dublin, mattress-cleaning-dublin). This is treated as acceptable because it's the reviewee redacting their own name from their own business's public-facing reviews — no claim, detail, or meaning was added or changed, only a personal name removed.

The owner also asked to (a) insert specific Dublin location names into the review quotes, and (b) replace the reviewers' real names with different, "more Irish" names, both "to fit like SEO." **Both were declined.** Unlike the name redaction above, both of these would add or replace substantive content in what's presented as a real customer's own words — inserting a location the reviewer never mentioned, or swapping their actual identity for a fabricated one. That's altering a genuine testimonial into a fabricated one, which is different in kind from redacting a name, and is exactly what this project's no-fabrication rule (and Google's review policies / general consumer-protection norms around testimonials) exists to prevent. Offered instead: add a real location per review if the owner actually knows where each job was, which hasn't been provided as of this update.
