export const profile = {
  name: "Sujith Srinivas G",
  shortName: "Sujith",
  email: "sujithsrinivasg864@gmail.com",
  phone: "(317) 523-0756",
  location: "USA",
  headline:
    "Data Engineer | AWS Data Engineering | Redshift, S3, Glue, EMR, Spark, SQL, OLAP & GenAI Analytics",
  portfolio: "https://sarathsai4.github.io/My-Portfolio/",
};

export const contactEmail = profile.email;
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const toolLogos = [
  { name: "Python", path: asset("assets/logos/python.svg") },
  { name: "SQL", path: asset("assets/logos/postgresql.svg") },
  { name: "AWS", path: asset("assets/logos/aws.svg") },
  { name: "Amazon S3", path: asset("assets/logos/amazon-s3.svg") },
  { name: "Snowflake", path: asset("assets/logos/snowflake.svg") },
  { name: "BigQuery", path: asset("assets/logos/google-bigquery.svg") },
  { name: "Apache Spark", path: asset("assets/logos/apache-spark.svg") },
  { name: "Apache Kafka", path: asset("assets/logos/apache-kafka.svg") },
  { name: "Apache Airflow", path: asset("assets/logos/apache-airflow.svg") },
  { name: "Databricks", path: asset("assets/logos/databricks.svg") },
  { name: "Power BI", path: asset("assets/logos/power-bi.svg") },
  { name: "Tableau", path: asset("assets/logos/tableau.svg") },
  { name: "Looker", path: asset("assets/logos/looker.svg") },
  { name: "Docker", path: asset("assets/logos/docker.svg") },
  { name: "Kubernetes", path: asset("assets/logos/kubernetes.svg") },
  { name: "GitHub Actions", path: asset("assets/logos/github-actions.svg") },
];

export const skillGroups = [
  {
    title: "Languages & Querying",
    items: [
      "Python",
      "SQL",
      "Oracle SQL",
      "PySpark",
      "Spark SQL",
      "Scala",
      "Java",
      "R",
      "Shell Scripting",
      "Advanced SQL",
      "Window Functions",
      "Query Optimization",
    ],
  },
  {
    title: "AWS & Cloud Data Platforms",
    items: [
      "AWS S3",
      "AWS Glue",
      "Amazon EMR",
      "Amazon Redshift",
      "Athena",
      "Lambda",
      "Kinesis Data Streams",
      "Kinesis Firehose",
      "RDS",
      "DynamoDB",
      "EC2",
      "IAM Roles",
      "CloudWatch",
      "SageMaker",
      "Snowflake",
      "BigQuery",
      "Vertex AI",
    ],
  },
  {
    title: "Big Data & Orchestration",
    items: [
      "Apache Spark",
      "PySpark",
      "Spark Streaming",
      "Hadoop",
      "Hive",
      "Kafka",
      "Kafka Streams",
      "Flink",
      "Airflow",
      "dbt",
      "AWS Glue Jobs",
      "Batch Pipelines",
      "Micro-Batch Pipelines",
      "Streaming Ingestion",
    ],
  },
  {
    title: "Warehousing, OLAP & Modeling",
    items: [
      "Redshift",
      "Snowflake",
      "BigQuery",
      "PostgreSQL",
      "Oracle",
      "SQL Server",
      "MongoDB",
      "Data Lakes",
      "Lakehouse Architecture",
      "OLAP Data Models",
      "Dimensional Modeling",
      "Star Schema",
      "Snowflake Schema",
      "Fact Tables",
      "Dimension Tables",
      "Data Marts",
      "Partitioning",
      "Schema Enforcement",
    ],
  },
  {
    title: "Quality, Observability & Governance",
    items: [
      "Automated Validation Checks",
      "Data Reconciliation",
      "Schema Drift Detection",
      "SLA Monitoring",
      "CloudWatch",
      "Logging",
      "Checkpointing",
      "Great Expectations",
      "DataHub",
      "Lineage Tracking",
      "Performance Tuning",
      "PII Handling",
      "Encryption",
      "Access Controls",
      "Auditability",
    ],
  },
  {
    title: "Analytics, ML & GenAI",
    items: [
      "QuickSight",
      "Tableau",
      "Power BI",
      "Looker",
      "Streamlit",
      "KPI Dashboards",
      "Executive Scorecards",
      "Self-Service Reporting",
      "Feature Engineering",
      "ML-Ready Datasets",
      "Forecasting",
      "RAG Pipelines",
      "Vector Databases",
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "Azure OpenAI",
      "Prompt-Injection Defenses",
      "Guardrails",
    ],
  },
];

