export interface Technology {
  name: string;
  category: "frontend" | "backend" | "mobile" | "database" | "cloud";
  level: string; // e.g., "Expertise", "Core", "Advanced"
  description: string;
  connections: string[]; // Connected technologies in the ecosystem
}

export const techStack: Technology[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    level: "Core Framework",
    description: "Highly componentized interactive systems built with state optimization and performant render life-cycles.",
    connections: ["Next.js", "TypeScript", "Tailwind CSS", "React Native"]
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "Core Framework",
    description: "Production-ready App Router architectures with localized caching, edge rendering, and static generation.",
    connections: ["React", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "Language Standard",
    description: "Strict typing across interfaces, components, and APIs to guarantee production safety and clear developer contracts.",
    connections: ["React", "Next.js", "Node.js", "React Native"]
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Styling Utility",
    description: "Expressive utility classes mapped to CSS variables for dynamic themes, smooth layouts, and fast interfaces.",
    connections: ["React", "Next.js"]
  },
  {
    name: "Framer Motion",
    category: "frontend",
    level: "Animation Library",
    description: "Declarative, physics-based UI transitions, layout modifications, and exit/entry micro-animations.",
    connections: ["React", "Next.js"]
  },

  // Backend
  {
    name: "ASP.NET Core",
    category: "backend",
    level: "Enterprise Architecture",
    description: "Secure, multithreaded backend Web APIs running compiled C# code for enterprise logic and sub-millisecond tasks.",
    connections: ["SQL Server", "Azure", "React"]
  },
  {
    name: "Node.js",
    category: "backend",
    level: "Advanced Stack",
    description: "Non-blocking event loop backend services handling high-concurrency client actions and data ingestion.",
    connections: ["TypeScript", "PostgreSQL", "React", "AWS"]
  },

  // Mobile
  {
    name: "Flutter",
    category: "mobile",
    level: "Core Platform",
    description: "Engineered single-codebase mobile applications utilizing high-performance native-drawn graphic modules.",
    connections: ["Dart", "PostgreSQL", "AWS"]
  },
  {
    name: "React Native",
    category: "mobile",
    level: "Core Platform",
    description: "Dynamic iOS & Android apps written in TypeScript sharing application logic with web architectures.",
    connections: ["React", "TypeScript", "Node.js"]
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "database",
    level: "Primary RDBMS",
    description: "Highly optimized transactional relational database with horizontal read-scaling, JSONB columns, and ACID compliance.",
    connections: ["Node.js", "AWS", "Next.js"]
  },
  {
    name: "SQL Server",
    category: "database",
    level: "Enterprise RDBMS",
    description: "Robust Microsoft database storage featuring stored procedures, data warehousing, and Active Directory login integrations.",
    connections: ["ASP.NET Core", "Azure"]
  },

  // Cloud
  {
    name: "Azure",
    category: "cloud",
    level: "Cloud Infrastructure",
    description: "Enterprise cloud hosting utilizing App Services, Azure SQL, blob storage networks, and Active Directory security.",
    connections: ["ASP.NET Core", "SQL Server"]
  },
  {
    name: "AWS",
    category: "cloud",
    level: "Cloud Infrastructure",
    description: "Amazon Web Services orchestration, utilizing Lambda, S3 CDN buckets, ECS containers, and RDS database nodes.",
    connections: ["Node.js", "PostgreSQL", "Docker"]
  },
  {
    name: "Docker",
    category: "cloud",
    level: "Containerization",
    description: "Standardized container builds ensuring isolated, repeatable dev environments and easy Kubernetes scaling.",
    connections: ["Node.js", "ASP.NET Core", "AWS"]
  }
];
