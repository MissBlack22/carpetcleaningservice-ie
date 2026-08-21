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
const issues = new Set();

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const rel = "/" + path.relative(root, file).replace(/\\/g, "/").replace(/index\.html$/, "");

  // Buttons/links whose only content is an <svg> (icon-only) need aria-label/aria-labelledby.
  const tags = html.match(/<(a|button)\b[^>]*>[\s\S]*?<\/\1>/g) || [];
  for (const tag of tags) {
    const openTagMatch = tag.match(/^<(a|button)\b[^>]*>/);
    const openTag = openTagMatch[0];
    const inner = tag.slice(openTag.length, -(`</${openTagMatch[1]}>`.length));
    const textOnly = inner.replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/<[^>]+>/g, "").trim();
    const hasSvg = /<svg/.test(inner);
    const hasAriaLabel = /aria-label="[^"]+"/.test(openTag) || /aria-labelledby="[^"]+"/.test(openTag);
    if (hasSvg && textOnly === "" && !hasAriaLabel) {
      issues.add(`${rel}: icon-only <${openTagMatch[1]}> with no aria-label — ${openTag.slice(0, 80)}`);
    }
  }

  // Form inputs without an associated <label for=""> or aria-label.
  // Skip the honeypot bot-field (hidden from everyone, wrapped in an
  // implicit <label>...<input>...</label> anyway).
  const inputs = html.match(/<label>Leave this field blank:[\s\S]*?<\/label>|<input\b[^>]*>/g) || [];
  for (const input of inputs) {
    if (/^<label>/.test(input)) continue; // the honeypot's implicit-label wrapper matched whole
    if (/name="bot-field"/.test(input)) continue;
    if (/type="(hidden|submit|checkbox)"/.test(input)) continue;
    const idMatch = input.match(/\bid="([^"]+)"/);
    const hasAriaLabel = /aria-label="[^"]+"/.test(input);
    if (!idMatch && !hasAriaLabel) {
      issues.add(`${rel}: <input> with no id and no aria-label — ${input.slice(0, 80)}`);
      continue;
    }
    if (idMatch) {
      const labelRe = new RegExp(`<label[^>]*for="${idMatch[1]}"`);
      if (!labelRe.test(html) && !hasAriaLabel) {
        issues.add(`${rel}: <input id="${idMatch[1]}"> has no matching <label for>`);
      }
    }
  }
}

console.log(`Checked ${pages.length} pages.`);
console.log(`Accessibility issues: ${issues.size}`);
[...issues].slice(0, 60).forEach((i) => console.log("  " + i));
