import { Restaurant } from "../../../model";
import { Link } from "react-router-dom";
type Props = {
  data: Restaurant;
};

const defaultProps: Props = {
  data: {} as Restaurant,
};

const RestaurantSimpleCard: React.FC<Props> = ({ data }): JSX.Element => {
  const { name, id } = data;
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <Link
        to={{ pathname: `restaurant/${id}` }}
        style={{ color: "yellow", fontSize: "1.5rem", display: "block" }}
      >
        {name}
      </Link>
      <img
        src="https://source.unsplash.com/1600x900/?pizza"
        alt="profile"
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};
RestaurantSimpleCard.defaultProps = defaultProps;

export default RestaurantSimpleCard;
