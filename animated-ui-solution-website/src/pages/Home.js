import Services from "../components/Services";
import Showcase from "../components/Showcase";
import TransitionPages from "./TransitionPages";

const Home = () => {
  return (
    <TransitionPages>
      <Showcase />
      <Services />
    </TransitionPages>
  );
};

export default Home;
