// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext } from "react";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "../../store/ThemeContext";

// IMPORTING BASE STYLES TO THEMIFY BACKGROUND & TEXT COLORS
import styles from "./Theme.module.scss";

const ThemeLayout = ({ children, ...props }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className={styles.base}>{children}</div>
    </div>
  );
};

export default ThemeLayout;
