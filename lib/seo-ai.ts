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
    jobTitle: "Full-Stack Developer",
    description:
      "Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies",
    url: "https://www.shubhamz.xyz",
    sameAs: [
      "https://github.com/shubhamjaiswal",
      "https://linkedin.com/in/shubhamjaiswal",
      // Add your social media profiles
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
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University/College", // Update with your education
    },
  };
}

/**
 * Generate website structured data
 */
export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shubham Jaiswal Portfolio",
    url: "https://www.shubhamz.xyz",
    description:
      "Portfolio website showcasing full-stack development projects and expertise",
    author: {
      "@type": "Person",
      name: "Shubham Jaiswal",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.shubhamz.xyz/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
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
          text: "Shubham specializes in React.js, Next.js, Node.js, TypeScript, JavaScript, and modern full-stack web development technologies.",
        },
      },
      {
        "@type": "Question",
        name: "What type of projects does Shubham work on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shubham builds scalable web applications, e-commerce platforms, chat applications, and modern responsive websites using the MERN stack.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Shubham Jaiswal for development work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out through the contact form on this portfolio website or connect via LinkedIn and GitHub.",
        },
      },
    ],
  };
}
