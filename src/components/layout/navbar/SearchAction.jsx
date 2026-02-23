import { useState, useContext, useMemo, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext';

const SearchAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useContext(ProductContext);
  const searchRef = useRef(null);

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return products
      .filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm, products]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className={`relative flex items-center transition-all duration-300 ${isOpen ? 'w-48 md:w-72' : 'w-6'}`}>
      {isOpen && (
        <div className="w-full relative">
          <input 
            autoFocus
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full bg-zinc-100 rounded-full px-4 py-1.5 pr-8 text-sm outline-none border border-zinc-200"
          />
          
          {suggestions.length > 0 && (
            <div className="absolute top-full mt-2 right-0 w-[280px] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2">
              <div className="p-2 border-b border-zinc-50 bg-zinc-50/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2">Suggestions</p>
              </div>
              
              {suggestions.map((p) => {
                const slug = p.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '');

                return (
                  <Link 
                    key={p.id}
                    to={`/product/${p.id}/${slug}`}
                    onClick={handleClose}
                    className="flex items-center gap-3 p-3 hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-none group"
                  >
                    <div className="w-12 h-12 bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-100">
                      <img 
                        src={p.images[0]} 
                        alt={p.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className="text-[13px] font-bold text-black truncate capitalize group-hover:text-kicks-blue transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-[11px] font-black text-zinc-500 mt-0.5">
                        ${p.price}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}

      <button 
        onClick={() => {
          if (isOpen) {
            handleClose();
          } else {
            setIsOpen(true);
          }
        }}
        className={`absolute right-0 cursor-pointer hover:text-zinc-600 transition-colors ${isOpen ? 'mr-2 text-zinc-400' : 'text-black'}`}
      >
        {isOpen ? <X size={18} /> : <Search size={22} strokeWidth={2.5} />}
      </button>
    </div>
  );
};

export default SearchAction;