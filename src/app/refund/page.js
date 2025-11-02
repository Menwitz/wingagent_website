export const metadata = {
  title: "Refund Policy — WingAgent",
  description: "Understand WingAgent's refund terms and satisfaction guarantee.",
};

export default function RefundPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-6">Refund Policy</h1>
      <p className="mb-4">
        We want every user satisfied with WingAgent. If you experience a technical
        issue or billing error, contact us within 7 days of charge for a full refund.
      </p>
      <h2 className="text-xl text-white mt-8 mb-2">1. Eligibility</h2>
      <p>Refunds apply only to first-time subscriptions or accidental duplicate payments.</p>
      <h2 className="text-xl text-white mt-8 mb-2">2. Process</h2>
      <p>Email <a href="mailto:billing@wingagent.com" className="text-fuchsia-400 hover:underline">billing@wingagent.com</a>
         with your order ID and reason. Approved refunds return to the original payment method.</p>
      <h2 className="text-xl text-white mt-8 mb-2">3. Timeframe</h2>
      <p>Refunds are typically processed within 5 business days.</p>
    </main>
  );
}