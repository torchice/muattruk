// Client-side tracking helpers. Window-guarded so they no-op during SSR and
// when Pixel/GA4 are not configured. Imported by client components only.

import { normalizeRef } from "@/config/tracking";

const REF_KEY = "mo_ref";
const NINETY_DAYS = 60 * 60 * 24 * 90;

// Persist the acquisition ref on landing (localStorage + cookie fallback) so a
// Meta/SEO click still identifies the lead even after the visitor browses on.
export function setStoredRef(raw) {
  const r = normalizeRef(raw);
  try {
    localStorage.setItem(REF_KEY, r);
  } catch {}
  try {
    document.cookie = `${REF_KEY}=${r}; path=/; max-age=${NINETY_DAYS}; samesite=lax`;
  } catch {}
  // Notify any mounted WaButton so its href updates to the resolved ref.
  try {
    window.dispatchEvent(new CustomEvent("mo:ref", { detail: r }));
  } catch {}
  return r;
}

export function getStoredRef() {
  try {
    const v = localStorage.getItem(REF_KEY);
    if (v) return v;
  } catch {}
  try {
    const m = document.cookie.match(/(?:^|;\s*)mo_ref=([^;]+)/);
    if (m) return decodeURIComponent(m[1]);
  } catch {}
  return "DIRECT";
}

// The lead event — fires on every WhatsApp CTA click, in both systems at once.
export function trackWaClick(params) {
  if (typeof window === "undefined") return;
  try {
    if (window.fbq) window.fbq("track", "Contact", params);
  } catch {}
  try {
    if (window.gtag) window.gtag("event", "wa_click", params);
  } catch {}
}

// Fires when a size / product page opens.
export function trackViewContent({ size, category, ref }) {
  if (typeof window === "undefined") return;
  try {
    if (window.fbq)
      window.fbq("track", "ViewContent", {
        content_type: "tire_size",
        content_name: size || "",
        ref,
      });
  } catch {}
  try {
    if (window.gtag)
      window.gtag("event", "view_item", {
        item_id: size || "",
        item_category: category || "",
        ref,
      });
  } catch {}
}
