import SingleProduct from "./SingleProduct";

const ProductList = () => {
  return (
    <section className="my-8 grid justify-center gap-5 grid-cols-[repeat(auto-fit,minmax(250px,250px))]">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </section>
  );
};

export default ProductList;
