import { useSelector } from "react-redux";

const Total = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <section className="mt-5 flex justify-between items-center w-full">
      <h2 className="text-2xl font-bold">Total Total</h2>
      <p className="text-3xl font-bold">${total.toFixed(2)}</p>
    </section>
  );
};

export default Total;
