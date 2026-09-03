// Lima topik inti Chat Ahli AI (mock knowledge base untuk MVP).

export const expertTopics = [
  {
    id: "fitment-oli",
    title: "Panduan Fitment Oli",
    prompt: "Oli apa untuk truk saya?",
    answer:
      "Untuk Hino Ranger & Isuzu Giga, pakai oli diesel 15W-40 API CI-4. Fuso Canter generasi baru bisa 10W-40. Golden Crown 15W-40 (20L) cocok untuk mayoritas armada Anda. Ganti tiap ~10.000 km atau 2–3 bulan.",
  },
  {
    id: "kalkulator-perawatan",
    title: "Kalkulator Jadwal Perawatan",
    prompt: "Kapan servis berikutnya?",
    answer:
      "Masukkan km terakhir servis. Aturan umum: oli tiap 10.000 km, filter oli tiap ganti oli, filter solar tiap 20.000 km, kampas rem cek tiap 30.000–50.000 km. Kami hitung tanggal perkiraan berdasarkan rata-rata 8.000 km/bulan.",
  },
  {
    id: "decoder-ban",
    title: "Decoder Spesifikasi Ban",
    prompt: "Arti kode 1000-20 16PR?",
    answer:
      "1000-20 = lebar 10 inci, diameter rim 20 inci. 16PR = 16 ply rating (indeks beban tinggi, cocok muatan berat). Pola Rib untuk jalan aspal jarak jauh; Lug untuk medan berat/tambang.",
  },
  {
    id: "diagnosis",
    title: "Diagnosis Masalah → Part",
    prompt: "Truk berasap hitam, kenapa?",
    answer:
      "Asap hitam biasanya pembakaran tidak sempurna: cek filter udara tersumbat (paling sering), lalu filter solar, injector, atau turbo. Mulai dari filter udara — termurah. Bisa kami carikan filter yang cocok untuk tipe truk Anda.",
  },
  {
    id: "estimasi-anggaran",
    title: "Estimasi Anggaran / Truk / Bulan",
    prompt: "Berapa biaya perawatan per truk?",
    answer:
      "Estimasi konsumabel per truk: oli ~Rp 230rb/bln, filter ~Rp 60rb/bln, ban dicicil ~Rp 400rb/bln, kampas ~Rp 70rb/bln. Total ~Rp 750rb–1jt/truk/bulan. Fleet 20 truk ≈ Rp 15–20 juta/bulan berulang.",
  },
];
