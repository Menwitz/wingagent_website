"use client";

/**
 * Bottom marquee with recent actions. Pure CSS loop.
 */
export default function ActivityTicker() {
  const items = [
    "Swiped 12 profiles on Bumble · Midtown",
    "Matched with Alina, 28 · Hinge",
    "Opened with travel hook ✈️",
    "Reply detected · moved to warm",
    "Handoff ready: Maya, 26 · Sat 7:30pm",
  ];

  return (
    <div className="border-t border-white/10 bg-slate-950/40">
      <div className="relative overflow-hidden">
        <div className="wa-ticker whitespace-nowrap py-2 text-xs text-slate-300">
          {items.concat(items).map((t, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}