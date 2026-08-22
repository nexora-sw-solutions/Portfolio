"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  
  const sectionIds = navLinks.map((link) => link.href.replace("/#", "").replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("/#", "").replace("#", "");
    
    if (pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "py-4 bg-white/80 dark:bg-slate-950/80 border-slate-900/10 dark:border-brand-blue/20 backdrop-blur-xl shadow-sm" 
            : "py-6 bg-transparent border-transparent shadow-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 group"
            id="navbar-logo"
          >
            <div className="relative flex items-center justify-center p-1.5 rounded-lg group-hover:brand-glow transition-all duration-300">
              <img 
                src="/images/Logo/Logo%20Horizontal%20-%20White.png" 
                alt="Nexora Solutions" 
                className="h-7 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-slate-200/40 dark:border-slate-800/30 bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:text-slate-950 dark:hover:text-white cursor-pointer",
                    isActive ? "text-primary dark:text-white" : "text-slate-700 dark:text-slate-400"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-white dark:bg-slate-800/80 shadow-sm rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:brand-bg-gradient hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-md hover-brand-glow cursor-pointer"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile Menu & Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            onClose={() => setIsMobileMenuOpen(false)} 
            onLinkClick={handleLinkClick}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
}
