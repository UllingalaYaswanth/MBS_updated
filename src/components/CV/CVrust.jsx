
import { motion } from 'framer-motion';

const Rust = () => {
  return (
    <section className="w-full relative">
      <div className="h-5/6 w-[80%] mx-auto flex flex-col">
        <div className="w-full grid lg:grid-cols-2 items-center justify-start gap-4 py-20">
          <motion.img
            id="about-image"
            src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Computer_Vision/Advance_Defect_Detection.png"
            className="w-full md:w-[95%] rounded order-1 lg:order-1"
            alt="About Image"
            initial={{ scale: 1.5, opacity: 0, x: 150 }} // Initial state (zoomed in and off to the right)
            whileInView={{ scale: 1, opacity: 1, x: 0 }} // Final state (zoomed out and centered)
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          <div className="flex flex-col justify-center items-start order-2 lg:order-2">
            <motion.h1
              id="about-content"
              className="text-2xl font-semibold md:text-4xl leading-relaxed"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Advanced Defect Detection in Power Plant
            </motion.h1>
            <motion.p
              id="about-content"
              className="text-md text-gray-500 leading-relaxed mt-5"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Our inaugural project focused on developing a robust system for detecting rust in power
              plant infrastructure. By using drones and advanced image processing techniques, we
              demonstrated how computer vision can significantly enhance maintenance protocols. This
              project not only showcased our technical expertise but also positioned us as a reliable
              partner in the energy sector, leading to further collaborations with power utilities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rust;
