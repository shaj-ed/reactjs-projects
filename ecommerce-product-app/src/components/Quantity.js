import useGlobalContext from "../Hooks/useGlobalContext";

const Quantity = ({ classes, id, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useGlobalContext();
  return (
    <div
      className={`px-4 py-2 rounded bg-gray-200 flex items-center justify-between ${classes}`}
    >
      <button
        type="button"
        className="text-lg font-semibold"
        onClick={() => decreaseQuantity(id)}
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        type="button"
        className="text-lg font-semibold"
        onClick={() => increaseQuantity(id)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
