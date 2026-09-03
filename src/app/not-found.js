import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <div className="text-6xl">🚧</div>
        <h1 className="mt-4 text-3xl font-black text-muat-ink">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-2 text-muat-muted">
          Part yang Anda cari mungkin pindah rak. Coba dari beranda.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-muat-primary px-6 py-3 font-bold text-white transition hover:bg-muat-primary-dark"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
