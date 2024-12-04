import { motion } from 'framer-motion';
import rust1Img from '../../assets/aboutbg_1_-removebg-preview.png';
import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
// import ModelView from "./ModelView";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Rust = () => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null); // Create a ref for the popup

  const togglePopup = () => {
    setOpen(!open);
  };

  // Function to close the popup when clicking outside of it
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Add event listener for clicks
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: '',
    color: [ '#FFE7B9', '#6F6C64'],
  })

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

 
  


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
            src={rust1Img}
            className="w-[40%] lg:w-[55%] rounded order-1 lg:order-1 ml-40"
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
              <span className='text-xl md:text-3xl lg:text-5xl font-semibold'>
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
            <motion.p
              className='mt-5 text-xl border border-transparent hover:border-gray-800 px-2 py-1 rounded-lg cursor-pointer bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text'
              // onClick={togglePopup}
            >
              <a href='#model'>Have a Glimpse</a>
            </motion.p>
          </div>
        </div>
      </div>
      {open && (
        <div className='fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-75'>
          <div ref={popupRef} className="p-6 rounded shadow-lg w-[60%] h-[90%]">
            <div className="flex flex-col items-center mt-5">

          <div className="mx-auto w-full">
            <p id="heading1" className="section-heading texT-SM font-light text-center text-black">{model.title}</p>

          </div>
        </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rust;
