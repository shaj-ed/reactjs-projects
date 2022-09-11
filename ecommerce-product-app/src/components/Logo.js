import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  return (
    <Link to="/" className={`${color} font-bold text-2xl tracking-wide`}>
      yooProduct.
    </Link>
  );
};

export default Logo;
