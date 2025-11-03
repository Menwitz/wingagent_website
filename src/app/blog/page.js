export const metadata = {
  title: "Blog — WingAgent",
  description:
    "Insights and analysis on AI, privacy, and the evolution of modern dating automation.",
};

const posts = [
  {
    title: "Discretion in the Age of Automation",
    date: "Oct 10, 2025",
    excerpt:
      "Why privacy-first AI matters in digital relationships and how WingAgent keeps human intent intact.",
  },
  {
    title: "From Swipes to Signals",
    date: "Sep 22, 2025",
    excerpt:
      "A breakdown of how our AI interprets conversation context to identify genuine interest before handoff.",
  },
  {
    title: "The Future of Dating AI",
    date: "Aug 8, 2025",
    excerpt:
      "Exploring the ethics, data control, and emotional intelligence challenges behind matchmaking algorithms.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="py-28 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-4xl font-bold mb-3">WingAgent Journal</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Essays and briefings on AI, human behavior, and private automation.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {posts.map((p, i) => (
          <article
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
          >
            <p className="text-xs text-slate-400 mb-2">{p.date}</p>
            <h2 className="text-lg font-semibold mb-2 text-fuchsia-400">{p.title}</h2>
            <p className="text-slate-300 text-sm mb-4">{p.excerpt}</p>
            <a
              href="#"
              className="text-indigo-400 hover:text-fuchsia-400 text-sm"
            >
              Read more →
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}