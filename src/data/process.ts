export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Alignment",
    description: "We deep-dive into your business model, customer workflows, and operational bottlenecks. Through intensive workshops, we align on goals, technical hurdles, and project boundaries.",
    icon: "Search",
    deliverable: "Product Brief & Scope Alignment Document"
  },
  {
    step: 2,
    title: "Strategic Planning",
    description: "We outline the system architecture, select the optimal technology stack, define milestones, and establish security compliance parameters (like HIPAA, ISO, or SOC2).",
    icon: "Map",
    deliverable: "Technical Architecture & Implementation Blueprint"
  },
  {
    step: 3,
    title: "High-Fidelity UI/UX Design",
    description: "Our designers craft interactive wireframes, custom design systems, and beautiful UI mockups. We validate user flows through clickable prototypes before writing code.",
    icon: "Framer",
    deliverable: "Figma Prototypes & Verified Design Tokens"
  },
  {
    step: 4,
    title: "Agile Development",
    description: "Our engineering team develops the product in structured 2-week sprints. We use strict static typing, unit testing, and continuous integration pipelines to guarantee quality.",
    icon: "Code",
    deliverable: "Bi-weekly Demo Builds & Code Access"
  },
  {
    step: 5,
    title: "Rigorous QA & Testing",
    description: "We run comprehensive automation, unit, integration, and load testing. This includes strict security vulnerability scanning and manual usability audits across devices.",
    icon: "CheckSquare",
    deliverable: "Comprehensive QA Reports & Security Audits"
  },
  {
    step: 6,
    title: "Deployment & Launch",
    description: "We coordinate a seamless, zero-downtime deployment to production cloud infrastructures (Azure or AWS). We configure autoscaling policies and monitor setup closely.",
    icon: "Rocket",
    deliverable: "Live Production Release & Infrastructure Configuration"
  },
  {
    step: 7,
    title: "Long-Term SLA Support",
    description: "We provide dedicated post-launch support contracts. This includes performance optimization updates, security patches, library upgrades, and feature expansions.",
    icon: "HeartHandshake",
    deliverable: "SLA Support Dashboard & Monthly Maintenance Log"
  }
];
