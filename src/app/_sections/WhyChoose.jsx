"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "Human-real tone messaging",
    text: "WingAgent mirrors your humor, rhythm, and conversational boundaries so every message feels authentically yours.",
    icon: "💬",
  },
  {
    title: "Adaptive match learning",
    text: "Each chat trains the system to predict what works for you — refining tone, timing, and reply depth automatically.",
    icon: "🧠",
  },
  {
    title: "Unified multi-app automation",
    text: "Operate Tinder, Bumble, and Hinge from one dashboard. One interface, complete control.",
    icon: "⚙️",
  },
  {
    title: "Safety & privacy isolation",
    text: "All tokens and credentials stay sandboxed with encryption. Your personal data never leaves your private environment.",
    icon: "🔒",
  },
  {
    title: "Dedicated match funnel reporting",
    text: "Track your conversion path visually — from swipes to hand-offs — to understand what drives real connections.",
    icon: "📊",
  },
  {
    title: "Fast onboarding questionnaire",
    text: "Answer a few smart prompts and you’re live in under five minutes. No manuals. No friction.",
    icon: "⚡",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("animate-fadeUp")),
      { threshold: 0.2 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="why"
      ref={ref}
      className="relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 py-24 sm:py-28 overflow-hidden"
    >
      {/* dotted grid backdrop */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Why WingAgent</h2>
        <p className="mt-2 text-slate-400 text-base">Why it works better.</p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-transparent p-[2px] bg-gradient-to-r from-fuchsia-600 to-indigo-600 animate-borderGlow"
          >
            <div className="h-full rounded-2xl bg-slate-900/80 backdrop-blur-xl p-8 transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 mb-5 text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}