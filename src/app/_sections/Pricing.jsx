"use client";
import { useState, useMemo } from "react";
import PricingCard from "../_components/PricingCard";

export default function Pricing() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  // Base MONTHLY prices (your current numbers)
  const basePlans = useMemo(() => ([
    {
      name: "Starter",
      price: 49.99,
      highlight: false,
      features: [
        "1 connected platform",
        "Up to 500 automated swipes/month",
        "Basic AI message templates",
        "Standard onboarding",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: 149.99,
      highlight: true,
      features: [
        "All platforms (Tinder, Bumble, Hinge)",
        "5,000 AI-driven swipes/month",
        "Adaptive tone-matching replies",
        "Conversation analytics dashboard",
        "Priority support",
      ],
    },
    {
      name: "Elite",
      price: 299.99,
      highlight: false,
      features: [
        "Unlimited automation access",
        "Human-in-the-loop QA on messages",
        "Weekly personalized reports",
        "Advanced sentiment analytics",
        "Dedicated success engineer",
      ],
    },
  ]), []);

  // Compute displayed plans by billing cycle
  const plans = useMemo(() => {
    const yearly = billing === "yearly";
    return basePlans.map((p) => ({
      ...p,
      // Yearly = 10× monthly (2 months free)
      price: yearly ? Number((p.price * 10).toFixed(2)) : p.price,
      // Inject a "2 months free" bullet only for yearly
      features: yearly ? [...p.features, "2 months free"] : p.features,
      // Pass cycle hint (your PricingCard can ignore if not used)
      cycle: billing, // "monthly" or "yearly"
    }));
  }, [basePlans, billing]);

  // Waitlist submit (unchanged)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-950 text-center">
      <p className="text-sm uppercase tracking-wider text-slate-400">Pricing</p>
      <h2 className="text-4xl font-bold text-white mb-4">Flexible Plans for Everyone</h2>
      <p className="mx-auto max-w-2xl text-base text-slate-300">Pay for time saved, not hype</p>

      {/* Billing toggle */}
      <div className="mt-6 flex justify-center">
        <div className="inline-flex rounded-full border border-white/15 bg-slate-900/60 p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1.5 text-sm rounded-full transition ${
              billing === "monthly"
                ? "bg-white text-slate-900"
                : "text-slate-300 hover:text-white"
            }`}
            aria-pressed={billing === "monthly"}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-1.5 text-sm rounded-full transition flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-white text-slate-900"
                : "text-slate-300 hover:text-white"
            }`}
            aria-pressed={billing === "yearly"}
          >
            Yearly
            <span className="text-[10px] rounded-full border border-fuchsia-400/30 text-fuchsia-300 px-2 py-[2px]">
              2 months free
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8 mb-12">
        {plans.map((plan) => (
          <PricingCard key={`${plan.name}-${billing}`} data={plan} />
        ))}
      </div>

      <div className="text-slate-400 text-sm">
        All plans include encrypted data handling and optional human oversight.
      </div>

      {/* Waitlist input */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email for the waitlist"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 rounded-full bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-white font-medium hover:opacity-90 transition-all disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Join waitlist"}
        </button>
      </form>

      {/* Inline feedback */}
      {status === "success" && (
        <p className="mt-3 text-fuchsia-400">You're on the list! We'll notify you soon.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-400">Something went wrong. Please try again.</p>
      )}
    </section>
  );
}