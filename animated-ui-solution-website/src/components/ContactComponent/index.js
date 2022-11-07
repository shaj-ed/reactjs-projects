import Form from "./../Form";
import styles from "./Contact.module.css";

const ContactComponent = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.desc}>
        Let's have some goodie goodie conversation or if you have something
        kicking around on your mind feel free to knock us.
      </p>
      <Form />
    </section>
  );
};

export default ContactComponent;
