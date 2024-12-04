// import { stylesWithCssVar } from "../utils/motion";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import logo from "../assets/brainwave.png"

// export const StreamlinedExperience = () => {
//   const targetRef = useRef(null);  
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end end"],
//   });

//   const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
//   const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
//   const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

//   const opacityBorder = useTransform(
//     scrollYProgress,
//     [0.7, 0.71, 0.72],
//     [0 , 0, 0]
//   );
//   const finalTextOpacity = useTransform(
//     scrollYProgress,
//     [0.1, 0.71, 0.72, 0.8, 1.9],
//     [0, 0, 1, 1, 0]
//   );

//   const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

//   return (
//     <motion.section
//       style={stylesWithCssVar({
//         opacity: opacitySection,
//         "--scale": scale,
//         "--opacity-border": opacityBorder,
//       })}
//       ref={targetRef}  // Correct usage of ref
//       className="mt-[50vh] flex h-[220vh] items-start justify-start"
//     >
//       <div className="fixed top-1/2 left-1/2 min-h-[30rem] min-w-[30rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#CEF144] before:opacity-[var(--opacity-border)]">
//         <motion.p
//           aria-hidden
//           style={{ x: textX, y: "-50%" }}
//           className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+15rem)] text-[10rem] text-heading"
//         >
//           AI-Driven Solutions for Industries 
//         </motion.p>
//         <motion.p
//           aria-hidden
//           style={{ x: textX, y: "-50%" }}
//           className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
//         >
          
//         </motion.p>
//         <motion.p
//           style={{
//             opacity: finalTextOpacity,
//             scale: finalTextScale,
//             y: "-50%",
//             x: "-50%",
//           }}
//           className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
//         >
//           <img src={logo}></img>
//         </motion.p>
//         <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
//         <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#CEF144] opacity-[var(--opacity-border)]" />
//       </div>
//     </motion.section>
//   );
// };

import React, { useRef, useEffect } from "react";
import p5 from "p5";

const StreamlinedExperience = () => {
  const sketchRef = useRef();
  const p5InstanceRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let network;

      p.setup = () => {
        p.createCanvas(640, 360).parent(sketchRef.current);
        network = new Network(p.width / 2, p.height / 2);

        const a = Neuron(-275, 0, p, 'violet');
        const b = Neuron(-150, 0, p, 'violet');
        const c = Neuron(0, 75, p, 'green');
        const d = Neuron(0, -75, p, 'green');
        const e = Neuron(150, 0, p, 'violet');
        const f = Neuron(275, 0, p, 'violet');

        network.connect(a, b, 1);
        network.connect(b, c, p.random(1));
        network.connect(b, d, p.random(1));
        network.connect(c, e, p.random(1));
        network.connect(d, e, p.random(1));
        network.connect(e, f, 1);

        network.addNeuron(a);
        network.addNeuron(b);
        network.addNeuron(c);
        network.addNeuron(d);
        network.addNeuron(e);
        network.addNeuron(f);
      };

      p.draw = () => {
        p.background(0);
        network.update(p);
        network.display(p);
      };

      const handleScroll = () => {
        const scrollInput = mapScrollToInput(window.scrollY);
        network.feedforward(scrollInput);
      };

      const mapScrollToInput = (scrollY) => {
        // Adjust the mapping according to your requirements
        return p.map(scrollY, 0, document.body.scrollHeight, 0, 1);
      };

      p5InstanceRef.current = p;

      // Set up the scroll event listener
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };

      function Neuron(x, y, p, color) {
        let position = p.createVector(x, y);
        let connections = [];
        let sum = 0;
        let r = 32;

        const addConnection = (c) => {
          connections.push(c);
        };

        const feedforward = (input) => {
          sum += input;
          if (sum > 1) {
            fire();
            sum = 0;
          }
        };

        const fire = () => {
          r = 64;
          connections.forEach((conn) => conn.feedforward(sum));
        };

        const display = () => {
          p.stroke(0);
          p.strokeWeight(1);
          const b = p.map(sum, 0, 1, 255, 0);
          p.fill(color === 'violet' ? 'violet' : 'green');
          p.ellipse(position.x, position.y, r, r);
          r = p.lerp(r, 32, 0.1);
        };

        return { addConnection, feedforward, display, position };
      }

      function Connection(from, to, weight) {
        let sending = false;
        let sender = null;
        let output = 0;

        const feedforward = (val) => {
          output = val * weight;
          sender = from.position.copy();
          sending = true;
        };

        const update = () => {
          if (sending) {
            sender.x = p.lerp(sender.x, to.position.x, 0.1);
            sender.y = p.lerp(sender.y, to.position.y, 0.1);
            const d = p5.Vector.dist(sender, to.position);
            if (d < 1) {
              to.feedforward(output);
              sending = false;
            }
          }
        };

        const display = () => {
          p.stroke(255);
          p.strokeWeight(weight * 4);
          p.line(from.position.x, from.position.y, to.position.x, to.position.y);

          if (sending) {
            p.fill(0);
            p.strokeWeight(1);
            p.ellipse(sender.x, sender.y, 16, 16);
          }
        };

        return { feedforward, update, display };
      }

      function Network(x, y) {
        const neurons = [];
        const connections = [];
        const position = p.createVector(x, y);

        const addNeuron = (n) => {
          neurons.push(n);
        };

        const connect = (a, b, weight) => {
          const c = Connection(a, b, weight);
          a.addConnection(c);
          connections.push(c);
        };

        const feedforward = (input) => {
          const start = neurons[0];
          start.feedforward(input);
        };

        const update = () => {
          connections.forEach((conn) => conn.update());
        };

        const display = () => {
          p.push();
          p.translate(position.x, position.y);
          neurons.forEach((n) => n.display());
          connections.forEach((c) => c.display());
          p.pop();
        };

        return { addNeuron, connect, feedforward, update, display };
      }
    };

    p5InstanceRef.current = new p5(sketch);
    return () => {
      p5InstanceRef.current.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default StreamlinedExperience;
