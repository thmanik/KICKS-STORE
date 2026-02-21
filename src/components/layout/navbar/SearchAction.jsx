import { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative flex items-center transition-all duration-300 ${isOpen ? 'w-48' : 'w-6'}`}>
      {isOpen && (
        <input 
          autoFocus
          type="text" 
          placeholder="Search..."
          className="w-full bg-zinc-100 rounded-full px-4 py-1.5 text-sm outline-none border border-zinc-200"
          onBlur={() => setIsOpen(false)}
        />
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute right-0 hover:text-zinc-600 transition-colors ${isOpen ? 'mr-2' : ''}`}
      >
        {isOpen ? <X size={18} /> : <Search size={22} strokeWidth={2.5} />}
      </button>
    </div>
  );
};

export default SearchAction;