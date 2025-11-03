"use client";

export default function RunStatus() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-slate-950/40">
      <div className="flex items-center gap-2 text-sm text-slate-300">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75 wa-pulse-dot" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-300" />
        </span>
        Automation <span className="text-slate-500">•</span> ON
      </div>
      <div className="text-xs text-slate-400">Next window: 18:00–22:00</div>
    </div>
  );
}