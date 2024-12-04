// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import aboutimg from '../../assets/mbs_about.jpg';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '#about-image',
//         start: 'top 70%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     tl.fromTo(
//       '#about-image',
//       { scale: 1.5, opacity: 0, x: 0 },
//       { scale: 1, opacity: 1, x: window.innerWidth < 768 ? 0 : 150, duration: 2, ease: 'power2.out' }
//     )
//       .fromTo(
//         '#about-content',
//         { x: -100, opacity: 0 },
//         { x: 0, opacity: 1, ease: 'power2.out' },
//         '-=1.5'
//       );
//   }, []);

//   return (
//     <section className="w-full relative">
//       <div className="h-5/6 w-full mx-auto flex flex-col py-10">
//         <div className="md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2 items-center md:items-center gap-4 space-y-10 md:space-y-0">
//           <div className="flex flex-col justify-center order-1 md:order-0">
//             <h1
//               id="about-content"
//               className="text-2xl md:text-6xl leading-relaxed font-bold"
//             >
//               About <span className='bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text'> Us</span>
//             </h1>
//             <p
//               id="about-content"
//               className="text-md md:text-2xl text-gray-500 leading-relaxed mt-4 md:mt-7"
//             >
//               At Mbstech, we are at the forefront of technological innovation, specializing in the intricate realms of 3D reconstruction, document intelligence pipeline technology, computer vision, and predictive maintenance. Our expertise lies in the synthesis of detailed 3D models and the optimization of complex data workflows, enabling organizations to visualize and interpret multifaceted information with precision. Through the application of advanced computer vision techniques, we facilitate enhanced decision-making processes that are informed by real-time visual analytics.
//             </p>
//           </div>
//           <img
//             id="about-image"
//             src={aboutimg}
//             className="md:w-[90%] rounded order-0 lg:order-1"
//             alt="About Image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import { FaRegLightbulb } from 'react-icons/fa'; // For an icon, optional
// import aboutimg from '../../assets/mbs_about.jpg';

// const AboutPage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-8">
//       <div className="max-w-7xl mx-auto ">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
 

//         <div className="mb-12 flex items-center gap-3">
//         <p className="text-2xl text-gray-700 mb-8">
//           We deliver cutting-edge AI technology solutions that transform industries and enhance public sector capabilities. Through innovative tools, we empower better decision-making, optimize resources, and boost operational efficiency while ensuring sustainability and scalability.
//         </p>
//           <img
//             src={aboutimg} // Replace with the actual path of your image
//             alt="Innovative AI technology"
//             className="w-full rounded-lg shadow-lg object-cover"
//           />
//         </div>
//         <div className="space-y-8">
//           <h2 className="text-3xl font-semibold text-gray-900">Our Vision</h2>
//           <p className="text-lg text-gray-700">
//             To pioneer innovative, ethical solutions that drive sustainable growth, societal impact, and cross-sectoral advancements in global markets.
//           </p>

//           <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
//           <p className="text-lg text-gray-700">
//             To set the standard in AI-driven technology by providing solutions that prioritize safety, operational excellence, and regulatory compliance across sectors critical to public welfare and infrastructure integrity.
//           </p>

//           <h2 className="text-3xl font-semibold text-gray-900">What We Do</h2>
//           <p className="text-lg text-gray-700">
//             We specialize in transforming infrastructure management through real-time monitoring, drone inspections, and advanced computer vision technology. Our expertise lies in using AI-powered predictive analytics to ensure that critical public assets—such as bridges, telecommunications towers, power grids, and pipelines—are continuously monitored, inspected, and maintained.
//           </p>
//           <p className="text-lg text-gray-700">
//             By providing state-of-the-art tools for proactive asset management, we help safeguard infrastructure, optimize maintenance processes, and support long-term resilience across sectors.
//           </p>

//           {/* Key Features Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
//             <div className="p-6 bg-white shadow-lg rounded-lg text-center">
//               <FaRegLightbulb className="text-4xl text-indigo-600 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">Innovative Technology</h3>
//               <p className="text-gray-700 mt-2">
//                 Cutting-edge tools that drive smarter decision-making and operational excellence.
//               </p>
//             </div>
//             <div className="p-6 bg-white shadow-lg rounded-lg text-center">
//               <FaRegLightbulb className="text-4xl text-indigo-600 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">Sustainability</h3>
//               <p className="text-gray-700 mt-2">
//                 We prioritize sustainable growth by developing scalable, eco-friendly solutions.
//               </p>
//             </div>
//             <div className="p-6 bg-white shadow-lg rounded-lg text-center">
//               <FaRegLightbulb className="text-4xl text-indigo-600 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">AI-Driven Insights</h3>
//               <p className="text-gray-700 mt-2">
//                 Using AI to deliver precision-driven insights that optimize infrastructure management.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import aboutimg from '../../assets/mbs_about.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <div className='text-black bg-white'>
      <Navbar/>
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">About Us</h1>

        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left md:w-2/3">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We deliver cutting-edge AI technology solutions that transform industries and enhance public sector capabilities. Through innovative tools, we empower better decision-making, optimize resources, and boost operational efficiency while ensuring sustainability and scalability.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={aboutimg} // Replace with the actual path of your image
              alt="Innovative AI technology"
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mb-4 inline-block self-start">Our Vision</h1>
            
            <p className="text-xl text-gray-700">
              To pioneer innovative, ethical solutions that drive sustainable growth, societal impact, and cross-sectoral advancements in global markets.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mb-4 inline-block self-start">Our Mission</h2>
            <p className="text-xl text-gray-700">
              To set the standard in AI-driven technology by providing solutions that prioritize safety, operational excellence, and regulatory compliance across sectors critical to public welfare and infrastructure integrity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mb-4 inline-block self-start">What We Do</h2>
            <p className="text-xl text-gray-700">
              We specialize in transforming infrastructure management through real-time monitoring, drone inspections, and advanced computer vision technology. Our expertise lies in using AI-powered predictive analytics to ensure that critical public assets—such as bridges, telecommunications towers, power grids, and pipelines—are continuously monitored, inspected, and maintained.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              By providing state-of-the-art tools for proactive asset management, we help safeguard infrastructure, optimize maintenance processes, and support long-term resilience across sectors.
            </p>
          </section>
        </div>

        {/* Key Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaRegLightbulb className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900">Innovative Technology</h3>
            <p className="text-gray-700 mt-4">
              Cutting-edge tools that drive smarter decision-making and operational excellence.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaRegLightbulb className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900">Sustainability</h3>
            <p className="text-gray-700 mt-4">
              We prioritize sustainable growth by developing scalable, eco-friendly solutions.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaRegLightbulb className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900">AI-Driven Insights</h3>
            <p className="text-gray-700 mt-4">
              Using AI to deliver precision-driven insights that optimize infrastructure management.
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutPage;
