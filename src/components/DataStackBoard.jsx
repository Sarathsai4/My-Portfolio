import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const stackItems = [
  {
    name: "SQL",
    logo: "assets/logos/postgresql.svg",
    x: "10%",
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
    logo: "assets/logos/snowflake.svg",
    x: "34%",
    y: "15%",
    align: "center",
    tooltipSide: "bottom",
    glow: "#57dbff",
    delay: 0.25,
    note:
      "Snowflake, Redshift, and BigQuery layers for governed reporting, reusable marts, and reliable business metrics.",
  },
  {
    name: "Transformation",
    logo: "assets/logos/dbt.svg",
    x: "61%",
    y: "17%",
    align: "center",
    tooltipSide: "bottom",
    glow: "#ff694b",
    delay: 0.5,
    note:
      "dbt-style modeling that turns raw tables into trusted fact, dimension, KPI, and semantic reporting layers.",
  },
  {
    name: "Data Quality",
    logo: "assets/logos/cdc.svg",
    x: "86%",
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
    x: "19%",
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
    x: "72%",
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
    logo: "assets/logos/amazon-s3.svg",
    x: "91%",
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
    logo: "assets/logos/apache-airflow.svg",
    x: "12%",
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
    x: "34%",
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
    x: "56%",
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
    logo: "assets/logos/power-bi.svg",
    x: "77%",
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
        <motion.button
          key={item.name}
          type="button"
          className="data-stack-node"
          style={{
            left: item.x,
            top: item.y,
            translate: "-50% -50%",
            "--glow": item.glow,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 8, -7, 0],
            y: [0, -7, 8, 0],
            rotate: [0, 1.4, -1.6, 0],
          }}
          transition={{
            opacity: { duration: 0.35, delay: item.delay },
            scale: { duration: 0.35, delay: item.delay },
            x: {
              duration: 7 + item.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: item.delay,
            },
            y: {
              duration: 6 + item.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: item.delay,
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: item.delay,
            },
          }}
          whileHover={{ scale: 1.1, zIndex: 30 }}
          whileFocus={{ scale: 1.1, zIndex: 30 }}
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
          <span className="data-stack-label">{item.name}</span>

          <AnimatePresence>
            {active === item.name && (
              <motion.span
                className={getTooltipClass(item)}
                style={{ "--glow": item.glow }}
                initial={{ opacity: 0, y: 10, scale: 0.92, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 8, scale: 0.94, filter: "blur(8px)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
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
        </motion.button>
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
