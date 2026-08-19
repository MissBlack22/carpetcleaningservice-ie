const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "assets", "photos");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));

(async () => {
  for (const f of files) {
    const src = path.join(dir, f);
    const outLarge = path.join(dir, f.replace(".png", ".webp"));
    const outSmall = path.join(dir, f.replace(".png", "-800.webp"));
    const meta = await sharp(src).metadata();
    await sharp(src).resize({ width: 1600 }).webp({ quality: 78 }).toFile(outLarge);
    await sharp(src).resize({ width: 800 }).webp({ quality: 78 }).toFile(outSmall);
    fs.unlinkSync(src);
    console.log(f, "->", path.basename(outLarge), "+", path.basename(outSmall), `(orig ${meta.width}x${meta.height})`);
  }
})();
