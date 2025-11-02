"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    title: "Tell us your vibe",
    text: "Define your tone, humor, and personality so WingAgent messages as you would — genuine, effortless, and true to you.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f000b8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <path d="M12 20c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7z" />
        <path d="M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Connect your apps",
    text: "Securely link Tinder, Bumble, and Hinge in one unified dashboard. Privacy and data isolation are built in.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round">
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#f000b8" />
          </linearGradient>
        </defs>
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Automation starts",
    text: "WingAgent handles swipes, discovers matches, and starts conversations across all connected apps automatically.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="url(#grad3)" strokeWidth="1.5" strokeLinecap="round">
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f000b8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <path d="M5 12l14-9v18L5 12z" />
      </svg>
    ),
  },
  {
    title: "You step in",
    text: "When real interest appears, you’re notified instantly. Pick up the chat exactly where the AI left off — seamlessly.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="url(#grad4)" strokeWidth="1.5" strokeLinecap="round">
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#f000b8" />
          </linearGradient>
        </defs>
        <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) section.classList.add("animate-lineFlow");
        });
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how"
      ref={ref}
      className="relative z-10 bg-gradient-to-b from-slate-900 to-slate-800 py-24 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
        <p className="mt-3 text-slate-400 text-base">
          Your AI handles the heavy lifting in four simple steps.
        </p>
      </div>

      {/* connector line */}
      <svg
        className="absolute left-1/2 top-0 -z-10 h-[200%] w-px -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f000b8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowLine)" opacity="0.3" className="animate-flow" />
      </svg>

      <div className="relative mx-auto mt-20 flex flex-col gap-28 max-w-4xl">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`relative flex flex-col sm:flex-row items-center ${
              i % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(240,0,184,0.3)]">
              {s.icon}
            </div>

            <div
              className={`mt-6 sm:mt-0 sm:w-1/2 ${
                i % 2 === 0 ? "sm:pr-12 text-left" : "sm:pl-12 text-right sm:self-end"
              }`}
            >
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}