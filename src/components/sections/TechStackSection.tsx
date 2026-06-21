"use client";

import React, { useState } from "react";
import { techStack, Technology } from "@/data/techStack";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { cn } from "@/lib/utils";
import { Cpu, Layout, Smartphone, Database, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Layout className="w-4 h-4 text-primary" />;
      case "backend":
        return <Cpu className="w-4 h-4 text-indigo-500" />;
      case "mobile":
        return <Smartphone className="w-4 h-4 text-emerald-500" />;
      case "database":
        return <Database className="w-4 h-4 text-cyan-500" />;
      case "cloud":
        return <Cloud className="w-4 h-4 text-amber-500" />;
      default:
        return <Cpu className="w-4 h-4 text-primary" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "border-primary/30 text-primary bg-primary/5";
      case "backend":
        return "border-indigo-500/30 text-indigo-500 bg-indigo-50/5";
      case "mobile":
        return "border-emerald-500/30 text-emerald-500 bg-emerald-50/5";
      case "database":
        return "border-cyan-500/30 text-cyan-500 bg-cyan-50/5";
      case "cloud":
        return "border-amber-500/30 text-amber-500 bg-amber-50/5";
      default:
        return "border-primary/30 text-primary bg-primary/5";
    }
  };

  // Group technologies by category
  const categories = Array.from(new Set(techStack.map((t) => t.category)));

  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950/20"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/2.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Our Tech Stack"
          title="The Connected Ecosystem"
          description="We select robust, battle-tested modern tools, establishing logical bindings that support security, rapid delivery, and fluid transitions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Columns: Dynamic Connected Grid */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <ScrollReveal direction="fade">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categories.map((cat) => {
                  const items = techStack.filter((t) => t.category === cat);
                  return (
                    <div 
                      key={cat}
                      className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-4 flex items-center gap-2">
                        {getCategoryIcon(cat)}
                        <span>{cat} Development</span>
                      </h4>

                      <div className="flex flex-wrap gap-2.5">
                        {items.map((tech) => {
                          const isHovered = hoveredTech?.name === tech.name;
                          const isConnected = hoveredTech?.connections.includes(tech.name);
                          
                          return (
                            <button
                              key={tech.name}
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                              className={cn(
                                "px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer relative border",
                                isHovered 
                                  ? "border-primary bg-primary text-white scale-103 shadow-md shadow-primary/20"
                                  : isConnected
                                  ? "border-primary/50 dark:border-primary/50 bg-primary/5 text-primary dark:text-primary-foreground scale-101"
                                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/20 text-slate-700 dark:text-slate-300 hover:border-primary/30 hover:bg-slate-50 dark:hover:border-slate-700"
                              )}
                            >
                              {tech.name}
                              {isConnected && (
                                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Columns: Description Showcase Card */}
          <div className="lg:col-span-4 h-full">
            <div className="sticky top-28">
              {hoveredTech ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden"
                >
                  {/* Decorative soft glow */}
                  <div className="absolute -top-1/4 -right-1/4 w-[200px] h-[200px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[50px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-5 text-left">
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "p-2 rounded-lg border",
                        getCategoryColor(hoveredTech.category)
                      )}>
                        {getCategoryIcon(hoveredTech.category)}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500">
                          {hoveredTech.category} stack
                        </span>
                        <h4 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                          {hoveredTech.name}
                        </h4>
                      </div>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        {hoveredTech.level}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-400 leading-relaxed mt-2">
                      {hoveredTech.description}
                    </p>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-5 mt-3">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-2.5">
                        Connected Technologies
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {hoveredTech.connections.map((cName) => (
                          <span
                            key={cName}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                          >
                            {cName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-md text-center py-24 flex flex-col items-center justify-center gap-4 border-dashed shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="p-4 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-slate-500 dark:text-slate-400">
                    <Cpu className="w-7 h-7 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-slate-350 text-sm">
                      Interactive Ecosystem
                    </h5>
                    <p className="text-xs text-slate-700 dark:text-slate-400 mt-2 max-w-[240px] leading-relaxed">
                      Hover over any technology on the left to see its connection network and application specifications.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
