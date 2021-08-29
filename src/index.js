import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./assets/styles/theme";
import reportWebVitals from "./reportWebVitals";
import CustomThemeProvider from "./components/Theme/CustomThemeProvider";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <ToastContainer />
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
