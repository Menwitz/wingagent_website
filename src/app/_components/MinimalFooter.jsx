// /src/app/_components/MinimalFooter.jsx
"use client";

import Link from "next/link";

export default function MinimalFooter() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: copyright */}
        <p className="text-xs text-slate-400">
          © Copyright Public Affairs Analytics LLC. 2025
        </p>

        {/* Right: policy links */}
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <li>
              <Link href="/refund" className="text-slate-300 hover:text-white transition">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-slate-300 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-slate-300 hover:text-white transition">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-300 hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}