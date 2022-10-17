import styles from "./SingleProjects.module.css";

import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

const SingleProjects = ({ title, thumb }) => {
  return (
    <motion.article
      className={styles.project}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <img src={thumb} className={styles.thumb} alt="project thumb" />
      <h3 className={styles.title}>{title}</h3>
    </motion.article>
  );
};

export default SingleProjects;
