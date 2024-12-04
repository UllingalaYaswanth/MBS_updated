import { motion } from 'framer-motion';

const Head = () => {
  return (
    <section className="w-full relative">
      <div className="h-5/6 w-[80%] mx-auto flex-center flex-col">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our {" "}
          <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
            Projects
          </span>
          </h2>
      </div>
        <div className="w-full grid lg:grid-cols-2 items-center justify-start gap-4 py-20">
          <motion.video
            id="about-image"
            src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/videos/CV_Disaster_Response.mp4"
            autoPlay
            loop
            muted
            className="md:w-[90%] rounded"
            initial={{ scale: 1.5, opacity: 0, x: 150 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }} 
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          <div className=''>
            <motion.h1
              id="about-content"
              className="text-2xl md:text-4xl font-bold leading-relaxed text-center lg:text-left"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Revolutionizing Disaster Response
            </motion.h1>
            <motion.p
              id="about-content"
              className="text-md text-gray-500 leading-relaxed mt-5 lg:text-left"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Utilizing advanced image processing techniques and artificial intelligence, we have developed a robust system that can analyze aerial imagery and satellite data to detect and assess flood-affected areas in real time.
            </motion.p>
            <motion.ul
              id="about-content"
              className="list-disc text-gray-500 list-inside  mt-4 text-md md:text-lg"
              initial={{ x: -100, opacity: 0 }} // Initial state (off-screen to the left)
              whileInView={{ x: 0, opacity: 1 }} // Final state (slide in from left)
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <li><strong>Rapid Damage Assessment:</strong> Automatically identifies submerged structures, damaged infrastructure, and affected vegetation to prioritize relief efforts.</li>
              <li><strong>Real-Time Monitoring:</strong> Continuously processes imagery to track flooding and its impact on communities and the environment.</li>
              <li><strong>Predictive Analytics:</strong> Integrates historical data with real-time observations to predict flood risks and offer insights for disaster preparedness.</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
