import React from "react";

const testimonials = [
  {
    quote: "WingAgent freed up my evenings. Matching feels intentional now.",
    name: "Alex R.",
    role: "Product Manager",
    city: "New York, USA",
    stat: "+3.2× match conversion",
    tag: "Exec",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    quote: "The tone feels like me. People think I reply instantly.",
    name: "Daniel S.",
    role: "Startup Founder",
    city: "San Francisco, USA",
    stat: "8 warmup msgs avg",
    tag: "Founder",
    avatar: "https://i.pravatar.cc/100?img=33"
  },
  {
    quote: "I’d match, then stall. Now dates book themselves.",
    name: "Marcus T.",
    role: "Consultant",
    city: "Chicago, USA",
    stat: "4 dates in 10 days",
    tag: "Elite",
    avatar: "https://i.pravatar.cc/100?img=45"
  },
  {
    quote: "I fly weekly. Conversations never die anymore.",
    name: "Rami K.",
    role: "Private Equity",
    city: "Dubai — London",
    stat: "+6 hrs/week saved",
    tag: "Jet-setter",
    avatar: "https://i.pravatar.cc/100?img=56"
  },
  {
    quote: "Feels like leverage. A dating assistant that speaks my voice.",
    name: "Michael A.",
    role: "Tech Exec",
    city: "Los Angeles, USA",
    stat: "Consistent pipeline",
    tag: "Exec",
    avatar: "https://i.pravatar.cc/100?img=14"
  },
  {
    quote: "Setup took minutes. Agent handled the rest.",
    name: "Samir B.",
    role: "AI Researcher",
    city: "Paris, France",
    stat: "Instant setup",
    tag: "Elite",
    avatar: "https://i.pravatar.cc/100?img=32"
  },
  {
    quote: "I used to ghost by accident. Now follow-through is automatic.",
    name: "Leo M.",
    role: "Finance",
    city: "Toronto, Canada",
    stat: "Zero cold threads",
    tag: "Exec",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    quote: "Authentic tone, natural pacing, zero AI stiffness.",
    name: "James W.",
    role: "Lawyer",
    city: "Sydney, Australia",
    stat: "Higher-quality matches",
    tag: "Elite",
    avatar: "https://i.pravatar.cc/100?img=68"
  },
];

function Card({ t }) {
  return (
    <div className="min-w-[280px] max-w-[300px] rounded-2xl p-6 border border-white/10 bg-slate-900/60 backdrop-blur-md mx-3">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-10 w-10 rounded-full border border-white/20 object-cover"
        />
        <div className="text-[10px] px-2 py-1 rounded-md bg-gradient-to-r from-yellow-500/40 to-yellow-300/40 text-yellow-200 border border-yellow-300/40 font-medium tracking-wide">
          {t.tag}
        </div>
      </div>

      <div className="text-yellow-300 text-sm mb-2">★★★★★</div>

      <p className="text-slate-200 mb-4 italic text-[13px] leading-relaxed">
        “{t.quote}”
      </p>

      <div className="text-xs text-slate-400">
        {t.name} · {t.role}
      </div>
      <div className="text-xs text-slate-500">{t.city}</div>

      <div className="mt-2 text-[10px] text-fuchsia-400 font-medium">
        {t.stat}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  return (
    <section className="py-28 bg-slate-950 overflow-hidden" id="testimonials">
      <h2 className="text-3xl font-semibold text-center mb-14">
        WingAgent in the wild
      </h2>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap mb-6">
          {firstRow.concat(firstRow).map((t, i) => <Card key={i} t={t} />)}
        </div>

        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {secondRow.concat(secondRow).map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}