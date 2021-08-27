import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routers;
