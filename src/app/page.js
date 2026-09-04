import Link from "next/link";
import { SectionHead } from "@/components/Section";
import { WaButton } from "@/components/WaButton";
import { banSizes, rpJt } from "@/data/sizes";
import { oliProducts } from "@/data/oli";
import { rupiah } from "@/data/catalog";

// Common truck names individuals actually say — all route to the fitment picker.
const truckChips = [
  "Colt Diesel",
  "Fuso",
  "Hino",
  "Isuzu Elf",
  "Toyota Dyna",
  "Tronton",
];

const trust = [
  { t: "Barang ori, bukan vulkanisir", d: "Ban & oli baru, segel pabrik." },
  { t: "Ada garansi cacat pabrik", d: "Benjol/cacat produksi kami ganti." },
  { t: "Toko fisik di Surabaya", d: "Bisa mampir & cek barang langsung." },
  { t: "Bisa COD & kirim se-Indonesia", d: "Resi dikirim setelah barang jalan." },
];

const steps = [
  {
    no: "01",
    t: "Chat via WhatsApp",
    d: "Sebutin ukuran ban / tipe oli. Ga tau ukuran? Foto ban lama aja.",
  },
  {
    no: "02",
    t: "Kami konfirmasi",
    d: "Stok, harga nett, ongkir, dan estimasi kirim — langsung dibalas.",
  },
  {
    no: "03",
    t: "Bayar & dikirim",
    d: "Transfer atau COD (area tertentu). Resi dikirim, barang jalan.",
  },
];

