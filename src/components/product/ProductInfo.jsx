import { Heart } from 'lucide-react';

const ProductInfo = ({ product, selectedSize, setSelectedSize, selectedColor, setSelectedColor }) => {
  return (
    <div className="lg:col-span-5 flex flex-col justify-start space-y-6 px-4 md:px-0 pb-10">
      <div className="space-y-2">
        <span className="bg-kicks-blue text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase inline-block">
          {product.tag}
        </span>
        <h1 className="text-2xl md:text-[36px] font-black text-kicks-dark leading-tight uppercase italic">
          {product.name}
        </h1>
        <p className="text-xl md:text-2xl font-bold text-kicks-blue italic">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm uppercase text-kicks-dark">Color</h3>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-9 h-9 rounded-full border-2 cursor-pointer transition-all ${selectedColor === color ? 'border-kicks-dark p-0.5' : 'border-transparent'}`}
            >
              <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-sm uppercase text-kicks-dark">Size</h3>
          <button className="text-[10px] font-bold border-b border-kicks-dark uppercase cursor-pointer">Size Chart</button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 text-sm font-bold rounded-xl border cursor-pointer transition-all ${
                selectedSize === size ? 'bg-kicks-dark text-white border-kicks-dark' : 'bg-white text-kicks-dark border-gray-100'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex gap-2">
          <button className="flex-1 bg-kicks-dark text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest cursor-pointer hover:bg-black">
            Add to Cart
          </button>
          <button className="bg-kicks-dark text-white px-5 py-4 rounded-xl cursor-pointer flex items-center justify-center">
            <Heart size={20} />
          </button>
        </div>
        <button className="w-full bg-kicks-blue text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest cursor-pointer hover:opacity-95">
          Buy It Now
        </button>
      </div>

      {/* About Section */}
      <div className="space-y-4 pt-6 border-t border-gray-200">
        <h3 className="font-bold text-sm uppercase text-kicks-dark">About the product</h3>
        <div className="space-y-2 text-sm font-medium text-kicks-dark/80">
          <p className="font-black uppercase">{product.description}</p>
          <p className="leading-relaxed">{product.detailedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;