import useGlobalContext from "../Hooks/useGlobalContext";
import Quantity from "./Quantity";

const CartProduct = ({ product }) => {
  const { id, title, price, image, quantity } = product;
  const { removeProductFromCart } = useGlobalContext();
  return (
    <article className="grid gap-2 md:gap-4 grid-cols-[96px_1fr]  md:grid-cols-[96px_repeat(4,_1fr)]  mb-8 border-b-2 border-gray-300 pb-4 max-w-[400px] mx-auto md:max-w-full">
      <img
        src={image}
        className="w-24 h-24 object-contain"
        alt="cart-product"
      />
      <h2 className="text-sm font-semibold self-center">{title}</h2>
      <Quantity
        classes="col-span-2 md:col-span-1 self-center"
        id={id}
        quantity={quantity}
      />
      <p className="text-lg col-span-2 md:col-span-1 self-center">
        {price} * {quantity}
        <span className="font-semibold ml-4">${price * quantity}</span>
      </p>
      <button
        type="button"
        className="text-sm font-semibold px-4 py-2 bg-gray-400 text-gray-50 rounded capitalize hover:bg-gray-300 hover:text-gray-500 col-span-2 md:col-span-1 self-center"
        onClick={() => removeProductFromCart(id)}
      >
        remove from cart
      </button>
    </article>
  );
};

export default CartProduct;
