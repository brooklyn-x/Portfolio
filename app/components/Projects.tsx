import Image from "next/image";
import { Label } from "./Label";

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
      className="group relative flex flex-col gap-1 rounded-md"
    >
      <p className="text-sm font-medium text-neutral-800">{label}</p>
      <span className="text-sm text-neutral-500">{about}</span>
      <span className="absolute top-2 right-2">
        <Image
          src="/arrow-right.svg"
          alt={`Visit ${label}`}
          height={50}
          width={50}
          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
        />
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
