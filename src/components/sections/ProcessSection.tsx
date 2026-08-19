"use client";

import React, { useState } from "react";
import { processSteps, ProcessStep } from "@/data/process";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = processSteps.find((s) => s.step === activeStep) || processSteps[0];

  const getIcon = (name: string, className = "w-5 h-5") => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section
      id="process"
      className="dark py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/2.5 blur-[100px] pointer-events-none" />


      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Development Process"
          title="Workflow of Excellence"
          description="How we turn complex operational problems into reliable, modular, production-ready software systems."
        />

        {/* Desktop Stepper Timeline (lg+) */}
        <div className="hidden lg:block relative mb-16">
          {/* Progress Connector Line */}
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10" />
          
          {/* Active Connector Progress */}
          <motion.div 
            className="absolute top-1/2 left-6 h-0.5 bg-primary -translate-y-1/2 -z-10"
            animate={{ width: `${((activeStep - 1) / (processSteps.length - 1)) * 96}%` }}
            transition={{ duration: 0.4 }}
          />

          {/* Steps Horizontal Row */}
          <div className="flex justify-between items-center relative">
            {processSteps.map((step) => {
              const isActive = activeStep === step.step;
              const isPast = activeStep > step.step;
              
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className="flex flex-col items-center gap-3 bg-transparent border-none focus:outline-none cursor-pointer group"
                >
                  {/* Step Bubble */}
                  <div className={cn(
                    "h-12 w-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 font-extrabold text-sm backdrop-blur-md shadow-md",
                    isActive
                      ? "border-primary bg-primary text-white scale-110 shadow-md shadow-primary/20"
                      : isPast
                      ? "border-primary bg-white dark:bg-slate-900 text-primary shadow-sm shadow-primary/10"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-650 group-hover:border-primary/30 dark:group-hover:border-slate-700"
                  )}>
                    {isPast ? <Icons.Check className="w-5 h-5" /> : step.step}
                  </div>

                  {/* Step Short Label */}
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 absolute mt-15",
                    isActive ? "text-primary" : "text-slate-800 dark:text-slate-550 group-hover:text-slate-900 dark:group-hover:text-slate-400"
                  )}>
                    {step.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Details Presentation Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-20">
          
          {/* Left Side: Step Card Info */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepData.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
                    <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary font-bold">
                      {getIcon(activeStepData.icon, "w-5 h-5")}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Phase {activeStepData.step} of 7
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                        {activeStepData.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-350 leading-relaxed font-medium">
                    {activeStepData.description}
                  </p>

                  {/* Key Activities Checklist */}
                  <div className="mt-8 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-2 block">
                      Key Activities
                    </span>
                    {activeStepData.keyActivities.map((activity, idx) => (
                      <motion.div
                        key={`${activeStepData.step}-${idx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Icons.CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-350 leading-snug">
                          {activity}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500">
                    Phase Deliverable
                  </span>
                  <div className="flex items-center gap-2.5 mt-2 text-slate-800 dark:text-white">
                    <Icons.FileText className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-bold">
                      {activeStepData.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Accordion-like Quick navigation & Info Checklist (Useful for tablet/mobile view) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {processSteps.map((step) => {
              const isActive = activeStep === step.step;
              
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={cn(
                    "p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 flex items-center justify-between",
                    isActive
                      ? "border-primary bg-primary/5 text-primary shadow-sm shadow-primary/10"
                      : "border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/20 text-slate-800 dark:text-slate-400 hover:border-primary/30 hover:bg-slate-50 dark:hover:border-slate-700"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center font-bold text-xs",
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-white border border-slate-200 dark:border-transparent dark:bg-slate-900 text-slate-800 dark:text-slate-400"
                    )}>
                      {step.step}
                    </span>
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-300">
                      {step.title}
                    </span>
                  </div>

                  <Icons.ChevronRight className={cn(
                    "w-4 h-4 transition-transform",
                    isActive && "translate-x-1"
                  )} />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
