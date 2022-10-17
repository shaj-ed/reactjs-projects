import { motion } from "../../node_modules/framer-motion/dist/framer-motion";

const TransitionPages = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100% ", transition: { duration: 0.1 } }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.main>
  );
};

export default TransitionPages;
