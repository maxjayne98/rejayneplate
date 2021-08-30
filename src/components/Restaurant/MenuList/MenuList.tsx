import React from "react";
import { Food } from "../../../model/Food";
import MenuItem from "../MenuItem";
interface Props {
  menu: Array<Food>;
}
const defautlProps = {
  menu: [],
};
export const MenuList: React.FC<Props> = ({ menu: menuList }) => {
  const menu = menuList.map((food, index) => (
    <MenuItem food={food} key={index} />
  ));
  return <div>{menu}</div>;
};

MenuList.defaultProps = defautlProps;

export default MenuList;
