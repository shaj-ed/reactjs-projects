import About from "../components/About";
import Services from "../components/Services";
import TransitionPages from "./TransitionPages";

const Company = () => {
  return (
    <TransitionPages>
      <About />
      <Services />
    </TransitionPages>
  );
};

export default Company;
