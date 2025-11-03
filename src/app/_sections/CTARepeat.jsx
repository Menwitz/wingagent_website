export default function CTARepeat() {
  return (
    <section
      id="cta-repeat"
      className="relative py-28 bg-gradient-to-r from-fuchsia-700/20 via-indigo-700/20 to-transparent text-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-600/20 via-indigo-600/20 to-transparent blur-3xl" />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to see how your WingAgent performs?
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Join the private beta and experience human-real automation across
          Tinder, Bumble, and Hinge—built entirely around your preferences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/auth"
            className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-[0_0_30px_rgba(240,0,184,0.25)] hover:shadow-[0_0_45px_rgba(240,0,184,0.4)] transition"
          >
            Start Setup
          </a>
          <a
            href="#how"
            className="rounded-full border border-white/20 px-8 py-3 text-lg font-medium text-slate-200 hover:bg-white/10 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}