import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      document.documentElement.setAttribute("color-theme", "dark");
      console.log("dark");
    } else {
      document.documentElement.setAttribute("color-theme", "light");
      console.log("light");
    }
    console.log(isChecked);
  }, [isChecked]);
  return (
    <ThemeContext.Provider value={{ isChecked, handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
