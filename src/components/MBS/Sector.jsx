import React, { useState } from 'react';
import image1 from '../../assets/health_mba.png'; 
import image2 from '../../assets/tele.jpg'; 
import image3 from '../../assets/logistics.jpg'; 
import image4 from '../../assets/retail.jpg'; 
import image5 from '../../assets/real_estate.jpg'; 
import image6 from '../../assets/manufacture.png'; 
import { Menu, X } from 'lucide-react';

const tabData = [
    {
        id: 'tab1',
        name: 'Telecommunications',
        title: 'Transform telecommunications with innovative digital solutions',
        description: 'Create virtual replicas of physical towers to facilitate effective management. This allows for improved resource allocation and reduced downtime. Real-time monitoring ensures operational efficiency and responsiveness.',
        imageSrc: image2,
    },
    {
        id: 'tab2',
        name: 'Healthcare',
        title: 'Revolutionize healthcare with data-driven patient support',
        description: 'Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.',
        imageSrc: image1,
    },
    {
        id: 'tab3',
        name: 'Logistics',
        title: 'Optimize logistics operations for better delivery outcomes',
        description: 'Enhance supply chain efficiency with real-time tracking capabilities, ensuring transparency and accountability throughout the logistics process. Predictive analytics empower decision-making and optimize operations.',
        imageSrc: image3,
    },
    {
        id: 'tab4',
        name: 'Retail and E-Commerce',
        title: 'Elevate retail strategies through intelligent data use',
        description: 'Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.',
        imageSrc: image4,
    },
    {
        id: 'tab5',
        name: 'Real Estate and Construction',
        title: 'Transform real estate with innovative construction solutions',
        description: 'Smart building solutions offer innovative project management capabilities. Market analysis tools provide crucial insights for strategic decision-making, helping clients understand potential investments better.',
        imageSrc: image5,
    },
    {
        id: 'tab6',
        name: 'Manufacturing',
        title: 'Advance manufacturing processes through smart technologies',
        description: 'Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.',
        imageSrc: image6,
    },
];

const TabSelector = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        <div className="font-sans mx-auto p-5">
            <div className='relative py-5 flex justify-center '>
            <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/vc1+(1).mp4" autoPlay muted loop/>
            <header className="text-center mb-20 absolute top-20">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl mt-10 lg:mt-20 tracking-wide mb-3 text-white">
                    Technologies Transforming {" "}
                </h2>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-wide">
                    <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                        Industry Sectors
                    </span>
                </h1>
            </header>
            </div>
            <div className="flex justify-end lg:hidden mb-5">
                <button 
                    className="px-4 py-2 text-lg font-semibold border-none rounded-md bg-orange-600 text-white"
                    onClick={handleToggleNav}
                >
                    {isNavOpen ? <X /> : <Menu />}
                </button>
            </div>

            <nav className={`flex justify-between ${isNavOpen ? 'flex-col' : 'hidden'} lg:flex`}>
                {tabData.map(({ id, name }) => (
                    <button
                        key={id}
                        className={`px-4 py-3 text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} mb-2 lg:mb-0 lg:mr-2`}
                        onClick={() => {
                            setActiveTab(id);
                            if (isNavOpen) handleToggleNav();
                        }}
                    >
                        {name}
                    </button>
                ))}
            </nav>
            <div>
                {tabData.map(({ id, title, description, imageSrc }) => (
                    <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
                        <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 space-y-10 lg:space-y-0 items-center'>
                            <div className='flex justify-center flex-col'>
                                <h1 className='text-xl py-5 sm:text-3xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text'>
                                    {title}
                                </h1>
                                <p className="text-md md:text-2xl mt-3 text-neutral-500">
                                    {description}
                                </p>
                            </div>
                            <img src={imageSrc} alt={name} className='w-full md:w-[700px] rounded-md' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabSelector;
