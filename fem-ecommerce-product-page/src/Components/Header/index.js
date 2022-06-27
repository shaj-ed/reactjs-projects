import NavBar from "../NavBar";

import logo from "./../../assets/images/logo.svg";
import openIcon from "./../../assets/images/icon-menu.svg";
import closeIcon from "./../../assets/images/icon-close.svg";
import cartIcon from "./../../assets/images/icon-cart.svg";
import avatar from "./../../assets/images/image-avatar.png";
import { useContext, useState } from "react";
import Cart from "../Cart";
import { AppContext } from "../../Context/appContext";

const Header = () => {
  const { product } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <button
        type="button"
        className="header__button header__button--menu"
        onClick={handleNav}
      >
        <img src={isOpen ? closeIcon : openIcon} alt="logo" />
      </button>
      <a
        href="https://fem-ecommerce-product-page.netlify.app"
        className="header__logo"
      >
        <img src={logo} alt="logo" />
      </a>
      <NavBar showNav={isOpen} />
      <button
        type="button"
        className="header__button header__button--cart"
        onClick={toggleCart}
      >
        <img src={cartIcon} className="header__cart" alt="logo" />
        <span
          className={
            product.amount ? "header__quantity display" : "header__quantity"
          }
        >
          {product.amount ? product.amount : null}
        </span>
      </button>
      <button type="button" className="header__button header__button--avatar">
        <img src={avatar} className="header__avatar" alt="logo" />
      </button>
      <Cart show={show} />
    </header>
  );
};

export default Header;
