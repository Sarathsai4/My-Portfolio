import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import RolePathways from "./sections/RolePathways";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import DataAnalyst from "./pages/DataAnalyst";
import DataEngineer from "./pages/DataEngineer";

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
    if (page === "data-analyst") return <DataAnalyst />;
    if (page === "data-engineer") return <DataEngineer />;

    return (
      <>
        <Hero />
        <About />
        <RolePathways />
        <Projects />
        <Experiences />
        <Contact />
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
