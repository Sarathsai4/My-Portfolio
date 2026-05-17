import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const stackItems = [
  {
    name: "SQL",
    logo: "assets/logos/postgresql.svg",
    x: "16%",
    y: "18%",
    align: "left",
    tooltipSide: "bottom",
    glow: "#33c2cc",
    delay: 0,
    note:
      "Advanced querying, CTEs, windows, joins, reconciliation, and metric logic across analyst and engineering work.",
  },
  {
    name: "Data Warehousing",
    label: "Warehouse",
    logo: "assets/logos/snowflake.svg",
    x: "37%",
    y: "17%",
    align: "center",
    tooltipSide: "bottom",
    glow: "#57dbff",
    delay: 0.25,
    note:
      "Snowflake, Redshift, and BigQuery layers for governed reporting, reusable marts, and reliable business metrics.",
  },
  {
    name: "Transformation",
    label: "Transform",
    logo: "assets/logos/dbt.svg",
    x: "62%",
    y: "18%",
    align: "center",
    tooltipSide: "bottom",
    glow: "#ff694b",
    delay: 0.5,
    note:
      "dbt-style modeling that turns raw tables into trusted fact, dimension, KPI, and semantic reporting layers.",
  },
  {
    name: "Data Quality",
    label: "Quality",
    logo: "assets/logos/cdc.svg",
    x: "83%",
    y: "18%",
    align: "right",
    tooltipSide: "bottom",
    glow: "#d6995c",
    delay: 0.75,
    note:
      "Validation, freshness checks, schema drift, reconciliation, data contracts, SLA checks, and governance confidence.",
  },
  {
    name: "Python",
    logo: "assets/logos/python.svg",
    x: "18%",
    y: "42%",
    align: "left",
    tooltipSide: "bottom",
    glow: "#57db96",
    delay: 0.15,
    note:
      "ETL automation, API ingestion, data validation, forecasting, reporting scripts, and repeatable analytics workflows.",
  },
  {
    name: "Data Modeling",
    label: "Modeling",
    logo: "assets/logos/microsoft-sql-server.svg",
    x: "45%",
    y: "42%",
    align: "center",
    tooltipSide: "bottom",
    glow: "#7a57db",
    delay: 0.4,
    note:
      "Dimensional modeling, star schemas, fact tables, dimensions, business definitions, and analytics-ready marts.",
  },
  {
    name: "Spark",
    logo: "assets/logos/apache-spark.svg",
    x: "69%",
    y: "43%",
    align: "right",
    tooltipSide: "bottom",
    glow: "#ff7a33",
    delay: 0.1,
    note:
      "Distributed transformations for large-scale batch processing, lakehouse pipelines, PySpark jobs, and performance tuning.",
  },
  {
    name: "Cloud Storage",
    label: "Cloud",
    logo: "assets/logos/amazon-s3.svg",
    x: "83%",
    y: "45%",
    align: "right",
    tooltipSide: "top",
    glow: "#f4a742",
    delay: 0.35,
    note:
      "S3-backed raw, staged, and curated zones for ingestion, partitioning, Parquet files, and downstream analytics.",
  },
  {
    name: "Orchestration",
    label: "Orchestrate",
    logo: "assets/logos/apache-airflow.svg",
    x: "15%",
    y: "68%",
    align: "left",
    tooltipSide: "top",
    glow: "#33c2cc",
    delay: 0.6,
    note:
      "Airflow scheduling, dependencies, retries, monitoring, incremental loads, and dependable ETL/ELT delivery.",
  },
  {
    name: "Streaming",
    logo: "assets/logos/apache-kafka.svg",
    x: "36%",
    y: "70%",
    align: "center",
    tooltipSide: "top",
    glow: "#f3f4f6",
    delay: 0.85,
    note:
      "Kafka and streaming patterns for event ingestion, freshness monitoring, schema drift checks, and near real-time signals.",
  },
  {
    name: "Lakehouse",
    logo: "assets/logos/databricks.svg",
    x: "58%",
    y: "72%",
    align: "center",
    tooltipSide: "top",
    glow: "#ff3434",
    delay: 0.3,
    note:
      "Delta Lake, Databricks, Spark, schema enforcement, curated layers, and ML-ready analytical data products.",
  },
  {
    name: "BI Dashboards",
    label: "BI",
    logo: "assets/logos/power-bi.svg",
    x: "80%",
    y: "70%",
    align: "right",
    tooltipSide: "top",
    glow: "#f9d94a",
    delay: 0.55,
    note:
      "Power BI, Tableau, and Looker dashboards for KPI reporting, executive views, and stakeholder-ready storytelling.",
  },
  {
    name: "Governance",
    logo: "assets/logos/looker.svg",
    x: "50%",
    y: "88%",
    align: "center",
    tooltipSide: "top",
    glow: "#33c2cc",
    delay: 1,
    note:
      "Data dictionaries, metric definitions, documentation, lineage, audit-ready notes, and shared reporting standards.",
  },
];

const DataStackBoard = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full h-full overflow-hidden data-stack-board">
      <div className="absolute inset-0 data-stack-bg" />
      <div className="absolute inset-0 data-stack-grid" />
      <div className="absolute inset-0 data-stack-flow" />
      <p className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center text-[2.15rem] font-semibold uppercase leading-none text-white/10 sm:text-5xl">
        Data Lifecycle
      </p>

      {stackItems.map((item) => (
        <button
          key={item.name}
          type="button"
          className="data-stack-node"
          style={{
            left: item.x,
            top: item.y,
            translate: "-50% -50%",
            "--glow": item.glow,
            "--icon-delay": `${item.delay}s`,
            "--icon-duration": `${4.8 + item.delay}s`,
          }}
          onMouseEnter={() => setActive(item.name)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(item.name)}
          onBlur={() => setActive(null)}
          aria-label={`${item.name}: ${item.note}`}
        >
          <span className="data-stack-icon-wrap">
            <img
              src={`${import.meta.env.BASE_URL}${item.logo}`}
              alt=""
              className="object-contain w-7 h-7"
              loading="lazy"
            />
          </span>
          <span className="data-stack-label">{item.label || item.name}</span>

          <AnimatePresence>
            {active === item.name && (
              <motion.span
                className={getTooltipClass(item)}
                style={{ "--glow": item.glow }}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <span className="block text-sm font-semibold text-white">
                  {item.name}
                </span>
                <span className="block mt-1 text-xs leading-5 text-white/70">
                  {item.note}
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

export default DataStackBoard;

const getTooltipClass = (item) => {
  const side =
    item.tooltipSide === "top"
      ? "bottom-full mb-3"
      : "top-full mt-3";
  const align =
    item.align === "left"
      ? "left-0"
      : item.align === "right"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  return `data-stack-tooltip ${side} ${align}`;
};
