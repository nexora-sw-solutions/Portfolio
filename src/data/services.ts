export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  techs: string[];
  useCase: string;
  expectedOutcome: string;
}

export const services: ServiceItem[] = [
  {
    id: "custom-web",
    title: "Custom Web Applications",
    description: "High-performance, scalable web systems designed to meet complex operational needs and drive digital innovation.",
    icon: "Globe",
    features: [
      "Microservices & Serverless Architectures",
      "Real-time Data Synchronization",
      "High Availability & Autoscaling Systems",
      "Multi-tenant SaaS Enablement"
    ],
    techs: ["React", "Next.js", "Node.js", "TypeScript", "ASP.NET Core"],
    useCase: "Ideal for organizations migrating legacy systems to modern web interfaces or launching heavy-duty web services.",
    expectedOutcome: "Scales effortlessly to millions of users while reducing cloud hosting costs through optimized architecture."
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Premium cross-platform and native mobile experiences that engage users and deliver seamless offline-first capabilities.",
    icon: "Smartphone",
    features: [
      "Offline-first Architecture",
      "Biometric Authentication & Security",
      "Custom UI/UX Animations",
      "Geofencing & Hardware Integration"
    ],
    techs: ["Flutter", "React Native", "TypeScript", "Dart", "Swift/Kotlin"],
    useCase: "Tailored for consumer-facing apps, enterprise field operations, and high-performance mobile utilities.",
    expectedOutcome: "Higher user retention through premium, native-feeling interactions and reliable offline functionality."
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms & Dashboards",
    description: "End-to-end cloud-hosted software products with subscription management, high security, and clean analytics interfaces.",
    icon: "Layers",
    features: [
      "Stripe/Payment Gateway Integration",
      "Role-Based Access Control (RBAC)",
      "Interactive Dashboards",
      "Automated Billing & Reporting"
    ],
    techs: ["React", "Next.js", "Tailwind CSS", "Zod", "PostgreSQL"],
    useCase: "Perfect for tech startups and enterprises launching new subscription-based services or analytical control hubs.",
    expectedOutcome: "Accelerated time-to-market with enterprise-grade security and automated recurring billing ready on day one."
  },
  {
    id: "enterprise-erp",
    title: "Enterprise Solutions & ERP",
    description: "Robust enterprise resource planning systems that streamline internal operations, supply chains, and workflows.",
    icon: "Database",
    features: [
      "Automated Resource Allocation",
      "Inventory & Asset Tracking",
      "Compliance & Financial Reporting",
      "Secure API Integrations"
    ],
    techs: ["ASP.NET Core", "SQL Server", "React", "Azure", "Docker"],
    useCase: "Designed for mid-to-large scale enterprises requiring seamless inventory, resource, and employee tracking systems.",
    expectedOutcome: "Reduction in operational overhead by 25-40% through unified data systems and workflow automation."
  },
  {
    id: "payroll-pos",
    title: "Payroll & POS Systems",
    description: "Highly secure and compliant transactional systems designed for error-free financial processing and point-of-sale efficiency.",
    icon: "CreditCard",
    features: [
      "Automated Tax & Compliance Calculations",
      "Direct Deposit & Receipt Generation",
      "Offline POS Capabilities",
      "Multi-store Sync & Inventory Alerting"
    ],
    techs: ["ASP.NET Core", "TypeScript", "SQL Server", "React", "AWS"],
    useCase: "Used by retail chains, corporate HR departments, and hospitality venues for transactional integrity.",
    expectedOutcome: "Elimination of manual entry errors and 100% compliance with complex financial reporting standards."
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description: "Replacing repetitive manual workflows with intelligent automated software bots, triggers, and integrations.",
    icon: "Cpu",
    features: [
      "Custom Workflow Automation (CI/CD style)",
      "Automated Invoice & Email Triggering",
      "AI-driven Data Extraction & OCR",
      "Legacy System API Wrapping"
    ],
    techs: ["Node.js", "Python", "AWS Lambda", "Azure Functions", "Docker"],
    useCase: "Optimized for operations teams wanting to reduce overhead, eliminate human error, and accelerate turnaround times.",
    expectedOutcome: "Saving hundreds of manual man-hours per month by digitizing and accelerating repetitive operational tasks."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Studio",
    description: "High-fidelity modern designs, interactive prototypes, and premium user-journey mappings focused on conversions.",
    icon: "Framer",
    features: [
      "User Persona & Journey Mapping",
      "High-Fidelity Interactive Prototypes",
      "Comprehensive Design System Construction",
      "A/B Testing & Usability Validation"
    ],
    techs: ["Figma", "Framer", "Adobe CC", "Tailwind CSS", "CSS Variables"],
    useCase: "Crucial for pre-launch product validation, UI redesigns, and creating consistent brand identities.",
    expectedOutcome: "Increased conversion rates and significantly improved user satisfaction through friction-free user journeys."
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description: "Bespoke software developed from the ground up to solve unique business bottlenecks where off-the-shelf software falls short.",
    icon: "Wrench",
    features: [
      "Deep Domain Business Analysis",
      "Bespoke System Architecture Design",
      "Proprietary Algorithm Implementation",
      "Long-term Support & Security Patches"
    ],
    techs: ["ASP.NET Core", "Node.js", "PostgreSQL", "React", "Docker"],
    useCase: "For specialized businesses with unique workflow requirements that standard ERPs or software products cannot support.",
    expectedOutcome: "A proprietary digital asset that perfectly maps to your unique business model, providing a distinct competitive advantage."
  }
];
