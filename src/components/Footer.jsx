import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/img/Group 8@2x.png";

const Footer = () => {

  return (
    <footer className="bg-footer-gradient rounded-t-[56px] opacity-100 text-white">
      <div className="px-40 mx-auto text-center flex flex-col md:flex-row justify-between items-center h-full space-y-6 md:space-y-0 py-14">
        <div className="text-center text-xs py-10 flex flex-col flex-between">
          <a href='#'>
            <img src={logo} alt="Logo" width={200} height={30} className="mr-6" />
          </a>
          <p className='mt-20 text-neutral-400'>&copy; {new Date().getFullYear()} Mbstech.ai All rights reserved.</p>
        </div>
        <div className='flex gap-40'>
        <div className='flex flex-col gap-10'>
            <div className='space-y-4'>
                <h1 className='text-[#EA5C5F] text-lg text-start'>Call</h1>
                <p>+971 4 222 7307</p>
            </div>
            <div className='space-y-4'>
            <h1 className='text-[#EA5C5F] text-lg text-start'>Email</h1>
                <p>info@mbstech.ai</p>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <div className='space-y-4'>
                <h1 className='text-[#EA5C5F] text-lg text-start'>Global Headquarters:</h1>
                <p>
                  Level 7, Menara Darussalam, Kuala Lumpur, Malaysia
                </p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-[#EA5C5F] text-lg text-start'>Corporate Headquarters:</h1>
                <p>
                  201, Building 10, Bay Square, Business Bay, Dubai, UAE
                </p>
            </div>
        </div>
        <div className=''>
                <h1 className='text-[#EA5C5F] text-lg text-start'>Our Products</h1>
                <div className='text-start space-y-7 mt-4'>
                <a href='/towers_page' ><p className='mt-4'>Digital Twin</p></a>
                <a href='/cv_page' ><p className='mt-4'>Computer Vision</p></a>
                <a href='/aadhya_page' ><p className='mt-4'>Document Intelligence</p></a>
        </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
