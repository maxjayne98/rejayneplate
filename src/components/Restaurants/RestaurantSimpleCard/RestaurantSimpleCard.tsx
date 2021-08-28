import { Restaurant } from "../../../model";

type Props = {
  data: Restaurant;
};

const defaultProps: Props = {
  data: {} as Restaurant,
};

const RestaurantSimpleCard: React.FC<Props> = ({ data }): JSX.Element => {
  const { name } = data;
  return (
    <>
      <div>{name}</div>
      <img
        src="https://source.unsplash.com/1600x900/?pizza"
        alt="profile"
        style={{ width: "200px", height: "200px" }}
      />
    </>
  );
};
RestaurantSimpleCard.defaultProps = defaultProps;

export default RestaurantSimpleCard;
