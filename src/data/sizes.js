import { trucksForSize } from "./fitment";

// Per-size landing data for /ban/{slug}.
// PRICES = kisaran (range) from REAL sold invoices (Untuk Andy Johaness (4).xlsx,
// Apr–Jul 2026) — indicative, updated via WhatsApp; NOT a fixed list price.
// IMAGES = real product cards from the katalog (carry legacy muatparts/0851
// branding — cosmetic; the live WA CTA uses the tracked MuatTruk number).
export const banSizes = [
  {
    slug: "7-50-r16",
    size: "7.50 R16",
    image: "/ban/tire-7-50-r16.jpg",
    tagline: "Ban truk engkel & colt diesel — ukuran paling laris.",
    ply: "14PR",
    kelas: ["Colt diesel double", "Truk engkel box", "Truk engkel bak besar", "CDD"],
    brands: ["Goodride", "GT", "Blackhawk"],
    priceMin: 1370000,
    priceMax: 2180000,
  },
  {
    slug: "10-00-r20",
    size: "10.00 R20",
    image: "/ban/tire-10-00-r20.jpg",
    tagline: "Ban tronton & wingbox 10 roda.",
    ply: "16–18PR",
    kelas: ["Tronton logistik", "Wingbox 10 roda", "Kontainer"],
    brands: ["Yartu", "Trazano", "Goodride"],
    priceMin: 3575000,
    priceMax: 3650000,
  },
  {
    slug: "11-00-r20",
    size: "11.00 R20",
    image: "/ban/tire-11-00-r20.jpg",
    tagline: "Ban dump, tronton & trailer untuk beban berat.",
    ply: "16–18PR",
    kelas: ["Dump truck", "Tronton", "Trailer sasis pendek", "Truk tangki"],
    brands: ["Yartu", "Goodride", "Advance"],
    priceMin: 3350000,
    priceMax: 4883000,
  },
];

export const findBanSize = (slug) => banSizes.find((s) => s.slug === slug);
export const banTrucks = (size) => trucksForSize(size);

// Map a fitment size string ("11.00 R20") to its /ban/{slug}, or null if no page.
export const slugForSize = (size) =>
  banSizes.find((s) => s.size === size)?.slug || null;

// "Rp 1,37 jt" style, from an IDR number.
export const rpJt = (n) =>
  "Rp " + (n / 1_000_000).toFixed(2).replace(".", ",") + " jt";
