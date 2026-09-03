import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/Section";
import { WaButton } from "@/components/WaButton";
import { fitmentBrands, findBrand } from "@/data/fitment";

export function generateStaticParams() {
  return fitmentBrands.map((b) => ({ brand: b.slug }));
}

export function generateMetadata({ params }) {
  const b = findBrand(params.brand);
  return {
    title: `Ukuran Ban Truk ${b?.name || "Truk"} | MuatTruk`,
    description: `Pilih model truk ${b?.name || ""} untuk melihat ukuran ban yang cocok. Tanya harga via WhatsApp.`,
    alternates: {
      canonical: `/cek-ukuran-ban/${params.brand}`,
      languages: { "id-ID": `/cek-ukuran-ban/${params.brand}` },
    },
  };
}

export default function Page({ params }) {
  const brand = findBrand(params.brand);
  if (!brand) notFound();

  return (
    <>
      <PageHero kicker="Cek Ukuran Ban" title={`Ban Truk ${brand.name}`} />

      <section className="container-x py-12">
        <Link
          href="/cek-ukuran-ban"
          className="text-sm font-semibold text-muat-primary hover:underline"
        >
          ← Semua merek
        </Link>

        <p className="mt-4 max-w-2xl text-muat-muted">
          Pilih model {brand.name} Anda untuk melihat ukuran ban yang cocok.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brand.models.map((m) => (
            <Link
              key={m.slug}
              href={`/cek-ukuran-ban/${brand.slug}/${m.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-muat-line bg-muat-surface p-5 transition hover:-translate-y-0.5 hover:border-muat-primary/40 hover:shadow-md"
            >
              <div>
                <div className="text-base font-extrabold text-muat-ink group-hover:text-muat-primary">
                  {m.name}
                </div>
                <div className="mt-0.5 text-[11px] text-muat-muted">{m.kelas}</div>
              </div>
              <span className="text-muat-muted">›</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-muat-line bg-muat-bg p-6">
          <div className="flex-1">
            <div className="text-sm font-bold text-muat-ink">
              Model {brand.name} Anda tidak ada?
            </div>
            <p className="mt-1 text-sm text-muat-muted">
              Chat kami dengan tipe truk Anda, kami carikan ukuran ban yang tepat.
            </p>
          </div>
          <WaButton pageType="cek-ukuran" note={`Ban truk ${brand.name}`}>
            Tanya Ukuran Ban
          </WaButton>
        </div>
      </section>
    </>
  );
}
