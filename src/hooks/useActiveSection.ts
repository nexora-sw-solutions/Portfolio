"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the upper-middle of screen
      threshold: 0,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, defaultOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, options]);

  return activeSection;
}
