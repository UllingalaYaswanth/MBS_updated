import Footer from "../../Footer";
import Navbar from "../../Navbar";
import React, { useRef, useState,useEffect } from 'react';
import Sector_Card from '../Sector_Card';
import nf from "../sprayer_drone500.webp"

import { Monitor, Database, Crop, Truck, TrendingUp } from "lucide-react";  // Importing relevant icons

const Product3 = () => {

  const features = [
    {
      icon: <Monitor />, // Icon for 24/7 monitoring (constant surveillance)
      text: "24/7 Monitoring",
      description: [
        "Enables constant drone-based monitoring of crops with advanced sensors, ensuring optimal crop health and timely interventions."
      ]
    },
    {
      icon: <Database />, // Icon for data-driven decision support (data-driven)
      text: "Data-Driven Decision Support",
      description: [
        "Real-time agronomic insights and continuous analysis empower stakeholders to make informed, proactive decisions."
      ]
    },
    {
      icon: <Crop />, // Icon for enhanced efficiency and precision (precision agriculture)
      text: "Enhanced Efficiency and Precision",
      description: [
        "Precision spraying and seeding technology maximize resource use and improve yield, contributing to sustainable farming practices."
      ]
    },
    {
      icon: <Truck />, // Icon for integrated, transparent supply chain (supply chain management)
      text: "Integrated, Transparent Supply Chain",
      description: [
        "Blockchain-secured data exchange allows seamless information sharing, ensuring transparency and quality assurance from field to consumer."
      ]
    },
    {
      icon: <TrendingUp />, // Icon for increased yield potential (growth and improvement)
      text: "Increased Yield Potential",
      description: [
        "Advanced AI and machine learning enable up to 60% yield improvement, enhancing productivity across farming operations."
      ]
    }
  ];
  const sectors = [
    {
      title: "Growers",
      description: "Neural Farms provides powerful tools and insights specifically designed for growers to optimize every stage of crop production.",
      imgSrc: nf, // Replace with an image relevant to growers or crop production
    },
    {
      title: "Supply Chain Management",
      description: "Neural Farms is designed to support the entire agricultural supply chain, from warehousing to distribution.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/neural_farms/green+house.webp", // Replace with an image related to supply chain management
    },
    {
      title: "Retail and Consumer",
      description: "Neural Farms bridges the gap between growers and end consumers by offering tools for traceability and quality assurance.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/neural_farms/reatil_consumer.jpeg", // Replace with an image related to retail and consumer
    }
  ];
  

  // Ref for the container element to track mouse position and scrolling
  const containerRef = useRef(null);

  // State for tracking dragging
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle the start of dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft); // Get the initial mouse position
    setScrollLeft(containerRef.current.scrollLeft); // Get the initial scroll position
  };

  // Handle the mouse movement while dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Only move if dragging is active
    const x = e.pageX - containerRef.current.offsetLeft;
    const scroll = scrollLeft - (x - startX); // Calculate how far to scroll
    containerRef.current.scrollLeft = scroll; // Set the scroll position
  };

  // Handle the end of dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach event listeners
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp); // Also stop dragging if mouse leaves the container

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  
  return (
    <div className="relative border-neutral-800 min-h-[600px] bg-white text-black">
      <Navbar />
      <div className='bg-white'>
        <div className="h-[700px] flex flex-col justify-center items-center text-black">
          <h1 className="text-8xl font-bold mt-10 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">Neural Farms Platform</h1>
          <p className='mt-10 text-3xl text-center'>Revolutionizing Sustainable Farming with Advanced Drone and AI Capabilities</p>
          <p className='px-6 py-2 rounded-md border mt-16 hover:text-white hover:bg-gray-200 text-xl shadow-lg bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-white'>Learn More</p>
        </div>
        <div className='w-[80%] mx-auto py-5'>
          <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/neural_farms/Neural_Farms.jpg" alt="bg" className="w-[80%] mx-auto rounded-lg object-cover" />
        </div>
      </div>

      <div className="relative mt-20 border-neutral-800 py-10 max-w-7xl mx-auto">
      <div className="text-center">
        <span className="text-5xl bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
          Key Feature
        </span>

      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-10 lg:mt-20 pb-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full">
            <div className="flex">
              <div className="flex mx-6 h-14 w-14 px-4 bg-orange-500 text-white text-xl justify-center items-center rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-2xl font-semibold text-gray-700">{feature.text}</h5>
                <p className='text-gray-700'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

      <div className="text-center ">
        <div className='py-5 mt-10'>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
            <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
            Crop Management
            Applications
            </span>
          </h1>
        </div>
      </div>
      <div className="pb-20 mt-10 bg-white ">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scrollbar-hide cursor-grab"
      >
        <div className="flex space-x-16 w-max px-20">
          {sectors.map((sector, index) => (
            <Sector_Card
              key={index}
              title={sector.title}
              subtitle={sector.subtitle}
              description={sector.description}
              imageSrc={sector.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Product3;