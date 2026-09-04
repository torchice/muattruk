"use client";

import { useEffect, useRef, useState } from "react";
import { expertTopics } from "@/data/expert";
import { WaButton } from "./WaButton";

const greeting = {
  role: "bot",
  text: "Halo! Saya Ahli MuatTruk. Tanya soal ukuran ban, oli, atau perawatan truk kamu. Pilih topik atau ketik pertanyaan.",
};

export const ExpertChat = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([greeting]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const answerFor = (text) => {
    const q = text.toLowerCase();
    const hit =
      expertTopics.find((t) => t.prompt.toLowerCase() === q) ||
      expertTopics.find((t) =>
        t.title
          .toLowerCase()
          .split(" ")
          .some((w) => w.length > 3 && q.includes(w))
      ) ||
      expertTopics.find((t) =>
        ["oli", "ban", "filter", "rem", "aki", "asap", "biaya", "servis", "km"].some(
          (k) => q.includes(k) && t.answer.toLowerCase().includes(k)
        )
      );
    return (
      hit?.answer ||
      "Pertanyaan bagus. Buat jawaban yang pas tipe truk kamu, chat admin di WhatsApp aja — atau pilih salah satu topik di bawah."
    );
  };

  const send = (text) => {
    const t = text.trim();
    if (!t) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: answerFor(t) }]);
    }, 350);
  };

  const lastUser = [...msgs].reverse().find((m) => m.role === "user")?.text;

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-5 z-50 flex items-center gap-2 rounded-full bg-muat-ink px-5 py-3.5 font-bold text-white shadow-xl transition hover:bg-black"
      >
        <span className="text-lg">💬</span>
        <span className="hidden sm:inline">Asisten Sparepart</span>
      </button>

      {open && (
        <div className="fixed bottom-[10.5rem] right-5 z-50 flex h-[30rem] max-h-[70vh] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-muat-line bg-muat-surface shadow-2xl rise">
          <div className="flex items-center justify-between bg-muat-primary px-4 py-3 text-white">
            <div>
              <div className="text-sm font-extrabold">Asisten Sparepart</div>
              <div className="text-[11px] text-white/80">
                Tanya dulu, order kalau cocok
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/15"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-muat-bg px-3 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
                    (m.role === "user"
                      ? "rounded-br-sm bg-muat-primary text-white"
                      : "rounded-bl-sm border border-muat-line bg-muat-surface text-muat-ink")
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {expertTopics.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => send(t.prompt)}
                    className="rounded-full border border-muat-primary/30 bg-muat-primary-soft px-3 py-1.5 text-xs font-semibold text-muat-primary transition hover:bg-muat-primary hover:text-white"
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-muat-line bg-muat-surface px-3 py-2.5">
            <WaButton
              pageType="chat"
              note={lastUser}
              className="w-full !py-2.5 text-sm"
            >
              Lanjut Chat via WhatsApp
            </WaButton>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-muat-line bg-muat-surface p-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan…"
              className="flex-1 rounded-lg border border-muat-line bg-muat-bg px-3 py-2 text-sm outline-none focus:border-muat-primary"
            />
            <button
              type="submit"
              className="rounded-lg bg-muat-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-muat-primary-dark"
            >
              Kirim
            </button>
          </form>
        </div>
      )}
    </>
  );
};
