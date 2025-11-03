"use client";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Logo from "../_components/Logo";

export default function Terms() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20 text-slate-200 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="text-sm text-slate-400 mb-10">Effective Date: April 3, 2023</p>

        <p className="mb-6">
          By accessing or using WingAgent (“Service”), you enter a binding agreement
          with the entity operating the WingAgent platform (“Company”). These Terms of Use
          govern access to our automation suite, applications, and online services.
          Use of the Service constitutes acceptance of these terms in full.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Overview</h2>
        <p className="mb-6">
          WingAgent provides AI-assisted workflow automation for dating platforms.
          The Service assists users by automating parts of the online dating process
          including profile discovery, swipe actions, introductory conversation scripts,
          and match hand-off. The user retains full control over final engagement with
          matches and real-world actions.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. Eligibility</h2>
        <p className="mb-6">
          Users must be at least 18 years old, legally capable of entering agreements,
          and located in jurisdictions where this Service is permitted. Users represent
          that all connected dating accounts belong to them and are used in accordance
          with each platform’s policies.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. Account Responsibilities</h2>
        <p className="mb-6">
          Users agree to maintain accurate information, secure credentials, and prevent
          unauthorized access. Users are responsible for all activity under their accounts.
          Company may suspend or restrict access for violation of these terms.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. Acceptable Use</h2>
        <p className="mb-4">Users agree not to use the Service to:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Harass, deceive, threaten, or exploit individuals</li>
          <li>Impersonate or misrepresent identity</li>
          <li>Engage in scraping, exporting, or reselling dating platform data</li>
          <li>Bypass dating platform security or automation restrictions</li>
          <li>Reverse-engineer or interfere with Service systems</li>
          <li>Violate local laws or dating platform agreements</li>
        </ul>
        <p className="mb-6">
          The user accepts responsibility for compliance with third-party platform rules.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. User Content</h2>
        <p className="mb-6">
          Users retain ownership over their conversations, preferences, and profile content.
          Company receives a limited license to process data solely to deliver Service
          functionality. We do not sell user data or train generalized models on user
          conversations.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">6. Automation Behavior</h2>
        <p className="mb-6">
          WingAgent may suggest messages or actions. Users remain responsible for reviewing
          communications before sending when manual confirmation is required. The Service
          does not guarantee match volume, results, or relationship outcomes.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">7. Third-Party Platforms</h2>
        <p className="mb-6">
          WingAgent is not affiliated with Tinder, Bumble, Hinge, or any dating service.
          Users connect accounts at their own discretion. Users agree to comply with relevant
          platform terms. Company is not responsible for dating platform actions including
          account restrictions.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">8. Payments & Billing</h2>
        <p className="mb-6">
          Subscription plans auto-renew until canceled in account settings. Non-payment may
          result in service suspension. Refunds are governed by the Refund Policy page.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">9. Termination</h2>
        <p className="mb-6">
          Company may suspend or terminate accounts for policy violations, suspected fraud,
          or misuse. Users may cancel at any time.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">10. Service Modifications</h2>
        <p className="mb-6">
          Company may modify, update, or discontinue features to improve performance,
          security, or user experience. Continued use constitutes acceptance of updates.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">11. Disclaimers</h2>
        <p className="mb-6">
          The Service is provided “as-is” and “as available” without warranties. Company
          does not guarantee uninterrupted service, perfect accuracy, or specific match
          outcomes.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">12. Liability Limits</h2>
        <p className="mb-6">
          To the maximum extent permitted by law, Company is not liable for indirect
          damages, emotional distress, loss of opportunities, or penalties issued by
          third-party platforms. Total liability shall not exceed fees paid within the
          preceding 12 months.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">13. Dispute Resolution</h2>
        <p className="mb-6">
          Disputes shall be resolved through binding arbitration in the user's jurisdiction
          unless otherwise prohibited. Users waive class-action rights.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">14. Policy Updates</h2>
        <p className="mb-6">
          Terms may change over time. Continued use signals acceptance. Material changes
          will be communicated through email or dashboard notifications.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">15. Contact</h2>
        <p className="mb-2">Questions or concerns:</p>
        <p className="font-medium">support@wingagent.com</p>
      </main>

      <Footer />
    </>
  );
}