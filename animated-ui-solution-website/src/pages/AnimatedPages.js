import { Route, Routes, useLocation } from "react-router-dom";
import Company from "./Company";
import Contact from "./Contact";
import Home from "./Home";
import SharedLayout from "./SharedLayout";
import Works from "./Works";

import { AnimatePresence } from "../../node_modules/framer-motion/dist/framer-motion";

const AnimatedPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedPages;
