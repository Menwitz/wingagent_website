"use client";

export default function FinalCTA() {
  return (
    <section
      id="final"
      className="relative z-10 overflow-hidden py-32 text-center bg-slate-950"
    >
      {/* animated background */}
      <div className="absolute inset-0 -z-10 animate-gradientMotion bg-[radial-gradient(circle_at_30%_30%,#f000b8_0%,transparent_40%),radial-gradient(circle_at_70%_70%,#4f46e5_0%,transparent_40%)] blur-3xl opacity-40" />

      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
          Ready to let WingAgent work for you?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Join thousands using AI to reclaim their time and meet smarter.
        </p>
        <a
          href="#"
          className="mt-10 inline-block rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-10 py-4 text-lg font-medium text-white shadow-[0_0_30px_rgba(240,0,184,0.25)] transition-all hover:shadow-[0_0_50px_rgba(240,0,184,0.4)] hover:scale-[1.03]"
        >
          Sign up now
        </a>
      </div>
    </section>
  );
}