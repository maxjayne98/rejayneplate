import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantList from "../../components/Restaurants/RestaurantList";
import ModalSheild from "../../components/Modals/ModalSheild";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRestaurants } from "../../redux/restaurants/actions";
import {
  selectRestaurants,
  selectRestaurantIsLoading,
} from "../../redux/restaurants/selector";
import { useEffect } from "react";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(selectRestaurants);
  const isRestaurantLoading = useAppSelector(selectRestaurantIsLoading);

  useEffect(() => {
    const isRestaurantsListEmpty = restaurants.length;
    !isRestaurantsListEmpty && dispatch(fetchRestaurants());
  }, []);

  const [menuModalState, setmenuModalState] = useState(false);

  return (
    <>
      <Link to="restaurant/4353" style={{ color: "red" }}>
        saaaaalaaam
      </Link>
      <div
        style={{ color: "blue", fontSize: "2rem" }}
        onClick={() => setmenuModalState(true)}
      >
        Moooodal Menu
      </div>
      {menuModalState && (
        <ModalSheild
          onClose={() => setmenuModalState(false)}
          modal={<div style={{ color: "red" }}>menuuuu</div>}
        />
      )}
      <RestaurantList
        restaurants={restaurants}
        isLoading={isRestaurantLoading}
      />
    </>
  );
};

export default Home;
