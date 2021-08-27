import { HeaderContainer, CartIcon, MenuIcon } from "./Element";
import SelectedAddressPreview from "./SelectedAddressPreview";
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <CartIcon />
      <SelectedAddressPreview />
      <MenuIcon />
    </HeaderContainer>
  );
};
export default Header;
