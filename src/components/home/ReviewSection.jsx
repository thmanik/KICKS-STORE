import { Link } from 'react-router-dom';
import ReviewCard from '../shared/ReviewCard';
import { useReviews } from '../../hooks/useReviews';

const ReviewSection = () => {
  const reviews = useReviews(3); 

  return (
    <section className="bg-[#E7E7E3] mx-1.5 item-center md:py-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-4 md:mb-12">
          <h2 className="text-[#232321] text-3xl md:text-5xl font-bold uppercase leading-none">Reviews</h2>
          <Link to="/reviews" className="bg-[#232321] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold uppercase hover:bg-kicks-blue transition-all text-[12px] md:text-sm tracking-wider cursor-pointer">
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review, index) => (
            <div key={review.id} className={index === 0 ? "block" : "hidden md:block"}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection