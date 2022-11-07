import { useContext } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/themeContext";
import styles from "./Theme.module.css";

const Theme = ({ open }) => {
  const { isChecked, handleChange } = useContext(ThemeContext);

  return (
    <label
      className={
        open ? `${styles.container} ${styles.active}` : `${styles.container}`
      }
      htmlFor="checkbox-theme"
    >
      <input
        type="checkbox"
        role="switch"
        aria-label="light/dark mode"
        id="checkbox-theme"
        value={isChecked}
        checked={isChecked}
        onChange={handleChange}
      />
      <span>{isChecked ? <MdDarkMode /> : <MdOutlineDarkMode />}</span>
    </label>
  );
};

export default Theme;
