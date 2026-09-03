import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/Section";
import { BucketBadge } from "@/components/BucketBadge";
import { ProductCard } from "@/components/ProductCard";
import { WaButton } from "@/components/WaButton";
import {
  products,
  rupiah,
  catName,
  mfrName,
  truckName,
} from "@/data/catalog";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const p = products.find((x) => x.id === params.id);
  return { title: `${p?.name || "Produk"} | MuatTruk` };
}

export default function Page({ params }) {
  const p = products.find((x) => x.id === params.id);
  if (!p) notFound();

  const related = products
    .filter((x) => x.id !== p.id && x.category === p.category)
    .slice(0, 4);

  return (
    <>
      <PageHero kicker={catName(p.category)} title={p.name} />

      <section className="container-x grid gap-8 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid h-64 place-items-center rounded-2xl border border-muat-line bg-muat-surface text-7xl">
            {iconFor(p.category)}
          </div>

          <div className="rounded-2xl border border-muat-line bg-muat-surface p-6">
            <h2 className="text-lg font-extrabold text-muat-ink">Spesifikasi</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {Object.entries(p.specs).map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-muat-line pb-2 text-sm"
                >
                  <dt className="capitalize text-muat-muted">{k}</dt>
                  <dd className="font-semibold text-muat-ink">{v}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between border-b border-muat-line pb-2 text-sm">
                <dt className="text-muat-muted">Merek</dt>
                <dd className="font-semibold text-muat-ink">
                  {mfrName(p.manufacturer)}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-muat-line bg-muat-surface p-6">
            <h2 className="text-lg font-extrabold text-muat-ink">
              Cocok untuk truk
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.fits.map((f) => (
                <Link
                  key={f}
                  href={`/truck/${f}`}
                  className="rounded-lg bg-muat-primary-soft px-3 py-1.5 text-sm font-semibold text-muat-primary transition hover:bg-muat-primary hover:text-white"
                >
                  {truckName(f)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Buy box */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 rounded-2xl border border-muat-line bg-muat-surface p-6 shadow-sm">
            <BucketBadge bucket={p.bucket} />
            <div className="mt-4 text-3xl font-black text-muat-ink">
              {rupiah(p.price)}
            </div>
            <div className="text-sm text-muat-muted">/ {p.unit}</div>

            <div className="mt-5 space-y-2 text-sm">
              <Row label="Ketersediaan">
                {p.bucket === "A" ? (
                  <span className="font-bold text-muat-ok">
                    {p.stock} unit siap
                  </span>
                ) : (
                  <span className="font-bold text-muat-gold">Pre-order</span>
                )}
              </Row>
              {p.consumeDays > 0 && (
                <Row label="Siklus pakai">± {p.consumeDays} hari</Row>
              )}
            </div>

            <WaButton
              pageType="product"
              product={p.name}
              category={p.category}
              size={p.specs?.ukuran}
              className="mt-5 w-full"
            >
              {p.bucket === "A"
                ? "Konfirmasi Stok via WhatsApp"
                : "Minta Dicarikan via WhatsApp"}
            </WaButton>
            <p className="mt-3 text-center text-xs text-muat-muted">
              Harga transparan · tanpa net-30 · tanpa termin
            </p>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="container-x pb-16">
          <h2 className="text-xl font-extrabold text-muat-ink">
            Part sejenis
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.id} p={r} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

const Row = ({ label, children }) => (
  <div className="flex items-center justify-between">
    <span className="text-muat-muted">{label}</span>
    {children}
  </div>
);

const iconFor = (cat) =>
  ({
    oli: "🛢️",
    ban: "🛞",
    filter: "🧯",
    "kampas-rem": "🛑",
    aki: "🔋",
    "v-belt": "➰",
  })[cat] || "🔧";
