import { ReminderBoard } from "./ReminderBoard";

export const metadata = {
  title: "Pengingat Konsumsi | MuatTruk",
  description:
    "Dashboard pengingat konsumsi: kami ingatkan sebelum stok oli, filter, dan ban armada Anda habis.",
};

export default function Page() {
  return <ReminderBoard />;
}
