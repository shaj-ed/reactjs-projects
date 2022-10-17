import styles from "./About.module.css";
import showcaseStyles from "./../Showcase/Showcase.module.css";
import aboutBg from "./../../assets/about_bg.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      ></div>
      <div className={styles.content}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          What Is Lorem Ipsum? Lorem ipsum is the short-hand term for the most
          popular placeholder text in history, used for decades by graphic
          designers, web developers, and the publishing industry.Here's what a
          paragraph of lorem ipsum looks like:.
        </p>
      </div>
    </section>
  );
};

export default About;
