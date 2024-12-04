import Navbar from '../components/Navbar';
import Hero from '../components/Towers/Hero';
import Highlights from '../components/Towers/Highlights';
// import Model from '../components/Towers/Model';
import Footer from '../components/Footer';
import About from '../components/Towers/About';
import Projects from '../components/Towers/Projects';
import Solution from '../components/Towers/Solution';
const Towers = () => {
  return (
    <main className="bg-white text-gray-800">
           <Navbar/>
      <div className='overflow-x-hidden'>
      <div id="home">
        <Hero />
      </div>
      <section id="about">
        <About />
      </section>
      <section className='max-w-7xl mx-auto'>
        <Projects/>
      </section>
      <section id="features">
        <Highlights />
      </section>
      <section className=''>
        <Solution/>
      </section>
      
        <Footer />
        </div>
    </main>
  );
}

export default Towers;
