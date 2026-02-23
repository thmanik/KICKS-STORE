import { useContext, useMemo } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCardPrimary from '../shared/ProductCardPrimary';
import { Link } from 'react-router-dom';
import LoadingScreen from '../loading/LoadingScreen';
import Button from '../ui/Button';

const LatestArrivals = () => {
  const { products, loading } = useContext(ProductContext);

  const latestDrops = useMemo(() => {
    if (!products || products.length === 0) return [];
    const shoeProducts = products.filter(
      item => item.category?.name?.toLowerCase() === 'shoes'
    );

    const baseData = shoeProducts.length > 0 ? shoeProducts : products;
  
    return [...baseData].reverse().slice(0, 4);
  }, [products]);

  if (loading) {
    return <LoadingScreen message="Syncing New Drops..." />;
  }

  return (
    <section className="max-w-[1200px] mx-auto px-4 -mt-10 md:-mt-16 pb-2 md:pb-5">
      <div className="flex justify-between items-end mb-8 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-black leading-[0.9] uppercase italic">
          Don't miss out <br /> new drops
        </h2>
        
        <Link to="/shop" className="hidden md:block">
          <Button variant="primary" className="px-8 tracking-widest">
            Shop New Drops
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {latestDrops.map((product) => (
          <ProductCardPrimary 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link to="/shop">
          <Button variant="primary" className="w-full tracking-widest">
            Shop New Drops
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LatestArrivals;