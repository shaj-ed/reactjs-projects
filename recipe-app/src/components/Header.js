import { Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";
import Form from "./Form";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-slate-800 to-slate-600 p-5">
      <Link to="/">
        <h1 className="brand-logo text-center">Tastybite</h1>
      </Link>
      <Form />
      <CategoryMenu />
    </header>
  );
};

export default Header;
