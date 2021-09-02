import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuList from "../../components/Restaurant/MenuList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRestaurant } from "../../redux/restaurant/actions";
import { fetchCart, submitNormalOrder } from "../../redux/cart/actions";
import {
  selectRestaurant,
  selectRestaurantIsLoading,
} from "../../redux/restaurant/selector";
import { selectCount } from "../../redux/cart/selector";
import CustomAnimated from "../../components/CustomAnimated";

const Restaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { menu } = useAppSelector(selectRestaurant);
  const isLoading: boolean = useAppSelector(selectRestaurantIsLoading);
  const dispatch = useAppDispatch();
  const cartCount = Boolean(useAppSelector(selectCount));
  useEffect(() => {
    dispatch(fetchRestaurant(id));
    dispatch(fetchCart());
  }, []);

  return (
    <>
      <MenuList restaurantId={id} menu={menu} isLoading={isLoading} />
      <div style={{ position: "fixed", bottom: "0", left: "0" }}>
        <CustomAnimated
          isVisible={cartCount}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <div
            style={{ backgroundColor: "red", height: "3rem", width: "100vw" }}
            onClick={() => dispatch(submitNormalOrder())}
          >
            ثبت سفارش
          </div>
        </CustomAnimated>
      </div>
    </>
  );
};

export default Restaurant;
