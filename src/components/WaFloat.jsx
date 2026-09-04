"use client";

import { WaButton } from "./WaButton";

// Persistent floating WhatsApp CTA — the primary conversion action, always in
// thumb reach. Sits below the Chat Ahli AI bubble (which is offset up).
export const WaFloat = () => (
  <div className="fixed bottom-5 right-5 z-50">
    <WaButton
      pageType="float"
      className="!rounded-full !px-5 !py-3.5 shadow-2xl"
    >
      Chat Harga
    </WaButton>
  </div>
);
