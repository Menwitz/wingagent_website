"use client";

import { useEffect, useState } from "react";

const BODY_TYPES = ["any", "athletic", "fit", "slim", "average", "curvy", "muscular"];
const COLORS = ["any", "black", "brown", "blonde", "red", "gray", "other"];
const LIFESTYLE_CHOICES = ["no-preference", "yes", "no", "sometimes"];

export default function StepPreferences({ value, onChange, onBack, onNext }) {
  const [v, setV] = useState(value);

  useEffect(() => onChange(v), [v, onChange]);

  const toggle = (path, key) => {
    setV((prev) => {
      const copy = structuredClone(prev);
      const arr = copy[path];
      if (arr.includes(key)) copy[path] = arr.filter((x) => x !== key);
      else copy[path] = [...arr, key];
      return copy;
    });
  };

  const set = (path, val) => {
    setV((prev) => {
      const copy = structuredClone(prev);
      const parts = path.split(".");
      let cur = copy;
      for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
      cur[parts[parts.length - 1]] = val;
      return copy;
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Match preferences</h3>
      <p className="text-slate-300 text-center">We’ll only swipe on what fits your tastes and dealbreakers.</p>

      {/* Gender & age */}
      <div className="grid sm:grid-cols-3 gap-4">
        {["men", "women", "nonbinary"].map((g) => (
          <label key={g} className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
            <input
              type="checkbox"
              checked={v.interestedIn[g]}
              onChange={(e) => set(`interestedIn.${g}`, e.target.checked)}
            />
            Interested in {g}
          </label>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-4 items-center">
        <div className="sm:col-span-2">
          <label className="text-slate-300 text-sm">
            Age range: {v.ageRange.min}–{v.ageRange.max}
          </label>
          <div className="flex gap-4">
            <input type="range" min="18" max="70" value={v.ageRange.min}
              onChange={(e) => set("ageRange.min", Number(e.target.value))} className="accent-fuchsia-600 w-full" />
            <input type="range" min="18" max="70" value={v.ageRange.max}
              onChange={(e) => set("ageRange.max", Number(e.target.value))} className="accent-indigo-600 w-full" />
          </div>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Distance: {v.distanceKm} km</label>
          <input type="range" min="1" max="100" value={v.distanceKm}
            onChange={(e) => set("distanceKm", Number(e.target.value))}
            className="w-full accent-fuchsia-600" />
        </div>
      </div>

      {/* Physical filters */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-slate-300 text-sm">Height: {v.physical.heightMinCm}–{v.physical.heightMaxCm} cm</label>
          <div className="flex gap-4">
            <input type="range" min="140" max="210" value={v.physical.heightMinCm}
              onChange={(e) => set("physical.heightMinCm", Number(e.target.value))} className="w-full accent-fuchsia-600" />
            <input type="range" min="140" max="210" value={v.physical.heightMaxCm}
              onChange={(e) => set("physical.heightMaxCm", Number(e.target.value))} className="w-full accent-indigo-600" />
          </div>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Body types</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {BODY_TYPES.map((b) => (
              <button key={b} type="button"
                onClick={() => toggle("physical.bodyTypes", b)}
                className={`text-sm rounded-full border px-3 py-1 ${v.physical.bodyTypes.includes(b) ? "border-fuchsia-500 bg-fuchsia-500/10" : "border-white/20"}`}>
                {b}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Hair colors</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {COLORS.map((c) => (
              <button key={c} type="button"
                onClick={() => toggle("physical.hairColors", c)}
                className={`text-sm rounded-full border px-3 py-1 ${v.physical.hairColors.includes(c) ? "border-fuchsia-500 bg-fuchsia-500/10" : "border-white/20"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Eye colors</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {COLORS.map((c) => (
              <button key={c} type="button"
                onClick={() => toggle("physical.eyeColors", c)}
                className={`text-sm rounded-full border px-3 py-1 ${v.physical.eyeColors.includes(c) ? "border-fuchsia-500 bg-fuchsia-500/10" : "border-white/20"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lifestyle */}
      <div className="grid sm:grid-cols-4 gap-4">
        <div>
          <label className="text-slate-300 text-sm">Smoking</label>
          <select className="mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.lifestyle.smoking} onChange={(e) => set("lifestyle.smoking", e.target.value)}>
            {LIFESTYLE_CHOICES.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Drinking</label>
          <select className="mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.lifestyle.drinking} onChange={(e) => set("lifestyle.drinking", e.target.value)}>
            {LIFESTYLE_CHOICES.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Pets</label>
          <select className="mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.lifestyle.pets} onChange={(e) => set("lifestyle.pets", e.target.value)}>
            {LIFESTYLE_CHOICES.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Religion</label>
          <select className="mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.lifestyle.religion} onChange={(e) => set("lifestyle.religion", e.target.value)}>
            {["no-preference","agnostic","atheist","christian","muslim","jewish","hindu","buddhist","other"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
      </div>

      {/* Interests / dealbreakers */}
      <div className="grid sm:grid-cols-2 gap-4">
        <textarea className="rounded-lg bg-slate-900 border border-white/20 p-3 h-24"
          placeholder="Interests to prefer (comma separated)"
          value={v.interests.join(", ")}
          onChange={(e) => set("interests", e.target.value.split(",").map((t)=>t.trim()).filter(Boolean))} />
        <textarea className="rounded-lg bg-slate-900 border border-white/20 p-3 h-24"
          placeholder="Dealbreakers to avoid (comma separated)"
          value={v.dealbreakers.join(", ")}
          onChange={(e) => set("dealbreakers", e.target.value.split(",").map((t)=>t.trim()).filter(Boolean))} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
          <input type="checkbox" checked={v.boosts.verifiedOnly}
            onChange={(e) => set("boosts.verifiedOnly", e.target.checked)} />
          Prefer verified profiles
        </label>
        <label className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
          <input type="checkbox" checked={v.boosts.preferNewUsers}
            onChange={(e) => set("boosts.preferNewUsers", e.target.checked)} />
          Prefer new users
        </label>
      </div>

      <div className="flex justify-between pt-2">
        <button onClick={onBack} className="text-slate-300 hover:text-white">Back</button>
        <button onClick={onNext} className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2">Next</button>
      </div>
    </div>
  );
}