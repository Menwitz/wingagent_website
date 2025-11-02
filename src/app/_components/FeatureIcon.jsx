export default function FeatureIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="fi" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f000b8"/>
          <stop offset="100%" stopColor="#4f46e5"/>
        </linearGradient>
      </defs>
      <path d="M4 12l5 5L20 6" fill="none" stroke="url(#fi)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}