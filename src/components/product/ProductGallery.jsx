import { useState, useEffect } from 'react';

const ProductGallery = ({ images, getRoundingClass }) => {
  const [activeThumb, setActiveThumb] = useState(0);

  // Auto-slide logic for Mobile (Every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThumb((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="lg:col-span-7 w-full">
      
      {/* MOBILE VIEW: Single Featured Image + Thumbnails */}
      <div className="block lg:hidden">
        {/* Main Featured Image */}
        <div className="bg-[#ECEEF0] aspect-square flex items-center justify-center overflow-hidden rounded-b-[32px] transition-all duration-500">
          <img 
            src={images[activeThumb]} 
            alt="Product" 
            className="w-full h-full object-contain p-6 transition-opacity duration-500" 
          />
        </div>
        
        {/* Clickable Thumbnails */}
        <div className="flex gap-3 px-4 mt-4 overflow-x-auto no-scrollbar">
          {images.map((img, index) => (
            <button 
              key={index} 
              onClick={() => setActiveThumb(index)}
              className={`min-w-[75px] h-[75px] bg-[#ECEEF0] rounded-2xl flex items-center justify-center p-2 border-2 cursor-pointer transition-all shrink-0 ${
                activeThumb === index ? 'border-kicks-blue shadow-md' : 'border-transparent opacity-60'
              }`}
            >
              <img src={img} alt="Thumb" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW: Unified Grid (Hidden on Mobile) */}
      <div className="hidden lg:grid grid-cols-2 gap-2 leading-[0]">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`bg-[#ECEEF0] aspect-square flex items-center justify-center overflow-hidden ${getRoundingClass(index)}`}
          >
            <img 
              src={img} 
              alt="Product" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500" 
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductGallery;