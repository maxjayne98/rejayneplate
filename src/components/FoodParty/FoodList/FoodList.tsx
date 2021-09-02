import React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  selectFoodPartyEndTime,
  selectFoodPartyendTimeLoadingStatus,
} from "../../../redux/foodParty/selector";
import Timer from "../Timer";
import useCountDown from "../../../hooks/useCountDown";
interface Props {}

const FoodList = (props: Props) => {
  const foodPartyEndTime = useAppSelector(selectFoodPartyEndTime);
  const foodPartyEndTimeLoadingStatus = useAppSelector(
    selectFoodPartyendTimeLoadingStatus
  );
  const { hour, minute, second, isFinished } = useCountDown(foodPartyEndTime);

  return (
    <div>
      {foodPartyEndTimeLoadingStatus ? (
        <div style={{ color: "green" }}>Timer is Loading ...</div>
      ) : (
        <Timer
          hour={hour}
          minute={minute}
          second={second}
          isFinished={isFinished}
        />
      )}
    </div>
  );
};
export default FoodList;
