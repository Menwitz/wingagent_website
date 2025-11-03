"use client";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Logo from "../_components/Logo";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20 text-slate-200 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Effective Date: April 3, 2023</p>

        <p className="mb-6">
          This Refund Policy explains how WingAgent (“Company”, “we”, “our”) handles
          subscription payments, cancellations, credits, and eligibility for refunds.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">1. Subscription Billing</h2>
        <p className="mb-6">
          WingAgent operates on a subscription model. Charges occur automatically at the
          beginning of each billing cycle unless cancelled prior to renewal.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">2. Cancellation</h2>
        <p className="mb-6">
          Users may cancel their subscription at any time through account settings.
          Cancellation stops future renewals but does not automatically refund past charges.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">3. Refund Eligibility</h2>
        <p className="mb-4 font-medium">Refunds may be granted if:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>The service did not function as intended due to system failure</li>
          <li>A billing error occurred (duplicate charge, incorrect amount)</li>
          <li>Unauthorized billing occurred</li>
        </ul>

        <p className="mb-6">
          Refund requests must be submitted within 14 days of the charge. Requests submitted
          beyond that window are not guaranteed consideration.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">4. Non-Refundable Cases</h2>
        <p className="mb-4 font-medium">Refunds will not be issued for:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>User dissatisfaction with match outcomes</li>
          <li>Failure to achieve dating results or expectations</li>
          <li>Violation of dating app policies leading to account restrictions</li>
          <li>Cancellation after the renewal has processed without prior request</li>
          <li>Service misuse or automated abuse</li>
        </ul>

        <p className="mb-6">
          WingAgent assists in automation but does not guarantee results, matches, dates,
          or personal outcomes.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">5. Chargebacks</h2>
        <p className="mb-6">
          Submitting fraudulent chargebacks results in immediate account termination and
          may trigger fraud investigation processes consistent with payment provider policies.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">6. Credits</h2>
        <p className="mb-6">
          In certain cases, account credits may be offered instead of refunds. Credits are
          discretionary and non-transferable.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">7. How to Request a Refund</h2>
        <p className="mb-4">To request a refund, contact:</p>
        <p className="font-medium mb-6">billing@wingagent.com</p>
        <p className="mb-6">
          Include the email used for your account and transaction details. Response time
          is typically within 5 business days.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">8. Policy Updates</h2>
        <p className="mb-6">
          We may update this policy. Continued use of the Service confirms acceptance of updates.
        </p>
      </main>

      <Footer />
    </>
  );
}