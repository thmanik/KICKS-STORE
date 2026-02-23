import { useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import RelatedProducts from "../components/shared/RelatedProducts";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const CartPage = () => {
     useTitle(`Cart`);
    const { cart, products } = useContext(ProductContext);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const relatedItems = useMemo(() => {
        if (cart.length === 0) return products.slice(0, 8);
        const lastItem = cart[cart.length - 1];
        return products.filter(p => p.category?.id === lastItem.category?.id && p.id !== lastItem.id).slice(0, 8);
    }, [cart, products]);

    return (
        <div className="bg-[#E7E7E3] min-h-screen pb-20">
            <div className="max-w-[1200px] mx-auto px-4 py-6 md:py-16">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-kicks-dark">Saving to celebrate</h1>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
                    </p>
                    <div className="mt-2 text-xs font-bold underline cursor-pointer text-kicks-dark">Join us or Sign-In</div>
                </div>

                {cart.length > 0 ? (
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">

                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[24px] p-5 md:p-10 shadow-sm">
                                <h2 className="text-xl font-bold text-kicks-dark mb-2">Your Bag</h2>

                                <p className="text-sm text-gray-600  leading-relaxed mb-6">
                                    Items in your bag not reserved- check out now to make them yours.
                                </p>

                                <div className="flex flex-col">
                                    {cart.map((item) => (
                                        <CartItem key={item.cartId} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <OrderSummary subtotal={subtotal} cartLength={cart.length} />
                        </div>

                    </div>
                ) : (
                    <div className="bg-white rounded-[24px] py-20 text-center px-6">
                        <h2 className="text-2xl font-bold text-gray-300 uppercase">Empty Bag</h2>

                        <Link
                            to="/"
                            className="inline-block mt-6 px-8 py-3 bg-kicks-dark text-white rounded-lg font-bold cursor-pointer uppercase transition active:scale-95 hover:bg-opacity-90"
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}

                <div className="mt-12">
                    <RelatedProducts products={relatedItems} title="You may also like" />
                </div>
            </div>
        </div>
    );
};

export default CartPage;