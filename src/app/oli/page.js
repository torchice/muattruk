import { PageHero } from "@/components/Section";
import { WaButton } from "@/components/WaButton";
import { oliProducts } from "@/data/oli";
import { rupiah } from "@/data/catalog";

export const metadata = {
  title: "Harga Oli Mesin Truk Diesel — 15W-40 & SAE 40 | MuatTruk",
  description:
    "Harga oli mesin diesel truk: 15W-40 pail 20L, SAE 40, oli gardan. Cocok Colt Diesel, Fuso, Hino, Elf. Chat WhatsApp buat harga nett + stok hari ini.",
  alternates: { canonical: "/oli", languages: { "id-ID": "/oli" } },
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Oli Truk"
        title="Harga Oli Mesin Truk"
        sub="Oli diesel buat truk kamu — pail 20L sampai galon. Harga kisaran di sini, harga nett + stok langsung di WhatsApp."
      />

      <section className="container-x py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {oliProducts.map((o) => (
            <div
              key={o.id}
              className="relative flex flex-col rounded-xl border border-muat-line bg-muat-surface p-6"
            >
              {o.bestSeller && (
                <span className="absolute right-4 top-4 rounded bg-muat-primary/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-muat-primary">
                  Paling laris
                </span>
              )}
              <div className="text-4xl">🛢️</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muat-faint">
                {o.visc} · {o.size}
              </div>
              <h2 className="mt-1 text-lg font-extrabold tracking-tight text-muat-ink">
                {o.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muat-muted">
                {o.note}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {o.brands.map((b) => (
                  <span
                    key={b}
                    className="rounded bg-muat-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muat-muted"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <p className="mt-3 font-mono text-[11px] text-muat-faint">
                Cocok: {o.cocok.join(", ")}
              </p>

              <div className="mt-auto flex items-end justify-between border-t border-muat-line pt-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-muat-faint">
                    Kisaran
                  </div>
                  <div className="tnum text-lg font-extrabold text-muat-ink">
                    {rupiah(o.priceMin)}–{rupiah(o.priceMax)}
                  </div>
                </div>
                <WaButton
                  pageType="oli"
                  product={`${o.name} ${o.size}`}
                  className="!px-4 !py-2.5 text-xs"
                >
                  Tanya harga
                </WaButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-2xl font-mono text-[11px] leading-relaxed text-muat-faint">
          * Harga kisaran eceran, bisa berubah &amp; bisa nego. Chat WhatsApp buat
          harga nett hari ini — apalagi kalau ambil banyak.
        </p>
      </section>
    </>
  );
}
