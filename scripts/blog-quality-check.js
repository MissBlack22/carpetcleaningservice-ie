// Audits a blog post before it's allowed to be committed by the daily content-engine.
// Mirrors the safety-gate philosophy of rvfitfinder-site's scripts/seo-audit.js +
// scripts/lib/content-quality.js, adapted for a flat static-HTML site with no build step.
//
// Usage: node scripts/blog-quality-check.js blog/<slug>/index.html
// Exits 0 and prints "BLOG AUDIT: PASS" only if everything checks out.
// Exits 1 and prints every failure reason otherwise.

const fs = require("fs");
const path = require("path");

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/blog-quality-check.js blog/<slug>/index.html");
  process.exit(1);
}

const root = path.join(__dirname, "..");
const file = path.join(root, target);
if (!fs.existsSync(file)) {
  console.error("BLOG AUDIT: FAIL — file does not exist:", target);
  process.exit(1);
}

const html = fs.readFileSync(file, "utf8");
const config = JSON.parse(fs.readFileSync(path.join(root, "data/blog-content-config.json"), "utf8"));
const failures = [];
const warnings = [];

// --- word count ---
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
const mainText = mainMatch
  ? mainMatch[1].replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  : "";
const wordCount = mainText ? mainText.split(" ").length : 0;
if (wordCount < config.minWordCount) failures.push(`word count ${wordCount} below minWordCount ${config.minWordCount}`);
if (wordCount > config.maxWordCount) warnings.push(`word count ${wordCount} above maxWordCount ${config.maxWordCount} (not a hard fail, but check for padding)`);

// --- title / meta / canonical present and consistent ---
const titleMatch = html.match(/<title>([^<]*)<\/title>/);
if (!titleMatch) failures.push("missing <title>");
const descMatch = html.match(/name="description" content="([^"]*)"/);
if (!descMatch) failures.push("missing meta description");
else if (descMatch[1].length > 165) warnings.push(`meta description ${descMatch[1].length} chars, longer than typical 155-160 display limit`);

const canonicalMatch = html.match(/rel="canonical" href="([^"]*)"/);
if (!canonicalMatch) failures.push("missing canonical link");
else {
  const expectedPath = "/" + path.relative(root, file).replace(/index\.html$/, "").replace(/\\/g, "/");
  const expected = "https://carpetcleaningservice.ie" + expectedPath;
  if (canonicalMatch[1] !== expected) failures.push(`canonical "${canonicalMatch[1]}" does not match expected "${expected}"`);
}

// --- hero image required: a real photo from the business photo library, referenced in <main> and og:image ---
if (config.requireHeroImage) {
  const mainImgs = mainMatch ? [...mainMatch[1].matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]) : [];
  const realPhotoImgs = mainImgs.filter(src => src.startsWith("/assets/photos/business/"));
  if (realPhotoImgs.length === 0) {
    failures.push("no real photo from /assets/photos/business/ found in the post body (stock/AI/placeholder images are not allowed)");
  } else {
    for (const src of realPhotoImgs) {
      const assetPath = path.join(root, src.replace(/^\//, ""));
      if (!fs.existsSync(assetPath)) failures.push(`hero image referenced but file does not exist on disk: ${src}`);
    }
  }
  const ogImageMatch = html.match(/property="og:image" content="([^"]*)"/);
  if (!ogImageMatch) failures.push("missing og:image meta tag");
  else if (!ogImageMatch[1].includes("/assets/photos/business/")) failures.push("og:image is not a real photo from /assets/photos/business/");
}

// --- H1 present, single ---
const h1s = [...html.matchAll(/<h1[ >]/g)];
if (h1s.length === 0) failures.push("missing <h1>");
if (h1s.length > 1) failures.push(`${h1s.length} <h1> tags found, expected exactly 1`);

// --- BreadcrumbList schema present ---
if (!html.includes('"@type": "BreadcrumbList"')) failures.push("missing BreadcrumbList JSON-LD");
if (!html.includes('"@type": "BlogPosting"') && !html.includes('"@type":"BlogPosting"')) failures.push("missing BlogPosting JSON-LD");

// --- at least one internal link into the commercial site (never orphaned) ---
const internalLinks = [...html.matchAll(/href="(\/[a-z0-9\-\/]+\/)"/g)].map(m => m[1]);
const commercialLinkTargets = ["/carpet-cleaning-dublin/", "/upholstery-cleaning-dublin/", "/mattress-cleaning-dublin/",
  "/rug-cleaning-dublin/", "/stain-removal-dublin/", "/pet-stain-removal-dublin/", "/commercial-carpet-cleaning-dublin/",
  "/end-of-tenancy-carpet-cleaning-dublin/", "/carpet-cleaning-prices-dublin/", "/contact/", "/#quote"];
