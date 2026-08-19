# Instagram Audit — instagram.com/krystalkleanexpress/

Audit date: 2026-08-19. Source: https://www.instagram.com/krystalkleanexpress/ (owner's existing Dublin cleaning business Instagram account, logged-out browsing only — no login attempted, per instructions). Purpose: find additional real work photos beyond the 17 already catalogued in `media-library.md` from krystalklean.ie/spotless.ie.

## Bottom line

Instagram's logged-out view caps at **12 grid items** before hitting a hard login/signup wall ("Never miss a post from krystalkleanexpress — Sign up for Instagram to stay in the loop"). All 12 visible items are **Reels (video clips)**, not static photo posts — this account currently posts almost exclusively short-form video, not photo carousels. There is no way to scroll/paginate past these 12 without logging in; "Show more posts" re-triggers the same signup interstitial rather than loading more content.

Of the 12 reels visible, **7 are house-clearance/junk-removal ad content** (off-topic for this carpet-cleaning site — same category the earlier krystalklean.ie audit already excluded), **1 was too motion-blurred to be usable**, and **1 had no useful caption and was also a blurred/illegible frame** (a hand blocking an equipment control panel). Only **3 reels yielded a clean, genuine, on-topic, usable still image** — extracted from each reel's video cover-frame image (not the low-res 640×640 grid thumbnail, but the higher-quality ~640×1136 portrait cover image embedded on each reel's own permalink page, which loads without login).

**3 images downloaded successfully.** All 3 are clean of any visible branding/watermark/logo. All 3 are genuinely different shots from anything in the existing 17-photo library (different mattresses/carpet, not duplicates) — so yes, this is new, usable, real material, but a small yield: 3 images, not a large new batch. Nothing here is dramatically "better" than the best existing photos, but the carpet shot (Athy, heavily soiled carpet mid-clean) is a strong dramatic before/during shot worth considering for hero use.

---

## Profile overview

- Handle: `krystalkleanexpress`, display name "🇮🇪 Krystal Klean Express 💎"
- 1,147 followers / 5,776 following
- Bio: "Carpet & Upholstery Cleaning / House, Attic, Shed, Garage, Storage Unit Clearance" — links to www.krystalklean.ie
- Content mix observed (12 most recent posts, Oct 2025–Aug 2026): 7 house-clearance ads, 5 carpet/upholstery/mattress-related reels

## What was downloaded (kept)

