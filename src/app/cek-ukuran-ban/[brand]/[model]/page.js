import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/Section";
import { WaButton } from "@/components/WaButton";
import { allBrandModelParams, findModel } from "@/data/fitment";
import { slugForSize } from "@/data/sizes";

export function generateStaticParams() {
  return allBrandModelParams();
}

export function generateMetadata({ params }) {
  const { brand, model } = findModel(params.brand, params.model);
  const sizes = model?.sizes || [];
  return {
    title: `Ukuran Ban ${brand?.name || ""} ${model?.name || "Truk"}${
      sizes[0] ? ` — ${sizes[0].size}` : ""
    } | MuatTruk`,
    description: sizes.length
      ? `Ukuran ban ${brand?.name} ${model?.name}: ${sizes
          .map((s) => s.size)
          .join(", ")}. Tanya stok + harga via WhatsApp.`
      : `Cek ukuran ban ${brand?.name} ${model?.name} — chat kami untuk ukuran pasti + harga.`,
    alternates: {
      canonical: `/cek-ukuran-ban/${params.brand}/${params.model}`,
      languages: { "id-ID": `/cek-ukuran-ban/${params.brand}/${params.model}` },
    },
  };
}

export default function Page({ params }) {
  const { brand, model } = findModel(params.brand, params.model);
  if (!brand || !model) notFound();

  const sizes = model.sizes || [];
  const hasSizes = sizes.length > 0;

  return (
    <>
      <PageHero
        kicker={`${brand.name} · ${model.kelas}`}
        title={`Ukuran Ban ${brand.name} ${model.name}`}
      />

      <section className="container-x max-w-3xl py-12">
        <Link
          href={`/cek-ukuran-ban/${brand.slug}`}
          className="text-sm font-semibold text-muat-primary hover:underline"
        >
          ← Semua model {brand.name}
        </Link>

        {hasSizes ? (
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-extrabold text-muat-ink">
              Ukuran ban yang cocok
            </h2>
            {sizes.map((s) => (
              <div
                key={s.size}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-muat-line bg-muat-surface p-6"
              >
                <div>
                  <div className="text-2xl font-black text-muat-ink">
                    {s.size}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                    {s.ply && <span className="text-muat-muted">{s.ply}</span>}
                    {s.axle && (
                      <span className="text-muat-muted">{s.axle}</span>
                    )}
                    <ConfidenceBadge c={s.confidence} />
                  </div>
                </div>
                <div className="flex flex-col items-stretch gap-2">
                  <WaButton
                    pageType="cek-ukuran"
                    size={s.size}
                    variant="secondary"
                    note={`${brand.name} ${model.name}`}
                  >
                    Tanya harga ban {s.size}
                  </WaButton>
                  {slugForSize(s.size) && (
                    <Link
                      href={`/ban/${slugForSize(s.size)}`}
                      className="text-center text-xs font-semibold text-muat-primary hover:underline"
                    >
                      Lihat harga & detail ban {s.size} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
            <p className="text-xs text-muat-muted">
              Ukuran mengikuti standar pabrik; ukuran aktual bisa berbeda kalau
              truk sudah dimodifikasi. Ragu? Chat kami dengan foto ban lama.
            </p>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-muat-line bg-muat-bg p-6">
            <h2 className="text-lg font-extrabold text-muat-ink">
              Ukuran sedang kami konfirmasi
            </h2>
            <p className="mt-1 text-sm text-muat-muted">
              Biar tidak salah ukuran (salah ukuran = salah harga), chat kami dan
              sebutkan {brand.name} {model.name} — kami kasih ukuran ban yang
              pasti plus harganya.
            </p>
            <div className="mt-4">
              <WaButton
                pageType="cek-ukuran"
                product={`Ban truk ${brand.name} ${model.name}`}
              >
                Tanya Ukuran + Harga
              </WaButton>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

const ConfidenceBadge = ({ c }) => {
  if (c === "CONFIRMED")
    return (
      <span className="rounded bg-muat-ok/10 px-2 py-0.5 font-bold text-muat-ok">
        Terverifikasi
      </span>
    );
  if (c === "RESEARCHED")
    return (
      <span className="rounded bg-muat-gold/10 px-2 py-0.5 font-bold text-muat-gold">
        Referensi pabrik
      </span>
    );
  return null;
};
