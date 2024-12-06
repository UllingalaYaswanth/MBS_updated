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