import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addFood, deleteFood } from "../../../redux/cart/actions";
import { selectFoods, selectCount } from "../../../redux/cart/selector";
import { Food, CartFood } from "../../../model";
import {
  MenuItemContainer,
  MenuItemFoodDetail,
  MenuItemFoodImageContainer,
  MednuItemFoodImage,
  MenuItemFoodTextContainer,
  MenuItemFoodName,
  MenuItemFoodDescription,
  MenuItemSpecialityText,
  MenuItemFinancialDetail,
  MenuItemSalesTag,
  MenuItemOldPrice,
  MenuItemPrice,
  MenuItemAddToCardButton,
  MenuItemPriceContainer,
  MenuItemFinished,
} from "./Elements";

import { showComponentBy10percentProb } from "../../../utils";
import { useEffect } from "react";
import { isObjectEmpty } from "../../../utils";

interface Props {
  food: Food;
  restaurantId: string;
}

const defaultProps = {
  food: {} as Food,
  restaurantId: "",
};

const MenuItem: React.FC<Props> = ({ food, restaurantId }) => {
  const { description, image, name, popularity, price } = food;
  const dispatch = useAppDispatch();
  const cartFoods = useAppSelector(selectFoods);
  const cartAllFoodsLength: undefined | number =
    cartFoods &&
    cartFoods.reduce((acc: number, item: CartFood) => acc + item.count, 0);

  const cartCount = useAppSelector(selectCount);

  const [currentFoodInCart, setCurrentFoodInCart] = useState<
    undefined | CartFood
  >(undefined);

  const addFoodOnClick = () => {
    dispatch(addFood(name, restaurantId, 1));
  };

  const deleteFoodOnClick = () => {
    dispatch(deleteFood(name));
  };

  useEffect(() => {
    if (cartAllFoodsLength) {
      const currentFood = cartFoods.find((item) => item.food.name === name);
      if (currentFood) setCurrentFoodInCart(currentFood);
    } else if (cartCount === 0) {
      setCurrentFoodInCart(undefined);
    }
  }, [cartAllFoodsLength, cartCount]);

  return (
    <MenuItemContainer>
      <MenuItemFoodDetail>
        <MenuItemFoodTextContainer>
          <MenuItemFoodName>{name}</MenuItemFoodName>
          <MenuItemFoodDescription>{description}</MenuItemFoodDescription>
        </MenuItemFoodTextContainer>
        <MenuItemFoodImageContainer>
          <MednuItemFoodImage src={image} alt="foodImage"></MednuItemFoodImage>
        </MenuItemFoodImageContainer>
      </MenuItemFoodDetail>
      <div>
        {/* {showComponentBy10percentProb() && (
          <MenuItemSpecialityText>مخصوی بیروتی</MenuItemSpecialityText>
        )} */}
        <MenuItemFinancialDetail>
          {/* {showComponentBy10percentProb() && (
            <MenuItemSalesTag>%۴۵</MenuItemSalesTag>
          )} */}
          <MenuItemPriceContainer>
            <MenuItemOldPrice>200000</MenuItemOldPrice>
            <div>
              <MenuItemPrice> 160000</MenuItemPrice>
              تومان
            </div>
          </MenuItemPriceContainer>
          {isObjectEmpty(currentFoodInCart) ? (
            <MenuItemAddToCardButton onClick={() => addFoodOnClick()}>
              افزودن
            </MenuItemAddToCardButton>
          ) : (
            <div>
              <span
                style={{ fontSize: "1.8rem", marginRight: "1rem" }}
                onClick={() => addFoodOnClick()}
              >
                +
              </span>
              <span style={{ fontSize: "1.8rem", marginRight: "1rem" }}>
                {currentFoodInCart?.count}
              </span>
              <span
                style={{ fontSize: "1.8rem", marginRight: "1rem" }}
                onClick={() => deleteFoodOnClick()}
              >
                -
              </span>
            </div>
          )}
        </MenuItemFinancialDetail>
      </div>
    </MenuItemContainer>
  );
};

MenuItem.defaultProps = defaultProps;
export default MenuItem;
