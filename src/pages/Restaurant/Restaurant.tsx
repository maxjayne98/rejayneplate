import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuList from "../../components/Restaurant/MenuList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRestaurant } from "../../redux/restaurant/actions";
import { fetchCard } from "../../redux/cart/actions";
import {
  selectRestaurant,
  selectRestaurantIsLoading,
} from "../../redux/restaurant/selector";

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { menu } = useAppSelector(selectRestaurant);
  const isLoading: boolean = useAppSelector(selectRestaurantIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRestaurant(id));
    dispatch(fetchCard());
  }, []);

  return (
    <>
      <MenuList restaurantId={id} menu={menu} isLoading={isLoading} />
    </>
  );
};

export default Restaurant;
