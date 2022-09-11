import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";
import RelatedProduct from "./RelatedProduct";

const RelatedProductsList = ({ category, id }) => {
  const getCategory = (category) => {
    let categoryUrl = category;
    if (category === `men's clothing`) {
      return (categoryUrl = `men's%20clothing`);
    } else if (category === `women's clothing`) {
      return (categoryUrl = `women's%20clothing`);
    }

    return categoryUrl;
  };
  const url = `https://fakestoreapi.com/products/category/${getCategory(
    category
  )}`;

  const state = useFetch(url);
  const { categoryProducts, loading, error } = state;
  const relatedProducts = categoryProducts.filter(
    (product) => product.id !== id
  );

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold">Related Products.</h2>
      <div className="mt-8 flex gap-8 flex-wrap">
        {loading ? <Loading /> : null}
        {error ? (
          <h2 className="text-lg font-bold text-center">
            Something went wrong at fetch.
          </h2>
        ) : null}
        {!loading && !error && relatedProducts ? (
          <>
            {relatedProducts.map((product) => (
              <RelatedProduct key={product.id} product={product} />
            ))}
          </>
        ) : null}
      </div>
    </section>
  );
};

export default RelatedProductsList;
