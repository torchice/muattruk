import Link from "next/link";

export const Logo = ({ compact = false }) => {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-muat-primary text-white font-black text-lg shadow-sm transition group-hover:bg-muat-primary-dark">
        M
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-lg font-extrabold tracking-tight text-muat-ink">
            Muat<span className="text-muat-primary">Truk</span>
          </span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muat-muted">
            by muatmuat
          </span>
        </span>
      )}
    </Link>
  );
};
