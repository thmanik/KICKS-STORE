import { Star } from 'lucide-react';

const ReviewCard = ({ name, title, description, rating, userImg, productImg }) => {
  return (
    <div className="bg-white rounded-[28px] md:rounded-[32px] overflow-hidden flex flex-col h-full shadow-sm">
      <div className="p-6 md:p-8 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-[#232321] font-bold text-lg md:text-xl mb-1 uppercase">{title}</h4>
            <p className="text-[#232321]/60 text-xs md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px]">
              {description}
            </p>
          </div>
          <img src={userImg} alt={name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#232321]" />
        </div>
        
        <div className="flex items-center gap-1 mt-2 md:mt-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < Math.floor(rating) ? "#FFA800" : "none"} 
              className={i < Math.floor(rating) ? "text-[#FFA800]" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 font-bold text-[#232321] text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="h-[200px] md:h-[240px] w-full mt-auto">
        <img src={productImg} alt="product" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ReviewCard;