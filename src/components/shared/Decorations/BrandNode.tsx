import React from "react";
import { motion } from "framer-motion";

interface BrandNodeProps {
  className?: string;
}

export function BrandNode({ className = "" }: BrandNodeProps) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M6 3H3V6M14 3H17V6M6 17H3V14M14 17H17V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.circle
        cx="10"
        cy="10"
        r="2"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
