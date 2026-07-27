"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./Navbar";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/shared/SocialIcons";
import { triggerSocialNotification } from "@/components/shared/SocialNotificationToast";
import { companyDetails } from "@/data/company";
import { useSmoothScroll } from "@/providers/SmoothScrollProvider";

interface MobileMenuProps {
  onClose: () => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  activeSection: string;
}

export function MobileMenu({ onClose, onLinkClick, activeSection }: MobileMenuProps) {
  const lenis = useSmoothScroll();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [lenis]);

  const containerVariants = {
    hidden: { opacity: 0, y: "-10%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutCubic
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: "-10%",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8"
    >
      {/* Scrollable Nav list */}
      <div 
        className="flex flex-col gap-6 overflow-y-auto max-h-[60vh] mt-4 overscroll-contain" 
        style={{ WebkitOverflowScrolling: 'touch' }}
        data-lenis-prevent="true"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <motion.div key={link.href} variants={itemVariants}>
              <a
                href={link.href}
                onClick={(e) => onLinkClick(e, link.href)}
                className={cn(
                  "text-2xl font-bold tracking-tight transition-colors duration-200 block py-1 cursor-pointer",
                  isActive 
                    ? "text-primary dark:text-white" 
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {link.label}
              </a>
            </motion.div>
          );
        })}
        
        <motion.div variants={itemVariants} className="pt-2">
          <a
            href="#contact"
            onClick={(e) => onLinkClick(e, "#contact")}
            className="inline-flex w-full items-center justify-center py-4 rounded-xl text-base font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all cursor-pointer"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* Footer Info inside Mobile Menu */}
      <div className="flex flex-col gap-6 border-t border-slate-200/50 dark:border-slate-800/40 pt-6">
        <div className="flex flex-col gap-2">
          <a 
            href={`mailto:${companyDetails.contact.email}`} 
            className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Mail className="w-4.5 h-4.5" />
            {companyDetails.contact.email}
          </a>
          <a 
            href={`tel:${companyDetails.contact.phone}`} 
            className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Phone className="w-4.5 h-4.5" />
            {companyDetails.contact.phone}
          </a>
        </div>
        
        {/* Social Link Badges */}
        <div className="flex items-center gap-4">
          <a 
            href={companyDetails.contact.socials[0].url} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all duration-300"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a 
            href={companyDetails.contact.socials[1].url} 
            onClick={(e) => {
              e.preventDefault();
              triggerSocialNotification();
              onClose();
            }}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a 
            href={companyDetails.contact.socials[2].url} 
            onClick={(e) => {
              e.preventDefault();
              triggerSocialNotification();
              onClose();
            }}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-pointer"
            aria-label="Twitter"
          >
            <Twitter className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
