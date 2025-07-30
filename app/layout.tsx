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
  title: "Shubham Jaiswal | Full-Stack Developer & Software Engineer",
  description:
    "Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with clean architecture and exceptional user experiences.",
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
    "Shubham Jaiswal Full-stack",

    // Services & expertise
    "Web Application Development",
    "API Development",
    "Database Design",
    "UI/UX Implementation",
    "Performance Optimization",
    "Responsive Design",

    // Location-based (if relevant)
    "India Developer",
    "Remote Developer",
  ],
  authors: [{ name: "Shubham Jaiswal" }],
  creator: "Shubham Jaiswal",
  publisher: "Shubham Jaiswal",

  // Enhanced Open Graph
  openGraph: {
    title: "Shubham Jaiswal — Full-Stack Developer & Software Engineer",
    description:
      "Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with clean architecture.",
    url: "https://www.shubhamz.xyz",
    siteName: "Shubham Jaiswal Portfolio",
    images: [
      {
        url: "https://www.shubhamz.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Jaiswal - Full-Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter Card optimization
  twitter: {
    card: "summary_large_image",
    title: "Shubham Jaiswal — Full-Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js",
    images: ["https://www.shubhamz.xyz/og-image.png"],
    creator: "@shubhamxgg", // Add your Twitter handle if you have one
  },

  // Additional SEO enhancements
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

  // Verification for search consoles
  // verification: {
  //   google: "your-google-verification-code", // Add your Google Search Console verification
  //   // yandex: 'your-yandex-verification-code',
  //   // bing: 'your-bing-verification-code',
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
