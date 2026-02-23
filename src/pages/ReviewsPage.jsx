import ReviewCard from '../components/shared/ReviewCard';
import { useReviews } from '../hooks/useReviews'; 
import useTitle from '../hooks/useTitle';

const ReviewsPage = () => {
  useTitle(`Reviews`);
  const allReviews = useReviews(9);

  return (
    <div className="min-h-screen bg-[#E7E7E3] pt-6 md:pt-24 pb-3 md:pb-20 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold uppercase leading-none text-[#232321]">
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