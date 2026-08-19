# Internal Linking Plan — carpetcleaningservice.ie

Goal: no orphan pages, clear authority flow from homepage → pillars → locations/guides, and no page competing with another for the same primary intent (see cannibalization mitigations in `keyword-research-raw.md` §5).

## Link flow (who links to whom)

```
Homepage
 ├─→ all 8 service pillars (nav + service grid)
 ├─→ locations hub + top 5 benchmark locations (Terenure, Rathmines, Ranelagh, Ballsbridge, Clontarf)
 ├─→ prices page, FAQ hub
 └─→ quote form (in-page anchor)

Each service pillar (e.g. /carpet-cleaning-dublin/)
 ├─→ 3–5 relevant location pages ("Carpet cleaning near you: Rathmines, Terenure, Clontarf…")
 ├─→ 1–2 relevant guides (e.g. cost guide, steam-vs-dry guide)
 ├─→ prices page (for the cost question)
 └─→ quote form

/end-of-tenancy-carpet-cleaning-dublin/ (pillar)
 └─→ its 5 location spin-offs (Rathmines, Portobello, Ranelagh, Drumcondra, Phibsborough)
     each spin-off links back to the pillar + its own location page (one link only, to avoid the
     spin-off/location-page cannibalization risk flagged in keyword-research-raw.md)

Each Tier 1/2 location page (e.g. /locations/rathmines/)
 ├─→ every relevant service pillar (carpet, upholstery, mattress, rug, stain, pet-stain — as section anchors, not full duplicate pages)
 ├─→ its end-of-tenancy spin-off page IF one exists for that area (one link, from the location page's
 │    end-of-tenancy section — not the reverse duplication)
 ├─→ 3–5 nearby location pages (geographic proximity, from location-database.md "nearby areas")
 └─→ locations hub (breadcrumb)

Locations hub (/locations/)
 ├─→ all 44 Tier 1/2 location pages, grouped by side of city
 └─→ Tier 3 areas: one-line mention + anchor pointing to their parent Tier 1/2 page's local-context
     section (never a link to a nonexistent Tier 3 URL)

Guides hub (/guides/)
 ├─→ all guide articles
 └─→ each guide links back to 1–2 commercial pages (the guide's whole job is to feed commercial intent)

Every page
 └─→ breadcrumbs (Home → Category → Page), footer service/location links, sticky quote CTA
```

## Anchor text rules

- Use descriptive, natural anchors ("carpet cleaning in Rathmines," not "click here" or bare "Rathmines").
- Vary anchor text across links to the same page — don't repeat the exact same string as every inbound anchor.
- Nearby-area links use the area name as the anchor, since that IS the relevant keyword.

## Breadcrumb structure

- Location page: Home → Areas We Cover → [Area]
- Service pillar: Home → [Service]
- End-of-tenancy spin-off: Home → End of Tenancy Carpet Cleaning → [Area]
- Guide: Home → Guides → [Guide title]

## Enforcement checklist (used in final-seo-audit.md)

- [ ] Every page in site-architecture.md's URL tree has ≥1 inbound internal link from a page other than the homepage/footer-only.
- [ ] No location page links to a Tier 3 area as if it had its own URL.
- [ ] Every end-of-tenancy spin-off is linked from exactly one location page (its own area) plus the end-of-tenancy pillar — not from unrelated location pages.
- [ ] Every guide links to at least one commercial page; every pillar links to at least one guide.
