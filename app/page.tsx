import { Main } from "../components/Main";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { TimeStamp } from "../components/TimeStamp";

const Page = () => {
  return (
    <div className="min-h-dvh  flex items-center justify-center bg-white/80 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-xl mx-auto w-full p-4 sm:p-8">
        <Main />
        <Experience />
        <Projects />
        <Contact />
        <TimeStamp />
      </div>
    </div>
  );
};

export default Page;
