import Link from "next/link";
import { SectionHead } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { WaButton } from "@/components/WaButton";
import { categories, trucks, products } from "@/data/catalog";

const discovery = [
  {
    href: "/cek-ukuran-ban",
    icon: "🛞",
    title: "Cek Ukuran Ban",
    desc: "Pilih merek + model truk, langsung dapat ukuran ban yang cocok.",
  },
  {
    href: "/find-a-part",
    icon: "🔍",
    title: "Cari Sparepart",
    desc: "Input tipe truk atau spesifikasi — kami yang carikan stoknya.",
  },
  {
    href: "/manufacturer",
    icon: "🏷️",
    title: "Belanja per Merek",
    desc: "Golden Crown, Sakura, Bosch, GT Radial, dan lainnya.",
  },
  {
    href: "/category",
    icon: "🧩",
    title: "Belanja per Kategori",
    desc: "Oli, ban, filter, kampas rem, aki, v-belt.",
  },
  {
    href: "/truck",
    icon: "🚚",
    title: "Belanja per Truk",
    desc: "Hino, Isuzu, Fuso, UD Trucks — cocok per model.",
  },
];

const pillars = [
  {
    no: "01",
    title: "Pencarian Part Cerdas",
    tag: "Kami yang Carikan",
    desc: "Lihat dulu, beli kalau cocok. Stok siap dikonfirmasi hari yang sama, part langka dicarikan dengan estimasi jelas.",
    href: "/find-a-part",
  },
  {
    no: "02",
    title: "Chat Ahli AI",
    tag: "Tanya Dulu, Order Kalau Cocok",
    desc: "Panduan fitment oli, arti kode ban, kalkulator perawatan, diagnosis masalah, dan estimasi anggaran per truk.",
    href: "/find-a-part",
  },
  {
    no: "03",
    title: "Pengingat Konsumsi",
    tag: "Kami Ingatkan Sebelum Kehabisan",
    desc: "Setiap produk ditandai siklus pakai. Kami ingatkan via WhatsApp sebelum oli, filter, atau ban Anda habis.",
    href: "/reminder",
  },
];