export const roleCards = [
  {
    title: "Data Engineer",
    level: "AWS pipelines, Spark processing, lakehouse layers, and governed data products",
    href: "#/data-engineer",
    desc:
      "Scalable ETL/ELT, OLAP models, Redshift/Snowflake/BigQuery marts, data quality, observability, and production analytics infrastructure.",
    tags: ["AWS", "Glue", "Redshift", "Spark", "Airflow", "dbt"],
  },
  {
    title: "Analytics Engineer",
    level: "Trusted KPI layers, dashboard-ready marts, and business decision support",
    href: "#/data-analyst",
    desc:
      "Dimensional reporting layers, executive dashboards, self-service BI, metric reconciliation, forecasting support, and stakeholder analytics.",
    tags: ["SQL", "Power BI", "Tableau", "QuickSight", "Snowflake", "BigQuery"],
  },
  {
    title: "GenAI Analytics",
    level: "RAG-enabled workflows, AI-assisted root cause analysis, and secure model access",
    href: "#/ai-analytics",
    desc:
      "Natural-language analytics, semantic extraction, FastAPI model proxies, secure AI credential handling, and validated AI-assisted investigations.",
    tags: ["RAG", "FastAPI", "OpenAI", "LangChain", "NLP", "Guardrails"],
  },
];

