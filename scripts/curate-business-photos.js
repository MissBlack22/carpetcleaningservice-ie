const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const kk = path.join(root, "assets", "staging", "krystalklean");
const sp = path.join(root, "assets", "staging", "spotless");
const outRoot = path.join(root, "assets", "photos", "business");

const plan = [
  // [sourceFile(s), category, outputName]
  [path.join(kk, "carpet-and-upholstery-cleaning-18.jpg"), "carpet-cleaning", "carpet-cleaning-overhead-commercial"],
  [path.join(kk, "carpet-and-upholstery-cleaning-20.jpg"), "carpet-cleaning", "carpet-cleaning-wand-action"],
  [path.join(kk, "carpet-and-upholstery-cleaning-21.jpg"), "carpet-cleaning", "carpet-cleaning-hot-water-extraction-office"],
  [path.join(kk, "carpet-cleaning-upholstery-cleaning-29.jpg"), "carpet-cleaning", "carpet-cleaning-before-after-hallway"],
  [path.join(kk, "carpet-cleaning-cropped.jpg"), "carpet-cleaning", "carpet-cleaning-before-after-red-hallway"],
  [path.join(sp, "carpet-cleaning-before-after-square.jpg"), "carpet-cleaning", "carpet-cleaning-before-after-square"],
  [path.join(sp, "carpet-cleaning-carlow-action.jpg"), "carpet-cleaning", "carpet-cleaning-living-room-action"],
  [path.join(sp, "carpet-cleaning-machine-endeavor.jpg"), "equipment", "carpet-cleaning-extraction-machine"],

  [path.join(kk, "sofa-cleaning-dublin-cropped.jpg"), "upholstery-cleaning", "sofa-cleaning-before-after"],
  [path.join(sp, "sofa-cleaning-carlow-action.jpg"), "upholstery-cleaning", "sofa-cleaning-action"],
  [path.join(sp, "sofa-cleaning-carlow-result.jpg"), "upholstery-cleaning", "sofa-cleaning-result"],

  [path.join(kk, "dublin-matress-cleaning.jpg"), "mattress-cleaning", "mattress-cleaning-before-after-stains"],
  [path.join(kk, "mattress-cleaning-dublin.jpg"), "mattress-cleaning", "mattress-cleaning-wand-closeup"],
  [path.join(kk, "matress-cleaner.jpg"), "mattress-cleaning", "mattress-cleaning-quilted-surface"],
  [path.join(sp, "mattress-cleaning-bedroom-bw.jpg"), "mattress-cleaning", "mattress-cleaning-bedroom"],
  [path.join(sp, "mattress-cleaning-carlow-before-after.jpg"), "mattress-cleaning", "mattress-cleaning-before-after-gradient"],
  [path.join(sp, "mattress-cleaning-wand-before-after.jpg"), "mattress-cleaning", "mattress-cleaning-before-after-closeup"],
];

(async () => {
  for (const [src, category, name] of plan) {
    const dir = path.join(outRoot, category);
    fs.mkdirSync(dir, { recursive: true });
    const out = path.join(dir, name + ".webp");
    const outSmall = path.join(dir, name + "-800.webp");
    await sharp(src).resize({ width: 1600 }).webp({ quality: 80 }).toFile(out);
    await sharp(src).resize({ width: 800 }).webp({ quality: 80 }).toFile(outSmall);
    console.log(path.basename(src), "->", category + "/" + name + ".webp");
  }
})();
