"use client";

const APPS = [
  { key: "tinder",  label: "tinder",  src: "/apps/tinder.svg",  status: "live" },
  { key: "okcupid", label: "okcupid", src: "/apps/okcupid.svg", status: "soon" },
  { key: "bumble",  label: "bumble",  src: "/apps/bumble.svg",  status: "live" },
  { key: "hinge",   label: "Hinge",   src: "/apps/hinge.svg",   status: "live" },
  { key: "happn",   label: "happn",   src: "/apps/happn.svg",   status: "soon" },
  { key: "feeld",   label: "FEELD",   src: "/apps/feeld.svg",   status: "soon" },
];

export default function SupportedApps() {
  return (
    <section id="apps" className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-wider text-slate-400">
          Works with the apps you already use
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {APPS.map((a) => (
            <LogoBadge key={a.key} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoBadge({ src, label, status }) {
  return (
    <div className="relative h-8 min-w-[96px] flex items-center justify-center">
      {/* “Soon” pill */}
      {status === "soon" && (
        <span className="absolute -top-3 right-0 rounded-full border border-white/15 bg-white/10 px-2 py-[2px] text-[10px] text-slate-200">
          Soon
        </span>
      )}

      {/* Logo (expects monochrome SVGs placed under /public/apps) */}
      <img
        src={src}
        alt={label}
        className="h-6 w-auto opacity-90 invert dark:invert-0"
        onError={(e) => {
          // fallback to text if an asset is missing
          e.currentTarget.style.display = "none";
          const sib = e.currentTarget.nextElementSibling;
          if (sib) sib.classList.remove("hidden");
        }}
      />
      <span className="hidden text-slate-200 font-semibold">{label}</span>
    </div>
  );
}