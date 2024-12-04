import img from '../../../assets/Picture1.png'
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import React, { useRef, useState,useEffect } from 'react';
import Sector_Card from '../Sector_Card';
import img1 from '../../../assets/img/Rectangle 45@2x.png';
import img3 from '../../../assets/img/Rectangle 45-2@2x.png';
import img4 from '../../../assets/img/Rectangle 45-3@2x.png';
import img5 from '../../../assets/img/Rectangle 45-4@2x.png';
import img6 from '../../../assets/img/Rectangle 45-5@2x.png';
import img7 from '../../../assets/img/Rectangle 45-6@2x.png';
import { DollarSign, Shield, Eye, Bell, FileText } from "lucide-react";  // Importing relevant icons

const Product4 = () => {

  const features = [
    {
      icon: <DollarSign />, // Icon for cost savings (money/financial savings)
      text: "Cost Savings",
      description: [
        "Addresses a $400K to $1.8 Million annual issue per commercial airports by preventing FOD-related damages, saving on repair costs, and avoiding operational disruptions. (As per Federal Aviation Administration (FAA), USA - Tampa Airport)"
      ]
    },
    {
      icon: <Shield />, // Icon for enhanced operational safety (protection)
      text: "Enhanced Operational Safety",
      description: [
        "Reduces risk to aircraft and ground equipment by identifying and removing hazardous debris before it causes damage."
      ]
    },
    {
      icon: <Eye />, // Icon for comprehensive FOD coverage (surveillance)
      text: "Comprehensive FOD Coverage",
      description: [
        "Offers 100% area coverage with continuous monitoring, ensuring no debris goes undetected within critical airport zones."
      ]
    },
    {
      icon: <Bell />, // Icon for real-time monitoring and alerts (notifications)
      text: "Real-Time Monitoring and Alerts",
      description: [
        "Provides instant alerts and precision tracking of debris, ensuring immediate response and minimizing operational delays."
      ]
    },
    {
      icon: <FileText />, // Icon for streamlined reporting (documentation)
      text: "Streamlined Reporting",
      description: [
        "Generates detailed digital records, enabling efficient tracking and documentation for compliance and safety assessments."
      ]
    }
  ];

  const sectors = [
    {
      title: "Automated FOD Detection and Classification",
      description: "Uses AI to automatically identify and classify debris, enhancing detection accuracy and minimizing human error.",
      imgSrc: img3, // Replace with an image relevant to FOD detection
    },
    {
      title: "Instant Alerts with Precise Location Tracking",
      description: "Sends real-time alerts with exact location details, enabling rapid response to potential hazards.",
      imgSrc: img5, // Replace with an image related to alerts or tracking
    },
    {
      title: "Visual Monitoring and Dashboards",
      description: "Provides a centralized dashboard to track FOD location, type, and clearance status for management.",
      imgSrc: img6, // Replace with an image related to dashboards or visual monitoring
    },
    {
      title: "Clearance Status Tracking",
      description: "Monitors debris from detection through to removal, ensuring safe, debris-free zones.",
      imgSrc: img7, // Replace with an image related to clearance tracking
    },
    {
      title: "Digital Event Recording",
      description: "Automatically logs all FOD incidents, supporting compliance, safety audits, and preventive analysis.",
      imgSrc: img1, // Replace with an image related to digital event recording or logs
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
          <h1 className="text-8xl font-bold mt-10 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text py-5">Intelligence FOD Tracker</h1>
          <p className='mt-10 text-3xl text-center'>AI-Powered FOD Detection: Securing Airport Operations 24/7</p>
          <p className='px-6 py-2 rounded-md border mt-16 hover:text-white hover:bg-gray-200 text-xl shadow-lg bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-white'>Learn More</p>
        </div>
        <div className='w-[80%] mx-auto py-5'>
          <img src={img} alt="bg" className="w-[80%] mx-auto rounded-lg object-cover" />
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
              Predictive AI Applications
            </span>
          </h1>
        </div>
      </div>
      <div className="pb-20 mt-10 bg-white">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scrollbar-hide cursor-grab"
      >
        <div className="flex space-x-16 w-max px-24">
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

export default Product4;