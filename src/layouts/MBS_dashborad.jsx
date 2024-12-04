import Navbar from "../components/Navbar";
import HeroSection from "../components/MBS/HeroSection";
import Footer from "../components/Footer";
import Products from "../components/MBS/Products";
import CaseStudy from "../components/MBS/CaseStudy";
import Sector from "../components/MBS/Sector";

const MBS = () => {
  return (
    <>
      <div className="bg-white text-neutral-800">
     <Navbar/>
      <div className="overflow-x-hidden ">
      <div id="home">
        <HeroSection />
      </div>
      <div id="features" className="py-5 pt-5">
          <Sector/>
        </div>
        <div id="solutions" className="py-5 pt-5">
        <Products/>
        </div>
      <div id="products" className=" pt-5" >
          <CaseStudy />
      </div>
      <div id="footer" className="">
        <Footer />
        </div>
      </div>
      </div>
    </>
  );
};

export default MBS;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "../components/Navbar";
// import HeroSection from "../components/MBS/HeroSection";
// import FeatureSection from "../components/MBS/FeatureSection";
// import Workflow from "../components/MBS/Workflow";
// import Footer from "../components/Footer";
// import Products from "../components/MBS/Products";
// import { navItems } from "../constants";
// import About from "../components/MBS/About";
// import CaseStudy from "../components/MBS/CaseStudy";
// import Sector from "../components/MBS/Sector";
// import SolutionDetail from "../components/MBS/SolutionDetail"; // Solution detail page component

// // Main content layout for MBS page
// const MBSContent = () => (
//   <div className="bg-white text-neutral-800">
//     <Navbar navItems={navItems} />
//     <div className="overflow-x-hidden">
//       <div id="home">
//         <HeroSection />
//       </div>
//       <div id="features" className="py-20">
//         <Sector />
//       </div>
//       <Products /> {/* This will display all the solutions with links to the details page */}
//       <div id="workflow" className="py-10">
//         <CaseStudy />
//       </div>
//       {/* Uncomment if you want to include the About section */}
//       {/* <div id="about" className="py-20">
//         <About />
//       </div> */}
//       <Footer />
//     </div>
//   </div>
// );

// // Main App component with routing
// const MBS = () => (
//   <Router>
//     <Routes>
//       {/* Route for the MBS main content */}
//       <Route path="/" element={<MBSContent />} />
//       {/* Route for individual solution details based on :id */}
//       <Route path="/solution/:id" element={<SolutionDetail />} />
//     </Routes>
//   </Router>
// );

// export default MBS;
