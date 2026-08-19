"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail } from "lucide-react";
import { BrandNode } from "./Decorations/BrandNode";

export function triggerSocialNotification() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-social-notification"));
  }
}

export function SocialNotificationToast() {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 10000); // 10 seconds auto-dismiss
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      startTimer();
    };

    window.addEventListener("open-social-notification", handleOpen);
    return () => {
      window.removeEventListener("open-social-notification", handleOpen);
      clearTimer();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1], // easeOutCubic
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 100 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 50 || info.velocity.y > 500) {
              setIsOpen(false);
            }
          }}
          onMouseEnter={clearTimer}
          onMouseLeave={startTimer}
          className="fixed bottom-6 right-6 z-50 w-[calc(100%-2rem)] max-w-[420px] left-4 right-4 sm:left-auto sm:right-6"
          role="alert"
          aria-live="polite"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-5 shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/5 group">
            {/* Top brand accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 brand-bg-gradient opacity-90" />
            
            {/* Background decorative glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-primary/10 dark:bg-primary/15 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-4 relative z-10">
              {/* Icon badge */}
              <div className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-indigo-500/20 text-primary shrink-0 shadow-inner">
                <BrandNode className="w-5 h-5 text-primary" />
              </div>

              {/* Text & Actions */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white leading-snug">
                    Nexora Social Channels Coming Soon
                  </h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0 -mt-0.5 -mr-1"
                    aria-label="Close notification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed mt-1.5">
                  Our official LinkedIn and X (Twitter) presence are currently being set up.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed mt-2">
                  For immediate project inquiries, please reach out through our Contact Form or email us directly at{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-200 break-all">nexora280@gmail.com</span>.
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href="#contact"
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <span>Contact Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:nexora280@gmail.com"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:border-primary/40 transition-all duration-200 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
