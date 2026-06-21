"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: "heading" | "body";
  delay?: number;
}

export function AnimatedText({
  text,
  className = "",
  type = "heading",
  delay = 0,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "heading" ? 0.03 : 0.015,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutCubic
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              className="inline-block"
              variants={wordVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
