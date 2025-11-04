"use client";
import { motion } from "framer-motion";

const clips = [
  { label: "Discover", color: "from-fuchsia-600 to-pink-500" },
  { label: "Warmup", color: "from-yellow-400 to-amber-500" },
  { label: "Handoff", color: "from-indigo-500 to-blue-500" },
];

export default function DemoStrip() {
  return (
    <section id="demo" className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 via-indigo-600/10 to-transparent blur-3xl" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">See WingAgent in motion.</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {clips.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative w-64 h-40 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-[0_0_40px_rgba(240,0,184,0.15)]`}
            >
              <span className="text-white font-semibold text-lg">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}