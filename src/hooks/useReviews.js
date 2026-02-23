import { useContext, useMemo } from 'react';
import { ProductContext } from '../context/ProductContext';

export const useReviews = (limit = 9) => {
  const { products } = useContext(ProductContext);

  const reviews = useMemo(() => {
    return Array.from({ length: limit }).map((_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      title: index % 2 === 0 ? "Excellent Quality" : "Super Comfortable",
      description: "The experience of shopping from Kicks is just amazing. The product quality and delivery speed are top-notch.",
      rating: 5,
      userImg: `https://i.pravatar.cc/150?u=${index + 1}`,
      productImg: products[index % products.length]?.images?.[0] || "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }));
  }, [products, limit]);

  return reviews;
};