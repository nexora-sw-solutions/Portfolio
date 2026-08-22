import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AATSShowcase from "@/components/sections/AATSShowcase";
import ApexDriveShowcase from "@/components/sections/ApexDriveShowcase";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-white dark:bg-slate-950 min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32"></div>

      <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        <div className="relative w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col text-left">
          
          {/* Case Study Cover Image */}
          {project.id === "aats-audit-system" ? (
            <AATSShowcase project={project} />
          ) : project.id === "apexdrive-crm" ? (
            <ApexDriveShowcase project={project} />
          ) : (
            <div className="relative w-full aspect-video md:aspect-[2.2/1] overflow-hidden bg-slate-100 dark:bg-slate-950">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6 md:p-10">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {project.category} Case Study
                  </span>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>
          )}

          {/* Case Study Info Content */}
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
            {/* Left Column: Story details */}
            <div className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
              
              {/* Challenge Block */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-3">
                  The Challenge
                </h4>
                <p className="text-base md:text-lg text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Block */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-3">
                  Our Solution
                </h4>
                <p className="text-base md:text-lg text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Highlights Block */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-4">
                  Key Architecture Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Specs & Business Impact */}
            <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10 lg:border-l lg:border-slate-100 lg:dark:border-slate-800 lg:pl-10">
              {/* Metric / Impact Badge */}
              <div className="p-6 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                  Measured Business Impact
                </h5>
                <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                  {project.impact}
                </p>
              </div>

              {/* Tech Stacks */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-500 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-750"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contact Button */}
              <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm text-slate-700 dark:text-slate-400 leading-normal mb-4">
                  Need a similar system designed for your operations?
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center py-4 rounded-xl text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:brand-bg-gradient hover:text-white hover-brand-glow transition-all duration-300 gap-2"
                >
                  <span>Inquire About Project</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
