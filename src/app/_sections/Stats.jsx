"use client";

import { useEffect, useRef, useState } from "react";
import Metric from "../_components/Metric";

const METRICS = [
  {
    value: 100000,
    label: "Automated Matches",
    desc: "Over one hundred thousand successful matches initiated and warmed up by WingAgent."
  },
  {
    value: 45,
    suffix: " min",
    label: "Time Saved Daily",
    desc: "Users reclaim an average of forty-five minutes per day normally lost to endless swiping."
  },
  {
    value: 8,
    label: "Messages Before Handoff",
    desc: "Conversations flow naturally — WingAgent warms up matches with about eight messages before you take over."
  },
  {
    value: 3.4,
    suffix: "×",
    label: "Better Match Conversion",
    desc: "WingAgent users convert genuine interest over three times faster than manual chatting."
  }
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative z-10 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Facts Don’t Lie
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Metric key={m.label} data={m} index={i} visible={visible} />
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-400">
          Metrics from live WingAgent sessions, 2024–2025 Beta.
        </p>
      </div>
    </section>
  );
}