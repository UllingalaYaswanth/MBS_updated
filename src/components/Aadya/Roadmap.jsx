import Section from "./Section";
import { roadmap } from "../../constants";
import { grid, } from "../../assets";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl mb-10 md:mb-20">
          Explore{" "}
            <span className=" bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
            Our Features
            </span>
          </h2>
            </div>
    <div className=" px-5 lg:px-40 md:pb-10">
      

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-gray-200 text-black rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">

                    </div>
                  </div>
                  <div className="mb-10 -my-10 -mx-15">
                    {item.id === "0" && (
                      <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Features_Tailored_Intelligence.png" alt="Neural Networks" />
                    )}
                    {item.id === "1" && (
                      <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Features_Usage_Analysis.png" alt="IntelliSense" />
                    )}
                    {item.title === "Security" && (
                      <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Features_Security.png" alt="Security" />
                    )}
                    {item.title === "Sources" && (
                      <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Document_Intelligence/Features_Sources.png" alt="Sources" />
                    )}
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-white">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  </Section>
);

export default Roadmap;
