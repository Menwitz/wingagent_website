import Navbar from "../_components/MinimalNavbar";
import Footer from "../_components/MinimalFooter";

export const metadata = {
  title: "Contact Us — WingAgent",
  description: "Get in touch with the WingAgent team for questions, partnerships, or support.",
  keywords: ["contact WingAgent", "support", "AI dating assistant help"],
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-slate-300">
      <Navbar />
      <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
      <p className="mb-8">
        We’re here to help. For product inquiries, media partnerships, or support,
        use the form below or email <a href="mailto:support@wingagent.com" className="text-fuchsia-400 hover:underline">support@wingagent.com</a>.
      </p>

      <form action="mailto:support@wingagent.com" method="post" encType="text/plain" className="space-y-5">
        <input type="text" name="name" placeholder="Your name" required
          className="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500" />
        <input type="email" name="email" placeholder="Your email" required
          className="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500" />
        <textarea name="message" placeholder="Message" rows="6" required
          className="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500"></textarea>
        <button type="submit"
          className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 py-3 text-white font-medium hover:opacity-90 transition-all">
          Send message
        </button>
      </form>
      <Footer />
    </main>
  );
}