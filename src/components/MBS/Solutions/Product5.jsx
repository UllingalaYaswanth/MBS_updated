import img from '../../../assets/9lvoom5iii.png'
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
import { Zap, BarChart2, MessageCircle, DollarSign, RefreshCcw     } from "lucide-react";  // Importing relevant icons

const Product5 = () => {

  const features = [
    {
      icon: <Zap />, // Icon for boosted operational efficiency (speed/automation)
      text: "Boosted Operational Efficiency",
      description: [
        "Automates repetitive tasks, freeing up resources for strategic priorities."
      ]
    },
    {
      icon: <BarChart2 />, // Icon for enhanced decision-making (data insights)
      text: "Enhanced Decision-Making",
      description: [
        "Provides data-driven insights for more informed, faster decisions."
      ]
    },
    {
      icon: <MessageCircle />, // Icon for streamlined communication (communication)
      text: "Streamlined Communication",
      description: [
        "Facilitates smooth, centralized communication across teams."
      ]
    },
    {
      icon: <DollarSign />, // Icon for cost savings (money/financial savings)
      text: "Cost Savings",
      description: [
        "Reduces operational costs by optimizing workflows and resource allocation."
      ]
    },
    {
      icon: <RefreshCcw />, // Icon for scalable and adaptive (scalability)
      text: "Scalable and Adaptive",
      description: [
        "Easily scales to meet organizational needs and adapts as workflows evolve."
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
          <h1 className="text-8xl font-bold mt-10 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text w-[80%] text-center py-5 mx-auto">AADHYA - AI-powered
 Organizational GPT
</h1>
          <p className='mt-10 text-3xl text-center'>The Intelligent Solution for Streamlined Operations</p>
          <p className='px-6 py-2 rounded-md border mt-16 hover:text-white hover:bg-gray-200 text-xl shadow-lg bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-white'>Learn More</p>
        </div>
        <div className='w-[80%] mx-auto py-5'>
          <img src={img} alt="bg" className="w-[80%] mx-auto rounded-lg object-cover border-2" />
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
            Task Automation
            Applications
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

export default Product5;