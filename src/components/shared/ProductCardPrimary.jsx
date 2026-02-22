const ProductCardPrimary = ({ product }) => {
  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-square rounded-[28px] border-[8px] border-white overflow-hidden shadow-sm flex items-center justify-center bg-transparent">
        <div className="absolute top-0 left-0 bg-kicks-blue text-white text-[10px] md:text-[12px] font-bold px-3 py-2 md:px-4 md:py-3 rounded-br-[16px] rounded-tl-[16px] uppercase z-10">
          New
        </div>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transition-all duration-500 ease-in-out transform scale-100 rotate-0 group-hover:scale-90 group-hover:-rotate-[15deg]" 
        />
      </div>

      <h4 className="text-[#232321] font-black text-sm md:text-xl leading-tight uppercase tracking-tight line-clamp-2">
        {product.name}
      </h4>

      <button className="w-full cursor-pointer bg-[#232321] hover:bg-kicks-blue text-white py-3 md:py-4 rounded-[8px] font-bold uppercase text-[10px] md:text-xs tracking-[0.1em] transition-colors flex justify-center items-center gap-1">
        VIEW PRODUCT - <span className="text-[#FFA52F]">{product.price}</span>
      </button>
    </div>
  );
};

export default ProductCardPrimary;