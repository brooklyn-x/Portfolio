"use client";

import { useState } from "react";
import { Label } from "./Label";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

// Enhanced projects data with detailed descriptions
const projects = [
  {
    label: "NUUM — Creator Management Platform",
    description:
      "A SaaS platform for brands and agencies to manage influencer and UGC marketing campaigns end-to-end. Like a CRM, but built specifically for the creator economy.",
    link: "",
    type: "project",
    technologies: ["React", "TypeScript", "Express.js", "Firebase", "Stripe", "Shopify API"],
    features: [
      "Campaign management",
      "Creator CRM",
      "UGC tracking",
      "Brand & agency portals",
    ],
  },
  {
    label: "NBS Fitness - Fitness Management SaaS",
    description:
      "A full-stack fitness SaaS connecting coaches with their clients. Handles everything from personalized workout planning to real-time progress tracking.",
    link: "",
    type: "project",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API"],
    features: [
      "Role-based portals",
      "Automated workout progressions",
      "Client completion tracking",
      "Subscription management",
    ],
  },
];

// Work/Experience data (same as your Experience component)
const workExperience = [
  {
    company: "SweepCode",
    label: "Full-stack Engineer",
    duration: "Jan 2025 - now",
  },
  {
    company: "LetsGo",
    label: "Full-stack Engineer",
    duration: "2024 - 2025",
  },
  {
    company: "RKCP",
    label: "Frontend Engineer",
    duration: "2023 - 2024",
  },
];

// Labs/Experiments data
const labs = [
  {
    label: "AI Commit Message Generator",
    description: "Paste a git diff, get a clean commit message instantly. Powered by OpenAI.",
    tech: ["React", "TypeScript", "OpenAI API"],
    githubLink: "",
    liveLink: null,
    type: "lab",
  },
  {
    label: "SnapPaste — Expiring Code Snippets",
    description: "Share code snippets that self-destruct after X views or a set time. Syntax highlighting included.",
    tech: ["React", "Node.js", "Redis", "TypeScript"],
    githubLink: "",
    liveLink: null,
    type: "lab",
  },
 
];


type TabType = "work" | "projects" | "labs" | "blog";

// Project Item Component
const ProjectItem = ({
  label,
  description,
  link,
  technologies,
}: {
  label: string;
  description: string;
  link: string;
  technologies: string[];
}) => {
  const content = (
    <>
      <p className="text-sm font-medium text-neutral-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {label}
      </p>
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        {description}
      </span>
      {link && (
        <span className="absolute top-3 right-3">
          <ArrowRight className="h-4 w-4 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 ease-in-out" />
        </span>
      )}
      <div className="flex flex-wrap gap-1 mt-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  if (!link) {
    return (
      <div className="group relative flex flex-col gap-1 rounded-md p-3">
        {content}
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-1 rounded-md p-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:scale-[1.02] transform transition-all duration-200 ease-in-out"
    >
      {content}
    </a>
  );
};

// Work Experience Item Component (same styling as your Experience component)
const WorkItem = ({
  company,
  label,
  duration,
}: {
  company: string;
  label: string;
  duration: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-neutral-800 dark:text-white">
          {company}
        </p>
        <span className="text-sm font-base text-neutral-500/80 dark:text-neutral-400/80">
          {duration}
        </span>
      </div>
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
    </div>
  );
};

// Lab Item Component
const LabItem = ({
  label,
  description,
  tech,
  githubLink,
  liveLink,
}: {
  label: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink?: string | null;
}) => {
  return (
    <div className="group relative flex flex-col gap-2 rounded-md p-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition duration-200 ease-in-out">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-800 dark:text-white">
            {label}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2 ml-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:scale-110 transform transition duration-200"
          >
            <Github className="h-4 w-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-110 transform transition duration-200"
            >
              <ExternalLink className="h-4 w-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


export const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  const tabs = [
    { id: "work" as TabType, label: "Work" },
    { id: "projects" as TabType, label: "Projects" },
    { id: "labs" as TabType, label: "Labs" },
    // { id: "blog" as TabType, label: "Blog" },
  ];

  // Get the current tab label for the section header
  const getCurrentLabel = () => {
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    return currentTab ? currentTab.label : "Work";
  };

  const renderContent = () => {
    switch (activeTab) {
      case "work":
        return (
          <div className="flex flex-col gap-6">
            {workExperience.map((exp, index) => (
              <WorkItem
                key={index}
                company={exp.company}
                label={exp.label}
                duration={exp.duration}
              />
            ))}
          </div>
        );
      case "projects":
        return (
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                technologies={project.technologies}
                label={project.label}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        );
      case "labs":
        return (
          <div className="flex flex-col gap-4">
            {labs.map((lab, index) => (
              <LabItem
                key={index}
                label={lab.label}
                description={lab.description}
                tech={lab.tech}
                githubLink={lab.githubLink}
                liveLink={lab.liveLink}
              />
            ))}
          </div>
        );
      // case "blog":
      //   return (
      //     <div className="flex flex-col gap-4">
      //       {blogPosts.map((post, index) => (
      //         <BlogItem
      //           key={index}
      //           title={post.title}
      //           description={post.description}
      //           platform={post.platform}
      //           date={post.date}
      //           readTime={post.readTime}
      //           tags={post.tags}
      //         />
      //       ))}
      //     </div>
      //   );
      default:
        return null;
    }
  };

  return (
    <section className="py-6">
      <Label label={getCurrentLabel()} />

      {/* Tab Navigation - More Rounded */}
      <div className="flex gap-1 mb-6 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">{renderContent()}</div>
    </section>
  );
};
