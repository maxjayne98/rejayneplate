import { Restaurant } from "../../../model";
import RestaurantSimpleCard from "../RestaurantSimpleCard";
type Props = {
  restaurants: Array<Restaurant>;
  isLoading: boolean;
};

const defaultProps: Props = {
  restaurants: [],
  isLoading: false,
};

const RestaurantList: React.FC<Props> = ({
  restaurants,
  isLoading,
}): JSX.Element => {
  const list = restaurants.map((item) => (
    <RestaurantSimpleCard key={item.id} data={item} />
  ));
  if (isLoading) return <div>loading</div>;
  return <>{list}</>;
};
RestaurantList.defaultProps = defaultProps;

export default RestaurantList;
