import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function PortfolioPage() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-white dark:bg-slate-950 min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>
      
      <div className="flex-grow">
        <ProjectsSection showFilters={true} />
      </div>
    </div>
  );
}
