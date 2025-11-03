"use client";

export default function StepWelcome({ onNext }) {
  return (
    <div className="text-center px-2">
      <h2 className="text-3xl font-bold mb-3">Welcome to WingAgent</h2>
      <p className="text-slate-300 max-w-2xl mx-auto">
        We’ll configure your profile, preferences, and conversation style so your AI wingman
        can automate discovery and warmup across Tinder, Bumble, and Hinge.
      </p>
      <div className="mt-8">
        <button
          onClick={onNext}
          className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3 font-medium btn-shine btn-magnetic"
        >
          Begin Setup
        </button>
      </div>
      <p className="text-xs text-slate-500 mt-4">
        You stay in control. Approve handoffs and pause automation anytime.
      </p>
    </div>
  );
}