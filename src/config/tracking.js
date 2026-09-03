// Central tracking + WhatsApp config — the single source of truth for the
// tracked WhatsApp layer (dev item-1). Pure functions only: safe to import in
// both Server and Client components. See TRACKING_SPEC.md + GOALS.md.

export const WA_NUMBER =
  process.env.NEXT_PUBLIC_WA_NUMBER || "6281138867000"; // 0811-3886-7000, intl format

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

// Ref code scheme (from brief): META-{campaign}, SEO-{slug}, GBP, TIKTOK, MP, DIRECT.
export const REF = { GBP: "GBP", MP: "MP", TIKTOK: "TIKTOK", DIRECT: "DIRECT" };
export const metaRef = (campaign) => `META-${campaign}`;
export const seoRef = (slug) => `SEO-${slug}`;

// Only accept known ref shapes; anything else collapses to DIRECT so the WA
// inbox never fills with junk codes.
export function normalizeRef(raw) {
  if (!raw) return REF.DIRECT;
  const v = String(raw).trim().toUpperCase().slice(0, 40);
  if (/^(META|SEO)-[A-Z0-9._-]{1,32}$/.test(v)) return v;
  if (["GBP", "MP", "TIKTOK", "DIRECT"].includes(v)) return v;
  return REF.DIRECT;
}

// Pre-filled WhatsApp text. Bahasa Indonesia, informal, Surabaya register.
// Always ends with [ref:XXX] so any inbound message is traceable to its source.
export function buildWaText({ size, product, city, note, ref } = {}) {
  const r = normalizeRef(ref);
  const lines = [];
  if (product) lines.push(`Halo, saya mau tanya stok + harga: ${product}.`);
  else if (size) lines.push(`Halo, saya mau tanya stok + harga ban ${size}.`);
  else lines.push("Halo, saya mau tanya stok + harga sparepart truk.");
  if (size && product) lines.push(`Ukuran ${size}.`);
  if (city) lines.push(`Lokasi ${city}.`);
  if (note) lines.push(`Pertanyaan: ${String(note).slice(0, 140)}`);
  lines.push(`[ref:${r}]`);
  return lines.join(" ");
}

export function buildWaHref(args = {}) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText(args))}`;
}

// Shared event params so Meta (Contact) and GA4 (wa_click) line up 1:1.
export function eventParams({ ref, size, product, category, pageType } = {}) {
  return {
    ref: normalizeRef(ref),
    size: size || "",
    product: product || "",
    category: category || "",
    page_type: pageType || "",
  };
}
