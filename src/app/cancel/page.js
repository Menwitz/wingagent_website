export const metadata = {
  title: "Payment Cancelled — WingAgent",
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-3xl font-bold text-fuchsia-500 mb-3">
        Payment Cancelled
      </h1>
      <p className="text-slate-400 max-w-md">
        Your payment was not completed.  
        You can retry or explore other plans at any time.
      </p>
      <a
        href="/#pricing"
        className="mt-8 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3 font-semibold hover:shadow-[0_0_25px_rgba(240,0,184,0.3)] transition"
      >
        Back to Pricing
      </a>
    </main>
  );
}