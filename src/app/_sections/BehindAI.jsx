export default function BehindAI() {
  const features = [
    { title: "Multi-model orchestration", text: "Tone, flow, and match-scoring models collaborate for natural conversation." },
    { title: "Isolated inference", text: "Every decision runs in a temporary environment—no chat data stored." },
    { title: "Adaptive refinement", text: "Performance improves quietly as your preferences evolve." },
  ];

  return (
    <section id="behindai" className="py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Behind the AI.</h2>
          <p className="text-slate-400 mb-8">
            Beneath every message lies a network of specialized models tuned for discretion,
            empathy, and efficiency. WingAgent never reuses data—each client runs on their own orbit.
          </p>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <li key={i} className="border-l-2 border-fuchsia-500 pl-4">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-blue-600 blur-3xl opacity-30 absolute" />
          <div className="relative w-64 h-64 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-center text-slate-200">
            <span>Private AI Core</span>
          </div>
        </div>
      </div>
    </section>
  );
}