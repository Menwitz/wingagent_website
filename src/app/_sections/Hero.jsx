"use client";
import { useRef, useEffect } from "react";
import DashboardPreview from "../_components/dashboard/DashboardPreview";
import Reveal from "../_components/Reveal";
import PhoneMock from "../_components/PhoneMock";

export default function Hero() {
    const previewRef = useRef(null);

    // Parallax scroll for the dashboard mock
    useEffect(() => {
        const handleScroll = () => {
            const el = previewRef.current;
            if (!el) return;
            const offset = window.scrollY * 0.1;
            el.style.transform = `translateY(${offset}px)`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28">
            {/* background gradient */}
            <div className="absolute inset-0 -z-20 animate-gradientMotion bg-[radial-gradient(circle_at_30%_30%,#f000b8_0%,transparent_40%),radial-gradient(circle_at_70%_70%,#4f46e5_0%,transparent_40%)] blur-3xl opacity-25" />

            <div className="mx-auto max-w-6xl text-center">
                <p className="text-sm uppercase tracking-wider text-slate-400">
                    Private AI for your dating life.
                </p>

                <h1
                    className="mt-2 mx-auto w-full text-center whitespace-nowrap
             bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent
             font-black tracking-tight leading-none drop-shadow-lg
             text-[clamp(1.6rem,7.2vw,5.75rem)]">
                    Your Personal AI Wingman.
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300">
                    WingAgent automates swiping, matching, and first messages — so you
                    invest time only when the spark is real.
                </p>

                <div className="mt-10 flex items-center justify-center gap-4 w-full max-w-md mx-auto">
                    <a
                        href="#final"
                        className="btn-shine btn-magnetic inline-block rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-[0_0_30px_rgba(240,0,184,0.25)] hover:shadow-[0_0_45px_rgba(240,0,184,0.4)] flex-1 text-center"
                    >
                        Start now
                    </a>

                    <a
                        href="#how"
                        className="rounded-full border border-white/20 px-8 py-3 text-lg font-medium text-white hover:bg-white/10 transition flex-1 text-center"
                    >
                        See how it works
                    </a>
                </div>
            </div>

            <div id="dashboard"
                ref={previewRef}
                className="mx-auto mt-16 max-w-6xl transition-transform duration-500"
            >
                <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <DashboardPreview speed="normal" />
                </div>
            </div>

            {/*            <div
                id="phones"
                ref={previewRef}
                className="relative mx-auto mt-20 flex justify-center items-center gap-8 sm:gap-12 transition-transform duration-500"
            >
                <PhoneMock
                    app="hinge"
                    src="/mock/hinge-preview.jpg"
                    style="w-[160px] sm:w-[220px] rotate-[-10deg] translate-y-6 sm:translate-y-10 z-0"
                />
                <PhoneMock
                    app="tinder"
                    src="/mock/tinder-preview.jpg"
                    style="w-[180px] sm:w-[250px] z-10 scale-105"
                />
                <PhoneMock
                    app="bumble"
                    src="/mock/bumble-preview.jpg"
                    style="w-[160px] sm:w-[220px] rotate-[10deg] translate-y-6 sm:translate-y-10 z-0"
                />

                <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-fuchsia-600 via-pink-500 to-indigo-600 rounded-full scale-[1.8]" />
            </div> */}

            <style jsx>{`
            #phones > div {
                animation: floaty 6s ease-in-out infinite;
            }
            #phones > div:nth-child(1) { animation-delay: 0s; }
            #phones > div:nth-child(2) { animation-delay: 1.5s; }
            #phones > div:nth-child(3) { animation-delay: 3s; }

            @keyframes floaty {
                0%, 100% { transform: translateY(0) rotate(var(--r)); }
                50% { transform: translateY(-10px) rotate(var(--r)); }
            }
            `}</style>

        </section>
    );
}