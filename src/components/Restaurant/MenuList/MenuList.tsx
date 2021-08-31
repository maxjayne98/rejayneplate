import React from "react";
import { Food } from "../../../model/Food";
import MenuItem from "../MenuItem";
import FoodItemLoader from "../../Loader/FoodItemLoader";
import { createEmptyArray } from "../../../utils";
interface Props {
  menu: Array<Food>;
  isLoading: boolean;
  restaurantId: string;
}
const defautlProps = {
  menu: [],
  isLoading: true,
  restaurantId: "",
};

const loaderArry = createEmptyArray(10);

export const MenuList: React.FC<Props> = ({
  menu: menuList,
  isLoading,
  restaurantId,
}) => {
  const loader = loaderArry.map((item, index) => (
    <FoodItemLoader key={index} />
  ));

  const menu = menuList.map((food, index) => (
    <MenuItem food={food} key={index} restaurantId={restaurantId} />
  ));
  if (isLoading) return <>{loader}</>;
  return <div>{menu}</div>;
};

MenuList.defaultProps = defautlProps;

export default MenuList;
