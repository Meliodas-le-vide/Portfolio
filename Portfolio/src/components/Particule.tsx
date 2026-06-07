import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const Particule = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-20">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: false,
          },

          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 60,

          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
              },
            },

            color: {
              value: ["#ff6b35", "#ffffff"],
            },

            links: {
              enable: true,
              distance: 120,
              color: "#ff6b35",
              opacity: 0.2,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },

              onClick: {
                enable: true,
                mode: "push",
              },
            },

            modes: {
              repulse: {
                distance: 100,
              },

              push: {
                quantity: 4,
              },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particule;