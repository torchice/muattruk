import "./globals.css";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExpertChat } from "@/components/ExpertChat";
import { Analytics } from "@/components/Analytics";
import { RefCapture } from "@/components/RefCapture";

export const metadata = {
  metadataBase: new URL("https://muattruk.id"),
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/" },
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
  title: "MuatTruk by muatmuat — Sparepart Truk B2B",
  description:
    "Marketplace sparepart truk B2B untuk fleet Indonesia. Cari part cerdas, chat ahli AI, dan pengingat konsumsi. Armada jalan terus, sparepart urusan kami.",
  keywords: [
    "sparepart truk",
    "oli truk",
    "ban truk",
    "filter truk",
    "kampas rem truk",
    "fleet B2B",
    "muatmuat",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f15a22",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Suspense fallback={null}>
          <RefCapture />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
        <ExpertChat />
        <Analytics />
      </body>
    </html>
  );
}
