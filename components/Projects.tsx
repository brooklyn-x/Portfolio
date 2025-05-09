import { Label } from "./Label";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    label: "Chatly",
    description: "Real-time chat app with a clean UI.",
    link: "https://www.chatlyz.xyz",
  },
  {
    label: "SmartBuy",
    description: "Modern e-commerce app.",
    link: "https://ecomerce-pi-one.vercel.app",
  },
];

type ProjectProps = {
  label: string;
  about: string;
  link: string;
};

const ProjectItem = ({ label, about, link }: ProjectProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-1 rounded-md hover:scale-105 transform transition duration-200 ease-in-out"
    >
      <p className="text-sm font-medium text-neutral-800 dark:text-white">
        {label}
      </p>
      <span className="text-sm text-neutral-500 dark:text-neutral-400">
        {about}
      </span>
      <span className="absolute top-2 right-2">
        <ArrowRight className="h-4 w-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition duration-200 ease-in-out hover:scale-110 transform" />
      </span>
    </a>
  );
};

export const Projects = () => {
  return (
    <section className="py-6">
      <Label label="Projects" />
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            label={project.label}
            about={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
