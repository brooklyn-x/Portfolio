import { Label } from "./Label";

const Experiences = [
  {
    company: "LetsGo",
    label: "Designing & developing user-facing features for the app.",
    duration: "2024 - now",
  },
  {
    company: "RKCP",
    label: "Crafted responsive UI & optimized web performance",
    duration: "2023 - 2024",
  },
];

type ExprienceProps = {
  company: string;
  label: string;
  duration: string;
};

export const ExperienceItem = ({
  company,
  label,
  duration,
}: ExprienceProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-neutral-800">{company}</p>
        <span className="text-sm font-light text-neutral-500/80">
          {duration}
        </span>
      </div>
      <p className="text-sm font-medium text-neutral-500">{label}</p>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="py-6">
      <Label label="Experience" />

      <div className="flex flex-col gap-6">
        {Experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            duration={exp.duration}
            label={exp.label}
          />
        ))}
      </div>
    </section>
  );
};


