"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setStoredRef, getStoredRef } from "@/lib/track";

// Reads the acquisition ref from the URL on landing and persists it. Accepts an
// explicit ?ref=, or derives one from utm_source/utm_campaign. Must be rendered
// inside a <Suspense> boundary (useSearchParams). Renders nothing.
export const RefCapture = () => {
  const sp = useSearchParams();

  useEffect(() => {
    const explicit = sp.get("ref") || sp.get("utm_ref");
    const utmSource = sp.get("utm_source");
    const derived = utmSource
      ? `${utmSource}-${sp.get("utm_campaign") || "x"}`
      : "";
    const raw = explicit || derived;
    if (raw) setStoredRef(raw);
    else getStoredRef(); // ensure a value exists for later clicks
  }, [sp]);

  return null;
};
