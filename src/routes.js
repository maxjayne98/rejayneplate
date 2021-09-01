import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Error } from "./components/Lottie";
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
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
