"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Code, ShieldCheck, Terminal } from "lucide-react";
import { SectionAccent } from "../shared/Decorations/SectionAccent";
import { motion } from "framer-motion";
import { ScrollReveal } from "../shared/ScrollReveal";

// Dynamically import ThreeJS Scene with SSR disabled to prevent server-hydration errors
const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-slate-950/20 dark:bg-slate-950/60" />
  ),
});

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="dark relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 md:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950"
    >
      {/* 3D Scene */}
      <HeroScene />

      {/* Decorative background meshes */}
      <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] rounded-full bg-brand-cyan/15 dark:bg-brand-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full bg-brand-pink/15 dark:bg-brand-pink/10 blur-[120px] pointer-events-none" />


      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm backdrop-blur-md">
            <SectionAccent className="w-3.5 h-3.5 text-primary" />
            <span>Premium Engineering Studio</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Building Software
            <br />
            That Powers
            <br />
            <span className="brand-text-gradient drop-shadow-sm">
              Modern Businesses
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            We engineer custom digital platforms that streamline operations, eliminate manual bottlenecks, and give you a scalable foundation for long-term growth.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-full text-base font-extrabold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:brand-bg-gradient hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover-brand-glow cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
            
            <a
              href="#portfolio"
              onClick={(e) => handleScrollTo(e, "#portfolio")}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-full text-base font-extrabold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <span>View Our Work</span>
            </a>
          </div>
        </div>

        {/* Feature widgets (Floating layout on desktop) */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-6 relative">
          
          {/* Glassmorphic Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/45 backdrop-blur-xl shadow-lg relative left-0 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Bespoke Digital Solutions</h3>
                <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-relaxed">
                  Tailored platforms and enterprise systems mapped perfectly to your unique business workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Glassmorphic Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/45 backdrop-blur-xl shadow-lg relative left-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Scalable Architecture</h3>
                <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-relaxed">
                  Enterprise-grade digital infrastructure engineered for high availability and robust security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Glassmorphic Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/45 backdrop-blur-xl shadow-lg relative left-16 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Secure & Supported</h3>
                <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-relaxed">
                  Bank-grade data protection backed by proactive, 24/7 maintenance contracts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-800 dark:text-slate-500 animate-pulse">
          Scroll Down
        </span>
        <div className="h-9 w-5 rounded-full border-2 border-slate-300 dark:border-slate-800 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full brand-bg-gradient"
          />
        </div>
      </div>
    </section>
  );
}
