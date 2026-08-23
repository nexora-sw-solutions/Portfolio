"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Zap, Database, ArrowUpCircle, Check } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { ProjectItem } from "@/data/projects";

interface AATSShowcaseProps {
  project: ProjectItem;
}

export default function AATSShowcase({ project }: AATSShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for dampening movement
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });

  // Transform mouse values into 3D rotations for the mockup
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  // Transform mouse values for parallax shifting of floating badges
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates between -0.5 and 0.5
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Feature list on the left side
  const features = [
    { text: "100k+ Rows Grid (Avalonia UI)", color: "text-amber-400" },
    { text: "AES-256 SQLCipher Database", color: "text-emerald-400" },
    { text: "Dotmim.Sync Offline-First Logic", color: "text-cyan-400" },
    { text: "Velopack Silent Delta Updates", color: "text-fuchsia-400" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-900 group select-none py-10 px-6 sm:px-10 md:py-16 md:px-14 min-h-[460px] flex items-center"
      style={{ perspective: 1200 }}
    >
      {/* Cyber Ambient Glow Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(20,184,166,0.15)_0%,rgba(15,23,42,0)_60%)] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(14, 165, 233, 0.2) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center z-10">
        
        {/* Left Info Column */}
        <div className="md:col-span-5 flex flex-col items-start text-left gap-4">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            {project.category} Case Study
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
          >
            {project.title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm mt-1"
          >
            A high-performance offline-first enterprise dashboard featuring local encryption, robust multi-source data sync, and instant delta deployment.
          </motion.p>

          {/* Feature Badges list on left (desktop only) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden sm:flex flex-col gap-2 mt-2 w-full"
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 border border-slate-800 shrink-0">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Showcase Column (Mockup + Parallax Badges) */}
        <div className="md:col-span-7 relative w-full flex items-center justify-center py-6 sm:py-8">
          
          {/* Floating Badge 1: Top Right */}
          <motion.div
            style={{ translateX, translateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-[12px] right-[4%] z-20 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl border border-cyan-500/30 text-cyan-200 bg-slate-900/85 backdrop-blur-md shadow-lg"
          >
            <div className="p-1 rounded bg-cyan-500/10 shrink-0">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-left leading-tight pr-1">
              <div className="text-[9px] font-extrabold uppercase tracking-wide">Offline Sync</div>
              <div className="text-[8px] font-semibold text-slate-400 mt-0.5">Dotmim.Sync engine</div>
            </div>
          </motion.div>

          {/* Floating Badge 2: Bottom Left */}
          <motion.div
            style={{ 
              translateX: useTransform(mouseXSpring, [-0.5, 0.5], [12, -12]), 
              translateY: useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]),
              transformStyle: "preserve-3d" 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-[8px] left-[2%] z-20 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl border border-emerald-500/30 text-emerald-200 bg-slate-900/85 backdrop-blur-md shadow-lg"
          >
            <div className="p-1 rounded bg-emerald-500/10 shrink-0">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-left leading-tight pr-1">
              <div className="text-[9px] font-extrabold uppercase tracking-wide">AES-256 Cipher</div>
              <div className="text-[8px] font-semibold text-slate-400 mt-0.5">SQLite local security</div>
            </div>
          </motion.div>

          {/* Mockup Frame */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[480px] sm:max-w-[500px] aspect-[16/10] bg-slate-900/90 rounded-2xl border border-slate-800/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.06)] backdrop-blur-sm overflow-hidden z-10"
          >
            {/* macOS titlebar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/60 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/85" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/85" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/85" />
              </div>
              
              {/* macOS Address Bar */}
              <div className="flex items-center justify-center gap-1 px-3 py-0.5 text-[9px] font-medium text-slate-400 bg-slate-900/80 border border-slate-800/60 rounded-md w-1/2 max-w-[200px] truncate">
                <span className="text-[8px] text-teal-400">🔒</span>
                <span className="truncate">audit.aats-systems.io</span>
              </div>

              <div className="w-10" />
            </div>

            {/* Content Area */}
            <div className="relative w-full h-[calc(100%-35px)] bg-slate-950">
              <CldImage
                src={project.image}
                alt="AATS Audit Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top transition-transform duration-500 hover:scale-102"
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/1.5 to-white/3 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
