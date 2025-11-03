"use client";

import { useEffect, useState } from "react";
import { profiles } from "./mockData";

/**
 * Simple auto-swiping stack:
 * - Top card animates left/right alternately
 * - Next card peeks underneath
 */
export default function SwipeDeck() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState("right"); // "left" | "right"

  useEffect(() => {
    const t = setInterval(() => {
      setDir((d) => (d === "right" ? "left" : "right"));
      setIdx((i) => (i + 1) % profiles.length);
    }, 2200 * (Number(getComputedStyle(document.documentElement).getPropertyValue("--wa-speed")) || 1));
    return () => clearInterval(t);
  }, []);

  const top = profiles[idx];
  const next = profiles[(idx + 1) % profiles.length];

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
      <div className="text-sm text-slate-400 mb-3">Swipe queue</div>

      <div className="relative h-56">
        {/* next card (under) */}
        <ProfileCard data={next} className="absolute inset-0 translate-y-2 scale-[0.98] opacity-75" />

        {/* top card (animated) */}
        <ProfileCard
          data={top}
          className={`absolute inset-0 wa-swipe-${dir}`}
          badge={dir === "right" ? "LIKE" : "PASS"}
        />
      </div>
    </div>
  );
}

function ProfileCard({ data, className = "", badge }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-slate-950/60 p-4 flex gap-4 ${className}`}
    >
      <div
        className="h-20 w-20 flex items-center justify-center rounded-lg text-lg font-semibold"
        style={{
          background:
            "linear-gradient(135deg, rgba(240,0,184,.12), rgba(79,70,229,.12))",
        }}
      >
        {initials(data.name)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{data.name} · {data.age}</div>
        <div className="text-xs text-slate-400 truncate">{data.bio}</div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {data.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] rounded-full border border-white/10 px-2 py-[2px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {badge && (
        <div
          className={`absolute -rotate-12 top-3 right-3 text-[10px] px-2 py-[2px] rounded border ${
            badge === "LIKE"
              ? "border-emerald-400/40 text-emerald-300"
              : "border-slate-400/40 text-slate-300"
          }`}
        >
          {badge}
        </div>
      )}
    </div>
  );
}

function initials(name) {
  return name
    .split(" ")
    .map((x) => x[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}