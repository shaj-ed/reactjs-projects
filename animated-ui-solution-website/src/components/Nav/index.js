import { Link } from "react-router-dom";
// import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import styles from "./Nav.module.css";

const Nav = ({ open }) => {
  return (
    <nav className={open ? `${styles.nav} ${styles.active}` : `${styles.nav}`}>
      <ul className={styles.container}>
        <li>
          <Link to="/company" className={styles.link}>
            Our Company
          </Link>
        </li>
        <li>
          <Link to="/works" className={styles.link}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
