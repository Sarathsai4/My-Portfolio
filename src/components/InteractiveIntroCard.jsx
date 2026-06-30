import { useRef } from "react";
import { contactEmail, profile } from "../constants";

const quickDetails = [
  "Data Engineer",
  "AWS Data Engineering",
  "OLAP Data Models",
  "GenAI Analytics",
];

const InteractiveIntroCard = () => {
  const cardRef = useRef(null);
  const raf = useRef(null);

  const handlePointerMove = (event) => {
    if (!cardRef.current) return;
    if (raf.current) cancelAnimationFrame(raf.current);

    raf.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 12;
      const rotateX = ((0.5 - y / rect.height) * 10);

      cardRef.current.style.setProperty("--intro-x", `${x}px`);
      cardRef.current.style.setProperty("--intro-y", `${y}px`);
      cardRef.current.style.setProperty("--intro-rx", `${rotateX}deg`);
      cardRef.current.style.setProperty("--intro-ry", `${rotateY}deg`);
    });
  };

  const handlePointerLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--intro-rx", "0deg");
    cardRef.current.style.setProperty("--intro-ry", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className="interactive-intro-card"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <img
        src={`${import.meta.env.BASE_URL}assets/coding-pov.png`}
        className="interactive-intro-image"
        alt="Coding POV"
      />

      <div className="interactive-intro-orbit" />

      <div className="interactive-intro-content">
        <p className="text-xs uppercase tracking-[0.32em] text-aqua">
          Portfolio Identity
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          {profile.name}
        </h2>
        <p className="mt-3 subtext">
          I build governed data systems that turn operational, inventory, delivery,
          marketplace, and regulatory data into trusted reporting layers, ML-ready
          datasets, executive dashboards, and GenAI-assisted analytics workflows.
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {quickDetails.map((item) => (
            <span className="intro-detail-pill" key={item}>
              {item}
            </span>
          ))}
        </div>

        <a className="inline-flex mt-5 text-sm font-medium text-aqua" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </div>
    </article>
  );
};

export default InteractiveIntroCard;
