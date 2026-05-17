import { useRef, useState } from "react";
import ProjectDetails from "./ProjectDetails.jsx";

const ProjectBook = ({ project, setPreview }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bookRef = useRef(null);
  const raf = useRef(null);

  const { title, desc, subdesc, href, spotlight, tags } = project;

  const handlePointerMove = (event) => {
    if (!bookRef.current) return;
    if (raf.current) cancelAnimationFrame(raf.current);

    raf.current = requestAnimationFrame(() => {
      if (!bookRef.current) return;

      const rect = bookRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      bookRef.current.style.setProperty("--book-x", `${x}px`);
      bookRef.current.style.setProperty("--book-y", `${y}px`);
      bookRef.current.style.setProperty(
        "--book-rx",
        `${(0.5 - y / rect.height) * 9}deg`
      );
      bookRef.current.style.setProperty(
        "--book-ry",
        `${((x / rect.width) - 0.5) * 14}deg`
      );
    });
  };

  const handlePointerLeave = () => {
    if (!bookRef.current) return;
    bookRef.current.style.setProperty("--book-rx", "0deg");
    bookRef.current.style.setProperty("--book-ry", "0deg");
    setPreview(null);
  };

  return (
    <>
      <article
        ref={bookRef}
        className="project-book-shell"
        onPointerEnter={() => setPreview(spotlight)}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <button
          type="button"
          className="project-book"
          onClick={() => setIsOpen(true)}
          aria-label={`Read more about ${title}`}
        >
          <span className="project-book-pages" />
          <span className="project-book-spine" />
          <span className="project-book-cover">
            <img src={spotlight} alt="" className="project-book-image" loading="lazy" />
            <span className="project-book-grade" />
            <span className="project-book-shine" />
            <span className="project-book-content">
              <span className="text-xs uppercase tracking-[0.28em] text-aqua">
                Data Project
              </span>
              <span className="block mt-3 text-2xl font-semibold leading-tight text-left text-white">
                {title}
              </span>
              <span className="block mt-3 text-sm leading-6 text-left text-white/72">
                {desc}
              </span>
              <span className="flex flex-wrap gap-2 mt-5">
                {tags?.slice(0, 4).map((tag) => (
                  <span className="project-book-tag" key={tag.id}>
                    <img src={tag.path} alt="" loading="lazy" />
                    {tag.name}
                  </span>
                ))}
              </span>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-white">
                Open project notes
                <img
                  src={`${import.meta.env.BASE_URL}assets/arrow-right.svg`}
                  className="w-4"
                  alt=""
                />
              </span>
            </span>
          </span>
        </button>
      </article>

      {isOpen && (
        <ProjectDetails
          title={title}
          description={desc}
          subDescription={subdesc}
          image={spotlight}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectBook;
