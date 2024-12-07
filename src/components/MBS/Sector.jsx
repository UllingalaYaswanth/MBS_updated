// import React, { useState } from 'react'; 
// import { Menu, X } from 'lucide-react';

// const tabData = [
//     {
//         id: 'tab1',
//         name: 'Telecommunications',
//         title: 'Transform telecommunications with innovative digital solutions',
//         description: 'Create virtual replicas of physical towers to facilitate effective management. This allows for improved resource allocation and reduced downtime. Real-time monitoring ensures operational efficiency and responsiveness.',
//         imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Telecommunications.png",
//     },
//     {
//         id: 'tab2',
//         name: 'Healthcare',
//         title: 'Revolutionize healthcare with data-driven patient support',
//         description: 'Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.',
//         imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Healthcare.jpg",
//     },
//     {
//         id: 'tab3',
//         name: 'Logistics',
//         title: 'Optimize logistics operations for better delivery outcomes',
//         description: 'Enhance supply chain efficiency with real-time tracking capabilities, ensuring transparency and accountability throughout the logistics process. Predictive analytics empower decision-making and optimize operations.',
//         imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Logistics.jpg",
//     },
//     {
//         id: 'tab4',
//         name: 'Retail and E-Commerce',
//         title: 'Elevate retail strategies through intelligent data use',
//         description: 'Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.',
//         imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_E-commerce.jpg",
//     },
//     {
//         id: 'tab5',
//         name: 'Real Estate and Construction',
//         title: 'Transform real estate with innovative construction solutions',
//         description: 'Smart building solutions offer innovative project management capabilities. Market analysis tools provide crucial insights for strategic decision-making, helping clients understand potential investments better.',
//         imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Construction.jpg",
//     },
//     {
//         id: 'tab6',
//         name: 'Manufacturing',
//         title: 'Advance manufacturing processes through smart technologies',
//         description: 'Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.',
//         imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Manufacture.png",
//     },
// ];

