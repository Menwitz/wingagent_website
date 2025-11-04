// src/app/_sections/Insights.jsx
"use client";

export default function Insights() {
  return (
    <section className="relative bg-black overflow-hidden py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-fuchsia-700/10 to-black blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-indigo-400 mb-3 tracking-wide">
          AI-DRIVEN EFFICIENCY
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Never Miss an Opportunity
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          Capture leads, analyze trends, and centralize critical insights.
        </p>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Effortless Integration",
              desc: "Your data is synced in real-time across devices, ensuring you stay connected and informed—online or offline.",
              icon: (
                <svg
                  className="w-6 h-6 text-fuchsia-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4v6h6M20 20v-6h-6M4 20v-6h6M20 4v6h-6" />
                </svg>
              ),
            },
            {
              title: "Secure & Scalable",
              desc: "Enterprise-grade encryption protects your information, while flexible tools adapt to your business needs.",
              icon: (
                <svg
                  className="w-6 h-6 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1l9 4v6c0 5-3 9-9 12-6-3-9-7-9-12V5l9-4z" />
                </svg>
              ),
            },
            {
              title: "Actionable Insights",
              desc: "Leverage AI-powered analytics to identify trends, predict outcomes, and optimize your workflow effortlessly.",
              icon: (
                <svg
                  className="w-6 h-6 text-fuchsia-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3v18h18M7 14l3-3 4 4 5-7" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 text-left hover:bg-white/10 transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom features */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 text-slate-400 text-sm">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-fuchsia-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M4 12h16M4 6h16M4 18h16" />
            </svg>
            Smart Analytics
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-fuchsia-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M12 20v-6M6 12h12" />
            </svg>
            Real-Time Collaboration
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-fuchsia-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M12 3v18" />
            </svg>
            Task Prioritization
          </span>
        </div>
      </div>
    </section>
  );
}