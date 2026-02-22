import { useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext';


const NavLinks = () => {
  const { categories, loading } = useContext(ProductContext);

  // Amra Platzi API theke Clothes (ID: 1) ar Shoes (ID: 4) ke filter korlam
  const headerCategories = categories.filter(cat => [1, 4].includes(cat.id));

  const links = [
    { name: 'New Drops 🔥', hasDropdown: false },
    { name: 'Men', hasDropdown: true },
    { name: 'Women', hasDropdown: true },
  ];

  return (
    <ul className="flex items-center gap-8 text-[14px] font-bold tracking-tight text-black">
      {links.map((link) => (
        <li key={link.name} className="group relative cursor-pointer flex items-center gap-1 hover:text-zinc-600 transition-colors">
          {link.name}
          {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} className="mt-0.5" />}
          
          {link.hasDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-zinc-100 p-2 z-50">
              {loading ? (
                <p className="p-2 text-[12px] text-zinc-400">Loading...</p>
              ) : (
                headerCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    // URL-e amra gender query pathacchi jate pore filter kora jay
                    to={`/category/${cat.id}?gender=${link.name.toLowerCase()}`}
                    className="block p-2 text-[12px] hover:bg-zinc-50 rounded-lg transition-colors font-medium capitalize"
                  >
                    {cat.name}
                  </Link>
                ))
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;