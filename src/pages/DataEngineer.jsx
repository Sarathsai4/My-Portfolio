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

const streamingCaseStudy = {
  title: "Streaming User Behavior Data Pipeline & Analytics Platform",
  category: "Data Engineering, Digital Analytics, Cloud Data Pipeline",
  role: "Data Engineer / Analytics Engineer",
  stack: [
    "Python",
    "SQL",
    "BigQuery",
    "Google Cloud Storage",
    "Airflow",
    "Pandas",
    "Jupyter Notebook",
    "Tableau",
    "Looker",
    "Git",
    "Docker",
    "Matplotlib",
  ],
  overview:
    "Designed an end-to-end data engineering and analytics platform for streaming-style digital traffic and user behavior data. The project turns raw event-level activity into clean, analytics-ready BigQuery datasets for engagement analysis, retention tracking, churn-risk monitoring, content consumption insights, platform usage, and executive reporting.",
  businessProblem:
    "Raw streaming event data is often duplicated, inconsistent, incomplete, and difficult for BI, product, marketing, and leadership teams to use directly. This platform standardizes ingestion, models trusted analytical tables, and creates dashboard-ready data products for lifecycle and content analytics.",
  pipelineStages: [
    "Raw data ingestion",
    "Data cleaning and standardization",
    "Event-level transformation",
    "Session-level aggregation",
    "User-level feature creation",
    "Retention and churn tables",
    "BI dashboard layer",
  ],
  modeledTables: [
    "dim_users",
    "dim_content",
    "dim_device",
    "fact_user_events",
    "fact_sessions",
    "daily_user_engagement",
    "weekly_retention_cohorts",
    "content_performance_summary",
    "churn_risk_features",
    "marketing_channel_performance",
  ],
  dashboards: [
    "User Engagement Overview",
    "Retention and Churn Analysis",
    "Content Consumption Insights",
    "Marketing Channel Performance",
    "Data Quality Monitoring",
  ],
  qualityChecks: [
    "Null checks on user_id, session_id, and event_timestamp",
    "Duplicate event detection",
    "Watch duration range validation",
    "Timestamp consistency checks",
    "Daily row count reconciliation",
    "Schema drift detection",
    "Subscription status validation",
    "Pipeline freshness checks",
  ],
  metrics: [
    "Daily Active Users",
    "Weekly Active Users",
    "Average Watch Duration",
    "Sessions per User",
    "Content Completion Rate",
    "7-Day Retention Rate",
    "30-Day Retention Rate",
    "Churn Risk Score",
  ],
  questions: [
    "Which users are becoming inactive over time?",
    "Which content categories drive repeat engagement?",
    "Which channels bring users with stronger retention?",
    "Which user behaviors indicate churn risk?",
  ],
};

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
          Coverage includes the full engineer-facing stack: programming, cloud services,
          orchestration, distributed compute, streaming, warehousing, quality, governance, APIs, and CI/CD.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Relevant Engineering Work</h2>
        <p className="max-w-3xl mt-4 subtext">
          The featured case study below shows the full engineering path: ingestion, cloud storage,
          orchestration, BigQuery modeling, quality validation, and BI-ready data products.
        </p>
        <FeaturedEngineeringCaseStudy project={streamingCaseStudy} />
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

const FeaturedEngineeringCaseStudy = ({ project }) => (
  <article className="engineer-case-study role-card">
    <div className="engineer-case-glow" />
    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Featured Case Study</p>
        <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
        <div className="mt-5 grid gap-3 text-sm text-white/72 sm:grid-cols-2">
          <p className="rounded-lg border border-white/10 bg-white/6 px-3 py-2">
            <span className="block text-white/42">Category</span>
            {project.category}
          </p>
          <p className="rounded-lg border border-white/10 bg-white/6 px-3 py-2">
            <span className="block text-white/42">Role</span>
            {project.role}
          </p>
        </div>
        <p className="mt-6 subtext">{project.overview}</p>
        <p className="mt-4 subtext">{project.businessProblem}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((item) => (
            <span className="skill-pill engineer-skill-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <EngineeringPipelineVisual stages={project.pipelineStages} />
    </div>

    <div className="grid gap-4 mt-8 lg:grid-cols-3">
      <InfoPanel title="BigQuery Data Model" items={project.modeledTables} />
      <InfoPanel title="Dashboard Pages" items={project.dashboards} />
      <InfoPanel title="Data Quality Checks" items={project.qualityChecks} />
    </div>

    <div className="grid gap-4 mt-4 lg:grid-cols-2">
      <InfoPanel title="Business Questions Answered" items={project.questions} />
      <InfoPanel title="Sample Metrics Created" items={project.metrics} />
    </div>
  </article>
);

const EngineeringPipelineVisual = ({ stages }) => (
  <div className="engineer-pipeline-visual" aria-label="Streaming user behavior pipeline architecture">
    <div className="engineer-pipeline-orbit" />
    <div className="engineer-pipeline-grid" />
    <div className="engineer-pipeline-line" />
    <div className="engineer-pipeline-nodes">
      {stages.map((stage, index) => (
        <div className="engineer-pipeline-node" key={stage} style={{ "--node-index": index }}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage}</strong>
        </div>
      ))}
    </div>
  </div>
);

const InfoPanel = ({ title, items }) => (
  <section className="engineer-info-panel">
    <h4>{title}</h4>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span className="engineer-info-chip" key={`${title}-${item}`}>
          {item}
        </span>
      ))}
    </div>
  </section>
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
