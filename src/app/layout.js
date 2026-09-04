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
  title: "Harga Ban & Oli Truk — Chat Langsung via WA | MuatTruk",
  description:
    "Jual ban truk & oli mesin diesel, harga jelas. Ukuran 750-16, 1000-20, 1100-20; oli 15W-40 pail 20L. Bisa nego, bisa COD, kirim se-Indonesia. Chat WhatsApp — toko Surabaya.",
  keywords: [
    "harga ban truk",
    "ban truk 1000-20",
    "ban truk 750-16",
    "ban truk 1100-20",
    "ban colt diesel",
    "ban truk fuso",
    "oli truk diesel",
    "oli 15w-40 truk",
    "jual ban truk surabaya",
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
