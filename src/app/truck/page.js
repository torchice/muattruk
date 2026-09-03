import Link from "next/link";
import { PageHero } from "@/components/Section";
import { trucks, products } from "@/data/catalog";

export const metadata = {
  title: "Belanja per Truk | MuatTruk",
  description: "Belanja sparepart truk yang cocok per merek dan model: Hino, Isuzu, Fuso, UD Trucks.",
};

export default function Page() {
  const count = (slug) => products.filter((p) => p.fits.includes(slug)).length;
  return (
    <>
      <PageHero
        kicker="Belanja per Truk"
        title="Belanja per tipe truk"
        sub="Fitment berbasis kendaraan — cuma tampilkan part yang cocok."
      />
      <section className="container-x py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {trucks.map((t) => (
            <Link
              key={t.slug}
              href={`/truck/${t.slug}`}
              className="group rounded-2xl border border-muat-line bg-muat-surface p-6 transition hover:-translate-y-0.5 hover:border-muat-primary/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🚚</span>
                  <div className="text-lg font-extrabold text-muat-ink group-hover:text-muat-primary">
                    {t.name}
                  </div>
                </div>
                <span className="rounded-full bg-muat-bg px-3 py-1 text-xs font-bold text-muat-muted">
                  {count(t.slug)} part cocok
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.models.map((mdl) => (
                  <span
                    key={mdl}
                    className="rounded-md bg-muat-bg px-2.5 py-1 text-xs font-semibold text-muat-muted"
                  >
                    {mdl}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
