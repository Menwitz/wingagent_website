"use client";

import { useEffect, useState } from "react";

function Bubble({ from, text }) {
  const align =
    from === "agent"
      ? "self-end bg-gradient-brand text-white"
      : "self-start bg-white/10 text-slate-100";
  return (
    <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-md ${align}`}>
      {text}
    </div>
  );
}

export default function DashboardPreview() {
  const [step, setStep] = useState(0);
  const messages = [
    { from: "agent", text: "Hey Lina, your travel photos are 🔥" },
    { from: "user", text: "Haha thanks! Barcelona last month." },
    { from: "agent", text: "Tapas expert then. Favorite spot?" },
    { from: "user", text: "La Cova Fumada. Bombas are insane." },
    { from: "agent", text: "Noted. Let’s swap recs over coffee?" }
  ];

  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % (messages.length + 1)), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      {/* Device frame */}
      <div className="card mx-auto w-full max-w-xl rounded-3xl border-white/15 bg-black/40 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="h-2 w-12 rounded-full bg-white/20" />
          <div className="text-xs text-slate-300">Automation Preview</div>
          <div className="h-2 w-6 rounded-full bg-white/20" />
        </div>

        <div className="h-[280px] sm:h-[320px] overflow-hidden border-t border-white/10">
          <div className="flex h-full flex-col gap-2 p-4">
            {messages.slice(0, step).map((m, i) => (
              <Bubble key={i} from={m.from} text={m.text} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-white/10 text-center text-xs">
          <div className="p-3">
            <div className="font-semibold text-white">8</div>
            <div className="text-slate-300">msgs before handoff</div>
          </div>
          <div className="p-3">
            <div className="font-semibold text-white">45m</div>
            <div className="text-slate-300">saved daily</div>
          </div>
          <div className="p-3">
            <div className="font-semibold text-white">3.4×</div>
            <div className="text-slate-300">better conversion</div>
          </div>
        </div>
      </div>

      {/* Soft gradient glow */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 blur-3xl"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(600px 260px at 50% 10%, rgba(240,0,184,0.35), rgba(79,70,229,0.15), transparent 70%)"
        }}
      />

      {/* Floating particles */}
      <div className="particle" style={{ top: "-10px", left: "10%" }}></div>
      <div className="particle" style={{ top: "20px", right: "8%" }}></div>
      <div className="particle" style={{ bottom: "-4px", left: "20%" }}></div>
      <div className="particle" style={{ bottom: "10px", right: "18%" }}></div>
    </div>
  );
}