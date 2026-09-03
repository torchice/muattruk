import Link from "next/link";
import { PageHero } from "@/components/Section";
import { WaButton } from "@/components/WaButton";
import { banSizes, rpJt } from "@/data/sizes";

export const metadata = {
  title: "Harga Ban Truk — 7.50 R16, 10.00 R20, 11.00 R20 | MuatTruk",
  description:
    "Daftar harga ban truk MuatTruk: 7.50 R16, 10.00 R20, 11.00 R20. Kisaran harga + truk yang cocok. Chat WhatsApp untuk stok + harga hari ini.",
  alternates: { canonical: "/ban", languages: { "id-ID": "/ban" } },
};

export default function Page() {
  return (
    <>
      <PageHero kicker="Harga Ban" title="Harga Ban Truk" />

      <section className="container-x py-12">
        <p className="max-w-2xl text-muat-muted">
          Pilih ukuran ban truk Anda untuk lihat kisaran harga dan truk yang
          cocok. Harga pasti + stok hari ini via WhatsApp.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {banSizes.map((s) => (
            <Link
              key={s.slug}
              href={`/ban/${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-muat-line bg-muat-surface transition hover:-translate-y-1 hover:border-muat-primary/40 hover:shadow-lg"
            >
              <img
                src={s.image}
                alt={`Ban truk ${s.size}`}
                width={900}
                height={900}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-lg font-extrabold text-muat-ink group-hover:text-muat-primary">
                  Ban {s.size}
                </div>
                <div className="mt-1 text-sm text-muat-muted">{s.tagline}</div>
                <div className="mt-2 text-sm font-bold text-muat-ink">
                  Mulai {rpJt(s.priceMin)} / ban
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <WaButton pageType="ban-index">Nggak nemu ukuran? Chat kami</WaButton>
        </div>
      </section>
    </>
  );
}
