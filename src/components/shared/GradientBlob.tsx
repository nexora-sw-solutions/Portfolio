"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientBlobProps {
  color?: string;
  size?: string;
  className?: string;
  animate?: boolean;
}

export function GradientBlob({
  color = "bg-primary/30",
  size = "w-[300px] h-[300px]",
  className = "",
  animate = true,
}: GradientBlobProps) {
  if (!animate) {
    return (
      <div
        className={`absolute rounded-full filter blur-[80px] pointer-events-none opacity-50 ${color} ${size} ${className}`}
      />
    );
  }

  return (
    <motion.div
      className={`absolute rounded-full filter blur-[80px] pointer-events-none opacity-50 ${color} ${size} ${className}`}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -40, 20, -30, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}
