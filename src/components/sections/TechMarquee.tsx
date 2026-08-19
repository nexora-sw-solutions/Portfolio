"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Server, Smartphone, CreditCard, Layout, Terminal, Database, Box } from "lucide-react";

const technologies = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Layout },
  { name: "Node.js", icon: Terminal },
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Flutter", icon: Smartphone },
  { name: "Stripe", icon: CreditCard },
  { name: "Framer", icon: Box }
];

export function TechMarquee() {
  return (
    <div className="w-full py-5 md:py-7 overflow-hidden bg-[var(--background)] border-b border-slate-200/50 dark:border-slate-800/40">
      <div className="relative flex w-full">
        {/* Left/Right Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex gap-12 md:gap-16 whitespace-nowrap px-6 items-center w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35 
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={`${tech.name}-${idx}`} 
                className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <Icon className="w-5 h-5 md:w-5 md:h-5 text-slate-800 dark:text-slate-400" />
                <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-400 uppercase tracking-widest">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
