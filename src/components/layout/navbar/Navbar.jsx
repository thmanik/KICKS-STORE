import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import NavLinks from './NavLinks';
import SearchAction from './SearchAction';
import CartBadge from './CartBadge';
import LogoSVG from '../../../assets/logo.svg';
const Navbar = () => {
  return (
    <header className="w-full px-4 py-6 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto bg-white rounded-[32px] px-10 py-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-100">
        
        {/* Left: Nav Links */}
        <div className="flex-1 hidden md:block">
          <NavLinks />
        </div>

        {/* Center: Logo */}
        <Link to="/" className="flex items-center justify-center">
  <img 
    src={LogoSVG} 
    alt="KICKS Logo" 
    className="h-6 md:h-8 w-auto object-contain" // Height Figma onujayi adjust koro
  />
</Link>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-6">
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