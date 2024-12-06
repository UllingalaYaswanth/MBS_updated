import Footer from "../../Footer";
import Navbar from "../../Navbar";
import React, { useRef, useState,useEffect } from 'react';
import Sector_Card from '../Sector_Card';
import { BarChart, Wrench, Cpu, MapPin, DollarSign } from "lucide-react";  // Importing relevant icons

const Product2 = () => {

  const features = [
    {
      icon: <BarChart />, // Icon for real-time monitoring (data visualization)
      text: "Real-Time Monitoring",
      description: [
        "Continuous oversight of telecom infrastructure performance for optimal decision-making."
      ]
    },
    {
      icon: <Wrench />, // Icon for predictive maintenance (tool for repairs)
      text: "Predictive Maintenance",
      description: [
        "Proactively identifies potential issues to minimize downtime and reduce repair costs."
      ]
    },
    {
      icon: <Cpu />, // Icon for AI-powered optimization (technology-driven)
      text: "AI-Powered Optimization",
      description: [
        "Enhances operational efficiency by using advanced analytics to streamline workflows."
      ]
    },
    {
      icon: <MapPin />, // Icon for enhanced asset management (geo-referencing)
      text: "Enhanced Asset Management",
      description: [
        "Accurate 3D visualization and geo-referencing improve decision-making and resource allocation."
      ]
    },
    {
      icon: <DollarSign />, // Icon for cost savings (money/financial)
      text: "Cost Savings",
      description: [
        "Reduces maintenance costs and space usage, increasing revenue."
      ]
    }
  ];

  const sectors = [
    {
      title: "Digital Bird’s Eye View",
      // subtitle: "Telecom Infrastructure Digital Twin",
      description: "Provides real-time, 3D visualization of telecom assets, enabling efficient monitoring and decision-making.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/Digital+Bird%E2%80%99s+Eye+View.jpeg",
    },
    {
      title: "Geo-referenced Modelling",
      // subtitle: "Intelligence FOD Tracker",
      description: "Accurately locates telecom assets with precise geographic data, ensuring effective tracking and management.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/geo-ref.webp",
    },
    {
      title: "Maintenance Tracking",
      // subtitle: "Neural Farms Platform",
      description: "Optimizes maintenance schedules and reduces downtime through proactive tracking of service needs and repairs.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/maintenance_tracking.jpeg",
    },
    {
      title: "Digital Inspection Records",
      // subtitle: "Smart City Planning Platform",
      description: "Creates traceable digital records for all inspections and maintenance activities for compliance and auditing.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/digital_inspection.jpg",
    },
    {
      title: "Expansion Insights",
      // subtitle: "Revolutionize healthcare with data-driven patient support",
      description: "Uses predictive analytics to guide future infrastructure growth and capacity planning, ensuring sustainable scaling.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/expansion_insights.webp",
    },
    {
      title: "Asset Inventory Mapping",
      // subtitle: "Elevate retail strategies through intelligent data use.",
      description: "Centralizes and organizes both physical and digital assets, improving resource allocation and simplifying asset tracking.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/asset__inventory.avif",
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
          <h1 className="text-8xl font-bold mt-10 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">Telecom Tower Reconstruction</h1>
          <p className='mt-10 text-3xl text-center'>Provides a real-time, 3D visualization of telecom assets, enabling clear monitoring and better decision-making.</p>
          <p className='px-6 py-2 rounded-md border mt-16 hover:text-white hover:bg-gray-200 text-xl shadow-lg bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-white'>Learn More</p>
        </div>
        <div className='w-[80%] mx-auto py-5'>
          <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/telecom_tower/Digital_Twin.png" alt="bg" className="w-[80%] mx-auto rounded-lg object-cover" />
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

export default Product2;