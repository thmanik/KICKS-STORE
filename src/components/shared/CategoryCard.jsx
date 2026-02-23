import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, image, bgColor }) => {
  // Slug toiri kora (e.g., "LIFESTYLE SHOES" -> "lifestyle")
  const slug = (title || "")
    .toLowerCase()
    .replace(' shoes', '') // Design onujayi title theke shoes bad deya
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div className={`relative w-full h-[320px] md:h-[400px] ${bgColor} flex flex-col justify-between group cursor-pointer overflow-hidden`}>
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-300"></div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end z-10">
        <h3 className="text-[#232321] font-black text-2xl md:text-3xl uppercase leading-[1] drop-shadow-sm">
          {title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h3>
        
        {/* Clickable Arrow Button */}
        <Link 
          to={`/category/${slug}`}
          className="bg-[#232321] text-white p-2 md:p-3 rounded-lg transform transition-all duration-300 hover:bg-kicks-blue shadow-lg z-20 active:scale-90"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;