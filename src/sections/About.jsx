import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Coding POV"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Sarath Sai Grandhe</p>
            <p className="subtext">
              I build the connective tissue between raw data and business decisions: analytics-ready pipelines, trusted KPI layers,
              executive dashboards, and governed datasets for analyst and engineer workflows.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-4xl text-gray-500">DATA IS DECISION READY</p>

            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="SQL" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="KPI Logic" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Data Quality" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Lakehouse" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="dbt" containerRef={grid2Container} />

            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/power-bi.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/python.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/apache-spark.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in Cincinnati and open to data analyst, analytics engineering, and data engineering roles.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Reach me for data roles and analytics work.</p>
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
