import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Search from "../components/Search";
import SingleProduct from "../components/SingleProduct";
import useGlobalContext from "../Hooks/useGlobalContext";

const Home = () => {
  const {
    state: { loading, error, products, sortBy, searchTerm },
  } = useGlobalContext();

  const allProducts = () => {
    let newProducts = products;

    if (sortBy === "all") return newProducts;

    if (sortBy === "ascending") {
      newProducts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        return 1;
      });
    } else if (sortBy === "descending") {
      newProducts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
        return -1;
      });
    } else if (sortBy === "priceLowHigh") {
      newProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
      newProducts.sort((a, b) => b.price - a.price);
    } else {
      return newProducts;
    }

    if (searchTerm) {
      newProducts = newProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    if (newProducts) return newProducts;
  };

  return (
    <main className="w-full bg-gray-100 px-2 py-10 md:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <Search />
          <Filter />
        </div>
        <section className="my-8 grid justify-center gap-5 grid-cols-[repeat(auto-fit,minmax(250px,250px))]">
          {loading ? <Loading /> : null}
          {error ? (
            <h2 className="text-lg font-bold text-center">
              Something went wrong.
            </h2>
          ) : null}
          {!loading && !error ? (
            <>
              {allProducts().map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </>
          ) : null}
        </section>
      </div>
    </main>
  );
};

export default Home;