const faqs = [
  {
    q: "Harganya bisa nego?",
    a: "Bisa. Harga di web kisaran eceran — chat WA buat harga nett, apalagi kalau ambil banyak.",
  },
  {
    q: "Ga tau ukuran ban truk saya, gimana?",
    a: "Gampang. Foto ban lama (ada kode ukurannya di dinding ban), kirim ke WA, kami bantu carikan yang pas. Atau pakai menu Cek Ukuran Ban.",
  },
  {
    q: "Bisa COD?",
    a: "Bisa untuk area tertentu (Surabaya & sekitar). Luar kota kirim via ekspedisi, resi kami kirim setelah barang jalan.",
  },
  {
    q: "Ban-nya ori atau vulkanisir?",
    a: "Semua ban baru dan ori, bukan vulkanisir. Ada garansi cacat pabrik.",
  },
  {
    q: "Bisa sekalian pasang?",
    a: "Kami bantu info tempat pasang / press ban. Chat WA, sebutkan lokasi kamu.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-muat-line bg-muat-surface">
        <div className="container-x grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rise">
            <span className="eyebrow">
              Ban &amp; Oli Truk · Surabaya · Kirim se-Indonesia
            </span>
            <h1 className="display mt-6 text-[2.6rem] text-muat-ink sm:text-[4.1rem]">
              Ban Truk &amp; Oli.
              <br />
              <span className="text-muat-primary">Harga Jelas, Chat Langsung.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muat-muted">
              Ga perlu telepon sana-sini nanya harga. Ukuran ban dan oli truk
              kamu, harga langsung kami kasih di WhatsApp — bisa nego, bisa COD.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WaButton pageType="home">Chat Harga di WA</WaButton>
              <Link
                href="/ban"
                className="rounded-lg border border-muat-line px-5 py-3.5 font-mono text-sm font-semibold text-muat-ink transition-colors hover:border-muat-ink"
              >
                Lihat Harga Ban
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muat-faint">
              <span>Dibalas cepat</span>
              <span>·</span>
              <span>Toko fisik Surabaya</span>
              <span>·</span>
              <span>Bisa COD</span>
              <span>·</span>
              <span>Barang ori</span>
            </div>
          </div>

          {/* Price-forward panel — the winning move: show price up front */}
          <div className="rise overflow-hidden rounded-xl border border-muat-line bg-muat-bg">
            <div className="flex items-center justify-between border-b border-muat-line bg-muat-surface px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muat-muted">
                Harga Ban Truk
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muat-faint">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-muat-primary" />
                Update via WA
              </span>
            </div>
            <div className="divide-y divide-muat-line">
              {banSizes.map((s) => (
                <Link
                  key={s.slug}
                  href={`/ban/${s.slug}`}
                  className="group flex items-center justify-between px-4 py-4 transition-colors hover:bg-muat-surface"
                >
                  <span>
                    <span className="block text-sm font-bold text-muat-ink group-hover:text-muat-primary">
                      Ban {s.size}
                    </span>
                    <span className="font-mono text-[11px] text-muat-faint">
                      {s.ply} · {s.brands.slice(0, 2).join(", ")}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="tnum block text-sm font-extrabold text-muat-ink">
                      mulai {rpJt(s.priceMin)}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-muat-primary">
                      Tanya →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/oli"
              className="group flex items-center justify-between bg-muat-ink px-4 py-3.5 font-mono text-sm font-semibold text-muat-on-dark"
            >
              Lihat harga oli truk
              <span className="chip" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CEK UKURAN */}
      <section className="container-x py-16">
        <div className="rounded-2xl border border-muat-line bg-muat-surface p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">Cek ukuran ban</span>
              <h2 className="display mt-4 text-2xl text-muat-ink sm:text-3xl">
                Bingung ukuran ban truk kamu?
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-muat-muted">
                Pilih tipe truk kamu, kami tunjukin ukuran ban yang cocok. Atau
                yang paling gampang — foto ban lama, kirim ke WA, kami bantu
                bacain.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/cek-ukuran-ban"
                  className="rounded-lg bg-muat-ink px-5 py-3 font-mono text-sm font-semibold text-muat-on-dark transition-transform hover:-translate-y-0.5"
                >
                  Cek Ukuran Ban →
                </Link>
                <WaButton pageType="cek-ukuran" variant="outline">
                  Foto ban lama ke WA
                </WaButton>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {truckChips.map((t) => (
                <Link
                  key={t}
                  href="/cek-ukuran-ban"
                  className="rounded-lg border border-muat-line bg-muat-bg px-4 py-2.5 text-sm font-semibold text-muat-ink transition-colors hover:border-muat-primary/50 hover:text-muat-primary"
                >
                  🚚 {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KATALOG BAN */}
      <section className="container-x pb-4">
        <div className="flex items-end justify-between gap-4">
          <SectionHead kicker="Katalog ban" title="Ukuran ban truk paling dicari" />
          <Link
            href="/ban"
            className="hidden whitespace-nowrap font-mono text-sm font-bold text-muat-primary hover:underline sm:block"
          >
            Semua ukuran →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {banSizes.map((s) => (
            <div
              key={s.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-muat-line bg-muat-surface"
            >
              <Link href={`/ban/${s.slug}`} className="block overflow-hidden">
                <img
                  src={s.image}
                  alt={`Ban truk ${s.size}`}
                  width={900}
                  height={900}
                  className="h-40 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <Link href={`/ban/${s.slug}`}>
                  <h3 className="text-lg font-extrabold tracking-tight text-muat-ink group-hover:text-muat-primary">
                    Ban {s.size}
                  </h3>
                </Link>
                <p className="mt-1 text-sm leading-snug text-muat-muted">
                  {s.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.brands.map((b) => (
                    <span
                      key={b}
                      className="rounded bg-muat-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muat-muted"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-end justify-between border-t border-muat-line pt-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wide text-muat-faint">
                      Kisaran
                    </div>
                    <div className="tnum text-base font-extrabold text-muat-ink">
                      {rpJt(s.priceMin)}–{rpJt(s.priceMax)}
                    </div>
                  </div>
                  <WaButton
                    pageType="home-ban"
                    size={s.size}
                    variant="outline"
                    className="!px-4 !py-2.5 text-xs"
                  >
                    Tanya harga
                  </WaButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KATALOG OLI */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between gap-4">
          <SectionHead
            kicker="Katalog oli"
            title="Oli mesin diesel truk"
            sub="Harga pail & galon langsung, cocok buat Colt Diesel sampai tronton."
          />
          <Link
            href="/oli"
            className="hidden whitespace-nowrap font-mono text-sm font-bold text-muat-primary hover:underline sm:block"
          >
            Semua oli →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {oliProducts.map((o) => (
            <div
              key={o.id}
              className="flex flex-col rounded-xl border border-muat-line bg-muat-surface p-5"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-muat-faint">
                <span>{o.visc}</span>
                <span>{o.size}</span>
              </div>
              <div className="mt-3 text-3xl">🛢️</div>
              <h3 className="mt-2 text-sm font-bold leading-snug text-muat-ink">
                {o.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-muat-faint">
                Cocok: {o.cocok.slice(0, 3).join(", ")}
              </p>
              <div className="mt-auto flex items-end justify-between border-t border-muat-line pt-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-muat-faint">
                    Mulai
                  </div>
                  <div className="tnum text-base font-extrabold text-muat-ink">
                    {rupiah(o.priceMin)}
                  </div>
                </div>
                <WaButton
                  pageType="home-oli"
                  product={`${o.name} ${o.size}`}
                  variant="outline"
                  className="!px-3 !py-2 text-xs"
                >
                  Tanya
                </WaButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-muat-line bg-muat-surface">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Kenapa beli di sini</span>
            <h2 className="display mt-4 text-2xl text-muat-ink sm:text-3xl">
              Toko beneran, bukan calo online.
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-muat-muted">
              Barang jelas, harga jelas, orangnya bisa dihubungi. Mampir aja ke
              toko fisik kami di Surabaya kalau mau cek langsung.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kedungdoro%20101%20Surabaya"
              target="_blank"
              rel="noopener"
              className="group mt-6 inline-flex items-start gap-3 rounded-xl border border-muat-line bg-muat-bg p-4 transition-colors hover:border-muat-primary/40"
            >
              <span className="text-xl">📍</span>
              <span>
                <span className="block text-sm font-bold text-muat-ink">
                  Jl. Kedungdoro No. 101, Surabaya
                </span>
                <span className="font-mono text-[11px] text-muat-primary">
                  Lihat di Google Maps →
                </span>
              </span>
            </a>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-muat-line bg-muat-line sm:grid-cols-2">
            {trust.map((x, i) => (
              <div key={x.t} className="bg-muat-surface p-6">
                <div className="tnum font-mono text-sm font-medium text-muat-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-base font-extrabold tracking-tight text-muat-ink">
                  {x.t}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muat-muted">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARA ORDER */}
      <section className="border-y border-muat-line bg-muat-surface">
        <div className="container-x py-16">
          <SectionHead kicker="Cara order" title="Gampang, tinggal chat" />
          <ol className="mt-10 border-t border-muat-line">
            {steps.map((s) => (
              <li
                key={s.no}
                className="grid items-baseline gap-x-6 gap-y-2 border-b border-muat-line py-7 sm:grid-cols-[auto_1fr]"
              >
                <span className="tnum font-mono text-3xl font-medium text-muat-primary sm:text-4xl">
                  {s.no}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-muat-ink">
                    {s.t}
                  </h3>
                  <p className="mt-1.5 max-w-2xl leading-relaxed text-muat-muted">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <WaButton pageType="cara-order">Chat Harga di WA</WaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <SectionHead kicker="Sering ditanya" title="Pertanyaan umum" />
        <div className="mt-8 max-w-3xl border-t border-muat-line">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-muat-line py-4"
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold text-muat-ink">
                {f.q}
                <span className="font-mono text-muat-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muat-muted">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
