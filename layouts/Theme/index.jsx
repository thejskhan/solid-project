// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext } from "react";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "../../store/ThemeContext";

const ThemeLayout = ({ children, ...props }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      {children}
    </div>
  );
};

export default ThemeLayout;
