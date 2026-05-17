import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const layers = [
  {
    eyebrow: "Layer 01",
    title: "Raw Signals",
    text:
      "Operational, customer, product, and event data enters the portfolio story as messy, moving context.",
    tags: ["SQL", "Python", "APIs", "S3"],
    href: "#about",
    accent: "#33c2cc",
    logo: "assets/logos/python.svg",
  },
  {
    eyebrow: "Layer 02",
    title: "Trusted Metrics",
    text:
      "Analyst-facing work turns that context into governed KPIs, quality checks, reporting layers, and business-ready answers.",
    tags: ["Power BI", "Tableau", "Looker", "Quality"],
    href: "#/data-analyst",
    accent: "#f9d94a",
    logo: "assets/logos/power-bi.svg",
  },
  {
    eyebrow: "Layer 03",
    title: "Production Pipelines",
    text:
      "Engineer-facing work scales the same logic into Spark, Kafka, Airflow, dbt, lakehouse, and cloud infrastructure patterns.",
    tags: ["Spark", "Kafka", "Airflow", "dbt"],
    href: "#/data-engineer",
    accent: "#ff7a33",
    logo: "assets/logos/apache-spark.svg",
  },
  {
    eyebrow: "Layer 04",
    title: "Project Proof",
    text:
      "The project books show how the layers come together: ingestion, modeling, governance, monitoring, and stakeholder delivery.",
    tags: ["Lakehouse", "Forecasting", "BI", "Observability"],
    href: "#projects",
    accent: "#7a57db",
    logo: "assets/logos/databricks.svg",
  },
];

const MotionLayerScroller = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const frontY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section ref={sectionRef} className="c-space section-spacing motion-layer-section" id="motion-layers">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm uppercase tracking-[0.38em] text-aqua">
            Motion Layer Scroller
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Scroll through the portfolio like a data system.
          </h2>
          <p className="max-w-2xl mt-5 subtext">
            A layered scroller gives viewers a fast mental model of the site:
            raw signals, trusted analytics, production engineering, and project
            proof. Each layer links into the existing portfolio pages.
          </p>
        </div>

        <div className="motion-layer-stage">
          <motion.div className="motion-layer-back" style={{ y: backY, rotate }} />
          <motion.div className="motion-layer-mid" style={{ y: midY }} />
          <motion.div className="motion-layer-front" style={{ y: frontY }} />

          <div className="relative z-10 grid gap-5">
            {layers.map((layer, index) => (
              <a
                className="motion-layer-card group"
                href={layer.href}
                key={layer.title}
                style={{
                  "--layer-accent": layer.accent,
                  "--layer-index": index,
                }}
              >
                <span className="motion-layer-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="motion-layer-logo">
                  <img
                    src={`${import.meta.env.BASE_URL}${layer.logo}`}
                    alt=""
                    loading="lazy"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.28em] text-white/45">
                    {layer.eyebrow}
                  </span>
                  <span className="block mt-2 text-2xl font-semibold text-white">
                    {layer.title}
                  </span>
                  <span className="block mt-2 text-sm leading-6 text-white/68">
                    {layer.text}
                  </span>
                  <span className="flex flex-wrap gap-2 mt-4">
                    {layer.tags.map((tag) => (
                      <span className="motion-layer-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionLayerScroller;
