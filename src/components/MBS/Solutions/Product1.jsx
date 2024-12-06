import Footer from "../../Footer";
import Navbar from "../../Navbar";
import React, { useRef, useState,useEffect } from 'react';
import Sector_Card from '../Sector_Card';
import { FaChartBar, FaCog, FaClock, FaEye, FaHeart } from 'react-icons/fa'; // Corrected imports

const Product1 = () => {


const features = [
  {
    icon: <FaChartBar />, // Icon for data-driven urban planning
    text: "Data-Driven Urban Planning",
    description: [
      "Leverages real-time data and predictive analytics to make informed planning decisions that address city-specific needs."
    ]
  },
  {
    icon: <FaCog />, // Icon for enhanced resource management
    text: "Enhanced Resource Management",
    description: [
      "Optimizes allocation of essential resources, reducing waste and ensuring sustainable growth."
    ]
  },
  {
    icon: <FaClock />, // Icon for predictive modeling for proactive solutions
    text: "Predictive Modeling for Proactive Solutions",
    description: [
      "Identifies potential issues before they arise, enabling proactive infrastructure maintenance and environmental protection."
    ]
  },
  {
    icon: <FaEye />, // Icon for comprehensive real-time monitoring
    text: "Comprehensive Real-Time Monitoring",
    description: [
      "Uses drone technology and digital twins to continuously monitor and manage infrastructure and resource usage."
    ]
  },
  {
    icon: <FaHeart />, // Icon for improved quality of life
    text: "Improved Quality of Life",
    description: [
      "Supports sustainable urbanization, ensuring cities are resilient, efficient, and equipped to offer a higher quality of life."
    ]
  }
  ];


  const sectors = [
    {
      title: "Interactive 3D City Models for Urban Planning",
      description: "Visualize and simulate city layouts and changes with real-time, 3D models to enhance planning accuracy and decision-making.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/city_planning/city_planning.png",  // You can replace this with the appropriate image source
    },
    {
      title: "Real-Time Environmental Monitoring",
      description: "Track key environmental metrics, ensuring cities meet sustainability goals while protecting public health and safety.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/city_planning/real-time_env.jpg",  // You can replace this with the appropriate image source
    },
    {
      title: "Advanced Terrain Analysis and Simulation",
      description: "Digital twin-based terrain analysis provides real-time, accurate simulations, enhancing decision-making with dynamic spatial data and predictive insights.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/city_planning/Analysis+and+Simulation.png",  // You can replace this with the appropriate image source
    },
    {
      title: "Traffic Optimization for Better Mobility",
      description: "Use predictive analytics and real-time data to manage traffic flow, reduce congestion, and improve transportation systems.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/city_planning/traffic_op1.PNG",  // You can replace this with the appropriate image source
    },
    {
      title: "Optimizing Resource Use for Sustainable City Management",
      description: "Ensure efficient allocation and consumption of essential resources such as water, energy, and waste management through real-time monitoring.",
      imgSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/city_planning/sustainable_city.jpg",  // You can replace this with the appropriate image source
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
          <h1 className="text-8xl font-bold mt-10 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text py-10">Smart City Planning Platform
          </h1>
          <p className=' text-3xl text-center'>Intelligent Urban Planning for Sustainable and Adaptive Growth</p>
          <p className='px-6 py-2 rounded-md border mt-16 hover:text-white hover:bg-gray-200 text-xl shadow-lg bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-white cursor-pointer'>Learn More</p>
        </div>
        <div className='w-[80%] mx-auto py-5'>
          <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/solutions/city_planning/smart_city.png" alt="bg" className="w-[80%] mx-auto rounded-lg object-cover" />
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
            Applications
            </span>
          </h1>
        </div>
      </div>
      
      <div className="pb-20 my-10 bg-white">
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

export default Product1;