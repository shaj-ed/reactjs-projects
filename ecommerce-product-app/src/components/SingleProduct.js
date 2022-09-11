import { Link } from "react-router-dom";
import useAddRemove from "../Hooks/useAddRemove";
import useGlobalContext from "../Hooks/useGlobalContext";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const { id, title, price, image, rating } = product;
  const {
    state: { cart },
    addProductToCart,
    removeProductFromCart,
  } = useGlobalContext();

  const inCart = useAddRemove(cart, id);

  const handleProduct = () => {
    if (inCart) {
      removeProductFromCart(id);
    } else {
      addProductToCart(product);
    }
  };

  return (
    <article className="w-full bg-white p-4 rounded hover:shadow-md flex flex-col gap-2">
      <Link to={`/product/${id}`} state={product}>
        <img className="w-full" src={image} alt="product_thumb" />
      </Link>

      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-lg font-medium">${price}</p>

      <Rating star={rating.rate} />

      <button
        type="button"
        className="mt-auto w-full font-semibold text-sm px-2 py-1 bg-gray-300 rounded capitalize hover:bg-gray-200"
        onClick={handleProduct}
      >
        {inCart ? "remove from cart" : "add to cart"}
      </button>
    </article>
  );
};

export default SingleProduct;
