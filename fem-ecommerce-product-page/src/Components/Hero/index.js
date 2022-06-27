import Slider from "../Slider";
import Product from "./Product";

const Hero = () => {
  return (
    <main className="product">
      <div className="product__slider">
        <Slider />
      </div>
      <div className="product__content">
        <Product />
      </div>
    </main>
  );
};

export default Hero;
