import Link from "next/link";
import { rupiah, catName, mfrName } from "@/data/catalog";
import { BucketBadge } from "./BucketBadge";

export const ProductCard = ({ p }) => {
  return (
    <Link
      href={`/product/${p.id}`}
      className="group flex flex-col border border-muat-line bg-muat-surface p-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-muat-ink/25 hover:shadow-[0_18px_40px_-28px_rgba(20,18,16,0.55)]"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-muat-faint">
        <span>{catName(p.category)}</span>
        <span>{mfrName(p.manufacturer)}</span>
      </div>

      <h3 className="mt-3 text-sm font-bold leading-snug text-muat-ink transition-colors group-hover:text-muat-primary">
        {p.name}
      </h3>

      <div className="mt-3">
        <BucketBadge bucket={p.bucket} />
      </div>

      <div className="mt-auto flex items-end justify-between border-t border-muat-line pt-4">
        <div>
          <div className="tnum text-lg font-extrabold tracking-tight text-muat-ink">
            {rupiah(p.price)}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wide text-muat-faint">
            / {p.unit}
          </div>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muat-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
          Lihat <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
};
