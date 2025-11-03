"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // Highlight active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["how", "why", "pricing", "faq", "final"];
      let current = "";
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo */}
        <a href="/" aria-label="WingAgent Home" className="flex items-center gap-2">
          <Logo />
          <span className="text-white font-semibold text-lg tracking-tight">WingAgent</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how"
            className={`hover:text-fuchsia-400 transition-colors ${
              active === "how" ? "text-fuchsia-400" : "text-slate-300"
            }`}
          >
            How it works
          </a>
          <a
            href="#why"
            className={`hover:text-fuchsia-400 transition-colors ${
              active === "why" ? "text-fuchsia-400" : "text-slate-300"
            }`}
          >
            Why WingAgent
          </a>
          <a
            href="#pricing"
            className={`hover:text-fuchsia-400 transition-colors ${
              active === "pricing" ? "text-fuchsia-400" : "text-slate-300"
            }`}
          >
            Pricing
          </a>
          <a
            href="#faq"
            className={`hover:text-fuchsia-400 transition-colors ${
              active === "faq" ? "text-fuchsia-400" : "text-slate-300"
            }`}
          >
            FAQ
          </a>
          <a href="/auth" className="text-slate-300 hover:text-fuchsia-400 transition-colors">
            Login
          </a>
          <a
            href="#final"
            className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-2 font-medium text-white shadow-[0_0_20px_rgba(240,0,184,0.25)] hover:shadow-[0_0_35px_rgba(240,0,184,0.4)] hover:scale-[1.03] transition-all"
          >
            Start now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6 text-slate-300">
            <a
            href="#how"
            className={`relative group transition-colors ${
                active === "how" ? "text-white" : "text-slate-300"
            } hover:text-white`}
            >
            How it works
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            {active === "how" && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-indigo-500 animate-pulse" />
            )}
            </a>
            <a href="#why" onClick={() => setOpen(false)} className="hover:text-fuchsia-400">
              Why WingAgent
            </a>
            <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-fuchsia-400">
              Pricing
            </a>
            <a href="#faq" onClick={() => setOpen(false)} className="hover:text-fuchsia-400">
              FAQ
            </a>
            <a href="/auth" onClick={() => setOpen(false)} className="hover:text-fuchsia-400">
              Login / Sign Up
            </a>
            <a
              href="#final"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2 font-medium text-white"
            >
              Start now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}