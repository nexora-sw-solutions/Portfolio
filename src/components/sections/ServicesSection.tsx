"use client";

import React, { useState } from "react";
import { services, ServiceItem } from "@/data/services";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];

  const getIcon = (name: string, className = "w-5 h-5") => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950/20"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 dark:bg-primary/2.5 blur-[120px] pointer-events-none -translate-y-1/2" />


      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Capabilities"
          title="Engineered for Innovation"
          description="We do not just compile code. We build optimized, highly scalable, and secure digital engines tailored to solve complex business challenges."
        />

        {/* Desktop Split Showcase (lg+) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-stretch min-h-[600px]">
          {/* Left Column: Interactive Nav List */}
          <div className="col-span-5 flex flex-col gap-3.5 pr-4 justify-between">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    "group text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer flex items-center justify-between",
                    isActive
                      ? "border-primary bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] shadow-primary/10"
                      : "border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/25 hover:border-primary/30 hover:bg-slate-50 dark:hover:border-slate-700/60"
                  )}
                >
                  {/* Left item details */}
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-300",
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-white border border-slate-200 dark:border-transparent dark:bg-slate-900 text-slate-600 group-hover:text-primary group-hover:border-primary/20 dark:group-hover:text-primary dark:text-slate-400"
                    )}>
                      {getIcon(service.icon, "w-5 h-5")}
                    </span>
                    <div>
                      <h4 className={cn(
                        "font-bold text-base transition-colors duration-200",
                        isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
                      )}>
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-500 mt-0.5 line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <Icons.ChevronRight className={cn(
                    "w-4 h-4 transition-all duration-300",
                    isActive 
                      ? "text-primary translate-x-0" 
                      : "text-slate-500 dark:text-slate-700 group-hover:text-primary dark:group-hover:text-primary -translate-x-1"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Ecosystem Showcase */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full rounded-3xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900/65 backdrop-blur-md p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
              >
                {/* Background soft lighting */}
                <div className="absolute -top-1/4 -right-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[80px] pointer-events-none animate-pulse" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[80px] pointer-events-none animate-pulse" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
                    <span className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-tr from-primary to-indigo-500 text-white shadow-md shadow-primary/20">
                      {getIcon(activeService.icon, "w-7 h-7")}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Capability</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-base text-slate-800 dark:text-slate-400 font-medium leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  {/* Features / Value Grid */}
                  <div className="mb-8">
                    <h5 className="text-xs font-bold text-slate-800 dark:text-slate-500 uppercase tracking-widest mb-4">
                      Engineered Features
                    </h5>
                    <div className="grid grid-cols-2 gap-4">
                      {activeService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                            <Icons.Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-350 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="mb-8">
                    <h5 className="text-xs font-bold text-slate-800 dark:text-slate-500 uppercase tracking-widest mb-3.5">
                      Service Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeService.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-350 border border-slate-200 dark:border-slate-700/60 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Use-case & CTA */}
                <div className="relative z-10 border-t border-slate-100 dark:border-slate-800 pt-6 mt-6 flex items-center justify-between gap-6">
                  <div className="max-w-[70%]">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 dark:text-slate-500 block">
                      Typical Use Case
                    </span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-400 mt-1 leading-normal">
                      {activeService.useCase}
                    </p>
                  </div>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-full text-xs font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors gap-2 shrink-0 shadow-sm"
                  >
                    <span>Inquire</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion Layout (lg-) */}
        <div className="flex flex-col gap-4 lg:hidden">
          {services.map((service, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={service.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isActive
                    ? "border-primary bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] shadow-primary/10"
                    : "border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/25 hover:border-primary/30"
                )}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setActiveIdx(isActive ? -1 : idx)}
                  className="flex items-center justify-between w-full p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className={cn(
                      "flex items-center justify-center h-9 w-9 rounded-lg transition-all",
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-white border border-slate-200 dark:border-transparent dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                      )}>
                      {getIcon(service.icon, "w-4.5 h-4.5")}
                    </span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {service.title}
                    </span>
                  </div>
                  <Icons.ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-300 text-slate-550 dark:text-slate-400",
                    isActive && "rotate-180 text-primary"
                  )} />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800"
                    >
                      <div className="p-5 flex flex-col gap-5 text-left">
                        <p className="text-xs text-slate-800 dark:text-slate-450 leading-relaxed font-semibold">
                          {service.description}
                        </p>

                        <div>
                          <h6 className="text-[10px] font-bold text-slate-800 dark:text-slate-500 uppercase tracking-widest mb-2">
                            Key Deliverables
                          </h6>
                          <ul className="flex flex-col gap-2">
                            {service.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                                <Icons.Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h6 className="text-[10px] font-bold text-slate-800 dark:text-slate-500 uppercase tracking-widest mb-2">
                            Stack
                          </h6>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techs.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                          <p className="text-[10px] text-slate-800 dark:text-slate-500 italic">
                            <strong>Use case:</strong> {service.useCase}
                          </p>
                          <a
                            href="#contact"
                            className="inline-flex w-full items-center justify-center py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950"
                          >
                            Inquire Service
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
