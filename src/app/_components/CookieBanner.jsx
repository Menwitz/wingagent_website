"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("wa_cookie_accept");
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem("wa_cookie_accept", "yes");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-white/10 backdrop-blur text-slate-200 rounded-xl p-4 px-6 flex flex-col sm:flex-row gap-4 items-center shadow-xl z-50">
      <span className="text-sm">
        WingAgent uses cookies for secure login and performance metrics. No tracking across apps. No selling data.
      </span>
      <button
        onClick={accept}
        className="px-4 py-2 text-sm bg-white text-slate-900 font-medium rounded-lg hover:bg-white/90"
      >
        Accept
      </button>
    </div>
  );
}