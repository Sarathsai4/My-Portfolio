import { lazy, Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";

const HeroScene = lazy(() => import("./HeroScene"));

const Hero = () => {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const loadScene = () => setShowScene(true);
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(loadScene, { timeout: 1400 })
        : window.setTimeout(loadScene, 900);

    return () => {
      if ("cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      {showScene && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;
