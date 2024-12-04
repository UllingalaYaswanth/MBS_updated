// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { footerLinks } from "../constants";
// import logo from "../assets/logo_1.png";

// const Footer = () => {
//   return (
//     <footer className="border-t border-neutral-700">
//       <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center h-full space-y-6 md:space-y-0 py-14">
//         <div className="text-center text-xs py-3 flex flex-col flex-between">
//         <a href='#'><img src={logo} alt="Logo" width={200} height={30} className="mr-6 py-3" /></a>
//         <p className='mt-6 text-neutral-400'>&copy; {new Date().getFullYear()} Mbstech.ai All rights reserved.</p>
//         </div>
//         <div className="space-y-3 flex flex-col ">
//           {footerLinks.map((link, index) => (
//             <a key={index} href={link.href} className="hover:text-[#FF6F20]">
//               {link.text}
//             </a>
//           ))}
//         </div>
//         <div className='space-y-3'>
//           <h1 className='font-semibold'>Follow Us</h1>
//           <div className='space-x-5'>
//             <a href="https://www.linkedin.com/company/mbs-global-investments/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF6F20]">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//             <a href="mailto:mbstect.ai@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF6F20]">
//               <FontAwesomeIcon icon={faEnvelope} />
//             </a>
//           </div>
//         </div>
//       </div>
      
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/img/Group 8@2x.png";
import { navItems } from "../constants";

const Footer = () => {

  return (
    <footer className="bg-footer-gradient rounded-t-[56px] opacity-100 text-white">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center h-full space-y-6 md:space-y-0 py-14">
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
                <p>+97 236 456780</p>
            </div>
            <div className='space-y-4'>
            <h1 className='text-[#EA5C5F] text-lg text-start'>Email</h1>
                <p>info@mbstech.ai</p>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <div className='space-y-4'>
                <h1 className='text-[#EA5C5F] text-lg text-start'>location</h1>
                <p>Lorem ipsum dolor sit amet, adipiscing elit</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-[#EA5C5F] text-lg text-start'>Social network</h1>
                <div className='space-x-5 text-start'>
                <a href="https://www.linkedin.com/company/mbs-global-investments/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF6F20]">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF6F20]">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF6F20]">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="mailto:mbstect.ai@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF6F20]">
                <FontAwesomeIcon icon={faEnvelope} />
                </a>

                </div>
            </div>
        </div>
        <div className=''>
                <h1 className='text-[#EA5C5F] text-lg text-start'>Our Products</h1>
                <div className='text-start space-y-7 mt-4'>
                <a href='/towers_page' ><p className='mt-4'>Digital Twin</p></a>
                <a href='/cv_page' ><p  className='mt-4'>Computer Vision</p></a>
                <a href='/aadhya_page' ><p className='mt-4'>Document Intelligence</p></a>
                </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
