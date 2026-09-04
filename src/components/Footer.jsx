import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-muat-line bg-muat-surface">
      <div className="container-x grid gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muat-muted">
            Marketplace sparepart truk B2B. Armada jalan terus, sparepart urusan
            kami.
          </p>
        </div>

        <FooterCol
          title="Belanja"
          links={[
            ["Cari Sparepart", "/find-a-part"],
            ["Belanja per Merek", "/manufacturer"],
            ["Belanja per Kategori", "/category"],
            ["Belanja per Truk", "/truck"],
          ]}
        />
        <FooterCol
          title="Layanan"
          links={[
            ["Chat Ahli AI", "/find-a-part"],
            ["Pengingat Konsumsi", "/reminder"],
            ["Katalog Produk", "/category"],
          ]}
        />
        <div>
          <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muat-faint">
            Untuk Fleet
          </h4>
          <p className="mt-3 text-sm text-muat-muted">
            Punya 10+ truk? Buka akun fleet dan dapat pengingat stok otomatis
            via WhatsApp.
          </p>
          <Link
            href="/find-a-part"
            className="mt-3 inline-block rounded-lg bg-muat-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-muat-primary-dark"
          >
            Mulai
          </Link>
        </div>
      </div>
      <div className="border-t border-muat-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muat-muted sm:flex-row">
          <span>© {new Date().getFullYear()} MuatTruk — bagian dari ekosistem muatmuat.com</span>
          <span>Dibangun dengan Next.js · Hosting di Vercel</span>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muat-faint">
      {title}
    </h4>
    <ul className="mt-3 space-y-2">
      {links.map(([label, href]) => (
        <li key={href + label}>
          <Link
            href={href}
            className="text-sm text-muat-muted transition hover:text-muat-primary"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
