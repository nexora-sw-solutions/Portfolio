"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="absolute inset-0 right-0 w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none z-0 lg:z-10 opacity-20 lg:opacity-100 ml-auto pl-6 lg:pl-0">
      <div className="relative w-full max-w-2xl h-[400px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-cyan/20 dark:bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Primary Desktop Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute z-10 w-[85%] max-w-[550px] -translate-x-4 lg:-translate-x-8 translate-y-4"
        >
          <div className="animate-float" style={{ animationDuration: "8s" }}>
            <div className="w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl shadow-brand-cyan/10 ring-1 ring-white/10">
              {/* macOS Style Title Bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/80 border-b border-slate-700/50 backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              </div>
              {/* Content area */}
              <div className="relative w-full aspect-[16/10] bg-slate-950">
                <Image
                  src="/images/projects/Apex/Dashboard-summary.webp"
                  alt="Intelligent CRM Dashboard"
                  fill
                  priority
                  className="object-cover object-top opacity-90"
                  sizes="(max-width: 1024px) 80vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary overlapping window (Tablet/Dashboard Widget) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute z-20 w-[45%] max-w-[280px] right-2 lg:-right-4 -bottom-4 lg:-bottom-8"
        >
          <div className="animate-float-delayed" style={{ animationDuration: "12s" }}>
            <div className="w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl shadow-brand-blue/20 ring-1 ring-white/10 backdrop-blur-md">
              <div className="relative w-full aspect-[4/3] bg-slate-950">
                <Image
                  src="/images/projects/AATS/AATS_Dashboard.png"
                  alt="Audit Software Grid"
                  fill
                  priority
                  className="object-cover object-left opacity-95"
                  sizes="(max-width: 1024px) 40vw, 280px"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tertiary overlapping window (Mobile/Stat Widget) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="absolute z-30 w-[28%] max-w-[160px] left-0 lg:-left-12 top-4 lg:top-12"
        >
          <div className="animate-float" style={{ animationDuration: "10s", animationDirection: "reverse" }}>
            <div className="w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl shadow-brand-pink/20 ring-1 ring-white/10 backdrop-blur-md">
              <div className="relative w-full aspect-[9/16] bg-slate-950">
                <Image
                  src="/images/Other/Mobile.jpg"
                  alt="Mobile Deal Pipeline"
                  fill
                  priority
                  className="object-cover object-center opacity-95"
                  sizes="(max-width: 1024px) 30vw, 180px"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
