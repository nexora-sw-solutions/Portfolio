"use client";

import React from "react";
import { AnimatedText } from "./AnimatedText";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col mb-16 md:mb-20 ${
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-4xl"
      } ${className}`}
    >
      {/* Small Badge */}
      <ScrollReveal direction="fade" delay={0.1}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 mb-4 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </div>
      </ScrollReveal>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-slate-900 dark:text-white">
        <AnimatedText text={title} delay={0.2} />
      </h2>

      {/* Description */}
      {description && (
        <ScrollReveal direction="up" delay={0.4} className="w-full">
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-400 font-medium leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
