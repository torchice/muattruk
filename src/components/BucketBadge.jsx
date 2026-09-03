export const BucketBadge = ({ bucket }) => {
  const isA = bucket === "A";
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold " +
        (isA
          ? "bg-muat-ok/10 text-muat-ok"
          : "bg-muat-gold/10 text-muat-gold")
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full " +
          (isA ? "bg-muat-ok" : "bg-muat-gold")
        }
      />
      {isA ? "Stok siap · konfirmasi hari ini" : "Perlu dicari · SLA 1–2 hari"}
    </span>
  );
};
