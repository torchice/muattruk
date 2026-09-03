import { notFound } from "next/navigation";
import { PageHero } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/catalog";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = categories.find((x) => x.slug === params.slug);
  return { title: `${c?.name || "Kategori"} Truk | MuatTruk` };
}

export default function Page({ params }) {
  const c = categories.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const items = products.filter((p) => p.category === c.slug);

  return (
    <>
      <PageHero kicker="Kategori" title={`${c.icon} ${c.name}`} sub={c.desc} />
      <section className="container-x py-12">
        {items.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <p className="text-muat-muted">Belum ada produk di kategori ini.</p>
        )}
      </section>
    </>
  );
}
