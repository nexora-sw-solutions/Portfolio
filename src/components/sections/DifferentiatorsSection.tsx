"use client";

import React from "react";
import { companyDetails } from "@/data/company";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export function DifferentiatorsSection() {
  const getIcon = (name: string, className = "w-5 h-5") => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 px-6 md:px-8 relative bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="The Nexora Difference"
          description="We combine the agility and direct collaboration of a boutique studio with the engineering discipline and security of an enterprise agency."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {companyDetails.differentiators.map((diff, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
              <div className="p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-md hover:bg-white dark:hover:bg-slate-900/40 hover:border-primary/20 dark:hover:border-primary/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group text-left">
                <div>
                  {/* Icon Sphere */}
                  <div className="p-4 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary w-fit group-hover:scale-105 transition-transform duration-300">
                    {getIcon(diff.icon, "w-6 h-6")}
                  </div>

                  <h4 className="font-extrabold text-slate-900 dark:text-white text-xl mt-6 leading-tight group-hover:text-primary transition-colors">
                    {diff.title}
                  </h4>
                  
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-400 mt-3 leading-relaxed font-medium">
                    {diff.description}
                  </p>
                </div>
                
                {/* @ts-ignore */}
                {diff.link && (
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                    <a
                      /* @ts-ignore */
                      href={diff.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      {/* @ts-ignore */}
                      {diff.linkText}
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
