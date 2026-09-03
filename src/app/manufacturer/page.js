import Link from "next/link";
import { PageHero } from "@/components/Section";
import { manufacturers, products } from "@/data/catalog";

export const metadata = {
  title: "Belanja per Merek | MuatTruk",
  description: "Belanja sparepart truk per merek: Golden Crown, Sakura, Bosch, GT Radial, dan lainnya.",
};

export default function Page() {
  const count = (slug) => products.filter((p) => p.manufacturer === slug).length;
  return (
    <>
      <PageHero
        kicker="Belanja per Merek"
        title="Belanja per merek"
        sub="Pilih pabrikan untuk melihat part yang tersedia."
      />
      <section className="container-x py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {manufacturers.map((m) => (
            <Link
              key={m.slug}
              href={`/manufacturer/${m.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-muat-line bg-muat-surface p-6 transition hover:-translate-y-0.5 hover:border-muat-primary/40 hover:shadow-lg"
            >
              <div>
                <div className="text-lg font-extrabold text-muat-ink group-hover:text-muat-primary">
                  {m.name}
                </div>
                <div className="mt-0.5 text-sm text-muat-muted">
                  {m.origin} · {m.note}
                </div>
              </div>
              <span className="rounded-full bg-muat-bg px-3 py-1 text-xs font-bold text-muat-muted">
                {count(m.slug)} part
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
