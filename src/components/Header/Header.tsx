import { useEffect, useState } from "react";
import { HeaderContainer, CartIcon, MenuIcon } from "./Element";
import SelectedAddressPreview from "./SelectedAddressPreview";
import { fetchCard } from "../../redux/cart/actions";
import { selectCart } from "../../redux/cart/selector";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MenuModal from "../Modals/MenuModal";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  useEffect(() => {
    dispatch(fetchCard());
  }, []);

  return (
    <HeaderContainer>
      <MenuIcon
        onClick={() => {
          setIsMenuClicked(true);
        }}
      />
      {isMenuClicked && <MenuModal onClose={() => setIsMenuClicked(false)} />}
      <SelectedAddressPreview />
      <CartIcon />
    </HeaderContainer>
  );
};
export default Header;
