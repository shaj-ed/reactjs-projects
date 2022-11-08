import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <header className="w-full bg-teal-800 p-4">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-xl text-slate-200">cart-app-redux-toolkit.</h1>
        <div className="cursor-pointer relative mr-4">
          <BsCart4 className="text-slate-200 w-8 h-8" />
          <p className="w-7 h-7 bg-purple-300 rounded-full grid place-items-center absolute top-[-8px] left-[18px] text-sm font-semibold">
            {amount}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
