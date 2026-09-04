"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, trucks } from "@/data/catalog";

export const FindAPart = () => {
  const [truck, setTruck] = useState("");
  const [category, setCategory] = useState("");
  const [q, setQ] = useState("");
  const [searched, setSearched] = useState(false);

  const results = useMemo(() => {
    return products.filter((p) => {
      if (truck && !p.fits.includes(truck)) return false;
      if (category && p.category !== category) return false;
      if (q) {
        const hay = (p.name + " " + Object.values(p.specs).join(" ")).toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [truck, category, q]);

  const bucketA = results.filter((p) => p.bucket === "A");
  const bucketB = results.filter((p) => p.bucket === "B");

  return (
    <>
      <PageHero
        kicker="Pencarian Part Cerdas"
        title="Kami yang Carikan"
        sub="Input tipe truk atau spesifikasi. Lihat dulu, beli kalau cocok — tidak ada paksaan order."
      />

      <section className="container-x -mt-6">
        <div className="rounded-2xl border border-muat-line bg-muat-surface p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Merek truk">
              <select
                value={truck}
                onChange={(e) => setTruck(e.target.value)}
                className="w-full rounded-lg border border-muat-line bg-muat-bg px-3 py-2.5 text-sm outline-none focus:border-muat-primary"
              >
                <option value="">Semua merek</option>
                {trucks.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Kategori part">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-muat-line bg-muat-bg px-3 py-2.5 text-sm outline-none focus:border-muat-primary"
              >
                <option value="">Semua kategori</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Kata kunci / kode part">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="mis. 15W-40, C-5904, 1000-20"
                className="w-full rounded-lg border border-muat-line bg-muat-bg px-3 py-2.5 text-sm outline-none focus:border-muat-primary"
              />
            </Field>
          </div>

          <button
            onClick={() => setSearched(true)}
            className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-muat-ink px-5 py-3 font-mono text-sm font-semibold text-muat-on-dark transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:w-auto"
          >
            Carikan Stok
            <span className="chip" aria-hidden="true">
              →
            </span>
          </button>
          <p className="mt-3 text-xs text-muat-muted">
            💡 Tidak ketemu? Ahli kami tetap bisa carikan — buka Chat Ahli AI di
            pojok kanan bawah.
          </p>
        </div>
      </section>

      <section className="container-x py-12">
        {!searched && !truck && !category && !q ? (
          <EmptyPrompt />
        ) : (
          <div className="space-y-10">
            <BucketBlock
              tone="ok"
              title="Stok Siap"
              note="Konfirmasi di hari yang sama."
              items={bucketA}
            />
            <BucketBlock
              tone="gold"
              title="Perlu Dicari"
              note="Estimasi 1–2 hari, dikomunikasikan di awal."
              items={bucketB}
            />
            {results.length === 0 && (
              <div className="rounded-2xl border border-dashed border-muat-line bg-muat-surface p-10 text-center">
                <div className="text-3xl">🔎</div>
                <p className="mt-3 font-bold text-muat-ink">
                  Belum ada yang cocok dengan filter ini
                </p>
                <p className="mt-1 text-sm text-muat-muted">
                  Longgarkan filter, atau minta ahli kami carikan lewat chat.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

const Field = ({ label, children }) => (
  <label className="block">
    <span className="mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muat-faint">
      {label}
    </span>
    {children}
  </label>
);

const BucketBlock = ({ title, note, items, tone }) => {
  if (items.length === 0) return null;
  const dot = tone === "ok" ? "bg-muat-ok" : "bg-muat-gold";
  return (
    <div>
      <div className="flex items-center gap-3 border-b border-muat-line pb-3">
        <span className={"h-2.5 w-2.5 rounded-full " + dot} />
        <h2 className="text-lg font-extrabold tracking-tight text-muat-ink">
          {title}
        </h2>
        <span className="font-mono text-[11px] text-muat-faint">· {note}</span>
        <span className="tnum ml-auto font-mono text-[11px] font-semibold text-muat-muted">
          {items.length} part
        </span>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

const EmptyPrompt = () => (
  <div className="rounded-2xl border border-dashed border-muat-line bg-muat-surface p-12 text-center">
    <div className="text-4xl">🚚🔧</div>
    <p className="mt-4 text-lg font-bold text-muat-ink">
      Pilih merek truk atau ketik kode part untuk mulai
    </p>
    <p className="mx-auto mt-2 max-w-md text-sm text-muat-muted">
      Kami tampilkan Stok Siap (konfirmasi hari ini) dan Perlu Dicari
      (part langka, estimasi 1–2 hari) secara terpisah supaya jelas mana yang
      bisa langsung dikirim.
    </p>
  </div>
);
