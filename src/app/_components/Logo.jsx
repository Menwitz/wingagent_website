export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 64 64" role="img" aria-label="WingAgent">
        <defs>
          <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f000b8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="#0b1021" />
        <path d="M14 46c8-8 14-16 18-26 2 6 7 12 18 18-6 2-11 4-15 8-3-3-7-5-21 0z" fill="url(#lg)" />
        <circle cx="44" cy="18" r="5" fill="url(#lg)" opacity="0.9" />
      </svg>
      <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
        WingAgent
      </span>
    </div>
  );
}