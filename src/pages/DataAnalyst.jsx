import { certifications, contactEmail, education, skillGroups, toolLogos } from "../constants";
import RoleTechBackdrop from "../components/RoleTechBackdrop";

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
  {
    title: "User Lifecycle, Retention & Churn Analytics Dashboard",
    stack: ["SQL", "Python", "Tableau", "Looker", "Snowflake", "Customer Analytics"],
    summary:
      "Built a user lifecycle analytics dashboard to analyze customer behavior across acquisition, engagement, retention, and churn stages. Developed SQL-based datasets to track platform usage, content engagement, active user trends, retention cohorts, and churn-risk indicators.",
    impact:
      "Created Tableau and Looker dashboards that helped stakeholders identify lifecycle drop-off points, evaluate growth opportunities, and translate user behavior patterns into actionable recommendations for marketing and product teams.",
  },
  {
    title: "Content Engagement & Subscriber Behavior Insights",
    stack: ["SQL", "Python", "Power BI", "Tableau", "BigQuery", "Statistical Analysis"],
    summary:
      "Analyzed content consumption, user activity, and engagement trends to understand how viewing behavior influences retention, repeat usage, and subscriber value. Used SQL and Python to segment users by engagement level and identify high-performing content categories.",
    impact:
      "Uncovered patterns linked to churn risk and lifecycle performance, then presented the insights through executive-ready dashboards and business narratives for cross-functional decision-making.",
  },
  {
    title: "Enterprise Customer Data Quality and KPI Governance Analytics",
    stack: ["SQL", "Python", "Power BI", "Tableau", "Snowflake", "Data Validation"],
    summary:
      "Built a customer data quality and KPI governance framework to validate business metrics, reconcile reporting logic, and improve trust in analytics-ready datasets. Developed SQL validation checks, dashboards, and documentation for KPI definitions, assumptions, rules, and reporting methodology.",
    impact:
      "Improved metric consistency and reduced reporting discrepancies by 35%, helping business teams rely on accurate and reusable analytics outputs.",
  },
  {
    title: "Real-Time KPI Monitoring and Trusted Dataset Development",
    stack: ["SQL", "Python", "Power BI", "Tableau", "BigQuery", "Data Quality"],
    summary:
      "Created near real-time KPI monitoring logic to track data freshness, reporting SLAs, volume changes, exception patterns, and dashboard-impacting data issues before they affected business users.",
    impact:
      "Built validation rules to identify data delays, reporting inconsistencies, and transformation errors, improving reporting timeliness by 30% while strengthening governance, audit-readiness, and metric reliability.",
  },
];

const DataAnalyst = () => {
  return (
    <main className="relative isolate overflow-hidden pt-28 c-space role-page role-page-analyst">
      <RoleTechBackdrop variant="analyst" />

      <section className="relative z-10 role-hero">
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

      <section className="relative z-10 grid grid-cols-1 gap-4 mt-16 md:grid-cols-4">
        {analystFocus.map((item) => (
          <article className="role-card p-5 border border-white/10 bg-gradient-to-b from-storm to-indigo" key={item.title}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 subtext">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Analyst Toolkit</h2>
        <p className="max-w-3xl mt-4 subtext">
          Coverage includes every analyst-facing skill from the resume, from BI and customer analytics to governance,
          privacy-aware reporting, metric definitions, and advanced SQL analysis.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Relevant Analytics Work</h2>
        <p className="max-w-3xl mt-4 subtext">
          These projects emphasize customer analytics, subscriber behavior, KPI trust, and governed datasets for
          stakeholder-ready decision-making.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
          {analystProjects.map((project) => (
            <div
              className="p-5 border role-card border-white/10 bg-primary/80"
              key={project.title}
            >
              <p className="text-lg font-semibold text-white">{project.title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((item) => (
                  <span className="skill-pill" key={`${project.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 subtext">{project.summary}</p>
              <p className="mt-4 text-sm leading-6 text-aqua/90">{project.impact}</p>
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

export default DataAnalyst;
