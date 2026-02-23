import { useParams } from 'react-router-dom';
import { useContext, useMemo } from 'react';
import { ProductContext } from '../context/ProductContext';
import RelatedProducts from '../components/shared/RelatedProducts';
import ProductMainInfo from '../components/product/ProductMainInfo';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const currentProduct = useMemo(() => {
    return products.find(p => p.id === parseInt(id));
  }, [products, id]);

  const relatedItems = useMemo(() => {
    if (!currentProduct) return [];
    return products
      .filter(p => p.category?.id === currentProduct.category?.id && p.id !== currentProduct.id)
      .slice(0, 8);
  }, [products, currentProduct]);

  return (
    <main className="max-w-[1200px] mx-auto bg-[#E7E7E3]">
      <ProductMainInfo productId={id} />
      <div className="pb-20">
        <RelatedProducts products={relatedItems} title="You may also like" />
      </div>
    </main>
  );
};

export default ProductDetailsPage;