# Blog topic backlog

Source of truth for the automated blog. Cadence: 3x/week (Mon/Wed/Fri), NOT 2x/day —
see `seo/content-strategy.md` and the 2026-08-19 decision log below for why.

Rules for every post (enforced by the scheduled task prompt, restated here for reference):
- Real research via WebSearch before writing — no invented facts, stats, or studies.
- No fabricated prices, testimonials, reviews, "years in business" claims, or specific customer stories.
- No duplicate topics with the 14 existing `/guides/` pages (landlords/deposit disputes, prep checklist,
  kid/pet-safe products, drying time, replace-or-clean signs, common stains, EOT landlord requirements,
  how-often carpets/mattress/sofa, mould/damp/smell, pet urine odour, DIY vs professional, steam vs dry).
- Each post links to at least one relevant existing service/guide/location page. Never orphaned.
- Mark a topic `[x]` and add the publish date once its post is live.

## Decision log

**2026-08-19**: User asked for full automation, 2 posts/day. Web research showed this cadence risks
Google's scaled-content-abuse detection (March 2026 core update specifically penalized templated/AI
location and blog content at scale, 30-80% traffic drops on affected sites) — especially right after
this site added 111 templated location pages in the same session. It also contradicts this project's
own `content-strategy.md`, which deliberately kept guides to 14 pages "not 40+" to avoid padding.
Recommended: 3x/week, each post backed by real research, quality over volume.

**Final decision (same day)**: user settled on 1 post/day (not 2/day, not 3x/week) — a
middle ground between the original ask and the research-backed recommendation. Automation
mirrors the working `rvfitfinder-site` daily-content-engine pattern: quality-gated,
real-research-backed, one topic per run, never fabricates to hit a schedule. The one
deliberate difference from rvfitfinder: **auto-deploy is OFF** (`data/blog-content-config.json`
`autoDeployEnabled: false`) — the daily job writes, builds, audits, and commits locally only.
carpetcleaningservice.ie has never been deployed; the user chose to hold the live-deploy step
until an explicit go-ahead, separate from turning the content pipeline itself on.

## Topics (unchecked = not yet published)

### Stain & material deep-dives (not covered by the general "common stains" guide)
- [x] Red wine on carpet: what actually works vs old wives' tales (published 2026-08-20 as /blog/red-wine-carpet-stains-what-actually-works/)
- [x] Coffee and tea stains on carpet and upholstery (published 2026-08-21 as /blog/coffee-tea-stains-carpet-upholstery/)
- [x] Candle wax removal from carpet without damaging fibres (published 2026-08-22 as /blog/candle-wax-removal-carpet-without-damaging-fibres/)
- [ ] Chewing gum in carpet: safe removal methods
- [ ] Blood stains on carpet: why cold water matters
- [ ] Ink and biro stains on fabric sofas
- [ ] Cooking oil and grease stains on carpet
- [ ] Nail polish spills on carpet
- [ ] Vomit and sick stains/odour on carpet (practical, non-graphic, genuinely useful)
- [ ] Rust stains on carpet from furniture legs or metal

### Material & fibre education
- [ ] Wool vs synthetic carpet: cleaning differences that actually matter
- [ ] Caring for sisal, seagrass and other natural-fibre rugs
- [ ] Leather vs fabric upholstery: cleaning and care differences
- [ ] What is carpet protector treatment and is it worth it
- [ ] Berber and loop-pile carpet: why snagging is a real risk during cleaning
- [ ] Silk and viscose rugs: why they need specialist handling

### Explainers ("what is X really")
- [ ] Hot water extraction explained: what actually happens during a clean
- [ ] Carpet shampooing vs steam cleaning vs dry cleaning: the real differences
- [ ] Why carpet can smell musty for a day after cleaning (and when to worry)
- [ ] What "low moisture" cleaning means and when it's the better choice
- [ ] New carpet smell explained: what it is and how long it lasts
- [ ] Carpet padding/underlay: why it matters more than people think

### Seasonal (Irish climate, genuinely relevant)
- [ ] Getting carpets ready for winter: damp, mud and heating season
- [ ] Spring carpet refresh checklist after a Dublin winter
- [ ] Back-to-college carpet care for student rentals
- [ ] Christmas and hosting season: protecting carpets before guests arrive
- [ ] Post-holiday carpet cleanup: trees, decorations and foot traffic
- [ ] Damp Irish summers: why carpets need faster drying, not less cleaning

### Home & property context (general, honest, no fabricated specifics)
- [ ] Moving house checklist: when to clean carpets, before or after the move
- [ ] Allergy season and carpets: what dust mites actually are and what helps
- [ ] Renting in Ireland: what tenants should know about carpet condition and deposits
- [ ] Older homes and original carpet: when it's worth restoring vs replacing
- [ ] Open fireplaces and carpet: soot and smoke residue explained
- [ ] Selling your home: does a professional carpet clean actually help viewings

### Pets & family (distinct from the existing pet-urine guide)
- [ ] Living with dogs: general carpet maintenance between deep cleans
- [ ] Cat hair and carpet: why vacuuming alone isn't enough
- [ ] Muddy paws and carpet: a practical routine for dog owners
- [ ] Carpet cleaning with a new baby in the house: what's actually safe

### Commercial / landlord angle (distinct from EOT guide)
- [ ] Office carpet cleaning: how often is actually necessary
- [ ] What letting agents look for in carpet condition between tenancies
- [ ] Airbnb and short-let carpet turnaround: a practical approach

### Practical buyer-intent
- [ ] Questions to ask before booking any carpet cleaning company
- [ ] What actually affects a carpet cleaning quote (beyond square footage)
- [ ] Is professional mattress cleaning actually worth it
