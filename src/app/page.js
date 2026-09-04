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
    desc: "Lihat dulu, beli kalau cocok. Stok siap dikonfirmasi hari yang sama, part langka dicarikan dengan SLA jelas.",
    href: "/find-a-part",
  },
  {
    no: "02",
    title: "Chat Ahli AI",
    tag: "Tanya Dulu, Order Kalau Cocok",
    desc: "Panduan fitment oli, decoder ban, kalkulator perawatan, diagnosis masalah, dan estimasi anggaran per truk.",
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
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-muat-line bg-muat-surface">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-muat-primary-soft blur-3xl" />
        <div className="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-muat-line bg-muat-bg px-3 py-1 text-xs font-semibold text-muat-muted">
              🚚 Sparepart truk B2B · seluruh Indonesia
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-muat-ink sm:text-5xl">
              Armada Jalan Terus.
              <br />
              <span className="text-muat-primary">Sparepart Urusan Kami.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muat-muted">
              Berhenti menelepon 3–4 distributor untuk cek stok. Ketik tipe truk
              Anda, kami konfirmasi ketersediaan — sering di hari yang sama.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/find-a-part"
                className="rounded-xl bg-muat-primary px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-muat-primary-dark"
              >
                Cari Sparepart Sekarang
              </Link>
              <Link
                href="/category"
                className="rounded-xl border border-muat-line bg-muat-surface px-6 py-3.5 font-bold text-muat-ink transition hover:border-muat-primary/40 hover:text-muat-primary"
              >
                Lihat Katalog
              </Link>
              <WaButton pageType="home">Chat WhatsApp</WaButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Stat value="< 15 mnt" label="Target respons pertama" />
              <Stat value="Stok siap" label="Konfirmasi hari ini" />
              <Stat value="Tanpa termin" label="Harga transparan" />
            </div>
          </div>

          {/* Quick search card */}
          <div className="rise rounded-2xl border border-muat-line bg-muat-bg p-6 shadow-sm sm:p-8">
            <div className="text-sm font-bold text-muat-ink">
              Cari cepat berdasarkan truk
            </div>
            <p className="mt-1 text-sm text-muat-muted">
              Pilih merek truk untuk melihat part yang cocok.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {trucks.map((t) => (
                <Link
                  key={t.slug}
                  href={`/truck/${t.slug}`}
                  className="rounded-xl border border-muat-line bg-muat-surface p-4 transition hover:-translate-y-0.5 hover:border-muat-primary/40 hover:shadow-md"
                >
                  <div className="text-2xl">🚚</div>
                  <div className="mt-2 text-sm font-bold text-muat-ink">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-muat-muted">
                    {t.models.length} model
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/find-a-part"
              className="mt-4 block rounded-xl bg-muat-ink px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-black"
            >
              Pencarian lanjutan →
            </Link>
          </div>
        </div>
      </section>

      {/* 4 DISCOVERY FEATURES */}
      <section className="container-x py-16">
        <SectionHead
          kicker="Cara belanja"
          title="Temukan part dengan cara Anda"
          sub="Beberapa jalur pencarian, satu tujuan: part yang cocok, cepat dikonfirmasi."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {discovery.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group rounded-2xl border border-muat-line bg-muat-surface p-6 transition hover:-translate-y-1 hover:border-muat-primary/40 hover:shadow-lg"
            >
              <div className="text-3xl">{d.icon}</div>
              <h3 className="mt-4 text-lg font-extrabold text-muat-ink group-hover:text-muat-primary">
                {d.title}
              </h3>
              <p className="mt-1.5 text-sm text-muat-muted">{d.desc}</p>
              <span className="mt-4 inline-block text-sm font-bold text-muat-primary">
                Mulai →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3 PRODUCT PILLARS */}
      <section className="border-y border-muat-line bg-muat-surface">
        <div className="container-x py-16">
          <SectionHead
            kicker="Kenapa MuatTruk"
            title="Tiga fitur yang membuat fleet betah"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.no}
                href={p.href}
                className="group relative flex flex-col rounded-2xl border border-muat-line bg-muat-bg p-6 transition hover:border-muat-primary/40 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-muat-primary/20 transition group-hover:text-muat-primary/40">
                  {p.no}
                </span>
                <span className="mt-1 w-fit rounded-full bg-muat-primary-soft px-2.5 py-1 text-[11px] font-bold text-muat-primary">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-muat-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muat-muted">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between">
          <SectionHead kicker="Kategori" title="Belanja per kategori" />
          <Link
            href="/category"
            className="hidden text-sm font-bold text-muat-primary hover:underline sm:block"
          >
            Semua kategori →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="rounded-2xl border border-muat-line bg-muat-surface p-5 text-center transition hover:-translate-y-1 hover:border-muat-primary/40 hover:shadow-md"
            >
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-2 text-sm font-bold text-muat-ink">
                {c.name}
              </div>
              <div className="mt-0.5 text-[11px] text-muat-muted">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-x pb-16">
        <SectionHead kicker="Stok siap" title="Produk paling dicari fleet" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-3xl bg-muat-ink px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-2xl font-black sm:text-3xl">
            Kelola sparepart 10+ truk tanpa repot
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Buka akun fleet, dapat pengingat konsumsi otomatis, dan konfirmasi
            stok tanpa menelepon distributor satu per satu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/find-a-part"
              className="rounded-xl bg-muat-primary px-6 py-3.5 font-bold text-white transition hover:bg-muat-primary-dark"
            >
              Cari Sparepart
            </Link>
            <Link
              href="/reminder"
              className="rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Lihat Pengingat Konsumsi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const Stat = ({ value, label }) => (
  <div>
    <div className="text-lg font-extrabold text-muat-ink">{value}</div>
    <div className="text-xs text-muat-muted">{label}</div>
  </div>
);
