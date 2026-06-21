"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable the movement slides
  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const getDirectionOffsets = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "fade":
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffsets();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom ease-out cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
