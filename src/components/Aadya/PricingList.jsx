// import { pricing } from "../../constants";

// const PricingList = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-lg:flex-wrap">
//       {pricing.map((item) => (
//         <div
//           key={item.id}
//           className="w-full h-full px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:my-4"
//         >
//           <h4 className="h4 mb-4 ">{item.title}</h4>

//           <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
//             {item.Key_Solutions}
//           </p>

//           {/* Removed the Impact section */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PricingList;

import { pricing } from "../../constants";

const PricingList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-full bg-gray-200 text-white  rounded-[2rem] px-6 py-8 even:py-14 odd:my-4 flex flex-col"
        >
          <h4 className="h4 mb-4 text-center text-lg font-semibold"> {/* Adjust the font size here */}
            {item.title}
          </h4>

          <p className="body-2 min-h-[4rem] mb-3 flex-grow text-center">
            {item.Key_Solutions}
          </p>

          {/* Removed the Impact section */}
        </div>
      ))}
    </div>
  );
};

export default PricingList;
