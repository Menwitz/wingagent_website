"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export default function LegalConsentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("wa_legal_seen");
    if (!seen) setOpen(true);
  }, []);

  function accept() {
    localStorage.setItem("wa_legal_seen", "yes");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-white/10 rounded-xl p-8 max-w-md w-full shadow-xl animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Before we get started</h2>

        <p className="text-slate-300 mb-4">
          WingAgent automates swiping and warm-up messages.  
          You stay in control. You always choose who to meet.
        </p>

        <div className="space-y-2 text-sm text-slate-400 mb-6">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-fuchsia-400" />
            <a href="/terms" className="hover:text-white">Terms of Use</a>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-fuchsia-400" />
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-fuchsia-400" />
            <a href="/security" className="hover:text-white">Security Practices</a>
          </div>
        </div>

        <button
          onClick={accept}
          className="w-full py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-white/90"
        >
          I understand and agree
        </button>
      </div>
    </div>
  );
}