import { useState } from 'react';

const Hero = () => {
  const productImages = [
    { id: 1, url: '../../src/assets/shoe-side-1.jpg', name: 'NIKE AIR MAX' },
    { id: 2, url: '../../src/assets/shoe-side-2.jpg', name: 'NIKE AIR MAX SIDE' },
    { id: 3, url: '../../src/assets/shoe-side-3.jpg', name: 'NIKE AIR MAX BACK' },
  ];

  const [activeImage, setActiveImage] = useState(productImages[0]);
  const thumbnails = productImages.filter(img => img.id !== activeImage.id);

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-4 md:mt-6 mb-10 md:mb-20 px-2 md:px-4">
      
      <div className="text-center relative z-0 pb-2 md:pb-14 my-4 mb-8 md:mb-16">
  {/* whitespace-nowrap text-ke bhenge jete dibe na */}
  <h1 className="text-[38px] sm:text-[60px] md:text-[110px] lg:text-[160px] xl:text-[170px] font-black 
    tracking-[1px]  
    leading-[1] md:leading-[0.75] 
    uppercase whitespace-nowrap">
    DO IT <span className="text-kicks-blue">RIGHT</span>
  </h1>
</div>

      {/* 2. Main Hero Card - Height adjusted for mobile */}
      <div className="relative mt-[-20px] md:mt-[-70px] h-[520px] md:h-[650px] w-full bg-kicks-black rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl">
        
        {/* Main Image */}
        <img 
          key={activeImage.id}
          src={activeImage.url} 
          alt={activeImage.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Shadow Overlay - Slightly stronger on mobile for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:via-black/10"></div>

        
<div className="absolute top-0 md:top-12 left-0 z-20">
  <div className="bg-[#232321] text-white text-[10px] md:text-[13px] font-medium px-4 md:px-7 py-1.5 md:py-3
    rounded-tl-2xl rounded-bl-2xl uppercase tracking-[0.2em] 
    [writing-mode:vertical-lr] rotate-180 flex items-center justify-center 
    border-y border-r border-white/10 shadow-xl">
    Nike product of the year
  </div>
</div>

        {/* 3. Content Area */}
        <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-end md:justify-between z-10">
          
          <div className="hidden md:block"></div> {/* Top spacer for desktop */}

          <div className="relative w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            
            {/* Info Section */}
            <div className="w-full md:max-w-xl text-left order-2 md:order-1">
              <h2 className="text-white text-3xl md:text-7xl font-black italic mb-2 md:mb-3 uppercase leading-none tracking-tight">
                {activeImage.name}
              </h2>
              <p className="text-zinc-200 mb-6 md:mb-8 text-xs md:text-lg font-medium opacity-90 max-w-[280px] md:max-w-sm">
                Nike introducing the new air max for everyone's comfort
              </p>
              <button className="bg-kicks-blue hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold uppercase text-[12px] md:text-sm tracking-widest transition-all active:scale-95 shadow-lg">
                Shop Now
              </button>
            </div>

            {/* Thumbnails Section - Row on mobile, Column on desktop */}
            <div className="flex flex-row md:flex-col gap-3 md:gap-4 mb-4 md:mb-0 order-1 md:order-2">
              {thumbnails.map((img) => (
                <div 
                  key={img.id}
                  onClick={() => setActiveImage(img)}
                  className="w-16 h-16 md:w-40 md:h-40 rounded-[16px] md:rounded-[40px] border-2 md:border-4 border-white overflow-hidden cursor-pointer hover:scale-105 transition-all shadow-2xl p-0"
                >
                  <img 
                    src={img.url} 
                    className="w-full h-full object-cover" 
                    alt="thumbnail" 
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;