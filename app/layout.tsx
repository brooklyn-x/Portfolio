import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitch from "../components/ThemeSwitch";
import StructuredData from "@/components/StructuredData";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shubhamz.xyz"),
  alternates: {
    canonical: "/",
  },

  title: "Shubham Jaiswal — Full-Stack & AI Developer for Hire | React, Next.js · India",
  description:
    "Full-stack developer & AI engineer building web apps and AI-powered products. React, Next.js, Node.js. Available for freelance. Based in India, open to remote.",
  keywords: [
    // Core technical skills
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer",

    // AI & ML keywords
    "AI Developer",
    "AI Engineer",
    "AI-powered applications",
    "AI product development",
    "LLM integration",
    "OpenAI API developer",
    "Generative AI developer",
    "ChatGPT integration",
    "AI web applications",
    "Machine Learning integration",
    "RAG applications",
    "AI SaaS developer",
    "Prompt engineering",

    // Technologies & frameworks
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MERN Stack",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",

    // Personal branding
    "Shubham Jaiswal",
    "Shubham Jaiswal Developer",
    "Shubham Jaiswal Portfolio",
    "Shubham Jaiswal AI Developer",
    "Shubham Jaiswal Full-stack",

    // Services & hire intent
    "Freelance Full-stack Developer",
    "Hire React Developer",
    "Hire Next.js Developer",
    "Freelance AI Developer",
    "Web Application Development",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "Responsive Design",

    // Location-based
    "India AI Developer",
    "India Developer",
    "Freelance AI Developer India",
    "Remote AI Developer",
    "Remote Developer",
  ],
  authors: [{ name: "Shubham Jaiswal" }],
  creator: "Shubham Jaiswal",
  publisher: "Shubham Jaiswal",

  openGraph: {
    title: "Shubham Jaiswal — Full-Stack & AI Developer | React, Next.js",
    description:
      "I build web apps and AI-powered products with React, Next.js & Node.js. LLM integrations, scalable APIs, clean UI. Available for freelance — based in India, open to remote.",
    url: "https://www.shubhamz.xyz",
    siteName: "Shubham Jaiswal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Jaiswal — Full-Stack & AI Developer, React & Next.js specialist",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shubham Jaiswal — Full-Stack & AI Developer",
    description:
      "Building web apps & AI products with React, Next.js & Node.js. Freelance, remote-friendly. Based in India.",
    images: ["/og-image.png"],
    creator: "@shubhamxgg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.className} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white/80 dark:bg-neutral-950 transition-colors duration-300">
            <ThemeSwitch />
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
