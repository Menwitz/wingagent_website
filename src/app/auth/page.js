"use client";
import { useState, useEffect } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Logo from "../_components/Logo";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [tagline, setTagline] = useState("");

  const taglineText = "Calibrating your dating persona...";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTagline(taglineText.slice(0, index));
      index++;
      if (index > taglineText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [isSignup]);

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 -z-10 animate-gradientMotion bg-[radial-gradient(circle_at_30%_30%,#f000b8_0%,transparent_40%),radial-gradient(circle_at_70%_70%,#4f46e5_0%,transparent_40%)] blur-3xl opacity-30" />

      {/* Auth form */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(240,0,184,0.15)]">
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <h1 className="mt-2 text-xl font-semibold text-slate-100">
              {isSignup ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-slate-400 text-sm h-4">{tagline}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="peer w-full rounded-lg bg-transparent border border-white/20 p-3 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="Full name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-2.5 text-slate-400 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all"
                >
                  Full name
                </label>
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`peer w-full rounded-lg bg-transparent border p-3 text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/20 focus:ring-fuchsia-500"
                }`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2.5 text-slate-400 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all"
              >
                Email
              </label>
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`peer w-full rounded-lg bg-transparent border p-3 text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-white/20 focus:ring-fuchsia-500"
                }`}
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2.5 text-slate-400 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              {errors.password && (
                <p className="text-xs text-red-400 mt-1">{errors.password}</p>
              )}
            </div>

            {isSignup && (
              <p className="text-xs text-slate-400 text-center">
                Start your 7-day free trial. Cancel anytime.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 py-3 font-medium btn-shine btn-magnetic disabled:opacity-60"
            >
              {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          {/* Social login */}
          <div className="mt-8">
            <p className="text-center text-slate-400 text-sm mb-4">
              or continue with
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-slate-200 hover:bg-white/10 transition">
                <span>🟢</span> Google
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-slate-200 hover:bg-white/10 transition">
                <span>🍎</span> Apple
              </button>
            </div>
          </div>

          {/* Toggle link */}
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
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}