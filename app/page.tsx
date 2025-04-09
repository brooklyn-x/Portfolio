import { Main } from "./components/Main";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { TimeStamp } from "./components/TimeStamp";

const Page = () => {
  return (
    <div className="min-h-dvh border bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] flex items-center justify-center">
      <div className="max-w-xl mx-auto w-full p-4 sm:p-8 font-sans">
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
