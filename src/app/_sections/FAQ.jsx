"use client";

import { useState } from "react";
import FAQItem from "../_components/FAQItem";

const faqs = [
  {
    q: "How much control do I have over WingAgent?",
    a: `You stay in complete control at every stage. WingAgent never sends a message you haven’t approved in setup or tone training. You can pause, edit, or override replies in real time. Every action is transparent in your dashboard — think of it as a co-pilot, not a replacement.`,
  },
  {
    q: "Which dating apps does WingAgent connect to?",
    a: `The platform currently supports Tinder, Bumble, and Hinge natively. Each connection uses encrypted authentication and a secure sandbox, keeping your accounts fully isolated. Future integrations with Feeld and Raya are already in private beta.`,
  },
  {
    q: "Is this kind of automation allowed by dating platforms?",
    a: `WingAgent operates in a gray zone that prioritizes human oversight and consent. We don’t spam or mass-swipe — everything runs under user-controlled limits with behavioral throttling that mimics natural use. You decide how aggressive or conservative your automation should be.`,
  },
  {
    q: "Will the AI sound like me — or like a chatbot?",
    a: `Every user trains a personal communication model during onboarding. It learns your tone, pacing, and humor from examples, then adapts dynamically over time. Messages read as if you wrote them — not generic templates. It’s subtle, emotionally aware, and context-driven.`,
  },
  {
    q: "Can I pause or adjust automation whenever I want?",
    a: `Yes. You can toggle automation off instantly, limit hours of activity, or restrict conversations to warm-up only. WingAgent respects your availability — no surprises, no background messaging when you’re offline.`,
  },
  {
    q: "How long does setup take before it starts working?",
    a: `Average onboarding time is under five minutes. You complete a short tone questionnaire, link your apps, and select engagement preferences. Once saved, your personal AI profile activates automatically and starts observing real matches within minutes.`,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative z-10 bg-gradient-to-b from-slate-950 to-slate-900 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">FAQ</h2>
        <p className="mt-3 text-slate-400 text-base">
          Everything you want to know before letting an AI handle your matches.
        </p>

        <div className="mt-14 space-y-6 text-left">
          {faqs.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}