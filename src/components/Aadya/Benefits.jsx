import { benefits } from "../../constants";
import Section from "./Section";


const Benefits = () => {
  return (
    <Section id="features">
      <div className="flex justify-center items-center relative z-2">
        <h2 className="h2 mb-4 md:mb-8  text-center md:max-w-md lg:max-w-2xl">
          Chat Smarter{" "}
          <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
            Not Harder with Adhya
          </span>
       </h2>
      </div>
      <div className="container grid lg:grid-cols-3 gap-20 mt-10">
        {benefits.map((items,index) => (
          <div key={index} className="text-black bg-gray-200 p-10 items-center rounded-2xl">
            <h1 className="text-xl font-semibold text-center">{items.title}</h1>
            <p className="mt-5 px-5">{items.text}</p>
          </div>
        ))}
        <div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
