import { useContext } from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { ProductContext } from '../../context/ProductContext';
import Button from '../ui/Button';

const ProductInfo = ({ product, selectedSize, setSelectedSize, selectedColor, setSelectedColor }) => {
  const { addToCart, wishlist, toggleWishlist } = useContext(ProductContext);
  const navigate = useNavigate();

  if (!product) return null;

  const isFavorite = wishlist.some((fav) => String(fav.id) === String(product.id));

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color first!", {
        theme: "colored"
      });
      return;
    }
    
    addToCart(product, selectedSize, selectedColor);
    
    toast.success(`${product.title} Added to Cart!`, {
      theme: "dark",
      icon: "👟"
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color first!");
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    navigate('/cart');
  };

  const handleWishlist = () => {
    toggleWishlist(product); 
    if (!isFavorite) {
      toast.success("Added to Wishlist! ❤️", { theme: "colored" });
    } else {
      toast.info("Removed from Wishlist 🤍", { theme: "dark" });
    }
  };

  return (
    <div className="lg:col-span-5 flex flex-col justify-start space-y-6 px-4 md:px-0 pb-10">
      <div className="space-y-2">
        <span className="bg-kicks-blue text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase inline-block">
          {product?.category?.name || "New Arrival"}
        </span>
        <h1 className="text-2xl md:text-[36px] font-black text-kicks-dark leading-tight uppercase ">
          {product?.title || product?.name}
        </h1>
        <p className="text-xl md:text-2xl font-bold text-kicks-blue ">
          ${Number(product?.price || 0).toFixed(2)}
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-sm uppercase text-kicks-dark">Color</h3>
        <div className="flex gap-3">
          {(product?.colors || ['#232321', '#4A69E2']).map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-9 h-9 rounded-full border-2 cursor-pointer transition-all ${
                selectedColor === color ? 'border-kicks-dark p-0.5' : 'border-transparent'
              }`}
            >
              <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-sm uppercase text-kicks-dark">Size</h3>
          <button className="text-[10px] font-bold border-b border-kicks-dark uppercase cursor-pointer">Size Chart</button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
          {(product?.sizes || [38, 39, 40, 41, 42, 43]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 text-sm font-bold rounded-xl border cursor-pointer transition-all ${
                selectedSize === size 
                  ? 'bg-kicks-dark text-white border-kicks-dark' 
                  : 'bg-white text-kicks-dark border-gray-100 hover:border-kicks-dark'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex gap-2">
          <Button 
            variant="dark" 
            className="flex-1 py-4 text-xs cursor-pointer tracking-widest"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          
          <Button 
            variant="dark" 
            className="px-5 py-4 flex cursor-pointer items-center justify-center"
            onClick={handleWishlist}
          >
            <Heart 
              size={20} 
              className={isFavorite ? "fill-red-500 text-red-500 transition-colors" : "transition-colors"} 
            />
          </Button>
        </div>

        <Button 
          variant="primary" 
          className="w-full py-4 text-xs cursor-pointer tracking-widest shadow-none"
          onClick={handleBuyNow}
        >
          Buy It Now
        </Button>
      </div>

      <div className="space-y-4 pt-6 border-t border-gray-200">
        <h3 className="font-bold text-sm uppercase text-kicks-dark">About the product</h3>
        <div className="space-y-2 text-sm text-kicks-dark/80">
          <p className="font-black capitalize">{product?.description}</p>
          <p className="leading-relaxed">
            Experience ultimate comfort and style with the {product?.title}. 
            Designed for those who do it right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;