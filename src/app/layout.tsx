import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora | Premium Custom Software Engineering & SaaS Solutions",
  description:
    "Nexora designs and develops custom software, web applications, POS systems, enterprise ERPs, and mobile applications. Engineered for speed, security, and scalability.",
  keywords: [
    "Software Development Company",
    "Custom Software Solutions",
    "SaaS Platform Development",
    "Point of Sale Systems",
    "Enterprise ERP systems",
    "Next.js Developer Agency",
    "ASP.NET Core Systems",
    "Mobile App Development",
  ],
  authors: [{ name: "Nexora Engineering" }],
  openGraph: {
    title: "Nexora | Premium Custom Software Engineering Studio",
    description: "Building reliable, scalable, and secure digital engines for modern businesses.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/Logo/Union%20Botom.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
