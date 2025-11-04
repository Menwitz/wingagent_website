"use client";
import { useEffect, useState } from "react";
import Navbar from "../_components/MinimalNavbar";
import Footer from "../_components/MinimalFooter";
import Logo from "../_components/Logo";

import { useSearchParams } from "next/navigation";

export default function SignupPage() {

  const params = useSearchParams();
  const preselectedPlan = params.get("plan");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", name: "" });

  useEffect(() => {
    const text = "Calibrating your dating persona...";
    let i = 0;
    const id = setInterval(() => {
      setTagline(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);

  const validate = () => {
    const e = { email: "", password: "", name: "" };
    let ok = true;
    if (!name.trim()) {
      e.name = "Enter your name.";
      ok = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      e.email = "Enter a valid email.";
      ok = false;
    }
    if (password.length < 6) {
      e.password = "Minimum 6 characters.";
      ok = false;
    }
    setErrors(e);
    return ok;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // TODO: integrate /api/auth/signup
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 -z-10 animate-gradientMotion bg-[radial-gradient(circle_at_30%_30%,#f000b8_0%,transparent_40%),radial-gradient(circle_at_70%_70%,#4f46e5_0%,transparent_40%)] blur-3xl opacity-30" />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(240,0,184,0.15)]">
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <h1 className="mt-2 text-xl font-semibold text-slate-100">Create your account</h1>
            <p className="text-slate-400 text-sm h-4">{tagline}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`peer w-full rounded-lg bg-transparent border p-3 text-white placeholder-transparent focus:outline-none focus:ring-2 ${errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/20 focus:ring-fuchsia-500"
                  }`}
                placeholder="Full name"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-2.5 text-slate-400 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 transition-all"
              >
                Full name
              </label>
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`peer w-full rounded-lg bg-transparent border p-3 text-white placeholder-transparent focus:outline-none focus:ring-2 ${errors.email
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
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`peer w-full rounded-lg bg-transparent border p-3 text-white placeholder-transparent focus:outline-none focus:ring-2 ${errors.password
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
              {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
            </div>

            <p className="text-xs text-slate-400 text-center">
              Start your 7-day free trial. Cancel anytime.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 py-3 font-medium btn-shine btn-magnetic disabled:opacity-60"
            >
              {loading ? "Processing..." : "Sign Up"}
            </button>
          </form>

          {/* Social login */}
          <div className="mt-8">
            <p className="text-center text-slate-400 text-sm mb-4">
              Or continue with email
            </p>
            <div className="flex flex-col items-center gap-3">
              <button className="w-full max-w-sm flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2 text-slate-200 hover:bg-white/10 transition">
                <span>🟢</span> Sign up with Google
              </button>
              <button className="w-full max-w-sm flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2 text-slate-200 hover:bg-white/10 transition">
                <span>🍎</span> Sign up with Apple
              </button>
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-fuchsia-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}