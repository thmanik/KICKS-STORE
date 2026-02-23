import { Link } from "react-router-dom";

const ProductCardPrimary = ({ product }) => {
  const displayTitle = product.title || product.name;
  const displayImage = product.images?.[0] || product.image;

  const slug = (displayTitle || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const productUrl = `/product/${product.id}/${slug}`;

  return (
    <div className="group flex flex-col gap-4 h-full">
      <Link to={productUrl} className="relative aspect-square rounded-[28px] border-[8px] border-white overflow-hidden shadow-sm flex items-center justify-center bg-transparent cursor-pointer">
        <div className="absolute top-0 left-0 bg-kicks-blue text-white text-[10px] md:text-[12px] font-bold px-3 py-2 md:px-4 md:py-3 rounded-br-[16px] rounded-tl-[16px] uppercase z-10">
          New
        </div>
        
        <img 
          src={displayImage} 
          alt={displayTitle} 
          className="w-full h-full object-contain transition-all duration-500 ease-in-out transform scale-100 rotate-0 group-hover:scale-90 group-hover:-rotate-[15deg]" 
        />
      </Link>

      <Link to={productUrl}>
        <h4 className="text-[#232321] font-black text-sm md:text-xl leading-tight uppercase tracking-tight line-clamp-2 min-h-[40px] md:min-h-[56px] cursor-pointer hover:text-kicks-blue transition-colors">
          {displayTitle}
        </h4>
      </Link>

      <Link to={productUrl} className="w-full">
        <button className="w-full cursor-pointer bg-[#232321] hover:bg-kicks-blue text-white py-3 md:py-4 rounded-[8px] font-bold uppercase text-[10px] md:text-xs tracking-[0.1em] transition-colors flex justify-center items-center gap-1">
          VIEW PRODUCT - <span className="text-[#FFA52F]">${product.price}</span>
        </button>
      </Link>
    </div>
  );
};

export default ProductCardPrimary;