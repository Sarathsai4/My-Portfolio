import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const layers = [
  {
    eyebrow: "Layer 01",
    title: "Raw Signals",
    text:
      "Inventory, delivery, customer, marketplace, catalog, order, seller, and regulatory data enters as fragmented operational context.",
    tags: ["Python", "SQL", "APIs", "S3"],
    href: "#about",
    accent: "#33c2cc",
    logo: "assets/logos/python.svg",
  },
  {
    eyebrow: "Layer 02",
    title: "Trusted Models",
    text:
      "Dimensional marts, OLAP models, KPI definitions, and reconciliation checks turn that context into reporting layers people can trust.",
    tags: ["Redshift", "Snowflake", "BigQuery", "Quality"],
    href: "#/data-analyst",
    accent: "#f9d94a",
    logo: "assets/logos/power-bi.svg",
  },
  {
    eyebrow: "Layer 03",
    title: "Production Pipelines",
    text:
      "Engineer-facing work scales the same logic into AWS Glue, EMR, Spark, Kafka, Airflow, dbt, and cloud warehouse patterns.",
    tags: ["Glue", "EMR", "Spark", "Airflow"],
    href: "#/data-engineer",
    accent: "#ff7a33",
    logo: "assets/logos/apache-spark.svg",
  },
  {
    eyebrow: "Layer 04",
    title: "AI-Assisted Delivery",
    text:
      "The project books show how the layers come together in CassetteIQ, regulatory extraction, LMAQ logistics, and secure GenAI workflows.",
    tags: ["FastAPI", "RAG", "BI", "Observability"],
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
            Resume-aligned data layers
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Scroll through the portfolio like a governed analytics platform.
          </h2>
          <p className="max-w-2xl mt-5 subtext">
            A layered scroller gives viewers a fast mental model of the work:
            fragmented source data, trusted models, production pipelines, and
            AI-assisted delivery. Each layer links into the portfolio pages.
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
