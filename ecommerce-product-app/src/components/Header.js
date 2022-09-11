import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "./Logo";
import useGlobalContext from "../Hooks/useGlobalContext";

const Header = () => {
  const {
    state: { cart },
  } = useGlobalContext();
  return (
    <header className="p-3 bg-gray-300 md:p-4">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <Logo color="text-black" />
        <Link to="/cart" className="text-2xl cursor-pointer relative">
          <FiShoppingCart />
          {cart.length > 0 ? (
            <span className="grid items-center text-center text-xs font-semibold w-6 h-6 rounded-full bg-gray-700 text-gray-300 absolute top-[-12px] left-[8px]">
              {cart.length}
            </span>
          ) : null}
        </Link>
      </div>
    </header>
  );
};

export default Header;
