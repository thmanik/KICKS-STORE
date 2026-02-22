import { ArrowUpRight } from 'lucide-react';

const CategoryCard = ({ title, image, bgColor }) => {
  return (
    <div className={`relative w-full h-[320px] md:h-[400px] ${bgColor} flex flex-col justify-between group cursor-pointer`}>
      <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end">
        <h3 className="text-[#232321] font-black text-2xl md:text-3xl uppercase leading-[1]">
          {title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h3>
        
        <div className="bg-[#232321] text-white p-2 md:p-3 rounded-lg transform transition-all duration-300 group-hover:bg-kicks-blue">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;