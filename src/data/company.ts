export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export const companyDetails = {
  name: "Nexora",
  tagline: "Building Software That Powers Modern Businesses",
  description: "We design and develop custom software solutions, web platforms, mobile applications, SaaS products, and enterprise systems that help businesses scale and innovate.",
  mission: "To engineer premium digital tools and software platforms that establish clear operational advantages, security, and growth for forward-thinking businesses.",
  vision: "To become the global standard for elite custom software engineering, recognized for technical excellence, robust systems, and striking user interfaces.",

  differentiators: [
    {
      title: "Direct Engineering Collaboration",
      description: "You work directly with the senior engineers building your product. We eliminate account managers and middle-men to ensure rapid feedback, zero miscommunication, and complete alignment with your business goals.",
      icon: "Users"
    },
    {
      title: "Structured, Predictable Delivery",
      description: "We follow a rigorous, transparent workflow that eliminates uncertainty. From discovery to deployment, you have complete visibility into our progress, ensuring your product is delivered on time and on budget.",
      icon: "Milestone",
      link: "#process",
      linkText: "See our Workflow of Excellence →"
    },
    {
      title: "Bank-Grade IP & Data Protection",
      description: "We treat your intellectual property with absolute confidentiality. Enterprise-grade security protocols, secure infrastructure, and strict data privacy are baked into your software's architecture from day one.",
      icon: "ShieldCheck"
    },
    {
      title: "Evolution, Not Just Deployment",
      description: "Our relationship doesn't end when your product goes live. We offer dedicated maintenance agreements to proactively monitor performance, push security updates, and continuously evolve your software.",
      icon: "Infinity"
    }
  ],

  contact: {
    email: "contact@mail.nexorasoftwaresolution.com",
    phone: "+94 72 431 4001",
    address: "Based in Kandy, Sri Lanka • Serving clients worldwide",
    mapCoords: { lat: 7.2906, lng: 80.6337 }, // Kandy, Sri Lanka
    socials: [
      { platform: "GitHub", url: "https://github.com/nexora-sw-solutions", icon: "Github" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/nexora-dev", icon: "Linkedin" },
      { platform: "Twitter", url: "https://twitter.com/nexora_dev", icon: "Twitter" }
    ]
  },

  stats: [
    { value: "10+", label: "Projects Completed" },
    { value: "99.99%", label: "System Uptime Managed" },
    { value: "5+", label: "Engineers & Designers" },
    { value: "98%", label: "Client SLA Retention" }
  ]
};
