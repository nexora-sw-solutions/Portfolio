"use client";

import React from "react";
import { companyDetails } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "./Navbar";
import { Mail, Phone, Globe, ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/shared/SocialIcons";
import { SocialNotificationToast, triggerSocialNotification } from "@/components/shared/SocialNotificationToast";
import { cn } from "@/lib/utils";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950/80 pt-20 pb-12 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 brand-bg-gradient opacity-80" />
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full brand-bg-gradient opacity-[0.03] dark:opacity-[0.08] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-slate-200 dark:border-slate-850">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-6">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2.5 group w-fit"
            >
              <div className="relative flex items-center justify-center p-2 rounded-xl bg-slate-950/90 dark:bg-transparent shadow-lg shadow-brand-blue/10 group-hover:brand-glow transition-all duration-300">
                <img 
                  src="/images/Logo/Logo_Rectangle.png" 
                  alt="Nexora Solutions" 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
              Nexora is a premium software engineering and digital solutions company crafting robust, interactive platforms that help businesses scale.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={companyDetails.contact.socials[0].url} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={companyDetails.contact.socials[1].url} 
                onClick={(e) => {
                  e.preventDefault();
                  triggerSocialNotification();
                }}
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={companyDetails.contact.socials[2].url} 
                onClick={(e) => {
                  e.preventDefault();
                  triggerSocialNotification();
                }}
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Subset) */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Core Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "#services")}
                    className="text-sm text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href={`mailto:${companyDetails.contact.email}`}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <span className="break-all">{companyDetails.contact.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${companyDetails.contact.phone}`}
                  className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                >
                  <Phone className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>{companyDetails.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-400">
                <Globe className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <span>{companyDetails.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-slate-700 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Nexora. All rights reserved. Designed for digital transformation.</p>
          <button
            onClick={handleScrollToTop}
            className="group flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:bg-primary dark:hover:bg-primary text-slate-800 dark:text-slate-400 hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Scroll to top"
            id="scroll-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
      <SocialNotificationToast />
    </footer>
  );
}
