import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const astronautScale = isMobile ? 0.23 : 0.3;
  const astronautPos = isMobile ? [0, -1.5, 0] : [1.2, -1, 0];

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />

      <figure className="absolute inset-0">
        <Canvas camera={{ position: [0, 1, 3.4], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut scale={astronautScale} position={astronautPos} />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3.4],
      0.5,
      delta
    );
  });
}

export default Hero;
