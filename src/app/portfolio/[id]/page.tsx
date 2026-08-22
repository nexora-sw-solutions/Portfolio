import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AATSShowcase from "@/components/sections/AATSShowcase";
import ApexDriveShowcase from "@/components/sections/ApexDriveShowcase";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

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

      {/* Back button */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-4 pb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Phase 1: Case Study Hero (Full Width) */}
      <div className="w-full relative border-y border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950">
        {project.id === "aats-audit-system" ? (
          <AATSShowcase project={project} />
        ) : project.id === "apexdrive-crm" ? (
          <ApexDriveShowcase project={project} />
        ) : (
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover object-top opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent flex items-center p-6 md:p-16 lg:p-24">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full backdrop-blur-md mb-4">
                  {project.category} Case Study
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Phase 2: Content Structure */}
      <div className="flex-grow w-full flex flex-col items-center">
        
        {/* Challenge & Solution (Overview) */}
        <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col gap-16 md:gap-24">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">01 / The Challenge</h3>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">The Problem</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">02 / The Solution</h3>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Approach</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">03 / Features</h3>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Highlights</h2>
            </div>
            <div className="md:w-2/3">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-base font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* Phase 3 Project Showcase (Asymmetric Grid with Lightbox) */}
        {project.showcase && (
          <ProjectShowcase showcase={project.showcase} />
        )}

        {/* Results & Tech Stack */}
        <div className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col gap-16 md:gap-24">
          <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">05 / The Outcome</h3>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Business Impact</h2>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="p-8 md:p-10 rounded-3xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 shadow-sm">
                <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-emerald-50 leading-snug">
                  "{project.impact}"
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center text-center border-t border-slate-200 dark:border-slate-800 pt-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full text-sm font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Next Project / CTA */}
        <div className="w-full bg-slate-900 dark:bg-slate-950 py-24 md:py-32 border-t border-slate-800 dark:border-slate-900">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to build something similar?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl">
              Let's discuss how our engineering team can solve your operational bottlenecks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white brand-bg-gradient shadow-lg shadow-brand-blue/20 hover:shadow-brand-cyan/30 hover:-translate-y-0.5 transition-all duration-300 gap-2"
              >
                <span>Inquire About Project</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
