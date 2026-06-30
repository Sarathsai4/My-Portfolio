import { certifications, contactEmail, education, skillGroups, toolLogos } from "../constants";
import RoleTechBackdrop from "../components/RoleTechBackdrop";

const engineerFocus = [
  {
    title: "Cloud ETL / ELT",
    text: "Python, SQL, AWS S3, Glue, EMR, Redshift, Athena, Lambda, Kinesis, Snowflake, BigQuery, Airflow, dbt, and automated workflow scheduling.",
  },
  {
    title: "Lakehouse & Warehousing",
    text: "Dimensional modeling, star schema, snowflake schema, fact and dimension tables, OLAP marts, schema enforcement, partitioning, and analytics-ready layers.",
  },
  {
    title: "Distributed Processing",
    text: "Apache Spark, PySpark, Spark SQL, Spark Streaming, Kafka, Kafka Streams, Flink, Hadoop, Hive, micro-batch processing, and workload tuning.",
  },
  {
    title: "Reliability & Observability",
    text: "Great Expectations, validation checks, reconciliation, freshness monitoring, schema drift detection, SLA monitoring, CloudWatch logging, lineage, and checkpointing.",
  },
];

const engineeringProjects = [
  "CassetteIQ Inventory Analytics Platform",
  "NHTSA & SEC Regulatory Data Lakehouse",
  "Last Mile Logistics Data Quality Platform",
  "NEO KPI Data Marts & Reporting Layers",
];

const cassetteIqCaseStudy = {
  title: "CassetteIQ Inventory Decision Platform",
  category: "Data Engineering, Inventory Analytics, GenAI Analytics",
  role: "Data Analyst - Data Engineering & Analytics",
  stack: [
    "Python",
    "SQL",
    "SQL Server",
    "AWS Glue",
    "Snowflake",
    "React",
    "FastAPI",
    "Power BI",
    "Tableau",
    "QuickSight",
    "OpenAI API",
  ],
  overview:
    "Delivered an internal inventory analytics website that replaced notebook-based analysis with governed self-service dashboards for demand, reorder, inventory-risk, raw-material coverage, and AI-assisted operational investigation.",
  businessProblem:
    "Planning and leadership teams needed one reliable application to analyze inventory exposure, reorder needs, safety stock, raw-material coverage, refund patterns, delivery issues, and operational bottlenecks without manually joining disconnected reports.",
  pipelineStages: [
    "Source data ingestion",
    "SQL and Python standardization",
    "Inventory and demand modeling",
    "Order-policy reconciliation",
    "Dashboard-ready outputs",
    "Secure AI proxy",
    "AI-assisted investigation",
  ],
  modeledTables: [
    "inventory_risk_summary",
    "demand_forecast_features",
    "raw_material_coverage",
    "reorder_policy_outputs",
    "safety_stock_calculations",
    "delivery_performance_summary",
    "refund_and_return_patterns",
    "finished_good_sku_rollups",
  ],
  dashboards: [
    "Demand and Reorder Overview",
    "Inventory Risk Explorer",
    "Raw Material Coverage",
    "Power BI-Style Output Table",
    "AI Operational Analyst",
  ],
  qualityChecks: [
    "Power BI baseline reconciliation",
    "Unit conversion validation",
    "Formula parity checks",
    "Order-policy output validation",
    "SQL connection reliability checks",
    "Chart rendering checks",
    "Server-side API-key protection",
    "Company-network access controls",
  ],
  metrics: [
    "200+ SKU categories",
    "11 inventory groups",
    "25%+ less manual preparation",
    "30%+ reporting efficiency improvement",
    "40%+ faster root-cause analysis",
    "100% order-policy reconciliation",
  ],
  questions: [
    "Which SKUs are approaching reorder risk?",
    "Where is raw-material coverage constrained?",
    "Which delivery, refund, or demand signals explain the exception?",
    "Which formulas differ from the trusted Power BI baseline?",
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
            AWS data engineering for governed analytics and GenAI-ready decisions.
          </h1>
          <p className="max-w-3xl mt-6 text-lg text-neutral-300">
            This page highlights resume-backed data engineering work: AWS pipelines,
            Spark processing, Redshift/Snowflake/BigQuery models, OLAP data marts,
            data quality controls, BI-ready outputs, and secure GenAI analytics workflows.
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
          A focused toolkit for the full engineer-facing stack: programming, cloud services,
          orchestration, distributed compute, streaming, warehousing, quality, governance, APIs, and CI/CD.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Relevant Engineering Work</h2>
        <p className="max-w-3xl mt-4 subtext">
          The featured case study below shows the full engineering path: source unification,
          SQL and Python transformation, governed inventory models, Power BI reconciliation,
          dashboard delivery, and secure AI-assisted analysis.
        </p>
        <FeaturedEngineeringCaseStudy project={cassetteIqCaseStudy} />
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
  <div className="engineer-pipeline-visual" aria-label="CassetteIQ inventory analytics pipeline architecture">
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
