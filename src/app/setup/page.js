"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

import StepWelcome from "./StepWelcome";
import StepApps from "./StepApps";
import StepProfile from "./StepProfile";
import StepPreferences from "./StepPreferences";
import StepPersonality from "./StepPersonality";

const STORAGE_KEY = "wingagent.setup";

const variants = {
  in: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -40 },
};

export default function SetupPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [form, setForm] = useState({
    // Step 2 — apps
    apps: { tinder: false, bumble: false, hinge: false, feeld: false, duo: false },
    loginMethods: { phone: "", email: "", token: "" },

    // Step 3 — personal profile
    profile: {
      basics: { name: "", birthday: "", age: "", gender: "male", orientation: "straight" },
      location: { city: "", country: "", radiusKm: 25 },
      workEdu: { title: "", company: "", school: "" },
      about: { bio: "", interests: [] },
      physical: {
        heightCm: 180,
        bodyType: "athletic",
        hairColor: "brown",
        eyeColor: "brown",
        facialHair: "none",
        tattoos: false,
        piercings: false,
      },
      photos: ["", "", "", "", "", ""], // URLs for now
    },

    // Step 4 — preferences (partner filters)
    preferences: {
      interestedIn: { men: false, women: true, nonbinary: false },
      ageRange: { min: 22, max: 36 },
      distanceKm: 25,
      physical: {
        heightMinCm: 155,
        heightMaxCm: 200,
        bodyTypes: ["athletic", "fit", "slim"],
        hairColors: ["any"],
        eyeColors: ["any"],
      },
      lifestyle: {
        smoking: "no-preference",
        drinking: "social",
        pets: "no-preference",
        religion: "no-preference",
      },
      interests: [],
      dealbreakers: [],
      boosts: { verifiedOnly: false, preferNewUsers: false },
    },

    // Step 5 — personality & communication
    personality: {
      humorStyle: "witty",
      flirtingLevel: "balanced",
      messageLength: "moderate",
      toneWarmth: "playful",
      responseTime: "within-10m",
      boundaries: { sexualTone: false, politicalTalk: false },
      confidenceMode: "balanced",
      emojiUsage: "few",
      sensitivity: 6,
    },
  });

  // Load saved progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.form) setForm(parsed.form);
        if (parsed?.step) setStep(parsed.step);
      }
    } catch {}
  }, []);

  // Persist on change (debounced-ish)
  useEffect(() => {
    const id = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, form }));
    }, 150);
    return () => clearTimeout(id);
  }, [step, form]);

  const progressPct = useMemo(() => (step / totalSteps) * 100, [step]);

  const goNext = () => setStep((s) => Math.min(s + 1, totalSteps));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));
  const updateForm = (patch) => setForm((f) => ({ ...f, ...patch }));

  const finish = () => {
    // In real app: POST form to API to create persona + link accounts
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ step: totalSteps, form }));
    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />

      <section className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl rounded-3xl bg-white/10 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(240,0,184,0.15)] overflow-hidden">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Setup your WingAgent</h1>
            <span className="text-slate-400 text-sm">Step {step} of {totalSteps}</span>
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
            <motion.div
              className="h-full bg-gradient-to-r from-fuchsia-600 to-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>

          {/* Step content */}
          <div className="relative min-h-[420px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="s1"
                  variants={variants}
                  initial="in"
                  animate="center"
                  exit="out"
                  transition={{ duration: 0.3 }}
                >
                  <StepWelcome onNext={goNext} />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" variants={variants} initial="in" animate="center" exit="out" transition={{ duration: 0.3 }}>
                  <StepApps
                    value={{ apps: form.apps, loginMethods: form.loginMethods }}
                    onChange={(v) => updateForm(v)}
                    onBack={goBack}
                    onNext={goNext}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" variants={variants} initial="in" animate="center" exit="out" transition={{ duration: 0.3 }}>
                  <StepProfile
                    value={form.profile}
                    onChange={(profile) => updateForm({ profile })}
                    onBack={goBack}
                    onNext={goNext}
                  />
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" variants={variants} initial="in" animate="center" exit="out" transition={{ duration: 0.3 }}>
                  <StepPreferences
                    value={form.preferences}
                    onChange={(preferences) => updateForm({ preferences })}
                    onBack={goBack}
                    onNext={goNext}
                  />
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="s5" variants={variants} initial="in" animate="center" exit="out" transition={{ duration: 0.3 }}>
                  <StepPersonality
                    value={form.personality}
                    onChange={(personality) => updateForm({ personality })}
                    onBack={goBack}
                    onFinish={finish}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}