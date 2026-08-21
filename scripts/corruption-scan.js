const fs = require("fs");
const { execSync } = require("child_process");
const files = execSync('git ls-files -- "*.html"')
  .toString()
  .split("\n")
  .filter((f) => f.endsWith("index.html"));

const fieldPatterns = [
  /<meta name="description" content="([^"]*)"/g,
  /<meta property="og:description" content="([^"]*)"/g,
  /<meta property="og:title" content="([^"]*)"/g,
  /<meta name="twitter:[a-z]+" content="([^"]*)"/g,
];

let bad = [];
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  for (const re of fieldPatterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(html))) {
      const d = m[1];
      if (!d.startsWith("http") && (/,$/.test(d) || /[—-]\s*$/.test(d))) {
        bad.push(`${f}: ${JSON.stringify(d)}`);
      }
    }
  }
}
console.log("Suspicious (truncated-looking) fields:", bad.length);
bad.forEach((b) => console.log("  " + b));
