"use client";
import Image from "next/image";

export default function PhoneMock({ app, src, style }) {
  const appColors = {
    tinder: "from-pink-600 to-red-500",
    bumble: "from-yellow-400 to-amber-500",
    hinge: "from-purple-500 to-indigo-500",
  };

  return (
    <div
      className={`relative rounded-[2.5rem] border-[6px] border-black shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden bg-gradient-to-b ${appColors[app]} ${style}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-10" />
      <div className="overflow-hidden rounded-[2rem] bg-slate-900">
        <Image
          src={src}
          alt={`${app} preview`}
          width={300}
          height={650}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}