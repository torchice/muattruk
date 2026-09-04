"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { WaButton } from "./WaButton";

const nav = [
  { href: "/cek-ukuran-ban", label: "Cek Ukuran Ban" },
  { href: "/ban", label: "Harga Ban" },
  { href: "/find-a-part", label: "Cari Sparepart" },
  { href: "/manufacturer", label: "Merek" },
  { href: "/category", label: "Kategori" },
  { href: "/truck", label: "Truk" },
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
          <Link
            href="/reminder"
            className="hidden rounded-md px-3 py-2 text-sm font-semibold text-muat-muted transition hover:text-muat-primary lg:block"
          >
            Pengingat Konsumsi
          </Link>
          <WaButton
            pageType="header"
            variant="ghost"
            className="hidden !px-3 !py-2 text-sm sm:inline-flex"
          >
            WhatsApp
          </WaButton>
          <Link
            href="/find-a-part"
            className="rounded-lg bg-muat-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-muat-primary-dark"
          >
            Cari Sparepart
          </Link>
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
            {[...nav, { href: "/reminder", label: "Pengingat Konsumsi" }].map(
              (n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-muat-line py-3 text-[15px] font-semibold text-muat-primary last:border-0"
                >
                  {n.label}
                  <span className="text-muat-muted">›</span>
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
