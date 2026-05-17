import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

const HeroScene = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <figure
      className="absolute inset-0 hero-scene"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 1, 3] }}
        dpr={[1, 1.35]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        performance={{ min: 0.55 }}
      >
        <Suspense fallback={<Loader />}>
          <Float speed={1.1} rotationIntensity={0.55} floatIntensity={0.7}>
            <Astronaut
              scale={isMobile ? 0.23 : 0.3}
              position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
            />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 14, 1 + state.mouse.y / 14, 3],
      0.65,
      delta
    );
  });
}

export default HeroScene;
