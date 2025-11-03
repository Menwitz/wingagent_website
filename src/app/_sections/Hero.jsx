"use client";

import { useEffect, useRef } from "react";
import DashboardPreview from "../_components/DashboardPreview";
import Reveal from "../_components/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative py-32">
      <Reveal>
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Your personal AI wingman.
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-slate-300 text-center text-lg">
          Swipe. Match. Chat. Meet. Automation handles the discovery and warmup.
        </p>
      </Reveal>
    </section>
  );
}

export default function Hero() {
  const previewRef = useRef(null);

  // Parallax scroll for the dashboard mock
  useEffect(() => {
    const handleScroll = () => {
      const el = previewRef.current;
      if (!el) return;
      const offset = window.scrollY * 0.1;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="section relative overflow-hidden pt-24 sm:pt-28">
      {/* animated gradient background lighting */}
      <div
        className="animated-gradient pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
      />

      {/* drifting background word */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[120%] -translate-x-1/2 -translate-y-1/2 text-center text-[12rem] font-extrabold tracking-tight text-transparent opacity-[0.05] blur-sm animate-heroFloat
                   bg-gradient-to-r from-brandStart via-pink-500 to-brandEnd bg-clip-text select-none"
        aria-hidden="true"
      >
        AUTOMATED
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-wider text-slate-400">
          Private AI for your dating life.
        </p>

        <h1 className="mx-auto mt-2 max-w-3xl bg-gradient-to-r from-brandStart via-pink-400 to-brandEnd bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Your personal AI wingman.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300">
          WingAgent automates swiping, matching, and first messages — so you invest
          time only when the spark is real.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          Available on Tinder, Bumble, and Hinge.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
<a
  href="#final"
  className="btn-shine btn-magnetic inline-block rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-[0_0_30px_rgba(240,0,184,0.25)] hover:shadow-[0_0_45px_rgba(240,0,184,0.4)]"
>
  Start now
</a>
          <a href="#how" className="btn btn-ghost">
            See how it works
          </a>
        </div>
      </div>

      <div
        id="dashboard"
        ref={previewRef}
        className="mx-auto mt-16 max-w-6xl transition-transform duration-500"
      >
        <DashboardPreview />
      </div>
    </section>
  );
}