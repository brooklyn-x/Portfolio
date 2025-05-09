
import { Label } from "./Label";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
      <div className="flex justify-between items-center gap-1 bg-neutral-200/70 group-hover:bg-black dark:bg-neutral-800/70 dark:group-hover:bg-white px-4 py-1 rounded-full transition duration-200  ease-in-out hover:scale-110 transform">
        <p className="text-sm text-neutral-800 group-hover:text-white dark:text-white dark:group-hover:text-black transition duration-200 ease-in-out">
          {label}
        </p>

        <div className="flex-shrink-0">
          <ArrowUpRightIcon className="h-4 w-4 dark:text-white group-hover:text-white dark:group-hover:text-black transform group-hover:scale-110 transition duration-200 ease-in-out" />
        </div>
      </div>
    </a>
  );
};

export const Contact = () => {
  return (
    <section className="py-6">
      <Label label="Contact" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {contacts.map((item, index) => (
          <ContactItem key={index} label={item.label} link={item.link} />
        ))}
      </div>
    </section>
  );
};
