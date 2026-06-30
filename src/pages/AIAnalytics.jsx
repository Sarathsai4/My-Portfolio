import { contactEmail } from "../constants";
import RoleTechBackdrop from "../components/RoleTechBackdrop";

const capabilityGroups = [
  {
    title: "GenAI Analytics Workflows",
    items: ["Natural-Language Analysis", "Guided Investigation", "Root-Cause Analysis", "Operational Summaries", "Executive Questions", "Self-Service BI"],
  },
  {
    title: "RAG & Semantic Extraction",
    items: ["RAG Pipelines", "Vector Databases", "Regulatory PDFs", "NHTSA Complaints", "SEC Filings", "Entity Linkage"],
  },
  {
    title: "Secure AI Delivery",
    items: ["FastAPI Proxy", "Server-Side API Keys", "Model Selection", "Network Controls", "PII Handling", "Access Controls"],
  },
  {
    title: "Validation & Guardrails",
    items: ["Output Validation", "Reconciliation", "Schema Assumptions", "Prompt-Injection Defenses", "Auditability", "Human Review"],
  },
];

const aiStack = [
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Temporary Tables",
  "R",
  "scikit-learn",
  "NLP",
  "RAG Pipelines",
  "Vector Databases",
  "LangChain",
  "LlamaIndex",
  "OpenAI API",
  "Azure OpenAI",
  "FastAPI",
  "Tableau",
  "Power BI",
  "Jupyter Notebook",
  "BigQuery",
  "Snowflake",
  "AI Guardrails",
];

const cxProjects = [
  {
    title: "Wendy Internal AI Analyst for Inventory Operations",
    accent: "#33c2cc",
    method: "Secure GenAI Analytics",
    tools: ["FastAPI", "OpenAI API", "Python", "SQL", "React", "Guardrails"],
    summary:
      "Integrated Wendy, General Data's internal custom GPT-style AI analyst, through a secure backend proxy for natural-language analysis over governed inventory and operational summaries.",
    methodology: [
      "Kept API-key handling server-side through FastAPI so credentials and business data were not exposed in the browser.",
      "Supported model selection and company-network controls for safer AI access inside the application workflow.",
      "Grounded user questions in aggregated inventory, demand, reorder, FLX/L shared-pool, refund, delivery, and operational summaries.",
    ],
    impact:
      "Helped users investigate inventory risks, reorder anomalies, delivery issues, refund patterns, and operational exceptions without manually querying multiple reports.",
  },
  {
    title: "AI-Assisted Regulatory Document Extraction",
    accent: "#ffb347",
    method: "NLP + Entity Linkage",
    tools: ["Python", "SQL", "NLP", "BigQuery", "AWS S3", "PDF Extraction"],
    summary:
      "Automated semantic NLP and AI-assisted extraction across unstructured regulatory PDFs, NHTSA data, and SEC EDGAR filings.",
    methodology: [
      "Identified and linked complaint IDs, investigation IDs, recall/resolution IDs, filing references, manufacturer signals, and entity-level attributes.",
      "Converted raw API, PDF, web, and semi-structured inputs into governed analytical tables for BI, NLP, and AI investigation.",
      "Validated compliance-to-investigation-to-resolution linkages with reconciliation checks, checkpointing, logging, and documented assumptions.",
    ],
    impact:
      "Reduced manual regulatory review effort by 70%+ and tracking errors by 60%+ while enabling semantic search and entity-level risk exploration.",
  },
  {
    title: "AI-Assisted Operational Root-Cause Analysis",
    accent: "#57db96",
    method: "Guided Investigation",
    tools: ["Python", "SQL", "Power BI", "Tableau", "QuickSight", "FastAPI"],
    summary:
      "Built AI-assisted workflows that converted business questions into guided investigation paths across contact spikes, delivery issues, refunds, inventory risks, reorder anomalies, and material-planning exceptions.",
    methodology: [
      "Prepared governed summaries that separated sensitive source data from AI-facing analytical context.",
      "Connected AI narratives back to dashboard metrics and formula-driven outputs so users could verify suggested investigation paths.",
      "Used validation and reconciliation checks to reduce the risk of misleading explanations reaching business users.",
    ],
    impact:
      "Accelerated root-cause analysis by 40%+ and improved reporting efficiency by 30%+ across BI and web-based dashboard views.",
  },
  {
    title: "Governed GenAI Analytics Delivery Pattern",
    accent: "#7a57db",
    method: "AI + Governance",
    tools: ["Python", "SQL", "RAG", "Lineage", "Auditability", "Access Controls"],
    summary:
      "Created a repeatable pattern for applying AI to analytics without losing governance, validation, lineage, or control over sensitive operational context.",
    methodology: [
      "Combined prompt-injection defenses, access controls, PII handling, encryption, and auditability with model-assisted analysis.",
      "Documented schema assumptions, source-to-target mappings, confidence checks, and validation rules.",
      "Used AI to speed analysis while keeping final conclusions tied to governed tables, reproducible transformations, and reviewable evidence.",
    ],
    impact:
      "Demonstrated GenAI delivery that is useful for business users and defensible for data engineering, governance, and leadership stakeholders.",
  },
];

