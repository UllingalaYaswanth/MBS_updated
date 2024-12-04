import React, { useRef, useState,useEffect } from 'react';
import Sector_Card from './Sector_Card';
import img1 from '../../assets/img/Rectangle 45@2x.png';
import img2 from '../../assets/img/Rectangle 45-1@2x.png';
import img3 from '../../assets/img/Rectangle 45-2@2x.png';
import img4 from '../../assets/img/Rectangle 45-3@2x.png';
import img5 from '../../assets/img/Rectangle 45-4@2x.png';
import img6 from '../../assets/img/Rectangle 45-5@2x.png';
import img7 from '../../assets/img/Rectangle 45-6@2x.png';

function Sectors() {
  const sectors = [
    {
      title: "Telecommunications",
      subtitle: "Telecom Infrastructure Digital Twin",
      description: "The Telecom Infrastructure Digital Twin is an advanced solution that provides real-time monitoring, predictive maintenance, and asset optimization for telecom infrastructure. AI-powered 3D visualization and centimeter-level accuracy enable efficient asset management, reducing maintenance costs and increasing revenue. This platform supports 10,000+ towers with secure data handling and provides actionable insights through real-time analytics and geo-referenced modeling.",
      imgSrc: img3,
    },
    {
      title: "Aviation",
      subtitle: "Intelligence FOD Tracker",
      description: "The Intelligence FOD Tracker is an AI-powered system designed to automatically detect, identify, and manage Foreign Object Debris (FOD) across airport operational areas, enhancing safety and reducing aviation costs. Leveraging edge-based cameras, drones, and real-time processing, it provides 24/7 coverage with instant alerts, precise location tracking, and visual dashboards. This advanced solution ensures comprehensive FOD management, from object classification to clearance status, minimizing hazards and financial impact.",
      imgSrc: img5,
    },
    {
      title: "Agriculture",
      subtitle: "Neural Farms Platform",
      description: "Neural Farms is an AI-driven agricultural platform that connects the entire food supply chain, from land preparation to the consumer, with advanced data fusion and drone technology. It offers 24/7 AI monitoring, precision spraying and seeding, real-time decision support, and integrated blockchain-secured data exchange for multi-stakeholder collaboration. With a maximum 30kg drone payload, it provides 100% digital farm coverage and up to 60% yield improvement. From growers to retailers, Neural Farms ensures traceability, quality assurance, and sustainable food security for a resilient agricultural future.",
      imgSrc: img6,
    },
    {
      title: "Real Estate and Construction",
      subtitle: "Smart City Planning Platform",
      description: "The Smart City Planning Platform is an AI-driven urban development system that utilizes real-time data analysis, 3D visualization, and predictive modeling to enhance sustainable city planning and resource management. Integrating IoT sensors, digital twin technology, and predictive analytics provides accurate insights into population density, resource use, and environmental impact. This platform empowers data-driven decision-making to address urbanization challenges and optimize city infrastructure for a better quality of life.",
      imgSrc: img1,
    },
    {
      title: "Healthcare",
      subtitle: "Revolutionize healthcare with data-driven patient support",
      description: "Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.",
      imgSrc: img4,
    },
    {
      title: "Retail and E-commerce",
      subtitle: "Elevate retail strategies through intelligent data use.",
      description: "Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.",
      imgSrc: img7,
    },
    {
      title: "Manufacturing",
      subtitle: "Advance manufacturing through smart technologies.",
      description: "Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.",
      imgSrc: img2,
    },
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
    <div className="py-4 mt-28">
      <div className='px-20'>
        <h1 className="text-3xl">Technologies Transforming</h1>
        <h1 className="text-6xl font-semibold mb-12 bg-gradient-to-r from-[#980866] via-[#FFBA53] to-[#FFBA53] text-transparent bg-clip-text py-3">Industry Sectors</h1>
      </div>
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
  );
}

export default Sectors;
