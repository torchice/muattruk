import { notFound } from "next/navigation";
import { PageHero } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { trucks, products } from "@/data/catalog";

export function generateStaticParams() {
  return trucks.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const t = trucks.find((x) => x.slug === params.slug);
  return { title: `Sparepart ${t?.name || "Truk"} | MuatTruk` };
}

export default function Page({ params }) {
  const t = trucks.find((x) => x.slug === params.slug);
  if (!t) notFound();
  const items = products.filter((p) => p.fits.includes(t.slug));

  return (
    <>
      <PageHero
        kicker="Fitment truk"
        title={`Sparepart ${t.name}`}
        sub={`Cocok untuk: ${t.models.join(", ")}`}
      />
      <section className="container-x py-12">
        {items.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <p className="text-muat-muted">Belum ada part terdaftar untuk truk ini.</p>
        )}
      </section>
    </>
  );
}
