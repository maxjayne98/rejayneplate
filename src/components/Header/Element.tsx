import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.4rem;
`;

export const MenuIcon = styled(AiOutlineMenu)`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.4rem;
`;
