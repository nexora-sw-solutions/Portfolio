"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "../shared/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

const categories = ["All", "Enterprise Software", "Retail Tech", "Logistics", "E-Commerce", "SaaS", "Healthcare", "Operations"];

interface ProjectsSectionProps {
  limit?: number;
  showFilters?: boolean;
}

export function ProjectsSection({ limit, showFilters = true }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

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
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/2.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Case Studies of Excellence"
          description="A selection of enterprise systems, custom applications, and transactional engines we have engineered to solve operational bottlenecks."
        />

        {showFilters && (
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
        )}

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-cyan/40 dark:hover:border-brand-cyan/40 hover-brand-glow hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                <Link href={`/portfolio/${project.id}`} className="flex flex-col h-full outline-none">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900/90 backdrop-blur-md shadow-md">
                        <span>Read Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <CldImage
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                      priority={index < 3}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

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
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-200/50 dark:border-slate-700/50"
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {displayedProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-800 dark:text-slate-500 font-semibold">No case studies found.</p>
          </div>
        )}

        {limit && (
          <div className="mt-16 text-center flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white brand-bg-gradient shadow-lg shadow-brand-blue/20 hover:shadow-brand-cyan/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
