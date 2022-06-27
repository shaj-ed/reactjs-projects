import { v4 as uuid } from "uuid";

const navItem = ["Collections", "Men", "Women", "About", "Contact"];

const NavBar = ({ showNav }) => {
  return (
    <nav className={showNav ? "nav show-nav" : "nav"}>
      {navItem.map((item) => {
        return (
          <a key={uuid()} href="item.com" className="nav__item">
            {item}
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;
