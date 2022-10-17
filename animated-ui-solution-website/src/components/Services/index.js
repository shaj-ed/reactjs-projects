import styles from "./Services.module.css";
import graphic from "./../../assets/graphic-design.jpg";
import web from "./../../assets/web-design.jpg";
import app from "./../../assets/app-design.jpg";
import { Link } from "react-router-dom";

import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

const Services = () => {
  return (
    <motion.section
      className={styles.service}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Link
        to="/works"
        className={styles.card}
        style={{ backgroundImage: `url(${graphic})` }}
      >
        <h2 className={styles.title}>Graphic Design</h2>
      </Link>
      <Link
        to="/works"
        className={styles.card}
        style={{ backgroundImage: `url(${web})` }}
      >
        <h2 className={styles.title}>Web Design</h2>
      </Link>
      <Link
        to="/works"
        className={styles.card}
        style={{ backgroundImage: `url(${app})` }}
      >
        <h2 className={styles.title}>App Design</h2>
      </Link>
    </motion.section>
  );
};

export default Services;
