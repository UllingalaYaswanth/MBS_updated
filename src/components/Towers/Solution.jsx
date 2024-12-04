
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PM from '../../assets/Predt_Maint.webp'
import QC from '../../assets/Quality_C.jpg'
import NLP from '../../assets/NLP.jpg'
import CV from '../../assets/CV1.webp'
import DM from '../../assets/3DM.png'
import DT from '../../assets/DigitalT.jpeg'

const tabData = [
    {
        id: 'tab1',
        name: 'Digital Twins',
        title: 'Real-time Monitoring Strategy',
        description: (
            <p>
                Real-time data integration enables effective monitoring of assets. This technology supports proactive maintenance strategies, ensuring optimal performance. It ultimately optimizes resource management and enhances decision-making processes.
            </p>
        ),
        imageSrc: DT,
    },
    {
        id: 'tab2',
        name: '3D Reconstruction',
        title: 'Precise Visual Planning',
        description: (
            <p>
                Accurate models of structures are created through advanced techniques. This enhances architectural and urban planning by providing precise visualizations. Improved stakeholder engagement is achieved through effective visualization methods.
            </p>
        ),
        imageSrc: DM,
    },
    {
        id: 'tab3',
        name: 'Predictive Maintenance',
        title: 'Forecasting Asset Needs',
        description: (
            <p>
                This approach forecasts maintenance needs effectively, preventing unexpected breakdowns. By identifying potential issues early, it significantly reduces overall maintenance costs. Enhanced reliability leads to improved asset longevity.
            </p>
        ),
        imageSrc: PM,
    },
    {
        id: 'tab4',
        name: 'Quality Control',
        title: 'Ensuring Safety Standards',
        description: (
            <p>
                Thorough inspections using digital models ensure adherence to quality standards. This process identifies hazards, enhancing overall safety within operations. Continuous quality assurance fosters a culture of excellence.
            </p>
        ),
        imageSrc: QC,
    },
    {
        id: 'tab5',
        name: 'Natural Language Processing (NLP)',
        title: 'Simplifying Data Interaction',
        description: (
            <p>
                NLP simplifies data interaction by allowing users to engage with technology through natural language. This promotes wider technology adoption across various teams. Enhanced collaboration and communication result from this user-friendly approach.
            </p>
        ),
        imageSrc: NLP,
    },
    {
        id: 'tab6',
        name: 'Computer Vision',
        title: 'Automating Structural Inspections',
        description: (
            <p>
                Computer vision automates inspections to detect structural anomalies efficiently. This streamlines processes and significantly reduces manual effort. Ensuring compliance with safety regulations is a key benefit of this technology.
            </p>
        ),
        imageSrc: CV,
    },
];

const TabSelector = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        <div className="px-20 p-5">
            <header className="text-center mb-20">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-3">
                    Our {" "}<span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                    SOLUTIONS
                    </span>
                </h2>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
                    
                </h1>
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
                {tabData.map(({ id, name }) => (
                    <button
                        key={id}
                        className={`px-4 py-2 text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} mb-2 lg:mb-0 lg:mr-2`}
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
                                <h1 className='text-xl sm:text-3xl lg:text-4xl text-blue-600 mb-2'>
                                    {title}
                                </h1>
                                <div className="text-md md:text-xl mt-3 text-neutral-500">
                                    {description}
                                </div>
                            </div>
                            <img 
                              src={imageSrc} 
                              alt={name} 
                              className={`rounded-md ${imageSrc === DM ? 'w-[250px]' : 'w-full md:w-[600px]'}`} 
                            />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabSelector;
