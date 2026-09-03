import Link from "next/link";
import { rupiah, catName, mfrName } from "@/data/catalog";
import { BucketBadge } from "./BucketBadge";

export const ProductCard = ({ p }) => {
  return (
    <Link
      href={`/product/${p.id}`}
      className="group flex flex-col rounded-xl border border-muat-line bg-muat-surface p-4 transition hover:-translate-y-0.5 hover:border-muat-primary/40 hover:shadow-lg"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-muat-bg px-2 py-1 text-[11px] font-semibold text-muat-muted">
          {catName(p.category)}
        </span>
        <span className="text-[11px] font-semibold text-muat-muted">
          {mfrName(p.manufacturer)}
        </span>
      </div>

      <h3 className="text-sm font-bold leading-snug text-muat-ink group-hover:text-muat-primary">
        {p.name}
      </h3>

      <div className="mt-3">
        <BucketBadge bucket={p.bucket} />
      </div>

      <div className="mt-auto flex items-end justify-between pt-4">
        <div>
          <div className="text-lg font-extrabold text-muat-ink">
            {rupiah(p.price)}
          </div>
          <div className="text-[11px] text-muat-muted">/ {p.unit}</div>
        </div>
        <span className="rounded-lg bg-muat-primary-soft px-3 py-2 text-xs font-bold text-muat-primary transition group-hover:bg-muat-primary group-hover:text-white">
          Lihat
        </span>
      </div>
    </Link>
  );
};
