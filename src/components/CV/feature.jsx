

import React, { useState } from 'react';
import {Truck, Menu, X } from 'lucide-react';
import image1 from '../../assets/health_mba.png'; 
import image4 from '../../assets/retail.jpg'; 
import image6 from '../../assets/manufacture.png'; 
import image2 from '../../assets/CV_A.jpg'; 
import image3 from '../../assets/CV_C.png'; 
import image5 from '../../assets/CV_AM.jpg'; 


export const feature = [
  {
    imageSrc: image1,
    text: "Healthcare",
    title: "Automated Patient Monitoring",
    description: (
      <p>
        Automated tumor detection enhances diagnostic accuracy and efficiency. Real-time vital sign monitoring ensures timely interventions. Advanced surgical navigation systems improve procedural outcomes significantly.
      </p>
    ),
  },
  {
    imageSrc: image4,
    text: "E-commerce",
    title: "Interactive Shopping Experience",
    description: (
      <p>
        Virtual try-on solutions allow customers to visualize products before purchase. Interactive marketing solutions engage users and boost conversion rates. Personalized product recommendations enhance user satisfaction and loyalty.
      </p>
    ),
  },
  {
    imageSrc: image5,
    text: "Automotive",
    title: "Advanced Driver Assistance",
    description: (
      <p>
        Sensor fusion techniques integrate data from multiple sources for accurate analysis. Driver monitoring systems enhance safety by detecting signs of fatigue. Obstacle detection and traffic sign recognition improve overall driving experience.
      </p>
    ),
  },
  {
    imageSrc: image6,
    text: "Manufacturing",
    title: "Quality Control Solutions",
    description: (
      <p>
        Advanced quality control ensures products meet industry standards consistently. Predictive maintenance algorithms minimize downtime by forecasting equipment failures. Compliance verification systems streamline regulatory adherence effectively.
      </p>
    ),
  },
  {
    imageSrc: image2,
    text: "Agriculture",
    title: "Smart Farming Techniques",
    description: (
      <p>
        Hyperspectral imaging provides detailed insights into crop health and conditions. Pest detection systems enable timely interventions to protect yields. Livestock activity tracking ensures better management and productivity.
      </p>
    ),
  },
  {
    imageSrc: image3 ,
    text: "Security",
    title: "Enhanced Safety Solutions",
    description: (
      <p>
        Real-time anomaly detection helps identify potential security threats quickly. License plate recognition aids in monitoring and tracking vehicles effectively. Crowd management solutions enhance safety in large gatherings and events.
      </p>
    ),
  },
];

const Feature = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        <div className="mx-auto p-5 px-10">
            <header className="text-center mb-20">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-3">
                    Our {" "}
                    <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                        SOLUTIONS
                    </span>
                </h2>
            </header>

            <div className="flex justify-end lg:hidden mb-5">
                <button 
                    className="px-4 py-2 text-lg font-semibold border-none rounded-md bg-orange-600 text-white"
                    onClick={handleToggleNav}
                >
                    {isNavOpen ? <X /> : <Menu />}
                </button>
            </div>

            <nav className={`flex justify-between ${isNavOpen ? 'flex-col' : 'hidden'} lg:flex`}>
                {feature.map(({ text }, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-[1.25rem] border-none rounded-md ${activeTab === `tab${index + 1}` ? 'bg-orange-600 text-white' : ''} mb-2 lg:mb-0 lg:mr-2`}
                        onClick={() => {
                            setActiveTab(`tab${index + 1}`);
                            if (isNavOpen) handleToggleNav();
                        }}
                    >
                        {text}
                    </button>
                ))}
            </nav>
            <div>
                {feature.map(({ title, description, imageSrc }, index) => (
                    <div key={index} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === `tab${index + 1}` ? 'block' : 'hidden'}`}>
                        <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 space-y-10 lg:space-y-0 items-center'>
                            <div className='flex justify-center flex-col'>
                                <h1 className='text-xl sm:text-3xl lg:text-4xl text-blue-600 mb-2'>
                                    {title}
                                </h1>
                                <div className="text-md md:text-lg mt-3 text-neutral-500">
                                    {description}
                                </div>
                            </div>
                            <img src={imageSrc} alt={name} className='w-full md:w-[600px] rounded-md' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
