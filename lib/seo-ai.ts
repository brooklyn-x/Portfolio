/**
 * AI-powered SEO utilities for dynamic meta tag generation and optimization
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Generate AI-optimized meta descriptions based on content
 */
export function generateAIMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  // Extract key phrases and technical terms
  const techKeywords = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Full-stack",
    "Frontend",
    "Backend",
    "API",
    "Database",
  ];

  const foundKeywords = techKeywords.filter((keyword) =>
    content.toLowerCase().includes(keyword.toLowerCase())
  );

  // Create a compelling description with found keywords
  const baseDescription =
    "Full-stack developer specializing in modern web technologies";
  const keywordPhrase =
    foundKeywords.length > 0
      ? ` including ${foundKeywords.slice(0, 3).join(", ")}`
      : "";

  const description = `${baseDescription}${keywordPhrase}. Building scalable applications with clean architecture and exceptional user experiences.`;

  return description.length > maxLength
    ? description.substring(0, maxLength - 3) + "..."
    : description;
}

/**
 * Generate structured data for better search engine understanding
 */
export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubham Jaiswal",
    jobTitle: "Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer and AI engineer building web apps and AI-powered products with React, Next.js, Node.js, and LLM integrations. Available for freelance. Based in India.",
    url: "https://www.shubhamz.xyz",
    sameAs: [
      "https://github.com/brooklyn-x",
      "https://www.linkedin.com/in/shubhamjaiswalx/",
      "https://x.com/shubhamxgg",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Full-stack Development",
      "Web Development",
      "Software Engineering",
      "AI Application Development",
      "LLM Integration",
      "Generative AI",
      "OpenAI API",
      "RAG Systems",
      "Web Application Architecture",
      "API Design",
      "Database Design",
    ],
  };
}

/**
 * Generate website structured data
 */
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shubham Jaiswal",
    url: "https://www.shubhamz.xyz",
    description:
      "Portfolio of Shubham Jaiswal — full-stack developer & AI engineer building web apps and AI-powered products with React, Next.js, and Node.js.",
    author: {
      "@type": "Person",
      name: "Shubham Jaiswal",
    },
  };
}

/**
 * Generate dynamic keywords based on page content
 */
export function generateAIKeywords(
  content: string,
  baseKeywords: string[] = []
): string[] {
  const contentWords = content.toLowerCase().split(/\W+/);
  const techTerms = [
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "javascript",
    "html",
    "css",
    "mongodb",
    "postgresql",
    "express",
    "api",
    "rest",
    "graphql",
    "frontend",
    "backend",
    "fullstack",
    "developer",
    "engineer",
    "responsive",
    "mobile",
    "web",
    "application",
    "website",
  ];

  const foundTerms = techTerms.filter(
    (term) =>
      contentWords.includes(term) ||
      contentWords.includes(term.replace(/\./g, ""))
  );

  // Combine base keywords with discovered terms
  const allKeywords = [...baseKeywords, ...foundTerms];

  // Remove duplicates and return
  return Array.from(new Set(allKeywords));
}

/**
 * AI-powered title optimization for search engines
 */
export function optimizeTitle(
  baseTitle: string,
  keywords: string[] = []
): string {
  const primaryKeywords = keywords.slice(0, 2);
  const hasKeywords = primaryKeywords.some((keyword) =>
    baseTitle.toLowerCase().includes(keyword.toLowerCase())
  );

  if (!hasKeywords && primaryKeywords.length > 0) {
    return `${baseTitle} | ${primaryKeywords.join(" & ")} Specialist`;
  }

  return baseTitle;
}

/**
 * Generate FAQ structured data for better search visibility
 */
export function generateFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Shubham Jaiswal specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shubham specializes in React.js, Next.js, Node.js, TypeScript, and AI application development including LLM integrations, OpenAI API, and RAG systems.",
        },
      },
      {
        "@type": "Question",
        name: "What type of projects does Shubham work on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shubham builds scalable web applications, SaaS platforms, and AI-powered products — including LLM integrations, creator management tools, and fitness management systems.",
        },
      },
      {
        "@type": "Question",
        name: "Is Shubham Jaiswal available for freelance work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Shubham is available for freelance and remote projects. He is based in India and works with clients globally. You can reach out via the contact section on this portfolio.",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire Shubham Jaiswal as a developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Shubham via email at shubhamjaiswalx@hotmail.com, connect on LinkedIn at linkedin.com/in/shubhamjaiswalx, or reach out on X at @shubhamxgg.",
        },
      },
    ],
  };
}
