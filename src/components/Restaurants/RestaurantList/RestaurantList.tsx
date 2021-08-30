import { Restaurant } from "../../../model";
import RestaurantSimpleCard from "../RestaurantSimpleCard";
import RestaurantItemLoader from "../../Loader/RestaurantItemLoader";
import { createEmptyArray } from "../../../utils/utilityFunctions";
type Props = {
  restaurants: Array<Restaurant>;
  isLoading: boolean;
};

const defaultProps: Props = {
  restaurants: [],
  isLoading: false,
};

const loadersArr = createEmptyArray(10);
const RestaurantList: React.FC<Props> = ({
  restaurants,
  isLoading,
}): JSX.Element => {
  const list = restaurants.map((item) => (
    <RestaurantSimpleCard key={item.id} data={item} />
  ));

  const loader = loadersArr.map(() => <RestaurantItemLoader />);

  if (isLoading) return <div>{loader}</div>;
  return <>{list}</>;
};
RestaurantList.defaultProps = defaultProps;

export default RestaurantList;
