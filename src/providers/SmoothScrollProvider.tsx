"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only initialize smooth scroll on desktop screens for mobile performance
    if (window.innerWidth < 1024) return;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExponential
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenisInstance;

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dynamic resize handler
    const resizeObserver = new ResizeObserver(() => {
      lenisInstance.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
