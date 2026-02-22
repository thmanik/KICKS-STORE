import { useRef } from 'react';
import CategoryCard from '../shared/CategoryCard';


const CategorySection = () => {
  const scrollRef = useRef(null);

  const categories = [
    { id: 1, title: 'LIFESTYLE SHOES', image: '/src/assets/lifestyle.png', bgColor: 'bg-[#ECEEF0]' },
    { id: 2, title: 'BASKETBALL SHOES', image: '/src/assets/basketball.png', bgColor: 'bg-[#F6F6F6]' },
    { id: 3, title: 'RUNNING SHOES', image: '/src/assets/lifestyle.png', bgColor: 'bg-[#ECEEF0]' },
    { id: 4, title: 'CASUAL SHOES', image: '/src/assets/basketball.png', bgColor: 'bg-[#F6F6F6]' },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // Vertical slide for mobile (2 cards)
        const scrollAmount = direction === 'left' ? -640 : 640;
        scrollRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        // Horizontal slide for desktop (container width)
        const scrollAmount = direction === 'left' ? -scrollRef.current.offsetWidth : scrollRef.current.offsetWidth;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className=" py-1 md:py-5">
      <div className="max-w-[1200px] mx-auto bg-[#232321] p-4 md:p-0 md:pt-14 overflow-hidden">
        
        <div className="flex justify-between items-center mb-6 md:mb-12 px-2 md:px-14">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight">
            Categories
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => handleScroll('left')} 
              className="bg-[#3b3b38] p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all active:scale-90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => handleScroll('right')} 
              className="bg-[#FAFAFA] p-2 rounded-lg text-black hover:bg-kicks-blue hover:text-white transition-all active:scale-90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="grid grid-cols-1 h-[640px] overflow-y-hidden rounded-tl-[40px] md:rounded-tl-[48px] md:flex md:flex-row md:h-auto md:ml-14 md:overflow-x-hidden scroll-smooth px-2 md:px-0"
        >
          {categories.map((cat) => (
            <div key={cat.id} className="w-full md:w-1/2 md:flex-none shrink-0">
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;