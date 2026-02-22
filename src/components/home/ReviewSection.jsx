import { Link } from 'react-router-dom';
import ReviewCard from '../shared/ReviewCard';


const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "User 1",
      title: "Good Quality",
      description: "I highly recommend shopping from kicks",
      rating: 5.0,
      userImg: "https://i.pravatar.cc/150?u=1",
      productImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "User 2",
      title: "Very Comfortable",
      description: "The cushioning is amazing for long runs.",
      rating: 4.8,
      userImg: "https://i.pravatar.cc/150?u=2",
      productImg: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "User 3",
      title: "Stylish Design",
      description: "Goes well with almost any outfit.",
      rating: 5.0,
      userImg: "https://i.pravatar.cc/150?u=3",
      productImg: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#E7E7E3] mx-1.5 item-center md:py-2">
      <div className="max-w-[1200px] mx-auto ">
        
        
        <div className="flex justify-between items-center mb-4 md:mb-12">
          <h2 className="text-[#232321] text-4xl md:text-6xl font-black uppercase leading-none">
            Reviews
          </h2>
          <Link 
            to="/reviews" 
            className="bg-[#232321] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold uppercase hover:bg-kicks-blue transition-all text-[12px] md:text-sm tracking-wider"
          >
            See All
          </Link>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Mobile-e shudhu prothom card-ta dekhabo (Slide functionality lagle janio) */}
          <div className="block md:block">
             <ReviewCard {...reviews[0]} />
          </div>
          
          {/* Baki card gulo shudhu desktop (md and up) e dekhabe */}
          <div className="hidden md:block">
             <ReviewCard {...reviews[1]} />
          </div>
          <div className="hidden md:block">
             <ReviewCard {...reviews[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;