"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { WaButton } from "./WaButton";

const nav = [
  { href: "/ban", label: "Harga Ban" },
  { href: "/oli", label: "Harga Oli" },
  { href: "/cek-ukuran-ban", label: "Cek Ukuran Ban" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-muat-line bg-muat-surface/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muat-ink/80 transition hover:bg-muat-primary-soft hover:text-muat-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WaButton
            pageType="header"
            className="hidden !px-4 !py-2 text-sm sm:inline-flex"
          >
            Chat Harga
          </WaButton>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-muat-line md:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-muat-line bg-muat-surface md:hidden">
          <nav className="container-x flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-muat-line py-3 text-[15px] font-semibold text-muat-ink last:border-0"
              >
                {n.label}
                <span className="text-muat-muted">›</span>
              </Link>
            ))}
            <WaButton pageType="header" className="mt-3 w-full">
              Chat Harga di WA
            </WaButton>
          </nav>
        </div>
      )}
    </header>
  );
};
