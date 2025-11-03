"use client";

import RunStatus from "./RunStatus";
import KPIRow from "./KPIRow";
import SwipeDeck from "./SwipeDeck";
import ConversationStream from "./ConversationStream";
import ActivityTicker from "./ActivityTicker";

/**
 * DashboardPreview
 * Composition-only container so you can swap parts independently.
 * Props allow quick experimentation later (speed/theme/compact).
 */
export default function DashboardPreview({
  compact = false,
  speed = "normal", // "slow" | "normal" | "fast"
}) {
  // Map speed → ms; children read via CSS variables
  const speedMap = { slow: 1.2, normal: 1, fast: 0.8 };
  const k = speedMap[speed] ?? 1;

  return (
    <div
      className="rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl overflow-hidden"
      style={{
        // children use these vars to scale their animation durations
        ["--wa-speed"]: k,
      }}
    >
      <RunStatus />

      <div className={`grid ${compact ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-4 p-6`}>
        <div className="order-1">
          <SwipeDeck />
        </div>

        <div className="order-3 lg:order-2">
          <KPIRow compact={compact} />
        </div>

        <div className="order-2 lg:order-3">
          <ConversationStream />
        </div>
      </div>

      <ActivityTicker />
    </div>
  );
}