// Checks: (1) pages with a visible FAQ block but no matching FAQPage JSON-LD,
// (2) <img> tags missing alt text.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skipDirs = new Set(["node_modules", ".git", ".netlify", "scripts", "assets", "css", "js", "data", "seo"]);

function findPages(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      findPages(path.join(dir, entry.name), out);
    } else if (entry.name === "index.html") {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

const pages = findPages(root, []);
const faqIssues = [];
const altIssues = [];

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const rel = "/" + path.relative(root, file).replace(/\\/g, "/").replace(/index\.html$/, "");

  const hasVisibleFaq = /class="faq|faq-item|faq-question|<h2[^>]*>\s*(Frequently Asked|FAQ)/i.test(html);
  const hasFaqSchema = /"@type":\s*"FAQPage"/.test(html);
  if (hasVisibleFaq && !hasFaqSchema) faqIssues.push(rel);

  const imgTags = html.match(/<img\s[^>]*>/g) || [];
  for (const tag of imgTags) {
    if (!/\balt="/.test(tag)) altIssues.push(`${rel}: ${tag.slice(0, 90)}`);
    else if (/\balt=""/.test(tag) && !/decorative|icon/.test(tag)) {
      // empty alt is valid for decorative images; not flagging by default
    }
  }
}

console.log(`Pages with visible FAQ but no FAQPage schema: ${faqIssues.length}`);
faqIssues.forEach((f) => console.log("  " + f));
console.log(`\nImages missing alt attribute entirely: ${altIssues.length}`);
altIssues.slice(0, 50).forEach((a) => console.log("  " + a));
