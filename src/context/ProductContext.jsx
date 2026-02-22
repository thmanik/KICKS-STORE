import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';


// 1. Context create koro (Components e use korar jonno)
export const ProductContext = createContext();

// 2. Provider Component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        // Products ebong Categories eksathe fetch hobe performance optimize korar jonno
        const [prodRes, catRes] = await Promise.all([
          axiosInstance.get('/products'),
          axiosInstance.get('/categories')
        ]);

        setProducts(prodRes.data);
        setCategories(catRes.data);
        setError(null);
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Failed to fetch data from server.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // context value hisebe shob data pass kora holo
  const value = {
    products,
    categories,
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