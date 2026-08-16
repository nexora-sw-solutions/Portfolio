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

  values: [
    {
      title: "Technical Excellence",
      description: "We write clean, strictly-typed, scalable code that stands the test of time and handles extreme traffic loads seamlessly.",
      icon: "Cpu"
    },
    {
      title: "Security & Trust First",
      description: "From database partitioning to API request encryption, security is integrated into our application blueprints from day one.",
      icon: "ShieldAlert"
    },
    {
      title: "Innovation Driven",
      description: "We continually adopt modern web standards, serverless paradigms, and 3D web interfaces to keep our clients ahead of the curve.",
      icon: "Lightbulb"
    },
    {
      title: "Long-term Support",
      description: "We build lasting relationships, standing by our software with strong SLAs, regular updates, and responsive maintenance.",
      icon: "ShieldCheck"
    }
  ] as CompanyValue[],

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