const linksToCommercial = internalLinks.filter(l => commercialLinkTargets.includes(l) || l.startsWith("/carpet-cleaning-kildare/") || l.startsWith("/carpet-cleaning-wicklow/") || l.startsWith("/locations/"));
if (linksToCommercial.length === 0) failures.push("no internal link to any commercial/service page — post would be orphaned from the business");

// Verify every internal page-link actually resolves on disk
const allPages = new Set(
  require("child_process").execSync("find . -name index.html -not -path \"*/node_modules/*\"", { cwd: root, encoding: "utf8" })
    .trim().split("\n").map(f => "/" + f.replace(/^\.\//, "").replace(/index\.html$/, ""))
);
for (const link of internalLinks) {
  if (!allPages.has(link) && link !== "/") failures.push(`broken internal link: ${link}`);
}

// --- fabrication red flags ---
const bannedPatterns = [
  { re: /€\s?\d/, label: "a specific € price figure (prices must only live on /carpet-cleaning-prices-dublin/)" },
  { re: /\b\d+\s*(star|★)/i, label: "a star-rating claim" },
  { re: /\byears?\s+in\s+business\b/i, label: "a \"years in business\" claim" },
  { re: /\btestimonial(s)?\b/i, label: "the word \"testimonial\"" },
  { re: /"[^"]{15,}"\s*[-–—]\s*[A-Z][a-z]+,?\s*(Dublin|Kildare|Wicklow)?/, label: "a quoted attributed customer review pattern" },
];
for (const { re, label } of bannedPatterns) {
  if (re.test(mainText)) failures.push(`possible fabrication red flag: ${label}`);
}

// --- FAQ schema must exactly match visible content, if FAQPage schema is present ---
if (html.includes('"@type": "FAQPage"') || html.includes('"@type":"FAQPage"')) {
  const faqBlockMatch = html.match(/"@type":\s*"FAQPage"[\s\S]*?"mainEntity":\s*\[([\s\S]*?)\]\s*\}\s*<\/script>/);
  const visibleItems = [...html.matchAll(/<summary>([\s\S]*?)<\/summary>[\s\S]*?<div class="faq-item__body">\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map(m => ({ q: m[1].replace(/<[^>]+>/g, "").trim(), a: m[2].replace(/<[^>]+>/g, "").trim() }));
  const schemaQuestions = [...(faqBlockMatch ? faqBlockMatch[1] : "").matchAll(/"name":\s*"([^"]*)"/g)].map(m => m[1]);
  if (schemaQuestions.length !== visibleItems.length) {
    failures.push(`FAQ schema has ${schemaQuestions.length} questions but ${visibleItems.length} visible .faq-item elements`);
  }
}

// --- title/first-paragraph duplicate check against existing posts ---
const blogDir = path.join(root, "blog");
if (fs.existsSync(blogDir)) {
  const existingSlugs = fs.readdirSync(blogDir).filter(d => fs.statSync(path.join(blogDir, d)).isDirectory());
  const thisSlug = path.basename(path.dirname(file));
  const thisLead = (html.match(/<p class="lead">([\s\S]*?)<\/p>/) || [,""])[1].replace(/<[^>]+>/g,"").trim();
  for (const slug of existingSlugs) {
    if (slug === thisSlug) continue;
    const otherFile = path.join(blogDir, slug, "index.html");
    if (!fs.existsSync(otherFile)) continue;
    const otherHtml = fs.readFileSync(otherFile, "utf8");
    const otherTitle = (otherHtml.match(/<title>([^<]*)<\/title>/) || [,""])[1];
    if (titleMatch && otherTitle && titleMatch[1] === otherTitle) failures.push(`duplicate title with existing post: ${slug}`);
    const otherLead = (otherHtml.match(/<p class="lead">([\s\S]*?)<\/p>/) || [,""])[1].replace(/<[^>]+>/g,"").trim();
    if (thisLead && otherLead && thisLead === otherLead) failures.push(`identical lead paragraph to existing post: ${slug}`);
  }
}

console.log("--- Blog Quality Audit:", target, "---");
console.log("Word count:", wordCount);
if (warnings.length) { console.log("Warnings:"); warnings.forEach(w => console.log("  - " + w)); }
if (failures.length) {
  console.log("BLOG AUDIT: FAIL");
  failures.forEach(f => console.log("  - " + f));
  process.exit(1);
} else {
  console.log("BLOG AUDIT: PASS");
  process.exit(0);
}
