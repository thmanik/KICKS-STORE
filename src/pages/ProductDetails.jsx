import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/product/RelatedProducts';
import ProductMainInfo from '../components/product/ProductMainInfo';


const ProductDetailsPage = () => {
  const { id } = useParams();

  return (
    <main className="max-w-[1200px] mx-auto bg-[#E7E7E3]">
      <ProductMainInfo productId={id} />
      
      <RelatedProducts currentProductId={id} />
    </main>
  );
};

export default ProductDetailsPage;