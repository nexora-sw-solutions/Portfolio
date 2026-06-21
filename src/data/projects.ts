export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  impact: string;
  challenge: string;
  solution: string;
  highlights: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "aats-audit-system",
    title: "AATS Audit Software",
    category: "Enterprise Software",
    description: "A secure, offline-first desktop and cloud platform engineered for seamless audit management, compliance tracking, and evidence synchronization.",
    image: "/Projects/AATS/AATS_Dashboard.png",
    technologies: ["C# 14 / .NET 10", "Avalonia UI", "ASP.NET Core", "SQLite & SQLCipher", "PostgreSQL", "Cloudflare R2"],
    impact: "Streamlined audit workflows with seamless offline capabilities, managing 100k+ rows of data smoothly while maintaining strict security compliance.",
    challenge: "Auditors working offline or in remote locations struggled with slow performance on massive datasets and data conflicts when syncing sensitive evidence files with the central database.",
    solution: "We engineered a modern, hardware-accelerated desktop client using Avalonia UI and .NET 10. The app encrypts local data with 256-bit AES and utilizes Dotmim.Sync for blazing-fast bi-directional conflict resolution against an ASP.NET Core backend. All audit evidence is securely stored in zero-egress Cloudflare R2.",
    highlights: [
      "Hardware-accelerated data grids handling 100k+ rows flawlessly",
      "Blazing fast bi-directional sync with intelligent conflict resolution",
      "Secure local database encryption (256-bit AES via SQLCipher)",
      "Automated client notifications and background delta updates"
    ]
  }
];
