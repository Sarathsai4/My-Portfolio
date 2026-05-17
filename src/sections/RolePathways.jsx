import { contactEmail, roleCards } from "../constants";
import { useEffect, useRef } from "react";

const roleMetrics = {
  "Data Analyst": ["KPI governance", "Customer analytics", "BI storytelling"],
  "Data Engineer": ["Cloud pipelines", "Lakehouse layers", "Data observability"],
};

const RolePathways = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="c-space section-spacing" id="roles">
      <div className="relative overflow-hidden cinematic-role-frame">
        <video
          ref={videoRef}
          className="cinematic-role-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}assets/sky.jpg`}
          aria-hidden="true"
        >
          <source
            src={`${import.meta.env.BASE_URL}assets/videos/arctic-role-focus.mp4`}
            type="video/mp4"
          />
        </video>

        <div className="cinematic-role-grade" />
        <div className="cinematic-role-lines" />
        <div className="cinematic-role-vignette" />

        <div className="relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.42em] text-aqua">
              Role focus
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              One portfolio, two data stories
            </h2>
            <p className="max-w-3xl mt-5 text-base leading-8 text-white/72 md:text-lg">
              Analyst-ready insight on one side, production-grade data systems on
              the other. The same foundation carries KPI trust, governed metrics,
              cloud pipelines, lakehouse patterns, and observability.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a className="cinematic-profile-link" href="#/data-analyst">
              Data Analyst Profile
            </a>
            <a className="cinematic-profile-link" href="#/data-engineer">
              Data Engineer Profile
            </a>
            <a className="cinematic-profile-link" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2">
            {roleCards.map((role) => (
              <a
                key={role.title}
                href={role.href}
                className="cinematic-role-card group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold">{role.title}</p>
                    <p className="mt-3 text-sm font-medium text-aqua">
                      {role.level}
                    </p>
                  </div>
                  <span className="cinematic-role-arrow">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/arrow-up.svg`}
                      className="w-5 h-5"
                      alt=""
                    />
                  </span>
                </div>

                <p className="mt-6 text-base leading-7 text-white/72">
                  {role.desc}
                </p>

                <div className="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-3">
                  {roleMetrics[role.title].map((metric) => (
                    <span className="cinematic-role-metric" key={metric}>
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {role.tags.map((tag) => (
                    <span className="cinematic-skill-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolePathways;
