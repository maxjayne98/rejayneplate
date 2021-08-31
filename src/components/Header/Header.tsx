import { useEffect } from "react";
import { HeaderContainer, CartIcon, MenuIcon } from "./Element";
import SelectedAddressPreview from "./SelectedAddressPreview";
import { fetchCard } from "../../redux/cart/actions";
import { selectCart } from "../../redux/cart/selector";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  useEffect(() => {
    dispatch(fetchCard());
  }, []);
  return (
    <HeaderContainer>
      <CartIcon />
      <SelectedAddressPreview />
      <MenuIcon />
    </HeaderContainer>
  );
};
export default Header;
