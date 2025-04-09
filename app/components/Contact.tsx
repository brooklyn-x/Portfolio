import Image from "next/image";
import { Label } from "./Label";

const contacts = [
  { label: "Email", link: "mailto:shubham.jaiswal020@gmail.com" },
  { label: "X", link: "https://x.com/shubhamxgg" },
  { label: "GitHub", link: "https://github.com/Brooklyn7x" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/shubhamjaiswalx/" },
];

type ContactProps = {
  label: string;
  link: string;
};

export const ContactItem = ({ label, link }: ContactProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer"
    >
      <div className="flex gap-1 bg-neutral-200/70 group-hover:bg-black px-4 py-1 rounded-full transition duration-200  ease-in-out">
        <p className="text-sm text-neutral-800 group-hover:text-white transition duration-200 ease-in-out">
          {label}
        </p>

        <div className="flex-shrink-0">
          <Image
            height={50}
            width={50}
            src="/arrow-right.svg"
            alt="arrow-right"
            className="h-4 w-4 group-hover:invert transform group-hover:scale-110 transition duration-200 ease-in-out"
          />
        </div>
      </div>
    </a>
  );
};

export const Contact = () => {
  return (
    <section className="py-6">
      <Label label="Contact" />
      <div className="flex items-center gap-4">
        {contacts.map((item, index) => (
          <ContactItem key={index} label={item.label} link={item.link} />
        ))}
      </div>
    </section>
  );
};
