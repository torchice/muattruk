"use client";

import { useEffect, useState } from "react";
import { buildWaHref, eventParams } from "@/config/tracking";
import { getStoredRef, trackWaClick } from "@/lib/track";

// WhatsApp glyph. Green (--color-wa) is used ONLY here — never as a button body.
const WaIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={"fill-current " + className}
  >
    <path d="M17.6 6.3A7.9 7.9 0 0 0 12 4 8 8 0 0 0 5.1 15.9L4 20l4.2-1.1A8 8 0 1 0 17.6 6.3ZM12 18.5a6.5 6.5 0 0 1-3.3-.9l-.24-.15-2.5.66.67-2.44-.16-.25A6.5 6.5 0 1 1 12 18.5Zm3.6-4.9c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.63-.62.76-.23.15-.43.05a5.3 5.3 0 0 1-1.56-.96 5.9 5.9 0 0 1-1.08-1.35c-.11-.19 0-.3.09-.39l.3-.35c.1-.12.13-.2.2-.34a.37.37 0 0 0-.02-.35c-.05-.1-.44-1.06-.6-1.45s-.32-.33-.44-.33h-.38a.73.73 0 0 0-.53.24 2.2 2.2 0 0 0-.68 1.63A3.8 3.8 0 0 0 8 10.6a8.7 8.7 0 0 0 3.33 2.94c.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94s.17-.86.12-.94-.18-.14-.38-.24Z" />
  </svg>
);

// The WhatsApp affordance, in three tiers (design.md CTA rule):
//   primary   — orange solid, one loud action per decision-point
//   secondary — ink outline, alternate / footer
//   quiet     — recessive orange text link, for pre-filled size/product cards
// Legacy names (solid/outline/ghost) map onto the same de-greened styles so pages
// not hand-touched this pass still lose the old green-button clash automatically.
const shell =
  "group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold " +
  "transition-transform transition-colors focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 disabled:opacity-60";

const TIERS = {
  primary:
    shell +
    " min-h-[48px] px-6 py-3.5 bg-muat-primary text-white shadow-sm " +
    "hover:bg-muat-primary-dark hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    shell +
    " min-h-[44px] px-5 py-3 border border-muat-ink/25 text-muat-ink " +
    "bg-transparent hover:border-muat-ink hover:bg-muat-ink/[0.04]",
  quiet:
    "group inline-flex min-h-[44px] items-center gap-1.5 font-mono text-xs " +
    "font-bold uppercase tracking-wide text-muat-primary " +
    "transition-colors hover:text-muat-primary-dark",
};

const ALIAS = { solid: "primary", outline: "secondary", ghost: "quiet" };

// The green glyph, framed per tier so it stays crisp:
//  - on the orange primary it sits in a white chip (green-on-white reads as WA)
//  - elsewhere the green glyph sits directly on the light surface
const Glyph = ({ tier }) =>
  tier === "primary" ? (
    <span
      className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-white"
      style={{ color: "var(--color-wa)" }}
    >
      <WaIcon className="h-4 w-4" />
    </span>
  ) : (
    <span style={{ color: "var(--color-wa)" }} className="shrink-0">
      <WaIcon className={tier === "quiet" ? "h-4 w-4" : "h-5 w-5"} />
    </span>
  );

export const WaButton = ({
  size,
  product,
  category,
  city,
  note,
  pageType,
  children,
  variant = "primary",
  className = "",
}) => {
  const [ref, setRef] = useState("DIRECT");

  useEffect(() => {
    setRef(getStoredRef());
    const onRef = (e) => setRef(e.detail || getStoredRef());
    window.addEventListener("mo:ref", onRef);
    return () => window.removeEventListener("mo:ref", onRef);
  }, []);

  const tier = ALIAS[variant] || (TIERS[variant] ? variant : "primary");
  const href = buildWaHref({ size, product, city, note, ref });

  const onClick = (e) => {
    // Guarantee the opened message uses the freshest ref, even if it resolved
    // after first render (the message text is the real attribution source).
    const fresh = getStoredRef();
    if (fresh !== ref) {
      e.currentTarget.href = buildWaHref({ size, product, city, note, ref: fresh });
    }
    trackWaClick(eventParams({ ref: fresh, size, product, category, pageType }));
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      data-ref={ref}
      className={TIERS[tier] + (className ? " " + className : "")}
    >
      <Glyph tier={tier} />
      <span>{children || "Chat harga di WA"}</span>
      {tier === "quiet" && (
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      )}
    </a>
  );
};
