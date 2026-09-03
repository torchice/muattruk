// Mock katalog MuatTruk — sparepart truk B2B.
// Semua data contoh untuk MVP; ganti dengan sumber nyata saat integrasi backend.

export const manufacturers = [
  { slug: "golden-crown", name: "Golden Crown", origin: "Lokal", note: "Merek utama internal" },
  { slug: "sakura", name: "Sakura", origin: "Impor", note: "Filter" },
  { slug: "aspira", name: "Aspira", origin: "Lokal", note: "Aki & kampas" },
  { slug: "bosch", name: "Bosch", origin: "Impor", note: "Kelistrikan" },
  { slug: "gt-radial", name: "GT Radial", origin: "Lokal", note: "Ban truk" },
  { slug: "federal", name: "Federal Parts", origin: "Lokal", note: "V-belt & seal" },
];

export const categories = [
  { slug: "oli", name: "Oli & Pelumas", icon: "🛢️", desc: "Ganti tiap 2–3 bulan" },
  { slug: "ban", name: "Ban Truk", icon: "🛞", desc: "Ganti tiap 6–12 bulan" },
  { slug: "filter", name: "Filter", icon: "🧯", desc: "Udara, oli, solar" },
  { slug: "kampas-rem", name: "Kampas Rem", icon: "🛑", desc: "Ganti 30–50 rb km" },
  { slug: "aki", name: "Aki / Baterai", icon: "🔋", desc: "Ganti tiap 1–2 tahun" },
  { slug: "v-belt", name: "V-Belt / Fan Belt", icon: "➰", desc: "Add-on murah, sering" },
];

export const trucks = [
  { slug: "hino", name: "Hino", models: ["Dutro 130 HD", "Ranger FG", "Ranger FM"] },
  { slug: "isuzu", name: "Isuzu", models: ["Elf NMR 71", "Giga FVR", "Giga FVM"] },
  { slug: "fuso", name: "Mitsubishi Fuso", models: ["Canter FE", "Fighter FN", "Super Great"] },
  { slug: "ud-trucks", name: "UD Trucks", models: ["Kuzer RKE", "Quester CWE"] },
];

// bucket: "A" = stok siap (konfirmasi hari yang sama), "B" = perlu dicari (SLA 1–2 hari)
export const products = [
  {
    id: "oli-gc-15w40",
    name: "Oli Mesin Diesel Golden Crown 15W-40 (20L)",
    category: "oli",
    manufacturer: "golden-crown",
    price: 685000,
    unit: "pail 20L",
    bucket: "A",
    stock: 120,
    consumeDays: 75,
    fits: ["hino", "isuzu", "fuso", "ud-trucks"],
    specs: { viskositas: "15W-40", api: "CI-4", volume: "20 L" },
  },
  {
    id: "ban-gt-1000-20",
    name: "Ban GT Radial GT279 1000-20 16PR",
    category: "ban",
    manufacturer: "gt-radial",
    price: 2450000,
    unit: "per ban",
    bucket: "A",
    stock: 42,
    consumeDays: 300,
    fits: ["hino", "isuzu", "fuso"],
    specs: { ukuran: "1000-20", ply: "16PR", pola: "Rib" },
  },
  {
    id: "filter-sakura-oli",
    name: "Filter Oli Sakura C-5904",
    category: "filter",
    manufacturer: "sakura",
    price: 78000,
    unit: "per unit",
    bucket: "A",
    stock: 340,
    consumeDays: 75,
    fits: ["hino", "isuzu"],
    specs: { tipe: "Spin-on", kode: "C-5904" },
  },
  {
    id: "filter-sakura-solar",
    name: "Filter Solar Sakura FS-1108",
    category: "filter",
    manufacturer: "sakura",
    price: 95000,
    unit: "per unit",
    bucket: "A",
    stock: 210,
    consumeDays: 90,
    fits: ["fuso", "ud-trucks"],
    specs: { tipe: "Fuel", kode: "FS-1108" },
  },
  {
    id: "kampas-aspira-front",
    name: "Kampas Rem Depan Aspira Heavy Duty",
    category: "kampas-rem",
    manufacturer: "aspira",
    price: 420000,
    unit: "set",
    bucket: "A",
    stock: 60,
    consumeDays: 200,
    fits: ["hino", "isuzu", "fuso"],
    specs: { posisi: "Depan", material: "Semi-metalik" },
  },
  {
    id: "aki-bosch-n150",
    name: "Aki Bosch N150 12V 150Ah",
    category: "aki",
    manufacturer: "bosch",
    price: 1850000,
    unit: "per unit",
    bucket: "A",
    stock: 28,
    consumeDays: 540,
    fits: ["hino", "fuso", "ud-trucks"],
    specs: { tegangan: "12V", kapasitas: "150Ah", tipe: "Basah" },
  },
  {
    id: "vbelt-federal-b57",
    name: "V-Belt Federal B-57",
    category: "v-belt",
    manufacturer: "federal",
    price: 62000,
    unit: "per unit",
    bucket: "A",
    stock: 400,
    consumeDays: 150,
    fits: ["isuzu", "fuso"],
    specs: { profil: "B", panjang: "57 inch" },
  },
  {
    id: "turbo-gc-he221",
    name: "Turbocharger HE221W (Rekondisi)",
    category: "oli",
    manufacturer: "golden-crown",
    price: 6800000,
    unit: "per unit",
    bucket: "B",
    stock: 0,
    consumeDays: 0,
    fits: ["hino", "isuzu"],
    specs: { tipe: "HE221W", kondisi: "Rekondisi bergaransi" },
  },
  {
    id: "kopling-gc-set",
    name: "Kopling Set Golden Crown (Plat + Matahari + Drek Laher)",
    category: "kampas-rem",
    manufacturer: "golden-crown",
    price: 3200000,
    unit: "set",
    bucket: "B",
    stock: 0,
    consumeDays: 0,
    fits: ["fuso", "ud-trucks"],
    specs: { isi: "3 komponen", diameter: '14"' },
  },
];

export const rupiah = (n) =>
  "Rp " + Number(n || 0).toLocaleString("id-ID");

export const catName = (slug) =>
  categories.find((c) => c.slug === slug)?.name || slug;

export const mfrName = (slug) =>
  manufacturers.find((m) => m.slug === slug)?.name || slug;

export const truckName = (slug) =>
  trucks.find((t) => t.slug === slug)?.name || slug;
