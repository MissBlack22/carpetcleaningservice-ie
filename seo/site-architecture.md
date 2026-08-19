# Site Architecture — carpetcleaningservice.ie

Source: brief's required architecture, reconciled against `keyword-research-raw.md` findings (Section 3: service×location combos, Section 5: cannibalization risks). Where the two conflicted, the research findings won, per the brief's own cannibalization-protection rule. Deviations are called out explicitly below.

## Deviations from the literal brief list (and why)

1. **`/sofa-cleaning-dublin/` is NOT built as a separate URL.** Keyword research confirmed "sofa cleaning" and "upholstery cleaning" are the same buyer intent in different vocabulary (each appears in the other's "People also search for"). One URL — `/upholstery-cleaning-dublin/` — targets both terms naturally in copy/H1/meta. Building both would directly violate the brief's own cannibalization-protection rule.
2. **Five `end-of-tenancy-carpet-cleaning-[area]/` pages are added**, not in the brief's literal list. Research found this is the one service×location combination with genuinely distinct search behaviour (different persona: landlord/agent/outgoing tenant, different urgency, different proof points) in the five highest-density rental areas. All other service×location combos stay as sections on location pages — see `keyword-map.md`.
3. **No standalone pages for "residential carpet cleaning Dublin"** — confirmed low standalone search behaviour; used as a section/schema category on the main carpet-cleaning pillar instead.
4. **59 supplied location names → 58 distinct areas** (one likely duplicate/typo in the brief's list — noted for transparency, not corrected silently). Of the 58: **26 Tier 1 (full page), 18 Tier 2 (lighter page), 14 Tier 3 (folded into a parent page, no own URL)** — see `location-database.md` for the full reasoning and list.

## Full URL tree

```
/                                           Homepage
/carpet-cleaning-dublin/                    Pillar: carpet cleaning (Dublin-wide)
/upholstery-cleaning-dublin/                Pillar: upholstery & sofa cleaning
/mattress-cleaning-dublin/                  Pillar: mattress cleaning
/rug-cleaning-dublin/                       Pillar: rug cleaning
/stain-removal-dublin/                      Pillar: stain removal (incl. odour removal section)
/pet-stain-removal-dublin/                  Pillar: pet stain & odour removal
/commercial-carpet-cleaning-dublin/         Pillar: commercial / office carpet cleaning
/end-of-tenancy-carpet-cleaning-dublin/     Pillar: end of tenancy carpet cleaning
  /end-of-tenancy-carpet-cleaning-rathmines/
  /end-of-tenancy-carpet-cleaning-portobello/
  /end-of-tenancy-carpet-cleaning-ranelagh/
  /end-of-tenancy-carpet-cleaning-drumcondra/
  /end-of-tenancy-carpet-cleaning-phibsborough/
/carpet-cleaning-prices-dublin/             Commercial-investigative: pricing/what affects cost
/carpet-cleaning-faq/                       Full FAQ hub (site-wide questions; page-specific FAQs stay on their own page too)
/locations/                                 Locations hub — lists all 58 areas, links Tier 1/2 pages, mentions Tier 3 inline
  /locations/[area-slug]/                   26 Tier 1 + 18 Tier 2 = 44 dedicated location pages
/guides/                                    Guides hub
  /guides/[guide-slug]/                     12–18 guide articles (see keyword-map.md)
/about/                                     Company info (no fabricated history/stats — factual only)
/contact/                                   Contact details + quote form
/privacy/                                   Privacy policy
/terms/                                     Terms (if applicable)
```

## Page-type templates (component reuse, per brief's "reusable but unique content" requirement)

- **PillarService** (used by the 8 Dublin-wide service pages): hero, what's included, process, who it's for, FAQ, quote CTA, related locations, related guides.
- **LocationPage** (used by all 44 Tier 1/2 pages): hero (H1 "Carpet Cleaning [Area]"), local intro/context, service sections (carpet/upholstery/mattress/rug/stain/pet-stain — each a short unique paragraph, not city-wide boilerplate), property-type notes, nearby areas, FAQ, quote CTA. Tier 2 pages use a shorter version of the same template (fewer/shorter sections), not a different template.
- **EndOfTenancySpinoff** (5 pages): landlord/agent/tenant-focused variant of PillarService, cross-linked once from the relevant location page's end-of-tenancy section.
- **GuidePage**: informational article template, links back to the relevant commercial pillar/location pages.
- **LocationsHub**: directory of all 58 areas grouped by side of city (North/South/City Centre), Tier 1/2 areas link out, Tier 3 areas get inline mention only.

## Navigation

- Header: Carpet Cleaning, Upholstery & Sofa, Mattress, End of Tenancy, Areas We Cover, Prices, FAQ (kept short for mobile; full service list in footer + mobile menu).
- Footer: full service list, top 5 location links + "all areas," prices/FAQ/guides/about/contact/privacy.
- No orphan pages: every guide links to ≥1 commercial page; every commercial page links to ≥3 relevant location pages; every location page links to its Tier services, 3–5 nearby areas, and the locations hub.
