import styles from "./Form.module.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("HELLO THERE");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" className={styles.input} placeholder="name" />
      <input type="email" className={styles.input} placeholder="email" />
      <textarea
        cols=""
        rows="5"
        className={styles.textarea}
        placeholder="your messages"
      ></textarea>

      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
};

export default Form;
