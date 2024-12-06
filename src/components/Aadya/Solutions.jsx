import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const tabData = [
  {
    id: 'tab1',
    name: 'SmartChat AI',
    title: 'Intelligent chatbots and virtual assistants',
    description: 'Intelligent chatbots and virtual assistants designed for real-time customer engagement and internal support.These solutions streamline communication processes, reduce response times, and enhance stakeholder satisfaction, allowing executives to focus on strategic initiatives.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_SmartChat_ai.png",
  },
  {
    id: 'tab2',
    name: 'QuickSummarize',
    title: 'Automated summarization of documents',
    description: 'Automated summarization of lengthy reports, financial documents, and board meeting notes.This solution enables busy executives and company secretaries to quickly extract critical insights, facilitating informed decision-making and efficient meetings.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_QuickSummarize.png",
  },
  {
    id: 'tab3',
    name: 'Knowledge Navigator',
    title: 'Dynamic knowledge management platform',
    description: 'A dynamic knowledge management platform that consolidates and synthesizes information from various business sources.This tool enhances organizational efficiency by ensuring that decision-makers have easy access to the information they need when they need it.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_Knowledge_Navigator.png",
  },
  {
    id: 'tab4',
    name: 'Content Creator Pro',
    title: 'AI-driven content generation tools',
    description: "AI-driven content generation tools that produce high-quality, tailored communications for executive briefings, investor relations, and corporate marketing.This solution ensures consistent messaging that aligns with the company's strategic objectives.",
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_Content_creator.png",
  },
  {
    id: 'tab5',
    name: 'Document Intelligence Suite',
    title: 'Automated document analysis system',
    description: "An automated system for extracting and analyzing key data from legal and financial documents.Designed for company secretaries and compliance officers, this suite helps ensure regulatory compliance and improves data accuracy while saving valuable time.",
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_DI.png",
  },
  {
    id: 'tab6',
    name: 'Vendor Risk Assessment Tool',
    title: 'Evaluate supplier risks',
    description: "A comprehensive solution that evaluates supplier risks by analyzing contracts and compliance documents.This tool empowers CFOs and procurement teams to make informed sourcing decisions, ensuring the reliability and integrity of supply chains.",
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Usecases_RS.png",
  },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="mx-auto p-5 px-10 lg:px-20">
            <header className="text-center mb-20">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-3">
                    Our {" "}<span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                    USECASES
                    </span>
                </h2>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
                    
                </h1>
            </header>

      <div className="flex justify-end lg:hidden mb-5">
        <button
          className="px-3 py-2 lg:px-4 lg:py-2 text-md lg:text-lg font-semibold border-none rounded-md bg-orange-600 text-white"
          onClick={handleToggleNav}
        >
          {isNavOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className={`flex justify-between ${isNavOpen ? 'flex-col' : 'hidden'} lg:flex`}>
        {tabData.map(({ id, name }) => (
          <button
            key={id}
            className={`px-4 py-3 text-left sm:text-[1.1rem] lg:text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} lg:mb-2 lg:mb-0 lg:mr-2`}
            onClick={() => {
              setActiveTab(id);
              if (isNavOpen) handleToggleNav();
            }}
          >
            {name}
          </button>
        ))}
      </nav>

      <div className="lg:pb-8">
        {tabData.map(({ id, title, description, imageSrc }) => (
          <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
            <div className="flex flex-col lg:flex-row space-x-0 md:space-x-10 space-y-10 lg:space-y-0 items-center">
              <div className="flex justify-center flex-col">
                <h1 className="text-2xl py-5 sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                  {title}
                </h1>
                <p className="text-md md:text-2xl mt-3 text-neutral-500">{description}</p>
              </div>
              <img src={imageSrc} alt={title} className="w-full md:w-[30%] rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
