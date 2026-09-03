import Link from "next/link";
import { PageHero } from "@/components/Section";
import { WaButton } from "@/components/WaButton";
import { allBrands } from "@/data/fitment";

export const metadata = {
  title: "Cek Ukuran Ban Truk | MuatTruk",
  description:
    "Cek ukuran ban truk Anda: pilih merek dan model, langsung dapat ukuran ban yang cocok. Hino, Isuzu, Fuso, UD Trucks. Tanya harga via WhatsApp.",
  alternates: {
    canonical: "/cek-ukuran-ban",
    languages: { "id-ID": "/cek-ukuran-ban" },
  },
};

export default function Page() {
  const brands = allBrands();

  return (
    <>
      <PageHero
        kicker="Cek Ukuran Ban"
        title="Cari ukuran ban truk Anda"
      />

      <section className="container-x py-12">
        <p className="max-w-2xl text-muat-muted">
          Pilih merek truk Anda, lalu pilih model. Kami tampilkan ukuran ban yang
          cocok — tinggal chat harga via WhatsApp. Nggak yakin? Chat kami, kami
          bantu carikan ukuran yang pas.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {brands.map((b) => (
            <Link
              key={b.slug}
              href={`/cek-ukuran-ban/${b.slug}`}
              className="group rounded-2xl border border-muat-line bg-muat-surface p-6 text-center transition hover:-translate-y-1 hover:border-muat-primary/40 hover:shadow-lg"
            >
              <div className="text-3xl">🚚</div>
              <div className="mt-3 text-base font-extrabold text-muat-ink group-hover:text-muat-primary">
                {b.name}
              </div>
              <div className="mt-0.5 text-[11px] text-muat-muted">
                {b.models.length} model
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-muat-line bg-muat-bg p-6 text-center">
          <div className="text-sm font-bold text-muat-ink">
            Truk Anda tidak ada di daftar?
          </div>
          <p className="mx-auto mt-1 max-w-md text-sm text-muat-muted">
            Chat kami, sebutkan tipe truk Anda, kami carikan ukuran ban yang tepat.
          </p>
          <div className="mt-4 flex justify-center">
            <WaButton pageType="cek-ukuran">Tanya Ukuran Ban</WaButton>
          </div>
        </div>
      </section>
    </>
  );
}
