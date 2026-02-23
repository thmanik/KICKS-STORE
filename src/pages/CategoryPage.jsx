import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCardPrimary from '../components/shared/ProductCardPrimary';
import LoadingScreen from '../components/loading/LoadingScreen';
import useTitle from '../hooks/useTitle';

const CategoryPage = () => {
  const { categoryName } = useParams();
  useTitle(`Category-${categoryName}`);
  const { products, loading } = useContext(ProductContext);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    
    return products.filter(product => {
      const productCat = product.category?.name?.toLowerCase() || "";
      const searchCat = categoryName.toLowerCase();
      return productCat.includes(searchCat);
    });
  }, [products, categoryName]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#E7E7E3] pt-6 md:pt-16 pb-24  px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-6 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-bold uppercase  leading-none">
            {categoryName.replace(/-/g, ' ')}
          </h1>
          <p className="text-zinc-500 mt-2 font-medium uppercase tracking-widest text-sm">
            Category / {categoryName}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCardPrimary key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="h-[300px] flex items-center justify-center bg-white rounded-[24px]">
            <h2 className="text-xl font-bold text-zinc-400 uppercase italic">No products found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;