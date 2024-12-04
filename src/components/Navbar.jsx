// import { Menu, X } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import logo from "../assets/logo_1.png";
// import { navItems } from "../constants";
// import { RiArrowDropDownLine } from "react-icons/ri";

// function Dropdown({ items, onClose }) {
//   const maxWidth = Math.max(...items.map(item => item.label.length)) * 10; 
//   return (
//     <ul style={{ width: `${maxWidth}px` }} className='absolute bg-[#0000009C] rounded-b-xl shadow-lg mt-1 p-1'>
//       {items.map((item, index) => (
     
//           <a href={item.href} key={index} className=' text-gray-600 text-md' >
//             <li  className='px-2 py-3 hover:bg-gray-200 hover:rounded-md text-white' onClick={onClose}>
//               {item.label}
//             </li>
//           </a>
        
//       ))}
//     </ul>
//   );
// }


// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(null);
//   const dropdownRef = useRef(null);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   const toggleDropdown = (index) => {
//     setDropdown(dropdown === index ? null : index);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 border-b backdrop-blur-xl border-neutral-200 px-2 pt-4">
//       <div className="px-12 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0 p-3 rounded-xl">
            
//           <a href="/" className="flex items-center" onClick={() => window.location.reload()}>
//             <img className="w-48 mr-2 ml-10 py-1" src={logo} alt="Logo" />
//           </a>
//           </div>
//          <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
//             {navItems.map((item, index) => (
//               <li key={index} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="hover:text-[#FF6F20] focus:outline-none flex items-center"
//                   aria-expanded={dropdown === index}
//                 >
//                   <span className="flex items-center">
//                   <a
//                    href={item.href}
//                    className="hover:text-[#FF6F20]"
//                  >
//                    {item.label}
//                  </a>
//                     {item.label === 'Products' && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
//                   </span>
//                 </button>
//                 {dropdown === index && item.dropdownItems && item.dropdownItems.length > 0 && (
//                   <div ref={dropdownRef}>
//                     <Dropdown items={item.dropdownItems} onClose={() => setDropdown(null)} />
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="hover:text-[#FF6F20] focus:outline-none flex items-center"
//                   aria-expanded={dropdown === index}
//                 >
//                   <span className="flex items-center">
//                   <a
//                    href={item.href}
//                    className="hover:text-[#FF6F20]"
//                  >
//                    {item.label}
//                  </a>
//                     {item.label === 'Products' && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
//                   </span>
//                 </button>
//                 {dropdown === index && item.dropdownItems && item.dropdownItems.length > 0 && (
//                   <div ref={dropdownRef}>
//                     <Dropdown items={item.dropdownItems} onClose={() => setDropdown(null)} />
//                   </div>
//                 )}
//               </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo_1.png";
import { navItems } from "../constants";
import { RiArrowDropDownLine } from "react-icons/ri";

function Dropdown({ items, onClose, selectedIndex, onSelectIndex }) {
  const maxWidth = Math.max(...items.map(item => item.label.length)) * 10; 
  return (
    <ul
      style={{ width: `${maxWidth}px` }}
      className='absolute bg-[#0000009C] rounded-b-xl shadow-lg mt-1 p-1'
    >
      {items.map((item, index) => (
        <a href={item.href} key={index} className='text-gray-600 text-md'>
          <li
            className={`px-2 py-3 hover:bg-gray-200 hover:rounded-md text-white ${
              selectedIndex === index ? "bg-gray-500" : ""
            }`}
            onClick={() => { onSelectIndex(index); onClose(); }}
            onMouseEnter={() => onSelectIndex(index)} // To select item on hover
          >
            {item.label}
          </li>
        </a>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
    setSelectedDropdownIndex(null); // Reset selection when dropdown is toggled
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(null);
    }
  };

  const handleKeyDown = (event) => {
    if (dropdown === null || selectedDropdownIndex === null) return;

    if (event.key === 'ArrowDown') {
      setSelectedDropdownIndex((prevIndex) => Math.min(items.length - 1, prevIndex + 1));
    } else if (event.key === 'ArrowUp') {
      setSelectedDropdownIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (event.key === 'Enter') {
      const selectedItem = items[selectedDropdownIndex];
      window.location.href = selectedItem.href; // Navigate to selected item
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdown, selectedDropdownIndex]);

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-xl border-neutral-200 px-2 pt-4">
      <div className="px-12 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 p-3 rounded-xl">
            <a href="/" className="flex items-center" onClick={() => window.location.reload()}>
              <img className="w-48 mr-2 ml-10 py-1" src={logo} alt="Logo" />
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="hover:text-[#FF6F20] focus:outline-none flex items-center"
                  aria-expanded={dropdown === index}
                >
                  <span className="flex items-center">
                    <a href={item.href} className="hover:text-[#FF6F20]">
                      {item.label}
                    </a>
                    {item.label === 'Products' && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
                  </span>
                </button>
                {dropdown === index && item.dropdownItems && item.dropdownItems.length > 0 && (
                  <div ref={dropdownRef}>
                    <Dropdown
                      items={item.dropdownItems}
                      onClose={() => setDropdown(null)}
                      selectedIndex={selectedDropdownIndex}
                      onSelectIndex={setSelectedDropdownIndex}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center text-white lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="hover:text-[#FF6F20] focus:outline-none flex items-center"
                    aria-expanded={dropdown === index}
                  >
                    <span className="flex items-center">
                      <a href={item.href} className="hover:text-[#FF6F20]">
                        {item.label}
                      </a>
                      {item.label === 'Products' && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
                    </span>
                  </button>
                  {dropdown === index && item.dropdownItems && item.dropdownItems.length > 0 && (
                    <div ref={dropdownRef}>
                      <Dropdown
                        items={item.dropdownItems}
                        onClose={() => setDropdown(null)}
                        selectedIndex={selectedDropdownIndex}
                        onSelectIndex={setSelectedDropdownIndex}
                      />
                    </div>
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
