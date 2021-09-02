import { createGlobalStyle } from "styled-components";
import IranSans from "../fonts/style.css";
import { normalize } from "./normalizer";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${IranSans}
  body {
    background: ${({ theme }) => {
      return theme.body;
    }};
    /* font-family: "IRANSans-web"; */
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif,"IRANSans-web";
    transition: background 0.2s ease-in, color 0.2s ease-in;
    direction:rtl;
  }
  html { font-size: 62.5%; }

`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  primary: "#151515",
  textPrimary: "#969892",
  borderRadius: "0.8rem",
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
  textPrimary: "#969892",
  borderRadius: "0.8rem",
};
