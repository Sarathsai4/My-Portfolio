import { certifications, contactEmail, education, skillGroups, toolLogos } from "../constants";
import RoleTechBackdrop from "../components/RoleTechBackdrop";

const analystFocus = [
  {
    title: "Inventory & Operations Analytics",
    text: "Demand, reorder, inventory-risk, raw-material coverage, delivery performance, returns, refunds, and operational bottleneck analysis.",
  },
  {
    title: "KPI & Executive Reporting",
    text: "Power BI, Tableau, QuickSight, Looker, executive scorecards, self-service analytics, KPI definitions, and stakeholder-facing reporting layers.",
  },
  {
    title: "Data Quality & Governance",
    text: "Metric reconciliation, validation checks, schema drift detection, freshness monitoring, data dictionaries, business rules, lineage, and audit-ready documentation.",
  },
  {
    title: "Decision Science",
    text: "Forecasting, variance analysis, root-cause analysis, safety-stock logic, reorder decision support, fulfillment analytics, and data storytelling.",
  },
];

const analystProjects = [
  {
    title: "Inventory Risk and Reorder Analytics Dashboard",
    stack: ["SQL", "Python", "Power BI", "QuickSight", "Snowflake", "SQL Server"],
    accent: "#33c2cc",
    visual: "lifecycle",
    metric: "30%+ Efficiency",
    signals: ["Demand", "Safety Stock", "Reorder", "Coverage"],
    summary:
      "Built BI-ready inventory views covering demand, reorder needs, safety stock, raw-material coverage, inventory exposure, and operational bottlenecks for planning and leadership teams.",
    impact:
      "Improved reporting efficiency by 30%+ and gave business users filtered, sortable, exportable outputs for raw-material risk and reorder decisions.",
  },
  {
    title: "Delivery, Returns and Refund Root-Cause Analytics",
    stack: ["SQL", "Python", "Tableau", "Power BI", "AWS Glue", "Snowflake"],
    accent: "#ffb347",
    visual: "engagement",
    metric: "40%+ Faster RCA",
    signals: ["Delivery", "Refunds", "Returns", "Exceptions"],
    summary:
      "Unified customer, order, delivery, returns, inventory, and demand signals into analytical layers that supported guided investigation of operational spikes and exception patterns.",
    impact:
      "Accelerated root-cause analysis by helping users move from high-level business questions to targeted investigation paths across delivery, refund, and inventory drivers.",
  },
  {
    title: "LMAQ Logistics KPI Quality and SLA Reporting",
    stack: ["SQL", "Python", "Power BI", "Tableau", "Snowflake", "Data Validation"],
    accent: "#57db96",
    visual: "governance",
    metric: "Metrics -30%",
    signals: ["SLA", "Geocode", "Defects", "Freshness"],
    summary:
      "Transformed delivery, routing, geocode, shipment, inventory, returns, and defect data into standardized analytical tables for last-mile quality and customer-impact reporting.",
    impact:
      "Reduced redundant and inconsistent reporting metrics by 30%+ through governed Redshift and S3 reporting layers with reusable SQL transformations.",
  },
  {
    title: "Ecommerce Sales, Inventory and Fulfillment BI",
    stack: ["SQL", "Python", "Power BI", "Excel", "Hive", "Spark"],
    accent: "#7a57db",
    visual: "monitoring",
    metric: "Daily KPIs",
    signals: ["Sales", "Inventory", "Orders", "Sellers"],
    summary:
      "Created optimized analytical datasets for sales trends, inventory availability, customer purchasing behavior, order fulfillment, and seller performance across ecommerce product categories.",
    impact:
      "Built Power BI and Excel dashboards that helped category managers and operations teams monitor sales performance, inventory movement, fulfillment metrics, and customer demand patterns.",
  },
];

const operationsSkills = [
  "Demand Forecasting",
  "Inventory Optimization",
  "Reorder Analytics",
  "Safety Stock Analysis",
  "Returns and Refund Analytics",
  "Customer Experience Metrics",
  "Seller and Marketplace Metrics",
  "Order Fulfillment Analytics",
  "Price-Sensitive Decision Support",
  "Executive Scorecards",
  "Self-Service Reporting",
  "Metric Reconciliation",
];

const operationsTools = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "QuickSight",
  "Looker",
  "Excel",
  "Hive",
  "Snowflake",
  "BigQuery",
];

