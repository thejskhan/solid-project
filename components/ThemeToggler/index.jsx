// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext, forwardRef } from "react";

// IMPORTING STYLED COMPONENTS
import styled from "styled-components";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "@/store/ThemeContext";

// IMPORTING ICON
// import { DarkTheme } from "@styled-icons/fluentui-system-filled/DarkTheme";
import { LightMode } from "@styled-icons/material/LightMode";
import { DarkMode } from "@styled-icons/material/DarkMode";

const StyledLightMode = styled(LightMode)`
  height: 1.2em;
  margin-right: 0.3em;
`;

const StyledDarkMode = styled(DarkMode)`
  height: 1.2em;
  margin-right: 0.3em;
`;

const ThemeToggler = forwardRef(function ThemeTogglerWithoutRef(props, ref) {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkTheme}
      style={{ fontSize: props.size }}
      className={props.className}
      ref={ref}
      aria-label="Toggle Theme"
    >
      {darkTheme ? <StyledDarkMode /> : <StyledLightMode />}
      Change Theme
    </button>
  );
});

export default ThemeToggler;
