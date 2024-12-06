import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../../constants";

const CaseStudy = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className="text-3xl md:text-5xl lg:text-7xl text-center mt-6 tracking-wide font-semibold">
      Why Choose  {" "}
        <span className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
        Us
        </span>
      </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="py-2 w-full mt-12 ">
          <img src="https://mbs-data-bucket.s3.ap-south-1.amazonaws.com/website/images/Mbs_main/Why_choose_us.png" alt="Coding" className="w-[100%] md:h-[90%] lg:h-[80%] items-center" />
        </div>
        <div className="my-14 md:h-[86%] lg:h-[685px] 2xl:h-[77%] pe-10 overflow-y-scroll scrollbar-hide">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-red-400 mx-6 bg-neutral-100 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl md:text-2xl lg:text-3xl">{item.title}</h5>
                <p className="text-lg md:text-xl lg:text-2xl text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
          <a
          href="/about"
          className="bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text mx-3 text-lg md:text-xl lg:text-2xl font-semibold ml-10 hover:border-b"
        >
          Learn More
        </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
