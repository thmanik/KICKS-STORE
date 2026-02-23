import { useContext } from "react";
import { Heart, Trash2, ChevronDown } from "lucide-react";
import { ProductContext } from "../../context/ProductContext";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const {
    toggleWishlist,
    wishlist,
    removeFromCart,
    updateCartItem,
    products,
  } = useContext(ProductContext);

  const isFavorite = wishlist.some((fav) => String(fav.cartId) === String(item.cartId));
  
  const originalProduct = products.find(
    (p) => String(p.id) === String(item.id)
  );

  const availableSizes = originalProduct?.sizes || [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleWishlist = () => {
    toggleWishlist(item); 
    if (!isFavorite) {
      toast.success("Added to Wishlist! ❤️", { theme: "colored" });
    } else {
      toast.info("Removed from Wishlist 🤍", { theme: "dark" });
    }
  };

  return (
    <div className="flex flex-row md:flex-row gap-4 md:gap-8 items-start py-6 border-b border-gray-200 last:border-none">
      
      <div className="w-28 h-28 md:w-36 md:h-36 bg-[#E9EAEC] rounded-xl flex items-center justify-center p-2 md:p-4 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
          
          <div className="w-full">
            <h3 className="text-sm md:text-lg font-bold text-kicks-dark uppercase md:normal-case leading-tight">
              {item.name}
            </h3>
            <p className="text-[11px] md:text-sm text-gray-500 mt-1 font-medium">
              Men's Road Running Shoes
            </p>
            <p className="text-[11px] md:text-sm text-gray-500 font-medium">
              {item.selectedColor}
            </p>

            <p className="text-base md:text-xl font-bold text-[#4A69E2] md:hidden mt-2">
              ${item.price.toFixed(2)}
            </p>

            <div className="flex gap-6 md:gap-10 mt-3 md:mt-6 text-[11px] md:text-sm">
              <div className="relative flex items-center gap-1 md:gap-2">
                <span className="text-gray-600">Size</span>
                <div className="relative flex items-center min-w-[30px] md:min-w-[40px]">
                  <select
                    value={item.selectedSize}
                    onChange={(e) => updateCartItem(item.cartId, e.target.value, item.selectedColor, item.quantity)}
                    /* 🔥 text-center added here */
                    className="appearance-none bg-transparent font-bold pr-4 outline-none cursor-pointer text-kicks-dark text-center"
                  >
                    {availableSizes.map((s) => (
                      /* 🔥 text-center added to option */
                      <option key={s} value={s} className="text-center">{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 pointer-events-none text-gray-500" />
                </div>
              </div>

              <div className="relative flex items-center gap-1 md:gap-2">
                <span className="text-gray-600">Quantity</span>
                <div className="relative flex items-center min-w-[30px] md:min-w-[40px]">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateCartItem(item.cartId, item.selectedSize, item.selectedColor, parseInt(e.target.value))}
                    /* 🔥 text-center added here */
                    className="appearance-none bg-transparent font-bold pr-4 outline-none cursor-pointer text-kicks-dark text-center"
                  >
                    {quantities.map((q) => (
                      /* 🔥 text-center added to option */
                      <option key={q} value={q} className="text-center">{q}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 pointer-events-none text-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-4 md:mt-6">
              <button onClick={handleWishlist} className="cursor-pointer transition active:scale-90">
                <Heart size={20} className={isFavorite ? "fill-red-500 text-red-500" : "text-kicks-dark"} />
              </button>
              <button onClick={() => removeFromCart(item.cartId)} className="cursor-pointer transition active:scale-90">
                <Trash2 size={18} className="text-kicks-dark" />
              </button>
            </div>
          </div>

          <p className="hidden md:block text-xl font-bold text-[#4A69E2]">
            ${item.price.toFixed(2)}
          </p>

        </div>
      </div>
    </div>
  );
};

export default CartItem;