export const myProjects = [
  {
    id: 1,
    title: "CassetteIQ Inventory Analytics Platform",
    desc:
      "Internal React, FastAPI, Python, and SQL Server analytics website for demand, reorder, inventory-risk, raw-material coverage, and AI-assisted operational analysis.",
    subdesc: [
      "Replaced notebook-based analysis with governed self-service dashboards for 200+ finished-good and SKU categories across 11 inventory groups.",
      "Unified customer, order, delivery, returns, inventory, demand, and planning datasets into trusted reporting and ML-ready layers.",
      "Reconciled 100% of order-policy outputs to the Power BI baseline and resolved production-blocking calculation, validation, chart, and SQL reliability defects.",
    ],
    href: "",
    spotlight: asset("assets/projects/inventory-forecasting.svg"),
    tags: [
      { id: 1, name: "React", path: asset("assets/react.svg") },
      { id: 2, name: "FastAPI", path: asset("assets/logos/fastapi.svg") },
      { id: 3, name: "Python", path: asset("assets/logos/python.svg") },
      { id: 4, name: "SQL Server", path: asset("assets/logos/microsoft-sql-server.svg") },
      { id: 5, name: "Power BI", path: asset("assets/logos/power-bi.svg") },
    ],
  },
  {
    id: 2,
    title: "NHTSA & SEC Regulatory Data Lakehouse",
    desc:
      "Python-based ETL/ELT pipelines for NHTSA complaints, investigations, recall PDFs, and SEC EDGAR filings into AWS S3, BigQuery, and analytical tables.",
    subdesc: [
      "Ingested 25K+ safety complaints and regulatory records through government APIs, PDF extraction, and structured transformation workflows.",
      "Modeled partitioned analytical datasets with source-to-target mappings, schema enforcement, optimized SQL, and Spark transformations.",
      "Reduced manual regulatory review effort by 70%+ using semantic NLP and AI-assisted extraction across unstructured documents.",
    ],
    href: "",
    spotlight: asset("assets/projects/lakehouse-modernization.svg"),
    tags: [
      { id: 1, name: "AWS S3", path: asset("assets/logos/amazon-s3.svg") },
      { id: 2, name: "BigQuery", path: asset("assets/logos/google-bigquery.svg") },
      { id: 3, name: "Spark", path: asset("assets/logos/apache-spark.svg") },
      { id: 4, name: "Python", path: asset("assets/logos/python.svg") },
    ],
  },
  {
    id: 3,
    title: "Last Mile Logistics Data Quality Platform",
    desc:
      "AWS, SQL, and PySpark workflows for last-mile delivery quality, geospatial accuracy, shipment defects, SLA tracking, and operational performance.",
    subdesc: [
      "Processed high-volume LMAQ datasets with S3, EMR, Glue, Redshift, Hive, Kafka, SQL, and PySpark.",
      "Consolidated delivery, routing, geocode, shipment, inventory, returns, and defect signals into governed reporting layers.",
      "Reduced runtime delays by 25%+ through Spark SQL tuning, partition pruning, join optimization, and recurring performance checks.",
    ],
    href: "",
    spotlight: asset("assets/projects/streaming-observability.svg"),
    tags: [
      { id: 1, name: "PySpark", path: asset("assets/logos/apache-spark.svg") },
      { id: 2, name: "AWS Glue", path: asset("assets/logos/aws.svg") },
      { id: 3, name: "Kafka", path: asset("assets/logos/apache-kafka.svg") },
      { id: 4, name: "Redshift", path: asset("assets/logos/aws.svg") },
    ],
  },
  {
    id: 4,
    title: "NEO KPI Data Marts & Reporting Layers",
    desc:
      "Reusable self-service reporting layers, semantic metric definitions, and feature-ready data marts for program analytics, BI dashboards, and ML use cases.",
    subdesc: [
      "Transformed fragmented operational data through modular Python, SQL, and dbt-style workflows.",
      "Orchestrated incremental ETL/ELT workflows with dependency management, retry logic, logging, and failure handling.",
      "Reduced dashboard data errors by 35%+ with automated quality checks for schema drift, missing values, duplicates, and inconsistent metrics.",
    ],
    href: "",
    spotlight: asset("assets/projects/kpi-governance.svg"),
    tags: [
      { id: 1, name: "dbt", path: asset("assets/logos/dbt.svg") },
      { id: 2, name: "BigQuery", path: asset("assets/logos/google-bigquery.svg") },
      { id: 3, name: "SQL", path: asset("assets/logos/postgresql.svg") },
      { id: 4, name: "Power BI", path: asset("assets/logos/power-bi.svg") },
    ],
  },
  {
    id: 5,
    title: "Inventory Forecasting & Reorder Decision Engine",
    desc:
      "Formula-driven planning outputs for demand risk, safety stock, reorder needs, inventory exposure, raw-material coverage, and operational bottlenecks.",
    subdesc: [
      "Built dashboard-ready reorder, safety-stock, raw-coverage, and planning formulas validated against business reporting outputs.",
      "Added search, status filters, sortable views, column controls, and CSV, Excel, and PNG exports for business users.",
      "Improved reporting efficiency by 30%+ across Tableau, QuickSight, Power BI, and web dashboard views.",
    ],
    href: "",
    spotlight: asset("assets/projects/inventory-forecasting.svg"),
    tags: [
      { id: 1, name: "Python", path: asset("assets/logos/python.svg") },
      { id: 2, name: "SQL", path: asset("assets/logos/postgresql.svg") },
      { id: 3, name: "QuickSight", path: asset("assets/logos/amazon-quicksight.svg") },
      { id: 4, name: "Forecasting", path: asset("assets/logos/scikit-learn.svg") },
    ],
  },
  {
    id: 6,
    title: "Flipkart Ecommerce Data Engineering Platform",
    desc:
      "Batch ETL and analytics workflows for customer, seller, inventory, catalog, and order datasets across ecommerce merchandising and supply chain reporting.",
    subdesc: [
      "Built Python, SQL, Spark, Hadoop, Hive, and Airflow pipelines that integrated transactional data into centralized analytics environments.",
      "Automated ingestion from transactional systems with Sqoop, Hive, HDFS, and SQL for daily merchandising, supply chain, and category reporting.",
      "Optimized Spark and Hive workloads with partitioning, query tuning, indexing logic, and parallel processing to reduce reporting delays.",
    ],
    href: "",
    spotlight: asset("assets/projects/streaming-observability.svg"),
    tags: [
      { id: 1, name: "Spark", path: asset("assets/logos/apache-spark.svg") },
      { id: 2, name: "Hive", path: asset("assets/logos/apache-hive.svg") },
      { id: 3, name: "Hadoop", path: asset("assets/logos/hadoop.svg") },
      { id: 4, name: "Airflow", path: asset("assets/logos/apache-airflow.svg") },
    ],
  },
];

