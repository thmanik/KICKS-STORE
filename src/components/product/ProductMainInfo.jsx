import { useState, useRef } from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

const ProductMainInfo = ({ productId }) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const swiperRef = useRef(null);

  const product = {
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125.00,
    tag: "New Release",
    colors: ["#2B3444", "#7E8A7B"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    description: "Shadow Navy / Army Green",
    detailedDescription: "This product is excluded from all promotional discounts and offers.",
    images: [
      "/src/assets/shoe-1.png", 
      "/src/assets/shoe-2.png",
      "/src/assets/shoe-3.png",
      "/src/assets/shoe-4.png"
    ]
  };

  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleThumbClick = (index) => {
    setActiveThumb(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

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
        swiperRef={swiperRef}
        activeThumb={activeThumb}
        handleThumbClick={handleThumbClick}
        getRoundingClass={getRoundingClass}
        onSlideChange={(swiper) => setActiveThumb(swiper.activeIndex)}
      />

      <ProductInfo 
        product={product}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </section>
  );
};

export default ProductMainInfo;