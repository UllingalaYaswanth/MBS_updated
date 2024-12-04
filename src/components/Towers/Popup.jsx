import React, { useRef, useEffect, useState } from 'react';

const Popup = ({ isOpen, onClose, videoSrc, content }) => {
  const popupRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-opacity-50 mt-10">
      <div className="text-neutral-700 bg-[#F3F4F4] p-6 rounded-xl shadow-lg items-center text-black md:flex gap-10 space-y-5 mx-3 h-[80%] max-w-[80%] mx-auto my-auto " ref={popupRef}>
        <div>
        {hasError ? (
        <img src={videoSrc} className='w-full md:w-[500px] order-0 lg:order-1 rounded-md' alt="Fallback" />
      ) : (
        <video 
          src={videoSrc} 
          autoPlay 
          muted 
          loop 
          className='md:w-[500px] rounded-md' 
          onError={() => setHasError(true)} 
        />
      )}
        </div>
        <div className="max-w-3xl">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
