import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
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
      <ProjectsSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
