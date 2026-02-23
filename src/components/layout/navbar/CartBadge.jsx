import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext';

const CartBadge = () => {
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div 
      onClick={() => navigate('/cart')}
      className="bg-[#FFA52F] w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-black cursor-pointer hover:scale-110 transition-transform relative"
    >
      {totalItems}
    </div>
  );
};

export default CartBadge;