const methodologySteps = [
  "Define the business question and trusted data scope",
  "Prepare aggregated analytical context from governed tables",
  "Protect credentials, PII, and sensitive operational data",
  "Ground AI responses in validated summaries or retrieved evidence",
  "Check formulas, lineage, assumptions, and reconciliation outputs",
  "Route uncertain or high-impact findings through human review",
  "Translate validated findings into dashboards, actions, and narratives",
];

const AIAnalytics = () => {
  return (
    <main className="relative isolate overflow-hidden pt-28 c-space role-page role-page-ai">
      <RoleTechBackdrop variant="ai" />

      <section className="relative z-10 role-hero">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">GenAI Analytics</p>
          <h1 className="mt-5 text-4xl font-semibold md:text-7xl">
            GenAI analytics with secure delivery and defensible methodology.
          </h1>
          <p className="max-w-3xl mt-6 text-lg text-neutral-300">
            This section highlights resume-backed AI analytics work: Wendy-powered natural-language analysis,
            RAG-style workflows, semantic regulatory extraction, secure FastAPI model proxies, guarded access,
            and AI-assisted findings that can be validated and explained.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a className="role-link role-link-primary" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a className="role-link" href="#/data-analyst">View Data Analytics</a>
          </div>
        </div>
      </section>

      <section className="relative z-10 grid grid-cols-1 gap-4 mt-16 md:grid-cols-4">
        {capabilityGroups.map((group) => (
          <article className="ai-capability-card role-card" key={group.title}>
            <h2 className="text-xl font-semibold text-white">{group.title}</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {group.items.map((item) => (
                <span className="ai-skill-pill" key={`${group.title}-${item}`}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="relative z-10 mt-20">
        <div className="ai-methodology-frame role-card">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-aqua">Methodology Ownership</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Built to accelerate analysis without losing governance.
            </h2>
            <p className="mt-5 subtext">
              The workflow emphasizes secure analytical ownership: define the business problem, prepare trusted
              context, protect sensitive data, ground model responses, validate assumptions, and translate
              AI-assisted findings into actions for planning, operations, research, and leadership teams.
            </p>
          </div>
          <div className="ai-methodology-steps">
            {methodologySteps.map((step, index) => (
              <div className="ai-methodology-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">GenAI Analytics Projects</h2>
        <p className="max-w-3xl mt-4 subtext">
          These projects are positioned for GenAI analytics work: natural-language operational analysis,
          semantic document extraction, guided root-cause workflows, and AI methods with clear validation.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
          {cxProjects.map((project) => (
            <article className="ai-project-card role-card" key={project.title} style={{ "--ai-accent": project.accent }}>
              <div className="ai-project-visual" aria-hidden="true">
                <div className="ai-project-orbit" />
                <div className="ai-project-method">{project.method}</div>
                <div className="ai-project-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <p className="text-xl font-semibold text-white">{project.title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span className="ai-skill-pill" key={`${project.title}-${tool}`}>{tool}</span>
                ))}
              </div>
              <p className="mt-5 subtext">{project.summary}</p>
              <div className="mt-5 space-y-3">
                {project.methodology.map((item) => (
                  <p className="ai-method-note" key={item}>{item}</p>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-aqua/90">{project.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Technical Stack Alignment</h2>
        <p className="max-w-3xl mt-4 subtext">
          Role-aligned skills across RAG, semantic extraction, secure AI access,
          NLP, governed datasets, dashboarding, and responsible AI-assisted analysis.
        </p>
        <div className="ai-stack-wall">
          {aiStack.map((item) => (
            <span className="ai-stack-token" key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AIAnalytics;
