import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const stackItems = [
  {
    name: "SQL",
    logo: "assets/logos/postgresql.svg",
    x: "12%",
    y: "18%",
    align: "left",
    tooltipSide: "bottom",
    delay: 0,
    note:
      "Core language for KPI logic, reconciliation, window functions, warehouse models, and analyst-ready datasets.",
  },
  {
    name: "Python",
    logo: "assets/logos/python.svg",
    x: "34%",
    y: "61%",
    align: "center",
    tooltipSide: "top",
    delay: 0.2,
    note:
      "Used for ETL automation, API ingestion, validation scripts, forecasting workflows, and repeatable reporting jobs.",
  },
  {
    name: "dbt",
    logo: "assets/logos/dbt.svg",
    x: "51%",
    y: "22%",
    align: "center",
    tooltipSide: "bottom",
    delay: 0.4,
    note:
      "Transforms raw warehouse tables into trusted marts, semantic reporting layers, and documented business metrics.",
  },
  {
    name: "Spark",
    logo: "assets/logos/apache-spark.svg",
    x: "72%",
    y: "57%",
    align: "center",
    tooltipSide: "top",
    delay: 0.1,
    note:
      "Powers distributed processing for larger ETL jobs, lakehouse transformations, and performance-tuned batch workloads.",
  },
  {
    name: "Power BI",
    logo: "assets/logos/power-bi.svg",
    x: "16%",
    y: "71%",
    align: "left",
    tooltipSide: "top",
    delay: 0.5,
    note:
      "Turns governed datasets into executive dashboards, KPI monitoring views, and stakeholder-ready insights.",
  },
  {
    name: "Data Quality",
    logo: "assets/logos/cdc.svg",
    x: "83%",
    y: "20%",
    align: "right",
    tooltipSide: "bottom",
    delay: 0.7,
    note:
      "Represents validation, freshness checks, schema drift monitoring, metric reconciliation, and SLA confidence.",
  },
  {
    name: "Lakehouse",
    logo: "assets/logos/databricks.svg",
    x: "56%",
    y: "72%",
    align: "center",
    tooltipSide: "top",
    delay: 0.3,
    note:
      "Connects S3, Delta Lake, Spark, and curated data layers for scalable analytics and machine-learning-ready data.",
  },
];

const DataStackBoard = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full h-full overflow-hidden data-stack-board">
      <div className="absolute inset-0 opacity-40 data-stack-grid" />
      <p className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center text-[2.35rem] font-semibold uppercase leading-none text-white/10 sm:text-5xl">
        Data Is Decision Ready
      </p>

      {stackItems.map((item) => (
        <motion.button
          key={item.name}
          type="button"
          className="data-stack-node"
          style={{ left: item.x, top: item.y, translate: "-50% -50%" }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 12, -8, 0],
            y: [0, -10, 9, 0],
            rotate: [0, 2, -2, 0],
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
          whileHover={{ scale: 1.12, zIndex: 20 }}
          whileFocus={{ scale: 1.12, zIndex: 20 }}
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
              className="object-contain w-8 h-8"
              loading="lazy"
            />
          </span>
          <span className="data-stack-label">{item.name}</span>

          <AnimatePresence>
            {active === item.name && (
              <motion.span
                className={getTooltipClass(item)}
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
