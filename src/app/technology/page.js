export const metadata = {
  title: "Technology — WingAgent",
  description:
    "Explore the AI architecture and orchestration engine that powers WingAgent.",
};

export default function TechnologyPage() {
  const features = [
    {
      title: "Layered Model Architecture",
      text: "WingAgent orchestrates multiple narrow AI models: tone analysis, match scoring, and conversation flow.",
    },
    {
      title: "Real-Time Adaptation",
      text: "Each message recalibrates future replies through reinforcement signals from user corrections.",
    },
    {
      title: "Human-Safe Filters",
      text: "Before sending, every AI message passes a contextual compliance and tone audit layer.",
    },
    {
      title: "Scalable Cloud Functions",
      text: "All processing runs on transient serverless nodes—no persistent logs, no shared state.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="py-28 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl font-bold mb-3">Technology</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The intelligence behind WingAgent is engineered for discretion,
          modularity, and control.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h2 className="text-xl font-semibold text-fuchsia-400 mb-2">
              {f.title}
            </h2>
            <p className="text-slate-300 text-sm">{f.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}