const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const ig = path.join(root, "assets", "staging", "instagram");
const outRoot = path.join(root, "assets", "photos", "business");

const plan = [
  [path.join(ig, "ig-carpet-wand-heavily-soiled-athy.jpg"), "carpet-cleaning", "carpet-cleaning-heavily-soiled-before"],
  [path.join(ig, "ig-mattress-quilted-staining-closeup.jpg"), "mattress-cleaning", "mattress-cleaning-staining-closeup"],
  [path.join(ig, "ig-mattress-wand-extraction-closeup.jpg"), "mattress-cleaning", "mattress-cleaning-extraction-closeup"],
];

(async () => {
  for (const [src, category, name] of plan) {
    const dir = path.join(outRoot, category);
    fs.mkdirSync(dir, { recursive: true });
    const meta = await sharp(src).metadata();
    console.log(path.basename(src), meta.width, "x", meta.height);
    const out = path.join(dir, name + ".webp");
    const outSmall = path.join(dir, name + "-800.webp");
    // Portrait (video-still) source — resize by height so full-res version stays usable in either
    // orientation, thumbnail crops to 4:3 landscape for the gallery grid (biased toward top of frame).
    await sharp(src).resize({ width: 1200 }).webp({ quality: 82 }).toFile(out);
    await sharp(src)
      .resize({ width: 800, height: 600, fit: "cover", position: "top" })
      .webp({ quality: 80 })
      .toFile(outSmall);
    console.log("->", category + "/" + name + ".webp");
  }
})();
