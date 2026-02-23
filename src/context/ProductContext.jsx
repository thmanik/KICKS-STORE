/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('kicks_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('kicks_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [prodRes, catRes] = await Promise.all([
          axiosInstance.get('/products'),
          axiosInstance.get('/categories')
        ]);
        setProducts(prodRes.data);
        setCategories(catRes.data);
      } catch (err) {
        setError(`Failed to fetch data. ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    localStorage.setItem('kicks_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('kicks_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, size, color) => {
    const cartId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const isExist = prev.find(item => item.cartId === cartId);
      if (isExist) {
        return prev.map(item => 
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, {
        cartId,
        id: product.id,
        name: product.title || product.name,
        price: product.price,
        image: product.image || product.images?.[0],
        selectedSize: size,
        selectedColor: color,
        quantity: 1,
        category: product.category 
      }];
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  const updateCartItem = (cartId, newSize, newColor, newQty) => {
    setCart((prev) => prev.map(item => {
      if (item.cartId === cartId) {
        return {
          ...item,
          selectedSize: newSize || item.selectedSize,
          selectedColor: newColor || item.selectedColor,
          quantity: newQty || item.quantity,
          cartId: newSize || newColor ? `${item.id}-${newSize || item.selectedSize}-${newColor || item.selectedColor}` : item.cartId
        };
      }
      return item;
    }));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {

      const isExist = prev.find(item => 
        product.cartId ? item.cartId === product.cartId : item.id === product.id
      );

      if (isExist) {
        return prev.filter(item => 
          product.cartId ? item.cartId !== product.cartId : item.id !== product.id
        );
      }
      return [...prev, product];
    });
  };

  const value = {
    products,
    categories,
    cart,
    addToCart,
    removeFromCart,
    updateCartItem,
    wishlist,
    toggleWishlist,
    loading,
    error,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;