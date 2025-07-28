"use client";

import { Main } from "../components/Main";
import { WorkTabs } from "../components/WorkTabs";
import { Contact } from "../components/Contact";
import { TimeStamp } from "../components/TimeStamp";

const Page = () => {
  return (
    <div className="max-w-xl mx-auto w-full h-full p-4 sm:p-8 overflow-hidden">
      <Main />
      {/* <Experience /> */}
      <WorkTabs />
      <Contact />
      <TimeStamp />
    </div>
  );
};

export default Page;
