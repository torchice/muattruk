import Link from "next/link";
import { notFound } from "next/navigation";
import { WaButton } from "@/components/WaButton";
import { banSizes, findBanSize, banTrucks, rpJt } from "@/data/sizes";
import { WA_NUMBER } from "@/config/tracking";

export function generateStaticParams() {
  return banSizes.map((s) => ({ size: s.slug }));
}

export function generateMetadata({ params }) {
  const s = findBanSize(params.size);
  if (!s) return {};
  return {
    title: `Harga Ban Truk ${s.size} — Kisaran + Stok | MuatTruk`,
    description: `Harga ban truk ${s.size} (${s.ply}) untuk ${s.kelas
      .slice(0, 3)
      .join(", ")}. Kisaran ${rpJt(s.priceMin)}–${rpJt(
      s.priceMax
    )}/ban. Chat WhatsApp untuk stok + harga hari ini.`,
    alternates: {
      canonical: `/ban/${s.slug}`,
      languages: { "id-ID": `/ban/${s.slug}` },
    },
  };
}

export default function Page({ params }) {
  const s = findBanSize(params.size);
  if (!s) notFound();

  const trucks = banTrucks(s.size);
  const faqs = buildFaqs(s, trucks);
  const others = banSizes.filter((x) => x.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: `Ban Truk ${s.size}`,
        image: [`https://muattruk.id${s.image}`],
        description: `Ban truk radial ${s.size} (${s.ply}) untuk ${s.kelas.join(
          ", "
        )}. Merek: ${s.brands.join(", ")}.`,
        brand: s.brands.map((b) => ({ "@type": "Brand", name: b })),
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          lowPrice: s.priceMin,
          highPrice: s.priceMax,
          availability: "https://schema.org/InStock",
          seller: { "@type": "LocalBusiness", name: "MuatTruk" },
        },
      },
      {
        "@type": "LocalBusiness",
        name: "MuatTruk",
        image: "https://muattruk.id/ban/tire-11-00-r20.jpg",
        telephone: `+${WA_NUMBER}`,
        url: "https://muattruk.id",
        areaServed: ["Surabaya", "Sidoarjo", "Gresik", "Jawa Timur", "Indonesia"],
        priceRange: "$$",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ABOVE THE FOLD */}
      <section className="border-b border-muat-line bg-muat-surface">
        <div className="container-x grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:py-14">
          <div className="overflow-hidden rounded-2xl border border-muat-line bg-muat-bg">
            <img
              src={s.image}
              alt={`Ban truk ${s.size}`}
              width={900}
              height={900}
              className="h-auto w-full"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-muat-line bg-muat-bg px-3 py-1 text-xs font-semibold text-muat-muted">
              🛞 Ban Truk · {s.ply}
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-muat-ink sm:text-5xl">
              Harga Ban Truk {s.size}
            </h1>
            <p className="mt-3 text-lg text-muat-muted">{s.tagline}</p>

            <div className="mt-6 rounded-2xl border border-muat-line bg-muat-bg p-5">
              <div className="text-sm text-muat-muted">Kisaran harga</div>
              <div className="mt-1 text-3xl font-black text-muat-ink">
                {rpJt(s.priceMin)} – {rpJt(s.priceMax)}
                <span className="text-base font-semibold text-muat-muted">
                  {" "}
                  / ban
                </span>
              </div>
              <div className="mt-1 text-xs text-muat-muted">
                Merek: {s.brands.join(" · ")}. Harga pasti + stok hari ini via
                WhatsApp.
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <WaButton pageType="ban-size" size={s.size}>
                Tanya Harga Ban {s.size}
              </WaButton>
              <Link
                href="/cek-ukuran-ban"
                className="inline-flex items-center rounded-xl border border-muat-line bg-muat-surface px-6 py-3.5 font-bold text-muat-ink transition hover:border-muat-primary/40 hover:text-muat-primary"
              >
                Cek ukuran truk saya
              </Link>
            </div>
            <p className="mt-3 text-xs text-muat-muted">
              Harga transparan · kirim seluruh Jawa + luar pulau · tanpa termin
            </p>
          </div>
        </div>
      </section>

      {/* WHICH TRUCKS USE THIS SIZE */}
      <section className="container-x py-12">
        <h2 className="text-xl font-extrabold text-muat-ink">
          Truk yang pakai ban {s.size}
        </h2>
        <p className="mt-1 text-sm text-muat-muted">
          Umum dipakai: {s.kelas.join(", ")}.
        </p>

        {trucks.length > 0 && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trucks.map((t) => (
              <Link
                key={`${t.brandSlug}-${t.modelSlug}`}
                href={`/cek-ukuran-ban/${t.brandSlug}/${t.modelSlug}`}
                className="group flex items-center justify-between rounded-xl border border-muat-line bg-muat-surface p-4 transition hover:border-muat-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="text-sm font-bold text-muat-ink group-hover:text-muat-primary">
                    {t.brand} {t.model}
                  </div>
                  <div className="text-[11px] text-muat-muted">{t.kelas}</div>
                </div>
                <span className="text-muat-muted">›</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="border-y border-muat-line bg-muat-surface">
        <div className="container-x py-12">
          <h2 className="text-xl font-extrabold text-muat-ink">
            Pertanyaan umum — ban {s.size}
          </h2>
          <div className="mt-6 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-muat-line bg-muat-bg p-4"
              >
                <summary className="cursor-pointer font-bold text-muat-ink">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muat-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6">
            <WaButton pageType="ban-size" size={s.size}>
              Masih ragu? Chat sekarang
            </WaButton>
          </div>
        </div>
      </section>

      {/* OTHER SIZES */}
      <section className="container-x py-12">
        <h2 className="text-xl font-extrabold text-muat-ink">Ukuran lain</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/ban/${o.slug}`}
              className="group rounded-xl border border-muat-line bg-muat-surface p-5 transition hover:border-muat-primary/40 hover:shadow-md"
            >
              <div className="text-lg font-extrabold text-muat-ink group-hover:text-muat-primary">
                Ban {o.size}
              </div>
              <div className="mt-1 text-xs text-muat-muted">
                Mulai {rpJt(o.priceMin)} / ban
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function buildFaqs(s, trucks) {
  const truckList =
    trucks.length > 0
      ? trucks.map((t) => `${t.brand} ${t.model}`).join(", ")
      : s.kelas.join(", ");
  return [
    {
      q: `Berapa harga ban truk ${s.size}?`,
      a: `Kisaran ${rpJt(s.priceMin)}–${rpJt(
        s.priceMax
      )} per ban, tergantung merek (${s.brands.join(
        ", "
      )}) dan jumlah. Untuk harga pasti + stok hari ini, chat WhatsApp kami.`,
    },
    {
      q: `Ban ${s.size} cocok untuk truk apa?`,
      a: `Umum dipakai untuk ${s.kelas.join(
        ", "
      )}. Contoh unit: ${truckList}.`,
    },
    {
      q: `Stok tersedia dan bisa pasang?`,
      a: `Sebagian besar ukuran tersedia. Chat WhatsApp, kami konfirmasi stok hari yang sama dan info pasang.`,
    },
    {
      q: `Bisa kirim luar kota atau COD?`,
      a: `Bisa kirim ke seluruh Jawa dan luar pulau. COD tersedia untuk area tertentu — tanyakan lewat WhatsApp.`,
    },
  ];
}
