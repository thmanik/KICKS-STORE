import React from 'react';
import Hero from '../components/home/Hero';

// import NewDrops from './HomeSections/NewDrops';
// import CategoriesSection from './HomeSections/CategoriesSection';
// import ReviewsSection from './HomeSections/ReviewsSection';

const Home = () => {
  return (
    <div className="flex flex-col gap-y-16 md:gap-y-24 mb-20 overflow-x-hidden">
      
      <Hero />
      {/* <NewDrops />
      <CategoriesSection />
      <ReviewsSection /> */}
    </div>
  );
};

export default Home;