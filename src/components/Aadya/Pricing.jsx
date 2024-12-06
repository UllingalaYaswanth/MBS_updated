import Section from "./Section";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2 mb-20">
      <div className="hidden relative justify-center mb-[4rem] lg:flex">
      <div className="text-center">
        <h2 className="h2 mb-4 md:mb-8">
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
