"use client";

import Image from "next/image";

export default function WhyWingAgent() {
  return (
    <section className="bg-[#0B0B10] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Why WingAgent?
        </h2>
        <p className="text-slate-400 text-lg mb-12">
          Precision. Privacy. Performance.
        </p>

        <div className="grid md:grid-cols-6 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-3 bg-[#151522] rounded-2xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">
              Human-real conversation style
            </h3>
            <p className="text-slate-400 text-sm">
              WingAgent mirrors your humor, rhythm, and conversational
              boundaries so every message feels authentically yours.
            </p>
            <div className="mt-6">
              <Image
                src="/images/conversation-style.png"
                alt="Conversation illustration"
                width={300}
                height={150}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-3 bg-[#151522] rounded-2xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">
              AI-driven match learning
            </h3>
            <p className="text-slate-400 text-sm">
              Each chat trains the system to predict what works for you —
              refining tone, timing, and reply depth automatically.
            </p>
            <div className="mt-6">
              <Image
                src="/images/ai-learning.png"
                alt="AI learning visualization"
                width={300}
                height={150}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-2 bg-[#151522] rounded-2xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">
              Unified multi-app automation
            </h3>
            <p className="text-slate-400 text-sm">
              Operate Tinder, Bumble, and Hinge from one dashboard. One
              interface, complete control.
            </p>
            <div className="mt-6">
              <Image
                src="/images/multi-app.png"
                alt="Dashboard integration graphic"
                width={250}
                height={120}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-[#151522] rounded-2xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">
              Safety & privacy isolation
            </h3>
            <p className="text-slate-400 text-sm">
              All tokens and credentials stay sandboxed with encryption. Your
              personal data never leaves your private environment.
            </p>
            <div className="mt-6">
              <Image
                src="/images/privacy-lock.png"
                alt="Privacy lock image"
                width={250}
                height={120}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="md:col-span-2 bg-[#151522] rounded-2xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">
              Dedicated match funnel reporting
            </h3>
            <p className="text-slate-400 text-sm">
              Track your conversion path visually — from swipes to hand-offs —
              to understand what drives real connections.
            </p>
            <div className="mt-6">
              <Image
                src="/images/funnel-report.png"
                alt="Analytics chart"
                width={250}
                height={120}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          {/* Card 6 */}
          <div className="md:col-span-6 bg-[#151522] rounded-2xl p-8 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-2">Onboarding in minutes</h3>
            <p className="text-slate-400 text-sm">
              Answer a few smart prompts and you’re live in under five minutes.
              No manuals. No friction.
            </p>
            <div className="mt-6">
              <Image
                src="/images/onboarding.png"
                alt="Fast setup illustration"
                width={500}
                height={200}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}