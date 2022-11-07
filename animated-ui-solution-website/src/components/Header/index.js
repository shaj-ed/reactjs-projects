import { useEffect, useState } from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import Theme from "../Theme";
import ToggleNav from "../ToggleNav";
import styles from "./Header.module.css";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.001 }}
      className={
        sticky ? `${styles.header} ${styles.sticky}` : `${styles.header}`
      }
    >
      <div className={styles.container}>
        <Logo />
        <ToggleNav open={open} handleMenu={handleMenu} />
        <Nav open={open} />
        <Theme open={open} />
      </div>
    </motion.header>
  );
};

export default Header;
