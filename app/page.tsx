import { Main } from "../components/Main";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { TimeStamp } from "../components/TimeStamp";

const Page = () => {
  return (
    
    <div className="max-w-xl mx-auto w-full h-full p-4 sm:p-8">
      <Main />
      <Experience />
      <Projects />
      <Contact />
      <TimeStamp />
    </div>
  );
};

export default Page;
