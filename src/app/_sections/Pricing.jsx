"use client";
import { useState } from "react";
import PricingCard from "../_components/PricingCard";

export default function Pricing() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const plans = [
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
    ];

    // ✅ Send email to /api/subscribe
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
            <p className="text-sm uppercase tracking-wider text-slate-400">
                Pricing </p>
            <h2 className="text-4xl font-bold text-white mb-10">
                Flexible Plans for Everyone </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300">
                Pay for time saved, not hype </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                {plans.map((plan) => (
                    <PricingCard key={plan.name} data={plan} />
                ))}
            </div>

            <div>**All plans include encrypted data handling and optional human oversight.</div>
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

            {/* Inline feedback message */}
            {status === "success" && (
                <p className="mt-3 text-fuchsia-400">You're on the list! We'll notify you soon.</p>
            )}
            {status === "error" && (
                <p className="mt-3 text-red-400">Something went wrong. Please try again.</p>
            )}
        </section>
    );
}