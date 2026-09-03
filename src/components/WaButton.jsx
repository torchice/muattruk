"use client";

import { useEffect, useState } from "react";
import { buildWaHref, eventParams } from "@/config/tracking";
import { getStoredRef, trackWaClick } from "@/lib/track";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M17.6 6.3A7.9 7.9 0 0 0 12 4 8 8 0 0 0 5.1 15.9L4 20l4.2-1.1A8 8 0 1 0 17.6 6.3ZM12 18.5a6.5 6.5 0 0 1-3.3-.9l-.24-.15-2.5.66.67-2.44-.16-.25A6.5 6.5 0 1 1 12 18.5Zm3.6-4.9c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.63-.62.76-.23.15-.43.05a5.3 5.3 0 0 1-1.56-.96 5.9 5.9 0 0 1-1.08-1.35c-.11-.19 0-.3.09-.39l.3-.35c.1-.12.13-.2.2-.34a.37.37 0 0 0-.02-.35c-.05-.1-.44-1.06-.6-1.45s-.32-.33-.44-.33h-.38a.73.73 0 0 0-.53.24 2.2 2.2 0 0 0-.68 1.63A3.8 3.8 0 0 0 8 10.6a8.7 8.7 0 0 0 3.33 2.94c.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94s.17-.86.12-.94-.18-.14-.38-.24Z" />
  </svg>
);

const VARIANTS = {
  solid: "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-sm",
  outline: "border border-[#25D366] text-[#128C4B] hover:bg-[#25D366]/10",
  ghost: "text-[#128C4B] hover:bg-[#25D366]/10",
};

// The one tracked WhatsApp CTA used everywhere on the site. Builds a wa.me link
// with the tire size (when known) + a [ref:XXX] pre-filled, and fires the
// Meta Contact + GA4 wa_click events on click. Ref is resolved client-side from
// the persisted acquisition source.
export const WaButton = ({
  size,
  product,
  category,
  city,
  note,
  pageType,
  children,
  variant = "solid",
  className = "",
}) => {
  const [ref, setRef] = useState("DIRECT");

  useEffect(() => {
    setRef(getStoredRef());
    const onRef = (e) => setRef(e.detail || getStoredRef());
    window.addEventListener("mo:ref", onRef);
    return () => window.removeEventListener("mo:ref", onRef);
  }, []);

  const href = buildWaHref({ size, product, city, note, ref });

  const onClick = (e) => {
    // Guarantee the opened message uses the freshest ref, even if it resolved
    // after first render (the message text is the real attribution source).
    const fresh = getStoredRef();
    if (fresh !== ref) {
      e.currentTarget.href = buildWaHref({ size, product, city, note, ref: fresh });
    }
    trackWaClick(
      eventParams({ ref: fresh, size, product, category, pageType })
    );
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      data-ref={ref}
      className={
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition " +
        (VARIANTS[variant] || VARIANTS.solid) +
        (className ? " " + className : "")
      }
    >
      <WaIcon />
      <span>{children || "Chat via WhatsApp"}</span>
    </a>
  );
};
