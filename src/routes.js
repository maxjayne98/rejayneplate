import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import CardModal from "./components/Modals/CardModal";
import MenuModal from "./components/Modals/MenuModal";

const Orders = () => {
  return <div>سفارشات</div>;
};

const Profile = () => {
  return <div>پروفایل</div>;
};

function Routers() {
  const location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Header />
      <Switch location={background || location}>
        <Route path="/" exact component={Home} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/restaurant/:id" exact component={Restaurant} />
      </Switch>
      <Footer />
      {background && (
        <Switch>
          <Route path="/modal/card" exact component={CardModal} />
          <Route path="/modal/menu" exact component={MenuModal} />
        </Switch>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
