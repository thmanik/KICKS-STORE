import ProductCardPrimary from '../shared/ProductCardPrimary';

const LatestArrivals = () => {
  const products = [
    { id: 1, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', image: '/src/assets/product1.png' },
    { id: 2, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', image: '/src/assets/product2.png' },
    { id: 3, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', image: '/src/assets/product3.png' },
    { id: 4, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', image: '/src/assets/product4.png' },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-4 pb-12 md:pt-5 md:pb-20">
      <div className="flex justify-between items-end mb-8 md:mb-10">
        <h2 className="text-3xl md:text-7xl font-black leading-[0.9] uppercase">
          Don't miss out <br /> new drops
        </h2>
        
        <button className="hidden md:block bg-kicks-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest transition-all cursor-pointer">
          Shop New Drops
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCardPrimary key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <button className="w-full bg-kicks-blue text-white py-4 rounded-xl font-bold uppercase text-sm tracking-widest cursor-pointer">
          Shop New Drops
        </button>
      </div>
    </section>
  );
};

export default LatestArrivals;