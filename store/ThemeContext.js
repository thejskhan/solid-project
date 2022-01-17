import { createContext, useState } from "react";

const ThemeContext = createContext({
  darkTheme: false,
  toggleDarkTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const context = { darkTheme: darkTheme, toggleDarkTheme: toggleDarkTheme };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
