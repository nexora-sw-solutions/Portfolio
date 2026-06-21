"use client";

import React, { useState, useEffect, useRef } from "react";
import { projects, ProjectItem } from "@/data/projects";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/providers/SmoothScrollProvider";
import AATSShowcase from "./AATSShowcase";

const categories = ["All", "Enterprise Software", "Retail Tech", "Logistics", "E-Commerce", "SaaS", "Healthcare", "Operations"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lenis = useSmoothScroll();

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      // Focus the scroll container to enable immediate keyboard scrolling
      setTimeout(() => {
        scrollContainerRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [activeProject, lenis]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  // Simple clean card hover movement values
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" as const }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="portfolio"
      className="dark py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/2.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Case Studies of Excellence"
          description="A selection of enterprise systems, custom applications, and transactional engines we have engineered to solve operational bottlenecks."
        />

        {projects.length > 1 ? (
          <>
            {/* Filter Categories */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12 md:mb-16">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-350 cursor-pointer relative border",
                      isActive
                        ? "text-white border-transparent brand-bg-gradient shadow-md shadow-brand-blue/20"
                        : "text-slate-800 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-850 dark:text-slate-400"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setActiveProject(project)}
                    className="group rounded-3xl border border-slate-200/60 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-brand-cyan/40 dark:hover:border-brand-cyan/40 hover-brand-glow hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Project Image Wrapper */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900/90 backdrop-blur-md shadow-md">
                          <span>Read Case Study</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                        priority={index < 3}
                      />
                    </div>

                    {/* Project Details */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1.5 leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-700 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-brand-pink/10 text-brand-pink">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-800 dark:text-slate-500 font-semibold">No case studies found in this category.</p>
              </div>
            )}
          </>
        ) : (
          /* Single Flagship Project Layout */
          <div className="flex justify-center mt-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setActiveProject(projects[0])}
              className="group w-full max-w-4xl rounded-3xl border border-slate-200/60 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-brand-cyan/40 dark:hover:border-brand-cyan/40 hover-brand-glow hover:-translate-y-1.5 transition-all duration-300 grid grid-cols-1 md:grid-cols-12"
            >
              {/* Project Image Wrapper */}
              <div className="relative aspect-video md:aspect-auto md:col-span-6 w-full min-h-[300px] overflow-hidden bg-slate-100 dark:bg-slate-950 border-b md:border-b-0 md:border-r border-slate-200/60 dark:border-slate-800/40">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900/90 backdrop-blur-md shadow-md">
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  priority
                />
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-10 md:col-span-6 flex flex-col justify-between text-left">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full mb-4">
                    Featured Flagship Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors duration-200">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-400 mt-4 leading-relaxed">
                    {projects[0].description}
                  </p>
                  
                  {/* Highlights list */}
                  <ul className="mt-5 space-y-2">
                    {projects[0].highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-350 leading-snug">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {projects[0].technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-850 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {projects[0].technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-brand-pink/10 text-brand-pink">
                        +{projects[0].technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue dark:text-brand-cyan shrink-0 group-hover:underline">
                    View Case Study <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 dark:bg-slate-800/80 border border-slate-700 text-white dark:text-slate-200 hover:bg-primary hover:border-primary transition-colors cursor-pointer"
                aria-label="Close Case Study"
                id="close-case-study-modal-btn"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                tabIndex={-1}
                data-lenis-prevent="true"
                className="overflow-y-auto flex-grow overscroll-contain focus:outline-none" 
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {/* Case Study Cover Image */}
                {activeProject.id === "aats-audit-system" ? (
                  <AATSShowcase project={activeProject} />
                ) : (
                  <div className="relative w-full aspect-video md:aspect-[2.2/1] overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6 md:p-8">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">
                          {activeProject.category} Case Study
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight">
                          {activeProject.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case Study Info Content */}
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                  {/* Left Column: Story details */}
                  <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
                    
                    {/* Challenge Block */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-sm md:text-base text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                        {activeProject.challenge}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-2">
                        Our Solution
                      </h4>
                      <p className="text-sm md:text-base text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                        {activeProject.solution}
                      </p>
                    </div>

                    {/* Highlights Block */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-3.5">
                        Key Architecture Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {activeProject.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Specs & Business Impact */}
                  <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 lg:border-l lg:border-slate-100 lg:dark:border-slate-800 lg:pl-8">
                    {/* Metric / Impact Badge */}
                    <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                        Measured Business Impact
                      </h5>
                      <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                        {activeProject.impact}
                      </p>
                    </div>

                    {/* Tech Stacks */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-350 border border-slate-200 dark:border-slate-750"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct Contact Button */}
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-700 dark:text-slate-400 leading-normal mb-3.5">
                        Need a similar system designed for your operations?
                      </p>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveProject(null);
                          const target = document.querySelector("#contact");
                          if (target) target.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex w-full items-center justify-center py-3 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:brand-bg-gradient hover:text-white hover-brand-glow transition-all duration-300 gap-2"
                      >
                        <span>Inquire About Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
