"use client";

import { useEffect, useState } from "react";

export default function Metric({ data, index, visible }) {
  const { value, suffix, label, desc } = data;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1500;
    const start = performance.now();
    const animate = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      const current = (value * progress).toFixed(value % 1 === 0 ? 0 : 1);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, value]);

  const gradients = [
    "from-fuchsia-500 to-pink-500",
    "from-indigo-500 to-sky-500",
    "from-violet-500 to-fuchsia-500",
    "from-cyan-400 to-blue-500"
  ];

  return (
    <div
      className={`
        group rounded-2xl border border-white/10 p-6 sm:p-8
        bg-gradient-to-br ${gradients[index % gradients.length]}
        bg-[length:200%_200%] animate-gradientShift
        text-white shadow-[0_0_25px_rgba(255,255,255,0.1)]
        transition-transform duration-500 hover:-translate-y-1
      `}
    >
      <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        {display}
        {suffix || ""}
      </h3>
      <p className="mt-2 text-base font-semibold text-white/90">{label}</p>
      <p className="mt-3 text-sm text-white/80 leading-relaxed">{desc}</p>
    </div>
  );
}