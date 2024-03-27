(async () => {
    await loadPolygonPath(tsParticles);
    await loadTrailEffect(tsParticles);
  
    await tsParticles.load({
      options: {
        particles: {
          color: {
            value: "#D8D8D6",
            animation: {
              enable: true,
              speed: 10
            }
          },
          effect: {
            type: "trail",
            options: {
              trail: {
                length: 50,
                minWidth: 4
              }
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30
              }
            },
            random: false,
            speed: 3,
            straight: false
          },
          number: {
            value: 0
          },
          opacity: {
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        background: {
          color: "#000"
        },
        fullScreen: {
          zIndex: -1
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 50,
            y: 50
          }
        }
      }
    });
  })();