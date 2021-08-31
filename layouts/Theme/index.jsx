// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext } from "react";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "../../store/ThemeContext";

const ThemeLayout = ({ children, ...props }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <style jsx global>{`
        body {
          background-color: ${darkTheme ? "#222831" : "#efefef"};
          color: ${darkTheme ? "#d2d3d3" : "#4e535a"};
        }
      `}</style>
      {children}
    </div>
  );
};

export default ThemeLayout;
