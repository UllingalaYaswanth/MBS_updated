import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
                   mouseControls: true,
                   touchControls: true,
                   gyroControls: false,
                   minHeight: 200.0,
                    minWidth: 200.0,
                  scale: 1.0,
                    scaleMobile: 1.0,
                   color: 0xea250c, // Matching your desired color
                   backgroundColor: 0xffffff, // Black background
                   birdSize: 1,
                   wingSpan: 20,
                   separation: 150,
                   alignment: 50,
                  cohesion: 40,
                    quantity: 4,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Section
      className="pt-[20rem] -mt-[5.25rem]" // Adjusted top padding for heading
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Vanta birds background container */}
      <div ref={vantaRef} className="absolute inset-0 z-0"></div>

      <div className="container relative z-10" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[10rem]">
        <h1 className="h1 mb-6">
  
          <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent text-bold bg-clip-text text-7xl">
          Transforming Language
          </span>
          <span className="text-bold"> Intelligence &nbsp;</span>
    
          </h1>
          <p className="max-w-3xl text-xl mx-auto mb-6 text-n-2 lg:mb-8 mt-10 text-gray-900">
            Unleash the power of AI with Adhya.
          </p>
        </div>
        <div className="relative w-full h-full max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"> {/* Full width container */}
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Welcome_page.png" // Using the user_page1 image
                  className="w-full h-full object-cover" // Full width and height, cover the background
                  width={1024}
                  height={490}
                  alt="AI"
                />
                </div>
            </div>
            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
