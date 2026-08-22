export interface ShowcaseImage {
  src: string;
  title: string;
  caption: string;
}

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
  showcase?: {
    primary: ShowcaseImage;
    secondary: ShowcaseImage;
    tertiary: ShowcaseImage;
  };
}

export const projects: ProjectItem[] = [
  {
    id: "aats-audit-system",
    title: "AATS Audit Software",
    category: "Enterprise Software",
    description: "A secure, offline-first desktop and cloud platform engineered for seamless audit management, compliance tracking, and evidence synchronization.",
    image: "/images/projects/AATS/AATS_Dashboard.png",
    technologies: ["C# 14 / .NET 10", "Avalonia UI", "ASP.NET Core", "SQLite & SQLCipher", "PostgreSQL", "Cloudflare R2"],
    impact: "Streamlined audit workflows with seamless offline capabilities, managing 100k+ rows of data smoothly while maintaining strict security compliance.",
    challenge: "Auditors working offline or in remote locations struggled with slow performance on massive datasets and data conflicts when syncing sensitive evidence files with the central database.",
    solution: "We engineered a modern, hardware-accelerated desktop client using Avalonia UI and .NET 10. The app encrypts local data with 256-bit AES and utilizes Dotmim.Sync for blazing-fast bi-directional conflict resolution against an ASP.NET Core backend. All audit evidence is securely stored in zero-egress Cloudflare R2.",
    highlights: [
      "Hardware-accelerated data grids handling 100k+ rows flawlessly",
      "Blazing fast bi-directional sync with intelligent conflict resolution",
      "Secure local database encryption (256-bit AES via SQLCipher)",
      "Automated client notifications and background delta updates"
    ],
    showcase: {
      primary: {
        src: "/images/projects/AATS/AATS_Dashboard.png",
        title: "Comprehensive Audit Dashboard",
        caption: "Centralizes compliance tracking, massive data grids, and offline sync status in one unified view."
      },
      secondary: {
        src: "/images/projects/AATS/AATS_Dashboard.png",
        title: "Offline-First Sync Engine",
        caption: "Handles 100k+ rows locally, resolving conflicts and pushing deltas to the cloud seamlessly."
      },
      tertiary: {
        src: "/images/projects/AATS/AATS_Dashboard.png",
        title: "AES-256 Local Encryption",
        caption: "Ensures all audit evidence is encrypted at rest using SQLCipher for strict enterprise compliance."
      }
    }
  },
  {
    id: "apexdrive-crm",
    title: "ApexDrive CRM",
    category: "Operations",
    description: "A high-performance CRM built for automotive businesses, featuring AI-powered inventory tracking and autonomous customer engagement.",
    image: "/images/projects/Apex/dashboard.webp",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL", "n8n", "OpenAI API", "EasyOCR"],
    impact: "Automated manual data entry and enabled 24/7 autonomous customer inquiries and test-drive scheduling.",
    challenge: "Car dealerships face inefficiencies with manual vehicle data entry and struggle to handle customer inquiries and test-drive bookings outside of regular business hours.",
    solution: "Integrated an EasyOCR module for automatic number plate recognition (ANPR) from vehicle images, reducing manual data entry. Implemented an Autonomous Sales Agent powered by n8n and OpenAI to handle inquiries and schedule test drives 24/7.",
    highlights: [
      "Automatic Number Plate Recognition (ANPR) with EasyOCR",
      "Autonomous 24/7 SDR Agent powered by n8n & OpenAI",
      "Real-time tracking of vehicle stock, status, and pricing",
      "Interactive data visualization with Recharts and React Big Calendar"
    ],
    showcase: {
      primary: {
        src: "/images/projects/Apex/Dashboard-summary.webp",
        title: "Intelligent CRM Dashboard",
        caption: "Real-time visibility into inventory, live inquiries, and autonomous agent activities."
      },
      secondary: {
        src: "/images/projects/Apex/Sales.webp",
        title: "Real-Time Deal Pipeline & Lead Management",
        caption: "Track deal progression from initial contact to closed sale with deep insights and instant notifications."
      },
      tertiary: {
        src: "/images/projects/Apex/Leads.webp",
        title: "Automated Financial Desking & Deal Structuring",
        caption: "Streamline payment calculations, trade-ins, and financing options to close deals faster and more accurately."
      }
    }
  }
];
