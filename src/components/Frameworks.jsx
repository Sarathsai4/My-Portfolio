import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "python",
    "postgresql",
    "aws",
    "amazon-s3",
    "snowflake",
    "google-bigquery",
    "apache-spark",
    "apache-kafka",
    "apache-airflow",
    "databricks",
    "power-bi",
    "tableau",
    "looker",
    "docker",
    "kubernetes",
    "github-actions",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon
            key={skill}
            src={`${import.meta.env.BASE_URL}assets/logos/${skill}.svg`}
          />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
          <Icon
            key={`inner-${skill}`}
            src={`${import.meta.env.BASE_URL}assets/logos/${skill}.svg`}
          />
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
    onError={() => console.log("Missing logo:", src)}
  />
);
