"use client";

import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 ${
        open ? "ring-1 ring-fuchsia-500/50 bg-white/10" : "hover:bg-white/10"
      }`}
    >
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-white">{question}</span>
        <span
          className={`ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-fuchsia-400 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}