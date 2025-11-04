// /src/app/_components/MinimalNavbar.jsx
"use client";

import Link from "next/link";
import Logo from "./Logo"; // falls back to text if you prefer

export default function MinimalNavbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <nav className="mx-auto flex h-14 max-w-7xl items-center px-4">
        {/* Left: clickable logo only */}
        <Link href="/" aria-label="Go to homepage" className="inline-flex items-center">
          {/* If you don’t have <Logo/>, replace with text below */}
          <Logo className="h-6 w-auto" />
          {/* <span className="text-sm font-semibold tracking-tight text-slate-100">WingAgent</span> */}
        </Link>
      </nav>
    </header>
  );
}