import { Restaurant } from "../../../model";
import RestaurantSimpleCard from "../RestaurantSimpleCard";
import RestaurantItemLoader from "../../Loader/RestaurantItemLoader";
import { createEmptyArray } from "../../../utils/utilityFunctions";
import { Error } from "../../Lottie";

type Props = {
  restaurants: Array<Restaurant>;
  isLoading: boolean;
  hasError: boolean;
};

const defaultProps: Props = {
  restaurants: [],
  isLoading: false,
  hasError: false,
};

const loadersArr = createEmptyArray(10);
const RestaurantList: React.FC<Props> = ({
  restaurants,
  isLoading,
  hasError,
}): JSX.Element => {
  const list = restaurants.map((item) => (
    <RestaurantSimpleCard key={item.id} data={item} />
  ));

  const loader = loadersArr.map(() => <RestaurantItemLoader />);
  if (hasError) return <Error />;
  if (isLoading) return <div>{loader}</div>;
  return <>{list}</>;
};
RestaurantList.defaultProps = defaultProps;

export default RestaurantList;
