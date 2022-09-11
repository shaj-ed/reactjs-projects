import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import useGlobalContext from "../Hooks/useGlobalContext";

const Cart = () => {
  const {
    state: { cart, total },
  } = useGlobalContext();
  return (
    <main className="py-8 px-3">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <div className="mt-8">
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))
          ) : (
            <h2 className="text-center font-semibold text-2xl">
              No item added to the cart.
            </h2>
          )}
        </div>
        {cart.length > 0 ? (
          <p className="text-right font-bold text-3xl">Total: ${total}</p>
        ) : null}
        <Link
          to="/"
          className="mt-4 font-bold text-base inline-flex gap-2 items-center py-2 border-b border-gray-300"
        >
          <HiOutlineArrowSmLeft />
          Continue Shopping.
        </Link>
      </div>
    </main>
  );
};

export default Cart;
