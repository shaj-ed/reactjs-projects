import user from "./../images/image-jeremy.png";

const Header = ({ active, handleClick }) => {
  return (
    <header className="header">
      <div className="user">
        <img src={user} className="user__image" alt="user" />
        <div className="user__info">
          <p className="user__text">Report for</p>
          <h2 className="user__name">
            Jeremy
            <br /> Robson
          </h2>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav__container">
          <li
            className={active === "daily" ? "nav__item active" : "nav__item"}
            onClick={handleClick}
          >
            daily
          </li>
          <li
            className={active === "weekly" ? "nav__item active" : "nav__item"}
            onClick={handleClick}
          >
            weekly
          </li>
          <li
            className={active === "monthly" ? "nav__item active" : "nav__item"}
            onClick={handleClick}
          >
            monthly
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
