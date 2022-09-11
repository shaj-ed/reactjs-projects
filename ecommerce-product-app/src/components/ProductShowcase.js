import Quantity from "../components/Quantity";
import useAddRemove from "../Hooks/useAddRemove";
import useGlobalContext from "../Hooks/useGlobalContext";
import Rating from "./Rating";

const ProductShowcase = ({ product }) => {
  const { id, title, price, image, description, rating, quantity } = product;
  const {
    state: { cart },
    removeProductFromCart,
    addProductToCart,
  } = useGlobalContext();
  const cartProduct = cart.find((product) => product.id === id);

  const inCart = useAddRemove(cart, id);

  const handleProduct = () => {
    if (inCart) {
      removeProductFromCart(id);
    } else {
      addProductToCart(product);
    }
  };

  return (
    <section className="flex flex-col  items-center gap-8 md:flex-row md:justify-between">
      <img className="w-80 md:w-96" src={image} alt="product_thumb" />
      <div className="text-center md:text-left max-w-[500px]">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-base mt-2 mb-4">{description}</p>
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <p className="text-4xl font-medium my-1">${price}</p>
          {cartProduct ? (
            <Quantity classes="w-28" quantity={cartProduct.quantity} id={id} />
          ) : (
            <Quantity classes="w-28" quantity={quantity} id={id} />
          )}
        </div>
        <Rating
          classes="justify-center my-4 md:justify-start"
          star={rating.rate}
        />
        <button
          type="button"
          className="font-semibold text-md px-8 py-2 bg-gray-300 rounded capitalize hover:bg-gray-200"
          onClick={handleProduct}
        >
          {inCart ? "remove from cart" : " add to cart"}
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
