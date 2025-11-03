export const metadata = {
  title: "Security — WingAgent",
  description:
    "Understand how WingAgent protects user data with encryption and isolated automation.",
};

export default function SecurityPage() {
  const pillars = [
    {
      title: "End-to-End Encryption",
      text: "All account credentials and chat data are encrypted at rest and in transit using AES-256 + TLS 1.3.",
    },
    {
      title: "Isolated Automation Nodes",
      text: "Every user operates in a sealed container with dedicated proxy routing. No cross-session leakage.",
    },
    {
      title: "Zero Data Resale",
      text: "WingAgent does not share or monetize user data. Period.",
    },
    {
      title: "Right to Delete",
      text: "At any moment you can delete all stored data directly from your dashboard.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="py-28 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl font-bold mb-3">Security & Privacy</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Privacy is structural, not optional. Here’s how we protect every user.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h2 className="text-xl font-semibold text-fuchsia-400 mb-2">
              {p.title}
            </h2>
            <p className="text-slate-300 text-sm">{p.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}