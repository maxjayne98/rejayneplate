import React, { useState, useRef, useEffect } from "react";
import RestaurantList from "../../components/Restaurants/RestaurantList";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRestaurants } from "../../redux/restaurants/actions";
import {
  fetchFoodPartyFoods,
  fetchFoodPartyEndTime,
} from "../../redux/foodParty/actions";
import {
  selectRestaurants,
  selectRestaurantIsLoading,
  selectRestaurantsError,
} from "../../redux/restaurants/selector";
import FoodPartyFoodList from "../../components/FoodParty/FoodList";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(selectRestaurants);
  const isRestaurantLoading = useAppSelector(selectRestaurantIsLoading);
  const restaurantsError = useAppSelector(selectRestaurantsError);
  const loader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isRestaurantsListEmpty = restaurants.length;
    !isRestaurantsListEmpty && dispatch(fetchRestaurants());
  }, []);

  useEffect(() => {
    dispatch(fetchFoodPartyEndTime());
    dispatch(fetchFoodPartyFoods());
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities: any) => {
    const target = entities[0];

    if (target.isIntersecting) {
      dispatch(fetchRestaurants());
    }
  };

  return (
    <>
      <DefaultLayout>
        <FoodPartyFoodList />

        <RestaurantList
          restaurants={restaurants}
          isLoading={isRestaurantLoading}
          hasError={restaurantsError}
          loadMoreRef={loader}
        />
      </DefaultLayout>
    </>
  );
};

export default Home;
