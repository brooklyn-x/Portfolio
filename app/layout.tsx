import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "../components/ThemeSwitch";
import Script from "next/script";


const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubham Jaiswal | Portfolio",
  description:
    "Explore projects and experience by Shubham Jaiswal, a full-stack developer building modern web applications with clean design and solid performance.",
  keywords: [
    "Shubham Jaiswal",
    "Full-stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Chat App",
    "E-commerce App",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
    "Mern Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Shubham Jaiswal" }],
  creator: "Shubham Jaiswal",
  openGraph: {
    title: "Shubham Jaiswal — Portfolio",
    description:
      "Projects and experience by Shubham Jaiswal, a full-stack developer specializing in building clean and scalable web applications.",
    url: "https://portfolio-sjs-projects-b7cbde07.vercel.app",
    siteName: "Shubham Jaiswal",
    images: [
      {
        url: "https://portfolio-sjs-projects-b7cbde07.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Jaiswal Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            })();
          `}
        </Script>
      </head>
      <body className={`${robotoMono.variable} antialiased`}>
        <ThemeSwitch />
        <div className="min-h-screen bg-white/80 dark:bg-neutral-950 transition-colors duration-300">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
