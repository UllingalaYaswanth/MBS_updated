import { benefits } from "../../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../../assets/svg/ClipPath";

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

      {/* <div className="container relative z-2">
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[4rem] pointer-events-none bg-gray-200 rounded-2xl">
                <h5 className="h5 mt-5 text-white">{item.title}</h5>
                <p className=" mt-6 text-n-3 text-white">{item.text}</p>
              </div>

        

              <div
                className="absolute inset-0.5 bg-n-8"
                // style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={250}
                      height={250}
                      alt={item.title}
                      className="mx-auto pt-12 object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div> */}
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
