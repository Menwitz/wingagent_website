export const metadata = {
  title: "Demo — WingAgent",
  description:
    "Experience how WingAgent automates discovery, conversations, and handoffs across dating apps.",
};

export default function DemoPage() {
  const steps = [
    {
      label: "Discovery",
      text: "WingAgent quietly swipes and filters profiles that align with your preferences.",
      gradient: "from-fuchsia-600 to-pink-500",
    },
    {
      label: "Warmup",
      text: "The AI opens conversations naturally, mirroring your tone and style.",
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      label: "Handoff",
      text: "When mutual interest is confirmed, WingAgent invites you to take over.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="py-28 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl font-bold mb-3">Interactive Demo</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A visual simulation of how your WingAgent operates behind the scenes.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`relative rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br ${s.gradient} p-8 text-center shadow-[0_0_40px_rgba(240,0,184,0.15)]`}
          >
            <div className="absolute inset-0 bg-slate-950/70 rounded-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">{s.label}</h2>
              <p className="text-slate-200 mb-4">{s.text}</p>
              <div className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 text-sm">
                [Interactive preview area — coming soon]
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}