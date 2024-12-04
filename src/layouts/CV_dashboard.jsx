import Head from "../components/CV/CVhead";
import Features from "../components/CV/CVfeatures";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CV from "../components/CV/CV";
import About from "../components/CV/CVabout";
import Rust from "../components/CV/CVrust";
import Feature from "../components/CV/feature";
const CV_dashboard = () => {
    return (
      <div className="bg-white text-gray-800">
        <Navbar />
        <div className="overflow-x-hidden">
        <div id="home">
          <CV />
        </div>
        <div id="about" className="py-10">
          <Head />
        </div>
        <div  className="py-10">
          <About />
        </div>
        <div id="rust" className="py-10">
          <Rust />
        </div>
        <div className="pt-10 px-6">
        <div id="feature" className="py-20">
          <Feature />
        </div>
        <div id="features" className="py-20">
          <Features />
        </div>
        </div>
        <Footer />
        </div>
      </div>
    );
  };
  
  export default CV_dashboard;