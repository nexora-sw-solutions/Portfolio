import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
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
      <ServicesSection />
      <ProjectsSection />
      <TechStackSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
