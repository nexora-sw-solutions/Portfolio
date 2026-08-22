import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden">
      {/* Sections stacked sequentially */}
      <HeroSection />
      <TechMarquee />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProjectsSection limit={4} showFilters={false} />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <MetricsSection />
      <ContactSection />
    </div>
  );
}
