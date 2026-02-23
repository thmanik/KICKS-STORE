import { useRef, useContext, useMemo } from 'react';
import CategoryCard from '../shared/CategoryCard';
import { ProductContext } from '../../context/ProductContext';

const CategorySection = () => {
  const scrollRef = useRef(null);
  const { products } = useContext(ProductContext);

  const categories = useMemo(() => {
    if (!products || products.length === 0) return [];

    const uniqueCategories = [];
    const map = new Map();

    for (const product of products) {
      if (product.category && !map.has(product.category.id)) {
        map.set(product.category.id, true);
        
        const index = uniqueCategories.length;
        uniqueCategories.push({
          id: product.category.id,
          title: product.category.name.toUpperCase() + ' SHOES', 
          image: product.category.image, 
          bgColor: index % 2 === 0 ? 'bg-[#ECEEF0]' : 'bg-[#F6F6F6]'
        });
      }
      if (uniqueCategories.length >= 4) break; 
    }
    return uniqueCategories;
  }, [products]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.querySelector('div');
      if (cardElement) {
        const scrollAmount = cardElement.offsetWidth;
        if (direction === 'left') {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  if (categories.length === 0) return null;

  return (
    <section className=" py-1 md:py-5">
      <div className="max-w-[1200px] mx-auto bg-[#232321] p-4 md:p-0 md:pt-14 overflow-hidden">
        
        <div className="flex justify-between items-center mb-6 md:mb-12 px-2 md:px-14">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight">
            Categories
          </h2>
          <div className="flex gap-2">
            <button 
              disabled={categories.length <= 2}
              onClick={() => handleScroll('left')} 
              className="bg-[#3b3b38] p-2 rounded-lg text-white hover:bg-white hover:text-black transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#3b3b38] disabled:hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              disabled={categories.length <= 2}
              onClick={() => handleScroll('right')} 
              className="bg-[#FAFAFA] p-2 rounded-lg text-black hover:bg-kicks-blue hover:text-white transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#FAFAFA] disabled:hover:text-black"
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