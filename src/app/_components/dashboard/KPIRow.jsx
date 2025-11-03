"use client";

const tiles = [
  { k: "Matches", v: 28, sub: "+6% this week" },
  { k: "Warm threads", v: 12, sub: "3 ready for handoff" },
  { k: "Handoffs", v: 3, sub: "2 scheduled" },
];

export default function KPIRow({ compact = false }) {
  return (
    <div className={`grid ${compact ? "grid-cols-2" : "grid-cols-3"} gap-4`}>
      {tiles.map((t) => (
        <div
          key={t.k}
          className="rounded-xl border border-white/10 bg-slate-900/50 p-4 relative overflow-hidden"
        >
          {/* subtle shimmer accent */}
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 blur-2xl" />
          <div className="text-sm text-slate-400">{t.k}</div>
          <div className="mt-1 text-3xl font-bold">{t.v}</div>
          <div className="mt-1 text-xs text-slate-500">{t.sub}</div>

          {/* sparkline stub */}
          <div className="mt-3 h-10 w-full wa-sparkline rounded-md" />
        </div>
      ))}
    </div>
  );
}