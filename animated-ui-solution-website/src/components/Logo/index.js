import { RiContrastFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.container}>
      <RiContrastFill className={styles.icon} />
      <h1 className={styles.text}>UI Solution.</h1>
    </Link>
  );
};

export default Logo;
