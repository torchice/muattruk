import Link from "next/link";
import { PageHero } from "@/components/Section";
import { categories, products } from "@/data/catalog";

export const metadata = {
  title: "Belanja per Kategori | MuatTruk",
  description: "Belanja sparepart truk per kategori: oli, ban, filter, kampas rem, aki, v-belt.",
};

export default function Page() {
  const count = (slug) => products.filter((p) => p.category === slug).length;
  return (
    <>
      <PageHero
        kicker="Belanja per Kategori"
        title="Belanja per kategori"
        sub="Konsumabel berulang sampai part bernilai tinggi."
      />
      <section className="container-x py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-muat-line bg-muat-surface p-6 transition hover:-translate-y-0.5 hover:border-muat-primary/40 hover:shadow-lg"
            >
              <span className="text-4xl">{c.icon}</span>
              <div className="flex-1">
                <div className="text-lg font-extrabold text-muat-ink group-hover:text-muat-primary">
                  {c.name}
                </div>
                <div className="text-sm text-muat-muted">{c.desc}</div>
              </div>
              <span className="rounded-full bg-muat-bg px-3 py-1 text-xs font-bold text-muat-muted">
                {count(c.slug)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
