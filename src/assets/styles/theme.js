import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => {
      return theme.body;
    }};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  html { font-size: 62.5%; }

`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  primary: "#151515",
};
export const darkTheme = {
  body: "#151515",
  text: "#121620",
  primary: "#cb0183",
  textColor1: "#f1f1f1",
  textColor2: "#f1f1f1",
  textColor3: "#f1f1f1",
  textColor4: "#f1f1f1",
  iconColor1: "#cbcbcb",
};
