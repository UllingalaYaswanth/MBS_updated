import React from 'react';
import { useParams } from 'react-router-dom';
import { explore1Img, explore2Img } from '../../utils'; // Import the same images used in Products.js

const SolutionDetail = () => {
  const { id } = useParams(); // Get the solution ID from the URL
  const solutions = [
    {
      id: 1,
      title: 'Titanium Feature',
      subHeading: 'Powerful and reliable',
      image: explore1Img,
      description: 'This solution provides powerful and reliable performance for your system...',
    },
    {
      id: 2,
      title: 'Innovation in Every Pixel',
      subHeading: 'Explore cutting-edge technology',
      image: explore2Img,
      description: 'Our innovative design brings technology into every pixel...',
    },
    {
      id: 3,
      title: 'Performance Redefined',
      subHeading: 'Unleash the potential of your system',
      image: explore2Img,
      description: 'This solution redefines performance to push your system to new heights...',
    },
    {
      id: 4,
      title: 'Seamless Integration',
      subHeading: 'Effortlessly connect with your existing tools',
      image: explore2Img,
      description: 'Easily integrate with your current ecosystem...',
    },
    {
      id: 5,
      title: 'Optimized Experience',
      subHeading: 'Fast, efficient, and user-friendly',
      image: explore2Img,
      description: 'Optimizing for speed and efficiency...',
    },
    {
      id: 6,
      title: 'Innovation at Scale',
      subHeading: 'For businesses that demand the best',
      image: explore2Img,
      description: 'Scalable and efficient solutions for businesses...',
    },
  ];

  const solution = solutions.find((sol) => sol.id === parseInt(id)); // Find the selected solution by id

  if (!solution) {
    return <p>Solution not found.</p>;
  }

  return (
    <section className="bg-zinc-800 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold">{solution.title}</h1>
          <p className="text-xl text-gray-400">{solution.subHeading}</p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8">
          <img src={solution.image} alt={solution.title} className="w-full md:w-1/2 h-[50vh] object-cover rounded-lg" />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p>{solution.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetail;
