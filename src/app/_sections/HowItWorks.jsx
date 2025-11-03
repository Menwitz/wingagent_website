"use client";

import { useEffect, useRef, useState } from "react";

// minimal icon set consistent with brand
const iconMap = {
  signup: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 5v14m-7-7h14" />
    </svg>
  ),
  prefs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6c.51 0 1.01-.2 1.38-.57l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.37.37-.57.87-.57 1.38 0 .51.2 1.01.57 1.38l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15.4 15c-.51 0-1.01.2-1.38.57l-.06.06z" />
    </svg>
  ),
  vibe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 11l3-8 3 8m-6 0h6m-7 4h8" />
    </svg>
  ),
  connect: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M14.83 9.17l1.41-1.41a3 3 0 0 1 4.24 4.24l-1.41 1.41m-8.48-.58l-1.41 1.41a3 3 0 1 1-4.24-4.24l1.41-1.41" />
    </svg>
  ),
  auto: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  notify: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  handoff: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 12h13M8 12l5-5M8 12l5 5M3 4v16" />
    </svg>
  ),
};

const steps = [
  { title: "Create your account", description: "Quick onboarding with a short quiz so we calibrate from day one.", icon: iconMap.signup, position: "right" },
  { title: "Set match criteria", description: "Filters for attraction, values, interests, lifestyle. Precision in → quality out.", icon: iconMap.prefs, position: "left" },
  { title: "Define your vibe", description: "Tone, humor, pace, flirting energy. We talk like you — never generic.", icon: iconMap.vibe, position: "right" },
  { title: "Connect apps or create profiles", description: "Link Tinder, Bumble, Hinge — or let us craft them for you.", icon: iconMap.connect, position: "left" },
  { title: "Automation begins", description: "Smart swipes, filters, warm openers, paced chat flow.", icon: iconMap.auto, position: "right" },
  { title: "Real match notifications", description: "Alerts only when interest is real. No noise.", icon: iconMap.notify, position: "left" },
  { title: "You step in", description: "Take over seamlessly when it's warm and real.", icon: iconMap.handoff, position: "right" },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState([]);
  const [progress, setProgress] = useState(0);
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => e.isIntersecting && setVisible(p => [...new Set([...p, i])])), 
      { threshold: 0.15 }
    );
    ref.current.forEach(el => el && observer.observe(el));
    return () => ref.current.forEach(el => el && observer.unobserve(el));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("how");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight), 0), 1);
      setProgress(pct);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="how" className="relative py-24 text-center">
      <h2 className="text-3xl font-bold mb-2">How it works</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-20">
        Your AI handles the effort. You handle the connection.
      </p>

      {/* line base */}
      <div className="absolute left-1/2 top-32 bottom-10 w-px bg-slate-700/40" />

      {/* progress line */}
      <div
        className="absolute left-1/2 top-32 w-px bg-gradient-to-b from-fuchsia-500 via-fuchsia-400 to-transparent animate-pulse-slow"
        style={{ height: `${progress * 100}%` }}
      />

      {steps.map((step, i) => {
        const side = step.position === "left" ? "left-0 pr-16 text-right" : "right-0 pl-16 text-left";
        const active = visible.includes(i);

        return (
          <div
            key={i}
            ref={el => (ref.current[i] = el)}
            className={`relative flex items-center justify-center w-full max-w-5xl mx-auto mb-20 transition-all duration-700 ${
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className={`absolute w-1/2 ${side}`}>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>

            {/* icon */}
            <div className="relative z-10 flex items-center justify-center group">
              <div className="h-12 w-12 flex items-center justify-center rounded-full border border-fuchsia-500/60 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(240,0,184,0.4)] transition-transform duration-300 group-hover:scale-115">
                <span className="text-fuchsia-300">{step.icon}</span>
              </div>
              {active && <div className="absolute inset-0 rounded-full border border-fuchsia-500/20 animate-ping-slow" />}
            </div>
          </div>
        );
      })}
    </section>
  );
}