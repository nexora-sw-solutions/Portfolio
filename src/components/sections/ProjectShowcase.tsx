"use client";

import { CldImage } from "next-cloudinary";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ShowcaseImage } from "@/data/projects";

interface ProjectShowcaseProps {
  showcase: {
    primary: ShowcaseImage;
    secondary: ShowcaseImage;
    tertiary: ShowcaseImage;
  };
}

export default function ProjectShowcase({ showcase }: ProjectShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<ShowcaseImage | null>(null);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="w-full bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
              04 / Product
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Project Showcase
            </h2>
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {/* Primary Visual */}
            <div className="w-full flex flex-col gap-4">
              <button
                onClick={() => setSelectedImage(showcase.primary)}
                className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-brand-cyan/50 transition-all text-left"
                aria-label={`View full screen image of ${showcase.primary.title}`}
              >
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-200 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                </div>
                <div className="relative w-full h-[calc(100%-35px)]">
                  <CldImage
                    src={showcase.primary.src}
                    alt={showcase.primary.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Subtle hover overlay to indicate clickability */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                </div>
              </button>
              <div className="max-w-3xl">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {showcase.primary.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {showcase.primary.caption}
                </p>
              </div>
            </div>

            {/* Secondary & Tertiary Visuals (Asymmetric Split with Consistent Heights) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
              {/* Secondary (Larger Width) */}
              <div className="md:col-span-7 flex flex-col gap-4">
                <button
                  onClick={() => setSelectedImage(showcase.secondary)}
                  className="group relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-brand-cyan/50 transition-all text-left"
                  aria-label={`View full screen image of ${showcase.secondary.title}`}
                >
                  <CldImage
                    src={showcase.secondary.src}
                    alt={showcase.secondary.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                </button>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {showcase.secondary.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {showcase.secondary.caption}
                  </p>
                </div>
              </div>

              {/* Tertiary (Smaller Width, Same Height) */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <button
                  onClick={() => setSelectedImage(showcase.tertiary)}
                  className="group relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-brand-cyan/50 transition-all text-left"
                  aria-label={`View full screen image of ${showcase.tertiary.title}`}
                >
                  <CldImage
                    src={showcase.tertiary.src}
                    alt={showcase.tertiary.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
                </button>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {showcase.tertiary.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {showcase.tertiary.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12"
            onClick={() => setSelectedImage(null)} // Click outside to close
          >
            {/* Blurred / Subdued Backdrop */}
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center pointer-events-none"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-0 right-0 z-10 pointer-events-auto p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full backdrop-blur-md transition-colors shadow-lg border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div 
                className="relative w-full h-full flex items-center justify-center pointer-events-auto mt-12 mb-8 md:my-0"
                onClick={(e) => e.stopPropagation()} // Prevent click-through closing
              >
                <CldImage
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Optional Caption inside Modal (Unobtrusive) */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center pointer-events-none flex justify-center"
              >
                <div className="inline-block bg-slate-950/80 backdrop-blur-md border border-slate-800/50 rounded-xl px-6 py-3 shadow-xl max-w-3xl">
                  <h4 className="text-sm font-bold text-white mb-1">{selectedImage.title}</h4>
                  <p className="text-xs text-slate-300">{selectedImage.caption}</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
