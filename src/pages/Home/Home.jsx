// import type { ReactElement } from "react";
// import DefaultLayout from "../layouts/DefaultLayout";
import React from "react";
import { increaseCounter, decreaseCounter } from "../../redux/shared/actions";
import { selectCouner } from "../../redux/shared/selector";
import { toggleTheme } from "../../redux/theme/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

function Home() {
  const counter = useAppSelector(selectCouner);
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(toggleTheme("light"))}>light</button>
      <button onClick={() => dispatch(toggleTheme("dark"))}>dark</button>
      <div>{counter}</div>
      <button onClick={() => dispatch(increaseCounter(1))}>increase</button>
      <button onClick={() => dispatch(decreaseCounter(1))}>decrease</button>
    </>
  );
}

export default Home;
