import { createContext, useState } from "react";

const ThemeContext = createContext({
  darkTheme: false,
  toggleDarkTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const context = { darkTheme: darkTheme, toggleDarkTheme: toggleDarkTheme };

  return (
    <ThemeContext.Provider value={context}>
      <div className={darkTheme ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
