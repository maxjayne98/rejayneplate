import styled from "styled-components";
import { themeActions } from "../../../redux/theme/slice";

const foodImageSize = "6.4rem";

export const MenuItemContainer = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.textPrimary};
  &:not(:last-child) {
    border-bottom: ${({ theme }) => `1px solid ${theme.textPrimary}`};
  }
`;
export const MenuItemFoodDetail = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MenuItemFoodImageContainer = styled.div`
  position: relative;
  width: ${foodImageSize};
  height: ${foodImageSize};
`;

export const MenuItemFoodImageBadge = styled.div`
  position: absolute;
  top: 0;
  left: 10;
`;

export const MednuItemFoodImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const MenuItemFoodTextContainer = styled.div`
  width: calc(100% - ${foodImageSize});
  margin-left: 0.8rem;
`;

export const MenuItemFoodName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const MenuItemFoodDescription = styled.div`
  font-size: 1.2rem;
`;

export const MenuItemSpecialityText = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 0.8rem;
`;

export const MenuItemFinancialDetail = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.8rem;
`;

export const MenuItemSalesTag = styled.div`
  width: 5ch;
  height: 5ch;
  padding: 0.6rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const MenuItemOldPrice = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  text-decoration: line-through;
`;

export const MenuItemPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const MenuItemPriceContainer = styled.div`
  margin: 0 0.4rem 0 auto;
`;

export const MenuItemAddToCardButton = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  padding: 1rem 0.2rem;
  color: ${({ theme }) => theme.primary};
  border: ${({ theme }) => `1.5px solid ${theme.primary}`};
  width: 7.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  font-size: 1.4rem;
`;

export const MenuItemFinished = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  padding: 1rem 0.2rem;
  background-color: ${({ theme }) => theme.textPrimary};
  border: ${({ theme }) => `1.5px solid ${theme.textPrimary}`};
  color: white;
  width: 7.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  font-size: 1.4rem;
`;
