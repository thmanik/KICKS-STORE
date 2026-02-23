import { useContext, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext';

const NavLinks = ({ mobileMode = false, setMobileMenu }) => {
  const { categories, loading } = useContext(ProductContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);


  const handleLinkClick = () => {
    setIsCategoryOpen(false); 
    if (mobileMode && setMobileMenu) {
      setMobileMenu(false); 
    }
  };

  const toggleCategory = (e) => {
    if (mobileMode) {
      e.preventDefault();
      e.stopPropagation();
      setIsCategoryOpen(!isCategoryOpen);
    }
  };

  const listClasses = mobileMode 
    ? "flex flex-col gap-4 text-[16px] w-full" 
    : "flex items-center gap-8 text-[14px]";

  return (
    <ul className={`${listClasses} font-bold tracking-tight text-black`}>
      
      <li className="cursor-pointer hover:text-zinc-600 transition-colors">
        <Link to="/" onClick={handleLinkClick} className="block w-full">
          New Drops 🔥
        </Link>
      </li>

  
      <li 
        className="group relative flex flex-col md:flex-row md:items-center gap-1"
        
        onMouseLeave={() => !mobileMode && setIsCategoryOpen(false)}
      >
        <div 
          className="flex items-center justify-between w-full md:w-auto gap-1 hover:text-zinc-600 transition-colors cursor-pointer"
          onClick={toggleCategory}
        >
          <span className="select-none">Categories</span>
          <span className="md:mt-0.5">
            {(mobileMode && isCategoryOpen) ? (
              <ChevronUp size={16} strokeWidth={3} />
            ) : (
              <ChevronDown size={14} strokeWidth={3} />
            )}
          </span>
        </div>

      
        <div className={`
          ${mobileMode 
            ? (isCategoryOpen ? "grid grid-cols-2 gap-2 ml-4 mt-2 border-l-2 border-zinc-100 pl-4" : "hidden") 
            : "absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-zinc-100 p-3 z-50 grid grid-cols-2 gap-1"}
        `}>
          {!loading && categories?.slice(0, 10).map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.name.toLowerCase()}`}
              onClick={handleLinkClick} 
              className="block p-2 text-[13px] md:text-[12px] hover:bg-zinc-50 rounded-lg transition-colors font-medium capitalize truncate cursor-pointer"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;