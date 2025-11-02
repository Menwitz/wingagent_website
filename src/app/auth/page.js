"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl p-10 shadow-xl border border-white/10 transition-all">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>

        <form className="space-y-5">
          {isSignup && (
            <input
              type="text"
              placeholder="Full name"
              required
              className="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-fuchsia-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg bg-white/10 border border-white/20 p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-fuchsia-500 outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 py-3 text-white font-medium hover:opacity-90 transition-all"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-fuchsia-400 hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-fuchsia-400 hover:underline"
              >
                Sign up
              </button>
            </>
          )}
        </p>
      </div>
    </main>
  );
}