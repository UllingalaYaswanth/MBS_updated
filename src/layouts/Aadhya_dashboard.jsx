
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Aadya/Benefits";
import Collaboration from "../components/Aadya/Collaboration";
import Hero from "../components/Aadya/Hero";
import Pricing from "../components/Aadya/Pricing";
import Roadmap from "../components/Aadya/Roadmap";
import Solutions from "../components/Aadya/Solutions"; // Importing Solutions component
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Aadhya_dashboard = () => {
  return (
    <div className="bg-white text-neutral-600">
    <Navbar/>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Pricing />
        <Solutions /> 
        <Roadmap />
      </div>
      <ButtonGradient />
      <Footer/>
    </div>
  );
};

export default Aadhya_dashboard;


