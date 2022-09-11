import { Link } from "react-router-dom";
import Rating from "./Rating";

const RelatedProduct = ({ product }) => {
  const { id, image, rating, title } = product;
  return (
    <Link
      to={`/product/${id}`}
      state={product}
      className="block w-32 shadow-lg p-4 rounded hover:shadow-2xl"
    >
      <img className="w-full mb-4" src={image} alt="product_thumb" />
      <h3 className="text-center text-sm font-semibold">{title}</h3>
      <Rating classes="justify-center mt-2" star={rating.rate} />
    </Link>
  );
};

export default RelatedProduct;
