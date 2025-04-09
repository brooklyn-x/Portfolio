import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Jaiswal | Profolio",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
