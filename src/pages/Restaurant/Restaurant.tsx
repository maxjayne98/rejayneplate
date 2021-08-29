import React from "react";
import { useParams } from "react-router-dom";
// import RestaurantList from "../../components/Restaurants/RestaurantList";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { fetchRestaurants } from "../../redux/restaurants/actions";
// import {
//   selectRestaurants,
//   selectRestaurantIsLoading,
// } from "../../redux/restaurants/selector";
// import { useEffect } from "react";

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div style={{ color: "red" }}>{id}</div>
    </>
  );
};

export default Restaurant;
