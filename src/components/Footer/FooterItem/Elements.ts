import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineHome,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const ItemContainer = styled(Link)<{
  isActive: boolean;
}>`
  flex: 1;
  text-align: center;
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
`;

export const ItemText = styled.div<{
  isActive: boolean;
}>`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
  display: block;
  text-decoration: none;
  font-size: 1.4rem;
`;
export const UserIcon = styled(AiOutlineUser)<{
  isActive: boolean;
}>`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
  font-size: 2rem;
  transition: color 0.5s ease;
`;

export const OrdersIcon = styled(AiOutlineUnorderedList)<{
  isActive: boolean;
}>`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
  font-size: 2rem;
  transition: color 0.5s ease;
`;

export const HomeIcon = styled(AiOutlineHome)<{
  isActive: boolean;
}>`
  color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.textColor1};
  font-size: 2rem;
  transition: color 0.5s ease;
`;
