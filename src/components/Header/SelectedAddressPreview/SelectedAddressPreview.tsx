import {
  AddressPreviewContainer,
  AddressPreviewText,
  DownArrow,
} from "./Elements";

const SelectedAddressPreview: React.FC = () => {
  const address = "بلوار دریا -توحید چهارم - پلاک ۱۱ - واحد۵۶";
  return (
    <AddressPreviewContainer>
      <AddressPreviewText>{address}</AddressPreviewText>
      <DownArrow />
    </AddressPreviewContainer>
  );
};
export default SelectedAddressPreview;
