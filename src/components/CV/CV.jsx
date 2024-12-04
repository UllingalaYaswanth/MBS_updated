import React, { useEffect, useRef, useState } from "react";

function CV() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          spacing: 20.0,
          scaleMobile: 1.0,
          color: 0xff750a,
          color2: 0xff750a,
          backgroundColor: 0xffffff,
          birdSize: 0.6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="h-[800px] flex items-center pl-20">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold ">
          Computer <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text"> Vision</span>
        </h1>
        <p className="mt-10 text-md mg:text-lg lg:text-xl text-neutral-500 max-w-3xl">
        At mbs, we are pioneers in computer vision technology, dedicated to transforming industries
        through innovative visual data analysis. With a focus on machine learning and artificial
        intelligence, our mission is to empower businesses by providing advanced solutions that
        enhance operational efficiency, improve decision-making, and drive innovation.
        </p>
      </div>
    </div>
  );
}

export default CV;
