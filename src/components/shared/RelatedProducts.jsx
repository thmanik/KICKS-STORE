import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import ProductCardPrimary from './ProductCardPrimary';

const RelatedProducts = ({ products, title = "You may also like" }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="max-w-[1200px] mx-auto px-4 pyx-4 md:py-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl md:text-5xl font-black text-kicks-dark uppercase leading-none">
          {title}
        </h2>
        
        <div className="flex gap-2">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
              isBeginning ? 'bg-gray-400 text-white' : 'bg-kicks-dark text-white'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 bg-kicks-dark text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCardPrimary product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;