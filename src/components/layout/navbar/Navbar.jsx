import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';
import SearchAction from './SearchAction';
import CartBadge from './CartBadge';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky -top-1 z-50 bg-kicks-gray pt-2 md:pt-4 pb-0 px-2 md:px-0">
      <nav className="max-w-[1200px] mx-auto bg-white rounded-[24px] md:rounded-full px-4 md:px-10 py-3 md:py-3.5 flex items-center justify-between shadow-sm border border-zinc-100">
        
        <div className="flex-1 flex items-center">
          <button 
            className="md:hidden p-1 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>

        <Link to="/" className="flex items-center justify-center">
          <img 
            src="/Logo.svg"
            alt="KICKS Logo" 
            className="h-5 md:h-7 w-auto object-contain"
          />
        </Link>

        <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
          <div className="hidden md:block">
            <SearchAction />
          </div>
          
          <button className="hover:text-zinc-600 cursor-pointer transition-colors">
            <User size={22} strokeWidth={2.5} />
          </button>
          
          <CartBadge />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 z-50">
           <div className="flex flex-col gap-6" onClick={() => setIsMobileMenuOpen(false)}>
              <NavLinks mobileMode={true} />
           </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;