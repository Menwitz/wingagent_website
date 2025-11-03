"use client";

export default function FeaturedIn() {
  const logos = [
    { name: "TechCrunch" },
    { name: "Forbes" },
    { name: "GQ" },
    { name: "VICE" },
    { name: "Men’s Health" },
  ];

  return (
    <section id="featured" className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-8">
          Trusted by professionals in tech, finance, consulting, and creative fields.
        </h2>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 pointer-events-none z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="mx-10 flex h-12 items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {renderLogo(logo.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderLogo(name) {
  switch (name) {
    case "TechCrunch":
      return (
        <svg
          viewBox="0 0 512 512"
          width="100"
          height="32"
          aria-label="TechCrunch"
          className="fill-white"
        >
          <title>TechCrunch</title>
          <rect x="0" y="0" width="150" height="150" />
          <rect x="150" y="50" width="50" height="50" />
        </svg>
      );
    case "Forbes":
      return (
        <svg
          width="100"
          height="32"
          viewBox="0 0 100 20"
          aria-label="Forbes"
          className="fill-white"
        >
          <title>Forbes</title>
          <text x="0" y="15" fontSize="14" fontWeight="bold">Forbes</text>
        </svg>
      );
    case "GQ":
      return (
        <svg width="80" height="32" viewBox="0 0 80 20" className="fill-white">
          <title>GQ</title>
          <text x="0" y="15" fontSize="14" fontWeight="bold">GQ</text>
        </svg>
      );
    case "VICE":
      return (
        <svg width="100" height="32" viewBox="0 0 100 20" className="fill-white">
          <title>VICE</title>
          <text x="0" y="15" fontSize="14" fontWeight="bold">VICE</text>
        </svg>
      );
    case "Men’s Health":
      return (
        <svg width="130" height="32" viewBox="0 0 130 20" className="fill-white">
          <title>Men’s Health</title>
          <text x="0" y="15" fontSize="14" fontWeight="bold">Men’s Health</text>
        </svg>
      );
    default:
      return null;
  }
}