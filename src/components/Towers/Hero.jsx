import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {


  useGSAP(() => {
    const tl = gsap.timeline();

    // Image animation: Zoom in, zoom out, and move right
    tl.fromTo(
      '#about-image',
      { scale: 1.5, opacity: 0, x: 0 }, // Initial state (zoomed in)
      { scale: 1, opacity: 1, x: 150, duration: 2, ease: 'power2.out' , borderRadius:10} // Final state (zoomed out and moved to the right)
    )

    // Text animation: Display after the image moves
    .fromTo(
      '#about-content',
      { x: -100, opacity: 0 }, // Initial state (off-screen to the left)
      { x: 0, opacity: 1,  ease: 'power2.out' }, // Final state (slide in from left)
      '-=1.5' // Start 1.5 seconds before the previous animation ends (for overlap)
    );

    // General hero title fade-in and size animation
    gsap.to('#hero', { opacity: 1, delay: 0.5,duration: 1.5, fontSize: 200, marginBottom: 5 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
  
<section className="w-full nav-height relative bg-black">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Herobg.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
</section>

  );
};

export default Hero;
