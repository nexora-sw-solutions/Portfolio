import React from "react";
import { motion } from "framer-motion";

interface SectionAccentProps {
  className?: string;
}

export function SectionAccent({ className = "" }: SectionAccentProps) {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <path
        d="M7 1V13M1 7H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </motion.svg>
  );
}
