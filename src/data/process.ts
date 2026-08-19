export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  deliverable: string;
  keyActivities: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Alignment",
    description: "We deep-dive into your business model, customer workflows, and operational bottlenecks. Through intensive workshops, we align on goals, technical hurdles, and project boundaries.",
    icon: "Search",
    deliverable: "Product Brief & Scope Alignment Document",
    keyActivities: [
      "Requirements Elicitation Workshops",
      "Current-State Workflow Analysis",
      "Initial Feasibility & Risk Assessment"
    ]
  },
  {
    step: 2,
    title: "Strategic Planning",
    description: "We outline the system architecture, select the optimal technology stack, define milestones, and establish security compliance parameters (like HIPAA, ISO, or SOC2).",
    icon: "Map",
    deliverable: "Technical Architecture & Implementation Blueprint",
    keyActivities: [
      "Infrastructure & Database Modeling",
      "Technology Stack Finalization",
      "Security & Compliance Mapping"
    ]
  },
  {
    step: 3,
    title: "High-Fidelity UI/UX Design",
    description: "Our designers craft interactive wireframes, custom design systems, and beautiful UI mockups. We validate user flows through clickable prototypes before writing code.",
    icon: "Framer",
    deliverable: "Figma Prototypes & Verified Design Tokens",
    keyActivities: [
      "User Persona & Journey Mapping",
      "Design System Component Construction",
      "Interactive Prototype Validation"
    ]
  },
  {
    step: 4,
    title: "Agile Development",
    description: "Our engineering team builds your product in structured 2-week sprints. We utilize rigorous automated testing and continuous peer reviews to guarantee zero surprises and enterprise-grade reliability.",
    icon: "Code",
    deliverable: "Bi-weekly Demo Builds & Code Access",
    keyActivities: [
      "Sprint-based Iterative Development",
      "Strict Code Reviews & Static Typing",
      "Continuous Integration (CI) Automation"
    ]
  },
  {
    step: 5,
    title: "Rigorous QA & Testing",
    description: "We subject your application to rigorous load testing and end-to-end automation. This includes strict security vulnerability scanning and manual usability audits across all devices.",
    icon: "CheckSquare",
    deliverable: "Comprehensive QA Reports & Security Audits",
    keyActivities: [
      "Automated End-to-End (E2E) Testing",
      "Penetration & Vulnerability Scanning",
      "Cross-device Usability Audits"
    ]
  },
  {
    step: 6,
    title: "Deployment & Launch",
    description: "We coordinate a seamless, zero-downtime deployment to production cloud infrastructures (Azure or AWS). We configure autoscaling policies and monitor setup closely.",
    icon: "Rocket",
    deliverable: "Live Production Release & Infrastructure Configuration",
    keyActivities: [
      "Zero-downtime Pipeline Execution",
      "Autoscaling & Load Balancer Config",
      "Post-deployment Sanity Checks"
    ]
  },
  {
    step: 7,
    title: "Long-Term SLA Support",
    description: "We provide dedicated post-launch support contracts. This includes performance optimization updates, security patches, library upgrades, and feature expansions.",
    icon: "HeartHandshake",
    deliverable: "SLA Support Dashboard & Monthly Maintenance Log",
    keyActivities: [
      "24/7 Infrastructure Monitoring",
      "Proactive Security Patching",
      "Continuous Feature Iteration"
    ]
  }
];
