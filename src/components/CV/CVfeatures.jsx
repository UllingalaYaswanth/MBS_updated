import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { explore1Img, explore2Img,} from '../../utils';
import gsap from 'gsap';
const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    });
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 });
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);
  return (
    <section className="bg-zinc-800 relative overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 ">
          <h1 id="features_title" className="text-4xl font-semibold bg-gradient-to-r from-pink-700 via-orange-500 to-orange-200 text-transparent bg-clip-text">Explore Our Vision</h1>
        </div>
             <div className="flex flex-col items-center gap-8">
               <div className="relative w-full h-[50vh] flex items-center rounded  border-transparent group hover:border-blue-700 overflow-hidden">
                 <video
                   playsInline
                   id="exploreVideo"
                   className="w-full h-full object-cover object-center"
                   preload="true"
                   muted
                   autoPlay
                   loop
                   ref={videoRef}
                 >
                   <source src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/CV_Annotations.mp4" type="video/mp4" />
                 </video>
                 <h1 className="text-xl text-white absolute top-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                   Stunning Visuals in Motion
                 </h1>
               </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Image 1 */}
               <div className="relative h-[50vh] rounded overflow-hidden group">
                    <img src={explore1Img} alt="Titanium Feature" className="w-full h-full" />
                 <h1 className="text-xl text-white absolute top-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                   Cutting-Edge Technology
                  </h1>
                </div>
               {/* Image 2 */}
               <div className="relative h-[50vh] rounded overflow-hidden group">
                 <img src={explore2Img} alt="Titanium Feature 2" className="w-full h-full object-cover" />
                 <h1 className="text-xl text-white absolute top-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                   Innovation in Every Pixel
                 </h1>
               </div>
             </div>
          {/* Text Section */}
          <div className="w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="g_text text-md  leading-relaxed">
                The primary goal of computer vision is to automate human supervision. The ability to capture and{' '}
                <span className="font-semibold">digitize real-life scenes</span> provides new opportunities to detect threats better and earlier, quantify risk, and provide real-time security assessments.
              </div>
              <div className="g_text text-md  leading-relaxed">
                Counting moving objects is one of the most popular use cases in{' '}
                <span className="font-semibold">computer vision (CV)</span>. It is used, among other things, in traffic analysis and as part of the automation of manufacturing processes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;