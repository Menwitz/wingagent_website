export const metadata = {
  title: "Press — WingAgent",
  description:
    "Official press resources, brand kit, and media contact for WingAgent.",
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="py-28 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl font-bold mb-3">Press & Media</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Approved logos, brand materials, and contact information for verified
          media outlets.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Brand Assets</h2>
          <p className="text-slate-400">
            Use the WingAgent logo and colors as provided. No modifications,
            gradients, or drop-shadows beyond official style guides.
          </p>
          <a
            href="/brand-kit.zip"
            className="inline-block mt-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2"
          >
            Download Brand Kit
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Press Contact</h2>
          <p className="text-slate-400">
            For interviews, statements, or data requests, contact our media
            relations team at{" "}
            <a
              href="mailto:press@wingagent.ai"
              className="text-fuchsia-400 underline"
            >
              press@wingagent.ai
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}