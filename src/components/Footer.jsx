import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footer-gradient rounded-t-[56px] opacity-100 text-white">
      <div className="xl:px-24 lg:px-10 mx-auto text-center flex flex-col md:flex-row justify-between items-center h-full space-y-6 md:space-y-0 py-6 lg:py-14 lg:gap-40">
        <div className="text-center text-xs py-10 flex flex-col">
          <a href="#">
            <img
              src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Footer_logo.png"
              alt="Logo"
              width={200}
              height={30}
              className="lg:mr-6 mr-10"
            />
          </a>
          <p className="hidden lg:flex mt-20 text-neutral-400">
            &copy; {new Date().getFullYear()} Mbstech.ai All rights reserved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 text-start gap-10 px-10 max-w-6xl w-full">
          {/* Contact Section */}
          <div className="flex justify-between md:flex-col">
            <div className="space-y-4">
              <h1 className="text-[#EA5C5F] text-lg text-start">Call</h1>
              <p>+971 4 222 7307</p>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#EA5C5F] text-lg text-start">Email</h1>
              <p>info@mbstech.ai</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="grid gap-10">
            <div className="space-y-4">
              <h1 className="text-[#EA5C5F] text-lg text-start">Global Headquarters:</h1>
              <p>201, Building 10, Bay Square, Business Bay, Dubai, UAE</p>
              
            </div>
            <div className="space-y-4">
              <h1 className="text-[#EA5C5F] text-lg text-start">Corporate Headquarters:</h1>
              <p>Level 7, Menara Darussalam, Kuala Lumpur, Malaysia</p>
            </div>
          </div>

          {/* Products Section */}
          <div className='md:flex flex-col hidden ml-28'>
            <h1 className="text-[#EA5C5F] text-lg text-start">Our Products</h1>
            <div className="text-start space-y-7 ">
              <a href="/towers_page">
                <p className="mt-4">Digital Twin</p>
              </a>
              <a href="/cv_page">
                <p className="mt-4">Computer Vision</p>
              </a>
              <a href="/aadhya_page">
                <p className="mt-4">Document Intelligence</p>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Footer Text */}
        <p className="lg:hidden flex mt-20 text-neutral-400">
          &copy; {new Date().getFullYear()} Mbstech.ai All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
