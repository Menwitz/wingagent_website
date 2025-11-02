export const metadata = {
  title: "Privacy Policy — WingAgent",
  description: "Learn how WingAgent protects your data and ensures full privacy for users.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At WingAgent, your privacy is central. We collect minimal personal data and
        process it only to operate the AI matching service.
      </p>
      <h2 className="text-xl text-white mt-8 mb-2">1. Data We Collect</h2>
      <p>Account credentials, onboarding preferences, and limited chat logs to train
         your private tone model. No raw messages are shared externally.</p>
      <h2 className="text-xl text-white mt-8 mb-2">2. How We Use Data</h2>
      <p>Used solely to deliver automated swiping, message suggestions, and analytics
         visible only to you.</p>
      <h2 className="text-xl text-white mt-8 mb-2">3. Security</h2>
      <p>All sensitive information is encrypted in transit and at rest. Tokens are
         stored in isolated containers per user.</p>
      <h2 className="text-xl text-white mt-8 mb-2">4. Your Rights</h2>
      <p>You may delete all stored data or export your records anytime via dashboard settings.</p>
      <h2 className="text-xl text-white mt-8 mb-2">5. Contact</h2>
      <p>Email <a href="mailto:privacy@wingagent.com" className="text-fuchsia-400 hover:underline">privacy@wingagent.com</a> for any concerns.</p>
    </main>
  );
}