export default function Home() {
  const featured = products.filter((p) => p.bucket === "A").slice(0, 4);

  return (
    <>
      {/* HERO — text-first, data-forward */}
      <section className="border-b border-muat-line bg-muat-surface">
        <div className="container-x grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rise">
            <span className="eyebrow">Sparepart truk B2B · seluruh Indonesia</span>
            <h1 className="display mt-6 text-[2.7rem] text-muat-ink sm:text-[4.4rem]">
              Armada Jalan Terus.
              <br />
              <span className="text-muat-primary">Sparepart Urusan Kami.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muat-muted">
              Berhenti menelepon 3–4 distributor untuk cek stok. Ketik tipe truk
              Anda, kami konfirmasi ketersediaan — sering di hari yang sama.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/find-a-part"
                className="group inline-flex items-center gap-3 rounded-lg bg-muat-ink px-5 py-3.5 font-mono text-sm font-semibold text-muat-on-dark transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
              >
                Cari Sparepart Sekarang
                <span className="chip" aria-hidden="true">
                  →
                </span>
              </Link>
              <WaButton pageType="home">Chat WhatsApp</WaButton>
              <Link
                href="/category"
                className="rounded-lg border border-muat-line px-5 py-3.5 font-mono text-sm font-semibold text-muat-ink transition-colors hover:border-muat-ink"
              >
                Lihat Katalog
              </Link>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-muat-line pt-6">
              <Stat value="< 15 mnt" label="Target respons pertama" />
              <Stat value="Stok siap" label="Konfirmasi hari ini" />
              <Stat value="Tanpa termin" label="Harga transparan" />
            </div>
          </div>

          {/* Quick-pick panel — hairline "manifest" style */}
          <div className="rise overflow-hidden rounded-xl border border-muat-line bg-muat-bg">
            <div className="flex items-center justify-between border-b border-muat-line bg-muat-surface px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muat-muted">
                Pilih Armada
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muat-faint">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-muat-primary" />
                {trucks.length} merek
              </span>
            </div>
            <div className="divide-y divide-muat-line">
              {trucks.map((t) => (
                <Link
                  key={t.slug}
                  href={`/truck/${t.slug}`}
                  className="group flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-muat-surface"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">🚚</span>
                    <span className="text-sm font-bold text-muat-ink group-hover:text-muat-primary">
                      {t.name}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 font-mono text-[11px] text-muat-faint">
                    <span className="tnum">{t.models.length} model</span>
                    <span className="text-muat-muted transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/find-a-part"
              className="group flex items-center justify-between bg-muat-ink px-4 py-3.5 font-mono text-sm font-semibold text-muat-on-dark"
            >
              Pencarian lanjutan
              <span className="chip" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOVERY — hairline cells */}
      <section className="container-x py-20">
        <SectionHead
          kicker="Cara belanja"
          title="Temukan part dengan cara Anda"
          sub="Beberapa jalur pencarian, satu tujuan: part yang cocok, cepat dikonfirmasi."
        />
        <div className="mt-10 grid border border-muat-line sm:grid-cols-2 lg:grid-cols-3">
          {discovery.map((d, i) => (
            <Link
              key={d.href}
              href={d.href}
              className="group relative flex flex-col border-b border-r border-muat-line p-7 transition-colors hover:bg-muat-surface"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{d.icon}</span>
                <span className="font-mono text-[11px] text-muat-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-extrabold tracking-tight text-muat-ink group-hover:text-muat-primary">
                {d.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muat-muted">
                {d.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muat-primary">
                Mulai{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
          <div className="hidden border-b border-muat-line lg:block" />
        </div>
      </section>

      {/* PILLARS — numbered editorial rows */}
      <section className="border-y border-muat-line bg-muat-surface">
        <div className="container-x py-20">
          <SectionHead
            kicker="Kenapa MuatTruk"
            title="Tiga fitur yang membuat fleet betah"
          />
          <ol className="mt-10 border-t border-muat-line">
            {pillars.map((p) => (
              <li key={p.no}>
                <Link
                  href={p.href}
                  className="group grid items-baseline gap-x-6 gap-y-3 border-b border-muat-line py-8 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-2 sm:grid-cols-[auto_1fr_auto] sm:gap-x-10"
                >
                  <span className="tnum font-mono text-3xl font-medium text-muat-primary sm:text-4xl">
                    {p.no}
                  </span>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muat-faint">
                      {p.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-muat-ink sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-muat-muted">
                      {p.desc}
                    </p>
                  </div>
                  <span className="hidden font-mono text-muat-muted transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CATEGORIES — hairline grid */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between">
          <SectionHead kicker="Kategori" title="Belanja per kategori" />
          <Link
            href="/category"
            className="hidden font-mono text-sm font-bold text-muat-primary hover:underline sm:block"
          >
            Semua kategori →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 border border-muat-line sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group border-b border-r border-muat-line p-6 text-center transition-colors hover:bg-muat-surface"
            >
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-3 text-sm font-bold text-muat-ink group-hover:text-muat-primary">
                {c.name}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muat-faint">
                {c.desc}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-x pb-20">
        <SectionHead kicker="Stok siap" title="Produk paling dicari fleet" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* CTA — dark inversion */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-muat-dark px-8 py-16 text-muat-on-dark sm:px-16">
          <div className="gridlines pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="eyebrow eyebrow--plain font-mono text-muat-on-dark-soft">
                Untuk fleet 10+ truk
              </span>
              <h2 className="display mt-4 text-3xl sm:text-[2.8rem]">
                Kelola sparepart 10+ truk tanpa repot
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muat-on-dark-soft">
                Buka akun fleet, dapat pengingat konsumsi otomatis, dan
                konfirmasi stok tanpa menelepon distributor satu per satu.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/find-a-part"
                className="group inline-flex items-center gap-3 rounded-lg bg-muat-primary px-5 py-3.5 font-mono text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
              >
                Cari Sparepart
                <span className="chip chip--on-primary" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link
                href="/reminder"
                className="rounded-lg border border-muat-line-dark px-5 py-3.5 font-mono text-sm font-semibold text-muat-on-dark transition-colors hover:bg-white/5"
              >
                Lihat Pengingat Konsumsi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Stat = ({ value, label }) => (
  <div>
    <div className="tnum text-lg font-extrabold tracking-tight text-muat-ink">
      {value}
    </div>
    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-muat-faint">
      {label}
    </div>
  </div>
);
