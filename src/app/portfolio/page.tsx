import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function PortfolioPage() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-white dark:bg-slate-950 min-h-screen">
      <div className="flex-grow">
        <ProjectsSection showFilters={true} />
      </div>
    </div>
  );
}
