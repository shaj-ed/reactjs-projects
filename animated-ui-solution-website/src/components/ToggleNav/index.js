import styles from "./ToggleNav.module.css";

const ToggleNav = ({ open, handleMenu }) => {
  return (
    <button
      type="button"
      className={
        open
          ? `${styles.toggle_button} ${styles.active}`
          : `${styles.toggle_button}`
      }
      onClick={handleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleNav;
