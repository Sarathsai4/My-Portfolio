import { certifications, contactEmail, education, skillGroups, toolLogos } from "../constants";
import RoleTechBackdrop from "../components/RoleTechBackdrop";

const engineerFocus = [
  {
    title: "Cloud ETL / ELT",
    text: "Python, SQL, AWS S3, Glue, Lambda, EMR, Redshift, Snowflake, BigQuery, Airflow, dbt, and automated workflow scheduling.",
  },
  {
    title: "Lakehouse & Warehousing",
    text: "Dimensional modeling, star schema, fact and dimension tables, data marts, Delta Lake, schema evolution, partitioning, and analytics-ready layers.",
  },
  {
    title: "Distributed Processing",
    text: "Apache Spark, PySpark, Spark Streaming, Kafka, Kafka Streams, Flink, Hadoop, Hive, micro-batch processing, and large-scale SQL optimization.",
  },
  {
    title: "Reliability & Observability",
    text: "Great Expectations, data contracts, validation, reconciliation, freshness monitoring, schema drift detection, SLA monitoring, logging, and checkpointing.",
  },
];

const engineeringProjects = [
  "Amazon Kindle ETL & Analytics Pipeline",
  "Enterprise Data Lakehouse Modernization",
  "Real-Time Streaming & Data Observability Platform",
  "Inventory Forecasting & Optimization Data Pipeline",
];

const DataEngineer = () => {
  return (
    <main className="relative isolate overflow-hidden pt-28 c-space role-page role-page-engineer">
      <RoleTechBackdrop variant="engineer" />

      <section className="relative z-10 role-hero">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-mint">Data Engineer</p>
          <h1 className="mt-5 text-4xl font-semibold md:text-7xl">
            Advanced data engineering for scalable, governed pipelines.
          </h1>
          <p className="max-w-3xl mt-6 text-lg text-neutral-300">
            This page positions Sarath for data engineering roles: cloud data infrastructure,
            lakehouse architecture, batch and streaming pipelines, warehouse models, quality controls, and observability.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a className="role-link role-link-primary" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a className="role-link" href="#/data-analyst">View Data Analytics</a>
          </div>
        </div>
      </section>

      <section className="relative z-10 grid grid-cols-1 gap-4 mt-16 md:grid-cols-4">
        {engineerFocus.map((item) => (
          <article className="role-card p-5 border border-white/10 bg-gradient-to-b from-storm to-indigo" key={item.title}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 subtext">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Engineering Stack</h2>
        <p className="max-w-3xl mt-4 subtext">
          Coverage includes the full engineer-facing stack from the resume: programming, cloud services,
          orchestration, distributed compute, streaming, warehousing, quality, governance, APIs, and CI/CD.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Relevant Engineering Work</h2>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
          {engineeringProjects.map((project) => (
            <div className="p-5 border role-card border-white/10 bg-primary" key={project}>
              <p className="text-lg font-medium">{project}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Tools & Credentials</h2>
        <LogoWall />
        <InfoList title="Certifications" items={certifications} />
        <InfoList title="Education" items={education} />
      </section>
    </main>
  );
};

const SkillMatrix = ({ groups }) => (
  <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
    {groups.map((group) => (
      <article className="p-5 border role-card border-white/10 bg-gradient-to-b from-midnight to-navy" key={group.title}>
        <h3 className="text-xl font-semibold">{group.title}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {group.items.map((item) => (
            <span className="skill-pill" key={item}>{item}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
);

const LogoWall = () => (
  <div className="grid grid-cols-4 gap-3 mt-8 sm:grid-cols-6 lg:grid-cols-8">
    {toolLogos.map((tool) => (
      <div className="flex items-center justify-center p-3 border rounded-lg aspect-square border-white/10 bg-white/5" key={tool.name}>
        <img src={tool.path} alt={tool.name} className="object-contain max-w-full max-h-10" loading="lazy" />
      </div>
    ))}
  </div>
);

const InfoList = ({ title, items }) => (
  <div className="mt-10">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((item) => (
        <span className="skill-pill" key={item}>{item}</span>
      ))}
    </div>
  </div>
);

export default DataEngineer;
