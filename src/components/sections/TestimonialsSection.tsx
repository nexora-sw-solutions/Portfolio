"use client";

import React, { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const activeTestimonial = testimonials[activeIdx];

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" as const },
    }),
  };

  return (
    <section
      id="testimonials"
      className="dark py-24 md:py-32 px-6 md:px-8 relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <SectionHeading
          badge="Testimonials"
          title="Client Success Outcomes"
          description="Read about how our engineering choices saved operational expenses and increased transaction capacities."
        />

        {testimonials.length === 0 ? (
          /* Premium Placeholder State */
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-xl p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg flex flex-col items-center gap-6"
            >
              {/* Animated hand-shake or feedback icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20">
                <Quote className="w-6 h-6 fill-primary" />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  Partnerships in Progress
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
                  We are currently building successful partnerships. Real client testimonials will be showcased here soon.
                </p>
              </div>

              {/* Interactive subtle styling details */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full" />
            </motion.div>
          </div>
        ) : (
          <>
            {/* Carousel Frame */}
            <div className="relative mt-8 min-h-[360px] flex items-center justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeIdx}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full text-center flex flex-col items-center gap-6"
                >
                  {/* Quote Mark */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                    <Quote className="w-6 h-6 fill-primary" />
                  </div>

                  {/* Rating Star Row */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: activeTestimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-800 dark:text-slate-200 font-semibold italic leading-relaxed max-w-3xl">
                    "{activeTestimonial.quote}"
                  </blockquote>

                  {/* Client Info Block */}
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-indigo-500 text-white font-extrabold text-xs">
                      {activeTestimonial.avatar}
                    </div>
                    <div className="text-center">
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                        {activeTestimonial.author}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-400 font-medium leading-normal mt-0.5">
                        {activeTestimonial.role}, <span className="text-primary font-semibold">{activeTestimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls Layout */}
            <div className="flex items-center justify-center gap-6 mt-12">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-primary transition-all shadow-sm cursor-pointer"
                aria-label="Previous Testimonial"
                id="prev-testimonial-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIdx ? 1 : -1);
                      setActiveIdx(idx);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      activeIdx === idx ? "w-6 bg-primary" : "w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-350"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-primary transition-all shadow-sm cursor-pointer"
                aria-label="Next Testimonial"
                id="next-testimonial-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
