import React, { useRef, useEffect } from "react";
import p5 from "p5";

const NetworkComponent = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let network;

      p.setup = () => {
        p.createCanvas(640, 360).parent(sketchRef.current);
        network = new Network(p.width / 2, p.height / 2);

        // Create more neurons
        const neurons = [];
        neurons.push(Neuron(-275, 0, p, 'violet'));
        neurons.push(Neuron(-150, 0, p, 'violet'));
        neurons.push(Neuron(0, 75, p, 'green'));
        neurons.push(Neuron(0, -75, p, 'green'));
        neurons.push(Neuron(150, 0, p, 'violet'));
        neurons.push(Neuron(275, 0, p, 'violet'));

        // Add more neurons
        neurons.push(Neuron(-275, -150, p, 'violet'));
        neurons.push(Neuron(0, 150, p, 'green'));
        neurons.push(Neuron(150, 150, p, 'green'));

        // Connect neurons
        network.connect(neurons[0], neurons[1], 1);
        network.connect(neurons[1], neurons[2], p.random(1));
        network.connect(neurons[1], neurons[3], p.random(1));
        network.connect(neurons[2], neurons[4], p.random(1));
        network.connect(neurons[3], neurons[4], p.random(1));
        network.connect(neurons[4], neurons[5], 1);

        // Additional connections for new neurons
        network.connect(neurons[6], neurons[1], p.random(1)); // New connection
        network.connect(neurons[2], neurons[7], p.random(1)); // New connection
        network.connect(neurons[4], neurons[8], p.random(1)); // New connection

        // Add neurons to the network
        neurons.forEach((neuron) => network.addNeuron(neuron));
      };

      p.draw = () => {
        p.background(0);
        network.update();
        network.display();

        if (p.frameCount % 30 === 0) {
          network.feedforward(p.random(1));
        }
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

    const p5Instance = new p5(sketch);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default NetworkComponent;
