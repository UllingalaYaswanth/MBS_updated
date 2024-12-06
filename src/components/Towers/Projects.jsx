import React, { useState } from 'react';
import Popup from './Popup';

function Projects() {
  const [isOpen, setIsOpen] = useState({ project1: false, project2: false, project3: false, project4: false });

  const togglePopup = (project) => {
    setIsOpen((prev) => ({ ...prev, [project]: !prev[project] }));
  };

  const features = [
    {
      title: 'Digital Twins',
      description: 'Realistic urban simulations for impact visualization.',
    },
    {
      title: 'Data Insights',
      description: 'Big data analytics for optimized planning.',
    },
    {
      title: 'Sustainability Modeling',
      description: 'Eco-friendly design integration.',
    },
    {
      title: 'Community Engagement',
      description: 'Tools for public feedback.',
    },
  ];

  const useCases = [
    {
      title: 'Transportation Planning',
      example: 'Reduced congestion by 30% in City X.',
    },
    {
      title: 'Zoning and Land Use',
      example: 'Enhanced mixed-use developments in City Y.',
    },
    {
      title: 'Disaster Preparedness',
      example: 'Flood management strategy for City Z.',
    },
    {
      title: 'Smart City Integrations',
      example: 'Smart waste management in City A.',
    },
  ];



  const projectContent = {
    project1: (
      <>
        <section className="mb-6 h-[470px] lg:max-h-[580px] overflow-y-scroll ">
        <div className=" max-w-3xl">
                <h1 className=" text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Project Overview: 10,000 Tower Reconstruction</h1>

                <section className="mb-6">
                  <h2 className="text-lg md:text-xl lg:text-2xl mb-2">Introduction</h2>
                  <p>
                    We undertook the monumental task of reconstructing 10,000 towers, leveraging cutting-edge 3D reconstruction 
                    and digital twin technologies. This initiative was designed to ensure structural integrity and compliance 
                    with modern standards.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="text-lg md:text-xl lg:text-2xl mb-2">Project Highlights</h2>
                  <ul className="list-disc pl-6">
                    <li><strong>Scope</strong>: Reconstruction of 10,000 towers</li>
                    <li><strong>Technologies Used</strong>: 3D Reconstruction, Digital Twin Technologies</li>
                    <li><strong>Duration</strong>: Completed in just 3 months</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-lg md:text-xl lg:text-2xl mb-2">Impact</h2>
                  <p>
                    This ambitious project not only enhanced our portfolio but also established our credibility in the 
                    industry, leading to numerous contracts in city planning.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="text-lg md:text-xl lg:text-2xl mb-2">Why Choose Us?</h2>
                  <ul className="list-disc pl-6 md:text-md ">
                    <li><strong>Expertise</strong>: Our skilled team ensures the highest standards in reconstruction.</li>
                    <li><strong>Innovation</strong>: We utilize the latest technologies to provide reliable solutions.</li>
                    <li><strong>Commitment</strong>: We are dedicated to delivering projects on time and within budget.</li>
                  </ul>
                </section>

              </div>
        </section>
       
      </>
    ),
    project2: (
      <>
        <section className="mb-6 h-[470px] lg:max-h-[580px] overflow-y-scroll ">
        <div className="p-6">
      <h1 className="text-3xl font-bold text-left mb-6">Innovative Urban Planning Solutions</h1>
      <p className="text-lg text-left mb-8">
        We specialize in sustainable city designs, leveraging digital twins of urban environments to help municipalities make informed decisions.
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature.title} className="p-4 hover:shadow-lg rounded-md transition">
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="space-y-4">
          {useCases.map((useCase) => (
            <li key={useCase.title} className="p-4  hover:shadow-lg rounded-md transition">
              <h3 className="font-bold">{useCase.title}</h3>
              <p>{useCase.example}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
        </section>
      </>
    ),
    project3: (
      <>
        <section className="mb-6 h-[470px] lg:max-h-[580px] overflow-y-scroll">
        <div className="min-h-screen">
      <div className="max-w-4xl mx-auto  rounded-lg p-6">
        {/* Introduction Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold  mb-4">
            Project Overview: Digital Twin City Infrastructure
          </h1>
          <p className="text-lg ">
            We pioneered an innovative approach to urban planning through comprehensive digital twin technology, creating exact virtual replicas of entire cities. Using advanced drone photogrammetry, our team captured and processed detailed imagery to create accurate digital representations of urban infrastructure, revolutionizing how cities plan, monitor, and improve their development.
          </p>
        </section>

        {/* Project Highlights Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold  mb-4">Project Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 ">
            <li><strong>Scope:</strong> Complete digital replication of urban infrastructure including buildings, roads, utilities, and public spaces</li>
            <li><strong>Technologies Used:</strong> Drone photogrammetry and digital twin modeling</li>
            <li><strong>Duration:</strong> Completed in just one month, showcasing our efficient workflow and expertise</li>
          </ul>
        </section>

        {/* Impact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold  mb-4">Impact</h2>
          <p className="text-lg ">
            Our rapid deployment and processing capabilities have transformed city planning processes by providing unprecedented visibility into urban infrastructure. The system has been successfully implemented in multiple municipalities, helping city planners make informed decisions and optimize resource allocation. The speed and accuracy of our drone-based approach have set new standards in the industry.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-2xl font-semibold  mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 ">
            <li><strong>Expertise:</strong> Our team brings specialized knowledge in drone photogrammetry and urban planning</li>
            <li><strong>Innovation:</strong> We deliver efficient solutions through advanced drone technology and processing</li>
            <li><strong>Commitment:</strong> We ensure rapid project completion without compromising on quality</li>
          </ul>
        </section>
      </div>
    </div>
        </section>
        {/* Add other sections as needed */}
      </>
    ),
    project4: (
      <>
        <section className="mb-6 h-[470px] lg:max-h-[580px] overflow-y-scroll ">
        <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 ">
          Railway Bridge Digital Twin Inspection - Kerala
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold ">Introduction</h2>
          <p className=" mt-4">
            We conducted a comprehensive digital inspection of railway bridges across Kerala using advanced drone photogrammetry. This pioneering initiative captured detailed structural data of critical bridge infrastructure, ensuring safety and compliance with Indian Railways standards while adapting to the unique coastal and monsoon conditions of Kerala.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold ">Project Highlights</h2>
          <ul className="list-disc list-inside mt-4 ">
            <li><strong>Scope:</strong> Digital inspection of major railway bridges across Kerala's network</li>
            <li><strong>Technologies Used:</strong> Drone photogrammetry and digital twin modeling</li>
            <li><strong>Duration:</strong> Completed in just one month, demonstrating efficient project execution</li>
            <li><strong>Location:</strong> Multiple bridge sites across Kerala's railway network</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold ">Impact</h2>
          <p className=" mt-4">
            Our bridge inspection project has revolutionized maintenance planning for Kerala Railways by providing detailed insights into structural conditions. The digital documentation has been crucial for identifying maintenance priorities, especially considering Kerala's challenging climate and coastal environment. This has led to more efficient resource allocation and improved safety measures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold ">Why Choose Us?</h2>
          <ul className="list-disc list-inside mt-4 ">
            <li><strong>Expertise:</strong> Our team combines knowledge of local conditions with bridge inspection expertise</li>
            <li><strong>Innovation:</strong> We provide safe, non-intrusive inspection methods using drone technology</li>
            <li><strong>Commitment:</strong> We deliver comprehensive reports while adhering to strict railway safety protocols</li>
          </ul>
        </section>
      </div>
    </div>
        </section>
        {/* Add other sections as needed */}
      </>
    ),
  };

  return (
    <div className='items-center'>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-10">Our <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">PROJECTS</span></h2>

      {/* Project 1 */}
      <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 border-b border-neutral-700 px-10 space-y-10 lg:space-y-0 items-center'>
        <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Tower_Reconstruction.mp4" autoPlay muted loop className='md:w-[500px] rounded-md' />
        <div className='flex justify-center flex-col'>
          <h1 className='mb-2 text-2xl md:text-3xl lg:text-4xl'>Tower Reconstruction</h1>
          <p className="text-md md:text-lg mt-3 text-neutral-500">We undertook the monumental task of reconstructing 10,000 towers, leveraging our 3D reconstruction and digital twin technologies to ensure structural integrity and compliance with modern standards. This project not only enhanced our portfolio but also established our credibility in the industry, landing us numerous contracts in city planning.</p>
          <p className="mt-2" onClick={() => togglePopup('project1')}>
            <span className="border-b border-transparent hover:border-black cursor-pointer bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text text-lg">Learn More..</span>
          </p>
        </div>
      </div>
      <Popup isOpen={isOpen.project1} onClose={() => togglePopup('project1')} videoSrc="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Tower_Reconstruction.mp4" title="Project Overview: Tower Reconstruction" content={projectContent.project1} />

      {/* Project 2 */}
      <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 border-b border-neutral-700 px-10 lg:space-y-0 items-center'>
        <div className='flex justify-center flex-col order-1 md:order-0 mt-10 lg:mt-0'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-2'>City Planning</h1>
          <p className="text-md md:text-lg mt-3 text-neutral-500">Our innovative approaches to urban planning have earned us contracts with multiple municipalities, allowing us to contribute to sustainable and efficient city designs. By creating detailed digital twins of urban environments, we assist planners in making informed decisions that impact communities positively.</p>
          <p className='mt-2' onClick={() => togglePopup('project2')}>
            <span className='border-b border-transparent hover:border-black cursor-pointer bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text text-lg'>Learn More..</span>
          </p>
        </div>
        <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Digital_Twin/Project_City_Planning.png" className='w-full md:w-[500px] order-0 lg:order-1 rounded-md' />
      </div>
      <Popup isOpen={isOpen.project2} onClose={() => togglePopup('project2')} videoSrc="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Digital_Twin/Project_City_Planning.png" title="Project Overview: City Planning" content={projectContent.project2} />

      {/* Project 3 */}
      <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 border-b border-neutral-700 px-10 space-y-10 lg:space-y-0 items-center'>
        <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Critical_Inspections.mp4" autoPlay muted loop className='w-full md:w-[500px] rounded-md' />
        <div className='flex justify-center flex-col'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-2'>Critical Inspections</h1>
          <p className="text-md md:text-lg mt-3 text-neutral-500">We have performed comprehensive inspections of critical dam infrastructure using our digital twin technology. Our solutions enable real-time monitoring of structural health, ensuring safety and compliance with regulatory standards.</p>
          <p className='mt-2' onClick={() => togglePopup('project3')}>
            <span className='border-b border-transparent hover:border-black cursor-pointer bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text text-lg'>Learn More..</span>
          </p>
        </div>
      </div>
      <Popup isOpen={isOpen.project3} onClose={() => togglePopup('project3')} videoSrc="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Critical_Inspections.mp4" title="Project Overview: Critical Inspections" content={projectContent.project3} />

      {/* Project 4 */}
      <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 border-b border-neutral-700 px-10 lg:space-y-0 items-center'>
        <div className='flex justify-center flex-col order-1 md:order-0 mt-10 lg:mt-0'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-2'>Railway Bridge Inspections</h1>
          <p className="text-md md:text-lg mt-3 text-neutral-500">Our computer vision and automated inspection techniques have been employed for thorough assessments of railway bridges, identifying potential structural issues and ensuring safe operations.</p>
          <p className='mt-2' onClick={() => togglePopup('project4')}>
            <span className='border-b border-transparent hover:border-black cursor-pointer bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text text-lg'>Learn More..</span>
          </p>
        </div>
        <video src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Railway_Bridge_Inspections.mp4" autoPlay muted loop className='w-full md:w-[500px] order-0 lg:order-1 rounded-md' />
      </div>
      <Popup isOpen={isOpen.project4} onClose={() => togglePopup('project4')} videoSrc="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/DT_Railway_Bridge_Inspections.mp4" title="Project Overview: Railway Bridge Inspections" content={projectContent.project4} />
    </div>
  );
}

export default Projects;
