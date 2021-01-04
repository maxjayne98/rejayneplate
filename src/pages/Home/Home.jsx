import React, { useEffect } from "react";
import logo from "../../assets/images/icons/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCouner, selectUsers } from "../../redux/shared/selector";
import {
  increaseCounter,
  decreaseCounter,
  fetchUser,
} from "../../redux/shared/actions.js";
import "./Home.scss";

function Home() {
  const count = useSelector(selectCouner);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseCounter(1));
  };
  const handleDecrement = () => {
    dispatch(decreaseCounter(1));
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

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
          <span className="hom-page__button" onClick={handleIncrement}>
            +
          </span>
          <span className="hom-page__button" onClick={handleDecrement}>
            -
          </span>
        </p>
        <div>
          {users !== [] &&
            users.map((item, index) => {
              return <p key={index}>{item.email}</p>;
            })}
        </div>
      </header>
    </div>
  );
}

export default Home;
