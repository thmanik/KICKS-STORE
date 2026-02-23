import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ReviewCard from '../components/shared/ReviewCard';

const ReviewsPage = () => {
  const { products } = useContext(ProductContext);

  const allReviews = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    title: index % 2 === 0 ? "Excellent Quality" : "Super Comfortable",
    description: "The experience of shopping from Kicks is just amazing. The product quality and delivery speed are top-notch.",

    rating: 5, 
    userImg: `https://i.pravatar.cc/150?u=${index + 1}`,
    productImg: products[index % products.length]?.images?.[0] || "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }));

  return (
    <div className="min-h-screen bg-[#E7E7E3] pt-6 md:pt-24 pb-3 md:pb-20 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-10">
          <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-none text-[#232321]">
            All Reviews
          </h1>
          <div className="flex items-center gap-2 mt-3">
             <span className="h-[2px] w-12 bg-kicks-blue"></span>
             <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs">
               Community Feedback
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ReviewsPage;