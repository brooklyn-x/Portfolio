import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitch from "../components/ThemeSwitch";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-roboto-mono",
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
    url: "https://www.shubhamz.xyz",
    siteName: "Shubham Jaiswal",
    images: [
      {
        url: "https://www.shubhamz.xyz/og-image.png",
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
    <html lang="en" className={robotoMono.className} suppressHydrationWarning>
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
