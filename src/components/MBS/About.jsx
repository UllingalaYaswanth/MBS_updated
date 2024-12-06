import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <div className='text-black bg-white'>
      <Navbar/>
    <div className="bg-gray-50 min-h-screen py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">About Us</h1>

        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left md:w-2/3">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We deliver cutting-edge AI technology solutions that transform industries and enhance public sector capabilities. Through innovative tools, we empower better decision-making, optimize resources, and boost operational efficiency while ensuring sustainability and scalability.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/mbs_about.jpg" // Replace with the actual path of your image
              alt="Innovative AI technology"
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mb-4 inline-block self-start">Our Vision</h1>
            
            <p className="text-xl text-gray-700">
              To pioneer innovative, ethical solutions that drive sustainable growth, societal impact, and cross-sectoral advancements in global markets.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mb-4 inline-block self-start">Our Mission</h2>
            <p className="text-xl text-gray-700">
              To set the standard in AI-driven technology by providing solutions that prioritize safety, operational excellence, and regulatory compliance across sectors critical to public welfare and infrastructure integrity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mb-4 inline-block self-start">What We Do</h2>
            <p className="text-xl text-gray-700">
              We specialize in transforming infrastructure management through real-time monitoring, drone inspections, and advanced computer vision technology. Our expertise lies in using AI-powered predictive analytics to ensure that critical public assets—such as bridges, telecommunications towers, power grids, and pipelines—are continuously monitored, inspected, and maintained.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              By providing state-of-the-art tools for proactive asset management, we help safeguard infrastructure, optimize maintenance processes, and support long-term resilience across sectors.
            </p>
          </section>
        </div>

        {/* Key Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaRegLightbulb className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900">Innovative Technology</h3>
            <p className="text-gray-700 mt-4">
              Cutting-edge tools that drive smarter decision-making and operational excellence.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaRegLightbulb className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900">Sustainability</h3>
            <p className="text-gray-700 mt-4">
              We prioritize sustainable growth by developing scalable, eco-friendly solutions.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
            <FaRegLightbulb className="text-5xl text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900">AI-Driven Insights</h3>
            <p className="text-gray-700 mt-4">
              Using AI to deliver precision-driven insights that optimize infrastructure management.
            </p>
          </div>
        </section>
      </div>
    </div>
    <div id="footer">
    <Footer />
    </div>
    </div>
  );
};

export default AboutPage;
