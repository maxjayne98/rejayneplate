import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routers;
