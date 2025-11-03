export const metadata = {
  title: "About — WingAgent",
  description:
    "The private AI concierge redefining modern dating through secure automation and authenticity.",
  alternates: { canonical: "https://wingagent.ai/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="py-28 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl font-bold mb-3">About WingAgent</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Born from the frustration of endless swiping, WingAgent was built to
          restore intention, privacy, and time to modern dating.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Purpose</h2>
          <p className="text-slate-400">
            WingAgent operates as a discreet automation concierge, using
            tailored AI to manage dating app interactions while you retain full
            control. Our aim is efficiency and authenticity—never deception.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="space-y-3 text-slate-400">
            <li>• Discretion before exposure</li>
            <li>• Consent before automation</li>
            <li>• Transparency in every algorithmic decision</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Operated By</h2>
          <p className="text-slate-400">
            WingAgent is a product of Public Affairs Analytics LLC — a
            data-intelligence firm specializing in secure automation and
            privacy-first AI infrastructure.
          </p>
        </div>
      </section>
    </main>
  );
}

