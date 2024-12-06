import { motion } from 'framer-motion';
import React from 'react';
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Rust = () => {
  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 }),
    gsap.to('#heading1', { y: 0, opacity: 1, fontSize:35 })
  }, []);

  return (
    <section className="w-full relative">
      <div className="h-5/6 w-[80%] mx-auto flex flex-col">
        <div className="w-full grid lg:grid-cols-2 items-center justify-start gap-4 py-20">
          <motion.img
            id="about-image"
            src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Digital_Twin/About.png"
            className="w-[40%] lg:w-[55%] rounded order-1 lg:order-1 ml-24 md:ml-40"
            alt="About Image"
            initial={{ scale: 1.5, opacity: 0, x: 150 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          <div className="flex flex-col justify-center items-start order-2 lg:order-2">
            <motion.h1
              id="about-content"
              className="text-2xl md:text-4xl leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <span className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
                What is a <span className='bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text'>Digital Twin</span>
              </span>
            </motion.h1>
            <motion.p
              id="about-content"
              className="text-lg text-gray-600 leading-relaxed mt-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Digital Twins are cutting-edge virtual replicas of physical objects, systems, or processes that enable real-time monitoring and analysis. By integrating data from sensors and IoT devices, Digital Twins provide a dynamic simulation that reflects the current state and performance of their physical counterparts. This innovative technology allows organizations to optimize operations, predict maintenance needs, and make informed decisions by visualizing complex systems. From enhancing manufacturing efficiency to personalizing healthcare solutions, Digital Twins are transforming industries by driving continuous improvement and fostering collaboration across teams.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rust;
