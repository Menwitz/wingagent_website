"use client";

import { useEffect, useState } from "react";

export default function StepPersonality({ value, onChange, onBack, onFinish }) {
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

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Personality & communication</h3>
      <p className="text-slate-300 text-center">Tune how WingAgent talks and when it escalates to you.</p>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-slate-300 text-sm">Humor style</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.humorStyle} onChange={(e) => set("humorStyle", e.target.value)}>
            {["dry","witty","goofy","sarcastic","none"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Flirting level</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.flirtingLevel} onChange={(e) => set("flirtingLevel", e.target.value)}>
            {["subtle","balanced","bold"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Message length</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.messageLength} onChange={(e) => set("messageLength", e.target.value)}>
            {["short","moderate","detailed"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Tone warmth</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.toneWarmth} onChange={(e) => set("toneWarmth", e.target.value)}>
            {["chill","professional","playful"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">Response time target</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.responseTime} onChange={(e) => set("responseTime", e.target.value)}>
            {["instant","within-10m","within-1h","within-6h"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
        <div>
          <label className="text-slate-300 text-sm">AI confidence mode</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.confidenceMode} onChange={(e) => set("confidenceMode", e.target.value)}>
            {["cautious","balanced","assertive"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label className="text-slate-300 text-sm">Sensitivity to edgy humor: {v.sensitivity}/10</label>
          <input type="range" min="1" max="10" value={v.sensitivity}
            onChange={(e) => set("sensitivity", Number(e.target.value))}
            className="w-full accent-fuchsia-600" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
            <input type="checkbox" checked={v.boundaries.sexualTone}
              onChange={(e) => set("boundaries.sexualTone", e.target.checked)} />
            Allow sexual tone
          </label>
          <label className="flex items-center gap-2 border border-white/20 rounded-lg p-3">
            <input type="checkbox" checked={v.boundaries.politicalTalk}
              onChange={(e) => set("boundaries.politicalTalk", e.target.checked)} />
            Allow political talk
          </label>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-slate-300 text-sm">Emoji usage</label>
          <select className="w-full mt-2 rounded-lg bg-slate-900 border border-white/20 p-3"
            value={v.emojiUsage} onChange={(e) => set("emojiUsage", e.target.value)}>
            {["none","few","frequent"].map((x)=> <option key={x}>{x}</option>)}
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <button onClick={onBack} className="text-slate-300 hover:text-white">Back</button>
        <button onClick={onFinish} className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-2">
          Finish Setup
        </button>
      </div>
    </div>
  );
}