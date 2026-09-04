import Link from "next/link";
import { Logo } from "./Logo";
import { WaButton } from "./WaButton";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-muat-line bg-muat-surface">
      <div className="container-x grid gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muat-muted">
            Ban &amp; oli truk, harga jelas. Chat langsung, bisa nego, kirim
            se-Indonesia.
          </p>
          <div className="mt-4">
            <WaButton pageType="footer" variant="secondary" className="text-sm">
              Chat harga di WA
            </WaButton>
          </div>
        </div>

        <FooterCol
          title="Belanja"
          links={[
            ["Harga Ban", "/ban"],
            ["Harga Oli", "/oli"],
            ["Cek Ukuran Ban", "/cek-ukuran-ban"],
          ]}
        />

        <div>
          <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muat-faint">
            Toko
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muat-muted">
            Jl. Kedungdoro No. 101
            <br />
            Surabaya, Jawa Timur
            <br />
            Senin–Sabtu · 08.00–17.00 WIB
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kedungdoro%20101%20Surabaya"
            target="_blank"
            rel="noopener"
            className="mt-2 inline-block font-mono text-[11px] font-semibold text-muat-primary hover:underline"
          >
            Lihat di Google Maps →
          </a>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muat-faint">
            Ban populer
          </h4>
          <ul className="mt-3 space-y-2">
            {[
              ["Ban 7.50 R16", "/ban/7-50-r16"],
              ["Ban 10.00 R20", "/ban/10-00-r20"],
              ["Ban 11.00 R20", "/ban/11-00-r20"],
            ].map(([label, href]) => (
              <li key={href}>
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
      </div>

      <div className="border-t border-muat-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 font-mono text-[11px] text-muat-faint sm:flex-row">
          <span>
            © {new Date().getFullYear()} MuatTruk — bagian dari ekosistem
            muatmuat.com
          </span>
          <span>Ban &amp; Oli Truk · Surabaya</span>
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
