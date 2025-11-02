"use client";

export default function PricingCard({ data = {}, yearly = false }) {
  const { name = "", price = 0, features = [], highlight = false } = data;
  const displayPrice = yearly ? (price * 12 * 0.8).toFixed(0) : price.toFixed(2);
  const period = yearly ? "/yr" : "/mo";

  return (
    <div
      className={`relative rounded-3xl p-[2px] ${
        highlight
          ? "bg-gradient-to-r from-fuchsia-600 to-indigo-600 animate-pulseSlow"
          : "bg-gradient-to-r from-slate-700 to-slate-800"
      }`}
    >
      <div className="h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
          <div className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            ${displayPrice}
          </div>
          <p className="text-sm text-slate-400">{period}</p>
          <ul className="mt-6 space-y-3 text-left">
            {features.map((f, i) => (
              <li key={i} className="flex items-start text-slate-300">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#grad-check)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 mt-[2px]"
                >
                  <defs>
                    <linearGradient id="grad-check" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f000b8" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#"
          className={`mt-8 text-center rounded-full py-3 font-medium transition-all ${
            highlight
              ? "bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(240,0,184,0.3)]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}