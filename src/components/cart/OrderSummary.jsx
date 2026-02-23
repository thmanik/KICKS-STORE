const OrderSummary = ({ subtotal, cartLength }) => {
  const delivery = 6.99;
  const total = subtotal + delivery;

  return (
    <div className="bg-white md:bg-[#E7E7E3] rounded-[24px] md:rounded-[28px] p-6 md:p-10 shadow-sm md:shadow-none">
      <h2 className="text-xl md:text-2xl font-bold text-kicks-dark mb-4 md:mb-6 uppercase">
        Order Summary
      </h2>

      <div className="space-y-3 md:space-y-4 text-sm">
        <div className="flex justify-between text-gray-700">
          <span className="capitalize font-bold">{cartLength} {cartLength === 1 ? "Item" : "Items"}</span>
          <span className="font-bold text-kicks-dark">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span className="capitalize font-bold">Delivery</span>
          <span className="font-bold text-kicks-dark">${delivery.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span className="capitalize font-bold">Sales Tax</span>
          <span className="font-bold text-kicks-dark">-</span>
        </div>

        <div className="flex justify-between text-lg md:text-xl font-bold pt-4 border-t border-gray-200 text-kicks-dark">
          <span className="capitalize font-bold">Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full mt-6 md:mt-8 bg-kicks-dark text-white py-4 rounded-xl text-sm font-bold tracking-wider transition active:scale-95 cursor-pointer uppercase">
        Checkout
      </button>

      <button className="w-full text-left text-xs md:text-sm mt-4 text-kicks-dark underline cursor-pointer font-medium">
        User a promo code
      </button>
    </div>
  );
};

export default OrderSummary;