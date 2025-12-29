import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "aws",
    "amazon-s3",
    "apache-airflow",
    "apache-kafka",
    "apache-spark",
    "databricks",
    "snowflake",
    "google-bigquery",
    "postgresql",
    "docker",
    "terraform",
    "python",
    "power-bi",
    "mlflow",
    "langchain",
    "hugging-face",
    "pytorch",
    "tensorflow",
    "fastapi",
    "hadoop",
    "scikit-learn",
    "scala",
    "java",
    "r",
  ];

  const outer = skills.slice(0, 12);
  const inner = skills.slice(12, 24);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} radius={140}>
        {outer.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={26} radius={95} reverse speed={2}>
        {inner.map((skill) => (
          <Icon key={`inner-${skill}`} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt=""
    className="w-full h-full object-contain duration-200 rounded-sm hover:scale-110"
  />
);
