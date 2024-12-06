import React, { useEffect, useRef, useState } from "react";
const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 0.5,
          spacing:20.00,
          scaleMobile: 1.0,
          color: 0xff5100,
          birdSize: 0.90,
          backgroundColor:0xffffff ,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <div className="flex flex-col h-screen justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl lg:text-8xl tracking-wide">
        <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
          AI-powered brilliance{" "}
        </span>
      </h2>
      <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-wide mt-2 text-black">
        for industry and society
      </h1>
      <p className="mt-10 text-xl md:text-2xl lg:text-4xl text-neutral-500 max-w-4xl px-2 ">
       Our
        intelligent solutions bridge today's challenges with tomorrow's
        possibilities
      </p>
      <div className="flex justify-center my-20">
        <a
          href="#features"
          className="bg-orange-500 py-3 px-4 mx-3 sm:text-lg md:text-xl lg:text-2xl rounded-md text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600"
        >
          Discover More
        </a>
      </div>
      </div>
    </div>
  );
};
export default HeroSection;