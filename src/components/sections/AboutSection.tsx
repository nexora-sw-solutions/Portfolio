"use client";

import React from "react";
import { companyDetails } from "@/data/company";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { Target, Compass, Code2, ShieldAlert } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950/20"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 dark:bg-primary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="About Us"
          title="Engineering the Digital Era"
          description="We are a premium team of architects, developers, and designers united by a single vision: to build reliable, scalable software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8 text-left">
            <ScrollReveal direction="left" className="flex flex-col gap-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Our Digital Philosophy
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium leading-relaxed">
                Nexora started with the belief that enterprise-grade software should not feel clunky or compromise on visual layout. We build custom applications that combine high-performance compiled architectures with premium interactive designs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400 font-medium leading-relaxed">
                By maintaining strict TypeScript typing, building modular API abstractions, and implementing robust data sync structures, we protect transaction accuracy and provide code that stays reliable for years.
              </p>
            </ScrollReveal>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/35 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-left h-full">
                  <div className="flex items-center gap-2 text-primary">
                    <Target className="w-5 h-5" />
                    <h4 className="font-extrabold text-sm uppercase tracking-wider">Our Mission</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-3 font-medium leading-relaxed">
                    {companyDetails.mission}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/35 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-left h-full">
                  <div className="flex items-center gap-2 text-indigo-500">
                    <Compass className="w-5 h-5" />
                    <h4 className="font-extrabold text-sm uppercase tracking-wider">Our Vision</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-3 font-medium leading-relaxed">
                    {companyDetails.vision}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Code Quality Visual Story */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ScrollReveal direction="right" className="w-full">
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 shadow-xl relative overflow-hidden font-mono text-xs leading-relaxed max-w-lg mx-auto">
                {/* Code styling overlays */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="absolute top-4 right-4 text-[10px] text-slate-650 font-bold uppercase tracking-wider">
                  Nexora.ts
                </div>

                <div className="mt-8 border-t border-slate-800 pt-4 flex flex-col gap-4 text-left">
                  <div>
                    <span className="text-pink-500 font-bold">const</span>{" "}
                    <span className="text-blue-400">NexoraStudio</span> ={" "}
                    <span className="text-yellow-500">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">engineeringStandard</span>:{" "}
                    <span className="text-green-400">"Production-grade, strictly typed"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">focusAreas</span>:{" "}
                    <span className="text-yellow-500">{"["}</span>
                    <span className="text-green-400">"SaaS"</span>,{" "}
                    <span className="text-green-400">"POS"</span>,{" "}
                    <span className="text-green-400">"ERP"</span>,{" "}
                    <span className="text-green-400">"Mobile"</span>
                    <span className="text-yellow-500">{"]"}</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">securityFirst</span>:{" "}
                    <span className="text-amber-500">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">compileQuality</span>:{" "}
                    <span className="text-yellow-500">() =&gt;</span>{" "}
                    <span className="text-yellow-500">{"{"}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-pink-500 font-bold">return</span>{" "}
                    <span className="text-green-400">"Zero errors on build"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-yellow-500">{"}"}</span>
                  </div>
                  <div>
                    <span className="text-yellow-500">{"}"}</span>;
                  </div>

                  <div className="border-t border-slate-800 pt-4 mt-2 text-[10px] text-slate-500 flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-primary" />
                      Compiled successfully
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-emerald-500" />
                      Security Check: Pass
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
