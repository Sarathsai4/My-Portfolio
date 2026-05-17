import { useState } from "react";
import ProjectBook from "../components/ProjectBook.jsx";
import { myProjects } from "../constants/index.js";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState(null);

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section onMouseMove={handleMouseMove} className="relative c-space section-spacing" id="projects">
      <h2 className="text-heading">Selected Data Projects</h2>
      <p className="max-w-3xl mt-4 subtext">
        Each project opens like a technical field book: cover for the business story,
        pages for architecture notes, and stack markers for the tools used.
      </p>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
        {myProjects.map((project) => (
          <ProjectBook
            key={project.id}
            project={project}
            setPreview={setPreview}
          />
        ))}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-40 hidden object-cover h-48 border rounded-lg shadow-2xl pointer-events-none border-white/10 w-72 lg:block"
          src={preview}
          alt="Project preview"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
