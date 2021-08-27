import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Orders = () => {
  return <div>سفارشات</div>;
};

const Profile = () => {
  return <div>پروفایل</div>;
};

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routers;
