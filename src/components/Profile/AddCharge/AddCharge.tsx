import React from "react";
import { useState } from "react";
import { AddChargeBtn } from "./Elements";
import ChargeModal from "../../Modals/ChargeModal";

interface Props {}

const AddCharge: React.FC<Props> = (props) => {
  const addChargeButtonOnClick = () => {
    setPopupState((value) => !value);
  };
  const [popupState, setPopupState] = useState(false);

  return (
    <div>
      <AddChargeBtn onClick={() => addChargeButtonOnClick()}>
        افزودن شارژ
      </AddChargeBtn>
      {popupState && <ChargeModal onClose={addChargeButtonOnClick} />}
    </div>
  );
};

export default AddCharge;
