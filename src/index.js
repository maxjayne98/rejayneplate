import React from "react";
import ReactDOM from "react-dom";
// import "./assets/styles/main.scss";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyles } from "./assets/styles/theme";

import reportWebVitals from "./reportWebVitals";
import CustomThemeProvider from "./components/Theme/CustomThemeProvider";

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <GlobalStyles />
      <Routes />
    </CustomThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
