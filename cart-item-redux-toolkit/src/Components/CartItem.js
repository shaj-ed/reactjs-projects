import { BiMinus, BiPlus } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseItem, deleteItem, increaseItem } from "../features/cartSlice";

const CartItem = ({ product }) => {
  const { id, title, price, img, amount } = product;

  const dispatch = useDispatch();

  return (
    <article className="flex items-center w-full border-b border-b-stone-800 py-2">
      <img src={img} className="w-24 h-24" alt={title} />
      <div className="ml-6">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm font-bold">${price}</p>
        <button
          type="button"
          className="text-xl"
          onClick={() => dispatch(deleteItem(id))}
        >
          <AiOutlineDelete />
        </button>
      </div>
      <div className="flex gap-4 ml-auto items-center bg-slate-400 rounded overflow-hidden">
        <button
          type="button"
          className="text-xl p-2 bg-slate-500  text-slate-100 hover:opacity-80"
          onClick={() => {
            if (amount === 1) {
              dispatch(deleteItem(id));
              return;
            }
            dispatch(decreaseItem(id));
          }}
        >
          <BiMinus />
        </button>
        <p className="text-xxl font-semibold text-slate-800">{amount}</p>
        <button
          type="button"
          className="text-xl p-2 bg-slate-500 text-slate-100 hover:opacity-80"
          onClick={() => dispatch(increaseItem(id))}
        >
          <BiPlus />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
