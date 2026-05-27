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
    accent: "#33c2cc",
    visual: "lifecycle",
    metric: "Retention +18%",
    signals: ["Acquire", "Engage", "Retain", "Churn Risk"],
    summary:
      "Built a user lifecycle analytics dashboard to analyze customer behavior across acquisition, engagement, retention, and churn stages. Developed SQL-based datasets to track platform usage, content engagement, active user trends, retention cohorts, and churn-risk indicators.",
    impact:
      "Created Tableau and Looker dashboards that helped stakeholders identify lifecycle drop-off points, evaluate growth opportunities, and translate user behavior patterns into actionable recommendations for marketing and product teams.",
  },
  {
    title: "Content Engagement & Subscriber Behavior Insights",
    stack: ["SQL", "Python", "Power BI", "Tableau", "BigQuery", "Statistical Analysis"],
    accent: "#ffb347",
    visual: "engagement",
    metric: "Engagement 72%",
    signals: ["Views", "Watch Time", "Categories", "Subscriber Value"],
    summary:
      "Analyzed content consumption, user activity, and engagement trends to understand how viewing behavior influences retention, repeat usage, and subscriber value. Used SQL and Python to segment users by engagement level and identify high-performing content categories.",
    impact:
      "Uncovered patterns linked to churn risk and lifecycle performance, then presented the insights through executive-ready dashboards and business narratives for cross-functional decision-making.",
  },
  {
    title: "Enterprise Customer Data Quality and KPI Governance Analytics",
    stack: ["SQL", "Python", "Power BI", "Tableau", "Snowflake", "Data Validation"],
    accent: "#57db96",
    visual: "governance",
    metric: "Discrepancy -35%",
    signals: ["Rules", "KPI Logic", "Reconcile", "Trust"],
    summary:
      "Built a customer data quality and KPI governance framework to validate business metrics, reconcile reporting logic, and improve trust in analytics-ready datasets. Developed SQL validation checks, dashboards, and documentation for KPI definitions, assumptions, rules, and reporting methodology.",
    impact:
      "Improved metric consistency and reduced reporting discrepancies by 35%, helping business teams rely on accurate and reusable analytics outputs.",
  },
  {
    title: "Real-Time KPI Monitoring and Trusted Dataset Development",
    stack: ["SQL", "Python", "Power BI", "Tableau", "BigQuery", "Data Quality"],
    accent: "#7a57db",
    visual: "monitoring",
    metric: "Timeliness +30%",
    signals: ["Freshness", "SLA", "Volume", "Exceptions"],
    summary:
      "Created near real-time KPI monitoring logic to track data freshness, reporting SLAs, volume changes, exception patterns, and dashboard-impacting data issues before they affected business users.",
    impact:
      "Built validation rules to identify data delays, reporting inconsistencies, and transformation errors, improving reporting timeliness by 30% while strengthening governance, audit-readiness, and metric reliability.",
  },
];

const operationsSkills = [
  "Remote Production Support",
  "Event Logistics",
  "Production Documentation",
  "Scheduling Coordination",
  "Task Tracking",
  "Meeting Coordination",
  "Vendor Follow-Up",
  "Stakeholder Communication",
  "Production Material Tracking",
  "Operational Reporting",
  "Process Documentation",
  "Cross-Functional Coordination",
];

const operationsTools = [
  "Excel",
  "Outlook",
  "Word",
  "PowerPoint",
  "Teams",
  "Power BI",
  "SharePoint",
  "OneDrive",
  "Google Sheets",
  "Power Query",
];

