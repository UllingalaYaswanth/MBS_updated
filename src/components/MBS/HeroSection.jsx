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
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
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
    <div ref={vantaRef} className="flex flex-col h-screen justify-center items-center text-center">
      <h2 className="text-4xl sm:text-6xl lg:text-8xl tracking-wide">
        <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
          AI-powered brilliance{" "}
        </span>
      </h2>
      <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-wide mt-2 text-black">
        for industry and society
      </h1>
      <p className="mt-10 text-4xl text-neutral-500 max-w-4xl ">
       Our
        intelligent solutions bridge today's challenges with tomorrow's
        possibilities
      </p>
      <div className="flex justify-center my-20">
        <a
          href="#features"
          className="bg-orange-500 py-3 px-4 mx-3 text-2xl rounded-md text-white"
        >
          Discover More
        </a>
      </div>
    </div>
  );
};
export default HeroSection;