import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAnimated from "../../CustomAnimated";
import {
  BackDrop,
  ModalContentContainer,
  ChargeInput,
  ChargeSubmitButton,
  ChargeTitle,
} from "./Elements";

import { addThousandSeparator, removeComma } from "../../../utils";

type Props = {
  onClose: Function;
};
const defaultProps = {
  onClose: () => ({}),
} as Props;

const ChargeModal: React.FC<Props> = ({ onClose }) => {
  const [mounted, setMonted] = useState<boolean>(false);
  const [chargeValue, setChargeValue] = useState<string>("");
  const animationOutDuration = 1000;

  function onOpen() {
    window.history.pushState({ modalState: "open" }, "?modal"); // not passing a title or URL
  }

  const backDropOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setMonted(false);
    setTimeout(() => onClose(), animationOutDuration);
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = removeComma(e.target.value);
    setChargeValue(addThousandSeparator(value));
  };

  const contentOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setMonted(true);
    onOpen();
    window.onpopstate = function (event) {
      setMonted(false);
      setTimeout(() => onClose(), animationOutDuration);
    };
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return ReactDOM.createPortal(
    <BackDrop onClick={(e) => backDropOnClick(e)}>
      <CustomAnimated
        isVisible={mounted}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <ModalContentContainer onClick={contentOnClick}>
          <ChargeTitle>افزایش اعتبار</ChargeTitle>
          <ChargeInput
            value={chargeValue}
            onChange={(e) => inputOnChange(e)}
            type="text"
            pattern="[0-9]"
          ></ChargeInput>
          <ChargeSubmitButton
            onClick={() => {
              console.log("man salemam");
            }}
          >
            ثبت
          </ChargeSubmitButton>
        </ModalContentContainer>
      </CustomAnimated>
    </BackDrop>,
    document.getElementById("rejayne_modal") as HTMLElement
  );
};

ChargeModal.defaultProps = defaultProps;

export default ChargeModal;
