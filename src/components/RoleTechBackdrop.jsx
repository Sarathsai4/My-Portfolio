import { useEffect, useRef } from "react";

const analystTokens = [
  { name: "Power BI", logo: "assets/logos/power-bi.svg", x: "8%", y: "14%", glow: "#f9d94a", delay: "0s" },
  { name: "SQL", logo: "assets/logos/postgresql.svg", x: "72%", y: "12%", glow: "#33c2cc", delay: "0.6s" },
  { name: "Tableau", logo: "assets/logos/tableau.svg", x: "18%", y: "42%", glow: "#57db96", delay: "1.1s" },
  { name: "Looker", logo: "assets/logos/looker.svg", x: "82%", y: "45%", glow: "#7a57db", delay: "1.6s" },
  { name: "KPI Logic", logo: "assets/logos/cdc.svg", x: "40%", y: "72%", glow: "#d6995c", delay: "2.1s" },
  { name: "BigQuery", logo: "assets/logos/google-bigquery.svg", x: "69%", y: "80%", glow: "#33c2cc", delay: "2.7s" },
];

const engineerTokens = [
  { name: "Spark", logo: "assets/logos/apache-spark.svg", x: "8%", y: "16%", glow: "#ff7a33", delay: "0s" },
  { name: "Kafka", logo: "assets/logos/apache-kafka.svg", x: "75%", y: "13%", glow: "#f3f4f6", delay: "0.5s" },
  { name: "Airflow", logo: "assets/logos/apache-airflow.svg", x: "18%", y: "45%", glow: "#33c2cc", delay: "1.1s" },
  { name: "dbt", logo: "assets/logos/dbt.svg", x: "84%", y: "45%", glow: "#ff694b", delay: "1.7s" },
  { name: "Lakehouse", logo: "assets/logos/databricks.svg", x: "38%", y: "75%", glow: "#ff3434", delay: "2.2s" },
  { name: "AWS", logo: "assets/logos/aws.svg", x: "70%", y: "80%", glow: "#f4a742", delay: "2.8s" },
];

const RoleTechBackdrop = ({ variant = "analyst" }) => {
  const rootRef = useRef(null);
  const raf = useRef(null);
  const tokens = variant === "engineer" ? engineerTokens : analystTokens;

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!rootRef.current) return;
      if (raf.current) cancelAnimationFrame(raf.current);

      raf.current = requestAnimationFrame(() => {
        if (!rootRef.current) return;

        const rect = rootRef.current.getBoundingClientRect();
        rootRef.current.style.setProperty(
          "--cursor-x",
          `${event.clientX - rect.left}px`
        );
        rootRef.current.style.setProperty(
          "--cursor-y",
          `${event.clientY - rect.top}px`
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`role-tech-backdrop role-tech-${variant}`}
      aria-hidden="true"
    >
      <div className="role-tech-aurora" />
      <div className="role-tech-grid" />
      <div className="role-tech-streams">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="role-tech-cursor" />

      {tokens.map((token) => (
        <span
          className="role-tech-token"
          key={token.name}
          style={{
            left: token.x,
            top: token.y,
            "--glow": token.glow,
            "--delay": token.delay,
          }}
        >
          <span className="role-tech-token-icon">
            <img
              src={`${import.meta.env.BASE_URL}${token.logo}`}
              alt=""
              loading="lazy"
            />
          </span>
          <span>{token.name}</span>
        </span>
      ))}
    </div>
  );
};

export default RoleTechBackdrop;
