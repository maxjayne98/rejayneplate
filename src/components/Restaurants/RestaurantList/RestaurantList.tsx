import { Restaurant } from "../../../model";
import RestaurantSimpleCard from "../RestaurantSimpleCard";
import RestaurantItemLoader from "../../Loader/RestaurantItemLoader";
import { createEmptyArray } from "../../../utils/utilityFunctions";
import { Error } from "../../Lottie";

type Props = {
  restaurants: Array<Restaurant>;
  isLoading: boolean;
  hasError: boolean;
  loadMoreRef: any;
};

const defaultProps: Props = {
  restaurants: [],
  isLoading: false,
  hasError: false,
  loadMoreRef: undefined,
};

const loadersArr = createEmptyArray(10);
const RestaurantList: React.FC<Props> = ({
  restaurants,
  isLoading,
  hasError,
  loadMoreRef,
}): JSX.Element => {
  const list = restaurants.map((item, index) => (
    <RestaurantSimpleCard key={index} data={item} />
  ));

  const loader = loadersArr.map(() => <RestaurantItemLoader />);
  if (hasError) return <Error />;
  return (
    <>
      {list}
      {isLoading && loader}
      <div id="loadMore" ref={loadMoreRef}></div>
    </>
  );
};
RestaurantList.defaultProps = defaultProps;

export default RestaurantList;
