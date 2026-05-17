import React, { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";

const About = lazy(() => import("./sections/About"));
const RolePathways = lazy(() => import("./sections/RolePathways"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));
const DataAnalyst = lazy(() => import("./pages/DataAnalyst"));
const DataEngineer = lazy(() => import("./pages/DataEngineer"));

const LazySection = ({ children }) => (
  <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
    {children}
  </Suspense>
);

const getPage = () => {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#/", "");
  if (hash === "data-analyst" || hash === "data-engineer") return hash;
  return "home";
};

const App = () => {
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  React.useEffect(() => {
    if (page !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = window.location.hash.replace("#", "");
    if (!targetId || targetId.startsWith("/")) return;
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [page]);

  const renderPage = () => {
    if (page === "data-analyst") {
      return (
        <LazySection>
          <DataAnalyst />
        </LazySection>
      );
    }
    if (page === "data-engineer") {
      return (
        <LazySection>
          <DataEngineer />
        </LazySection>
      );
    }

    return (
      <>
        <Hero />
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <RolePathways />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Experiences />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </>
    );
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
