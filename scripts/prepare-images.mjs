// Genera le immagini del sito in public/ a partire dagli originali in materiali/.
// Gli originali non vengono mai modificati. Rilanciare con: npm run images
import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const SRC = "materiali";
const OUT = "public/images";

// Riquadri [x1, y1, x2, y2] delle due metà PRE/POST nelle grafiche Instagram (1080x1350),
// esclusa la fascia bianca con l'etichetta.
const LAYOUT_WIDE = { pre: [33, 138, 510, 1060], post: [555, 138, 1018, 1060] };
const LAYOUT_NARROW = { pre: [94, 208, 483, 1062], post: [575, 208, 964, 1062] };
const LAYOUT_SIDE = { pre: [41, 207, 497, 1054], post: [576, 207, 1033, 1050] };
const LAYOUT_SHORT = { pre: [33, 138, 510, 1028], post: [555, 138, 1018, 1028] };

const transformations = [
  ["cliente-a-schiena.jpg", "a-schiena", LAYOUT_WIDE],
  ["cliente-a-fronte.jpg", "a-fronte", LAYOUT_SHORT],
  ["cliente-a-profilo.jpg", "a-profilo", LAYOUT_SIDE],
  ["cliente-b-fronte.png", "b-fronte", LAYOUT_NARROW],
  ["cliente-b-schiena.png", "b-schiena", LAYOUT_NARROW],
  ["cliente-c-fronte.jpg", "c-fronte", LAYOUT_WIDE],
  ["cliente-d-fronte.jpg", "d-fronte", LAYOUT_WIDE],
  ["cliente-d-schiena.jpg", "d-schiena", LAYOUT_WIDE],
  ["cliente-e-fronte.jpg", "e-fronte", LAYOUT_WIDE],
  ["cliente-e-schiena.jpg", "e-schiena", LAYOUT_WIDE],
  ["cliente-e-profilo.jpg", "e-profilo", LAYOUT_WIDE],
  ["cliente-f-fronte-senza-etichette.png", "f-fronte", LAYOUT_WIDE],
];

// Riquadri degli attestati negli screenshot del telefono (1170x2532).
const certificates = [
  ["asi-personal-trainer-1-livello-2024-12.png", [108, 547, 1108, 1981]],
  ["asi-personal-trainer-2-livello-2025-02.png", [42, 363, 1125, 1915]],
  ["asi-personal-trainer-3-livello-2025-03.png", [75, 373, 1123, 1877]],
  ["asi-operatore-alimentazione-sportivo-2024-12.png", [91, 441, 1125, 1922]],
  ["fitnessway-ipertrofia-programmazione-2024-12.png", [28, 344, 1146, 1950]],
  ["ats-istruttore-ginnastica-posturale-2025-07.png", [0, 791, 1170, 1665]],
  ["acsi-istruttore-ginnastica-posturale-2025-07.png", [0, 810, 1152, 1646]],
  ["ereps-personal-trainer-eqf4.png", [56, 517, 1114, 2000]],
];

const INSET = 4;

function region([x1, y1, x2, y2], inset = 0) {
  return {
    left: x1 + inset,
    top: y1 + inset,
    width: x2 - x1 - inset * 2,
    height: y2 - y1 - inset * 2,
  };
}

async function run() {
  await mkdir(`${OUT}/risultati`, { recursive: true });
  await mkdir(`${OUT}/attestati`, { recursive: true });
  await mkdir(`${OUT}/rosario`, { recursive: true });

  for (const [file, slug, layout] of transformations) {
    const src = path.join(SRC, "prima-dopo/grafiche", file);
    for (const side of ["pre", "post"]) {
      await sharp(src)
        .extract(region(layout[side], INSET))
        .resize(540, 960, { fit: "cover", position: "centre" })
        .jpeg({ quality: 88, mozjpeg: true })
        .toFile(`${OUT}/risultati/${slug}-${side}.jpg`);
    }
  }

  for (const [file, box] of certificates) {
    const name = file.replace(/\.png$/, ".jpg");
    await sharp(path.join(SRC, "attestati", file))
      .extract(region(box))
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(`${OUT}/attestati/${name}`);
  }

  await sharp(path.join(SRC, "foto/rosario-spalle-palestra.jpg"))
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(`${OUT}/rosario/spalle.jpg`);
  await sharp(path.join(SRC, "foto/rosario-fronte-coach.png"))
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(`${OUT}/rosario/fronte.jpg`);

  await mkdir("public/logo", { recursive: true });
  for (const v of ["colori", "bianco", "nero"]) {
    await copyFile(path.join(SRC, `logo/logo-r-${v}.svg`), `public/logo/logo-r-${v}.svg`);
  }

  console.log("Immagini generate in public/");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
