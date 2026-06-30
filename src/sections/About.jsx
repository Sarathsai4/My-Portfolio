import DataStackBoard from "../components/DataStackBoard";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import InteractiveIntroCard from "../components/InteractiveIntroCard";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-1">
          <InteractiveIntroCard />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <DataStackBoard />
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="relative z-10 w-[58%] sm:w-[52%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I am based in the USA and focused on data engineering, analytics engineering, and GenAI analytics roles.</p>
          </div>
          <figure className="absolute right-3 top-1/2 size-[12.5rem] -translate-y-1/2 sm:right-6 sm:size-[14.5rem] md:size-[16rem]">
            <Globe className="size-full max-w-none" />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Reach me for data engineering and analytics platform work.</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I work across the full data lifecycle: ingestion, transformation, modeling, quality, BI, experimentation, and stakeholder-ready storytelling.
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
