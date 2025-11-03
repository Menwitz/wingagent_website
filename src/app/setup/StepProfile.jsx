"use client";

import { useEffect, useState } from "react";

const bodyTypes = ["athletic", "fit", "slim", "average", "curvy", "muscular"];
const hairColors = ["black", "brown", "blonde", "red", "gray", "other"];
const eyeColors = ["brown", "blue", "green", "hazel", "gray", "other"];
const orientations = ["straight", "gay", "bi", "pan", "queer"];
const genders = ["male", "female", "non-binary"];

export default function StepProfile({ value, onChange, onBack, onNext }) {
  const [v, setV] = useState(value);

  useEffect(() => onChange(v), [v, onChange]);

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

  const setInterest = (txt) => {
    const t = txt.trim();
    if (!t) return;
    if (!v.about.interests.includes(t)) set("about.interests", [...v.about.interests, t]);
  };

  const setPhoto = (idx, url) => {
    const photos = [...v.photos];
    photos[idx] = url;
    set("photos", photos);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Your profile</h3>
      <p className="text-slate-300 text-center">We collect what dating apps request plus a few traits to optimize your profile.</p>

      {/* Basics */}
      <div className="grid sm:grid-cols-4 gap-4">
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Name"
          value={v.basics.name} onChange={(e) => set("basics.name", e.target.value)} />
        <input type="date" className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Birthday"
          value={v.basics.birthday} onChange={(e) => set("basics.birthday", e.target.value)} />
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Age"
          value={v.basics.age} onChange={(e) => set("basics.age", e.target.value)} />
        <select className="rounded-lg bg-slate-900 border border-white/20 p-3"
          value={v.basics.gender} onChange={(e) => set("basics.gender", e.target.value)}>
          {genders.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <select className="rounded-lg bg-slate-900 border border-white/20 p-3"
          value={v.basics.orientation} onChange={(e) => set("basics.orientation", e.target.value)}>
          {orientations.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="City"
          value={v.location.city} onChange={(e) => set("location.city", e.target.value)} />
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Country"
          value={v.location.country} onChange={(e) => set("location.country", e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 items-center">
        <label className="text-slate-300">Search radius: {v.location.radiusKm} km</label>
        <input type="range" min="1" max="100" value={v.location.radiusKm}
          onChange={(e) => set("location.radiusKm", Number(e.target.value))} className="col-span-2 accent-fuchsia-600" />
      </div>

      {/* Work/Edu */}
      <div className="grid sm:grid-cols-3 gap-4">
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Job title"
          value={v.workEdu.title} onChange={(e) => set("workEdu.title", e.target.value)} />
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Company"
          value={v.workEdu.company} onChange={(e) => set("workEdu.company", e.target.value)} />
        <input className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="School"
          value={v.workEdu.school} onChange={(e) => set("workEdu.school", e.target.value)} />
      </div>

      {/* About + interests */}
      <textarea className="w-full h-28 rounded-lg bg-slate-900 border border-white/20 p-3"
        placeholder="Short bio"
        value={v.about.bio} onChange={(e) => set("about.bio", e.target.value)} />
      <div className="flex gap-2 flex-wrap">
        {v.about.interests.map((it) => (
          <span key={it} className="rounded-full border border-white/20 px-3 py-1 text-sm">{it}</span>
        ))}
      </div>
      <div className="flex gap-3">
        <input id="interestInput" className="flex-1 rounded-lg bg-slate-900 border border-white/20 p-3" placeholder="Add interest (enter)"
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); setInterest(e.currentTarget.value); e.currentTarget.value = ""; } }} />
        <button type="button" className="rounded-lg border border-white/20 px-4"
          onClick={() => { const el = document.getElementById("interestInput"); setInterest(el.value); el.value = ""; }}>Add</button>
      </div>

      {/* Physical */}
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-2">
          <label className="text-slate-300 text-sm">Height: {v.physical.heightCm} cm</label>
          <input type="range" min="140" max="210" value={v.physical.heightCm}
            onChange={(e) => set("physical.heightCm", Number(e.target.value))}
            className="w-full accent-fuchsia-600" />
        </div>
        <select className="rounded-lg bg-slate-900 border border-white/20 p-3"
          value={v.physical.bodyType} onChange={(e) => set("physical.bodyType", e.target.value)}>
          {bodyTypes.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <select className="rounded-lg bg-slate-900 border border-white/20 p-3"
          value={v.physical.hairColor} onChange={(e) => set("physical.hairColor", e.target.value)}>
          {hairColors.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select className="rounded-lg bg-slate-900 border border-white/20 p-3"
          value={v.physical.eyeColor} onChange={(e) => set("physical.eyeColor", e.target.value)}>
          {eyeColors.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <select className="rounded-lg bg-slate-900 border border-white/20 p-3"
          value={v.physical.facialHair} onChange={(e) => set("physical.facialHair", e.target.value)}>
          {["none", "stubble", "beard", "mustache"].map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
        <label className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
          <input type="checkbox" checked={v.physical.tattoos} onChange={(e) => set("physical.tattoos", e.target.checked)} />
          Tattoos
        </label>
        <label className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
          <input type="checkbox" checked={v.physical.piercings} onChange={(e) => set("physical.piercings", e.target.checked)} />
          Piercings
        </label>
      </div>

      {/* Photos (URLs for now) */}
      <div>
        <p className="text-slate-300 mb-2">Photo URLs (6)</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {v.photos.map((url, i) => (
            <input key={i} className="rounded-lg bg-slate-900 border border-white/20 p-3" placeholder={`Photo ${i + 1} URL`}
              value={url} onChange={(e) => setPhoto(i, e.target.value)} />
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <button onClick={onBack} className="text-slate-300 hover:text-white">Back</button>
        <button onClick={onNext} className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2">Next</button>
      </div>
    </div>
  );
}