import { notFound } from "next/navigation";
import { PageHero } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { manufacturers, products } from "@/data/catalog";

export function generateStaticParams() {
  return manufacturers.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }) {
  const m = manufacturers.find((x) => x.slug === params.slug);
  return { title: `${m?.name || "Merek"} — Sparepart Truk | MuatTruk` };
}

export default function Page({ params }) {
  const m = manufacturers.find((x) => x.slug === params.slug);
  if (!m) notFound();
  const items = products.filter((p) => p.manufacturer === m.slug);

  return (
    <>
      <PageHero
        kicker="Manufacturer"
        title={m.name}
        sub={`${m.origin} · ${m.note}`}
      />
      <section className="container-x py-12">
        {items.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <p className="text-muat-muted">Belum ada produk untuk merek ini.</p>
        )}
      </section>
    </>
  );
}
