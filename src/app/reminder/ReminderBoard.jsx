"use client";

import { useState } from "react";
import { PageHero } from "@/components/Section";
import { rupiah } from "@/data/catalog";

// Mock dashboard internal: pelanggan × produk × order terakhir × tanggal pengingat.
const seed = [
  {
    id: 1,
    customer: "PT Sinar Logistik",
    fleet: 24,
    product: "Oli 15W-40 (20L)",
    lastOrder: "2026-06-02",
    cycle: 75,
    value: 685000,
  },
  {
    id: 2,
    customer: "Bengkel Jaya Truk",
    fleet: 0,
    product: "Filter Oli Sakura C-5904",
    lastOrder: "2026-06-20",
    cycle: 75,
    value: 78000,
  },
  {
    id: 3,
    customer: "CV Angkutan Makmur",
    fleet: 12,
    product: "Kampas Rem Depan Aspira",
    lastOrder: "2026-05-10",
    cycle: 200,
    value: 420000,
  },
  {
    id: 4,
    customer: "PT Tambang Sejahtera",
    fleet: 40,
    product: "Ban GT Radial 1000-20",
    lastOrder: "2026-01-15",
    cycle: 300,
    value: 2450000,
  },
  {
    id: 5,
    customer: "UD Berkah Trans",
    fleet: 8,
    product: "Aki Bosch N150",
    lastOrder: "2025-09-01",
    cycle: 540,
    value: 1850000,
  },
];

const TODAY = new Date("2026-08-13");

const dueDate = (last, cycle) => {
  const d = new Date(last);
  d.setDate(d.getDate() + cycle);
  return d;
};

const daysLeft = (last, cycle) =>
  Math.round((dueDate(last, cycle) - TODAY) / 86400000);

const fmt = (d) =>
  d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });

export const ReminderBoard = () => {
  const [sent, setSent] = useState({});

  const rows = seed
    .map((r) => ({ ...r, left: daysLeft(r.lastOrder, r.cycle) }))
    .sort((a, b) => a.left - b.left);

  const dueSoon = rows.filter((r) => r.left <= 14).length;
  const overdue = rows.filter((r) => r.left < 0).length;
  const potential = rows
    .filter((r) => r.left <= 14)
    .reduce((s, r) => s + r.value, 0);

  return (
    <>
      <PageHero
        kicker="Pengingat Konsumsi"
        title="Kami Ingatkan Sebelum Kehabisan"
        sub="Setiap produk ditandai siklus pakai. Sebelum stok habis, kirim pengingat WhatsApp satu klik — pelanggan balas “Ya”, order dikonfirmasi."
      />

      <section className="container-x -mt-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <KPI label="Jatuh tempo ≤ 14 hari" value={dueSoon} tone="gold" />
          <KPI label="Sudah lewat" value={overdue} tone="primary" />
          <KPI label="Potensi order minggu ini" value={rupiah(potential)} tone="ok" />
        </div>
      </section>

      <section className="container-x py-12">
        <div className="overflow-hidden rounded-2xl border border-muat-line bg-muat-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-muat-bg text-xs uppercase tracking-wide text-muat-muted">
                <tr>
                  <Th>Pelanggan</Th>
                  <Th>Produk</Th>
                  <Th>Order terakhir</Th>
                  <Th>Perkiraan habis</Th>
                  <Th>Status</Th>
                  <Th>Aksi</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    className="border-t border-muat-line hover:bg-muat-bg/60"
                  >
                    <td className="px-4 py-3">
                      <div className="font-bold text-muat-ink">{r.customer}</div>
                      <div className="text-xs text-muat-muted">
                        {r.fleet > 0 ? `Fleet ${r.fleet} truk` : "Bengkel"}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muat-ink">{r.product}</td>
                    <td className="px-4 py-3 text-muat-muted">
                      {fmt(new Date(r.lastOrder))}
                    </td>
                    <td className="px-4 py-3 text-muat-muted">
                      {fmt(dueDate(r.lastOrder, r.cycle))}
                    </td>
                    <td className="px-4 py-3">
                      <StatusPill left={r.left} />
                    </td>
                    <td className="px-4 py-3">
                      {sent[r.id] ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muat-ok">
                          ✓ Terkirim
                        </span>
                      ) : (
                        <button
                          onClick={() => setSent((s) => ({ ...s, [r.id]: true }))}
                          className="rounded-lg bg-muat-primary px-3 py-1.5 text-xs font-bold text-white transition hover:bg-muat-primary-dark"
                        >
                          Ingatkan via WhatsApp
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs text-muat-muted">
          Demo internal — mengubah pembeli satu kali menjadi akun bulanan
          berulang. Data contoh; integrasi WhatsApp Business menyusul.
        </p>
      </section>
    </>
  );
};

const KPI = ({ label, value, tone }) => {
  const ring =
    tone === "primary"
      ? "text-muat-primary"
      : tone === "gold"
        ? "text-muat-gold"
        : "text-muat-ok";
  return (
    <div className="rounded-2xl border border-muat-line bg-muat-surface p-5 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wide text-muat-muted">
        {label}
      </div>
      <div className={"mt-1 text-2xl font-black " + ring}>{value}</div>
    </div>
  );
};

const StatusPill = ({ left }) => {
  let cls = "bg-muat-ok/10 text-muat-ok";
  let txt = `${left} hari lagi`;
  if (left < 0) {
    cls = "bg-muat-primary/10 text-muat-primary";
    txt = `Lewat ${Math.abs(left)} hari`;
  } else if (left <= 14) {
    cls = "bg-muat-gold/10 text-muat-gold";
    txt = `${left} hari lagi`;
  }
  return (
    <span className={"rounded-full px-2.5 py-1 text-xs font-bold " + cls}>
      {txt}
    </span>
  );
};

const Th = ({ children }) => (
  <th className="px-4 py-3 font-bold">{children}</th>
);
