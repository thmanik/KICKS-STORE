import { useContext, useMemo } from 'react';
import { Facebook, Instagram, Twitter, Music2 } from 'lucide-react';

import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext';

const FooterBottom = () => {
  const { products } = useContext(ProductContext);

  const dynamicCategories = useMemo(() => {
    if (!products || products.length === 0) return ['Sneakers', 'Running', 'Basketball', 'Outdoor'];
    
    const categories = products
      .map(p => p.category?.name)
      .filter((name, index, self) => name && self.indexOf(name) === index);
      
    return categories.slice(0, 6); 
  }, [products]);

  return (
    <div className="w-full bg-kicks-dark rounded-[48px] relative z-[50] -mt-20 md:-mt-24 pt-10 md:pt-16 pb-0 flex flex-col justify-between overflow-hidden min-h-[500px] md:min-h-[400px] shadow-2xl">
      
      <div className="px-8 md:ps-16 md:pe-0.5 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 relative z-30">
        
        <div className="md:col-span-5 space-y-4 text-left">
          <h4 className="text-kicks-yellow font-bold text-2xl tracking-tight">About us</h4>
          <p className="text-white/80 text-md font-normal leading-relaxed max-w-[320px] capitalize">
            We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-kicks-yellow font-bold text-2xl tracking-tight">Categories</h4>
          <ul className="text-white/90 space-y-2 text-md font-normal capitalize">
            {dynamicCategories.map((item) => (
              <li key={item}>
                <Link 
                  to={`/category/${item.toLowerCase()}`} 
                  className="hover:text-kicks-blue transition-all cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-kicks-yellow font-bold text-2xl tracking-tight">Company</h4>
          <ul className="text-white/90 space-y-2 text-md font-normal capitalize">
            {['About', 'Contact', 'Blogs'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-kicks-blue transition-all cursor-pointer">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-kicks-yellow font-bold text-2xl tracking-tight">Follow us</h4>
          <div className="flex gap-4 text-white">
             <Facebook size={22} strokeWidth={2.5} className="cursor-pointer hover:text-kicks-blue transition-all" />
             <Instagram size={22} strokeWidth={2.5} className="cursor-pointer hover:text-kicks-blue transition-all" />
             <Twitter size={22} strokeWidth={2.5} className="cursor-pointer hover:text-kicks-blue transition-all" />
             <Music2 size={22} strokeWidth={2.5} className="cursor-pointer hover:text-kicks-blue transition-all" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end mt-12 px-4">
         <img 
            src="/src/assets/LogoWhite.svg" 
            alt="Kicks Logo" 
            className="w-full max-w-[95%] md:max-w-[1150px] h-auto object-contain select-none opacity-100"
            style={{ marginBottom: '-4%' }} 
         />
      </div>
    </div>
  );
};

export default FooterBottom;