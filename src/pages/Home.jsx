import React from 'react';
import Hero from '../components/home/Hero';
import LatestArrivals from '../components/home/LatestArrivals';
import CategorySection from '../components/home/CategorySection';
import ReviewSection from '../components/home/ReviewSection';

const Home = () => {
  return (
    <div className="flex flex-col gap-y-16 md:gap-y-24 mb-20 overflow-x-hidden">
      
      <Hero />
      <LatestArrivals/>
      <CategorySection/>
      <ReviewSection/>
      
    </div>
  );
};

export default Home;