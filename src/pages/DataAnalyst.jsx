import { certifications, contactEmail, education, skillGroups, toolLogos } from "../constants";

const analystFocus = [
  {
    title: "KPI & Executive Reporting",
    text: "Power BI, Tableau, Looker, Excel, self-service analytics, executive dashboards, KPI definitions, and stakeholder-facing reporting.",
  },
  {
    title: "Customer & Audience Analytics",
    text: "Customer data analysis, audience segmentation, CRM analytics, campaign performance, consumer behavior, guest experience, and business impact analysis.",
  },
  {
    title: "Data Quality & Governance",
    text: "Metric reconciliation, data validation, freshness monitoring, data dictionaries, business glossary, lineage, audit-ready documentation, and reporting standards.",
  },
  {
    title: "Decision Science",
    text: "Trend analysis, variance analysis, root-cause analysis, A/B testing, forecasting, statistical analysis, experimentation, and data storytelling.",
  },
];

const analystProjects = [
  "Enterprise Customer Data Quality and KPI Governance Analytics",
  "Real-Time KPI Monitoring and Trusted Dataset Development",
  "BI Reporting Layer and Data Dictionary Modernization",
  "Fraud Analytics and Payment Risk Scoring Insights",
];

const DataAnalyst = () => {
  return (
    <main className="pt-28 c-space">
      <section className="role-hero">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-aqua">Data Analyst</p>
          <h1 className="mt-5 text-4xl font-semibold md:text-7xl">
            Basic-to-advanced analytics for trusted business decisions.
          </h1>
          <p className="max-w-3xl mt-6 text-lg text-neutral-300">
            This page frames Sarath for data analyst roles: SQL-first analysis, BI dashboards,
            KPI governance, customer analytics, reporting quality, and stakeholder-ready insight delivery.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a className="role-link role-link-primary" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a className="role-link" href="#/data-engineer">View Data Engineering</a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-4">
        {analystFocus.map((item) => (
          <article className="role-card p-5 border border-white/10 bg-gradient-to-b from-storm to-indigo" key={item.title}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 subtext">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-heading">Analyst Toolkit</h2>
        <p className="max-w-3xl mt-4 subtext">
          Coverage includes every analyst-facing skill from the resume, from BI and customer analytics to governance,
          privacy-aware reporting, metric definitions, and advanced SQL analysis.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="mt-20">
        <h2 className="text-heading">Relevant Analytics Work</h2>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
          {analystProjects.map((project) => (
            <div className="p-5 border role-card border-white/10 bg-primary" key={project}>
              <p className="text-lg font-medium">{project}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
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

export default DataAnalyst;
