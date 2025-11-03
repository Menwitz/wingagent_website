"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Create your account",
    description:
        "Quick onboarding with a short quiz so we calibrate from day one. Your answers shape tone, pacing, and boundaries.",
    icon: "🙂",
    position: "right",
  },
  {
    title: "Set match criteria",
    description:
        "Physical preferences, personality traits, values, lifestyle filters, deal-breakers. Precision in → better matches out.",
    icon: "➕",
    position: "left",
  },
  {
    title: "Define your vibe",
    description:
        "Your voice, humor, flirting energy, pace, and ‘never say’ rules. Everything the agent writes mirrors you.",
    icon: "⚡",
    position: "right",
  },
  {
    title: "Connect apps or create new profiles",
    description:
        "Securely link Tinder, Bumble, Hinge — or let us craft optimized new profiles with photos and bios that match your brief.",
    icon: "👤",
    position: "left",
  },
    {
    title: "Automation begins",
    description:
        "Smart swipes, profile filtering, and warm-up messages run on a schedule. Energy stays high, you stay hands-off.",
    icon: "🙂",
    position: "right",
  },
    {
    title: "Real match notifications",
    description:
        "We notify you only when interest is real. No noise. Tap in when the chat is warmed and the vibe matches.",
    icon: "➕",
    position: "left",
  },
    {
    title: "You step in",
    description:
        "Take over for authentic conversation and logistics. We back off. You keep full control at every step.",
    icon: "👤",
    position: "right",
  }
];

export default function HowItWorks() {
  const [visible, setVisible] = useState([]);
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    ref.current.forEach((el) => el && observer.observe(el));
    return () => ref.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section id="how" className="relative py-24 text-center">
      <h2 className="text-3xl font-bold mb-2">How it works</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-20">
        Your AI handles the heavy lifting in four precise steps.
      </p>

      {/* timeline line */}
      <div className="absolute left-1/2 top-32 bottom-10 w-px bg-gradient-to-b from-fuchsia-500 via-purple-700 to-transparent opacity-60 animate-pulse-slow" />

      {steps.map((step, i) => {
        const isVisible = visible.includes(i);
        const side = step.position === "left" ? "left-0 pr-16 text-right" : "right-0 pl-16 text-left";

        return (
          <div
            key={i}
            ref={(el) => (ref.current[i] = el)}
            className={`relative flex items-center justify-center w-full max-w-4xl mx-auto mb-24 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* card */}
            <div className={`absolute w-1/2 ${side}`}>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>

            {/* node icon */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full border border-fuchsia-500/60 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(240,0,184,0.4)] cursor-pointer hover:scale-110 transition-transform">
                <span className="text-xl">{step.icon}</span>
              </div>

              {/* pulse ring */}
              <div className="absolute inset-0 rounded-full border border-fuchsia-500/30 animate-ping-slow" />
            </div>
          </div>
        );
      })}
    </section>
  );
}