import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="p-5 bg-gray-600">
      <div className="max-w-5xl mx-auto flex items-center gap-10 flex-col">
        <Logo color="text-white" />
        <div className="text-center">
          <Link
            to="/"
            className="block text-base font-semibold text-gray-300 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/"
            className="block text-base font-semibold text-gray-300 hover:text-gray-400"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block text-base font-semibold text-gray-300 hover:text-gray-400"
          >
            Cart
          </Link>
        </div>
      </div>
      <p className="text-center text-gray-100 text-sm mt-8">copyright text</p>
    </footer>
  );
};

export default Footer;
