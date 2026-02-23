import { useState, useContext, useMemo } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import LoadingScreen from '../loading/LoadingScreen';

const ProductMainInfo = ({ productId }) => {
  const { products, loading } = useContext(ProductContext);
  const [activeThumb, setActiveThumb] = useState(0);

  // Dynamic Product selection from Context
  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(productId));
  }, [products, productId]);

  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(null);

  if (loading) return <LoadingScreen />;
  if (!product) return <div className="py-20 text-center font-black uppercase">Product Not Found</div>;

  // Mock data for UI elements not in API
  const mockColors = ["#2B3444", "#7E8A7B", "#333333"];
  const mockSizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  const getRoundingClass = (index) => {
    switch (index) {
      case 0: return "rounded-tl-[48px] rounded-tr-md rounded-bl-md rounded-br-md";
      case 1: return "rounded-tr-[48px] rounded-tl-md rounded-bl-md rounded-br-md";
      case 2: return "rounded-bl-[48px] rounded-tl-md rounded-tr-md rounded-br-md";
      case 3: return "rounded-br-[48px] rounded-tl-md rounded-tr-md rounded-bl-md";
      default: return "rounded-md";
    }
  };

  return (
    <section className="max-w-[1320px] mx-auto px-0 md:px-6 py-0 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
      <ProductGallery 
        images={product.images}
        activeThumb={activeThumb}
        setActiveThumb={setActiveThumb}
        getRoundingClass={getRoundingClass}
      />

      <ProductInfo 
        product={{
          ...product,
          name: product.title,
          price: product.price,
          tag: product.category.name,
          colors: mockColors,
          sizes: mockSizes,
          description: "Premium " + product.category.name,
          detailedDescription: product.description
        }}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor || mockColors[0]}
        setSelectedColor={setSelectedColor}
      />
    </section>
  );
};

export default ProductMainInfo;