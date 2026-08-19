"use client";

import React, { useState, useEffect } from "react";
import { companyDetails } from "@/data/company";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

export function MetricsSection() {
  return (
    <section
      id="metrics"
      className="py-20 md:py-24 px-6 md:px-8 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20"
    >
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 dark:bg-primary/2.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top: Heading */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            Our Track Record
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight">
            Built on Real Experience
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-400 mt-4 font-medium leading-relaxed">
            We are a dedicated, tight-knit engineering team delivering high-quality digital products. Our boutique scale allows us to move fast, maintain exceptional quality standards, and partner directly with you on every project.
          </p>
        </ScrollReveal>

        {/* Stats list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {companyDetails.stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="h-full w-full">
              <div className="p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-white dark:bg-slate-900/35 backdrop-blur-md shadow-sm text-center flex flex-col justify-center h-full hover:border-primary/20 transition-all duration-300">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-400 mt-3 leading-tight">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
