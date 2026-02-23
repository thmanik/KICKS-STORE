import { useState, useContext, useMemo } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import LoadingScreen from '../loading/LoadingScreen';

const Hero = () => {
  const { products, loading } = useContext(ProductContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredProduct = useMemo(() => {
    if (!products || products.length === 0) return null;
    const shoeProduct = products.find(p => p.category?.name?.toLowerCase() === 'shoes');
    return shoeProduct || products[products.length - 1];
  }, [products]);

  const activeImage = selectedImage || featuredProduct?.images?.[0];

  const thumbnails = useMemo(() => {
    if (!featuredProduct || !activeImage) return [];
    
    const allImages = featuredProduct.images;
    let filtered = allImages.filter(img => img !== activeImage);
    
    if (filtered.length === 0) {
      return [activeImage, activeImage];
    }
    
    if (filtered.length === 1) {
      return [filtered[0], filtered[0]];
    }
    
    return filtered.slice(0, 2);
  }, [featuredProduct, activeImage]);

  if (loading || !featuredProduct) {
    return <LoadingScreen />;
  }

  const slug = (featuredProduct.title || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const productUrl = `/product/${featuredProduct.id}/${slug}`;

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-4 md:mt-6 mb-10 md:mb-20 px-2 md:px-4">
      <div className="text-center relative z-0 pb-2 md:pb-14 my-4 mb-8 md:mb-16">
        <h1 className="text-[38px] sm:text-[60px] md:text-[110px] lg:text-[160px] xl:text-[170px] font-black 
          tracking-[1px] leading-[1] md:leading-[0.75] uppercase whitespace-nowrap">
          DO IT <span className="text-kicks-blue">RIGHT</span>
        </h1>
      </div>

      <div className="relative mt-[-20px] md:mt-[-70px] h-[520px] md:h-[650px] w-full bg-kicks-black rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl">
        <img
          src={activeImage}
          alt={featuredProduct.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:via-black/30"></div>

        <div className="absolute top-0 md:top-12 left-0 z-20">
          <div className="bg-[#232321] text-white text-[10px] md:text-[13px] font-medium px-4 md:px-7 py-1.5 md:py-3
            rounded-tl-2xl rounded-bl-2xl uppercase tracking-[0.2em] 
            [writing-mode:vertical-lr] rotate-180 flex items-center justify-center 
            border-y border-r border-white/10 shadow-xl">
            {featuredProduct.category?.name || "Sneakers"} Edition 2026
          </div>
        </div>

        <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-end md:justify-between z-10">
          <div className="hidden md:block"></div>

          <div className="relative w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            
            <div className="w-full md:max-w-xl text-left order-2 md:order-1">
              <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-6xl   mb-2 md:mb-3 uppercase leading-[0.9] tracking-tight drop-shadow-2xl">
                {featuredProduct.title}
              </h2>
              <p className="text-zinc-100 mb-6 md:mb-8 text-xs md:text-lg font-medium opacity-100 max-w-[280px] md:max-w-sm drop-shadow-md">
                {featuredProduct.description.slice(0, 65)}...
              </p>
              
              <Link to={productUrl}>
                <button className="bg-kicks-blue hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold uppercase text-[12px] md:text-sm tracking-widest transition-all active:scale-95 shadow-lg cursor-pointer">
                  Shop Now
                </button>
              </Link>
            </div>

            <div className="flex flex-row md:flex-col gap-3 md:gap-4 mb-4 md:mb-0 order-1 md:order-2">
              {thumbnails.map((imgUrl, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className="w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-[16px] md:rounded-[40px] border-2 md:border-4 border-white/80 overflow-hidden cursor-pointer hover:scale-105 transition-all shadow-2xl p-0 bg-zinc-800"
                >
                  <img
                    src={imgUrl}
                    className="w-full h-full object-cover"
                    alt={`thumbnail-${index}`}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;