# MuatOrder by muatmuat

Marketplace sparepart truk B2B untuk fleet Indonesia. Dibangun dari rangkuman strategi muatpartsplus.

> **Armada Jalan Terus. Sparepart Urusan Kami.**

## Fitur

**4 jalur belanja (discovery):**

- **Find a Part** — Pencarian Part Cerdas "Kami yang Carikan" (Bucket A stok siap / Bucket B pre-order SLA 1–2 hari)
- **Shop by Manufacturer** — per merek (Golden Crown, Sakura, Bosch, GT Radial, …)
- **Shop by Category** — oli, ban, filter, kampas rem, aki, v-belt
- **Shop by Truck** — fitment per model (Hino, Isuzu, Fuso, UD Trucks)

**3 pilar produk (dari docx strategi):**

1. **Pencarian Part Cerdas** — lihat dulu, beli kalau cocok
2. **Chat Ahli AI** — 5 topik: fitment oli, kalkulator perawatan, decoder ban, diagnosis, estimasi anggaran (widget pojok kanan bawah)
3. **Pengingat Konsumsi** — dashboard `/reminder`, ingatkan via WhatsApp sebelum stok habis

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS v4. Data mock di `src/data/` — ganti dengan API saat integrasi backend.

## Jalankan lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksi
```

## Deploy ke Vercel

1. Push folder `muatorder/` ke repo GitHub.
2. Di [vercel.com](https://vercel.com) → New Project → import repo.
3. Root Directory: `muatorder`. Framework auto-detect Next.js. Deploy.

Atau via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produksi
```

> Catatan: data masih mock; belum ada backend, auth, atau pembayaran.
