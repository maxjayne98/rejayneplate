import React from "react";
import { Food } from "../../../model";
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

interface Props {
  food: Food;
}

const defaultProps = {
  food: {} as Food,
};

const MenuItem: React.FC<Props> = ({ food }) => {
  const { description, image, name, popularity, price } = food;
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
        {showComponentBy10percentProb() && (
          <MenuItemSpecialityText>مخصوی بیروتی</MenuItemSpecialityText>
        )}
        <MenuItemFinancialDetail>
          {showComponentBy10percentProb() && (
            <MenuItemSalesTag>%۴۵</MenuItemSalesTag>
          )}
          <MenuItemPriceContainer>
            <MenuItemOldPrice>200000</MenuItemOldPrice>
            <div>
              <MenuItemPrice> 160000</MenuItemPrice>
              تومان
            </div>
          </MenuItemPriceContainer>
          {showComponentBy10percentProb() ? (
            <MenuItemFinished>تمام شد.</MenuItemFinished>
          ) : (
            <MenuItemAddToCardButton>افزودن</MenuItemAddToCardButton>
          )}
        </MenuItemFinancialDetail>
      </div>
    </MenuItemContainer>
  );
};

MenuItem.defaultProps = defaultProps;
export default MenuItem;