const operationsProjects = [
  {
    title: "Remote Production Operations Tracker for Event Coordination",
    tools: ["Excel", "Google Sheets", "Power BI", "Outlook", "Teams", "PowerPoint"],
    accent: "#ff7a33",
    label: "Event Ops",
    status: "Priority visibility",
    summary:
      "Designed a production operations tracking system to organize event logistics, staff schedules, documentation, vendor follow-ups, and task ownership across remote and event-based workflows.",
    bullets: [
      "Created structured trackers for event schedules, staff assignments, transportation needs, vendor follow-ups, production materials, and task status.",
      "Built summary views for pending items, high-priority tasks, upcoming deadlines, responsible owners, dependencies, and notes.",
      "Standardized recurring updates, meeting notes, task handoffs, and production checklists for clearer team coordination.",
    ],
    outcome:
      "Improved visibility into pending production tasks and helped teams coordinate faster across internal groups and external stakeholders.",
  },
  {
    title: "Event Logistics and Scheduling Coordination Dashboard",
    tools: ["Excel", "Power BI", "Power Query", "Outlook Calendar", "Teams"],
    accent: "#33c2cc",
    label: "Schedule",
    status: "Conflict tracking",
    summary:
      "Developed a scheduling and logistics dashboard to track event timelines, staff availability, task assignments, transportation needs, and operational dependencies.",
    bullets: [
      "Built a centralized event schedule tracker with fields for owner, time window, priority, resource requirement, and status.",
      "Used Excel formulas and Power Query to clean, organize, and summarize event and task data.",
      "Created Power BI views for upcoming deadlines, incomplete tasks, staffing coverage, task distribution, and filters by owner or priority.",
    ],
    outcome:
      "Made logistics information easier to monitor from one place and supported faster planning in a fast-moving environment.",
  },
  {
    title: "Production Documentation and Communication Workflow System",
    tools: ["Word", "PowerPoint", "Excel", "Outlook", "Teams", "OneDrive"],
    accent: "#57db96",
    label: "Docs",
    status: "Clear handoffs",
    summary:
      "Created a structured documentation workflow for recurring operational updates, meeting coordination, action items, task handoffs, and stakeholder communication.",
    bullets: [
      "Developed reusable templates for production notes, meeting agendas, follow-up emails, action items, and status reports.",
      "Organized documents by project and event category so production information could be retrieved and distributed quickly.",
      "Created daily and weekly update formats covering completed tasks, blockers, next steps, ownership, and follow-up dates.",
    ],
    outcome:
      "Reduced confusion by standardizing how updates were captured and shared across internal teams and stakeholders.",
  },
  {
    title: "Production Materials Management and Distribution Tracker",
    tools: ["Excel", "SharePoint", "OneDrive", "Power BI", "Outlook", "Teams"],
    accent: "#d6995c",
    label: "Assets",
    status: "Approval flow",
    summary:
      "Built a tracking system to manage production-related materials such as graphics requests, promotional assets, sales content, documentation, and approval status.",
    bullets: [
      "Tracked asset name, category, owner, request date, due date, status, approval notes, and stakeholder deliverables.",
      "Organized materials into graphics, promotional content, reports, documentation, and stakeholder-ready outputs.",
      "Created status summaries for pending approvals, completed materials, delayed items, and owner-specific tasks.",
    ],
    outcome:
      "Improved accountability by making asset readiness, ownership, and due dates easier to review and follow up on.",
  },
  {
    title: "Remote Team Coordination and Task Automation Workflow",
    tools: ["Outlook", "Excel", "Power Automate", "Teams", "Power BI"],
    accent: "#7a57db",
    label: "Automation",
    status: "Follow-up control",
    summary:
      "Designed a workflow to support high-volume remote coordination by organizing emails, task requests, follow-ups, approvals, and stakeholder updates.",
    bullets: [
      "Created structured templates for recurring email responses, meeting follow-ups, task summaries, and status updates.",
      "Built trackers for requests, pending approvals, follow-up dates, stakeholder ownership, priority, and completion status.",
      "Used automation logic to classify tasks and produce dashboard-style summaries for open requests, overdue items, and completed actions.",
    ],
    outcome:
      "Reduced manual tracking effort and improved response consistency for remote coordination and operational follow-through.",
  },
];

const cxAnalyticsBridge = [
  {
    title: "Customer Segmentation for Marketing",
    tags: ["Python", "Pandas", "SQL", "Clustering", "Lifecycle"],
    text: "Segment customers by engagement, retention signals, campaign response, and support friction so marketing teams can target the right intervention instead of treating every customer journey the same.",
  },
  {
    title: "Voice-of-Customer Support Intelligence",
    tags: ["NLP", "CSAT", "NPS", "Support Tickets", "Dashboards"],
    text: "Synthesize surveys, support tickets, chat-style feedback, and operational data into measurable themes, pain points, and self-service opportunities for CX and support teams.",
  },
  {
    title: "Methodology-Defensible AI Analysis",
    tags: ["AI QA", "Regression", "Model Checks", "Jupyter", "Storytelling"],
    text: "Use AI to accelerate exploration while independently validating SQL, Pandas logic, model assumptions, feature definitions, and whether the output is reliable enough to defend.",
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
            This section positions my work for data analyst roles: SQL-first analysis, BI dashboards,
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

      <section className="relative z-10 mt-12">
        <div className="operations-bridge role-card">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Operations Alignment</p>
          <p className="mt-4 text-lg leading-8 text-white/78">
            In addition to data analytics and dashboard development, I have worked on operations-focused projects
            involving task coordination, documentation management, communication workflows, scheduling trackers,
            reporting templates, and cross-functional follow-up systems. These projects strengthened my ability to
            organize information flow, support fast-moving teams, manage deadlines, and communicate clearly across
            stakeholders in remote and event-driven environments.
          </p>
        </div>
      </section>

      <section className="relative z-10 mt-20">
        <h2 className="text-heading">Analyst Toolkit</h2>
        <p className="max-w-3xl mt-4 subtext">
          A focused toolkit for analyst-facing capabilities across BI, customer analytics, governance,
          privacy-aware reporting, metric definitions, and advanced SQL analysis.
        </p>
        <SkillMatrix groups={skillGroups} />
      </section>

      <section className="relative z-10 mt-20">
        <div className="cx-analytics-bridge role-card">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-aqua">Customer Experience Data Science</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Analyst work that connects marketing, support, and machine learning.
            </h2>
            <p className="mt-5 subtext">
              This bridge expands the analyst portfolio into technical CX analytics: segmentation for marketing,
              Voice-of-Customer analysis, support-ticket NLP, regression-based driver analysis, and AI-assisted
              quality checks that keep the methodology explainable.
            </p>
            <a className="inline-flex mt-6 role-link role-link-primary" href="#/ai-analytics">
              Open AI / CX Analytics
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
          These projects emphasize customer analytics, subscriber behavior, KPI trust, and governed datasets for
          stakeholder-ready decision-making.
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
        <h2 className="text-heading">Operations, Production Support & Workflow Coordination Projects</h2>
        <p className="max-w-3xl mt-4 subtext">
          These projects extend the analyst toolkit into operational coordination: tracking deadlines, organizing
          production-style materials, documenting handoffs, improving follow-up loops, and creating clear reporting
          views for busy teams.
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
          <InfoPillPanel title="Production & Operations Coordination" items={operationsSkills} />
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
