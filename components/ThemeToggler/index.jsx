// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext } from "react";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "../../store/ThemeContext";

const ThemeToggler = (props) => {
  const { toggleDarkTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkTheme}>
      Change Theme
    </button>
  );
};

export default ThemeToggler;
