"use client";
import ElectricBorder from "./ElectricBorder";

// Stripe checkout now accepts plan + cycle ("monthly" | "yearly")
async function handleCheckout(plan, cycle = "monthly") {
  try {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, cycle }),
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
  } catch (e) {
    console.error("Checkout failed", e);
  }
}

/**
 * Props:
 *  - data: {
 *      name, price, features[], highlight,
 *      code?, priceLabel?, custom?, ctaLabel?, ctaHref?,
 *      cycle?   // "monthly" | "yearly"
 *    }
 *  - yearly?: boolean
 */
export default function PricingCard({ data = {}, yearly = false }) {
  const {
    name = "",
    price = 0,
    features = [],
    highlight = false,
    code,
    priceLabel,
    custom = false,
    ctaLabel,
    ctaHref,
    cycle,
  } = data;

  const isYearly = typeof yearly === "boolean" ? yearly : cycle === "yearly";

  let numericPrice = price;
  if (!priceLabel && !custom) {
    numericPrice = isYearly ? price * 10 : price;
  }

  const formatPrice = (n) => {
    if (Number.isInteger(n)) return `$${n.toFixed(0)}`;
    return `$${n.toFixed(2)}`;
  };

  const displayPrice = priceLabel
    ? priceLabel
    : custom
    ? "Custom"
    : formatPrice(numericPrice);

  const period = priceLabel || custom ? "" : isYearly ? "/yr" : "/mo";

  const planCode =
    code || name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const primaryCTA = custom ? ctaLabel || "Contact us" : ctaLabel || "Get Started";
  const primaryHref = custom ? ctaHref || "/contact" : null;

  return (
    <ElectricBorder
      color={highlight ? "#f000b8" : "#7df9ff"}
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 24 }}
    >
      <div className="relative h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl p-8 flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>

          <div className="flex items-end gap-2">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              {displayPrice}
            </div>
            {period && <p className="text-sm text-slate-400">{period}</p>}
          </div>

          {!custom && !priceLabel && isYearly && (
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 px-2 py-0.5 text-[11px] text-fuchsia-300">
              2 months free
            </div>
          )}

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

        {/* CTA */}
        {custom ? (
          <a
            href={primaryHref}
            className={`mt-8 text-center rounded-full py-3 font-medium transition-all ${
              highlight
                ? "bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(240,0,184,0.3)]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {primaryCTA}
          </a>
        ) : (
          <button
            onClick={() => (window.location.href = `/signup?plan=${planCode}`)}
            className={`mt-8 text-center rounded-full py-3 font-medium transition-all ${
              highlight
                ? "bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(240,0,184,0.3)]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {primaryCTA}
          </button>
        )}
      </div>
    </ElectricBorder>
  );
}