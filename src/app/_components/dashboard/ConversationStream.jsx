"use client";

import { useEffect, useState } from "react";
import { openers, replies } from "./mockData";

/**
 * Auto-streaming bubbles:
 * agent → counterpart → agent ...
 * New bubbles slide up; last 6 visible.
 */
export default function ConversationStream() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      const next = i % 2 === 0
        ? { role: "agent", text: openers[i % openers.length] }
        : { role: "cp", text: replies[i % replies.length] };
      setMessages((m) => {
        const arr = [...m, next].slice(-6);
        return arr;
      });
      i++;
    }, 1600 * (Number(getComputedStyle(document.documentElement).getPropertyValue("--wa-speed")) || 1));
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 h-full">
      <div className="text-sm text-slate-400 mb-3">Live conversation</div>
      <div className="h-56 overflow-hidden flex flex-col gap-2">
        {messages.map((m, idx) => (
          <Bubble key={idx} role={m.role} text={m.text} />
        ))}
      </div>
    </div>
  );
}

function Bubble({ role, text }) {
  const mine = role === "agent";
  return (
    <div
      className={`max-w-[85%] wa-bubble-in ${
        mine ? "self-end" : "self-start"
      }`}
    >
      <div
        className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
          mine
            ? "bg-gradient-to-r from-fuchsia-600/80 to-indigo-600/80 text-white"
            : "bg-white/10 text-slate-100 border border-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}