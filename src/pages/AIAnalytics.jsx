import { contactEmail } from "../constants";
import RoleTechBackdrop from "../components/RoleTechBackdrop";

const capabilityGroups = [
  {
    title: "CX & Voice-of-Customer Analytics",
    items: ["NPS", "CSAT", "Support Tickets", "Chat Logs", "Survey Feedback", "Customer Journey Pain Points"],
  },
  {
    title: "Marketing Data Science",
    items: ["Customer Segmentation", "Lifecycle Targeting", "Campaign Response", "Retention Cohorts", "Churn Signals", "Persona Analysis"],
  },
  {
    title: "Technical Methods",
    items: ["SQL Temp Tables", "Python Pandas", "Data Structures", "Regression", "NLP", "Clustering", "Model Evaluation", "Root-Cause Analysis"],
  },
  {
    title: "AI-Assisted Analysis QA",
    items: ["Prompted Analysis", "Output Validation", "Error Detection", "Assumption Checks", "Reproducible Notebooks", "Stakeholder Storytelling"],
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
  "Regression",
  "Clustering",
  "Sentiment Analysis",
  "Topic Modeling",
  "Tableau",
  "Power BI",
  "Jupyter Notebook",
  "BigQuery",
  "Snowflake",
  "AI Validation",
];

const cxProjects = [
  {
    title: "Voice-of-Customer NLP & Support Ticket Intelligence",
    accent: "#33c2cc",
    method: "NLP + Topic Modeling",
    tools: ["Python", "Pandas", "SQL", "NLP", "scikit-learn", "Tableau"],
    summary:
      "Built a customer support analytics workflow to synthesize surveys, support tickets, chat-style feedback, and operational data into measurable CX themes, friction points, and escalation drivers.",
    methodology: [
      "Used SQL temporary tables to stage feedback, customer attributes, ticket metadata, and journey events before modeling.",
      "Applied text preprocessing, sentiment scoring, keyword extraction, topic grouping, and support issue clustering to identify repeatable pain-point categories.",
      "Validated model outputs by sampling records, checking mislabeled themes, comparing results to known support categories, and documenting assumptions.",
    ],
    impact:
      "Created stakeholder-ready outputs that connected customer language to root-cause themes, support volume, self-service opportunities, and product improvement areas.",
  },
  {
    title: "Marketing Customer Segmentation & Lifecycle Targeting Model",
    accent: "#ffb347",
    method: "Clustering + Segmentation",
    tools: ["Python", "Pandas", "SQL", "K-Means", "Tableau", "Power BI"],
    summary:
      "Designed a marketing segmentation analysis to group customers by engagement behavior, lifecycle stage, support friction, retention risk, and channel responsiveness.",
    methodology: [
      "Engineered features for usage frequency, recency, support contact rate, satisfaction signals, campaign engagement, and subscription behavior.",
      "Used clustering and cohort logic to create interpretable customer groups for marketing, lifecycle, and support prioritization.",
      "Compared segment stability, outlier behavior, and business interpretability before translating clusters into stakeholder recommendations.",
    ],
    impact:
      "Helped show where targeted messaging, self-service resources, and support interventions could improve retention and customer satisfaction.",
  },
  {
    title: "Customer Experience Driver Modeling for CSAT, NPS & Churn Risk",
    accent: "#57db96",
    method: "Regression + ML",
    tools: ["Python", "Pandas", "SQL", "Regression", "Random Forest", "Jupyter"],
    summary:
      "Developed a CX modeling framework to identify which behavioral, support, operational, and feedback variables were most associated with satisfaction, loyalty, and churn risk.",
    methodology: [
      "Integrated survey, support, behavioral, and transactional features into analytical tables using SQL and Pandas.",
      "Built regression and tree-based models to estimate drivers of CSAT/NPS movement and churn-risk patterns.",
      "Evaluated feature importance, residual patterns, data leakage risks, missingness, and model stability before communicating findings.",
    ],
    impact:
      "Produced defensible driver insights that could support corrective actions, experimentation ideas, and customer journey improvement priorities.",
  },
  {
    title: "AI-Assisted Analytics QA & Methodology Defense System",
    accent: "#7a57db",
    method: "AI + Validation",
    tools: ["Python", "SQL", "Pandas", "Jupyter", "AI Tools", "Documentation"],
    summary:
      "Created a repeatable workflow for using AI to accelerate analysis while preserving methodological control, reproducibility, and validation of generated outputs.",
    methodology: [
      "Used AI to accelerate query drafting, feature brainstorming, summarization, and analysis outlines while independently checking logic and assumptions.",
      "Validated generated SQL, Pandas transformations, segment definitions, and statistical interpretations against source data and expected business behavior.",
      "Documented failure modes, confidence checks, hand-reviewed samples, and decision rules so outputs could be defended under stakeholder review.",
    ],
    impact:
      "Demonstrated the ability to use AI for speed without outsourcing judgment, especially when identifying whether generated outputs are wrong, incomplete, or misleading.",
  },
];

const methodologySteps = [
  "Define the customer question and decision owner",
  "Stage source data with SQL temporary tables",
  "Profile data quality, missingness, and support-channel bias",
  "Engineer behavioral, feedback, and operational features",
  "Build interpretable segmentation, NLP, or regression models",
  "Validate assumptions, model outputs, and failure modes",
  "Translate findings into CX actions, dashboards, and narratives",
];

const AIAnalytics = () => {
  return (
    <main className="relative isolate overflow-hidden pt-28 c-space role-page role-page-ai">
      <RoleTechBackdrop variant="ai" />

      <section className="relative z-10 role-hero">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">AI / CX Analytics</p>
          <h1 className="mt-5 text-4xl font-semibold md:text-7xl">
            Customer experience data science with defensible methodology.
          </h1>
          <p className="max-w-3xl mt-6 text-lg text-neutral-300">
            This section positions my work for technical CX analytics roles that require customer segmentation,
            support analytics, Python/Pandas, SQL temp-table workflows, statistical modeling, NLP, machine
            learning, and AI-assisted analysis that can be validated and explained.
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
              Built to defend the analysis cold, not just maintain dashboards.
            </h2>
            <p className="mt-5 subtext">
              The workflow emphasizes from-scratch analytical ownership: define the customer problem, build the
              dataset, test assumptions, choose the model, validate results, explain limitations, and translate
              technical findings into actions for customer experience, marketing, product, and support teams.
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
        <h2 className="text-heading">CX Data Science Projects</h2>
        <p className="max-w-3xl mt-4 subtext">
          These projects are positioned for technical customer experience analytics: marketing segmentation,
          customer support intelligence, NLP over feedback, regression-based driver analysis, and AI-assisted
          methods with clear validation.
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
          Role-aligned skills across customer support analytics, marketing analytics, statistical modeling,
          machine learning, NLP, dashboarding, and responsible AI-assisted analysis.
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
