import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import Profile from "./pages/User";

const Orders = () => {
  return <div>سفارشات</div>;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/restaurant/:id" exact component={Restaurant} />
      </Switch>
    </Router>
  );
}

export default App;