const operationsProjects = [
  {
    title: "CassetteIQ Power BI-Style Planning Output Table",
    tools: ["SQL Server", "Python", "Power BI", "React", "FastAPI", "Excel Export"],
    accent: "#ff7a33",
    label: "Planning",
    status: "Formula parity",
    summary:
      "Built a Power BI-style output table for order-policy review, raw-material risk, safety stock, reorder needs, and inventory-planning decisions.",
    bullets: [
      "Added formula-driven columns, status filters, search, column controls, sortable views, and CSV, Excel, and PNG exports.",
      "Re-derived replenishment logic and corrected a unit-conversion defect that affected order-policy outputs.",
      "Validated reorder, safety-stock, raw-coverage, and inventory-planning formulas against trusted business reporting.",
    ],
    outcome:
      "Reconciled 100% of order-policy outputs to the Power BI baseline and improved usability for planning teams.",
  },
  {
    title: "Self-Service KPI Reporting Layers for Program Analytics",
    tools: ["SQL", "Python", "dbt-style Workflows", "Power BI", "BigQuery"],
    accent: "#33c2cc",
    label: "KPI Layer",
    status: "Metric trust",
    summary:
      "Produced reusable reporting layers and semantic metric definitions for KPI dashboards, executive reporting, exploratory analysis, and ML experimentation.",
    bullets: [
      "Transformed fragmented operational data through modular Python, SQL, and dbt-style workflows.",
      "Created standardized business rules and dimensional marts for trusted dashboard consumption.",
      "Applied quality checks for schema drift, missing values, duplicates, and inconsistent metrics before data reached dashboards.",
    ],
    outcome:
      "Reduced manual reporting dependency by 25%+ and dashboard data errors by 35%+.",
  },
  {
    title: "Last-Mile Delivery Defect and SLA Analytics",
    tools: ["SQL", "PySpark", "AWS S3", "EMR", "Glue", "Redshift"],
    accent: "#57db96",
    label: "LMAQ",
    status: "SLA visibility",
    summary:
      "Analyzed last-mile delivery quality data to track geospatial accuracy, address-quality issues, exception rates, delivery delays, and customer-facing logistics signals.",
    bullets: [
      "Transformed delivery, routing, geocode, shipment, inventory, returns, and defect data into standardized analytical tables.",
      "Used SQL, PySpark, and dbt-style checks to detect missing records, delayed feeds, duplicate events, and geocode mismatches.",
      "Monitored freshness, failures, and event-stream changes through Kafka-based feeds and CloudWatch observability.",
    ],
    outcome:
      "Strengthened reporting reliability for operations teams, LMAQ stakeholders, and leadership users.",
  },
  {
    title: "Regulatory Linkage and Research-Ready Dataset Analytics",
    tools: ["Python", "SQL", "AWS S3", "BigQuery", "NLP", "PDF Extraction"],
    accent: "#d6995c",
    label: "Research",
    status: "Linked entities",
    summary:
      "Delivered research-ready and ML-ready datasets connecting NHTSA complaints, investigations, recalls, and SEC filing signals.",
    bullets: [
      "Extracted complaint IDs, investigation IDs, recall IDs, filing references, manufacturer signals, and entity-level attributes.",
      "Validated compliance-to-investigation-to-resolution linkages with reconciliation checks and structured logging.",
      "Documented schema assumptions and source-to-target mappings for downstream BI, NLP, and AI investigation workflows.",
    ],
    outcome:
      "Reduced tracking errors by 60%+ and manual regulatory review effort by 70%+.",
  },
  {
    title: "Flipkart Ecommerce ETL and Category KPI Reporting",
    tools: ["Python", "SQL", "Spark", "Hadoop", "Hive", "Airflow"],
    accent: "#7a57db",
    label: "Ecommerce",
    status: "Daily data",
    summary:
      "Built batch data pipelines that integrated customer, seller, inventory, catalog, and order datasets into centralized analytics environments.",
    bullets: [
      "Developed Sqoop, Hive, HDFS, and SQL ingestion workflows from transactional systems into daily reporting layers.",
      "Improved Spark and Hive performance with partitioning, query tuning, indexing logic, and parallel processing.",
      "Validated order, inventory, and revenue reporting outputs through reconciliation and data quality checks.",
    ],
    outcome:
      "Supported daily merchandising, supply chain, category performance, inventory synchronization, and catalog data processing workflows.",
  },
];

