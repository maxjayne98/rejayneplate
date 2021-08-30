import React, { useState } from "react";
import RestaurantList from "../../components/Restaurants/RestaurantList";
import ModalSheild from "../../components/Modals/ModalSheild";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRestaurants } from "../../redux/restaurants/actions";
import {
  selectRestaurants,
  selectRestaurantIsLoading,
  selectRestaurantsError,
} from "../../redux/restaurants/selector";
import { useEffect } from "react";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(selectRestaurants);
  const isRestaurantLoading = useAppSelector(selectRestaurantIsLoading);
  const restaurantsError = useAppSelector(selectRestaurantsError);

  useEffect(() => {
    const isRestaurantsListEmpty = restaurants.length;
    !isRestaurantsListEmpty && dispatch(fetchRestaurants());
  }, []);

  const [menuModalState, setmenuModalState] = useState(false);

  return (
    <>
      <DefaultLayout>
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
          hasError={restaurantsError}
        />
      </DefaultLayout>
    </>
  );
};

export default Home;
