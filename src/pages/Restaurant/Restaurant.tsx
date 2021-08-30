import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuList from "../../components/Restaurant/MenuList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRestaurant } from "../../redux/restaurant/actions";
import {
  selectRestaurant,
  selectRestaurantIsLoading,
} from "../../redux/restaurant/selector";
import { createEmptyArray } from "../../utils/utilityFunctions";
import FoodItemLoader from "../../components/Loader/FoodItemLoader";

const loaderArry = createEmptyArray(10);
const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { menu } = useAppSelector(selectRestaurant);
  const isLoading: boolean = useAppSelector(selectRestaurantIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRestaurant(id));
  }, []);

  const loader = loaderArry.map((item, index) => (
    <FoodItemLoader key={index} />
  ));
  if (isLoading) return <>{loader}</>;
  return (
    <>
      <MenuList menu={menu} />
    </>
  );
};

export default Restaurant;
