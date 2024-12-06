import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="w-full relative">
      <div className="h-5/6 w-full mx-auto flex flex-col ">
        <div className="md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2 items-center md:items-center gap-4 py-10 space-y-10 md:space-y-0">
          <motion.div
            className="flex flex-col justify-center order-1 md:order-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h1 className="text-2xl md:text-4xl leading-relaxed font-bold text-center lg:text-left">
              Revolutionizing Agriculture with Computer Vision
            </h1>
            <motion.p
              className="text-md md:text-md text-gray-500 leading-relaxed mt-4 md:mt-7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              Computer vision is transforming the agricultural industry by enabling the detection of plant diseases in real time. By analyzing high-resolution images of crops, it can identify signs of disease early on, allowing farmers to take preventative actions. This automated detection system ensures more accurate monitoring of crop health, leading to increased yields and sustainable farming practices. With advanced AI models, each area of concern is highlighted with confidence scores, empowering decision-making for better resource management and healthier crops.
            </motion.p>
          </motion.div>
          <motion.img
            src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Computer_Vision/Revolutionizing_Agriculture.jpg"
            className="md:w-[90%] rounded order-0 lg:order-1"
            alt="About Image"
            initial={{ scale: 1.5, opacity: 0, x: window.innerWidth < 768 ? 0 : 150 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
