import { roleCards } from "../constants";

const RolePathways = () => {
  return (
    <section className="c-space section-spacing" id="roles">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-aqua">Role focus</p>
        <h2 className="mt-4 text-heading">One portfolio, two data stories</h2>
        <p className="mt-4 subtext">
          The analyst side emphasizes stakeholder-ready insights and governed metrics.
          The engineering side goes deeper into scalable pipelines, orchestration, lakehouse patterns, and observability.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2">
        {roleCards.map((role) => (
          <a
            key={role.title}
            href={role.href}
            className="p-6 border role-card border-white/10 bg-gradient-to-b from-storm to-indigo hover-animation"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold">{role.title}</p>
                <p className="mt-2 text-sm text-aqua">{role.level}</p>
              </div>
              <img src="/assets/arrow-up.svg" className="w-5 h-5" alt="" />
            </div>
            <p className="mt-5 subtext">{role.desc}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {role.tags.map((tag) => (
                <span className="skill-pill" key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RolePathways;