Location: `C:\Users\cipri\Desktop\CLAUDE\carpetcleaningservice-ie\assets\staging\instagram\`

| File | Source post | Depicts | Quality | Branding check |
|---|---|---|---|---|
| `ig-carpet-wand-heavily-soiled-athy.jpg` | `instagram.com/krystalkleanexpress/reel/Db3ZojlMixK/` (posted Aug 10, 2026) | Dramatic hallway/kitchen carpet mid-clean — sharp dark-to-light clean line, heavily soiled carpet on left, cleaning wand mid-pass, hose visible, wood cabinets and orange sofa arm in frame | High — sharp, well-lit, dramatic before/during contrast | Clean — no logos, text, or watermarks visible |
| `ig-mattress-quilted-staining-closeup.jpg` | `instagram.com/krystalkleanexpress/reel/DRPhhb8jHx8/` (posted Nov 19, 2025) | Close-up quilted mattress top, light yellow/brown staining visible, generic mattress-brand emblem stitched into quilting (not Krystal Klean branding) | High | Clean — only a generic mattress-manufacturer emblem in the fabric quilting (same category as the already-approved `matress-cleaner.jpg` in the existing library), no cleaning-company branding |
| `ig-mattress-wand-extraction-closeup.jpg` | `instagram.com/krystalkleanexpress/reel/DRPHK57jBFO/` (posted Nov 19, 2025) | Close-up quilted mattress top mid-extraction, cleaning wand tool visible bottom-right, staining visible | High | Clean — no logos, text, or watermarks visible |

Captions on the two mattress-reel posts (`DRPhhb8jHx8`, `DRPHK57jBFO`) confirm genuine carpet/upholstery/mattress-cleaning content, based in Athy, with hashtags like #carpetcleaning #upholsterycleaning #steamcleaning #sofacleaning #rugcleaning — consistent with real work content, not stock/meme material.

## What was found but NOT downloaded (and why)

| Post | What it shows | Reason excluded |
|---|---|---|
| `reel/DW7TBF8jBMN/` (Apr 9, 2026) | House-clearance promo — long bullet-list ad caption ("Professional Clearance Services Across Dublin...") | Off-topic (house clearance, not carpet/upholstery/mattress) + cover frame was an unusable motion-blurred zoom-transition still |
| `reel/DWwZqNvDL7e/` (Apr 5, 2026) | Same house-clearance ad campaign, near-identical caption | Off-topic + cover frame was also motion-blurred/unusable |
| `reel/DUl7snaDM6l/` (Feb 10, 2026) | Same house-clearance ad campaign | Off-topic — not downloaded, skipped without opening the image |
| `reel/DTv1TJaDHIF/` (Jan 20, 2026) | Same house-clearance ad campaign | Off-topic — not downloaded |
| `reel/DRch6tSjIkj/` (Nov 24, 2025) | Same house-clearance ad campaign | Off-topic — not downloaded |
| `reel/DRSKi7KjDMl/` (Nov 20, 2025) | Same house-clearance ad campaign | Off-topic — not downloaded |
| `reel/DQvzcs0jPkw/` (Nov 6, 2025) | Same house-clearance ad campaign | Off-topic — not downloaded |
| `reel/DQvylV4jASa/` (Nov 6, 2025) | Same house-clearance ad campaign | Off-topic — not downloaded |
| `reel/DQEjmV2jEZY/` (Oct 21, 2025) | No caption text present; cover frame shows a blurred close-up of a finger and what looks like a hot-water-tank control panel (partial text "...ater Ta..." visible) | Downloaded to check, then discarded — too blurred to be usable, and equipment-panel close-up isn't a compelling work photo anyway |

The house-clearance ad reels are a distinct, repeating ad campaign (near-identical caption template reused across ~7 posts between Nov 2025 and Apr 2026) — confirms this account runs paid/boosted promotional content for the clearance side of the business, separate from organic carpet-cleaning work footage. This mirrors the "off-topic for a carpet-cleaning site" exclusion already applied to house-clearance photos in the original krystalklean.ie audit.

## Technical notes on the download method

- Instagram's **grid thumbnails** (visible on the profile page itself) are low-quality, hard-cropped 640×640 squares with heavy JPEG compression (`stp=dst-jpg_e35_s640x640`) — not worth using even when on-topic.
- Each reel's **own permalink page** (`/krystalkleanexpress/reel/<id>/`) loads without login and exposes a better-quality, correctly-aspect-ratioed (~640×1136 portrait) cover-frame image (`stp=dst-jpg_e15`, video_additional_cover_frame) directly in the page's `<img>` tags — this is what was actually downloaded.
- These cdninstagram.com URLs are signed with an expiring `oh=`/`oe=` token pair, but the token was valid long enough for an immediate `curl` fetch right after loading the page in-browser — all 3 kept images downloaded successfully via direct `curl` with a standard browser User-Agent. No manual save-as was needed.
- No static "Posts" (photo carousel) content exists on this account distinct from the Reels grid — Instagram merges Reels into the main grid, and every item in the visible 12 was a video reel, confirmed by the "Video by..." alt text Instagram auto-generates for each grid thumbnail.
- No attempt was made to log in, create an account, or bypass the signup wall in any way — the 12-post visible limit is a hard wall of what an anonymous browser session can reach.

## Comparison to the existing 17-photo library

The 3 new images are additive, not duplicates — different specific carpets/mattresses/rooms than anything in `assets/photos/business/`. They don't represent a large expansion (3 vs. 17), and Instagram doesn't add new *categories* of content (no equipment shots, no technician/team photos, no upholstery/sofa shots were found — the visible window happened to be dominated by house-clearance ads and two mattress clips). The one standout is the Athy carpet shot: a more dramatic "very dirty carpet mid-clean" moment than any single before/after shot already in the library, which could work well for a hero or "the difference we make" section.

If the user wants a materially larger Instagram photo set, the practical options are: (a) log into the account directly (outside this task's scope) to page through the full history past the 12-post anonymous limit, or (b) ask the owner to export/share photos directly, since a meaningful share of this account's recent output is ad-campaign reels rather than a deep archive of organic work photos.
