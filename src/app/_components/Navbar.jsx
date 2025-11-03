"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? "backdrop-blur-xl bg-slate-950/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6 py-4 text-white relative">
        <a href="/" className="font-bold text-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
          WingAgent
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-fuchsia-400 transition">How it works</a>
          <a href="#why" className="hover:text-fuchsia-400 transition">Why WingAgent</a>
          <a href="#pricing" className="hover:text-fuchsia-400 transition">Pricing</a>
          <a href="#faq" className="hover:text-fuchsia-400 transition">FAQ</a>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-fuchsia-400 transition">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-xl text-left z-50">
                <a href="/about" className="block px-4 py-2 hover:bg-white/10">About</a>
                <a href="/technology" className="block px-4 py-2 hover:bg-white/10">Technology</a>
                <a href="/security" className="block px-4 py-2 hover:bg-white/10">Security</a>
                <a href="/press" className="block px-4 py-2 hover:bg-white/10">Press</a>
                <a href="/blog" className="block px-4 py-2 hover:bg-white/10">Blog</a>
                <a href="/demo" className="block px-4 py-2 hover:bg-white/10">Demo</a>
              </div>
            )}
          </div>

          <a
            href="/auth"
            className="ml-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2 font-medium text-sm hover:shadow-[0_0_20px_rgba(240,0,184,0.3)] transition"
          >
            Start now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-950/95 border-t border-white/10 backdrop-blur-xl flex flex-col items-center gap-4 py-6 md:hidden">
            <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>Why WingAgent</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <details className="w-full text-center">
              <summary className="cursor-pointer">More</summary>
              <div className="flex flex-col mt-2 space-y-2 text-slate-300">
                <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="/technology" onClick={() => setMenuOpen(false)}>Technology</a>
                <a href="/security" onClick={() => setMenuOpen(false)}>Security</a>
                <a href="/press" onClick={() => setMenuOpen(false)}>Press</a>
                <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
                <a href="/demo" onClick={() => setMenuOpen(false)}>Demo</a>
              </div>
            </details>
            <a
              href="/auth"
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2 font-medium text-sm hover:shadow-[0_0_20px_rgba(240,0,184,0.3)] transition"
            >
              Start now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}