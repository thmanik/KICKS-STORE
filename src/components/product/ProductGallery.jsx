import { useEffect } from 'react';

const ProductGallery = ({ images = [], getRoundingClass, activeThumb, setActiveThumb }) => {

  useEffect(() => {
    if (images?.length > 0) {
      const interval = setInterval(() => {
        setActiveThumb((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images?.length, setActiveThumb]);

  const displayImages = images?.length > 0 ? [...images] : [];
  while (displayImages.length > 0 && displayImages.length < 4) {
    displayImages.push(images[0]); 
  }

  return (
    <div className="lg:col-span-7 w-full">
      {/* MOBILE VIEW */}
      <div className="block lg:hidden">
        <div className="bg-[#ECEEF0] aspect-square flex items-center justify-center overflow-hidden rounded-b-[32px] transition-all duration-500">
          <img 
            src={images?.[activeThumb] || images?.[0]} 
            alt="Product" 
            className="w-full h-full object-contain p-6" 
          />
        </div>
        
        <div className="flex gap-3 px-4 mt-4 overflow-x-auto no-scrollbar">
          {images?.map((img, index) => (
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

      {/* DESKTOP VIEW: Unified Grid with 4 boxes */}
      <div className="hidden lg:grid grid-cols-2 gap-2 leading-[0]">
        {displayImages.slice(0, 4).map((img, index) => (
          <div 
            key={index} 
            className={`bg-[#ECEEF0] aspect-square flex items-center justify-center overflow-hidden ${getRoundingClass(index)}`}
          >
            <img 
              src={img} 
              alt={`Product ${index}`} 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500" 
              onError={(e) => { e.target.src = '/placeholder-shoe.png'; }} // Fallback for broken links
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;