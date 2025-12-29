import { useState } from "react";
import Project from "../components/Project.jsx";
import { myProjects } from "../constants/index.js";
import { motion, useMotionValue, useSpring } from "motion/react";

// ✅ Add this import
import ShowcaseCard from "../components/Showcase-Card-hbtb.js";

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
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* ✅ Framer component embedded here */}
      <div className="mt-10 mb-10">
        <ShowcaseCard />
      </div>

      {myProjects.map((project) => (
        <Project key={project.id} project={project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          alt="Project preview"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
