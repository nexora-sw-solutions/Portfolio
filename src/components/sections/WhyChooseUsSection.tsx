"use client";

import React, { useState, useEffect } from "react";
import { companyDetails } from "@/data/company";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyChooseUsSection() {
  const getIcon = (name: string, className = "w-5 h-5") => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20"
    >
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 dark:bg-primary/2.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Stats Counter Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal direction="left">
              <div className="flex flex-col gap-2 max-w-md">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Why Partners Trust Us
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight">
                  Proven Enterprise Metrics
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-400 mt-2 font-medium leading-relaxed">
                  We maintain strict operations delivery protocols to protect transactional integrity, speed up system compilation, and scale server loads.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats list */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {companyDetails.stats.map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
                  <div className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-white dark:bg-slate-900/35 backdrop-blur-md shadow-sm text-center flex flex-col justify-center h-full hover:border-primary/20 transition-all duration-300">
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-455 mt-2 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Side: Core Values Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyDetails.values.map((value, idx) => (
              <ScrollReveal key={idx} direction="right" delay={idx * 0.1} className="h-full">
                <div className="p-6 sm:p-7 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/10 backdrop-blur-md hover:bg-white dark:hover:bg-slate-900/40 hover:border-primary/20 dark:hover:border-primary/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group text-left">
                  <div>
                    {/* Icon Sphere */}
                    <div className="p-3.5 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary w-fit group-hover:scale-105 transition-transform duration-300">
                      {getIcon(value.icon, "w-5 h-5")}
                    </div>

                    <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mt-5 leading-tight group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-2.5 leading-relaxed font-semibold">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
