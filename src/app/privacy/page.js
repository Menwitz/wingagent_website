"use client";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Logo from "../_components/Logo";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20 text-slate-200 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Effective Date: April 3, 2023</p>

        <p className="mb-6">
          This Privacy Policy explains how WingAgent (“Company”, “we”, “our”) collects,
          uses, stores, and protects personal information when you access or use
          WingAgent (“Service”). By using the Service, you consent to the data
          practices described in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following categories of data:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Account information (email, login details)</li>
          <li>Profile data and preferences you submit</li>
          <li>Connected dating app data you authorize</li>
          <li>Automated interaction parameters and settings</li>
          <li>Usage logs, IP address, device/browser metadata</li>
          <li>Payment and subscription metadata</li>
        </ul>

        <p className="mb-6">
          We do not knowingly collect data from users under 18.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">Data is used to:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Provide automation and messaging workflows</li>
          <li>Enhance accuracy and personalization</li>
          <li>Secure your account</li>
          <li>Process payments and plan upgrades</li>
          <li>Communicate service updates or support information</li>
          <li>Improve system performance and reliability</li>
        </ul>

        <p className="mb-6">
          We do not sell user data. We do not train generalized AI models on user
          conversations. Data is processed solely for delivery of the service.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. Third-Party Services</h2>
        <p className="mb-6">
          WingAgent connects to dating platforms only with user authorization.
          We are not affiliated with Tinder, Bumble, Hinge, or similar services.
          Third-party terms apply when accessing those platforms.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. Data Security</h2>
        <p className="mb-6">
          We employ encryption, access controls, token separation, and secure cloud
          infrastructure to protect user data. No online system is immune to risks.
          Users should protect login credentials and avoid shared account access.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. Data Retention</h2>
        <p className="mb-6">
          Data is retained only as long as necessary to deliver service functionality
          or comply with legal requirements. Users may request deletion of stored
          information at any time.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">6. User Controls</h2>
        <p className="mb-4">Users may:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Modify account information</li>
          <li>Disconnect dating accounts</li>
          <li>Request data deletion</li>
          <li>Cancel subscriptions at any time</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">7. Cookies & Tracking</h2>
        <p className="mb-6">
          We may use cookies or technical tracking for authentication and usage metrics.
          Users may manage browser cookie settings; some features may require cookies.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">8. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy as needed. Continued use of the Service
          after updates indicates acceptance.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">9. Contact</h2>
        <p className="mb-2">For privacy inquiries:</p>
        <p className="font-medium">support@wingagent.com</p>
      </main>

      <Footer />
    </>
  );
}