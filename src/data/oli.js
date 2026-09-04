// Oli truk — data indikatif untuk MVP. Harga KISARAN eceran, owner konfirmasi
// angka live via WhatsApp (bukan harga fix). Fokus: oli mesin diesel truk.
export const oliProducts = [
  {
    id: "15w40-pail-20l",
    name: "Oli Mesin Diesel 15W-40",
    size: "Pail 20 Liter",
    visc: "15W-40",
    brands: ["Meditran SX", "Golden Crown", "Fastron"],
    cocok: ["Colt Diesel", "Fuso", "Hino", "Dyna", "Elf"],
    priceMin: 1500000,
    priceMax: 1680000,
    note: "Paling laris — harian sampai muatan berat.",
    bestSeller: true,
  },
  {
    id: "sae40-pail-20l",
    name: "Oli Mesin Diesel SAE 40 Monograde",
    size: "Pail 20 Liter",
    visc: "SAE 40",
    brands: ["Meditran S", "Golden Crown"],
    cocok: ["Mesin diesel lawas", "Kerja berat"],
    priceMin: 1350000,
    priceMax: 1500000,
    note: "Buat mesin lama / kerja berat non-stop.",
  },
  {
    id: "15w40-galon-5l",
    name: "Oli Mesin Diesel 15W-40",
    size: "Galon 5 Liter",
    visc: "15W-40",
    brands: ["Meditran SX", "Fastron"],
    cocok: ["Colt Diesel", "Elf", "Dyna"],
    priceMin: 380000,
    priceMax: 460000,
    note: "Ukuran kecil, pas buat ganti sendiri.",
  },
  {
    id: "gardan-sae90",
    name: "Oli Gardan & Transmisi SAE 90",
    size: "Per Liter",
    visc: "SAE 90",
    brands: ["Rored", "Meditran"],
    cocok: ["Semua truk diesel"],
    priceMin: 35000,
    priceMax: 65000,
    note: "Perawatan gardan & transmisi.",
  },
];

export const findOli = (id) => oliProducts.find((o) => o.id === id);