export const experiences = [
  {
    title: "Data Analyst - Data Engineering & Analytics",
    job: "General Data",
    date: "Feb 2026 - Jun 2026",
    contents: [
      "Delivered CassetteIQ, a React, FastAPI, Python, and SQL Server inventory analytics website for demand, reorder, inventory-risk, raw-material coverage, and AI-assisted operational analysis.",
      "Unified customer, order, delivery, returns, inventory, demand, and planning datasets into trusted analytical and ML-ready layers using Python, SQL, AWS Glue, Snowflake, and SQL Server.",
      "Supported 200+ finished-good and SKU categories across 11 inventory groups while reconciling order-policy outputs to the Power BI baseline.",
      "Integrated Wendy, an internal custom GPT-style AI analyst, through a secure FastAPI backend proxy with server-side API-key handling and company-network controls.",
      "Improved root-cause analysis by 40%+ and reporting efficiency by 30%+ through AI-assisted workflows and BI/web dashboard views.",
    ],
  },
  {
    title: "Data Engineer (Graduate Assistant)",
    job: "University of Cincinnati",
    date: "Jun 2025 - Aug 2025",
    contents: [
      "Orchestrated Python ETL/ELT pipelines for 25K+ NHTSA complaints, investigation records, recall PDFs, compliance documents, and SEC EDGAR filings.",
      "Loaded government API, PDF, web, and semi-structured sources into AWS S3, BigQuery, and structured analytical tables.",
      "Automated semantic NLP and AI-assisted document extraction to link complaint, investigation, recall, filing, manufacturer, and entity-level signals.",
      "Validated compliance-to-investigation-to-resolution linkages with reconciliation checks, checkpointing, structured logging, and documented schema assumptions.",
    ],
  },
  {
    title: "Project Lead",
    job: "University of Cincinnati (NEO)",
    date: "Sep 2024 - Mar 2025",
    contents: [
      "Delivered analytics-ready datasets for KPI dashboards, executive reporting, and AI/ML use cases through modular Python, SQL, and dbt-style workflows.",
      "Created reusable self-service reporting layers and semantic metric definitions that reduced recurring custom data pulls by 25%+.",
      "Structured feature-ready data marts with dimensional modeling and standardized business rules for BI dashboards, KPI monitoring, and ML experimentation.",
      "Reduced failed runs and manual reruns by 30%+ through incremental ETL/ELT workflows with dependencies, retries, logging, and failure handling.",
    ],
  },
  {
    title: "Quality Specialist - Data Engineering & Analytics, LMAQ",
    job: "Amazon",
    date: "Nov 2021 - Aug 2023",
    contents: [
      "Processed high-volume Last Mile Analytics & Quality datasets with SQL, PySpark, AWS S3, EMR, Glue, Redshift, Hive, and Kafka.",
      "Transformed delivery, routing, geocode, shipment, inventory, returns, and defect data into standardized analytical tables for SLA and customer-impact reporting.",
      "Reduced redundant and inconsistent reporting metrics by 30%+ with governed Redshift and S3 reporting layers, schema enforcement, partitioning, and reusable SQL transformations.",
      "Tuned PySpark, Spark SQL, and SQL workloads through join optimization, partition pruning, query refactoring, and performance checks.",
    ],
  },
  {
    title: "Data Engineer",
    job: "Flipkart",
    date: "2019 - 2021",
    contents: [
      "Built and maintained batch ETL pipelines using Python, SQL, Apache Spark, Hadoop, Hive, and Airflow to integrate customer, seller, inventory, catalog, and order datasets into centralized analytics environments.",
      "Developed ingestion workflows using Sqoop, Hive, HDFS, and SQL to automate data movement from transactional systems into reporting layers for merchandising, supply chain, and category performance analysis.",
      "Created optimized analytical datasets for sales trends, inventory availability, customer purchasing behavior, order fulfillment, and seller performance across multiple product categories.",
      "Improved Spark and Hive job performance with partitioning, query tuning, indexing logic, and parallel processing, reducing reporting delays for daily business users.",
      "Built Power BI and Excel dashboards to monitor sales performance, inventory movement, fulfillment metrics, and customer demand patterns.",
      "Supported backend data services using Java, Spring Boot, REST APIs, and MySQL for inventory synchronization and catalog data processing.",
      "Performed data validation, reconciliation, and quality checks across source systems and reporting tables for order, inventory, and revenue reporting.",
      "Collaborated with product managers, software engineers, QA teams, and business analysts across the SDLC to gather requirements, test pipelines, resolve production issues, and deliver reliable analytics solutions.",
    ],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google Data Analytics Professional Certificate",
  "Palantir Foundry & AIP Builder Foundations",
  "Google AI Essentials",
  "Databricks Fundamentals",
  "SQL Essential Training (LinkedIn Learning)",
];

export const education = [
  "University of Cincinnati | Master of Science, Business Analytics | GPA: 3.85 / 4.0 | Dec 2025",
  "Bapatla Engineering College | Bachelor of Technology, Civil Engineering | GPA: 3.2 / 4.0 | Apr 2018",
];
