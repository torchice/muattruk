export const BucketBadge = ({ bucket }) => {
  const isA = bucket === "A";
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] " +
        (isA
          ? "bg-muat-ok/10 text-muat-ok"
          : "bg-muat-gold/10 text-muat-gold")
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full " + (isA ? "bg-muat-ok" : "bg-muat-gold")
        }
      />
      {isA ? "Stok siap · konfirmasi hari ini" : "Perlu dicari · estimasi 1–2 hari"}
    </span>
  );
};
