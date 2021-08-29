import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestaurantList from "../../components/Restaurants/RestaurantList";
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

  const location = useLocation();

  return (
    <>
      <Link to="restaurant/4353" style={{ color: "red" }}>
        saaaaalaaam
      </Link>
      <div>
        <Link
          to={{
            pathname: `/modal/card`,
            state: { background: location },
          }}
          style={{ color: "green", fontSize: "2rem" }}
        >
          Moooodal Card
        </Link>
      </div>
      <div>
        <Link
          to={{
            pathname: `/modal/menu`,
            state: { background: location },
          }}
          style={{ color: "blue", fontSize: "2rem" }}
        >
          Moooodal Menu
        </Link>
      </div>
      <RestaurantList
        restaurants={restaurants}
        isLoading={isRestaurantLoading}
      />
    </>
  );
};

export default Home;
