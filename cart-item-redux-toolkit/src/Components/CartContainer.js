import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalSlice";
import CartItem from "./CartItem";
import Total from "./Total";

const CartContainer = () => {
  const { cartItems, loading, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <main className="bg-slate-300 w-full min-h-screen py-8 px-4">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-9">Cart Items.</h2>
        {loading && <h2 className="text-2xl font-bold mb-9">Loading...</h2>}
        {error && <h2 className="text-2xl font-bold mb-9">{error}</h2>}
        {cartItems && (
          <>
            {cartItems.length === 0 ? (
              <h2 className="text-base font-semibold">
                You currently have no items.
              </h2>
            ) : (
              <>
                <section className="flex flex-col gap-4">
                  {cartItems.map((product) => {
                    return <CartItem key={product.id} product={product} />;
                  })}
                </section>

                <Total />
                <button
                  type="button"
                  className="mt-4 w-full py-1 px-8 border border-slate-500 hover:bg-slate-600 hover:text-slate-200"
                  onClick={() => dispatch(openModal())}
                >
                  Clear All
                </button>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default CartContainer;
