"use client";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "I only step in when it actually matters. Feels like I gained hours back.", author: "J., New York" },
  { quote: "Matches feel real, not scripted. Discreet and calm.", author: "A., London" },
  { quote: "It filters noise better than any dating coach ever could.", author: "L., Dubai" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Quiet satisfaction.</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl shadow-[0_0_25px_rgba(240,0,184,0.1)]"
            >
              <p className="text-slate-200 italic mb-4">“{t.quote}”</p>
              <span className="text-slate-400 text-sm">{t.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}