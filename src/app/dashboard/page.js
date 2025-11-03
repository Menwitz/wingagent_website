"use client";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);

  // ──────────────────────────────────────────────
  // Placeholder: In production, fetch session + subscription
  // Example: call /api/user or use NextAuth useSession()
  // ──────────────────────────────────────────────
  useEffect(() => {
    // Simulate loading user profile
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john@example.com",
        stripeCustomerId: "cus_XXXXXX", // replace dynamically later
      });
      setSubscription({
        plan: "Pro",
        status: "active",
        renewDate: "Dec 18, 2025",
      });
    }, 600);
  }, []);

  async function openBillingPortal() {
    if (!user?.stripeCustomerId) return alert("Missing customer ID");
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: user.stripeCustomerId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Error: " + (data.error || "Unable to open billing portal."));
    } catch (err) {
      console.error("Portal error:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      {/* Gradient glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-700/10 via-indigo-700/10 to-transparent blur-3xl" />

      {user ? (
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Welcome back, {user.name.split(" ")[0]}
          </h1>
          <p className="text-slate-400 mb-8">
            You’re logged in as <span className="text-slate-200">{user.email}</span>
          </p>

          {/* Subscription Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mb-8 shadow-[0_0_30px_rgba(240,0,184,0.15)]">
            {subscription ? (
              <>
                <h2 className="text-2xl font-semibold mb-2">
                  {subscription.plan} Plan
                </h2>
                <p className="text-slate-300 mb-1 capitalize">
                  Status:{" "}
                  <span
                    className={
                      subscription.status === "active"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {subscription.status}
                  </span>
                </p>
                <p className="text-slate-400 text-sm">
                  Renews on {subscription.renewDate}
                </p>
              </>
            ) : (
              <p className="text-slate-400">Loading subscription...</p>
            )}
          </div>

          {/* Billing Portal Button */}
          <button
            onClick={openBillingPortal}
            disabled={loading}
            className={`rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-10 py-3 font-semibold transition ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:shadow-[0_0_25px_rgba(240,0,184,0.3)]"
            }`}
          >
            {loading ? "Redirecting..." : "Manage Billing"}
          </button>

          {/* Divider */}
          <div className="mt-12 mb-4 h-px bg-white/10 w-40 mx-auto" />

          {/* Placeholder for future dashboard widgets */}
          <section className="grid md:grid-cols-3 gap-6 mt-6 text-left">
            {[
              {
                title: "Setup Wizard",
                desc: "Configure your dating profiles, preferences, and AI tone.",
              },
              {
                title: "Match Analytics",
                desc: "View your engagement metrics and conversation conversions.",
              },
              {
                title: "Conversation Vault",
                desc: "Access all automated and handoff chats in one place.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <p className="text-slate-400">Loading profile...</p>
      )}
    </main>
  );
}