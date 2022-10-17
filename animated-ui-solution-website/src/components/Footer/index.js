import Logo from "../Logo";
import styles from "./Footer.module.css";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiDribbbleFill,
} from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <Logo />
        <div className={styles.content}>
          <div className={styles.address}>
            <p>UI Solutions</p>
            <p>302 D.T. Road</p>
            <p>Chattogram, Bangladesh</p>
          </div>
          <div className={styles.contact}>
            <p>Contact at UI Solutions Office</p>
            <p>Phone: +8801830215699</p>
            <p>Email: shajedsr@gmail.com</p>
          </div>
          <div className={styles.social}>
            <RiTwitterLine />
            <RiDribbbleFill />
            <RiFacebookCircleLine />
            <IoLogoInstagram />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
