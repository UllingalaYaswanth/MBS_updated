import Section from "./Section";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
      <div className="relative justify-center md:mb-[4rem] mt-5">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8">
            Tools for{" "}
        <span className=" bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
        specific industries
        </span>
        </h2>
      </div>
    </div>
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
