"use client";

import { useState, useEffect } from "react";

export default function StepApps({ value, onChange, onBack, onNext }) {
  const [apps, setApps] = useState(value.apps);
  const [loginMethods, setLoginMethods] = useState(value.loginMethods);

  useEffect(() => {
    onChange({ apps, loginMethods });
  }, [apps, loginMethods, onChange]);

  const toggle = (k) => setApps((a) => ({ ...a, [k]: !a[k] }));

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Choose platforms to manage</h3>
      <p className="text-slate-300 text-center">
        Pick the apps where WingAgent should automate. You can connect credentials later.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {["tinder", "bumble", "hinge", "feeld", "duo"].map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => toggle(k)}
            className={`capitalize rounded-xl border p-4 text-center transition ${
              apps[k] ? "border-fuchsia-500 bg-fuchsia-500/10" : "border-white/20 hover:bg-white/5"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <input
          className="rounded-lg bg-slate-900 border border-white/20 p-3"
          placeholder="Phone (optional)"
          value={loginMethods.phone}
          onChange={(e) => setLoginMethods((s) => ({ ...s, phone: e.target.value }))}
        />
        <input
          className="rounded-lg bg-slate-900 border border-white/20 p-3"
          placeholder="Email (optional)"
          value={loginMethods.email}
          onChange={(e) => setLoginMethods((s) => ({ ...s, email: e.target.value }))}
        />
        <input
          className="rounded-lg bg-slate-900 border border-white/20 p-3"
          placeholder="Token (optional)"
          value={loginMethods.token}
          onChange={(e) => setLoginMethods((s) => ({ ...s, token: e.target.value }))}
        />
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="text-slate-300 hover:text-white">Back</button>
        <button
          onClick={onNext}
          className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}