const cxAnalyticsBridge = [
  {
    title: "Wendy-Powered Natural-Language Analytics",
    tags: ["FastAPI", "OpenAI API", "SQL", "Inventory", "Guardrails"],
    text: "Expose aggregated inventory, demand, reorder, delivery, refund, and operational summaries through a secure AI analyst while keeping API keys and business data out of the browser.",
  },
  {
    title: "AI-Assisted Regulatory Extraction",
    tags: ["NLP", "PDFs", "NHTSA", "SEC EDGAR", "BigQuery"],
    text: "Use semantic NLP and AI-assisted extraction to connect complaints, investigations, recalls, filings, manufacturers, and entity-level signals for regulatory research.",
  },
  {
    title: "Validated AI Investigation Workflows",
    tags: ["RAG", "Validation", "Reconciliation", "Lineage", "Auditability"],
    text: "Pair AI speed with validation checks, schema assumptions, reconciliation, lineage, and documented guardrails so AI-assisted findings can be trusted by business users.",
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
            Analytics engineering for trusted business decisions.
          </h1>
          <p className="max-w-3xl mt-6 text-lg text-neutral-300">
            This section highlights SQL-first analysis, BI dashboards, KPI governance,
            OLAP reporting layers, operational analytics, forecasting support, and
            stakeholder-ready insight delivery.
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

      <section className="relative z-10 mt-12">
        <div className="operations-bridge role-card">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Operations Alignment</p>
          <p className="mt-4 text-lg leading-8 text-white/78">
            My analytics work focuses on operational decision support: inventory exposure, reorder needs,
            delivery exceptions, refunds, regulatory linkages, seller performance, order fulfillment, and KPI trust. The common thread is
            turning fragmented source data into reusable reporting layers that business users can act on.
          </p>
        </div>
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Analyst Toolkit</h2>
        <p className="max-w-3xl mt-4 subtext">
          A focused toolkit for BI, OLAP reporting, governance, metric definitions,
          reconciliation, forecasting support, and advanced SQL analysis.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="relative z-10 mt-20">
        <div className="cx-analytics-bridge role-card">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-aqua">GenAI Analytics Bridge</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Analyst work that connects governed data with AI-assisted investigation.
            </h2>
            <p className="mt-5 subtext">
              This bridge expands the analytics portfolio into GenAI workflows: secure FastAPI model access,
              RAG-style context grounding, semantic extraction, guided root-cause analysis, and validation checks
              that keep AI-assisted findings explainable.
            </p>
            <a className="inline-flex mt-6 role-link role-link-primary" href="#/ai-analytics">
              Open GenAI Analytics
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {cxAnalyticsBridge.map((item) => (
              <article className="cx-bridge-card" key={item.title}>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/66">{item.text}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span className="cx-bridge-pill" key={`${item.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Relevant Analytics Work</h2>
        <p className="max-w-3xl mt-4 subtext">
          These projects emphasize inventory analytics, logistics quality, KPI trust,
          governed datasets, and cost-variance decision support.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
          {analystProjects.map((project) => (
            <div
              className="analyst-project-card role-card"
              key={project.title}
              style={{ "--project-accent": project.accent }}
            >
              <AnalystProjectVisual project={project} />
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
        <h2 className="text-heading">Operational Analytics & Decision Support Projects</h2>
        <p className="max-w-3xl mt-4 subtext">
          These projects extend the analyst toolkit into operational analytics: inventory planning,
          self-service KPI layers, delivery quality, ecommerce reporting datasets, and regulatory research datasets.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {operationsProjects.map((project) => (
            <article
              className="ops-project-card role-card"
              key={project.title}
              style={{ "--ops-accent": project.accent }}
            >
              <OperationsProjectVisual project={project} />
              <p className="text-lg font-semibold text-white">{project.title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span className="skill-pill ops-tool-pill" key={`${project.title}-${tool}`}>
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-5 subtext">{project.summary}</p>
              <ul className="mt-5 space-y-3">
                {project.bullets.map((bullet) => (
                  <li className="ops-bullet" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-orange-200/90">{project.outcome}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <InfoPillPanel title="Domain Analytics" items={operationsSkills} />
          <InfoPillPanel title="Tools" items={operationsTools} />
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

const AnalystProjectVisual = ({ project }) => (
  <div className={`analyst-project-visual analyst-project-visual-${project.visual}`}>
    <div className="analyst-project-orbit" />
    <div className="analyst-project-scan" />
    <div className="analyst-project-dashboard">
      <div className="analyst-project-metric">
        <span>{project.visual.replace("-", " ")}</span>
        <strong>{project.metric}</strong>
      </div>
      <div className="analyst-project-bars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="analyst-project-flow" aria-hidden="true">
        {project.signals.map((signal) => (
          <span key={`${project.title}-${signal}`}>{signal}</span>
        ))}
      </div>
    </div>
  </div>
);

const OperationsProjectVisual = ({ project }) => (
  <div className="ops-project-visual" aria-hidden="true">
    <div className="ops-visual-header">
      <span>{project.label}</span>
      <strong>{project.status}</strong>
    </div>
    <div className="ops-visual-board">
      <span className="ops-row is-hot" />
      <span className="ops-row" />
      <span className="ops-row is-done" />
      <span className="ops-row" />
    </div>
    <div className="ops-visual-footer">
      <span>Owner</span>
      <span>Due</span>
      <span>Status</span>
    </div>
  </div>
);

const InfoPillPanel = ({ title, items }) => (
  <div className="ops-info-panel role-card">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((item) => (
        <span className="ops-info-pill" key={`${title}-${item}`}>
          {item}
        </span>
      ))}
    </div>
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
