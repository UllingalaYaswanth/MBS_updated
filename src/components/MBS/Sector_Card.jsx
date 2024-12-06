import React from 'react';

function Sector_Card({ title, subtitle, description, imageSrc }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg  overflow-hidden">
      <div className="p-4 flex items-center gap-2">
      <p
        className='w-[7px] h-[20px]'
        style={{
          background: 'transparent linear-gradient(197deg, #FFBA53 0%, #D86A26 51%, #980866 100%) 0% 0% no-repeat padding-box'
        }}
      ></p>
      <h2
        className="text-xl lg:text-2xl text-gray-800 font-semibold "
      >
        {title}
      </h2>
      </div>
      <div className="w-full h-48 overflow-hidden">
        
        <img 
          src={imageSrc} 
          alt="Card Image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="py-6">
        {subtitle && <h3 className="text-xl font-semibold text-gray-800">{subtitle}</h3>}
        <p className="mt-4 text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Sector_Card;
