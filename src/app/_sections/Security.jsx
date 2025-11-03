export default function Security() {
  const points = [
    { title: "Encrypted by default", text: "All messages and preferences stay private—never sold or shared." },
    { title: "Proxy-isolated automation", text: "Each session runs in a sealed environment to protect your dating profiles." },
    { title: "You control the switch", text: "Pause, delete, or export your data anytime from your dashboard." },
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Private by design.</h2>
        <p className="text-slate-400 mb-12">Privacy and discretion are not features—they’re foundations.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl">
              <h3 className="font-semibold mb-2 text-fuchsia-400">{p.title}</h3>
              <p className="text-slate-300 text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}