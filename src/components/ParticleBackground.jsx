import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  console.log("ParticleBackground component is rendering!");
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        background: "#000",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 600 } },
            color: { value: "#4caf50" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 },
            line_linked: { enable: true, distance: 150, color: "#333" },
          },
          interactivity: {
            events: { onhover: { enable: false, mode: "repulse" } },
            modes: { repulse: { distance: 250 } },
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
