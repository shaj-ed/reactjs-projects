import { Link } from "react-router-dom";
import styles from "./Showcase.module.css";
import showcaseImage from "./../../assets/modern_design.svg";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.content}>
        <h1 className={styles.title}>Simple Designs and Digital Solutions.</h1>
        <p className={styles.description}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <Link to="/company" className={styles.cta}>
          Learn More
        </Link>
      </div>
      <div className={styles.image}>
        <img src={showcaseImage} alt="showcase thumb" />
      </div>
    </section>
  );
};

export default Showcase;
