import { useLocation } from "react-router-dom";
import ProductShowcase from "../components/ProductShowcase";
import RelatedProductsList from "../components/RelatedProductsList";

const Product = () => {
  const location = useLocation();
  const product = location.state;
  return (
    <main className="py-12 px-3">
      <div className="max-w-5xl mx-auto">
        <ProductShowcase product={product} />
        <RelatedProductsList category={product.category} id={product.id} />
      </div>
    </main>
  );
};

export default Product;