// const TabSelector = () => {
//     const [activeTab, setActiveTab] = useState('tab1');
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const handleToggleNav = () => {
//         setIsNavOpen(prev => !prev);
//     };

//     return (
//         <div className="mx-auto p-5">
//             <div className='relative py-5 flex justify-center lg:pb-14'>
//             <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/Main_Industry_Sectors.mp4" autoPlay muted loop/>
//             <header className="text-center mb-20 absolute top-0 md:top-14 lg:top-20">
//                 <h2 className="text-3xl md:text-5xl lg:text-7xl mt-10 lg:mt-20 tracking-wide mb-3 text-white">
//                     Technologies Transforming {" "}
//                 </h2>
//                 <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-wide">
//                     <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
//                         Industry Sectors
//                     </span>
//                 </h1>
//             </header>
//             </div>
//             <div className="flex justify-end lg:hidden mb-5">
//                 <button 
//                     className="px-3 py-2 lg:px-4 lg:py-2 text-md lg:text-lg font-semibold border-none rounded-md bg-orange-600 text-white"
//                     onClick={handleToggleNav}
//                 >
//                     {isNavOpen ? <X /> : <Menu />}
//                 </button>
//             </div>

//             <nav className={`flex justify-between ${isNavOpen ? 'flex-col' : 'hidden'} lg:flex `}>
//                 {tabData.map(({ id, name }) => (
//                     <button
//                         key={id}
//                         className={`px-4 py-3 text-left sm:text-[1.1rem] lg:text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} lg:mb-2 lg:mb-0 lg:mr-2`}
//                         onClick={() => {
//                             setActiveTab(id);
//                             if (isNavOpen) handleToggleNav();
//                         }}
//                     >
//                         {name}
//                     </button>
//                 ))}
//             </nav>
//             <div className='lg:pb-8'>
//                 {tabData.map(({ id, title, description, imageSrc }) => (
//                     <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
//                         <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10  space-y-10 lg:space-y-0 items-center'>
//                             <div className='flex justify-center flex-col'>
//                                 <h1 className='text-2xl py-5 sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text'>
//                                     {title}
//                                 </h1>
//                                 <p className="text-md md:text-2xl mt-3 text-neutral-500">
//                                     {description}
//                                 </p>
//                             </div>
//                             <img src={imageSrc} alt={name} className='w-full md:w-[700px] rounded-md' />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TabSelector;



// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const tabData = [
//   {
//     id: 'tab1',
//     name: 'Telecommunications',
//     title: 'Transform telecommunications with innovative digital solutions',
//     description: 'Create virtual replicas of physical towers to facilitate effective management. This allows for improved resource allocation and reduced downtime. Real-time monitoring ensures operational efficiency and responsiveness.',
//     imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Telecommunications.png",
//   },
//   {
//     id: 'tab2',
//     name: 'Healthcare',
//     title: 'Revolutionize healthcare with data-driven patient support',
//     description: 'Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.',
//     imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Healthcare.jpg",
//   },
//   {
//     id: 'tab3',
//     name: 'Logistics',
//     title: 'Optimize logistics operations for better delivery outcomes',
//     description: 'Enhance supply chain efficiency with real-time tracking capabilities, ensuring transparency and accountability throughout the logistics process. Predictive analytics empower decision-making and optimize operations.',
//     imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Logistics.jpg",
//   },
//   {
//     id: 'tab4',
//     name: 'Retail and E-Commerce',
//     title: 'Elevate retail strategies through intelligent data use',
//     description: 'Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.',
//     imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_E-commerce.jpg",
//   },
//   {
//     id: 'tab5',
//     name: 'Real Estate and Construction',
//     title: 'Transform real estate with innovative construction solutions',
//     description: 'Smart building solutions offer innovative project management capabilities. Market analysis tools provide crucial insights for strategic decision-making, helping clients understand potential investments better.',
//     imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Construction.jpg",
//   },
//   {
//     id: 'tab6',
//     name: 'Manufacturing',
//     title: 'Advance manufacturing processes through smart technologies',
//     description: 'Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.',
//     imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Manufacture.png",
//   },
// ];

// const TabSelector = () => {
//   const [activeTab, setActiveTab] = useState('tab1');

//   return (
//     <div className="mx-auto p-5">
//       {/* Hero Section */}
//       <div className="relative py-5 flex justify-center lg:pb-14">
//         <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/Main_Industry_Sectors.mp4" autoPlay muted loop />
//         <header className="text-center mb-20 absolute top-0 md:top-14 lg:top-20">
//           <h2 className="text-3xl md:text-5xl lg:text-7xl mt-10 lg:mt-20 tracking-wide mb-3 text-white">
//             Technologies Transforming {" "}
//           </h2>
//           <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-wide">
//             <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
//               Industry Sectors
//             </span>
//           </h1>
//         </header>
//       </div>

//       {/* Desktop View */}
//       <div className="hidden lg:block">
//         <nav className="flex justify-between mb-6">
//           {tabData.map(({ id, name }) => (
//             <button
//               key={id}
//               className={`px-4 py-3 text-left sm:text-[1.1rem] lg:text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} lg:mb-2 lg:mb-0 lg:mr-2`}
//               onClick={() => setActiveTab(id)}
//             >
//               {name}
//             </button>
//           ))}
//         </nav>

//         {/* Tab Content for Desktop */}
//         <div className="lg:pb-8">
//           {tabData.map(({ id, title, description, imageSrc }) => (
//             <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
//               <div className="flex flex-col lg:flex-row space-x-0 md:space-x-10 space-y-10 lg:space-y-0 items-center">
//                 {/* Title and Description */}
//                 <div className="flex justify-center flex-col text-center lg:text-left">
//                   <h1 className="text-2xl py-5 sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
//                     {title}
//                   </h1>
//                   <p className="text-md md:text-2xl mt-3 text-neutral-500">
//                     {description}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <img src={imageSrc} alt={id} className="w-full md:w-[700px] rounded-md" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile View with Horizontal Scroll */}
//       <div className="lg:hidden">
//         <nav className="flex overflow-x-auto scrollbar-hide mb-6">
//           {tabData.map(({ id, name }) => (
//             <button
//               key={id}
//               className={`px-4 py-3 text-left sm:text-[1.1rem] lg:text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} whitespace-nowrap`}
//               onClick={() => setActiveTab(id)}
//             >
//               {name}
//             </button>
//           ))}
//         </nav>

//         {/* Tab Content for Mobile */}
//         <div className="overflow-x-auto pb-8">
//           {tabData.map(({ id, title, description, imageSrc }) => (
//             <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
//               <div className="flex flex-col items-center space-y-10">
//                 {/* Title and Description */}
//                 <div className="flex justify-center flex-col text-center">
//                   <h1 className="text-2xl py-5 sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
//                     {title}
//                   </h1>
//                   <p className="text-md md:text-2xl mt-3 text-neutral-500">
//                     {description}
//                   </p>
//                 </div>
//                 {/* Image */}
//                 <img src={imageSrc} alt={id} className="w-full md:w-[700px] rounded-md" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };




// export default TabSelector;


import React, { useState } from 'react';

const tabData = [
  {
    id: 'tab1',
    name: 'Telecommunications',
    title: 'Transform telecommunications with innovative digital solutions',
    description: 'Create virtual replicas of physical towers to facilitate effective management. This allows for improved resource allocation and reduced downtime. Real-time monitoring ensures operational efficiency and responsiveness.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Telecommunications.png",
  },
  {
    id: 'tab2',
    name: 'Healthcare',
    title: 'Revolutionize healthcare with data-driven patient support',
    description: 'Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Healthcare.jpg",
  },
  {
    id: 'tab3',
    name: 'Logistics',
    title: 'Optimize logistics operations for better delivery outcomes',
    description: 'Enhance supply chain efficiency with real-time tracking capabilities, ensuring transparency and accountability throughout the logistics process. Predictive analytics empower decision-making and optimize operations.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Logistics.jpg",
  },
  {
    id: 'tab4',
    name: 'Retail and E-Commerce',
    title: 'Elevate retail strategies through intelligent data use',
    description: 'Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_E-commerce.jpg",
  },
  {
    id: 'tab5',
    name: 'Real Estate and Construction',
    title: 'Transform real estate with innovative construction solutions',
    description: 'Smart building solutions offer innovative project management capabilities. Market analysis tools provide crucial insights for strategic decision-making, helping clients understand potential investments better.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Construction.jpg",
  },
  {
    id: 'tab6',
    name: 'Manufacturing',
    title: 'Advance manufacturing processes through smart technologies',
    description: 'Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.',
    imageSrc: "https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Sectors_Manufacture.png",
  },
];

const TabSelector = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="mx-auto p-5">
      {/* Hero Section */}
      <div className="relative py-5 flex justify-center lg:pb-14">
        <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/Main_Industry_Sectors.mp4" autoPlay muted loop />
        <header className="text-center mb-20 absolute top-0 md:top-14 lg:top-20">
          <h2 className="text-3xl md:text-5xl lg:text-7xl mt-10 lg:mt-20 tracking-wide mb-3 text-white">
            Technologies Transforming {" "}
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-wide">
            <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
              Industry Sectors
            </span>
          </h1>
        </header>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <nav className="flex justify-between mb-6">
          {tabData.map(({ id, name }) => (
            <button
              key={id}
              className={`px-4 py-3 text-left sm:text-[1.1rem] lg:text-[1.3rem] border-none rounded-md ${activeTab === id ? 'bg-orange-600 text-white' : ''} lg:mb-2 lg:mb-0 lg:mr-2`}
              onClick={() => setActiveTab(id)}
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Tab Content for Desktop */}
        <div className="lg:pb-8">
          {tabData.map(({ id, title, description, imageSrc }) => (
            <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
              <div className="flex flex-col lg:flex-row space-x-0 md:space-x-10 space-y-10 lg:space-y-0 items-center">
                {/* Title and Description */}
                <div className="flex justify-center flex-col text-center lg:text-left">
                  <h1 className="text-2xl py-5 sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                    {title}
                  </h1>
                  <p className="text-md md:text-2xl mt-3 text-neutral-500">
                    {description}
                  </p>
                </div>

                {/* Image */}
                <img src={imageSrc} alt={id} className="w-full md:w-[700px] rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View with Horizontal Scroll */}
      <div className="lg:hidden">
        <div className="overflow-x-auto flex pb-8">
          {tabData.map(({ id, title, description, imageSrc }) => (
            <div key={id} className="w-[350px] flex-shrink-0">
              <div className={`p-4`}>
                <div className="flex flex-col items-center space-y-10">
                  {/* Title and Description */}
                  <div className="flex justify-center flex-col text-center">
                    <h1 className="text-2xl py-5 sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 mb-2 bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                      {title}
                    </h1>
                    <p className="text-md md:text-2xl mt-3 text-neutral-500">
                      {description}
                    </p>
                  </div>
                  {/* Image */}
                  <img src={imageSrc} alt={id} className="w-full md:w-[700px] rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSelector;
