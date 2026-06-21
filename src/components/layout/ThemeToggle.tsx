"use client";

import React from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden cursor-pointer"
      aria-label="Toggle Theme"
      id="theme-toggle-btn"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
