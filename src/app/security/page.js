"use client";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { ShieldCheck, Lock, Key, Zap, EyeOff, Cpu } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Military-grade data flow",
    text: "Encryption at rest and in motion. Zero plaintext credentials. Isolated execution containers.",
  },
  {
    icon: EyeOff,
    title: "We see nothing",
    text: "No human reads your conversations unless you explicitly enable human QA on Elite.",
  },
  {
    icon: Lock,
    title: "You own your keys",
    text: "OAuth. Token vaults. Revocable at any time. Disconnect in one click.",
  },
  {
    icon: Cpu,
    title: "No training on your chats",
    text: "We don't feed your messages into models. Ever. No shadow datasets.",
  },
  {
    icon: Key,
    title: "You stay in control",
    text: "Pause, revoke, delete, export — whenever you want. Your account, your data.",
  },
  {
    icon: Zap,
    title: "Designed like a fintech stack",
    text: "Network isolation, segmented pipelines, intrusion detection, audit logs.",
  }
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24 text-slate-100">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Security that moves like a fortress,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
              but feels invisible
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Serious infrastructure.  
            Zero stress.  
            Just focus on your matches — we handle the defense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 animate-fade-in">
          {items.map((x, i) => (
            <div key={i} className="bg-slate-900/40 border border-white/10 p-6 rounded-xl hover:border-fuchsia-400/40 transition-all">
              <x.icon className="h-10 w-10 text-fuchsia-400 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">{x.title}</h3>
              <p className="text-slate-400 text-sm">{x.text}</p>
            </div>
          ))}
        </div>

        {/* fun section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Your data is like your dating life</h2>
          <p className="text-slate-400 text-lg">Private. Selective. Behind velvet ropes.</p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
            <span>Our motto:</span>
            <span className="px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 font-medium">
              Zero cringe security
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900/50 border border-white/10 rounded-xl p-10 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Want us to delete your data?
          </h3>
          <p className="text-slate-400 mb-6">
            Click once. Poof. Gone. We don’t cling.
          </p>
          <a
            href="/account/security"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-white/90"
          >
            Manage Data Controls
          </a>
        </div>

      </main>

      <Footer />
    </>
  );
}