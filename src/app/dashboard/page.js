"use client";
import { useState } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function DashboardPage() {
  const [active, setActive] = useState("overview");
  const menu = [
    "overview",
    "conversations",
    "analytics",
    "persona",
    "safety",
    "settings",
  ];

  const renderContent = () => {
    switch (active) {
      case "overview":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-slate-400">
              Connected apps and today’s automation summary will appear here.
            </p>
          </div>
        );
      case "conversations":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Conversations</h2>
            <p className="text-slate-400">
              List of automated chats with take-over options.
            </p>
          </div>
        );
      case "analytics":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p className="text-slate-400">
              Match funnel metrics and weekly reports go here.
            </p>
          </div>
        );
      case "persona":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Persona</h2>
            <p className="text-slate-400">
              Adjust tone, style, and response speed here.
            </p>
          </div>
        );
      case "safety":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Safety & Privacy</h2>
            <p className="text-slate-400">
              Review sent messages, manage logs, or delete data.
            </p>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <p className="text-slate-400">
              Manage subscription, billing, and notifications.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-56 border-r border-white/10 p-4 space-y-3 bg-slate-900/40">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`block w-full text-left capitalize px-3 py-2 rounded-lg ${
                active === item
                  ? "bg-gradient-to-r from-fuchsia-600 to-indigo-600"
                  : "hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <section className="flex-1 p-8 overflow-y-auto">{renderContent()}</section>
      </div>

      <Footer />
    </main>
  );
}