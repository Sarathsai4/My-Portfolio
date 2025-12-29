import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // ✅ These must match EXACT filenames in: public/assets/logos/
  const skills = [
    "aws",
    "aws-iam",
    "amazon-s3",
    "amazon-quicksight",
    "apache-airflow",
    "apache-kafka",
    "apache-spark",
    "apache-flink",
    "apache-hive",
    "databricks",
    "snowflake",
    "google-bigquery",
    "postgresql",
    "docker",
    "terraform",
    "python",
    "java",
    "scala",
    "r",
    "power-bi",
    "looker",
    "mlflow",
    "langchain",
    "hugging-face",
    "pytorch",
    "tensorflow",
    "fastapi",
    "hadoop",
    "cdc",
    "elt",
    "neptune",
    "vba",
    "scikit-learn",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
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
    className="duration-200 rounded-sm hover:scale-110"
  />
);
