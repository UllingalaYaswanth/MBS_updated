import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { explore1Img, explore2Img, explore3Img, explore4Img ,explore5Img} from '../../utils';
import gsap from 'gsap';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Products = () => {
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
    <section className="bg-zinc-800 relative overflow-hidden py-16 w-full">
      <div className="px-6">
        <div className="text-center mb-12 ">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-wide">
                    <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text font-semibold">
                        Our Solutions
                    </span>
                </h1>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product 1 */}
            <Link target="blank" to="/product1" className="relative h-[50vh] rounded overflow-hidden group hover:scale-105 duration-500">
              <img src={explore1Img} alt="Titanium Feature" className="w-full h-full" />
              <h1 className="text-xl text-white absolute bottom-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              Smart City Planning Platform
              </h1>
         
            </Link>

            {/* Product 2 */}
            <Link target="blank" to="/product2" className="relative h-[50vh] rounded overflow-hidden group hover:scale-105 duration-500">
              <img src={explore2Img} alt="Titanium Feature 2" className="w-full h-full object-cover" />
              <h1 className="text-xl text-white absolute bottom-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              Telecom Tower Reconstruction
              </h1>
            </Link>

            {/* Additional Products */}
            <Link target="blank" to="/product3" className="relative h-[50vh] rounded overflow-hidden group hover:scale-105 duration-500">
              <img src={explore3Img} alt="Titanium Feature 2" className="w-full h-full object-cover" />
              <h1 className="text-xl text-white absolute bottom-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              Neural Farms Platform
              </h1>
            </Link>
            <Link target="blank" to="/product4" className="relative h-[50vh] rounded overflow-hidden group hover:scale-105 duration-500">
              <img src={explore4Img} alt="Titanium Feature 2" className="w-full h-full object-cover" />
              <h1 className="text-xl text-white absolute bottom-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              Intelligence FOD Tracker
              </h1>
            </Link>
            <Link target="blank" to="/product5" className="relative h-[50vh] rounded overflow-hidden group hover:scale-105 duration-500 border-2">
              <img src={explore5Img} alt="Titanium Feature 2" className="w-full h-full object-cover" />
              <h1 className="text-xl text-white absolute bottom-5 left-10 bg-black bg-opacity-50 p-4 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              AADHYA - AI-powered Organizational GPT
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
