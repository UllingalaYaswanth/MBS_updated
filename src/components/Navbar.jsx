import { Menu, X } from "lucide-react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open

  const navItems = [
    { label: "HOME", href: "#home", dropdownItems: [] },
    { label: "ABOUT US", href: "/about", dropdownItems: [] },
    { label: "SOLUTIONS", href: "#solutions",dropdownItems: [
      { label: 'Smart City Planing', href: '/Product1' },
      { label: 'Telecom Tower Reconstruction', href: '/Product2' },
      { label: 'Neural Farms', href: '/Product3' },
      { label: 'Intelligence Fod Tracker', href: '/Product4' },
      { label: 'AADHYA', href: '/Product5' },
    ] },
    { label: "TECHNOLOGIES", href: "#technologies",dropdownItems: [
      { label: 'Digital Twin', href: '/towers_page' },
      { label: 'Computer Vision', href: '/cv_page' },
      { label: 'Document Intelligence', href: '/aadhya_page' },
    ] },
    { label: "CONTACT US", href: "#footer", dropdownItems: [] },
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Toggle dropdown visibility
  };

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-xl border-neutral-200 px-2 pt-4">
      <div className=" px-5 lg:px-10 mx-auto lg:text-sm ">
        <div className="flex justify-between items-center ">
          <div className="flex flex-shrink-0 py-3 rounded-xl ml-0 sm:ml-0 lg:ml-10 ">
            <a href="/" className="flex items-center" onClick={() => window.location.reload()}>
              <img className="w-40 md:w-48 lg:w-48 py-1" src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Nav_logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="hover:text-[#FF6F20] focus:outline-none flex items-center"
                  aria-expanded={openDropdownIndex === index}
                >
                  <span className="flex items-center">
                    <a href={item.href} className="hover:text-[#FF6F20] md:text-md lg:text-lg">
                      {item.label}
                    </a>
                    {item.dropdownItems.length > 0 && <RiArrowDropDownLine className='w-8 h-8 ml-1' />}
                  </span>
                </button>
                {openDropdownIndex === index && item.dropdownItems.length > 0 && (
                  <ul className="absolute bg-[#E5E5E5] rounded-b-xl shadow-lg mt-1 p-1">
                    {item.dropdownItems.map((dropdownItem, i) => (
                      <li key={i} className="px-2 py-3 hover:bg-gray-200 hover:rounded-md text-white">
                        <a 
                          href={dropdownItem.href} 
                          className="text-gray-600 text-md" 
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          {dropdownItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
          <button 
            onClick={toggleNavbar}
            className="relative transition-all duration-300 ease-in-out"
          >
            <div className="transition-opacity duration-300 ease-in-out" style={{ opacity: mobileDrawerOpen ? 0 : 1 }}>
              <Menu className="absolute top-[-16px] right-[6px] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-opacity duration-300 ease-in-out" />
            </div>
            <div className="transition-opacity duration-300 ease-in-out" style={{ opacity: mobileDrawerOpen ? 1 : 0 }}>
              <X className="absolute top-[-16px] right-[6px] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-opacity duration-300 ease-in-out" />
            </div>
          </button>
        </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-200 w-full py-5 px-6 flex flex-col text-black rounded-xl lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="hover:text-[#FF6F20] focus:outline-none flex items-center"
                    aria-expanded={openDropdownIndex === index}
                  >
                    <span className="flex items-center">
                      <a href={item.href} className="hover:text-[#FF6F20] sm:text-lg md:text-xl md:text-xl mt-4">
                        {item.label}
                      </a>
                      {item.dropdownItems.length > 0 && <RiArrowDropDownLine className='w-8 h-8 ml-1 mt-3' />}
                    </span>
                  </button>
                  {openDropdownIndex === index && item.dropdownItems.length > 0 && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem, i) => (
                        <li key={i}>
                          <a href={dropdownItem.href} className="block text-gray-600 text-md hover:text-[#FF6F20]">{dropdownItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
