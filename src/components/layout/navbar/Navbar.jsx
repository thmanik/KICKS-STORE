import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import NavLinks from './NavLinks';
import SearchAction from './SearchAction';
import CartBadge from './CartBadge';
import LogoSVG from '../../../assets/logo.svg';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-kicks-gray pt-4 pb-0">
      <nav className="max-w-[1200px] mx-auto bg-white rounded-full px-6 md:px-10 py-3.5 flex items-center justify-between shadow-sm border border-zinc-100">
        
        <div className="flex-1 hidden md:block">
          <NavLinks />
        </div>

        <Link to="/" className="flex items-center justify-center">
          <img 
            src={LogoSVG} 
            alt="KICKS Logo" 
            className="h-6 md:h-7 w-auto object-contain"
          />
        </Link>

        <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
          <SearchAction />
          <button className="hover:text-zinc-600 transition-colors hidden md:block">
            <User size={22} strokeWidth={2.5} />
          </button>
          <CartBadge />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;