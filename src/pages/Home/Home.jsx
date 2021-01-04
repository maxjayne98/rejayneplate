import React from "react";
import logo from "../../assets/images/icons/logo.svg";
import { useSelector } from "react-redux";
import { selectCouner } from "../../redux/shared/selector";
import "./Home.scss";

function Home() {
  const count = useSelector(selectCouner);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{count}</p>
        <p>
          <span>+</span>
          <span>-</span>
        </p>
      </header>
    </div>
  );
}

export default Home;
