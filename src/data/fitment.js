// Truck model → OEM tire-size fitment for /cek-ukuran-ban (fleet size finder).
//
// SAFETY RULE: never guess a tire size. A wrong size = wrong quote = dead lead.
// `sizes: []` means "not yet validated" — the page renders a "confirm via WA"
// fallback instead of a size. Sizes are filled ONLY from validated research
// (see Application/fitment-research.md) cross-checked against real sold sizes
// (7.50 R16, 10.00 R20, 11.00 R20, 11R22.5).
//
// size entry shape: { size: "10.00 R20", axle?: "Depan+Belakang", confidence: "CONFIRMED"|"RESEARCHED" }

// Sizes below are validated in fitment-research.md (sourced + cross-checked vs
// real sold sizes). CONFIRMED = spec source AND matches a size we sold.
// Empty sizes[] (Super Great, Kuzer RKE) = no reliable ID-market source → fallback.
const CF = "CONFIRMED";

export const fitmentBrands = [
  {
    slug: "hino",
    name: "Hino",
    models: [
      { slug: "dutro-130-hd", name: "Dutro 130 HD", kelas: "Colt diesel / engkel", sizes: [{ size: "7.50 R16", ply: "16PR", confidence: CF }] },
      { slug: "ranger-fg", name: "Ranger FG", kelas: "Tronton", sizes: [{ size: "10.00 R20", ply: "16PR", confidence: CF }] },
      { slug: "ranger-fm", name: "Ranger FM", kelas: "Tronton", sizes: [{ size: "11.00 R20", ply: "16PR", confidence: CF }] },
    ],
  },
  {
    slug: "isuzu",
    name: "Isuzu",
    models: [
      { slug: "elf-nmr-71", name: "Elf NMR 71", kelas: "Colt diesel / engkel", sizes: [{ size: "7.50 R16", ply: "14PR", confidence: CF }] },
      { slug: "giga-fvr", name: "Giga FVR", kelas: "Tronton", sizes: [{ size: "10.00 R20", ply: "16PR", confidence: CF }] },
      { slug: "giga-fvm", name: "Giga FVM", kelas: "Tronton", sizes: [{ size: "11.00 R20", ply: "16PR", confidence: CF }] },
    ],
  },
  {
    slug: "fuso",
    name: "Mitsubishi Fuso",
    models: [
      { slug: "canter-fe", name: "Canter FE", kelas: "Colt diesel / engkel", sizes: [{ size: "7.50 R16", ply: "14PR", confidence: CF }] },
      { slug: "fighter-fn", name: "Fighter FN", kelas: "Tronton", sizes: [{ size: "11.00 R20", ply: "16PR", confidence: CF }] },
      { slug: "super-great", name: "Super Great", kelas: "Tractor head / trailer", sizes: [] },
    ],
  },
  {
    slug: "ud-trucks",
    name: "UD Trucks",
    models: [
      { slug: "kuzer-rke", name: "Kuzer RKE", kelas: "Colt diesel / engkel", sizes: [] },
      { slug: "quester-cwe", name: "Quester CWE", kelas: "Tronton", sizes: [{ size: "11.00 R20", ply: "16PR", confidence: CF }] },
    ],
  },
];

export const allBrands = () => fitmentBrands;

export const findBrand = (slug) => fitmentBrands.find((b) => b.slug === slug);

export const findModel = (brandSlug, modelSlug) => {
  const brand = findBrand(brandSlug);
  const model = brand?.models.find((m) => m.slug === modelSlug) || null;
  return { brand: brand || null, model };
};

// Every brand→model combo, for generateStaticParams (crawlable URLs, not JS state).
export const allBrandModelParams = () =>
  fitmentBrands.flatMap((b) =>
    b.models.map((m) => ({ brand: b.slug, model: m.slug }))
  );

// Reverse lookup: all truck models that run a given tire size. Powers the
// "which trucks use this size" block on /ban/{size}.
export const trucksForSize = (size) =>
  fitmentBrands.flatMap((b) =>
    b.models
      .filter((m) => m.sizes.some((s) => s.size === size))
      .map((m) => ({
        brand: b.name,
        brandSlug: b.slug,
        model: m.name,
        modelSlug: m.slug,
        kelas: m.kelas,
      }))
  );
